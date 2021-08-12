goog.provide('ellah.evaluation');
if((typeof ellah !== 'undefined') && (typeof ellah.evaluation !== 'undefined') && (typeof ellah.evaluation.c_state !== 'undefined')){
} else {
ellah.evaluation.c_state = cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0();
}
if((typeof ellah !== 'undefined') && (typeof ellah.evaluation !== 'undefined') && (typeof ellah.evaluation._BANG_eval_ready_QMARK_ !== 'undefined')){
} else {
ellah.evaluation._BANG_eval_ready_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
ellah.evaluation.eval_clj = (function ellah$evaluation$eval_clj(var_args){
var args__4742__auto__ = [];
var len__4736__auto___182114 = arguments.length;
var i__4737__auto___182115 = (0);
while(true){
if((i__4737__auto___182115 < len__4736__auto___182114)){
args__4742__auto__.push((arguments[i__4737__auto___182115]));

var G__182116 = (i__4737__auto___182115 + (1));
i__4737__auto___182115 = G__182116;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return ellah.evaluation.eval_clj.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(ellah.evaluation.eval_clj.cljs$core$IFn$_invoke$arity$variadic = (function (source,p__182100){
var vec__182101 = p__182100;
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__182101,(0),null);
var callback__$1 = (function (){var or__4126__auto__ = callback;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return ellah.util.log;
}
})();
var options = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.js.js_eval,new cljs.core.Keyword(null,"load","load",-1318641184),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(shadow.cljs.bootstrap.browser.load,ellah.evaluation.c_state),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)], null);
var f = (function (x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(x))){
console.error(cljs.core.ex_cause(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(x)));
} else {
}

cljs.core.tap_GT_(x);

var G__182110 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(x);
return (callback__$1.cljs$core$IFn$_invoke$arity$1 ? callback__$1.cljs$core$IFn$_invoke$arity$1(G__182110) : callback__$1.call(null,G__182110));
});
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$5(ellah.evaluation.c_state,cljs.core.str.cljs$core$IFn$_invoke$arity$1(source),"[test]",options,f);
}));

(ellah.evaluation.eval_clj.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(ellah.evaluation.eval_clj.cljs$lang$applyTo = (function (seq182098){
var G__182099 = cljs.core.first(seq182098);
var seq182098__$1 = cljs.core.next(seq182098);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__182099,seq182098__$1);
}));

ellah.evaluation.init = (function ellah$evaluation$init(){
return shadow.cljs.bootstrap.browser.init(ellah.evaluation.c_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"/js/bootstrap",new cljs.core.Keyword(null,"load-on-init","load-on-init",337216877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"ellah.user","ellah.user",1377770811,null),"null"], null), null)], null),(function (){
return cljs.core.reset_BANG_(ellah.evaluation._BANG_eval_ready_QMARK_,true);
}));
});

//# sourceMappingURL=ellah.evaluation.js.map
