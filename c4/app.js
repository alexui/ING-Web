var theApp = angular.module("theApp", []);

theApp.controller(
	"appCtrl",
	function ($scope) {

		$scope.newRow = {};
		$scope.step = 1;

		$scope.list = [
				{name: "n1", year: 2010, email: "email@test.com"},
				{name: "n2", year: 2010, email: "email@test.com"},
				{name: "n3", year: 2010, email: "email@test.com"}
		]

		$scope.addData = function () {
			/* var 1
			if ($scope.newRowForm.$invalid) {
				alert("nu pot adauga date");
				return;
			}
			*/
			console.log($scope.newRowForm);
			$scope.list.push($scope.newRow);
			$scope.newRow = {};
			$scope.newRowForm.fName.$pristine = true;

		}

		$scope.nextStep = function () {
			$scope.step++;
		}

		$scope.valuesForSelect = [1, 2, 2, 3, 4, 5];

		$scope.values = [
			{value: 10, name:"saab"},
			{value: 20, name:"volvo"},
			{value: 30, name:"BMW"},
		]
	}
)

/*
	comment
*/