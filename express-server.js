const express = require('express');
const app = express();
const PORT = 8080;
app.set("view engine", "ejs");
app.get()
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
});

//Function for generating a random string of letters and numbers
function generateRandomString(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

/*
--------INDEX---------
*/
//set logo href to send to '/'
//set email input to name = 'email'
//set submit value to '/submit'
app.get("/", (req, res) => {
    res.render('index');
});
app.post("/", (req, res) => {
    //Set form action = "/"
    //Set input name = "email"
    const email = req.body.email;
});
app.get("/submit", (req, res) => {
    redirect("/poll/create");
});
/*
--------CREATE---------
*/
//set logo href to send to '/'
//set question input to 'pollQ'
//set friends list input to 'friends'
//set friends msg input to 'msg'
//set form action to '/poll/create'
//set submit button to 'create/submit'
app.get("/poll/create", (req, res) => {
    const pollQuestion = req.body.pollQ;
    //variable for options (solve iteration problem considering multiple inputs can be generated)
    const friendsString = req.body.friends; //seperate string by emails with spaces and slap into an array
    const friendsList = [];
    const friendsMsg = req.body.msg;
    let tempVar = {
        question: pollQuestion,
        //options
        friendsList: friendsList,
        message: friendsMsg
    }
    res.render('create');
});
app.get("/poll/create/add", (req, res) => {
    //adds a new slot to add a new option option (or perhaps will be done in a .js file)
})
app.post("create/submit", (req, res) => {
    //Error checking before submitting
    redirect('confirm');
});
/*
--------CONFIRM---------
*/
app.get("/poll/create/confirm", (req, res) => {
    res.render('confirm');
});
/*
--------RANK---------
*/
//set submit button with input '/poll/:pollID/confirm'
app.get("/poll/:pollID", (req, res) => {
    res.render('rank');
});
app.get("/poll/:pollID/confirm", (req, res) => {
    alert("data submitted");
});
app.get("/poll/:pollID/result", (req, res) => {
    //logic to check if user has access to the results
    if (true) {
        res.redirect('result');
    } else {
        alert("You do not have acess to the resutls");
    }
});
/*
--------RESULT---------
*/
app.get("/poll/:pollID/results", (req,res) => {
  res.render('result');
});
/*
-----------------------
*/
