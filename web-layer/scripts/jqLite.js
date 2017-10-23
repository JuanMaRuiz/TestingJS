/**
 * jqLite v0.1.0
 * @description This jqLite provides a simple API like jQuery to manipulate the DOM and add some basics useful methods like ajax request.
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
   * @description VanillaJS implementation for Ajax request
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

  /**
   * Get Element by css selector (class or id). querySelector is widely supported from IE9.
   * @param {String} selector CSS Selector (id or class)
   * @param {Element} scope - If no context is provided 'document' will used
   * @return {Element} DOM Element to be retrieved
   */
  jqLite.qs = function(selector, scope) {
    var context = scope || document;
    return context.querySelector(selector);
  };

  /**
   * Creates a new DOM element
   * @param {String} element - html tag which define the element to be created
   * @param {Element} scope - If no context is provided 'document' will used
   * @return {Element} DOM Element to be created
   */
  jqLite.createElement = function(element, scope) {
    var context = scope || document;
    return context.createElement(element);
  };

  /**
   * Wrapper for addEventListener
   * @param {Element} target
   * @param {String} type - A string representing the Event Type
   * @param {Function} callback - Function to execute when receives the notification
   * @param {Object} options - Object that specifies characteristics about the event listener
   */
  jqLite.$on = function(target, type, callback, options) {
    var opt = options || false;
    target.addEventListener(type, callback, opt);
  };

  if ( !scope.jqLite ) {
    scope.jqLite = jqLite;
  }
})(window);
