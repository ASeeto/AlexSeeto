
// get the action filter option item on page load
var $filterType;

// get and assign the ourHolder element to the
// $holder varible for use later
var $holder;

// clone all items within the pre-assigned $holder element
var $data;

// Rebuild Portfolio Item Divs and Pop-ups
$.ajax({                                      
    type: 'GET',
    url: '/php/portfolio.php',
    success: function(response){
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
                        '<p class="pf_shortdesc">'+obj.year.substring(0, 4)+' '+obj.type+'</p>'+
                        '</div>');
            // Append Portfolio Label to Item Div
            item.append(plbl);
            // Create List Item
            var listitem = $('<li class="item" data-id="id-'+obj.id+'" data-type="'+obj.type+'"></li>');
            // Append item to List Item
            listitem.append(item);
            // Prepend Portofolio List Item Div to #pf_items
            $('.portfolio').append(listitem);
        });

        // OLAY!! Adding the overlay for Pop-ups to work
        var olay = $('<div class="md-overlay"></div>');
        $('#pf_pops').append(olay);

        // get the action filter option item on page load
        $filterType = $('#filterOptions li.active a').attr('class');

        // get and assign the ourHolder element to the
        // $holder varible for use later
        $holder = $('ul.portfolio');

        // clone all items within the pre-assigned $holder element
        $data = $holder.clone();

        // Call modalEffects.js function to add event listeners
        init();
    },
    error: function(xhr, status, thrown)
    {
        console.log(xhr);
        console.log(status + ' ' + thrown);
    }
});

/** Quicksand */

// attempt to call Quicksand when a filter option
// item is clicked
$('#filterOptions li a').click(function(e) {
    // reset the active class on all the buttons
    $('#filterOptions li').removeClass('active');
    
    // assign the class of the clicked filter option
    // element to our $filterType variable
    $filterType = $(this).attr('class');
    $(this).parent().addClass('active');
    
    if ($filterType == 'all') {
        // assign all li items to the $filteredData var when
        // the 'All' filter option is clicked
        $filteredData = $data.find('li');
    } 
    else {
        // find all li elements that have our required $filterType
        // values for the data-type element
        $filteredData = $data.find('li[data-type=' + $filterType + ']');
    }
    
    // call quicksand and assign transition parameters
    $holder.quicksand($filteredData, {
        duration: 800,
        easing: 'easeInOutQuad'
    });
    // Call modalEffects.js function to add event listeners
    init();
    return false;
});