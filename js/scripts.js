$(document).ready(function(){
	$("body").keydown(function(e) {
        if(e.keyCode == 27) { //escape
            utils.closePopUp();
        }
    });
});

var utils = {
	closePopUp: function(){
		$(".overlay").hide();
	}
};