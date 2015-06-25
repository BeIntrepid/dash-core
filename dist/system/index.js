System.register(['./dash', './serviceLocator'], function (_export) {
  'use strict';

  return {
    setters: [function (_dash) {
      _export('dash', _dash.dash);
    }, function (_serviceLocator) {
      _export('serviceLocator', _serviceLocator.serviceLocator);
    }],
    execute: function () {}
  };
});