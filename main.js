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
		image: 'http://images5.fanpop.com/image/photos/30300000/Arya-arya-stark-30307481-200-200.jpg',
		categories: ['Assassin', 'Child']
	},
	{
		id: 2,
		name: 'Tyrion Lannister',
		image: '',
		categories: ['Ruler']
	},
	{
		id: 3,
		name: 'Daeneris Targarien',
		image: '',
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
}]).directive('characterItem', function(){
	return {
		restrict: 'E',
		scope: {
			characterInfo: '=info'
		},
		templateUrl: 'character-item.html'
	}
});