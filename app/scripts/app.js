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
