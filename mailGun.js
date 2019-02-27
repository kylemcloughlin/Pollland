var api_key = '608086abdbbaf6cb1085b6ad270aca25-7caa9475-3bf2dfaf';
var domain = 'sandboxdf1dbc52e847493bb4a76347aae74c44.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
 
var data = {
  from: 'kyle <kylemcloughlin1000@hotmail.ca>',
  to: 'kylemcloughlin00@gmail.com',
  subject: 'Hello',
  text: 'Testing some Mailgun awesomeness!'
};
 
mailgun.messages().send(data, function (error, body) {
  if (error) {
      console.log(error);
  }
    console.log(body);
});