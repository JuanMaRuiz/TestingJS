(function(jqLite) {
  'use strict';

  var BazingaApp = BazingaApp || {};

  BazingaApp.sayThanks = function() {
    jqLite.thanks();
  };

  /**
   * Retrieve all the info about developers
   */
  BazingaApp.getDevsInfo = function() {
    jqLite.ajax('data.json', function(data) {
      console.log(data);
    });
  };

  if ( typeof(window.BazingaApp) === 'undefined') {
    window.BazingaApp = BazingaApp;
  }

  return BazingaApp;
})(jqLite);
