document.addEventListener('DOMContentLoaded', function () {
	document.getElementById("submitTask").addEventListener("click", function () {
		
		var field1 = document.getElementById("field1").value;
		var field2 = document.getElementById("field2").value;

		if (isNotEmpty(field1) || isNotEmpty(field2)) {
			if (parseInt(field1) < parseInt(field2)) {
				var result2 = getRandomValueArray(field1, field2);
				document.getElementById("result-1").innerHTML = result2.toString();
				animateButton("submitTask", "submitTaskSuccess", "button-success");
			} else {
				document.getElementById("result-1").innerHTML = "";
				informAboutFail("submitTask", "submitTaskSuccess", "Task 1. Not valid value range was provided for minimal and maximal values. Please check the values and try agian.");
			}
		} else {
			informAboutFail("submitTask", "submitTaskSuccess", "Please fill all form fields and try once agian.");
		}
	});

	function getRandomValueArray(field1, field2) {
		var result = [];
		for (var step = 0; step < 7; step++) {
			result.push(getRandomInt(field1, field2));
		}
		return result;
	}

	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
	}

}, false);