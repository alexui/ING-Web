var myApp = angular.module("myApp", []);


myApp.controller(
	".mainCtrl", 
	function($scope) {

		$scope.listaTaskuri = ["task1", "task2", "task3"];

		$scope.adaugaTask = function () {
			$scope.listaTaskuri.push($scope.taskNou);
			$scope.taskNou="";
		}
	}
);

myApp.controller(
	"restCtrl",
	function ($scope, appService) {
		$scope.users = [];

		var getDataFromServer = function () {
			appService.getData().then(
				function success(data) {
					$scope.users = data.data;
				},
				function error(data) {
					alert("Ceva nu merge bine.");
				}
			);
		}

		getDataFromServer();
	}
)

myApp.service(
	"appService",
	function ($http) {
		var service = {};

		service.getData = function () {
			return $http({
				method: "GET",
				url: "http://jsonplaceholder.typicode.com/users"
			})
		}

		return service;
	}
);