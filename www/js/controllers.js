angular.module('app.controllers', [])
     
.controller('contactUsCtrl', function($scope) {

})
   
.controller('dailyMeetingTimesCtrl', function($scope, MeetingNamesService, $ionicLoading) {
	
})
   
.controller('welcomeCtrl', function($scope) {

})
   
.controller('monthsCtrl', function($scope, MeetingNamesService, $ionicLoading) {
	$scope.times = MeetingNamesService.all();
	console.log($scope.times);
});
 