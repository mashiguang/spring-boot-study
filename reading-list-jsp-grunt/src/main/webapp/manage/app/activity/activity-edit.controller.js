'use strict';

angular.module('ndApp.activityManage').controller('ActivityEditCtrl', ActivityEditCtrl);
ActivityEditCtrl.$inject = [ '$http', '$state', '$stateParams','dictService'];

function ActivityEditCtrl($http, $state, $stateParams, dictService) {
	var vm = this;
	vm.TestTypeOptions = dictService.CodeNameDict['TestType'];
	vm.ActivityClientTypeOptions = dictService.CodeNameDict['ActivityClientType'];
	
	vm.alerts = [];
	vm.closeAlert = closeAlert;

	vm.activityId = $stateParams.activityId;
	vm.activity = {};
	vm.submit = submit;
	
	$http.get('activities/' + vm.activityId).success(
				function(data) {
					vm.activity = data;
				});

	function closeAlert(index) {
		vm.alerts.splice(index, 1);
	};
	function submit() {
		vm.alerts = [];

		$http.post('activities', vm.activity).success(
				function(data) {
					$state.go('activity.activityList');
					
				}).error(function(data, status) {
			if (status == 400) {
				if (data) {
					vm.alerts.push({
						msg : data.message
					})
				} else {
					vm.alerts.push({
						msg : "发生意外错误"
					})
				}
			}
		});
	}
}
