var cartApp = angular.module('cart', []);

cartApp.controller('mainController', ['$scope', function($scope) {
	$scope.items = [];
}]);