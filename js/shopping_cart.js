"use strict"
var $ = function(id) { return document.getElementById(id); };

class Product {
  constructor ( price , name , description , id ) {
  this.price = price;
  this.name = name;
  this.description = description;
  this.id = id; }
}

var shoppingCart = [];
const products = [];

var populateProductArray = function() {
  products.push(new Product (15 , "Ballcap" , "white ballcap with titans logo printed in blue." , "hat") );
  products.push(new Product (40 , "Sports Jacket" , "blue jacket with the SPC logo on the back" , "jacket") );
  products.push(new Product (50 , "Outdoor Backpack" , "dark grey backpack with lots of zippers, perfect for the outdoors" , "backpack") );
  products.push(new Product (20 , "Waist bag" , "light grey bag that conviently clips around the waste for keeping what you need close" , "bag") );
  products.push(new Product (10 , "Water bottle" , "clear blue plastic water bottle to hold the water you need to hydrate yourself" , "bottle") );
}

// function to add to shopping cart
var add = function(itemID) {
  for (var i = 0; i < products.length; i++) {
    if (itemID == products[i].id) {
      shoppingCart.push(products[i]);
    }
  }
}

// function to remove from shopping cart
var remove = function(itemID) {
  for (var i = 0; i < shoppingCart.length; i++) {
    if (itemID == shoppingCart[i].id) {
      console.log(shoppingCart[i]);
      shoppingCart.splice(i , 1);
    }
  }
}

// function for changing cart number up
var cartNumberAdd = function() {
  var cartNum = parseInt($("cartNumber").innerHTML , 10);
  cartNum += 1;
  $("cartNumber").innerHTML = cartNum;
}

// function for changing cart number down
var cartNumberSubtract = function() {
  var cartNum = parseInt($("cartNumber").innerHTML , 10);
  if (cartNum > 0) {
    cartNum -= 1;
  }
  $("cartNumber").innerHTML = cartNum;
}

// storing
var storeCart = function () {
  $('cartLink').addEventListener('click', function(){
    sessionStorage.setItem("cart", JSON.stringify(shoppingCart));
    return("cart");
});
}

window.onload = function() {
let addButtons = document.getElementsByClassName("addButton");
  for (var i = 0; i < addButtons.length; i++) {
    addButtons[i].addEventListener("click" , cartNumberAdd);
  }

let removeButtons = document.getElementsByClassName("removeButton");
  for (var i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener("click" , cartNumberSubtract);
  }

populateProductArray();

var cart = storeCart();

// remove
$("remHat").onclick = function() {
  remove("hat") };
$("remJacket").onclick =  function() {
  remove("jacket") };
$("remBackpack").onclick =  function() {
  remove("backpack") };
$("remWaist").onclick =  function() {
  remove("bag") };
$("remBottle").onclick =  function() {
  remove("bottle") };

// add
$("addHat").onclick =  function() {
  add("hat") };
$("addJacket").onclick =  function() {
  add("jacket") };
$("addBackpack").onclick =  function() {
  add("backpack") };
$("addWaist").onclick =  function() {
  add("bag") };
$("addBottle").onclick =  function() {
  add("bottle") };
}
