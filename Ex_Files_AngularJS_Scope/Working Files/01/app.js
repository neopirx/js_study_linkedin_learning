angular.module('learndigest', []);

angular.module('learndigest').controller('PlaygroundCtrl', function ($scope) {
    var vm = this;

    vm.userProperties = {
        favouriteColor: 'white',
        nickname: 'dick',
        force: 30
    }

    vm.enableForceEdit = true;
    vm.userProperties.force = 30;

    vm.resetForce = function () {
        vm.userProperties.force = 0;
    }

    $scope.$watch('vm.userProperties', function() {
        console.log('change');
    }, true)
});

angular.module('learndigest').controller('InternalCtrl', function ($scope) {

    var vm = this;

    vm.secret = "shhhhh" + $scope.playground.force;
});