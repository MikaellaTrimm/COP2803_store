var $ = function(id) {return document.getElementById(id); };


window.onload = function() {
  var slides = [
    {href: "imgs/backpack.jpg", title: "Titans Adidas Backpack"},
    {href: "imgs/jacket.jpg", title: "Titans Sports Jacket"},
    {href: "imgs/bottle.jpg", title: "Titans Water Bottle"}
  ];
  slideshow.loadImages(slides).startSlideShow($("productIMG") , $("imgCaption"));
  $("playOrPause").addEventListener("click" , slideshow.togglePlay);
};
