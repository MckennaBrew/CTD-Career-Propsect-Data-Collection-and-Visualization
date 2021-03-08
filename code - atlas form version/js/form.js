function secondFormPage(){

	var workingForCompany = document.getElementById('employmentStatus1').checked;
	var workingForSelf = document.getElementById('employmentStatus2').checked;
	var notEmployed = document.getElementById('employmentStatus3').checked;
	var inSchool = document.getElementById('employmentStatus4').checked;

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

function submit(){
	location.href = "#thankYou";
}



	
