(function (_, Kotlin, $module$kotlinx_serialization_kotlinx_serialization_runtime, $module$kotlin_css_js, $module$styled_components, $module$kotlin_styled, $module$kotlin_react, $module$react_dom, $module$kotlinx_coroutines_core, $module$muirwik_components, $module$kotlin_react_dom, $module$kotlinx_html_js, $module$konform) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var SerialClassDescImpl = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal.SerialClassDescImpl;
  var UnknownFieldException = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.UnknownFieldException;
  var internal = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal;
  var GeneratedSerializer = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal.GeneratedSerializer;
  var MissingFieldException = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.MissingFieldException;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var PairSerializer = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal.PairSerializer;
  var ArrayListSerializer = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal.ArrayListSerializer;
  var CSSBuilder = $module$kotlin_css_js.kotlinx.css.CSSBuilder;
  var css = $module$kotlin_css_js.kotlinx.css;
  var get_px = $module$kotlin_css_js.kotlinx.css.get_px_rcaex3$;
  var margin = $module$kotlin_css_js.kotlinx.css.margin_9vmwvs$;
  var padding = $module$kotlin_css_js.kotlinx.css.padding_9vmwvs$;
  var TextAlign = $module$kotlin_css_js.kotlinx.css.TextAlign;
  var set_textAlign = $module$kotlin_css_js.kotlinx.css.set_textAlign_q2ys32$;
  var Unit = Kotlin.kotlin.Unit;
  var Position = $module$kotlin_css_js.kotlinx.css.Position;
  var set_position = $module$kotlin_css_js.kotlinx.css.set_position_mvtmy5$;
  var set_fontFamily = $module$kotlin_css_js.kotlinx.css.set_fontFamily_krvuuu$;
  var ruleSet = $module$kotlin_css_js.kotlinx.css.ruleSet_sa4rfh$;
  var injectGlobal = $module$kotlin_styled.styled.injectGlobal_8rxfql$;
  var getKClass = Kotlin.getKClass;
  var render = $module$react_dom.render;
  var Job = $module$kotlinx_coroutines_core.kotlinx.coroutines.Job_5dx9e$;
  var CoroutineScope = $module$kotlinx_coroutines_core.kotlinx.coroutines.CoroutineScope;
  var RBuilder_init = $module$kotlin_react.react.RBuilder;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var MAppBarPosition = $module$muirwik_components.com.ccfraser.muirwik.components.MAppBarPosition;
  var ToolbarVariant = $module$muirwik_components.com.ccfraser.muirwik.components.ToolbarVariant;
  var mToolbarTitle = $module$muirwik_components.com.ccfraser.muirwik.components.mToolbarTitle_hw0qe1$;
  var MColor = $module$muirwik_components.com.ccfraser.muirwik.components.MColor;
  var mIconButton = $module$muirwik_components.com.ccfraser.muirwik.components.button.mIconButton_ny9671$;
  var mToolbar = $module$muirwik_components.com.ccfraser.muirwik.components.mToolbar_gnqltc$;
  var mAppBar = $module$muirwik_components.com.ccfraser.muirwik.components.mAppBar_h90ec6$;
  var Throwable = Error;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var Json = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.json.Json;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var json = Kotlin.kotlin.js.json_pyyo18$;
  var await_0 = $module$kotlinx_coroutines_core.kotlinx.coroutines.await_t11jrl$;
  var equals = Kotlin.equals;
  var withContext = $module$kotlinx_coroutines_core.kotlinx.coroutines.withContext_i5cbzn$;
  var kotlin_js_internal_BooleanCompanionObject = Kotlin.kotlin.js.internal.BooleanCompanionObject;
  var serializer = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.builtins.serializer_jtjczu$;
  var kotlin_js_internal_StringCompanionObject = Kotlin.kotlin.js.internal.StringCompanionObject;
  var serializer_0 = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.builtins.serializer_6eet4j$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var InputType = $module$kotlinx_html_js.kotlinx.html.InputType;
  var setState = $module$kotlin_react.react.setState_kpl3tw$;
  var set_onChangeFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onChangeFunction_pszlq2$;
  var set_onClickFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onClickFunction_pszlq2$;
  var Validation = $module$konform.io.konform.validation.Validation;
  var getPropertyCallableRef = Kotlin.getPropertyCallableRef;
  var minLength = $module$konform.io.konform.validation.jsonschema.minLength_uxc67q$;
  var pattern = $module$konform.io.konform.validation.jsonschema.pattern_shkzh2$;
  var Valid = $module$konform.io.konform.validation.Valid;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var RComponent_init = $module$kotlin_react.react.RComponent_init_lqgejo$;
  var RComponent = $module$kotlin_react.react.RComponent;
  var attributesMapOf = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
  var H1_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H1;
  var RDOMBuilder_init = $module$kotlin_react_dom.react.dom.RDOMBuilder;
  var enumEncode = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
  var attributesMapOf_0 = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
  var INPUT_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.INPUT;
  var SPAN_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SPAN;
  var BUTTON_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.BUTTON;
  var P_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.P;
  var DIV_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIV;
  var maxLength = $module$konform.io.konform.validation.jsonschema.maxLength_uxc67q$;
  var getCallableRef = Kotlin.getCallableRef;
  var H2_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H2;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var ensureNotNull = Kotlin.ensureNotNull;
  var IMG_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.IMG;
  StatusCodeException.prototype = Object.create(Throwable.prototype);
  StatusCodeException.prototype.constructor = StatusCodeException;
  AddDrugsComponent.prototype = Object.create(RComponent.prototype);
  AddDrugsComponent.prototype.constructor = AddDrugsComponent;
  AddLohComponent.prototype = Object.create(RComponent.prototype);
  AddLohComponent.prototype.constructor = AddLohComponent;
  ApplicationComponent.prototype = Object.create(RComponent.prototype);
  ApplicationComponent.prototype.constructor = ApplicationComponent;
  IsLohExists.prototype = Object.create(Enum.prototype);
  IsLohExists.prototype.constructor = IsLohExists;
  ChangeLohInfoComponent.prototype = Object.create(RComponent.prototype);
  ChangeLohInfoComponent.prototype.constructor = ChangeLohInfoComponent;
  HomeComponent.prototype = Object.create(RComponent.prototype);
  HomeComponent.prototype.constructor = HomeComponent;
  LoginComponent.prototype = Object.create(RComponent.prototype);
  LoginComponent.prototype.constructor = LoginComponent;
  NotFoundComponent.prototype = Object.create(RComponent.prototype);
  NotFoundComponent.prototype.constructor = NotFoundComponent;
  IsNotification.prototype = Object.create(Enum.prototype);
  IsNotification.prototype.constructor = IsNotification;
  MyNotificationComponent.prototype = Object.create(RComponent.prototype);
  MyNotificationComponent.prototype.constructor = MyNotificationComponent;
  RegisterComponent.prototype = Object.create(RComponent.prototype);
  RegisterComponent.prototype.constructor = RegisterComponent;
  IsRequest.prototype = Object.create(Enum.prototype);
  IsRequest.prototype.constructor = IsRequest;
  RequestComponent.prototype = Object.create(RComponent.prototype);
  RequestComponent.prototype.constructor = RequestComponent;
  IsStats.prototype = Object.create(Enum.prototype);
  IsStats.prototype.constructor = IsStats;
  StatsComponent.prototype = Object.create(RComponent.prototype);
  StatsComponent.prototype.constructor = StatsComponent;
  UserComponent.prototype = Object.create(RComponent.prototype);
  UserComponent.prototype.constructor = UserComponent;
  Views.prototype = Object.create(Enum.prototype);
  Views.prototype.constructor = Views;
  InputCaseInfoComponent.prototype = Object.create(RComponent.prototype);
  InputCaseInfoComponent.prototype.constructor = InputCaseInfoComponent;
  function Drug(drugType, drugMass) {
    Drug$Companion_getInstance();
    this.drugType = drugType;
    this.drugMass = drugMass;
  }
  function Drug$Companion() {
    Drug$Companion_instance = this;
  }
  Drug$Companion.prototype.serializer = function () {
    return Drug$$serializer_getInstance();
  };
  Drug$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Drug$Companion_instance = null;
  function Drug$Companion_getInstance() {
    if (Drug$Companion_instance === null) {
      new Drug$Companion();
    }return Drug$Companion_instance;
  }
  function Drug$$serializer() {
    this.descriptor_34lwx6$_0 = new SerialClassDescImpl('model.Drug', this, 2);
    this.descriptor.addElement_ivxn3r$('drugType', false);
    this.descriptor.addElement_ivxn3r$('drugMass', false);
    Drug$$serializer_instance = this;
  }
  Object.defineProperty(Drug$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_34lwx6$_0;
    }
  });
  Drug$$serializer.prototype.serialize_awe97i$ = function (encoder, value) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeStringElement_bgm7zs$(this.descriptor, 0, value.drugType);
    output.encodeStringElement_bgm7zs$(this.descriptor, 1, value.drugMass);
    output.endStructure_qatsm0$(this.descriptor);
  };
  Drug$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeStringElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeStringElement_3zr2iy$(this.descriptor, 1);
          bitMask0 |= 2;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return Drug_init(bitMask0, local0, local1, null);
  };
  Drug$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, internal.StringSerializer];
  };
  Drug$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var Drug$$serializer_instance = null;
  function Drug$$serializer_getInstance() {
    if (Drug$$serializer_instance === null) {
      new Drug$$serializer();
    }return Drug$$serializer_instance;
  }
  function Drug_init(seen1, drugType, drugMass, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(Drug.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('drugType');
    else
      $this.drugType = drugType;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('drugMass');
    else
      $this.drugMass = drugMass;
    return $this;
  }
  Drug.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Drug',
    interfaces: []
  };
  Drug.prototype.component1 = function () {
    return this.drugType;
  };
  Drug.prototype.component2 = function () {
    return this.drugMass;
  };
  Drug.prototype.copy_puj7f4$ = function (drugType, drugMass) {
    return new Drug(drugType === void 0 ? this.drugType : drugType, drugMass === void 0 ? this.drugMass : drugMass);
  };
  Drug.prototype.toString = function () {
    return 'Drug(drugType=' + Kotlin.toString(this.drugType) + (', drugMass=' + Kotlin.toString(this.drugMass)) + ')';
  };
  Drug.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.drugType) | 0;
    result = result * 31 + Kotlin.hashCode(this.drugMass) | 0;
    return result;
  };
  Drug.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.drugType, other.drugType) && Kotlin.equals(this.drugMass, other.drugMass)))));
  };
  function LoginData(username, password) {
    LoginData$Companion_getInstance();
    this.username = username;
    this.password = password;
  }
  function LoginData$Companion() {
    LoginData$Companion_instance = this;
  }
  LoginData$Companion.prototype.serializer = function () {
    return LoginData$$serializer_getInstance();
  };
  LoginData$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var LoginData$Companion_instance = null;
  function LoginData$Companion_getInstance() {
    if (LoginData$Companion_instance === null) {
      new LoginData$Companion();
    }return LoginData$Companion_instance;
  }
  function LoginData$$serializer() {
    this.descriptor_4tpai5$_0 = new SerialClassDescImpl('model.LoginData', this, 2);
    this.descriptor.addElement_ivxn3r$('username', false);
    this.descriptor.addElement_ivxn3r$('password', false);
    LoginData$$serializer_instance = this;
  }
  Object.defineProperty(LoginData$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_4tpai5$_0;
    }
  });
  LoginData$$serializer.prototype.serialize_awe97i$ = function (encoder, value) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeStringElement_bgm7zs$(this.descriptor, 0, value.username);
    output.encodeStringElement_bgm7zs$(this.descriptor, 1, value.password);
    output.endStructure_qatsm0$(this.descriptor);
  };
  LoginData$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeStringElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeStringElement_3zr2iy$(this.descriptor, 1);
          bitMask0 |= 2;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return LoginData_init(bitMask0, local0, local1, null);
  };
  LoginData$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, internal.StringSerializer];
  };
  LoginData$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var LoginData$$serializer_instance = null;
  function LoginData$$serializer_getInstance() {
    if (LoginData$$serializer_instance === null) {
      new LoginData$$serializer();
    }return LoginData$$serializer_instance;
  }
  function LoginData_init(seen1, username, password, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(LoginData.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('username');
    else
      $this.username = username;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('password');
    else
      $this.password = password;
    return $this;
  }
  LoginData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LoginData',
    interfaces: []
  };
  LoginData.prototype.component1 = function () {
    return this.username;
  };
  LoginData.prototype.component2 = function () {
    return this.password;
  };
  LoginData.prototype.copy_puj7f4$ = function (username, password) {
    return new LoginData(username === void 0 ? this.username : username, password === void 0 ? this.password : password);
  };
  LoginData.prototype.toString = function () {
    return 'LoginData(username=' + Kotlin.toString(this.username) + (', password=' + Kotlin.toString(this.password)) + ')';
  };
  LoginData.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.username) | 0;
    result = result * 31 + Kotlin.hashCode(this.password) | 0;
    return result;
  };
  LoginData.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.username, other.username) && Kotlin.equals(this.password, other.password)))));
  };
  function Loh(fullname, passportSerialNumber, registrationAddress, issued, subdivisionCode) {
    Loh$Companion_getInstance();
    this.fullname = fullname;
    this.passportSerialNumber = passportSerialNumber;
    this.registrationAddress = registrationAddress;
    this.issued = issued;
    this.subdivisionCode = subdivisionCode;
  }
  function Loh$Companion() {
    Loh$Companion_instance = this;
  }
  Loh$Companion.prototype.serializer = function () {
    return Loh$$serializer_getInstance();
  };
  Loh$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Loh$Companion_instance = null;
  function Loh$Companion_getInstance() {
    if (Loh$Companion_instance === null) {
      new Loh$Companion();
    }return Loh$Companion_instance;
  }
  function Loh$$serializer() {
    this.descriptor_4fcin9$_0 = new SerialClassDescImpl('model.Loh', this, 5);
    this.descriptor.addElement_ivxn3r$('fullname', false);
    this.descriptor.addElement_ivxn3r$('passportSerialNumber', false);
    this.descriptor.addElement_ivxn3r$('registrationAddress', false);
    this.descriptor.addElement_ivxn3r$('issued', false);
    this.descriptor.addElement_ivxn3r$('subdivisionCode', false);
    Loh$$serializer_instance = this;
  }
  Object.defineProperty(Loh$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_4fcin9$_0;
    }
  });
  Loh$$serializer.prototype.serialize_awe97i$ = function (encoder, value) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeStringElement_bgm7zs$(this.descriptor, 0, value.fullname);
    output.encodeStringElement_bgm7zs$(this.descriptor, 1, value.passportSerialNumber);
    output.encodeStringElement_bgm7zs$(this.descriptor, 2, value.registrationAddress);
    output.encodeStringElement_bgm7zs$(this.descriptor, 3, value.issued);
    output.encodeStringElement_bgm7zs$(this.descriptor, 4, value.subdivisionCode);
    output.endStructure_qatsm0$(this.descriptor);
  };
  Loh$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3
    , local4;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeStringElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeStringElement_3zr2iy$(this.descriptor, 1);
          bitMask0 |= 2;
          break;
        case 2:
          local2 = input.decodeStringElement_3zr2iy$(this.descriptor, 2);
          bitMask0 |= 4;
          break;
        case 3:
          local3 = input.decodeStringElement_3zr2iy$(this.descriptor, 3);
          bitMask0 |= 8;
          break;
        case 4:
          local4 = input.decodeStringElement_3zr2iy$(this.descriptor, 4);
          bitMask0 |= 16;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return Loh_init(bitMask0, local0, local1, local2, local3, local4, null);
  };
  Loh$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer];
  };
  Loh$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var Loh$$serializer_instance = null;
  function Loh$$serializer_getInstance() {
    if (Loh$$serializer_instance === null) {
      new Loh$$serializer();
    }return Loh$$serializer_instance;
  }
  function Loh_init(seen1, fullname, passportSerialNumber, registrationAddress, issued, subdivisionCode, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(Loh.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('fullname');
    else
      $this.fullname = fullname;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('passportSerialNumber');
    else
      $this.passportSerialNumber = passportSerialNumber;
    if ((seen1 & 4) === 0)
      throw new MissingFieldException('registrationAddress');
    else
      $this.registrationAddress = registrationAddress;
    if ((seen1 & 8) === 0)
      throw new MissingFieldException('issued');
    else
      $this.issued = issued;
    if ((seen1 & 16) === 0)
      throw new MissingFieldException('subdivisionCode');
    else
      $this.subdivisionCode = subdivisionCode;
    return $this;
  }
  Loh.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Loh',
    interfaces: []
  };
  Loh.prototype.component1 = function () {
    return this.fullname;
  };
  Loh.prototype.component2 = function () {
    return this.passportSerialNumber;
  };
  Loh.prototype.component3 = function () {
    return this.registrationAddress;
  };
  Loh.prototype.component4 = function () {
    return this.issued;
  };
  Loh.prototype.component5 = function () {
    return this.subdivisionCode;
  };
  Loh.prototype.copy_x0a6t6$ = function (fullname, passportSerialNumber, registrationAddress, issued, subdivisionCode) {
    return new Loh(fullname === void 0 ? this.fullname : fullname, passportSerialNumber === void 0 ? this.passportSerialNumber : passportSerialNumber, registrationAddress === void 0 ? this.registrationAddress : registrationAddress, issued === void 0 ? this.issued : issued, subdivisionCode === void 0 ? this.subdivisionCode : subdivisionCode);
  };
  Loh.prototype.toString = function () {
    return 'Loh(fullname=' + Kotlin.toString(this.fullname) + (', passportSerialNumber=' + Kotlin.toString(this.passportSerialNumber)) + (', registrationAddress=' + Kotlin.toString(this.registrationAddress)) + (', issued=' + Kotlin.toString(this.issued)) + (', subdivisionCode=' + Kotlin.toString(this.subdivisionCode)) + ')';
  };
  Loh.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.fullname) | 0;
    result = result * 31 + Kotlin.hashCode(this.passportSerialNumber) | 0;
    result = result * 31 + Kotlin.hashCode(this.registrationAddress) | 0;
    result = result * 31 + Kotlin.hashCode(this.issued) | 0;
    result = result * 31 + Kotlin.hashCode(this.subdivisionCode) | 0;
    return result;
  };
  Loh.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.fullname, other.fullname) && Kotlin.equals(this.passportSerialNumber, other.passportSerialNumber) && Kotlin.equals(this.registrationAddress, other.registrationAddress) && Kotlin.equals(this.issued, other.issued) && Kotlin.equals(this.subdivisionCode, other.subdivisionCode)))));
  };
  function LohUpdate(loh, oldPassport) {
    LohUpdate$Companion_getInstance();
    this.loh = loh;
    this.oldPassport = oldPassport;
  }
  function LohUpdate$Companion() {
    LohUpdate$Companion_instance = this;
  }
  LohUpdate$Companion.prototype.serializer = function () {
    return LohUpdate$$serializer_getInstance();
  };
  LohUpdate$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var LohUpdate$Companion_instance = null;
  function LohUpdate$Companion_getInstance() {
    if (LohUpdate$Companion_instance === null) {
      new LohUpdate$Companion();
    }return LohUpdate$Companion_instance;
  }
  function LohUpdate$$serializer() {
    this.descriptor_w22ez2$_0 = new SerialClassDescImpl('model.LohUpdate', this, 2);
    this.descriptor.addElement_ivxn3r$('loh', false);
    this.descriptor.addElement_ivxn3r$('oldPassport', false);
    LohUpdate$$serializer_instance = this;
  }
  Object.defineProperty(LohUpdate$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_w22ez2$_0;
    }
  });
  LohUpdate$$serializer.prototype.serialize_awe97i$ = function (encoder, value) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeSerializableElement_blecud$(this.descriptor, 0, Loh$$serializer_getInstance(), value.loh);
    output.encodeStringElement_bgm7zs$(this.descriptor, 1, value.oldPassport);
    output.endStructure_qatsm0$(this.descriptor);
  };
  LohUpdate$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case 0:
          local0 = (bitMask0 & 1) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 0, Loh$$serializer_getInstance()) : input.updateSerializableElement_ehubvl$(this.descriptor, 0, Loh$$serializer_getInstance(), local0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeStringElement_3zr2iy$(this.descriptor, 1);
          bitMask0 |= 2;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return LohUpdate_init(bitMask0, local0, local1, null);
  };
  LohUpdate$$serializer.prototype.childSerializers = function () {
    return [Loh$$serializer_getInstance(), internal.StringSerializer];
  };
  LohUpdate$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var LohUpdate$$serializer_instance = null;
  function LohUpdate$$serializer_getInstance() {
    if (LohUpdate$$serializer_instance === null) {
      new LohUpdate$$serializer();
    }return LohUpdate$$serializer_instance;
  }
  function LohUpdate_init(seen1, loh, oldPassport, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(LohUpdate.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('loh');
    else
      $this.loh = loh;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('oldPassport');
    else
      $this.oldPassport = oldPassport;
    return $this;
  }
  LohUpdate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LohUpdate',
    interfaces: []
  };
  LohUpdate.prototype.component1 = function () {
    return this.loh;
  };
  LohUpdate.prototype.component2 = function () {
    return this.oldPassport;
  };
  LohUpdate.prototype.copy_xq5er6$ = function (loh, oldPassport) {
    return new LohUpdate(loh === void 0 ? this.loh : loh, oldPassport === void 0 ? this.oldPassport : oldPassport);
  };
  LohUpdate.prototype.toString = function () {
    return 'LohUpdate(loh=' + Kotlin.toString(this.loh) + (', oldPassport=' + Kotlin.toString(this.oldPassport)) + ')';
  };
  LohUpdate.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.loh) | 0;
    result = result * 31 + Kotlin.hashCode(this.oldPassport) | 0;
    return result;
  };
  LohUpdate.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.loh, other.loh) && Kotlin.equals(this.oldPassport, other.oldPassport)))));
  };
  function Notification(case_number, loh, drugName, drugMass) {
    Notification$Companion_getInstance();
    this.case_number = case_number;
    this.loh = loh;
    this.drugName = drugName;
    this.drugMass = drugMass;
  }
  function Notification$Companion() {
    Notification$Companion_instance = this;
  }
  Notification$Companion.prototype.serializer = function () {
    return Notification$$serializer_getInstance();
  };
  Notification$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Notification$Companion_instance = null;
  function Notification$Companion_getInstance() {
    if (Notification$Companion_instance === null) {
      new Notification$Companion();
    }return Notification$Companion_instance;
  }
  function Notification$$serializer() {
    this.descriptor_99grp1$_0 = new SerialClassDescImpl('model.Notification', this, 4);
    this.descriptor.addElement_ivxn3r$('case_number', false);
    this.descriptor.addElement_ivxn3r$('loh', false);
    this.descriptor.addElement_ivxn3r$('drugName', false);
    this.descriptor.addElement_ivxn3r$('drugMass', false);
    Notification$$serializer_instance = this;
  }
  Object.defineProperty(Notification$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_99grp1$_0;
    }
  });
  Notification$$serializer.prototype.serialize_awe97i$ = function (encoder, value) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeStringElement_bgm7zs$(this.descriptor, 0, value.case_number);
    output.encodeSerializableElement_blecud$(this.descriptor, 1, Loh$$serializer_getInstance(), value.loh);
    output.encodeStringElement_bgm7zs$(this.descriptor, 2, value.drugName);
    output.encodeIntElement_4wpqag$(this.descriptor, 3, value.drugMass);
    output.endStructure_qatsm0$(this.descriptor);
  };
  Notification$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeStringElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = (bitMask0 & 2) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 1, Loh$$serializer_getInstance()) : input.updateSerializableElement_ehubvl$(this.descriptor, 1, Loh$$serializer_getInstance(), local1);
          bitMask0 |= 2;
          break;
        case 2:
          local2 = input.decodeStringElement_3zr2iy$(this.descriptor, 2);
          bitMask0 |= 4;
          break;
        case 3:
          local3 = input.decodeIntElement_3zr2iy$(this.descriptor, 3);
          bitMask0 |= 8;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return Notification_init(bitMask0, local0, local1, local2, local3, null);
  };
  Notification$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, Loh$$serializer_getInstance(), internal.StringSerializer, internal.IntSerializer];
  };
  Notification$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var Notification$$serializer_instance = null;
  function Notification$$serializer_getInstance() {
    if (Notification$$serializer_instance === null) {
      new Notification$$serializer();
    }return Notification$$serializer_instance;
  }
  function Notification_init(seen1, case_number, loh, drugName, drugMass, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(Notification.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('case_number');
    else
      $this.case_number = case_number;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('loh');
    else
      $this.loh = loh;
    if ((seen1 & 4) === 0)
      throw new MissingFieldException('drugName');
    else
      $this.drugName = drugName;
    if ((seen1 & 8) === 0)
      throw new MissingFieldException('drugMass');
    else
      $this.drugMass = drugMass;
    return $this;
  }
  Notification.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Notification',
    interfaces: []
  };
  Notification.prototype.component1 = function () {
    return this.case_number;
  };
  Notification.prototype.component2 = function () {
    return this.loh;
  };
  Notification.prototype.component3 = function () {
    return this.drugName;
  };
  Notification.prototype.component4 = function () {
    return this.drugMass;
  };
  Notification.prototype.copy_iwmq6i$ = function (case_number, loh, drugName, drugMass) {
    return new Notification(case_number === void 0 ? this.case_number : case_number, loh === void 0 ? this.loh : loh, drugName === void 0 ? this.drugName : drugName, drugMass === void 0 ? this.drugMass : drugMass);
  };
  Notification.prototype.toString = function () {
    return 'Notification(case_number=' + Kotlin.toString(this.case_number) + (', loh=' + Kotlin.toString(this.loh)) + (', drugName=' + Kotlin.toString(this.drugName)) + (', drugMass=' + Kotlin.toString(this.drugMass)) + ')';
  };
  Notification.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.case_number) | 0;
    result = result * 31 + Kotlin.hashCode(this.loh) | 0;
    result = result * 31 + Kotlin.hashCode(this.drugName) | 0;
    result = result * 31 + Kotlin.hashCode(this.drugMass) | 0;
    return result;
  };
  Notification.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.case_number, other.case_number) && Kotlin.equals(this.loh, other.loh) && Kotlin.equals(this.drugName, other.drugName) && Kotlin.equals(this.drugMass, other.drugMass)))));
  };
  function Report(username, password, case_number, participants, victim, witness, comment) {
    Report$Companion_getInstance();
    this.username = username;
    this.password = password;
    this.case_number = case_number;
    this.participants = participants;
    this.victim = victim;
    this.witness = witness;
    this.comment = comment;
  }
  function Report$Companion() {
    Report$Companion_instance = this;
  }
  Report$Companion.prototype.serializer = function () {
    return Report$$serializer_getInstance();
  };
  Report$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Report$Companion_instance = null;
  function Report$Companion_getInstance() {
    if (Report$Companion_instance === null) {
      new Report$Companion();
    }return Report$Companion_instance;
  }
  function Report$$serializer() {
    this.descriptor_3i7i9q$_0 = new SerialClassDescImpl('model.Report', this, 7);
    this.descriptor.addElement_ivxn3r$('username', false);
    this.descriptor.addElement_ivxn3r$('password', false);
    this.descriptor.addElement_ivxn3r$('case_number', false);
    this.descriptor.addElement_ivxn3r$('participants', false);
    this.descriptor.addElement_ivxn3r$('victim', false);
    this.descriptor.addElement_ivxn3r$('witness', false);
    this.descriptor.addElement_ivxn3r$('comment', false);
    Report$$serializer_instance = this;
  }
  Object.defineProperty(Report$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_3i7i9q$_0;
    }
  });
  Report$$serializer.prototype.serialize_awe97i$ = function (encoder, value) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeStringElement_bgm7zs$(this.descriptor, 0, value.username);
    output.encodeStringElement_bgm7zs$(this.descriptor, 1, value.password);
    output.encodeStringElement_bgm7zs$(this.descriptor, 2, value.case_number);
    output.encodeStringElement_bgm7zs$(this.descriptor, 3, value.participants);
    output.encodeStringElement_bgm7zs$(this.descriptor, 4, value.victim);
    output.encodeStringElement_bgm7zs$(this.descriptor, 5, value.witness);
    output.encodeStringElement_bgm7zs$(this.descriptor, 6, value.comment);
    output.endStructure_qatsm0$(this.descriptor);
  };
  Report$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3
    , local4
    , local5
    , local6;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeStringElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeStringElement_3zr2iy$(this.descriptor, 1);
          bitMask0 |= 2;
          break;
        case 2:
          local2 = input.decodeStringElement_3zr2iy$(this.descriptor, 2);
          bitMask0 |= 4;
          break;
        case 3:
          local3 = input.decodeStringElement_3zr2iy$(this.descriptor, 3);
          bitMask0 |= 8;
          break;
        case 4:
          local4 = input.decodeStringElement_3zr2iy$(this.descriptor, 4);
          bitMask0 |= 16;
          break;
        case 5:
          local5 = input.decodeStringElement_3zr2iy$(this.descriptor, 5);
          bitMask0 |= 32;
          break;
        case 6:
          local6 = input.decodeStringElement_3zr2iy$(this.descriptor, 6);
          bitMask0 |= 64;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return Report_init(bitMask0, local0, local1, local2, local3, local4, local5, local6, null);
  };
  Report$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer];
  };
  Report$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var Report$$serializer_instance = null;
  function Report$$serializer_getInstance() {
    if (Report$$serializer_instance === null) {
      new Report$$serializer();
    }return Report$$serializer_instance;
  }
  function Report_init(seen1, username, password, case_number, participants, victim, witness, comment, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(Report.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('username');
    else
      $this.username = username;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('password');
    else
      $this.password = password;
    if ((seen1 & 4) === 0)
      throw new MissingFieldException('case_number');
    else
      $this.case_number = case_number;
    if ((seen1 & 8) === 0)
      throw new MissingFieldException('participants');
    else
      $this.participants = participants;
    if ((seen1 & 16) === 0)
      throw new MissingFieldException('victim');
    else
      $this.victim = victim;
    if ((seen1 & 32) === 0)
      throw new MissingFieldException('witness');
    else
      $this.witness = witness;
    if ((seen1 & 64) === 0)
      throw new MissingFieldException('comment');
    else
      $this.comment = comment;
    return $this;
  }
  Report.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Report',
    interfaces: []
  };
  Report.prototype.component1 = function () {
    return this.username;
  };
  Report.prototype.component2 = function () {
    return this.password;
  };
  Report.prototype.component3 = function () {
    return this.case_number;
  };
  Report.prototype.component4 = function () {
    return this.participants;
  };
  Report.prototype.component5 = function () {
    return this.victim;
  };
  Report.prototype.component6 = function () {
    return this.witness;
  };
  Report.prototype.component7 = function () {
    return this.comment;
  };
  Report.prototype.copy_blz5pm$ = function (username, password, case_number, participants, victim, witness, comment) {
    return new Report(username === void 0 ? this.username : username, password === void 0 ? this.password : password, case_number === void 0 ? this.case_number : case_number, participants === void 0 ? this.participants : participants, victim === void 0 ? this.victim : victim, witness === void 0 ? this.witness : witness, comment === void 0 ? this.comment : comment);
  };
  Report.prototype.toString = function () {
    return 'Report(username=' + Kotlin.toString(this.username) + (', password=' + Kotlin.toString(this.password)) + (', case_number=' + Kotlin.toString(this.case_number)) + (', participants=' + Kotlin.toString(this.participants)) + (', victim=' + Kotlin.toString(this.victim)) + (', witness=' + Kotlin.toString(this.witness)) + (', comment=' + Kotlin.toString(this.comment)) + ')';
  };
  Report.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.username) | 0;
    result = result * 31 + Kotlin.hashCode(this.password) | 0;
    result = result * 31 + Kotlin.hashCode(this.case_number) | 0;
    result = result * 31 + Kotlin.hashCode(this.participants) | 0;
    result = result * 31 + Kotlin.hashCode(this.victim) | 0;
    result = result * 31 + Kotlin.hashCode(this.witness) | 0;
    result = result * 31 + Kotlin.hashCode(this.comment) | 0;
    return result;
  };
  Report.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.username, other.username) && Kotlin.equals(this.password, other.password) && Kotlin.equals(this.case_number, other.case_number) && Kotlin.equals(this.participants, other.participants) && Kotlin.equals(this.victim, other.victim) && Kotlin.equals(this.witness, other.witness) && Kotlin.equals(this.comment, other.comment)))));
  };
  function Stat(openedCases, closedCasses, availableLohs, drugs) {
    Stat$Companion_getInstance();
    this.openedCases = openedCases;
    this.closedCasses = closedCasses;
    this.availableLohs = availableLohs;
    this.drugs = drugs;
  }
  function Stat$Companion() {
    Stat$Companion_instance = this;
  }
  Stat$Companion.prototype.serializer = function () {
    return Stat$$serializer_getInstance();
  };
  Stat$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Stat$Companion_instance = null;
  function Stat$Companion_getInstance() {
    if (Stat$Companion_instance === null) {
      new Stat$Companion();
    }return Stat$Companion_instance;
  }
  function Stat$$serializer() {
    this.descriptor_c3spsu$_0 = new SerialClassDescImpl('model.Stat', this, 4);
    this.descriptor.addElement_ivxn3r$('openedCases', false);
    this.descriptor.addElement_ivxn3r$('closedCasses', false);
    this.descriptor.addElement_ivxn3r$('availableLohs', false);
    this.descriptor.addElement_ivxn3r$('drugs', false);
    Stat$$serializer_instance = this;
  }
  Object.defineProperty(Stat$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_c3spsu$_0;
    }
  });
  Stat$$serializer.prototype.serialize_awe97i$ = function (encoder, value) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeIntElement_4wpqag$(this.descriptor, 0, value.openedCases);
    output.encodeIntElement_4wpqag$(this.descriptor, 1, value.closedCasses);
    output.encodeIntElement_4wpqag$(this.descriptor, 2, value.availableLohs);
    output.encodeSerializableElement_blecud$(this.descriptor, 3, new ArrayListSerializer(new PairSerializer(internal.StringSerializer, internal.IntSerializer)), value.drugs);
    output.endStructure_qatsm0$(this.descriptor);
  };
  Stat$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeIntElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeIntElement_3zr2iy$(this.descriptor, 1);
          bitMask0 |= 2;
          break;
        case 2:
          local2 = input.decodeIntElement_3zr2iy$(this.descriptor, 2);
          bitMask0 |= 4;
          break;
        case 3:
          local3 = (bitMask0 & 8) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 3, new ArrayListSerializer(new PairSerializer(internal.StringSerializer, internal.IntSerializer))) : input.updateSerializableElement_ehubvl$(this.descriptor, 3, new ArrayListSerializer(new PairSerializer(internal.StringSerializer, internal.IntSerializer)), local3);
          bitMask0 |= 8;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return Stat_init(bitMask0, local0, local1, local2, local3, null);
  };
  Stat$$serializer.prototype.childSerializers = function () {
    return [internal.IntSerializer, internal.IntSerializer, internal.IntSerializer, new ArrayListSerializer(new PairSerializer(internal.StringSerializer, internal.IntSerializer))];
  };
  Stat$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var Stat$$serializer_instance = null;
  function Stat$$serializer_getInstance() {
    if (Stat$$serializer_instance === null) {
      new Stat$$serializer();
    }return Stat$$serializer_instance;
  }
  function Stat_init(seen1, openedCases, closedCasses, availableLohs, drugs, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(Stat.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('openedCases');
    else
      $this.openedCases = openedCases;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('closedCasses');
    else
      $this.closedCasses = closedCasses;
    if ((seen1 & 4) === 0)
      throw new MissingFieldException('availableLohs');
    else
      $this.availableLohs = availableLohs;
    if ((seen1 & 8) === 0)
      throw new MissingFieldException('drugs');
    else
      $this.drugs = drugs;
    return $this;
  }
  Stat.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Stat',
    interfaces: []
  };
  Stat.prototype.component1 = function () {
    return this.openedCases;
  };
  Stat.prototype.component2 = function () {
    return this.closedCasses;
  };
  Stat.prototype.component3 = function () {
    return this.availableLohs;
  };
  Stat.prototype.component4 = function () {
    return this.drugs;
  };
  Stat.prototype.copy_lnta9a$ = function (openedCases, closedCasses, availableLohs, drugs) {
    return new Stat(openedCases === void 0 ? this.openedCases : openedCases, closedCasses === void 0 ? this.closedCasses : closedCasses, availableLohs === void 0 ? this.availableLohs : availableLohs, drugs === void 0 ? this.drugs : drugs);
  };
  Stat.prototype.toString = function () {
    return 'Stat(openedCases=' + Kotlin.toString(this.openedCases) + (', closedCasses=' + Kotlin.toString(this.closedCasses)) + (', availableLohs=' + Kotlin.toString(this.availableLohs)) + (', drugs=' + Kotlin.toString(this.drugs)) + ')';
  };
  Stat.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.openedCases) | 0;
    result = result * 31 + Kotlin.hashCode(this.closedCasses) | 0;
    result = result * 31 + Kotlin.hashCode(this.availableLohs) | 0;
    result = result * 31 + Kotlin.hashCode(this.drugs) | 0;
    return result;
  };
  Stat.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.openedCases, other.openedCases) && Kotlin.equals(this.closedCasses, other.closedCasses) && Kotlin.equals(this.availableLohs, other.availableLohs) && Kotlin.equals(this.drugs, other.drugs)))));
  };
  function User(username, password, full_name, organization, certificate_id, personal_id, issued, duty, phone, email, isMajor) {
    User$Companion_getInstance();
    this.username = username;
    this.password = password;
    this.full_name = full_name;
    this.organization = organization;
    this.certificate_id = certificate_id;
    this.personal_id = personal_id;
    this.issued = issued;
    this.duty = duty;
    this.phone = phone;
    this.email = email;
    this.isMajor = isMajor;
  }
  function User$Companion() {
    User$Companion_instance = this;
  }
  User$Companion.prototype.serializer = function () {
    return User$$serializer_getInstance();
  };
  User$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var User$Companion_instance = null;
  function User$Companion_getInstance() {
    if (User$Companion_instance === null) {
      new User$Companion();
    }return User$Companion_instance;
  }
  function User$$serializer() {
    this.descriptor_chus4r$_0 = new SerialClassDescImpl('model.User', this, 11);
    this.descriptor.addElement_ivxn3r$('username', false);
    this.descriptor.addElement_ivxn3r$('password', false);
    this.descriptor.addElement_ivxn3r$('full_name', false);
    this.descriptor.addElement_ivxn3r$('organization', false);
    this.descriptor.addElement_ivxn3r$('certificate_id', false);
    this.descriptor.addElement_ivxn3r$('personal_id', false);
    this.descriptor.addElement_ivxn3r$('issued', false);
    this.descriptor.addElement_ivxn3r$('duty', false);
    this.descriptor.addElement_ivxn3r$('phone', false);
    this.descriptor.addElement_ivxn3r$('email', false);
    this.descriptor.addElement_ivxn3r$('isMajor', false);
    User$$serializer_instance = this;
  }
  Object.defineProperty(User$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_chus4r$_0;
    }
  });
  User$$serializer.prototype.serialize_awe97i$ = function (encoder, value) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeStringElement_bgm7zs$(this.descriptor, 0, value.username);
    output.encodeStringElement_bgm7zs$(this.descriptor, 1, value.password);
    output.encodeStringElement_bgm7zs$(this.descriptor, 2, value.full_name);
    output.encodeStringElement_bgm7zs$(this.descriptor, 3, value.organization);
    output.encodeStringElement_bgm7zs$(this.descriptor, 4, value.certificate_id);
    output.encodeStringElement_bgm7zs$(this.descriptor, 5, value.personal_id);
    output.encodeStringElement_bgm7zs$(this.descriptor, 6, value.issued);
    output.encodeStringElement_bgm7zs$(this.descriptor, 7, value.duty);
    output.encodeStringElement_bgm7zs$(this.descriptor, 8, value.phone);
    output.encodeStringElement_bgm7zs$(this.descriptor, 9, value.email);
    output.encodeBooleanElement_w1b0nl$(this.descriptor, 10, value.isMajor);
    output.endStructure_qatsm0$(this.descriptor);
  };
  User$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3
    , local4
    , local5
    , local6
    , local7
    , local8
    , local9
    , local10;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeStringElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeStringElement_3zr2iy$(this.descriptor, 1);
          bitMask0 |= 2;
          break;
        case 2:
          local2 = input.decodeStringElement_3zr2iy$(this.descriptor, 2);
          bitMask0 |= 4;
          break;
        case 3:
          local3 = input.decodeStringElement_3zr2iy$(this.descriptor, 3);
          bitMask0 |= 8;
          break;
        case 4:
          local4 = input.decodeStringElement_3zr2iy$(this.descriptor, 4);
          bitMask0 |= 16;
          break;
        case 5:
          local5 = input.decodeStringElement_3zr2iy$(this.descriptor, 5);
          bitMask0 |= 32;
          break;
        case 6:
          local6 = input.decodeStringElement_3zr2iy$(this.descriptor, 6);
          bitMask0 |= 64;
          break;
        case 7:
          local7 = input.decodeStringElement_3zr2iy$(this.descriptor, 7);
          bitMask0 |= 128;
          break;
        case 8:
          local8 = input.decodeStringElement_3zr2iy$(this.descriptor, 8);
          bitMask0 |= 256;
          break;
        case 9:
          local9 = input.decodeStringElement_3zr2iy$(this.descriptor, 9);
          bitMask0 |= 512;
          break;
        case 10:
          local10 = input.decodeBooleanElement_3zr2iy$(this.descriptor, 10);
          bitMask0 |= 1024;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return User_init(bitMask0, local0, local1, local2, local3, local4, local5, local6, local7, local8, local9, local10, null);
  };
  User$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.BooleanSerializer];
  };
  User$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var User$$serializer_instance = null;
  function User$$serializer_getInstance() {
    if (User$$serializer_instance === null) {
      new User$$serializer();
    }return User$$serializer_instance;
  }
  function User_init(seen1, username, password, full_name, organization, certificate_id, personal_id, issued, duty, phone, email, isMajor, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(User.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('username');
    else
      $this.username = username;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('password');
    else
      $this.password = password;
    if ((seen1 & 4) === 0)
      throw new MissingFieldException('full_name');
    else
      $this.full_name = full_name;
    if ((seen1 & 8) === 0)
      throw new MissingFieldException('organization');
    else
      $this.organization = organization;
    if ((seen1 & 16) === 0)
      throw new MissingFieldException('certificate_id');
    else
      $this.certificate_id = certificate_id;
    if ((seen1 & 32) === 0)
      throw new MissingFieldException('personal_id');
    else
      $this.personal_id = personal_id;
    if ((seen1 & 64) === 0)
      throw new MissingFieldException('issued');
    else
      $this.issued = issued;
    if ((seen1 & 128) === 0)
      throw new MissingFieldException('duty');
    else
      $this.duty = duty;
    if ((seen1 & 256) === 0)
      throw new MissingFieldException('phone');
    else
      $this.phone = phone;
    if ((seen1 & 512) === 0)
      throw new MissingFieldException('email');
    else
      $this.email = email;
    if ((seen1 & 1024) === 0)
      throw new MissingFieldException('isMajor');
    else
      $this.isMajor = isMajor;
    return $this;
  }
  User.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'User',
    interfaces: []
  };
  User.prototype.component1 = function () {
    return this.username;
  };
  User.prototype.component2 = function () {
    return this.password;
  };
  User.prototype.component3 = function () {
    return this.full_name;
  };
  User.prototype.component4 = function () {
    return this.organization;
  };
  User.prototype.component5 = function () {
    return this.certificate_id;
  };
  User.prototype.component6 = function () {
    return this.personal_id;
  };
  User.prototype.component7 = function () {
    return this.issued;
  };
  User.prototype.component8 = function () {
    return this.duty;
  };
  User.prototype.component9 = function () {
    return this.phone;
  };
  User.prototype.component10 = function () {
    return this.email;
  };
  User.prototype.component11 = function () {
    return this.isMajor;
  };
  User.prototype.copy_sis3a1$ = function (username, password, full_name, organization, certificate_id, personal_id, issued, duty, phone, email, isMajor) {
    return new User(username === void 0 ? this.username : username, password === void 0 ? this.password : password, full_name === void 0 ? this.full_name : full_name, organization === void 0 ? this.organization : organization, certificate_id === void 0 ? this.certificate_id : certificate_id, personal_id === void 0 ? this.personal_id : personal_id, issued === void 0 ? this.issued : issued, duty === void 0 ? this.duty : duty, phone === void 0 ? this.phone : phone, email === void 0 ? this.email : email, isMajor === void 0 ? this.isMajor : isMajor);
  };
  User.prototype.toString = function () {
    return 'User(username=' + Kotlin.toString(this.username) + (', password=' + Kotlin.toString(this.password)) + (', full_name=' + Kotlin.toString(this.full_name)) + (', organization=' + Kotlin.toString(this.organization)) + (', certificate_id=' + Kotlin.toString(this.certificate_id)) + (', personal_id=' + Kotlin.toString(this.personal_id)) + (', issued=' + Kotlin.toString(this.issued)) + (', duty=' + Kotlin.toString(this.duty)) + (', phone=' + Kotlin.toString(this.phone)) + (', email=' + Kotlin.toString(this.email)) + (', isMajor=' + Kotlin.toString(this.isMajor)) + ')';
  };
  User.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.username) | 0;
    result = result * 31 + Kotlin.hashCode(this.password) | 0;
    result = result * 31 + Kotlin.hashCode(this.full_name) | 0;
    result = result * 31 + Kotlin.hashCode(this.organization) | 0;
    result = result * 31 + Kotlin.hashCode(this.certificate_id) | 0;
    result = result * 31 + Kotlin.hashCode(this.personal_id) | 0;
    result = result * 31 + Kotlin.hashCode(this.issued) | 0;
    result = result * 31 + Kotlin.hashCode(this.duty) | 0;
    result = result * 31 + Kotlin.hashCode(this.phone) | 0;
    result = result * 31 + Kotlin.hashCode(this.email) | 0;
    result = result * 31 + Kotlin.hashCode(this.isMajor) | 0;
    return result;
  };
  User.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.username, other.username) && Kotlin.equals(this.password, other.password) && Kotlin.equals(this.full_name, other.full_name) && Kotlin.equals(this.organization, other.organization) && Kotlin.equals(this.certificate_id, other.certificate_id) && Kotlin.equals(this.personal_id, other.personal_id) && Kotlin.equals(this.issued, other.issued) && Kotlin.equals(this.duty, other.duty) && Kotlin.equals(this.phone, other.phone) && Kotlin.equals(this.email, other.email) && Kotlin.equals(this.isMajor, other.isMajor)))));
  };
  function GlobalStyles() {
    GlobalStyles_instance = this;
  }
  function GlobalStyles$inject$lambda$lambda($receiver) {
    margin($receiver, get_px(0));
    padding($receiver, get_px(0));
    $receiver.put_puj7f4$('background', 'rgb(95,67,236)');
    $receiver.put_puj7f4$('background', 'linear-gradient(180deg, rgba(95,67,236,1) 0%, rgba(243,252,255,1) 150%)');
    $receiver.put_puj7f4$('height', '100%');
    set_textAlign($receiver, TextAlign.center);
    return Unit;
  }
  function GlobalStyles$inject$lambda$lambda_0($receiver) {
    set_position($receiver, Position.relative);
    $receiver.put_puj7f4$('min-height', '100%');
    return Unit;
  }
  function GlobalStyles$inject$lambda$lambda$lambda($receiver) {
    set_fontFamily($receiver, 'Aclonica');
    $receiver.put_puj7f4$('src', 'url("Aclonica-Regular.ttf")');
    return Unit;
  }
  function GlobalStyles$inject$lambda$lambda_1($receiver) {
    $receiver.fontFace_xk38i9$('', GlobalStyles$inject$lambda$lambda$lambda);
    return Unit;
  }
  GlobalStyles.prototype.inject = function () {
    var $receiver = new CSSBuilder(void 0, false);
    $receiver.invoke_30ubnp$(css.body, GlobalStyles$inject$lambda$lambda);
    $receiver.invoke_30ubnp$(css.html, GlobalStyles$inject$lambda$lambda_0);
    ruleSet(GlobalStyles$inject$lambda$lambda_1);
    var styles = $receiver;
    injectGlobal($module$styled_components, styles.toString());
  };
  GlobalStyles.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'GlobalStyles',
    interfaces: []
  };
  var GlobalStyles_instance = null;
  function GlobalStyles_getInstance() {
    if (GlobalStyles_instance === null) {
      new GlobalStyles();
    }return GlobalStyles_instance;
  }
  function Application() {
    this.coroutineContext_sor2l7$_0 = Job();
  }
  Object.defineProperty(Application.prototype, 'coroutineContext', {
    get: function () {
      return this.coroutineContext_sor2l7$_0;
    }
  });
  function Application$start$lambda$lambda$lambda(this$Application) {
    return function ($receiver) {
      $receiver.attrs.coroutineScope = this$Application;
      return Unit;
    };
  }
  Application.prototype.start = function () {
    var tmp$;
    if ((tmp$ = document.getElementById('react-app')) != null) {
      var $receiver = new RBuilder_init();
      $receiver.child_bzgiuu$(getKClass(ApplicationComponent), Application$start$lambda$lambda$lambda(this));
      render(first($receiver.childList), tmp$);
    }};
  Application.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Application',
    interfaces: [CoroutineScope]
  };
  function main() {
    GlobalStyles_getInstance().inject();
    (new Application()).start();
  }
  function renderAppBar$lambda$lambda($receiver) {
    mToolbarTitle($receiver, 'BUTILKA');
    mIconButton($receiver, 'account_circle', MColor.inherit);
    return Unit;
  }
  function renderAppBar$lambda($receiver) {
    mToolbar($receiver, true, ToolbarVariant.dense, void 0, renderAppBar$lambda$lambda);
    return Unit;
  }
  function renderAppBar($receiver) {
    mAppBar($receiver, void 0, MAppBarPosition.static, void 0, renderAppBar$lambda);
  }
  function get_inputValue($receiver) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    return (tmp$_4 = (tmp$_3 = (tmp$_0 = Kotlin.isType(tmp$ = $receiver.target, HTMLInputElement) ? tmp$ : null) != null ? tmp$_0.value : null) != null ? tmp$_3 : (tmp$_2 = Kotlin.isType(tmp$_1 = $receiver.target, HTMLTextAreaElement) ? tmp$_1 : null) != null ? tmp$_2.value : null) != null ? tmp$_4 : '';
  }
  function StatusCodeException(status) {
    Throwable.call(this);
    this.message_z2i6va$_0 = void 0;
    this.cause_whtil4$_0 = null;
    Kotlin.captureStack(Throwable, this);
    this.name = 'StatusCodeException';
  }
  Object.defineProperty(StatusCodeException.prototype, 'message', {
    get: function () {
      return this.message_z2i6va$_0;
    }
  });
  Object.defineProperty(StatusCodeException.prototype, 'cause', {
    get: function () {
      return this.cause_whtil4$_0;
    }
  });
  StatusCodeException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StatusCodeException',
    interfaces: [Throwable]
  };
  function Transport(coroutineContext) {
    this.coroutineContext_0 = coroutineContext;
  }
  function Coroutine$get_adhoip$($this, url_0, deserializationStrategy_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$url = url_0;
    this.local$deserializationStrategy = deserializationStrategy_0;
  }
  Coroutine$get_adhoip$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$get_adhoip$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$get_adhoip$.prototype.constructor = Coroutine$get_adhoip$;
  Coroutine$get_adhoip$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = Json.Default;
            this.state_0 = 2;
            this.result_0 = this.$this.fetch_0(this.local$url, 'GET', '', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$tmp$.parse_awif5v$(this.local$deserializationStrategy, this.result_0);
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  Transport.prototype.get_adhoip$ = function (url_0, deserializationStrategy_0, continuation_0, suspended) {
    var instance = new Coroutine$get_adhoip$(this, url_0, deserializationStrategy_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$post_dsoh59$($this, url_0, deserializationStrategy_0, body_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$url = url_0;
    this.local$deserializationStrategy = deserializationStrategy_0;
    this.local$body = body_0;
  }
  Coroutine$post_dsoh59$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$post_dsoh59$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$post_dsoh59$.prototype.constructor = Coroutine$post_dsoh59$;
  Coroutine$post_dsoh59$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = Json.Default;
            this.state_0 = 2;
            this.result_0 = this.$this.fetch_0(this.local$url, 'POST', this.local$body, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$tmp$.parse_awif5v$(this.local$deserializationStrategy, this.result_0);
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  Transport.prototype.post_dsoh59$ = function (url_0, deserializationStrategy_0, body_0, continuation_0, suspended) {
    var instance = new Coroutine$post_dsoh59$(this, url_0, deserializationStrategy_0, body_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$Transport$fetch$lambda(closure$url_0, closure$method_0, closure$body_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$url = closure$url_0;
    this.local$closure$method = closure$method_0;
    this.local$closure$body = closure$body_0;
  }
  Coroutine$Transport$fetch$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Transport$fetch$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Transport$fetch$lambda.prototype.constructor = Coroutine$Transport$fetch$lambda;
  Coroutine$Transport$fetch$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            tmp$ = json([to('Accept', 'application/json'), to('Content-Type', 'application/json; charset=utf-8')]);
            var method = this.local$closure$method;
            var body = this.local$closure$body;
            var credentials = 'same-origin';
            var referrer;
            var referrerPolicy;
            var mode;
            var cache;
            var redirect;
            var integrity;
            var keepalive;
            var window_0;
            referrer = undefined;
            referrerPolicy = undefined;
            mode = undefined;
            cache = undefined;
            redirect = undefined;
            integrity = undefined;
            keepalive = undefined;
            window_0 = undefined;
            var o = {};
            o['method'] = method;
            o['headers'] = tmp$;
            o['body'] = body;
            o['referrer'] = referrer;
            o['referrerPolicy'] = referrerPolicy;
            o['mode'] = mode;
            o['credentials'] = credentials;
            o['cache'] = cache;
            o['redirect'] = redirect;
            o['integrity'] = integrity;
            o['keepalive'] = keepalive;
            o['window'] = window_0;
            this.state_0 = 2;
            this.result_0 = await_0(window.fetch(this.local$closure$url, o), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var response = this.result_0;
            if (!equals(response.status, 200)) {
              throw new StatusCodeException(response.status);
            }
            this.state_0 = 3;
            this.result_0 = await_0(response.text(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function Transport$fetch$lambda(closure$url_0, closure$method_0, closure$body_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$Transport$fetch$lambda(closure$url_0, closure$method_0, closure$body_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  Transport.prototype.fetch_0 = function (ur, method, body, continuation) {
    var url = '/' + ur;
    return withContext(this.coroutineContext_0, Transport$fetch$lambda(url, method, body), continuation);
  };
  Transport.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Transport',
    interfaces: []
  };
  function AddDrugsService(coroutineContext) {
    this.transport_0 = new Transport(coroutineContext);
  }
  AddDrugsService.prototype.addDrugs_y1ibfp$ = function (drug, continuation) {
    return this.transport_0.post_dsoh59$('addDrugs', serializer(kotlin_js_internal_BooleanCompanionObject), JSON.stringify(drug), continuation);
  };
  AddDrugsService.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AddDrugsService',
    interfaces: []
  };
  function AddLohService(coroutineContext) {
    this.transport_0 = new Transport(coroutineContext);
  }
  AddLohService.prototype.addLoh_x9rx28$ = function (loh, continuation) {
    return this.transport_0.post_dsoh59$('addLoh', serializer_0(kotlin_js_internal_StringCompanionObject), JSON.stringify(loh), continuation);
  };
  AddLohService.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AddLohService',
    interfaces: []
  };
  function ChangeLohInfoService(coroutineContext) {
    this.transport_0 = new Transport(coroutineContext);
  }
  ChangeLohInfoService.prototype.changeLohInfo_hlf1s9$ = function (lohUpdate, continuation) {
    return this.transport_0.post_dsoh59$('changeLohInfo', serializer(kotlin_js_internal_BooleanCompanionObject), JSON.stringify(lohUpdate), continuation);
  };
  ChangeLohInfoService.prototype.checkLoh_61zpoe$ = function (lohPassport, continuation) {
    return this.transport_0.post_dsoh59$('checkLoh', serializer(kotlin_js_internal_BooleanCompanionObject), JSON.stringify(lohPassport), continuation);
  };
  ChangeLohInfoService.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChangeLohInfoService',
    interfaces: []
  };
  function LoginService(coroutineContext) {
    this.transport_0 = new Transport(coroutineContext);
  }
  LoginService.prototype.login_cc96oe$ = function (loginData, continuation) {
    return this.transport_0.post_dsoh59$('login', User$Companion_getInstance().serializer(), JSON.stringify(loginData), continuation);
  };
  LoginService.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LoginService',
    interfaces: []
  };
  function NotificationService(coroutineContext) {
    this.transport_0 = new Transport(coroutineContext);
  }
  NotificationService.prototype.checkNotifications_cc96oe$ = function (loginData, continuation) {
    return this.transport_0.post_dsoh59$('notifications', Notification$Companion_getInstance().serializer(), JSON.stringify(loginData), continuation);
  };
  NotificationService.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NotificationService',
    interfaces: []
  };
  function RankRequestService(coroutineContext) {
    this.transport = new Transport(coroutineContext);
  }
  RankRequestService.prototype.sendRankRequest_cc96oe$ = function (loginData, continuation) {
    return this.transport.post_dsoh59$('request', serializer_0(kotlin_js_internal_StringCompanionObject), JSON.stringify(loginData), continuation);
  };
  RankRequestService.prototype.checkRankRequest_cc96oe$ = function (loginData, continuation) {
    return this.transport.post_dsoh59$('request/check', serializer_0(kotlin_js_internal_StringCompanionObject), JSON.stringify(loginData), continuation);
  };
  RankRequestService.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RankRequestService',
    interfaces: []
  };
  function RegisterService(coroutineContext) {
    this.transport_0 = new Transport(coroutineContext);
  }
  RegisterService.prototype.register_y1t6kw$ = function (user, continuation) {
    return this.transport_0.post_dsoh59$('register', serializer(kotlin_js_internal_BooleanCompanionObject), JSON.stringify(user), continuation);
  };
  RegisterService.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RegisterService',
    interfaces: []
  };
  function ReportService(coroutineContext) {
    this.transport_0 = new Transport(coroutineContext);
  }
  ReportService.prototype.sendReport_ojjl1j$ = function (report, continuation) {
    return this.transport_0.post_dsoh59$('report', serializer_0(kotlin_js_internal_StringCompanionObject), JSON.stringify(report), continuation);
  };
  ReportService.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ReportService',
    interfaces: []
  };
  function StatsService(coroutineContext) {
    this.transport_0 = new Transport(coroutineContext);
  }
  StatsService.prototype.getStats_cc96oe$ = function (loginData, continuation) {
    return this.transport_0.post_dsoh59$('stats', Stat$Companion_getInstance().serializer(), JSON.stringify(loginData), continuation);
  };
  StatsService.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StatsService',
    interfaces: []
  };
  function h1$lambda(closure$classes) {
    return function (it) {
      return new H1_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function input$lambda(closure$type, closure$formEncType, closure$formMethod, closure$name, closure$classes) {
    return function (it) {
      return new INPUT_init(attributesMapOf_0(['type', closure$type != null ? enumEncode(closure$type) : null, 'formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'name', closure$name, 'class', closure$classes]), it);
    };
  }
  function span$lambda(closure$classes) {
    return function (it) {
      return new SPAN_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function button$lambda(closure$formEncType, closure$formMethod, closure$type, closure$classes) {
    return function (it) {
      return new BUTTON_init(attributesMapOf_0(['formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'type', closure$type != null ? enumEncode(closure$type) : null, 'class', closure$classes]), it);
    };
  }
  function p$lambda(closure$classes) {
    return function (it) {
      return new P_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function div$lambda(closure$classes) {
    return function (it) {
      return new DIV_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function addDrugsComponent$lambda(closure$goUser, closure$scope) {
    return function ($receiver) {
      $receiver.attrs.goUser = closure$goUser;
      $receiver.attrs.coroutineScope = closure$scope;
      return Unit;
    };
  }
  function addDrugsComponent($receiver, goUser, scope) {
    return $receiver.child_bzgiuu$(getKClass(AddDrugsComponent), addDrugsComponent$lambda(goUser, scope));
  }
  function AddDrugsPageState() {
  }
  AddDrugsPageState.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AddDrugsPageState',
    interfaces: []
  };
  function AddDrugsComponent() {
    RComponent_init(this);
  }
  AddDrugsComponent.prototype.init_bc6fkx$ = function ($receiver) {
    $receiver.drugType = '';
    $receiver.drugMass = '';
    $receiver.errorMessage = '';
  };
  Object.defineProperty(AddDrugsComponent.prototype, 'coroutineContext_0', {
    get: function () {
      return this.props.coroutineScope.coroutineContext;
    }
  });
  function AddDrugsComponent$render$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    $receiver.errorMessage = '';
    return Unit;
  }
  function AddDrugsComponent$render$lambda$lambda$lambda$lambda$lambda(this$AddDrugsComponent) {
    return function (it) {
      this$AddDrugsComponent.state.drugType = get_inputValue(it);
      setState(this$AddDrugsComponent, AddDrugsComponent$render$lambda$lambda$lambda$lambda$lambda$lambda);
      return Unit;
    };
  }
  function AddDrugsComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.errorMessage = '';
    return Unit;
  }
  function AddDrugsComponent$render$lambda$lambda$lambda$lambda$lambda_0(this$AddDrugsComponent) {
    return function (it) {
      this$AddDrugsComponent.state.drugMass = get_inputValue(it);
      setState(this$AddDrugsComponent, AddDrugsComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_0);
      return Unit;
    };
  }
  function AddDrugsComponent$render$lambda$lambda$lambda$lambda$lambda_1(this$AddDrugsComponent) {
    return function (it) {
      this$AddDrugsComponent.addLoh_0();
      return Unit;
    };
  }
  function AddDrugsComponent$render$lambda$lambda$lambda$lambda$lambda_2(this$AddDrugsComponent) {
    return function (it) {
      this$AddDrugsComponent.props.goUser();
      return Unit;
    };
  }
  AddDrugsComponent.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = new RDOMBuilder_init(div$lambda(null));
    var $receiver_0_0 = new RDOMBuilder_init(h1$lambda('pageTitle'));
    $receiver_0_0.unaryPlus_pdl1vz$('\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u0430\u0440\u043A\u043E\u0442\u0443');
    $receiver_0.child_2usv9w$($receiver_0_0.create());
    $receiver.child_2usv9w$($receiver_0.create());
    var $receiver_0_1 = new RDOMBuilder_init(div$lambda('reg-input-box'));
    var $receiver_0_2 = new RDOMBuilder_init(p$lambda(null));
    var $receiver_0_3 = new RDOMBuilder_init(input$lambda(InputType.text, null, null, 'fio', null));
    var $receiver_1 = $receiver_0_3.attrs;
    $receiver_1.placeholder = '\u0422\u0438\u043F \u0432\u0435\u0449\u0435\u0441\u0442\u0432\u0430';
    set_onChangeFunction($receiver_1, AddDrugsComponent$render$lambda$lambda$lambda$lambda$lambda(this));
    $receiver_0_2.child_2usv9w$($receiver_0_3.create());
    $receiver_0_1.child_2usv9w$($receiver_0_2.create());
    var $receiver_0_4 = new RDOMBuilder_init(p$lambda(null));
    var $receiver_0_5 = new RDOMBuilder_init(input$lambda(InputType.text, null, null, '\u0421\u0435\u0440\u0438\u044F \u0438 \u043D\u043E\u043C\u0435\u0440 \u043F\u0430\u0441\u043F\u043E\u0440\u0442\u0430', null));
    var $receiver_2 = $receiver_0_5.attrs;
    $receiver_2.placeholder = '\u0412\u0435\u0441';
    set_onChangeFunction($receiver_2, AddDrugsComponent$render$lambda$lambda$lambda$lambda$lambda_0(this));
    $receiver_0_4.child_2usv9w$($receiver_0_5.create());
    $receiver_0_1.child_2usv9w$($receiver_0_4.create());
    var $receiver_0_6 = new RDOMBuilder_init(p$lambda(null));
    var $receiver_0_7 = new RDOMBuilder_init(button$lambda(null, null, null, 'App-buttons'));
    var $receiver_0_8 = new RDOMBuilder_init(span$lambda(null));
    $receiver_0_8.unaryPlus_pdl1vz$('\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432\u0435\u0449\u0435\u0441\u0442\u0432\u043E');
    $receiver_0_7.child_2usv9w$($receiver_0_8.create());
    set_onClickFunction($receiver_0_7.attrs, AddDrugsComponent$render$lambda$lambda$lambda$lambda$lambda_1(this));
    $receiver_0_6.child_2usv9w$($receiver_0_7.create());
    $receiver_0_1.child_2usv9w$($receiver_0_6.create());
    var $receiver_0_9 = new RDOMBuilder_init(p$lambda(null));
    var $receiver_0_10 = new RDOMBuilder_init(button$lambda(null, null, null, 'App-buttons'));
    var $receiver_0_11 = new RDOMBuilder_init(span$lambda(null));
    $receiver_0_11.unaryPlus_pdl1vz$('\u041D\u0430\u0437\u0430\u0434');
    $receiver_0_10.child_2usv9w$($receiver_0_11.create());
    set_onClickFunction($receiver_0_10.attrs, AddDrugsComponent$render$lambda$lambda$lambda$lambda$lambda_2(this));
    $receiver_0_9.child_2usv9w$($receiver_0_10.create());
    $receiver_0_1.child_2usv9w$($receiver_0_9.create());
    $receiver.child_2usv9w$($receiver_0_1.create());
    var $receiver_0_12 = new RDOMBuilder_init(div$lambda(null));
    var $receiver_0_13 = new RDOMBuilder_init(h1$lambda(null));
    $receiver_0_13.unaryPlus_pdl1vz$(this.state.errorMessage);
    $receiver_0_12.child_2usv9w$($receiver_0_13.create());
    $receiver.child_2usv9w$($receiver_0_12.create());
  };
  function AddDrugsComponent$addLoh$lambda$lambda($receiver) {
    $receiver.hint_kaetmg$(minLength($receiver, 1), '\u041F\u043E\u043B\u0435 "\u0422\u0438\u043F \u0432\u0435\u0449\u0435\u0441\u0442\u0432\u0430" \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u043C \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F');
    return Unit;
  }
  function AddDrugsComponent$addLoh$lambda$lambda_0($receiver) {
    $receiver.hint_kaetmg$(pattern($receiver, '\\d+'), '\u0412\u0435\u0441 \u0434\u043E\u043B\u0436\u0435\u043D \u0441\u043E\u0441\u0442\u043E\u044F\u0442\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u0438\u0437 \u0447\u0438\u0441\u0435\u043B \u0447\u0438\u0441\u0435\u043B');
    return Unit;
  }
  function AddDrugsComponent$addLoh$lambda($receiver) {
    $receiver.invoke_wiumk0$(getPropertyCallableRef('drugType', 1, function ($receiver) {
      return $receiver.drugType;
    }), AddDrugsComponent$addLoh$lambda$lambda);
    $receiver.invoke_wiumk0$(getPropertyCallableRef('drugMass', 1, function ($receiver) {
      return $receiver.drugMass;
    }), AddDrugsComponent$addLoh$lambda$lambda_0);
    return Unit;
  }
  function AddDrugsComponent$addLoh$lambda$lambda_1($receiver) {
    $receiver.errorMessage = '\u0412\u0435\u0449\u0435\u0441\u0442\u0432\u043E \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043E';
    return Unit;
  }
  function AddDrugsComponent$addLoh$lambda$lambda_2($receiver) {
    $receiver.errorMessage = '\u041E\u0448\u0438\u0431\u043A\u0430 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u044F';
    return Unit;
  }
  function Coroutine$AddDrugsComponent$addLoh$lambda(closure$addDrugsService_0, closure$drug_0, this$AddDrugsComponent_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$addDrugsService = closure$addDrugsService_0;
    this.local$closure$drug = closure$drug_0;
    this.local$this$AddDrugsComponent = this$AddDrugsComponent_0;
  }
  Coroutine$AddDrugsComponent$addLoh$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$AddDrugsComponent$addLoh$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$AddDrugsComponent$addLoh$lambda.prototype.constructor = Coroutine$AddDrugsComponent$addLoh$lambda;
  Coroutine$AddDrugsComponent$addLoh$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$addDrugsService.addDrugs_y1ibfp$(this.local$closure$drug, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var response = this.result_0;
            if (response) {
              return setState(this.local$this$AddDrugsComponent, AddDrugsComponent$addLoh$lambda$lambda_1), Unit;
            } else {
              return setState(this.local$this$AddDrugsComponent, AddDrugsComponent$addLoh$lambda$lambda_2), Unit;
            }

          case 3:
            return;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function AddDrugsComponent$addLoh$lambda_0(closure$addDrugsService_0, closure$drug_0, this$AddDrugsComponent_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$AddDrugsComponent$addLoh$lambda(closure$addDrugsService_0, closure$drug_0, this$AddDrugsComponent_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function AddDrugsComponent$addLoh$lambda_1(closure$validationResult) {
    return function ($receiver) {
      $receiver.errorMessage = first(closure$validationResult.errors).message;
      return Unit;
    };
  }
  AddDrugsComponent.prototype.addLoh_0 = function () {
    var tmp$;
    var drug = new Drug(this.state.drugType, this.state.drugMass);
    var validateDrug = Validation.Companion.invoke_wvx9gu$(AddDrugsComponent$addLoh$lambda);
    var validationResult = validateDrug.invoke_11rb$(drug);
    if ((tmp$ = new Valid(drug)) != null ? tmp$.equals(validationResult) : null) {
      var addDrugsService = new AddDrugsService(this.coroutineContext_0);
      launch(this.props.coroutineScope, void 0, void 0, AddDrugsComponent$addLoh$lambda_0(addDrugsService, drug, this));
    } else {
      setState(this, AddDrugsComponent$addLoh$lambda_1(validationResult));
    }
  };
  AddDrugsComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AddDrugsComponent',
    interfaces: [RComponent]
  };
  function h1$lambda_0(closure$classes) {
    return function (it) {
      return new H1_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function input$lambda_0(closure$type, closure$formEncType, closure$formMethod, closure$name, closure$classes) {
    return function (it) {
      return new INPUT_init(attributesMapOf_0(['type', closure$type != null ? enumEncode(closure$type) : null, 'formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'name', closure$name, 'class', closure$classes]), it);
    };
  }
  function span$lambda_0(closure$classes) {
    return function (it) {
      return new SPAN_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function button$lambda_0(closure$formEncType, closure$formMethod, closure$type, closure$classes) {
    return function (it) {
      return new BUTTON_init(attributesMapOf_0(['formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'type', closure$type != null ? enumEncode(closure$type) : null, 'class', closure$classes]), it);
    };
  }
  function p$lambda_0(closure$classes) {
    return function (it) {
      return new P_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function div$lambda_0(closure$classes) {
    return function (it) {
      return new DIV_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function addLohComponent$lambda(closure$goUser, closure$scope) {
    return function ($receiver) {
      $receiver.attrs.goUser = closure$goUser;
      $receiver.attrs.coroutineScope = closure$scope;
      return Unit;
    };
  }
  function addLohComponent($receiver, goUser, scope) {
    return $receiver.child_bzgiuu$(getKClass(AddLohComponent), addLohComponent$lambda(goUser, scope));
  }
  function AddLohPageState() {
  }
  AddLohPageState.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AddLohPageState',
    interfaces: []
  };
  function AddLohComponent() {
    RComponent_init(this);
  }
  AddLohComponent.prototype.init_bc6fkx$ = function ($receiver) {
    $receiver.fullName = '';
    $receiver.passportSerialNumber = '';
    $receiver.registrationAddress = '';
    $receiver.issued = '';
    $receiver.subdivisionCode = '';
    $receiver.errorMessage = '';
  };
  Object.defineProperty(AddLohComponent.prototype, 'coroutineContext_0', {
    get: function () {
      return this.props.coroutineScope.coroutineContext;
    }
  });
  function AddLohComponent$render$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    $receiver.errorMessage = '';
    return Unit;
  }
  function AddLohComponent$render$lambda$lambda$lambda$lambda$lambda(this$AddLohComponent) {
    return function (it) {
      this$AddLohComponent.state.fullName = get_inputValue(it);
      setState(this$AddLohComponent, AddLohComponent$render$lambda$lambda$lambda$lambda$lambda$lambda);
      return Unit;
    };
  }
  function AddLohComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.errorMessage = '';
    return Unit;
  }
  function AddLohComponent$render$lambda$lambda$lambda$lambda$lambda_0(this$AddLohComponent) {
    return function (it) {
      this$AddLohComponent.state.passportSerialNumber = get_inputValue(it);
      setState(this$AddLohComponent, AddLohComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_0);
      return Unit;
    };
  }
  function AddLohComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.errorMessage = '';
    return Unit;
  }
  function AddLohComponent$render$lambda$lambda$lambda$lambda$lambda_1(this$AddLohComponent) {
    return function (it) {
      this$AddLohComponent.state.registrationAddress = get_inputValue(it);
      setState(this$AddLohComponent, AddLohComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_1);
      return Unit;
    };
  }
  function AddLohComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_2($receiver) {
    $receiver.errorMessage = '';
    return Unit;
  }
  function AddLohComponent$render$lambda$lambda$lambda$lambda$lambda_2(this$AddLohComponent) {
    return function (it) {
      this$AddLohComponent.state.issued = get_inputValue(it);
      setState(this$AddLohComponent, AddLohComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_2);
      return Unit;
    };
  }
  function AddLohComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_3($receiver) {
    $receiver.errorMessage = '';
    return Unit;
  }
  function AddLohComponent$render$lambda$lambda$lambda$lambda$lambda_3(this$AddLohComponent) {
    return function (it) {
      this$AddLohComponent.state.subdivisionCode = get_inputValue(it);
      setState(this$AddLohComponent, AddLohComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_3);
      return Unit;
    };
  }
  function AddLohComponent$render$lambda$lambda$lambda$lambda$lambda_4(this$AddLohComponent) {
    return function (it) {
      this$AddLohComponent.addLoh_0();
      return Unit;
    };
  }
  function AddLohComponent$render$lambda$lambda$lambda$lambda$lambda_5(this$AddLohComponent) {
    return function (it) {
      this$AddLohComponent.props.goUser();
      return Unit;
    };
  }
  AddLohComponent.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = new RDOMBuilder_init(div$lambda_0(null));
    var $receiver_0_0 = new RDOMBuilder_init(h1$lambda_0('pageTitle'));
    $receiver_0_0.unaryPlus_pdl1vz$('\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043B\u043E\u0445\u0430');
    $receiver_0.child_2usv9w$($receiver_0_0.create());
    $receiver.child_2usv9w$($receiver_0.create());
    var $receiver_0_1 = new RDOMBuilder_init(div$lambda_0('reg-input-box'));
    var $receiver_0_2 = new RDOMBuilder_init(p$lambda_0(null));
    var $receiver_0_3 = new RDOMBuilder_init(input$lambda_0(InputType.text, null, null, 'fio', null));
    var $receiver_1 = $receiver_0_3.attrs;
    $receiver_1.placeholder = '\u0424\u0430\u043C\u0438\u043B\u0438\u044F \u0418\u043C\u044F \u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E';
    set_onChangeFunction($receiver_1, AddLohComponent$render$lambda$lambda$lambda$lambda$lambda(this));
    $receiver_0_2.child_2usv9w$($receiver_0_3.create());
    $receiver_0_1.child_2usv9w$($receiver_0_2.create());
    var $receiver_0_4 = new RDOMBuilder_init(p$lambda_0(null));
    var $receiver_0_5 = new RDOMBuilder_init(input$lambda_0(InputType.text, null, null, '\u0421\u0435\u0440\u0438\u044F \u0438 \u043D\u043E\u043C\u0435\u0440 \u043F\u0430\u0441\u043F\u043E\u0440\u0442\u0430', null));
    var $receiver_2 = $receiver_0_5.attrs;
    $receiver_2.placeholder = '\u0421\u0435\u0440\u0438\u044F \u0438 \u043D\u043E\u043C\u0435\u0440 \u043F\u0430\u0441\u043F\u043E\u0440\u0442\u0430';
    set_onChangeFunction($receiver_2, AddLohComponent$render$lambda$lambda$lambda$lambda$lambda_0(this));
    $receiver_0_4.child_2usv9w$($receiver_0_5.create());
    $receiver_0_1.child_2usv9w$($receiver_0_4.create());
    var $receiver_0_6 = new RDOMBuilder_init(p$lambda_0(null));
    var $receiver_0_7 = new RDOMBuilder_init(input$lambda_0(InputType.text, null, null, '\u0410\u0434\u0440\u0435\u0441', null));
    var $receiver_3 = $receiver_0_7.attrs;
    $receiver_3.placeholder = '\u0410\u0434\u0440\u0435\u0441';
    set_onChangeFunction($receiver_3, AddLohComponent$render$lambda$lambda$lambda$lambda$lambda_1(this));
    $receiver_0_6.child_2usv9w$($receiver_0_7.create());
    $receiver_0_1.child_2usv9w$($receiver_0_6.create());
    var $receiver_0_8 = new RDOMBuilder_init(p$lambda_0(null));
    var $receiver_0_9 = new RDOMBuilder_init(input$lambda_0(InputType.text, null, null, '\u0412\u044B\u0434\u0430\u043D\u043E', null));
    var $receiver_4 = $receiver_0_9.attrs;
    $receiver_4.placeholder = '\u0412\u044B\u0434\u0430\u043D\u043E';
    set_onChangeFunction($receiver_4, AddLohComponent$render$lambda$lambda$lambda$lambda$lambda_2(this));
    $receiver_0_8.child_2usv9w$($receiver_0_9.create());
    $receiver_0_1.child_2usv9w$($receiver_0_8.create());
    var $receiver_0_10 = new RDOMBuilder_init(p$lambda_0(null));
    var $receiver_0_11 = new RDOMBuilder_init(input$lambda_0(InputType.text, null, null, '\u041A\u043E\u0434 \u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u044F', null));
    var $receiver_5 = $receiver_0_11.attrs;
    $receiver_5.placeholder = '\u041A\u043E\u0434 \u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u044F';
    set_onChangeFunction($receiver_5, AddLohComponent$render$lambda$lambda$lambda$lambda$lambda_3(this));
    $receiver_0_10.child_2usv9w$($receiver_0_11.create());
    $receiver_0_1.child_2usv9w$($receiver_0_10.create());
    var $receiver_0_12 = new RDOMBuilder_init(p$lambda_0(null));
    var $receiver_0_13 = new RDOMBuilder_init(button$lambda_0(null, null, null, 'App-buttons'));
    var $receiver_0_14 = new RDOMBuilder_init(span$lambda_0(null));
    $receiver_0_14.unaryPlus_pdl1vz$('\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043B\u043E\u0445\u0430');
    $receiver_0_13.child_2usv9w$($receiver_0_14.create());
    set_onClickFunction($receiver_0_13.attrs, AddLohComponent$render$lambda$lambda$lambda$lambda$lambda_4(this));
    $receiver_0_12.child_2usv9w$($receiver_0_13.create());
    $receiver_0_1.child_2usv9w$($receiver_0_12.create());
    var $receiver_0_15 = new RDOMBuilder_init(p$lambda_0(null));
    var $receiver_0_16 = new RDOMBuilder_init(button$lambda_0(null, null, null, 'App-buttons'));
    var $receiver_0_17 = new RDOMBuilder_init(span$lambda_0(null));
    $receiver_0_17.unaryPlus_pdl1vz$('\u041D\u0430\u0437\u0430\u0434');
    $receiver_0_16.child_2usv9w$($receiver_0_17.create());
    set_onClickFunction($receiver_0_16.attrs, AddLohComponent$render$lambda$lambda$lambda$lambda$lambda_5(this));
    $receiver_0_15.child_2usv9w$($receiver_0_16.create());
    $receiver_0_1.child_2usv9w$($receiver_0_15.create());
    $receiver.child_2usv9w$($receiver_0_1.create());
    var $receiver_0_18 = new RDOMBuilder_init(div$lambda_0(null));
    var $receiver_0_19 = new RDOMBuilder_init(h1$lambda_0(null));
    $receiver_0_19.unaryPlus_pdl1vz$(this.state.errorMessage);
    $receiver_0_18.child_2usv9w$($receiver_0_19.create());
    $receiver.child_2usv9w$($receiver_0_18.create());
  };
  function AddLohComponent$addLoh$lambda$lambda($receiver) {
    $receiver.hint_kaetmg$(minLength($receiver, 8), '\u0424\u0418\u041E \u0434\u043E\u043B\u0436\u0435\u043D \u0441\u043E\u0441\u0442\u043E\u044F\u0442\u044C \u043A\u0430\u043A \u043C\u0438\u043D\u0438\u043C\u0443\u043C \u0438\u0437 8 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432');
    $receiver.hint_kaetmg$(maxLength($receiver, 50), '\u0424\u0418\u041E \u043D\u0435 \u0434\u043E\u043B\u0436\u0435\u043D \u043F\u0440\u0435\u0432\u044B\u0448\u0430\u0442\u044C 50 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432');
    return Unit;
  }
  function AddLohComponent$addLoh$lambda$lambda_0($receiver) {
    $receiver.hint_kaetmg$(pattern($receiver, '\\d{10}'), '\u041D\u043E\u043C\u0435\u0440 \u043F\u0430\u0441\u043F\u043E\u0440\u0442\u0430 \u0434\u043E\u043B\u0436\u0435\u043D \u0441\u043E\u0441\u0442\u043E\u044F\u0442\u044C \u0440\u043E\u0432\u043D\u043E \u0438\u0437 10 \u0447\u0438\u0441\u0435\u043B');
    return Unit;
  }
  function AddLohComponent$addLoh$lambda$lambda_1($receiver) {
    $receiver.hint_kaetmg$(minLength($receiver, 1), '\u041F\u043E\u043B\u0435 "\u0410\u0434\u0440\u0435\u0441" \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u043C \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F');
    return Unit;
  }
  function AddLohComponent$addLoh$lambda$lambda_2($receiver) {
    $receiver.hint_kaetmg$(minLength($receiver, 1), '\u041F\u043E\u043B\u0435 "\u0412\u044B\u0434\u0430\u043D\u043E" \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u043C \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F');
    return Unit;
  }
  function AddLohComponent$addLoh$lambda$lambda_3($receiver) {
    $receiver.hint_kaetmg$(minLength($receiver, 1), '\u041F\u043E\u043B\u0435 "\u041A\u043E\u0434 \u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u044F" \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u043C \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F');
    return Unit;
  }
  function AddLohComponent$addLoh$lambda($receiver) {
    $receiver.invoke_wiumk0$(getPropertyCallableRef('fullname', 1, function ($receiver) {
      return $receiver.fullname;
    }, function ($receiver, value) {
      $receiver.fullname = value;
    }), AddLohComponent$addLoh$lambda$lambda);
    $receiver.invoke_wiumk0$(getPropertyCallableRef('passportSerialNumber', 1, function ($receiver) {
      return $receiver.passportSerialNumber;
    }, function ($receiver, value) {
      $receiver.passportSerialNumber = value;
    }), AddLohComponent$addLoh$lambda$lambda_0);
    $receiver.invoke_wiumk0$(getPropertyCallableRef('registrationAddress', 1, function ($receiver) {
      return $receiver.registrationAddress;
    }, function ($receiver, value) {
      $receiver.registrationAddress = value;
    }), AddLohComponent$addLoh$lambda$lambda_1);
    $receiver.invoke_wiumk0$(getPropertyCallableRef('issued', 1, function ($receiver) {
      return $receiver.issued;
    }, function ($receiver, value) {
      $receiver.issued = value;
    }), AddLohComponent$addLoh$lambda$lambda_2);
    $receiver.invoke_wiumk0$(getPropertyCallableRef('subdivisionCode', 1, function ($receiver) {
      return $receiver.subdivisionCode;
    }, function ($receiver, value) {
      $receiver.subdivisionCode = value;
    }), AddLohComponent$addLoh$lambda$lambda_3);
    return Unit;
  }
  function AddLohComponent$addLoh$lambda$lambda_4($receiver) {
    $receiver.errorMessage = '\u041B\u043E\u0445 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D';
    return Unit;
  }
  function AddLohComponent$addLoh$lambda$lambda_5($receiver) {
    $receiver.errorMessage = '\u041B\u043E\u0445 \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442';
    return Unit;
  }
  function Coroutine$AddLohComponent$addLoh$lambda(closure$addLohService_0, closure$loh_0, this$AddLohComponent_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$addLohService = closure$addLohService_0;
    this.local$closure$loh = closure$loh_0;
    this.local$this$AddLohComponent = this$AddLohComponent_0;
  }
  Coroutine$AddLohComponent$addLoh$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$AddLohComponent$addLoh$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$AddLohComponent$addLoh$lambda.prototype.constructor = Coroutine$AddLohComponent$addLoh$lambda;
  Coroutine$AddLohComponent$addLoh$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$addLohService.addLoh_x9rx28$(this.local$closure$loh, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var response = this.result_0;
            if (equals(response, 'OK')) {
              return setState(this.local$this$AddLohComponent, AddLohComponent$addLoh$lambda$lambda_4), Unit;
            } else {
              if (equals(response, 'Exists')) {
                return setState(this.local$this$AddLohComponent, AddLohComponent$addLoh$lambda$lambda_5), Unit;
              } else {
                this.state_0 = 3;
                continue;
              }
            }

          case 3:
            this.state_0 = 4;
            continue;
          case 4:
            return Unit;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function AddLohComponent$addLoh$lambda_0(closure$addLohService_0, closure$loh_0, this$AddLohComponent_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$AddLohComponent$addLoh$lambda(closure$addLohService_0, closure$loh_0, this$AddLohComponent_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function AddLohComponent$addLoh$lambda_1(closure$validationResult) {
    return function ($receiver) {
      $receiver.errorMessage = first(closure$validationResult.errors).message;
      return Unit;
    };
  }
  AddLohComponent.prototype.addLoh_0 = function () {
    var tmp$;
    var loh = new Loh(this.state.fullName, this.state.passportSerialNumber, this.state.registrationAddress, this.state.issued, this.state.subdivisionCode);
    var validateLoh = Validation.Companion.invoke_wvx9gu$(AddLohComponent$addLoh$lambda);
    var validationResult = validateLoh.invoke_11rb$(loh);
    if ((tmp$ = new Valid(loh)) != null ? tmp$.equals(validationResult) : null) {
      var addLohService = new AddLohService(this.coroutineContext_0);
      launch(this.props.coroutineScope, void 0, void 0, AddLohComponent$addLoh$lambda_0(addLohService, loh, this));
    } else {
      setState(this, AddLohComponent$addLoh$lambda_1(validationResult));
    }
  };
  AddLohComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AddLohComponent',
    interfaces: [RComponent]
  };
  function h2$lambda(closure$classes) {
    return function (it) {
      return new H2_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function h1$lambda_1(closure$classes) {
    return function (it) {
      return new H1_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function div$lambda_1(closure$classes) {
    return function (it) {
      return new DIV_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function ApplicationPageState() {
  }
  ApplicationPageState.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ApplicationPageState',
    interfaces: []
  };
  function ApplicationProps() {
  }
  ApplicationProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ApplicationProps',
    interfaces: []
  };
  function ApplicationComponent() {
    RComponent_init(this);
  }
  ApplicationComponent.prototype.init_bc6fkx$ = function ($receiver) {
    $receiver.selected = Views$Home_getInstance();
  };
  ApplicationComponent.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = new RDOMBuilder_init(div$lambda_1(null));
    renderAppBar($receiver_0);
    var $receiver_0_0 = new RDOMBuilder_init(div$lambda_1('App-header'));
    var $receiver_0_1 = new RDOMBuilder_init(h2$lambda('App-font'));
    $receiver_0_1.unaryPlus_pdl1vz$('BUTILKA');
    $receiver_0_0.child_2usv9w$($receiver_0_1.create());
    $receiver_0.child_2usv9w$($receiver_0_0.create());
    var $receiver_0_2 = new RDOMBuilder_init(div$lambda_1(null));
    switch (this.state.selected.name) {
      case 'Loading':
        var $receiver_0_3 = new RDOMBuilder_init(h1$lambda_1(null));
        $receiver_0_3.unaryPlus_pdl1vz$('Loading...');
        $receiver_0_2.child_2usv9w$($receiver_0_3.create());
        break;
      case 'Home':
        homeComponent($receiver_0_2, getCallableRef('goLogin', function ($receiver) {
          return $receiver.goLogin_0(), Unit;
        }.bind(null, this)), getCallableRef('goRegister', function ($receiver) {
          return $receiver.goRegister_0(), Unit;
        }.bind(null, this)));
        break;
      case 'Login':
        loginComponent($receiver_0_2, getCallableRef('goHome', function ($receiver) {
          return $receiver.goHome_0(), Unit;
        }.bind(null, this)), getCallableRef('goUser', function ($receiver) {
          return $receiver.goUser_0(), Unit;
        }.bind(null, this)), this.props.coroutineScope);
        break;
      case 'Register':
        registerComponent($receiver_0_2, getCallableRef('goHome', function ($receiver) {
          return $receiver.goHome_0(), Unit;
        }.bind(null, this)), getCallableRef('goUser', function ($receiver) {
          return $receiver.goUser_0(), Unit;
        }.bind(null, this)), this.props.coroutineScope);
        break;
      case 'User':
        userComponent($receiver_0_2, getCallableRef('goInputCaseInfo', function ($receiver) {
          return $receiver.goInputCaseInfo_0(), Unit;
        }.bind(null, this)), getCallableRef('goHome', function ($receiver) {
          return $receiver.goHome_0(), Unit;
        }.bind(null, this)), getCallableRef('goStats', function ($receiver) {
          return $receiver.goStats(), Unit;
        }.bind(null, this)), getCallableRef('goRequest', function ($receiver) {
          return $receiver.goRequest(), Unit;
        }.bind(null, this)), getCallableRef('goMyNotifications', function ($receiver) {
          return $receiver.goMyNotifications(), Unit;
        }.bind(null, this)), getCallableRef('goAddLoh', function ($receiver) {
          return $receiver.goAddLoh_0(), Unit;
        }.bind(null, this)), getCallableRef('goAddDrugs', function ($receiver) {
          return $receiver.goAddDrugs_0(), Unit;
        }.bind(null, this)), getCallableRef('goChangeLohInfo', function ($receiver) {
          return $receiver.goChangeLohInfo_0(), Unit;
        }.bind(null, this)));
        break;
      case 'InputCaseInfo':
        inputCaseInfoComponent($receiver_0_2, getCallableRef('goHome', function ($receiver) {
          return $receiver.goHome_0(), Unit;
        }.bind(null, this)), getCallableRef('goUser', function ($receiver) {
          return $receiver.goUser_0(), Unit;
        }.bind(null, this)), this.props.coroutineScope);
        break;
      case 'NotFound':
        notFoundComponent($receiver_0_2);
        break;
      case 'Request':
        requestComponent($receiver_0_2, getCallableRef('goUser', function ($receiver) {
          return $receiver.goUser_0(), Unit;
        }.bind(null, this)), this.props.coroutineScope);
        break;
      case 'MyNotifications':
        myNotificationComponent($receiver_0_2, getCallableRef('goUser', function ($receiver) {
          return $receiver.goUser_0(), Unit;
        }.bind(null, this)), this.props.coroutineScope);
        break;
      case 'Stats':
        statsComponent($receiver_0_2, getCallableRef('goUser', function ($receiver) {
          return $receiver.goUser_0(), Unit;
        }.bind(null, this)), this.props.coroutineScope);
        break;
      case 'AddLoh':
        addLohComponent($receiver_0_2, getCallableRef('goUser', function ($receiver) {
          return $receiver.goUser_0(), Unit;
        }.bind(null, this)), this.props.coroutineScope);
        break;
      case 'AddDrugs':
        addDrugsComponent($receiver_0_2, getCallableRef('goUser', function ($receiver) {
          return $receiver.goUser_0(), Unit;
        }.bind(null, this)), this.props.coroutineScope);
        break;
      case 'ChangeLohInfo':
        changeLohInfoComponent($receiver_0_2, getCallableRef('goUser', function ($receiver) {
          return $receiver.goUser_0(), Unit;
        }.bind(null, this)), this.props.coroutineScope);
        break;
      default:Kotlin.noWhenBranchMatched();
        break;
    }
    $receiver_0.child_2usv9w$($receiver_0_2.create());
    $receiver.child_2usv9w$($receiver_0.create());
  };
  function ApplicationComponent$goUser$lambda($receiver) {
    $receiver.selected = Views$User_getInstance();
    return Unit;
  }
  ApplicationComponent.prototype.goUser_0 = function () {
    setState(this, ApplicationComponent$goUser$lambda);
  };
  function ApplicationComponent$goHome$lambda($receiver) {
    $receiver.selected = Views$Home_getInstance();
    return Unit;
  }
  ApplicationComponent.prototype.goHome_0 = function () {
    setState(this, ApplicationComponent$goHome$lambda);
  };
  function ApplicationComponent$goInputCaseInfo$lambda($receiver) {
    $receiver.selected = Views$InputCaseInfo_getInstance();
    return Unit;
  }
  ApplicationComponent.prototype.goInputCaseInfo_0 = function () {
    setState(this, ApplicationComponent$goInputCaseInfo$lambda);
  };
  function ApplicationComponent$goLogin$lambda($receiver) {
    $receiver.selected = Views$Login_getInstance();
    return Unit;
  }
  ApplicationComponent.prototype.goLogin_0 = function () {
    setState(this, ApplicationComponent$goLogin$lambda);
  };
  function ApplicationComponent$goRegister$lambda($receiver) {
    $receiver.selected = Views$Register_getInstance();
    return Unit;
  }
  ApplicationComponent.prototype.goRegister_0 = function () {
    setState(this, ApplicationComponent$goRegister$lambda);
  };
  function ApplicationComponent$goInputCaseInput$lambda($receiver) {
    $receiver.selected = Views$InputCaseInfo_getInstance();
    return Unit;
  }
  ApplicationComponent.prototype.goInputCaseInput = function () {
    setState(this, ApplicationComponent$goInputCaseInput$lambda);
  };
  function ApplicationComponent$goRequest$lambda($receiver) {
    $receiver.selected = Views$Request_getInstance();
    return Unit;
  }
  ApplicationComponent.prototype.goRequest = function () {
    setState(this, ApplicationComponent$goRequest$lambda);
  };
  function ApplicationComponent$goMyNotifications$lambda($receiver) {
    $receiver.selected = Views$MyNotifications_getInstance();
    return Unit;
  }
  ApplicationComponent.prototype.goMyNotifications = function () {
    setState(this, ApplicationComponent$goMyNotifications$lambda);
  };
  function ApplicationComponent$goStats$lambda($receiver) {
    $receiver.selected = Views$Stats_getInstance();
    return Unit;
  }
  ApplicationComponent.prototype.goStats = function () {
    setState(this, ApplicationComponent$goStats$lambda);
  };
  function ApplicationComponent$goAddLoh$lambda($receiver) {
    $receiver.selected = Views$AddLoh_getInstance();
    return Unit;
  }
  ApplicationComponent.prototype.goAddLoh_0 = function () {
    setState(this, ApplicationComponent$goAddLoh$lambda);
  };
  function ApplicationComponent$goAddDrugs$lambda($receiver) {
    $receiver.selected = Views$AddDrugs_getInstance();
    return Unit;
  }
  ApplicationComponent.prototype.goAddDrugs_0 = function () {
    setState(this, ApplicationComponent$goAddDrugs$lambda);
  };
  function ApplicationComponent$goChangeLohInfo$lambda($receiver) {
    $receiver.selected = Views$ChangeLohInfo_getInstance();
    return Unit;
  }
  ApplicationComponent.prototype.goChangeLohInfo_0 = function () {
    setState(this, ApplicationComponent$goChangeLohInfo$lambda);
  };
  ApplicationComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ApplicationComponent',
    interfaces: [RComponent]
  };
  function input$lambda_1(closure$type, closure$formEncType, closure$formMethod, closure$name, closure$classes) {
    return function (it) {
      return new INPUT_init(attributesMapOf_0(['type', closure$type != null ? enumEncode(closure$type) : null, 'formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'name', closure$name, 'class', closure$classes]), it);
    };
  }
  function span$lambda_1(closure$classes) {
    return function (it) {
      return new SPAN_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function button$lambda_1(closure$formEncType, closure$formMethod, closure$type, closure$classes) {
    return function (it) {
      return new BUTTON_init(attributesMapOf_0(['formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'type', closure$type != null ? enumEncode(closure$type) : null, 'class', closure$classes]), it);
    };
  }
  function h1$lambda_2(closure$classes) {
    return function (it) {
      return new H1_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function p$lambda_1(closure$classes) {
    return function (it) {
      return new P_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function div$lambda_2(closure$classes) {
    return function (it) {
      return new DIV_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function changeLohInfoComponent$lambda(closure$goUser, closure$scope) {
    return function ($receiver) {
      $receiver.attrs.goUser = closure$goUser;
      $receiver.attrs.coroutineScope = closure$scope;
      return Unit;
    };
  }
  function changeLohInfoComponent($receiver, goUser, scope) {
    return $receiver.child_bzgiuu$(getKClass(ChangeLohInfoComponent), changeLohInfoComponent$lambda(goUser, scope));
  }
  function IsLohExists(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function IsLohExists_initFields() {
    IsLohExists_initFields = function () {
    };
    IsLohExists$LohExists_instance = new IsLohExists('LohExists', 0);
    IsLohExists$LohDoesntExists_instance = new IsLohExists('LohDoesntExists', 1);
  }
  var IsLohExists$LohExists_instance;
  function IsLohExists$LohExists_getInstance() {
    IsLohExists_initFields();
    return IsLohExists$LohExists_instance;
  }
  var IsLohExists$LohDoesntExists_instance;
  function IsLohExists$LohDoesntExists_getInstance() {
    IsLohExists_initFields();
    return IsLohExists$LohDoesntExists_instance;
  }
  IsLohExists.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IsLohExists',
    interfaces: [Enum]
  };
  function IsLohExists$values() {
    return [IsLohExists$LohExists_getInstance(), IsLohExists$LohDoesntExists_getInstance()];
  }
  IsLohExists.values = IsLohExists$values;
  function IsLohExists$valueOf(name) {
    switch (name) {
      case 'LohExists':
        return IsLohExists$LohExists_getInstance();
      case 'LohDoesntExists':
        return IsLohExists$LohDoesntExists_getInstance();
      default:throwISE('No enum constant view.IsLohExists.' + name);
    }
  }
  IsLohExists.valueOf_61zpoe$ = IsLohExists$valueOf;
  function ChangeLohInfoPageState() {
  }
  ChangeLohInfoPageState.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ChangeLohInfoPageState',
    interfaces: []
  };
  function ChangeLohInfoComponent() {
    RComponent_init(this);
  }
  ChangeLohInfoComponent.prototype.init_bc6fkx$ = function ($receiver) {
    $receiver.fullName = '';
    $receiver.passportSerialNumber = '';
    $receiver.registrationAddress = '';
    $receiver.issued = '';
    $receiver.subdivisionCode = '';
    $receiver.oldPassportSerialNumber = '';
    $receiver.lohExists = IsLohExists$LohDoesntExists_getInstance();
  };
  Object.defineProperty(ChangeLohInfoComponent.prototype, 'coroutineContext_0', {
    get: function () {
      return this.props.coroutineScope.coroutineContext;
    }
  });
  function ChangeLohInfoComponent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    $receiver.errorMessage = '';
    return Unit;
  }
  function ChangeLohInfoComponent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$ChangeLohInfoComponent) {
    return function (it) {
      this$ChangeLohInfoComponent.state.passportSerialNumber = get_inputValue(it);
      setState(this$ChangeLohInfoComponent, ChangeLohInfoComponent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda);
      return Unit;
    };
  }
  function ChangeLohInfoComponent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.errorMessage = '';
    return Unit;
  }
  function ChangeLohInfoComponent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$ChangeLohInfoComponent) {
    return function (it) {
      this$ChangeLohInfoComponent.state.fullName = get_inputValue(it);
      setState(this$ChangeLohInfoComponent, ChangeLohInfoComponent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0);
      return Unit;
    };
  }
  function ChangeLohInfoComponent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.errorMessage = '';
    return Unit;
  }
  function ChangeLohInfoComponent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(this$ChangeLohInfoComponent) {
    return function (it) {
      this$ChangeLohInfoComponent.state.registrationAddress = get_inputValue(it);
      setState(this$ChangeLohInfoComponent, ChangeLohInfoComponent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1);
      return Unit;
    };
  }
  function ChangeLohInfoComponent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2($receiver) {
    $receiver.errorMessage = '';
    return Unit;
  }
  function ChangeLohInfoComponent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(this$ChangeLohInfoComponent) {
    return function (it) {
      this$ChangeLohInfoComponent.state.issued = get_inputValue(it);
      setState(this$ChangeLohInfoComponent, ChangeLohInfoComponent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2);
      return Unit;
    };
  }
  function ChangeLohInfoComponent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3($receiver) {
    $receiver.errorMessage = '';
    return Unit;
  }
  function ChangeLohInfoComponent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(this$ChangeLohInfoComponent) {
    return function (it) {
      this$ChangeLohInfoComponent.state.subdivisionCode = get_inputValue(it);
      setState(this$ChangeLohInfoComponent, ChangeLohInfoComponent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3);
      return Unit;
    };
  }
  function ChangeLohInfoComponent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(this$ChangeLohInfoComponent) {
    return function (it) {
      this$ChangeLohInfoComponent.changelohinfo_0();
      return Unit;
    };
  }
  function ChangeLohInfoComponent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4($receiver) {
    $receiver.errorMessage = '';
    return Unit;
  }
  function ChangeLohInfoComponent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5(this$ChangeLohInfoComponent) {
    return function (it) {
      this$ChangeLohInfoComponent.state.oldPassportSerialNumber = get_inputValue(it);
      setState(this$ChangeLohInfoComponent, ChangeLohInfoComponent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4);
      return Unit;
    };
  }
  function ChangeLohInfoComponent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6(this$ChangeLohInfoComponent) {
    return function (it) {
      this$ChangeLohInfoComponent.doCheck_0();
      return Unit;
    };
  }
  function ChangeLohInfoComponent$render$lambda$lambda$lambda$lambda$lambda(this$ChangeLohInfoComponent) {
    return function (it) {
      this$ChangeLohInfoComponent.props.goUser();
      return Unit;
    };
  }
  ChangeLohInfoComponent.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = new RDOMBuilder_init(div$lambda_2(''));
    var $receiver_0_0 = new RDOMBuilder_init(div$lambda_2(null));
    switch (this.state.lohExists.name) {
      case 'LohExists':
        var $receiver_0_1 = new RDOMBuilder_init(div$lambda_2('reg-input-box'));
        var $receiver_0_2 = new RDOMBuilder_init(h1$lambda_2('pageTitle'));
        $receiver_0_2.unaryPlus_pdl1vz$('\u041B\u043E\u0445 \u043D\u0430\u0439\u0434\u0435\u043D');
        $receiver_0_1.child_2usv9w$($receiver_0_2.create());
        var $receiver_0_3 = new RDOMBuilder_init(p$lambda_1(null));
        var $receiver_0_4 = new RDOMBuilder_init(input$lambda_1(InputType.text, null, null, '\u041D\u043E\u0432\u0430\u044F \u0421\u0435\u0440\u0438\u044F \u0438 \u043D\u043E\u043C\u0435\u0440 \u043F\u0430\u0441\u043F\u043E\u0440\u0442\u0430', null));
        var $receiver_1 = $receiver_0_4.attrs;
        $receiver_1.placeholder = '\u0421\u0435\u0440\u0438\u044F \u0438 \u043D\u043E\u043C\u0435\u0440 \u043F\u0430\u0441\u043F\u043E\u0440\u0442\u0430';
        set_onChangeFunction($receiver_1, ChangeLohInfoComponent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this));
        $receiver_0_3.child_2usv9w$($receiver_0_4.create());
        $receiver_0_1.child_2usv9w$($receiver_0_3.create());
        var $receiver_0_5 = new RDOMBuilder_init(p$lambda_1(null));
        var $receiver_0_6 = new RDOMBuilder_init(input$lambda_1(InputType.text, null, null, 'fio', null));
        var $receiver_2 = $receiver_0_6.attrs;
        $receiver_2.placeholder = '\u0424\u0430\u043C\u0438\u043B\u0438\u044F \u0418\u043C\u044F \u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E';
        set_onChangeFunction($receiver_2, ChangeLohInfoComponent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this));
        $receiver_0_5.child_2usv9w$($receiver_0_6.create());
        $receiver_0_1.child_2usv9w$($receiver_0_5.create());
        var $receiver_0_7 = new RDOMBuilder_init(p$lambda_1(null));
        var $receiver_0_8 = new RDOMBuilder_init(input$lambda_1(InputType.text, null, null, '\u0410\u0434\u0440\u0435\u0441', null));
        var $receiver_3 = $receiver_0_8.attrs;
        $receiver_3.placeholder = '\u0410\u0434\u0440\u0435\u0441';
        set_onChangeFunction($receiver_3, ChangeLohInfoComponent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(this));
        $receiver_0_7.child_2usv9w$($receiver_0_8.create());
        $receiver_0_1.child_2usv9w$($receiver_0_7.create());
        var $receiver_0_9 = new RDOMBuilder_init(p$lambda_1(null));
        var $receiver_0_10 = new RDOMBuilder_init(input$lambda_1(InputType.text, null, null, '\u0412\u044B\u0434\u0430\u043D\u043E', null));
        var $receiver_4 = $receiver_0_10.attrs;
        $receiver_4.placeholder = '\u0412\u044B\u0434\u0430\u043D\u043E';
        set_onChangeFunction($receiver_4, ChangeLohInfoComponent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(this));
        $receiver_0_9.child_2usv9w$($receiver_0_10.create());
        $receiver_0_1.child_2usv9w$($receiver_0_9.create());
        var $receiver_0_11 = new RDOMBuilder_init(p$lambda_1(null));
        var $receiver_0_12 = new RDOMBuilder_init(input$lambda_1(InputType.text, null, null, '\u041A\u043E\u0434 \u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u044F', null));
        var $receiver_5 = $receiver_0_12.attrs;
        $receiver_5.placeholder = '\u041A\u043E\u0434 \u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u044F';
        set_onChangeFunction($receiver_5, ChangeLohInfoComponent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(this));
        $receiver_0_11.child_2usv9w$($receiver_0_12.create());
        $receiver_0_1.child_2usv9w$($receiver_0_11.create());
        var $receiver_0_13 = new RDOMBuilder_init(p$lambda_1(null));
        var $receiver_0_14 = new RDOMBuilder_init(button$lambda_1(null, null, null, 'App-buttons'));
        var $receiver_0_15 = new RDOMBuilder_init(span$lambda_1(null));
        $receiver_0_15.unaryPlus_pdl1vz$('\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435 \u043B\u043E\u0445\u0430');
        $receiver_0_14.child_2usv9w$($receiver_0_15.create());
        set_onClickFunction($receiver_0_14.attrs, ChangeLohInfoComponent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(this));
        $receiver_0_13.child_2usv9w$($receiver_0_14.create());
        $receiver_0_1.child_2usv9w$($receiver_0_13.create());
        $receiver_0_0.child_2usv9w$($receiver_0_1.create());
        break;
      case 'LohDoesntExists':
        var $receiver_0_16 = new RDOMBuilder_init(div$lambda_2('reg-input-box'));
        var $receiver_0_17 = new RDOMBuilder_init(p$lambda_1(null));
        var $receiver_0_18 = new RDOMBuilder_init(input$lambda_1(InputType.text, null, null, 'passport', null));
        var $receiver_6 = $receiver_0_18.attrs;
        $receiver_6.placeholder = '\u0421\u0435\u0440\u0438\u044F \u0438 \u043D\u043E\u043C\u0435\u0440 \u043F\u0430\u0441\u043F\u043E\u0440\u0442\u0430';
        set_onChangeFunction($receiver_6, ChangeLohInfoComponent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5(this));
        $receiver_0_17.child_2usv9w$($receiver_0_18.create());
        $receiver_0_16.child_2usv9w$($receiver_0_17.create());
        var $receiver_0_19 = new RDOMBuilder_init(p$lambda_1(null));
        var $receiver_0_20 = new RDOMBuilder_init(button$lambda_1(null, null, null, 'App-buttons'));
        var $receiver_0_21 = new RDOMBuilder_init(span$lambda_1(null));
        $receiver_0_21.unaryPlus_pdl1vz$('\u041D\u0430\u0439\u0442\u0438 \u043B\u043E\u0445\u0430');
        $receiver_0_20.child_2usv9w$($receiver_0_21.create());
        set_onClickFunction($receiver_0_20.attrs, ChangeLohInfoComponent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6(this));
        $receiver_0_19.child_2usv9w$($receiver_0_20.create());
        $receiver_0_16.child_2usv9w$($receiver_0_19.create());
        $receiver_0_0.child_2usv9w$($receiver_0_16.create());
        break;
      default:Kotlin.noWhenBranchMatched();
        break;
    }
    $receiver_0.child_2usv9w$($receiver_0_0.create());
    var $receiver_0_22 = new RDOMBuilder_init(p$lambda_1(null));
    var $receiver_0_23 = new RDOMBuilder_init(button$lambda_1(null, null, null, 'App-buttons'));
    var $receiver_0_24 = new RDOMBuilder_init(span$lambda_1(null));
    $receiver_0_24.unaryPlus_pdl1vz$('\u041D\u0430\u0437\u0430\u0434');
    $receiver_0_23.child_2usv9w$($receiver_0_24.create());
    set_onClickFunction($receiver_0_23.attrs, ChangeLohInfoComponent$render$lambda$lambda$lambda$lambda$lambda(this));
    $receiver_0_22.child_2usv9w$($receiver_0_23.create());
    $receiver_0.child_2usv9w$($receiver_0_22.create());
    var $receiver_0_25 = new RDOMBuilder_init(div$lambda_2(null));
    var $receiver_0_26 = new RDOMBuilder_init(h1$lambda_2(null));
    $receiver_0_26.unaryPlus_pdl1vz$(this.state.errorMessage);
    $receiver_0_25.child_2usv9w$($receiver_0_26.create());
    $receiver_0.child_2usv9w$($receiver_0_25.create());
    $receiver.child_2usv9w$($receiver_0.create());
  };
  function ChangeLohInfoComponent$doCheck$lambda$lambda($receiver) {
    $receiver.lohExists = IsLohExists$LohExists_getInstance();
    return Unit;
  }
  function ChangeLohInfoComponent$doCheck$lambda$lambda_0($receiver) {
    $receiver.errorMessage = '\u041B\u043E\u0445 \u0441 \u0442\u0430\u043A\u0438\u043C\u0438 \u043F\u0430\u0441\u043F\u043E\u0440\u0442\u043D\u044B\u043C\u0438 \u0434\u0430\u043D\u043D\u044B\u043C\u0438 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D';
    return Unit;
  }
  function Coroutine$ChangeLohInfoComponent$doCheck$lambda(closure$changeLohInfoService_0, this$ChangeLohInfoComponent_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$changeLohInfoService = closure$changeLohInfoService_0;
    this.local$this$ChangeLohInfoComponent = this$ChangeLohInfoComponent_0;
  }
  Coroutine$ChangeLohInfoComponent$doCheck$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ChangeLohInfoComponent$doCheck$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ChangeLohInfoComponent$doCheck$lambda.prototype.constructor = Coroutine$ChangeLohInfoComponent$doCheck$lambda;
  Coroutine$ChangeLohInfoComponent$doCheck$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$changeLohInfoService.checkLoh_61zpoe$(this.local$this$ChangeLohInfoComponent.state.oldPassportSerialNumber, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (this.result_0) {
              return setState(this.local$this$ChangeLohInfoComponent, ChangeLohInfoComponent$doCheck$lambda$lambda), Unit;
            } else {
              return setState(this.local$this$ChangeLohInfoComponent, ChangeLohInfoComponent$doCheck$lambda$lambda_0), Unit;
            }

          case 3:
            return;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function ChangeLohInfoComponent$doCheck$lambda(closure$changeLohInfoService_0, this$ChangeLohInfoComponent_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$ChangeLohInfoComponent$doCheck$lambda(closure$changeLohInfoService_0, this$ChangeLohInfoComponent_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  ChangeLohInfoComponent.prototype.doCheck_0 = function () {
    var changeLohInfoService = new ChangeLohInfoService(this.coroutineContext_0);
    launch(this.props.coroutineScope, void 0, void 0, ChangeLohInfoComponent$doCheck$lambda(changeLohInfoService, this));
  };
  function ChangeLohInfoComponent$changelohinfo$lambda$lambda($receiver) {
    $receiver.hint_kaetmg$(minLength($receiver, 8), '\u0424\u0418\u041E \u0434\u043E\u043B\u0436\u0435\u043D \u0441\u043E\u0441\u0442\u043E\u044F\u0442\u044C \u043A\u0430\u043A \u043C\u0438\u043D\u0438\u043C\u0443\u043C \u0438\u0437 8 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432');
    $receiver.hint_kaetmg$(maxLength($receiver, 50), '\u0424\u0418\u041E \u043D\u0435 \u0434\u043E\u043B\u0436\u0435\u043D \u043F\u0440\u0435\u0432\u044B\u0448\u0430\u0442\u044C 50 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432');
    return Unit;
  }
  function ChangeLohInfoComponent$changelohinfo$lambda$lambda_0($receiver) {
    $receiver.hint_kaetmg$(pattern($receiver, '\\d{10}'), '\u041D\u043E\u043C\u0435\u0440 \u043F\u0430\u0441\u043F\u043E\u0440\u0442\u0430 \u0434\u043E\u043B\u0436\u0435\u043D \u0441\u043E\u0441\u0442\u043E\u044F\u0442\u044C \u0440\u043E\u0432\u043D\u043E \u0438\u0437 10 \u0447\u0438\u0441\u0435\u043B');
    return Unit;
  }
  function ChangeLohInfoComponent$changelohinfo$lambda$lambda_1($receiver) {
    $receiver.hint_kaetmg$(minLength($receiver, 1), '\u041F\u043E\u043B\u0435 "\u0410\u0434\u0440\u0435\u0441" \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u043C \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F');
    return Unit;
  }
  function ChangeLohInfoComponent$changelohinfo$lambda$lambda_2($receiver) {
    $receiver.hint_kaetmg$(minLength($receiver, 1), '\u041F\u043E\u043B\u0435 "\u0412\u044B\u0434\u0430\u043D\u043E" \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u043C \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F');
    return Unit;
  }
  function ChangeLohInfoComponent$changelohinfo$lambda$lambda_3($receiver) {
    $receiver.hint_kaetmg$(minLength($receiver, 1), '\u041F\u043E\u043B\u0435 "\u041A\u043E\u0434 \u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u044F" \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u043C \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F');
    return Unit;
  }
  function ChangeLohInfoComponent$changelohinfo$lambda($receiver) {
    $receiver.invoke_wiumk0$(getPropertyCallableRef('fullname', 1, function ($receiver) {
      return $receiver.fullname;
    }, function ($receiver, value) {
      $receiver.fullname = value;
    }), ChangeLohInfoComponent$changelohinfo$lambda$lambda);
    $receiver.invoke_wiumk0$(getPropertyCallableRef('passportSerialNumber', 1, function ($receiver) {
      return $receiver.passportSerialNumber;
    }, function ($receiver, value) {
      $receiver.passportSerialNumber = value;
    }), ChangeLohInfoComponent$changelohinfo$lambda$lambda_0);
    $receiver.invoke_wiumk0$(getPropertyCallableRef('registrationAddress', 1, function ($receiver) {
      return $receiver.registrationAddress;
    }, function ($receiver, value) {
      $receiver.registrationAddress = value;
    }), ChangeLohInfoComponent$changelohinfo$lambda$lambda_1);
    $receiver.invoke_wiumk0$(getPropertyCallableRef('issued', 1, function ($receiver) {
      return $receiver.issued;
    }, function ($receiver, value) {
      $receiver.issued = value;
    }), ChangeLohInfoComponent$changelohinfo$lambda$lambda_2);
    $receiver.invoke_wiumk0$(getPropertyCallableRef('subdivisionCode', 1, function ($receiver) {
      return $receiver.subdivisionCode;
    }, function ($receiver, value) {
      $receiver.subdivisionCode = value;
    }), ChangeLohInfoComponent$changelohinfo$lambda$lambda_3);
    return Unit;
  }
  function ChangeLohInfoComponent$changelohinfo$lambda$lambda_4(this$ChangeLohInfoComponent) {
    return function ($receiver) {
      $receiver.errorMessage = '\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0430';
      this$ChangeLohInfoComponent.state.lohExists = IsLohExists$LohDoesntExists_getInstance();
      return Unit;
    };
  }
  function ChangeLohInfoComponent$changelohinfo$lambda$lambda_5($receiver) {
    $receiver.errorMessage = '\u041E\u0448\u0438\u0431\u043A\u0430';
    return Unit;
  }
  function Coroutine$ChangeLohInfoComponent$changelohinfo$lambda(closure$changeLohInfoService_0, closure$loh_0, this$ChangeLohInfoComponent_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$changeLohInfoService = closure$changeLohInfoService_0;
    this.local$closure$loh = closure$loh_0;
    this.local$this$ChangeLohInfoComponent = this$ChangeLohInfoComponent_0;
  }
  Coroutine$ChangeLohInfoComponent$changelohinfo$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ChangeLohInfoComponent$changelohinfo$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ChangeLohInfoComponent$changelohinfo$lambda.prototype.constructor = Coroutine$ChangeLohInfoComponent$changelohinfo$lambda;
  Coroutine$ChangeLohInfoComponent$changelohinfo$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$changeLohInfoService.changeLohInfo_hlf1s9$(new LohUpdate(this.local$closure$loh, this.local$this$ChangeLohInfoComponent.state.oldPassportSerialNumber), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (this.result_0) {
              return setState(this.local$this$ChangeLohInfoComponent, ChangeLohInfoComponent$changelohinfo$lambda$lambda_4(this.local$this$ChangeLohInfoComponent)), Unit;
            } else {
              return setState(this.local$this$ChangeLohInfoComponent, ChangeLohInfoComponent$changelohinfo$lambda$lambda_5), Unit;
            }

          case 3:
            return;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function ChangeLohInfoComponent$changelohinfo$lambda_0(closure$changeLohInfoService_0, closure$loh_0, this$ChangeLohInfoComponent_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$ChangeLohInfoComponent$changelohinfo$lambda(closure$changeLohInfoService_0, closure$loh_0, this$ChangeLohInfoComponent_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ChangeLohInfoComponent$changelohinfo$lambda_1(closure$validationResult) {
    return function ($receiver) {
      $receiver.errorMessage = first(closure$validationResult.errors).message;
      return Unit;
    };
  }
  ChangeLohInfoComponent.prototype.changelohinfo_0 = function () {
    var tmp$;
    var loh = new Loh(this.state.fullName, this.state.passportSerialNumber, this.state.registrationAddress, this.state.issued, this.state.subdivisionCode);
    var validateLoh = Validation.Companion.invoke_wvx9gu$(ChangeLohInfoComponent$changelohinfo$lambda);
    var validationResult = validateLoh.invoke_11rb$(loh);
    if ((tmp$ = new Valid(loh)) != null ? tmp$.equals(validationResult) : null) {
      var changeLohInfoService = new ChangeLohInfoService(this.coroutineContext_0);
      launch(this.props.coroutineScope, void 0, void 0, ChangeLohInfoComponent$changelohinfo$lambda_0(changeLohInfoService, loh, this));
    } else {
      setState(this, ChangeLohInfoComponent$changelohinfo$lambda_1(validationResult));
    }
  };
  ChangeLohInfoComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChangeLohInfoComponent',
    interfaces: [RComponent]
  };
  function span$lambda_2(closure$classes) {
    return function (it) {
      return new SPAN_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function button$lambda_2(closure$formEncType, closure$formMethod, closure$type, closure$classes) {
    return function (it) {
      return new BUTTON_init(attributesMapOf_0(['formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'type', closure$type != null ? enumEncode(closure$type) : null, 'class', closure$classes]), it);
    };
  }
  function div$lambda_3(closure$classes) {
    return function (it) {
      return new DIV_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function homeComponent$lambda(closure$goLogin, closure$goRegister) {
    return function ($receiver) {
      $receiver.attrs.goLogin = closure$goLogin;
      $receiver.attrs.goRegister = closure$goRegister;
      return Unit;
    };
  }
  function homeComponent($receiver, goLogin, goRegister) {
    return $receiver.child_bzgiuu$(getKClass(HomeComponent), homeComponent$lambda(goLogin, goRegister));
  }
  function HomeComponent() {
    RComponent_init(this);
  }
  function HomeComponent$render$lambda$lambda$lambda$lambda(this$HomeComponent) {
    return function (it) {
      this$HomeComponent.props.goLogin();
      return Unit;
    };
  }
  function HomeComponent$render$lambda$lambda$lambda$lambda_0(this$HomeComponent) {
    return function (it) {
      this$HomeComponent.props.goRegister();
      return Unit;
    };
  }
  HomeComponent.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = new RDOMBuilder_init(div$lambda_3(null));
    var $receiver_0_0 = new RDOMBuilder_init(button$lambda_2(null, null, null, 'App-buttons'));
    var $receiver_0_1 = new RDOMBuilder_init(span$lambda_2(null));
    $receiver_0_1.unaryPlus_pdl1vz$('\u0412\u0445\u043E\u0434');
    $receiver_0_0.child_2usv9w$($receiver_0_1.create());
    set_onClickFunction($receiver_0_0.attrs, HomeComponent$render$lambda$lambda$lambda$lambda(this));
    $receiver_0.child_2usv9w$($receiver_0_0.create());
    var $receiver_0_2 = new RDOMBuilder_init(button$lambda_2(null, null, null, 'App-buttons'));
    var $receiver_0_3 = new RDOMBuilder_init(span$lambda_2(null));
    $receiver_0_3.unaryPlus_pdl1vz$('\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F');
    $receiver_0_2.child_2usv9w$($receiver_0_3.create());
    set_onClickFunction($receiver_0_2.attrs, HomeComponent$render$lambda$lambda$lambda$lambda_0(this));
    $receiver_0.child_2usv9w$($receiver_0_2.create());
    $receiver.child_2usv9w$($receiver_0.create());
  };
  HomeComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HomeComponent',
    interfaces: [RComponent]
  };
  function h1$lambda_3(closure$classes) {
    return function (it) {
      return new H1_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function input$lambda_2(closure$type, closure$formEncType, closure$formMethod, closure$name, closure$classes) {
    return function (it) {
      return new INPUT_init(attributesMapOf_0(['type', closure$type != null ? enumEncode(closure$type) : null, 'formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'name', closure$name, 'class', closure$classes]), it);
    };
  }
  function p$lambda_2(closure$classes) {
    return function (it) {
      return new P_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function span$lambda_3(closure$classes) {
    return function (it) {
      return new SPAN_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function button$lambda_3(closure$formEncType, closure$formMethod, closure$type, closure$classes) {
    return function (it) {
      return new BUTTON_init(attributesMapOf_0(['formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'type', closure$type != null ? enumEncode(closure$type) : null, 'class', closure$classes]), it);
    };
  }
  function div$lambda_4(closure$classes) {
    return function (it) {
      return new DIV_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function loginComponent$lambda(closure$goUser, closure$goHome, closure$scope) {
    return function ($receiver) {
      $receiver.attrs.goUser = closure$goUser;
      $receiver.attrs.goHome = closure$goHome;
      $receiver.attrs.coroutineScope = closure$scope;
      return Unit;
    };
  }
  function loginComponent($receiver, goHome, goUser, scope) {
    return $receiver.child_bzgiuu$(getKClass(LoginComponent), loginComponent$lambda(goUser, goHome, scope));
  }
  function LoginPageState() {
  }
  LoginPageState.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'LoginPageState',
    interfaces: []
  };
  function LoginComponent() {
    RComponent_init(this);
  }
  LoginComponent.prototype.init_bc6fkx$ = function ($receiver) {
    $receiver.username = '';
    $receiver.password = '';
    $receiver.errorMessage = '';
  };
  Object.defineProperty(LoginComponent.prototype, 'coroutineContext_0', {
    get: function () {
      return this.props.coroutineScope.coroutineContext;
    }
  });
  function LoginComponent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    $receiver.errorMessage = '';
    return Unit;
  }
  function LoginComponent$render$lambda$lambda$lambda$lambda$lambda$lambda(this$LoginComponent) {
    return function (it) {
      this$LoginComponent.state.username = get_inputValue(it);
      setState(this$LoginComponent, LoginComponent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda);
      return Unit;
    };
  }
  function LoginComponent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.errorMessage = '';
    return Unit;
  }
  function LoginComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_0(this$LoginComponent) {
    return function (it) {
      this$LoginComponent.state.password = get_inputValue(it);
      setState(this$LoginComponent, LoginComponent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0);
      return Unit;
    };
  }
  function LoginComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_1(this$LoginComponent) {
    return function (it) {
      it.preventDefault();
      this$LoginComponent.doLogin_0();
      return Unit;
    };
  }
  function LoginComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_2(this$LoginComponent) {
    return function (it) {
      this$LoginComponent.props.goHome();
      return Unit;
    };
  }
  LoginComponent.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = new RDOMBuilder_init(div$lambda_4(''));
    var $receiver_0_0 = new RDOMBuilder_init(div$lambda_4(null));
    var $receiver_0_1 = new RDOMBuilder_init(h1$lambda_3('pageTitle'));
    $receiver_0_1.unaryPlus_pdl1vz$('\u0412\u043E\u0439\u0442\u0438');
    $receiver_0_0.child_2usv9w$($receiver_0_1.create());
    $receiver_0.child_2usv9w$($receiver_0_0.create());
    var $receiver_0_2 = new RDOMBuilder_init(div$lambda_4(null));
    var $receiver_0_3 = new RDOMBuilder_init(p$lambda_2(null));
    var $receiver_0_4 = new RDOMBuilder_init(input$lambda_2(InputType.text, null, null, 'login', null));
    var $receiver_1 = $receiver_0_4.attrs;
    $receiver_1.placeholder = '\u0418\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F';
    set_onChangeFunction($receiver_1, LoginComponent$render$lambda$lambda$lambda$lambda$lambda$lambda(this));
    $receiver_0_3.child_2usv9w$($receiver_0_4.create());
    $receiver_0_2.child_2usv9w$($receiver_0_3.create());
    $receiver_0.child_2usv9w$($receiver_0_2.create());
    var $receiver_0_5 = new RDOMBuilder_init(div$lambda_4(null));
    var $receiver_0_6 = new RDOMBuilder_init(p$lambda_2(null));
    var $receiver_0_7 = new RDOMBuilder_init(input$lambda_2(InputType.password, null, null, 'password', null));
    var $receiver_2 = $receiver_0_7.attrs;
    $receiver_2.placeholder = '\u041F\u0430\u0440\u043E\u043B\u044C';
    set_onChangeFunction($receiver_2, LoginComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_0(this));
    $receiver_0_6.child_2usv9w$($receiver_0_7.create());
    $receiver_0_5.child_2usv9w$($receiver_0_6.create());
    $receiver_0.child_2usv9w$($receiver_0_5.create());
    var $receiver_0_8 = new RDOMBuilder_init(div$lambda_4(null));
    var $receiver_0_9 = new RDOMBuilder_init(p$lambda_2(null));
    var $receiver_0_10 = new RDOMBuilder_init(button$lambda_3(null, null, null, 'App-buttons'));
    var $receiver_0_11 = new RDOMBuilder_init(span$lambda_3(null));
    $receiver_0_11.unaryPlus_pdl1vz$('\u0412\u0425\u041E\u0414');
    $receiver_0_10.child_2usv9w$($receiver_0_11.create());
    set_onClickFunction($receiver_0_10.attrs, LoginComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_1(this));
    $receiver_0_9.child_2usv9w$($receiver_0_10.create());
    $receiver_0_8.child_2usv9w$($receiver_0_9.create());
    var $receiver_0_12 = new RDOMBuilder_init(p$lambda_2(null));
    var $receiver_0_13 = new RDOMBuilder_init(button$lambda_3(null, null, null, 'App-buttons'));
    var $receiver_0_14 = new RDOMBuilder_init(span$lambda_3(null));
    $receiver_0_14.unaryPlus_pdl1vz$('\u041D\u0430\u0437\u0430\u0434');
    $receiver_0_13.child_2usv9w$($receiver_0_14.create());
    set_onClickFunction($receiver_0_13.attrs, LoginComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_2(this));
    $receiver_0_12.child_2usv9w$($receiver_0_13.create());
    $receiver_0_8.child_2usv9w$($receiver_0_12.create());
    $receiver_0.child_2usv9w$($receiver_0_8.create());
    var $receiver_0_15 = new RDOMBuilder_init(div$lambda_4(null));
    var $receiver_0_16 = new RDOMBuilder_init(h1$lambda_3(null));
    $receiver_0_16.unaryPlus_pdl1vz$(this.state.errorMessage);
    $receiver_0_15.child_2usv9w$($receiver_0_16.create());
    $receiver_0.child_2usv9w$($receiver_0_15.create());
    $receiver.child_2usv9w$($receiver_0.create());
  };
  function LoginComponent$doLogin$lambda$lambda(closure$user, this$LoginComponent) {
    return function ($receiver) {
      $receiver.errorMessage = closure$user.toString();
      logInUser(closure$user);
      this$LoginComponent.props.goUser();
      return Unit;
    };
  }
  function LoginComponent$doLogin$lambda$lambda_0($receiver) {
    $receiver.errorMessage = '\u041D\u0435\u0432\u0435\u0440\u043D\u043E\u0435 \u0438\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0438\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C';
    return Unit;
  }
  function Coroutine$LoginComponent$doLogin$lambda(closure$loginService_0, closure$loginData_0, this$LoginComponent_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 5;
    this.local$closure$loginService = closure$loginService_0;
    this.local$closure$loginData = closure$loginData_0;
    this.local$this$LoginComponent = this$LoginComponent_0;
  }
  Coroutine$LoginComponent$doLogin$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$LoginComponent$doLogin$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$LoginComponent$doLogin$lambda.prototype.constructor = Coroutine$LoginComponent$doLogin$lambda;
  Coroutine$LoginComponent$doLogin$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = this.local$closure$loginService.login_cc96oe$(this.local$closure$loginData, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            var user = this.result_0;
            return setState(this.local$this$LoginComponent, LoginComponent$doLogin$lambda$lambda(user, this.local$this$LoginComponent)), Unit;
          case 2:
            this.exceptionState_0 = 5;
            var e = this.exception_0;
            if (Kotlin.isType(e, StatusCodeException)) {
              return setState(this.local$this$LoginComponent, LoginComponent$doLogin$lambda$lambda_0), Unit;
            } else {
              throw e;
            }

          case 3:
            this.state_0 = 4;
            continue;
          case 4:
            return;
          case 5:
            throw this.exception_0;
          default:this.state_0 = 5;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 5) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function LoginComponent$doLogin$lambda(closure$loginService_0, closure$loginData_0, this$LoginComponent_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$LoginComponent$doLogin$lambda(closure$loginService_0, closure$loginData_0, this$LoginComponent_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  LoginComponent.prototype.doLogin_0 = function () {
    var loginService = new LoginService(this.coroutineContext_0);
    var loginData = new LoginData(this.state.username, this.state.password);
    launch(this.props.coroutineScope, void 0, void 0, LoginComponent$doLogin$lambda(loginService, loginData, this));
  };
  LoginComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LoginComponent',
    interfaces: [RComponent]
  };
  var currentUser;
  function logInUser(user) {
    currentUser = user;
  }
  function logOutUser() {
    currentUser = null;
  }
  function h1$lambda_4(closure$classes) {
    return function (it) {
      return new H1_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function div$lambda_5(closure$classes) {
    return function (it) {
      return new DIV_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function notFoundComponent$lambda($receiver) {
    return Unit;
  }
  function notFoundComponent($receiver) {
    return $receiver.child_bzgiuu$(getKClass(NotFoundComponent), notFoundComponent$lambda);
  }
  function NotFoundComponent() {
    RComponent_init(this);
  }
  NotFoundComponent.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = new RDOMBuilder_init(div$lambda_5(''));
    var $receiver_0_0 = new RDOMBuilder_init(div$lambda_5(null));
    var $receiver_0_1 = new RDOMBuilder_init(h1$lambda_4('pageTitle'));
    $receiver_0_1.unaryPlus_pdl1vz$('Not Found');
    $receiver_0_0.child_2usv9w$($receiver_0_1.create());
    $receiver_0.child_2usv9w$($receiver_0_0.create());
    $receiver.child_2usv9w$($receiver_0.create());
  };
  NotFoundComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NotFoundComponent',
    interfaces: [RComponent]
  };
  function h1$lambda_5(closure$classes) {
    return function (it) {
      return new H1_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function img$lambda(closure$alt, closure$src, closure$classes) {
    return function (it) {
      return new IMG_init(attributesMapOf_0(['alt', closure$alt, 'src', closure$src, 'class', closure$classes]), it);
    };
  }
  function span$lambda_4(closure$classes) {
    return function (it) {
      return new SPAN_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function button$lambda_4(closure$formEncType, closure$formMethod, closure$type, closure$classes) {
    return function (it) {
      return new BUTTON_init(attributesMapOf_0(['formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'type', closure$type != null ? enumEncode(closure$type) : null, 'class', closure$classes]), it);
    };
  }
  function p$lambda_3(closure$classes) {
    return function (it) {
      return new P_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function div$lambda_6(closure$classes) {
    return function (it) {
      return new DIV_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function IsNotification(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function IsNotification_initFields() {
    IsNotification_initFields = function () {
    };
    IsNotification$ThereIsRequest_instance = new IsNotification('ThereIsRequest', 0);
    IsNotification$ThereIsNotRequest_instance = new IsNotification('ThereIsNotRequest', 1);
    IsNotification$Loading_instance = new IsNotification('Loading', 2);
  }
  var IsNotification$ThereIsRequest_instance;
  function IsNotification$ThereIsRequest_getInstance() {
    IsNotification_initFields();
    return IsNotification$ThereIsRequest_instance;
  }
  var IsNotification$ThereIsNotRequest_instance;
  function IsNotification$ThereIsNotRequest_getInstance() {
    IsNotification_initFields();
    return IsNotification$ThereIsNotRequest_instance;
  }
  var IsNotification$Loading_instance;
  function IsNotification$Loading_getInstance() {
    IsNotification_initFields();
    return IsNotification$Loading_instance;
  }
  IsNotification.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IsNotification',
    interfaces: [Enum]
  };
  function IsNotification$values() {
    return [IsNotification$ThereIsRequest_getInstance(), IsNotification$ThereIsNotRequest_getInstance(), IsNotification$Loading_getInstance()];
  }
  IsNotification.values = IsNotification$values;
  function IsNotification$valueOf(name) {
    switch (name) {
      case 'ThereIsRequest':
        return IsNotification$ThereIsRequest_getInstance();
      case 'ThereIsNotRequest':
        return IsNotification$ThereIsNotRequest_getInstance();
      case 'Loading':
        return IsNotification$Loading_getInstance();
      default:throwISE('No enum constant view.IsNotification.' + name);
    }
  }
  IsNotification.valueOf_61zpoe$ = IsNotification$valueOf;
  function myNotificationComponent$lambda(closure$goUser, closure$scope) {
    return function ($receiver) {
      $receiver.attrs.goUser = closure$goUser;
      $receiver.attrs.coroutineScope = closure$scope;
      return Unit;
    };
  }
  function myNotificationComponent($receiver, goUser, scope) {
    return $receiver.child_bzgiuu$(getKClass(MyNotificationComponent), myNotificationComponent$lambda(goUser, scope));
  }
  function MyNotificationPageState() {
  }
  MyNotificationPageState.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MyNotificationPageState',
    interfaces: []
  };
  function MyNotificationComponent() {
    RComponent_init(this);
  }
  MyNotificationComponent.prototype.init_bc6fkx$ = function ($receiver) {
    $receiver.selected = IsNotification$Loading_getInstance();
  };
  Object.defineProperty(MyNotificationComponent.prototype, 'coroutineContext_0', {
    get: function () {
      return this.props.coroutineScope.coroutineContext;
    }
  });
  function MyNotificationComponent$render$lambda$lambda$lambda$lambda$lambda(this$MyNotificationComponent) {
    return function (it) {
      this$MyNotificationComponent.props.goUser();
      return Unit;
    };
  }
  MyNotificationComponent.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = new RDOMBuilder_init(div$lambda_6(null));
    switch (this.state.selected.name) {
      case 'Loading':
        var $receiver_0_0 = new RDOMBuilder_init(h1$lambda_5('pageTitle'));
        $receiver_0_0.unaryPlus_pdl1vz$('\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...');
        this.checkNotification_0();
        $receiver_0.child_2usv9w$($receiver_0_0.create());
        break;
      case 'ThereIsNotRequest':
        var $receiver_0_1 = new RDOMBuilder_init(p$lambda_3(null));
        var $receiver_0_2 = new RDOMBuilder_init(h1$lambda_5('pageTitle'));
        $receiver_0_2.unaryPlus_pdl1vz$('\u0417\u0434\u0435\u0441\u044C \u043F\u043E\u043A\u0430 \u043F\u0443\u0441\u0442\u043E');
        $receiver_0_1.child_2usv9w$($receiver_0_2.create());
        $receiver_0.child_2usv9w$($receiver_0_1.create());
        break;
      case 'ThereIsRequest':
        var $receiver_0_3 = new RDOMBuilder_init(div$lambda_6(null));
        var $receiver_0_4 = new RDOMBuilder_init(h1$lambda_5('pageTitle'));
        $receiver_0_4.unaryPlus_pdl1vz$('\u0414\u043B\u044F \u0432\u0430\u0441 \u0435\u0441\u0442\u044C \u0434\u0435\u043B\u043E \u2116 ' + this.state.notification.case_number);
        $receiver_0_3.child_2usv9w$($receiver_0_4.create());
        var $receiver_0_5 = new RDOMBuilder_init(h1$lambda_5('pageTitle'));
        $receiver_0_5.unaryPlus_pdl1vz$('\u041B\u043E\u0445: ' + this.state.notification.loh.fullname);
        $receiver_0_3.child_2usv9w$($receiver_0_5.create());
        var $receiver_0_6 = new RDOMBuilder_init(h1$lambda_5('pageTitle'));
        $receiver_0_6.unaryPlus_pdl1vz$('\u0410\u0434\u0440\u0435\u0441: ' + this.state.notification.loh.registrationAddress);
        $receiver_0_3.child_2usv9w$($receiver_0_6.create());
        var $receiver_0_7 = new RDOMBuilder_init(h1$lambda_5('pageTitle'));
        $receiver_0_7.unaryPlus_pdl1vz$('\u041F\u0430\u0441\u043F\u043E\u0440\u0442: ' + this.state.notification.loh.passportSerialNumber + ', \u0412\u044B\u0434\u0430\u043D ' + this.state.notification.loh.issued + ' ');
        $receiver_0_3.child_2usv9w$($receiver_0_7.create());
        var $receiver_0_8 = new RDOMBuilder_init(h1$lambda_5('pageTitle'));
        $receiver_0_8.unaryPlus_pdl1vz$('\u041A\u043E\u0434 \u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u044F: ' + this.state.notification.loh.subdivisionCode);
        $receiver_0_3.child_2usv9w$($receiver_0_8.create());
        var $receiver_0_9 = new RDOMBuilder_init(h1$lambda_5('pageTitle'));
        $receiver_0_9.unaryPlus_pdl1vz$('\u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C \u043F\u043E\u0434\u0431\u0440\u043E\u0441: ' + this.state.notification.drugName + ', ' + this.state.notification.drugMass + ' \u0433\u0440\u0430\u043C\u043C');
        $receiver_0_3.child_2usv9w$($receiver_0_9.create());
        var $receiver_0_10 = new RDOMBuilder_init(img$lambda(null, null, null));
        $receiver_0_10.attrs.src = 'https://people.kth.se/~hhofer/parade/images/team/person.png';
        $receiver_0_3.child_2usv9w$($receiver_0_10.create());
        $receiver_0.child_2usv9w$($receiver_0_3.create());
        break;
      default:Kotlin.noWhenBranchMatched();
        break;
    }
    var $receiver_0_11 = new RDOMBuilder_init(p$lambda_3(null));
    var $receiver_0_12 = new RDOMBuilder_init(button$lambda_4(null, null, null, 'App-buttons'));
    var $receiver_0_13 = new RDOMBuilder_init(span$lambda_4(null));
    $receiver_0_13.unaryPlus_pdl1vz$('\u041D\u0430\u0437\u0430\u0434');
    $receiver_0_12.child_2usv9w$($receiver_0_13.create());
    set_onClickFunction($receiver_0_12.attrs, MyNotificationComponent$render$lambda$lambda$lambda$lambda$lambda(this));
    $receiver_0_11.child_2usv9w$($receiver_0_12.create());
    $receiver_0.child_2usv9w$($receiver_0_11.create());
    $receiver.child_2usv9w$($receiver_0.create());
  };
  function MyNotificationComponent$checkNotification$lambda$lambda(closure$notificationInfo) {
    return function ($receiver) {
      $receiver.selected = IsNotification$ThereIsRequest_getInstance();
      $receiver.notification = closure$notificationInfo;
      return Unit;
    };
  }
  function MyNotificationComponent$checkNotification$lambda$lambda_0($receiver) {
    $receiver.selected = IsNotification$ThereIsNotRequest_getInstance();
    return Unit;
  }
  function Coroutine$MyNotificationComponent$checkNotification$lambda(closure$notificationService_0, closure$loginData_0, this$MyNotificationComponent_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 5;
    this.local$closure$notificationService = closure$notificationService_0;
    this.local$closure$loginData = closure$loginData_0;
    this.local$this$MyNotificationComponent = this$MyNotificationComponent_0;
  }
  Coroutine$MyNotificationComponent$checkNotification$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$MyNotificationComponent$checkNotification$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$MyNotificationComponent$checkNotification$lambda.prototype.constructor = Coroutine$MyNotificationComponent$checkNotification$lambda;
  Coroutine$MyNotificationComponent$checkNotification$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = this.local$closure$notificationService.checkNotifications_cc96oe$(this.local$closure$loginData, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            var notificationInfo = this.result_0;
            return setState(this.local$this$MyNotificationComponent, MyNotificationComponent$checkNotification$lambda$lambda(notificationInfo)), Unit;
          case 2:
            this.exceptionState_0 = 5;
            var e = this.exception_0;
            if (Kotlin.isType(e, StatusCodeException)) {
              return setState(this.local$this$MyNotificationComponent, MyNotificationComponent$checkNotification$lambda$lambda_0), Unit;
            } else {
              throw e;
            }

          case 3:
            this.state_0 = 4;
            continue;
          case 4:
            return;
          case 5:
            throw this.exception_0;
          default:this.state_0 = 5;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 5) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function MyNotificationComponent$checkNotification$lambda(closure$notificationService_0, closure$loginData_0, this$MyNotificationComponent_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$MyNotificationComponent$checkNotification$lambda(closure$notificationService_0, closure$loginData_0, this$MyNotificationComponent_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  MyNotificationComponent.prototype.checkNotification_0 = function () {
    var notificationService = new NotificationService(this.coroutineContext_0);
    var loginData = new LoginData(ensureNotNull(currentUser != null ? currentUser.username : null), ensureNotNull(currentUser != null ? currentUser.password : null));
    launch(this.props.coroutineScope, void 0, void 0, MyNotificationComponent$checkNotification$lambda(notificationService, loginData, this));
  };
  MyNotificationComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MyNotificationComponent',
    interfaces: [RComponent]
  };
  function h1$lambda_6(closure$classes) {
    return function (it) {
      return new H1_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function input$lambda_3(closure$type, closure$formEncType, closure$formMethod, closure$name, closure$classes) {
    return function (it) {
      return new INPUT_init(attributesMapOf_0(['type', closure$type != null ? enumEncode(closure$type) : null, 'formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'name', closure$name, 'class', closure$classes]), it);
    };
  }
  function p$lambda_4(closure$classes) {
    return function (it) {
      return new P_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function span$lambda_5(closure$classes) {
    return function (it) {
      return new SPAN_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function button$lambda_5(closure$formEncType, closure$formMethod, closure$type, closure$classes) {
    return function (it) {
      return new BUTTON_init(attributesMapOf_0(['formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'type', closure$type != null ? enumEncode(closure$type) : null, 'class', closure$classes]), it);
    };
  }
  function div$lambda_7(closure$classes) {
    return function (it) {
      return new DIV_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function registerComponent$lambda(closure$goHome, closure$goUser, closure$scope) {
    return function ($receiver) {
      $receiver.attrs.goHome = closure$goHome;
      $receiver.attrs.goUser = closure$goUser;
      $receiver.attrs.coroutineScope = closure$scope;
      return Unit;
    };
  }
  function registerComponent($receiver, goHome, goUser, scope) {
    return $receiver.child_bzgiuu$(getKClass(RegisterComponent), registerComponent$lambda(goHome, goUser, scope));
  }
  function RegisterPageState() {
  }
  RegisterPageState.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'RegisterPageState',
    interfaces: []
  };
  function RegisterComponent() {
    RComponent_init(this);
  }
  RegisterComponent.prototype.init_bc6fkx$ = function ($receiver) {
    $receiver.fullName = '';
    $receiver.organization = '';
    $receiver.certificateId = '';
    $receiver.personalId = '';
    $receiver.duty = '';
    $receiver.issued = '';
    $receiver.username = '';
    $receiver.password = '';
    $receiver.phone = '';
    $receiver.email = '';
    $receiver.errorMessage = '';
  };
  Object.defineProperty(RegisterComponent.prototype, 'coroutineContext_0', {
    get: function () {
      return this.props.coroutineScope.coroutineContext;
    }
  });
  function RegisterComponent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    $receiver.errorMessage = '';
    return Unit;
  }
  function RegisterComponent$render$lambda$lambda$lambda$lambda$lambda$lambda(this$RegisterComponent) {
    return function (it) {
      this$RegisterComponent.state.fullName = get_inputValue(it);
      setState(this$RegisterComponent, RegisterComponent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda);
      return Unit;
    };
  }
  function RegisterComponent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.errorMessage = '';
    return Unit;
  }
  function RegisterComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_0(this$RegisterComponent) {
    return function (it) {
      this$RegisterComponent.state.organization = get_inputValue(it);
      setState(this$RegisterComponent, RegisterComponent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0);
      return Unit;
    };
  }
  function RegisterComponent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.errorMessage = '';
    return Unit;
  }
  function RegisterComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_1(this$RegisterComponent) {
    return function (it) {
      this$RegisterComponent.state.certificateId = get_inputValue(it);
      setState(this$RegisterComponent, RegisterComponent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1);
      return Unit;
    };
  }
  function RegisterComponent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2($receiver) {
    $receiver.errorMessage = '';
    return Unit;
  }
  function RegisterComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_2(this$RegisterComponent) {
    return function (it) {
      this$RegisterComponent.state.personalId = get_inputValue(it);
      setState(this$RegisterComponent, RegisterComponent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2);
      return Unit;
    };
  }
  function RegisterComponent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3($receiver) {
    $receiver.errorMessage = '';
    return Unit;
  }
  function RegisterComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_3(this$RegisterComponent) {
    return function (it) {
      this$RegisterComponent.state.duty = get_inputValue(it);
      setState(this$RegisterComponent, RegisterComponent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3);
      return Unit;
    };
  }
  function RegisterComponent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4($receiver) {
    $receiver.errorMessage = '';
    return Unit;
  }
  function RegisterComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_4(this$RegisterComponent) {
    return function (it) {
      this$RegisterComponent.state.issued = get_inputValue(it);
      setState(this$RegisterComponent, RegisterComponent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4);
      return Unit;
    };
  }
  function RegisterComponent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5($receiver) {
    $receiver.errorMessage = '';
    return Unit;
  }
  function RegisterComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_5(this$RegisterComponent) {
    return function (it) {
      this$RegisterComponent.state.username = get_inputValue(it);
      setState(this$RegisterComponent, RegisterComponent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5);
      return Unit;
    };
  }
  function RegisterComponent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6($receiver) {
    $receiver.errorMessage = '';
    return Unit;
  }
  function RegisterComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_6(this$RegisterComponent) {
    return function (it) {
      this$RegisterComponent.state.password = get_inputValue(it);
      setState(this$RegisterComponent, RegisterComponent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6);
      return Unit;
    };
  }
  function RegisterComponent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_7($receiver) {
    $receiver.errorMessage = '';
    return Unit;
  }
  function RegisterComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_7(this$RegisterComponent) {
    return function (it) {
      this$RegisterComponent.state.phone = get_inputValue(it);
      setState(this$RegisterComponent, RegisterComponent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_7);
      return Unit;
    };
  }
  function RegisterComponent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_8($receiver) {
    $receiver.errorMessage = '';
    return Unit;
  }
  function RegisterComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_8(this$RegisterComponent) {
    return function (it) {
      this$RegisterComponent.state.email = get_inputValue(it);
      setState(this$RegisterComponent, RegisterComponent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_8);
      return Unit;
    };
  }
  function RegisterComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_9(this$RegisterComponent) {
    return function (it) {
      it.preventDefault();
      this$RegisterComponent.doRegister_0();
      return Unit;
    };
  }
  function RegisterComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_10(this$RegisterComponent) {
    return function (it) {
      this$RegisterComponent.props.goHome();
      return Unit;
    };
  }
  RegisterComponent.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = new RDOMBuilder_init(div$lambda_7(null));
    var $receiver_0_0 = new RDOMBuilder_init(h1$lambda_6('pageTitle'));
    $receiver_0_0.unaryPlus_pdl1vz$('\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F');
    $receiver_0.child_2usv9w$($receiver_0_0.create());
    $receiver.child_2usv9w$($receiver_0.create());
    var $receiver_0_1 = new RDOMBuilder_init(div$lambda_7('reg-box'));
    var $receiver_0_2 = new RDOMBuilder_init(div$lambda_7('reg-input-box'));
    var $receiver_0_3 = new RDOMBuilder_init(p$lambda_4(null));
    var $receiver_0_4 = new RDOMBuilder_init(input$lambda_3(InputType.text, null, null, 'fio', null));
    var $receiver_1 = $receiver_0_4.attrs;
    $receiver_1.placeholder = '\u0424\u0430\u043C\u0438\u043B\u0438\u044F \u0418\u043C\u044F \u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E';
    set_onChangeFunction($receiver_1, RegisterComponent$render$lambda$lambda$lambda$lambda$lambda$lambda(this));
    $receiver_0_3.child_2usv9w$($receiver_0_4.create());
    $receiver_0_2.child_2usv9w$($receiver_0_3.create());
    var $receiver_0_5 = new RDOMBuilder_init(p$lambda_4(null));
    var $receiver_0_6 = new RDOMBuilder_init(input$lambda_3(InputType.text, null, null, '\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438', null));
    var $receiver_2 = $receiver_0_6.attrs;
    $receiver_2.placeholder = '\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438';
    set_onChangeFunction($receiver_2, RegisterComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_0(this));
    $receiver_0_5.child_2usv9w$($receiver_0_6.create());
    $receiver_0_2.child_2usv9w$($receiver_0_5.create());
    var $receiver_0_7 = new RDOMBuilder_init(p$lambda_4(null));
    var $receiver_0_8 = new RDOMBuilder_init(input$lambda_3(InputType.text, null, null, '\u041D\u043E\u043C\u0435\u0440 \u0443\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u0435\u043D\u0438\u044F', null));
    var $receiver_3 = $receiver_0_8.attrs;
    $receiver_3.placeholder = '\u041D\u043E\u043C\u0435\u0440 \u0443\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u0435\u043D\u0438\u044F';
    set_onChangeFunction($receiver_3, RegisterComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_1(this));
    $receiver_0_7.child_2usv9w$($receiver_0_8.create());
    $receiver_0_2.child_2usv9w$($receiver_0_7.create());
    var $receiver_0_9 = new RDOMBuilder_init(p$lambda_4(null));
    var $receiver_0_10 = new RDOMBuilder_init(input$lambda_3(InputType.text, null, null, '\u041B\u0438\u0447\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440', null));
    var $receiver_4 = $receiver_0_10.attrs;
    $receiver_4.placeholder = '\u041B\u0438\u0447\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440';
    set_onChangeFunction($receiver_4, RegisterComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_2(this));
    $receiver_0_9.child_2usv9w$($receiver_0_10.create());
    $receiver_0_2.child_2usv9w$($receiver_0_9.create());
    var $receiver_0_11 = new RDOMBuilder_init(p$lambda_4(null));
    var $receiver_0_12 = new RDOMBuilder_init(input$lambda_3(InputType.text, null, null, '\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C', null));
    var $receiver_5 = $receiver_0_12.attrs;
    $receiver_5.placeholder = '\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C';
    set_onChangeFunction($receiver_5, RegisterComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_3(this));
    $receiver_0_11.child_2usv9w$($receiver_0_12.create());
    $receiver_0_2.child_2usv9w$($receiver_0_11.create());
    var $receiver_0_13 = new RDOMBuilder_init(p$lambda_4(null));
    var $receiver_0_14 = new RDOMBuilder_init(input$lambda_3(InputType.text, null, null, '\u0412\u044B\u0434\u0430\u043D\u043E', null));
    var $receiver_6 = $receiver_0_14.attrs;
    $receiver_6.placeholder = '\u0412\u044B\u0434\u0430\u043D\u043E';
    set_onChangeFunction($receiver_6, RegisterComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_4(this));
    $receiver_0_13.child_2usv9w$($receiver_0_14.create());
    $receiver_0_2.child_2usv9w$($receiver_0_13.create());
    $receiver_0_1.child_2usv9w$($receiver_0_2.create());
    var $receiver_0_15 = new RDOMBuilder_init(div$lambda_7('reg-input-box'));
    var $receiver_0_16 = new RDOMBuilder_init(p$lambda_4(null));
    var $receiver_0_17 = new RDOMBuilder_init(input$lambda_3(InputType.text, null, null, '\u041B\u043E\u0433\u0438\u043D', null));
    var $receiver_7 = $receiver_0_17.attrs;
    $receiver_7.placeholder = '\u041B\u043E\u0433\u0438\u043D';
    set_onChangeFunction($receiver_7, RegisterComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_5(this));
    $receiver_0_16.child_2usv9w$($receiver_0_17.create());
    $receiver_0_15.child_2usv9w$($receiver_0_16.create());
    var $receiver_0_18 = new RDOMBuilder_init(p$lambda_4(null));
    var $receiver_0_19 = new RDOMBuilder_init(input$lambda_3(InputType.password, null, null, '\u041F\u0430\u0440\u043E\u043B\u044C', null));
    var $receiver_8 = $receiver_0_19.attrs;
    $receiver_8.placeholder = '\u041F\u0430\u0440\u043E\u043B\u044C';
    set_onChangeFunction($receiver_8, RegisterComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_6(this));
    $receiver_0_18.child_2usv9w$($receiver_0_19.create());
    $receiver_0_15.child_2usv9w$($receiver_0_18.create());
    var $receiver_0_20 = new RDOMBuilder_init(p$lambda_4(null));
    var $receiver_0_21 = new RDOMBuilder_init(input$lambda_3(InputType.tel, null, null, '\u0422\u0435\u043B\u0435\u0444\u043E\u043D', null));
    var $receiver_9 = $receiver_0_21.attrs;
    $receiver_9.placeholder = '\u0422\u0435\u043B\u0435\u0444\u043E\u043D';
    set_onChangeFunction($receiver_9, RegisterComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_7(this));
    $receiver_0_20.child_2usv9w$($receiver_0_21.create());
    $receiver_0_15.child_2usv9w$($receiver_0_20.create());
    var $receiver_0_22 = new RDOMBuilder_init(p$lambda_4(null));
    var $receiver_0_23 = new RDOMBuilder_init(input$lambda_3(InputType.email, null, null, 'E-mail', null));
    var $receiver_10 = $receiver_0_23.attrs;
    $receiver_10.placeholder = 'E-mail';
    set_onChangeFunction($receiver_10, RegisterComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_8(this));
    $receiver_0_22.child_2usv9w$($receiver_0_23.create());
    $receiver_0_15.child_2usv9w$($receiver_0_22.create());
    var $receiver_0_24 = new RDOMBuilder_init(p$lambda_4(null));
    var $receiver_0_25 = new RDOMBuilder_init(button$lambda_5(null, null, null, 'App-buttons'));
    var $receiver_0_26 = new RDOMBuilder_init(span$lambda_5(null));
    $receiver_0_26.unaryPlus_pdl1vz$('\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F');
    $receiver_0_25.child_2usv9w$($receiver_0_26.create());
    set_onClickFunction($receiver_0_25.attrs, RegisterComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_9(this));
    $receiver_0_24.child_2usv9w$($receiver_0_25.create());
    $receiver_0_15.child_2usv9w$($receiver_0_24.create());
    var $receiver_0_27 = new RDOMBuilder_init(p$lambda_4(null));
    var $receiver_0_28 = new RDOMBuilder_init(button$lambda_5(null, null, null, 'App-buttons'));
    var $receiver_0_29 = new RDOMBuilder_init(span$lambda_5(null));
    $receiver_0_29.unaryPlus_pdl1vz$('\u041D\u0430\u0437\u0430\u0434');
    $receiver_0_28.child_2usv9w$($receiver_0_29.create());
    set_onClickFunction($receiver_0_28.attrs, RegisterComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_10(this));
    $receiver_0_27.child_2usv9w$($receiver_0_28.create());
    $receiver_0_15.child_2usv9w$($receiver_0_27.create());
    $receiver_0_1.child_2usv9w$($receiver_0_15.create());
    $receiver.child_2usv9w$($receiver_0_1.create());
    var $receiver_0_30 = new RDOMBuilder_init(div$lambda_7(null));
    var $receiver_0_31 = new RDOMBuilder_init(h1$lambda_6(null));
    $receiver_0_31.unaryPlus_pdl1vz$(this.state.errorMessage);
    $receiver_0_30.child_2usv9w$($receiver_0_31.create());
    $receiver.child_2usv9w$($receiver_0_30.create());
  };
  function RegisterComponent$doRegister$lambda$lambda($receiver) {
    $receiver.hint_kaetmg$(minLength($receiver, 8), '\u041B\u043E\u0433\u0438\u043D \u0434\u043E\u043B\u0436\u0435\u043D \u0441\u043E\u0441\u0442\u043E\u044F\u0442\u044C \u043A\u0430\u043A \u043C\u0438\u043D\u0438\u043C\u0443\u043C \u0438\u0437 8 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432');
    $receiver.hint_kaetmg$(maxLength($receiver, 50), '\u041B\u043E\u0433\u0438\u043D \u043D\u0435 \u0434\u043E\u043B\u0436\u0435\u043D \u043F\u0440\u0435\u0432\u044B\u0448\u0430\u0442\u044C 70 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432');
    return Unit;
  }
  function RegisterComponent$doRegister$lambda$lambda_0($receiver) {
    $receiver.hint_kaetmg$(minLength($receiver, 8), '\u041F\u0430\u0440\u043E\u043B\u044C \u0434\u043E\u043B\u0436\u0435\u043D \u0441\u043E\u0441\u0442\u043E\u044F\u0442\u044C \u043A\u0430\u043A \u043C\u0438\u043D\u0438\u043C\u0443\u043C \u0438\u0437 8 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432');
    $receiver.hint_kaetmg$(maxLength($receiver, 50), '\u041F\u0430\u0440\u043E\u043B\u044C \u043D\u0435 \u0434\u043E\u043B\u0436\u0435\u043D \u043F\u0440\u0435\u0432\u044B\u0448\u0430\u0442\u044C 70 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432');
    return Unit;
  }
  function RegisterComponent$doRegister$lambda$lambda_1($receiver) {
    $receiver.hint_kaetmg$(minLength($receiver, 1), '\u041F\u043E\u043B\u0435 "\u0424\u0418\u041E" \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u043C \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F');
    return Unit;
  }
  function RegisterComponent$doRegister$lambda$lambda_2($receiver) {
    $receiver.hint_kaetmg$(minLength($receiver, 1), '\u041F\u043E\u043B\u0435 "\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438" \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u043C \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F');
    return Unit;
  }
  function RegisterComponent$doRegister$lambda$lambda_3($receiver) {
    $receiver.hint_kaetmg$(minLength($receiver, 1), '\u041F\u043E\u043B\u0435 "\u041D\u043E\u043C\u0435\u0440 \u0443\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u0435\u043D\u0438\u044F" \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u043C \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F');
    return Unit;
  }
  function RegisterComponent$doRegister$lambda$lambda_4($receiver) {
    $receiver.hint_kaetmg$(minLength($receiver, 1), '\u041F\u043E\u043B\u0435 "\u041B\u0438\u0447\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440" \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u043C \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F');
    return Unit;
  }
  function RegisterComponent$doRegister$lambda$lambda_5($receiver) {
    $receiver.hint_kaetmg$(minLength($receiver, 1), '\u041F\u043E\u043B\u0435 "\u0412\u044B\u0434\u0430\u043D\u043E" \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u043C \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F');
    return Unit;
  }
  function RegisterComponent$doRegister$lambda$lambda_6($receiver) {
    $receiver.hint_kaetmg$(minLength($receiver, 1), '\u041F\u043E\u043B\u0435 "\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C" \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u043C \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F');
    return Unit;
  }
  function RegisterComponent$doRegister$lambda$lambda_7($receiver) {
    $receiver.hint_kaetmg$(pattern($receiver, '[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}'), '\u0412\u044B \u0432\u0432\u0435\u043B\u0438 \u043D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 e-mail');
    return Unit;
  }
  function RegisterComponent$doRegister$lambda$lambda_8($receiver) {
    $receiver.hint_kaetmg$(pattern($receiver, '\\+79[0-9]{9}'), '\u0422\u0435\u043B\u0435\u0444\u043E\u043D \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 +79xxxxxxxxx');
    return Unit;
  }
  function RegisterComponent$doRegister$lambda($receiver) {
    $receiver.invoke_wiumk0$(getPropertyCallableRef('username', 1, function ($receiver) {
      return $receiver.username;
    }, function ($receiver, value) {
      $receiver.username = value;
    }), RegisterComponent$doRegister$lambda$lambda);
    $receiver.invoke_wiumk0$(getPropertyCallableRef('password', 1, function ($receiver) {
      return $receiver.password;
    }, function ($receiver, value) {
      $receiver.password = value;
    }), RegisterComponent$doRegister$lambda$lambda_0);
    $receiver.invoke_wiumk0$(getPropertyCallableRef('full_name', 1, function ($receiver) {
      return $receiver.full_name;
    }, function ($receiver, value) {
      $receiver.full_name = value;
    }), RegisterComponent$doRegister$lambda$lambda_1);
    $receiver.invoke_wiumk0$(getPropertyCallableRef('organization', 1, function ($receiver) {
      return $receiver.organization;
    }, function ($receiver, value) {
      $receiver.organization = value;
    }), RegisterComponent$doRegister$lambda$lambda_2);
    $receiver.invoke_wiumk0$(getPropertyCallableRef('certificate_id', 1, function ($receiver) {
      return $receiver.certificate_id;
    }, function ($receiver, value) {
      $receiver.certificate_id = value;
    }), RegisterComponent$doRegister$lambda$lambda_3);
    $receiver.invoke_wiumk0$(getPropertyCallableRef('personal_id', 1, function ($receiver) {
      return $receiver.personal_id;
    }, function ($receiver, value) {
      $receiver.personal_id = value;
    }), RegisterComponent$doRegister$lambda$lambda_4);
    $receiver.invoke_wiumk0$(getPropertyCallableRef('issued', 1, function ($receiver) {
      return $receiver.issued;
    }, function ($receiver, value) {
      $receiver.issued = value;
    }), RegisterComponent$doRegister$lambda$lambda_5);
    $receiver.invoke_wiumk0$(getPropertyCallableRef('duty', 1, function ($receiver) {
      return $receiver.duty;
    }, function ($receiver, value) {
      $receiver.duty = value;
    }), RegisterComponent$doRegister$lambda$lambda_6);
    $receiver.required_wiumk0$(getPropertyCallableRef('email', 1, function ($receiver) {
      return $receiver.email;
    }, function ($receiver, value) {
      $receiver.email = value;
    }), RegisterComponent$doRegister$lambda$lambda_7);
    $receiver.required_wiumk0$(getPropertyCallableRef('phone', 1, function ($receiver) {
      return $receiver.phone;
    }, function ($receiver, value) {
      $receiver.phone = value;
    }), RegisterComponent$doRegister$lambda$lambda_8);
    return Unit;
  }
  function RegisterComponent$doRegister$lambda$lambda_9($receiver) {
    $receiver.errorMessage = '\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0441 \u0442\u0430\u043A\u0438\u043C \u0438\u043C\u0435\u043D\u0435\u043C \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442';
    return Unit;
  }
  function Coroutine$RegisterComponent$doRegister$lambda(closure$registerService_0, closure$user_0, this$RegisterComponent_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$registerService = closure$registerService_0;
    this.local$closure$user = closure$user_0;
    this.local$this$RegisterComponent = this$RegisterComponent_0;
  }
  Coroutine$RegisterComponent$doRegister$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$RegisterComponent$doRegister$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$RegisterComponent$doRegister$lambda.prototype.constructor = Coroutine$RegisterComponent$doRegister$lambda;
  Coroutine$RegisterComponent$doRegister$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$registerService.register_y1t6kw$(this.local$closure$user, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var response = this.result_0;
            if (response) {
              logInUser(this.local$closure$user);
              return this.local$this$RegisterComponent.props.goUser(), Unit;
            } else {
              return setState(this.local$this$RegisterComponent, RegisterComponent$doRegister$lambda$lambda_9), Unit;
            }

          case 3:
            return;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function RegisterComponent$doRegister$lambda_0(closure$registerService_0, closure$user_0, this$RegisterComponent_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$RegisterComponent$doRegister$lambda(closure$registerService_0, closure$user_0, this$RegisterComponent_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function RegisterComponent$doRegister$lambda_1(closure$validationResult) {
    return function ($receiver) {
      $receiver.errorMessage = first(closure$validationResult.errors).message;
      return Unit;
    };
  }
  RegisterComponent.prototype.doRegister_0 = function () {
    var tmp$, tmp$_0, tmp$_1;
    var user = new User(this.state.username, this.state.password, this.state.fullName, this.state.organization, this.state.certificateId, this.state.personalId, this.state.issued, this.state.duty, this.state.phone, this.state.email, true);
    var validateUser = Validation.Companion.invoke_wvx9gu$(RegisterComponent$doRegister$lambda);
    var validationResult = validateUser.invoke_11rb$(user);
    tmp$_0 = (tmp$ = new Valid(user)) != null ? tmp$.equals(validationResult) : null;
    console.log(tmp$_0);
    console.log(validationResult);
    if ((tmp$_1 = new Valid(user)) != null ? tmp$_1.equals(validationResult) : null) {
      var registerService = new RegisterService(this.coroutineContext_0);
      launch(this.props.coroutineScope, void 0, void 0, RegisterComponent$doRegister$lambda_0(registerService, user, this));
    } else {
      setState(this, RegisterComponent$doRegister$lambda_1(validationResult));
    }
  };
  RegisterComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RegisterComponent',
    interfaces: [RComponent]
  };
  function span$lambda_6(closure$classes) {
    return function (it) {
      return new SPAN_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function button$lambda_6(closure$formEncType, closure$formMethod, closure$type, closure$classes) {
    return function (it) {
      return new BUTTON_init(attributesMapOf_0(['formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'type', closure$type != null ? enumEncode(closure$type) : null, 'class', closure$classes]), it);
    };
  }
  function h1$lambda_7(closure$classes) {
    return function (it) {
      return new H1_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function p$lambda_5(closure$classes) {
    return function (it) {
      return new P_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function div$lambda_8(closure$classes) {
    return function (it) {
      return new DIV_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function IsRequest(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function IsRequest_initFields() {
    IsRequest_initFields = function () {
    };
    IsRequest$ThereIsRequest_instance = new IsRequest('ThereIsRequest', 0);
    IsRequest$ThereIsNotRequest_instance = new IsRequest('ThereIsNotRequest', 1);
    IsRequest$Loading_instance = new IsRequest('Loading', 2);
  }
  var IsRequest$ThereIsRequest_instance;
  function IsRequest$ThereIsRequest_getInstance() {
    IsRequest_initFields();
    return IsRequest$ThereIsRequest_instance;
  }
  var IsRequest$ThereIsNotRequest_instance;
  function IsRequest$ThereIsNotRequest_getInstance() {
    IsRequest_initFields();
    return IsRequest$ThereIsNotRequest_instance;
  }
  var IsRequest$Loading_instance;
  function IsRequest$Loading_getInstance() {
    IsRequest_initFields();
    return IsRequest$Loading_instance;
  }
  IsRequest.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IsRequest',
    interfaces: [Enum]
  };
  function IsRequest$values() {
    return [IsRequest$ThereIsRequest_getInstance(), IsRequest$ThereIsNotRequest_getInstance(), IsRequest$Loading_getInstance()];
  }
  IsRequest.values = IsRequest$values;
  function IsRequest$valueOf(name) {
    switch (name) {
      case 'ThereIsRequest':
        return IsRequest$ThereIsRequest_getInstance();
      case 'ThereIsNotRequest':
        return IsRequest$ThereIsNotRequest_getInstance();
      case 'Loading':
        return IsRequest$Loading_getInstance();
      default:throwISE('No enum constant view.IsRequest.' + name);
    }
  }
  IsRequest.valueOf_61zpoe$ = IsRequest$valueOf;
  function requestComponent$lambda(closure$goUser, closure$scope) {
    return function ($receiver) {
      $receiver.attrs.goUser = closure$goUser;
      $receiver.attrs.coroutineScope = closure$scope;
      return Unit;
    };
  }
  function requestComponent($receiver, goUser, scope) {
    return $receiver.child_bzgiuu$(getKClass(RequestComponent), requestComponent$lambda(goUser, scope));
  }
  function RequestPageState() {
  }
  RequestPageState.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'RequestPageState',
    interfaces: []
  };
  function RequestComponent() {
    RComponent_init(this);
  }
  RequestComponent.prototype.init_bc6fkx$ = function ($receiver) {
    $receiver.message = '';
    $receiver.selected = IsRequest$Loading_getInstance();
  };
  function RequestComponent$render$lambda$lambda$lambda$lambda$lambda(this$RequestComponent) {
    return function (it) {
      this$RequestComponent.doRequest_0();
      return Unit;
    };
  }
  function RequestComponent$render$lambda$lambda$lambda$lambda$lambda_0(this$RequestComponent) {
    return function (it) {
      this$RequestComponent.props.goUser();
      return Unit;
    };
  }
  RequestComponent.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = new RDOMBuilder_init(div$lambda_8(null));
    switch (this.state.selected.name) {
      case 'Loading':
        var $receiver_0_0 = new RDOMBuilder_init(h1$lambda_7('pageTitle'));
        $receiver_0_0.unaryPlus_pdl1vz$('\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...');
        this.checkRequest_0();
        $receiver_0.child_2usv9w$($receiver_0_0.create());
        break;
      case 'ThereIsNotRequest':
        var $receiver_0_1 = new RDOMBuilder_init(p$lambda_5(null));
        var $receiver_0_2 = new RDOMBuilder_init(button$lambda_6(null, null, null, 'App-buttons'));
        var $receiver_0_3 = new RDOMBuilder_init(span$lambda_6(null));
        $receiver_0_3.unaryPlus_pdl1vz$('\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443');
        $receiver_0_2.child_2usv9w$($receiver_0_3.create());
        set_onClickFunction($receiver_0_2.attrs, RequestComponent$render$lambda$lambda$lambda$lambda$lambda(this));
        $receiver_0_1.child_2usv9w$($receiver_0_2.create());
        $receiver_0.child_2usv9w$($receiver_0_1.create());
        break;
      case 'ThereIsRequest':
        var $receiver_0_4 = new RDOMBuilder_init(h1$lambda_7('pageTitle'));
        $receiver_0_4.unaryPlus_pdl1vz$('\u0412\u0430\u0448\u0430 \u0437\u0430\u044F\u0432\u043A\u0430 \u043E\u0431\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0435\u0442\u0441\u044F');
        $receiver_0.child_2usv9w$($receiver_0_4.create());
        break;
      default:Kotlin.noWhenBranchMatched();
        break;
    }
    var $receiver_0_5 = new RDOMBuilder_init(p$lambda_5(null));
    var $receiver_0_6 = new RDOMBuilder_init(button$lambda_6(null, null, null, 'App-buttons'));
    var $receiver_0_7 = new RDOMBuilder_init(span$lambda_6(null));
    $receiver_0_7.unaryPlus_pdl1vz$('\u041D\u0430\u0437\u0430\u0434');
    $receiver_0_6.child_2usv9w$($receiver_0_7.create());
    set_onClickFunction($receiver_0_6.attrs, RequestComponent$render$lambda$lambda$lambda$lambda$lambda_0(this));
    $receiver_0_5.child_2usv9w$($receiver_0_6.create());
    $receiver_0.child_2usv9w$($receiver_0_5.create());
    $receiver.child_2usv9w$($receiver_0.create());
  };
  function RequestComponent$doRequest$lambda$lambda($receiver) {
    $receiver.selected = IsRequest$ThereIsRequest_getInstance();
    return Unit;
  }
  function RequestComponent$doRequest$lambda$lambda_0(closure$response) {
    return function ($receiver) {
      $receiver.message = closure$response;
      return Unit;
    };
  }
  function Coroutine$RequestComponent$doRequest$lambda(this$RequestComponent_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$RequestComponent = this$RequestComponent_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$RequestComponent$doRequest$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$RequestComponent$doRequest$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$RequestComponent$doRequest$lambda.prototype.constructor = Coroutine$RequestComponent$doRequest$lambda;
  Coroutine$RequestComponent$doRequest$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var loginData = new LoginData(ensureNotNull(currentUser != null ? currentUser.username : null), ensureNotNull(currentUser != null ? currentUser.password : null));
            var rankRequestService = new RankRequestService(this.local$$receiver.coroutineContext);
            this.state_0 = 2;
            this.result_0 = rankRequestService.sendRankRequest_cc96oe$(loginData, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var response = this.result_0;
            if (equals(response, 'YES')) {
              return setState(this.local$this$RequestComponent, RequestComponent$doRequest$lambda$lambda), Unit;
            } else {
              return setState(this.local$this$RequestComponent, RequestComponent$doRequest$lambda$lambda_0(response)), Unit;
            }

          case 3:
            return;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function RequestComponent$doRequest$lambda(this$RequestComponent_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$RequestComponent$doRequest$lambda(this$RequestComponent_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  RequestComponent.prototype.doRequest_0 = function () {
    launch(this.props.coroutineScope, void 0, void 0, RequestComponent$doRequest$lambda(this));
  };
  function RequestComponent$checkRequest$lambda$lambda($receiver) {
    $receiver.selected = IsRequest$ThereIsRequest_getInstance();
    return Unit;
  }
  function RequestComponent$checkRequest$lambda$lambda_0($receiver) {
    $receiver.selected = IsRequest$ThereIsNotRequest_getInstance();
    return Unit;
  }
  function Coroutine$RequestComponent$checkRequest$lambda(this$RequestComponent_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$RequestComponent = this$RequestComponent_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$RequestComponent$checkRequest$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$RequestComponent$checkRequest$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$RequestComponent$checkRequest$lambda.prototype.constructor = Coroutine$RequestComponent$checkRequest$lambda;
  Coroutine$RequestComponent$checkRequest$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var rankRequestService = new RankRequestService(this.local$$receiver.coroutineContext);
            var loginData = new LoginData(ensureNotNull(currentUser != null ? currentUser.username : null), ensureNotNull(currentUser != null ? currentUser.password : null));
            this.state_0 = 2;
            this.result_0 = rankRequestService.checkRankRequest_cc96oe$(loginData, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var response = this.result_0;
            if (equals(response, 'YES')) {
              return setState(this.local$this$RequestComponent, RequestComponent$checkRequest$lambda$lambda), Unit;
            } else {
              return setState(this.local$this$RequestComponent, RequestComponent$checkRequest$lambda$lambda_0), Unit;
            }

          case 3:
            return;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function RequestComponent$checkRequest$lambda(this$RequestComponent_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$RequestComponent$checkRequest$lambda(this$RequestComponent_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  RequestComponent.prototype.checkRequest_0 = function () {
    launch(this.props.coroutineScope, void 0, void 0, RequestComponent$checkRequest$lambda(this));
  };
  RequestComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RequestComponent',
    interfaces: [RComponent]
  };
  function span$lambda_7(closure$classes) {
    return function (it) {
      return new SPAN_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function button$lambda_7(closure$formEncType, closure$formMethod, closure$type, closure$classes) {
    return function (it) {
      return new BUTTON_init(attributesMapOf_0(['formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'type', closure$type != null ? enumEncode(closure$type) : null, 'class', closure$classes]), it);
    };
  }
  function h1$lambda_8(closure$classes) {
    return function (it) {
      return new H1_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function p$lambda_6(closure$classes) {
    return function (it) {
      return new P_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function div$lambda_9(closure$classes) {
    return function (it) {
      return new DIV_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function statsComponent$lambda(closure$goUser, closure$scope) {
    return function ($receiver) {
      $receiver.attrs.goUser = closure$goUser;
      $receiver.attrs.coroutineScope = closure$scope;
      return Unit;
    };
  }
  function statsComponent($receiver, goUser, scope) {
    return $receiver.child_bzgiuu$(getKClass(StatsComponent), statsComponent$lambda(goUser, scope));
  }
  function IsStats(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function IsStats_initFields() {
    IsStats_initFields = function () {
    };
    IsStats$StatsReady_instance = new IsStats('StatsReady', 0);
    IsStats$Loading_instance = new IsStats('Loading', 1);
  }
  var IsStats$StatsReady_instance;
  function IsStats$StatsReady_getInstance() {
    IsStats_initFields();
    return IsStats$StatsReady_instance;
  }
  var IsStats$Loading_instance;
  function IsStats$Loading_getInstance() {
    IsStats_initFields();
    return IsStats$Loading_instance;
  }
  IsStats.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IsStats',
    interfaces: [Enum]
  };
  function IsStats$values() {
    return [IsStats$StatsReady_getInstance(), IsStats$Loading_getInstance()];
  }
  IsStats.values = IsStats$values;
  function IsStats$valueOf(name) {
    switch (name) {
      case 'StatsReady':
        return IsStats$StatsReady_getInstance();
      case 'Loading':
        return IsStats$Loading_getInstance();
      default:throwISE('No enum constant view.IsStats.' + name);
    }
  }
  IsStats.valueOf_61zpoe$ = IsStats$valueOf;
  function StatsPageState() {
  }
  StatsPageState.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'StatsPageState',
    interfaces: []
  };
  function StatsComponent() {
    RComponent_init(this);
  }
  StatsComponent.prototype.init_bc6fkx$ = function ($receiver) {
    $receiver.selected = IsStats$Loading_getInstance();
  };
  function StatsComponent$render$lambda$lambda$lambda$lambda$lambda(this$StatsComponent) {
    return function (it) {
      this$StatsComponent.props.goUser();
      return Unit;
    };
  }
  StatsComponent.prototype.render_ss14n$ = function ($receiver) {
    switch (this.state.selected.name) {
      case 'Loading':
        var $receiver_0 = new RDOMBuilder_init(h1$lambda_8('pageTitle'));
        $receiver_0.unaryPlus_pdl1vz$('\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...');
        this.getStats_0();
        $receiver.child_2usv9w$($receiver_0.create());
        break;
      case 'StatsReady':
        var $receiver_0_0 = new RDOMBuilder_init(div$lambda_9(null));
        var tmp$;
        var $receiver_0_1 = new RDOMBuilder_init(h1$lambda_8('pageTitle'));
        $receiver_0_1.unaryPlus_pdl1vz$('\u041E\u0442\u043A\u0440\u044B\u0442\u044B\u0445 \u0434\u0435\u043B: ' + this.state.stat.openedCases);
        $receiver_0_0.child_2usv9w$($receiver_0_1.create());
        var $receiver_0_2 = new RDOMBuilder_init(h1$lambda_8('pageTitle'));
        $receiver_0_2.unaryPlus_pdl1vz$('\u0417\u0430\u043A\u0440\u044B\u0442\u044B\u0445 \u0434\u0435\u043B: ' + this.state.stat.closedCasses);
        $receiver_0_0.child_2usv9w$($receiver_0_2.create());
        var $receiver_0_3 = new RDOMBuilder_init(h1$lambda_8('pageTitle'));
        $receiver_0_3.unaryPlus_pdl1vz$('\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0445 \u043B\u043E\u0445\u043E\u0432: ' + this.state.stat.availableLohs);
        $receiver_0_0.child_2usv9w$($receiver_0_3.create());
        tmp$ = this.state.stat.drugs.iterator();
        while (tmp$.hasNext()) {
          var drug = tmp$.next();
          var $receiver_0_4 = new RDOMBuilder_init(h1$lambda_8('pageTitle'));
          $receiver_0_4.unaryPlus_pdl1vz$(drug.first + ': ' + drug.second + ' \u0433\u0440.');
          $receiver_0_0.child_2usv9w$($receiver_0_4.create());
        }

        var $receiver_0_5 = new RDOMBuilder_init(p$lambda_6(null));
        var $receiver_0_6 = new RDOMBuilder_init(button$lambda_7(null, null, null, 'App-buttons'));
        var $receiver_0_7 = new RDOMBuilder_init(span$lambda_7(null));
        $receiver_0_7.unaryPlus_pdl1vz$('\u041D\u0430\u0437\u0430\u0434');
        $receiver_0_6.child_2usv9w$($receiver_0_7.create());
        set_onClickFunction($receiver_0_6.attrs, StatsComponent$render$lambda$lambda$lambda$lambda$lambda(this));
        $receiver_0_5.child_2usv9w$($receiver_0_6.create());
        $receiver_0_0.child_2usv9w$($receiver_0_5.create());
        $receiver.child_2usv9w$($receiver_0_0.create());
        break;
      default:Kotlin.noWhenBranchMatched();
        break;
    }
  };
  function StatsComponent$getStats$lambda$lambda(closure$response) {
    return function ($receiver) {
      $receiver.selected = IsStats$StatsReady_getInstance();
      $receiver.stat = closure$response;
      return Unit;
    };
  }
  function Coroutine$StatsComponent$getStats$lambda(this$StatsComponent_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$StatsComponent = this$StatsComponent_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$StatsComponent$getStats$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$StatsComponent$getStats$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$StatsComponent$getStats$lambda.prototype.constructor = Coroutine$StatsComponent$getStats$lambda;
  Coroutine$StatsComponent$getStats$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var loginData = new LoginData(ensureNotNull(currentUser != null ? currentUser.username : null), ensureNotNull(currentUser != null ? currentUser.password : null));
            var statsService = new StatsService(this.local$$receiver.coroutineContext);
            this.state_0 = 2;
            this.result_0 = statsService.getStats_cc96oe$(loginData, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var response = this.result_0;
            return setState(this.local$this$StatsComponent, StatsComponent$getStats$lambda$lambda(response)), Unit;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function StatsComponent$getStats$lambda(this$StatsComponent_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$StatsComponent$getStats$lambda(this$StatsComponent_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  StatsComponent.prototype.getStats_0 = function () {
    launch(this.props.coroutineScope, void 0, void 0, StatsComponent$getStats$lambda(this));
  };
  StatsComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StatsComponent',
    interfaces: [RComponent]
  };
  function span$lambda_8(closure$classes) {
    return function (it) {
      return new SPAN_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function button$lambda_8(closure$formEncType, closure$formMethod, closure$type, closure$classes) {
    return function (it) {
      return new BUTTON_init(attributesMapOf_0(['formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'type', closure$type != null ? enumEncode(closure$type) : null, 'class', closure$classes]), it);
    };
  }
  function h1$lambda_9(closure$classes) {
    return function (it) {
      return new H1_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function p$lambda_7(closure$classes) {
    return function (it) {
      return new P_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function div$lambda_10(closure$classes) {
    return function (it) {
      return new DIV_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function userComponent$lambda(closure$goInputCaseInfo, closure$goHome, closure$goRequest, closure$goMyNotifications, closure$goStats, closure$goAddLoh, closure$goAddDrugs, closure$goChangeLohInfo) {
    return function ($receiver) {
      $receiver.attrs.goInputCaseInfo = closure$goInputCaseInfo;
      $receiver.attrs.goHome = closure$goHome;
      $receiver.attrs.goRequest = closure$goRequest;
      $receiver.attrs.goMyNotifications = closure$goMyNotifications;
      $receiver.attrs.goStats = closure$goStats;
      $receiver.attrs.goAddLoh = closure$goAddLoh;
      $receiver.attrs.goAddDrugs = closure$goAddDrugs;
      $receiver.attrs.goChangeLohInfo = closure$goChangeLohInfo;
      return Unit;
    };
  }
  function userComponent($receiver, goInputCaseInfo, goHome, goStats, goRequest, goMyNotifications, goAddLoh, goAddDrugs, goChangeLohInfo) {
    return $receiver.child_bzgiuu$(getKClass(UserComponent), userComponent$lambda(goInputCaseInfo, goHome, goRequest, goMyNotifications, goStats, goAddLoh, goAddDrugs, goChangeLohInfo));
  }
  function UserComponent() {
    RComponent_init(this);
  }
  function UserComponent$render$lambda$lambda$lambda$lambda$lambda$lambda(this$UserComponent) {
    return function (it) {
      this$UserComponent.props.goRequest();
      return Unit;
    };
  }
  function UserComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_0(this$UserComponent) {
    return function (it) {
      this$UserComponent.props.goStats();
      return Unit;
    };
  }
  function UserComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_1(this$UserComponent) {
    return function (it) {
      this$UserComponent.props.goMyNotifications();
      return Unit;
    };
  }
  function UserComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_2(this$UserComponent) {
    return function (it) {
      this$UserComponent.props.goInputCaseInfo();
      return Unit;
    };
  }
  function UserComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_3(this$UserComponent) {
    return function (it) {
      this$UserComponent.props.goAddLoh();
      return Unit;
    };
  }
  function UserComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_4(this$UserComponent) {
    return function (it) {
      this$UserComponent.props.goAddDrugs();
      return Unit;
    };
  }
  function UserComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_5(this$UserComponent) {
    return function (it) {
      this$UserComponent.props.goChangeLohInfo();
      return Unit;
    };
  }
  function UserComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_6(this$UserComponent) {
    return function (it) {
      it.preventDefault();
      logOutUser();
      this$UserComponent.props.goHome();
      return Unit;
    };
  }
  UserComponent.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = new RDOMBuilder_init(div$lambda_10(null));
    var $receiver_0_0 = new RDOMBuilder_init(div$lambda_10('user'));
    var $receiver_0_1 = new RDOMBuilder_init(h1$lambda_9('pageTitle'));
    $receiver_0_1.unaryPlus_pdl1vz$('\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C ');
    $receiver_0_0.child_2usv9w$($receiver_0_1.create());
    var $receiver_0_2 = new RDOMBuilder_init(h1$lambda_9('pageTitle'));
    $receiver_0_2.unaryPlus_pdl1vz$(ensureNotNull(currentUser != null ? currentUser.full_name : null));
    $receiver_0_0.child_2usv9w$($receiver_0_2.create());
    if (ensureNotNull(currentUser != null ? currentUser.isMajor : null)) {
      var $receiver_0_3 = new RDOMBuilder_init(p$lambda_7(null));
      var $receiver_0_4 = new RDOMBuilder_init(button$lambda_8(null, null, null, 'App-buttons'));
      var $receiver_0_5 = new RDOMBuilder_init(span$lambda_8(null));
      $receiver_0_5.unaryPlus_pdl1vz$('\u041F\u043E\u0434\u0430\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443');
      $receiver_0_4.child_2usv9w$($receiver_0_5.create());
      set_onClickFunction($receiver_0_4.attrs, UserComponent$render$lambda$lambda$lambda$lambda$lambda$lambda(this));
      $receiver_0_3.child_2usv9w$($receiver_0_4.create());
      $receiver_0_0.child_2usv9w$($receiver_0_3.create());
      var $receiver_0_6 = new RDOMBuilder_init(p$lambda_7(null));
      var $receiver_0_7 = new RDOMBuilder_init(button$lambda_8(null, null, null, 'App-buttons'));
      var $receiver_0_8 = new RDOMBuilder_init(span$lambda_8(null));
      $receiver_0_8.unaryPlus_pdl1vz$('C\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430');
      $receiver_0_7.child_2usv9w$($receiver_0_8.create());
      set_onClickFunction($receiver_0_7.attrs, UserComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_0(this));
      $receiver_0_6.child_2usv9w$($receiver_0_7.create());
      $receiver_0_0.child_2usv9w$($receiver_0_6.create());
    } else {
      var $receiver_0_9 = new RDOMBuilder_init(p$lambda_7(null));
      var $receiver_0_10 = new RDOMBuilder_init(button$lambda_8(null, null, null, 'App-buttons'));
      var $receiver_0_11 = new RDOMBuilder_init(span$lambda_8(null));
      $receiver_0_11.unaryPlus_pdl1vz$('\u041C\u043E\u0438 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F');
      $receiver_0_10.child_2usv9w$($receiver_0_11.create());
      set_onClickFunction($receiver_0_10.attrs, UserComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_1(this));
      $receiver_0_9.child_2usv9w$($receiver_0_10.create());
      $receiver_0_0.child_2usv9w$($receiver_0_9.create());
      var $receiver_0_12 = new RDOMBuilder_init(p$lambda_7(null));
      var $receiver_0_13 = new RDOMBuilder_init(button$lambda_8(null, null, null, 'App-buttons'));
      var $receiver_0_14 = new RDOMBuilder_init(span$lambda_8(null));
      $receiver_0_14.unaryPlus_pdl1vz$('\u0412\u043D\u0435\u0441\u0435\u043D\u0438\u0435 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u043E \u0437\u0430\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u0438');
      $receiver_0_13.child_2usv9w$($receiver_0_14.create());
      set_onClickFunction($receiver_0_13.attrs, UserComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_2(this));
      $receiver_0_12.child_2usv9w$($receiver_0_13.create());
      $receiver_0_0.child_2usv9w$($receiver_0_12.create());
      var $receiver_0_15 = new RDOMBuilder_init(p$lambda_7(null));
      var $receiver_0_16 = new RDOMBuilder_init(button$lambda_8(null, null, null, 'App-buttons'));
      var $receiver_0_17 = new RDOMBuilder_init(span$lambda_8(null));
      $receiver_0_17.unaryPlus_pdl1vz$('\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043B\u043E\u0445\u0430');
      $receiver_0_16.child_2usv9w$($receiver_0_17.create());
      set_onClickFunction($receiver_0_16.attrs, UserComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_3(this));
      $receiver_0_15.child_2usv9w$($receiver_0_16.create());
      $receiver_0_0.child_2usv9w$($receiver_0_15.create());
      var $receiver_0_18 = new RDOMBuilder_init(p$lambda_7(null));
      var $receiver_0_19 = new RDOMBuilder_init(button$lambda_8(null, null, null, 'App-buttons'));
      var $receiver_0_20 = new RDOMBuilder_init(span$lambda_8(null));
      $receiver_0_20.unaryPlus_pdl1vz$('\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u0430\u0440\u043A\u043E\u0442\u0443');
      $receiver_0_19.child_2usv9w$($receiver_0_20.create());
      set_onClickFunction($receiver_0_19.attrs, UserComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_4(this));
      $receiver_0_18.child_2usv9w$($receiver_0_19.create());
      $receiver_0_0.child_2usv9w$($receiver_0_18.create());
    }
    var $receiver_0_21 = new RDOMBuilder_init(p$lambda_7(null));
    var $receiver_0_22 = new RDOMBuilder_init(button$lambda_8(null, null, null, 'App-buttons'));
    var $receiver_0_23 = new RDOMBuilder_init(span$lambda_8(null));
    $receiver_0_23.unaryPlus_pdl1vz$('\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435 \u043E \u043B\u043E\u0445\u0435');
    $receiver_0_22.child_2usv9w$($receiver_0_23.create());
    set_onClickFunction($receiver_0_22.attrs, UserComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_5(this));
    $receiver_0_21.child_2usv9w$($receiver_0_22.create());
    $receiver_0_0.child_2usv9w$($receiver_0_21.create());
    var $receiver_0_24 = new RDOMBuilder_init(p$lambda_7(null));
    var $receiver_0_25 = new RDOMBuilder_init(button$lambda_8(null, null, null, 'App-buttons'));
    var $receiver_0_26 = new RDOMBuilder_init(span$lambda_8(null));
    $receiver_0_26.unaryPlus_pdl1vz$('\u0412\u044B\u0445\u043E\u0434');
    $receiver_0_25.child_2usv9w$($receiver_0_26.create());
    set_onClickFunction($receiver_0_25.attrs, UserComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_6(this));
    $receiver_0_24.child_2usv9w$($receiver_0_25.create());
    $receiver_0_0.child_2usv9w$($receiver_0_24.create());
    $receiver_0.child_2usv9w$($receiver_0_0.create());
    $receiver.child_2usv9w$($receiver_0.create());
  };
  UserComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UserComponent',
    interfaces: [RComponent]
  };
  function Views(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Views_initFields() {
    Views_initFields = function () {
    };
    Views$Loading_instance = new Views('Loading', 0);
    Views$Home_instance = new Views('Home', 1);
    Views$Register_instance = new Views('Register', 2);
    Views$Login_instance = new Views('Login', 3);
    Views$User_instance = new Views('User', 4);
    Views$InputCaseInfo_instance = new Views('InputCaseInfo', 5);
    Views$NotFound_instance = new Views('NotFound', 6);
    Views$Request_instance = new Views('Request', 7);
    Views$MyNotifications_instance = new Views('MyNotifications', 8);
    Views$Stats_instance = new Views('Stats', 9);
    Views$AddLoh_instance = new Views('AddLoh', 10);
    Views$AddDrugs_instance = new Views('AddDrugs', 11);
    Views$ChangeLohInfo_instance = new Views('ChangeLohInfo', 12);
  }
  var Views$Loading_instance;
  function Views$Loading_getInstance() {
    Views_initFields();
    return Views$Loading_instance;
  }
  var Views$Home_instance;
  function Views$Home_getInstance() {
    Views_initFields();
    return Views$Home_instance;
  }
  var Views$Register_instance;
  function Views$Register_getInstance() {
    Views_initFields();
    return Views$Register_instance;
  }
  var Views$Login_instance;
  function Views$Login_getInstance() {
    Views_initFields();
    return Views$Login_instance;
  }
  var Views$User_instance;
  function Views$User_getInstance() {
    Views_initFields();
    return Views$User_instance;
  }
  var Views$InputCaseInfo_instance;
  function Views$InputCaseInfo_getInstance() {
    Views_initFields();
    return Views$InputCaseInfo_instance;
  }
  var Views$NotFound_instance;
  function Views$NotFound_getInstance() {
    Views_initFields();
    return Views$NotFound_instance;
  }
  var Views$Request_instance;
  function Views$Request_getInstance() {
    Views_initFields();
    return Views$Request_instance;
  }
  var Views$MyNotifications_instance;
  function Views$MyNotifications_getInstance() {
    Views_initFields();
    return Views$MyNotifications_instance;
  }
  var Views$Stats_instance;
  function Views$Stats_getInstance() {
    Views_initFields();
    return Views$Stats_instance;
  }
  var Views$AddLoh_instance;
  function Views$AddLoh_getInstance() {
    Views_initFields();
    return Views$AddLoh_instance;
  }
  var Views$AddDrugs_instance;
  function Views$AddDrugs_getInstance() {
    Views_initFields();
    return Views$AddDrugs_instance;
  }
  var Views$ChangeLohInfo_instance;
  function Views$ChangeLohInfo_getInstance() {
    Views_initFields();
    return Views$ChangeLohInfo_instance;
  }
  Views.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Views',
    interfaces: [Enum]
  };
  function Views$values() {
    return [Views$Loading_getInstance(), Views$Home_getInstance(), Views$Register_getInstance(), Views$Login_getInstance(), Views$User_getInstance(), Views$InputCaseInfo_getInstance(), Views$NotFound_getInstance(), Views$Request_getInstance(), Views$MyNotifications_getInstance(), Views$Stats_getInstance(), Views$AddLoh_getInstance(), Views$AddDrugs_getInstance(), Views$ChangeLohInfo_getInstance()];
  }
  Views.values = Views$values;
  function Views$valueOf(name) {
    switch (name) {
      case 'Loading':
        return Views$Loading_getInstance();
      case 'Home':
        return Views$Home_getInstance();
      case 'Register':
        return Views$Register_getInstance();
      case 'Login':
        return Views$Login_getInstance();
      case 'User':
        return Views$User_getInstance();
      case 'InputCaseInfo':
        return Views$InputCaseInfo_getInstance();
      case 'NotFound':
        return Views$NotFound_getInstance();
      case 'Request':
        return Views$Request_getInstance();
      case 'MyNotifications':
        return Views$MyNotifications_getInstance();
      case 'Stats':
        return Views$Stats_getInstance();
      case 'AddLoh':
        return Views$AddLoh_getInstance();
      case 'AddDrugs':
        return Views$AddDrugs_getInstance();
      case 'ChangeLohInfo':
        return Views$ChangeLohInfo_getInstance();
      default:throwISE('No enum constant view.Views.' + name);
    }
  }
  Views.valueOf_61zpoe$ = Views$valueOf;
  function input$lambda_4(closure$type, closure$formEncType, closure$formMethod, closure$name, closure$classes) {
    return function (it) {
      return new INPUT_init(attributesMapOf_0(['type', closure$type != null ? enumEncode(closure$type) : null, 'formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'name', closure$name, 'class', closure$classes]), it);
    };
  }
  function span$lambda_9(closure$classes) {
    return function (it) {
      return new SPAN_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function button$lambda_9(closure$formEncType, closure$formMethod, closure$type, closure$classes) {
    return function (it) {
      return new BUTTON_init(attributesMapOf_0(['formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'type', closure$type != null ? enumEncode(closure$type) : null, 'class', closure$classes]), it);
    };
  }
  function h1$lambda_10(closure$classes) {
    return function (it) {
      return new H1_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function p$lambda_8(closure$classes) {
    return function (it) {
      return new P_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function div$lambda_11(closure$classes) {
    return function (it) {
      return new DIV_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function inputCaseInfoComponent$lambda(closure$goHome, closure$goUser, closure$scope) {
    return function ($receiver) {
      $receiver.attrs.goHome = closure$goHome;
      $receiver.attrs.goUser = closure$goUser;
      $receiver.attrs.coroutineScope = closure$scope;
      return Unit;
    };
  }
  function inputCaseInfoComponent($receiver, goHome, goUser, scope) {
    return $receiver.child_bzgiuu$(getKClass(InputCaseInfoComponent), inputCaseInfoComponent$lambda(goHome, goUser, scope));
  }
  function InputCaseInfoPageState() {
  }
  InputCaseInfoPageState.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'InputCaseInfoPageState',
    interfaces: []
  };
  function InputCaseInfoComponent() {
    RComponent_init(this);
  }
  InputCaseInfoComponent.prototype.init_bc6fkx$ = function ($receiver) {
    $receiver.caseNumber = '';
    $receiver.participant = '';
    $receiver.victim = '';
    $receiver.witness = '';
    $receiver.comment = '';
    $receiver.errorMessage = '';
  };
  Object.defineProperty(InputCaseInfoComponent.prototype, 'coroutineContext_0', {
    get: function () {
      return this.props.coroutineScope.coroutineContext;
    }
  });
  function InputCaseInfoComponent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    $receiver.errorMessage = '';
    return Unit;
  }
  function InputCaseInfoComponent$render$lambda$lambda$lambda$lambda$lambda$lambda(this$InputCaseInfoComponent) {
    return function (it) {
      this$InputCaseInfoComponent.state.caseNumber = get_inputValue(it);
      setState(this$InputCaseInfoComponent, InputCaseInfoComponent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda);
      return Unit;
    };
  }
  function InputCaseInfoComponent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.errorMessage = '';
    return Unit;
  }
  function InputCaseInfoComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_0(this$InputCaseInfoComponent) {
    return function (it) {
      this$InputCaseInfoComponent.state.participant = get_inputValue(it);
      setState(this$InputCaseInfoComponent, InputCaseInfoComponent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0);
      return Unit;
    };
  }
  function InputCaseInfoComponent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.errorMessage = '';
    return Unit;
  }
  function InputCaseInfoComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_1(this$InputCaseInfoComponent) {
    return function (it) {
      this$InputCaseInfoComponent.state.victim = get_inputValue(it);
      setState(this$InputCaseInfoComponent, InputCaseInfoComponent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1);
      return Unit;
    };
  }
  function InputCaseInfoComponent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2($receiver) {
    $receiver.errorMessage = '';
    return Unit;
  }
  function InputCaseInfoComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_2(this$InputCaseInfoComponent) {
    return function (it) {
      this$InputCaseInfoComponent.state.witness = get_inputValue(it);
      setState(this$InputCaseInfoComponent, InputCaseInfoComponent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2);
      return Unit;
    };
  }
  function InputCaseInfoComponent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3($receiver) {
    $receiver.errorMessage = '';
    return Unit;
  }
  function InputCaseInfoComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_3(this$InputCaseInfoComponent) {
    return function (it) {
      this$InputCaseInfoComponent.state.comment = get_inputValue(it);
      setState(this$InputCaseInfoComponent, InputCaseInfoComponent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3);
      return Unit;
    };
  }
  function InputCaseInfoComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_4(this$InputCaseInfoComponent) {
    return function (it) {
      it.preventDefault();
      this$InputCaseInfoComponent.sendReport_0();
      return Unit;
    };
  }
  function InputCaseInfoComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_5(this$InputCaseInfoComponent) {
    return function (it) {
      it.preventDefault();
      this$InputCaseInfoComponent.props.goUser();
      return Unit;
    };
  }
  InputCaseInfoComponent.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = new RDOMBuilder_init(div$lambda_11(null));
    var $receiver_0_0 = new RDOMBuilder_init(div$lambda_11(null));
    var $receiver_0_1 = new RDOMBuilder_init(h1$lambda_10('pageTitle'));
    $receiver_0_1.unaryPlus_pdl1vz$('\u0412\u043D\u0435\u0441\u0435\u043D\u0438\u0435 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u043E \u0437\u0430\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u0438');
    $receiver_0_0.child_2usv9w$($receiver_0_1.create());
    var $receiver_0_2 = new RDOMBuilder_init(p$lambda_8(null));
    var $receiver_0_3 = new RDOMBuilder_init(input$lambda_4(InputType.text, null, null, 'case_number', null));
    var $receiver_1 = $receiver_0_3.attrs;
    $receiver_1.placeholder = '\u041D\u043E\u043C\u0435\u0440 \u0434\u0435\u043B\u0430';
    set_onChangeFunction($receiver_1, InputCaseInfoComponent$render$lambda$lambda$lambda$lambda$lambda$lambda(this));
    $receiver_0_2.child_2usv9w$($receiver_0_3.create());
    $receiver_0_0.child_2usv9w$($receiver_0_2.create());
    var $receiver_0_4 = new RDOMBuilder_init(p$lambda_8(null));
    var $receiver_0_5 = new RDOMBuilder_init(input$lambda_4(InputType.text, null, null, '\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438', null));
    var $receiver_2 = $receiver_0_5.attrs;
    $receiver_2.placeholder = '\u0423\u0447\u0430\u0432\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0435 \u0432 \u0437\u0430\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u0438';
    set_onChangeFunction($receiver_2, InputCaseInfoComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_0(this));
    $receiver_0_4.child_2usv9w$($receiver_0_5.create());
    $receiver_0_0.child_2usv9w$($receiver_0_4.create());
    var $receiver_0_6 = new RDOMBuilder_init(p$lambda_8(null));
    var $receiver_0_7 = new RDOMBuilder_init(input$lambda_4(InputType.text, null, null, '\u041D\u043E\u043C\u0435\u0440 \u043F\u0430\u0441\u043F\u043E\u0440\u0442\u0430 \u041B\u041E\u0425\u0430', null));
    var $receiver_3 = $receiver_0_7.attrs;
    $receiver_3.placeholder = '\u041D\u043E\u043C\u0435\u0440 \u043F\u0430\u0441\u043F\u043E\u0440\u0442\u0430 \u041B\u041E\u0425\u0430';
    set_onChangeFunction($receiver_3, InputCaseInfoComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_1(this));
    $receiver_0_6.child_2usv9w$($receiver_0_7.create());
    $receiver_0_0.child_2usv9w$($receiver_0_6.create());
    var $receiver_0_8 = new RDOMBuilder_init(p$lambda_8(null));
    var $receiver_0_9 = new RDOMBuilder_init(input$lambda_4(InputType.text, null, null, '\u0421\u0432\u0438\u0434\u0435\u0442\u0435\u043B\u044C', null));
    var $receiver_4 = $receiver_0_9.attrs;
    $receiver_4.placeholder = '\u0421\u0432\u0438\u0434\u0435\u0442\u0435\u043B\u044C';
    set_onChangeFunction($receiver_4, InputCaseInfoComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_2(this));
    $receiver_0_8.child_2usv9w$($receiver_0_9.create());
    $receiver_0_0.child_2usv9w$($receiver_0_8.create());
    var $receiver_0_10 = new RDOMBuilder_init(p$lambda_8(null));
    var $receiver_0_11 = new RDOMBuilder_init(input$lambda_4(InputType.text, null, null, '\u041E\u0431\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430 \u0437\u0430\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u044F', null));
    var $receiver_5 = $receiver_0_11.attrs;
    $receiver_5.placeholder = '\u041E\u0431\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430 \u0437\u0430\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u044F';
    set_onChangeFunction($receiver_5, InputCaseInfoComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_3(this));
    $receiver_0_10.child_2usv9w$($receiver_0_11.create());
    $receiver_0_0.child_2usv9w$($receiver_0_10.create());
    var $receiver_0_12 = new RDOMBuilder_init(p$lambda_8(null));
    var $receiver_0_13 = new RDOMBuilder_init(button$lambda_9(null, null, null, 'App-buttons'));
    var $receiver_0_14 = new RDOMBuilder_init(span$lambda_9(null));
    $receiver_0_14.unaryPlus_pdl1vz$('\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C');
    $receiver_0_13.child_2usv9w$($receiver_0_14.create());
    set_onClickFunction($receiver_0_13.attrs, InputCaseInfoComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_4(this));
    $receiver_0_12.child_2usv9w$($receiver_0_13.create());
    $receiver_0_0.child_2usv9w$($receiver_0_12.create());
    var $receiver_0_15 = new RDOMBuilder_init(p$lambda_8(null));
    var $receiver_0_16 = new RDOMBuilder_init(button$lambda_9(null, null, null, 'App-buttons'));
    var $receiver_0_17 = new RDOMBuilder_init(span$lambda_9(null));
    $receiver_0_17.unaryPlus_pdl1vz$('\u041D\u0430\u0437\u0430\u0434');
    $receiver_0_16.child_2usv9w$($receiver_0_17.create());
    set_onClickFunction($receiver_0_16.attrs, InputCaseInfoComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_5(this));
    $receiver_0_15.child_2usv9w$($receiver_0_16.create());
    $receiver_0_0.child_2usv9w$($receiver_0_15.create());
    var $receiver_0_18 = new RDOMBuilder_init(h1$lambda_10(null));
    $receiver_0_18.unaryPlus_pdl1vz$(this.state.errorMessage);
    $receiver_0_0.child_2usv9w$($receiver_0_18.create());
    $receiver_0.child_2usv9w$($receiver_0_0.create());
    $receiver.child_2usv9w$($receiver_0.create());
  };
  function InputCaseInfoComponent$sendReport$lambda$lambda($receiver) {
    $receiver.hint_kaetmg$(minLength($receiver, 1), '\u041F\u043E\u043B\u0435 "\u041D\u043E\u043C\u0435\u0440 \u0434\u0435\u043B\u0430" \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u043C \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F');
    return Unit;
  }
  function InputCaseInfoComponent$sendReport$lambda$lambda_0($receiver) {
    $receiver.hint_kaetmg$(minLength($receiver, 1), '\u041F\u043E\u043B\u0435 "\u0423\u0447\u0430\u0432\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0435 \u0432 \u0437\u0430\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u0438" \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u043C \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F');
    return Unit;
  }
  function InputCaseInfoComponent$sendReport$lambda$lambda_1($receiver) {
    $receiver.hint_kaetmg$(pattern($receiver, '\\d{10}'), '\u041D\u043E\u043C\u0435\u0440 \u043F\u0430\u0441\u043F\u043E\u0440\u0442\u0430 \u0434\u043E\u043B\u0436\u0435\u043D \u0441\u043E\u0441\u0442\u043E\u044F\u0442\u044C \u0440\u043E\u0432\u043D\u043E \u0438\u0437 10 \u0447\u0438\u0441\u0435\u043B');
    return Unit;
  }
  function InputCaseInfoComponent$sendReport$lambda($receiver) {
    $receiver.invoke_wiumk0$(getPropertyCallableRef('case_number', 1, function ($receiver) {
      return $receiver.case_number;
    }, function ($receiver, value) {
      $receiver.case_number = value;
    }), InputCaseInfoComponent$sendReport$lambda$lambda);
    $receiver.invoke_wiumk0$(getPropertyCallableRef('participants', 1, function ($receiver) {
      return $receiver.participants;
    }, function ($receiver, value) {
      $receiver.participants = value;
    }), InputCaseInfoComponent$sendReport$lambda$lambda_0);
    $receiver.required_wiumk0$(getPropertyCallableRef('victim', 1, function ($receiver) {
      return $receiver.victim;
    }, function ($receiver, value) {
      $receiver.victim = value;
    }), InputCaseInfoComponent$sendReport$lambda$lambda_1);
    return Unit;
  }
  function InputCaseInfoComponent$sendReport$lambda$lambda_2(closure$response) {
    return function ($receiver) {
      var tmp$;
      if (equals(closure$response, 'OK')) {
        tmp$ = '\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E \u043E \u0434\u0435\u043B\u0435 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0432\u043D\u0435\u0441\u0435\u043D\u0430';
      } else {
        tmp$ = '\u041B\u043E\u0445\u0430 \u0441 \u0442\u0430\u043A\u0438\u043C \u043D\u043E\u043C\u0435\u0440\u043E\u043C \u043F\u0430\u0441\u043F\u043E\u0440\u0442\u0430 \u043D\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442';
      }
      $receiver.errorMessage = tmp$;
      return Unit;
    };
  }
  function InputCaseInfoComponent$sendReport$lambda$lambda_3($receiver) {
    $receiver.errorMessage = '\u041D\u0435\u0432\u0435\u0440\u043D\u043E\u0435 \u0438\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0438\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C';
    return Unit;
  }
  function Coroutine$InputCaseInfoComponent$sendReport$lambda(closure$reportService_0, closure$report_0, this$InputCaseInfoComponent_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 5;
    this.local$closure$reportService = closure$reportService_0;
    this.local$closure$report = closure$report_0;
    this.local$this$InputCaseInfoComponent = this$InputCaseInfoComponent_0;
  }
  Coroutine$InputCaseInfoComponent$sendReport$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$InputCaseInfoComponent$sendReport$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$InputCaseInfoComponent$sendReport$lambda.prototype.constructor = Coroutine$InputCaseInfoComponent$sendReport$lambda;
  Coroutine$InputCaseInfoComponent$sendReport$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = this.local$closure$reportService.sendReport_ojjl1j$(this.local$closure$report, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            var response = this.result_0;
            return setState(this.local$this$InputCaseInfoComponent, InputCaseInfoComponent$sendReport$lambda$lambda_2(response)), Unit;
          case 2:
            this.exceptionState_0 = 5;
            var e = this.exception_0;
            if (Kotlin.isType(e, StatusCodeException)) {
              return setState(this.local$this$InputCaseInfoComponent, InputCaseInfoComponent$sendReport$lambda$lambda_3), Unit;
            } else {
              throw e;
            }

          case 3:
            this.state_0 = 4;
            continue;
          case 4:
            return;
          case 5:
            throw this.exception_0;
          default:this.state_0 = 5;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 5) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function InputCaseInfoComponent$sendReport$lambda_0(closure$reportService_0, closure$report_0, this$InputCaseInfoComponent_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$InputCaseInfoComponent$sendReport$lambda(closure$reportService_0, closure$report_0, this$InputCaseInfoComponent_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function InputCaseInfoComponent$sendReport$lambda_1(closure$validationResult) {
    return function ($receiver) {
      $receiver.errorMessage = first(closure$validationResult.errors).message;
      return Unit;
    };
  }
  InputCaseInfoComponent.prototype.sendReport_0 = function () {
    var tmp$, tmp$_0, tmp$_1;
    var report = new Report(ensureNotNull(currentUser != null ? currentUser.username : null), ensureNotNull(currentUser != null ? currentUser.password : null), this.state.caseNumber, this.state.participant, this.state.victim, this.state.witness, this.state.comment);
    var validateReport = Validation.Companion.invoke_wvx9gu$(InputCaseInfoComponent$sendReport$lambda);
    var validationResult = validateReport.invoke_11rb$(report);
    var reportService = new ReportService(this.coroutineContext_0);
    tmp$_0 = (tmp$ = new Valid(report)) != null ? tmp$.equals(validationResult) : null;
    console.log(tmp$_0);
    console.log(validationResult);
    if ((tmp$_1 = new Valid(report)) != null ? tmp$_1.equals(validationResult) : null) {
      launch(this.props.coroutineScope, void 0, void 0, InputCaseInfoComponent$sendReport$lambda_0(reportService, report, this));
    } else {
      setState(this, InputCaseInfoComponent$sendReport$lambda_1(validationResult));
    }
  };
  InputCaseInfoComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InputCaseInfoComponent',
    interfaces: [RComponent]
  };
  Object.defineProperty(Drug, 'Companion', {
    get: Drug$Companion_getInstance
  });
  Object.defineProperty(Drug, '$serializer', {
    get: Drug$$serializer_getInstance
  });
  var package$model = _.model || (_.model = {});
  package$model.Drug_init_2u6d5w$ = Drug_init;
  package$model.Drug = Drug;
  Object.defineProperty(LoginData, 'Companion', {
    get: LoginData$Companion_getInstance
  });
  Object.defineProperty(LoginData, '$serializer', {
    get: LoginData$$serializer_getInstance
  });
  package$model.LoginData_init_2u6d5w$ = LoginData_init;
  package$model.LoginData = LoginData;
  Object.defineProperty(Loh, 'Companion', {
    get: Loh$Companion_getInstance
  });
  Object.defineProperty(Loh, '$serializer', {
    get: Loh$$serializer_getInstance
  });
  package$model.Loh_init_ci9grf$ = Loh_init;
  package$model.Loh = Loh;
  Object.defineProperty(LohUpdate, 'Companion', {
    get: LohUpdate$Companion_getInstance
  });
  Object.defineProperty(LohUpdate, '$serializer', {
    get: LohUpdate$$serializer_getInstance
  });
  package$model.LohUpdate_init_7jl11e$ = LohUpdate_init;
  package$model.LohUpdate = LohUpdate;
  Object.defineProperty(Notification, 'Companion', {
    get: Notification$Companion_getInstance
  });
  Object.defineProperty(Notification, '$serializer', {
    get: Notification$$serializer_getInstance
  });
  package$model.Notification_init_wo298b$ = Notification_init;
  package$model.Notification = Notification;
  Object.defineProperty(Report, 'Companion', {
    get: Report$Companion_getInstance
  });
  Object.defineProperty(Report, '$serializer', {
    get: Report$$serializer_getInstance
  });
  package$model.Report_init_a1hnut$ = Report_init;
  package$model.Report = Report;
  Object.defineProperty(Stat, 'Companion', {
    get: Stat$Companion_getInstance
  });
  Object.defineProperty(Stat, '$serializer', {
    get: Stat$$serializer_getInstance
  });
  package$model.Stat_init_cw9dc3$ = Stat_init;
  package$model.Stat = Stat;
  Object.defineProperty(User, 'Companion', {
    get: User$Companion_getInstance
  });
  Object.defineProperty(User, '$serializer', {
    get: User$$serializer_getInstance
  });
  package$model.User_init_1t7m3j$ = User_init;
  package$model.User = User;
  Object.defineProperty(_, 'GlobalStyles', {
    get: GlobalStyles_getInstance
  });
  $$importsForInline$$['kotlin-react'] = $module$kotlin_react;
  _.main = main;
  package$model.renderAppBar_ss14n$ = renderAppBar;
  package$model.get_inputValue_fxsrhs$ = get_inputValue;
  var package$rpc = _.rpc || (_.rpc = {});
  package$rpc.StatusCodeException = StatusCodeException;
  package$rpc.Transport = Transport;
  var package$services = _.services || (_.services = {});
  package$services.AddDrugsService = AddDrugsService;
  package$services.AddLohService = AddLohService;
  package$services.ChangeLohInfoService = ChangeLohInfoService;
  package$services.LoginService = LoginService;
  package$services.NotificationService = NotificationService;
  package$services.RankRequestService = RankRequestService;
  package$services.RegisterService = RegisterService;
  package$services.ReportService = ReportService;
  package$services.StatsService = StatsService;
  var package$view = _.view || (_.view = {});
  package$view.addDrugsComponent_f51ssq$ = addDrugsComponent;
  package$view.AddDrugsPageState = AddDrugsPageState;
  $$importsForInline$$['kotlin-react-dom'] = $module$kotlin_react_dom;
  package$view.AddDrugsComponent = AddDrugsComponent;
  package$view.addLohComponent_f51ssq$ = addLohComponent;
  package$view.AddLohPageState = AddLohPageState;
  package$view.AddLohComponent = AddLohComponent;
  package$view.ApplicationPageState = ApplicationPageState;
  package$view.ApplicationProps = ApplicationProps;
  package$view.ApplicationComponent = ApplicationComponent;
  package$view.changeLohInfoComponent_f51ssq$ = changeLohInfoComponent;
  Object.defineProperty(IsLohExists, 'LohExists', {
    get: IsLohExists$LohExists_getInstance
  });
  Object.defineProperty(IsLohExists, 'LohDoesntExists', {
    get: IsLohExists$LohDoesntExists_getInstance
  });
  package$view.IsLohExists = IsLohExists;
  package$view.ChangeLohInfoPageState = ChangeLohInfoPageState;
  package$view.ChangeLohInfoComponent = ChangeLohInfoComponent;
  package$view.homeComponent_uj3g23$ = homeComponent;
  package$view.HomeComponent = HomeComponent;
  package$view.loginComponent_wx2li7$ = loginComponent;
  package$view.LoginPageState = LoginPageState;
  package$view.LoginComponent = LoginComponent;
  Object.defineProperty(package$view, 'currentUser_8be2vx$', {
    get: function () {
      return currentUser;
    },
    set: function (value) {
      currentUser = value;
    }
  });
  package$view.logInUser_inft65$ = logInUser;
  package$view.logOutUser_8be2vx$ = logOutUser;
  package$view.notFoundComponent_ss14n$ = notFoundComponent;
  package$view.NotFoundComponent = NotFoundComponent;
  Object.defineProperty(IsNotification, 'ThereIsRequest', {
    get: IsNotification$ThereIsRequest_getInstance
  });
  Object.defineProperty(IsNotification, 'ThereIsNotRequest', {
    get: IsNotification$ThereIsNotRequest_getInstance
  });
  Object.defineProperty(IsNotification, 'Loading', {
    get: IsNotification$Loading_getInstance
  });
  package$view.IsNotification = IsNotification;
  package$view.myNotificationComponent_f51ssq$ = myNotificationComponent;
  package$view.MyNotificationPageState = MyNotificationPageState;
  package$view.MyNotificationComponent = MyNotificationComponent;
  package$view.registerComponent_wx2li7$ = registerComponent;
  package$view.RegisterPageState = RegisterPageState;
  package$view.RegisterComponent = RegisterComponent;
  Object.defineProperty(IsRequest, 'ThereIsRequest', {
    get: IsRequest$ThereIsRequest_getInstance
  });
  Object.defineProperty(IsRequest, 'ThereIsNotRequest', {
    get: IsRequest$ThereIsNotRequest_getInstance
  });
  Object.defineProperty(IsRequest, 'Loading', {
    get: IsRequest$Loading_getInstance
  });
  package$view.IsRequest = IsRequest;
  package$view.requestComponent_f51ssq$ = requestComponent;
  package$view.RequestPageState = RequestPageState;
  package$view.RequestComponent = RequestComponent;
  package$view.statsComponent_f51ssq$ = statsComponent;
  Object.defineProperty(IsStats, 'StatsReady', {
    get: IsStats$StatsReady_getInstance
  });
  Object.defineProperty(IsStats, 'Loading', {
    get: IsStats$Loading_getInstance
  });
  package$view.IsStats = IsStats;
  package$view.StatsPageState = StatsPageState;
  package$view.StatsComponent = StatsComponent;
  package$view.userComponent_bfxegb$ = userComponent;
  package$view.UserComponent = UserComponent;
  Object.defineProperty(Views, 'Loading', {
    get: Views$Loading_getInstance
  });
  Object.defineProperty(Views, 'Home', {
    get: Views$Home_getInstance
  });
  Object.defineProperty(Views, 'Register', {
    get: Views$Register_getInstance
  });
  Object.defineProperty(Views, 'Login', {
    get: Views$Login_getInstance
  });
  Object.defineProperty(Views, 'User', {
    get: Views$User_getInstance
  });
  Object.defineProperty(Views, 'InputCaseInfo', {
    get: Views$InputCaseInfo_getInstance
  });
  Object.defineProperty(Views, 'NotFound', {
    get: Views$NotFound_getInstance
  });
  Object.defineProperty(Views, 'Request', {
    get: Views$Request_getInstance
  });
  Object.defineProperty(Views, 'MyNotifications', {
    get: Views$MyNotifications_getInstance
  });
  Object.defineProperty(Views, 'Stats', {
    get: Views$Stats_getInstance
  });
  Object.defineProperty(Views, 'AddLoh', {
    get: Views$AddLoh_getInstance
  });
  Object.defineProperty(Views, 'AddDrugs', {
    get: Views$AddDrugs_getInstance
  });
  Object.defineProperty(Views, 'ChangeLohInfo', {
    get: Views$ChangeLohInfo_getInstance
  });
  package$view.Views = Views;
  package$view.inputCaseInfoComponent_wx2li7$ = inputCaseInfoComponent;
  package$view.InputCaseInfoPageState = InputCaseInfoPageState;
  package$view.InputCaseInfoComponent = InputCaseInfoComponent;
  Drug$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  LoginData$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  Loh$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  LohUpdate$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  Notification$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  Report$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  Stat$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  User$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  currentUser = null;
  main();
  Kotlin.defineModule('BUTILKA', _);
  return _;
}(module.exports, require('kotlin'), require('kotlinx-serialization-kotlinx-serialization-runtime'), require('kotlin-css-js'), require('styled-components'), require('kotlin-styled'), require('kotlin-react'), require('react-dom'), require('kotlinx-coroutines-core'), require('muirwik-components'), require('kotlin-react-dom'), require('kotlinx-html-js'), require('konform')));

//# sourceMappingURL=BUTILKA.js.map
