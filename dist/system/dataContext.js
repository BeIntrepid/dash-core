System.register([], function (_export) {
    "use strict";

    var DataContext;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [],
        execute: function () {
            DataContext = (function () {
                function DataContext() {
                    _classCallCheck(this, DataContext);

                    this._streams = {};
                }

                DataContext.prototype.registerStream = function registerStream(name, stream) {
                    if (this._streams[name] != null) {
                        throw "Stream already registered under this name";
                    }

                    this._streams[name] = stream;
                };

                return DataContext;
            })();

            _export("DataContext", DataContext);
        }
    };
});