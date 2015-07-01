define(['jquery',
        'underscore',
        'backbone',
        'text!templates/aboutTemplate.html'], 
    function($, _, Backbone, aboutTemplate){
        var AboutView = Backbone.View.extend({
            el: $('#content'),
            render: function(){
                // Using Underscore we can compile our template with data
                var data = {};
                var compiledTemplate = _.template( aboutTemplate, data );
                // Append our compiled template to this Views "el"
                this.$el.append( compiledTemplate );
            },

            events: {},

        });
        return AboutView;
    }
);