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
app.get("/", (req, res) => {
    res.render('index');
});

app.post("/getEmail", (req, res) => {
    const email = req.body.email;

    poll.saveEmail(email)
        .then( (result) => {
            res.json(result); // redirect to create poll page
        })
});



// Create Poll



// Poll Confirm



// Rank Poll



// Poll Results




app.listen(PORT, () => {
  console.log('App listening on port ' + PORT);
});