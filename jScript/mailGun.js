const secrets = require("./secrets");
var email = secrets.email;
var pass = secrets.pass;
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: email,
        pass: pass
    }
});
// // const recipients = ["laviionas772@gmail.com", "lavi.ionas@gmail.com"];
// module.exports = function() {
//     function sendTheMail(recipients) {
//         const mailOptions = {
//             from: 'lavi.ionas@gmail.com', // sender address
//             to: recipients, // list of receivers
//             subject: 'Subject of your email', // Subject line
//             html: '<p>Your html here</p>' // plain text body
//         };
//         transporter.sendMail(mailOptions, function(err, info) {
//             if (err) console.log(err)
//             else console.log(info);
//         });
//     }
//     return {
//       sendTheMail: sendTheMail
//     }
// }


module.exports = {
  sendTheMail: function (recipients, text) {
        const mailOptions = {
            from: 'lavi.ionas@gmail.com', // sender address
            to: recipients, // list of receivers
            subject: 'Subject of your email', // Subject line
            html: text // plain text body
        };
        transporter.sendMail(mailOptions, function(err, info) {
            if (err) console.log(err)
            else console.log(info);
        });
    }
}