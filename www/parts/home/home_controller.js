/**
 * Created by xuwen on 2016/3/13.
 */
angular.module('home.controller', [])
    .controller('HomeController', function($scope, $ionicActionSheet, $ionicModal, $cordovaBarcodeScanner) {

        $scope.receipt = {};

        // 创建并载入modal
        // 产品货架
        $ionicModal.fromTemplateUrl('product-shelf.html', function(modal) {
            $scope.productShelf = modal;
        }, {
            scope: $scope,
            animation: 'slide-in-up'
        });
        // 仓位货架
        $ionicModal.fromTemplateUrl('position-shelf.html', function(modal) {
            $scope.positionShelf = modal;
        }, {
            scope: $scope,
            animation: 'slide-in-up'
        });
        // 显示入库modal
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
        // 显示出库modal
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
        // 关闭modal
        $scope.closemodal = function() {
            $scope.productShelf.hide();
            $scope.productShelf.hide();
        };
        // reset暂时不好用~~~
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
        // 扫一扫
        $scopte.receipt = {};
        $scope.scanBarcode = function() {
            $cordovaBarcodeScanner.scan().then(
                function(imageData) {
                    var result = imageData.text;
                    // TODO：正则匹配类型，赋值给receipt
                    $scopte.receipt
                },
                function(error) {
                    alert("An error happened -> " + error);
                });
            // jsonp查询产品详情
            // $http.jsonp('http://localhost:3000/product/detail/' + $scope.values.pid + '?callback=JSON_CALLBACK')
            $http.jsonp(GlobalVariable.queryProduct + $scope.values.pid + '?callback=JSON_CALLBACK')
                .success(function(product) {
                    product.picture = GlobalVariable.imagePath + product.picture;
                    $scope.product = product;
                    // 修改图片的路径
                }).error(function(err) {
                    console.log(err);
                });
        };
    })
