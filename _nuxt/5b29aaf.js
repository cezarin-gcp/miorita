(window.webpackJsonp=window.webpackJsonp||[]).push([[10,7,8],{316:function(e,t,n){var content=n(322);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(54).default)("89a94e42",content,!0,{sourceMap:!1})},317:function(e,t,n){var content=n(326);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(54).default)("e57f6878",content,!0,{sourceMap:!1})},318:function(e,t,n){"use strict";n.r(t);var o={components:{MonacoEditor:n(327).a},props:{code:{type:String,default:""}},computed:{workCode:{get:function(){return this.$store.state.code},set:function(e){this.$store.dispatch("setCode",e)}}},mounted:function(){var code=this.code;localStorage.workCodeUrl===window.location.href?code=localStorage.workCode:localStorage.workCodeUrl=window.location.href,this.$store.dispatch("init",code),this.workCode=this.$store.state.code}},r=n(321),l=n(36);var component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("div",{class:e.$style.wrapper},[t("MonacoEditor",{class:e.$style.editor,attrs:{language:"javascript",options:{wordWrap:!0,minimap:{enabled:!1},overviewRulerBorder:!1}},model:{value:e.workCode,callback:function(t){e.workCode=t},expression:"workCode"}})],1)}),[],!1,(function(e){this.$style=r.default.locals||r.default}),null,null);t.default=component.exports},319:function(e,t,n){"use strict";n.r(t);var o,r=n(20),l=(n(320),n(70),n(14),n(323)),c=n(324),f=n(318),d=(o=function(e,b){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,b){e.__proto__=b}||function(e,b){for(var p in b)Object.prototype.hasOwnProperty.call(b,p)&&(e[p]=b[p])},o(e,b)},function(e,b){if("function"!=typeof b&&null!==b)throw new TypeError("Class extends value "+String(b)+" is not a constructor or null");function t(){this.constructor=e}o(e,b),e.prototype=null===b?Object.create(b):(t.prototype=b.prototype,new t)}),h=function(e,t,n,desc){var o,l=arguments.length,c=l<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(r.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(c=(l<3?o(c):l>3?o(t,n,c):o(t,n))||c);return l>3&&c&&Object.defineProperty(t,n,c),c},m=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return d(t,e),h([Object(l.b)(String)],t.prototype,"code",void 0),h([Object(l.b)(Object)],t.prototype,"options",void 0),t=h([Object(l.a)({components:{TheWorld:c.default,TheEditor:f.default}})],t)}(l.c),y=m,w=n(325),v=n(36);var component=Object(v.a)(y,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{class:e.$style.container},[t("TheEditor",{class:e.$style.editor,attrs:{code:e.code}}),e._v(" "),t("TheWorld",{class:e.$style.world,attrs:{options:e.options},scopedSlots:e._u([{key:"options",fn:function(){return[e._t("options")]},proxy:!0}],null,!0)})],1)}),[],!1,(function(e){this.$style=w.default.locals||w.default}),null,null);t.default=component.exports;installComponents(component,{TheEditor:n(318).default,TheWorld:n(324).default})},321:function(e,t,n){"use strict";var o=n(316),r=n.n(o);n.d(t,"default",(function(){return r.a}))},322:function(e,t,n){var o=n(53)(!1);o.push([e.i,".wrapper_m5-GQ{display:flex;width:100%;height:100%;padding:1rem}.editor_sGnL-{flex-grow:1}",""]),o.locals={wrapper:"wrapper_m5-GQ",editor:"editor_sGnL-"},e.exports=o},325:function(e,t,n){"use strict";var o=n(317),r=n.n(o);n.d(t,"default",(function(){return r.a}))},326:function(e,t,n){var o=n(53)(!1);o.push([e.i,".container_1hgRA{display:flex}.editor_UD1IA,.world_1sxkF{flex-basis:50%}@media (orientation:portrait){.container_1hgRA{flex-direction:column-reverse}.editor_UD1IA,.world_1sxkF{height:50%}}",""]),o.locals={container:"container_1hgRA",editor:"editor_UD1IA",world:"world_1sxkF"},e.exports=o},580:function(e,t,n){"use strict";n.r(t);n(71),n(38);var o,r=n(20),l=(n(320),n(70),n(14),n(323)),c=n(319),f=(o=function(e,b){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,b){e.__proto__=b}||function(e,b){for(var p in b)Object.prototype.hasOwnProperty.call(b,p)&&(e[p]=b[p])},o(e,b)},function(e,b){if("function"!=typeof b&&null!==b)throw new TypeError("Class extends value "+String(b)+" is not a constructor or null");function t(){this.constructor=e}o(e,b),e.prototype=null===b?Object.create(b):(t.prototype=b.prototype,new t)}),d=function(e,t,n,desc){var o,l=arguments.length,c=l<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(r.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(c=(l<3?o(c):l>3?o(t,n,c):o(t,n))||c);return l>3&&c&&Object.defineProperty(t,n,c),c},h=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.wall=!0,t.code='/*\n    IF Statement\n    ============\n\n    In this scenario, Miorița is very hungry.\n    We want to help her reach the closest grass zone.\n    Problem is a wall that may appear right in front of her.\n    When the wall appears, she needs to go around the wall, to the top grass.\n    Without a wall, she can go straight to the bottom grass.\n\n    We want to handle both cases in the same code.\n    For this, we use a special instruction "if()", that accepts a condition.\n    The condition is just an instruction that happens to return true or false.\n    We also have the "canMove()" instruction which happens to return true when\n    Miorița can move forward, and false if she cannot.\n    Combining the two allows us to run a set of instructions, depending on the\n    ability to move.\n*/\nif ( canMove() ) {\n    /*\n        Using { curly braces } allows running multiple instructions in response\n        to a single condition. These are called "code blocks"\n    */\n\n    move()\n    move()\n    move()\n} else {\n    /*\n        The "else" statement can be attached to an "if" statement and represents\n        instructions that run when the "if" condition is false.\n    */\n\n    turnRight()\n    turnRight()\n    turnRight()\n    // Turing right 3 times gets us to the same result as turning left one time\n\n    move()\n    turnRight()\n    move()\n    move()\n    move()\n}\n\n// After the if+else statements, we can continue doing stuff...\n\n// The next instruction makes Miorița move to the start position.\n// It is a code alternative to the "Reset" button.\nreset()\n\n/*\n    Both the "if", and the "else" blocks end with the move() instruction used\n    multiple times.\n    Seeing the sheepfold from above, we can notice that once Miorița is facing\n    left, she always has to move 3 times.\n    We can move the 3 instructions after the if+else statement.\n    We can also remove the "else" statement if we use the ! operator in the\n    "if" condition. ! flips the expression after it.\n    So true becomes false, and false becomes true\n*/\nif ( ! canMove() ) {\n    /*\n        The "else" statement can be attached to an "if" statement and represents\n        instructions that run when the "if" condition is false.\n    */\n\n    turnRight()\n    turnRight()\n    turnRight()\n    // Turing right 3 times gets us to the same result as turning left one time\n\n    move()\n    turnRight()\n}\n\n// Run the 3 move commands regardless of anything else\nmove()\nmove()\nmove()\n\n/*\n    Final note #1\n    -------------\n    You may notice that "if" and "else" are colored differently,\n    and also they do not cause any output in the console.\n    They are statements of the language, not just functions made specifically\n    for this application.\n\n    Final note #2\n    -------------\n    There are a lot of spaces in the code used in this lesson.\n    None of them is required, but they make the code slightly more readable.\n*/\n',t}return f(t,e),t=d([Object(l.a)({components:{TheLesson:c.default}})],t)}(l.c),m=h,y=n(36),component=Object(y.a)(m,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("TheLesson",{attrs:{code:e.code,options:{size:{x:4,y:2},start:{position:{x:0,y:1},orientation:"E",picked:{}},walls:{x:e.wall?[{x:0,y:1}]:void 0},objects:[{position:{x:3,y:0},type:"grass",fixed:!0},{position:{x:3,y:1},type:"grass",fixed:!0}],timeout:1e3}},scopedSlots:e._u([{key:"options",fn:function(){return[t("label",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.wall,expression:"wall"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.wall)?e._i(e.wall,null)>-1:e.wall},on:{change:function(t){var n=e.wall,o=t.target,r=!!o.checked;if(Array.isArray(n)){var l=e._i(n,null);o.checked?l<0&&(e.wall=n.concat([null])):l>-1&&(e.wall=n.slice(0,l).concat(n.slice(l+1)))}else e.wall=r}}}),e._v("\n            Fence\n        ")])]},proxy:!0}])})}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{TheLesson:n(319).default})}}]);