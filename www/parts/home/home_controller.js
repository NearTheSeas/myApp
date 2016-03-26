/**
 * Created by xuwen on 2016/3/13.
 */
angular.module('home.controller', [])
    .controller('HomeController', function($scope, $ionicActionSheet, $ionicModal) {

        $scope.receipt = {};

        // 创建并载入modal
        $ionicModal.fromTemplateUrl('product-shelf.html', function(modal) {
            $scope.productShelf = modal;
        }, {
            scope: $scope,
            animation: 'slide-in-up'
        });
        $ionicModal.fromTemplateUrl('position-shelf.html', function(modal) {
            $scope.positionShelf = modal;
        }, {
            scope: $scope,
            animation: 'slide-in-up'
        });
        // 入库操作
        $scope.ruku = function() {
            // 显示操作表
            $ionicActionSheet.show({
                buttons: [
                    { text: '仓位货架' },
                    { text: '货架产品' },
                ],
                titleText: '请选择要进行的操作',
                cancelText: 'Cancel',
                buttonClicked: function(index) {
                    switch (index) {
                        case 0:
                            $scope.productShelf.show();
                            return true;
                        case 1:
                            $scope.productShelf.show();
                            return true;
                        default:
                            return true;
                    }
                    return true;
                }
            });
        };
        // 出库操作
        $scope.chuku = function() {
            // 显示操作表
            $ionicActionSheet.show({
                buttons: [
                    { text: '单据下载' },
                    { text: '有单出库' },
                ],
                titleText: '请选择要进行的操作',
                cancelText: 'Cancel',
                buttonClicked: function(index) {
                    // switch (index) {
                    //     case 0:
                    //         break；
                    //     case 1:
                    //         break;
                    // }
                    return true;
                }
            });
        };

        // 关闭新增的modal
        $scope.closemodal = function() {
            $scope.productShelf.hide();
            $scope.productShelf.hide();
        };

        $scope.resetProduct = function() {
            // $scope.receipt.product_number = null;
        };
        $scope.resetShelf = function() {
            $scope.receipt.shelf_number = null;
        };
        // 表单提交时调用
        $scope.uploadReceipt = function() {
            console.log($scope.receipt);
            $scope.closemodal();
        };

    })
