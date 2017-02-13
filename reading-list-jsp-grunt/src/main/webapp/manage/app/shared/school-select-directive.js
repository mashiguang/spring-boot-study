app.directive('schoolSelect', ['$http','translateService', function($http,translateService){
	return {
		restrict: 'E',
		require: 'ngModel',
		templateUrl: ctx + '/manage/app/shared/school-select.html?v=a1dcd305ba15c1080fc08635a57daf02',
		replace: true,
		scope: {
			ngModel: '='
			
		},
		controller: ['$scope', '$http', function($scope, $http){
			$scope.loadSchools = function(item){
				$scope.ngModel = item;
			}
			$http.get(ctx + "/manage/school/listAll")
			.success(function(data){
				$scope.schools = data;
				$scope.schools.unshift({id:'', name:'-- '+translateService("select.school")+' --'});
				$scope.ngModel = $scope.schools[0];
			});
			
		}]
	}
}]);