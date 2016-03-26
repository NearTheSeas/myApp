/*
 * 主页-- 入库路由 ： 产品货架关联、货架仓位关联
 */
angular.module('receipt.route', ['receipt.controller'])

.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('receipt', {
            url: '/home',
            views: {
                'tab-home': {
                    templateUrl: 'parts/receipt/productShelf.html',
                    controller: 'ReceiptController'
                }
            }
        }).state('receipt', {
            url: '/home',
            views: {
                'tab-home': {
                    templateUrl: 'parts/receipt/productShelf.html',
                    controller: 'ReceiptController'
                }
            }
        })


    // $stateProvider
    //     .state('state1', {
    //         url: "/state1",
    //         templateUrl: "partials/state1.html"
    //     })
    //     .state('state1.list', {
    //         url: "/list",
    //         templateUrl: "partials/state1.list.html",
    //         controller: function($scope) {
    //             $scope.items = ["A", "List", "Of", "Items"];
    //         }
    //     })

});
