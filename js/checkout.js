"use strict"

var $ = function(id) { return document.getElementById(id); };

var f_name = $("f_name");
var l_name = $("l_name");
var p_num = $("p_num");
var email = $("email")
var card_num = $("card_num")
var isValid = false

var checkoutForm = [];

// grabbing the array from localStorage
var getArray = function () {
      var getCart = sessionStorage.getItem("cart");
      var newCart = JSON.parse(getCart);
      return(newCart);
}

// checking validity of form
var validCheck = function () {
if (f_name) {
  checkoutForm.push(f_name);
  isValid = true;
} else {
  isValid = false;
}
if (l_name) {
  checkoutForm.push(l_name);
  isValid = true;
} else {
  isValid = false;
}
if (email) {
  checkoutForm.push(email);
  isValid = true;
} else {
  isValid = false;
}
if (p_num) {
  checkoutForm.push(p_num);
  isValid = true;
} else {
  isValid = false;
}
if (card_num) {
  checkoutForm.push(card_num);
  isValid = true;
} else {
  isValid = false;
}
}

// function to mod html to showing items
var listItems = function () {
  var listed = document.createElement("p");

  // styling
  listed.style.borderStyle = "solid";
  listed.style.borderWidth = "2px";
  listed.style.borderColor = "darkblue";
  listed.style.margin = "10px 80px";
  listed.style.padding = "100px 20px";
  listed.style.fontSize = "20px";

  // loop to populate names
  var itemNames = []
  for (var i = 0; i < finalCart.length; i++) {
    itemNames.push(finalCart[i].name);
  }

  listed.innerHTML = itemNames;

  return(listed);
}

var modNumbers = function() {
  // loop to get price
  var totalPrice = 0
  for (var i = 0; i < finalCart.length; i++) {
    totalPrice += finalCart[i].price;
  }

  $("totalCost").innerHTML = totalPrice;
  $("cartNumber").innerHTML = finalCart.length;
}

// window.onload is broken on this file for some reason so we just call it at the bottom
// window.onload = function() {

  var finalCart = getArray();
  modNumbers();
  var listedItems = listItems();
  $("itemsListedOnPage").appendChild(listedItems);
  $("submitPay").onclick = validCheck;
// }
