app.directive('schoolClassSelect', ['$http', function($http){
	return {
		restrict: 'E',
		templateUrl: ctx + '/manage/app/shared/school-class-select.html?v=a1dcd305ba15c1080fc08635a57daf02',
		replace: false,
		scope: {
			ngModelSchool: '=',
			ngModelSchoolClass: '='
		},
		link: function($scope){
			
			$scope.$watch(function($scope){
				return $scope.ngModelSchool;
			}, function(){
				$scope.searchCla($scope.ngModelSchool.id);
			}, true);
			
		},
		controller: ['$scope', '$http', 'translateService',function($scope, $http,translateService){
			
			$http.get(ctx + '/manage/school/listAll')
			.success(function(data){
				$scope.schools = data;
				$scope.schools.unshift({id:'', name:'-- '+translateService("select.school")+' --'});
				$scope.ngModelSchool = $scope.schools[0];
			});
			
			$scope.loadSchools = function(item){
				$scope.ngModelSchool = item;
			}
			$scope.loadClasss = function(item){
				$scope.ngModelSchoolClass = item;
			}
			$scope.searchCla = function(schoolId) {
				$http.get(ctx + "/manage/schoolClass/own", {
					params: {
						schoolId: schoolId
					}
				}).success(function(data){
					$scope.schoolClasses = data;
					$scope.schoolClasses.unshift({id:'', name:'-- '+translateService("select.class")+' --'});
					$scope.ngModelSchoolClass = $scope.schoolClasses[0];
					
				});
			}
			
			/*$scope.pinyinSchoolFilter = function(item){
				if($scope.ngModelSchool && $scope.ngModelSchool.pinyinCode){
					return item.pinyinCode === $scope.ngModelSchool.pinyinCode;
				}
				return item;
			}*/
			
		}]
	}
}]);