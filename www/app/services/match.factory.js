(function() {
	'use strict';

	angular
		.module('frcScouting')
		.factory('MatchSvc', MatchSvc);

	MatchSvc.$inject = ['CacheFactory'];

	function MatchSvc(CacheFactory) {
		var match = {},
			matchCache = CacheFactory.get('matchCache'),
			matchSevice = {
				beginMatch: beginMatch,
				getMatch: getMatch,
				setMatchNumber: setMatchNumber,
				setTeamNumber: setTeamNumber
			};

		return matchSevice;

		function getMatch() {
			var cacheKey = 'match',
				matchData = matchCache.get(cacheKey);

			if(!_.isEmpty(matchData)) {
				console.log("Found data in cache");
				match = matchData;
			} else {
				console.log("No data in cache");
				matchCache.put(cacheKey, match);
			}

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
