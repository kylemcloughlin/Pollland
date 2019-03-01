const secrets = require("./jScript/secrets")
console.log(secrets)
var api_key = secrets.apikey;
var domain = secrets.domain;
const express = require('express');
const app = express();
const PORT = 8080;
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});



//making a change to the branch

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs");
// app.get()

//Function for generating a random string of letters and numbers
function generateRandomString(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

/*
--------INDEX---------
*/
//set logo href to send to '/'
//set email input to name = 'email'
//set submit value to '/submit'

app.get("/", (req, res) => {
    res.render('index');
});

app.post("/", (req, res) => {
    //Set form action = "/"
    //Set input name = "email"
    const email = req.body.email;
});
// app.get("/submit", (req, res) => {
//     redirect("/poll/create");
// });
// /*
// --------CREATE---------
// */
//set logo href to send to '/'
//set question input to 'pollQ'
//set friends list input to 'friends'
//set friends msg input to 'msg'
// //set form action to '/poll/create'
// //set submit button to 'create/submit'
// app.get("/poll/create", (req, res) => {
//     const pollQuestion = req.body.pollQ;
//     //variable for options (solve iteration problem considering multiple inputs can be generated)
//     const friendsString = req.body.friends; //seperate string by emails with spaces and slap into an array
//     const friendsList = [];
//     const friendsMsg = req.body.msg;
//     let tempVar = {
//         question: pollQuestion,
//         //options
//         friendsList: friendsList,
//         message: friendsMsg
//     }
//     res.render('create');
// });

app.post("create/submit", (req, res) => {
    //Error checking before submitting
    redirect('confirm');
});
/*
--------CONFIRM---------
*/


//set submit button with input '/poll/:pollID/confirm'
// app.get("/poll/:pollID", (req, res) => {
//     res.render('rank');
// });
// app.get("/poll/:pollID/confirm", (req, res) => {
//     alert("data submitted");
// });
// app.get("/poll/:pollID/result", (req, res) => {
//     //logic to check if user has access to the results
//     if (true) {
//         res.redirect('result');
//     } else {
//         alert("You do not have acess to the resutls");
//     }
// });





// kylemcloughlin@icloud.com test email associated with account


app.post("/poll/create", (req, res) => {
 console.log(req.body);
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

app.get("/poll/create/confirm",(req, res)=> {
console.log("/poll/create/confirm");
  res.render("confimationpage")
})

app.get("/poll/create", (req, res) => {
  console.log('/poll/create/GET')

   res.render('create');
 });//renders the create a poll page

app.get("/poll/results", (req, res) => {

  console.log('/poll/result')

res.render('results') 
})



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});


// knex('polldb')
//   .insert([{ polloption: req.body.poll ,
//                op1 : req.body.polloption_1,
//             op1dis : req.body.polloption_1_discription
//             op2 : req.body.polloption_2


//           }]).finally(() => {
//     knex.destroy();
//   })

// { poll: 'polltopic',
// polloption_1: 'option1',
// polloption_1_discription: 'discription1',
// polloption_2: 'option2',
// polloption_2_discription: 'dis2',
// polloption_3: 'opt3',
// polloption_3_discription: 'discription3',
// polloption_4: 'op4',
// polloption_4__discription: 'dis4',
// poll_email: 'kylemcloughlin@icloud.com' }