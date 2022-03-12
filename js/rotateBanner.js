var banner = [
["google.com", "imgs/google.png"],
["wish.com", "imgs/wish.png"],
["amazon.com", "imgs/amazon.png"],
["facebook.com", "imgs/facebook.png"]
];
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
shuffle(banner);
document.getElementById('ad-container').innerHTML = '<a href="'+banner[0][0]+
'" target="_blank" rel="nofollow"><img src="'+banner[0][1]+
'" height=100px width=220px alt="100x220 Banner Ad" /></a>';
