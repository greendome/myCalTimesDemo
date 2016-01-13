angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
    .state('menu', {
      url: '/side-menu',
      abstract:true,
      templateUrl: 'templates/menu.html'
    })
      
    
      
        
    .state('contactUs', {
      url: '/contactus',
      templateUrl: 'templates/contactUs.html',
      controller: 'contactUsCtrl'
    })
        
      
    
      
        
    .state('dailyMeetingTimes', {
      url: '/dmtimes',
      templateUrl: 'templates/dailyMeetingTimes.html',
      controller: 'dailyMeetingTimesCtrl'
    })
        
      
    
      
        
    .state('menu.welcome', {
      url: '/home',
      views: {
        'side-menu21': {
          templateUrl: 'templates/welcome.html',
          controller: 'welcomeCtrl'
        }
      }
    })
        
      
    
      
        
    .state('menu.months', {
      url: '/months',
      views: {
        'side-menu21': {
          templateUrl: 'templates/months.html',
          controller: 'monthsCtrl'
        }
      }
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/side-menu/home');

});