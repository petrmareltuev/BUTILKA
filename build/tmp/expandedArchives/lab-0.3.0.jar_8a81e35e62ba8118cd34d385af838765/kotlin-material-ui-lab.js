(function (_, Kotlin, $module$kotlin_material_ui_core, $module$kotlin_react, $module$_material_ui_lab_Alert, $module$kotlinx_html_js, $module$_material_ui_lab_AlertTitle, $module$kotlin_extensions, $module$react) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var to = Kotlin.kotlin.to_ujzrz7$;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var getValue = $module$kotlin_material_ui_core.materialui.components.getValue_6kmcqp$;
  var setValue = $module$kotlin_material_ui_core.materialui.components.setValue_252222$;
  var PaperElementBuilder = $module$kotlin_material_ui_core.materialui.components.paper.PaperElementBuilder;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var RBuilder_init = $module$kotlin_react.react.RBuilder;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var toList = Kotlin.kotlin.collections.toList_us0mfu$;
  var DIV = $module$kotlinx_html_js.kotlinx.html.DIV;
  var emptyMap = Kotlin.kotlin.collections.emptyMap_q3lmfv$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var createElement = $module$react.createElement;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  AlertElementBuilder.prototype = Object.create(PaperElementBuilder.prototype);
  AlertElementBuilder.prototype.constructor = AlertElementBuilder;
  AlertColor.prototype = Object.create(Enum.prototype);
  AlertColor.prototype.constructor = AlertColor;
  AlertSeverity.prototype = Object.create(Enum.prototype);
  AlertSeverity.prototype.constructor = AlertSeverity;
  AlertStyle.prototype = Object.create(Enum.prototype);
  AlertStyle.prototype.constructor = AlertStyle;
  AlertVariant.prototype = Object.create(Enum.prototype);
  AlertVariant.prototype.constructor = AlertVariant;
  function AlertElementBuilder(type, classMap, factory) {
    PaperElementBuilder.call(this, type, classMap, factory);
    this.action_6s7ubj$_30lwgo$_0 = this.materialProps;
    this.closeText_6s7ubj$_rxpou3$_0 = this.materialProps;
    this.color_6s7ubj$_wdw3x9$_0 = this.materialProps;
    this.icon_6s7ubj$_psda6t$_0 = this.materialProps;
    this.iconMapping_6s7ubj$_bwuoyz$_0 = this.materialProps;
    this.onClose_6s7ubj$_15vp3t$_0 = this.materialProps;
    this.role_6s7ubj$_h1kcuw$_0 = this.materialProps;
    this.severity_6s7ubj$_xf7ei7$_0 = this.materialProps;
    this.variant_6s7ubj$_ggskqj$_0 = this.materialProps;
  }
  AlertElementBuilder.prototype.classes_5jwm4a$ = function ($receiver, classMap) {
    var destination = ArrayList_init(classMap.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== classMap.length; ++tmp$) {
      var item = classMap[tmp$];
      destination.add_11rb$(to(item.first, item.second));
    }
    this.classes_rebstj$($receiver, destination);
  };
  var AlertElementBuilder$action_metadata = new PropertyMetadata('action');
  AlertElementBuilder.prototype.get_action_6s7ubj$ = function ($receiver) {
    return getValue(this.action_6s7ubj$_30lwgo$_0, $receiver, AlertElementBuilder$action_metadata);
  };
  AlertElementBuilder.prototype.set_action_aafm1a$ = function ($receiver, action) {
    setValue(this.action_6s7ubj$_30lwgo$_0, $receiver, AlertElementBuilder$action_metadata, action);
  };
  var AlertElementBuilder$closeText_metadata = new PropertyMetadata('closeText');
  AlertElementBuilder.prototype.get_closeText_6s7ubj$ = function ($receiver) {
    return getValue(this.closeText_6s7ubj$_rxpou3$_0, $receiver, AlertElementBuilder$closeText_metadata);
  };
  AlertElementBuilder.prototype.set_closeText_g0n3bx$ = function ($receiver, closeText) {
    setValue(this.closeText_6s7ubj$_rxpou3$_0, $receiver, AlertElementBuilder$closeText_metadata, closeText);
  };
  var AlertElementBuilder$color_metadata = new PropertyMetadata('color');
  AlertElementBuilder.prototype.get_color_6s7ubj$ = function ($receiver) {
    return getValue(this.color_6s7ubj$_wdw3x9$_0, $receiver, AlertElementBuilder$color_metadata);
  };
  AlertElementBuilder.prototype.set_color_8z0s1x$ = function ($receiver, color) {
    this.color_6s7ubj$_wdw3x9$_0[AlertElementBuilder$color_metadata.callableName] = color != null ? color.toString() : null;
  };
  var AlertElementBuilder$icon_metadata = new PropertyMetadata('icon');
  AlertElementBuilder.prototype.get_icon_6s7ubj$ = function ($receiver) {
    return getValue(this.icon_6s7ubj$_psda6t$_0, $receiver, AlertElementBuilder$icon_metadata);
  };
  AlertElementBuilder.prototype.set_icon_aafm1a$ = function ($receiver, icon) {
    setValue(this.icon_6s7ubj$_psda6t$_0, $receiver, AlertElementBuilder$icon_metadata, icon);
  };
  var AlertElementBuilder$iconMapping_metadata = new PropertyMetadata('iconMapping');
  AlertElementBuilder.prototype.get_iconMapping_6s7ubj$ = function ($receiver) {
    return getValue(this.iconMapping_6s7ubj$_bwuoyz$_0, $receiver, AlertElementBuilder$iconMapping_metadata);
  };
  AlertElementBuilder.prototype.set_iconMapping_2thne8$ = function ($receiver, iconMapping) {
    setValue(this.iconMapping_6s7ubj$_bwuoyz$_0, $receiver, AlertElementBuilder$iconMapping_metadata, iconMapping);
  };
  var AlertElementBuilder$onClose_metadata = new PropertyMetadata('onClose');
  AlertElementBuilder.prototype.get_onClose_6s7ubj$ = function ($receiver) {
    return getValue(this.onClose_6s7ubj$_15vp3t$_0, $receiver, AlertElementBuilder$onClose_metadata);
  };
  AlertElementBuilder.prototype.set_onClose_d1g6vh$ = function ($receiver, onClose) {
    setValue(this.onClose_6s7ubj$_15vp3t$_0, $receiver, AlertElementBuilder$onClose_metadata, onClose);
  };
  var AlertElementBuilder$role_metadata = new PropertyMetadata('role');
  AlertElementBuilder.prototype.get_role_6s7ubj$ = function ($receiver) {
    return getValue(this.role_6s7ubj$_h1kcuw$_0, $receiver, AlertElementBuilder$role_metadata);
  };
  AlertElementBuilder.prototype.set_role_g0n3bx$ = function ($receiver, role) {
    setValue(this.role_6s7ubj$_h1kcuw$_0, $receiver, AlertElementBuilder$role_metadata, role);
  };
  var AlertElementBuilder$severity_metadata = new PropertyMetadata('severity');
  AlertElementBuilder.prototype.get_severity_6s7ubj$ = function ($receiver) {
    return getValue(this.severity_6s7ubj$_xf7ei7$_0, $receiver, AlertElementBuilder$severity_metadata);
  };
  AlertElementBuilder.prototype.set_severity_81e2yi$ = function ($receiver, severity) {
    this.severity_6s7ubj$_xf7ei7$_0[AlertElementBuilder$severity_metadata.callableName] = severity != null ? severity.toString() : null;
  };
  var AlertElementBuilder$variant_metadata = new PropertyMetadata('variant');
  AlertElementBuilder.prototype.get_variant_6s7ubj$ = function ($receiver) {
    return getValue(this.variant_6s7ubj$_ggskqj$_0, $receiver, AlertElementBuilder$variant_metadata);
  };
  AlertElementBuilder.prototype.set_variant_hr4z6s$ = function ($receiver, variant) {
    this.variant_6s7ubj$_ggskqj$_0[AlertElementBuilder$variant_metadata.callableName] = variant != null ? variant.toString() : null;
  };
  AlertElementBuilder.prototype.action_142hnm$ = function ($receiver, block) {
    var $receiver_0 = new RBuilder_init();
    block($receiver_0);
    this.set_action_aafm1a$($receiver, first($receiver_0.childList));
  };
  AlertElementBuilder.prototype.icon_142hnm$ = function ($receiver, block) {
    var $receiver_0 = new RBuilder_init();
    block($receiver_0);
    this.set_icon_aafm1a$($receiver, first($receiver_0.childList));
  };
  AlertElementBuilder.prototype.iconMapping_t4j4ft$ = function ($receiver, block) {
    block(this.get_iconMapping_6s7ubj$($receiver));
  };
  AlertElementBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AlertElementBuilder',
    interfaces: [PaperElementBuilder]
  };
  var alertComponent;
  function alert$lambda(it) {
    return new DIV(emptyMap(), it);
  }
  function alert($receiver, classMap, block) {
    var $receiver_0 = new AlertElementBuilder(alertComponent, toList(classMap), alert$lambda);
    block($receiver_0);
    return $receiver.child_2usv9w$($receiver_0.create());
  }
  function alert_0($receiver, classMap, factory, block) {
    var $receiver_0 = new AlertElementBuilder(alertComponent, toList(classMap), factory);
    block($receiver_0);
    return $receiver.child_2usv9w$($receiver_0.create());
  }
  function AlertColor(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function AlertColor_initFields() {
    AlertColor_initFields = function () {
    };
    AlertColor$error_instance = new AlertColor('error', 0);
    AlertColor$info_instance = new AlertColor('info', 1);
    AlertColor$success_instance = new AlertColor('success', 2);
    AlertColor$warning_instance = new AlertColor('warning', 3);
  }
  var AlertColor$error_instance;
  function AlertColor$error_getInstance() {
    AlertColor_initFields();
    return AlertColor$error_instance;
  }
  var AlertColor$info_instance;
  function AlertColor$info_getInstance() {
    AlertColor_initFields();
    return AlertColor$info_instance;
  }
  var AlertColor$success_instance;
  function AlertColor$success_getInstance() {
    AlertColor_initFields();
    return AlertColor$success_instance;
  }
  var AlertColor$warning_instance;
  function AlertColor$warning_getInstance() {
    AlertColor_initFields();
    return AlertColor$warning_instance;
  }
  AlertColor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AlertColor',
    interfaces: [Enum]
  };
  function AlertColor$values() {
    return [AlertColor$error_getInstance(), AlertColor$info_getInstance(), AlertColor$success_getInstance(), AlertColor$warning_getInstance()];
  }
  AlertColor.values = AlertColor$values;
  function AlertColor$valueOf(name) {
    switch (name) {
      case 'error':
        return AlertColor$error_getInstance();
      case 'info':
        return AlertColor$info_getInstance();
      case 'success':
        return AlertColor$success_getInstance();
      case 'warning':
        return AlertColor$warning_getInstance();
      default:throwISE('No enum constant materialui.lab.components.alert.enums.AlertColor.' + name);
    }
  }
  AlertColor.valueOf_61zpoe$ = AlertColor$valueOf;
  function AlertSeverity(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function AlertSeverity_initFields() {
    AlertSeverity_initFields = function () {
    };
    AlertSeverity$error_instance = new AlertSeverity('error', 0);
    AlertSeverity$info_instance = new AlertSeverity('info', 1);
    AlertSeverity$success_instance = new AlertSeverity('success', 2);
    AlertSeverity$warning_instance = new AlertSeverity('warning', 3);
  }
  var AlertSeverity$error_instance;
  function AlertSeverity$error_getInstance() {
    AlertSeverity_initFields();
    return AlertSeverity$error_instance;
  }
  var AlertSeverity$info_instance;
  function AlertSeverity$info_getInstance() {
    AlertSeverity_initFields();
    return AlertSeverity$info_instance;
  }
  var AlertSeverity$success_instance;
  function AlertSeverity$success_getInstance() {
    AlertSeverity_initFields();
    return AlertSeverity$success_instance;
  }
  var AlertSeverity$warning_instance;
  function AlertSeverity$warning_getInstance() {
    AlertSeverity_initFields();
    return AlertSeverity$warning_instance;
  }
  AlertSeverity.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AlertSeverity',
    interfaces: [Enum]
  };
  function AlertSeverity$values() {
    return [AlertSeverity$error_getInstance(), AlertSeverity$info_getInstance(), AlertSeverity$success_getInstance(), AlertSeverity$warning_getInstance()];
  }
  AlertSeverity.values = AlertSeverity$values;
  function AlertSeverity$valueOf(name) {
    switch (name) {
      case 'error':
        return AlertSeverity$error_getInstance();
      case 'info':
        return AlertSeverity$info_getInstance();
      case 'success':
        return AlertSeverity$success_getInstance();
      case 'warning':
        return AlertSeverity$warning_getInstance();
      default:throwISE('No enum constant materialui.lab.components.alert.enums.AlertSeverity.' + name);
    }
  }
  AlertSeverity.valueOf_61zpoe$ = AlertSeverity$valueOf;
  function AlertStyle(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function AlertStyle_initFields() {
    AlertStyle_initFields = function () {
    };
    AlertStyle$root_instance = new AlertStyle('root', 0);
    AlertStyle$standardSuccess_instance = new AlertStyle('standardSuccess', 1);
    AlertStyle$standardInfo_instance = new AlertStyle('standardInfo', 2);
    AlertStyle$standardWarning_instance = new AlertStyle('standardWarning', 3);
    AlertStyle$standardError_instance = new AlertStyle('standardError', 4);
    AlertStyle$outlinedSuccess_instance = new AlertStyle('outlinedSuccess', 5);
    AlertStyle$outlinedInfo_instance = new AlertStyle('outlinedInfo', 6);
    AlertStyle$outlinedWarning_instance = new AlertStyle('outlinedWarning', 7);
    AlertStyle$outlinedError_instance = new AlertStyle('outlinedError', 8);
    AlertStyle$filledSuccess_instance = new AlertStyle('filledSuccess', 9);
    AlertStyle$filledInfo_instance = new AlertStyle('filledInfo', 10);
    AlertStyle$filledWarning_instance = new AlertStyle('filledWarning', 11);
    AlertStyle$filledError_instance = new AlertStyle('filledError', 12);
    AlertStyle$icon_instance = new AlertStyle('icon', 13);
    AlertStyle$message_instance = new AlertStyle('message', 14);
    AlertStyle$action_instance = new AlertStyle('action', 15);
  }
  var AlertStyle$root_instance;
  function AlertStyle$root_getInstance() {
    AlertStyle_initFields();
    return AlertStyle$root_instance;
  }
  var AlertStyle$standardSuccess_instance;
  function AlertStyle$standardSuccess_getInstance() {
    AlertStyle_initFields();
    return AlertStyle$standardSuccess_instance;
  }
  var AlertStyle$standardInfo_instance;
  function AlertStyle$standardInfo_getInstance() {
    AlertStyle_initFields();
    return AlertStyle$standardInfo_instance;
  }
  var AlertStyle$standardWarning_instance;
  function AlertStyle$standardWarning_getInstance() {
    AlertStyle_initFields();
    return AlertStyle$standardWarning_instance;
  }
  var AlertStyle$standardError_instance;
  function AlertStyle$standardError_getInstance() {
    AlertStyle_initFields();
    return AlertStyle$standardError_instance;
  }
  var AlertStyle$outlinedSuccess_instance;
  function AlertStyle$outlinedSuccess_getInstance() {
    AlertStyle_initFields();
    return AlertStyle$outlinedSuccess_instance;
  }
  var AlertStyle$outlinedInfo_instance;
  function AlertStyle$outlinedInfo_getInstance() {
    AlertStyle_initFields();
    return AlertStyle$outlinedInfo_instance;
  }
  var AlertStyle$outlinedWarning_instance;
  function AlertStyle$outlinedWarning_getInstance() {
    AlertStyle_initFields();
    return AlertStyle$outlinedWarning_instance;
  }
  var AlertStyle$outlinedError_instance;
  function AlertStyle$outlinedError_getInstance() {
    AlertStyle_initFields();
    return AlertStyle$outlinedError_instance;
  }
  var AlertStyle$filledSuccess_instance;
  function AlertStyle$filledSuccess_getInstance() {
    AlertStyle_initFields();
    return AlertStyle$filledSuccess_instance;
  }
  var AlertStyle$filledInfo_instance;
  function AlertStyle$filledInfo_getInstance() {
    AlertStyle_initFields();
    return AlertStyle$filledInfo_instance;
  }
  var AlertStyle$filledWarning_instance;
  function AlertStyle$filledWarning_getInstance() {
    AlertStyle_initFields();
    return AlertStyle$filledWarning_instance;
  }
  var AlertStyle$filledError_instance;
  function AlertStyle$filledError_getInstance() {
    AlertStyle_initFields();
    return AlertStyle$filledError_instance;
  }
  var AlertStyle$icon_instance;
  function AlertStyle$icon_getInstance() {
    AlertStyle_initFields();
    return AlertStyle$icon_instance;
  }
  var AlertStyle$message_instance;
  function AlertStyle$message_getInstance() {
    AlertStyle_initFields();
    return AlertStyle$message_instance;
  }
  var AlertStyle$action_instance;
  function AlertStyle$action_getInstance() {
    AlertStyle_initFields();
    return AlertStyle$action_instance;
  }
  AlertStyle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AlertStyle',
    interfaces: [Enum]
  };
  function AlertStyle$values() {
    return [AlertStyle$root_getInstance(), AlertStyle$standardSuccess_getInstance(), AlertStyle$standardInfo_getInstance(), AlertStyle$standardWarning_getInstance(), AlertStyle$standardError_getInstance(), AlertStyle$outlinedSuccess_getInstance(), AlertStyle$outlinedInfo_getInstance(), AlertStyle$outlinedWarning_getInstance(), AlertStyle$outlinedError_getInstance(), AlertStyle$filledSuccess_getInstance(), AlertStyle$filledInfo_getInstance(), AlertStyle$filledWarning_getInstance(), AlertStyle$filledError_getInstance(), AlertStyle$icon_getInstance(), AlertStyle$message_getInstance(), AlertStyle$action_getInstance()];
  }
  AlertStyle.values = AlertStyle$values;
  function AlertStyle$valueOf(name) {
    switch (name) {
      case 'root':
        return AlertStyle$root_getInstance();
      case 'standardSuccess':
        return AlertStyle$standardSuccess_getInstance();
      case 'standardInfo':
        return AlertStyle$standardInfo_getInstance();
      case 'standardWarning':
        return AlertStyle$standardWarning_getInstance();
      case 'standardError':
        return AlertStyle$standardError_getInstance();
      case 'outlinedSuccess':
        return AlertStyle$outlinedSuccess_getInstance();
      case 'outlinedInfo':
        return AlertStyle$outlinedInfo_getInstance();
      case 'outlinedWarning':
        return AlertStyle$outlinedWarning_getInstance();
      case 'outlinedError':
        return AlertStyle$outlinedError_getInstance();
      case 'filledSuccess':
        return AlertStyle$filledSuccess_getInstance();
      case 'filledInfo':
        return AlertStyle$filledInfo_getInstance();
      case 'filledWarning':
        return AlertStyle$filledWarning_getInstance();
      case 'filledError':
        return AlertStyle$filledError_getInstance();
      case 'icon':
        return AlertStyle$icon_getInstance();
      case 'message':
        return AlertStyle$message_getInstance();
      case 'action':
        return AlertStyle$action_getInstance();
      default:throwISE('No enum constant materialui.lab.components.alert.enums.AlertStyle.' + name);
    }
  }
  AlertStyle.valueOf_61zpoe$ = AlertStyle$valueOf;
  function AlertVariant(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function AlertVariant_initFields() {
    AlertVariant_initFields = function () {
    };
    AlertVariant$filled_instance = new AlertVariant('filled', 0);
    AlertVariant$outlined_instance = new AlertVariant('outlined', 1);
    AlertVariant$standard_instance = new AlertVariant('standard', 2);
  }
  var AlertVariant$filled_instance;
  function AlertVariant$filled_getInstance() {
    AlertVariant_initFields();
    return AlertVariant$filled_instance;
  }
  var AlertVariant$outlined_instance;
  function AlertVariant$outlined_getInstance() {
    AlertVariant_initFields();
    return AlertVariant$outlined_instance;
  }
  var AlertVariant$standard_instance;
  function AlertVariant$standard_getInstance() {
    AlertVariant_initFields();
    return AlertVariant$standard_instance;
  }
  AlertVariant.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AlertVariant',
    interfaces: [Enum]
  };
  function AlertVariant$values() {
    return [AlertVariant$filled_getInstance(), AlertVariant$outlined_getInstance(), AlertVariant$standard_getInstance()];
  }
  AlertVariant.values = AlertVariant$values;
  function AlertVariant$valueOf(name) {
    switch (name) {
      case 'filled':
        return AlertVariant$filled_getInstance();
      case 'outlined':
        return AlertVariant$outlined_getInstance();
      case 'standard':
        return AlertVariant$standard_getInstance();
      default:throwISE('No enum constant materialui.lab.components.alert.enums.AlertVariant.' + name);
    }
  }
  AlertVariant.valueOf_61zpoe$ = AlertVariant$valueOf;
  var alertTitleComponent;
  function alertTitle($receiver, block) {
    var tmp$ = alertTitleComponent;
    var obj = {};
    var tmp$_0 = [tmp$, obj];
    var tmp$_1 = tmp$_0.concat;
    var $receiver_0 = new RBuilder_init();
    block($receiver_0);
    return $receiver.child_2usv9w$(createElement.apply(null, tmp$_1.call(tmp$_0, copyToArray($receiver_0.childList))));
  }
  $$importsForInline$$['kotlin-material-ui-core'] = $module$kotlin_material_ui_core;
  $$importsForInline$$['kotlin-react'] = $module$kotlin_react;
  var package$materialui = _.materialui || (_.materialui = {});
  var package$lab = package$materialui.lab || (package$materialui.lab = {});
  var package$components = package$lab.components || (package$lab.components = {});
  var package$alert = package$components.alert || (package$components.alert = {});
  package$alert.AlertElementBuilder = AlertElementBuilder;
  package$alert.alert_v2y8vp$ = alert;
  package$alert.alert_e5587e$ = alert_0;
  Object.defineProperty(AlertColor, 'error', {
    get: AlertColor$error_getInstance
  });
  Object.defineProperty(AlertColor, 'info', {
    get: AlertColor$info_getInstance
  });
  Object.defineProperty(AlertColor, 'success', {
    get: AlertColor$success_getInstance
  });
  Object.defineProperty(AlertColor, 'warning', {
    get: AlertColor$warning_getInstance
  });
  var package$enums = package$alert.enums || (package$alert.enums = {});
  package$enums.AlertColor = AlertColor;
  Object.defineProperty(AlertSeverity, 'error', {
    get: AlertSeverity$error_getInstance
  });
  Object.defineProperty(AlertSeverity, 'info', {
    get: AlertSeverity$info_getInstance
  });
  Object.defineProperty(AlertSeverity, 'success', {
    get: AlertSeverity$success_getInstance
  });
  Object.defineProperty(AlertSeverity, 'warning', {
    get: AlertSeverity$warning_getInstance
  });
  package$enums.AlertSeverity = AlertSeverity;
  Object.defineProperty(AlertStyle, 'root', {
    get: AlertStyle$root_getInstance
  });
  Object.defineProperty(AlertStyle, 'standardSuccess', {
    get: AlertStyle$standardSuccess_getInstance
  });
  Object.defineProperty(AlertStyle, 'standardInfo', {
    get: AlertStyle$standardInfo_getInstance
  });
  Object.defineProperty(AlertStyle, 'standardWarning', {
    get: AlertStyle$standardWarning_getInstance
  });
  Object.defineProperty(AlertStyle, 'standardError', {
    get: AlertStyle$standardError_getInstance
  });
  Object.defineProperty(AlertStyle, 'outlinedSuccess', {
    get: AlertStyle$outlinedSuccess_getInstance
  });
  Object.defineProperty(AlertStyle, 'outlinedInfo', {
    get: AlertStyle$outlinedInfo_getInstance
  });
  Object.defineProperty(AlertStyle, 'outlinedWarning', {
    get: AlertStyle$outlinedWarning_getInstance
  });
  Object.defineProperty(AlertStyle, 'outlinedError', {
    get: AlertStyle$outlinedError_getInstance
  });
  Object.defineProperty(AlertStyle, 'filledSuccess', {
    get: AlertStyle$filledSuccess_getInstance
  });
  Object.defineProperty(AlertStyle, 'filledInfo', {
    get: AlertStyle$filledInfo_getInstance
  });
  Object.defineProperty(AlertStyle, 'filledWarning', {
    get: AlertStyle$filledWarning_getInstance
  });
  Object.defineProperty(AlertStyle, 'filledError', {
    get: AlertStyle$filledError_getInstance
  });
  Object.defineProperty(AlertStyle, 'icon', {
    get: AlertStyle$icon_getInstance
  });
  Object.defineProperty(AlertStyle, 'message', {
    get: AlertStyle$message_getInstance
  });
  Object.defineProperty(AlertStyle, 'action', {
    get: AlertStyle$action_getInstance
  });
  package$enums.AlertStyle = AlertStyle;
  Object.defineProperty(AlertVariant, 'filled', {
    get: AlertVariant$filled_getInstance
  });
  Object.defineProperty(AlertVariant, 'outlined', {
    get: AlertVariant$outlined_getInstance
  });
  Object.defineProperty(AlertVariant, 'standard', {
    get: AlertVariant$standard_getInstance
  });
  package$enums.AlertVariant = AlertVariant;
  $$importsForInline$$['kotlin-extensions'] = $module$kotlin_extensions;
  var package$alerttitle = package$components.alerttitle || (package$components.alerttitle = {});
  package$alerttitle.alertTitle_mcw5so$ = alertTitle;
  alertComponent = $module$_material_ui_lab_Alert.default;
  alertTitleComponent = $module$_material_ui_lab_AlertTitle.default;
  Kotlin.defineModule('kotlin-material-ui-lab', _);
  return _;
}(module.exports, require('kotlin'), require('kotlin-material-ui-core'), require('kotlin-react'), require('@material-ui/lab/Alert'), require('kotlinx-html-js'), require('@material-ui/lab/AlertTitle'), require('kotlin-extensions'), require('react')));

//# sourceMappingURL=kotlin-material-ui-lab.js.map
