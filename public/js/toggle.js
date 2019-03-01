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


$(document).ready(function validation() {
    $('#error1').toggle();
    $('#error2').toggle();
    $('#error3').toggle();
    $('#subBut').click(function () {
        let x;
        let op1;
        let op2;
        let z;
        x = document.getElementById("pollTopic").value;
        console.log('x', x);
        if (x === "" || x === null) {
            $('#error1').slideDown();
            setTimeout(function () {
                $('#error1').slideUp();
            }, 3000);
            event.preventDefault();
            return false;
            // console.log('x', x);

        }
        z = document.getElementById("inputEmail").value;
        console.log('z', z);
        if (z === "" || z === null) {
            $('#error3').slideDown();
            setTimeout(function () {
                $('#error3').slideUp();
            }, 3000);

            event.preventDefault();
            return false;
        }
        op1 = document.getElementById("option1").value;
        op2 = document.getElementById("option2").value;
        console.log('op1', op1);
        console.log('op2', op2);
        if (op1 === "" || op1 === null || op2 === "" || op2 === null) {
            $('#error2').slideDown();
            setTimeout(function () {
                $('#error2').slideUp();
            }, 3000);

            event.preventDefault();
            return false;
        }

    });
});

