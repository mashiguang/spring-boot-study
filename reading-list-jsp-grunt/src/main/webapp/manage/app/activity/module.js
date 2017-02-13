'use strict';

angular.module(
		'ndApp.activityManage',
		[ 'ui.router', 'ngGrid', 'angularBootstrapNavTree', 'ndApp.shared',
				'ui.bootstrap', 'angular-confirm' ]).config(
		[ '$stateProvider', '$urlRouterProvider',
				function($stateProvider, $urlRouterProvider) {

					$stateProvider.state('activity', {
						abstract : true,
						url : "/activities",
						templateUrl : "app/activity/activity.jsp"
					}).state('activity.activityList', {
						url : "",
						templateUrl : "app/activity/activity-list.jsp"
					}).state('activity.activityEdit', {
						url : "/:activityId",
						templateUrl : "app/activity/activity-edit.jsp"
					})

				} ]);
