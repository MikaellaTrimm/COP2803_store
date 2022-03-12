"use strict"
var $ = function(id) { return document.getElementById(id); };

// function to process all entries
var processEntries = function() {

  var isValid = true;

// assigning values to variables
  var email = $("emailAd").value;
  var phone = $("phoneNumber").value;
  var streetAddress = $("address").value;
  var city = $("city").value;
  var state = $("state").value;
  var zip = $("zipCode").value;
  var contactMethod = $("contactBy").value;
  var terms = $("tos").value;
  var password = $("pass").value;

  // checking validity
  // email
  if (email) {
    $("email_error").firstChild.nodeValue = email;
  } else {
    isValid = false;
    $("email_error").firstChild.nodeValue = "* required"
  }
  if (password) {
    $("pass_error").firstChild.nodeValue = password;
  } else {
    isValid = false;
    $("pass_error").firstChild.nodeValue = "* required"
  }
  // phone Number
  if (phone) {
    $("phone_error").firstChild.nodeValue = phone;
  } else {
    $("phone_error").firstChild.nodeValue = "* required"
    isValid = false;
  }
  // street address
  if (streetAddress) {
    $("address_error").innerHTML = streetAddress;
  } else {
    $("address_error").innerHTML = "* required"
    isValid = false;
  }
  // city
  if (city) {
    $("city_error").innerHTML = city;
  } else {
    $("city_error").innerHTML = "* required"
    isValid = false;
  }
  // state
  if (state) {
    $("state_error").innerHTML = state;
  } else {
    $("state_error").innerHTML = "* required"
    isValid = false;
  }
  // zip
  if (zip) {
    $("zip_error").innerHTML = zip;
  } else {
    $("zip_error").innerHTML = "* required"
    isValid = false;
  }
  // contact preference
  if (contactMethod) {
    $("contact_error").innerHTML = contactMethod;
  } else {
    $("contact_error").innerHTML = "* required"
    isValid = false;
  }
  // tos
  if (terms != "I Accept") {
    $("tos_error").innerHTML = "* must accept"
    isValid = false;
  } else {
    $("tos_error").innerHTML = terms;
  }

  // storing the registration information
  localStorage.setItem("emailAddress", email);
  localStorage.setItem(email, password);
  localStorage.setItem(email + "phoneNum", phone);
  localStorage.setItem(email + "userAddress", streetAddress);
  localStorage.setItem(email + "userCity", city);
  localStorage.setItem(email + "userState", state);
  localStorage.setItem(email + "userZip", zip);
  localStorage.setItem(email + "method", contactMethod);
  localStorage.setItem(email + "termsOS", terms);

// sending alert if everything is valid
if (isValid == true) {
  alert("Registration Completed!")
}
};

var reset = function() {
  $("registerForm").reset();
  $("email_error").innerHTML = "*";
  $("phone_error").innerHTML = "*";
  $("pass_error").innerHTML = "*";
  $("address_error").innerHTML = "*";
  $("city_error").innerHTML = "*";
  $("state_error").innerHTML = "*";
  $("zip_error").innerHTML = "*";
  $("contact_error").innerHTML = "*";
  $("tos_error").innerHTML = "*";
}

window.onload = function() {
  $("registerButton").onclick = processEntries;
  $("resetButton").onclick = reset;
}
