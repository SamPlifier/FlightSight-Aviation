var flightSightApp = angular.module('flightSightAviationApp', ['ngRoute', 'ui.bootstrap', 'ngAnimate']);
flightSightApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'home.html',
            controller: 'HomeController'
        })
        .when('/droneServices', {
            templateUrl: 'droneServices.html',
            controller: 'DroneServicesController'
        })
        .when('/aviationServices', {
            templateUrl: 'aviationServices.html',
            controller: 'AviationServicesController'
        })
        .when('/media', {
            templateUrl: 'media.html',
            controller: 'MediaController'
        })
        .when('/contact', {
            templateUrl: 'contact.html',
            controller: 'ContactController'
        })
        .when('/joinUs', {
            templateUrl: 'joinUs.html',
            controller: 'JoinUsController'
        })
        .when('/about', {
            templateUrl: 'aboutUs.html',
            controller: 'AboutUsController'
        })
        .when('/events', {
            templateUrl: 'events.html',
            controller: 'EventsController'
        })
        .when('/privacy', {
            templateUrl: 'privacy.html',
            controller: 'PrivacyController'
        })
        .when('/pricing', {
            templateUrl: 'pricing.html',
            controller: 'PricingController'
        });
}]);
// always scroll by 50 fewer pixels
flightSightApp.run(['$anchorScroll', function($anchorScroll) {
    $anchorScroll.yOffset = 50;
}]);
//Controllers
flightSightApp.controller('HomeController', ['$scope', function($scope) {
    var navDropDown = document.getElementsByClassName('navDropDown');
    $scope.mobileLinkCollapse =
        function() {
            if (window.innerWidth <= 777) {
                $scope.isNavCollapsed = true;
                $scope.isCollapsed = false;
            }
        }
    $scope.isNavCollapsed = true;
    $scope.isCollapsed = false;
    $scope.navDrop = {
        toggleNavDropDown: function() {
            if (navDropDown[0].className === 'navDropDown displayToggle') { //if services menu closed, open it
                navDropDown[0].className = 'navDropDown';
            } else if (navDropDown[0].className === 'navDropDown') { //if services menu open, close it
                navDropDown[0].className = 'navDropDown displayToggle';
            }
        },
        closeNavDropDown: function() {
            if (navDropDown[0].className = 'navDropDown') {
                navDropDown[0].className = 'navDropDown displayToggle';
            }
        }
    }
    $scope.privacy = function() {
        window.scrollTo(0,350);
    }
}]);
flightSightApp.controller('DroneServicesController', ['$scope', '$location', '$anchorScroll', 'mediaScroller',
    function($scope, $location, $anchorScroll, mediaScroller) {
        $scope.mediaExample = function(example) {
            $location.path('/media');
            mediaScroller.scrollDown(example);
        }
        $scope.oneAtATime = false;
    }
]);
flightSightApp.controller('AviationServicesController', ['$scope', function($scope) {
    $scope.even = true;
    $scope.odd;
    $scope.clickCount = 0;
    $scope.langSwitch = function() {
        $scope.clickCount++;
        if ($scope.clickCount % 2 !== 0) {
            $scope.even = false;
            $scope.odd = true;
        } else {
            $scope.even = true;
            $scope.odd = false;
        }
    }
}]);
flightSightApp.controller('MediaController', ['$scope', '$location', '$anchorScroll', 'mediaScroller', '$window',
    function($scope, $location, $anchorScroll, mediaScroller, $window) {
        $anchorScroll(mediaScroller.scrollId());
    }
]);
flightSightApp.controller('ContactController', ['$scope', function($scope) {
    initMap();
}]);
flightSightApp.controller('JoinUsController', ['$scope', function($scope) {}]);
flightSightApp.controller('AboutUsController', ['$scope', function($scope) {}]);
flightSightApp.controller('EventsController', ['$scope', function($scope) {
    var width = window.innerWidth;
    var mobileClass = document.getElementsByClassName('mobile')[0];
    var desktopClass = document.getElementsByClassName('desktop')[0];
    $scope.check = {
        desktop: null,
        mobile: null
    }
    if (width < 650) {
        $scope.check.mobile = true;
    } else {
        $scope.check.desktop = true;
    }
    window.addEventListener('resize', function() {
        width = window.innerWidth;
        if (width < 650) {
            desktopClass.className = 'desktop hidden';
            mobileClass.className = 'mobile';
        } else if (width >= 650) {
            mobileClass.className = 'mobile hidden';
            desktopClass.className = 'desktop';
        }
    })
}]);
flightSightApp.controller('PricingController', ['$scope', function($scope){}]);
flightSightApp.controller('PrivacyController', ['$scope', function($scope) {}]);
// Factory
flightSightApp.factory('mediaScroller', function() {
    var service = {};
    var lastClicked;
    service.scrollDown = function(example1) {
        lastClicked = example1;
    }
    service.scrollId = function() {
        return lastClicked;
    }
    return service;
});

function initMap() {
    var chapelHillNC = {
        lat: 35.913200,
        lng: -79.055847
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: chapelHillNC,
        scrollwheel: false
    });
    var marker = new google.maps.Marker({
        position: chapelHillNC,
        map: map
    });
}

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
    if (((windWidth > 767 && pxFromTop > 400) || (windWidth <= 767 && pxFromTop > 450)) && (navbar.className === 'navbar navbar-inverse')) {
        window.requestAnimationFrame(function() {
            fixNavTop();
        });
    } else if (((windWidth > 767 && pxFromTop <= 400) || (windWidth <= 767 && pxFromTop <= 450)) && (navbar.className === 'navbar navbar-inverse navbar-fixed-top')) {
        window.requestAnimationFrame(function() {
            unfixNav();
        });
    } else {
        return;
    }
});
