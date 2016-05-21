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

    .state('home', {
      abstract: true,
      url: '/home',
      templateUrl: 'app/home/home.template.html'
    })
    .state('home.welcome', {
      url: '/welcome',
      views: {
        'welcome': {
          templateUrl: 'app/home/welcome.template.html',
          controller: 'welcomeCtrl',
          controllerAs: 'welcomeCtrl'
        }
      }
    })
    .state('home.autonomous', {
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
  $urlRouterProvider.otherwise('/home/welcome');
});
