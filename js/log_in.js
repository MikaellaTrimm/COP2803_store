"use strict"
var $ = function(id) { return document.getElementById(id); };

// function to check login
var logIn = function () {
  var email = $("username").value;
  var pass = $("password").value;
  var isValid = false;

  // checking if user is admin
  if (email == "admin@titanmusicstore.com" && pass == "admin123") {
    $('logInForm').action = 'sales.html';
  } else if (email == "user0@issuetracker.com" && pass == "password123") {
    $('logInForm').action = 'issues.html';
  } else {
    // validating login information
    if (localStorage.getItem("emailAddress") == email) {
      isValid = true;
    } else {
      isValid = false;
    }

    if (localStorage.getItem(email) == pass) {
      isValid = true;
    } else {
      isValid = false;
    }

    if (isValid == true) {
      alert("Logged In");
    } else {
      alert("incorrect login information, please retry.")
    }
  }

};


window.onload = function () {
  $("login").onclick = logIn;
}
