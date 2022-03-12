"use strict";
// function to validate the email subscription form
function validateSubscription() {
  var original_email = document.getElementById("origEmail").value;
  var confirm_email = document.getElementById("confirmEmail").value;
  var first_name = document.getElementById("fName").value;

  // validating first email submission
if (original_email) {
  document.getElementById("original_email_error").firstChild.nodeValue = "";
} else {
  document.getElementById("original_email_error").firstChild.nodeValue = "This field is required.";
}

// validating both emails match & second email has content
if (confirm_email == "") {
  document.getElementById("confirm_email_error").firstChild.nodeValue = "This field is required.";
} else if (confirm_email == original_email) {
  document.getElementById("confirm_email_error").firstChild.nodeValue = "";
} else {
  document.getElementById("confirm_email_error").firstChild.nodeValue = "This entry must equal the first entry.";
}

// validating name submission
if (first_name) {
  document.getElementById("name_error").firstChild.nodeValue = "";
} else {
  document.getElementById("name_error").firstChild.nodeValue = "This field is required.";
}

// thank you alert
if (document.getElementById("original_email_error").firstChild.nodeValue == "" &&
document.getElementById("confirm_email_error").firstChild.nodeValue == "" &&
document.getElementById("name_error").firstChild.nodeValue == "") {
  alert("Thank You for Joining our Email List :)")
}
};


// listening for the click event for submit button
document.getElementById("submitButton").addEventListener("click" , validateSubscription )
