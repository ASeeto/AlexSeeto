$(".md-details").on("click", function() {
    var popBox = $(this).parent().parent();
    var details = $(".details", popBox);
    var shown = details.css("display") != "none";
    if(shown){
        details.fadeOut();
    }else{
        details.fadeIn();
    }
});