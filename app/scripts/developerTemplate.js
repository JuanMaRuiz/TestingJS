(function(scope) {
  'use strict';
  /**
   * Define the default template for the DeveloperTemplate panel
   * @constructor
   */
  function DeveloperTemplate() {
    // TODO this constructor should be removed and the method too
  }

  /**
   * Generates the template for a developer with the given data. Please, note that this is not the proper way to do. You should use a template
   * engine to generate the html instead of generater is this way.
   * @param {Object} dev
   * @return {String} Contains the html to render
   */
  DeveloperTemplate.prototype.render = function(dev) {
    return `<div class="card border-light mb-3">
    <div class="card-header">${dev.name}</div>
    <div class="card-body">
    <p class="img"><img id="dev-image" class="img-rounded" src="${dev.avatar}" alt="${dev.name}" style="height: 200px"></p>
        <p class="card-text">${dev.bio}</p>
        <p class="card-text"><span class="glyphicon glyphicon-link" aria-hidden="true"></span> <a href="${dev.web}">${dev.web}</a></p>
        <p class="card-text"><span class="glyphicon glyphicon-user" aria-hidden="true"></span> <a href="${dev.twitter}">${dev.twitter}</a></p>
        <p class="card-text"><span class="glyphicon glyphicon-cloud" aria-hidden="true"></span> <a href="${dev.github}">${dev.github}</a></p>
      <div>
    </div>`;
  };

  scope.bazingaApp = scope.bazingaApp || {};
  scope.bazingaApp.DeveloperTemplate = DeveloperTemplate;
})(window);
