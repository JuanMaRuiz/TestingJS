(function(scope) {
  'use strict';


  /**
   * Define the default template for the DeveloperTemplate panel
   * @constructor
   */
  function DeveloperTemplate() {
    this.defaultTemplate = '<div class="card border-light mb-3">' +
    '<div class="card-header">{{dev.name}}</div>' +
    '<div class="card-body">'+
    '<p class="img"><img id="dev-image" class="img-rounded" src="{{dev.image}}" alt="{{dev.name}}" style="height: 200px"></p>' +
        '<p class="card-text">{{dev.bio}}</p>' +
        '<p class="card-text"><span class="glyphicon glyphicon-link" aria-hidden="true"></span> <a href="{{dev.web}}">{{dev.web}}</a></p>' +
        '<p class="card-text"><span class="glyphicon glyphicon-user" aria-hidden="true"></span> <a href="{{dev.twitter}}">{{dev.twitter}}</a></p>' +
        '<p class="card-text"><span class="glyphicon glyphicon-cloud" aria-hidden="true"></span> <a href="{{dev.github}}">{{dev.github}}</a></p>' +
      '<div>' +
    '</div>';
  }

  /**
   * Generates the template for a developer with the given data. Please, note that this is not the proper way to do. You should use a template
   * engine to generate the html instead of generater is this way.
   * @param {Object} data
   * @return {String} Contains the html to render
   */
  DeveloperTemplate.prototype.render = function(data) {
    let template = this.defaultTemplate,
      view = '';

    template = template.replace(/{{dev.image}}/g, data.avatar);
    template = template.replace(/{{dev.name}}/g, data.name);
    template = template.replace(/{{dev.bio}}/g, data.bio);
    template = template.replace(/{{dev.web}}/g, data.web);
    template = template.replace(/{{dev.twitter}}/g, data.twitter);
    template = template.replace(/{{dev.github}}/g, data.github);
    view += template;
    return view;
  };

  scope.bazingaApp = scope.bazingaApp || {};
  scope.bazingaApp.DeveloperTemplate = DeveloperTemplate;
})(window);
