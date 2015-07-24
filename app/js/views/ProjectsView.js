define([
  'jquery',
  'underscore',
  'backbone',
  'models/ProjectModel',
  'collections/ProjectsCollection',
  'views/ProjectsListView',
  'text!templates/projectsTemplate.html'
], function($, _, Backbone, ProjectModel, ProjectsCollection, ProjectsListView, projectsTemplate){

  var ProjectsView = Backbone.View.extend({
    el: $("#content"),
    initialize: function(){
      this.$filterType;
      this.$data;
    },
    render: function(){
      this.$el.append(projectsTemplate);
      var projectsCollection = new ProjectsCollection();
      var url = '/api/projects';
      var that=this;
      $.ajax({
          url:url,
          dataType:"json",
          success:function (data) {
              var projectsCollection = new ProjectsCollection(data);
              var projectsListView = new ProjectsListView({ collection: projectsCollection}); 
              projectsListView.render();
              that.$filterType = $('#filterOptions li.active a').attr('class');
              that.$data = $('ul.portfolio');
          }
      });
    },
    
    events: {
      "click #filterOptions li a":"filter"
    },

    filter: function(event){
      event.preventDefault();
      clicked = event.currentTarget;
      $('#filterOptions li').removeClass('active');
      this.$filterType = $(clicked).attr('class');
      $(clicked).parent().addClass('active');
      this.$data
      if (this.$filterType == 'all') {
        this.$data.find('li').fadeOut('normal').addClass('hidden');
        $filteredData = this.$data.find('li');
      }
      else {
        this.$data.find('li').fadeOut('normal').addClass('hidden');
        $filteredData = this.$data.find('li[data-type=' + this.$filterType + ']');
      }
      $filteredData.fadeIn('slow').removeClass('hidden');
      return false;
    }
  });
  return ProjectsView;
});
