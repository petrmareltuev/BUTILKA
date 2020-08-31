(function (_, Kotlin, $module$kotlin_material_ui_core, $module$kotlin_react, $module$_material_ui_lab_Alert, $module$kotlinx_html_js, $module$_material_ui_lab_AlertTitle, $module$kotlin_extensions, $module$react, $module$_material_ui_lab_Skeleton, $module$_material_ui_lab_ToggleButton, $module$_material_ui_lab_ToggleButtonGroup, $module$_material_ui_lab_TreeItem, $module$_material_ui_lab_TreeView) {
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
  var MaterialElementBuilder = $module$kotlin_material_ui_core.materialui.components.MaterialElementBuilder;
  var SPAN = $module$kotlinx_html_js.kotlinx.html.SPAN;
  var ButtonBaseElementBuilder = $module$kotlin_material_ui_core.materialui.components.buttonbase.ButtonBaseElementBuilder;
  var BUTTON = $module$kotlinx_html_js.kotlinx.html.BUTTON;
  var get_rClass = $module$kotlin_react.react.get_rClass_inwa2g$;
  var LI = $module$kotlinx_html_js.kotlinx.html.LI;
  var UL = $module$kotlinx_html_js.kotlinx.html.UL;
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
  SkeletonElementBuilder.prototype = Object.create(MaterialElementBuilder.prototype);
  SkeletonElementBuilder.prototype.constructor = SkeletonElementBuilder;
  SkeletonAnimation.prototype = Object.create(Enum.prototype);
  SkeletonAnimation.prototype.constructor = SkeletonAnimation;
  SkeletonStyle.prototype = Object.create(Enum.prototype);
  SkeletonStyle.prototype.constructor = SkeletonStyle;
  SkeletonVariant.prototype = Object.create(Enum.prototype);
  SkeletonVariant.prototype.constructor = SkeletonVariant;
  ToggleButtonElementBuilder.prototype = Object.create(ButtonBaseElementBuilder.prototype);
  ToggleButtonElementBuilder.prototype.constructor = ToggleButtonElementBuilder;
  ToggleButtonStyle.prototype = Object.create(Enum.prototype);
  ToggleButtonStyle.prototype.constructor = ToggleButtonStyle;
  ToggleButtonGroupElementBuilder.prototype = Object.create(MaterialElementBuilder.prototype);
  ToggleButtonGroupElementBuilder.prototype.constructor = ToggleButtonGroupElementBuilder;
  ToggleButtonGroupOrientation.prototype = Object.create(Enum.prototype);
  ToggleButtonGroupOrientation.prototype.constructor = ToggleButtonGroupOrientation;
  ToggleButtonGroupSize.prototype = Object.create(Enum.prototype);
  ToggleButtonGroupSize.prototype.constructor = ToggleButtonGroupSize;
  ToggleButtonGroupStyle.prototype = Object.create(Enum.prototype);
  ToggleButtonGroupStyle.prototype.constructor = ToggleButtonGroupStyle;
  TreeItemElementBuilder.prototype = Object.create(MaterialElementBuilder.prototype);
  TreeItemElementBuilder.prototype.constructor = TreeItemElementBuilder;
  TreeItemStyle.prototype = Object.create(Enum.prototype);
  TreeItemStyle.prototype.constructor = TreeItemStyle;
  TreeViewElementBuilder.prototype = Object.create(MaterialElementBuilder.prototype);
  TreeViewElementBuilder.prototype.constructor = TreeViewElementBuilder;
  SingleSelectTreeViewElementBuilder.prototype = Object.create(TreeViewElementBuilder.prototype);
  SingleSelectTreeViewElementBuilder.prototype.constructor = SingleSelectTreeViewElementBuilder;
  MultiSelectTreeViewElementBuilder.prototype = Object.create(TreeViewElementBuilder.prototype);
  MultiSelectTreeViewElementBuilder.prototype.constructor = MultiSelectTreeViewElementBuilder;
  TreeViewStyle.prototype = Object.create(Enum.prototype);
  TreeViewStyle.prototype.constructor = TreeViewStyle;
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
    return $receiver.child_52psg1$($receiver_0.create());
  }
  function alert_0($receiver, classMap, factory, block) {
    var $receiver_0 = new AlertElementBuilder(alertComponent, toList(classMap), factory);
    block($receiver_0);
    return $receiver.child_52psg1$($receiver_0.create());
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
    var $receiver_0 = {};
    var tmp$_0 = [tmp$, $receiver_0];
    var tmp$_1 = tmp$_0.concat;
    var $receiver_1 = new RBuilder_init();
    block($receiver_1);
    return $receiver.child_52psg1$(createElement.apply(null, tmp$_1.call(tmp$_0, copyToArray($receiver_1.childList))));
  }
  function SkeletonElementBuilder(type, classMap, factory) {
    MaterialElementBuilder.call(this, type, classMap, factory);
    this.animation_6s7ubj$_isfzgo$_0 = this.materialProps;
    this.height_6s7ubj$_5hgr3f$_0 = this.materialProps;
    this.variant_6s7ubj$_u6aybb$_0 = this.materialProps;
    this.width_6s7ubj$_9bcznu$_0 = this.materialProps;
  }
  SkeletonElementBuilder.prototype.classes_xtty2m$ = function ($receiver, classMap) {
    var destination = ArrayList_init(classMap.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== classMap.length; ++tmp$) {
      var item = classMap[tmp$];
      destination.add_11rb$(to(item.first, item.second));
    }
    this.classes_rebstj$($receiver, destination);
  };
  var SkeletonElementBuilder$animation_metadata = new PropertyMetadata('animation');
  SkeletonElementBuilder.prototype.get_animation_6s7ubj$ = function ($receiver) {
    return getValue(this.animation_6s7ubj$_isfzgo$_0, $receiver, SkeletonElementBuilder$animation_metadata);
  };
  SkeletonElementBuilder.prototype.set_animation_o8lqm8$ = function ($receiver, animation) {
    this.animation_6s7ubj$_isfzgo$_0[SkeletonElementBuilder$animation_metadata.callableName] = animation != null ? animation.toString() : null;
  };
  var SkeletonElementBuilder$height_metadata = new PropertyMetadata('height');
  SkeletonElementBuilder.prototype.get_height_6s7ubj$ = function ($receiver) {
    return getValue(this.height_6s7ubj$_5hgr3f$_0, $receiver, SkeletonElementBuilder$height_metadata);
  };
  SkeletonElementBuilder.prototype.set_height_nwiim$ = function ($receiver, height) {
    setValue(this.height_6s7ubj$_5hgr3f$_0, $receiver, SkeletonElementBuilder$height_metadata, height);
  };
  var SkeletonElementBuilder$variant_metadata = new PropertyMetadata('variant');
  SkeletonElementBuilder.prototype.get_variant_6s7ubj$ = function ($receiver) {
    return getValue(this.variant_6s7ubj$_u6aybb$_0, $receiver, SkeletonElementBuilder$variant_metadata);
  };
  SkeletonElementBuilder.prototype.set_variant_8o6qw1$ = function ($receiver, variant) {
    this.variant_6s7ubj$_u6aybb$_0[SkeletonElementBuilder$variant_metadata.callableName] = variant != null ? variant.toString() : null;
  };
  var SkeletonElementBuilder$width_metadata = new PropertyMetadata('width');
  SkeletonElementBuilder.prototype.get_width_6s7ubj$ = function ($receiver) {
    return getValue(this.width_6s7ubj$_9bcznu$_0, $receiver, SkeletonElementBuilder$width_metadata);
  };
  SkeletonElementBuilder.prototype.set_width_nwiim$ = function ($receiver, width) {
    setValue(this.width_6s7ubj$_9bcznu$_0, $receiver, SkeletonElementBuilder$width_metadata, width);
  };
  SkeletonElementBuilder.prototype.height_g0n3bx$ = function ($receiver, v) {
    this.materialProps.height = v;
  };
  SkeletonElementBuilder.prototype.height_dnvfmd$ = function ($receiver, v) {
    this.materialProps.height = v;
  };
  SkeletonElementBuilder.prototype.width_g0n3bx$ = function ($receiver, v) {
    this.materialProps.width = v;
  };
  SkeletonElementBuilder.prototype.width_dnvfmd$ = function ($receiver, v) {
    this.materialProps.width = v;
  };
  SkeletonElementBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SkeletonElementBuilder',
    interfaces: [MaterialElementBuilder]
  };
  function SkeletonAnimation(name, ordinal, value) {
    Enum.call(this);
    this.value_8be2vx$ = value;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function SkeletonAnimation_initFields() {
    SkeletonAnimation_initFields = function () {
    };
    SkeletonAnimation$pulse_instance = new SkeletonAnimation('pulse', 0, 'pulse');
    SkeletonAnimation$wave_instance = new SkeletonAnimation('wave', 1, 'wave');
    SkeletonAnimation$false_instance = new SkeletonAnimation('false', 2, false);
  }
  var SkeletonAnimation$pulse_instance;
  function SkeletonAnimation$pulse_getInstance() {
    SkeletonAnimation_initFields();
    return SkeletonAnimation$pulse_instance;
  }
  var SkeletonAnimation$wave_instance;
  function SkeletonAnimation$wave_getInstance() {
    SkeletonAnimation_initFields();
    return SkeletonAnimation$wave_instance;
  }
  var SkeletonAnimation$false_instance;
  function SkeletonAnimation$false_getInstance() {
    SkeletonAnimation_initFields();
    return SkeletonAnimation$false_instance;
  }
  SkeletonAnimation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SkeletonAnimation',
    interfaces: [Enum]
  };
  function SkeletonAnimation$values() {
    return [SkeletonAnimation$pulse_getInstance(), SkeletonAnimation$wave_getInstance(), SkeletonAnimation$false_getInstance()];
  }
  SkeletonAnimation.values = SkeletonAnimation$values;
  function SkeletonAnimation$valueOf(name) {
    switch (name) {
      case 'pulse':
        return SkeletonAnimation$pulse_getInstance();
      case 'wave':
        return SkeletonAnimation$wave_getInstance();
      case 'false':
        return SkeletonAnimation$false_getInstance();
      default:throwISE('No enum constant materialui.lab.components.skeleton.enums.SkeletonAnimation.' + name);
    }
  }
  SkeletonAnimation.valueOf_61zpoe$ = SkeletonAnimation$valueOf;
  function SkeletonStyle(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function SkeletonStyle_initFields() {
    SkeletonStyle_initFields = function () {
    };
    SkeletonStyle$root_instance = new SkeletonStyle('root', 0);
    SkeletonStyle$text_instance = new SkeletonStyle('text', 1);
    SkeletonStyle$rect_instance = new SkeletonStyle('rect', 2);
    SkeletonStyle$circle_instance = new SkeletonStyle('circle', 3);
    SkeletonStyle$pulse_instance = new SkeletonStyle('pulse', 4);
    SkeletonStyle$wave_instance = new SkeletonStyle('wave', 5);
  }
  var SkeletonStyle$root_instance;
  function SkeletonStyle$root_getInstance() {
    SkeletonStyle_initFields();
    return SkeletonStyle$root_instance;
  }
  var SkeletonStyle$text_instance;
  function SkeletonStyle$text_getInstance() {
    SkeletonStyle_initFields();
    return SkeletonStyle$text_instance;
  }
  var SkeletonStyle$rect_instance;
  function SkeletonStyle$rect_getInstance() {
    SkeletonStyle_initFields();
    return SkeletonStyle$rect_instance;
  }
  var SkeletonStyle$circle_instance;
  function SkeletonStyle$circle_getInstance() {
    SkeletonStyle_initFields();
    return SkeletonStyle$circle_instance;
  }
  var SkeletonStyle$pulse_instance;
  function SkeletonStyle$pulse_getInstance() {
    SkeletonStyle_initFields();
    return SkeletonStyle$pulse_instance;
  }
  var SkeletonStyle$wave_instance;
  function SkeletonStyle$wave_getInstance() {
    SkeletonStyle_initFields();
    return SkeletonStyle$wave_instance;
  }
  SkeletonStyle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SkeletonStyle',
    interfaces: [Enum]
  };
  function SkeletonStyle$values() {
    return [SkeletonStyle$root_getInstance(), SkeletonStyle$text_getInstance(), SkeletonStyle$rect_getInstance(), SkeletonStyle$circle_getInstance(), SkeletonStyle$pulse_getInstance(), SkeletonStyle$wave_getInstance()];
  }
  SkeletonStyle.values = SkeletonStyle$values;
  function SkeletonStyle$valueOf(name) {
    switch (name) {
      case 'root':
        return SkeletonStyle$root_getInstance();
      case 'text':
        return SkeletonStyle$text_getInstance();
      case 'rect':
        return SkeletonStyle$rect_getInstance();
      case 'circle':
        return SkeletonStyle$circle_getInstance();
      case 'pulse':
        return SkeletonStyle$pulse_getInstance();
      case 'wave':
        return SkeletonStyle$wave_getInstance();
      default:throwISE('No enum constant materialui.lab.components.skeleton.enums.SkeletonStyle.' + name);
    }
  }
  SkeletonStyle.valueOf_61zpoe$ = SkeletonStyle$valueOf;
  function SkeletonVariant(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function SkeletonVariant_initFields() {
    SkeletonVariant_initFields = function () {
    };
    SkeletonVariant$text_instance = new SkeletonVariant('text', 0);
    SkeletonVariant$rect_instance = new SkeletonVariant('rect', 1);
    SkeletonVariant$circle_instance = new SkeletonVariant('circle', 2);
  }
  var SkeletonVariant$text_instance;
  function SkeletonVariant$text_getInstance() {
    SkeletonVariant_initFields();
    return SkeletonVariant$text_instance;
  }
  var SkeletonVariant$rect_instance;
  function SkeletonVariant$rect_getInstance() {
    SkeletonVariant_initFields();
    return SkeletonVariant$rect_instance;
  }
  var SkeletonVariant$circle_instance;
  function SkeletonVariant$circle_getInstance() {
    SkeletonVariant_initFields();
    return SkeletonVariant$circle_instance;
  }
  SkeletonVariant.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SkeletonVariant',
    interfaces: [Enum]
  };
  function SkeletonVariant$values() {
    return [SkeletonVariant$text_getInstance(), SkeletonVariant$rect_getInstance(), SkeletonVariant$circle_getInstance()];
  }
  SkeletonVariant.values = SkeletonVariant$values;
  function SkeletonVariant$valueOf(name) {
    switch (name) {
      case 'text':
        return SkeletonVariant$text_getInstance();
      case 'rect':
        return SkeletonVariant$rect_getInstance();
      case 'circle':
        return SkeletonVariant$circle_getInstance();
      default:throwISE('No enum constant materialui.lab.components.skeleton.enums.SkeletonVariant.' + name);
    }
  }
  SkeletonVariant.valueOf_61zpoe$ = SkeletonVariant$valueOf;
  var skeletonComponent;
  function skeleton$lambda(it) {
    return new SPAN(emptyMap(), it);
  }
  function skeleton($receiver, classMap, block) {
    var $receiver_0 = new SkeletonElementBuilder(skeletonComponent, toList(classMap), skeleton$lambda);
    block($receiver_0);
    return $receiver.child_52psg1$($receiver_0.create());
  }
  function skeleton_0($receiver, classMap, factory, block) {
    var $receiver_0 = new SkeletonElementBuilder(skeletonComponent, toList(classMap), factory);
    block($receiver_0);
    return $receiver.child_52psg1$($receiver_0.create());
  }
  function ToggleButtonElementBuilder(type, classMap, factory) {
    ButtonBaseElementBuilder.call(this, type, classMap, factory);
    this.disableFocusRipple_6s7ubj$_70qjw2$_0 = this.materialProps;
    this.selected_bpu5ie$_0 = this.materialProps;
    this.value_6tx7am$_0 = this.materialProps;
  }
  ToggleButtonElementBuilder.prototype.classes_w4vltu$ = function ($receiver, classMap) {
    var destination = ArrayList_init(classMap.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== classMap.length; ++tmp$) {
      var item = classMap[tmp$];
      destination.add_11rb$(to(item.first, item.second));
    }
    this.classes_rebstj$($receiver, destination);
  };
  var ToggleButtonElementBuilder$disableFocusRipple_metadata = new PropertyMetadata('disableFocusRipple');
  ToggleButtonElementBuilder.prototype.get_disableFocusRipple_6s7ubj$ = function ($receiver) {
    return getValue(this.disableFocusRipple_6s7ubj$_70qjw2$_0, $receiver, ToggleButtonElementBuilder$disableFocusRipple_metadata);
  };
  ToggleButtonElementBuilder.prototype.set_disableFocusRipple_h3caxp$ = function ($receiver, disableFocusRipple) {
    setValue(this.disableFocusRipple_6s7ubj$_70qjw2$_0, $receiver, ToggleButtonElementBuilder$disableFocusRipple_metadata, disableFocusRipple);
  };
  var ToggleButtonElementBuilder$selected_metadata = new PropertyMetadata('selected');
  Object.defineProperty(ToggleButtonElementBuilder.prototype, 'selected', {
    get: function () {
      return getValue(this.selected_bpu5ie$_0, this, ToggleButtonElementBuilder$selected_metadata);
    },
    set: function (selected) {
      setValue(this.selected_bpu5ie$_0, this, ToggleButtonElementBuilder$selected_metadata, selected);
    }
  });
  var ToggleButtonElementBuilder$value_metadata = new PropertyMetadata('value');
  Object.defineProperty(ToggleButtonElementBuilder.prototype, 'value', {
    get: function () {
      return getValue(this.value_6tx7am$_0, this, ToggleButtonElementBuilder$value_metadata);
    },
    set: function (value) {
      setValue(this.value_6tx7am$_0, this, ToggleButtonElementBuilder$value_metadata, value);
    }
  });
  ToggleButtonElementBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ToggleButtonElementBuilder',
    interfaces: [ButtonBaseElementBuilder]
  };
  function ToggleButtonStyle(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ToggleButtonStyle_initFields() {
    ToggleButtonStyle_initFields = function () {
    };
    ToggleButtonStyle$root_instance = new ToggleButtonStyle('root', 0);
    ToggleButtonStyle$disabled_instance = new ToggleButtonStyle('disabled', 1);
    ToggleButtonStyle$selected_instance = new ToggleButtonStyle('selected', 2);
    ToggleButtonStyle$label_instance = new ToggleButtonStyle('label', 3);
    ToggleButtonStyle$sizeSmall_instance = new ToggleButtonStyle('sizeSmall', 4);
    ToggleButtonStyle$sizeLarge_instance = new ToggleButtonStyle('sizeLarge', 5);
  }
  var ToggleButtonStyle$root_instance;
  function ToggleButtonStyle$root_getInstance() {
    ToggleButtonStyle_initFields();
    return ToggleButtonStyle$root_instance;
  }
  var ToggleButtonStyle$disabled_instance;
  function ToggleButtonStyle$disabled_getInstance() {
    ToggleButtonStyle_initFields();
    return ToggleButtonStyle$disabled_instance;
  }
  var ToggleButtonStyle$selected_instance;
  function ToggleButtonStyle$selected_getInstance() {
    ToggleButtonStyle_initFields();
    return ToggleButtonStyle$selected_instance;
  }
  var ToggleButtonStyle$label_instance;
  function ToggleButtonStyle$label_getInstance() {
    ToggleButtonStyle_initFields();
    return ToggleButtonStyle$label_instance;
  }
  var ToggleButtonStyle$sizeSmall_instance;
  function ToggleButtonStyle$sizeSmall_getInstance() {
    ToggleButtonStyle_initFields();
    return ToggleButtonStyle$sizeSmall_instance;
  }
  var ToggleButtonStyle$sizeLarge_instance;
  function ToggleButtonStyle$sizeLarge_getInstance() {
    ToggleButtonStyle_initFields();
    return ToggleButtonStyle$sizeLarge_instance;
  }
  ToggleButtonStyle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ToggleButtonStyle',
    interfaces: [Enum]
  };
  function ToggleButtonStyle$values() {
    return [ToggleButtonStyle$root_getInstance(), ToggleButtonStyle$disabled_getInstance(), ToggleButtonStyle$selected_getInstance(), ToggleButtonStyle$label_getInstance(), ToggleButtonStyle$sizeSmall_getInstance(), ToggleButtonStyle$sizeLarge_getInstance()];
  }
  ToggleButtonStyle.values = ToggleButtonStyle$values;
  function ToggleButtonStyle$valueOf(name) {
    switch (name) {
      case 'root':
        return ToggleButtonStyle$root_getInstance();
      case 'disabled':
        return ToggleButtonStyle$disabled_getInstance();
      case 'selected':
        return ToggleButtonStyle$selected_getInstance();
      case 'label':
        return ToggleButtonStyle$label_getInstance();
      case 'sizeSmall':
        return ToggleButtonStyle$sizeSmall_getInstance();
      case 'sizeLarge':
        return ToggleButtonStyle$sizeLarge_getInstance();
      default:throwISE('No enum constant materialui.lab.components.togglebutton.enums.ToggleButtonStyle.' + name);
    }
  }
  ToggleButtonStyle.valueOf_61zpoe$ = ToggleButtonStyle$valueOf;
  var toggleButtonComponent;
  function toggleButton$lambda(it) {
    return new BUTTON(emptyMap(), it);
  }
  function toggleButton($receiver, classMap, block) {
    var $receiver_0 = new ToggleButtonElementBuilder(toggleButtonComponent, toList(classMap), toggleButton$lambda);
    block($receiver_0);
    return $receiver.child_52psg1$($receiver_0.create());
  }
  function toggleButton_0($receiver, classMap, factory, block) {
    var $receiver_0 = new ToggleButtonElementBuilder(toggleButtonComponent, toList(classMap), factory);
    block($receiver_0);
    return $receiver.child_52psg1$($receiver_0.create());
  }
  function ToggleButtonGroupElementBuilder(type, classMap) {
    MaterialElementBuilder.call(this, type, classMap, ToggleButtonGroupElementBuilder_init$lambda);
    this.exclusive_6s7ubj$_1nayaw$_0 = this.materialProps;
    this.onChange_6s7ubj$_8xgqp3$_0 = this.materialProps;
    this.value_6s7ubj$_yexcwl$_0 = this.materialProps;
  }
  ToggleButtonGroupElementBuilder.prototype.classes_yfjqio$ = function ($receiver, classMap) {
    var destination = ArrayList_init(classMap.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== classMap.length; ++tmp$) {
      var item = classMap[tmp$];
      destination.add_11rb$(to(item.first, item.second));
    }
    this.classes_rebstj$($receiver, destination);
  };
  var ToggleButtonGroupElementBuilder$exclusive_metadata = new PropertyMetadata('exclusive');
  ToggleButtonGroupElementBuilder.prototype.get_exclusive_6s7ubj$ = function ($receiver) {
    return getValue(this.exclusive_6s7ubj$_1nayaw$_0, $receiver, ToggleButtonGroupElementBuilder$exclusive_metadata);
  };
  ToggleButtonGroupElementBuilder.prototype.set_exclusive_h3caxp$ = function ($receiver, exclusive) {
    setValue(this.exclusive_6s7ubj$_1nayaw$_0, $receiver, ToggleButtonGroupElementBuilder$exclusive_metadata, exclusive);
  };
  var ToggleButtonGroupElementBuilder$onChange_metadata = new PropertyMetadata('onChange');
  ToggleButtonGroupElementBuilder.prototype.get_onChange_6s7ubj$ = function ($receiver) {
    return getValue(this.onChange_6s7ubj$_8xgqp3$_0, $receiver, ToggleButtonGroupElementBuilder$onChange_metadata);
  };
  ToggleButtonGroupElementBuilder.prototype.set_onChange_dbzn3q$ = function ($receiver, onChange) {
    setValue(this.onChange_6s7ubj$_8xgqp3$_0, $receiver, ToggleButtonGroupElementBuilder$onChange_metadata, onChange);
  };
  ToggleButtonGroupElementBuilder.prototype.onChange_dbzn3q$ = function ($receiver, block) {
    this.set_onChange_dbzn3q$($receiver, block);
  };
  var ToggleButtonGroupElementBuilder$value_metadata = new PropertyMetadata('value');
  ToggleButtonGroupElementBuilder.prototype.get_value_6s7ubj$ = function ($receiver) {
    return getValue(this.value_6s7ubj$_yexcwl$_0, $receiver, ToggleButtonGroupElementBuilder$value_metadata);
  };
  ToggleButtonGroupElementBuilder.prototype.set_value_j5g3mn$ = function ($receiver, value) {
    setValue(this.value_6s7ubj$_yexcwl$_0, $receiver, ToggleButtonGroupElementBuilder$value_metadata, value);
  };
  function ToggleButtonGroupElementBuilder_init$lambda(it) {
    return new DIV(emptyMap(), it);
  }
  ToggleButtonGroupElementBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ToggleButtonGroupElementBuilder',
    interfaces: [MaterialElementBuilder]
  };
  function ToggleButtonGroupOrientation(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ToggleButtonGroupOrientation_initFields() {
    ToggleButtonGroupOrientation_initFields = function () {
    };
    ToggleButtonGroupOrientation$horizontal_instance = new ToggleButtonGroupOrientation('horizontal', 0);
    ToggleButtonGroupOrientation$vertical_instance = new ToggleButtonGroupOrientation('vertical', 1);
  }
  var ToggleButtonGroupOrientation$horizontal_instance;
  function ToggleButtonGroupOrientation$horizontal_getInstance() {
    ToggleButtonGroupOrientation_initFields();
    return ToggleButtonGroupOrientation$horizontal_instance;
  }
  var ToggleButtonGroupOrientation$vertical_instance;
  function ToggleButtonGroupOrientation$vertical_getInstance() {
    ToggleButtonGroupOrientation_initFields();
    return ToggleButtonGroupOrientation$vertical_instance;
  }
  ToggleButtonGroupOrientation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ToggleButtonGroupOrientation',
    interfaces: [Enum]
  };
  function ToggleButtonGroupOrientation$values() {
    return [ToggleButtonGroupOrientation$horizontal_getInstance(), ToggleButtonGroupOrientation$vertical_getInstance()];
  }
  ToggleButtonGroupOrientation.values = ToggleButtonGroupOrientation$values;
  function ToggleButtonGroupOrientation$valueOf(name) {
    switch (name) {
      case 'horizontal':
        return ToggleButtonGroupOrientation$horizontal_getInstance();
      case 'vertical':
        return ToggleButtonGroupOrientation$vertical_getInstance();
      default:throwISE('No enum constant materialui.lab.components.togglebuttongroup.enums.ToggleButtonGroupOrientation.' + name);
    }
  }
  ToggleButtonGroupOrientation.valueOf_61zpoe$ = ToggleButtonGroupOrientation$valueOf;
  function ToggleButtonGroupSize(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ToggleButtonGroupSize_initFields() {
    ToggleButtonGroupSize_initFields = function () {
    };
    ToggleButtonGroupSize$large_instance = new ToggleButtonGroupSize('large', 0);
    ToggleButtonGroupSize$medium_instance = new ToggleButtonGroupSize('medium', 1);
    ToggleButtonGroupSize$small_instance = new ToggleButtonGroupSize('small', 2);
  }
  var ToggleButtonGroupSize$large_instance;
  function ToggleButtonGroupSize$large_getInstance() {
    ToggleButtonGroupSize_initFields();
    return ToggleButtonGroupSize$large_instance;
  }
  var ToggleButtonGroupSize$medium_instance;
  function ToggleButtonGroupSize$medium_getInstance() {
    ToggleButtonGroupSize_initFields();
    return ToggleButtonGroupSize$medium_instance;
  }
  var ToggleButtonGroupSize$small_instance;
  function ToggleButtonGroupSize$small_getInstance() {
    ToggleButtonGroupSize_initFields();
    return ToggleButtonGroupSize$small_instance;
  }
  ToggleButtonGroupSize.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ToggleButtonGroupSize',
    interfaces: [Enum]
  };
  function ToggleButtonGroupSize$values() {
    return [ToggleButtonGroupSize$large_getInstance(), ToggleButtonGroupSize$medium_getInstance(), ToggleButtonGroupSize$small_getInstance()];
  }
  ToggleButtonGroupSize.values = ToggleButtonGroupSize$values;
  function ToggleButtonGroupSize$valueOf(name) {
    switch (name) {
      case 'large':
        return ToggleButtonGroupSize$large_getInstance();
      case 'medium':
        return ToggleButtonGroupSize$medium_getInstance();
      case 'small':
        return ToggleButtonGroupSize$small_getInstance();
      default:throwISE('No enum constant materialui.lab.components.togglebuttongroup.enums.ToggleButtonGroupSize.' + name);
    }
  }
  ToggleButtonGroupSize.valueOf_61zpoe$ = ToggleButtonGroupSize$valueOf;
  function ToggleButtonGroupStyle(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ToggleButtonGroupStyle_initFields() {
    ToggleButtonGroupStyle_initFields = function () {
    };
    ToggleButtonGroupStyle$root_instance = new ToggleButtonGroupStyle('root', 0);
    ToggleButtonGroupStyle$vertical_instance = new ToggleButtonGroupStyle('vertical', 1);
    ToggleButtonGroupStyle$grouped_instance = new ToggleButtonGroupStyle('grouped', 2);
    ToggleButtonGroupStyle$groupedHorizontal_instance = new ToggleButtonGroupStyle('groupedHorizontal', 3);
    ToggleButtonGroupStyle$groupedVertical_instance = new ToggleButtonGroupStyle('groupedVertical', 4);
  }
  var ToggleButtonGroupStyle$root_instance;
  function ToggleButtonGroupStyle$root_getInstance() {
    ToggleButtonGroupStyle_initFields();
    return ToggleButtonGroupStyle$root_instance;
  }
  var ToggleButtonGroupStyle$vertical_instance;
  function ToggleButtonGroupStyle$vertical_getInstance() {
    ToggleButtonGroupStyle_initFields();
    return ToggleButtonGroupStyle$vertical_instance;
  }
  var ToggleButtonGroupStyle$grouped_instance;
  function ToggleButtonGroupStyle$grouped_getInstance() {
    ToggleButtonGroupStyle_initFields();
    return ToggleButtonGroupStyle$grouped_instance;
  }
  var ToggleButtonGroupStyle$groupedHorizontal_instance;
  function ToggleButtonGroupStyle$groupedHorizontal_getInstance() {
    ToggleButtonGroupStyle_initFields();
    return ToggleButtonGroupStyle$groupedHorizontal_instance;
  }
  var ToggleButtonGroupStyle$groupedVertical_instance;
  function ToggleButtonGroupStyle$groupedVertical_getInstance() {
    ToggleButtonGroupStyle_initFields();
    return ToggleButtonGroupStyle$groupedVertical_instance;
  }
  ToggleButtonGroupStyle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ToggleButtonGroupStyle',
    interfaces: [Enum]
  };
  function ToggleButtonGroupStyle$values() {
    return [ToggleButtonGroupStyle$root_getInstance(), ToggleButtonGroupStyle$vertical_getInstance(), ToggleButtonGroupStyle$grouped_getInstance(), ToggleButtonGroupStyle$groupedHorizontal_getInstance(), ToggleButtonGroupStyle$groupedVertical_getInstance()];
  }
  ToggleButtonGroupStyle.values = ToggleButtonGroupStyle$values;
  function ToggleButtonGroupStyle$valueOf(name) {
    switch (name) {
      case 'root':
        return ToggleButtonGroupStyle$root_getInstance();
      case 'vertical':
        return ToggleButtonGroupStyle$vertical_getInstance();
      case 'grouped':
        return ToggleButtonGroupStyle$grouped_getInstance();
      case 'groupedHorizontal':
        return ToggleButtonGroupStyle$groupedHorizontal_getInstance();
      case 'groupedVertical':
        return ToggleButtonGroupStyle$groupedVertical_getInstance();
      default:throwISE('No enum constant materialui.lab.components.togglebuttongroup.enums.ToggleButtonGroupStyle.' + name);
    }
  }
  ToggleButtonGroupStyle.valueOf_61zpoe$ = ToggleButtonGroupStyle$valueOf;
  var toggleButtonGroupComponent;
  function toggleButtonGroup($receiver, classMap, block) {
    var $receiver_0 = new ToggleButtonGroupElementBuilder(toggleButtonGroupComponent, toList(classMap));
    block($receiver_0);
    return $receiver.child_52psg1$($receiver_0.create());
  }
  function TreeItemElementBuilder(type, classMap, factory) {
    MaterialElementBuilder.call(this, type, classMap, factory);
    this.collapseIcon_6s7ubj$_pneulw$_0 = this.materialProps;
    this.endIcon_6s7ubj$_hcqia0$_0 = this.materialProps;
    this.expandIcon_6s7ubj$_4fc63l$_0 = this.materialProps;
    this.icon_6s7ubj$_ig0qqv$_0 = this.materialProps;
    this.label_6s7ubj$_czmo54$_0 = this.materialProps;
    this.nodeId_6s7ubj$_qq16dx$_0 = this.materialProps;
    this.TransitionProps_6s7ubj$_mk9we7$_0 = this.materialProps;
    this.TransitionComponent_6s7ubj$_xf32j0$_0 = this.materialProps;
  }
  TreeItemElementBuilder.prototype.classes_9471ha$ = function ($receiver, classMap) {
    this.classes_rebstj$($receiver, toList(classMap));
  };
  var TreeItemElementBuilder$collapseIcon_metadata = new PropertyMetadata('collapseIcon');
  TreeItemElementBuilder.prototype.get_collapseIcon_6s7ubj$ = function ($receiver) {
    return getValue(this.collapseIcon_6s7ubj$_pneulw$_0, $receiver, TreeItemElementBuilder$collapseIcon_metadata);
  };
  TreeItemElementBuilder.prototype.set_collapseIcon_aafm1a$ = function ($receiver, collapseIcon) {
    setValue(this.collapseIcon_6s7ubj$_pneulw$_0, $receiver, TreeItemElementBuilder$collapseIcon_metadata, collapseIcon);
  };
  var TreeItemElementBuilder$endIcon_metadata = new PropertyMetadata('endIcon');
  TreeItemElementBuilder.prototype.get_endIcon_6s7ubj$ = function ($receiver) {
    return getValue(this.endIcon_6s7ubj$_hcqia0$_0, $receiver, TreeItemElementBuilder$endIcon_metadata);
  };
  TreeItemElementBuilder.prototype.set_endIcon_aafm1a$ = function ($receiver, endIcon) {
    setValue(this.endIcon_6s7ubj$_hcqia0$_0, $receiver, TreeItemElementBuilder$endIcon_metadata, endIcon);
  };
  var TreeItemElementBuilder$expandIcon_metadata = new PropertyMetadata('expandIcon');
  TreeItemElementBuilder.prototype.get_expandIcon_6s7ubj$ = function ($receiver) {
    return getValue(this.expandIcon_6s7ubj$_4fc63l$_0, $receiver, TreeItemElementBuilder$expandIcon_metadata);
  };
  TreeItemElementBuilder.prototype.set_expandIcon_aafm1a$ = function ($receiver, expandIcon) {
    setValue(this.expandIcon_6s7ubj$_4fc63l$_0, $receiver, TreeItemElementBuilder$expandIcon_metadata, expandIcon);
  };
  var TreeItemElementBuilder$icon_metadata = new PropertyMetadata('icon');
  TreeItemElementBuilder.prototype.get_icon_6s7ubj$ = function ($receiver) {
    return getValue(this.icon_6s7ubj$_ig0qqv$_0, $receiver, TreeItemElementBuilder$icon_metadata);
  };
  TreeItemElementBuilder.prototype.set_icon_aafm1a$ = function ($receiver, icon) {
    setValue(this.icon_6s7ubj$_ig0qqv$_0, $receiver, TreeItemElementBuilder$icon_metadata, icon);
  };
  var TreeItemElementBuilder$label_metadata = new PropertyMetadata('label');
  TreeItemElementBuilder.prototype.get_label_6s7ubj$ = function ($receiver) {
    return getValue(this.label_6s7ubj$_czmo54$_0, $receiver, TreeItemElementBuilder$label_metadata);
  };
  TreeItemElementBuilder.prototype.set_label_aafm1a$ = function ($receiver, label) {
    setValue(this.label_6s7ubj$_czmo54$_0, $receiver, TreeItemElementBuilder$label_metadata, label);
  };
  var TreeItemElementBuilder$nodeId_metadata = new PropertyMetadata('nodeId');
  TreeItemElementBuilder.prototype.get_nodeId_6s7ubj$ = function ($receiver) {
    return getValue(this.nodeId_6s7ubj$_qq16dx$_0, $receiver, TreeItemElementBuilder$nodeId_metadata);
  };
  TreeItemElementBuilder.prototype.set_nodeId_nwiim$ = function ($receiver, nodeId) {
    setValue(this.nodeId_6s7ubj$_qq16dx$_0, $receiver, TreeItemElementBuilder$nodeId_metadata, nodeId);
  };
  var TreeItemElementBuilder$TransitionProps_metadata = new PropertyMetadata('TransitionProps');
  TreeItemElementBuilder.prototype.get_TransitionProps_6s7ubj$ = function ($receiver) {
    return getValue(this.TransitionProps_6s7ubj$_mk9we7$_0, $receiver, TreeItemElementBuilder$TransitionProps_metadata);
  };
  TreeItemElementBuilder.prototype.set_TransitionProps_qgv7bj$ = function ($receiver, TransitionProps) {
    setValue(this.TransitionProps_6s7ubj$_mk9we7$_0, $receiver, TreeItemElementBuilder$TransitionProps_metadata, TransitionProps);
  };
  var TreeItemElementBuilder$TransitionComponent_metadata = new PropertyMetadata('TransitionComponent');
  TreeItemElementBuilder.prototype.get_TransitionComponent_6s7ubj$ = function ($receiver) {
    return getValue(this.TransitionComponent_6s7ubj$_xf32j0$_0, $receiver, TreeItemElementBuilder$TransitionComponent_metadata);
  };
  TreeItemElementBuilder.prototype.set_TransitionComponent_j5g3mn$ = function ($receiver, TransitionComponent) {
    setValue(this.TransitionComponent_6s7ubj$_xf32j0$_0, $receiver, TreeItemElementBuilder$TransitionComponent_metadata, TransitionComponent);
  };
  TreeItemElementBuilder.prototype.collapseIcon_142hnm$ = function ($receiver, block) {
    var $receiver_0 = new RBuilder_init();
    block($receiver_0);
    this.set_collapseIcon_aafm1a$($receiver, first($receiver_0.childList));
  };
  TreeItemElementBuilder.prototype.endIcon_142hnm$ = function ($receiver, block) {
    var $receiver_0 = new RBuilder_init();
    block($receiver_0);
    this.set_endIcon_aafm1a$($receiver, first($receiver_0.childList));
  };
  TreeItemElementBuilder.prototype.expandIcon_142hnm$ = function ($receiver, block) {
    var $receiver_0 = new RBuilder_init();
    block($receiver_0);
    this.set_expandIcon_aafm1a$($receiver, first($receiver_0.childList));
  };
  TreeItemElementBuilder.prototype.icon_142hnm$ = function ($receiver, block) {
    var $receiver_0 = new RBuilder_init();
    block($receiver_0);
    this.set_icon_aafm1a$($receiver, first($receiver_0.childList));
  };
  TreeItemElementBuilder.prototype.label_142hnm$ = function ($receiver, block) {
    var $receiver_0 = new RBuilder_init();
    block($receiver_0);
    this.set_label_aafm1a$($receiver, first($receiver_0.childList));
  };
  TreeItemElementBuilder.prototype.TransitionComponent_g0n3bx$ = function ($receiver, tagName) {
    this.set_TransitionComponent_j5g3mn$($receiver, tagName);
  };
  TreeItemElementBuilder.prototype.TransitionComponent_q3335$ = function ($receiver, kClass) {
    this.set_TransitionComponent_j5g3mn$($receiver, get_rClass(kClass));
  };
  TreeItemElementBuilder.prototype.TransitionComponent_mn3h3n$ = function ($receiver, functionalComponent) {
    this.set_TransitionComponent_j5g3mn$($receiver, functionalComponent);
  };
  TreeItemElementBuilder.prototype.TransitionProps_yzgsfr$ = function ($receiver, block) {
    var $receiver_0 = {};
    block($receiver_0);
    this.set_TransitionProps_qgv7bj$($receiver, $receiver_0);
  };
  TreeItemElementBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TreeItemElementBuilder',
    interfaces: [MaterialElementBuilder]
  };
  function TreeItemStyle(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function TreeItemStyle_initFields() {
    TreeItemStyle_initFields = function () {
    };
    TreeItemStyle$root_instance = new TreeItemStyle('root', 0);
    TreeItemStyle$expanded_instance = new TreeItemStyle('expanded', 1);
    TreeItemStyle$group_instance = new TreeItemStyle('group', 2);
    TreeItemStyle$content_instance = new TreeItemStyle('content', 3);
    TreeItemStyle$iconContainer_instance = new TreeItemStyle('iconContainer', 4);
    TreeItemStyle$label_instance = new TreeItemStyle('label', 5);
  }
  var TreeItemStyle$root_instance;
  function TreeItemStyle$root_getInstance() {
    TreeItemStyle_initFields();
    return TreeItemStyle$root_instance;
  }
  var TreeItemStyle$expanded_instance;
  function TreeItemStyle$expanded_getInstance() {
    TreeItemStyle_initFields();
    return TreeItemStyle$expanded_instance;
  }
  var TreeItemStyle$group_instance;
  function TreeItemStyle$group_getInstance() {
    TreeItemStyle_initFields();
    return TreeItemStyle$group_instance;
  }
  var TreeItemStyle$content_instance;
  function TreeItemStyle$content_getInstance() {
    TreeItemStyle_initFields();
    return TreeItemStyle$content_instance;
  }
  var TreeItemStyle$iconContainer_instance;
  function TreeItemStyle$iconContainer_getInstance() {
    TreeItemStyle_initFields();
    return TreeItemStyle$iconContainer_instance;
  }
  var TreeItemStyle$label_instance;
  function TreeItemStyle$label_getInstance() {
    TreeItemStyle_initFields();
    return TreeItemStyle$label_instance;
  }
  TreeItemStyle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TreeItemStyle',
    interfaces: [Enum]
  };
  function TreeItemStyle$values() {
    return [TreeItemStyle$root_getInstance(), TreeItemStyle$expanded_getInstance(), TreeItemStyle$group_getInstance(), TreeItemStyle$content_getInstance(), TreeItemStyle$iconContainer_getInstance(), TreeItemStyle$label_getInstance()];
  }
  TreeItemStyle.values = TreeItemStyle$values;
  function TreeItemStyle$valueOf(name) {
    switch (name) {
      case 'root':
        return TreeItemStyle$root_getInstance();
      case 'expanded':
        return TreeItemStyle$expanded_getInstance();
      case 'group':
        return TreeItemStyle$group_getInstance();
      case 'content':
        return TreeItemStyle$content_getInstance();
      case 'iconContainer':
        return TreeItemStyle$iconContainer_getInstance();
      case 'label':
        return TreeItemStyle$label_getInstance();
      default:throwISE('No enum constant materialui.lab.components.treeItem.enums.TreeItemStyle.' + name);
    }
  }
  TreeItemStyle.valueOf_61zpoe$ = TreeItemStyle$valueOf;
  var treeItemComponent;
  function treeItem$lambda(it) {
    return new LI(emptyMap(), it);
  }
  function treeItem($receiver, classMap, block) {
    var $receiver_0 = new TreeItemElementBuilder(treeItemComponent, toList(classMap), treeItem$lambda);
    block($receiver_0);
    return $receiver.child_52psg1$($receiver_0.create());
  }
  function treeItem_0($receiver, classMap, factory, block) {
    var $receiver_0 = new TreeItemElementBuilder(treeItemComponent, toList(classMap), factory);
    block($receiver_0);
    return $receiver.child_52psg1$($receiver_0.create());
  }
  function TreeViewElementBuilder(type, classMap, factory, multiSelect) {
    MaterialElementBuilder.call(this, type, classMap, factory);
    this.materialProps.multiSelect = multiSelect;
    this.defaultCollapseIcon_6s7ubj$_q9yf6d$_0 = this.materialProps;
    this.defaultEndIcon_6s7ubj$_w3amxr$_0 = this.materialProps;
    this.defaultExpandIcon_6s7ubj$_5z4qaw$_0 = this.materialProps;
    this.defaultParentIcon_6s7ubj$_tximso$_0 = this.materialProps;
    this.expanded_6s7ubj$_3inr4p$_0 = this.materialProps;
    this.defaultExpanded_6s7ubj$_kr1naa$_0 = this.materialProps;
    this.onNodeToggle_6s7ubj$_ruo1yb$_0 = this.materialProps;
    this.multiSelect_6s7ubj$_mr2lg9$_0 = this.materialProps;
    this.selected_6s7ubj$_ky4f5j$_0 = this.materialProps;
    this.onNodeSelect_6s7ubj$_qkftdh$_0 = this.materialProps;
  }
  TreeViewElementBuilder.prototype.classes_r81q4i$ = function ($receiver, classMap) {
    this.classes_rebstj$($receiver, toList(classMap));
  };
  var TreeViewElementBuilder$defaultCollapseIcon_metadata = new PropertyMetadata('defaultCollapseIcon');
  TreeViewElementBuilder.prototype.get_defaultCollapseIcon_6s7ubj$ = function ($receiver) {
    return getValue(this.defaultCollapseIcon_6s7ubj$_q9yf6d$_0, $receiver, TreeViewElementBuilder$defaultCollapseIcon_metadata);
  };
  TreeViewElementBuilder.prototype.set_defaultCollapseIcon_aafm1a$ = function ($receiver, defaultCollapseIcon) {
    setValue(this.defaultCollapseIcon_6s7ubj$_q9yf6d$_0, $receiver, TreeViewElementBuilder$defaultCollapseIcon_metadata, defaultCollapseIcon);
  };
  var TreeViewElementBuilder$defaultEndIcon_metadata = new PropertyMetadata('defaultEndIcon');
  TreeViewElementBuilder.prototype.get_defaultEndIcon_6s7ubj$ = function ($receiver) {
    return getValue(this.defaultEndIcon_6s7ubj$_w3amxr$_0, $receiver, TreeViewElementBuilder$defaultEndIcon_metadata);
  };
  TreeViewElementBuilder.prototype.set_defaultEndIcon_aafm1a$ = function ($receiver, defaultEndIcon) {
    setValue(this.defaultEndIcon_6s7ubj$_w3amxr$_0, $receiver, TreeViewElementBuilder$defaultEndIcon_metadata, defaultEndIcon);
  };
  var TreeViewElementBuilder$defaultExpandIcon_metadata = new PropertyMetadata('defaultExpandIcon');
  TreeViewElementBuilder.prototype.get_defaultExpandIcon_6s7ubj$ = function ($receiver) {
    return getValue(this.defaultExpandIcon_6s7ubj$_5z4qaw$_0, $receiver, TreeViewElementBuilder$defaultExpandIcon_metadata);
  };
  TreeViewElementBuilder.prototype.set_defaultExpandIcon_aafm1a$ = function ($receiver, defaultExpandIcon) {
    setValue(this.defaultExpandIcon_6s7ubj$_5z4qaw$_0, $receiver, TreeViewElementBuilder$defaultExpandIcon_metadata, defaultExpandIcon);
  };
  var TreeViewElementBuilder$defaultParentIcon_metadata = new PropertyMetadata('defaultParentIcon');
  TreeViewElementBuilder.prototype.get_defaultParentIcon_6s7ubj$ = function ($receiver) {
    return getValue(this.defaultParentIcon_6s7ubj$_tximso$_0, $receiver, TreeViewElementBuilder$defaultParentIcon_metadata);
  };
  TreeViewElementBuilder.prototype.set_defaultParentIcon_aafm1a$ = function ($receiver, defaultParentIcon) {
    setValue(this.defaultParentIcon_6s7ubj$_tximso$_0, $receiver, TreeViewElementBuilder$defaultParentIcon_metadata, defaultParentIcon);
  };
  var TreeViewElementBuilder$expanded_metadata = new PropertyMetadata('expanded');
  TreeViewElementBuilder.prototype.get_expanded_6s7ubj$ = function ($receiver) {
    return getValue(this.expanded_6s7ubj$_3inr4p$_0, $receiver, TreeViewElementBuilder$expanded_metadata);
  };
  TreeViewElementBuilder.prototype.set_expanded_9yuumo$ = function ($receiver, expanded) {
    setValue(this.expanded_6s7ubj$_3inr4p$_0, $receiver, TreeViewElementBuilder$expanded_metadata, expanded);
  };
  var TreeViewElementBuilder$defaultExpanded_metadata = new PropertyMetadata('defaultExpanded');
  TreeViewElementBuilder.prototype.get_defaultExpanded_6s7ubj$ = function ($receiver) {
    return getValue(this.defaultExpanded_6s7ubj$_kr1naa$_0, $receiver, TreeViewElementBuilder$defaultExpanded_metadata);
  };
  TreeViewElementBuilder.prototype.set_defaultExpanded_9yuumo$ = function ($receiver, defaultExpanded) {
    setValue(this.defaultExpanded_6s7ubj$_kr1naa$_0, $receiver, TreeViewElementBuilder$defaultExpanded_metadata, defaultExpanded);
  };
  var TreeViewElementBuilder$onNodeToggle_metadata = new PropertyMetadata('onNodeToggle');
  TreeViewElementBuilder.prototype.get_onNodeToggle_6s7ubj$ = function ($receiver) {
    return getValue(this.onNodeToggle_6s7ubj$_ruo1yb$_0, $receiver, TreeViewElementBuilder$onNodeToggle_metadata);
  };
  TreeViewElementBuilder.prototype.set_onNodeToggle_plq1dy$ = function ($receiver, onNodeToggle) {
    setValue(this.onNodeToggle_6s7ubj$_ruo1yb$_0, $receiver, TreeViewElementBuilder$onNodeToggle_metadata, onNodeToggle);
  };
  var TreeViewElementBuilder$multiSelect_metadata = new PropertyMetadata('multiSelect');
  TreeViewElementBuilder.prototype.get_multiSelect_6s7ubj$ = function ($receiver) {
    return getValue(this.multiSelect_6s7ubj$_mr2lg9$_0, $receiver, TreeViewElementBuilder$multiSelect_metadata);
  };
  TreeViewElementBuilder.prototype.set_multiSelect_h3caxp$ = function ($receiver, multiSelect) {
    setValue(this.multiSelect_6s7ubj$_mr2lg9$_0, $receiver, TreeViewElementBuilder$multiSelect_metadata, multiSelect);
  };
  var TreeViewElementBuilder$selected_metadata = new PropertyMetadata('selected');
  TreeViewElementBuilder.prototype.get_selected_6s7ubj$ = function ($receiver) {
    return getValue(this.selected_6s7ubj$_ky4f5j$_0, $receiver, TreeViewElementBuilder$selected_metadata);
  };
  TreeViewElementBuilder.prototype.set_selected_nwiim$ = function ($receiver, selected) {
    setValue(this.selected_6s7ubj$_ky4f5j$_0, $receiver, TreeViewElementBuilder$selected_metadata, selected);
  };
  TreeViewElementBuilder.prototype.defaultCollapseIcon_142hnm$ = function ($receiver, block) {
    var $receiver_0 = new RBuilder_init();
    block($receiver_0);
    this.set_defaultCollapseIcon_aafm1a$($receiver, first($receiver_0.childList));
  };
  TreeViewElementBuilder.prototype.defaultEndIcon_142hnm$ = function ($receiver, block) {
    var $receiver_0 = new RBuilder_init();
    block($receiver_0);
    this.set_defaultEndIcon_aafm1a$($receiver, first($receiver_0.childList));
  };
  TreeViewElementBuilder.prototype.defaultExpandIcon_142hnm$ = function ($receiver, block) {
    var $receiver_0 = new RBuilder_init();
    block($receiver_0);
    this.set_defaultExpandIcon_aafm1a$($receiver, first($receiver_0.childList));
  };
  TreeViewElementBuilder.prototype.defaultParentIcon_142hnm$ = function ($receiver, block) {
    var $receiver_0 = new RBuilder_init();
    block($receiver_0);
    this.set_defaultParentIcon_aafm1a$($receiver, first($receiver_0.childList));
  };
  var TreeViewElementBuilder$onNodeSelect_metadata = new PropertyMetadata('onNodeSelect');
  TreeViewElementBuilder.prototype.get_onNodeSelect_6s7ubj$ = function ($receiver) {
    return getValue(this.onNodeSelect_6s7ubj$_qkftdh$_0, $receiver, TreeViewElementBuilder$onNodeSelect_metadata);
  };
  TreeViewElementBuilder.prototype.set_onNodeSelect_rcbquo$ = function ($receiver, onNodeSelect) {
    setValue(this.onNodeSelect_6s7ubj$_qkftdh$_0, $receiver, TreeViewElementBuilder$onNodeSelect_metadata, onNodeSelect);
  };
  TreeViewElementBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TreeViewElementBuilder',
    interfaces: [MaterialElementBuilder]
  };
  function SingleSelectTreeViewElementBuilder(type, classMap, factory) {
    TreeViewElementBuilder.call(this, type, classMap, factory, false);
    this.defaultSelected_6s7ubj$_3868xo$_0 = this.materialProps;
  }
  var SingleSelectTreeViewElementBuilder$defaultSelected_metadata = new PropertyMetadata('defaultSelected');
  SingleSelectTreeViewElementBuilder.prototype.get_defaultSelected_6s7ubj$ = function ($receiver) {
    return getValue(this.defaultSelected_6s7ubj$_3868xo$_0, $receiver, SingleSelectTreeViewElementBuilder$defaultSelected_metadata);
  };
  SingleSelectTreeViewElementBuilder.prototype.set_defaultSelected_nwiim$ = function ($receiver, defaultSelected) {
    setValue(this.defaultSelected_6s7ubj$_3868xo$_0, $receiver, SingleSelectTreeViewElementBuilder$defaultSelected_metadata, defaultSelected);
  };
  SingleSelectTreeViewElementBuilder.prototype.onNodeSelect_odvgi0$ = function ($receiver, block) {
    this.set_onNodeSelect_rcbquo$($receiver, block);
  };
  SingleSelectTreeViewElementBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SingleSelectTreeViewElementBuilder',
    interfaces: [TreeViewElementBuilder]
  };
  function MultiSelectTreeViewElementBuilder(type, classMap, factory) {
    TreeViewElementBuilder.call(this, type, classMap, factory, true);
    this.defaultSelected_6s7ubj$_dulyih$_0 = this.materialProps;
  }
  var MultiSelectTreeViewElementBuilder$defaultSelected_metadata = new PropertyMetadata('defaultSelected');
  MultiSelectTreeViewElementBuilder.prototype.get_defaultSelected_6s7ubj$ = function ($receiver) {
    return getValue(this.defaultSelected_6s7ubj$_dulyih$_0, $receiver, MultiSelectTreeViewElementBuilder$defaultSelected_metadata);
  };
  MultiSelectTreeViewElementBuilder.prototype.set_defaultSelected_9yuumo$ = function ($receiver, defaultSelected) {
    setValue(this.defaultSelected_6s7ubj$_dulyih$_0, $receiver, MultiSelectTreeViewElementBuilder$defaultSelected_metadata, defaultSelected);
  };
  MultiSelectTreeViewElementBuilder.prototype.onNodeSelect_plq1dy$ = function ($receiver, block) {
    this.set_onNodeSelect_rcbquo$($receiver, block);
  };
  MultiSelectTreeViewElementBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MultiSelectTreeViewElementBuilder',
    interfaces: [TreeViewElementBuilder]
  };
  function TreeViewStyle(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function TreeViewStyle_initFields() {
    TreeViewStyle_initFields = function () {
    };
    TreeViewStyle$root_instance = new TreeViewStyle('root', 0);
  }
  var TreeViewStyle$root_instance;
  function TreeViewStyle$root_getInstance() {
    TreeViewStyle_initFields();
    return TreeViewStyle$root_instance;
  }
  TreeViewStyle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TreeViewStyle',
    interfaces: [Enum]
  };
  function TreeViewStyle$values() {
    return [TreeViewStyle$root_getInstance()];
  }
  TreeViewStyle.values = TreeViewStyle$values;
  function TreeViewStyle$valueOf(name) {
    switch (name) {
      case 'root':
        return TreeViewStyle$root_getInstance();
      default:throwISE('No enum constant materialui.lab.components.treeView.enums.TreeViewStyle.' + name);
    }
  }
  TreeViewStyle.valueOf_61zpoe$ = TreeViewStyle$valueOf;
  var treeViewComponent;
  function treeView$lambda(it) {
    return new UL(emptyMap(), it);
  }
  function treeView$lambda_0(it) {
    return new UL(emptyMap(), it);
  }
  function treeView($receiver, classMap, multiSelect, block) {
    if (multiSelect === void 0)
      multiSelect = false;
    var tmp$;
    if (multiSelect === true)
      tmp$ = new MultiSelectTreeViewElementBuilder(treeViewComponent, toList(classMap), treeView$lambda);
    else if (multiSelect === false)
      tmp$ = new SingleSelectTreeViewElementBuilder(treeViewComponent, toList(classMap), treeView$lambda_0);
    else
      tmp$ = Kotlin.noWhenBranchMatched();
    var $receiver_0 = tmp$;
    block($receiver_0);
    return $receiver.child_52psg1$($receiver_0.create());
  }
  function treeView_0($receiver, classMap, multiSelect, factory, block) {
    if (multiSelect === void 0)
      multiSelect = false;
    var tmp$;
    if (multiSelect === true)
      tmp$ = new MultiSelectTreeViewElementBuilder(treeViewComponent, toList(classMap), factory);
    else if (multiSelect === false)
      tmp$ = new SingleSelectTreeViewElementBuilder(treeViewComponent, toList(classMap), factory);
    else
      tmp$ = Kotlin.noWhenBranchMatched();
    var $receiver_0 = tmp$;
    block($receiver_0);
    return $receiver.child_52psg1$($receiver_0.create());
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
  var package$skeleton = package$components.skeleton || (package$components.skeleton = {});
  package$skeleton.SkeletonElementBuilder = SkeletonElementBuilder;
  Object.defineProperty(SkeletonAnimation, 'pulse', {
    get: SkeletonAnimation$pulse_getInstance
  });
  Object.defineProperty(SkeletonAnimation, 'wave', {
    get: SkeletonAnimation$wave_getInstance
  });
  Object.defineProperty(SkeletonAnimation, 'false', {
    get: SkeletonAnimation$false_getInstance
  });
  var package$enums_0 = package$skeleton.enums || (package$skeleton.enums = {});
  package$enums_0.SkeletonAnimation = SkeletonAnimation;
  Object.defineProperty(SkeletonStyle, 'root', {
    get: SkeletonStyle$root_getInstance
  });
  Object.defineProperty(SkeletonStyle, 'text', {
    get: SkeletonStyle$text_getInstance
  });
  Object.defineProperty(SkeletonStyle, 'rect', {
    get: SkeletonStyle$rect_getInstance
  });
  Object.defineProperty(SkeletonStyle, 'circle', {
    get: SkeletonStyle$circle_getInstance
  });
  Object.defineProperty(SkeletonStyle, 'pulse', {
    get: SkeletonStyle$pulse_getInstance
  });
  Object.defineProperty(SkeletonStyle, 'wave', {
    get: SkeletonStyle$wave_getInstance
  });
  package$enums_0.SkeletonStyle = SkeletonStyle;
  Object.defineProperty(SkeletonVariant, 'text', {
    get: SkeletonVariant$text_getInstance
  });
  Object.defineProperty(SkeletonVariant, 'rect', {
    get: SkeletonVariant$rect_getInstance
  });
  Object.defineProperty(SkeletonVariant, 'circle', {
    get: SkeletonVariant$circle_getInstance
  });
  package$enums_0.SkeletonVariant = SkeletonVariant;
  package$skeleton.skeleton_3c5x8$ = skeleton;
  package$skeleton.skeleton_xmoy2m$ = skeleton_0;
  var package$togglebutton = package$components.togglebutton || (package$components.togglebutton = {});
  package$togglebutton.ToggleButtonElementBuilder = ToggleButtonElementBuilder;
  Object.defineProperty(ToggleButtonStyle, 'root', {
    get: ToggleButtonStyle$root_getInstance
  });
  Object.defineProperty(ToggleButtonStyle, 'disabled', {
    get: ToggleButtonStyle$disabled_getInstance
  });
  Object.defineProperty(ToggleButtonStyle, 'selected', {
    get: ToggleButtonStyle$selected_getInstance
  });
  Object.defineProperty(ToggleButtonStyle, 'label', {
    get: ToggleButtonStyle$label_getInstance
  });
  Object.defineProperty(ToggleButtonStyle, 'sizeSmall', {
    get: ToggleButtonStyle$sizeSmall_getInstance
  });
  Object.defineProperty(ToggleButtonStyle, 'sizeLarge', {
    get: ToggleButtonStyle$sizeLarge_getInstance
  });
  var package$enums_1 = package$togglebutton.enums || (package$togglebutton.enums = {});
  package$enums_1.ToggleButtonStyle = ToggleButtonStyle;
  package$togglebutton.toggleButton_2j5bdo$ = toggleButton;
  package$togglebutton.toggleButton_wezvlq$ = toggleButton_0;
  var package$togglebuttongroup = package$components.togglebuttongroup || (package$components.togglebuttongroup = {});
  package$togglebuttongroup.ToggleButtonGroupElementBuilder = ToggleButtonGroupElementBuilder;
  Object.defineProperty(ToggleButtonGroupOrientation, 'horizontal', {
    get: ToggleButtonGroupOrientation$horizontal_getInstance
  });
  Object.defineProperty(ToggleButtonGroupOrientation, 'vertical', {
    get: ToggleButtonGroupOrientation$vertical_getInstance
  });
  var package$enums_2 = package$togglebuttongroup.enums || (package$togglebuttongroup.enums = {});
  package$enums_2.ToggleButtonGroupOrientation = ToggleButtonGroupOrientation;
  Object.defineProperty(ToggleButtonGroupSize, 'large', {
    get: ToggleButtonGroupSize$large_getInstance
  });
  Object.defineProperty(ToggleButtonGroupSize, 'medium', {
    get: ToggleButtonGroupSize$medium_getInstance
  });
  Object.defineProperty(ToggleButtonGroupSize, 'small', {
    get: ToggleButtonGroupSize$small_getInstance
  });
  package$enums_2.ToggleButtonGroupSize = ToggleButtonGroupSize;
  Object.defineProperty(ToggleButtonGroupStyle, 'root', {
    get: ToggleButtonGroupStyle$root_getInstance
  });
  Object.defineProperty(ToggleButtonGroupStyle, 'vertical', {
    get: ToggleButtonGroupStyle$vertical_getInstance
  });
  Object.defineProperty(ToggleButtonGroupStyle, 'grouped', {
    get: ToggleButtonGroupStyle$grouped_getInstance
  });
  Object.defineProperty(ToggleButtonGroupStyle, 'groupedHorizontal', {
    get: ToggleButtonGroupStyle$groupedHorizontal_getInstance
  });
  Object.defineProperty(ToggleButtonGroupStyle, 'groupedVertical', {
    get: ToggleButtonGroupStyle$groupedVertical_getInstance
  });
  package$enums_2.ToggleButtonGroupStyle = ToggleButtonGroupStyle;
  package$togglebuttongroup.toggleButtonGroup_fqozo4$ = toggleButtonGroup;
  var package$treeItem = package$components.treeItem || (package$components.treeItem = {});
  package$treeItem.TreeItemElementBuilder = TreeItemElementBuilder;
  Object.defineProperty(TreeItemStyle, 'root', {
    get: TreeItemStyle$root_getInstance
  });
  Object.defineProperty(TreeItemStyle, 'expanded', {
    get: TreeItemStyle$expanded_getInstance
  });
  Object.defineProperty(TreeItemStyle, 'group', {
    get: TreeItemStyle$group_getInstance
  });
  Object.defineProperty(TreeItemStyle, 'content', {
    get: TreeItemStyle$content_getInstance
  });
  Object.defineProperty(TreeItemStyle, 'iconContainer', {
    get: TreeItemStyle$iconContainer_getInstance
  });
  Object.defineProperty(TreeItemStyle, 'label', {
    get: TreeItemStyle$label_getInstance
  });
  var package$enums_3 = package$treeItem.enums || (package$treeItem.enums = {});
  package$enums_3.TreeItemStyle = TreeItemStyle;
  package$treeItem.treeItem_gx8gb3$ = treeItem;
  package$treeItem.treeItem_2xh0n6$ = treeItem_0;
  var package$treeView = package$components.treeView || (package$components.treeView = {});
  package$treeView.TreeViewElementBuilder = TreeViewElementBuilder;
  package$treeView.SingleSelectTreeViewElementBuilder = SingleSelectTreeViewElementBuilder;
  package$treeView.MultiSelectTreeViewElementBuilder = MultiSelectTreeViewElementBuilder;
  Object.defineProperty(TreeViewStyle, 'root', {
    get: TreeViewStyle$root_getInstance
  });
  var package$enums_4 = package$treeView.enums || (package$treeView.enums = {});
  package$enums_4.TreeViewStyle = TreeViewStyle;
  package$treeView.treeView_5mthfc$ = treeView;
  package$treeView.treeView_tv8vxt$ = treeView_0;
  alertComponent = $module$_material_ui_lab_Alert.default;
  alertTitleComponent = $module$_material_ui_lab_AlertTitle.default;
  skeletonComponent = $module$_material_ui_lab_Skeleton.default;
  toggleButtonComponent = $module$_material_ui_lab_ToggleButton.default;
  toggleButtonGroupComponent = $module$_material_ui_lab_ToggleButtonGroup.default;
  treeItemComponent = $module$_material_ui_lab_TreeItem.default;
  treeViewComponent = $module$_material_ui_lab_TreeView.default;
  Kotlin.defineModule('kotlin-material-ui-lab', _);
  return _;
}(module.exports, require('kotlin'), require('kotlin-material-ui-core'), require('kotlin-react'), require('@material-ui/lab/Alert'), require('kotlinx-html-js'), require('@material-ui/lab/AlertTitle'), require('kotlin-extensions'), require('react'), require('@material-ui/lab/Skeleton'), require('@material-ui/lab/ToggleButton'), require('@material-ui/lab/ToggleButtonGroup'), require('@material-ui/lab/TreeItem'), require('@material-ui/lab/TreeView')));

//# sourceMappingURL=kotlin-material-ui-lab.js.map
