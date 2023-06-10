button = document.querySelector(".toggle-button");
hr = document.querySelector(".separator");
nav = document.querySelector("nav");

function btnclick() {
    console.log("slag");
    if (nav.style.display != "block") {
        nav.style.display = "block";
        hr.style.display = "block";
        nav.style.opacity = "1";
        hr.style.opacity = "1";
    } else {
        nav.style.display = "none";
        hr.style.display = "none";
        nav.style.opacity = "0";
        hr.style.opacity = "0";
    }
}