function formPage2(){

	var unemployed = document.getElementById('employmentStatus1').checked;
	var employed = document.getElementById('employmentStatus2').checked;
	var student = document.getElementById('employmentStatus3').checked;

	console.log(unemployed);
	console.log(employed);
	console.log(student);

	if (unemployed == true) {
		location.href = "alumni-u.html";
	} else if (employed == true) {
		location.href = "alumni-e.html";
	} else if (student == true) {
		location.href = "alumni-s.html";
	} else {
		alert("Please select an employement status!");
	} 

}

function takeMeHome(){
	location.href = "alumni-satisfaction.html";
}

function backToPage1(){
	location.href = "alumni-introduction.html";
}

function thankYouPage(){
	location.href = "thank-you.html";
}


	
