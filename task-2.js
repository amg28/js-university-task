document.addEventListener('DOMContentLoaded', function () {

    document.getElementById("submitTask2").addEventListener("click", function () {
        var field = document.getElementById("field3").value;
        if (isNotEmpty(field)) {
            if (!isPersonalIdMatchingPattern(field)) {
                informAboutFail("submitTask2", "submitTaskSuccess2", "Personal Id number is not matching required pattern. Please check your personal id number and try once agian.");
            } else {
                var birthDate = field.slice(0, 6);
                var isBirthDateValid = validateBirthDate(birthDate);

                if (isBirthDateValid) {
                    var day = birthDate.slice(0, 2);
                    var month = birthDate.slice(2, 4);
                    var year = birthDate.slice(4, 6);

                    //Checks if birth date is from 20th or 21th century
                    if (field.slice(7, 8) == 1) {
                        year = 1900 + parseInt(year);
                    } else {
                        year = 2000 + parseInt(year);
                    }

                    document.getElementById("result-2").innerHTML = formatDate(new Date(year, month, day)).toString();
                    animateButton("submitTask2", "submitTaskSuccess2", "button-success");

                } else {
                    informAboutFail("submitTask2", "submitTaskSuccess2", "Birth date is not valid. Please check your personal id number and try once agian.");
                }
            }
        } else {
            informAboutFail("submitTask2", "submitTaskSuccess2", "Please fill all form fields and try once agian.");
        }
    });

    function formatDate(date) {
        var monthNames = [
            "December","January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November" 
        ];

        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();

        return day + ' ' + monthNames[monthIndex] + ' ' + year;
    }

    function validateBirthDate(birthDate) {
        var day = birthDate.slice(0, 2);
        var month = birthDate.slice(2, 4);
        if (day > 31 || month > 12) {
            return false;
        }
        return true;
    }

    function isPersonalIdMatchingPattern(field) {
        var pattern = new RegExp("^([0-9]{6})-([0-9]{5})$");
        return pattern.test(field);
    }

}, false);