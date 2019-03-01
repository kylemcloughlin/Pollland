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

    // poll.saveEmail(email)
    //     .then( () => {
    //         poll.getVoterBy('email', email)
    //             .then((result) => {
    //                 // obj with voter filter by email
    //                 let voterRow = result;
    //                 // redirect to create poll
    //                 res.json(voterRow);
    //             })
    //     })
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



// Rank Poll



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