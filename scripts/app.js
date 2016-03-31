'use strict';

/**
 * @ngdoc overview
 * @name vibrantWebsiteApp
 * @description
 * # vibrantWebsiteApp
 *
 * Main module of the application.
 */
var app = angular
  .module('vibrantWebsiteApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);
  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/contact',{
        templateUrl: 'views/contact.html',
        controller : 'contactCtrl',
        controllerAs : 'contact'
      })
      .when('/privacy',{
        templateUrl: 'views/privacy.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

  app.service('CtrlDataShare',function(){
      this.recentObj = null; 

      this.assignData = function(newObj){
        this.recentObj = newObj;
      }; 

      this.getData = function(){
        return this.recentObj;
      };
      
  });

  app.controller('feature-details',function ($scope,CtrlDataShare){
    $scope.details = CtrlDataShare.getData();
  });

  app.directive('update',function (CtrlDataShare){
    return {
      restrict : 'A',
      link : function(scope,element,attr){
        element.bind('click',function(){
          setTimeout(function(){         
            scope.details = CtrlDataShare.getData();
        },2000);
        });
      }
    }
  });

  $(document).on('click','#idd',function(){
      console.log('click');
      $(this).parent().parent().find('#contentId').remove();
      $(this).parent().parent().removeClass('grow-active');
      $(this).parent().parent().removeClass('yellow');
      $(this).parent().parent().removeClass('indigo');
      $(this).parent().parent().removeClass('orange');
      $(this).parent().parent().removeClass('coral');
      $('html').css({'overflow':'auto'});
      $('.blowup-remove').css({'display':'none'});
  });

  $('.nav-menu-cont,.list-group-item,#phone-menu-btn,#nav-remove,#overlay').on('click',function(){
    $('.navigation').toggleClass('navigation-trans');
    if( $('.navigation').hasClass('navigation-trans') ){
      $('.navigation-content').css({'display':'initial'}); 
      $('#overlay').addClass('bodyOverlay'); 
      $('#zoom').addClass('zoom-out');
    }
    else{
      $('.navigation-content').css({'display':'none'}); 
      $('#overlay').removeClass('bodyOverlay');
      $('#zoom').removeClass('zoom-out');
    }
    
  });
