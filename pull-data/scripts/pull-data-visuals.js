var firebaseConfig = {
  apiKey: "AIzaSyD87eHArtXQ5RWqgEYfzEkn1ke5T5Kc7Hg",
  authDomain: "collectiviz-1.firebaseapp.com",
  databaseURL: "https://collectiviz-1-default-rtdb.firebaseio.com",
  projectId: "collectiviz-1",
  storageBucket: "collectiviz-1.appspot.com",
  messagingSenderId: "733621844188",
  appId: "1:733621844188:web:ef066f41098fa6b5511c19"
};

var compNames = [];
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var dataRef = firebase.database().ref('alumni/');

dataRef.orderByChild("companyName").on("child_added", function(data) {
   console.log(data.val().companyName);

   compNames.push(data.val().companyName.toString());

   //var dataMessageString = "Companies CTD Majors work at: " + compNames;
   //var messageCountString = "Entries Count: " + compNames.length;

   //document.getElementById("dataMessage").innerHTML = dataMessageString;
   //document.getElementById("messageCount").innerHTML = messageCountString;

});



// Graduation Date Line Chart
var gradDates = [];

dataRef.orderByChild("gradTerm").on("child_added", function(data){
  console.log(data.val().gradTerm);

  gradDates.push(data.val().gradTerm.toString());

}

var numGraduated = [4, 13, 9, 15, 13];
var gradSemester = ['Fall 2017', 'Spring 2018', 'Fall 2018', 'Spring 2019', 'Fall 2019'];

var ctx = document.getElementById('myChart');
var gradDateChart = new Chart(ctx, {
 type: 'line',
 data: {
    labels: gradSemester,
    datasets: [{
        label: 'Graduation Dates',
        data: numGraduated,
        borderColor: "rgba(255,210,0,1)",
        lineTension: .2
    }]
 },
});

//var gradSemester = [];



// need to get a count for each of the graduation semester Operations
// Spring 2017, Fall 2018, Spring 2019, Fall 2019
// number gradutaed needs to have the same order as string array (first correlates to Fall 2017)


// Total Participants ///////////////////////////
var participants = [];

dataRef.orderByChild("first_name").on("child_added", function(data){
  console.log(data.val().first_name);

  participants.push(data.val().first_name.toString());

  var totalPart = participants.length;

  document.getElementById("totalParticipants").innerHTML = totalPart;
}


// Percent employed //// /////////////////////////////////////////////

// Number atttending grad school //// /////////////////////////////////////////////



// Career Word cloud /////////////////////////////////////////////////
// need an array of arrays with job title and count of occurences




// Company Word Cloud /////////////////////////////////////////////////
// need an array of arrays with job title and count of occurences


//github test

// Location Map //// /////////////////////////////////////////////



// Reflection - Favorite Part





//


//job title word cloud
var job_data = [
{x: "Associate UI/UX Engineer", value: 1},
{x: "Associate Systems + Human Factors Engineer", value: 1},
{x: "Software Development Engineer", value: 1},
{x: "UX Designer", value: 1},
{x: "Administrative Assistant", value: 1},
{x: "Associate UX Designer", value: 1},
{x: "Software Engineer & UI/UX Designer", value: 1},
{x: "Graphic Designer", value: 1},
{x: "Software Developer", value: 1},
{x: "MLS Coordinator", value: 1},
{x: "Associate developer", value: 1},
{x: "ASPIRE Leadership Program Digital Technologist", value: 1},
{x: "Creative Developer", value: 1},
{x: "Motion Graphic Designer", value: 1},
{x: "Web Designer", value: 1},
{x: "Application Support Specialist", value: 1},
{x: "Software Engineer", value: 1},
{x: "QA Associate Tester", value: 1},
{x: "Control Systems Programmer", value: 1},
{x: "Support Engineer", value: 1},
{x: "Software developer", value: 1},
{x: "Media Tech Associate", value: 1},
{x: "Web Designer", value: 1},
{x: "Interaction Designer and Developer", value: 1},
{x: "QA / Development Support", value: 1},
{x: "Software Engineer", value: 1},
{x: "Software Engineer", value: 1},
{x: "Sales Development Rep", value: 1},
{x: "Software Developer", value: 1},
{x: "Graphic Designer", value: 1},
{x: "Teacher", value: 1},
{x: "Fabricator", value: 1},
{x: "Event Services Project Manager", value: 1},
{x: "Operations Coordinator", value: 1},
{x: "AV Technician/Warehouse Manager", value: 1},
{x: "Assembler/Problem Solver", value: 1},
{x: "Front-End Designer and Developer", value: 1},
{x: "Owner / Associate Media Production", value: 1},
{x: "CEO", value: 1},
{x: "Freelance designer/developer", value: 1}
];


anychart.onDocumentLoad(function() {
  // create an instance of a pie chart
  var chart = anychart.tagCloud(job_data);
  // set chart title
  chart.title("Career Titles");
  // configure angles
  chart.angles([0]);
  chart.background().fill("#0e0e0e")
  // set the container element
  chart.container("container2");
  // initiate chart display
  chart.draw();
});



//map chart

var map_data = [
  {"id": "US.MA", "value": 0},
  {"id": "US.MN","value": 1},
  {"id": "US.MT","value": 2},
  {"id": "US.ND","value": 3},
  {"id": "US.HI","value": 4},
  {"id": "US.ID","value": 5},
  {"id": "US.WA","value": 6},
  {"id": "US.AZ","value": 7},
  {"id": "US.CA","value": 8},
  {"id": "US.CO","value": 9},
  {"id": "US.NV","value": 10},
  {"id": "US.NM","value": 11},
  {"id": "US.OR","value": 12},
  {"id": "US.UT","value": 13},
  {"id": "US.WY","value": 14},
  {"id": "US.AR","value": 15},
  {"id": "US.IA","value": 16},
  {"id": "US.KS","value": 17},
  {"id": "US.MO","value": 18},
  {"id": "US.NE","value": 19},
  {"id": "US.OK","value": 20},
  {"id": "US.SD","value": 21},
  {"id": "US.LA","value": 22},
  {"id": "US.TX","value": 23},
  {"id": "US.CT","value": 24},
  {"id": "US.NH","value": 25},
  {"id": "US.RI","value": 26},
  {"id": "US.VT","value": 27},
  {"id": "US.AL","value": 28},
  {"id": "US.FL","value": 29},
  {"id": "US.GA","value": 30},
  {"id": "US.MS","value": 31},
  {"id": "US.SC","value": 32},
  {"id": "US.IL","value": 33},
  {"id": "US.IN","value": 34},
  {"id": "US.KY","value": 35},
  {"id": "US.NC","value": 36},
  {"id": "US.OH","value": 37},
  {"id": "US.TN","value": 38},
  {"id": "US.VA","value": 39},
  {"id": "US.WI","value": 40},
  {"id": "US.WV","value": 41},
  {"id": "US.DE","value": 42},
  {"id": "US.MD","value": 43},
  {"id": "US.NJ","value": 44},
  {"id": "US.NY","value": 45},
  {"id": "US.PA","value": 46},
  {"id": "US.ME","value": 47},
  {"id": "US.MI","value": 48},
  {"id": "US.AK","value": 49},
  {"id": "US.DC","value": 50}
];

var scale = anychart.scales.ordinalColor([{
    less: 10
  },
  {
    from: 10,
    to: 20
  },
  {
    greater: 20
  }
]);
scale.colors(['#FFF5C7', '#FFEE9C', '#FFD200']);

anychart.onDocumentLoad(function() {
  var map = anychart.map();
  map.geoData(anychart.maps['united_states_of_america']);

  // create and set the series
  var series = map.choropleth(map_data);
  series.geoIdField('id');
  map.geoData(anychart.maps['united_states_of_america']);

  //enable legend, add colorscale to map using the above scale, connect scale to legend
  map.legend(true);
  series.colorScale(scale);
  map.legend().itemsSourceMode('categories');


  // set the container
//  map.background().fill("#F2D4B8");
  map.container('container3');
  map.draw();
});




//Graduation Chart:
//Count total for each grad year and figure out percentages
//2 arrays - array of grad term names + corresponding array of counts for each term


//# of Alumni completed survey
//Count of the number of data entries in the database


//% employed
//Percentage of people who filled out the survey that are employed
//So (people who are employed / total entries ) * 100


//# of alumni attended grad school
//Count number of people who said they are going to grad school


//Career Titles Word Cloud
//Count like career titles, so and create a count for each different title


//Array of career title + count of # of alumni at said company


//Company Titles Word Cloud
//Count like company titles, so and create a count for each different title

//Array of company + count of # of alumni at said company


//% prepared for goals
//(prepared for goals yes total / total filled out form) * 100


//% recommend ctd program
//(recommend ctd yes total / total filled out form) * 100


//% use CTD skills
//(use ctd skills yes total / total filled out form) * 100


//Goals - text
//Pull random goals string from array


//Favorite aspect - text
//Pull random fav aspect from array


//Alumni Profiles
//Manually entered in


//Locations Map Chart
//Count total for each location entered?
//Array of US.state and count of people in each one


/* dataRef.on("value", function(snapshot) {
   console.log(snapshot.val());
}, function (error) {
   console.log("Error: " + error.code);
}); */

/* firebase.database().ref('alumni').child(-MTSWgWuaGkYaCvnvcFC).on('value', function(snapshot) {
    var compamy = snapshot.val().companyName;

    document.getElementById(dataMessage).innerHTML = company;
}); */





/// code to create charts
/*

var jobTitleChart;

function chart1(){

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
*/
