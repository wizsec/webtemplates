'use strict';

// Declare app level module which depends on filters, and services
angular.module('wizsec', [
    'wizsec.filters', 'wizsec.services', 'wizsec.directives'
]).config([
    '$routeProvider', function($routeProvider) {
      $routeProvider.when('/', {
          templateUrl: 'partials/home.html',
          controller: EmptyController
      });
      $routeProvider.when('/team', {
          templateUrl: 'partials/team.html',
          controller: EmptyController
      });
      $routeProvider.when('/services', {
          templateUrl: 'partials/services.html',
          controller: EmptyController
      });
      $routeProvider.when('/contact', {
          templateUrl: 'partials/contact.html',
          controller: EmptyController
      });
      $routeProvider.otherwise({
        redirectTo: '/'
      });
    }
]);
