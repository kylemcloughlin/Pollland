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
        $.ajax("/poll/:questionID")
        .done((response) => {
            console.log(response);
            chartBuilder(response, 'pie', "pieChart", pieChart);
        })
        
    });
    
    $("#doughnutButton").click(function () {
        $("#doughnutChart").slideDown();
        // $("#chart").slideUp();
        $("#pieChart").slideUp();
        $("#polarChart").slideUp();
        $('#radarChart').slideUp();
        $.ajax("/poll/:questionID")
        .done((response) => {
            console.log('GET RESPONSE', response);
            chartBuilder(response, 'doughnut', 'doughnutChart', doughnutChart);
        })
    });
    $("#radarButton").click(function () {
        $("#radarChart").slideDown();
        // $("#chart").slideUp();
        $("#pieChart").slideUp();
        $("#doughnutChart").slideUp();
        $("#polarChart").slideUp();
        // $.ajax("/poll/:questionID/result")
        $.ajax("/poll/:questionID")
        .done((response) => {
            console.log('GET RESPONSE', response);
            chartBuilder(response, 'radar', 'radarChart', radarChart);
        })
    })
    $("#polarButton").click(function () {
        $("#polarChart").slideDown();
        // $("#chart").slideUp();
        $("#pieChart").slideUp();
        $("#doughnutChart").slideUp();
        $("#radarChart").slideUp();
        $.ajax("/poll/:questionID")
        // $.ajax("/poll/:questionID/result")
        .done((response) => {
            console.log('GET RESPONSE', response);
            chartBuilder(response, 'polarArea', 'polarChart', polarChart);
        })
    })
});
$(window).on( "unload", function () {
    alert('hit');})
// $('window').unload(function () {
//     console.log("Handler for .unload() called.");
// });
function chartBuilder(data, type, element, chartType) {
    let y = [];
    let x = [];
    let z = type
    for (tin of data) {
        y.push(tin.option)
        x.push(tin.points);
        // let barChart = document.getElementById('chart').getContext('2d');
    }
    let polarChart = document.getElementById('polarChart').getContext('2d');
    let radarChart = document.getElementById('radarChart').getContext('2d');
    let doughnutChart = document.getElementById('doughnutChart').getContext('2d');
    let pieChart = document.getElementById('pieChart').getContext('2d');
    let newCharts = new Chart(chartType, {
        type: type,
        data: {
            labels: y,
            datasets: [{
                label: 'results',
                data: x,
                backgroundColor: [
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                ],
                borderwidth: 1,
                borderColor: '#777',
                hoverBorderWidth: 2,
                hoverBorderColor: '#000'
            }]
            
        },
        options: {
            responsive: false,
            maintainAspectRatio: false,
        },






    });

}
// window.addEventListener("beforeunload", function (event) {
//     res.clearCookie("questionID");
//     console.log('hit')
//     console.log(document.cookie);
  
//   });

// let barChart = document.getElementById('chart').getContext('2d');
// let Chart1 = new Chart(barChart, {
//     type: 'bar',
//     data: {
//         labels: ['a', 'b', 'c', 'd'],
//         datasets: [{
//             label: 'results',
//             data: [],
//             backgroundColor:[
//                 'rgba(54, 162, 235, 0.6)',
//                 'rgba(255, 206, 86, 0.6)',
//                 'rgba(75, 192, 192, 0.6)',
//                 'rgba(153, 102, 255, 0.6)',
//                 'rgba(255, 159, 64, 0.6)',
//                 'rgba(255, 99, 132, 0.6)'
//             ],
//             borderwidth:1,
//             borderColor: '#777',
//             hoverBorderWidth: 2,
//             hoverBorderColor: '#000'

//         }]

//     },
//     options: {}



// });
// let pieChart = document.getElementById('pieChart').getContext('2d');
// let Chart2 = new Chart(pieChart, {
//     type: 'pie',
//     data: {
//         labels: ['a', 'b', 'c', 'd'],
//         datasets: [{
//             label: 'results',
//             data: [
//             ],
//             backgroundColor:[
//                 'rgba(54, 162, 235, 0.6)',
//                 'rgba(255, 206, 86, 0.6)',
//                 'rgba(75, 192, 192, 0.6)',
//                 'rgba(153, 102, 255, 0.6)',
//                 'rgba(255, 159, 64, 0.6)',
//                 'rgba(255, 99, 132, 0.6)'
//             ],
//             borderwidth:1,
//             borderColor: '#777',
//             hoverBorderWidth: 2,
//             hoverBorderColor: '#000'






//         }]

//     },
//     options: {}



// });
// let doughnutChart = document.getElementById('doughnutChart').getContext('2d');
// let Chart3 = new Chart(doughnutChart, {
//     type: 'doughnut',
//     data: {
//         labels: ['a', 'b', 'c', 'd'],
//         datasets: [{
//             label: 'results',
//             data: [
//             ],
//             backgroundColor:[
//                 'rgba(54, 162, 235, 0.6)',
//                 'rgba(255, 206, 86, 0.6)',
//                 'rgba(75, 192, 192, 0.6)',
//                 'rgba(153, 102, 255, 0.6)',
//                 'rgba(255, 159, 64, 0.6)',
//                 'rgba(255, 99, 132, 0.6)'
//             ],
//             borderwidth:1,
//             borderColor: '#777',
//             hoverBorderWidth: 2,
//             hoverBorderColor: '#000'
//                     }]

//     },
//     options: {}



// });
// let radarChart = document.getElementById('radarChart').getContext('2d');
// let Chart4 = new Chart(radarChart, {
//     type: 'radar',
//     data: {
//         labels: ['a', 'b', 'c', 'd'],
//         datasets: [{
//             label: 'results',
//             data: [
//             ],
//             backgroundColor:[
//                 'rgba(54, 162, 235, 0.6)',
//                 'rgba(255, 206, 86, 0.6)',
//                 'rgba(75, 192, 192, 0.6)',
//                 'rgba(153, 102, 255, 0.6)',
//                 'rgba(255, 159, 64, 0.6)',
//                 'rgba(255, 99, 132, 0.6)'
//             ],
//             borderwidth:1,
//             borderColor: '#777',
//             hoverBorderWidth: 2,
//             hoverBorderColor: '#000'

//         }]

//     },
//     options: {}



// });
// let polarChart = document.getElementById('polarChart').getContext('2d');
// let Chart5 = new Chart(polarChart, {
//     type: 'polarArea',
//     data: {
//         labels: ['a', 'b', 'c', 'd'],
//         datasets: [{
//             label: 'results',
//             data: [
//             ],
//             backgroundColor:[
//                 'rgba(54, 162, 235, 0.6)',
//                 'rgba(255, 206, 86, 0.6)',
//                 'rgba(75, 192, 192, 0.6)',
//                 'rgba(153, 102, 255, 0.6)',
//                 'rgba(255, 159, 64, 0.6)',
//                 'rgba(255, 99, 132, 0.6)'
//             ],
//             borderwidth:1,
//             borderColor: '#777',
//             hoverBorderWidth: 2,
//             hoverBorderColor: '#000'

//         }]

//     },
//     options: {}



// });

//  let barChart = document.getElementById('chart').getContext('2d');
// let Chart1 = new Chart(barChart, {
//     type: 'bar',
//     data: {
//         labels: ['a', 'b', 'c', 'd'],
//         datasets: [{
//             label: 'results',
//             data: [],
//             backgroundColor:[
//                 'rgba(54, 162, 235, 0.6)',
//                 'rgba(255, 206, 86, 0.6)',
//                 'rgba(75, 192, 192, 0.6)',
//                 'rgba(153, 102, 255, 0.6)',
//                 'rgba(255, 159, 64, 0.6)',
//                 'rgba(255, 99, 132, 0.6)'
//             ],
//             borderwidth:1,
//             borderColor: '#777',
//             hoverBorderWidth: 2,
//             hoverBorderColor: '#000'

//         }]

//     },
//     options: {}

