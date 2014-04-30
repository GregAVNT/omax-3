
//Nav bar code: 
function detectJQ(){
	if (window.jQuery) {  
     console.log();
    
	} else {
	    window.setTimeout(detectJQ(), 100)
	}
	
};

detectJQ();

function jqRun(){
	
		$(function() {
	    //caches a jQuery object containing the header element
	    var header = $("#header");
	    $(window).scroll(function() {
	        var scroll = $(window).scrollTop();
	
	        if (scroll >= 80) {
	            alert('scroll down');
	        } else {
	            alert('scroll up');
	        }
	    });
	});

}
