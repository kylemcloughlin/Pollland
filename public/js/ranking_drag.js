var app = {};

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

        let pollID = document.getElementById("pollID").innerHTML;
        let voterID = document.getElementById("voterID").innerHTML;

        alert("submitted");
        $.post("/poll/pollID/voterID/rank", {array: arr1, pollID: pollID, voterID: voterID});
    };
};
$(function() {
    app.init();
});
