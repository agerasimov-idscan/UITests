(self.webpackChunk_idscan_idvc2=self.webpackChunk_idscan_idvc2||[]).push([[373],{4550:(e,n,r)=>{r.d(n,{o:()=>l});var t=r(7885),o=r(7666);function a(e,n,r,t,o,a,i){try{var u=e[a](i),c=u.value}catch(e){return void r(e)}u.done?n(c):Promise.resolve(c).then(t,o)}function i(e){return function(){var n=this,r=arguments;return new Promise((function(t,o){var i=e.apply(n,r);function u(e){a(i,t,o,u,c,"next",e)}function c(e){a(i,t,o,u,c,"throw",e)}u(void 0)}))}}function u(e,n){var r,t,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(r)throw TypeError("Generator is already executing.");for(;i;)try{if(r=1,t&&(o=2&a[0]?t.return:a[0]?t.throw||((o=t.return)&&o.call(t),0):t.next)&&!(o=o.call(t,a[1])).done)return o;switch(t=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,t=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=n.call(e,i)}catch(e){a=[6,e],t=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}}var c=function(){var e=i((function(e){var n,r,a,i,c;return u(this,(function(u){switch(u.label){case 0:return u.trys.push([0,2,,3]),r=Uint8Array.bind,[4,(0,o.xl)(e)];case 1:return n=new(r.apply(Uint8Array,[void 0,u.sent()])),a=(0,t.ec)(n),i=new Blob([a.buffer],{type:"application/javascript"}),[2,URL.createObjectURL(i)];case 2:throw console.error("Error loading and decompressing worker file:",c=u.sent()),c;case 3:return[2]}}))}));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=i((function(e){var n;return u(this,(function(r){switch(r.label){case 0:return[4,c(e)];case 1:return n=r.sent(),[2,new Worker(n)]}}))}));return function(n){return e.apply(this,arguments)}}()},3994:(e,n,r)=>{r.r(n),r.d(n,{default:()=>l});var t=r(7286);function o(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}var a=function(){"use strict";function e(n){(function(e,n){if(!(e instanceof n))throw TypeError("Cannot call a class as a function")})(this,e),function(e,n,r){n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r}(this,"worker",void 0),this.worker=n}return function(e,n,r){n&&o(e.prototype,n)}(e,[{key:"process",value:function(e){var n=this;return new Promise((function(r){n.worker.postMessage(e),n.worker.onmessage=function(e){r(e.data.segments)}}))}}]),e}(),i=r(4550),u=r(4328);function c(e,n,r,t,o,a,i){try{var u=e[a](i),c=u.value}catch(e){return void r(e)}u.done?n(c):Promise.resolve(c).then(t,o)}let l=function(e){return function(){var n=this,r=arguments;return new Promise((function(t,o){var a=e.apply(n,r);function i(e){c(a,t,o,i,u,"next",e)}function u(e){c(a,t,o,i,u,"throw",e)}i(void 0)}))}}((function(){var e,n;return function(e,n){var r,t,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(r)throw TypeError("Generator is already executing.");for(;i;)try{if(r=1,t&&(o=2&a[0]?t.return:a[0]?t.throw||((o=t.return)&&o.call(t),0):t.next)&&!(o=o.call(t,a[1])).done)return o;switch(t=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,t=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=n.call(e,i)}catch(e){a=[6,e],t=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}}(this,(function(r){switch(r.label){case 0:return[4,(0,i.o)("".concat(u.Z.chunkPublicPath,"bubbleWorker.js.gzip"))];case 1:return e=r.sent(),n=new a(e),t.Z.setModule("module","bubble",n),[2]}}))}))}}]);