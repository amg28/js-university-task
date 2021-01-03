function informAboutFail(mainButton, transitionButton, message) {
    alert(message);
    animateButton(mainButton, transitionButton, "button-fail");
}

function animateButton(mainButton, transitionButton, styleClass) {
    var isFail = styleClass === "button-fail";
    if (isFail) {
        document.getElementById(mainButton).classList.add(styleClass);
        setTimeout(function () {
            document.getElementById(mainButton).classList.remove(styleClass);
        }, 1500);
    } else {
        document.getElementById(mainButton).classList.add("hidden");
        document.getElementById(transitionButton).classList.remove("hidden");
        document.getElementById(transitionButton).classList.add(styleClass);
        setTimeout(function () {
            document.getElementById(mainButton).classList.remove("hidden");
            document.getElementById(transitionButton).classList.add("hidden");
            document.getElementById(transitionButton).classList.remove(styleClass);
        }, 1500);
    }
}

function isNotEmpty(field) {
    return field != "";
}