/*
 * 主页-- 入库路由 ： 产品货架关联、货架仓位关联
 */
angular.module('receipt.route', ['receipt.controller'])

.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('receipt-shelf', {
            url: '/productShelf',
            templateUrl: 'parts/receipt/productShelf.html',
            controller: 'ReceiptController'
        })
        .state('position-shelf', {
            url: '/positionShelf',
            templateUrl: 'parts/receipt/productShelf.html',
            controller: 'ReceiptController'
        })

});
