(function(jqLite) {
  'use strict';

  var BazingaApp = BazingaApp || {};

  BazingaApp.sayThanks = function() {
    jqLite.thanks();
  };

  // /**
  //  * Creates a new Developer object;
  //  * @constructor
  //  * @param {String} name
  //  * @param {String} bio
  //  * @param {String} web
  //  * @param {String} twitter
  //  * @param {String} github
  //  */
  // function Developer(name, bio, web, twitter, github) {
  //   this.name = name;
  //   this.bio = bio;
  //   this.web = web;
  //   this.twitter = twitter;
  //   this.github = github;
  // }

  /**
   * @description Retrieve all the info about developers
   */
  var getDevsInfo = function getDevsInfo(callback) {
    jqLite.ajax('data.json', function(data) {
      callback(data);
    });
  };


  // Example of using $on method. This should be used to change the info panel of developers
  var btn = jqLite.qs('#hello'),
    list = jqLite.qs('#demo');


  // TODO need to be refactored
  getDevsInfo(renderDevs);
  function renderDevs(data) {
    data.forEach(function(dev){
      var devTemp = new bazingaApp.Template();
      var li = document.createElement('li');
      list.appendChild(li);
      li.innerHTML = devTemp.addDev(dev);
    });
  }

  jqLite.$on(btn, 'click', function() {
    alert('Bazinga');
  });

  if ( typeof(window.BazingaApp) === 'undefined') {
    window.bazingaApp = BazingaApp;
  }

  return BazingaApp;
})(jqLite);
