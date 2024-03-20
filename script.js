// script.js
window.onload = function() {
    document.getElementById("contactForm").onsubmit = function() {
        var x = document.forms["contactForm"]["email"].value;
        if (x === "") {
            alert("Email must be filled out");
            return false;
        }
    }
}