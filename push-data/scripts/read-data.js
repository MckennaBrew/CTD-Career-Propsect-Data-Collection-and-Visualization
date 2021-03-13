/////////////////////////////////////////////////
/*
/// FOR FORM FUNCTION/NAVIGATION
*/
/////////////////////////////////////////////////

function secondFormPage(){

	//var employStatus = document.getElementById('employmentStatus').value;


	var workingForCompany = document.getElementById('workingForCompany').checked;
	var workingForSelf = document.getElementById('workingForSelf').checked;
	var notEmployed = document.getElementById('notEmployed').checked;
	var inSchool = document.getElementById('inSchool').checked;

	var enrolled = document.getElementById('enrolled').checked;
	var notEnrolled = document.getElementById('notEnrolled').checked;

	if (workingForCompany == true) {
		workExperience();
	} else if (workingForSelf == true) {
		workExperience();
	} else if (notEmployed == true) {
		if (enrolled == true){
			graduateExperience();
		} else if (notEnrolled == true) {
			professionalPreparation();
		} else {
			alert("Please select an if you are enrolled in or completed a graduate program.");
		}

	} else if (inSchool == true) {
		graduateExperience();
	} else {
		alert("Please select an employement status!");
	}

}

function thirdFormPage(){
	var enrolled = document.getElementById('enrolled').checked;
	var notEnrolled = document.getElementById('notEnrolled').checked;

	if (enrolled == true){
		graduateExperience();
	} else if (notEnrolled == true){
		professionalPreparation();
	} else {
		// pass
	}
}

function thankYouPage(){
	location.href = "thank-you.html";
}

function introduction(){
	location.href = "#introduction";
}

function workExperience(){

	location.href = "#workExperience";
}

function graduateExperience(){
	location.href = "#graduateExperience";
}

function professionalPreparation(){
	location.href = "#professionalPreparation";
}

function ctdFeedback(){
	location.href = "#ctdFeedback";
}

function lastThoughts(){
	location.href = "#lastThoughts";
}

/* function submit(){
	location.href = "#thankYou";
	startConfetti();
} */


/////////////////////////////////////////////////
/*
Pull Data from Form and Write to Database
*/
/////////////////////////////////////////////////

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

console.log("called javascript");

// creates a refernce to our database
var alumniRef = firebase.database().ref('alumni');

function pushNewData(e){
  //creates new referemce for the alumni and their data we are going to add
  console.log("in pushData function");
  e.preventDefault();

  // First Section/Page //////////////////////////////////////////////

	var first_name = document.getElementById('first_name').value;
  console.log(first_name);

	var last_name = document.getElementById('last_name').value;
  console.log(last_name);

  var email = document.getElementById('email').value; // entry
  console.log(email);

  // var employmentStatus = document.getElementById('employmentStatus').value; // radio
	var employmentStatus = document.querySelector('input[name = "employementStatus"]:checked').value; // radio
  console.log(employmentStatus);

	//var gradProgram = document.getElementById('gradProgram').value;
	var gradProgram = document.querySelector('input[name = "gradProgram"]:checked').value;
	console.log(gradProgram);

	// Second Section/Page //////////////////////////////////////////////

	if (document.getElementById('jobTitle1').value == "other"){
		var jobTitle = document.getElementById('jobTitle2').value;
		console.log(jobTitle);
	}
	else {
		var jobTitle = document.getElementById('jobTitle1').value;
		console.log(jobTitle);
	}


	if(document.getElementById('companyName1').value == "other"){
		var companyName = document.getElementById('companyName2').value;
		console.log(companyName);
	}
	else {
		var companyName = document.getElementById('companyName1').value;
		console.log(companyName);
	}

// not sure about these rn..all have same exampleFormControlTextarea1 as ID

  var dayToDay = document.getElementById('dayToDay').value;
	console.log(dayToDay);

	var doNext = document.getElementById('doNext').value;
	console.log(doNext);

	var in5Years = document.getElementById('in5Years').value;
	console.log(in5Years);

	var degreeProgram = document.getElementById('degreeProgram').value;
	console.log(degreeProgram);

	var gradTerm = document.getElementById('gradTerm').value;
  console.log(gradTerm);

	var proffGoals = document.getElementById('profGoals').value;
	console.log(proffGoals);

	//////////////////// weird af

	//var preparedLevel = document.getElementById('preparedLevel').value;
	var preparedLevel = document.querySelector('input[name = "prep"]:checked').value; // radio
	console.log(preparedLevel);

	//var skillUse = document.getElementById('skillUse').value;  // radio
	var skillUse = document.querySelector('input[name = "skillUse"]:checked').value;
	console.log(skillUse);

	//var ctdHelped = document.getElementById('ctdHelped').value;  // radio
	var ctdHelped = document.querySelector('input[name = "influence"]:checked').value;
	console.log(ctdHelped);

	///////////////////

	var likelyToRecommend = document.getElementById('likelyToRecommend').value;
	console.log(likelyToRecommend);

	var whyRecommend = document.getElementById('whyRecommend').value;
	console.log(whyRecommend);

	var mostFav = document.getElementById('mostFav').value;
	console.log(mostFav);

	var leastFav = document.getElementById('leastFav').value;
	console.log(leastFav);

	var mostUseful = document.getElementById('mostUseful').value;
	console.log(mostUseful);

	var leastUseful = document.getElementById('leastUseful').value;
	console.log(leastUseful);

	var firstChange = document.getElementById('firstChange').value;
	console.log(firstChange);

	var finalThoughts = document.getElementById('finalThoughts').value;
	console.log(finalThoughts);


  var newAlumniRef = alumniRef.push();

  newAlumniRef.set({
     'firstName': first_name,
		 'lastName': last_name,
     'userEmail': email,
		 'employmentStatus': employmentStatus,
		 'gradProgram': gradProgram,
		 'jobTitle': jobTitle,
		 'companyName': companyName,
		 'dayToDay': dayToDay,
		 'doNext': doNext,
		 'in5Years': in5Years,
		 'degreeProgram': degreeProgram,
		 'gradTerm': gradTerm,
		 'proffGoals': proffGoals,
		 'preparedLevel': preparedLevel,
		 'skillUse': skillUse,
		 'ctdHelped': ctdHelped,
		 'likelyToRecommend': likelyToRecommend,
		 'whyRecommend': whyRecommend,
		 'mostFav': mostFav,
		 'leastFav': leastFav,
		 'mostUseful': mostUseful,
		 'leastUseful': leastUseful,
		 'firstChange': firstChange,
		 'finalThoughts': finalThoughts
   })
 }

document.getElementById('submitButton').addEventListener('click', pushNewData, false);
