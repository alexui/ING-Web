var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(function($routeProvider) {
	$routeProvider
	.when(
		"/about",
		{
			template: `<h1>This is the about page</h1>`
		}
	)
	.when(
		"/list",
		{
			template: `
				<div ng-repeat="user in users">
					<user data="{{user}}"></user>
				</div>
			`,
			controller: mainCtrl
		}
	)
	.when(
		"/add/:id",
		{
			template: `this is the add page`,
			controller: addCtrl
		}
	)

	$routeProvider.otherwise({redirectTo: '/about'});
})

var addCtrl = function ($scope, $routeParams) {
	alert("Voi edita obiectul cu" + $routeParams.id)
}

var mainCtrl = function($scope, appService) {
	$scope.users = [];

	var getDataFromServer = function() {
			appService.getData().then(
				function success(data) {
					$scope.users = data.data;
					alert("au sosit datele");
					//console.log(data.data);
				},
				function error(err) {
					alert("Ceva nu merge bine")
				}
			);
	}

	getDataFromServer();

	$scope.$on(
		"dateSterse",
		function() {
			alert("Trebuie sa fac refresh.")
			getDataFromServer();
		}
	)
}
/*
myApp.service(
	"appService",
	function($http) {
		var service = {};
		service.getData = function() {
			return "here is some data";

			$http({
				method: "GET",
				url: "http://jsonplaceholder.typicode.com/users"
			}).then(
				function success(data) {
					alert("au sosit datele");
					console.log(data);
				},
				function error(err) {
					alert("Ceva nu merge bine")
				}
			)

		}
		return service;
	}
)
*/

myApp.service(
	"appService",
	function ($http) {
		var service = {};
		service.getData = function() {

			return $http({
				method: "GET",
				url: "http://jsonplaceholder.typicode.com/users"
			})
		}

		service.deleteUser = function(id) {
			//return "here is some data";

			return $http({
				method: "DELETE",
				url: "http://jsonplaceholder.typicode.com/users/" + id,
				data: {
					operationType : "delete"
				}
			})
		}

		return service;
	}
)

myApp.directive(
	"user",
	function(appService) {
		return {
			restrict: "E",
			scope: {data: "@"},
			link: function(scope, el) {
				scope.user = angular.fromJson(scope.data);
				scope.doDelete = function () {
					appService.deleteUser(scope.user.id).then(
						function(data) {
							scope.$emit("dateSterse")
						},
						function(err) {

						}
					)
				}
			},
			template : `
				<div class="user-card">
					<h4>{{user.name}}</h4>
					<p>email:{{user.email}}</p>
					<p>web:{{user.website}}</p>
					<span ng-click="doDelete()" class="delete-link">x</span>
					<a ng-href="#/add/{{user.id}}" class="edit-link">e</span>
				</div>
			`
		}
	}
)