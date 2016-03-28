// 全局变量文件
angular.module('global', [])
    .constant("GlobalVariable", {
        'queryProduct': 'http://192.168.1.6:3000/product/detail/',
        'imagePath': 'http://192.168.1.6:3000/uploads/',
        'receiptSave': 'http://192.168.1.6:3000/receipt/add',
        'queryCode': 'http://192.168.1.6:3000/code/detail/'
    });
