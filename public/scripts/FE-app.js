console.log('js sourced');

var myApp = angular.module('myApp', []);

myApp.controller('pinkyController', ['$scope', function($scope){
 $scope.checkInput = function(){
   console.log('input gathered: '+ $scope.brainiacBinder );
 };




}]);
