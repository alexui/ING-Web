var myApp = angular.module("myApp", []);


myApp.controller(
	".mainCtrl", 
	function($scope) {

		$scope.result = 0;

		$scope.add = function () {
			console.log("add");
			$scope.result = parseInt($scope.operandOne) + parseInt($scope.operandTwo);
		}

		$scope.sub =function () {
			$scope.result = parseInt($scope.operandOne) - parseInt($scope.operandTwo);
		}
	}
);