(this["webpackJsonptodo-canvas-app"]=this["webpackJsonptodo-canvas-app"]||[]).push([[0],{41:function(e,t,n){e.exports=n(87)},46:function(e,t,n){},77:function(e,t,n){},87:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(10),o=n.n(r),i=(n(46),n(40)),l=n(39),u=n(13),s=n(7),m=n(2),b=(n(77),n(11)),f=function(e){var t=e.assistant,n=e.dispatch;return c.a.createElement(s.b,null,c.a.createElement(m.Row,null,c.a.createElement(s.a,{size:4},c.a.createElement(b.Button,{text:"\u0422\u0435\u043a\u0441\u0442",view:"primary",size:"s",onClick:function(){t.sendData({action:{action_id:"CLICK"}})}})),c.a.createElement(s.a,{size:4},c.a.createElement(b.Button,{text:"\u041f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0432\u043a\u043b\u0430\u0434\u043a\u0443 \u0447\u0435\u0440\u0435\u0437 \u0431\u044d\u043a",view:"primary",size:"s",onClick:function(){t.sendData({action:{action_id:"SELECT",parameters:{tab:1}}})}}))),c.a.createElement(m.Row,null,c.a.createElement(s.a,{size:4},c.a.createElement(b.Button,{text:"\u041f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0432\u043a\u043b\u0430\u0434\u043a\u0443 \u043d\u0435 \u0447\u0435\u0440\u0435\u0437 \u0431\u044d\u043a",view:"primary",size:"s",onClick:function(){n({type:"SELECT",tab:1})}}))))},E=n(6),d=function(e){return c.a.createElement(b.Button,{text:"\u0421\u043a\u0430\u0447\u0430\u0442\u044c",view:"primary",contentRight:c.a.createElement(E.f,null),size:"s",onClick:function(){e.sendData({action:{action_id:"DOWNLOAD",parameters:{file:"text.txt"}}})}})},p=n(9),v=function(e,t){switch(console.log(t),t.type){case"START":return Object(p.a)({},e);case"SELECT":return Object(p.a)(Object(p.a)({},e),{},{currentTab:t.tab});default:return Object(p.a)({},e)}},g=Object(a.memo)((function(){var e=Object(a.useReducer)(v,{currentTab:0}),t=Object(i.a)(e,2),n=t[0],r=t[1],o=Object(a.useRef)(),b=Object(a.useRef)();Object(a.useEffect)((function(){console.log("appState111",n)}),[n]),Object(a.useEffect)((function(){var e;b.current=(e=function(){return o.current},Object(l.a)({getState:e})),b.current.on("data",(function(e){var t=e.navigation,n=e.action;if(t)switch(t.command){case"UP":window.scrollTo(0,window.scrollY-500);break;case"DOWN":window.scrollTo(0,window.scrollY+500)}console.log("action",n),n&&r(n)}))}),[]);var E=function(e){return function(){console.log(e)}};return c.a.createElement("main",{className:"app"},c.a.createElement(u.Tabs,{size:"l",view:"secondary",stretch:!0,pilled:!1,scaleOnPress:!0,outlined:!1,disabled:!1},c.a.createElement(u.TabItem,{key:"item0",isActive:0===n.currentTab,tabIndex:0,contentLeft:!0,onClick:function(){return r({type:"SELECT",tab:0})},onFocus:E("onFocus item #".concat(0)),onBlur:E("onBlur item #".concat(0))},"\u0422\u0430\u0431 1"),c.a.createElement(u.TabItem,{key:"item1",isActive:1===n.currentTab,tabIndex:1,contentLeft:!0,onClick:function(){return r({type:"SELECT",tab:1})},onFocus:E("onFocus item #".concat(1)),onBlur:E("onBlur item #".concat(1))},"\u0422\u0430\u0431 2")),c.a.createElement(s.b,null,c.a.createElement(m.Row,null,c.a.createElement(s.a,{size:4},function(){switch(n.currentTab){case 0:return c.a.createElement(f,{dispatch:r,assistant:b.current});case 1:return c.a.createElement(d,Object.assign({},b.current,{dispatch:r}))}}()))))})),w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,91)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))},O=n(38),T=n(37),h=n(1),j=n(90),C=n(3);function k(){var e=Object(T.a)(["\n    html:root {\n        min-height: 100vh;\n        color: ",";\n        background-color: ",";\n        background-image: ",";\n    }\n"]);return k=function(){return e},e}var y=Object(h.createGlobalStyle)(k(),C.text,C.background,C.gradient),L=Object(h.createGlobalStyle)(j.a),S=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(y,null),c.a.createElement(L,null))};o.a.render(c.a.createElement(O.DeviceThemeProvider,null,c.a.createElement(S,null),c.a.createElement(g,null)),document.getElementById("root")),w()}},[[41,1,2]]]);
//# sourceMappingURL=main.55170ebe.chunk.js.map