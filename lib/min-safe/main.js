var flightSightApp = angular.module('flightSightAviationApp', ['ngRoute', 'ui.bootstrap', 'ngAnimate']);
flightSightApp.config(['$routeProvider', function($routeProvider) {
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
}]);
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
flightSightApp.controller('ProductsController', ['$scope', '$location', '$anchorScroll',
    function($scope, $location, $anchorScroll) {

        $scope.mediaExample = function(example) {
            $location.path('/media');
            $location.hash(example);
            $anchorScroll();
        }
        $scope.oneAtATime = false;
    }
]);
flightSightApp.controller('MediaController', ['$scope', '$location', '$anchorScroll',
    function($scope, $location, $anchorScroll) {}
]);
flightSightApp.controller('ContactController', ['$scope', function($scope) {}]);
flightSightApp.controller('JoinUsController', ['$scope', function($scope) {}]);
