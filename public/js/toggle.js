$(document).ready(function () {
    $("#discription1").toggle();
    $("#discription2").toggle();
    $("#discription3").toggle();
    $("#discription4").toggle();
    
    $("#disBut1").click(function () {
        $("#discription1").slideDown();
        $("#disBut1").slideUp();
        var input = document.getElementById('discription');
        input.select();
        
    });
    $("#disBut2").click(function () {
        $("#discription2").slideDown();
        $("#disBut2").slideUp();
        var input = document.getElementById('discription');
        input.select();
        
    });
    $("#disBut3").click(function () {
        $("#discription3").slideDown();
        $("#disBut3").slideUp();
        var input = document.getElementById('discription');
        input.select();
        
    });
    $("#disBut4").click(function () {
        $("#discription4").slideDown();
        $("#disBut4").slideUp();
        var input = document.getElementById('discription');
        input.select();

    });
    




});