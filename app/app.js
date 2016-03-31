var myApp = angular.module('myApp', []);

myApp.controller('LoginCtrl', function($scope) {
	$scope.isValidUser = function(user) {
		if(user.username.length() >= 4 && user.password.length() >= 4)
			return true;
		return false;
	}

	$scope.update = function(user) {
		if(user.username == "root@gmail.com" && user.password == "admin") {
			console.log("Login successfully");
		}
		else {
			alert("Please try again!");
		}
	}
});