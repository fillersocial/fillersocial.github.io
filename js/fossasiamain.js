function toggle_visibility(id, view) {
       var e = document.getElementById(id);
       if(view == 'hide')
          e.style.display = 'none';
       else
          e.style.display = 'block';
   }

function show_more_menu(value) {
  var x = document.getElementById("first_name2");
  x.value = value;
  myFunction();
}
function isInt(value) {
  return !isNaN(value) && (function(x) { return (x | 0) === x; })(parseFloat(value))
}
var toggleValue = true;

var nameList = [];
var photoList = [];
var idList = [];
var created_at = [];
var text = [];

function myFunctionProfile(hashtag) {
    var x = hashtag;
    if(x.length < 1){
      return 1;
    }

    // toggle_visibility('loadingMask', 'show');
    $.ajax({url: "https://hashtagunification.herokuapp.com/?q=" + x.trim(), success: function(result){
        // console.log(result);
        // toggle_visibility('loadingMask', 'hide');
        
          for(var i=0; i<result.length; i++){
            if(idList.indexOf(result[i].id) == -1){
              console.log("new entry: " + result[i].name);
              idList.push(result[i].id);
              nameList.push(result[i].name);
              photoList.push(result[i].profile_image_url);
              created_at.push(result[i].created_at);
              text.push(result[i].text);
              // $("#listOfPeople").prepend('<div style="display: none;" id="' + result[i].id + '"><li class="collection-item avatar">'+
              //   '<i class="circle"> <img src="' + result[i].profile_image_url + '" height="50px" width="50px" /></i>'+
              //     // '<i>profile_image_url</i>'+
              //     ' <span class="title"><b>' + 
              //     result[i].name + '</b> <div style="text-align: right;margin-top: -20px;font-size: 12px;">'+
              //     parseTwitterDate(result[i].created_at) + 
              //     '</div></span><p style="text-align:left;">' + result[i].text + ' </p></li></div>');
                  // $("#" + result[i].id).fadeIn('slow');

            }
          }
          showLastPhotoInCenter();
          changeBackGroundPhotos();
          // var counter = 0;
          // function showIt(){
          //   setTimeout(function(){ 
          //   console.log(idList[counter]);
                                
          //       $("#" + idList[counter++]).show();
          //       if(idList[counter] != undefined){
          //         showIt();
          //       }
          //   }, 100); 
          // }
          // showIt();

          // $('#metaInfo').empty();
          // $('#metaInfo').append(
          // '<b>' + 'Name: ' + '</b>' + result[0].name + '<br/>' +
          // '<b>' + 'Screen: ' + '</b>' + result[0].screen_name + '<br/>' +
          // '<b>' + 'Location: ' + '</b>' + result[0].location + '<br/>' +
          // '<b>' + 'Followers: ' + '</b>' + result[0].followers_count + '<br/>' +
          // '<b>' + 'Friends: ' + '</b>' + result[0].friends_count + '<br/>' +
          // '<b>' + 'Desc: ' + '</b>' + result[0].description
          // );

          // if(x.value.trim() == 'iisuperwomanii'){
          //   toggle_visibility('facebookFeedComesHere', 'show');
          // }else{
          //   toggle_visibility('facebookFeedComesHere', 'hide');
          // }
        // $('#facebookFeedComesHere').empty();
        //   $('#facebookFeedComesHere').append(

        //     '<div class="fb-page" data-href="https://www.facebook.com/' + x.value.trim() +
        //     '" data-tabs="timeline" data-small-header="true" data-adapt-container-width="true" ' +
        //     'data-hide-cover="true" data-show-facepile="false"><div class="fb-xfbml-parse-ignore">' +
        //     '<blockquote cite="https://www.facebook.com/' + x.value.trim() + 
        //     '"><a href="https://www.facebook.com/' + x.value.trim() + 
        //     '">' + x.value.trim() +'</a></blockquote></div></div>'

        //   );
          
        }});
}


function parseTwitterDate(tdate) {
    var system_date = new Date(Date.parse(tdate));
    var user_date = new Date();
    if (K.ie) {
        system_date = Date.parse(tdate.replace(/( \+)/, ' UTC$1'))
    }
    var diff = Math.floor((user_date - system_date) / 1000);
    if (diff <= 1) {return "just now";}
    if (diff < 20) {return diff + " seconds ago";}
    if (diff < 40) {return "half a minute ago";}
    if (diff < 60) {return "less than a minute ago";}
    if (diff <= 90) {return "one minute ago";}
    if (diff <= 3540) {return Math.round(diff / 60) + " minutes ago";}
    if (diff <= 5400) {return "1 hour ago";}
    if (diff <= 86400) {return Math.round(diff / 3600) + " hours ago";}
    if (diff <= 129600) {return "1 day ago";}
    if (diff < 604800) {return Math.round(diff / 86400) + " days ago";}
    if (diff <= 777600) {return "1 week ago";}
    return "on " + system_date;
}

// from http://widgets.twimg.com/j/1/widget.js
var K = function () {
    var a = navigator.userAgent;
    return {
        ie: a.match(/MSIE\s([^;]*)/)
    }
}();

function showLastPhotoInCenter(){

    var counterId = Math.floor((Math.random() * idList.length) + 1);
    console.log(counterId);
    if(idList[counterId] != undefined){
      bootbox.hideAll();
      bootbox.dialog({
        // title: nameList[counterId],
        message: '<div class="container2">' +
                  '<div>' +
                    '<img src="' + photoList[counterId] + '" class="iconDetails">' +
                  '</div>  ' +
                '<div style="margin-left:180px;">' +
                '<h4 style="font-size:2em">' + nameList[counterId] + '</h4>' +
                '<div style="font-size:1.5em">' + text[counterId] + '</div>' +
                '<div style="float:right;font-size:1.2em">' +  parseTwitterDate(created_at[counterId]) + '</div>' +
                '</div>' +
              '</div><br/><br/><br/>'
      });
    }

}


function changeBackGroundPhotos(){

  var htmlBuildForImages = '';
  if(photoList.length == undefined)
  {
      return 1;
  }
  for(var i=0; i<photoList.length; i++){
      if(photoList[i] != undefined)
      htmlBuildForImages +=  '<li><a href="#"><img src="' + photoList[i] + '"/></a></li>';
  }
  if(photoList.length < 31){
      for(var i=0; i<photoList.length; i++){
        if(photoList[i] != undefined)
        htmlBuildForImages +=  '<li><a href="#"><img src="' + photoList[i] + '"/></a></li>';
      }
      for(var i=0; i<photoList.length; i++){
        if(photoList[i] != undefined)
        htmlBuildForImages +=  '<li><a href="#"><img src="' + photoList[i] + '"/></a></li>';
      } 
      for(var i=0; i<photoList.length; i++){
        if(photoList[i] != undefined)
        htmlBuildForImages +=  '<li><a href="#"><img src="' + photoList[i] + '"/></a></li>';
      } 
  }
  $('#ri-grid').empty();
  $('#ri-grid').append('<img class="ri-loading-image" src="images/loading.gif"/><ul id="photoBackgroundList">' +
    // '<li><a href="#"><img src="images/medium/1.jpg"/></a></li>' + 
    htmlBuildForImages +
    '</ul></div>');
  $( '#ri-grid' ).gridrotator( {
          rows : 4,
          columns : 8,
          maxStep : 2,
          interval : 2000,
          w1024 : {
            rows : 5,
            columns : 6
          },
          w768 : {
            rows : 5,
            columns : 5
          },
          w480 : {
            rows : 6,
            columns : 4
          },
          w320 : {
            rows : 7,
            columns : 4
          },
          w240 : {
            rows : 7,
            columns : 3
          },
        } );
}




