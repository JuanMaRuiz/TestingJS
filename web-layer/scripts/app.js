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
  BazingaApp.getDevsInfo = function() {
    jqLite.ajax('data.json', function(data) {
      console.log(data);
    });
  };

  var btn = jqLite.qs('#hello');
  jqLite.$on(btn, 'click', function() {
    alert('Bazinga');
  });

  if ( typeof(window.BazingaApp) === 'undefined') {
    window.BazingaApp = BazingaApp;
  }

  return BazingaApp;
})(jqLite);
