var firebaseConfig = {
  apiKey: "AIzaSyD87eHArtXQ5RWqgEYfzEkn1ke5T5Kc7Hg",
  authDomain: "collectiviz-1.firebaseapp.com",
  databaseURL: "https://collectiviz-1-default-rtdb.firebaseio.com",
  projectId: "collectiviz-1",
  storageBucket: "collectiviz-1.appspot.com",
  messagingSenderId: "733621844188",
  appId: "1:733621844188:web:ef066f41098fa6b5511c19"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var dataRef = firebase.database().ref('alumni/');

//////////////////////////////////////////

// GRADUATION DATE LINE CHART ///////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////

var gradDates = [];

var numGraduated = [];
var gradSemester = [];

dataRef.orderByChild("gradTerm").on("child_added", function(data){
  console.log(data.val().gradTerm);

  gradDates.push(data.val().gradTerm.toString());

  fillGradArrays();
});

function fillGradArrays(){
  for (var i = 0; i < gradDates.length; i++) {
    if(gradSemester.includes(gradDates[i]) == true){
      //update num in numGraduated
      var x = gradSemester.indexOf(gradDates[i]);
      var y = numGraduated[x]
      numGraduated[x] = y+1;

    } else {
      //append to gradSemester and numGraduated
      gradSemester.push(gradDates[i]);
      numGraduated.push(1);
    }
  }
}



// var numGraduated = [4, 13, 9, 15, 13];
// var gradSemester = ['Fall 2017', 'Spring 2018', 'Fall 2018', 'Spring 2019', 'Fall 2019'];
//
// var ctx = document.getElementById('myChart');
// var gradDateChart = new Chart(ctx, {
//  type: 'line',
//  data: {
//     labels: gradSemester,
//     datasets: [{
//         label: 'Graduation Dates',
//         data: numGraduated,
//         borderColor: "rgba(255,210,0,1)",
//         lineTension: .2
//     }]
//  },
// });




// need to get a count for each of the graduation semester Operations
// Spring 2017, Fall 2018, Spring 2019, Fall 2019
// number gradutaed needs to have the same order as string array (first correlates to Fall 2017)

//////////////////////////////////////////

// TOTAL PARTICIPANTS ///////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////

var participants = [];

dataRef.orderByChild("first_name").on("child_added", function(data){
  console.log(data.val().first_name);

  participants.push(data.val().first_name.toString());

  var totalPart = participants.length;

  document.getElementById("totalParticipants").innerHTML = totalPart;
});

//////////////////////////////////////////

// PERCENT EMPLOYED ///////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////

var employed = [];

dataRef.orderByChild("employmentStatus").on("child_added", function(data){
  console.log(data.val().employmentStatus);

  employed.push(data.val().employmentStatus.toString());

  percentEmployed(employed);

});

function percentEmployed(temp){

  var count = 0;

  for (i = 0; i < temp.length; i++){
    if(temp[i] == "working for a company" || temp[i] == "working for myself"){
      count = count + 1;
    }
  }

  var percent = (count/temp.length) * 100;

  document.getElementById("percentEmployed").innerHTML = percent + "%";
}

//////////////////////////////////////////

// NUMBER ATTTENDING GRAD SCHOOL ///////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////

var gradProgram = [];

dataRef.orderByChild("gradProgram").on("child_added", function(data){
  console.log(data.val().gradProgram);

  gradProgram.push(data.val().gradProgram.toString());

  numInGrad(gradProgram);

});

function numInGrad(temp){

  var count = 0;

  for (i = 0; i < temp.length; i++){
    if(temp[i] == "Yes"){
      count = count + 1;
    }
  }

  document.getElementById("numAttendedGrad").innerHTML = count;

}

//////////////////////////////////////////

// CAREER WORD CLOUD ////////////////////////////////////////////////////////////////////////////////////////////
// need an array of arrays with job title and count of occurences

//////////////////////////////////////////

var careerTitles = [];

var titleData = []; //2d array of titles and values

//get list of careerTitles into careerTitles array above
dataRef.orderByChild("jobTitle").on("child_added", function(data){
  console.log(data.val().jobTitle);

  gradProgram.push(data.val().jobTitle.toString());

  condenseTitles();

});

function condenseTitles(){
  for (var i = 0; i < careerTitles.length; i++) {
    if (exists(titleData, careerTitles[i]) == true) {
      //update value
      for (var j = 0; j < titleData.length; j++) {
        if (titleData[j][0] == careerTitles[i]) {
          x = titleData[j][1];
          console.log(x);
          titleData[j][1] = x+1;
        }
      }
    } else {
      // append to titleData
      titleData.push([careerTitles[i], 1]);
    }
  }
}

function exists(arr, search){
  return arr.some(row => row.includes(search));
}


//////////////////////////////////////////

// COMPANY WORD CLOUD ////////////////////////////////////////////////////////////////////////////////////////////
// need an array of arrays with job title and count of occurences

//////////////////////////////////////////



var companyNames = [];
var companyData = []; //2d array of titles and values

//get list of careerTitles into careerTitles array above
dataRef.orderByChild("companyName").on("child_added", function(data){
  console.log(data.val().companyName);

  gradProgram.push(data.val().companyName.toString());

  condenseCompanies();

});

function condenseCompanies(){
  for (var i = 0; i < companyNames.length; i++) {
    if (exists(companyData, companyNames[i]) == true) {
      //update value
      for (var j = 0; j < companyData.length; j++) {
        if (companyData[j][0] ==companyNames[i]) {
          x = companyData[j][1];
          console.log(x);
          companyData[j][1] = x+1;
        }
      }
    } else {
      // append to titleData
      companyData.push([companyNames[i], 1]);
    }
  }
}

function exists(arr, search){
  return arr.some(row => row.includes(search));
}

condenseCompanies();
console.log(companyData);



//////////////////////////////////////////

// LOCATION MAP ///////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////

var mapData = [
  {"id": "US.MA","value": 0},
  {"id": "US.MN","value": 0},
  {"id": "US.MT","value": 0},
  {"id": "US.ND","value": 0},
  {"id": "US.HI","value": 0},
  {"id": "US.ID","value": 0},
  {"id": "US.WA","value": 0},
  {"id": "US.AZ","value": 0},
  {"id": "US.CA","value": 0},
  {"id": "US.CO","value": 0},
  {"id": "US.NV","value": 0},
  {"id": "US.NM","value": 0},
  {"id": "US.OR","value": 0},
  {"id": "US.UT","value": 0},
  {"id": "US.WY","value": 0},
  {"id": "US.AR","value": 0},
  {"id": "US.IA","value": 0},
  {"id": "US.KS","value": 0},
  {"id": "US.MO","value": 0},
  {"id": "US.NE","value": 0},
  {"id": "US.OK","value": 0},
  {"id": "US.SD","value": 0},
  {"id": "US.LA","value": 0},
  {"id": "US.TX","value": 0},
  {"id": "US.CT","value": 0},
  {"id": "US.NH","value": 0},
  {"id": "US.RI","value": 0},
  {"id": "US.VT","value": 0},
  {"id": "US.AL","value": 0},
  {"id": "US.FL","value": 0},
  {"id": "US.GA","value": 0},
  {"id": "US.MS","value": 0},
  {"id": "US.SC","value": 0},
  {"id": "US.IL","value": 0},
  {"id": "US.IN","value": 0},
  {"id": "US.KY","value": 0},
  {"id": "US.NC","value": 0},
  {"id": "US.OH","value": 0},
  {"id": "US.TN","value": 0},
  {"id": "US.VA","value": 0},
  {"id": "US.WI","value": 0},
  {"id": "US.WV","value": 0},
  {"id": "US.DE","value": 0},
  {"id": "US.MD","value": 0},
  {"id": "US.NJ","value": 0},
  {"id": "US.NY","value": 0},
  {"id": "US.PA","value": 0},
  {"id": "US.ME","value": 0},
  {"id": "US.MI","value": 0},
  {"id": "US.AK","value": 0},
  {"id": "US.DC","value": 0}
];

var locations = [];

//get list of locations from database

function countLocations(){
    for (var i = 0; i < locations.length; i++) {
      var name = "US." + abbrState(locations[i], 'abbr');
      for (var j = 0; j < mapData.length; j++) {
        if (name == mapData[j].id) {
          mapData[j].value++;
        }
      }
    }
}

function abbrState(input, to){

    var states = [
        ['Arizona', 'AZ'],
        ['Alabama', 'AL'],
        ['Alaska', 'AK'],
        ['Arkansas', 'AR'],
        ['California', 'CA'],
        ['Colorado', 'CO'],
        ['Connecticut', 'CT'],
        ['Delaware', 'DE'],
        ['Florida', 'FL'],
        ['Georgia', 'GA'],
        ['Hawaii', 'HI'],
        ['Idaho', 'ID'],
        ['Illinois', 'IL'],
        ['Indiana', 'IN'],
        ['Iowa', 'IA'],
        ['Kansas', 'KS'],
        ['Kentucky', 'KY'],
        ['Louisiana', 'LA'],
        ['Maine', 'ME'],
        ['Maryland', 'MD'],
        ['Massachusetts', 'MA'],
        ['Michigan', 'MI'],
        ['Minnesota', 'MN'],
        ['Mississippi', 'MS'],
        ['Missouri', 'MO'],
        ['Montana', 'MT'],
        ['Nebraska', 'NE'],
        ['Nevada', 'NV'],
        ['New Hampshire', 'NH'],
        ['New Jersey', 'NJ'],
        ['New Mexico', 'NM'],
        ['New York', 'NY'],
        ['North Carolina', 'NC'],
        ['North Dakota', 'ND'],
        ['Ohio', 'OH'],
        ['Oklahoma', 'OK'],
        ['Oregon', 'OR'],
        ['Pennsylvania', 'PA'],
        ['Rhode Island', 'RI'],
        ['South Carolina', 'SC'],
        ['South Dakota', 'SD'],
        ['Tennessee', 'TN'],
        ['Texas', 'TX'],
        ['Utah', 'UT'],
        ['Vermont', 'VT'],
        ['Virginia', 'VA'],
        ['Washington', 'WA'],
        ['West Virginia', 'WV'],
        ['Wisconsin', 'WI'],
        ['Wyoming', 'WY'],
    ];

    if (to == 'abbr'){
        input = input.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
        for(i = 0; i < states.length; i++){
            if(states[i][0] == input){
                return(states[i][1]);
            }
        }
    } else if (to == 'name'){
        input = input.toUpperCase();
        for(i = 0; i < states.length; i++){
            if(states[i][1] == input){
                return(states[i][0]);
            }
        }
    }
}

countLocations();

//map testing
// var mapData = [];
// mapData.push({"id": "US.MA", "value": 0});
// mapData[0].value++;
//
// var name = "US." + abbrState('Colorado', 'abbr');
// console.log(name);





//////////////////////////////////////////

// PERCENT PREPARED FOR THEIR GOALS ///////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////

var prepared = [];

dataRef.orderByChild("preparedLevel").on("child_added", function(data){
  console.log(data.val().preparedLevel);

  prepared.push(data.val().preparedLevel.toString());

  prepLevel(prepared);

});

function prepLevel(temp){

  var count = 0;

  for (i = 0; i < temp.length; i++){
    if(temp[i] == "agree"){
      count = count + 1;
    }
  }

  var percent = (count/temp.length) * 100;

  document.getElementById("percentPreparedGoals").innerHTML = percent + "%";
}



//////////////////////////////////////////

// PERCENT RECOMENND PROGRAM ///////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////

var recommend = [];

dataRef.orderByChild("likelyToRecommend").on("child_added", function(data){
  console.log(data.val().likelyToRecommend);

  recommend.push(data.val().likelyToRecommend.toString());

  percentRecommend(recommend);

});

function percentRecommend(temp){

  var count = 0;

  for (i = 0; i < temp.length; i++){
    if(temp[i] == "agree"){
      count = count + 1;
    }
  }

  var percent = (count/temp.length) * 100;

  document.getElementById("percentRecommend").innerHTML = percent + "%";
}





//////////////////////////////////////////

// PERCENT USE SKILLS ///////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////


var skills = [];

dataRef.orderByChild("skillUse").on("child_added", function(data){
  console.log(data.val().skillUse);

  skills.push(data.val().skillUse.toString());

  percentSkills(skills);

});

function percentSkills(temp){

  var count = 0;

  for (i = 0; i < temp.length; i++){
    if(temp[i] == "agree"){
      count = count + 1;
    }
  }

  var percent = (count/temp.length) * 100;

  document.getElementById("perecentUseSkills").innerHTML = percent + "%";
}





//////////////////////////////////////////

// CAREER GOALS ///////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////

var goals = [];

dataRef.orderByChild("proffGoals").on("child_added", function(data){
  console.log(data.val().proffGoals);

  goals.push(data.val().proffGoals.toString());

  alumniGoals(skills);

});

function alumniGoals(temp){

  var rand = getRandomInt(temp.length);

  document.getElementById("careerGoals").innerHTML = temp[rand];



}

//////////////////////////////////////////

// FAVORITE ASPECT ///////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////

var favorite = [];

dataRef.orderByChild("mostFav").on("child_added", function(data){
  console.log(data.val().mostFav);

  favorite.push(data.val().mostFav.toString());

  favoriteAspect(favorite);

});

function favoriteAspect(temp){

  var rand = getRandomInt(temp.length);

  document.getElementById("favAspect").innerHTML = temp[rand];
}





///////////////////////////////////////////
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
