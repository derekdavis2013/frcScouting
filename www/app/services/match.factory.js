(function() {
	'use strict';

	angular
		.module('frcScouting')
		.factory('MatchSvc', MatchSvc);

	MatchSvc.$inject = ['CacheFactory'];

	function MatchSvc(CacheFactory) {
		var match = CacheFactory.get('matchCache');
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
			console.log('before', match);
			match = {
				matchNumber: null,
				teamNumber: null
			};
			console.log('after', match);
		}

		function setMatchNumber(matchNumber) {
			match.matchNumber = matchNumber;
		}


		function setTeamNumber(teamNumber) {
			match.teamNumber = teamNumber;
		}
	}
})();