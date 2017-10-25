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
    getDevsInfo(renderDevs);

    /**
     * TODO needs to be refactored
     * Render the list of developers
     * @param {JSON} data - Array of objects from the ajax request
     */
    function renderDevs(data) {
      data.forEach(function(dev) {
        var devTemp = new BazingaApp.Template(),
          article = jqLite.createElement('article');
        devsContainer.appendChild(article);
        article.innerHTML = devTemp.addDev(dev);
      });
    }
  }

  // Example of using $on method. This should be used to change the info panel of developers

  jqLite.$on(helloBtn, 'click', function() {
    alert('Ohhhhh You clicked me!! You\'re so cute');
  });

  jqLite.$on(scope, 'load', init());

  if ( typeof(scope.BazingaApp) === 'undefined') {
    window.bazingaApp = BazingaApp;
  }

  return BazingaApp;
})(window, jqLite);
