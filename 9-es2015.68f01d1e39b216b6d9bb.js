(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{XQtW:function(t,e,s){"use strict";s.r(e);var n=s("ofXK"),i=s("lJxs"),r=s("HDdC"),o=s("DH7j"),c=s("n6bG");function h(t,e,s,n){return Object(c.a)(s)&&(n=s,s=void 0),n?h(t,e,s).pipe(Object(i.a)(t=>Object(o.a)(t)?n(...t):n(t))):new r.a(n=>{!function t(e,s,n,i,r){let o;if(function(t){return t&&"function"==typeof t.addEventListener&&"function"==typeof t.removeEventListener}(e)){const t=e;e.addEventListener(s,n,r),o=()=>t.removeEventListener(s,n,r)}else if(function(t){return t&&"function"==typeof t.on&&"function"==typeof t.off}(e)){const t=e;e.on(s,n),o=()=>t.off(s,n)}else if(function(t){return t&&"function"==typeof t.addListener&&"function"==typeof t.removeListener}(e)){const t=e;e.addListener(s,n),o=()=>t.removeListener(s,n)}else{if(!e||!e.length)throw new TypeError("Invalid event target");for(let o=0,c=e.length;o<c;o++)t(e[o],s,n,i,r)}i.add(o)}(t,e,(function(t){n.next(arguments.length>1?Array.prototype.slice.call(arguments):t)}),n,s)})}var u=s("yCtX"),l=s("7o/Q"),a=s("l7GE"),p=s("ZUHj"),f=s("Lhse");function d(...t){const e=t[t.length-1];return"function"==typeof e&&t.pop(),Object(u.a)(t,void 0).lift(new b(e))}class b{constructor(t){this.resultSelector=t}call(t,e){return e.subscribe(new g(t,this.resultSelector))}}class g extends l.a{constructor(t,e,s=Object.create(null)){super(t),this.iterators=[],this.active=0,this.resultSelector="function"==typeof e?e:null,this.values=s}_next(t){const e=this.iterators;Object(o.a)(t)?e.push(new v(t)):e.push("function"==typeof t[f.a]?new y(t[f.a]()):new w(this.destination,this,t))}_complete(){const t=this.iterators,e=t.length;if(this.unsubscribe(),0!==e){this.active=e;for(let s=0;s<e;s++){let e=t[s];e.stillUnsubscribed?this.destination.add(e.subscribe(e,s)):this.active--}}else this.destination.complete()}notifyInactive(){this.active--,0===this.active&&this.destination.complete()}checkIterators(){const t=this.iterators,e=t.length,s=this.destination;for(let r=0;r<e;r++){let e=t[r];if("function"==typeof e.hasValue&&!e.hasValue())return}let n=!1;const i=[];for(let r=0;r<e;r++){let e=t[r],o=e.next();if(e.hasCompleted()&&(n=!0),o.done)return void s.complete();i.push(o.value)}this.resultSelector?this._tryresultSelector(i):s.next(i),n&&s.complete()}_tryresultSelector(t){let e;try{e=this.resultSelector.apply(this,t)}catch(s){return void this.destination.error(s)}this.destination.next(e)}}class y{constructor(t){this.iterator=t,this.nextResult=t.next()}hasValue(){return!0}next(){const t=this.nextResult;return this.nextResult=this.iterator.next(),t}hasCompleted(){const t=this.nextResult;return t&&t.done}}class v{constructor(t){this.array=t,this.index=0,this.length=0,this.length=t.length}[f.a](){return this}next(t){const e=this.index++;return e<this.length?{value:this.array[e],done:!1}:{value:null,done:!0}}hasValue(){return this.array.length>this.index}hasCompleted(){return this.array.length===this.index}}class w extends a.a{constructor(t,e,s){super(t),this.parent=e,this.observable=s,this.stillUnsubscribed=!0,this.buffer=[],this.isComplete=!1}[f.a](){return this}next(){const t=this.buffer;return 0===t.length&&this.isComplete?{value:null,done:!0}:{value:t.shift(),done:!1}}hasValue(){return this.buffer.length>0}hasCompleted(){return 0===this.buffer.length&&this.isComplete}notifyComplete(){this.buffer.length>0?(this.isComplete=!0,this.parent.notifyInactive()):this.destination.complete()}notifyNext(t,e,s,n,i){this.buffer.push(e),this.parent.checkIterators()}subscribe(t,e){return Object(p.a)(this,this.observable,this,e)}}var x=s("fXoL");const m=function(t){return{"background-color":t}};let C=(()=>{class t{constructor(){this.bgColor="purple",this.colorsX=["purple","red","green","blue"],this.colorsY=["yellow","black","chartreuse","aqua"],this.countX=0,this.countY=0}countIncreacer(t,e){return t<e.length-1?t++:t=0,t}countDecreacer(t,e){return t>0?t--:t=e.length-1,t}xChanger(t){this.countX="right"===t?this.countIncreacer(this.countX,this.colorsX):this.countDecreacer(this.countX,this.colorsX),this.bgColor=this.colorsX[this.countX]}yChanger(t){this.countY="up"===t?this.countIncreacer(this.countY,this.colorsY):this.countDecreacer(this.countY,this.colorsY),this.bgColor=this.colorsY[this.countY]}swipeDesider(t){"right"===t||"left"===t?this.xChanger(t):this.yChanger(t)}getMouseX(t){return t.pipe(Object(i.a)(({clientX:t})=>t))}getMouseY(t){return t.pipe(Object(i.a)(({clientY:t})=>t))}getTouchX(t){return t.pipe(Object(i.a)(({changedTouches:t})=>t[0].clientX))}getTouchY(t){return t.pipe(Object(i.a)(({changedTouches:t})=>t[0].clientY))}swipeDirection(t){return t.pipe(Object(i.a)(([t,e,s,n])=>{const i={xDirection:t-e>0?"left":"right",yDirection:s-n>0?"up":"down",xDistance:Math.abs(t-e),yDistance:Math.abs(s-n)};return i.xDistance>i.yDistance?i.xDirection:i.yDirection}))}getThisSwiperStarted(){const t=document.querySelector(".swiper__box"),e=this.getMouseY(h(t,"mousedown")),s=this.getMouseY(h(t,"mouseup")),n=this.getMouseX(h(t,"mousedown")),i=this.getMouseX(h(t,"mouseup"));this.swipeDirection(d(n,i,e,s)).subscribe(t=>{this.swipeDesider(t)});const r=this.getTouchY(h(t,"touchstart")),o=this.getTouchY(h(t,"touchend")),c=this.getTouchX(h(t,"touchstart")),u=this.getTouchX(h(t,"touchend"));this.swipeDirection(d(c,u,r,o)).subscribe(t=>{this.swipeDesider(t)})}ngOnInit(){this.getThisSwiperStarted()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=x.Db({type:t,selectors:[["app-swiper"]],decls:3,vars:3,consts:[[1,"swiper__box",3,"ngStyle"]],template:function(t,e){1&t&&(x.Ob(0,"p"),x.kc(1,"\u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439 \u0441\u0432\u0430\u0439\u043f\u043d\u0443\u0442\u044c \u043f\u043e \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u0443 \u0432 \u043b\u044e\u0431\u0443\u044e \u0441\u0442\u043e\u0440\u043e\u043d\u0443"),x.Nb(),x.Kb(2,"div",0)),2&t&&(x.zb(2),x.bc("ngStyle",x.dc(1,m,e.bgColor)))},directives:[n.j],styles:[".swiper__box[_ngcontent-%COMP%]{width:500px;height:500px}"]}),t})();var X=s("tyNb");s.d(e,"SwiperModule",(function(){return Y}));const D=[{path:"",component:C}];let Y=(()=>{class t{}return t.\u0275mod=x.Hb({type:t}),t.\u0275inj=x.Gb({factory:function(e){return new(e||t)},imports:[[n.b,X.e.forChild(D)]]}),t})()}}]);