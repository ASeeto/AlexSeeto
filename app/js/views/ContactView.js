define(['jquery',
        'underscore',
        'backbone',
        'text!templates/contactTemplate.html'], 
    function($, _, Backbone, contactTemplate){
        var ContactView = Backbone.View.extend({
            el: $('#content'),
            render: function(){
                // Using Underscore we can compile our template with data
                var data = {};
                var compiledTemplate = _.template( contactTemplate, data );
                // Append our compiled template to this Views "el"
                this.$el.append( compiledTemplate );
            },

            events: {},

        });
        return ContactView;
    }
);