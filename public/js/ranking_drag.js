var app = {};
// const numberOfOptions = 4;
// const data = {
//     "1": {
//         id: "1",
//         text: "Pizza",
//     },
//     "2": {
//         id: "2",
//         text: "Sushi",
//     },
//     "3": {
//         id: "3",
//         text: "Burito",
//     },
//     "4": {
//         id: "4",
//         text: "Raveoli",
//     },
// }
// var createOptions = function(data) {


// }
app.addToList = function(itemName) {
    var li = $('<li>' + itemName + '</li>');
    $('ul.wishlist').append(li);
};
app.addHeading = function(headingName) {
    //add new item to heading class//
    var li = $('<li>' + headingName + '</li>').addClass('heading');
    $('ul.wishlist').append(li);
};
app.init = function() {
    $('form.item').on('submit', function(e) {
        // stop the form from refreshing the page
        e.preventDefault();
        // value from input//
        const inputItem = $('input[name="itemName"]').val();
        if ($('input.heading').is(':checked')) {
            app.addHeading(inputItem);
        } else {
            app.addToList(inputItem);
        }
        //clear the input window//
        $('input[name="itemName"]').val('');
    });
    // sortable option//
    $('ul.wishlist, ul.got').sortable({
        connectWith: ".connected"
    });
    //hide li on dbclick//
    $('ul.wishlist, ul.got').on('dblclick', 'li', function() {
        $(this).remove();
    });
    //Everything can be received exept new added li. Please advice//
}
$(function() {
    app.init();
});