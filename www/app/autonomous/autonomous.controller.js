(function() {
	'use strict';

	angular
		.module('frcScouting')
		.controller('AutonomousCtrl', AutonomousCtrl);

	AutonomousCtrl.$inject = ['MatchSvc'];

	function AutonomousCtrl(MatchSvc) {
		var vm = this;

		vm.autonomousProperties = {
			autonomousEnabled: false
		};
		
		vm.enableAutonomous = enableAutonomous;

		init();

		function init() {
		}

		function enableAutonomous() {
			console.log('clicked');
			vm.autonomousProperties.autonomousEnabled = true;
		}
	}
})();
