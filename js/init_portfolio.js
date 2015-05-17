// Initiate Portfolio Items
$.each(portfolioInformation, function(index, item){
    var item =  $('<div class="md-trigger pf_item" data-modal="'+item.id+'" style="background-image: url(img/'+item.id+'.png)">'+
                                    '<div class="pf_label">'+
                                        '<h2>'+item.title+'</h2>'+
                                        '<p class="pf_shortdesc">'+item.sdesc+'</p>'+
                                    '</div>'+
                                '</div>');
    $('#pf_items').prepend(item);
});

// Initiate Portfolio Item Popups
$.each(portfolioInformation, function(index, item){
    var pf_pop =    $('<div class="md-modal md-effect-1 popBox" id="'+item.id+'">'+
                                        '<div class="md-content">'+
                                            '<div class="toolbar">'+
                                                '<div class="md-close"></div>'+
                                                '<div class="md-details"></div>'+
                                            '</div>'+
                                            '<img class="gallery" src="img/'+item.id+'.png">'+
                                            '<div class="details">'+
                                                '<h3>'+item.title+'</h3>'+
                                                '<p>'+item.desc+'</p>'+
                                            '</div>'+
                                        '</div>'+
                                    '</div>');
    $('#pf_pops').prepend(pf_pop);
});

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