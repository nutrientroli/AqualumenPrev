
var forced = false;

$(document).ready(function(){
    var stoptransparency = 50; // when to stop the transparent menu
    var hidingmenu = 8200; // when to hide the menu
    var lastScrollTop = 0, delta = 5;
    $(this).scrollTop(0);
	$(window).on('scroll load resize', function() {
		var position = $(this).scrollTop();
		if(position > stoptransparency || forced) {
			$('#transmenu').removeClass('transparency');
		} else {
			$('#transmenu').addClass('transparency');
		}
        if(Math.abs(lastScrollTop - position) <= delta)
            return;
        if (position > hidingmenu && position > lastScrollTop){
            $('#transmenu').fadeOut(600);
        } else {
            $('#transmenu').fadeIn(600);
        }
        lastScrollTop = position;  
	});
});


var visibleMenu = function() {
    forced = !forced;
    if($('#transmenu').hasClass('transparency')){
        $('#transmenu').removeClass('transparency');
    }
}