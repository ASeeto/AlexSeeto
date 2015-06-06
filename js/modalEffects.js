/**
 * modalEffects.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */

/**
 * This file has been modified slightly by Alexander Seeto.
 */
function init() {

    var overlay = document.querySelector( '.md-overlay' );

    [].slice.call( document.querySelectorAll( '.md-trigger' ) ).forEach( function( el, i ) {

        var modal = document.querySelector( '#' + el.getAttribute( 'data-modal' ) ),
            close = modal.querySelector( '.md-close' );

        function removeModal( hasPerspective ) {
            classie.remove( modal, 'md-show' );

            if( hasPerspective ) {
                classie.remove( document.documentElement, 'md-perspective' );
            }
        }

        function removeModalHandler() {
            removeModal( classie.has( el, 'md-setperspective' ) ); 
        }

        el.addEventListener( 'click', function( ev ) {
            classie.add( modal, 'md-show' );
            overlay.removeEventListener( 'click', removeModalHandler );
            overlay.addEventListener( 'click', removeModalHandler );

            if( classie.has( el, 'md-setperspective' ) ) {
                setTimeout( function() {
                    classie.add( document.documentElement, 'md-perspective' );
                }, 25 );
            }
        });

        close.addEventListener( 'click', function( ev ) {
            ev.stopPropagation();
            removeModalHandler();
        });

    } );
    
   /**
    * Add event listener for Toolbar for clicking "i" to hide information
    */
    [].slice.call( document.querySelectorAll( '.md-details' ) ).forEach( function( el, i ) {
        el.addEventListener( 'click', function( ev ) {
            var popBox = $(this).parent().parent();
            var details = $(".details", popBox);
            var shown = details.css("display") != "none";
            if(shown){
                details.fadeOut();
            }else{
                details.fadeIn();
            }
        });
    });
    
   /**
    * Add event listener for clicking content area to hide information
    */
    [].slice.call( document.querySelectorAll( '.md-content' ) ).forEach( function( el, i ) {
        el.addEventListener( 'click', function( ev ) {
            var popBox = $(this).parent().parent();
            var details = $(".details", popBox);
            var shown = details.css("display") != "none";
            if(shown){
                details.fadeOut();
            }else{
                details.fadeIn();
            }
        });
    });
}

