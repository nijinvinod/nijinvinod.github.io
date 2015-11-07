$(document).ready(function(){
	console.log("ready");
	$("body").keydown(function(e) {
        if(e.keyCode == 27) { //escape
            utils.closePopUp();
        }
    });

	utils.loadTransitions();

});

var utils = {
	closePopUp: function(){
		$(".overlay").hide();
	},

	moveLinksUp: function(){
		var links = $(".links a");
		$(links).addClass("moveUp");
	},

	loadTransitions: function(){
		utils.moveLinksUp();
		$(".nameSlot .name").addClass("moveLeft");
		$(".nameSlot .role").addClass("moveRight");
	}
};