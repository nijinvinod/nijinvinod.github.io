NIJIN_PIC = "";
var homeModule = angular.module('homeModule',[])
.controller('homeController',function($scope, $window){
	$scope.dimensions = {};
	$scope.dimensions.pageHeight = $(window).height();
});
