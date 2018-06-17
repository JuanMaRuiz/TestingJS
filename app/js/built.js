(function(scope, jqLite) {
  'use strict';

  var BazingaApp = BazingaApp || {};
  const listOfDevelopers = [];

  BazingaApp.sayThanks = function() {
    jqLite.thanks();
  };

  /**
   * Init the application
   */
  BazingaApp.init = function() {
    // TODO need to be refactored
    getDevsInfo(renderListOfDevs);
  };

  /**
   * TODO needs to be refactored
   * Render the list of developers and Render the first developer in the developer info panel.
   * @param {JSON} data - Array of objects from the ajax request
   */
  function renderListOfDevs(data) {
    const devsContainer = jqLite.qs('#devs-list');

    data.forEach(createDevItem);

    /**
     * Creates a link element for every developer found in data.json
     * @param {*} dev - Developer data to be rendered
     */
    function createDevItem(dev) {
      const devTemp = new BazingaApp.Template();
      const li = jqLite.createElement('span', {
        'class': 'list-group-item list-group-item-action',
        'data-id': dev.id,
      });

      devsContainer.appendChild(li);
      li.innerHTML = devTemp.render(dev);
      attachClickEvent(li);
    }

    // Render the default developer (first of the data object) in the DeveloperTemplate Panel
    renderDev(data[0].id);
  }

  /**
   * @description Retrieve all the info about developers
   * @param {Function} callback - Function to be executed when all data have been retrieved via ajax request
   */
  function getDevsInfo(callback) {
    // const listOfDevelopers = [];
    jqLite.ajax('data.json', function(data) {
      for ( const developer of data ) {
        // TODO Developer should be imported with import statement but project needs babel to compile JS before
        const dev = new Developer(developer);
        listOfDevelopers.push(dev);
      }
      callback(listOfDevelopers);
    });
  }

  /**
   * Attach click event handler to every element in the list of developers.
   * @param {NodeElement} elem - Element which receive the click. User can select one of the developers to show all the
   * info related with him
   */
  function attachClickEvent(elem) {
    jqLite.$on(elem, 'click', (event) => {
      const devId = elem.getAttribute('data-id');
      const list = jqLite.qsa('#devs-list > span');
      // Removes .active class from all elements
      jqLite.removeClass(list, 'active');
      // Add active class to the clicked element
      jqLite.addClass(elem, 'active');
      renderDev(devId);
    });
  }

  /**
   * Render the developer panel with the info of the selected developer from the list
   * TODO needs refactor
   * @param {Integer} devId - Id of the developer selected by the user
   */
  function renderDev(devId) {
    const devPanel = jqLite.qs('#developer');

    for (const dev in listOfDevelopers) {
      if (listOfDevelopers.hasOwnProperty(dev) && listOfDevelopers[dev].id == devId) {
        const developer = new Developer(listOfDevelopers[dev]);
        devPanel.innerHTML = developer.render();
      }
    }
  }

  jqLite.$on(scope, 'load', BazingaApp.init());

  if ( typeof(scope.BazingaApp) === 'undefined') {
    window.bazingaApp = BazingaApp;
  }

  return BazingaApp;
})(window, jqLite);
;
class Developer { // eslint-disable-line no-unused-vars
  /**
   * DeveloperTemplate constructor
   * @param {Object} developer - Contains all necessary data about the developer
   */
  constructor(developer) {
    this.id = developer['_id'];
    this.name = developer.name;
    this.title = developer.title;
    this.bio = developer.bio;
    this.avatar = developer.avatar;
    this.web = developer.web;
    this.twitter = developer.twitter;
    this.github = developer.github;
  }

  /**
   * Generates the template for a developer with the given data.
   * @return {String} Contains the html to render
   */
  render() {
    return `<div class="card border-light mb-3">
    <div class="card-header">${this.name}</div>
    <div class="card-body">
    <p class="img"><img id="dev-image" class="img-rounded" src="${this.avatar}" alt="${this.name}" style="height: 200px"></p>
        <p class="card-text">${this.bio}</p>
        <p class="card-text"><span class="glyphicon glyphicon-link" aria-hidden="true"></span> <a href="${this.web}">${this.web}</a></p>
        <p class="card-text"><span class="glyphicon glyphicon-user" aria-hidden="true"></span> <a href="${this.twitter}">${this.twitter}</a></p>
        <p class="card-text"><span class="glyphicon glyphicon-cloud" aria-hidden="true"></span> <a href="${this.github}">${this.github}</a></p>
      <div>
    </div>`;
  }
}
;(function(scope) {
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
;/*
 ** THIS FILE COULD BE USED FOR WEBPACK
 **
*/
// require('../lib/js/jqLite.js');
// require('./app.js');
// require('./template.js');
// require('./developerTemplate.js');
// require('./developer.js');
;(function(scope) {
  'use strict';

  /**
   * Define the default template for developers list name panel. Please, note that this is not the proper way to do.
   * You should use a template engine to generate the html instead of generater is this way.
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
