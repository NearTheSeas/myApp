/**
 * Created by xuwen on 2016/3/13.
 */
angular.module('receipt.controller', [])

.controller('ReceiptController', function($scope, $http, $ionicActionSheet, $ionicHistory, $cordovaBarcodeScanner, GlobalVariable) {
    $scope.receipt = {};

    $scope.scanBarcode = function() {
        $cordovaBarcodeScanner.scan().then(
            function(imageData) {
                var result = imageData.text;
                alert("扫描结果：" + result);
                checkInput(result);
            },
            function(error) {
                alert("An error happened -> " + error);
            });
    };

    function checkInput(result) {
        // TODO：正则匹配类型，赋值给receipt
        // 产品内部码 第一位是 7 8 9

        var checkProduct = /[789][0-9]{7,}/;
        if (checkProduct.test(result)) {
            $scope.receipt.product_number = result;
            return;
        }
        // 产品追踪码简化，只能扫捆， 捆 10位数字 第一位是5
        var checkCode = /[5][0-9]{9}/;
        if (checkCode.test(result)) {
            $http.jsonp(GlobalVariable.queryCode + result + '?callback=JSON_CALLBACK')
                .success(function(code) {
                    $scope.receipt.products = code.children;
                    $scope.receipt.queryCode = result;
                }).error(function(err) {
                    console.log(err);
                });
            return;
        }
        // 货架 4位数字
        var checkShelf = /[0-9]{1,4}/;
        if (checkShelf.test(result) && result.length == 4) {
            $scope.receipt.shelf_number = result;
            return;
        }
        // 仓位 4位数，第二位是字母
        // var checkPosition = /^\d{1}\w{1}\d{2}$/;
        // if (checkPosition.test(text)) {
        //     $scope.receipt.position
        // }
    }
    $scope.goBack = function() {
        $ionicHistory.goBack();
    }
    $scope.uploadReceipt = function() {
        // $http({
        //         method: 'POST',
        //         url: GlobalVariable.receiptSave,
        //         params: $scope.receipt,
        //         headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        //     })
        $http.jsonp(GlobalVariable.receiptSave, $scope.receipt)
            .success(function(result) {
                alert(result);
            }).error(function(err) {
                console.log(err);
            });
    }
})
