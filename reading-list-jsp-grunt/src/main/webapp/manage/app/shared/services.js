'use strict';

angular
		.module('ndApp.shared')
		.factory(
				'dictService',
				[
						'$http',
						'$q','translateService','$translate','$rootScope',
						function($http, $q,translateService,$translate,$rootScope) {
							var service = {};
							service.lessons = {};		// {courseId:[lesson,lesson,lesson]}
							service.Dict = {};

							service.IdNameDict = {};
							service.IdObjDict = {};
							service.CodeNameDict = {};

							service.IdNameMap = {};
							service.CodeNameMap = {};
							service.IdCodeMap = {};

							service.Dict['Activity'] = [];
							service.Dict['Lesson'] = [];

							service.Dict['Course'] = [];
							service.Dict['QuestionWord'] = [];
							service.Dict['localLang']={};
							$rootScope.$on('$translateChangeSuccess', function () {
									initData();
					    		 //console.log("333333333333333333",key);
					            });
							/*$translate.onReady().then(function(data){
								if($translate.onReady()){
									console.log("中：",translateService("map.localLang.selectAll"));
									initData();
								}
								
								console.log("刷新后的值：",service.Dict['localLang']);
					            },function(data){
					            	console.log('出错了');
					            });*/
							
							function initData(){
								service.Dict['localLang'] ={
									    selectAll       : $translate.instant("map.localLang.selectAll"),
									    selectNone      : $translate.instant("map.localLang.selectNone"),
									    reset           : $translate.instant("map.localLang.reset"),
									    search          : $translate.instant("map.localLang.search"),
									    nothingSelected : $translate.instant("map.localLang.nothingSelected")         //default-label is deprecated and replaced with this.
									};
								/*考察点*/
								var testPoint = [
								                 {
								                	 code:0,
								                	 name:$translate.instant("map.testPoint.dctwdy")
								                 },
								                 {
								                	 code:1,
								                	 name:$translate.instant("map.testPoint.dczywdy")
								                 },
								                 {
								                	 code:2,
								                	 name:$translate.instant("map.testPoint.dcyxdy")
								                 },
								                 {
								                	 code:3,
								                	 name:$translate.instant("map.testPoint.yxdcfy")
								                 },
								                 {
								                	 code:7,
								                	 name:$translate.instant("map.testPoint.dyyxdy")
								                 },
								                 {
								                	 code:8,
								                	 name:$translate.instant("map.testPoint.dhdcdyyy")
								                 },
								                 {
								                	 code:9,
								                	 name:$translate.instant("map.testPoint.jzfyzqd")
								                 },
								                 {
								                	 code:10,
								                	 name:$translate.instant("map.testPoint.jzqf")
								                 },
								                 {
								                	 code:11,
								                	 name:$translate.instant("map.testPoint.jszh")
								                 },
								                 {
								                	 code:12,
								                	 name:$translate.instant("map.testPoint.dhycjtdy")
								                 },
								                 {
								                	 code:13,
								                	 name:$translate.instant("map.testPoint.dhwddy")
								                 }
								                 ]

								service.Dict['testPoint'] =testPoint;
								var LessonTypes = [ {
									id : 1,
									name : $translate.instant("map.testPoint.lesson")
								}, {
									id : 2,
									name : $translate.instant("map.testPoint.review")
								}, {
									id : 3,
									name : $translate.instant("map.testPoint.special")
								} ];
								
								var LessonParts = [ {
									id : 0,
									name : ""
								}, {
									id : 1,
									name : "Part1"
								}, {
									id : 2,
									name : "Part2"
								}, {
									id : 3,
									name : "Part3"
								}, {
									id : 4,
									name : "Part4"
								}, {
									id : 5,
									name : "Part5"
								}, {
									id : 6,
									name : "Part6"
								}, {
									id : 7,
									name : "Part7"
								}, {
									id : 8,
									name : "Part8"
								} ];

								var ResTypes = [ {
									code : 'audio',
									name : $translate.instant("map.ResTypes.audio")
								}, {
									code : 'img',
									name : $translate.instant("map.ResTypes.img")
								}, {
									code : 'video',
									name : $translate.instant("map.ResTypes.video")
								} ];

								var UnlockMode = [ {
									code : 'QSJS',
									name : $translate.instant("map.UnlockMode.QSJS")
								}, {
									code : 'RWJS',
									name : $translate.instant("map.UnlockMode.RWJS")
								}, {
									code : 'RGJS',
									name : $translate.instant("map.UnlockMode.RGJS")
								} ];

								var ActivityUnlockMode = [ {
									code : 'QSJS',
									name : $translate.instant("map.UnlockMode.QSJS")
								}, {
									code : 'ZGJS',
									name : $translate.instant("map.UnlockMode.ZGJS")
								} ];

								var FinishMode = [ {
									code : 'HD',
									name : $translate.instant("map.FinishMode.HD")
								}, {
									code : 'JF',
									name : $translate.instant("map.FinishMode.JF")
								} ];

								var TestType = [ {
									code : 'DC',
									name : $translate.instant("map.TestType.DC")
								}, {
									code : 'DY',
									name : $translate.instant("map.TestType.DY")
								}, {
									code : 'JZ',
									name : $translate.instant("map.TestType.JZ")
								}, {
									code : 'DH',
									name : $translate.instant("map.TestType.DH")
								}, {
									code : 'TY',
									name : $translate.instant("map.TestType.TY")
								} ];
								
								var ActivityCategory = [ {
									code : 'LX',
									name : $translate.instant("map.ActivityCategory.LX")
								}, {
									code : 'YX',
									name : $translate.instant("map.ActivityCategory.YX")
								} ];
								
								var ActivityStatus = [ {
									code : 'XJ',
									name : $translate.instant("map.ActivityStatus.XJ")
								}, {
									code : 'CS',
									name : $translate.instant("map.ActivityStatus.CS")
								}, {
									code : 'QY',
									name : $translate.instant("map.ActivityStatus.QY")
								}, {
									code : 'JY',
									name : $translate.instant("map.ActivityStatus.JY")
								} ];

								var SourceType = [ {
									code : 'word',
									name : $translate.instant("map.TestType.DC")
								}, {
									code : 'phrase',
									name : $translate.instant("map.TestType.DY")
								}, {
									code : 'sentence',
									name : $translate.instant("map.TestType.JZ")
								}, {
									code : 'dialogue',
									name : $translate.instant("map.TestType.DH")
								} , {
									code : 'wordimg',
									name : $translate.instant("map.SourceType.wordimg")
								} , {
									code : 'dialogueimg',
									name : $translate.instant("map.SourceType.dialogueimg")
								} ];
								
								var ActivityClientType = [ {
									code : 'XS',
									name : $translate.instant("map.ActivityClientType.XS")
								}, {
									code : 'JS',
									name : $translate.instant("map.ActivityClientType.JS")
								} ];

								var ResTypeMap = {};
								angular.forEach(ResTypes, function(option) {
									ResTypeMap[option.code] = option.name;
								});

								var UnlockModeMap = {};
								angular.forEach(UnlockMode, function(option) {
									UnlockModeMap[option.code] = option.name;
								});

								var FinishModeMap = {};
								angular.forEach(FinishMode, function(option) {
									FinishModeMap[option.code] = option.name;
								});

								var TestTypeMap = {};
								angular.forEach(TestType, function(option) {
									TestTypeMap[option.code] = option.name;
								});
								
								var ActivityClientTypeMap = {};
								angular.forEach(ActivityClientType, function(option) {
									ActivityClientTypeMap[option.code] = option.name;
								});

								var TestPointMap = {};
								angular.forEach(testPoint,function(option){
									TestPointMap[option.code] = option.name;
								});
								var ActivityUnlockModeMap = {};
								angular
										.forEach(
												TestType,
												function(option) {
													ActivityUnlockModeMap[option.code] = option.name;
												});
								
								var ActivityCategoryMap = {};
								angular.forEach(ActivityCategory, function(option) {
									ActivityCategoryMap[option.code] = option.name;
								});
								
								var ActivityStatusMap = {};
								angular.forEach(ActivityStatus, function(option) {
									ActivityStatusMap[option.code] = option.name;
								});
								var SourceTypeMap = {};
								angular.forEach(SourceType, function(option) {
									SourceTypeMap[option.code] = option.name;
								});
								
								

								service.IdNameDict['LessonPart'] = LessonParts;
								service.IdNameDict['LessonType'] = LessonTypes;

								service.CodeNameDict['ResType'] = ResTypes;
								service.CodeNameDict['UnlockMode'] = UnlockMode;
								service.CodeNameDict['FinishMode'] = FinishMode;
								service.CodeNameDict['TestType'] = TestType;
								service.CodeNameDict['ActivityClientType'] = ActivityClientType;
								service.CodeNameDict['TestPoint'] = testPoint;
								service.CodeNameDict['ActivityUnlockMode'] = ActivityUnlockMode;
								service.CodeNameDict['ActivityCategory'] = ActivityCategory;
								service.CodeNameDict['ActivityStatus'] = ActivityStatus;
								service.CodeNameDict['SourceType'] = SourceType;
								
								service.CodeNameMap['TestPointMap'] = TestPointMap;
								service.CodeNameMap['ResType'] = ResTypeMap;
								service.CodeNameMap['UnlockMode'] = UnlockModeMap;
								service.CodeNameMap['FinishMode'] = FinishModeMap;
								service.CodeNameMap['TestType'] = TestTypeMap;
								service.CodeNameMap['ActivityClientType'] = ActivityClientTypeMap;
								service.CodeNameMap['ActivityUnlockMode'] = ActivityUnlockModeMap;
								service.CodeNameMap['ActivityCategory'] = ActivityCategoryMap;
								service.CodeNameMap['ActivityStatus'] = ActivityStatusMap;
								service.CodeNameMap['SourceType'] = SourceTypeMap;
								
							}
							console.log("localLang:",service.Dict['localLang']);
							service.courseLoaded = false;
							service.loadCourse = function() {
								if (service.courseLoaded) {
									return service.Dict['Course'];
								} else {
									// console.log("starting to load courses.");
									return $http
											.get("cache/courses")
											.success(
													function(data) {
														//service.Dict['Course'] = [];

														var Course = {};
														angular
																.forEach(
																		data,
																		function(
																				option) {
																			option.name = translateService(option.name)
																			Course[option.id] =option.name ;
																			service.Dict['Course'].push(option);
																		});

														service.IdNameMap['Course'] = Course;

														service.courseLoaded = true;
													});
								}
							};

							var lessonSuccessHandler = function(data) {
								service.Dict['Lesson'] = data;
								service.Dict['LessonIds'] = [];

								var Lesson = {};
								var LessonId2Code = {};

								angular
										.forEach(
												service.Dict['Lesson'],
												function(option) {
													Lesson[option.id] = option.name;
													LessonId2Code[option.id] = option.code;
													service.Dict['LessonIds']
															.push(option.id);
												});
								
								angular.forEach(data, function(l) {
									if(!service.lessons[l.courseId]) {
										service.lessons[l.courseId] = [];
									}
									service.lessons[l.courseId].push(l);
								});
								//console.log('dictService.lessons', service.lessons);

								service.IdNameMap['Lesson'] = Lesson;
								service.IdCodeMap['Lesson'] = LessonId2Code;
							};

							var dict10Handler = function(data) {
											service.Dict['ClassHourCatalog'] = data;

											var ClassHourCatalog = {};
											angular
													.forEach(
															service.Dict['ClassHourCatalog'],
															function(
																	option) {
																ClassHourCatalog[option.itemCode] = option.itemValue;
															});

											service.CodeNameMap['ClassHourCatalog'] = ClassHourCatalog;
										};

							// catalog缓存使用方式:
							// $scope.catalogs = dictService.Dict['lesson-catalogs'][$scope.lessonId];
							var catalogHandler = function(catalogs, dicts) {
								service.Dict['lesson-catalogs']={};
								service.IdObjDict['Catalog'] = {};

								angular.forEach(catalogs, function(c) {
									if (!service.Dict['lesson-catalogs'][c.lessonId]) {
										service.Dict['lesson-catalogs'][c.lessonId] = [];
									}
									c.name = dicts[c.name];
									service.Dict['lesson-catalogs'][c.lessonId].push(c)

									service.IdObjDict['Catalog'][c.id] = c;
								});
							};

							var dictLoaded = false;
							service.loadDict = function() {
								if (dictLoaded)
									return;
								var dict4Promise = $http
										.get('cache/dicts/4/items')
										.success(
												function(data) {
													service.Dict['WordCategory'] = data;

													var WordCategory = {};
													angular
															.forEach(
																	service.Dict['WordCategory'],
																	function(
																			option) {
																		WordCategory[option.itemCode] = option.itemValue;
																	});

													service.CodeNameMap['WordCategory'] = WordCategory;
												});

								var dict6Promise = $http
										.get('cache/dicts/6/items')
										.success(
												function(data) {
													service.Dict['ClauseType'] = data;

													var ClauseType = {};
													angular
															.forEach(
																	service.Dict['ClauseType'],
																	function(
																			option) {
																		ClauseType[option.itemCode] = option.itemValue;
																	});

													service.CodeNameMap['ClauseType'] = ClauseType;
												});

								var dict3Promise = $http
										.get('cache/dicts/3/items')
										.success(
												function(data) {
													service.Dict['ResCategory'] = data;

													var ResCategory = {};
													angular
															.forEach(
																	service.Dict['ResCategory'],
																	function(
																			option) {
																		ResCategory[option.itemCode] = option.itemValue;
																	});

													service.CodeNameMap['ResCategory'] = ResCategory;
												});
								
								var dict10Promise = $http.get('cache/dicts/10/items')
								.success(dict10Handler);
								
								var dict11Promise = $http
								.get('cache/dicts/11/items')
								.success(
										function(data) {
											service.Dict['TeachingActivityMode'] = data;

											var TeachingActivityMode = {};
											angular
													.forEach(
															service.Dict['TeachingActivityMode'],
															function(
																	option) {
																TeachingActivityMode[option.itemCode] = option.itemValue;
															});

											service.CodeNameMap['TeachingActivityMode'] = TeachingActivityMode;
										});
								var dict12Promise = $http
								.get('cache/dicts/12/items')
								.success(
										function(data) {
											service.Dict['QuestionWord'] = data;
											var QuestionWord = {};
											angular
													.forEach(
															service.Dict['QuestionWord'],
															function(
																	option) {
																QuestionWord[option.itemCode] = option.itemValue;
															});

											service.CodeNameMap['QuestionWord'] = QuestionWord;
										});
								var dict14Promise = $http
								.get('cache/dicts/14/items')
								.success(
										function(data) {
											service.Dict['Province'] = data;
											var Province = {};
											angular
													.forEach(
															service.Dict['Province'],
															function(
																	option) {
																Province[option.itemCode] = option.itemValue;
															});

											service.CodeNameMap['Province'] = Province;
										});
								var dict15Promise = $http
								.get('cache/dicts/15/items')
								.success(
										function(data) {
											service.Dict['Area'] = data;
											var Area = {};
											angular
													.forEach(
															service.Dict['Area'],
															function(
																	option) {
																Area[option.itemCode] = option.itemValue;
															});

											service.CodeNameMap['Area'] = Area;
										});
								var activityPromise = $http
										.get('cache/activities')
										.success(
												function(data) {
													service.Dict['Activity'] = data;

													var Activity = {};
													angular
															.forEach(
																	service.Dict['Activity'],
																	function(
																			option) {
																		Activity[option.id] = option.name;
																	});

													service.IdNameMap['Activity'] = Activity;
												});

								var lessonPromise = $http.get('cache/lessons')
								.success(lessonSuccessHandler);

								

								return $q.all(
										[ dict4Promise, dict6Promise,
												dict3Promise, activityPromise,
												lessonPromise, dict10Promise, dict11Promise,dict12Promise
												,dict14Promise,dict15Promise]).then(
										function() {
											dictLoaded = true;
										});
							};

							var catalogLoaded = false;
							service.loadCatalog = function() {
								if (catalogLoaded) {return;}
								
								var catalogPromise = $http.get('catalogs')
								.success(function(data) {
									service.Dict['Catalogs'] = data;
								});

								var dict10Promise = $http.get('cache/dicts/10/items')
								.success(dict10Handler);

								return $q.all([dict10Promise, catalogPromise])
								.then(function() {
									catalogHandler(
										service.Dict['Catalogs'], 
										service.CodeNameMap['ClassHourCatalog']
										);

									catalogLoaded = true;
								});


							}

							service.reloadLesson = function() {
								return $http.get('lessons').success(
										lessonSuccessHandler);
							};
							
							
							
							return service;
						} ]);
