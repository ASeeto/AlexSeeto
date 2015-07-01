define(['jquery',
        'underscore',
        'backbone',
        'text!templates/footerTemplate.html'], 
    function($, _, Backbone, footerTemplate){
        var FooterView = Backbone.View.extend({
            el: $('.row'),
            render: function(){
                // Using Underscore we can compile our template with data
                var data = {};
                var compiledTemplate = _.template( footerTemplate, data );
                // Append our compiled template to this Views "el"
                this.$el.append( compiledTemplate );
            },

            events: {},

        });
        return FooterView;
    }
);