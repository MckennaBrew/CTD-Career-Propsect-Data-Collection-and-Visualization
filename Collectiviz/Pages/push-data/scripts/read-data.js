/////////////////////////////////////////////////
/*
/// FOR FORM FUNCTION/NAVIGATION
*/
/////////////////////////////////////////////////

// Form Password

var pwdAnswer = "";
var pwd = "Sko Buffs!";
pwdAnswer = prompt("Enter password to view page:", "");

if (pwd == pwdAnswer) {
	// success
} else {
	window.location = "https://collectiviz-data.web.app/";
}

function secondFormPage(){

	//var employStatus = document.getElementById('employmentStatus').value;


	var workingForCompany = document.getElementById('workingForCompany').checked;
	var workingForSelf = document.getElementById('workingForSelf').checked;
	var notEmployed = document.getElementById('notEmployed').checked;
	var inSchool = document.getElementById('inSchool').checked;

	var enrolled = document.getElementById('enrolled').checked;
	var notEnrolled = document.getElementById('notEnrolled').checked;

	sectionOnePoint1 = document.getElementById('first_name').value;
	sectionOnePoint2 = document.getElementById('last_name').value;
	sectionOnePoint3 = document.getElementById('email').value;
	sectionOnePoint4 = document.getElementById('location').value;
	sectionOnePoint5 = document.getElementById('gradDate').value;

	if(sectionOnePoint1 != "" && sectionOnePoint2 != "" && sectionOnePoint3 != "" && sectionOnePoint4 != "" && sectionOnePoint5 != "") {

		if (workingForCompany == true) {
			workExperience();
		} else if (workingForSelf == true) {
			workExperience();
		} else if (notEmployed == true) {
			if (enrolled == true){
				graduateExperience();
			} else if (notEnrolled == true) {
				location.href = "#professionalPreparation";
			} else {
				alert("Please select an if you are enrolled in or completed a graduate program.");
			}

		} else if (inSchool == true) {
			graduateExperience();
		} else {
			alert("Please select an employement status!");
		}

	} else {
		alert("Please fill out all required fields!")
	}

}

function thirdFormPage(){

	var sectionTwoPoint1 = document.getElementById('jobTitle1').value;
	var sectionTwoPoint2 = document.getElementById('companyName1').value;
	var sectionTwoPoint3 = document.getElementById('dayToDay').value;
	var sectionTwoPoint4 = document.getElementById('doNext').value;
	var sectionTwoPoint5 = document.getElementById('in5Years').value;

	if(sectionTwoPoint1 != "" && sectionTwoPoint2 != "" && sectionTwoPoint3 != "" && sectionTwoPoint4 != "" && sectionTwoPoint5 != "") {

		var enrolled = document.getElementById('enrolled').checked;
		var notEnrolled = document.getElementById('notEnrolled').checked;

		if (enrolled == true){
			location.href = "#graduateExperience";
		} else if (notEnrolled == true){
			location.href = "#professionalPreparation";
		} else {
			// pass
		}
	} else {
		alert("Please fill out all required fields!");
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

	var sectionThreePoint1 = document.getElementById('degreeProgram').value;
	var sectionThreePoint2 = document.getElementById('gradTerm').value;

	if(sectionThreePoint1 != "" && sectionThreePoint2 != "") {
		location.href = "#professionalPreparation";
	} else {
		alert("Please fill out all required fields!");
	}
}

function ctdFeedback(){

	var sectionFourPoint1 = document.getElementById('profGoals').value;
	var sectionFourPoint2 = "";
	var sectionFourPoint3 = "";
	var sectionFourPoint4 = "";

	var sectionFourPoint2a = document.getElementById('preparedLevel1').checked;
	var sectionFourPoint2b = document.getElementById('preparedLevel2').checked;
	var sectionFourPoint2c = document.getElementById('preparedLevel3').checked;
	var sectionFourPoint2d = document.getElementById('preparedLevel4').checked;
	var sectionFourPoint2e = document.getElementById('preparedLevel5').checked;

	if(sectionFourPoint2a == true || sectionFourPoint2b == true || sectionFourPoint2c == true || sectionFourPoint2d == true || sectionFourPoint2e == true) {
		sectionFourPoint2 = "this has a value";
	}

	var sectionFourPoint3a = document.getElementById('skillUse1').checked;
	var sectionFourPoint3b = document.getElementById('skillUse2').checked;
	var sectionFourPoint3c = document.getElementById('skillUse3').checked;
	var sectionFourPoint3d = document.getElementById('skillUse4').checked;
	var sectionFourPoint3e = document.getElementById('skillUse5').checked;

	if (sectionFourPoint3a == true || sectionFourPoint3b == true || sectionFourPoint3c == true || sectionFourPoint3d == true || sectionFourPoint3e == true) {
		sectionFourPoint3 = "this has a value";
	}

	var sectionFourPoint4a = document.getElementById('ctdHelped1').checked;
	var sectionFourPoint4b = document.getElementById('ctdHelped2').checked;
	var sectionFourPoint4c = document.getElementById('ctdHelped3').checked;
	var sectionFourPoint4d = document.getElementById('ctdHelped4').checked;
	var sectionFourPoint4e = document.getElementById('ctdHelped5').checked;

	if (sectionFourPoint4a == true || sectionFourPoint4b == true || sectionFourPoint4c == true || sectionFourPoint4d == true || sectionFourPoint4e == true) {
		sectionFourPoint4 = "this has a value";
	}

	var sectionFourPoint5 = document.getElementById('likelyToRecommend').value;

	if(sectionFourPoint1 != "" && sectionFourPoint2 != "" && sectionFourPoint3 != "" && sectionFourPoint4 != "" && sectionFourPoint5 != "") {
		if (sectionFourPoint5 < 0 || sectionFourPoint5 > 10)  {
			alert("You must recommend a number between 0 and 10.");
		} else {
			location.href = "#ctdFeedback";
		}
	} else {
		alert("Please fill out all required fields!");
	}
}

function lastThoughts(){

	var sectionFivePoint1 = document.getElementById('mostFav').value;
	var sectionFivePoint2 = document.getElementById('leastFav').value;
	var sectionFivePoint3 = document.getElementById('mostUseful').value;
	var sectionFivePoint4 = document.getElementById('leastUseful').value;
	var sectionFivePoint5 = document.getElementById('firstChange').value;

	if(sectionFivePoint1 != "" && sectionFivePoint2 != "" && sectionFivePoint3 != "" && sectionFivePoint4 != "" && sectionFivePoint5 != "") {
		location.href = "#lastThoughts";
	} else {
		alert("Please fill out all required fields!");
	}
}

function submit(){
	location.href = "#thankYou";

}


/////////////////////////////////////////////////
/*
Pull Data from Form and Write to Database   + Drop Down Menus
*/
/////////////////////////////////////////////////

// where firebase API keys would go

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

console.log("called javascript");

// creates a refernce to our database
var alumniRef = firebase.database().ref('alumni');


/// DROP DOWN MENUS //////////////
// jobTitle1
//
var jobTitles = [];

alumniRef.orderByChild("jobTitle").on("child_added", function(data) {
	//console.log(data.val().jobTitle);
	jobTitles.push(data.val().jobTitle.toString());

	populateDropdown1(jobTitles);
});

function populateDropdown1(titleArray){
	titleArray.sort();
	var sortedTitles = [];

	for(var i = 0; i < titleArray.length; i++)
	{
		var j = 0;
		for(j = 0; j < sortedTitles.length; j++)
		{
			if(sortedTitles[j] == titleArray[i])
			{
				break;
			}

		}
		if(j == sortedTitles.length){
			sortedTitles.push(titleArray[i]);
		}

	}

	sortedTitles.push("Other");

	var select = document.getElementById('jobTitle1');
	select.innerHTML = "";

	for(var i = 0; i < sortedTitles.length; i++){
		var temp = sortedTitles[i];

		if(temp != "" && temp != "foo" && temp != "Foo"){
			var el = document.createElement("option");
			el.text = temp;
			el.value = temp;

			select.add(el);
		}
	}

}

// companyName1

var companyNames = [];

alumniRef.orderByChild("companyName").on("child_added", function(data) {
	//console.log(data.val().jobTitle);
	companyNames.push(data.val().companyName.toString());

	populateDropdown2(companyNames);
});

function populateDropdown2(companyArray){
	companyArray.sort();
	var sortedCompanies = [];

	for(var i = 0; i < companyArray.length; i++)
	{
		var j = 0;
		for(j = 0; j < sortedCompanies.length; j++)
		{
			if(sortedCompanies[j] == companyArray[i])
			{
				break;
			}

		}
		if(j == sortedCompanies.length){
			sortedCompanies.push(companyArray[i]);
		}

	}

	sortedCompanies.push("Other");

	var select = document.getElementById('companyName1');
	select.innerHTML = "";

	for(var i = 0; i < sortedCompanies.length; i++){
		var temp = sortedCompanies[i];

		if(temp != "" && temp != "foo" && temp != "Foo"){
			var el = document.createElement("option");
			el.text = temp;
			el.value = temp;

			select.add(el);
		}
	}
}


// pushes entered form data into the database

function pushNewData(e){

  //creates new reference for the alumni and their data we are going to add
  console.log("in pushData function");
  e.preventDefault();

  // First Section/Page //////////////////////////////////////////////

	var first_name = document.getElementById('first_name').value;
  //console.log(first_name);

	var last_name = document.getElementById('last_name').value;
  //console.log(last_name);

  var email = document.getElementById('email').value; // entry
  //console.log(email);

	var location = document.getElementById('location').value; // entry
	//console.log(location);

	var gradDate = document.getElementById('gradDate').value; // entry
	//console.log(gradDate);

  // var employmentStatus = document.getElementById('employmentStatus').value; // radio
	var employmentStatus = document.querySelector('input[name = "employementStatus"]:checked').value; // radio
  //console.log(employmentStatus);

	//var gradProgram = document.getElementById('gradProgram').value;
	var gradProgram = document.querySelector('input[name = "gradProgram"]:checked').value;
	//console.log(gradProgram);

	// Second Section/Page //////////////////////////////////////////////

	if (document.getElementById('jobTitle1').value == "Other"){
		var jobTitle = document.getElementById('jobTitle2').value;
		//console.log(jobTitle);
	}
	else {
		var jobTitle = document.getElementById('jobTitle1').value;
		//console.log(jobTitle);
	}


	if(document.getElementById('companyName1').value == "Other"){
		var companyName = document.getElementById('companyName2').value;
		//console.log(companyName);
	}
	else {
		var companyName = document.getElementById('companyName1').value;
		//console.log(companyName);
	}

  var dayToDay = document.getElementById('dayToDay').value;
	//console.log(dayToDay);

	var doNext = document.getElementById('doNext').value;
	//console.log(doNext);

	var in5Years = document.getElementById('in5Years').value;
	//console.log(in5Years);

	var degreeProgram = document.getElementById('degreeProgram').value;
	//console.log(degreeProgram);

	var gradTerm = document.getElementById('gradTerm').value;
  //console.log(gradTerm);

	var proffGoals = document.getElementById('profGoals').value;
	//console.log(proffGoals);

	//var preparedLevel = document.getElementById('preparedLevel').value;
	var preparedLevel = document.querySelector('input[name = "prep"]:checked').value; // radio
	//console.log(preparedLevel);

	//var skillUse = document.getElementById('skillUse').value;  // radio
	var skillUse = document.querySelector('input[name = "skillUse"]:checked').value;
	//console.log(skillUse);

	//var ctdHelped = document.getElementById('ctdHelped').value;  // radio
	var ctdHelped = document.querySelector('input[name = "influence"]:checked').value;
	//console.log(ctdHelped);

	///////////////////

	var likelyToRecommend = document.getElementById('likelyToRecommend').value;
	//console.log(likelyToRecommend);

	var whyRecommend = document.getElementById('whyRecommend').value;
	//console.log(whyRecommend);

	var mostFav = document.getElementById('mostFav').value;
	//console.log(mostFav);

	var leastFav = document.getElementById('leastFav').value;
	//console.log(leastFav);

	var mostUseful = document.getElementById('mostUseful').value;
	//console.log(mostUseful);

	var leastUseful = document.getElementById('leastUseful').value;
	//console.log(leastUseful);

	var firstChange = document.getElementById('firstChange').value;
	//console.log(firstChange);

	var finalThoughts = document.getElementById('finalThoughts').value;
	//console.log(finalThoughts);


  var newAlumniRef = alumniRef.push();

  newAlumniRef.set({
     'firstName': first_name,
		 'lastName': last_name,
     'userEmail': email,
		 'location': location,
		 'gradDate': gradDate,
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

	 submit()

 }

document.getElementById('submitButton').addEventListener('click', pushNewData, false);
