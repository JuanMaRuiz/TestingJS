(function(scope) {
  'use strict';

  /**
   * Define the default template for developers list name panel. Please, note that this is not the proper way to do. You should use a template
   * engine to generate the html instead of generater is this way.
   * @constructor
   */
  function Template() {
    this.defaultTemplate = '<h5 class="mb-1">{{dev.name}}</h5>' +
      '<p>{{dev.title}}</p>';
  }

  /**
   * Generates the template for a developer with the given data
   * @param {Object} data - Object containing all the data for any developer
   * @return {string}
   */
  Template.prototype.render = function(data) {
    let template = this.defaultTemplate,
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
