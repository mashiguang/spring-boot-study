'use strict';

angular
		.module('ndApp.shared')
		.factory('translateService',['$translate',function($translate){
	     var tran = function(key){
	         if(key){
	              return $translate.instant(key)
	         }
	         return key;
	     }
	    return tran;
	   }]);
