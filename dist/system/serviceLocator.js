System.register([], function (_export) {
    "use strict";

    var serviceLocator;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [],
        execute: function () {
            serviceLocator = (function () {
                function serviceLocator() {
                    _classCallCheck(this, serviceLocator);
                }

                serviceLocator.prototype.getServices = function getServices() {
                    return serviceLocator.services;
                };

                _createClass(serviceLocator, null, [{
                    key: "services",
                    value: {},
                    enumerable: true
                }]);

                return serviceLocator;
            })();

            _export("serviceLocator", serviceLocator);
        }
    };
});