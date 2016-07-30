(function() {
	'use strict'

	angular
		.module('frcScouting')
		.controller('TeleOpCtrl', TeleOpCtrl);

	TeleOpCtrl.$inject = ['MatchSvc'];

	function TeleOpCtrl(MatchSvc) {
		var vm = this;

		console.log('hey');
	}
})();