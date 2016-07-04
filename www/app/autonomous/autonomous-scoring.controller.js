(function() {
	angular.
		module('frcScouting')
		.controller('AutoScoringCtrl', AutoScoringCtrl);

		AutoScoringCtrl.$inject = ['MatchSvc'];

		function AutoScoringCtrl(MatchSvc) {
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
				console.log(vm.match);
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
		}
})();
