/*
 * 主页-- 细分功能 入库、移库、出库、退货
 */
angular.module('home.route', ['home.controller'])

.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

      .state('tab.home', {
        url: '/home',
        views: {
          'tab-home': {
            templateUrl: 'parts/home/home.html',
            controller: 'HomeController'
          }
        }
      })
});