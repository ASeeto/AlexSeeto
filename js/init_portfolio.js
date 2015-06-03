// Rebuild Portfolio Item Divs and Pop-ups
function showItems(item_type){
    $('#pf_items').empty();
    $('#pf_pops').empty();
    $.ajax({                                      
        type: 'GET',
        url: '../php/portfolio.php',       
        data: {'item_type':item_type},
        success: function(response)
        {
            response = JSON.parse( response );
            $.each(response, function(index, obj){

                // +------------------------------+
                // | Build Portfolio Item Pop Ups |
                // +------------------------------+

                // Create Portfolio Pop Up
                var pops = $('<div class="md-modal md-effect-1 popBox" id="pf_item'+obj.id+'"'+
                            '></div>');
                // Create Portfolio Pop-Up Content Div
                var mdct = $('<div class="md-content"></div>');
                // Create Portfolio Popup Toolbar
                var tlbr = $('<div class="toolbar">'+
                            '<div class="md-close"></div>'+
                            '<div class="md-details"></div>'+
                            '</div>');
                // Create Portfolio Pop-Up Showcase Image
                var pimg = $('<img class="gallery" src="img/portfolio/'+obj.img+'">');
                // Create Portfolio Pop-Up Details Div
                var dtls = $('<div class="details">'+
                            '<h3>'+obj.title+'</h3>'+
                            '<p><b>Tools: </b>'+obj.tools+'</p>'+
                            '<p><b>Description: </b>'+obj.description+'</p>'+
                            '</div>');
                // Add Link to Details if exists
                if(obj.link){
                    var link = $('<p><b>Link: </b><a href='+obj.link+' target=\"_blank\">'+obj.link+'</a></p>')
                    dtls.append(link);
                }
                // Add Git Link to Details if exists
                if(obj.git){
                    var code = $('<p><b>Source Code: </b><a href='+obj.git+' target=\"_blank\">'+obj.git+'</a></p>')
                    dtls.append(code);
                }
                // Append components to Portoflio Pop-Up
                mdct.append(tlbr);
                mdct.append(pimg);
                mdct.append(dtls);
                pops.append(mdct);

                // Prepend Portofolio Item Div to #pf_items
                $('#pf_pops').append(pops);

                // +------------------------------+
                // |  Build Portfolio Item Divs   |
                // +------------------------------+

                // Create Portfolio Item Div
                var item = $('<div class="md-trigger pf_item" data-modal="pf_item'+obj.id+'"'+
                            'style="background-image: url(img/portfolio/'+obj.img+')"'+
                            '></div>');
                // Create Portfolio Label
                var plbl = $('<div class="pf_label"><h2>'+obj.title+'</h2>'+
                            '<p class="pf_shortdesc">'+obj.year+' '+obj.type+'</p>'+
                            '</div>');
                // Append Portfolio Label to Item Div
                item.append(plbl);
                // Prepend Portofolio Item Div to #pf_items
                $('#pf_items').append(item);
            });

            // OLAY!! Adding the overlay for Pop-ups to work
            var olay = $('<div class="md-overlay"></div>');
            $('#pf_pops').append(olay);

            // Call modalEffects.js function to add event listeners
            init();
        },
        error: function(xhr, status, thrown)
        {
            console.log(xhr);
            console.log(status + ' ' + thrown);
        }
    });
}

// Initialize all Portfolio Items
showItems('');