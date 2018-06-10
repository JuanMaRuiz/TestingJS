(function(scope, jqLite) {
  'use strict';

  var BazingaApp = BazingaApp || {};

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
    const listOfDevelopers = [];
    jqLite.ajax('data.json', function(data) {
      for ( const item of data ) {
        // TODO Developer should be imported with import statement but project needs babel to compile JS before
        const dev = new Developer(item['_id'], item.name, item.title, item.bio, item.avatar, item.web, item.twitter, item.github);
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

    getDevsInfo(function(developers) {
      const developerTemplate = new BazingaApp.DeveloperTemplate();

      for ( const dev in developers) {
        if (developers.hasOwnProperty(dev) && developers[dev].id == devId) {
          devPanel.innerHTML = developerTemplate.render(developers[dev]);
        }
      }
    });
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
   * @param {String} id
   * @param {String} name
   * @param {String} title
   * @param {String} bio
   * @param {String} avatar
   * @param {String} web
   * @param {String} twitter
   * @param {String} github
   */
  constructor(id, name, title, bio, avatar, web, twitter, github) {
    this.id = id;
    this.name = name;
    this.title = title;
    this.bio = bio;
    this.avatar = avatar;
    this.web = web;
    this.twitter = twitter;
    this.github = github;
  }

  /**
   * Generates the template for a developer with the given data. Please, note that this is not the proper way to do. You should use a template
   * engine to generate the html instead of generater is this way.
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
;/**
 * jqLite v0.1.0
 * This jqLite provides a simple API like jQuery to manipulate the DOM and add some basics useful methods like ajax request.
 * Is build in vanillaJS and the browser supports is the main objective.
 * @param {Object} window    - Window object is passed as parameter to avoid override it
 * @param {Object} document  - Document object is passed as parameter to avoid override it
 */
(function(window) {
  'use strict';

  const VERSION = '0.1.0',
    scope = window,
    jqLite = {};

  jqLite.thanks = function() {
    console.log('Bazinga! Thanks for using jqLite version ' + VERSION);
  };

  /**
   * Uses fetch API for requests. If fetch is not available on browser invoke the alternative method with uses XMLHttpRequest
   * @param {String} url        - Url for the ajax request
   * @param {Function} callback - Callback function to execute when fetch response is received
   */
  jqLite.ajax = function(url, callback) {
    if (fetch) {
      fetch(url)
        .then((response) => response.json())
        .catch((error) => {
          throw new Error(`Sorry, there was an error processing your request: ${error}`);
        })
        .then( ( result ) => callback(result) );
    } else {
      makeRequest(url, callback);
    }
  };

  /**
   * Creates a new XMLHttpRequest if browser is not compatible with fetch method
   * @param {String} url        - Url for the XMLHttpRequest request
   * @param {Function} callback - Callback function to execute when XMLHttpRequest response is received
   */
  function makeRequest(url, callback) {
    const httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = doRequest;
    httpRequest.open('GET', url);
    httpRequest.send();

    if (!httpRequest) {
      throw new Error('Sorry there was an error creating an XMLHttpRequest instance');
    }

    /**
     * Checks if the response was received and OK. Then send the response of the url provided to the callback function
     */
    function doRequest() {
      try {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
          callback(JSON.parse(httpRequest.responseText));
        }
      } catch (err) {
        throw new Error('Sorry, there was an error processing your request: ' + err);
      }
    }
  }

  /**
   * Get Element by css selector (class or id). querySelector is widely supported from IE9.
   * @param {String} selector CSS Selector (id or class)
   * @param {Element} scope - If no context is provided 'document' will used
   * @return {Element} DOM Element to be retrieved
   */
  jqLite.qs = function(selector, scope) {
    const context = scope || document;
    return context.querySelector(selector);
  };

  /**
   * Get all the elements by css selector (class or id). querySelector is widely supported from IE9. As querySelectorAll
   * returns list of nodes instead of an array of elements we need to convert to Array using Array.prototype.slice.call() method
   * @param {String} selector CSS Selector (id or class)
   * @param {Element} scope - If no context is provided 'document' will used
   * @return {Array} of DOM Elements
   */
  jqLite.qsa = function(selector, scope) {
    const context = scope || document;
    return Array.prototype.slice.call(context.querySelectorAll(selector));
  };

  /**
   * Creates a new DOM element
   * @param {String} element - html tag which define the element to be created
   * @param {Object} config - [Optional] Receive an object with the configuragion of the element. This configuration contains
   * all the attributes the element should have to be created
   * @return {Element} DOM Element to be created
   */
  jqLite.createElement = function(element, config) {
    const domElement = document.createElement(element);
    if ( config ) {
      for (const [key, value] of Object.entries(config) ) {
        domElement.setAttribute(key, value);
      }
    }
    return domElement;
  };

  /**
   * Wrapper for addEventListener
   * @param {Element} target
   * @param {String} type - A string representing the Event Type
   * @param {Function} callback - Function to execute when receives the notification
   * @param {Object} options - Object that specifies characteristics about the event listener
   */
  jqLite.$on = function(target, type, callback, options) {
    const opt = options || false;
    target.addEventListener(type, callback, opt);
  };

  /**
   * Remove the class off all elements passed as NodeList
   * @param {NodeList} listOfElements - List of element with the given class we want to remove
   * @param {String} classToRemove
   */
  jqLite.removeClass = function(listOfElements, classToRemove) {
    for ( const dev of listOfElements) {
      dev.classList.remove(classToRemove);
    }
  };

  /**
   * Add a new class to an element
   * @param {NodeElement} element - Element to add class
   * @param {String} cls - Class we want to add to the element
   */
  jqLite.addClass = function(element, cls) {
    element.className += ' ' + cls;
  };

  if (!scope.jqLite) {
    scope.jqLite = jqLite;
  }
})(window);
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
