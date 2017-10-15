/**
 * jqLite v0.1.0
 * This jqLite provides a simple API like jQuery to manipulate the DOM and add some basics useful methods like ajax request.
 * Is build in vanillaJS and the browser supports is the main objective.
 * @param {Object} window    - Window object is passed as parameter to avoid override it
 * @param {Object} document  - Document object is passed as parameter to avoid override it
 */
(function(window) {
  'use strict';

  var VERSION = '0.1.0',
    scope = window,
    jqLite = {};

  jqLite.thanks = function() {
    console.log('Bazinga! Thanks for using jqLite version ' + VERSION);
  };

  /**
   * VanillaJS implementation for Ajax request
   * @param {String} url        - Url for the ajax request
   * @param {Function} callback - Callback function to execute when ajax response is received
   */
  jqLite.ajax = function(url, callback) {
    var httpRequest = new XMLHttpRequest();

    if ( !httpRequest ) {
      throw new Error('Sorry there was an error creating an XMLHTTP instance');
    }

    httpRequest.onreadystatechange = makeRequest;
    httpRequest.open('GET', url);
    httpRequest.send();

    /**
     * Checks if the response was received and OK. Then send the response of the url provided to the callback function
     */
    function makeRequest() {
      try {
        if ( httpRequest.readyState == 4 && httpRequest.status == 200 ) {
          callback(JSON.parse(httpRequest.responseText));
        }
      } catch (err) {
        throw new Error('Sorry, there was an error processing your request: ' + err);
      }
    }
  };

  if ( !scope.jqLite ) {
    scope.jqLite = jqLite;
  }
})(window);
