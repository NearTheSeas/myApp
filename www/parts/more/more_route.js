angular.module('more.route', ['more.controller'])

.config(function($stateProvider, $urlRouterProvider) {


  $stateProvider

  //更多 日志、数据更新等
  .state('tab.more', {
    url: '/more',
    views: {
      'tab-more': {
        templateUrl: 'parts/more/more.html',
        controller: 'MoreController'
      }
    }
  });

});
