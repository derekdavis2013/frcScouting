(function() {
	'use strict';

	angular.module('frcScouting')
	.controller('welcomeCtrl', welcomeCtrl);

	welcomeCtrl.$inject = ['$state', 'MatchSvc'];

	function welcomeCtrl ($state, MatchSvc) {
		var vm = this;

		vm.matchNumber = '';
		vm.teamNumber = '';

		vm.isFormValid = isFormValid;
		vm.goToAuton = goToAuton;
		vm.submit = submit;

		init();

		function init() {
			MatchSvc.beginMatch();
		}

		function isFormValid() {
			var matchNumber = _.toString(vm.matchNumber),
				teamNumber = _.toString(vm.teamNumber);
			return !((matchNumber.length >= 2) && (teamNumber.length >= 2));
		}

		function goToAuton() {
			$state.go('app.autonomous');
		}

		function submit() {
			MatchSvc.setMatchNumber(vm.matchNumber);
			MatchSvc.setTeamNumber(vm.teamNumber);
			goToAuton();
		}

		console.log('Welcome');
	}
})();
