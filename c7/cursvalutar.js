var myApp = angular.module("myApp", []);

myApp.controller(
	"myCtrl",
	function ($scope) {
		$scope.sum = 0;
		$scope.val = 0;
		$scope.result = 0;
		$scope.listMon = [
			{value:0.2, label:"euro"},
			{value:0.3, label:"usd"},
			{value:0.4, label:"yen"},
			{value:0.5, label:"gbp"},
		]

		$scope.newRow = {};
		$scope.values = $scope.values = [
			{value:1, name:"USD"},
			{value:2, name:"EUR"},
			{value:3, name:"GBR"},
		]

		$scope.selectedMon = $scope.listMon[0].value;

		console.log($scope.newRow);
	}
)