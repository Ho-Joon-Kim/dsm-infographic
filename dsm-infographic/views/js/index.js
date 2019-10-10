document.getElementById("loginClose").addEventListener("click", function(){
    document.getElementById("loginWrap").style.height = "0%";
    document.getElementById("loginContent").style.display = "none";
});

document.getElementById("loginOpen").addEventListener("click", function(){
    console.log("Open");
    document.getElementById("loginWrap").style.height = "100%";
    document.getElementById("loginContent").style.display = "inline-block";
});