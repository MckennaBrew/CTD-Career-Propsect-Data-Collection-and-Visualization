// where firebase API keys would go

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var dataRef = firebase.database().ref('alumni/');

//////////////////////////////////////////

// GRADUATION DATE LINE CHART ///////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////
// use promise with a call back     - .then


var gradDates = [];

var numGraduated = [];
var gradSemester = [];

const dateData = new Promise(function(resolve, reject){
  // console.log("here1");
  dataRef.orderByChild("gradDate").on("child_added", function(data){
    console.log(data.val().gradDate);
    if (data.val().gradDate != "") {
      gradDates.push(data.val().gradDate.toString());
      // console.log("here2");
      fillGradArrays();
    }
    // console.log("here3");
    resolve();
    });
});

dateData
  .then(function(done) {
      // console.log("here4");
      createBarChart();
  })



  function createBarChart(){
  // console.log("here5");
  var ctx = document.getElementById('myChart');
  var gradDateChart = new Chart(ctx, {
   type: 'bar',
   data: {
      labels: gradSemester,
      datasets: [{
          data: numGraduated,
           backgroundColor: "#FFFFFF",
           //borderColor: "rgba(255,210,0,1)",
           borderWidth: 0
      }]
   },
   options: {
      responsive: true,
      // maintainAspectRatio: true,
      legend: {
          display: false,
          labels:{
            fontColor: 'white'
          }
      },
      tooltips: {
          callbacks: {
             label: function(tooltipItem) {
                    return tooltipItem.yLabel;
             }
          }
      },
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }],
          xAxes: [{
                    ticks: {
                        fontColor: "#E2E2E2",
                    }
                }]
              }
  }
  });
}

function fillGradArrays() {
  i = gradDates.length - 1;
  if (gradSemester.includes(gradDates[i]) == true) {
    //update num in numGraduated
    var x = gradSemester.indexOf(gradDates[i]);
    // var y = numGraduated[x];
    // numGraduated[x] = y+1;
    numGraduated[x]++;

  } else {
    //append to gradSemester and numGraduated
    gradSemester.push(gradDates[i]);
    numGraduated.push(1);
  }
}




// need to get a count for each of the graduation semester Operations
// Spring 2017, Fall 2018, Spring 2019, Fall 2019
// number gradutaed needs to have the same order as string array (first correlates to Fall 2017)

//////////////////////////////////////////

// TOTAL PARTICIPANTS ///////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////

var participants = [];

dataRef.orderByChild("firstName").on("child_added", function(data){
  // console.log(data.val().firstName);

  participants.push(data.val().firstName.toString());

  var totalPart = participants.length;

  document.getElementById("totalParticipants").innerHTML = totalPart;
});

//////////////////////////////////////////

// PERCENT EMPLOYED ///////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////

var employed = [];

dataRef.orderByChild("employmentStatus").on("child_added", function(data){
  // console.log(data.val().employmentStatus);

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

  document.getElementById("percentEmployed").innerHTML = Math.round(percent) + "%";
}

//////////////////////////////////////////

// NUMBER ATTTENDING GRAD SCHOOL ///////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////

var gradProgram = [];

dataRef.orderByChild("gradProgram").on("child_added", function(data){
  // console.log(data.val().gradProgram);

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
var titleDataObject = []; //array of objects


const jobData = new Promise(function(resolve, reject) {
  // console.log("here1");
  dataRef.orderByChild("jobTitle").on("child_added", function(data) {
    // console.log(data.val().jobTitle);
    if (data.val().jobTitle != "Foo") {
      careerTitles.push(data.val().jobTitle.toString());

      condenseTitles();
    }
    // console.log(titleData);
    titleDataObject = titleData.map(function(x) {
      return {
        x: x[0],
        value: x[1]
      };
    });
    resolve();
  });
});

jobData
  .then(function(done) {
      // console.log("here4");
      drawTitleChart();
  })

function condenseTitles() {
  var i = careerTitles.length - 1;
  if (exists(titleData, careerTitles[i]) == true) {
    //update value
    for (var j = 0; j < titleData.length; j++) {
      if (titleData[j][0] == careerTitles[i]) {
        x = titleData[j][1];
        //console.log(x);
        titleData[j][1] = x + 1;
      }
    }
  } else {
    // append to titleData
    titleData.push([careerTitles[i], 1]);
  }
}

function exists(arr, search){
  return arr.some(row => row.includes(search));
}

// create and configure a color scale.
var customColorScale = anychart.scales.ordinalColor();
customColorScale.ranges([
    {less: 1},
    {from: 2, to: 3},
    {greater: 4}
]);
customColorScale.colors(['#FFFFFF', '#FFEE9C', '#FFD200']);

function drawTitleChart(){
  // console.log("here2");
    // console.log(titleData2);
    // create an instance of a pie chart
    var chart = anychart.tagCloud(titleDataObject);
    // set chart title
    chart.title("Career Titles");
    // configure angles
    chart.angles([0]);
    chart.fontFamily('neue-haas-grotesk-display');
    chart.background().fill("#0e0e0e")
    chart.colorScale(customColorScale);
    chart.colorRange().enabled(true);
    // set the container element
    chart.container("container1");
    // initiate chart display
    chart.draw();
}

function showCareerTitles(){
  var x = document.getElementById("container1");
  var y = document.getElementById("container2");
  x.style.display = "block";
  y.style.display = "none";
}



//////////////////////////////////////////

// COMPANY WORD CLOUD ////////////////////////////////////////////////////////////////////////////////////////////
// need an array of arrays with job title and count of occurences

//////////////////////////////////////////



var companyNames = [];
var companyData = []; //2d array of titles and values
var companyDataObject = [];

//get list of careerTitles into careerTitles array above
const companiesData = new Promise(function(resolve, reject) {
  // console.log("here1");
  dataRef.orderByChild("companyName").on("child_added", function(data){
    // console.log(data.val().companyName);
    if (data.val().companyName != "Foo") {
      companyNames.push(data.val().companyName.toString());;

      condenseCompanies();
    }
    // console.log(titleData);
    companyDataObject = companyData.map(function(x) {
      return {
        x: x[0],
        value: x[1]
      };
    });
    resolve();
  });
});

companiesData
  .then(function(done) {
      // console.log("here4");
      drawCompanyChart();
  })


function condenseCompanies(){
  var i = companyNames.length - 1;
    if (exists(companyData, companyNames[i]) == true) {
      //update value
      for (var j = 0; j < companyData.length; j++) {
        if (companyData[j][0] == companyNames[i]) {
          x = companyData[j][1];
          companyData[j][1] = x+1;
        }
      }
    } else {
      // append to titleData
      companyData.push([companyNames[i], 1]);
    }
}

function exists(arr, search){
  return arr.some(row => row.includes(search));
}

function drawCompanyChart(){
    // console.log(titleData2);
    // create an instance of a pie chart
    var chart = anychart.tagCloud(companyDataObject);
    // set chart title
    chart.title("Companies");
    // configure angles
    chart.angles([0]);
    chart.fontFamily('neue-haas-grotesk-display');
    chart.background().fill("#0e0e0e");
    chart.colorScale(customColorScale);
    chart.colorRange().enabled(true);
    // set the container element
    chart.container("container2");
    // initiate chart display
    chart.draw();
}

function showCompanies(){
  var x = document.getElementById("container1");
  var y = document.getElementById("container2");
  y.style.display = "block";
  x.style.display = "none";
}


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

const locationData = new Promise(function(resolve, reject) {
  // console.log("here1");
  dataRef.orderByChild("location").on("child_added", function(data){
    if (data.val().location != "Other") {
      // console.log(data.val().location);
      locations.push(data.val().location.toString());
      countLocations();
    }

    // console.log(mapData);
    resolve();
  });
});

companiesData
  .then(function(done) {
      // console.log("here4");
      drawMapChart();
  })
//get list of locations from database

function countLocations() {
  // for (var i = 0; i < locations.length; i++)
  var i = locations.length - 1;
  var name = "US." + locations[i];
  console.log(name);
  for (var j = 0; j < mapData.length; j++) {
    if (name == mapData[j].id) {
      mapData[j].value++;
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

var scale = anychart.scales.ordinalColor([{
    less: 0
  },
  {
    from: 1,
    to: 9
  },
  {
    greater: 9
  }
]);
scale.colors(['#FFFFFF', '#FFEE9C', '#FFD200']);

function drawMapChart(){
  var map = anychart.map();
  map.geoData(anychart.maps['united_states_of_america']);

  // create and set the series
  var series = map.choropleth(mapData);
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
}


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
  // console.log(data.val().preparedLevel);

  prepared.push(data.val().preparedLevel.toString());

  prepLevel(prepared);

});

function prepLevel(temp){

  var count = 0;
  var neitherTotal = 0;

  for (i = 0; i < temp.length; i++){
    if(temp[i] == "agree"){
      count = count + 1;
    }
    else if(temp[i] == "neither"){
      neitherTotal = neitherTotal + 1;
    }
  }

  var percent = (count/(temp.length - neitherTotal)) * 100;

  document.getElementById("percentPreparedGoals").innerHTML = Math.round(percent) + "%";
}



//////////////////////////////////////////

// PERCENT RECOMENND PROGRAM ///////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////

var recommend = [];

dataRef.orderByChild("likelyToRecommend").on("child_added", function(data){
  // console.log(data.val().likelyToRecommend);
  if (data.val().likelyToRecommend != "11") {
      recommend.push(data.val().likelyToRecommend.toString());
  }
  console.log(recommend);
  percentRecommend(recommend);
});

function percentRecommend(temp){

  var total = 0;

  for (i = 0; i < temp.length; i++){
    total = total + parseInt(temp[i]);
  }

  var nps = (total/temp.length);

  var percent = Math.round(nps*10);

  document.getElementById("percentRecommend").innerHTML = percent + "%";
}





//////////////////////////////////////////

// PERCENT USE SKILLS ///////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////


var skills = [];

dataRef.orderByChild("skillUse").on("child_added", function(data){
  // console.log(data.val().skillUse);

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

  document.getElementById("perecentUseSkills").innerHTML = Math.round(percent) + "%";
}




//////////// Helper Function ///////////

function filterArray(tempArray){
  filtered = [];

  for(let i = 0; i < tempArray.length; i++){
    if (tempArray[i] != "Foo" && tempArray[i] != "" && tempArray[i] != "foo"){
        filtered.push(tempArray[i]);
    }
    else{

    }
  }

  return filtered;
}


//////////////////////////////////////////

// CAREER GOALS ///////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////

var goals = [];

dataRef.orderByChild("proffGoals").on("child_added", function(data){
  //console.log(data.val().proffGoals);

  goals.push(data.val().proffGoals.toString());


  //filteredGoals = filterArray(goals);
  alumniGoals(goals);

});

function alumniGoals(temp){

  filtered = filterArray(temp);

  var rand = Math.floor(Math.random() * (filtered.length));

  document.getElementById("careerGoals").innerHTML = filtered[rand];

}


//////////////////////////////////////////

// FAVORITE ASPECT ///////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////

var favorite = [];

dataRef.orderByChild("mostFav").on("child_added", function(data){
  //console.log(data.val().mostFav);

  favorite.push(data.val().mostFav.toString());

  //filteredFavs = filterArray(favorite);
  favoriteAspect(favorite);

});

function favoriteAspect(temp){

  filtered = filterArray(temp);

  var rand = Math.floor(Math.random() * (filtered.length));

  document.getElementById("favAspect").innerHTML = filtered[rand];
}
