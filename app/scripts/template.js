(function(scope) {
  'use strict';

  /**
   * Define the default template for developers list name panel
   * @constructor
   */
  function Template() {
    this.defaultTemplate = '<h4 class="list-group-item-heading">{{dev.name}}</h4>' +
      '<p class="list-group-item-text">{{dev.title}}</p>';
  }

  /**
   * Generates the template for a developer with the given data
   * @param {Object} data - Object containing all the data for any developer
   * @return {string}
   */
  Template.prototype.render = function(data) {
    var template = this.defaultTemplate,
      view = '';

    template = template.replace('{{dev.id}}', data['_id']);
    template = template.replace('{{dev.name}}', data.name);
    template = template.replace('{{dev.title}}', data.title);
    view += template;

    return view;
  };

  scope.bazingaApp = scope.bazingaApp || {};
  scope.bazingaApp.Template = Template;
})(window);
