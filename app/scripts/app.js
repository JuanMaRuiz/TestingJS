(function(scope, jqLite) {
  'use strict';

  var BazingaApp = BazingaApp || {};
  let listOfDevelopers = [];
  const DDBB = 'data.json';

  /**
   * Initialize the application
   */
  BazingaApp.init = function() {
    jqLite.ajax(DDBB, (data) => {
      listOfDevelopers = new Developers(data);
      renderListOfDevs(listOfDevelopers);
    });
  };

  /**
   * TODO needs to be refactored
   * Render the list of developers and Render the first developer in the developer info panel.
   * @param {JSON} data - Array of objects from the ajax request
   */
  function renderListOfDevs(data) {
    const devsContainer = jqLite.qs('#devs-list');
    const developers = data.listOfDevelopers;

    developers.forEach(createDevItem);

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
    renderDev(developers[0].id);
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

    for (const dev of listOfDevelopers.listOfDevelopers) {
      if (dev.id == devId) {
        const developer = new Developer(listOfDevelopers.getDeveloper(dev.id));
        devPanel.innerHTML = developer.render();
      }
    }
  }

  // Init application on window load
  jqLite.$on(scope, 'load', BazingaApp.init());

  if ( typeof(scope.BazingaApp) === 'undefined') {
    window.bazingaApp = BazingaApp;
  }

  return BazingaApp;
})(window, jqLite);
