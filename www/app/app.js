angular.module("frcScouting", ["ionic"])

.run(function($ionicPlatform) {
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
  });
})

.config(function($stateProvider, $urlRouterProvider) {
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
          templateUrl: 'app/autonomous/autonomous.template.html'
          // controller: 'welcomeCtrl',
          // controllerAs: 'welcomeCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/welcome');
});
