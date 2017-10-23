(function(jqLite) {
  'use strict';

  var BazingaApp = BazingaApp || {},
    helloBtn = jqLite.qs('#hello');

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
  function laodDevs() {
    var list = jqLite.qs('#devs-list');
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
        list.appendChild(article);
        article.innerHTML = devTemp.addDev(dev);
      });
    }
  }

  // Example of using $on method. This should be used to change the info panel of developers

  jqLite.$on(helloBtn, 'click', function() {
    alert('Bazinga!!!');
  });

  jqLite.$on('window', 'load', laodDevs());

  if ( typeof(window.BazingaApp) === 'undefined') {
    window.bazingaApp = BazingaApp;
  }

  return BazingaApp;
})(jqLite);
