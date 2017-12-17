(function(scope) {
  'use strict';


  /**
   * Define the default template for the Developer panel
   * @constructor
   */
  function Developer() {
    this.defaultTemplate = '<img id="dev-image" src="{{dev.image}}" alt="{{dev.name}}" style="backgroun-width: contain">' +
      '<div class="caption">' +
        '<h3>{{dev.name}}</h3>' +
        '<p>{{dev.bio}}</p>' +
        '<p><span class="glyphicon glyphicon-link" aria-hidden="true"></span> <a href="{{dev.web}}">{{dev.web}}</a></p>' +
        '<p><span class="glyphicon glyphicon-user" aria-hidden="true"></span> <a href="{{dev.twitter}}">{{dev.twitter}}</a></p>' +
        '<p><span class="glyphicon glyphicon-cloud" aria-hidden="true"></span> <a href="{{dev.github}}">{{dev.github}}</a></p>' +
        '<p><a id="say-hello" href="#" class="btn btn-primary" role="button">Say Hello!</a></p>' +
    '</div>';
  }

  /**
   * Generates the template for a developer with the given data
   * @param {Object} data
   * @return {String} Contains the html to render
   */
  Developer.prototype.render = function(data) {
    var template = this.defaultTemplate,
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
  scope.bazingaApp.Developer = Developer;
})(window);
