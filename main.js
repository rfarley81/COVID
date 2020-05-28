
function check(){

	var question1 = document.SymptomChecker.question1.value;
	var question2 = document.SymptomChecker.question2.value;
	var question3 = document.SymptomChecker.question3.value;
	var question4 = document.SymptomChecker.question4.value;
	var question5 = document.SymptomChecker.question5.value;
	var question6 = document.SymptomChecker.question6.value;
	var question7 = document.SymptomChecker.question7.value;
	var question8 = document.SymptomChecker.question8.value;
	var question9 = document.SymptomChecker.question9.value;
	var correct = 0;


	if (question1 == "yes") {
		correct = correct + 5; alert("Sorry you have a temperature. You must go home immediately. When you get home, please notify your supervisor or building officer of your symptoms.")
}
	if (question2 == "yes") {
		correct = correct + 1
}	
	if (question3 == "yes") {
		correct = correct + 6; alert("If your shortness of breath or difficulty breathing is severe, seek immeadiate emergency help. For mild symptoms, please go home and consult a physician. Notify your supervisor or building officer of your symptoms when you get home.")
}
	if (question4 == "yes") {
		correct = correct + 7; alert("Sorry you are not feeling well. It sounds like you have the chills. You should go home and notify your supervisor or building officer of your symptoms. Please consult a physician if your symptoms continue or become more severe.")
}
	if (question5 == "yes") {
		correct = correct + 1;
}	
	if (question6 == "yes") {
		correct = correct + 1;
}
	if (question7 == "yes") {
		correct = correct + 8; alert("Sorry you have a sore throat. You should go home and notify your supervisor or building officer of your symptoms. Please consult a physician if your symptoms continue or become more severe.")
}
	if (question8 == "yes") {
		correct = correct + 9; alert("Sorry you have lost your sense of taste or smell. This is severe symptom and you should head home immediately. Please notify your supervisor or building officer when you get home. You should also consult a physician as soon as possible.")		
}	
	if (question9 == "yes") {
		correct = correct + 1;
	}

	var messages = ["Sorry, you're not feeling well. You should go home. Please notify your supervior and if problems persist or are severe, contact a physician.", "Please continue to monitor your symptoms. If they become severe: go home, notify your supervisor, and consider consulting a physician.", "Great! Happy to hear you're feeling well. Please stay healthy!"];
	var score;

	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 3) {
		score = 1;
	}

	if (correct == 3) {
		score = 0;
	}

	if (correct > 3) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("message").innerHTML = messages[score];
	
	}