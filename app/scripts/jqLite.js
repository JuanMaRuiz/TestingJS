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
    console.log('Bazinga! Thanks for using jqLite version ' + VERSION);
  };

  /**
   * VanillaJS implementation for Ajax request
   * @param {String} url        - Url for the ajax request
   * @param {Function} callback - Callback function to execute when ajax response is received
   */
  jqLite.ajax = function(url, callback) {
    const httpRequest = new XMLHttpRequest();

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
    const context = scope || document;
    return context.querySelector(selector);
  };

  /**
   * Get all the elements by css selector (class or id). querySelector is widely supported from IE9. As querySelectorAll
   * returns list of nodes instead of an array of elements we need to convert to Array using Array.prototype.slice.call() method
   * @param {String} selector CSS Selector (id or class)
   * @param {Element} scope - If no context is provided 'document' will used
   * @return {Array} of DOM Elements
   */
  jqLite.qsa = function(selector, scope) {
    const context = scope || document;
    return Array.prototype.slice.call(context.querySelectorAll(selector));
  };

  /**
   * Creates a new DOM element
   * @param {String} element - html tag which define the element to be created
   * @param {Element} scope - If no context is provided 'document' will used
   * @return {Element} DOM Element to be created
   */
  jqLite.createElement = function(element, scope) {
    const context = scope || document;
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
    const opt = options || false;
    target.addEventListener(type, callback, opt);
  };

  /**
   * Remove the class off all elements passed as NodeList
   * @param {NodeList} listOfElements - List of element with the given class we want to remove
   * @param {String} classToRemove
   */
  jqLite.removeClass = function(listOfElements, classToRemove) {
    const list = listOfElements,
      max = listOfElements.length;
    let i = 0;
    for ( ; i < max; i += 1) {
      list[i].classList.remove(classToRemove);
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

  if ( !scope.jqLite ) {
    scope.jqLite = jqLite;
  }
})(window);
