var myApp = angular.module("myApp",[]);

myApp.controller(
	"myCtrl",
	function ($scope) {
		$scope.varza = "varzamare";
		var players = [];
		$scope.$on(
			"shuffle-end",
			function(ev, data) {
				players.push(data);
				if (players.length == 2)
					console.log("calcul");
			}
		);
		$scope.startGame = function () {
			$scope.$broadcast("game-start");
		}
	}
)

myApp.directive(
	"gamecard",
	function (randomFactory, $interval) {
		return {
			restrict: "E",
			template: `
				<div class="card">
					<img src="http://data.lec-academy.ro/{{element}}.png"/>
				</div>
				<b>{{name}}</b>
			`,
			scope: {name:"@"},
			link: function(scope) {

				scope.$on(
					"game-start",
					function () {
						var iterator = 0;
						var myInterval = $interval(
							function() {
								iterator++;
								scope.element = randomFactory.getRandomElement();
								if (iterator == 20) {
									$interval.cancel(myInterval);
									scope.$emit("shuffle-end", {value: scope.element, name: scope.name});
								}
							},
							100
						)
					}
				)
			}
		}
	}
)

myApp.factory(
	"randomFactory",
	function () {
		return {
			getRandomElement: function() {
				var listaElemente = ["rock", "paper", "scissors"];
				var rand = Math.floor(Math.random() * 3);
				return listaElemente[rand];
			}
		}
	}
)