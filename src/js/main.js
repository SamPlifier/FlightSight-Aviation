var flightSightApp = angular.module('flightSightAviationApp', ['ngRoute', 'ui.bootstrap', 'ngAnimate']);
flightSightApp.config(function($routeProvider) {
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
flightSightApp.controller('ServicesController', ['$scope', '$location', '$anchorScroll', 'mediaScroller',
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
console.log(mediaScroller.getArtist());
    $scope.artist = mediaScroller.getArtist();
    console.log($location);
    }
]);
flightSightApp.controller('ContactController', function($scope) {});
flightSightApp.controller('JoinUsController', function($scope) {
});
flightSightApp.controller('AboutUsController', function($scope) {
    // console.log(document.getElementsByClassName('ng-scope')[0]);
})
// Factory
flightSightApp.factory('mediaScroller', function() {

    var artist = 'Sam';
    var service = {};
    service.getArtist = function() {
        return artist;
    }
    return service;
});
