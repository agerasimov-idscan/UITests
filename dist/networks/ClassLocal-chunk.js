(self.webpackChunk_idscan_idvc2=self.webpackChunk_idscan_idvc2||[]).push([[423],{3457:(t,e,n)=>{n.r(e),n.d(e,{default:()=>k});var r=n(4328),o=n(4554),i=n(7286),a=n(8736),u=n(6955),c=n(813),l=n(528),s=n(683),f=n(7672);function h(t){if(void 0===t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(t,e,n,r,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(r,o)}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&w(t,e)}function w(t,e){return(w=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function g(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=y(t);if(e){var o=y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return function(t,e){return!e||"object"!==function(t){return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t}(e)&&"function"!=typeof e?h(t):e}(this,n)}}var m=[1,320,320,3],S=function(t){"use strict";d(n,t);var e=g(n);function n(){var t,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c.z.WASM,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,n),v(h(t=e.call(this,r,o,i)),"canvasSize",{width:1,height:1}),t}return function(t,e,n){e&&b(t.prototype,e)}(n,[{key:"setSizes",value:function(t){var e=t.height,n=t.width;this.canvasSize.width=n,this.canvasSize.height=e}},{key:"predict",value:function(t){var e=v({},"serving_default_input_2:0",new a.Tensor("float32",t,m));return this.session.run(e)}},{key:"predictFromImage",value:function(t,e,n,r){var o=this;return function(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){p(i,r,o,a,u,"next",t)}function u(t){p(i,r,o,a,u,"throw",t)}a(void 0)}))}}((function(){var i,a,u,c,f;return function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}(this,(function(h){switch(h.label){case 0:return o.loading?[2,[]]:(i=o.createSrc(t,"angles-input-canvas"),a=e||(0,l.vL)("angles-canvas",{width:320,height:320}),u=(0,l.SI)(i,a,n,r),c=(0,s.Di)(u,s.eQ.WITHOUT),[4,o.predict(c)]);case 1:return f=h.sent(),o.setSizes(i),[2,o.interpret(f["StatefulPartitionedCall:1"].data,f["StatefulPartitionedCall:0"].data)]}}))}))()}},{key:"interpret",value:function(t,e){var n={side:"None",bbox:{topLeft:{x:0,y:0},bottomRight:{x:1,y:1}},perimeterInPercents:{width:0,height:0}},r=[];return t.forEach((function(t,e){return r.push({label:f.mR[e],score:t})})),n.side=r.sort((function(t,e){return e.score-t.score}))[0].label,n.bbox.topLeft.x=~~(e[0]*this.canvasSize.width),n.bbox.topLeft.y=~~(e[1]*this.canvasSize.height),n.bbox.bottomRight.x=~~(e[2]*this.canvasSize.width),n.bbox.bottomRight.y=~~(e[3]*this.canvasSize.height),n.perimeterInPercents.width=~~(100*(e[2]-e[0])),n.perimeterInPercents.height=~~(100*(e[3]-e[1])),n}}]),n}(u.Z);function x(t,e,n,r,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(r,o)}let k=function(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){x(i,r,o,a,u,"next",t)}function u(t){x(i,r,o,a,u,"throw",t)}a(void 0)}))}}((function(){var t;return function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}(this,(function(e){return t=new S("".concat(o.t.cK),c.z.WASM,r.Z.networkUrl),i.Z.setModule("model","classLocal",t),[2,[t.initialize.bind(t)]]}))}))}}]);