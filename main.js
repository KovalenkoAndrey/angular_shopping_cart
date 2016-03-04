var cartApp = angular.module('cart', []);

cartApp.controller('mainController', ['$scope', 'dateRetrieverService', function($scope, dateRetrieverService) {
	$scope.categories = dateRetrieverService.getCategories();
	$scope.items = dateRetrieverService.getItems();
	$scope.applyFilter = function(filter){
		if ($scope.search === filter){
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
		$scope.cartVisible = !$scope.cartVisible;
	};
	$scope.cartVisible = false;
}]).service('dateRetrieverService', function() {
	this.getItems = function() {
		return [
			{
				id: 1,
				name: 'Arya Stark',
				image: 'images/arya.jpg',
				categories: ['Assassin', 'Child']
			},
			{
				id: 2,
				name: 'Tyrion Lannister',
				image: 'images/tyrion.jpg',
				categories: ['Ruler']
			},
			{
				id: 3,
				name: 'Daenerys Targarien',
				image: 'images/daenerys.jpg',
				categories: ['Ruler']
			},
			{
				id: 4,
				name: 'Jon Snow',
				image: 'images/jonsnow.jpg',
				categories: ['Warrior', 'Ruler']
			},
			{
				id: 5,
				name: 'Eddard Stark',
				image: 'images/nedstark.jpg',
				categories: ['Warrior', 'Ruler']
			},
			{
				id: 6,
				name: 'Cersei Lannister',
				image: 'images/cersei.jpg',
				categories: ['Ruler']
			},
			{
				id: 7,
				name: 'Joffrey Baratheon',
				image: 'images/joffrey.png',
				categories: ['Child', 'Ruler']
			}
		];
	};
	this.getCategories = function() {
		return [
			{id: 1,name: 'Warrior'},
			{id: 2, name: 'Assassin'},
			{id: 3, name: 'Meister'},
			{id: 4, name: 'Child'},
			{id: 5, name: 'Ruler'}
		];
	};
});