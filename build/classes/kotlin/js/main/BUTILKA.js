(function (_, Kotlin, $module$kotlin_css_js, $module$styled_components, $module$kotlin_styled, $module$kotlin_react, $module$react_dom, $module$kotlinx_coroutines_core, $module$kotlin_react_dom, $module$kotlinx_html_js) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Kind_CLASS = Kotlin.Kind.CLASS;
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
  var CoroutineScope = $module$kotlinx_coroutines_core.kotlinx.coroutines.CoroutineScope;
  var RBuilder_init = $module$kotlin_react.react.RBuilder;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var toShort = Kotlin.toShort;
  var toString = Kotlin.toString;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var StyleSheet = $module$kotlin_styled.styled.StyleSheet;
  var padding_0 = $module$kotlin_css_js.kotlinx.css.padding_cx3uck$;
  var set_marginBottom = $module$kotlin_css_js.kotlinx.css.set_marginBottom_n8chyh$;
  var InputType = $module$kotlinx_html_js.kotlinx.html.InputType;
  var setState = $module$kotlin_react.react.setState_kpl3tw$;
  var set_onChangeFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onChangeFunction_pszlq2$;
  var set_onClickFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onClickFunction_pszlq2$;
  var getCallableRef = Kotlin.getCallableRef;
  var equals = Kotlin.equals;
  var RComponent_init = $module$kotlin_react.react.RComponent_init_lqgejo$;
  var RComponent = $module$kotlin_react.react.RComponent;
  var attributesMapOf = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
  var H1_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H1;
  var RDOMBuilder_init = $module$kotlin_react_dom.react.dom.RDOMBuilder;
  var enumEncode = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
  var attributesMapOf_0 = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
  var INPUT_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.INPUT;
  var P_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.P;
  var SPAN_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SPAN;
  var BUTTON_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.BUTTON;
  var DIV_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIV;
  ApplicationStyles.prototype = Object.create(StyleSheet.prototype);
  ApplicationStyles.prototype.constructor = ApplicationStyles;
  ApplicationComponent.prototype = Object.create(RComponent.prototype);
  ApplicationComponent.prototype.constructor = ApplicationComponent;
  function RequestsDataTypes() {
  }
  RequestsDataTypes.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'RequestsDataTypes',
    interfaces: []
  };
  function LoginData(username, password) {
    this.username = username;
    this.password = password;
  }
  LoginData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LoginData',
    interfaces: [RequestsDataTypes]
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
  function User(username, password, full_name, organization, certificate_id, personal_id, issued, duty, phone, email) {
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
  }
  User.prototype.toString = function () {
    return '{' + '"' + 'username' + '"' + ':' + '"' + this.username + '"' + ',' + ('"' + 'password' + '"' + ':' + '"' + this.password + '"' + ',') + ('"' + 'full_name' + '"' + ':' + '"' + this.full_name + '"' + ',') + ('"' + 'organization' + '"' + ':' + '"' + this.organization + '"' + ',') + ('"' + 'certificate_id' + '"' + ':' + '"' + this.certificate_id + '"' + ',') + ('"' + 'personal_id' + '"' + ':' + '"' + this.personal_id + '"' + ',') + ('"' + 'issued' + '"' + ':' + '"' + this.issued + '"' + ',') + ('"' + 'duty' + '"' + ':' + '"' + this.duty + '"' + ',') + ('"' + 'phone' + '"' + ':' + '"' + this.phone + '"' + ',') + ('"' + 'email' + '"' + ':' + '"' + this.email + '"' + '}');
  };
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
  User.prototype.copy_cvx4o0$ = function (username, password, full_name, organization, certificate_id, personal_id, issued, duty, phone, email) {
    return new User(username === void 0 ? this.username : username, password === void 0 ? this.password : password, full_name === void 0 ? this.full_name : full_name, organization === void 0 ? this.organization : organization, certificate_id === void 0 ? this.certificate_id : certificate_id, personal_id === void 0 ? this.personal_id : personal_id, issued === void 0 ? this.issued : issued, duty === void 0 ? this.duty : duty, phone === void 0 ? this.phone : phone, email === void 0 ? this.email : email);
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
    return result;
  };
  User.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.username, other.username) && Kotlin.equals(this.password, other.password) && Kotlin.equals(this.full_name, other.full_name) && Kotlin.equals(this.organization, other.organization) && Kotlin.equals(this.certificate_id, other.certificate_id) && Kotlin.equals(this.personal_id, other.personal_id) && Kotlin.equals(this.issued, other.issued) && Kotlin.equals(this.duty, other.duty) && Kotlin.equals(this.phone, other.phone) && Kotlin.equals(this.email, other.email)))));
  };
  function CaseInfo(username, password, participant, victim, witness, comment) {
    this.username = username;
    this.password = password;
    this.participant = participant;
    this.victim = victim;
    this.witness = witness;
    this.comment = comment;
  }
  CaseInfo.prototype.toString = function () {
    return '{' + '"' + 'username' + '"' + ':' + '"' + this.username + '"' + ',' + ('"' + 'password' + '"' + ':' + '"' + this.password + '"' + ',') + ('"' + 'participant' + '"' + ':' + '"' + this.participant + '"' + ',') + ('"' + 'victim' + '"' + ':' + '"' + this.victim + '"' + ',') + ('"' + 'witness' + '"' + ':' + '"' + this.witness + '"' + ',') + ('"' + 'comment' + '"' + ':' + '"' + this.comment + '"' + '}');
  };
  CaseInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CaseInfo',
    interfaces: [RequestsDataTypes]
  };
  CaseInfo.prototype.component1 = function () {
    return this.username;
  };
  CaseInfo.prototype.component2 = function () {
    return this.password;
  };
  CaseInfo.prototype.component3 = function () {
    return this.participant;
  };
  CaseInfo.prototype.component4 = function () {
    return this.victim;
  };
  CaseInfo.prototype.component5 = function () {
    return this.witness;
  };
  CaseInfo.prototype.component6 = function () {
    return this.comment;
  };
  CaseInfo.prototype.copy_r3y0ew$ = function (username, password, participant, victim, witness, comment) {
    return new CaseInfo(username === void 0 ? this.username : username, password === void 0 ? this.password : password, participant === void 0 ? this.participant : participant, victim === void 0 ? this.victim : victim, witness === void 0 ? this.witness : witness, comment === void 0 ? this.comment : comment);
  };
  CaseInfo.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.username) | 0;
    result = result * 31 + Kotlin.hashCode(this.password) | 0;
    result = result * 31 + Kotlin.hashCode(this.participant) | 0;
    result = result * 31 + Kotlin.hashCode(this.victim) | 0;
    result = result * 31 + Kotlin.hashCode(this.witness) | 0;
    result = result * 31 + Kotlin.hashCode(this.comment) | 0;
    return result;
  };
  CaseInfo.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.username, other.username) && Kotlin.equals(this.password, other.password) && Kotlin.equals(this.participant, other.participant) && Kotlin.equals(this.victim, other.victim) && Kotlin.equals(this.witness, other.witness) && Kotlin.equals(this.comment, other.comment)))));
  };
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
  var serverURL;
  function httpGET$lambda(closure$xmlHttp, closure$callback) {
    return function (it) {
      if (closure$xmlHttp.readyState === toShort(4) && closure$xmlHttp.status === toShort(200)) {
        closure$callback(closure$xmlHttp.responseText);
      } else {
        console.log(closure$xmlHttp.readyState.toString() + '  ' + toString(closure$xmlHttp.status));
      }
      return Unit;
    };
  }
  function httpGET(url, callback) {
    var param1 = 'Petr';
    var params = 'login=Petr';
    var urlRequest = serverURL + url + '?' + params;
    console.log(params);
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', urlRequest);
    xmlHttp.onload = httpGET$lambda(xmlHttp, callback);
    xmlHttp.send();
  }
  function httpPOST$lambda(closure$xmlHttp, closure$callback) {
    return function (it) {
      if (closure$xmlHttp.readyState === toShort(4) && closure$xmlHttp.status === toShort(200)) {
        closure$callback(closure$xmlHttp.responseText);
      } else {
        console.log(closure$xmlHttp.readyState.toString() + '  ' + toString(closure$xmlHttp.status));
      }
      return Unit;
    };
  }
  function httpPOST(url, body, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open('POST', serverURL + url, true);
    xmlHttp.setRequestHeader('Accept', '*/*');
    xmlHttp.setRequestHeader('Accept-Language', 'en-US,en;q=0.5');
    xmlHttp.setRequestHeader('Content-Type', 'application/json');
    xmlHttp.onload = httpPOST$lambda(xmlHttp, callback);
    xmlHttp.send(body);
  }
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
  function p$lambda(closure$classes) {
    return function (it) {
      return new P_init(attributesMapOf('class', closure$classes), it);
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
  function div$lambda(closure$classes) {
    return function (it) {
      return new DIV_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function get_inputValue($receiver) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    return (tmp$_4 = (tmp$_3 = (tmp$_0 = Kotlin.isType(tmp$ = $receiver.target, HTMLInputElement) ? tmp$ : null) != null ? tmp$_0.value : null) != null ? tmp$_3 : (tmp$_2 = Kotlin.isType(tmp$_1 = $receiver.target, HTMLTextAreaElement) ? tmp$_1 : null) != null ? tmp$_2.value : null) != null ? tmp$_4 : '';
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
  function LoginPageState() {
  }
  LoginPageState.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'LoginPageState',
    interfaces: []
  };
  function ApplicationComponent() {
    RComponent_init(this);
  }
  ApplicationComponent.prototype.init_bc6fkx$ = function ($receiver) {
    $receiver.username = '';
    $receiver.password = '';
    $receiver.errorMessage = '';
  };
  function ApplicationComponent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    $receiver.errorMessage = '';
    return Unit;
  }
  function ApplicationComponent$render$lambda$lambda$lambda$lambda$lambda$lambda(this$ApplicationComponent) {
    return function (it) {
      this$ApplicationComponent.state.username = get_inputValue(it);
      setState(this$ApplicationComponent, ApplicationComponent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda);
      return Unit;
    };
  }
  function ApplicationComponent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.errorMessage = '';
    return Unit;
  }
  function ApplicationComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_0(this$ApplicationComponent) {
    return function (it) {
      this$ApplicationComponent.state.password = get_inputValue(it);
      setState(this$ApplicationComponent, ApplicationComponent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0);
      return Unit;
    };
  }
  function ApplicationComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_1(this$ApplicationComponent) {
    return function (it) {
      it.preventDefault();
      this$ApplicationComponent.doLogin_0();
      return Unit;
    };
  }
  ApplicationComponent.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = new RDOMBuilder_init(div$lambda(''));
    var $receiver_0_0 = new RDOMBuilder_init(div$lambda(null));
    var $receiver_0_1 = new RDOMBuilder_init(h1$lambda(null));
    $receiver_0_1.unaryPlus_pdl1vz$('Login');
    $receiver_0_0.child_2usv9w$($receiver_0_1.create());
    $receiver_0.child_2usv9w$($receiver_0_0.create());
    var $receiver_0_2 = new RDOMBuilder_init(div$lambda(null));
    var $receiver_0_3 = new RDOMBuilder_init(p$lambda(null));
    var $receiver_0_4 = new RDOMBuilder_init(input$lambda(InputType.text, null, null, 'login', null));
    var $receiver_1 = $receiver_0_4.attrs;
    $receiver_1.placeholder = '\u0418\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F';
    set_onChangeFunction($receiver_1, ApplicationComponent$render$lambda$lambda$lambda$lambda$lambda$lambda(this));
    $receiver_0_3.child_2usv9w$($receiver_0_4.create());
    $receiver_0_2.child_2usv9w$($receiver_0_3.create());
    $receiver_0.child_2usv9w$($receiver_0_2.create());
    var $receiver_0_5 = new RDOMBuilder_init(div$lambda(null));
    var $receiver_0_6 = new RDOMBuilder_init(p$lambda(null));
    var $receiver_0_7 = new RDOMBuilder_init(input$lambda(InputType.password, null, null, 'password', null));
    var $receiver_2 = $receiver_0_7.attrs;
    $receiver_2.placeholder = '\u041F\u0430\u0440\u043E\u043B\u044C';
    set_onChangeFunction($receiver_2, ApplicationComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_0(this));
    $receiver_0_6.child_2usv9w$($receiver_0_7.create());
    $receiver_0_5.child_2usv9w$($receiver_0_6.create());
    $receiver_0.child_2usv9w$($receiver_0_5.create());
    var $receiver_0_8 = new RDOMBuilder_init(div$lambda(null));
    var $receiver_0_9 = new RDOMBuilder_init(p$lambda(null));
    var $receiver_0_10 = new RDOMBuilder_init(button$lambda(null, null, null, 'App-buttons'));
    var $receiver_0_11 = new RDOMBuilder_init(span$lambda(null));
    $receiver_0_11.unaryPlus_pdl1vz$('\u0412\u0425\u041E\u0414');
    $receiver_0_10.child_2usv9w$($receiver_0_11.create());
    set_onClickFunction($receiver_0_10.attrs, ApplicationComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_1(this));
    $receiver_0_9.child_2usv9w$($receiver_0_10.create());
    $receiver_0_8.child_2usv9w$($receiver_0_9.create());
    $receiver_0.child_2usv9w$($receiver_0_8.create());
    var $receiver_0_12 = new RDOMBuilder_init(div$lambda(null));
    var $receiver_0_13 = new RDOMBuilder_init(h1$lambda(null));
    $receiver_0_13.unaryPlus_pdl1vz$(this.state.errorMessage);
    $receiver_0_12.child_2usv9w$($receiver_0_13.create());
    $receiver_0.child_2usv9w$($receiver_0_12.create());
    $receiver.child_2usv9w$($receiver_0.create());
  };
  ApplicationComponent.prototype.doLogin_0 = function () {
    var loginData = new LoginData(this.state.username, this.state.password);
    httpPOST('/login', loginData.toString(), getCallableRef('loginResponse', function ($receiver, response) {
      return $receiver.loginResponse_0(response), Unit;
    }.bind(null, this)));
  };
  function ApplicationComponent$loginResponse$lambda(closure$response) {
    return function ($receiver) {
      $receiver.errorMessage = closure$response;
      return Unit;
    };
  }
  function ApplicationComponent$loginResponse$lambda_0(closure$response) {
    return function ($receiver) {
      $receiver.errorMessage = 'good';
      var user = JSON.parse(closure$response);
      logInUser(user);
      return Unit;
    };
  }
  ApplicationComponent.prototype.loginResponse_0 = function (response) {
    if (equals(response, 'Wrong username or password')) {
      setState(this, ApplicationComponent$loginResponse$lambda(response));
    } else {
      setState(this, ApplicationComponent$loginResponse$lambda_0(response));
    }
  };
  ApplicationComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ApplicationComponent',
    interfaces: [RComponent]
  };
  var currentUser;
  function logInUser(user) {
    currentUser = user;
  }
  function logOutUser() {
    currentUser = null;
  }
  var package$ru = _.ru || (_.ru = {});
  var package$butilka = package$ru.butilka || (package$ru.butilka = {});
  package$butilka.RequestsDataTypes = RequestsDataTypes;
  package$butilka.LoginData = LoginData;
  package$butilka.User = User;
  package$butilka.CaseInfo = CaseInfo;
  Object.defineProperty(_, 'GlobalStyles', {
    get: GlobalStyles_getInstance
  });
  $$importsForInline$$['kotlin-react'] = $module$kotlin_react;
  _.main = main;
  _.httpGET_h6uxlq$ = httpGET;
  _.httpPOST_wm65o4$ = httpPOST;
  var package$view = _.view || (_.view = {});
  package$view.get_inputValue_fxsrhs$ = get_inputValue;
  package$view.LoginPageState = LoginPageState;
  $$importsForInline$$['kotlin-react-dom'] = $module$kotlin_react_dom;
  package$view.ApplicationComponent = ApplicationComponent;
  Object.defineProperty(package$view, 'currentUser_8be2vx$', {
    get: function () {
      return currentUser;
    },
    set: function (value) {
      currentUser = value;
    }
  });
  package$view.logInUser_z9gdd9$ = logInUser;
  package$view.logOutUser_8be2vx$ = logOutUser;
  serverURL = 'http://0.0.0.0:8080';
  currentUser = null;
  main();
  Kotlin.defineModule('BUTILKA', _);
  return _;
}(module.exports, require('kotlin'), require('kotlin-css-js'), require('styled-components'), require('kotlin-styled'), require('kotlin-react'), require('react-dom'), require('kotlinx-coroutines-core'), require('kotlin-react-dom'), require('kotlinx-html-js')));

//# sourceMappingURL=BUTILKA.js.map
