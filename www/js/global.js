// 全局变量文件
angular.module('global', [])
    .constant("GlobalVariable", {
        'queryProduct': 'http://localhost:3000/product/detail/',
        'imagePath': 'http://localhost:3000/uploads/',
        'VERSION': "0.0.1"
    });
