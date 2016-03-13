/**
 * Created by xuwen on 2016/3/13.
 */
angular.module('login.route', ['login.controller'])

  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'parts/login/login.html',
        controller: 'LoginController'
      })

  });
