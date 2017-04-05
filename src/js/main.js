var flightSightApp = angular.module('flightSightAviationApp', ['ngRoute', 'ui.bootstrap', 'ngAnimate']);
flightSightApp.config(function($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl: 'home.html',
            controller: 'HomeController'
        })
        .when('/products', {
            templateUrl: 'products.html',
            controller: 'ProductsController'
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
        });
});
//Controllers
flightSightApp.controller('HomeController', function($scope) {
    $scope.mobileLinkCollapse =
        function() {
            if (window.innerWidth <= 777) {
                $scope.isNavCollapsed = true;
                $scope.isCollapsed = false;
            }
        }
    $scope.isNavCollapsed = true;
    $scope.isCollapsed = false;
});
flightSightApp.controller('ProductsController', ['$scope', '$location', '$anchorScroll', 'mediaScroller',
    function($scope, $location, $anchorScroll, mediaScroller) {
        $scope.mediaExample = function(example) {
            // $location.path('/media');
            // $location.hash(example);
            $location.url('/media#' + example)
            $anchorScroll();
        }

        $scope.oneAtATime = false;
    }
]);
flightSightApp.controller('MediaController', ['$scope', '$location', '$anchorScroll', 'mediaScroller',
    function($scope, $location, $anchorScroll, mediaScroller) {
// console.log(mediaScroller.getArtist());
    $scope.artist = mediaScroller.getArtist();
    console.log($location);
    }
]);
flightSightApp.controller('ContactController', function($scope) {});
flightSightApp.controller('JoinUsController', function($scope) {
});
// Factory
flightSightApp.factory('mediaScroller', function() {

    var artist = 'Sam';
    var service = {};
    service.getArtist = function() {
        return artist;
    }
    return service;
});
