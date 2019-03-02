module.exports = function(knex) {

  function generateRandomString(length) {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  };

  function getVoterBy(field, value) {
    return new Promise( (resolve, reject) => {
      knex
        .select('*')
        .from('voter')
        .where( {[field]: value} )
        .limit(10)
        .then( (rows) => {
          if(rows) {
            return resolve(rows[0]);
          }
        })
        .catch( (error) => reject(error));
    })
  };

  function getOption(question_id) {
    return new Promise( (resolve, reject) => {
      knex
        .select('id, option')
        .from('option')
        .where( {question_id: questionID} )
        .limit(100)
        .then( (rows) => {
          if(rows) {
            return resolve(rows[0]);
          }
        })
        .catch( (error) => reject(error));
    })
  };

  function insertToDatabase(table, valueObj) {
    return new Promise( (resolve, reject) => {
      knex(table)
        .insert(valueObj)
        .then( (rows) => {
          if(rows) {
            return resolve(rows);
          }
        })
        .catch( (error) => reject(error));
    })
  };

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

  return {
    getVoterBy: getVoterBy,
    insertToDatabase: insertToDatabase,
    generateRandomString: generateRandomString,
    getPoints: getPoints,
    getOption: getOption

  }
}