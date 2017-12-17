(function(scope, jqLite) {
  'use strict';

  var BazingaApp = BazingaApp || {},
    helloBtn = jqLite.qs('#say-hello');

  BazingaApp.sayThanks = function() {
    jqLite.thanks();
  };

  /**
   * @description Retrieve all the info about developers
   * @param {Function} callback - Function to be executed when all data have been retrieved form the ajax request
   */
  function getDevsInfo(callback) {
    jqLite.ajax('data.json', function(data) {
      callback(data);
    });
  }

  /**
   * Add all developers to the #devs-list container and render it
   */
  function init() {
    var devsContainer = jqLite.qs('#devs-list');

    // TODO need to be refactored
    getDevsInfo(renderListOfDevs);

    /**
     * TODO needs to be refactored
     * Render the list of developers
     * @param {JSON} data - Array of objects from the ajax request
     */
    function renderListOfDevs(data) {
      data.forEach(function(dev) {
        var devTemp = new BazingaApp.Template(),
          li = jqLite.createElement('a');
        li.className = 'list-group-item';
        li.setAttribute('href', '#');
        li.setAttribute('data-id', dev['_id']);
        devsContainer.appendChild(li);
        li.innerHTML = devTemp.addDev(dev);
      });

      attachEvent();
    }
  }

  // Example of using $on method. This should be used to change the info panel of developers

  jqLite.$on(helloBtn, 'click', function() {
    console.log('Ohhhhh You clicked me!! You\'re so cute');
  });

  /**
   * Attach click event handler to every element in the list of developers.
   * TODO needs to be refactored. It could be useful to have a method in the libray to do it instead a method in the app for attaching this
   * event to a single list of elements.
   */
  function attachEvent() {
    var devsItems = jqLite.qsa('#devs-list > a');

    devsItems.forEach(function(elem) {
      jqLite.$on(elem, 'click', function(event) {
        var devId = elem.getAttribute('data-id');
        // Remove the class for all elements
        jqLite.removeClass(devsItems, 'active');
        // Add active class to the clicked element
        jqLite.addClass(elem, 'active');
        renderDev(devId);
      });
    });
  }

  /**
   * Render the developer panel with the info of the selected developer in the list
   * TODO needs refactor
   * @param {Integer} devId - Id of the developer selected by the user
   */
  function renderDev(devId) {
    var devPanel = jqLite.qs('#developer');

    // getDevsInfo(render);
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

  jqLite.$on(scope, 'load', init());

  if ( typeof(scope.BazingaApp) === 'undefined') {
    window.bazingaApp = BazingaApp;
  }

  return BazingaApp;
})(window, jqLite);
