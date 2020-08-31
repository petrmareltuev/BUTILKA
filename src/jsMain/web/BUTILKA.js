(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'BUTILKA'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'BUTILKA'.");
    }root.BUTILKA = factory(typeof BUTILKA === 'undefined' ? {} : BUTILKA, kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  function main() {
    var tmp$;
    var message = 'Kotlin multiplatform react application demo';
    (tmp$ = document.getElementById('js-response')) != null ? (tmp$.textContent = message) : null;
  }
  _.main = main;
  main();
  Kotlin.defineModule('BUTILKA', _);
  return _;
}));

//# sourceMappingURL=BUTILKA.js.map
