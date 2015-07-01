define([
  'jquery',
  'underscore',
  'backbone',
  'models/ProjectModel',
  'collections/ProjectsCollection',
  'views/ProjectsListView',
  'views/ProjectsPopBoxView',
  'text!templates/projectsTemplate.html'
], function($, _, Backbone, ProjectModel, ProjectsCollection, ProjectsListView, ProjectsPopBoxView, projectsTemplate){

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
              var projectsPopBoxView = new ProjectsPopBoxView({ collection: projectsCollection});
              projectsPopBoxView.render(); 
              that.$filterType = $('#filterOptions li.active a').attr('class');
              that.$data = $('ul.portfolio');
          }
      });
    },
    
    events: {
      "click #filterOptions li a":"filter",
      "click .item":"openmodal",
      "click .md-overlay":"closemodal",
      "click .gallery":"toggleinfo",
      "click .md-details":"toggleinfo",
      "click .md-close":"closemodal"
    },

    openmodal: function(event){
      modal = $('#'+$(event.currentTarget).children().attr('data-modal'));
      $('.md-overlay').show();
      modal.addClass('md-show');
    },

    closemodal: function(){
      $('.md-show').removeClass('md-show');
      $('.md-overlay').hide();
    },

    toggleinfo: function(event){
      clicked = $(event.currentTarget)
      if(clicked.is('img')){
        $('.details', clicked.parent()).fadeToggle('fast');
      } else {
        $('.details', clicked.parent().parent()).fadeToggle('fast');
      }
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
