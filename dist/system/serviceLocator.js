System.register([], function (_export) {
    "use strict";

    var ServiceLocator;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [],
        execute: function () {
            ServiceLocator = (function () {
                function ServiceLocator() {
                    _classCallCheck(this, ServiceLocator);
                }

                ServiceLocator.prototype.getServices = function getServices() {
                    return ServiceLocator.services;
                };

                _createClass(ServiceLocator, null, [{
                    key: "services",
                    value: {},
                    enumerable: true
                }]);

                return ServiceLocator;
            })();

            _export("ServiceLocator", ServiceLocator);
        }
    };
});