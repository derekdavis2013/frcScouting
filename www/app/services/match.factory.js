(function() {
	'use strict';

	angular
		.module('frcScouting')
		.factory('MatchSvc', MatchSvc);

	MatchSvc.$inject = ['CacheFactory'];

	function MatchSvc(CacheFactory) {
		var match = {},
			matchCache = CacheFactory.get('matchCache'),
			cacheKey = 'match',
			matchData = matchCache.get(cacheKey),
			matchSevice = {
				beginMatch: beginMatch,
				getMatch: getMatch,
				updateMatch: updateMatch
			};

		return matchSevice;

		function getMatch() {
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
			matchCache.removeAll();
		}

		function updateMatch(newProperties) {
			match = _.merge(match, newProperties);
			// matchCache.clearAll();
			matchCache.put(cacheKey, match);
		}
	}
})();
