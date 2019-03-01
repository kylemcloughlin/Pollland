module.exports = function(knex) {

  function generateRandomString(length) {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  };

  function saveEmail(email) {
    return new Promise((resolve, reject) => {
      knex('voter')
        .insert({
          email: email,
          encrypted_id: generateRandomString(6)
        })
        .then( (rows) => {
          if(rows) {
            return resolve(rows);
          }
        })
        .catch((error) => reject(error));
    })

  };

  return {
    saveEmail: saveEmail

  }

}