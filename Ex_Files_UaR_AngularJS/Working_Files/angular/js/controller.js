var myApp = angular.module('myApp', []);

myApp.controller('MyController', function MyController($scope) {

    $scope.author = {
        'name': 'Maciej',
        'title': 'Romanowski',
        'company': 'PJATK'
    }

});