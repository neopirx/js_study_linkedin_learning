angular.module('learndigest', []);

angular.module('learndigest').controller('PlaygroundCtrl', function($scope) {
  var vm = this;

  vm.enableForceEdit = true;
  vm.force = 30;

  vm.resetForce = function() {
    vm.force = 0;
  }

  $scope.$watch('vm.force', function(newValue, oldValue) {
    document.getElementById('bindme').innerHTML = vm.force;
  })
});

angular.module('learndigest').controller('InternalCtrl', function($scope) {
  var vm = this;

  vm.playground = $scope.$parent.vm;

  vm.secret = "shhhhhhhh" + vm.playground.force;
});
