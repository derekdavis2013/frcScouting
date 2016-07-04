(function() {
	'use strict';

	angular.module('frcScouting')
	.controller('welcomeCtrl', welcomeCtrl);

	welcomeCtrl.$inject = ['$state', 'MatchSvc'];

	function welcomeCtrl ($state, MatchSvc) {
		var vm = this;

		vm.matchProperties = {
			matchNumber: '',
			teamNumber: ''
		};

		vm.isFormValid = isFormValid;
		vm.goToAuton = goToAuton;
		vm.submit = submit;

		init();

		function init() {
			MatchSvc.beginMatch();
		}

		function isFormValid() {
			var matchNumber = _.toString(vm.matchProperties.matchNumber),
				teamNumber = _.toString(vm.matchProperties.teamNumber);
			return !((matchNumber.length >= 2) && (teamNumber.length >= 2));
		}

		function goToAuton() {
			$state.go('app.autonomous');
		}

		function submit() {
			MatchSvc.updateMatch(vm.matchProperties);
			goToAuton();
		}

		console.log('Welcome');
	}
})();
