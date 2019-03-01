
const secrets = require("./secrets");
console.log(secrets)
var api_key = secrets.apikey;
var domain = secrets.domain;

var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
 
var data = {
  from: 'kyle <kylemcloughlin1000@hotmail.ca>',
  to: 'kylemcloughlin@icloud.com',
  subject: 'Hello',
  text: 'Testing some Mailgun awesomeness!'
};
 
mailgun.messages().send(data, function (error, body) {
  if (error) {
      console.log(error);
  }
    console.log(body);
});