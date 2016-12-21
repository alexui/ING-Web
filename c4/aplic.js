var myApp = angular.module("myApp", []);

myApp.controller(
	".mainCtrl", 
	function($scope) {

		$scope.listaAngajati = [];

		$scope.addAngajat = function () {
			$scope.listaAngajati.push({
										"nume" : $scope.nume,
										"an" : $scope.anAngajare,
										"email": $scope.email
									});

			$scope.nume = "";
			$scope.anAngajare = "";
			$scope.email = "";
		}
	}
)