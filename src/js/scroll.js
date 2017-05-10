var navbar = document.getElementsByTagName('nav')[0];
var main = document.getElementById('main');
var pxFromTop = 0;
var windWidth;

function fixNavTop() {
    navbar.className = 'navbar navbar-inverse navbar-fixed-top';
    main.className = 'scrollMargin';
}
function unfixNav() {
    navbar.className = 'navbar navbar-inverse';
    main.className = '';
}
window.addEventListener('scroll', function(e) {
    pxFromTop = window.scrollY;
    windWidth = window.innerWidth;
    if (((windWidth > 767 && pxFromTop > 230) || (windWidth <= 767 && pxFromTop > 350)) && (navbar.className === 'navbar navbar-inverse')) {
        window.requestAnimationFrame(function() {
            fixNavTop();
        });
    } else if (((windWidth > 767 && pxFromTop <= 230) || (windWidth <= 767 && pxFromTop <= 350)) && (navbar.className === 'navbar navbar-inverse navbar-fixed-top')) {
        window.requestAnimationFrame(function() {
            unfixNav();
        });
    } else {
        return;
    }
});
