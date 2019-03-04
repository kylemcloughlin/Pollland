const PORT = 8080;
const express = require('express');
const ENV = 'development';
const bodyParser = require("body-parser");
const mailGun = require("./jScript/mailGun.js");
const knexConfig = require('./knexfile');
const knex = require('knex')(knexConfig[ENV]);
const poll = require('./lib/poll')(knex);
<<<<<<< HEAD
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



=======
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
>>>>>>> b0226acc5141a4fddbec7ca1e07f8fcd7bb300a5
app.get('/', (req, res) => {
    res.render('index');
});
app.post('/getEmail', (req, res) => {
    const email = req.body.email;
    if (email === "") {
        res.redirect("/");
    }
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
    res.redirect("/poll/create");
})
// HomePage
// // Create Poll
// app.get('/create/:voterID', (req, res) => {
//     let voterID = req.params.voterID;
<<<<<<< HEAD

=======
>>>>>>> b0226acc5141a4fddbec7ca1e07f8fcd7bb300a5
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
<<<<<<< HEAD

    console.log('getPoints', ty);
    let voterID = req.params.voterID;

    poll.getVoterBy('id', voterID)
        .then((result) => {
            let voterRow = result;
            res.json(voterRow);
        })
    res.render('create');
});



=======
    console.log('getPoints', ty);
    let voterID = req.params.voterID;
    poll.getVoterBy('id', voterID).then((result) => {
        let voterRow = result;
        res.json(voterRow);
    })
    res.render('create');
});
>>>>>>> b0226acc5141a4fddbec7ca1e07f8fcd7bb300a5
// Poll Confirm
app.post("/poll/create", (req, res) => {
    console.log(req.body);
    // let ID = req.params.questionID;
    // let table = { /* id: 1, */ question: req.body.poll,  creator_id: 1 };
    // let valueObj = [{ question_id: ID, option: req.body.option1 }, {question_id: ID, option: req.body.option2 }, {question_id: ID, option: req.body.option3 }, {question_id: ID, option: req.body.option4 }];
    // poll.insertToDatabase(table, valueObj)
    // .then( () => {
<<<<<<< HEAD

    // mailGun.sendTheMail(creatoremail, `check this link: <a href='${link that leads to results}'>link</a>`);
    // mailGun.sendTheMail(listOfEmails, `check this link: <a href='${link that leads ranking}'>link</a>`);
    // redirect('confirm');
});

app.get("/poll/create/confirm", (req, res) => {
    console.log("/poll/create/confirm");
    res.render("confimationpage")
})

=======
    // })
    const question_id = req.body.questionID;
    //send to creator
    // mailGun.sendTheMail("laviionas772@gmail.com", `check this link: <a href="http://localhost:8080/poll/${}">link</a> and <a href="http://localhost:8080/poll/${}/result">link</a>`);
    //send to friends
    // mailGun.sendTheMail("laviionas772@gmail.com", `check this link: <a href="http://localhost:8080/poll/${}">link</a>`);
    res.redirect('/poll/create/confirm')
});
>>>>>>> b0226acc5141a4fddbec7ca1e07f8fcd7bb300a5
// Rank Poll
// app.get("/poll/:pollID", (req, res) => {
//     res.render('rank');
// });
// app.post("/poll/:pollID/rank", (req, res) => {
//     let tempArr = req.body.array;
//     const resultArr = tempArr.reverse();
//     console.log(resultArr);
<<<<<<< HEAD

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
=======
// });
app.get("/poll/:questionID/", (req, res) => {
    let ID = req.params.questionID;
    poll.getPoints(1).then((result) => {
        res.send(res.json(result));
    })
    // res.send(res.json(data));
})
app.get('/poll/:questionID/result', (req, res) => {
    let questionID = req.params.questionID;
    poll.getPoints(questionID).then((result) => {
        res.json(result)
    })
    res.render('results')
>>>>>>> b0226acc5141a4fddbec7ca1e07f8fcd7bb300a5
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
app.get("/poll/:pollID/:voterID", (req, res) => {

<<<<<<< HEAD

=======
    res.render('rank');
});
app.post("/poll/:pollID/:voterID/rank", (req, res) => {
    let tempArr = req.body.array;
    const resultArr = tempArr.reverse();
    console.log(resultArr);
});
app.get("/poll/:pollID/results", (req, res) => {
    console.log('/poll/result')
    // let questionID = req.params.questionID;
    poll.getPoints(1).then((result) => {
        return res.json(result);
    })
    res.render('results');
})
// Poll Results
>>>>>>> b0226acc5141a4fddbec7ca1e07f8fcd7bb300a5
app.listen(PORT, () => {
    console.log('App listening on port ' + PORT);
});
// =======
//     let questionID = 'hit';
//     poll.getPoints(1)
//     .then( (result) => {
//          res.send(res.json(result));
//         })
// res.render('results');
// })