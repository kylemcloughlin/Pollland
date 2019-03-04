var createOptions = function(optionsArr) {
    for (var x = 0; x < optionsArr.length; x++) {
        var li = $('<li>' + optionsArr[x] + '</li>');
        var rank = $('<li>' + (x+1) + '</li>');
        $('ul.wishlist').append(li);
        $('.rank').append(rank);
    }

}

module.exports = {
    createOptions: createOptions
}