


        $(document).ready(function () {
    $('#pieChart').toggle();
    $('#polarChart').toggle();
    $('#radarChart').toggle();
    $('#doughnutChart').toggle();

    // $('#chart').toggle();


    $("#pieButton").click(function () {
        $("#pieChart").slideDown();
        $("#chart").slideUp();
        $('#radarChart').slideUp();
        $('#doughnutChart').slideUp();
        $("#polarChart").slideUp();
        $.ajax("/poll/:questionID/")
        .done((response) => {

         chartBuilder(response, 'pie',"pieChart", pieChart);
    })

    });
    // $("#barButton").click(function () {
    //     $("#chart").slideDown();
    //     $('#radarChart').slideUp();
    //     $("#pieChart").slideUp();
    //     $("#doughnutChart").slideUp();
    //     $("#polarChart").slideUp();
    //     $.ajax("/poll/:questionID/")
    //     .done((response) => {
    //             // console.log('GET RESPONSE', response);
    //          chartBuilder(response, 'bar','chart', barChart);
    //         })
    // });
    $("#doughnutButton").click(function () {
        $("#doughnutChart").slideDown();
        // $("#chart").slideUp();
        $("#pieChart").slideUp();
        $("#polarChart").slideUp();
        $('#radarChart').slideUp();
        $.ajax("/poll/:questionID/")
        .done((response) => {
        console.log('GET RESPONSE', response);
        chartBuilder(response, 'doughnut','doughnutChart', doughnutChart);
    })
    });
    $("#radarButton").click(function () {
        $("#radarChart").slideDown();
        // $("#chart").slideUp();
        $("#pieChart").slideUp();
        $("#doughnutChart").slideUp();
        $("#polarChart").slideUp();
        $.ajax("/poll/:questionID/")
        .done((response) => {
        console.log('GET RESPONSE', response);
        chartBuilder(response, 'radar','radarChart', radarChart);
    })
    })
    $("#polarButton").click(function () {
        $("#polarChart").slideDown();
        // $("#chart").slideUp();
        $("#pieChart").slideUp();
        $("#doughnutChart").slideUp();
        $("#radarChart").slideUp();
        $.ajax("/poll/:questionID/")
        .done((response) => {
        console.log('GET RESPONSE', response);
        chartBuilder(response, 'polarArea','polarChart', polarChart);
    })
    })
});

function chartBuilder(data, type, element, chartType) {
    let y = [];
    let x = [];
    let z = type
    for (tin of data){
    y.push(tin.option)
    x.push(tin.points);
    // let barChart = document.getElementById('chart').getContext('2d');
}   let polarChart = document.getElementById('polarChart').getContext('2d');
    let radarChart = document.getElementById('radarChart').getContext('2d');
    let doughnutChart = document.getElementById('doughnutChart').getContext('2d');


    let Charts = new Chart(chartType, {

        type: type,
        data: {
            labels: y,
            datasets: [{
                label: 'results',
                data: x,
                backgroundColor:[
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                ],
                borderwidth:1,
                borderColor: '#777',
                hoverBorderWidth: 2,
                hoverBorderColor: '#000'
                        }]

        },
        options: {
            responsive: false,
            maintainAspectRatio: false,
            },



        }






