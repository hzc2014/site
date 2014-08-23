'use strict';

describe('Controller: BindingCtrl', function () {

    // load the controller's module
    beforeEach(module('angularTestApp'));

    var BindingCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        BindingCtrl = $controller('BindingCtrl2', {
            $scope: scope
        });
    }));

    it('should reverser a text', function () {
        expect(scope.reversedMessage('ABCD')).toEqual('DCBA');
    });
});
