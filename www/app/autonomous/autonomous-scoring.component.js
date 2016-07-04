(function() {
	angular
		.module('frcScouting')
		.component('autonomousScoring', {
			templateUrl: 'app/autonomous/autonomous-scoring.template.html',
			controller: 'AutoScoringCtrl',
			bindings: {
				match: '<'
			}
		});
})();
