angular.module("app").controller("ctrl", function($scope, service){
   
    $scope.thisappisbroken = "This app is working";

    $scope.germData = service.getGerms();
    
    $scope.killGerm = (g)=> {
    	let yay = "YAY!!!"
    	console.log(`This worked ${yay}`)
    }
});