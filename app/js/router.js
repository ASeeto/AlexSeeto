define(['jquery',
        'underscore',
        'backbone',
        'views/NavView',
        'views/HeaderView',
        'views/AboutView',
        'views/ExperienceView',
        'views/EmploymentView',
        'views/ProjectsView',
        'views/ContactView',
        'views/FooterView'], 
    function($, _, 
                Backbone, 
                NavView, 
                HeaderView, 
                AboutView, 
                ExperienceView, 
                EmploymentView,
                ProjectsView,
                ContactView,
                FooterView){
        var AppRouter = Backbone.Router.extend({
            routes: {}
        });

        var initialize = function(){
            var app_router = new AppRouter;

            /** Build Navigation */
            var navView = new NavView();
            navView.render();

            /** Build Header */ 
            var headerView = new HeaderView();
            headerView.render();

            /** Build About Section */ 
            var aboutView = new AboutView();
            aboutView.render();

            /** Build Experience Section */ 
            var experienceView = new ExperienceView();
            experienceView.render();

            /** Build Employment Section */ 
            var employmentView = new EmploymentView();
            employmentView.render();

            /** Build Projects Section */ 
            var projectsView = new ProjectsView();
            projectsView.render();

            /** Build Contact Section */ 
            var contactView = new ContactView();
            contactView.render();
            
            /** Build Footer */ 
            var footerView = new FooterView();
            footerView.render();

            Backbone.history.start();
        };
        return {
            initialize: initialize
        };
    }
);