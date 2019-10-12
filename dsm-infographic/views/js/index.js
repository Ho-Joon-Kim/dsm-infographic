var loginOpenButton = document.getElementById("loginOpen");
var loginCloseButton = document.getElementById("loginClose");
var loginBackground = document.getElementById("loginBackground")
var loginContent = document.getElementById("loginContent")

loginOpenButton.addEventListener("click", loginOpen);
loginCloseButton.addEventListener("click", loginClose);
loginBackground.addEventListener("click", loginClose);

function loginOpen() {
    loginBackground.style.height = "100%";
    loginContent.style.display = "inline-block";
}

function loginClose() {
    focusEle = document.activeElement;
    if(focusEle != loginContent) {
        loginBackground.style.height = "0%";
        loginContent.style.display = "none";
    }
}