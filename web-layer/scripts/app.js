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
    ajax('http://localhost:3000/data.json', function(data) {
      console.log(data);
    });
  };

  /**
   * @description VanillaJS implementation for Ajax request
   * @param {String} url         Url for the ajax request
   * @param {Function} callback  Callback function
   */
  function ajax(url, callback) {
    var response,
      httpRequest = new XMLHttpRequest();

    if ( !httpRequest ) {
      throw new Error('There was an error');
    }
    
    httpRequest.onreadystatechange = function() {
      try {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
          if (httpRequest.status === 200) {
            response = JSON.parse(httpRequest.responseText);
            callback(response);
          }
        }
      } catch (err) {
        throw new Error('There was a problem with the request.' + err);
      }
    };
    httpRequest.open('GET', url);
    httpRequest.send();
  }

  if ( typeof(window.BazingaApp) === 'undefined') {
    window.BazingaApp = BazingaApp;
  }

  return BazingaApp;
})();
