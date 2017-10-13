/**
 * Created by dylan on 5/5/2017.
 */

$(document).ready(function(){
    $('body').css("display", "block");

    $("#scroll-icon").click(function() {
        $('html,body').animate({
            scrollTop: $("#info").offset().top},
            'slow');
    });
});


