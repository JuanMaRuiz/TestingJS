(function() {
  "use strict";

  var BazingaApp = BazingaApp || {};

  BazingaApp.sayHello = function() {
    return "This is awesome!!";
  };

  if ( typeof(window.BazingaApp) === "undefined") {
    window.BazingaApp = BazingaApp;
  }

  return BazingaApp;
})();
