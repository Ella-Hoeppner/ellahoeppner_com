goog.provide('shadow_eval.queue');

/**
 * @interface
 */
shadow_eval.queue.IQueue = function(){};

var shadow_eval$queue$IQueue$maybe_eval_BANG_$dyn_63061 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow_eval.queue.maybe_eval_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow_eval.queue.maybe_eval_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IQueue.maybe-eval!",this$);
}
}
});
shadow_eval.queue.maybe_eval_BANG_ = (function shadow_eval$queue$maybe_eval_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.shadow_eval$queue$IQueue$maybe_eval_BANG_$arity$1 == null)))))){
return this$.shadow_eval$queue$IQueue$maybe_eval_BANG_$arity$1(this$);
} else {
return shadow_eval$queue$IQueue$maybe_eval_BANG_$dyn_63061(this$);
}
});

var shadow_eval$queue$IQueue$conj_BANG_$dyn_63071 = (function (this$,f){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow_eval.queue.conj_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,f) : m__4429__auto__.call(null,this$,f));
} else {
var m__4426__auto__ = (shadow_eval.queue.conj_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,f) : m__4426__auto__.call(null,this$,f));
} else {
throw cljs.core.missing_protocol("IQueue.conj!",this$);
}
}
});
shadow_eval.queue.conj_BANG_ = (function shadow_eval$queue$conj_BANG_(this$,f){
if((((!((this$ == null)))) && ((!((this$.shadow_eval$queue$IQueue$conj_BANG_$arity$2 == null)))))){
return this$.shadow_eval$queue$IQueue$conj_BANG_$arity$2(this$,f);
} else {
return shadow_eval$queue$IQueue$conj_BANG_$dyn_63071(this$,f);
}
});


/**
* @constructor
 * @implements {shadow_eval.queue.IQueue}
*/
shadow_eval.queue.FunctionQueue = (function (queue,running_QMARK_){
this.queue = queue;
this.running_QMARK_ = running_QMARK_;
});
(shadow_eval.queue.FunctionQueue.prototype.shadow_eval$queue$IQueue$ = cljs.core.PROTOCOL_SENTINEL);

(shadow_eval.queue.FunctionQueue.prototype.shadow_eval$queue$IQueue$maybe_eval_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.running_QMARK_)){
return null;
} else {
var temp__5753__auto__ = cljs.core.peek(self__.queue);
if(cljs.core.truth_(temp__5753__auto__)){
var f = temp__5753__auto__;
(self__.running_QMARK_ = true);

(self__.queue = cljs.core.pop(self__.queue));

var G__63017 = (function (){
(self__.running_QMARK_ = false);

return this$__$1.shadow_eval$queue$IQueue$maybe_eval_BANG_$arity$1(null);
});
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__63017) : f.call(null,G__63017));
} else {
return null;
}
}
}));

(shadow_eval.queue.FunctionQueue.prototype.shadow_eval$queue$IQueue$conj_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
(self__.queue = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.queue,f));

return this$__$1.shadow_eval$queue$IQueue$maybe_eval_BANG_$arity$1(null);
}));

(shadow_eval.queue.FunctionQueue.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"queue","queue",-1198599890,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"running?","running?",1382646764,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(shadow_eval.queue.FunctionQueue.cljs$lang$type = true);

(shadow_eval.queue.FunctionQueue.cljs$lang$ctorStr = "shadow-eval.queue/FunctionQueue");

(shadow_eval.queue.FunctionQueue.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow-eval.queue/FunctionQueue");
}));

/**
 * Positional factory function for shadow-eval.queue/FunctionQueue.
 */
shadow_eval.queue.__GT_FunctionQueue = (function shadow_eval$queue$__GT_FunctionQueue(queue,running_QMARK_){
return (new shadow_eval.queue.FunctionQueue(queue,running_QMARK_));
});


//# sourceMappingURL=shadow_eval.queue.js.map
