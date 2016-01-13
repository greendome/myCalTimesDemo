angular.module('app.services', [])

.factory('MeetingNamesService', ['$firebase', function ($firebase) {

	var myCalTimes = new Firebase("https://wimmt.firebaseio.com");
	var sync = $firebase(myCalTimes);

	return {
		all: function() {
		return sync.$asArray();
		}
	}

}])


.service('MeetingNamesService', function($http) {
 return {

 }
});
