'use strict';

angular
		.module('ndApp.shared')
		.factory(
				'echartsService',
				function(){
					return {
						echartsDataView: function(opt,columnName){
							var axisData = opt.xAxis[0].data;
                            var series = opt.series;
						    var table = '<div style="width:100%;height:100%;overflow:auto;"><table class="table table-bordered  table-striped">'
						    	'<thead><tr class="text-center">';
						    table += '<th class="text-center">'+columnName+'</th>';
						    angular.forEach(series, function(s) {
								table += '<th class="text-center">' + s.name + '</th>';
							});
			                 + '</tr><tbody>';
						    for (var i = 0, l = axisData.length; i < l; i++) {
						        table += '<tr class="text-center">'
						                 + '<td>' + axisData[i] + '</td>';
						        angular.forEach(series, function(s,index,arrar) {
									table += '<td>' + series[index].data[i] + '</td>';
								});
						        table += '</tr>';
						    }
						    table += '</tbody></table></div>';
						    return table;
						},
						dataView: function(opt,xColumnName,yColumnName){
							var axisData = opt.xAxis[0].data;
                            var series = opt.series;
						    var table = '<div style="width:100%;height:100%;overflow:auto;"><table class="table table-bordered  table-striped">'
						    	'<thead><tr class="text-center">';
						    table += '<th class="text-center" nowrap="nowrap">'+yColumnName+'|'+xColumnName+'</th>';
						    for (var i = 0, l = axisData.length; i < l; i++) {
						    	table += '<th class="text-center" nowrap="nowrap">' + axisData[i] + '</th>';
						    }
						    + '</tr><tbody>';
						    
						    angular.forEach(series, function(s) {
								table += '<tr class="text-center">'
					                 + '<td nowrap="nowrap">' + s.name + '</td>';
								for (var i = 0, l = axisData.length; i < l; i++) {
									table += '<td nowrap="nowrap">' + s.data[i] + '</td>';
								}
								table += '</tr>';
							});
			                 + '</tr><tbody>';
						    
						    table += '</tbody></table></div>';
						    return table;
						}
					}
				});
