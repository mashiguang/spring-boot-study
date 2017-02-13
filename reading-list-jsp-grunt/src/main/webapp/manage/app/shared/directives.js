app.directive('ensureUnique', ['$http','$timeout', function($http, $timeout){
	var checking = null;
	return {
		require: 'ngModel',
		link: function(scope, ele, attrs, c) {
			
			scope.$watch(attrs.ngModel, function(n){
				/*
				console.log(scope);
				console.log(ele);
				console.log(attrs);
				console.log(c);
				console.log(attrs.ensureUnique);	//loginname, field
				console.log(n);						//mashiguang, value
				*/
				if(!n) return;
				
				if(attrs.originalValue == n) {
					c.$setValidity('unique', true);
					return;
				}
				
				if(!checking){
					
					checking = $timeout(function(){
						
						$http({
							method: "post",
							url: ctx + "/manage/validate/ensureUnique",
							data: "field="+attrs.ensureUnique+"&value="+n,
							headers: {'Content-Type': 'application/x-www-form-urlencoded'}
						})
						.success(function(data){
							console.log(data);
							c.$setValidity('unique', data.validity);
							checking = null;
						})
						.error(function(data){
							console.log(data);
							c.$setValidity('unique', false);
							checking = null;
						});
					}, 500);
					
				} else {
					console.log("checking");
				}
			})
		}
	}
}]);


app.directive("passwordVerify", function() {
   return {
      require: "ngModel",
      scope: {
        passwordVerify: '='
      },
      link: function(scope, element, attrs, ctrl) {
        scope.$watch(function() {
            var combined;

            if (scope.passwordVerify || ctrl.$viewValue) {
               combined = scope.passwordVerify + '_' + ctrl.$viewValue;
            }                   
            return combined;
        }, function(value) {
            if (value) {
                ctrl.$parsers.unshift(function(viewValue) {
                    var origin = scope.passwordVerify;
                    if (origin !== viewValue) {
                        ctrl.$setValidity("passwordVerify", false);
                        return undefined;
                    } else {
                        ctrl.$setValidity("passwordVerify", true);
                        return viewValue;
                    }
                });
            }
        });
     }
   };
});
