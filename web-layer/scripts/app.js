(function() {
  'use strict';

  var BazingaApp = BazingaApp || {};

  BazingaApp.sayHello = function() {
    return 'This is awesome!!';
  };

  /**
   * @description Retrieve all the info about developers
   */
  BazingaApp.getDevsInfo = function() {

  };

  /**
   * @description VanillaJS implementation for Ajax request
   * @param {String} url        Url for the ajax request
   * @return {Object} response  All the info from the request
   */
  function ajax(url) {
    var httpRequest = new XMLHttpRequest();

    if( !httpRequest ) {
      throw new Error('There was an error')
    }

    // TBD
    // httpRequest.onreadystatechange

  }

  if ( typeof(window.BazingaApp) === 'undefined') {
    window.BazingaApp = BazingaApp;
  }

  return BazingaApp;
})();
