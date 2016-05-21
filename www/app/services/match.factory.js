(function() {
	'use strict';

	angular
		.module('frcScouting')
		.factory('MatchSvc', MatchSvc);

	MatchSvc.$inject = [];

	function MatchSvc() {
		var match = undefined;
		var matchSevice = {
			beginMatch: beginMatch,
			getMatch: getMatch,
			setMatchNumber: setMatchNumber,
			setTeamNumber: setTeamNumber
		};

		return matchSevice;

		function getMatch() {
			return match;
		}

		function beginMatch() {
			match = {
				matchNumber: null,
				teamNumber: null
			};
		}

		function setMatchNumber(matchNumber) {
			match.matchNumber = matchNumber;
		}


		function setTeamNumber(teamNumber) {
			match.teamNumber = teamNumber;
		}
	}
})();