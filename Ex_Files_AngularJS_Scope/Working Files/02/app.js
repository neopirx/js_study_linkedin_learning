angular.module('learndigest', []);

angular.module('learndigest').controller('PlaygroundCtrl', function ($scope) {
  var vm = this;


  vm.dream = 'sweet dream';
  vm.enableForceEdit = true;
  vm.force = 30;

  vm.resetForce = function () {
    vm.force = 0;
  }

  var times = 0;
  $scope.$watch(function () {
    console.log('watcher was called ', times);
    times++;
    return 0;
  }, function () {});
});

angular.module('learndigest').controller('InternalCtrl', function ($scope) {
  var vm = this;
  vm.playground = $scope.$parent.vm;
  $('#theButton').on('click', function () {
    $scope.$apply(function () {
      vm.dream = 'nightmare';
      $scope.$digest();
    });
  });
});