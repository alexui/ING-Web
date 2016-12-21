var orderApp = angular.module("orderApp", []);

orderApp.controller(
	"OrderFormController",
	function($scope) {
		$scope.totalSum = 0;
		$scope.products = [
			{
				name: 'Tutorials Development',
				price: 500,
				active:false
			},{
				name: 'Tutorials Design',
				price: 300,
				active:false
			},{
				name: 'Code Integration',
				price: 250,
				active:false
			},{
				name: 'Training',
				price: 220,
				active:false
			}
		];

		$scope.doClick = function (index) {
			if ($scope.products[index].active ) {
				$scope.products[index].active = false;
				$scope.totalSum -= $scope.products[index].price;
			}
			else {
				$scope.products[index].active = true;
				$scope.totalSum += $scope.products[index].price;
			}			
		}
	}
)
