define(['jquery',
        'underscore',
        'backbone',
        'text!templates/headerTemplate.html'], 
    function($, _, Backbone, headerTemplate){
        var HeaderView = Backbone.View.extend({
            el: $('.row'),
            render: function(){
                // Using Underscore we can compile our template with data
                var data = {};
                var compiledTemplate = _.template( headerTemplate, data );
                // Append our compiled template to this Views "el"
                this.$el.prepend( compiledTemplate );
            },

            events: {},

        });
        return HeaderView;
    }
);