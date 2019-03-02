const PORT = 8080;
const express = require('express');
const ENV = 'development';
const bodyParser = require("body-parser");
const mailGun = require("./jScript/mailGun.js");
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
app.get('/', (req, res) => {
    res.render('index');
});
app.post('/getEmail', (req, res) => {
    const email = req.body.email;
    valueObj = {
        email: email,
        encrypted_id: poll.generateRandomString(6)
    }
    poll.insertToDatabase('voter', valueObj).then(() => {
        poll.getVoterBy('email', email).then((result) => {
            // obj with voter filter by email
            let voterRow = result;
            // redirect to create poll
            res.json(voterRow);
        })
    })
});
// Create Poll
app.get('/poll/create/', (req, res) => {
    let ty = poll.getPoints(1);
    console.log('getPoints', ty);
    let voterID = req.params.voterID;
    poll.getVoterBy('id', voterID).then((result) => {
        let voterRow = result;
        res.json(voterRow);
    })
    res.render('create');
});
app.post("/poll/create", (req, res) => {
    // console.log(req.body);
    // let ID = req.params.questionID;
    // let table = { /* id: 1, */ question: req.body.poll,  creator_id: 1 };
    // let valueObj = [{ question_id: ID, option: req.body.option1 }, {question_id: ID, option: req.body.option2 }, {question_id: ID, option: req.body.option3 }, {question_id: ID, option: req.body.option4 }];
    // poll.insertToDatabase(table, valueObj)
    // .then( () => {
    // })
    mailGun.sendTheMail(creatoremail, `check this link: <a href='${link that leads to results}'>link</a>`);
    mailGun.sendTheMail(listOfEmails, `check this link: <a href='${link that leads ranking}'>link</a>`);
    res.redirect('/poll/create/confirm')
});
app.get("/poll/create/confirm", (req, res) => {
    console.log("/poll/create/confirm");
    res.render("confimationpage")
})
// Create Poll
app.get('/create/:voterID', (req, res) => {
    let voterID = req.params.voterID;
    // poll.getVoterBy('id', voterID)
    //     .then((result) => {
    //         let voterRow = result;
    //         res.json(voterRow);
    // })
    poll.getVoterBy('id', voterID).then((result) => {
        let voterRow = result;
        res.render('create')
    })
});
app.get('/poll/:questionID/result', (req, res) => {
    let questionID = req.params.questionID;
    poll.getPoints(questionID).then((result) => {
        res.json(result)
    })
    res.render('results')
})
app.post('/HERE_YOUR_POST_FORM', (req, res) => {
    let table;
    let valueObj;
    poll.insertToDatabase(table, valueObj).then(() => {
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
app.post("/poll/:pollID/rank", (req, res) => {
    let tempArr = req.body.array;
    const resultArr = tempArr.reverse();
    console.log(resultArr);
});
/*
s
s
ss
s
s
s
s
s
ss
s
*/
app.get("/poll/results", (req, res) => {
    console.log('/poll/result')
    // let questionID = req.params.questionID;
    poll.getPoints(1).then((result) => {
        return res.json(result);
    })
    res.render('results');
})
/*
s
s
ss
s
s
s
s
s
ss
s
*/
app.get("/poll/:pollID/results", (req, res) => {
            //logic to check if user has access to the results
            console.log("im in");
            if (true) {
                var tempArr = {
                    array: resultArr,
                }
                res.render(`results`, tempArr);
            } else {
                //     console.log("You do not have acess to the resutls");
                // }
            });
        // Poll Results
        app.listen(PORT, () => {
            console.log('App listening on port ' + PORT);
        });