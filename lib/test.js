const knexConfig = require('./knexfile');
const knex = require('knex')(knexConfig[ENV]);


function getPoints(questionID) {
    query = `SELECT
      SUM(v.point) as points,
      o.option
      FROM vote as v
      LEFT JOIN option as o ON v.option_id = o.id
      WHERE v.question_id = '${questionID}'
      GROUP BY o.option
      ORDER BY points DESC
    `
    return new Promise( (resolve, reject) => {
      knex.raw(query)
        .then( (result) => {
          if(result) {
            return resolve(result.rows);
          }
        })
        .catch( (error) => reject(error));
    })
  }
  console.log(getPoints(1));