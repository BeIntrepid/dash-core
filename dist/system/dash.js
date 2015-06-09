System.register(["./serviceLocator"], function (_export) {
    "use strict";

    var dash;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_serviceLocator) {}],
        execute: function () {
            dash = (function () {
                function dash() {
                    _classCallCheck(this, dash);
                }

                dash.prototype.testCall = function testCall() {
                    console.log("yaaaay");
                };

                return dash;
            })();

            _export("dash", dash);
        }
    };
});