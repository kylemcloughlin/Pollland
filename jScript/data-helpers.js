const settings = require("../settings");
const options = {
    client: 'pg',
    connection: {
        host: settings.hostname,
        user: settings.user,
        password: settings.password,
        database: settings.database,
    }
};
const knex = require('knex')(options);



let table = 'voter';
let selector = 'email';
let whereObj = {
  email: 'weihan.sw@gmail.com'
};

knex
.select(selector)
.from(table)
.where(whereObj)
.limit(10)
.then((result) => {result.forEach( function(element, index) {
  console.log(element[selector])
  });
})
.finally(() => {knex.destroy()})

