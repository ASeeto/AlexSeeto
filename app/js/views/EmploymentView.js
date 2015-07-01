define(['jquery',
        'underscore',
        'backbone',
        'text!templates/employmentTemplate.html'], 
    function($, _, Backbone, employmentTemplate){
        var EmploymentView = Backbone.View.extend({
            el: $('#content'),
            render: function(){
                // Using Underscore we can compile our template with data
                var data = {};
                var compiledTemplate = _.template( employmentTemplate, data );
                // Append our compiled template to this Views "el"
                this.$el.append( compiledTemplate );
            },

            events: {},

        });
        return EmploymentView;
    }
);