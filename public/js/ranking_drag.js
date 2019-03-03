var app = {};
console.log("js file opened");


// const numberOfOptions = 5;

// const optionsArr = getOptions(url.params.questionID);



var createOptions = function(optionsArr) {
    for (var x = 1; x < optionsArr.length + 1; x++) {
        var li = $('<li>' + optionsArr[x].text + '</li>');
        var rank = $('<li>' + optionsArr[x].id + '</li>');
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
        $.post("/poll/pollID/rank", {array: arr1});
    };
};
$(function() {
    app.init();
});
$(document).ready(() => {
    // renderOptions(data);
    createOptions(data);
});