var homeModule = angular.module('homeModule',[])
.controller('homeController',function($scope, $window){
	$scope.dimensions = {};
	$scope.svg = {};

	$scope.dimensions.pageHeight = $(window).height();

	$scope.svg.scaling = 0.10000;
	if($(window).width() < 780){
		$scope.svg.scaling = 0.075000;
	}
});
