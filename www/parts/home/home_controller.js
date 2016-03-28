/**
 * Created by xuwen on 2016/3/13.
 */
angular.module('home.controller', [])
    .controller('HomeController', function($scope, $state, $ionicActionSheet, $ionicModal, $cordovaBarcodeScanner) {

        $scope.receipt = {};
        // 显示入库 ActionSheet
        $scope.ruku = function() {
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
                            $state.go("receipt-shelf");
                            return true;
                        case 1:
                            $state.go("receipt-shelf");
                            return true;
                        default:
                            return true;
                    }
                    return true;
                }
            });
        };
        // 显示出库 ActionSheet
        $scope.chuku = function() {
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
        // ================取消modal部分，因为调用扫一扫后 modal自己就隐藏了================
        // 创建并载入modal
        // 产品货架
        // $ionicModal.fromTemplateUrl('product-shelf.html', function(modal) {
        //     $scope.productShelf = modal;
        // }, {
        //     scope: $scope,
        //     animation: 'slide-in-up'
        // });
        // // 仓位货架
        // $ionicModal.fromTemplateUrl('position-shelf.html', function(modal) {
        //     $scope.positionShelf = modal;
        // }, {
        //     scope: $scope,
        //     animation: 'slide-in-up'
        // });
        // // 关闭modal
        // $scope.closemodal = function() {
        //     $scope.productShelf.hide();
        //     $scope.productShelf.hide();
        // };

        // $scope.resetShelf = function() {
        //     $scope.receipt.shelf_number = null;
        // };
    })
