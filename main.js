var cartApp = angular.module('cart', []);

cartApp.controller('mainController', ['$scope', function($scope) {
	$scope.categories = [
		{id: 1,name: 'Warrior'},
		{id: 2, name: 'Assassin'},
		{id: 3, name: 'Meister'},
		{id: 4, name: 'Child'},
		{id: 5, name: 'Ruler'}
	];
	$scope.items = [
	{
		id: 1,
		name: 'Arya Stark',
		image: 'Images/arya.jpg',
		categories: ['Assassin', 'Child']
	},
	{
		id: 2,
		name: 'Tyrion Lannister',
		image: 'Images/tyrion.jpg',
		categories: ['Ruler']
	},
	{
		id: 3,
		name: 'Daenerys Targarien',
		image: 'Images/daenerys.jpg',
		categories: ['Ruler']
	},
	{
		id: 4,
		name: 'Jon Snow',
		image: '',
		categories: ['Warrior', 'Ruler']
	},
	{
		id: 5,
		name: 'Eddard Stark',
		image: '',
		categories: ['Warrior', 'Ruler']
	},
	{
		id: 6,
		name: 'Cersei Lannister',
		image: '',
		categories: ['Ruler']
	},
	{
		id: 7,
		name: 'Joffrey Baratheon',
		image: '',
		categories: ['Child', 'Ruler']
	}
	];
	$scope.applyFilter = function(filter){
		if ($scope.search==filter){
			$scope.search = '';
		}
		else {
			$scope.search = filter;
		}
	};
	$scope.cart = [];
	$scope.addToCart = function(characterId) {
		$scope.cart.push(characterId);
	};
	$scope.removeFromCart = function(characterName) {
		var index = $scope.cart.indexOf(characterName);
		if (index>-1) {
			$scope.cart.splice(index, 1);
		}
	}
	$scope.showCart = function() {
		var cartPane = document.getElementById('cartPane');
		if (cartPane){
			if (cartPane.classList) {
				if (cartPane.classList.contains('visible')) {
					cartPane.classList.remove('visible');
				}
				else {
					cartPane.classList.add('visible');
				}
			}
		}
	};
}]).directive('characterItem', function(){
	return {
		restrict: 'E',
		scope: {
			characterInfo: '=info'
		},
		templateUrl: 'character-item.html'
	}
});