var navbar = document.getElementsByTagName('nav')[0];
var main = document.getElementById('main');
var pxFromTop = 0;
var windWidth;

function fixNavTop() {
    console.log('fix called');
    navbar.className = 'navbar navbar-inverse navbar-fixed-top';
    main.className = 'scrollMargin';
}

function unfixNav() {
    console.log('unfix called');
    navbar.className = 'navbar navbar-inverse';
    main.className = '';
}
window.addEventListener('scroll', function(e) {
    pxFromTop = window.scrollY;
    windWidth = window.innerWidth;
    if (((windWidth > 767 && pxFromTop > 120) || (windWidth <= 767 && pxFromTop > 305)) && (navbar.className === 'navbar navbar-inverse')) {
        window.requestAnimationFrame(function() {
            fixNavTop();
        });
    } else if (((windWidth > 767 && pxFromTop <= 120) || (windWidth <= 767 && pxFromTop <= 305)) && (navbar.className === 'navbar navbar-inverse navbar-fixed-top')) {
        window.requestAnimationFrame(function() {
            unfixNav();
        });
    } else {
        return;
    }
});
