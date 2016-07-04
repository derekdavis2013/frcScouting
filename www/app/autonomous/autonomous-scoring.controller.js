(function() {
	angular.
		module('frcScouting')
		.controller('AutoScoringCtrl', AutoScoringCtrl);

		AutoScoringCtrl.$inject = ['$state', 'MatchSvc'];

		function AutoScoringCtrl($state, MatchSvc) {
			var vm = this;

			vm.submit = submit;

			init();

			function init() {
				vm.autoScore = {
					touchDef: false,
					crossDef: false,
					lowGoal: false,
					highGoal: false
				};
			}

			function submit() {
				__computeScore();
				MatchSvc.updateMatch(vm.match);
				__goToTeleOp();
			}


			/************************/
			/****PIVATE FUNCTIONS****/
			/************************/

			function __computeScore() {
				var score = 0;
				vm.match.autonomousScore = 0;
				vm.match.totalScore = 0;

				score += vm.autoScore.touchDef ? 5 : 0;
				score += vm.autoScore.crossDef ? 5 : 0;
				score += vm.autoScore.lowGoal ? 5 : 0;
				score += vm.autoScore.highGoal ? 5 : 0;

				vm.match.autonomousScore = score;
				vm.match.totalScore += vm.match.autonomousScore;
			}

			function __goToTeleOp() {
				$state.go('app.teleOp');
			}
		}
})();
