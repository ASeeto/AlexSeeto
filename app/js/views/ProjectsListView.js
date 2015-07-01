// Filename: views/projects/list
define([
  'jquery',
  'underscore',
  'backbone',
  // Pull in the Collection module from above,
  'models/ProjectModel',
  'collections/ProjectsCollection',
  'text!templates/projectsListTemplate.html'

], function($, _, Backbone, ProjectModel, ProjectsCollection, projectsListTemplate){
  var ProjectListView = Backbone.View.extend({
    render: function(){
      var data = {
        projects: this.collection.models,
        _: _ 
      };
      var compiledTemplate = _.template( projectsListTemplate, data );
      $('#projects').html( compiledTemplate ); 
    }
  });
  return ProjectListView;
});
