/**
 * jqLite v0.1.0
 * This jqLite provides a simple API like jQuery to manipulate the DOM and add some basics useful methods like ajax request.
 * Is build in vanillaJS and the browser supports is the main objective.
 * @param {Object} window    - Window object is passed as parameter to avoid override it
 * @param {Object} document  - Document object is passed as parameter to avoid override it
 */
(function(window) {
  'use strict';

  const VERSION = '0.1.0',
    scope = window,
    jqLite = {};

  jqLite.thanks = function() {
    return `Bazinga! Thanks for using jqLite version ${VERSION} 🦄`;
  };

  /**
   * Uses fetch API for requests. If fetch is not available on browser invoke the alternative method with uses XMLHttpRequest
   * @param {String} url        - Url for the ajax request
   * @param {Function} callback - Callback function to execute when fetch response is received
   */
  jqLite.ajax = function(url, callback) {
    if (fetch) {
      fetch(url)
        .then((response) => response.json())
        .catch((error) => {
          throw new Error(`Sorry, there was an error processing your request: ${error}`);
        })
        .then( ( result ) => callback(result) );
    } else {
      makeRequest(url, callback);
    }
  };

  /**
   * Creates a new XMLHttpRequest if browser is not compatible with fetch method
   * @param {String} url        - Url for the XMLHttpRequest request
   * @param {Function} callback - Callback function to execute when XMLHttpRequest response is received
   */
  function makeRequest(url, callback) {
    const httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = doRequest;
    httpRequest.open('GET', url);
    httpRequest.send();

    if (!httpRequest) {
      throw new Error('Sorry there was an error creating an XMLHttpRequest instance');
    }

    /**
     * Checks if the response was received and OK. Then send the response of the url provided to the callback function
     */
    function doRequest() {
      try {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
          callback(JSON.parse(httpRequest.responseText));
        }
      } catch (err) {
        throw new Error('Sorry, there was an error processing your request: ' + err);
      }
    }
  }

  /**
   * Get Element by css selector (class or id). querySelector is widely supported from IE9.
   * @param {String} selector CSS Selector (id or class)
   * @param {Element} context - If no context is provided 'document' will used
   * @return {Element} DOM Element to be retrieved
   */
  jqLite.qs = function(selector, context = document) {
    return context.querySelector(selector);
  };

  /**
   * Get all the elements by css selector (class or id). querySelector is widely supported from IE9. As querySelectorAll
   * returns list of nodes instead of an array of elements we need to convert to Array (using es5 0> Array.prototype.slice.call(), using es6 Array.from)
   * @param {String} selector CSS Selector (id or class)
   * @param {Element} context - If no context is provided 'document' will used
   * @return {Array} of DOM Elements
   */
  jqLite.qsa = function(selector, context = document) {
    return Array.from(context.querySelectorAll(selector));
  };

  /**
   * Creates a new DOM element
   * @param {String} element - html tag which define the element to be created
   * @param {Object} config - [Optional] Receive an object with the configuragion of the element. This configuration contains
   * all the attributes the element should have to be created
   * @return {Element} DOM Element to be created
   */
  jqLite.createElement = function(element, config) {
    const domElement = document.createElement(element);
    if ( config ) {
      for (const [key, value] of Object.entries(config) ) {
        domElement.setAttribute(key, value);
      }
    }
    return domElement;
  };

  /**
   * Wrapper for addEventListener
   * @param {Element} target
   * @param {String} type - A string representing the Event Type
   * @param {Function} callback - Function to execute when receives the notification
   * @param {Object} options - Object that specifies characteristics about the event listener
   */
  jqLite.$on = function(target, type, callback, options) {
    const opt = options || false;
    target.addEventListener(type, callback, opt);
  };

  /**
   * Remove the class off all elements passed as NodeList
   * @param {NodeList} listOfElements - List of element with the given class we want to remove
   * @param {String} classToRemove
   */
  jqLite.removeClass = function(listOfElements, classToRemove) {
    for ( const dev of listOfElements) {
      dev.classList.remove(classToRemove);
    }
  };

  /**
   * Add a new class to an element
   * @param {NodeElement} element - Element to add class
   * @param {String} cls - Class we want to add to the element
   */
  jqLite.addClass = function(element, cls) {
    element.className += ' ' + cls;
  };

  if (!scope.jqLite) {
    scope.jqLite = jqLite;
  }
})(window);
