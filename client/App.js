    var App = angular.module("App", [
        "App.controllers",
        "App.services",
        "App.directives",
        "App.filters",
        "ngRoute",
        "ngResource",
        "credit-cards",
        'ngSanitize'
    ]);

(function() {

    "use strict";


    App.config(function($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'public/view/home/home.html'
            })
            .when('/contact', {
                templateUrl: 'public/view/contact/contact.html'
            })
            .when('/about', {
                templateUrl: 'public/view/about/about.html'
            })
            .when('/order', {
                templateUrl : 'public/view/order/order.html',
                controller: 'OrderCtrl'
            })
            .when('/book', {
                templateUrl: 'public/view/flipbook/flipbook.html'
            })
            .when('/magazines', {
                templateUrl: 'public/view/papers/papers.html'
            })
            .when('/luach', {
                templateUrl: 'public/view/luach/luach.html',
                controller: 'luachCtrl'
            })
            // .when('/magazine', {
            //     templateUrl: 'view/magazine/magazine.html',
            //     controller: 'magazineCtrl'
            // })


        .otherwise({ redirectTo: 'home' });
    });


    var selector = '.nav li';

}());