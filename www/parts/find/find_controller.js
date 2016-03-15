/**
 * Created by xuwen on 2016/3/13.
 */
angular.module('find.controller', [])

.controller("FindController", function($scope, $cordovaBarcodeScanner) {

  $scope.pid = '';
  $scope.scanBarcode = function() {

    $cordovaBarcodeScanner.scan().then(function(imageData) {
        $scope.pid = imageData.text;
      },
      function(error) {
        alert("An error happened -> " + error);
      });
  };
});
