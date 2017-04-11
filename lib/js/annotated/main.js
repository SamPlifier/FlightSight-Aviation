var flightSightApp = angular.module('flightSightAviationApp', ['ngRoute', 'ui.bootstrap', 'ngAnimate']);
flightSightApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl: 'home.html',
            controller: 'HomeController'
        })
        .when('/services', {
            templateUrl: 'services.html',
            controller: 'ServicesController'
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
    $scope.mobileLinkCollapse =
        function() {
            if (window.innerWidth <= 777) {
                $scope.isNavCollapsed = true;
                $scope.isCollapsed = false;
            }
        }
    $scope.isNavCollapsed = true;
    $scope.isCollapsed = false;
}]);
flightSightApp.controller('ServicesController', ['$scope', '$location', '$anchorScroll', 'mediaScroller',
    function($scope, $location, $anchorScroll, mediaScroller) {
        $scope.mediaExample = function(example) {
            $location.path('/media');
            mediaScroller.scrollDown(example);
        }
        $scope.oneAtATime = false;
    }
]);
flightSightApp.controller('MediaController', ['$scope', '$location', '$anchorScroll', 'mediaScroller', '$window',
    function($scope, $location, $anchorScroll, mediaScroller, $window) {
        // $location.hash(mediaScroller.scrollId());

        // $anchorScroll($location.hash(mediaScroller.scrollId()));
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
