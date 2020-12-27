webpackJsonp([1],{"/heM":function(e,t){},"29za":function(e,t){},"46e2":function(e,t){},"9M+g":function(e,t){},HutD:function(e,t){},NHnr:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r("7+uW"),n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var s=r("VU/8")({name:"App"},n,!1,function(e){r("/heM")},null,null).exports,a=r("/ocq"),i={name:"Card",props:{printMode:Boolean,resetTrigger:Boolean,borderClass:String},data:function(){return{word:"",meaning:"",tag:""}},methods:{resetAll:function(){this.word="",this.meaning="",this.tag="",this.$props.borderClass="border-primary"}},watch:{resetTrigger:function(e,t){this.resetAll()}}},l={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card mb-4 shadow-sm"},[r("div",{staticClass:"card-body card-body-ext rounded",class:e.borderClass},[e.printMode?r("div",[r("div",{staticClass:"h-25 text-flip tag"},[e._v("\n            "+e._s(e.tag)+"\n          ")]),e._v(" "),r("div",{staticClass:"h-75 text-flip"},[r("div",{directives:[{name:"resize-text",rawName:"v-resize-text",value:{ratio:.8,minFontSize:"50px"},expression:"{ratio:0.8, minFontSize:'50px'}"}],staticClass:"card-title card-title-ext",domProps:{innerHTML:e._s(e.htmlNewLine(e.word))}})])]):r("div",[r("div",{staticClass:"mb-2"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.word,expression:"word"}],staticClass:"form-control",attrs:{placeholder:"Input English Word"},domProps:{value:e.word},on:{input:function(t){t.target.composing||(e.word=t.target.value)}}})]),e._v(" "),r("div",[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm"}),e._v(" "),r("div",{staticClass:"col-sm"}),e._v(" "),r("div",{staticClass:"col-sm"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.tag,expression:"tag"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Tag"},domProps:{value:e.tag},on:{input:function(t){t.target.composing||(e.tag=t.target.value)}}})])])])])]),e._v(" "),r("div",{staticClass:"divider"}),e._v(" "),r("div",{staticClass:"card-body card-body-ext rounded",class:e.borderClass},[e.printMode?r("div",[r("div",{directives:[{name:"resize-text",rawName:"v-resize-text"}],staticClass:"h-75"},[r("div",{directives:[{name:"resize-text",rawName:"v-resize-text",value:{ratio:.8,minFontSize:"50px"},expression:"{ratio:0.8, minFontSize:'50px'}"}],staticClass:"card-title card-title-ext",domProps:{innerHTML:e._s(e.htmlNewLine(e.meaning))}})]),e._v(" "),r("div",{staticClass:"h-25 tag"},[e._v("\n            "+e._s(e.tag)+"\n          ")])]):r("div",[r("div",{staticClass:"mb-2"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.meaning,expression:"meaning"}],staticClass:"form-control",attrs:{placeholder:"Input the meaning of word"},domProps:{value:e.meaning},on:{input:function(t){t.target.composing||(e.meaning=t.target.value)}}})]),e._v(" "),r("div")])])])},staticRenderFns:[]};var c=r("VU/8")(i,l,!1,function(e){r("46e2")},null,null).exports,d={name:"ColorSelector",props:{color:String},data:function(){return{}},methods:{onClick:function(){this.$emit("change-color",this.$props.color)}}},v={render:function(){var e=this.$createElement;return(this._self._c||e)("span",{staticClass:"color-box border",class:this.color,on:{click:this.onClick}})},staticRenderFns:[]};var g={name:"IndexPage",components:{card:c,"color-selector":r("VU/8")(d,v,!1,function(e){r("HutD")},null,null).exports},data:function(){return{printMode:!1,resetTrigger:!1,borderClass:"border-primary"}},methods:{print:function(e){this.printMode=!0},revert:function(e){this.printMode=!1},resetAll:function(e){this.resetTrigger=!this.resetTrigger},onChangeColor:function(e){console.log("border-"+e.split("-")[1]),this.borderClass="border-"+e.split("-")[1]}},mounted:function(){var e=this;window.addEventListener("keydown",function(t){var r=t.which||t.keyCode;e.printMode&&27===r&&e.revert()})}},u={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("div",{staticClass:"card-deck mb-3 text-center"},[r("card",{attrs:{printMode:e.printMode,resetTrigger:e.resetTrigger,borderClass:e.borderClass}}),e._v(" "),r("card",{attrs:{printMode:e.printMode,resetTrigger:e.resetTrigger,borderClass:e.borderClass}})],1),e._v(" "),r("div",{staticClass:"card-deck mb-3 text-center"},[r("card",{attrs:{printMode:e.printMode,resetTrigger:e.resetTrigger,borderClass:e.borderClass}}),e._v(" "),r("card",{attrs:{printMode:e.printMode,resetTrigger:e.resetTrigger,borderClass:e.borderClass}})],1),e._v(" "),e.printMode?e._e():r("div",{staticClass:"mb-2"},[r("div",{staticClass:"text-center"},[r("color-selector",{attrs:{color:"bg-primary"},on:{"change-color":e.onChangeColor}}),e._v(" "),r("color-selector",{attrs:{color:"bg-secondary"},on:{"change-color":e.onChangeColor}}),e._v(" "),r("color-selector",{attrs:{color:"bg-success"},on:{"change-color":e.onChangeColor}}),e._v(" "),r("color-selector",{attrs:{color:"bg-danger"},on:{"change-color":e.onChangeColor}}),e._v(" "),r("color-selector",{attrs:{color:"bg-warning"},on:{"change-color":e.onChangeColor}}),e._v(" "),r("color-selector",{attrs:{color:"bg-info"},on:{"change-color":e.onChangeColor}}),e._v(" "),r("color-selector",{attrs:{color:"bg-light"},on:{"change-color":e.onChangeColor}}),e._v(" "),r("color-selector",{attrs:{color:"bg-dark"},on:{"change-color":e.onChangeColor}})],1)]),e._v(" "),e.printMode?e._e():r("div",{staticClass:"text-center"},[r("b-button",{attrs:{variant:"danger"},on:{click:e.print}},[e._v("Print")]),e._v(" "),r("b-button",{attrs:{variant:"light"},on:{click:e.resetAll}},[e._v("Reset")])],1)])},staticRenderFns:[]};var p=r("VU/8")(g,u,!1,function(e){r("29za")},null,null).exports;o.default.use(a.a);var m=new a.a({routes:[{path:"/",name:"IndexPage",component:p}]}),h=r("Tqaz"),C=(r("qb6w"),r("9M+g"),r("4uIj")),f=r.n(C);o.default.use(h.a),o.default.use(h.b),o.default.use({install:function(e,t){e.prototype.htmlNewLine=function(e){return e.replace(/(?:\r\n|\r|\n)/g,"<br>")}}}),o.default.use(f.a),o.default.config.productionTip=!1,new o.default({el:"#app",router:m,components:{App:s},template:"<App/>"})},qb6w:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.97f68ee6411609ebd65f.js.map