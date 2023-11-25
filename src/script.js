var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
 $routeProvider
    .when('/home', {
      templateUrl: 'home.html',
      controller: 'HomeController'
    })
    .when('/contact', {
      templateUrl: 'contact.html',
      controller: 'ContactController'
    })
    .when('/about', {
      templateUrl: 'about.html',
      controller: 'AboutController'
    });
});

app.controller('HomeController', function($scope) {
 $scope.message = 'Ini adalah halaman beranda';
});

app.controller('ContactController', function($scope) {
 $scope.message = 'Ini adalah halaman kontak';
});

app.controller('AboutController', function($scope) {
 $scope.message = 'Ini adalah halaman tentang';
});