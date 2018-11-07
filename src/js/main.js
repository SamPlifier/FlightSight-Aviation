var flightSightApp = angular.module('flightSightAviationApp', ['ngRoute', 'ui.bootstrap', 'ngAnimate']);
flightSightApp.config(function($routeProvider, $locationProvider) {
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
        // $locationProvider.html5Mode(true);
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
        }//,
        // outsideClick: function() {
        //     document.addEventListener('click', function() {
        //         if (navDropDown[0].className = 'navDropDown') {
        //             navDropDown[0].className = 'navDropDown displayToggle';
        //         }
        //     });
        // }
    }
    $scope.privacy = function() {
        window.scrollTo(0, 350);
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
    $scope.language = {
        even: true,
        odd: '',
        clickCount: 0,
        langSwitch: function() {
            this.clickCount++;
            if (this.clickCount % 2 !== 0) {
                this.even = false;
                this.odd = true;
            } else {
                this.even = true;
                this.odd = false;
            }
        }
    }
});
flightSightApp.controller('MediaController', ['$scope', '$location', '$anchorScroll', 'mediaScroller', '$window',
    function($scope, $location, $anchorScroll, mediaScroller, $window) {
        $anchorScroll(mediaScroller.scrollId());
    }
]);
flightSightApp.controller('ContactController', function($scope) {
    initMap();
});
flightSightApp.controller('JoinUsController', function($scope) {});
flightSightApp.controller('AboutUsController', function($scope) {});
flightSightApp.controller('EventsController', function($scope) {
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
});
flightSightApp.controller('PricingController', function($scope) {});
flightSightApp.controller('PrivacyController', function($scope) {});
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
