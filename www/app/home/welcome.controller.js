(function (){
	'use strict';

	angular.module('frcScouting')
	.controller('welcomeCtrl', ['$state', welcomeCtrl]);

	function welcomeCtrl ($state) {
		var vm = this;

		vm.matchNumber = '';
		vm.teamNumber = '';

		vm.isFormValid = isFormValid;
		vm.goToAuton = goToAuton;

		function isFormValid () {
			var matchNumber = _.toString(vm.matchNumber),
				teamNumber = _.toString(vm.teamNumber);
			return !((matchNumber.length >= 2) && (teamNumber.length >= 2));
		}

		function goToAuton () {
			$state.go('home.autonomous');
		}

		console.log('Welcome');
	}
})();