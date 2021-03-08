var salaryChart;
var jobChart;

function chart1(){
  var ctx = document.getElementById('myChart');

  var positions = [30, 20, 10, 5, 15];
  var jobType = ['UX Design', 'Graphic Design', 'Software Engineer', 'Product Design', 'Other'];

  jobChart = new Chart(ctx, {
   type: 'doughnut',
   data: {
      labels: jobType,
      datasets: [{
          label: 'CTD Jobs',
          data: positions,
          backgroundColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)"
          ]
      }]
   },
   options: {
      //cutoutPercentage: 50,
      //circumference: 1.6 * Math.PI,
      animation:{
          animateRotate: true,
          duration: 1000
          //animateScale: true
      },
      maintainAspectRatio: false,
      responsive: true
    }
  });

}

function chart2(){
  var ctx = document.getElementById('myChart2');

  var totals = [30, 20, 10, 5, 15];
  var salaries = ['1-25K', '25K-50K', '50K-75K', '75K-100K', '100K+'];

  salaryChart = new Chart(ctx, {
   type: 'bar',
   data: {
      labels: salaries,
      datasets: [{
          label: 'CTD Salaries',
          data: totals,
          backgroundColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)"
          ]
      }]
   },
   options: {
      animation: {
        duration: 1000,
        easing: 'linear'
      },
      maintainAspectRatio: false,
      responsive: true
    }
  })

}

window.onload = function(){
  chart1();
  chart2();
};

// function chart1(){
//   myChart = jobChart;
// }
// function chart2(){
//   myChart = salaryChart;
// }
