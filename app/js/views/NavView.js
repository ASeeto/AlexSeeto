define(['jquery',
        'underscore',
        'backbone',
        'text!templates/navTemplate.html'], 
    function($, _, Backbone, navTemplate){
        var NavView = Backbone.View.extend({
            el: $('#container'),
            render: function(){
                // Using Underscore we can compile our template with data
                var data = {};
                var compiledTemplate = _.template( navTemplate, data );
                // Append our compiled template to this Views "el"
                this.$el.prepend( compiledTemplate );
            },

            events: {
                "click a[href*=#]:not([href=#])": "scroll"
            },

            /** 
                Thanks CSS-Tricks! 
                http://css-tricks.com/snippets/jquery/smooth-scrolling/ 
            */
            scroll: function(event){
                var clicked = event.currentTarget;
                if (location.pathname.replace(/^\//,'') == clicked.pathname.replace(/^\//,'') && location.hostname == clicked.hostname) {

                    var target = $(clicked.hash);
                    target = target.length ? target : $('[name=' + clicked.hash.slice(1) +']');
                    if (target.length) {
                        if(target.selector != "#top"){
                            $('html,body').animate({
                                scrollTop: target.offset().top-$('.navbar-header').height()
                            }, 1000);
                            return false;
                        }else{
                            $('html,body').animate({
                                scrollTop: target.offset().top
                            }, 1000);
                            return false;
                        }
                    }
                }
            }

        });
        return NavView;
    }
);