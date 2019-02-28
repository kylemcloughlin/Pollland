const secrets = require("./jScript/secrets")
console.log(secrets)
var api_key = secrets.apikey;
var domain = secrets.domain;
const express = require('express');
const app = express();
const PORT = 8080;
const bodyParser = require("body-parser");
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});




app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs");





app.get("/", (req, res) => {
  res.render('index');
});


// kylemcloughlin@icloud.com

app.post("/poll/create", (req, res) => {
  // var data = {
  //   from: 'kyle <kylemcloughlin1000@hotmail.ca>',
  //   to: `${req.body.poll_email}`,
  //   subject: 'Hello',
  //   text: 'Testing some Mailgun awesomeness!'
  // };
  // mailgun.messages().send(data, function (error, body) {
  //   if (error) {
  //       console.log(error);
  //   }
  // });


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