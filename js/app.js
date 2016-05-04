// data json 
 var features_idx = 0;
 var features = [
      {
          'img':'images/tasks.png',
          'det_img':'images/Tasks_ph.png',
          'header' : 'Task Management',
          'content' : 'Have secure and quick team communication with your entire team members either one to one or bring everybody in the same group.',
          'color': 'yellow',
          'width':61,
          'fullContent' : {
            'title' : 'When you have team working across different verticals and on different projects, it becomes cumbersome to manage the work. It requires use of multiple applications or frequent email updates to sync with each other.',
            'point1' : 'Your teams might be spread across locations, each working on different projects. With this app, you can make sure that each team is well allocated with their projects with sub divided tasks',
            'point2' : 'Let other teams know about project updates. Very often, each member is involved in different aspects of multiple projects. Keeping everyone updated about project progress ensures faster delivery of the tasks.',
            'point3' : 'Include external clients/ vendors in your project and give them specific access to the project progress,files. Managing an external team within your internal team will get lot easier.', 
          },
      },
      {
          'img':'images/businesschat.png',
          'det_img':'images/phonescreen_businesschat.png',
          'header' : 'Business Messaging',
          'content' : 'Have secure and quick team communication with your entire team members either one to one or bring everybody in the same group.',
          'color':'coral',
          'fullContent' : {
            'title' : 'When it comes to instant communication, emails don’t help you much. Get on to Vibrant Work App to have secure professional communication with your team. You can have one to one chat as well as you can create a group to chat with multiple team members to make sure everybody knows the updates.',
            'point1' : 'Secure, quick and instant communication with your team. No longer wait for email updates.',
            'point2' : 'Bring everybody on the same page. Create a group chat and add members to keep them updated about the progress and have updates on the project.',
            'point3' :  'Make your inbox zero and let professional communication take over chat to help everybody sync effectively.'
          },
      },
      {
          'img':'images/performance.png',
          'det_img':'images/phonescreen_performance.png',
          'header' : 'Performance Analytics',
          'content' : 'Measure your team’s growth by getting detailed analytics with respect to time vs productivity on each project',
          'color':'indigo',
          'fullContent' : {
            'title' : 'Growth of any organization is measured on KPIs aligned to the business vision. And, it is a known fact that behind any successful company is a strong dedicated team and taking care of teams’ growth should be a critical goal.Vibrant Work App lets you know your team’ s performance growth. Through detailed analytics measured in comparison time vs productivity, you and your team can push your limits to perform better than the yesterday.', 
            'point1' : 'Keep a track of your team’s growth and analyze over a period of time, how well your team is performing.',
            'point2' : 'Get detailed insights on each member’s productivity and see where it can be improved.',
            'point3' : 'Push your team’s limit by letting them know their performances and reward them accordingly.'
          },
      },
      {
          'img':'images/vira.png',
          'det_img':'images/phonescreen_vira.png',
          'header' : 'Virtual Assistant (Vira)',
          'content' : 'VIRA, brought to you by Vibrant, will be your virtual personal assistant to remind you of your priorities of the day and also help you in syncing with the updates.',
          'color':'orange',
          'fullContent' : {
            'title' : 'When you’re reminded of your priorities for the day, probability increases that you can accelerate your productivity for the day. VIRA is designed with the vision to assist you in finishing your important tasks on time and help you in syncing with your team based on requirements. ',
            'point1' :'Your conversational assistant : How about if you provide your team a digital assistant who could remind them of their priorities of the day and that could increase their productivity?',
            'point2' : 'VIRA will serve as a common friend for different sorts of communication and help in communicating dependencies of the task. ',
            'point3' :  'VIRA will walk each one through what is happening in their project on time to time basis. VIRA is designed to be more effective as you use, more features will be unleashed so your interaction with work related activities and critical information becomes easier.',
          },
      },
      {
          'img':'images/Vibrant_icons_alternate3.png',
          'det_img':'images/Filevault.png',
          'header' : 'File Storage',
          'width' : 61,
          'content' : 'Keep your official documents officially safe and secure with encrypted version making sure the documents are private to roles and privileges within the organization.',
          'color':'yellow',
          'fullContent' : {
            'title' : 'Store your files on cloud with Vibrant Work App file storage feature and easily share and collaborate with your team as and when required. Be ensured that your files are encrypted and then saved so you only have the access to the files and security can’t be breached.', 
            'point1' : 'Easy and secure storage of files over cloud. Access & Associate files from Google Drive, Dropbox, Box',
            'point2' : 'Collaborate effectively with your team with your files hosted on cloud, securely access and preview files from anywhere and anytime.',
            'point3' : 'File privacy is an important concern and no one can compromise on breach of that. With Vibrant Work App, you can be assured that your files are well encrypted and the access is limited to you. You can easily share to the members you wanted to. No need for using multiple file storage apps.' 
          },
      },
      {
          'img':'images/Vibrant_icons_alternate9.png',
          'det_img':'images/Activity.png',
          'header' : 'Activity Updates',
          'content' : ' Assign, acknowledge, finish and report - all with single a work app. Activity updates to keep the flow of work going.',
          'color':'teal',
          'width' : 61,
          'fullContent' : {
            'title' : 'Collaboration among team involves work dependencies where you dwell between acknowledging a task, finishing that task and reporting as a final step. All these 3 steps if managed in a single step can reduce a considerable time spent over collaboration. With Vibrant Work App, you can easily do the above three with activity updates. Assign a task and let the app tell you the progress of the task with instant activity updates', 
            'point1' : 'Get to know the pulse of the activity within your team through live activity feeds.',
            'point2' : 'Easy task assignment, acknowledgement and reporting - all through visual activity timeline',
            'point3' :  'One feature to help you with team updates across projects, across locations.'
          },
      },
     
    ]







  $(document).ready(function(){
    change_text();
    update_features();
  });

  var i = 0;
  var chg_text = ['Happy','Boost','10X']
  function change_text(){
    setTimeout(function(){
      
      $('#text-change').text(chg_text[i]);
      change_text();
      i +=  1;
      if (i==3){i=0}
    },5000);

  };

  var logoUrl;
  function callbk(){
    $('#request-invite').css({'display':'initial'})
  }

  var onloadCallback = function() {
    alert("grecaptcha is ready!");
  };

  $('#org-name').keyup(function(){
    
    var items = autocomplete( $(this).val() );
    // console.log(items);
    
  });


    $('#request-invite').on('click',function(){
    var fname = $('#fname').val();
    var lname = $('#lname').val();
    var email = $('#email').val();
    var mobno = $('#mobno').val();
    var orgnm = $('#org-name').val();
    var country = $('#country').val();
    var logo = logoUrl;
    $.ajax({
      type:"POST",
      crossDomain: true,
      contentType: "application/json" ,
      url : "http://trial.vibrantworkapp.com/request_trial",
      data : {"name":fname+' '+lname ,"country":country,'org_logo':logo, "email":email , "phone":mobno , "org_name":orgnm ,"timestamp":new Date().getTime()},
      success : function(response){
        console.log(response);
      }
    });
  });
  function autocomplete(key){
     var fdata;
     $.get( "https://autocomplete.clearbit.com/v1/companies/suggest?query=:"+key+"", function( data ) {
      fdata = data;
    }).done(function(){
      $('#auto-complete-options li').remove();
      if(fdata){
        $('#org-name').css({'margin-bottom':'0px !important'} )
        $.each(fdata,function(idx,val){
          if(val.name != null){
            $('#auto-complete-options').append('<li data-val="'+val.name+'" class="list-group-item2"><img style="width:5%;margin:0px 10px" src="'+val.logo+'" />'+val.name+'</li>')
          }
        });
      }
      else{
        $('#org-name').css({'margin-bottom':'10px !important'} )
      }
      // 
    });
  }

  $(document).on('click','li.list-group-item2',function(){
    $('#org-name').val( $(this).data('val') )
    if($(this).find('img').attr('src') != undefined){
      console.log( 'HEy watchu lookin at ',$(this).find('img').attr('src') );
      $('#org-name').parent().append('<img id="ilogo" src="'+$(this).find('img').attr('src')+'"/>');
    }
    logoUrl = $(this).find('img').attr('src')
    $('#auto-complete-options li').remove();

  });
  $(document).on('focus','input',function(){
    $('#auto-complete-options li').remove();
  });

  $(document).on('keyup','#org-name',function(){
    $('#org-name').parent().find('img').remove();
  });

  function update_features(){
    $.each(features,function(i){
      $('#features_container').append(
        '<div class="feature-block" data-color='+features[i]['color']+' data-idx='+i+'>'+ 
                  '<img class="popup" src='+features[i]['img']+' />'+
                  '<center class="feature-content">'+
                    '<p><b>'+features[i]['header']+'</b></p>'+
                    '<h5>'+features[i]['content']+'</h5>'+
                  '</center>'+
                '</div>'

        );
      });
  }


  $(document).on('click','.feature-block',function(){
        
                features_idx = $(this).data('idx');
                console.log(features_idx);
                $('#grow-block').addClass( $(this).data('color') );
                $('#grow-block').addClass('grow-active');
                $('.desktop-next,.desktop-prev').css('display','initial');
                var data = {
                'img' : features[features_idx]['img'],
                'header' : features[features_idx]['header'],
                'content' : features[features_idx]['content'],
                'fullContent' : features[features_idx]['fullContent']  ,
                'det_img' : features[features_idx]['det_img'],
                'width' : features[features_idx]['width']  
               };
               $('#grow-block').append( FeatureDetails(data) );
               // use services to share data
               // scope.shareService(data);
               // set all data of features
               // scope.setAllData(scope.features);

  });

  function FeatureDetails(data){
  $('html').css({'overflow':'hidden'});
  var width = 56;
  if (data['width']) {
    width = data["width"];
  }
  var content = '<div id="contentId" class="container">'+
                  
                  '<div class="blowup-desktop-header" style="text-align:justify"><h2 style="padding:0 0 0 3%;color:#fff;display:inline-block;vertical-align:middle">'+data['header']+'</h2></div>'+
                  
                  '<div class="blowup-d">'+
                  '<center>'+
                  '<img style="width:35%" class="blowup-mobile-feature img-responsive" src="'+data['img']+'"></img>'+
                  '<h2 class="blowup-mobile-featureH" style="color:#fff">'+data['header']+'</h2>'+
                  '</center>'+
                  '<li class = "detail-content" > '+data['fullContent']['point1']+'</li>'+
                  '<li class = "detail-content" > '+data['fullContent']['point2']+'</li>'+
                  '<li class = "detail-content" > '+data['fullContent']['point3']+'</li>'+
                  '</div>'+

                  '<div style="position:relative" class="blowup-c"><center>'+
                  '<img style="width:'+width+'%"  src="'+data['det_img']+'">'+
                  '<img style="width:20%;position:absolute;top:-6%;left:14%" src="'+data['img']+'"/>'+
                  '</center></div>'+

                '</div>';
                $('.blowup-remove').css({'display':'inherit'});
  return content
}


  $(document).on('click','#idd',function(){
      $(this).parent().parent().find('#contentId').remove();
      $(this).parent().parent().removeClass('grow-active');
      $(this).parent().parent().removeClass('yellow');
      $(this).parent().parent().removeClass('indigo');
      $(this).parent().parent().removeClass('orange');
      $(this).parent().parent().removeClass('coral');
      $(this).parent().parent().removeClass('teal');
      $('html').css({'overflow':'auto'});
      $('.blowup-remove').css({'display':'none'});
      $('.desktop-next,.desktop-prev').css({'display':'none'});
  });

  // carausol for features

  $(document).on('click','.prevnext',function(){
              console.log('click');
              var dir = $(this).data('navigate');
              if(dir == 'next'){
                features_idx = features_idx + 1 ;
                if(features_idx > 6){
                  features_idx = features_idx = 0;
                }
              }else{
                features_idx = features_idx - 1 ;
                if(features_idx < 0){
                  features_idx = features_idx = 6;
                }
              }
              console.log('click');
              var dataHTML = {
                'img' :  features[features_idx]['img'],
                'header' :  features[features_idx]['header'],
                'content' :  features[features_idx]['content'],
                'fullContent' :  features[features_idx]['fullContent'],
                'det_img' : features[features_idx]['det_img'],    
                'width' : features[features_idx]['width']
              };
              var cont = FeatureDetails(dataHTML);
              $('#contentId').remove();
              $('#grow-block').removeClass('yellow');
              $('#grow-block').removeClass('indigo');
              $('#grow-block').removeClass('orange');
              $('#grow-block').removeClass('coral');
              $('#grow-block').removeClass('teal');
              $('#grow-block').addClass( features[features_idx]['color'] );
              $('#grow-block').append( cont );
            
  



  });

  // main page javascript end //

// Navigation Animation code
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
//  Navigation animation code END

