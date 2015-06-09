System.register([], function (_export) {
  "use strict";

  var serviceLocator;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  return {
    setters: [],
    execute: function () {
      serviceLocator = function serviceLocator() {
        _classCallCheck(this, serviceLocator);
      };

      _export("serviceLocator", serviceLocator);
    }
  };
});