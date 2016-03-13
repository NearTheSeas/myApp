/**
 * Created by xuwen on 2016/3/13.
 * tab页路由
 */
angular.module('tab.route', ['tab.controller'])


.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  // setup an abstract state for the tabs directive
   .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'parts/tab/tab.html'
  })

});