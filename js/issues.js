"use strict"

var a = function(id) { return document.getElementById(id); };

function get_issues(){
  $.get("http://localhost:3000",function(issues){
    console.log(issues);
  })
}
