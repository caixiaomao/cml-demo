var __CML__GLOBAL=require("../../../../manifest.js");__CML__GLOBAL.webpackJsonp([30],{342:function(t,e,n){n(343),n(344)},343:function(t,e){},344:function(t,e,n){function i(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=n(0),s=function(t){return t&&t.__esModule?t:{default:t}}(r),c=function(){function t(){o(this,t),this.data={topRefreshing:!1,bottomRefreshing:!1,bottomOffset:20,scrollDirection:"vertical",panels:[],rows:[],sumPage:4,page:0,loadingTextStyle:""},this.computed={},this.watch={},this.methods={getPanels:function(t){if(!(this.page>=this.sumPage)){var e=this.randomfn();this.panels=1==t?[].concat(i(this.panels),i(e)):[].concat(i(e),i(this.panels)),this.page++}},onrefreshUp:function(t){var e=this;this.topRefreshing=t.detail.value,setTimeout(function(){e.getPanels(-1),e.topRefreshing=!1},2e3)},onrefreshDown:function(t){var e=this;this.bottomRefreshing=t.detail.value,setTimeout(function(){e.getPanels(1),e.bottomRefreshing=!1},2e3)},change:function(t){var e=t.currentTarget,n=e.dataset,i=n.idx,o=this.panels[i];o&&(o.height=200===o.height?400:200,o.width=330===o.width?730:330,o.computedStyle="height:"+o.height+"cpx;width:"+o.width+"cpx;background-color:"+o.bgc+";opacity:"+o.opacity)},randomfn:function(){for(var t=[],e=1;e<=10;e++){var n={label:10*this.page+e,height:200,width:730,bgc:"#69BE96",opacity:1};n.computedStyle="height:"+n.height+"cpx;width:"+n.width+"cpx;background-color:"+n.bgc+";opacity:"+n.opacity,t.push(n)}return t},onScroll:function(t){t.detail.scrollTop<=0&&(this.topRefreshing=!0)},onBottom:function(t){this.bottomRefreshing||this.page>=this.sumPage||(this.bottomRefreshing=!0)}}}return a(t,[{key:"created",value:function(t){this.getPanels(),this.loadingTextStyle="color:#999;font-size:36cpx;margin:30cpx 0;"}}]),t}();e.default=new c,e.default=s.default.createPage(e.default).getOptions()}},[342]);