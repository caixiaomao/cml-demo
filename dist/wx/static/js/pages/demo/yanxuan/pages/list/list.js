var __CML__GLOBAL=require("../../../../../manifest.js");__CML__GLOBAL.webpackJsonp([15],{411:function(t,e,a){a(412),a(413)},412:function(t,e){},413:function(t,e,a){function n(t){return t&&t.__esModule?t:{default:t}}function s(t){if(Array.isArray(t)){for(var e=0,a=Array(t.length);e<t.length;e++)a[e]=t[e];return a}return Array.from(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=a(4),i=n(r),c=function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}}(),l=a(414),f=n(l),u=a(0),g=n(u),m=function(){function t(){o(this,t),this.data={topRefreshing:!1,bottomRefreshing:!1,bottomOffset:20,scrollDirection:"vertical",loadingTextStyle:"",page:0,sumPage:5,list:[],topImg:""},this.methods={change:function(t){(0,i.default)({path:"/pages/demo/yanxuan/pages/detail/detail",query:{a:1,b:"test"}})},onBottom:function(t){var e=this;this.bottomRefreshing||this.page>=this.sumPage||setTimeout(function(){e.getData()},200)},onScroll:function(){},getData:function(){var t=f.default.data,e=t.topImgUrl,a=t.list;this.list=[].concat(s(this.list),s(a)),this.topImg=e,this.page=this.page+1}}}return c(t,[{key:"created",value:function(t){this.loadingTextStyle="color:#666;font-size:36cpx;margin:30cpx auto;",this.getData()}}]),t}();e.default=new m,e.default=g.default.createPage(e.default).getOptions()},414:function(t,e){t.exports={code:0,data:{topImgUrl:"https://cmljs.org/cml-demo/src/assets/images/yanxuan/4972949f269e7295a4f37e99a303553e.jpg",list:[{imgUrl:"https://cmljs.org/cml-demo/src/assets/images/yanxuan/8635c42f2b3a92768b12015c491821b5.png",des:"400跟纯棉贡缎",name:"60s锦绵贡缎四件套",money:"￥400",tag:["APP特惠"]},{imgUrl:"https://cmljs.org/cml-demo/src/assets/images/yanxuan/4a00fd1035efe874d70d51dfc04c5cee.png",des:"少女粉润贡缎",name:"朱莉.粉唐四件套",money:"￥359",tag:["年货节特卖","满赠"]},{imgUrl:"https://cmljs.org/cml-demo/src/assets/images/yanxuan/9f3c89c8b98fb06968c67edb12a195cf.png",des:"少女粉润贡缎",name:"朱莉.粉唐四件套",money:"￥359",tag:[]},{imgUrl:"https://cmljs.org/cml-demo/src/assets/images/yanxuan/cc863b46d890633445fb2a1354b01841.png",des:"入门享受奢华感受",name:"60s锦绵贡缎四件套",money:"￥400"}]}}}},[411]);