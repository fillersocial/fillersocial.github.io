function loadInitPrompt(){
	bootbox.prompt({
	  title: "Enter your favourite #hashtag",
	  value: "fossasia",
	  callback: function(result) {
	    if (result === null) {
	      Example.show("No Hashtag Selected");
	    } else {
	      	Example.show("#<b>"+result+"</b>");

		    myFunctionProfile(result);
	      	setInterval(function(){ 
		     	myFunctionProfile(result);
	  		}, 10000);
	      	
	      	showLastPhotoInCenter();
	      	setInterval(function(){ 
		     	showLastPhotoInCenter();
	  		}, 8000);
	      	
	      	changeBackGroundPhotos();
	      	setInterval(function(){ 
		     	changeBackGroundPhotos();
	  		}, 20000);
	    }
	  }
	});
}