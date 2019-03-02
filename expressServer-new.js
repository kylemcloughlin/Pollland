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
app.get("/poll/data/1", (req, res) => {
    poll.getPoints(1)
    .then( (result) => {
         res.send(res.json(result));
        })
       
    // res.send(res.json(data));
})

app.get("/poll/result", (req, res) => {
    console.log('/poll/result')
    // let questionID = req.params.questionID;
    
    poll.getPoints(1)
            .then( (result) => {
                 res.send(json(result));
                })
                    
        res.render('results');
});
    


/*
* ROUTES
*/

// app.get('/poll/result', (req, res) => {
//     let questionID = req.params.questionID;

//     poll.getPoints(questionID)
//         .then( (result) => {
//             res.json(result)
//         })
// // res.render('results')
// })
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
            res.json(voterRow);
        })
});

app.post('/HERE_YOUR_POST_FORM', (req, res) => {
    let table;
    let valueObj;
    poll.insertToDatabase(table, valueObj)
        .then( () => {
            res.redirect()
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
// app.get("/poll/results", (req, res) => {
//     //logic to check if user has access to the results
//     console.log("im in");
//     if (true) {
//         var tempArr = {
//           array: resultArr,
//         }
//         res.render(`results`, tempArr);
//     } else {
//         console.log("You do not have acess to the resutls");
//     }
// });


// Poll Results




app.listen(PORT, () => {
  console.log('App listening on port ' + PORT);
});