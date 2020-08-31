(function (_, Kotlin, $module$kotlin_css_js, $module$styled_components, $module$kotlin_styled, $module$kotlin_react, $module$react_dom, $module$kotlinx_coroutines_core) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var CSSBuilder = $module$kotlin_css_js.kotlinx.css.CSSBuilder;
  var css = $module$kotlin_css_js.kotlinx.css;
  var get_px = $module$kotlin_css_js.kotlinx.css.get_px_rcaex3$;
  var margin = $module$kotlin_css_js.kotlinx.css.margin_9vmwvs$;
  var padding = $module$kotlin_css_js.kotlinx.css.padding_9vmwvs$;
  var Unit = Kotlin.kotlin.Unit;
  var injectGlobal = $module$kotlin_styled.styled.injectGlobal_8rxfql$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var getKClass = Kotlin.getKClass;
  var render = $module$react_dom.render;
  var Job = $module$kotlinx_coroutines_core.kotlinx.coroutines.Job_5dx9e$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var CoroutineScope = $module$kotlinx_coroutines_core.kotlinx.coroutines.CoroutineScope;
  var RBuilder_init = $module$kotlin_react.react.RBuilder;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var StyleSheet = $module$kotlin_styled.styled.StyleSheet;
  var padding_0 = $module$kotlin_css_js.kotlinx.css.padding_cx3uck$;
  var set_marginBottom = $module$kotlin_css_js.kotlinx.css.set_marginBottom_n8chyh$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var RComponent_init = $module$kotlin_react.react.RComponent_init_lqgejo$;
  var RComponent = $module$kotlin_react.react.RComponent;
  var html = $module$kotlin_styled.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
  var DIV_init = $module$kotlin_styled.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIV;
  var StyledDOMBuilder_init = $module$kotlin_styled.styled.StyledDOMBuilder;
  ApplicationStyles.prototype = Object.create(StyleSheet.prototype);
  ApplicationStyles.prototype.constructor = ApplicationStyles;
  ApplicationComponent.prototype = Object.create(RComponent.prototype);
  ApplicationComponent.prototype.constructor = ApplicationComponent;
  function GlobalStyles() {
    GlobalStyles_instance = this;
  }
  function GlobalStyles$inject$lambda$lambda($receiver) {
    margin($receiver, get_px(0));
    padding($receiver, get_px(0));
    return Unit;
  }
  GlobalStyles.prototype.inject = function () {
    var $receiver = new CSSBuilder(void 0, false);
    $receiver.invoke_30ubnp$(css.body, GlobalStyles$inject$lambda$lambda);
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
  function Application$start$lambda$lambda$lambda($receiver) {
    return Unit;
  }
  Application.prototype.start = function () {
    var tmp$;
    if ((tmp$ = document.getElementById('react-app')) != null) {
      var $receiver = new RBuilder_init();
      $receiver.child_bzgiuu$(getKClass(ApplicationComponent), Application$start$lambda$lambda$lambda);
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
  function styledDiv$lambda(it) {
    return new DIV_init(html.emptyMap, it);
  }
  function ApplicationStyles() {
    ApplicationStyles_instance = this;
    StyleSheet.call(this, 'ApplicationStyles', true);
    this.wrapper_4etkus$_0 = this.css_wopuc9$([], ApplicationStyles$wrapper$lambda);
    this.post_q85g2d$_0 = this.css_wopuc9$([], ApplicationStyles$post$lambda);
  }
  var ApplicationStyles$wrapper_metadata = new PropertyMetadata('wrapper');
  Object.defineProperty(ApplicationStyles.prototype, 'wrapper', {
    get: function () {
      return this.wrapper_4etkus$_0.getValue_n5byny$(this, ApplicationStyles$wrapper_metadata);
    }
  });
  var ApplicationStyles$post_metadata = new PropertyMetadata('post');
  Object.defineProperty(ApplicationStyles.prototype, 'post', {
    get: function () {
      return this.post_q85g2d$_0.getValue_n5byny$(this, ApplicationStyles$post_metadata);
    }
  });
  function ApplicationStyles$wrapper$lambda($receiver) {
    padding_0($receiver, get_px(32), get_px(16));
    return Unit;
  }
  function ApplicationStyles$post$lambda($receiver) {
    set_marginBottom($receiver, get_px(32));
    return Unit;
  }
  ApplicationStyles.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ApplicationStyles',
    interfaces: [StyleSheet]
  };
  var ApplicationStyles_instance = null;
  function ApplicationStyles_getInstance() {
    if (ApplicationStyles_instance === null) {
      new ApplicationStyles();
    }return ApplicationStyles_instance;
  }
  function ApplicationProps() {
  }
  ApplicationProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ApplicationProps',
    interfaces: []
  };
  function ApplicationState() {
  }
  ApplicationState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ApplicationState',
    interfaces: []
  };
  function ApplicationComponent() {
    RComponent_init(this);
    this.state = new ApplicationState();
  }
  Object.defineProperty(ApplicationComponent.prototype, 'coroutineContext_0', {
    get: function () {
      return this.props.coroutineScope.coroutineContext;
    }
  });
  ApplicationComponent.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = new StyledDOMBuilder_init(styledDiv$lambda);
    $receiver_0.css.unaryPlus_ocqyl0$(ApplicationStyles_getInstance().wrapper);
    $receiver_0.unaryPlus_pdl1vz$('Kotlin multiplatform react application demo');
    $receiver.child_2usv9w$($receiver_0.create());
  };
  ApplicationComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ApplicationComponent',
    interfaces: [RComponent]
  };
  Object.defineProperty(_, 'GlobalStyles', {
    get: GlobalStyles_getInstance
  });
  $$importsForInline$$['kotlin-react'] = $module$kotlin_react;
  _.main = main;
  var package$view = _.view || (_.view = {});
  package$view.ApplicationProps = ApplicationProps;
  package$view.ApplicationState = ApplicationState;
  $$importsForInline$$['kotlin-styled'] = $module$kotlin_styled;
  package$view.ApplicationComponent = ApplicationComponent;
  main();
  Kotlin.defineModule('BUTILKA', _);
  return _;
}(module.exports, require('kotlin'), require('kotlin-css-js'), require('styled-components'), require('kotlin-styled'), require('kotlin-react'), require('react-dom'), require('kotlinx-coroutines-core')));

//# sourceMappingURL=BUTILKA.js.map
