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
    // $scope.toggleNavDropDown = function() {
    //     console.log(navDropDown);
    //     if (navDropDown[0].className === 'navDropDown displayToggle') {
    //         navDropDown[0].className = 'navDropDown';
    //     } else if (navDropDown[0].className === 'navDropDown') {
    //         navDropDown[0].className = 'navDropDown displayToggle';
    //     }
    // }
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
    $scope.langSwitch = function(){
        $scope.clickCount ++;
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
flightSightApp.controller('ContactController', ['$scope', function($scope) {}]);
flightSightApp.controller('JoinUsController', ['$scope', function($scope) {}]);
flightSightApp.controller('AboutUsController', ['$scope', function($scope) {}])
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
