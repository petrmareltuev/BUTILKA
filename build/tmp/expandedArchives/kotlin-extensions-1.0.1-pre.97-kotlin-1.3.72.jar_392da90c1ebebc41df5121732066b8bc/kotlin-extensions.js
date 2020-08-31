(function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var getCallableRef = Kotlin.getCallableRef;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  function requireAll(context) {
    var $receiver = context.keys();
    var action = getCallableRef('invoke', function ($receiver, arg) {
      return invoke_1($receiver, arg);
    }.bind(null, context));
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      action(element);
    }
  }
  var invoke = defineInlineFunction('kotlin-extensions.kotlinext.js.invoke_a1k57h$', function ($receiver, module_0) {
    return $receiver(module_0);
  });
  function invoke_0($receiver) {
    return $receiver();
  }
  function invoke_1($receiver, arg) {
    return $receiver(arg);
  }
  function invoke_2($receiver, arg1, arg2) {
    return $receiver(arg1, arg2);
  }
  function invoke_3($receiver, arg1, arg2, arg3) {
    return $receiver(arg1, arg2, arg3);
  }
  var jsObject = defineInlineFunction('kotlin-extensions.kotlinext.js.jsObject_30y1fr$', function () {
    return {};
  });
  var jsObject_0 = defineInlineFunction('kotlin-extensions.kotlinext.js.jsObject_dajwzo$', function (builder) {
    var $receiver = {};
    builder($receiver);
    return $receiver;
  });
  var js = defineInlineFunction('kotlin-extensions.kotlinext.js.js_5ij4lk$', function (builder) {
    var $receiver = {};
    builder($receiver);
    return $receiver;
  });
  function clone(obj) {
    return Object.assign({}, obj);
  }
  var assign = defineInlineFunction('kotlin-extensions.kotlinext.js.assign_bjvcay$', wrapFunction(function () {
    var clone = _.kotlinext.js.clone_issdgt$;
    return function (obj, builder) {
      var $receiver = clone(obj);
      builder($receiver);
      return $receiver;
    };
  }));
  function assign_0(dest, src) {
    return Object.assign(dest, src);
  }
  function toPlainObjectStripNull(obj) {
    var $receiver = {};
    var tmp$, tmp$_0;
    tmp$ = Object.keys(obj);
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var key = tmp$[tmp$_0];
      var value = obj[key];
      if (value != null)
        $receiver[key] = value;
    }
    return $receiver;
  }
  function asJsObject($receiver) {
    return $receiver;
  }
  function getOwnPropertyNames($receiver) {
    var me = $receiver;
    return Object.getOwnPropertyNames(me);
  }
  function objectAssign(dest, src) {
    var tmp$;
    return (tmp$ = Object).assign.apply(tmp$, [dest].concat(src));
  }
  function invoke_4($receiver, strings, values) {
    var tmp$;
    return (tmp$ = $receiver).call.apply(tmp$, [null, strings].concat(values));
  }
  function invoke_5($receiver, string, values) {
    return invoke_4($receiver, [string], values.slice());
  }
  function invoke_6($receiver, values) {
    return invoke_4($receiver, [], values.slice());
  }
  var package$kotlinext = _.kotlinext || (_.kotlinext = {});
  var package$js = package$kotlinext.js || (package$kotlinext.js = {});
  package$js.requireAll_spd3bs$ = requireAll;
  package$js.invoke_a1k57h$ = invoke;
  package$js.invoke_o1mxae$ = invoke_0;
  package$js.invoke_nbfla$ = invoke_1;
  package$js.invoke_xbkh9p$ = invoke_2;
  package$js.invoke_ahlu6z$ = invoke_3;
  package$js.jsObject_30y1fr$ = jsObject;
  $$importsForInline$$['kotlin-extensions'] = _;
  package$js.jsObject_dajwzo$ = jsObject_0;
  package$js.js_5ij4lk$ = js;
  package$js.clone_issdgt$ = clone;
  package$js.assign_bjvcay$ = assign;
  package$js.assign_m9hcte$ = assign_0;
  package$js.toPlainObjectStripNull_za3rmp$ = toPlainObjectStripNull;
  package$js.asJsObject_s8jyvk$ = asJsObject;
  package$js.getOwnPropertyNames_s8jyvk$ = getOwnPropertyNames;
  package$js.objectAssign_auj4x7$ = objectAssign;
  package$js.invoke_z5wujd$ = invoke_4;
  package$js.invoke_dgimx$ = invoke_5;
  package$js.invoke_9p99ed$ = invoke_6;
  Kotlin.defineModule('kotlin-extensions', _);
  return _;
}(module.exports, require('kotlin')));

//# sourceMappingURL=kotlin-extensions.js.map