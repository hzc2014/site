'use strict';

/**
 * @ngdoc function
 * @name angularTestApp.controller:BindingCtrl
 * @description
 * # BindingCtrl
 * Controller of the angularTestApp
 */
var app = angular.module('angularTestApp');

app.directive('superman', function () {
    return {
        restrict: 'E',
        template: '<div><font color="red">hello</font></div>'
    };
});

app.directive('flash', function () {
    return {
        restrict: 'A',
        link: function () {
            console.log('hello attr');
        }
    };
});

app.directive('class2', function () {
    return {
        restrict: 'C',
        link: function () {
            console.log('hello class');
        }
    };
});

app.directive('mousein', function () {
    return function ($scope, ele, attr) {
        ele.mouseover(function () {
//            console.log('mouse over');
            ele.addClass(attr.class);
        });
    };
});

app.directive('mousebye', function () {
    return function ($scope, ele, attr) {
        ele.mouseout(function () {
//            console.log('mouse out');
            ele.removeClass(attr.class);
        });
    };
});

app.controller('DirectiveCtrl', function ($scope) {
    $scope.saveUser = function (user) {
        console.log(user);
    };
});

app.directive('click', function () {
    return function ($scope, ele, attr) {
        ele.click(function () {
//            $scope.saveUser({a: 1, b: 'b'});
            $scope.$apply(attr.click);
        });
    };
});

//----------------------------------------------------

app.directive('superhero', function () {
    return {
        restrict: 'E',
        scope: {},
        controller: function ($scope) {
            $scope.ret = [];
            this.addFunc1 = function () {
                $scope.ret.push('func1');
            };
            this.addFunc2 = function () {
                $scope.ret.push('func2');
            };
        },
        link: function ($scope, ele) {
            ele.addClass('btn btn-default');
            ele.mouseenter(function () {
                console.log($scope.ret);
            });
        }
    };
});

app.directive('func1', function () {
    return {
        require: 'superhero',
        link: function ($scope, ele, attr, superCtl) {
            superCtl.addFunc1();
        }
    };
});

app.directive('func2', function () {
    return {
        require: 'superhero',
        link: function ($scope, ele, attr, superCtl) {
            superCtl.addFunc2();
        }
    };
});


//----------------------------------------------------
app.controller('LogCtl', function ($scope) {
    $scope.done = function (choice) {
        console.log(choice + ' is done.');
    };
});

app.directive('kid', function () {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            done: '&'
        },//不加此项，作用域就是全局的
        template: '<div><input type="text" ng-model="choice">' +
            '{{choice}}' +
            '<div class="btn btn-primary" ng-click="done({choice:choice});" ng-transclude>Done</div></div>'
    };
});

app.directive('mypassword', function () {
        var validElem = angular.element('<div>{{model.input}}</div>');
        var link = function ($scope) {
            $scope.$watch('model.input', function (v) {
                if (v === 'password') {
//                    elem.children(0).toggleClass('alert alert-warning');
                    validElem.addClass('alert alert-warning');
                } else {
                    validElem.removeClass('alert alert-warning');
                }
            });
        };
        return {
            restrict: 'E',
            replace: true,
            scope: {},
            template: '<div>\n    <input type="text" ng-model="model.input">\n</div>',
            compile: function (tElem) {
                tElem.append(validElem);
                return link;
            }
//        link: function ($scope, elem) {
//            $scope.$watch('model.input', function (v) {
//                if (v === 'password') {
//                    elem.children(0).toggleClass('alert alert-warning');
//                }
//            });
//        }
        };
    }
);



