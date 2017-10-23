(function(scope) {
  'use strict';

  /**
   * Define the default template for developers list name panel
   * @constructor
   */
  function Template() {
    this.defaultTemplate
    = '<div class="box">'
    + '<article class="media" data-id="{{dev.id}}">'
    + '<p>{{dev.name}}</p>'
    + '</article>'
    + '</div>';
  }

  /**
   * Generates the template for a developer with the given data
   * @param {Object} data - Object containing all the data for any developer
   * @return {string}
   */
  Template.prototype.addDev = function(data) {
    var template = this.defaultTemplate,
      view = '';

    template = template.replace('{{id}}', data['_id']);
    template = template.replace('{{dev.name}}', data.name);
    view = view + template;

    return view;
  };

  scope.bazingaApp = scope.bazingaApp || {};
  scope.bazingaApp.Template = Template;
})(window);
