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
    var devsContainer = jqLite.qs('#devs-list');

    data.forEach(createDevItem);

    /**
     * Creates a link element for every developer in data.json
     * @param {*} dev - Node DOM element
     */
    function createDevItem(dev) {
      var devTemp = new BazingaApp.Template(),
        li = jqLite.createElement('a');
      li.className = 'list-group-item';
      li.setAttribute('href', '#');
      li.setAttribute('data-id', dev['_id']);
      devsContainer.appendChild(li);
      li.innerHTML = devTemp.render(dev);
      attachClickEvent(li);
    }

    // Render the default developer (first of the data object) in the Developer Panel
    renderDev(data[0]['_id']);
  }

  /**
   * @description Retrieve all the info about developers
   * @param {Function} callback - Function to be executed when all data have been retrieved via ajax request
   */
  function getDevsInfo(callback) {
    jqLite.ajax('data.json', function(data) {
      callback(data);
    });
  }

  /**
   * Attach click event handler to every element in the list of developers.
   * @param {NodeElement} elem - Element which receive the click. User can select one of the developers to show all the
   * info related with him
   */
  function attachClickEvent(elem) {
    jqLite.$on(elem, 'click', function(event) {
      var devId = elem.getAttribute('data-id'),
        list;
      // Remove the active class for all elements
      list = jqLite.qsa('#devs-list > a');
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
    var devPanel = jqLite.qs('#developer');

    getDevsInfo(function(developers) {
      var devTemp = new BazingaApp.Developer(),
        dev;

      for (dev in developers) {
        if (developers.hasOwnProperty(dev) && developers[dev]['_id'] == devId) {
          devPanel.innerHTML = devTemp.render(developers[dev]);
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
