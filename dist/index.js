(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.index = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function () {
    return 'Hello World!';
  };

  var bye = exports.bye = function bye(_ref) {
    var _ref$firstName = _ref.firstName;
    var firstName = _ref$firstName === undefined ? '' : _ref$firstName;
    return 'Bye ' + firstName + '!';
  };
});