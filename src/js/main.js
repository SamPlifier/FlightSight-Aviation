var flightSightApp = angular.module('flightSightAviationApp', ['ngRoute', 'ui.bootstrap', 'ngAnimate']);
flightSightApp.config(function($routeProvider) {
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
});
// always scroll by 50 fewer pixels
flightSightApp.run(['$anchorScroll', function($anchorScroll) {
    $anchorScroll.yOffset = 50;
}]);
//Controllers
flightSightApp.controller('HomeController', function($scope) {
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
});
flightSightApp.controller('DroneServicesController', ['$scope', '$location', '$anchorScroll', 'mediaScroller',
    function($scope, $location, $anchorScroll, mediaScroller) {
        $scope.mediaExample = function(example) {
            $location.path('/media');
            mediaScroller.scrollDown(example);
        }
        $scope.oneAtATime = false;
    }
]);
flightSightApp.controller('AviationServicesController', function($scope) {
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
});
flightSightApp.controller('MediaController', ['$scope', '$location', '$anchorScroll', 'mediaScroller', '$window',
    function($scope, $location, $anchorScroll, mediaScroller, $window) {
        $anchorScroll(mediaScroller.scrollId());
    }
]);
flightSightApp.controller('ContactController', function($scope) {});
flightSightApp.controller('JoinUsController', function($scope) {});
flightSightApp.controller('AboutUsController', function($scope) {})
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
