(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{XGW7:function(t,e,s){"use strict";s.r(e);var i=s("ofXK"),n=s("tyNb"),r=s("tk/3"),c=s("xgIS"),o=s("HDdC"),a=s("quSY");class u extends a.a{constructor(t,e){super()}schedule(t,e=0){return this}}class h extends u{constructor(t,e){super(t,e),this.scheduler=t,this.work=e,this.pending=!1}schedule(t,e=0){if(this.closed)return this;this.state=t;const s=this.id,i=this.scheduler;return null!=s&&(this.id=this.recycleAsyncId(i,s,e)),this.pending=!0,this.delay=e,this.id=this.id||this.requestAsyncId(i,this.id,e),this}requestAsyncId(t,e,s=0){return setInterval(t.flush.bind(t,this),s)}recycleAsyncId(t,e,s=0){if(null!==s&&this.delay===s&&!1===this.pending)return e;clearInterval(e)}execute(t,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const s=this._execute(t,e);if(s)return s;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(t,e){let s=!1,i=void 0;try{this.work(t)}catch(n){s=!0,i=!!n&&n||new Error(n)}if(s)return this.unsubscribe(),i}_unsubscribe(){const t=this.id,e=this.scheduler,s=e.actions,i=s.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==i&&s.splice(i,1),null!=t&&(this.id=this.recycleAsyncId(e,t,null)),this.delay=null}}let l=(()=>{class t{constructor(e,s=t.now){this.SchedulerAction=e,this.now=s}schedule(t,e=0,s){return new this.SchedulerAction(this,t).schedule(s,e)}}return t.now=()=>Date.now(),t})();class d extends l{constructor(t,e=l.now){super(t,()=>d.delegate&&d.delegate!==this?d.delegate.now():e()),this.actions=[],this.active=!1,this.scheduled=void 0}schedule(t,e=0,s){return d.delegate&&d.delegate!==this?d.delegate.schedule(t,e,s):super.schedule(t,e,s)}flush(t){const{actions:e}=this;if(this.active)return void e.push(t);let s;this.active=!0;do{if(s=t.execute(t.state,t.delay))break}while(t=e.shift());if(this.active=!1,s){for(;t=e.shift();)t.unsubscribe();throw s}}}const p=new d(h);var b=s("DH7j");function g(t){const{subscriber:e,counter:s,period:i}=t;e.next(s),this.schedule({subscriber:e,counter:s+1,period:i},i)}var f=s("LRne"),_=s("l7GE"),v=s("ZUHj");class y{constructor(t){this.durationSelector=t}call(t,e){return e.subscribe(new m(t,this.durationSelector))}}class m extends _.a{constructor(t,e){super(t),this.durationSelector=e,this.hasValue=!1,this.durationSubscription=null}_next(t){try{const e=this.durationSelector.call(this,t);e&&this._tryNext(t,e)}catch(e){this.destination.error(e)}}_complete(){this.emitValue(),this.destination.complete()}_tryNext(t,e){let s=this.durationSubscription;this.value=t,this.hasValue=!0,s&&(s.unsubscribe(),this.remove(s)),s=Object(v.a)(this,e),s&&!s.closed&&this.add(this.durationSubscription=s)}notifyNext(t,e,s,i,n){this.emitValue()}notifyComplete(){this.emitValue()}emitValue(){if(this.hasValue){const t=this.value,e=this.durationSubscription;e&&(this.durationSubscription=null,e.unsubscribe(),this.remove(e)),this.value=null,this.hasValue=!1,super._next(t)}}}var w=s("eIep"),x=s("fXoL");let O=(()=>{class t{constructor(t){this.http=t}repoRequest(t){return this.http.get(`https://api.github.com/search/repositories?q=${t}`)}}return t.\u0275fac=function(e){return new(e||t)(x.Sb(r.a))},t.\u0275prov=x.Fb({token:t,factory:t.\u0275fac}),t})();var j=s("R0Ic");const k=Object(j.l)("opacityChangeAnimation",[Object(j.k)(":enter",[Object(j.j)({opacity:0}),Object(j.e)(".2s",Object(j.j)({opacity:1}))]),Object(j.k)(":leave",[Object(j.e)(".2s",Object(j.j)({opacity:0}))])]),I=["searchInput"];function N(t,e){if(1&t&&(x.Ob(0,"p"),x.kc(1),x.Nb()),2&t){const t=x.Yb();x.zb(1),x.mc("\u0412\u0441\u0435\u0433\u043e \u043d\u0430\u0448\u043b\u043e\u0441\u044c ",t.count," \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0435\u0432")}}function S(t,e){if(1&t&&(x.Ob(0,"p"),x.kc(1),x.Nb()),2&t){const t=x.Yb();x.bc("@opacityChangeAnimation",void 0),x.zb(1),x.lc(t.requestErrMessage)}}function q(t,e){1&t&&(x.Ob(0,"div",6),x.Kb(1,"div",7),x.Nb()),2&t&&x.bc("@opacityChangeAnimation",void 0)}function C(t,e){if(1&t&&(x.Ob(0,"span",16),x.Ob(1,"span",14),x.kc(2,"Language:\u2002"),x.Nb(),x.kc(3),x.Nb()),2&t){const t=x.Yb().$implicit;x.zb(3),x.lc(t.language)}}function R(t,e){if(1&t&&(x.Ob(0,"a",8),x.Ob(1,"h3",9),x.kc(2),x.Nb(),x.Kb(3,"img",10),x.Ob(4,"p",11),x.kc(5),x.Nb(),x.Ob(6,"div",12),x.Ob(7,"span",13),x.Ob(8,"span",14),x.kc(9,"Stars:\u2002"),x.Nb(),x.kc(10),x.Nb(),x.jc(11,C,4,1,"span",15),x.Nb(),x.Nb()),2&t){const t=e.$implicit;x.bc("@opacityChangeAnimation",void 0)("href",t.html_url,x.hc),x.zb(2),x.lc(t.name),x.zb(1),x.bc("src",null==t?null:null==t.owner?null:t.owner.avatar_url,x.hc),x.zb(2),x.lc(t.description),x.zb(5),x.lc(t.stargazers_count),x.zb(1),x.bc("ngIf",t.language)}}let z=(()=>{class t{constructor(t){this.searchService=t,this.count=0}resReset(){this.repositories=[],this.count=0}getRes(){var t;Object(c.a)(this.searchInput.nativeElement,"input").pipe((t=()=>(this.isLoading=!0,function(t=0,e=p){var s;return s=t,(Object(b.a)(s)||!(s-parseFloat(s)+1>=0)||t<0)&&(t=0),e&&"function"==typeof e.schedule||(e=p),new o.a(s=>(s.add(e.schedule(g,t,{subscriber:s,counter:0,period:t})),s))}(500)),e=>e.lift(new y(t))),Object(w.a)(t=>{const e=t.target.value;return""!==e?this.searchService.repoRequest(e):Object(f.a)(null)})).subscribe(t=>{this.isLoading=!1,t&&null!==t?(this.isRequestErr=!(t.total_count>0),this.requestErrMessage=this.isRequestErr?"\u043d\u0435 \u043d\u0430\u0448\u043b\u043e\u0441\u044c \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0435\u0432 \u0441 \u0442\u0430\u043a\u0438\u043c \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435\u043c":"",this.repositories=t.items,this.count=t.total_count):(this.isRequestErr=!0,this.requestErrMessage="\u0437\u0430\u043f\u0440\u043e\u0441 \u0442\u043e \u0432\u0432\u0435\u0434\u0438",this.resReset())},t=>{console.log(t),this.isLoading=!1,this.isRequestErr=!0,this.requestErrMessage="\u0441\u043b\u0438\u0448\u043a\u043e\u043c \u043c\u043d\u043e\u0433\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432, \u0431\u0440\u0430\u0442\u0438\u0448\u043a\u0430 - \u0441\u0445\u043e\u0434\u0438 \u043f\u0435\u0440\u0435\u043a\u0443\u0440\u0438",this.resReset()})}ngAfterViewInit(){this.getRes()}}return t.\u0275fac=function(e){return new(e||t)(x.Jb(O))},t.\u0275cmp=x.Db({type:t,selectors:[["app-gh-search"]],viewQuery:function(t,e){var s;1&t&&x.nc(I,!0),2&t&&x.ec(s=x.Xb())&&(e.searchInput=s.first)},features:[x.yb([O])],decls:10,vars:4,consts:[["type","text",1,"github-input"],["searchInput",""],[4,"ngIf"],[1,"result-container"],["class","preloader__container",4,"ngIf"],["class","repo-card","target","blank",3,"href",4,"ngFor","ngForOf"],[1,"preloader__container"],[1,"preloader"],["target","blank",1,"repo-card",3,"href"],[1,"repo-card__title"],["alt","author avatar",1,"repo-card__avatar",3,"src"],[1,"repo-card__subtitle"],[1,"repo-card__description"],[1,"repo-card__stars"],[1,"bold-text"],["class","repo-card__language",4,"ngIf"],[1,"repo-card__language"]],template:function(t,e){1&t&&(x.Ob(0,"div"),x.Ob(1,"h2"),x.kc(2,"\u0432\u0432\u0435\u0434\u0438 \u0437\u0430\u043f\u0440\u043e\u0441 \u0438 \u043d\u0430\u0439\u0434\u0435\u0448\u044c \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0438 \u043d\u0430 gh"),x.Nb(),x.Kb(3,"input",0,1),x.jc(5,N,2,1,"p",2),x.Ob(6,"div",3),x.jc(7,S,2,2,"p",2),x.jc(8,q,2,1,"div",4),x.jc(9,R,12,7,"a",5),x.Nb(),x.Nb()),2&t&&(x.zb(5),x.bc("ngIf",e.count>0),x.zb(2),x.bc("ngIf",e.isRequestErr),x.zb(1),x.bc("ngIf",e.isLoading),x.zb(1),x.bc("ngForOf",e.repositories))},directives:[i.i,i.h],styles:["@-webkit-keyframes spin{to{transform:rotate(1turn)}}@keyframes spin{to{transform:rotate(1turn)}}.preloader[_ngcontent-%COMP%]{width:100px;height:100px;border-radius:50%;border:4px solid;border-color:#888 #888 #444;-webkit-animation:spin .75s linear infinite;animation:spin .75s linear infinite}.preloader__container[_ngcontent-%COMP%]{position:absolute;display:flex;justify-content:center;width:100%;margin-top:50px}.result-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,282px);grid-gap:18px 18px}.repo-card[_ngcontent-%COMP%]{text-decoration:none;color:#000;padding:5px;box-shadow:1px 1px 3px grey}.repo-card__description[_ngcontent-%COMP%]{display:flex}.repo-card__avatar[_ngcontent-%COMP%]{width:272px;height:272px}.repo-card__stars[_ngcontent-%COMP%]{margin-right:10px}.github-input[_ngcontent-%COMP%]{width:100%;height:40px}"],data:{animation:[k]}}),t})();s.d(e,"GhSearchModule",(function(){return E}));const A=[{path:"",component:z}];let E=(()=>{class t{}return t.\u0275mod=x.Hb({type:t}),t.\u0275inj=x.Gb({factory:function(e){return new(e||t)},imports:[[i.b,n.e.forChild(A),r.b]]}),t})()}}]);