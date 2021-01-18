var salaryChart;
var jobTitleChart;
var jobTypeChart;
var locationChart;
var companyChart;

function chart1(){
  if (salaryChart) {
    salaryChart.destroy();
  }
  if (jobTypeChart) {
    jobTypeChart.destroy();
  }
  if (locationChart) {
    locationChart.destroy();
  }
  if (companyChart) {
    companyChart.destroy();
  }

  var ctx = document.getElementById('myChart');

  var positions = [30, 20, 10, 5, 15];
  var jobType = ['UX Design', 'Graphic Design', 'Software Engineer', 'Product Design', 'Other'];

  jobTitleChart = new Chart(ctx, {
   type: 'polarArea',
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
  if (jobTitleChart) {
    jobTitleChart.destroy();
  }
  if (jobTypeChart) {
    jobTypeChart.destroy();
  }
  if (locationChart) {
    locationChart.destroy();
  }
  if (companyChart) {
    companyChart.destroy();
  }

  var ctx = document.getElementById('myChart');

  var totals = [10, 20, 10, 5, 15, 30, 12, 4];
  var salaries = ['Unpaid', '0-15/hour', '15-30/hour', '30+/hour', '0-50K', '50-75K', '75-100K', '100K+'];

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

function chart3(){
  if (salaryChart) {
    salaryChart.destroy();
  }
  if (jobTitleChart) {
    jobTitleChart.destroy();
  }
  if (locationChart) {
    locationChart.destroy();
  }
  if (companyChart) {
    companyChart.destroy();
  }

  var ctx = document.getElementById('myChart');

  var totals = [30, 20, 10, 5];
  var jobTypes = ['Full Time Job', 'Full Time Internship', 'Part Time Job', 'Part Time Internship'];

  jobTypeChart = new Chart(ctx, {
   type: 'doughnut',
   data: {
      labels: jobTypes,
      datasets: [{
          label: 'CTD Salaries',
          data: totals,
          backgroundColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
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
  })

}

function chart4(){
  if (salaryChart) {
    salaryChart.destroy();
  }
  if (jobTitleChart) {
    jobTitleChart.destroy();
  }
  if (jobTypeChart) {
    jobTypeChart.destroy();
  }
  if (companyChart) {
    companyChart.destroy();
  }

  var ctx = document.getElementById('myChart');

  var totals = [30, 20, 10, 5, 15, 23];
  var locations = ['Boulder', 'Denver', 'New York', 'Austin', 'Seattle', 'Los Angles'];

  locationChart = new Chart(ctx, {
   type: 'pie',
   data: {
      labels: locations,
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
  })

}

function chart5(){
  if (salaryChart) {
    salaryChart.destroy();
  }
  if (jobTitleChart) {
    jobTitleChart.destroy();
  }
  if (jobTypeChart) {
    jobTypeChart.destroy();
  }
  if (locationChart) {
    locationChart.destroy();
  }

  var ctx = document.getElementById('myChart');

  var companies = ['Amazon', 'Google', 'Apple', 'Rioch', 'Twilio', 'Salesforce'];
  var axisPoints = [{
      x: 100,
      y: 0,
      r: 10
    }, {
      x: 60,
      y: 30,
      r: 20
    }, {
      x: 40,
      y: 60,
      r: 25
    }, {
      x: 80,
      y: 80,
      r: 50
    }, {
      x: 20,
      y: 30,
      r: 25
    }, {
      x: 0,
      y: 100,
      r: 5
    }];

  companyChart = new Chart(ctx, {
   type: 'bubble',
   data: {
      labels: companies,
      datasets: [{
          label: 'CTD Salaries',
          data: axisPoints,
          backgroundColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)"
          ]
      }]
   },
   // options: {
   //    animation: {
   //      duration: 1000,
   //      easing: 'linear'
   //    },
   //    maintainAspectRatio: false,
   //    responsive: true
   //  }
  })

}

window.onload = function(){
  chart1();
};

// function chart1(){
//   myChart = jobChart;
// }
// function chart2(){
//   myChart = salaryChart;
// }
