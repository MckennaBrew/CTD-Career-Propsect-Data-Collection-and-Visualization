//line chart
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
