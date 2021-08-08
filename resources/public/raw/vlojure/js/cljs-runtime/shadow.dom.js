goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_60736 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_60736(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_60743 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_60743(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__59134 = coll;
var G__59135 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__59134,G__59135) : shadow.dom.lazy_native_coll_seq.call(null,G__59134,G__59135));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__59187 = arguments.length;
switch (G__59187) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__59195 = arguments.length;
switch (G__59195) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__59221 = arguments.length;
switch (G__59221) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__59243 = arguments.length;
switch (G__59243) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__59272 = arguments.length;
switch (G__59272) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__59296 = arguments.length;
switch (G__59296) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e59318){if((e59318 instanceof Object)){
var e = e59318;
return console.log("didnt support attachEvent",el,e);
} else {
throw e59318;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__59352 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__59353 = null;
var count__59354 = (0);
var i__59355 = (0);
while(true){
if((i__59355 < count__59354)){
var el = chunk__59353.cljs$core$IIndexed$_nth$arity$2(null,i__59355);
var handler_60788__$1 = ((function (seq__59352,chunk__59353,count__59354,i__59355,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__59352,chunk__59353,count__59354,i__59355,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_60788__$1);


var G__60789 = seq__59352;
var G__60790 = chunk__59353;
var G__60791 = count__59354;
var G__60792 = (i__59355 + (1));
seq__59352 = G__60789;
chunk__59353 = G__60790;
count__59354 = G__60791;
i__59355 = G__60792;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__59352);
if(temp__5753__auto__){
var seq__59352__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59352__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__59352__$1);
var G__60793 = cljs.core.chunk_rest(seq__59352__$1);
var G__60794 = c__4556__auto__;
var G__60795 = cljs.core.count(c__4556__auto__);
var G__60796 = (0);
seq__59352 = G__60793;
chunk__59353 = G__60794;
count__59354 = G__60795;
i__59355 = G__60796;
continue;
} else {
var el = cljs.core.first(seq__59352__$1);
var handler_60797__$1 = ((function (seq__59352,chunk__59353,count__59354,i__59355,el,seq__59352__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__59352,chunk__59353,count__59354,i__59355,el,seq__59352__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_60797__$1);


var G__60799 = cljs.core.next(seq__59352__$1);
var G__60800 = null;
var G__60801 = (0);
var G__60802 = (0);
seq__59352 = G__60799;
chunk__59353 = G__60800;
count__59354 = G__60801;
i__59355 = G__60802;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__59385 = arguments.length;
switch (G__59385) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__59428 = cljs.core.seq(events);
var chunk__59429 = null;
var count__59430 = (0);
var i__59431 = (0);
while(true){
if((i__59431 < count__59430)){
var vec__59466 = chunk__59429.cljs$core$IIndexed$_nth$arity$2(null,i__59431);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59466,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59466,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__60838 = seq__59428;
var G__60839 = chunk__59429;
var G__60840 = count__59430;
var G__60841 = (i__59431 + (1));
seq__59428 = G__60838;
chunk__59429 = G__60839;
count__59430 = G__60840;
i__59431 = G__60841;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__59428);
if(temp__5753__auto__){
var seq__59428__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59428__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__59428__$1);
var G__60850 = cljs.core.chunk_rest(seq__59428__$1);
var G__60851 = c__4556__auto__;
var G__60852 = cljs.core.count(c__4556__auto__);
var G__60853 = (0);
seq__59428 = G__60850;
chunk__59429 = G__60851;
count__59430 = G__60852;
i__59431 = G__60853;
continue;
} else {
var vec__59482 = cljs.core.first(seq__59428__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59482,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59482,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__60855 = cljs.core.next(seq__59428__$1);
var G__60856 = null;
var G__60857 = (0);
var G__60858 = (0);
seq__59428 = G__60855;
chunk__59429 = G__60856;
count__59430 = G__60857;
i__59431 = G__60858;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__59487 = cljs.core.seq(styles);
var chunk__59488 = null;
var count__59489 = (0);
var i__59490 = (0);
while(true){
if((i__59490 < count__59489)){
var vec__59510 = chunk__59488.cljs$core$IIndexed$_nth$arity$2(null,i__59490);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59510,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59510,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__60863 = seq__59487;
var G__60864 = chunk__59488;
var G__60865 = count__59489;
var G__60866 = (i__59490 + (1));
seq__59487 = G__60863;
chunk__59488 = G__60864;
count__59489 = G__60865;
i__59490 = G__60866;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__59487);
if(temp__5753__auto__){
var seq__59487__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59487__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__59487__$1);
var G__60867 = cljs.core.chunk_rest(seq__59487__$1);
var G__60868 = c__4556__auto__;
var G__60869 = cljs.core.count(c__4556__auto__);
var G__60870 = (0);
seq__59487 = G__60867;
chunk__59488 = G__60868;
count__59489 = G__60869;
i__59490 = G__60870;
continue;
} else {
var vec__59522 = cljs.core.first(seq__59487__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59522,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59522,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__60871 = cljs.core.next(seq__59487__$1);
var G__60872 = null;
var G__60873 = (0);
var G__60874 = (0);
seq__59487 = G__60871;
chunk__59488 = G__60872;
count__59489 = G__60873;
i__59490 = G__60874;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__59529_60875 = key;
var G__59529_60876__$1 = (((G__59529_60875 instanceof cljs.core.Keyword))?G__59529_60875.fqn:null);
switch (G__59529_60876__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_60882 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_60882,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_60882,"aria-");
}
})())){
el.setAttribute(ks_60882,value);
} else {
(el[ks_60882] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__59601){
var map__59602 = p__59601;
var map__59602__$1 = (((((!((map__59602 == null))))?(((((map__59602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59602.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59602):map__59602);
var props = map__59602__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59602__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__59619 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59619,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59619,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59619,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__59622 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__59622,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__59622;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__59630 = arguments.length;
switch (G__59630) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__59649){
var vec__59650 = p__59649;
var seq__59651 = cljs.core.seq(vec__59650);
var first__59652 = cljs.core.first(seq__59651);
var seq__59651__$1 = cljs.core.next(seq__59651);
var nn = first__59652;
var first__59652__$1 = cljs.core.first(seq__59651__$1);
var seq__59651__$2 = cljs.core.next(seq__59651__$1);
var np = first__59652__$1;
var nc = seq__59651__$2;
var node = vec__59650;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__59666 = nn;
var G__59667 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__59666,G__59667) : create_fn.call(null,G__59666,G__59667));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__59669 = nn;
var G__59670 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__59669,G__59670) : create_fn.call(null,G__59669,G__59670));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__59675 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59675,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59675,(1),null);
var seq__59678_60904 = cljs.core.seq(node_children);
var chunk__59679_60905 = null;
var count__59680_60906 = (0);
var i__59681_60907 = (0);
while(true){
if((i__59681_60907 < count__59680_60906)){
var child_struct_60908 = chunk__59679_60905.cljs$core$IIndexed$_nth$arity$2(null,i__59681_60907);
var children_60909 = shadow.dom.dom_node(child_struct_60908);
if(cljs.core.seq_QMARK_(children_60909)){
var seq__59759_60910 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_60909));
var chunk__59761_60911 = null;
var count__59762_60912 = (0);
var i__59763_60913 = (0);
while(true){
if((i__59763_60913 < count__59762_60912)){
var child_60918 = chunk__59761_60911.cljs$core$IIndexed$_nth$arity$2(null,i__59763_60913);
if(cljs.core.truth_(child_60918)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_60918);


var G__60919 = seq__59759_60910;
var G__60920 = chunk__59761_60911;
var G__60921 = count__59762_60912;
var G__60922 = (i__59763_60913 + (1));
seq__59759_60910 = G__60919;
chunk__59761_60911 = G__60920;
count__59762_60912 = G__60921;
i__59763_60913 = G__60922;
continue;
} else {
var G__60925 = seq__59759_60910;
var G__60926 = chunk__59761_60911;
var G__60927 = count__59762_60912;
var G__60928 = (i__59763_60913 + (1));
seq__59759_60910 = G__60925;
chunk__59761_60911 = G__60926;
count__59762_60912 = G__60927;
i__59763_60913 = G__60928;
continue;
}
} else {
var temp__5753__auto___60933 = cljs.core.seq(seq__59759_60910);
if(temp__5753__auto___60933){
var seq__59759_60935__$1 = temp__5753__auto___60933;
if(cljs.core.chunked_seq_QMARK_(seq__59759_60935__$1)){
var c__4556__auto___60937 = cljs.core.chunk_first(seq__59759_60935__$1);
var G__60939 = cljs.core.chunk_rest(seq__59759_60935__$1);
var G__60940 = c__4556__auto___60937;
var G__60941 = cljs.core.count(c__4556__auto___60937);
var G__60942 = (0);
seq__59759_60910 = G__60939;
chunk__59761_60911 = G__60940;
count__59762_60912 = G__60941;
i__59763_60913 = G__60942;
continue;
} else {
var child_60948 = cljs.core.first(seq__59759_60935__$1);
if(cljs.core.truth_(child_60948)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_60948);


var G__60951 = cljs.core.next(seq__59759_60935__$1);
var G__60953 = null;
var G__60954 = (0);
var G__60955 = (0);
seq__59759_60910 = G__60951;
chunk__59761_60911 = G__60953;
count__59762_60912 = G__60954;
i__59763_60913 = G__60955;
continue;
} else {
var G__60959 = cljs.core.next(seq__59759_60935__$1);
var G__60960 = null;
var G__60961 = (0);
var G__60962 = (0);
seq__59759_60910 = G__60959;
chunk__59761_60911 = G__60960;
count__59762_60912 = G__60961;
i__59763_60913 = G__60962;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_60909);
}


var G__60965 = seq__59678_60904;
var G__60966 = chunk__59679_60905;
var G__60967 = count__59680_60906;
var G__60968 = (i__59681_60907 + (1));
seq__59678_60904 = G__60965;
chunk__59679_60905 = G__60966;
count__59680_60906 = G__60967;
i__59681_60907 = G__60968;
continue;
} else {
var temp__5753__auto___60973 = cljs.core.seq(seq__59678_60904);
if(temp__5753__auto___60973){
var seq__59678_60976__$1 = temp__5753__auto___60973;
if(cljs.core.chunked_seq_QMARK_(seq__59678_60976__$1)){
var c__4556__auto___60981 = cljs.core.chunk_first(seq__59678_60976__$1);
var G__60986 = cljs.core.chunk_rest(seq__59678_60976__$1);
var G__60987 = c__4556__auto___60981;
var G__60988 = cljs.core.count(c__4556__auto___60981);
var G__60989 = (0);
seq__59678_60904 = G__60986;
chunk__59679_60905 = G__60987;
count__59680_60906 = G__60988;
i__59681_60907 = G__60989;
continue;
} else {
var child_struct_60996 = cljs.core.first(seq__59678_60976__$1);
var children_60998 = shadow.dom.dom_node(child_struct_60996);
if(cljs.core.seq_QMARK_(children_60998)){
var seq__59783_60999 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_60998));
var chunk__59785_61000 = null;
var count__59786_61001 = (0);
var i__59787_61002 = (0);
while(true){
if((i__59787_61002 < count__59786_61001)){
var child_61003 = chunk__59785_61000.cljs$core$IIndexed$_nth$arity$2(null,i__59787_61002);
if(cljs.core.truth_(child_61003)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_61003);


var G__61004 = seq__59783_60999;
var G__61005 = chunk__59785_61000;
var G__61006 = count__59786_61001;
var G__61007 = (i__59787_61002 + (1));
seq__59783_60999 = G__61004;
chunk__59785_61000 = G__61005;
count__59786_61001 = G__61006;
i__59787_61002 = G__61007;
continue;
} else {
var G__61015 = seq__59783_60999;
var G__61016 = chunk__59785_61000;
var G__61017 = count__59786_61001;
var G__61018 = (i__59787_61002 + (1));
seq__59783_60999 = G__61015;
chunk__59785_61000 = G__61016;
count__59786_61001 = G__61017;
i__59787_61002 = G__61018;
continue;
}
} else {
var temp__5753__auto___61020__$1 = cljs.core.seq(seq__59783_60999);
if(temp__5753__auto___61020__$1){
var seq__59783_61022__$1 = temp__5753__auto___61020__$1;
if(cljs.core.chunked_seq_QMARK_(seq__59783_61022__$1)){
var c__4556__auto___61027 = cljs.core.chunk_first(seq__59783_61022__$1);
var G__61030 = cljs.core.chunk_rest(seq__59783_61022__$1);
var G__61031 = c__4556__auto___61027;
var G__61032 = cljs.core.count(c__4556__auto___61027);
var G__61033 = (0);
seq__59783_60999 = G__61030;
chunk__59785_61000 = G__61031;
count__59786_61001 = G__61032;
i__59787_61002 = G__61033;
continue;
} else {
var child_61036 = cljs.core.first(seq__59783_61022__$1);
if(cljs.core.truth_(child_61036)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_61036);


var G__61041 = cljs.core.next(seq__59783_61022__$1);
var G__61042 = null;
var G__61043 = (0);
var G__61044 = (0);
seq__59783_60999 = G__61041;
chunk__59785_61000 = G__61042;
count__59786_61001 = G__61043;
i__59787_61002 = G__61044;
continue;
} else {
var G__61048 = cljs.core.next(seq__59783_61022__$1);
var G__61051 = null;
var G__61053 = (0);
var G__61054 = (0);
seq__59783_60999 = G__61048;
chunk__59785_61000 = G__61051;
count__59786_61001 = G__61053;
i__59787_61002 = G__61054;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_60998);
}


var G__61058 = cljs.core.next(seq__59678_60976__$1);
var G__61059 = null;
var G__61060 = (0);
var G__61061 = (0);
seq__59678_60904 = G__61058;
chunk__59679_60905 = G__61059;
count__59680_60906 = G__61060;
i__59681_60907 = G__61061;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__59854 = cljs.core.seq(node);
var chunk__59855 = null;
var count__59856 = (0);
var i__59857 = (0);
while(true){
if((i__59857 < count__59856)){
var n = chunk__59855.cljs$core$IIndexed$_nth$arity$2(null,i__59857);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__61075 = seq__59854;
var G__61076 = chunk__59855;
var G__61077 = count__59856;
var G__61078 = (i__59857 + (1));
seq__59854 = G__61075;
chunk__59855 = G__61076;
count__59856 = G__61077;
i__59857 = G__61078;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__59854);
if(temp__5753__auto__){
var seq__59854__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59854__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__59854__$1);
var G__61080 = cljs.core.chunk_rest(seq__59854__$1);
var G__61081 = c__4556__auto__;
var G__61082 = cljs.core.count(c__4556__auto__);
var G__61083 = (0);
seq__59854 = G__61080;
chunk__59855 = G__61081;
count__59856 = G__61082;
i__59857 = G__61083;
continue;
} else {
var n = cljs.core.first(seq__59854__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__61084 = cljs.core.next(seq__59854__$1);
var G__61085 = null;
var G__61086 = (0);
var G__61087 = (0);
seq__59854 = G__61084;
chunk__59855 = G__61085;
count__59856 = G__61086;
i__59857 = G__61087;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__59886 = arguments.length;
switch (G__59886) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__59895 = arguments.length;
switch (G__59895) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__59934 = arguments.length;
switch (G__59934) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___61108 = arguments.length;
var i__4737__auto___61109 = (0);
while(true){
if((i__4737__auto___61109 < len__4736__auto___61108)){
args__4742__auto__.push((arguments[i__4737__auto___61109]));

var G__61110 = (i__4737__auto___61109 + (1));
i__4737__auto___61109 = G__61110;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__59954_61111 = cljs.core.seq(nodes);
var chunk__59955_61112 = null;
var count__59956_61113 = (0);
var i__59957_61114 = (0);
while(true){
if((i__59957_61114 < count__59956_61113)){
var node_61115 = chunk__59955_61112.cljs$core$IIndexed$_nth$arity$2(null,i__59957_61114);
fragment.appendChild(shadow.dom._to_dom(node_61115));


var G__61117 = seq__59954_61111;
var G__61118 = chunk__59955_61112;
var G__61119 = count__59956_61113;
var G__61120 = (i__59957_61114 + (1));
seq__59954_61111 = G__61117;
chunk__59955_61112 = G__61118;
count__59956_61113 = G__61119;
i__59957_61114 = G__61120;
continue;
} else {
var temp__5753__auto___61125 = cljs.core.seq(seq__59954_61111);
if(temp__5753__auto___61125){
var seq__59954_61126__$1 = temp__5753__auto___61125;
if(cljs.core.chunked_seq_QMARK_(seq__59954_61126__$1)){
var c__4556__auto___61127 = cljs.core.chunk_first(seq__59954_61126__$1);
var G__61129 = cljs.core.chunk_rest(seq__59954_61126__$1);
var G__61130 = c__4556__auto___61127;
var G__61131 = cljs.core.count(c__4556__auto___61127);
var G__61132 = (0);
seq__59954_61111 = G__61129;
chunk__59955_61112 = G__61130;
count__59956_61113 = G__61131;
i__59957_61114 = G__61132;
continue;
} else {
var node_61133 = cljs.core.first(seq__59954_61126__$1);
fragment.appendChild(shadow.dom._to_dom(node_61133));


var G__61134 = cljs.core.next(seq__59954_61126__$1);
var G__61135 = null;
var G__61136 = (0);
var G__61137 = (0);
seq__59954_61111 = G__61134;
chunk__59955_61112 = G__61135;
count__59956_61113 = G__61136;
i__59957_61114 = G__61137;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq59948){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59948));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__59964_61154 = cljs.core.seq(scripts);
var chunk__59965_61155 = null;
var count__59966_61156 = (0);
var i__59967_61157 = (0);
while(true){
if((i__59967_61157 < count__59966_61156)){
var vec__59985_61162 = chunk__59965_61155.cljs$core$IIndexed$_nth$arity$2(null,i__59967_61157);
var script_tag_61163 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59985_61162,(0),null);
var script_body_61164 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59985_61162,(1),null);
eval(script_body_61164);


var G__61169 = seq__59964_61154;
var G__61170 = chunk__59965_61155;
var G__61171 = count__59966_61156;
var G__61172 = (i__59967_61157 + (1));
seq__59964_61154 = G__61169;
chunk__59965_61155 = G__61170;
count__59966_61156 = G__61171;
i__59967_61157 = G__61172;
continue;
} else {
var temp__5753__auto___61174 = cljs.core.seq(seq__59964_61154);
if(temp__5753__auto___61174){
var seq__59964_61179__$1 = temp__5753__auto___61174;
if(cljs.core.chunked_seq_QMARK_(seq__59964_61179__$1)){
var c__4556__auto___61181 = cljs.core.chunk_first(seq__59964_61179__$1);
var G__61183 = cljs.core.chunk_rest(seq__59964_61179__$1);
var G__61184 = c__4556__auto___61181;
var G__61185 = cljs.core.count(c__4556__auto___61181);
var G__61186 = (0);
seq__59964_61154 = G__61183;
chunk__59965_61155 = G__61184;
count__59966_61156 = G__61185;
i__59967_61157 = G__61186;
continue;
} else {
var vec__60000_61192 = cljs.core.first(seq__59964_61179__$1);
var script_tag_61193 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60000_61192,(0),null);
var script_body_61194 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60000_61192,(1),null);
eval(script_body_61194);


var G__61200 = cljs.core.next(seq__59964_61179__$1);
var G__61201 = null;
var G__61202 = (0);
var G__61203 = (0);
seq__59964_61154 = G__61200;
chunk__59965_61155 = G__61201;
count__59966_61156 = G__61202;
i__59967_61157 = G__61203;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__60006){
var vec__60007 = p__60006;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60007,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60007,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__60027 = arguments.length;
switch (G__60027) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__60068 = cljs.core.seq(style_keys);
var chunk__60069 = null;
var count__60070 = (0);
var i__60071 = (0);
while(true){
if((i__60071 < count__60070)){
var it = chunk__60069.cljs$core$IIndexed$_nth$arity$2(null,i__60071);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__61216 = seq__60068;
var G__61217 = chunk__60069;
var G__61218 = count__60070;
var G__61219 = (i__60071 + (1));
seq__60068 = G__61216;
chunk__60069 = G__61217;
count__60070 = G__61218;
i__60071 = G__61219;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__60068);
if(temp__5753__auto__){
var seq__60068__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60068__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__60068__$1);
var G__61220 = cljs.core.chunk_rest(seq__60068__$1);
var G__61221 = c__4556__auto__;
var G__61222 = cljs.core.count(c__4556__auto__);
var G__61223 = (0);
seq__60068 = G__61220;
chunk__60069 = G__61221;
count__60070 = G__61222;
i__60071 = G__61223;
continue;
} else {
var it = cljs.core.first(seq__60068__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__61227 = cljs.core.next(seq__60068__$1);
var G__61228 = null;
var G__61229 = (0);
var G__61230 = (0);
seq__60068 = G__61227;
chunk__60069 = G__61228;
count__60070 = G__61229;
i__60071 = G__61230;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k60083,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__60104 = k60083;
var G__60104__$1 = (((G__60104 instanceof cljs.core.Keyword))?G__60104.fqn:null);
switch (G__60104__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k60083,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__60108){
var vec__60110 = p__60108;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60110,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60110,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__60082){
var self__ = this;
var G__60082__$1 = this;
return (new cljs.core.RecordIter((0),G__60082__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this60086,other60087){
var self__ = this;
var this60086__$1 = this;
return (((!((other60087 == null)))) && ((this60086__$1.constructor === other60087.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60086__$1.x,other60087.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60086__$1.y,other60087.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60086__$1.__extmap,other60087.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__60082){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__60154 = cljs.core.keyword_identical_QMARK_;
var expr__60155 = k__4388__auto__;
if(cljs.core.truth_((pred__60154.cljs$core$IFn$_invoke$arity$2 ? pred__60154.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__60155) : pred__60154.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__60155)))){
return (new shadow.dom.Coordinate(G__60082,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__60154.cljs$core$IFn$_invoke$arity$2 ? pred__60154.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__60155) : pred__60154.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__60155)))){
return (new shadow.dom.Coordinate(self__.x,G__60082,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__60082),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__60082){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__60082,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__60089){
var extmap__4419__auto__ = (function (){var G__60178 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__60089,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__60089)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__60178);
} else {
return G__60178;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__60089),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__60089),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k60196,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__60212 = k60196;
var G__60212__$1 = (((G__60212 instanceof cljs.core.Keyword))?G__60212.fqn:null);
switch (G__60212__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k60196,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__60220){
var vec__60221 = p__60220;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60221,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60221,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__60195){
var self__ = this;
var G__60195__$1 = this;
return (new cljs.core.RecordIter((0),G__60195__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this60197,other60198){
var self__ = this;
var this60197__$1 = this;
return (((!((other60198 == null)))) && ((this60197__$1.constructor === other60198.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60197__$1.w,other60198.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60197__$1.h,other60198.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60197__$1.__extmap,other60198.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__60195){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__60262 = cljs.core.keyword_identical_QMARK_;
var expr__60263 = k__4388__auto__;
if(cljs.core.truth_((pred__60262.cljs$core$IFn$_invoke$arity$2 ? pred__60262.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__60263) : pred__60262.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__60263)))){
return (new shadow.dom.Size(G__60195,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__60262.cljs$core$IFn$_invoke$arity$2 ? pred__60262.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__60263) : pred__60262.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__60263)))){
return (new shadow.dom.Size(self__.w,G__60195,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__60195),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__60195){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__60195,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__60204){
var extmap__4419__auto__ = (function (){var G__60284 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__60204,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__60204)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__60284);
} else {
return G__60284;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__60204),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__60204),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__61428 = (i + (1));
var G__61429 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__61428;
ret = G__61429;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__60335){
var vec__60336 = p__60335;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60336,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60336,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__60344 = arguments.length;
switch (G__60344) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__61472 = ps;
var G__61473 = (i + (1));
el__$1 = G__61472;
i = G__61473;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__60424 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60424,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60424,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60424,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__60430_61569 = cljs.core.seq(props);
var chunk__60431_61570 = null;
var count__60432_61571 = (0);
var i__60433_61572 = (0);
while(true){
if((i__60433_61572 < count__60432_61571)){
var vec__60447_61576 = chunk__60431_61570.cljs$core$IIndexed$_nth$arity$2(null,i__60433_61572);
var k_61577 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60447_61576,(0),null);
var v_61578 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60447_61576,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_61577);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_61577),v_61578);


var G__61587 = seq__60430_61569;
var G__61588 = chunk__60431_61570;
var G__61589 = count__60432_61571;
var G__61590 = (i__60433_61572 + (1));
seq__60430_61569 = G__61587;
chunk__60431_61570 = G__61588;
count__60432_61571 = G__61589;
i__60433_61572 = G__61590;
continue;
} else {
var temp__5753__auto___61596 = cljs.core.seq(seq__60430_61569);
if(temp__5753__auto___61596){
var seq__60430_61598__$1 = temp__5753__auto___61596;
if(cljs.core.chunked_seq_QMARK_(seq__60430_61598__$1)){
var c__4556__auto___61604 = cljs.core.chunk_first(seq__60430_61598__$1);
var G__61605 = cljs.core.chunk_rest(seq__60430_61598__$1);
var G__61606 = c__4556__auto___61604;
var G__61607 = cljs.core.count(c__4556__auto___61604);
var G__61608 = (0);
seq__60430_61569 = G__61605;
chunk__60431_61570 = G__61606;
count__60432_61571 = G__61607;
i__60433_61572 = G__61608;
continue;
} else {
var vec__60454_61610 = cljs.core.first(seq__60430_61598__$1);
var k_61611 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60454_61610,(0),null);
var v_61612 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60454_61610,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_61611);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_61611),v_61612);


var G__61617 = cljs.core.next(seq__60430_61598__$1);
var G__61618 = null;
var G__61619 = (0);
var G__61620 = (0);
seq__60430_61569 = G__61617;
chunk__60431_61570 = G__61618;
count__60432_61571 = G__61619;
i__60433_61572 = G__61620;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__60471 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60471,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60471,(1),null);
var seq__60476_61621 = cljs.core.seq(node_children);
var chunk__60478_61622 = null;
var count__60479_61623 = (0);
var i__60480_61624 = (0);
while(true){
if((i__60480_61624 < count__60479_61623)){
var child_struct_61625 = chunk__60478_61622.cljs$core$IIndexed$_nth$arity$2(null,i__60480_61624);
if((!((child_struct_61625 == null)))){
if(typeof child_struct_61625 === 'string'){
var text_61627 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_61627),child_struct_61625].join(''));
} else {
var children_61628 = shadow.dom.svg_node(child_struct_61625);
if(cljs.core.seq_QMARK_(children_61628)){
var seq__60577_61629 = cljs.core.seq(children_61628);
var chunk__60579_61630 = null;
var count__60580_61631 = (0);
var i__60581_61632 = (0);
while(true){
if((i__60581_61632 < count__60580_61631)){
var child_61633 = chunk__60579_61630.cljs$core$IIndexed$_nth$arity$2(null,i__60581_61632);
if(cljs.core.truth_(child_61633)){
node.appendChild(child_61633);


var G__61636 = seq__60577_61629;
var G__61637 = chunk__60579_61630;
var G__61638 = count__60580_61631;
var G__61639 = (i__60581_61632 + (1));
seq__60577_61629 = G__61636;
chunk__60579_61630 = G__61637;
count__60580_61631 = G__61638;
i__60581_61632 = G__61639;
continue;
} else {
var G__61641 = seq__60577_61629;
var G__61642 = chunk__60579_61630;
var G__61643 = count__60580_61631;
var G__61644 = (i__60581_61632 + (1));
seq__60577_61629 = G__61641;
chunk__60579_61630 = G__61642;
count__60580_61631 = G__61643;
i__60581_61632 = G__61644;
continue;
}
} else {
var temp__5753__auto___61645 = cljs.core.seq(seq__60577_61629);
if(temp__5753__auto___61645){
var seq__60577_61646__$1 = temp__5753__auto___61645;
if(cljs.core.chunked_seq_QMARK_(seq__60577_61646__$1)){
var c__4556__auto___61647 = cljs.core.chunk_first(seq__60577_61646__$1);
var G__61648 = cljs.core.chunk_rest(seq__60577_61646__$1);
var G__61649 = c__4556__auto___61647;
var G__61650 = cljs.core.count(c__4556__auto___61647);
var G__61651 = (0);
seq__60577_61629 = G__61648;
chunk__60579_61630 = G__61649;
count__60580_61631 = G__61650;
i__60581_61632 = G__61651;
continue;
} else {
var child_61652 = cljs.core.first(seq__60577_61646__$1);
if(cljs.core.truth_(child_61652)){
node.appendChild(child_61652);


var G__61654 = cljs.core.next(seq__60577_61646__$1);
var G__61655 = null;
var G__61656 = (0);
var G__61657 = (0);
seq__60577_61629 = G__61654;
chunk__60579_61630 = G__61655;
count__60580_61631 = G__61656;
i__60581_61632 = G__61657;
continue;
} else {
var G__61658 = cljs.core.next(seq__60577_61646__$1);
var G__61659 = null;
var G__61660 = (0);
var G__61661 = (0);
seq__60577_61629 = G__61658;
chunk__60579_61630 = G__61659;
count__60580_61631 = G__61660;
i__60581_61632 = G__61661;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_61628);
}
}


var G__61662 = seq__60476_61621;
var G__61663 = chunk__60478_61622;
var G__61664 = count__60479_61623;
var G__61665 = (i__60480_61624 + (1));
seq__60476_61621 = G__61662;
chunk__60478_61622 = G__61663;
count__60479_61623 = G__61664;
i__60480_61624 = G__61665;
continue;
} else {
var G__61666 = seq__60476_61621;
var G__61667 = chunk__60478_61622;
var G__61668 = count__60479_61623;
var G__61669 = (i__60480_61624 + (1));
seq__60476_61621 = G__61666;
chunk__60478_61622 = G__61667;
count__60479_61623 = G__61668;
i__60480_61624 = G__61669;
continue;
}
} else {
var temp__5753__auto___61671 = cljs.core.seq(seq__60476_61621);
if(temp__5753__auto___61671){
var seq__60476_61672__$1 = temp__5753__auto___61671;
if(cljs.core.chunked_seq_QMARK_(seq__60476_61672__$1)){
var c__4556__auto___61673 = cljs.core.chunk_first(seq__60476_61672__$1);
var G__61674 = cljs.core.chunk_rest(seq__60476_61672__$1);
var G__61675 = c__4556__auto___61673;
var G__61676 = cljs.core.count(c__4556__auto___61673);
var G__61677 = (0);
seq__60476_61621 = G__61674;
chunk__60478_61622 = G__61675;
count__60479_61623 = G__61676;
i__60480_61624 = G__61677;
continue;
} else {
var child_struct_61681 = cljs.core.first(seq__60476_61672__$1);
if((!((child_struct_61681 == null)))){
if(typeof child_struct_61681 === 'string'){
var text_61683 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_61683),child_struct_61681].join(''));
} else {
var children_61684 = shadow.dom.svg_node(child_struct_61681);
if(cljs.core.seq_QMARK_(children_61684)){
var seq__60612_61689 = cljs.core.seq(children_61684);
var chunk__60614_61690 = null;
var count__60615_61691 = (0);
var i__60616_61692 = (0);
while(true){
if((i__60616_61692 < count__60615_61691)){
var child_61698 = chunk__60614_61690.cljs$core$IIndexed$_nth$arity$2(null,i__60616_61692);
if(cljs.core.truth_(child_61698)){
node.appendChild(child_61698);


var G__61699 = seq__60612_61689;
var G__61700 = chunk__60614_61690;
var G__61701 = count__60615_61691;
var G__61702 = (i__60616_61692 + (1));
seq__60612_61689 = G__61699;
chunk__60614_61690 = G__61700;
count__60615_61691 = G__61701;
i__60616_61692 = G__61702;
continue;
} else {
var G__61705 = seq__60612_61689;
var G__61706 = chunk__60614_61690;
var G__61707 = count__60615_61691;
var G__61708 = (i__60616_61692 + (1));
seq__60612_61689 = G__61705;
chunk__60614_61690 = G__61706;
count__60615_61691 = G__61707;
i__60616_61692 = G__61708;
continue;
}
} else {
var temp__5753__auto___61710__$1 = cljs.core.seq(seq__60612_61689);
if(temp__5753__auto___61710__$1){
var seq__60612_61723__$1 = temp__5753__auto___61710__$1;
if(cljs.core.chunked_seq_QMARK_(seq__60612_61723__$1)){
var c__4556__auto___61728 = cljs.core.chunk_first(seq__60612_61723__$1);
var G__61734 = cljs.core.chunk_rest(seq__60612_61723__$1);
var G__61735 = c__4556__auto___61728;
var G__61736 = cljs.core.count(c__4556__auto___61728);
var G__61737 = (0);
seq__60612_61689 = G__61734;
chunk__60614_61690 = G__61735;
count__60615_61691 = G__61736;
i__60616_61692 = G__61737;
continue;
} else {
var child_61740 = cljs.core.first(seq__60612_61723__$1);
if(cljs.core.truth_(child_61740)){
node.appendChild(child_61740);


var G__61741 = cljs.core.next(seq__60612_61723__$1);
var G__61742 = null;
var G__61743 = (0);
var G__61744 = (0);
seq__60612_61689 = G__61741;
chunk__60614_61690 = G__61742;
count__60615_61691 = G__61743;
i__60616_61692 = G__61744;
continue;
} else {
var G__61749 = cljs.core.next(seq__60612_61723__$1);
var G__61750 = null;
var G__61751 = (0);
var G__61752 = (0);
seq__60612_61689 = G__61749;
chunk__60614_61690 = G__61750;
count__60615_61691 = G__61751;
i__60616_61692 = G__61752;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_61684);
}
}


var G__61753 = cljs.core.next(seq__60476_61672__$1);
var G__61754 = null;
var G__61755 = (0);
var G__61756 = (0);
seq__60476_61621 = G__61753;
chunk__60478_61622 = G__61754;
count__60479_61623 = G__61755;
i__60480_61624 = G__61756;
continue;
} else {
var G__61757 = cljs.core.next(seq__60476_61672__$1);
var G__61758 = null;
var G__61759 = (0);
var G__61760 = (0);
seq__60476_61621 = G__61757;
chunk__60478_61622 = G__61758;
count__60479_61623 = G__61759;
i__60480_61624 = G__61760;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___61776 = arguments.length;
var i__4737__auto___61780 = (0);
while(true){
if((i__4737__auto___61780 < len__4736__auto___61776)){
args__4742__auto__.push((arguments[i__4737__auto___61780]));

var G__61786 = (i__4737__auto___61780 + (1));
i__4737__auto___61780 = G__61786;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq60658){
var G__60659 = cljs.core.first(seq60658);
var seq60658__$1 = cljs.core.next(seq60658);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60659,seq60658__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__60686 = arguments.length;
switch (G__60686) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__54431__auto___61826 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54433__auto__ = (function (){var switch__54151__auto__ = (function (state_60707){
var state_val_60708 = (state_60707[(1)]);
if((state_val_60708 === (1))){
var state_60707__$1 = state_60707;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60707__$1,(2),once_or_cleanup);
} else {
if((state_val_60708 === (2))){
var inst_60704 = (state_60707[(2)]);
var inst_60705 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_60707__$1 = (function (){var statearr_60714 = state_60707;
(statearr_60714[(7)] = inst_60704);

return statearr_60714;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_60707__$1,inst_60705);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__54152__auto__ = null;
var shadow$dom$state_machine__54152__auto____0 = (function (){
var statearr_60716 = [null,null,null,null,null,null,null,null];
(statearr_60716[(0)] = shadow$dom$state_machine__54152__auto__);

(statearr_60716[(1)] = (1));

return statearr_60716;
});
var shadow$dom$state_machine__54152__auto____1 = (function (state_60707){
while(true){
var ret_value__54153__auto__ = (function (){try{while(true){
var result__54154__auto__ = switch__54151__auto__(state_60707);
if(cljs.core.keyword_identical_QMARK_(result__54154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54154__auto__;
}
break;
}
}catch (e60717){var ex__54155__auto__ = e60717;
var statearr_60718_61836 = state_60707;
(statearr_60718_61836[(2)] = ex__54155__auto__);


if(cljs.core.seq((state_60707[(4)]))){
var statearr_60723_61838 = state_60707;
(statearr_60723_61838[(1)] = cljs.core.first((state_60707[(4)])));

} else {
throw ex__54155__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61839 = state_60707;
state_60707 = G__61839;
continue;
} else {
return ret_value__54153__auto__;
}
break;
}
});
shadow$dom$state_machine__54152__auto__ = function(state_60707){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__54152__auto____0.call(this);
case 1:
return shadow$dom$state_machine__54152__auto____1.call(this,state_60707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__54152__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__54152__auto____0;
shadow$dom$state_machine__54152__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__54152__auto____1;
return shadow$dom$state_machine__54152__auto__;
})()
})();
var state__54434__auto__ = (function (){var statearr_60725 = f__54433__auto__();
(statearr_60725[(6)] = c__54431__auto___61826);

return statearr_60725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54434__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
