"use strict"
var $ = function(id) { return document.getElementById(id); };


// function to reset password
var reset = function() {
  var newPass = $("newPass").value;
  var newPass2 = $("newPass2").value;
  var isValid = false;

  if ( newPass &&  newPass == newPass2 ){
    localStorage.setItem("userPassword", newPass);
    alert("password reset")
  } else {
    $("p2_er").firstChild.nodeValue = "does not match";
  }
}

window.onload = function () {
  $("passResetButton").onclick = reset;
}
