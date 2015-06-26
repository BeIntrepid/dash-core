System.register([], function (_export) {
    "use strict";

    var dataContext;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [],
        execute: function () {
            dataContext = function dataContext() {
                _classCallCheck(this, dataContext);

                this.components = [];
            };

            _export("dataContext", dataContext);
        }
    };
});