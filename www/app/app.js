angular.module('frcScouting', ['ionic', 'angular-cache'])

.run(function($ionicPlatform, CacheFactory) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

    // Caches
    // CacheFactory.destroyAll();
    // CacheFactory.clearAll();
    var matchCache;
    if (!CacheFactory.get('matchCache')) {
      matchCache = CacheFactory('matchCache', {
        storageMode: 'localStorage',
        maxAge: 60 * 60 * 1000, // 1hr
        deleteOnExpire: 'aggressive'
      });
    }
  });
})

.config(function($ionicConfigProvider, $stateProvider, $urlRouterProvider) {
  // Begin routing config
  $stateProvider
    .state('app', {
      abstract: true,
      url: '/app',
      templateUrl: 'app/menu/menu.template.html'
    })
    .state('app.welcome', {
      url: '/welcome',
      views: {
        'welcome': {
          templateUrl: 'app/welcome/welcome.template.html',
          controller: 'welcomeCtrl',
          controllerAs: 'welcomeCtrl'
        }
      }
    })
    .state('app.autonomous', {
      url: '/autonomous',
      views: {
        'autonomous': {
          templateUrl: 'app/autonomous/autonomous.template.html',
          controller: 'AutonomousCtrl',
          controllerAs: 'autoCtrl'
        }
      }
    })
    .state('app.teleOp', {
      url: '/teleOp',
      views: {
        'teleOp': {
          templateUrl: 'app/teleOp/teleOp.template.html'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/welcome');
  // End routing config

  // Begin platform config
  $ionicConfigProvider.platform.android.tabs.position('bottom');
  // End platform config
});
