angular.module('test.route', ['test.controller'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('tab.test', {
    url: '/test',
    views: {
      'tab-test': {
        templateUrl: 'parts/test/test.html',
        controller: 'TestController'
      }
    }
  })
});
