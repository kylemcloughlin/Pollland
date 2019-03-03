const PORT = 8080;
const express = require('express');
const ENV = 'development';
const bodyParser = require("body-parser");

const knexConfig = require('./knexfile');
const knex = require('knex')(knexConfig[ENV]);
const poll = require('./lib/poll')(knex);

const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));


app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');


/*
 * MIDDLEWARE
 */





/*
 * ROUTES
 */

// HomePage
app.get('/', (req, res) => {
    res.render('index');
});

app.post('/getEmail', (req, res) => {
    const email = req.body.email;

    valueObj = {
        email: email,
        encrypted_id: poll.generateRandomString(6)
    }
    poll.insertToDatabase('voter', valueObj)
        .then( () => {
            poll.getVoterBy('email', email)
                .then((result) => {
                    // obj with voter filter by email
                    let voterRow = result;
                    // redirect to create poll
                    res.redirect('/create/' + voterRow.id)
                })
        })
});



// Create Poll
app.get('/create/:creatorID', (req, res) => {
    let creatorID = req.params.creatorID;

    poll.getVoterBy('id', creatorID)
        .then( (result) => {
            let voterRow = result;
            res.render('create', {email: voterRow.email, creatorID: creatorID})
        })
});

app.post('/pollcreate/:creatorID', (req, res) => {

    let creatorID = req.params.creatorID;
    let friendEmail = req.body.send_to;
    let question = req.body.pollquestion;
    let options = req.body.poll_opt;
    let desc = req.body.opt_des;



    // insert friends into voter's table
    let insertVoter = [];
    friendEmail.forEach( function(email) {
        insertVoter.push({
            email: email,
            encrypted_id: poll.generateRandomString(6)
        })
    });
    poll.insertToDatabase('voter', insertVoter);

    poll.insertToDatabase('question', {question: question, creator_id: creatorID})
        .then(() => {
            poll.query('id', 'question', {question: question, creator_id: creatorID})
                .then( (res_questionID) => {
                    let insertOption = [];
                    options.forEach( function(option, index) {
                        insertOption.push({
                        question_id: res_questionID,
                        option: option,
                        description: desc[index]
                        });
                        console.log(options);
                        // poll.insertToDatabase('option', insertOption);
                    });
                })
        })

    res.send('OK')

})


// Poll Confirm
app.post("create/submit", (req, res) => {
    //Error checking before submitting
    redirect('confirm');
});


// Rank Poll
app.get("/poll/:pollID", (req, res) => {
    res.render('rank');
});
app.post("/poll/:pollID/rank", (req,res) => {
    let tempArr = req.body.array;
    const resultArr = tempArr.reverse();
    console.log(resultArr);

});
app.get("/poll/:pollID/results", (req, res) => {
    //logic to check if user has access to the results
    console.log("im in");
    if (true) {
        var tempArr = {
          array: resultArr,
        }
        res.render(`results`, tempArr);
    } else {
        console.log("You do not have acess to the resutls");
    }
});


// Poll Results
app.get('/poll/:questionID/result', (req, res) => {
    let questionID = req.params.questionID;

    poll.getPoints(questionID)
        .then( (result) => {
            res.json(result)
        })
})




app.listen(PORT, () => {
  console.log('App listening on port ' + PORT);
});