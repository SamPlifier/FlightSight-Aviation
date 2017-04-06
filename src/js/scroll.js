var navbar = document.getElementsByTagName('nav')[0];
var pxFromTop = 0;
var windWidth;

function fixNavTop() {
    navbar.className = 'navbar navbar-inverse navbar-fixed-top';
}
function unfixNav() {
    navbar.className = 'navbar navbar-inverse';
}

window.addEventListener('scroll', function(e) {
    pxFromTop = window.scrollY;
    windWidth = window.innerWidth;
    if ((windWidth > 767 && pxFromTop > 120) || (windWidth <= 767 && pxFromTop > 305)) {
        window.requestAnimationFrame(function() {
            fixNavTop();
        });
    } else if ((windWidth > 767 && pxFromTop <= 120) || (windWidth <= 767 && pxFromTop <= 305)) {
        window.requestAnimationFrame(function() {
            unfixNav();
        });
    } else {
        return;
    }
});
