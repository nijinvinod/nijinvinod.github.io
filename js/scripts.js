$(document).ready(function(){
	console.log("ready");
	$("body").keydown(function(e) {
        if(e.keyCode == 27) { //escape
            utils.closePopUp();
        }
    });

    utils.moveLinksUp();
});

var utils = {
	closePopUp: function(){
		$(".overlay").hide();
	},

	moveLinksUp: function(){
		var links = $(".links a");
		var i = 0;
		// setInterval(function(){
		// 	$(links[i]).addClass("moveUp");
		// 	console.log(i);
		// 	i++;
		// },500);
	}
};