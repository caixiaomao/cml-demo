var __CML__GLOBAL=require("../../../../manifest.js");__CML__GLOBAL.webpackJsonp([91],{468:function(t,e,n){n(469),n(470)},469:function(t,e){},470:function(t,e,n){function r(t){return t&&t.__esModule?t:{default:t}}function o(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){function r(o,i){try{var u=e[o](i),a=u.value}catch(t){return void n(t)}if(!u.done)return Promise.resolve(a).then(function(t){r("next",t)},function(t){r("throw",t)});t(a)}return r("next")})}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var u=n(44),a=r(u),c=n(5),l=r(c),s=n(12),f=r(s),h=n(23),d=r(h),p=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),m=n(0),y=r(m),v=function(){function t(){i(this,t),this.props={cstyle:{type:String,default:""},bottomOffset:{type:Number,default:0},toElement:{type:String,default:""},bounce:{type:Boolean,default:!0},height:{type:Number,default:0}},this.data={cmtstyle:""},this.computed={wrapperStyle:function(){return this.height>=0?this.cstyle+";height:"+this.height+"cpx;":this.cmtstyle+this.cstyle}},this.methods={onScroll:function(t){var e=t.detail;e.deltaX=e.deltaX||0,e.deltaY=e.deltaY||0,Object.keys(e).forEach(function(t){e[t]=(0,d.default)(e[t])}),this.$cmlEmit("onscroll",e),this.$cmlEmit("customscroll",e)},onBottom:function(t){this.$cmlEmit("scrolltobottom",t.detail)}}}return p(t,[{key:"mounted",value:function(){var t=this;setTimeout(o(a.default.mark(function e(){var n,r,o;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.height){e.next=3;break}return console.error("list组件必须传递高度属性"),e.abrupt("return");case 3:if(-1!==t.height){e.next=12;break}return e.next=6,(0,f.default)("c-list",t);case 6:return n=e.sent,e.next=9,(0,l.default)();case 9:r=e.sent,o=r.viewportHeight-n.top,t.cmtstyle="height:"+o+"cpx;";case 12:case"end":return e.stop()}},e,t)})),200)}}]),t}();e.default=new v,e.default=y.default.createComponent(e.default).getOptions()}},[468]);