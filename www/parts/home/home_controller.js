/**
 * Created by xuwen on 2016/3/13.
 */
angular.module('home.controller', [])

.controller('HomeController', function($scope, $ionicActionSheet) {

  //TODU:
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
        return true;
      }
    });
  };
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
        return true;
      }
    });
  }
})
