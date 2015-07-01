// Filename: views/projects/list
define([
  'jquery',
  'underscore',
  'backbone',
  // Pull in the Collection module from above,
  'models/ProjectModel',
  'collections/ProjectsCollection',
  'text!templates/projectsPopBoxTemplate.html'

], function($, _, Backbone, ProjectModel, ProjectsCollection, projectsPopBoxTemplate){
  var ProjectPopBoxView = Backbone.View.extend({
    render: function(){
      var data = {
        projects: this.collection.models,
        _: _ 
      };
      var compiledTemplate = _.template( projectsPopBoxTemplate, data );
      $('#popboxes').html( compiledTemplate ); 
    }
  });
  return ProjectPopBoxView;
});
