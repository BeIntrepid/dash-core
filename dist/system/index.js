System.register(['./dash', './serviceLocator'], function (_export) {
  'use strict';

  var dash, serviceLocator;
  return {
    setters: [function (_dash) {
      dash = _dash.dash;

      _export('dash', _dash.dash);
    }, function (_serviceLocator) {
      serviceLocator = _serviceLocator.serviceLocator;

      _export('serviceLocator', _serviceLocator.serviceLocator);
    }],
    execute: function () {}
  };
});