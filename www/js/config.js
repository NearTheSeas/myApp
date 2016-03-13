/**
 * Created by xuwen on 2016/3/13.
 * 不同平台的兼容性
 */
angular.module('config',[])
.config(function($ionicConfigProvider){
	
//    $ionicConfigProvider.platform.ios.tabs.style('standard');
      $ionicConfigProvider.platform.ios.tabs.position('bottom');
//    $ionicConfigProvider.platform.android.tabs.style('standard');
      $ionicConfigProvider.platform.android.tabs.position('bottom');
  
});
