'use strict';

angular.module('ndApp.activityManage').controller('ActivityListCtrl', ActivityListCtrl);
ActivityListCtrl.$inject = [ '$http', '$state', '$stateParams','$confirm','dictService'];

function ActivityListCtrl($http, $state, $stateParams,$confirm, dictService) {
	var vm = this;
	vm.TestTypeMap = dictService.CodeNameMap['TestType'];
	vm.ActivityClientTypeMap = dictService.CodeNameMap['ActivityClientType'];
	vm.select = select;
	vm.activities = [];
	
	initActivities();
	function select(item) {
		vm.selected = item;
	}
	function initActivities(){
		$http.get('activities').success(function(data) {
			vm.activities = data;
		});
	}
	
}
