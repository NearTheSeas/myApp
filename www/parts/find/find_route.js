/**
 * Created by xuwen on 2016/3/13.
 */
angular.module('find.route', ['find.controller'])

.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

      .state('tab.find', {
        url: '/find',
        views: {
          'tab-find': {
            templateUrl: 'parts/find/find.html',
            controller: 'FindController'
          }
        }
      })
});