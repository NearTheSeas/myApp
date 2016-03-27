/**
 * Created by xuwen on 2016/3/13.
 */
angular.module('find.controller', [])
    .controller("FindController", function($scope, $http, $cordovaBarcodeScanner, GlobalVariable) {
        // 直接使用 $scope.pid 页面改变时，controller无法获取
        $scope.values = { pid: "" };
        $scope.product = null;
        // 点击查询
        $scope.scanBarcode = function() {
            // 如果已输入产品ID 则直接查询
            // console.log('产品ID' + $scope.values.pid);
            if (!$scope.values.pid) {
                $cordovaBarcodeScanner.scan().then(
                    function(imageData) {
                        $scope.values.pid = imageData.text;
                    },
                    function(error) {
                        alert("An error happened -> " + error);
                    });
            }
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
    });
