'use strict';

/**
 * @ngdoc function
 * @name vibrantWebsiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the vibrantWebsiteApp
 */
var app =angular.module('vibrantWebsiteApp');
  app.controller('MainCtrl', function ($scope,CtrlDataShare) {
    $scope.features = [
      {
      		'img':'images/tasks.png',
      		'header' : 'Task Management',
      		'content' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
          'color': 'yellow',
          'fullContent' : 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.'
      },
      {
      		'img':'images/businesschat.png',
      		'header' : 'Business Messaging',
      		'content' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
          'color':'coral',
          'fullContent' : 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.'
      },
      {
      		'img':'images/performance.png',
      		'header' : 'Performance Tracking',
      		'content' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
          'color':'indigo',
        'fullContent' : 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.'
      },
      {
      		'img':'images/vira.png',
      		'header' : 'Virtual Assistant (Vira)',
      		'content' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
          'color':'orange',
          'fullContent' : 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.'
      }
    ];
    $scope.shareService = function(curObj){
        CtrlDataShare.assignData(curObj) ;
    };
    $scope.gdata = function(){
        return CtrlDataShare.getData();
    };  
  });


	app.directive('blowup',[
		function(){
			return{
				restrict : "A",

				link:function(scope,element,attrs){
					element.bind('click',function(){
            angular.element('#grow-block').addClass(attrs.colorc);
            angular.element('#grow-block').addClass('grow-active');
            var data = {
            'img' : scope.features[attrs.idx]['img'],
            'header' : scope.features[attrs.idx]['header'],
            'content' : scope.features[attrs.idx]['content'],
            'fullContent' : scope.features[attrs.idx]['fullContent']    
					 };
           angular.element('#grow-block').append( FeatureDetails(data) );
           scope.shareService(data);
          });
				},
			};
		}
	]);

function FeatureDetails(data){
  $('html').css({'overflow':'hidden'});
  var content = '<div id="contentId" class="container">'+
                  
                  ''+
                  
                  '<div class="blowup-d">'+
                  '<center><img style="width:45%" class="img-responsive" src="'+data['img']+'"></img>'+
                  '<h2 style="color:white">'+data['header']+'</h2>'+
                  '<h4 class = "detail-content" >'+data['fullContent']+'</h4>'+
                  '</center></div>'+

                  '<div class="blowup-c"><center>'+
                  '<img style="width:50%"  src="images/phonescreen_businesschat.png">'+
                  '</center></div>'+

                '</div>'
                $('.blowup-remove').css({'display':'inherit'});
  return content
}

