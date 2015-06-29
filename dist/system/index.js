System.register(['./dash', './serviceLocator'], function (_export) {
  'use strict';

  return {
    setters: [function (_dash) {
      _export('Dash', _dash.Dash);
    }, function (_serviceLocator) {
      _export('ServiceLocator', _serviceLocator.ServiceLocator);
    }],
    execute: function () {}
  };
});