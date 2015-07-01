define(['jquery',
        'underscore',
        'backbone',
        'text!templates/experienceTemplate.html'], 
    function($, _, Backbone, experienceTemplate){
        var ExperienceView = Backbone.View.extend({
            el: $('#content'),
            render: function(){
                // Using Underscore we can compile our template with data
                var data = {};
                var compiledTemplate = _.template( experienceTemplate, data );
                // Append our compiled template to this Views "el"
                this.$el.append( compiledTemplate );
            },

            events: {},

        });
        return ExperienceView;
    }
);