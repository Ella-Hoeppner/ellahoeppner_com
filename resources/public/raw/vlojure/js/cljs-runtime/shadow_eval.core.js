goog.provide('shadow_eval.core');
if((typeof shadow_eval !== 'undefined') && (typeof shadow_eval.core !== 'undefined') && (typeof shadow_eval.core.c_state !== 'undefined')){
} else {
shadow_eval.core.c_state = cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0();
}
if((typeof shadow_eval !== 'undefined') && (typeof shadow_eval.core !== 'undefined') && (typeof shadow_eval.core._BANG_eval_ready_QMARK_ !== 'undefined')){
} else {
shadow_eval.core._BANG_eval_ready_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
shadow_eval.core.eval_STAR_ = (function shadow_eval$core$eval_STAR_(source,cb){
var options = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.js.js_eval,new cljs.core.Keyword(null,"load","load",-1318641184),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(shadow.cljs.bootstrap.browser.load,shadow_eval.core.c_state),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)], null);
var f = (function (x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(x))){
console.error(cljs.core.ex_cause(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(x)));
} else {
}

cljs.core.tap_GT_(x);

return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(x) : cb.call(null,x));
});
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$5(shadow_eval.core.c_state,cljs.core.str.cljs$core$IFn$_invoke$arity$1(source),"[test]",options,f);
});
shadow_eval.core.init = (function shadow_eval$core$init(){
return shadow.cljs.bootstrap.browser.init(shadow_eval.core.c_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"/js/bootstrap",new cljs.core.Keyword(null,"load-on-init","load-on-init",337216877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"shadow-eval.user","shadow-eval.user",-2103561177,null),"null"], null), null)], null),(function (){
return cljs.core.reset_BANG_(shadow_eval.core._BANG_eval_ready_QMARK_,true);
}));
});

//# sourceMappingURL=shadow_eval.core.js.map
