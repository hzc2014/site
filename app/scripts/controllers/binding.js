'use strict';

/**
 * @ngdoc function
 * @name angularTestApp.controller:BindingCtrl
 * @description
 * # BindingCtrl
 * Controller of the angularTestApp
 */
var app = angular.module('angularTestApp');

//在两个以上的ctorller中共享数据
app.factory('Data', function () {
    return {
        message: 'hello'
    };
});

//添加一个过滤器
app.filter('reverse', function () {
    return function (text) {
        return (text || '').split('').reverse().join('');
    };
});

app.controller('BindingCtrl', function ($scope, Data) {
    $scope.data = Data;
});

app.controller('BindingCtrl2', function ($scope, Data) {
    $scope.data = Data;
    $scope.reversedMessage = function (message) {
        return (message || '').split('').reverse().join('');
    };
});