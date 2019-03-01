$(document).ready(function () {
    $('#pieChart').toggle();
    $('#polarChart').toggle();
    $('#radarChart').toggle();
    $('#doughnutChart').toggle();
    let barChart = document.getElementById('chart').getContext('2d');
    let Chart1 = new Chart(barChart, {
        type: 'bar',
        data: {
            labels: ['a', 'b', 'c', 'd'],
            datasets: [{
                label: 'results',
                data: [3,
                    7,
                    4,
                    1

                ]
            }]

        },
        options: {}



    });
    let pieChart = document.getElementById('pieChart').getContext('2d');
    let Chart2 = new Chart(pieChart, {
        type: 'pie',
        data: {
            labels: ['a', 'b', 'c', 'd'],
            datasets: [{
                label: 'results',
                data: [3,
                    7,
                    4,
                    1

                ]
            }]

        },
        options: {}



    });
    let doughnutChart = document.getElementById('doughnutChart').getContext('2d');
    let Chart3 = new Chart(doughnutChart, {
        type: 'doughnut',
        data: {
            labels: ['a', 'b', 'c', 'd'],
            datasets: [{
                label: 'results',
                data: [3,
                    7,
                    4,
                    1

                ]
            }]

        },
        options: {}



    });
    let radarChart = document.getElementById('radarChart').getContext('2d');
    let Chart4 = new Chart(radarChart, {
        type: 'radar',
        data: {
            labels: ['a', 'b', 'c', 'd'],
            datasets: [{
                label: 'results',
                data: [3,
                    7,
                    4,
                    1

                ]
            }]

        },
        options: {}



    });
    let polarChart = document.getElementById('polarChart').getContext('2d');
    let Chart5 = new Chart(polarChart, {
        type: 'polarArea',
        data: {
            labels: ['a', 'b', 'c', 'd'],
            datasets: [{
                label: 'results',
                data: [3,
                    7,
                    4,
                    1

                ]
            }]

        },
        options: {}



    });
    $("#pieButton").click(function () {
        $("#pieChart").slideDown();
        $("#chart").slideUp();
        $('#radarChart').slideUp();
        $('#doughnutChart').slideUp();
        $("#polarChart").slideUp();
        
    });
    $("#barButton").click(function () {
        $("#chart").slideDown();
        $('#radarChart').slideUp();
        $("#pieChart").slideUp();
        $("#doughnutChart").slideUp();
        $("#polarChart").slideUp();

    });
    $("#doughnutButton").click(function () {
        $("#doughnutChart").slideDown();
        $("#chart").slideUp();
        $("#pieChart").slideUp();
        $("#polarChart").slideUp();
        $('#radarChart').slideUp();

    });
    $("#radarButton").click(function () {
        $("#radarChart").slideDown();
        $("#chart").slideUp();
        $("#pieChart").slideUp();
        $("#doughnutChart").slideUp();
        $("#polarChart").slideUp();

    })
    $("#polarButton").click(function () {
        $("#polarChart").slideDown();
        $("#chart").slideUp();
        $("#pieChart").slideUp();
        $("#doughnutChart").slideUp();
        $("#radarChart").slideUp();

    })
});