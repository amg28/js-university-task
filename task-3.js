document.addEventListener('DOMContentLoaded', function () {

    document.getElementById("submitTask3").addEventListener("click", function () {
        var field = document.getElementById("field4").value;
        if (isNotEmpty(field)) {
            document.getElementById("result-3").innerHTML = reverse(field);
            animateButton("submitTask3", "submitTaskSuccess3", "button-success");
        } else {
            informAboutFail("submitTask3", "submitTaskSuccess3", "Please fill all form fields and try once agian.");
        }
    });

    function reverse(s) {
        return s.split("").reverse().join("");
    }

}, false);