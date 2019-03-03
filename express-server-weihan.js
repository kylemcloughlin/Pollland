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
                    res.json(voterRow);
                })
        })
});



// Create Poll
app.get('/create/:voterID', (req, res) => {
    let voterID = req.params.voterID;

    poll.getVoterBy('id', voterID)
        .then( (result) => {
            let voterRow = result;
            res.render('create')
        })
});

app.post('/pollcreate', (req, res) => {
    // let table;
    // let valueObj;
    console.log('emails: ', req.body.send_to)
    console.log('question: ', req.body.pollquestion)
    console.log('option: ', req.body.poll_opt)
    console.log('description: ', req.body.opt_des)
    poll.insertToDatabase(table, valueObj)
        .then( () => {
            res.send('OK')
        })
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