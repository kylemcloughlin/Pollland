const PORT = 8080;
const express = require('express');
const ENV = 'development';
const bodyParser = require("body-parser");
const mailGun = require("./jScript/mailGun.js");
const knexConfig = require('./knexfile');
const knex = require('knex')(knexConfig[ENV]);
const poll = require('./lib/poll')(knex);
const cookieParser = require('cookie-parser')
const app = express();








function seeCookies (req, res, next) {
    console.log("cookies running:", req.headers.cookie);
    next();
};

app.use(seeCookies);
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.use(cookieParser('randomstring'));
app.use(bodyParser.urlencoded({
    extended: true
}));



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
        .then(() => {
            poll.getVoterBy('email', email)
                .then((result) => {
                    // obj with voter filter by email
                    let voterRow = result;
                    // redirect to create poll
                    res.json(voterRow);
                })
        })
});

// HomePage



// // Create Poll
// app.get('/create/:voterID', (req, res) => {
//     let voterID = req.params.voterID;

//     poll.getVoterBy('id', voterID)
//     .then((result) => {
//         let voterRow = result;
//         res.json(voterRow);
//     })
// });

// let table;
// let valueObj;
// poll.insertToDatabase(table, valueObj)
// .then(() => {
//     res.redirect()
// })
// })

app.get('/poll/create/', (req, res) => {
    let ty = poll.getPoints(1);

    console.log('getPoints', ty);
    let voterID = req.params.voterID;

    poll.getVoterBy('id', voterID)
        .then((result) => {
            let voterRow = result;
            res.json(voterRow);
        })
    res.render('create');
});



// Poll Confirm
app.post("/poll/create", (req, res) => {
    console.log(req.body);
    // let ID = req.params.questionID;
    // let table = { /* id: 1, */ question: req.body.poll,  creator_id: 1 };
    // let valueObj = [{ question_id: ID, option: req.body.option1 }, {question_id: ID, option: req.body.option2 }, {question_id: ID, option: req.body.option3 }, {question_id: ID, option: req.body.option4 }];
    // poll.insertToDatabase(table, valueObj)
    // .then( () => {

    // mailGun.sendTheMail(creatoremail, `check this link: <a href='${link that leads to results}'>link</a>`);
    // mailGun.sendTheMail(listOfEmails, `check this link: <a href='${link that leads ranking}'>link</a>`);
    // redirect('confirm');
});

app.get("/poll/create/confirm", (req, res) => {
    console.log("/poll/create/confirm");
    res.render("confimationpage")
})

// Rank Poll
// app.get("/poll/:pollID", (req, res) => {
//     res.render('rank');
// });
// app.post("/poll/:pollID/rank", (req, res) => {
//     let tempArr = req.body.array;
//     const resultArr = tempArr.reverse();
//     console.log(resultArr);

// });
// res.send(res.json(data));

app.get("/poll/:questionID", (req, res) => {
    let ID = req.cookies.questionID;
 
    poll.getPoints(ID)
        .then((result) => {
            res.json(result);
        })
        
        
    })
    app.get("/poll/:questionID/result", (req, res) => {
        let ID = req.params.questionID;
        res.cookie("questionID", ID, { maxAge: 30000});
        console.log("no render", ID)
        poll.getPoints(1)
        .then((result) => {
            res.json(result);
        })
        
        res.render('results')
})


app.listen(PORT, () => {
    console.log('App listening on port ' + PORT);
});