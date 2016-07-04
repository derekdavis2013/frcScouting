(function() {
	'use strict';

	angular
		.module('frcScouting')
		.controller('AutonomousCtrl', AutonomousCtrl);

	AutonomousCtrl.$inject = ['MatchSvc'];

	function AutonomousCtrl(MatchSvc) {
		var vm = this;

		vm.match = MatchSvc.getMatch();
		
		vm.enableAutonomous = enableAutonomous;

		init();

		function init() {
			console.log(MatchSvc.getMatch());
			// vm.autonomousProperties = MatchSvc.getMatch();
			console.log(vm.match);
		}

		function enableAutonomous() {
			vm.match.isEnabled = true;
			updateMatch();
			console.log(MatchSvc.getMatch());
		}

		// TODO Creat teleop state
		function goToTeleop() {
			
		}

		function updateMatch() {
			MatchSvc.updateMatch(vm.match);
			// goToTeleop();
		}
	}
})();
