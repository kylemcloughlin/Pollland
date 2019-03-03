var app = {};
console.log("js file opened");


// const numberOfOptions = 5;

const optionsArr = tempVar.optionArr;

//Take in an array that will be displayed
// const optionsArr = getOptions(url.params.questionID);



var createOptions = function(optionsArr) {
    for (var x = 0; x < optionsArr.length; x++) {
        var li = $('<li>' + optionsArr[x] + '</li>');
        var rank = $('<li>' + (x+1) + '</li>');
        $('ul.wishlist').append(li);
        $('.rank').append(rank);
    }

}

app.init = function() {
    // sortable option//
    $('ul.wishlist').sortable({
        connectWith: ".connected",
        cursorAt: {top: 0, left: 20}
    });

    var btn = document.getElementById('makeNewArray')
    btn.onclick = function() {
        var arrLi1 = ul1.getElementsByTagName('li');
        var arr1 = [];
        for (var i = 0; i < arrLi1.length; i++) {
            arr1.push(arrLi1[i].innerHTML);
        }
        alert("submitted");
        $.post("/poll/pollID/voterID/rank", {array: arr1});
    };
};
$(function() {
    app.init();
});
$(document).ready(() => {
    // renderOptions(data);
    createOptions(optionsArr);
});