const $ = require('jquery');
const express = require('express');
const app = express();
const PORT = 8080;
const bodyParser = require("body-parser");





app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static( 'public'));
app.set("view engine", "ejs");





app.get("/", (req, res) => {
  res.render('index');
});




app.post("/poll/create", (req, res) => {
  // res.sendFile(path.join(__dirname + '/js/toggle.js'));
  console.log(req.body);
// knex('polldb')
//   .insert([{ polloption: req.body.poll ,
//                op1 : req.body.polloption_1,
//             op1dis : req.body.polloption_1_discription
//             op2 : req.body.polloption_2
  
  
//           }]).finally(() => {
//     knex.destroy();
//   })

res.redirect('/poll/create')
});



app.get("/poll/create", (req, res) => {
  console.log('/poll/create/GET')
  
   res.render('create');
 });//renders the create a poll page



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});


