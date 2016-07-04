(function() {
	'use strict';

	angular
		.module('frcScouting')
		.controller('AutonomousCtrl', AutonomousCtrl);

	AutonomousCtrl.$inject = ['$state', 'MatchSvc'];

	function AutonomousCtrl($state, MatchSvc) {
		var vm = this;

		vm.match = MatchSvc.getMatch();
		
		vm.enableAutonomous = enableAutonomous;
		vm.goToTeleop = goToTeleop;

		init();

		function init() {
			console.log(MatchSvc.getMatch());
			vm.match.autonomousEnabled = false;
			console.log(vm.match);
		}

		function enableAutonomous() {
			vm.match.autonomousEnabled = true;
			updateMatch();
		}

		function goToTeleop() {
			updateMatch();
			$state.go('app.teleOp');
		}

		function updateMatch() {
			MatchSvc.updateMatch(vm.match);
		}
	}
})();
