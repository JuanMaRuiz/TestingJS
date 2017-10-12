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
    var data = ajax('../data.json');
    console.log(data);
  };

  /**
   * @description VanillaJS implementation for Ajax request
   * @param {String} url        Url for the ajax request
   * @return {Object} response  All the info from the request
   */
  function ajax(url) {
    var response,
      httpRequest = new XMLHttpRequest();

    if ( !httpRequest ) {
      throw new Error('There was an error');
    }

    // TBD
    // httpRequest.onreadystatechange
    try {
      if (httpRequest.readyState == 4 && httpRequest.status == 200) {
        if (httpRequest.status === 200) {
          response = JSON.parse(httpRequest.responseText);
          console.log(response);
        }
      }
    } catch (err) {
      throw new Error('There was a problem with the request.' + err);
    }

    httpRequest.open('GET', url);
    httpRequest.send();

    return response;
  }

  if ( typeof(window.BazingaApp) === 'undefined') {
    window.BazingaApp = BazingaApp;
  }

  return BazingaApp;
})();
