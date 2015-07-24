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
                _.bindAll(this, 'onScroll');
                // bind to window
                $(window).scroll(this.onScroll);
            },

            events: {
                "click a[href*=#]:not([href=#])": "smoothScroll"
            },

            /** 
                Thanks CSS-Tricks! 
                http://css-tricks.com/snippets/jquery/smooth-scrolling/ 
            */
            smoothScroll: function(event){
                this.toggle(event);
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
            },
            onScroll: function(event){
                // Automatically show or hide nav background
                if($(window).scrollTop() > 100 && $(window).width() >= 768){
                    $('nav').css({'box-shadow':'0 8px 20px -6px #222', 'background':'#222'});
                } else {
                    $('nav').css({'box-shadow':'none', 'background':'transparent'});
                }
                // Automatically update active nav item
                // var scrollPos = $(document).scrollTop();
                // $('.nav a').each(function(){
                //     var currLink = $(this);
                //     var refElement = $(currLink.attr("href"));
                //     if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                //         $('.nav ul li a').removeClass("active");
                //         currLink.addClass("active");
                //     }
                //     else{
                //         currLink.removeClass("active");
                //     }
                // });
            },
            toggle: function(event){
                var clicked = $(event.currentTarget).closest('li');
                if(!clicked.hasClass('active')){
                    clicked.siblings().removeClass('active');
                    clicked.toggleClass('active');
                }
            }

        });
        return NavView;
    }
);