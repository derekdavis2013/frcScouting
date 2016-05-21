(function() {
	'use strict';

	angular
		.module('frcScouting')
		.controller('AutonomousCtrl', AutonomousCtrl);

	AutonomousCtrl.$inject = ['MatchSvc'];

	function AutonomousCtrl(MatchSvc) {
		console.log('You did it ', MatchSvc.getMatch());
	}
})();
