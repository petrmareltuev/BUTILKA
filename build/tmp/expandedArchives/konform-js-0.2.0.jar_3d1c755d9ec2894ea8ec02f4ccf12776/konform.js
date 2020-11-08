(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'konform'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'konform'.");
    }root.konform = factory(typeof konform === 'undefined' ? {} : konform, kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var List = Kotlin.kotlin.collections.List;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var getCallableRef = Kotlin.getCallableRef;
  var joinToString = Kotlin.kotlin.collections.joinToString_cgipc5$;
  var KProperty1 = Kotlin.kotlin.reflect.KProperty1;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var throwCCE = Kotlin.throwCCE;
  var toList = Kotlin.kotlin.collections.toList_us0mfu$;
  var plus = Kotlin.kotlin.collections.plus_mydzjv$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var mapOf = Kotlin.kotlin.collections.mapOf_x2b85n$;
  var asSequence = Kotlin.kotlin.collections.asSequence_abgq59$;
  var toString = Kotlin.toString;
  var removePrefix = Kotlin.kotlin.text.removePrefix_gsj5wt$;
  var replace = Kotlin.kotlin.text.replace_680rmw$;
  var toList_0 = Kotlin.kotlin.collections.toList_abgq59$;
  var flatten = Kotlin.kotlin.collections.flatten_u0ad8z$;
  var checkIndexOverflow = Kotlin.kotlin.collections.checkIndexOverflow_za3lpa$;
  var mapCapacity = Kotlin.kotlin.collections.mapCapacity_za3lpa$;
  var LinkedHashMap_init_0 = Kotlin.kotlin.collections.LinkedHashMap_init_bwtc7$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var contains = Kotlin.kotlin.collections.contains_mjy6jw$;
  var equals = Kotlin.equals;
  var numberToDouble = Kotlin.numberToDouble;
  var roundToInt = Kotlin.kotlin.math.roundToInt_yrwdxr$;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  Invalid.prototype = Object.create(ValidationResult.prototype);
  Invalid.prototype.constructor = Invalid;
  Valid.prototype = Object.create(ValidationResult.prototype);
  Valid.prototype.constructor = Valid;
  ValidationBuilderImpl$Companion$PropModifier.prototype = Object.create(Enum.prototype);
  ValidationBuilderImpl$Companion$PropModifier.prototype.constructor = ValidationBuilderImpl$Companion$PropModifier;
  ValidationBuilderImpl$Companion$SingleValuePropKey.prototype = Object.create(ValidationBuilderImpl$Companion$PropKey.prototype);
  ValidationBuilderImpl$Companion$SingleValuePropKey.prototype.constructor = ValidationBuilderImpl$Companion$SingleValuePropKey;
  ValidationBuilderImpl$Companion$IterablePropKey.prototype = Object.create(ValidationBuilderImpl$Companion$PropKey.prototype);
  ValidationBuilderImpl$Companion$IterablePropKey.prototype.constructor = ValidationBuilderImpl$Companion$IterablePropKey;
  ValidationBuilderImpl$Companion$ArrayPropKey.prototype = Object.create(ValidationBuilderImpl$Companion$PropKey.prototype);
  ValidationBuilderImpl$Companion$ArrayPropKey.prototype.constructor = ValidationBuilderImpl$Companion$ArrayPropKey;
  ValidationBuilderImpl$Companion$MapPropKey.prototype = Object.create(ValidationBuilderImpl$Companion$PropKey.prototype);
  ValidationBuilderImpl$Companion$MapPropKey.prototype.constructor = ValidationBuilderImpl$Companion$MapPropKey;
  ValidationBuilderImpl.prototype = Object.create(ValidationBuilder.prototype);
  ValidationBuilderImpl.prototype.constructor = ValidationBuilderImpl;
  function Validation() {
    Validation$Companion_getInstance();
  }
  function Validation$Companion() {
    Validation$Companion_instance = this;
  }
  Validation$Companion.prototype.invoke_wvx9gu$ = function (init) {
    var builder = new ValidationBuilderImpl();
    init(builder);
    return builder.build();
  };
  Validation$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Validation$Companion_instance = null;
  function Validation$Companion_getInstance() {
    if (Validation$Companion_instance === null) {
      new Validation$Companion();
    }return Validation$Companion_instance;
  }
  Validation.prototype.invoke_11rb$ = function (value) {
    return this.validate_11rb$(value);
  };
  Validation.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Validation',
    interfaces: []
  };
  function Constraint(hint, templateValues, test) {
    this.hint = hint;
    this.templateValues = templateValues;
    this.test = test;
  }
  Constraint.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Constraint',
    interfaces: []
  };
  function ValidationBuilder() {
  }
  ValidationBuilder.prototype.onEach_hnip2v$ = function ($receiver, init) {
    this.onEachIterable_8l70jq$($receiver, init);
  };
  ValidationBuilder.prototype.onEach_86xjm6$ = function ($receiver, init) {
    this.onEachArray_i1s60f$($receiver, init);
  };
  ValidationBuilder.prototype.onEach_6b4gkg$ = function ($receiver, init) {
    this.onEachMap_tpto7x$($receiver, init);
  };
  ValidationBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ValidationBuilder',
    interfaces: []
  };
  function ValidationError() {
  }
  ValidationError.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ValidationError',
    interfaces: []
  };
  function PropertyValidationError(dataPath, message) {
    this.dataPath_jc0wy2$_0 = dataPath;
    this.message_w0rucs$_0 = message;
  }
  Object.defineProperty(PropertyValidationError.prototype, 'dataPath', {
    get: function () {
      return this.dataPath_jc0wy2$_0;
    }
  });
  Object.defineProperty(PropertyValidationError.prototype, 'message', {
    get: function () {
      return this.message_w0rucs$_0;
    }
  });
  PropertyValidationError.prototype.toString = function () {
    return 'ValidationError(dataPath=' + this.dataPath + ', message=' + this.message + ')';
  };
  PropertyValidationError.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PropertyValidationError',
    interfaces: [ValidationError]
  };
  PropertyValidationError.prototype.component1 = function () {
    return this.dataPath;
  };
  PropertyValidationError.prototype.component2 = function () {
    return this.message;
  };
  PropertyValidationError.prototype.copy_puj7f4$ = function (dataPath, message) {
    return new PropertyValidationError(dataPath === void 0 ? this.dataPath : dataPath, message === void 0 ? this.message : message);
  };
  PropertyValidationError.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.dataPath) | 0;
    result = result * 31 + Kotlin.hashCode(this.message) | 0;
    return result;
  };
  PropertyValidationError.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.dataPath, other.dataPath) && Kotlin.equals(this.message, other.message)))));
  };
  function ValidationErrors() {
  }
  ValidationErrors.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ValidationErrors',
    interfaces: [List]
  };
  function NoValidationErrors() {
    NoValidationErrors_instance = this;
    this.$delegate_a5eb2m$_0 = emptyList();
  }
  Object.defineProperty(NoValidationErrors.prototype, 'size', {
    get: function () {
      return this.$delegate_a5eb2m$_0.size;
    }
  });
  NoValidationErrors.prototype.contains_11rb$ = function (element) {
    return this.$delegate_a5eb2m$_0.contains_11rb$(element);
  };
  NoValidationErrors.prototype.containsAll_brywnq$ = function (elements) {
    return this.$delegate_a5eb2m$_0.containsAll_brywnq$(elements);
  };
  NoValidationErrors.prototype.get_za3lpa$ = function (index) {
    return this.$delegate_a5eb2m$_0.get_za3lpa$(index);
  };
  NoValidationErrors.prototype.indexOf_11rb$ = function (element) {
    return this.$delegate_a5eb2m$_0.indexOf_11rb$(element);
  };
  NoValidationErrors.prototype.isEmpty = function () {
    return this.$delegate_a5eb2m$_0.isEmpty();
  };
  NoValidationErrors.prototype.iterator = function () {
    return this.$delegate_a5eb2m$_0.iterator();
  };
  NoValidationErrors.prototype.lastIndexOf_11rb$ = function (element) {
    return this.$delegate_a5eb2m$_0.lastIndexOf_11rb$(element);
  };
  NoValidationErrors.prototype.listIterator = function () {
    return this.$delegate_a5eb2m$_0.listIterator();
  };
  NoValidationErrors.prototype.listIterator_za3lpa$ = function (index) {
    return this.$delegate_a5eb2m$_0.listIterator_za3lpa$(index);
  };
  NoValidationErrors.prototype.subList_vux9f0$ = function (fromIndex, toIndex) {
    return this.$delegate_a5eb2m$_0.subList_vux9f0$(fromIndex, toIndex);
  };
  NoValidationErrors.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'NoValidationErrors',
    interfaces: [ValidationErrors, List]
  };
  var NoValidationErrors_instance = null;
  function NoValidationErrors_getInstance() {
    if (NoValidationErrors_instance === null) {
      new NoValidationErrors();
    }return NoValidationErrors_instance;
  }
  function DefaultValidationErrors(errors) {
    this.errors_0 = errors;
  }
  DefaultValidationErrors.prototype.toString = function () {
    return this.errors_0.toString();
  };
  Object.defineProperty(DefaultValidationErrors.prototype, 'size', {
    get: function () {
      return this.errors_0.size;
    }
  });
  DefaultValidationErrors.prototype.contains_11rb$ = function (element) {
    return this.errors_0.contains_11rb$(element);
  };
  DefaultValidationErrors.prototype.containsAll_brywnq$ = function (elements) {
    return this.errors_0.containsAll_brywnq$(elements);
  };
  DefaultValidationErrors.prototype.get_za3lpa$ = function (index) {
    return this.errors_0.get_za3lpa$(index);
  };
  DefaultValidationErrors.prototype.indexOf_11rb$ = function (element) {
    return this.errors_0.indexOf_11rb$(element);
  };
  DefaultValidationErrors.prototype.isEmpty = function () {
    return this.errors_0.isEmpty();
  };
  DefaultValidationErrors.prototype.iterator = function () {
    return this.errors_0.iterator();
  };
  DefaultValidationErrors.prototype.lastIndexOf_11rb$ = function (element) {
    return this.errors_0.lastIndexOf_11rb$(element);
  };
  DefaultValidationErrors.prototype.listIterator = function () {
    return this.errors_0.listIterator();
  };
  DefaultValidationErrors.prototype.listIterator_za3lpa$ = function (index) {
    return this.errors_0.listIterator_za3lpa$(index);
  };
  DefaultValidationErrors.prototype.subList_vux9f0$ = function (fromIndex, toIndex) {
    return this.errors_0.subList_vux9f0$(fromIndex, toIndex);
  };
  DefaultValidationErrors.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DefaultValidationErrors',
    interfaces: [ValidationErrors, List]
  };
  function ValidationResult() {
  }
  ValidationResult.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ValidationResult',
    interfaces: []
  };
  function Invalid(internalErrors) {
    ValidationResult.call(this);
    this.internalErrors_8be2vx$ = internalErrors;
    this.errors_3b8j5h$_0 = lazy(Invalid$errors$lambda(this));
  }
  Invalid.prototype.get_jiburq$ = function (propertyPath) {
    return this.internalErrors_8be2vx$.get_11rb$(joinToString(propertyPath, '', void 0, void 0, void 0, void 0, getCallableRef('toPathSegment', function ($receiver, it) {
      return $receiver.toPathSegment_0(it);
    }.bind(null, this))));
  };
  Invalid.prototype.map_2o04qz$ = function (transform) {
    return new Invalid(this.internalErrors_8be2vx$);
  };
  Invalid.prototype.toPathSegment_0 = function (it) {
    var tmp$;
    if (Kotlin.isType(it, KProperty1))
      tmp$ = '.' + it.callableName;
    else if (typeof it === 'number')
      tmp$ = '[' + it.toString() + ']';
    else
      tmp$ = '.' + it.toString();
    return tmp$;
  };
  Object.defineProperty(Invalid.prototype, 'errors', {
    get: function () {
      return this.errors_3b8j5h$_0.value;
    }
  });
  Invalid.prototype.toString = function () {
    return 'Invalid(errors=' + this.errors + ')';
  };
  function Invalid$errors$lambda(this$Invalid) {
    return function () {
      var $receiver = this$Invalid.internalErrors_8be2vx$;
      var destination = ArrayList_init_0();
      var tmp$;
      tmp$ = $receiver.entries.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var path = element.key;
        var errors = element.value;
        var destination_0 = ArrayList_init(collectionSizeOrDefault(errors, 10));
        var tmp$_0;
        tmp$_0 = errors.iterator();
        while (tmp$_0.hasNext()) {
          var item = tmp$_0.next();
          destination_0.add_11rb$(new PropertyValidationError(path, item));
        }
        var list = destination_0;
        addAll(destination, list);
      }
      return new DefaultValidationErrors(destination);
    };
  }
  Invalid.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Invalid',
    interfaces: [ValidationResult]
  };
  Invalid.prototype.component1_8be2vx$ = function () {
    return this.internalErrors_8be2vx$;
  };
  Invalid.prototype.copy_atu3vi$ = function (internalErrors) {
    return new Invalid(internalErrors === void 0 ? this.internalErrors_8be2vx$ : internalErrors);
  };
  Invalid.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.internalErrors_8be2vx$) | 0;
    return result;
  };
  Invalid.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.internalErrors_8be2vx$, other.internalErrors_8be2vx$))));
  };
  function Valid(value) {
    ValidationResult.call(this);
    this.value = value;
  }
  Valid.prototype.get_jiburq$ = function (propertyPath) {
    return null;
  };
  Valid.prototype.map_2o04qz$ = function (transform) {
    return new Valid(transform(this.value));
  };
  Object.defineProperty(Valid.prototype, 'errors', {
    get: function () {
      return new DefaultValidationErrors(emptyList());
    }
  });
  Valid.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Valid',
    interfaces: [ValidationResult]
  };
  Valid.prototype.component1 = function () {
    return this.value;
  };
  Valid.prototype.copy_11rb$ = function (value) {
    return new Valid(value === void 0 ? this.value : value);
  };
  Valid.prototype.toString = function () {
    return 'Valid(value=' + Kotlin.toString(this.value) + ')';
  };
  Valid.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  Valid.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
  };
  function ValidationBuilderImpl() {
    ValidationBuilderImpl$Companion_getInstance();
    ValidationBuilder.call(this);
    this.constraints_0 = ArrayList_init_0();
    this.subValidations_0 = LinkedHashMap_init();
    this.prebuiltValidations_0 = ArrayList_init_0();
  }
  function ValidationBuilderImpl$Companion() {
    ValidationBuilderImpl$Companion_instance = this;
  }
  function ValidationBuilderImpl$Companion$PropModifier(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ValidationBuilderImpl$Companion$PropModifier_initFields() {
    ValidationBuilderImpl$Companion$PropModifier_initFields = function () {
    };
    ValidationBuilderImpl$Companion$PropModifier$NonNull_instance = new ValidationBuilderImpl$Companion$PropModifier('NonNull', 0);
    ValidationBuilderImpl$Companion$PropModifier$Optional_instance = new ValidationBuilderImpl$Companion$PropModifier('Optional', 1);
    ValidationBuilderImpl$Companion$PropModifier$OptionalRequired_instance = new ValidationBuilderImpl$Companion$PropModifier('OptionalRequired', 2);
  }
  var ValidationBuilderImpl$Companion$PropModifier$NonNull_instance;
  function ValidationBuilderImpl$Companion$PropModifier$NonNull_getInstance() {
    ValidationBuilderImpl$Companion$PropModifier_initFields();
    return ValidationBuilderImpl$Companion$PropModifier$NonNull_instance;
  }
  var ValidationBuilderImpl$Companion$PropModifier$Optional_instance;
  function ValidationBuilderImpl$Companion$PropModifier$Optional_getInstance() {
    ValidationBuilderImpl$Companion$PropModifier_initFields();
    return ValidationBuilderImpl$Companion$PropModifier$Optional_instance;
  }
  var ValidationBuilderImpl$Companion$PropModifier$OptionalRequired_instance;
  function ValidationBuilderImpl$Companion$PropModifier$OptionalRequired_getInstance() {
    ValidationBuilderImpl$Companion$PropModifier_initFields();
    return ValidationBuilderImpl$Companion$PropModifier$OptionalRequired_instance;
  }
  ValidationBuilderImpl$Companion$PropModifier.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PropModifier',
    interfaces: [Enum]
  };
  function ValidationBuilderImpl$Companion$PropModifier$values() {
    return [ValidationBuilderImpl$Companion$PropModifier$NonNull_getInstance(), ValidationBuilderImpl$Companion$PropModifier$Optional_getInstance(), ValidationBuilderImpl$Companion$PropModifier$OptionalRequired_getInstance()];
  }
  ValidationBuilderImpl$Companion$PropModifier.values = ValidationBuilderImpl$Companion$PropModifier$values;
  function ValidationBuilderImpl$Companion$PropModifier$valueOf(name) {
    switch (name) {
      case 'NonNull':
        return ValidationBuilderImpl$Companion$PropModifier$NonNull_getInstance();
      case 'Optional':
        return ValidationBuilderImpl$Companion$PropModifier$Optional_getInstance();
      case 'OptionalRequired':
        return ValidationBuilderImpl$Companion$PropModifier$OptionalRequired_getInstance();
      default:throwISE('No enum constant io.konform.validation.internal.ValidationBuilderImpl.Companion.PropModifier.' + name);
    }
  }
  ValidationBuilderImpl$Companion$PropModifier.valueOf_61zpoe$ = ValidationBuilderImpl$Companion$PropModifier$valueOf;
  function ValidationBuilderImpl$Companion$PropKey() {
  }
  ValidationBuilderImpl$Companion$PropKey.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PropKey',
    interfaces: []
  };
  function ValidationBuilderImpl$Companion$SingleValuePropKey(property, modifier) {
    ValidationBuilderImpl$Companion$PropKey.call(this);
    this.property = property;
    this.modifier = modifier;
  }
  ValidationBuilderImpl$Companion$SingleValuePropKey.prototype.build_f5scya$ = function (builder) {
    var tmp$, tmp$_0;
    var validations = (Kotlin.isType(tmp$ = builder, ValidationBuilderImpl) ? tmp$ : throwCCE()).build();
    switch (this.modifier.name) {
      case 'NonNull':
        tmp$_0 = new NonNullPropertyValidation(this.property, validations);
        break;
      case 'Optional':
        tmp$_0 = new OptionalPropertyValidation(this.property, validations);
        break;
      case 'OptionalRequired':
        tmp$_0 = new RequiredPropertyValidation(this.property, validations);
        break;
      default:tmp$_0 = Kotlin.noWhenBranchMatched();
        break;
    }
    return tmp$_0;
  };
  ValidationBuilderImpl$Companion$SingleValuePropKey.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SingleValuePropKey',
    interfaces: [ValidationBuilderImpl$Companion$PropKey]
  };
  ValidationBuilderImpl$Companion$SingleValuePropKey.prototype.component1 = function () {
    return this.property;
  };
  ValidationBuilderImpl$Companion$SingleValuePropKey.prototype.component2 = function () {
    return this.modifier;
  };
  ValidationBuilderImpl$Companion$SingleValuePropKey.prototype.copy_49olxr$ = function (property, modifier) {
    return new ValidationBuilderImpl$Companion$SingleValuePropKey(property === void 0 ? this.property : property, modifier === void 0 ? this.modifier : modifier);
  };
  ValidationBuilderImpl$Companion$SingleValuePropKey.prototype.toString = function () {
    return 'SingleValuePropKey(property=' + Kotlin.toString(this.property) + (', modifier=' + Kotlin.toString(this.modifier)) + ')';
  };
  ValidationBuilderImpl$Companion$SingleValuePropKey.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.property) | 0;
    result = result * 31 + Kotlin.hashCode(this.modifier) | 0;
    return result;
  };
  ValidationBuilderImpl$Companion$SingleValuePropKey.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.property, other.property) && Kotlin.equals(this.modifier, other.modifier)))));
  };
  function ValidationBuilderImpl$Companion$IterablePropKey(property, modifier) {
    ValidationBuilderImpl$Companion$PropKey.call(this);
    this.property = property;
    this.modifier = modifier;
  }
  ValidationBuilderImpl$Companion$IterablePropKey.prototype.build_f5scya$ = function (builder) {
    var tmp$, tmp$_0;
    var validations = (Kotlin.isType(tmp$ = builder, ValidationBuilderImpl) ? tmp$ : throwCCE()).build();
    switch (this.modifier.name) {
      case 'NonNull':
        tmp$_0 = new NonNullPropertyValidation(this.property, new IterableValidation(validations));
        break;
      case 'Optional':
        tmp$_0 = new OptionalPropertyValidation(this.property, new IterableValidation(validations));
        break;
      case 'OptionalRequired':
        tmp$_0 = new RequiredPropertyValidation(this.property, new IterableValidation(validations));
        break;
      default:tmp$_0 = Kotlin.noWhenBranchMatched();
        break;
    }
    return tmp$_0;
  };
  ValidationBuilderImpl$Companion$IterablePropKey.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IterablePropKey',
    interfaces: [ValidationBuilderImpl$Companion$PropKey]
  };
  ValidationBuilderImpl$Companion$IterablePropKey.prototype.component1 = function () {
    return this.property;
  };
  ValidationBuilderImpl$Companion$IterablePropKey.prototype.component2 = function () {
    return this.modifier;
  };
  ValidationBuilderImpl$Companion$IterablePropKey.prototype.copy_2zdekm$ = function (property, modifier) {
    return new ValidationBuilderImpl$Companion$IterablePropKey(property === void 0 ? this.property : property, modifier === void 0 ? this.modifier : modifier);
  };
  ValidationBuilderImpl$Companion$IterablePropKey.prototype.toString = function () {
    return 'IterablePropKey(property=' + Kotlin.toString(this.property) + (', modifier=' + Kotlin.toString(this.modifier)) + ')';
  };
  ValidationBuilderImpl$Companion$IterablePropKey.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.property) | 0;
    result = result * 31 + Kotlin.hashCode(this.modifier) | 0;
    return result;
  };
  ValidationBuilderImpl$Companion$IterablePropKey.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.property, other.property) && Kotlin.equals(this.modifier, other.modifier)))));
  };
  function ValidationBuilderImpl$Companion$ArrayPropKey(property, modifier) {
    ValidationBuilderImpl$Companion$PropKey.call(this);
    this.property = property;
    this.modifier = modifier;
  }
  ValidationBuilderImpl$Companion$ArrayPropKey.prototype.build_f5scya$ = function (builder) {
    var tmp$, tmp$_0;
    var validations = (Kotlin.isType(tmp$ = builder, ValidationBuilderImpl) ? tmp$ : throwCCE()).build();
    switch (this.modifier.name) {
      case 'NonNull':
        tmp$_0 = new NonNullPropertyValidation(this.property, new ArrayValidation(validations));
        break;
      case 'Optional':
        tmp$_0 = new OptionalPropertyValidation(this.property, new ArrayValidation(validations));
        break;
      case 'OptionalRequired':
        tmp$_0 = new RequiredPropertyValidation(this.property, new ArrayValidation(validations));
        break;
      default:tmp$_0 = Kotlin.noWhenBranchMatched();
        break;
    }
    return tmp$_0;
  };
  ValidationBuilderImpl$Companion$ArrayPropKey.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ArrayPropKey',
    interfaces: [ValidationBuilderImpl$Companion$PropKey]
  };
  ValidationBuilderImpl$Companion$ArrayPropKey.prototype.component1 = function () {
    return this.property;
  };
  ValidationBuilderImpl$Companion$ArrayPropKey.prototype.component2 = function () {
    return this.modifier;
  };
  ValidationBuilderImpl$Companion$ArrayPropKey.prototype.copy_txmx73$ = function (property, modifier) {
    return new ValidationBuilderImpl$Companion$ArrayPropKey(property === void 0 ? this.property : property, modifier === void 0 ? this.modifier : modifier);
  };
  ValidationBuilderImpl$Companion$ArrayPropKey.prototype.toString = function () {
    return 'ArrayPropKey(property=' + Kotlin.toString(this.property) + (', modifier=' + Kotlin.toString(this.modifier)) + ')';
  };
  ValidationBuilderImpl$Companion$ArrayPropKey.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.property) | 0;
    result = result * 31 + Kotlin.hashCode(this.modifier) | 0;
    return result;
  };
  ValidationBuilderImpl$Companion$ArrayPropKey.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.property, other.property) && Kotlin.equals(this.modifier, other.modifier)))));
  };
  function ValidationBuilderImpl$Companion$MapPropKey(property, modifier) {
    ValidationBuilderImpl$Companion$PropKey.call(this);
    this.property = property;
    this.modifier = modifier;
  }
  ValidationBuilderImpl$Companion$MapPropKey.prototype.build_f5scya$ = function (builder) {
    var tmp$, tmp$_0;
    var validations = (Kotlin.isType(tmp$ = builder, ValidationBuilderImpl) ? tmp$ : throwCCE()).build();
    switch (this.modifier.name) {
      case 'NonNull':
        tmp$_0 = new NonNullPropertyValidation(this.property, new MapValidation(validations));
        break;
      case 'Optional':
        tmp$_0 = new OptionalPropertyValidation(this.property, new MapValidation(validations));
        break;
      case 'OptionalRequired':
        tmp$_0 = new RequiredPropertyValidation(this.property, new MapValidation(validations));
        break;
      default:tmp$_0 = Kotlin.noWhenBranchMatched();
        break;
    }
    return tmp$_0;
  };
  ValidationBuilderImpl$Companion$MapPropKey.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MapPropKey',
    interfaces: [ValidationBuilderImpl$Companion$PropKey]
  };
  ValidationBuilderImpl$Companion$MapPropKey.prototype.component1 = function () {
    return this.property;
  };
  ValidationBuilderImpl$Companion$MapPropKey.prototype.component2 = function () {
    return this.modifier;
  };
  ValidationBuilderImpl$Companion$MapPropKey.prototype.copy_8y26n$ = function (property, modifier) {
    return new ValidationBuilderImpl$Companion$MapPropKey(property === void 0 ? this.property : property, modifier === void 0 ? this.modifier : modifier);
  };
  ValidationBuilderImpl$Companion$MapPropKey.prototype.toString = function () {
    return 'MapPropKey(property=' + Kotlin.toString(this.property) + (', modifier=' + Kotlin.toString(this.modifier)) + ')';
  };
  ValidationBuilderImpl$Companion$MapPropKey.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.property) | 0;
    result = result * 31 + Kotlin.hashCode(this.modifier) | 0;
    return result;
  };
  ValidationBuilderImpl$Companion$MapPropKey.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.property, other.property) && Kotlin.equals(this.modifier, other.modifier)))));
  };
  ValidationBuilderImpl$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ValidationBuilderImpl$Companion_instance = null;
  function ValidationBuilderImpl$Companion_getInstance() {
    if (ValidationBuilderImpl$Companion_instance === null) {
      new ValidationBuilderImpl$Companion();
    }return ValidationBuilderImpl$Companion_instance;
  }
  ValidationBuilderImpl.prototype.hint_kaetmg$ = function ($receiver, hint) {
    var $receiver_0 = new Constraint(hint, $receiver.templateValues, $receiver.test);
    this.constraints_0.remove_11rb$($receiver);
    this.constraints_0.add_11rb$($receiver_0);
    return $receiver_0;
  };
  ValidationBuilderImpl.prototype.addConstraint_ii9ac1$ = function (errorMessage, templateValues, test) {
    var $receiver = new Constraint(errorMessage, toList(templateValues), test);
    this.constraints_0.add_11rb$($receiver);
    return $receiver;
  };
  ValidationBuilderImpl.prototype.getOrCreateBuilder_0 = function ($receiver, modifier) {
    var tmp$;
    var key = new ValidationBuilderImpl$Companion$SingleValuePropKey($receiver, modifier);
    var $receiver_0 = this.subValidations_0;
    var tmp$_0;
    var value = $receiver_0.get_11rb$(key);
    if (value == null) {
      var answer = new ValidationBuilderImpl();
      $receiver_0.put_xwzc9p$(key, answer);
      tmp$_0 = answer;
    } else {
      tmp$_0 = value;
    }
    return Kotlin.isType(tmp$ = tmp$_0, ValidationBuilder) ? tmp$ : throwCCE();
  };
  ValidationBuilderImpl.prototype.getOrCreateIterablePropertyBuilder_0 = function ($receiver, modifier) {
    var tmp$;
    var key = new ValidationBuilderImpl$Companion$IterablePropKey($receiver, modifier);
    var $receiver_0 = this.subValidations_0;
    var tmp$_0;
    var value = $receiver_0.get_11rb$(key);
    if (value == null) {
      var answer = new ValidationBuilderImpl();
      $receiver_0.put_xwzc9p$(key, answer);
      tmp$_0 = answer;
    } else {
      tmp$_0 = value;
    }
    return Kotlin.isType(tmp$ = tmp$_0, ValidationBuilder) ? tmp$ : throwCCE();
  };
  ValidationBuilderImpl.prototype.getOrCreateBuilder_1 = function ($receiver) {
    var tmp$;
    var $receiver_0 = this.subValidations_0;
    var tmp$_0;
    var value = $receiver_0.get_11rb$($receiver);
    if (value == null) {
      var answer = new ValidationBuilderImpl();
      $receiver_0.put_xwzc9p$($receiver, answer);
      tmp$_0 = answer;
    } else {
      tmp$_0 = value;
    }
    return Kotlin.isType(tmp$ = tmp$_0, ValidationBuilder) ? tmp$ : throwCCE();
  };
  ValidationBuilderImpl.prototype.invoke_wiumk0$ = function ($receiver, init) {
    init(this.getOrCreateBuilder_0($receiver, ValidationBuilderImpl$Companion$PropModifier$NonNull_getInstance()));
  };
  ValidationBuilderImpl.prototype.onEachIterable_8l70jq$ = function (prop, init) {
    init(this.getOrCreateIterablePropertyBuilder_0(prop, ValidationBuilderImpl$Companion$PropModifier$NonNull_getInstance()));
  };
  ValidationBuilderImpl.prototype.onEachArray_i1s60f$ = function (prop, init) {
    init(this.getOrCreateBuilder_1(new ValidationBuilderImpl$Companion$ArrayPropKey(prop, ValidationBuilderImpl$Companion$PropModifier$NonNull_getInstance())));
  };
  ValidationBuilderImpl.prototype.onEachMap_tpto7x$ = function (prop, init) {
    init(this.getOrCreateBuilder_1(new ValidationBuilderImpl$Companion$MapPropKey(prop, ValidationBuilderImpl$Companion$PropModifier$NonNull_getInstance())));
  };
  ValidationBuilderImpl.prototype.ifPresent_wiumk0$ = function ($receiver, init) {
    init(this.getOrCreateBuilder_0($receiver, ValidationBuilderImpl$Companion$PropModifier$Optional_getInstance()));
  };
  ValidationBuilderImpl.prototype.required_wiumk0$ = function ($receiver, init) {
    init(this.getOrCreateBuilder_0($receiver, ValidationBuilderImpl$Companion$PropModifier$OptionalRequired_getInstance()));
  };
  ValidationBuilderImpl.prototype.get_has_f3sewu$ = function ($receiver) {
    return this.getOrCreateBuilder_0($receiver, ValidationBuilderImpl$Companion$PropModifier$NonNull_getInstance());
  };
  ValidationBuilderImpl.prototype.run_5rvp3n$ = function (validation) {
    this.prebuiltValidations_0.add_11rb$(validation);
  };
  ValidationBuilderImpl.prototype.build = function () {
    var $receiver = this.subValidations_0;
    var destination = ArrayList_init($receiver.size);
    var tmp$;
    tmp$ = $receiver.entries.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var key = item.key;
      var builder = item.value;
      tmp$_0.call(destination, key.build_f5scya$(builder));
    }
    var nestedValidations = destination;
    return new ValidationNode(this.constraints_0, plus(nestedValidations, this.prebuiltValidations_0));
  };
  ValidationBuilderImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ValidationBuilderImpl',
    interfaces: [ValidationBuilder]
  };
  function NonNullPropertyValidation(property, validation) {
    this.property_0 = property;
    this.validation_0 = validation;
  }
  function NonNullPropertyValidation$validate$lambda(this$NonNullPropertyValidation) {
    return function (it) {
      return '.' + this$NonNullPropertyValidation.property_0.callableName + it;
    };
  }
  function NonNullPropertyValidation$validate$lambda_0(closure$value) {
    return function (it) {
      return closure$value;
    };
  }
  NonNullPropertyValidation.prototype.validate_11rb$ = function (value) {
    var propertyValue = this.property_0(value);
    return mapError(this.validation_0.invoke_11rb$(propertyValue), NonNullPropertyValidation$validate$lambda(this)).map_2o04qz$(NonNullPropertyValidation$validate$lambda_0(value));
  };
  NonNullPropertyValidation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NonNullPropertyValidation',
    interfaces: [Validation]
  };
  function OptionalPropertyValidation(property, validation) {
    this.property_0 = property;
    this.validation_0 = validation;
  }
  function OptionalPropertyValidation$validate$lambda(this$OptionalPropertyValidation) {
    return function (it) {
      return '.' + this$OptionalPropertyValidation.property_0.callableName + it;
    };
  }
  function OptionalPropertyValidation$validate$lambda_0(closure$value) {
    return function (it) {
      return closure$value;
    };
  }
  OptionalPropertyValidation.prototype.validate_11rb$ = function (value) {
    var tmp$;
    tmp$ = this.property_0(value);
    if (tmp$ == null) {
      return new Valid(value);
    }var propertyValue = tmp$;
    return mapError(this.validation_0.invoke_11rb$(propertyValue), OptionalPropertyValidation$validate$lambda(this)).map_2o04qz$(OptionalPropertyValidation$validate$lambda_0(value));
  };
  OptionalPropertyValidation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OptionalPropertyValidation',
    interfaces: [Validation]
  };
  function RequiredPropertyValidation(property, validation) {
    this.property_0 = property;
    this.validation_0 = validation;
  }
  function RequiredPropertyValidation$validate$lambda(this$RequiredPropertyValidation) {
    return function (it) {
      return '.' + this$RequiredPropertyValidation.property_0.callableName + it;
    };
  }
  function RequiredPropertyValidation$validate$lambda_0(closure$value) {
    return function (it) {
      return closure$value;
    };
  }
  RequiredPropertyValidation.prototype.validate_11rb$ = function (value) {
    var tmp$;
    tmp$ = this.property_0(value);
    if (tmp$ == null) {
      return new Invalid(mapOf(to('.' + this.property_0.callableName, listOf('is required'))));
    }var propertyValue = tmp$;
    return mapError(this.validation_0.invoke_11rb$(propertyValue), RequiredPropertyValidation$validate$lambda(this)).map_2o04qz$(RequiredPropertyValidation$validate$lambda_0(value));
  };
  RequiredPropertyValidation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RequiredPropertyValidation',
    interfaces: [Validation]
  };
  function IterableValidation(validation) {
    this.validation_0 = validation;
  }
  function IterableValidation$validate$lambda$lambda(closure$index) {
    return function (it) {
      return '[' + closure$index + ']' + it;
    };
  }
  function IterableValidation$validate$lambda$lambda_0(closure$value) {
    return function (it) {
      return closure$value;
    };
  }
  IterableValidation.prototype.validate_11rb$ = function (value) {
    var tmp$, tmp$_0;
    var index = 0;
    var accumulator = new Valid(value);
    tmp$ = value.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var index_0 = checkIndexOverflow((tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0));
      var result = accumulator;
      var propertyValidation = mapError(this.validation_0.invoke_11rb$(element), IterableValidation$validate$lambda$lambda(index_0)).map_2o04qz$(IterableValidation$validate$lambda$lambda_0(value));
      accumulator = combineWith(result, propertyValidation);
    }
    return accumulator;
  };
  IterableValidation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IterableValidation',
    interfaces: [Validation]
  };
  function ArrayValidation(validation) {
    this.validation_0 = validation;
  }
  function ArrayValidation$validate$lambda$lambda(closure$index) {
    return function (it) {
      return '[' + closure$index + ']' + it;
    };
  }
  function ArrayValidation$validate$lambda$lambda_0(closure$value) {
    return function (it) {
      return closure$value;
    };
  }
  ArrayValidation.prototype.validate_11rb$ = function (value) {
    var tmp$, tmp$_0;
    var index = 0;
    var accumulator = new Valid(value);
    for (tmp$ = 0; tmp$ !== value.length; ++tmp$) {
      var element = value[tmp$];
      var index_0 = (tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0);
      var result = accumulator;
      var propertyValidation = mapError(this.validation_0.invoke_11rb$(element), ArrayValidation$validate$lambda$lambda(index_0)).map_2o04qz$(ArrayValidation$validate$lambda$lambda_0(value));
      accumulator = combineWith(result, propertyValidation);
    }
    return accumulator;
  };
  ArrayValidation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ArrayValidation',
    interfaces: [Validation]
  };
  function MapValidation(validation) {
    this.validation_0 = validation;
  }
  function MapValidation$validate$lambda$lambda(closure$entry) {
    return function (it) {
      return '.' + toString(closure$entry.key) + removePrefix(it, '.value');
    };
  }
  function MapValidation$validate$lambda$lambda_0(closure$value) {
    return function (it) {
      return closure$value;
    };
  }
  MapValidation.prototype.validate_11rb$ = function (value) {
    var $receiver = asSequence(value);
    var tmp$;
    var accumulator = new Valid(value);
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var result = accumulator;
      var propertyValidation = mapError(this.validation_0.invoke_11rb$(element), MapValidation$validate$lambda$lambda(element)).map_2o04qz$(MapValidation$validate$lambda$lambda_0(value));
      accumulator = combineWith(result, propertyValidation);
    }
    return accumulator;
  };
  MapValidation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MapValidation',
    interfaces: [Validation]
  };
  function ValidationNode(constraints, subValidations) {
    this.constraints_0 = constraints;
    this.subValidations_0 = subValidations;
  }
  function ValidationNode$validate$lambda(it) {
    return it;
  }
  ValidationNode.prototype.validate_11rb$ = function (value) {
    var subValidationResult = this.applySubValidations_0(value, ValidationNode$validate$lambda);
    var localValidationResult = this.localValidation_0(value);
    return combineWith(localValidationResult, subValidationResult);
  };
  ValidationNode.prototype.localValidation_0 = function (value) {
    var $receiver = this.constraints_0;
    var destination = ArrayList_init_0();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (!element.test(value))
        destination.add_11rb$(element);
    }
    var destination_0 = ArrayList_init(collectionSizeOrDefault(destination, 10));
    var tmp$_0;
    tmp$_0 = destination.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination_0.add_11rb$(this.constructHint_0(value, item));
    }
    var block$result;
    if (destination_0.isEmpty()) {
      block$result = new Valid(value);
    } else {
      block$result = new Invalid(mapOf(to('', destination_0)));
    }
    return block$result;
  };
  ValidationNode.prototype.constructHint_0 = function (value, it) {
    var replaceValue = replace(it.hint, '{value}', toString(value));
    var tmp$, tmp$_0;
    var index = 0;
    var accumulator = replaceValue;
    tmp$ = it.templateValues.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      accumulator = replace(accumulator, '{' + checkIndexOverflow((tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0)) + '}', element);
    }
    return accumulator;
  };
  ValidationNode.prototype.applySubValidations_0 = function (propertyValue, keyTransform) {
    var $receiver = this.subValidations_0;
    var tmp$;
    var accumulator = new Valid(propertyValue);
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var existingValidation = accumulator;
      var newValidation = mapError(element.validate_11rb$(propertyValue), keyTransform);
      accumulator = combineWith(existingValidation, newValidation);
    }
    return accumulator;
  };
  ValidationNode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ValidationNode',
    interfaces: [Validation]
  };
  function mapError($receiver, keyTransform) {
    var tmp$;
    if (Kotlin.isType($receiver, Valid))
      tmp$ = $receiver;
    else if (Kotlin.isType($receiver, Invalid)) {
      var $receiver_0 = $receiver.internalErrors_8be2vx$;
      var destination = LinkedHashMap_init_0(mapCapacity($receiver_0.size));
      var tmp$_0;
      tmp$_0 = $receiver_0.entries.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        var tmp$_1 = destination.put_xwzc9p$;
        var key = element.key;
        tmp$_1.call(destination, keyTransform(key), element.value);
      }
      tmp$ = new Invalid(destination);
    } else
      tmp$ = Kotlin.noWhenBranchMatched();
    return tmp$;
  }
  function combineWith($receiver, other) {
    var tmp$;
    if (Kotlin.isType($receiver, Valid))
      return other;
    else if (Kotlin.isType($receiver, Invalid)) {
      if (Kotlin.isType(other, Valid))
        tmp$ = $receiver;
      else if (Kotlin.isType(other, Invalid)) {
        var $receiver_0 = plus(toList_0($receiver.internalErrors_8be2vx$), toList_0(other.internalErrors_8be2vx$));
        var destination = LinkedHashMap_init();
        var tmp$_0;
        tmp$_0 = $receiver_0.iterator();
        while (tmp$_0.hasNext()) {
          var element = tmp$_0.next();
          var key = element.first;
          var tmp$_0_0;
          var value = destination.get_11rb$(key);
          if (value == null) {
            var answer = ArrayList_init_0();
            destination.put_xwzc9p$(key, answer);
            tmp$_0_0 = answer;
          } else {
            tmp$_0_0 = value;
          }
          var list = tmp$_0_0;
          list.add_11rb$(element.second);
        }
        var destination_0 = LinkedHashMap_init_0(mapCapacity(destination.size));
        var tmp$_1;
        tmp$_1 = destination.entries.iterator();
        while (tmp$_1.hasNext()) {
          var element_0 = tmp$_1.next();
          var tmp$_2 = destination_0.put_xwzc9p$;
          var tmp$_3 = element_0.key;
          var values = element_0.value;
          tmp$_2.call(destination_0, tmp$_3, flatten(values));
        }
        tmp$ = new Invalid(destination_0);
      } else
        tmp$ = Kotlin.noWhenBranchMatched();
    } else
      tmp$ = Kotlin.noWhenBranchMatched();
    return tmp$;
  }
  var type = defineInlineFunction('konform.io.konform.validation.jsonschema.type_mnbblu$', wrapFunction(function () {
    function type$lambda(typeClosure$T, isT) {
      return function (it) {
        return isT(it);
      };
    }
    return function (T_0, isT, $receiver) {
      return $receiver.addConstraint_ii9ac1$('must be of the correct type', [], type$lambda(T_0, isT));
    };
  }));
  function enum$lambda(closure$allowed) {
    return function (it) {
      return contains(closure$allowed, it);
    };
  }
  function enum_0($receiver, allowed) {
    return $receiver.addConstraint_ii9ac1$('must be one of: {0}', [joinToString(allowed, "', '", "'", "'")], enum$lambda(allowed));
  }
  var enum_1 = defineInlineFunction('konform.io.konform.validation.jsonschema.enum_taiyba$', wrapFunction(function () {
    var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
    var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
    function enum$lambda(closure$enumNames) {
      return function (it) {
        return closure$enumNames.contains_11rb$(it);
      };
    }
    return function (T_0, isT, $receiver) {
      var $receiver_0 = T_0.values();
      var destination = ArrayList_init($receiver_0.length);
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
        var item = $receiver_0[tmp$];
        destination.add_11rb$(item.name);
      }
      var enumNames = destination;
      return $receiver.addConstraint_ii9ac1$('must be one of: {0}', [joinToString(enumNames, "', '", "'", "'")], enum$lambda(enumNames));
    };
  }));
  function const$lambda(closure$expected) {
    return function (it) {
      return equals(closure$expected, it);
    };
  }
  function const_0($receiver, expected) {
    var tmp$;
    return $receiver.addConstraint_ii9ac1$('must be {0}', [(tmp$ = expected != null ? "'" + expected + "'" : null) != null ? tmp$ : 'null'], const$lambda(expected));
  }
  function multipleOf$lambda(closure$factorAsDouble) {
    return function (it) {
      var division = numberToDouble(it) / closure$factorAsDouble;
      return Kotlin.compareTo(division, roundToInt(division)) === 0;
    };
  }
  function multipleOf($receiver, factor) {
    var factorAsDouble = numberToDouble(factor);
    if (!(factorAsDouble > 0)) {
      var message = 'multipleOf requires the factor to be strictly larger than 0';
      throw IllegalArgumentException_init(message.toString());
    }return $receiver.addConstraint_ii9ac1$("must be a multiple of '{0}'", [factor.toString()], multipleOf$lambda(factorAsDouble));
  }
  function maximum$lambda(closure$maximumInclusive) {
    return function (it) {
      return numberToDouble(it) <= numberToDouble(closure$maximumInclusive);
    };
  }
  function maximum($receiver, maximumInclusive) {
    return $receiver.addConstraint_ii9ac1$("must be at most '{0}'", [maximumInclusive.toString()], maximum$lambda(maximumInclusive));
  }
  function exclusiveMaximum$lambda(closure$maximumExclusive) {
    return function (it) {
      return numberToDouble(it) < numberToDouble(closure$maximumExclusive);
    };
  }
  function exclusiveMaximum($receiver, maximumExclusive) {
    return $receiver.addConstraint_ii9ac1$("must be less than '{0}'", [maximumExclusive.toString()], exclusiveMaximum$lambda(maximumExclusive));
  }
  function minimum$lambda(closure$minimumInclusive) {
    return function (it) {
      return numberToDouble(it) >= numberToDouble(closure$minimumInclusive);
    };
  }
  function minimum($receiver, minimumInclusive) {
    return $receiver.addConstraint_ii9ac1$("must be at least '{0}'", [minimumInclusive.toString()], minimum$lambda(minimumInclusive));
  }
  function exclusiveMinimum$lambda(closure$minimumExclusive) {
    return function (it) {
      return numberToDouble(it) > numberToDouble(closure$minimumExclusive);
    };
  }
  function exclusiveMinimum($receiver, minimumExclusive) {
    return $receiver.addConstraint_ii9ac1$("must be greater than '{0}'", [minimumExclusive.toString()], exclusiveMinimum$lambda(minimumExclusive));
  }
  function minLength$lambda(closure$length) {
    return function (it) {
      return it.length >= closure$length;
    };
  }
  function minLength($receiver, length) {
    if (!(length >= 0)) {
      var message = IllegalArgumentException_init('minLength requires the length to be >= 0');
      throw IllegalArgumentException_init(message.toString());
    }return $receiver.addConstraint_ii9ac1$('must have at least {0} characters', [length.toString()], minLength$lambda(length));
  }
  function maxLength$lambda(closure$length) {
    return function (it) {
      return it.length <= closure$length;
    };
  }
  function maxLength($receiver, length) {
    if (!(length >= 0)) {
      var message = IllegalArgumentException_init('maxLength requires the length to be >= 0');
      throw IllegalArgumentException_init(message.toString());
    }return $receiver.addConstraint_ii9ac1$('must have at most {0} characters', [length.toString()], maxLength$lambda(length));
  }
  function pattern($receiver, pattern) {
    return pattern_0($receiver, Regex_init(pattern));
  }
  function pattern$lambda(closure$pattern) {
    return function (it) {
      return closure$pattern.matches_6bul2c$(it);
    };
  }
  function pattern_0($receiver, pattern) {
    return $receiver.addConstraint_ii9ac1$('must match the expected pattern', [pattern.toString()], pattern$lambda(pattern));
  }
  var minItems = defineInlineFunction('konform.io.konform.validation.jsonschema.minItems_8a52jo$', wrapFunction(function () {
    var count = Kotlin.kotlin.collections.count_7wnvza$;
    var Iterable = Kotlin.kotlin.collections.Iterable;
    var Map = Kotlin.kotlin.collections.Map;
    var getKClass = Kotlin.getKClass;
    var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
    function minItems$lambda(closure$minSize, typeClosure$T, isT) {
      return function (it) {
        if (Kotlin.isType(it, Iterable))
          return count(it) >= closure$minSize;
        else if (Kotlin.isArray(it)) {
          return it.length >= closure$minSize;
        } else if (Kotlin.isType(it, Map)) {
          return it.size >= closure$minSize;
        } else
          throw IllegalStateException_init('minItems can not be applied to type ' + getKClass(typeClosure$T));
      };
    }
    return function (T_0, isT, $receiver, minSize) {
      return $receiver.addConstraint_ii9ac1$('must have at least {0} items', [minSize.toString()], minItems$lambda(minSize, T_0, isT));
    };
  }));
  var maxItems = defineInlineFunction('konform.io.konform.validation.jsonschema.maxItems_8a52jo$', wrapFunction(function () {
    var count = Kotlin.kotlin.collections.count_7wnvza$;
    var Iterable = Kotlin.kotlin.collections.Iterable;
    var Map = Kotlin.kotlin.collections.Map;
    var getKClass = Kotlin.getKClass;
    var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
    function maxItems$lambda(closure$maxSize, typeClosure$T, isT) {
      return function (it) {
        if (Kotlin.isType(it, Iterable))
          return count(it) <= closure$maxSize;
        else if (Kotlin.isArray(it)) {
          return it.length <= closure$maxSize;
        } else if (Kotlin.isType(it, Map)) {
          return it.size <= closure$maxSize;
        } else
          throw IllegalStateException_init('maxItems can not be applied to type ' + getKClass(typeClosure$T));
      };
    }
    return function (T_0, isT, $receiver, maxSize) {
      return $receiver.addConstraint_ii9ac1$('must have at most {0} items', [maxSize.toString()], maxItems$lambda(maxSize, T_0, isT));
    };
  }));
  var minProperties = defineInlineFunction('konform.io.konform.validation.jsonschema.minProperties_vzqupu$', wrapFunction(function () {
    var count = Kotlin.kotlin.collections.count_7wnvza$;
    var Iterable = Kotlin.kotlin.collections.Iterable;
    var Map = Kotlin.kotlin.collections.Map;
    var getKClass = Kotlin.getKClass;
    var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
    function minItems$lambda(closure$minSize, typeClosure$T, isT) {
      return function (it) {
        if (Kotlin.isType(it, Iterable))
          return count(it) >= closure$minSize;
        else if (Kotlin.isArray(it)) {
          return it.length >= closure$minSize;
        } else if (Kotlin.isType(it, Map)) {
          return it.size >= closure$minSize;
        } else
          throw IllegalStateException_init('minItems can not be applied to type ' + getKClass(typeClosure$T));
      };
    }
    return function (T_0, isT, $receiver, minSize) {
      return $receiver.hint_kaetmg$($receiver.addConstraint_ii9ac1$('must have at least {0} items', [minSize.toString()], minItems$lambda(minSize, T_0, isT)), 'must have at least {0} properties');
    };
  }));
  var maxProperties = defineInlineFunction('konform.io.konform.validation.jsonschema.maxProperties_vzqupu$', wrapFunction(function () {
    var count = Kotlin.kotlin.collections.count_7wnvza$;
    var Iterable = Kotlin.kotlin.collections.Iterable;
    var Map = Kotlin.kotlin.collections.Map;
    var getKClass = Kotlin.getKClass;
    var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
    function maxItems$lambda(closure$maxSize, typeClosure$T, isT) {
      return function (it) {
        if (Kotlin.isType(it, Iterable))
          return count(it) <= closure$maxSize;
        else if (Kotlin.isArray(it)) {
          return it.length <= closure$maxSize;
        } else if (Kotlin.isType(it, Map)) {
          return it.size <= closure$maxSize;
        } else
          throw IllegalStateException_init('maxItems can not be applied to type ' + getKClass(typeClosure$T));
      };
    }
    return function (T_0, isT, $receiver, maxSize) {
      return $receiver.hint_kaetmg$($receiver.addConstraint_ii9ac1$('must have at most {0} items', [maxSize.toString()], maxItems$lambda(maxSize, T_0, isT)), 'must have at most {0} properties');
    };
  }));
  var uniqueItems = defineInlineFunction('konform.io.konform.validation.jsonschema.uniqueItems_axlt63$', wrapFunction(function () {
    var distinct = Kotlin.kotlin.collections.distinct_7wnvza$;
    var count = Kotlin.kotlin.collections.count_7wnvza$;
    var Iterable = Kotlin.kotlin.collections.Iterable;
    var distinct_0 = Kotlin.kotlin.collections.distinct_us0mfu$;
    var getKClass = Kotlin.getKClass;
    var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
    function uniqueItems$lambda(closure$unique, typeClosure$T, isT) {
      return function (it) {
        var tmp$;
        if (!!closure$unique) {
          if (Kotlin.isType(it, Iterable)) {
            tmp$ = distinct(it).size === count(it);
          } else if (Kotlin.isArray(it)) {
            tmp$ = distinct_0(it).size === it.length;
          } else
            throw IllegalStateException_init('uniqueItems can not be applied to type ' + getKClass(typeClosure$T));
        } else
          tmp$ = true;
        return tmp$;
      };
    }
    return function (T_0, isT, $receiver, unique) {
      return $receiver.addConstraint_ii9ac1$('all items must be unique', [], uniqueItems$lambda(unique, T_0, isT));
    };
  }));
  Object.defineProperty(Validation, 'Companion', {
    get: Validation$Companion_getInstance
  });
  var package$io = _.io || (_.io = {});
  var package$konform = package$io.konform || (package$io.konform = {});
  var package$validation = package$konform.validation || (package$konform.validation = {});
  package$validation.Validation = Validation;
  package$validation.Constraint = Constraint;
  package$validation.ValidationBuilder = ValidationBuilder;
  package$validation.ValidationError = ValidationError;
  package$validation.PropertyValidationError = PropertyValidationError;
  package$validation.ValidationErrors = ValidationErrors;
  Object.defineProperty(package$validation, 'NoValidationErrors', {
    get: NoValidationErrors_getInstance
  });
  package$validation.DefaultValidationErrors = DefaultValidationErrors;
  package$validation.ValidationResult = ValidationResult;
  package$validation.Invalid = Invalid;
  package$validation.Valid = Valid;
  Object.defineProperty(ValidationBuilderImpl, 'Companion', {
    get: ValidationBuilderImpl$Companion_getInstance
  });
  var package$internal = package$validation.internal || (package$validation.internal = {});
  package$internal.ValidationBuilderImpl = ValidationBuilderImpl;
  package$internal.NonNullPropertyValidation = NonNullPropertyValidation;
  package$internal.OptionalPropertyValidation = OptionalPropertyValidation;
  package$internal.RequiredPropertyValidation = RequiredPropertyValidation;
  package$internal.IterableValidation = IterableValidation;
  package$internal.ArrayValidation = ArrayValidation;
  package$internal.MapValidation = MapValidation;
  package$internal.ValidationNode = ValidationNode;
  package$internal.mapError_4jik33$ = mapError;
  package$internal.combineWith_lp9kao$ = combineWith;
  var package$jsonschema = package$validation.jsonschema || (package$validation.jsonschema = {});
  package$jsonschema.enum_62vbhl$ = enum_0;
  package$jsonschema.const_c88ssg$ = const_0;
  package$jsonschema.multipleOf_dbyrjc$ = multipleOf;
  package$jsonschema.maximum_dbyrjc$ = maximum;
  package$jsonschema.exclusiveMaximum_dbyrjc$ = exclusiveMaximum;
  package$jsonschema.minimum_dbyrjc$ = minimum;
  package$jsonschema.exclusiveMinimum_dbyrjc$ = exclusiveMinimum;
  package$jsonschema.minLength_uxc67q$ = minLength;
  package$jsonschema.maxLength_uxc67q$ = maxLength;
  package$jsonschema.pattern_shkzh2$ = pattern;
  package$jsonschema.pattern_k61ukr$ = pattern_0;
  $$importsForInline$$.konform = _;
  NonNullPropertyValidation.prototype.invoke_11rb$ = Validation.prototype.invoke_11rb$;
  OptionalPropertyValidation.prototype.invoke_11rb$ = Validation.prototype.invoke_11rb$;
  RequiredPropertyValidation.prototype.invoke_11rb$ = Validation.prototype.invoke_11rb$;
  IterableValidation.prototype.invoke_11rb$ = Validation.prototype.invoke_11rb$;
  ArrayValidation.prototype.invoke_11rb$ = Validation.prototype.invoke_11rb$;
  MapValidation.prototype.invoke_11rb$ = Validation.prototype.invoke_11rb$;
  ValidationNode.prototype.invoke_11rb$ = Validation.prototype.invoke_11rb$;
  Kotlin.defineModule('konform', _);
  return _;
}));

//# sourceMappingURL=konform.js.map
