const PORT = 8080;
const express = require('express');
const bodyParser = require("body-parser");

const knex = require('knex')(knexConfig);

const poll = require('/function_files')(knex);

const app = express();

app.set('view engine', 'ejs');


/*
 * MIDDLEWARE
 */





/*
 * ROUTES d
 */

// HomePage



// Create Poll



// Poll Confirm



// Rank Poll



// Poll Results




app.listen(PORT, () => {
  console.log('App listening on port ' + PORT);
});