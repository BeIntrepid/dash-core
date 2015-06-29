System.register(['./serviceLocator'], function (_export) {
    'use strict';

    var ServiceLocator, Dash;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_serviceLocator) {
            ServiceLocator = _serviceLocator.ServiceLocator;
        }],
        execute: function () {
            Dash = (function () {
                function Dash() {
                    _classCallCheck(this, Dash);
                }

                Dash.prototype.testCall = function testCall() {};

                return Dash;
            })();

            _export('Dash', Dash);
        }
    };
});