var __CML__GLOBAL=require("../../../../manifest.js");__CML__GLOBAL.webpackJsonp([75],{336:function(t,e,n){n(337),n(338)},337:function(t,e){},338:function(t,e,n){function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),i=function(t){return t&&t.__esModule?t:{default:t}}(r),u=function t(){a(this,t),this.props={tabs:{type:Array,default:function(){return[]}},activeLabel:{type:[Number,String],required:!0}},this.data={},this.computed={paneWrap:function(){var t=this,e=750*this.tabs.length,n=this.tabs.findIndex(function(e,n,a){return t.activeLabel===e.label});return"width:"+e+"cpx;transform: translateX("+-750*(-1==n?0:n)+"cpx)"}}};e.default=new u,e.default=i.default.createComponent(e.default).getOptions()}},[336]);