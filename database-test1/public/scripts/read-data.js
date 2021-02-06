
//var database = firebase.database();
// API keys and calls

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var name = document.getElementById('full_name').value;
var email = document.getElementById('email').value;
var ctdMajorMinor = document.getElementById('ctdMajorMinor').value;
var term = document.getElementById('term').value;
var gradYear = document.getElementById('gradYear').value;
var reachOut = document.getElementById('reachOut').value;
/// goes to next section
var company = document.getElementById('company').value;
var fullPart = document.getElementById('fullPart').value;
var jobIntern = document.getElementById('jobInternship').value;
var title = document.getElementById('jobTitle').value;
var city = document.getElementById('city').value;
var state = document.getElementById('state').value;
var payType = document.getElementById('unpaidHourlySalaried').value;
var payRange = document.getElementById('salaryRange').value;

// creates a refernce to our database
var alumniRef = firebase.database().ref('alumni');

document.getElementById("submitButton").addEventListener("click", pushNewData(name, email, ctdMajorMinor, term, gradYear, reachOut, company, fullPart, jobIntern, title, city, state, payType, payRange));

function pushNewData(name, email, ctdMajorMinor, term, gradYear, reachOut, company, fullPart, jobIntern, title, city, state, payType, payRange){
  //creates new referemce for the alumni and their data we are going to add
   var newAlumniRef = alumniRef.push();

   newAlumniRef.set({
     'name': name,
     'userEmail': email,
     'ctdMajMin': ctdMajorMinor,
     'gradTerm': term,
     'gradYear': gradYear,
     'reachOut': reachOut,
     'companyName': company,
     'fullOrPart': fullPart,
     'jobOrIntern': jobIntern,
     'jobTitle': title,
     'jobCity': city,
     'jobState': state,
     'payType': payType,
     'payRange': payRange
   })
 }





/*

function writeUserData(userID, name, email, ctdMajorMinor, term, gradYear, reachOut, company, fullPart, jobIntern, title, city, state, payType, payRange)
{

  database.add({
    name: name,
    userEmail: email,
    ctdMajMin: ctdMajorMinor,
    gradTerm: term,
    gradYear: gradYear,
    reachOut: reachOut,
    companyName: company,
    fullOrPart: fullPart,
    jobOrIntern: jobIntern,
    jobTitle: title,
    jobCity: city,
    jobState: state,
    payType: payType,
    payRange: payRange
  });

} */


// make sure to add event listener for when user clicks submit...that will trigger this code
/*

// need to reference our firebase database
// var firebaseRef = firebase.database().ref('career-data');

form-side1.addEventListener('submitButton', function(_eve){

  _eve.preventDefault();
  // create var to pass to database based off of our form information
  var name = document.getElementById('full_name');
  var email = document.getElementById('email');
  var ctdMajorMinor = document.getElementById('ctdMajorMinor');
  var term = document.getElementById('term');
  var gradYear = document.getElementById('gradYear');
  var reachOut = document.getElementById('reachOut');
  /// goes to next section
  var company = document.getElementById('company');
  var fullPart = document.getElementById('fullPart');
  var jobIntern = document.getElementById('jobInternship');
  var title = document.getElementById('jobTitle');
  var city = document.getElementById('city');
  var state = document.getElementById('state');
  var payType = document.getElementById('unpaidHourlySalaried');
  var payRange = document.getElementById('salaryRange');

  // need to reference our firebase database
  var firebaseRef = firebase.database().ref('career-data');


  // push our data to the database
  firebaseRef.push({
    name,
    email,
    ctdMajorMinor,
    term,
    gradYear,
    reachOut,
    company,
    fullPart,
    jobIntern,
    title,
    city,
    state,
    payType,
    payRange,
    id: uuid.v4() // gotta figure out how to assign each user a userID that can be used as a key
  })

  .then(() => {
    console.log('stored in datbase');
    name.value = '';
    email.value = '';
    ctdMajorMinor.value = '';
    term.value = '';
    gradYear.value = '';
    reachOut.value = '';
    company.value = '';
    fullPart.value = '';
    jobIntern.value = '';
    title.value = '';
    city.value = '';
    state.value = '';
    payType.value = '';
    payRange.value = '';
  })

  .catch((e) => {
    console.log('Error', e);
  })


}, false);
 */

// probably need to include some error handling statements somewhere
