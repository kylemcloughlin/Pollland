var app = {};
console.log("js file opened");
const numberOfOptions = 5;
const data = {
    "1": {
        id: "1",
        text: "Pizza",
    },
    "2": {
        id: "2",
        text: "Sushi",
    },
    "3": {
        id: "3",
        text: "Burito",
    },
    "4": {
        id: "4",
        text: "Raveoli",
    },
    "5": {
        id: "5",
        text: "Spaghetti",
    },
}
var createOptions = function(data) {
    // const {
    //     id,
    //     text
    // } = data;
    //console.log("create options called");
    for (var x = 1; x < numberOfOptions + 1; x++) {
        var li = $('<li>' + data[x].text + '</li>');
        var rank = $('<li>' + data[x].id + '</li>');
        $('ul.wishlist').append(li);
        $('.rank').append(rank);
    }
    //console.log(obj);
    // return listContainer;
}
// var renderOptions = function(data) {
//     $('.itemList').append(createOptions(data));
// }
app.init = function() {
    // sortable option//
    $('ul.wishlist').sortable({
        connectWith: ".connected",
        cursorAt: {top: 0, left: 20}
    });
    // nextInput: for (var k = 0; k < arr1.length; k++) {
    //     var str = arr1[k];
    //     for (var l = 0; l < result.length; l++) {
    //         if (result[l] == str) continue nextInput;
    //     }
    //     result.push(str);
    // }
    var resultBtn = document.getElementById('seeResult');
    resultBtn.onclick = function() {
      console.log("clicked");
        // $.post("/poll/pollID/result");
        window.location.href = "/poll/pollID/results";
    }

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