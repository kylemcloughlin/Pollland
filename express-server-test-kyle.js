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

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs");




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
    res.redirect('/poll/create')
    });




// Create Poll
app.get('/poll/create/', (req, res) => {
    let ty = poll.getPoints(1);
    
    console.log('getPoints', ty);
    let voterID = req.params.voterID;

    poll.getVoterBy('id', voterID)
        .then( (result) => {
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
    var data = {
                  from: 'kyle <kylemcloughlin1000@hotmail.ca>',
                  to: `${req.body.poll_email}`,
                  subject: 'Hello',
                  text: 'Testing some Mailgun awesomeness!'
                };
                mailgun.messages().send(data, function (error, body) {
                  if (error) {
                    console.log(error);
                  }
                });
    
    
    res.redirect('/poll/create/confirm')
});
//creat post

app.get("/poll/create/confirm",(req, res)=> {
    console.log("/poll/create/confirm");
    res.render("confimationpage")
})


// Poll Confirm

    
    
    // Rank Poll
    // app.get("/poll/:pollID", (req, res) => {
        //     res.render('rank');
        // });
        // app.post("/poll/:pollID/rank", (req,res) => {
            //     let tempArr = req.body.array;
            //     const resultArr = tempArr.reverse();
            //     // console.log(resultArr);
            
            // });
            
            
            
            // Poll Results
            // app.get('/poll/:questionID/result', (req, res) => {
                //     let questionID = req.params.questionID;
                
                //     poll.getPoints(questionID)
                //         .then( (result) => {
                    //             res.json(result)
                    //         })
                    //     res.render('results')
                    // })
                    
                    app.get("/poll/results", (req, res) => {
                        console.log('/poll/result')
                        // let questionID = req.params.questionID;
                        
                        poll.getPoints(1)
                                .then( (result) => {
                                    return res.json(result);
                                    })
                      
                            res.render('results');
                        })
                        
                        
                        
                        app.listen(PORT, () => {
                            console.log('App listening on port ' + PORT);
                        });
                                    
                        
                        