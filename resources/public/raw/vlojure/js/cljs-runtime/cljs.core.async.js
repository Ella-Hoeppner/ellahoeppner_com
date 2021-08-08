goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__54628 = arguments.length;
switch (G__54628) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async54638 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54638 = (function (f,blockable,meta54639){
this.f = f;
this.blockable = blockable;
this.meta54639 = meta54639;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54638.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54640,meta54639__$1){
var self__ = this;
var _54640__$1 = this;
return (new cljs.core.async.t_cljs$core$async54638(self__.f,self__.blockable,meta54639__$1));
}));

(cljs.core.async.t_cljs$core$async54638.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54640){
var self__ = this;
var _54640__$1 = this;
return self__.meta54639;
}));

(cljs.core.async.t_cljs$core$async54638.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54638.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async54638.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async54638.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async54638.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta54639","meta54639",-1946645504,null)], null);
}));

(cljs.core.async.t_cljs$core$async54638.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54638.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54638");

(cljs.core.async.t_cljs$core$async54638.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async54638");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54638.
 */
cljs.core.async.__GT_t_cljs$core$async54638 = (function cljs$core$async$__GT_t_cljs$core$async54638(f__$1,blockable__$1,meta54639){
return (new cljs.core.async.t_cljs$core$async54638(f__$1,blockable__$1,meta54639));
});

}

return (new cljs.core.async.t_cljs$core$async54638(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__54696 = arguments.length;
switch (G__54696) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__54729 = arguments.length;
switch (G__54729) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__54755 = arguments.length;
switch (G__54755) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_58915 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_58915) : fn1.call(null,val_58915));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_58915) : fn1.call(null,val_58915));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__54808 = arguments.length;
switch (G__54808) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___58929 = n;
var x_58930 = (0);
while(true){
if((x_58930 < n__4613__auto___58929)){
(a[x_58930] = x_58930);

var G__58932 = (x_58930 + (1));
x_58930 = G__58932;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async54874 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54874 = (function (flag,meta54875){
this.flag = flag;
this.meta54875 = meta54875;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54874.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54876,meta54875__$1){
var self__ = this;
var _54876__$1 = this;
return (new cljs.core.async.t_cljs$core$async54874(self__.flag,meta54875__$1));
}));

(cljs.core.async.t_cljs$core$async54874.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54876){
var self__ = this;
var _54876__$1 = this;
return self__.meta54875;
}));

(cljs.core.async.t_cljs$core$async54874.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54874.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async54874.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async54874.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async54874.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta54875","meta54875",1908167366,null)], null);
}));

(cljs.core.async.t_cljs$core$async54874.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54874.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54874");

(cljs.core.async.t_cljs$core$async54874.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async54874");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54874.
 */
cljs.core.async.__GT_t_cljs$core$async54874 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async54874(flag__$1,meta54875){
return (new cljs.core.async.t_cljs$core$async54874(flag__$1,meta54875));
});

}

return (new cljs.core.async.t_cljs$core$async54874(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async54909 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54909 = (function (flag,cb,meta54910){
this.flag = flag;
this.cb = cb;
this.meta54910 = meta54910;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54909.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54911,meta54910__$1){
var self__ = this;
var _54911__$1 = this;
return (new cljs.core.async.t_cljs$core$async54909(self__.flag,self__.cb,meta54910__$1));
}));

(cljs.core.async.t_cljs$core$async54909.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54911){
var self__ = this;
var _54911__$1 = this;
return self__.meta54910;
}));

(cljs.core.async.t_cljs$core$async54909.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54909.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async54909.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async54909.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async54909.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta54910","meta54910",157832836,null)], null);
}));

(cljs.core.async.t_cljs$core$async54909.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54909.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54909");

(cljs.core.async.t_cljs$core$async54909.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async54909");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54909.
 */
cljs.core.async.__GT_t_cljs$core$async54909 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async54909(flag__$1,cb__$1,meta54910){
return (new cljs.core.async.t_cljs$core$async54909(flag__$1,cb__$1,meta54910));
});

}

return (new cljs.core.async.t_cljs$core$async54909(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__54935_SHARP_){
var G__54953 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__54935_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__54953) : fret.call(null,G__54953));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__54936_SHARP_){
var G__54955 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__54936_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__54955) : fret.call(null,G__54955));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__58954 = (i + (1));
i = G__58954;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58955 = arguments.length;
var i__4737__auto___58956 = (0);
while(true){
if((i__4737__auto___58956 < len__4736__auto___58955)){
args__4742__auto__.push((arguments[i__4737__auto___58956]));

var G__58959 = (i__4737__auto___58956 + (1));
i__4737__auto___58956 = G__58959;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__54985){
var map__54986 = p__54985;
var map__54986__$1 = (((((!((map__54986 == null))))?(((((map__54986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54986.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54986):map__54986);
var opts = map__54986__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq54970){
var G__54973 = cljs.core.first(seq54970);
var seq54970__$1 = cljs.core.next(seq54970);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54973,seq54970__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__55026 = arguments.length;
switch (G__55026) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__54431__auto___58967 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54433__auto__ = (function (){var switch__54151__auto__ = (function (state_55174){
var state_val_55175 = (state_55174[(1)]);
if((state_val_55175 === (7))){
var inst_55152 = (state_55174[(2)]);
var state_55174__$1 = state_55174;
var statearr_55182_58968 = state_55174__$1;
(statearr_55182_58968[(2)] = inst_55152);

(statearr_55182_58968[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55175 === (1))){
var state_55174__$1 = state_55174;
var statearr_55185_58969 = state_55174__$1;
(statearr_55185_58969[(2)] = null);

(statearr_55185_58969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55175 === (4))){
var inst_55115 = (state_55174[(7)]);
var inst_55115__$1 = (state_55174[(2)]);
var inst_55125 = (inst_55115__$1 == null);
var state_55174__$1 = (function (){var statearr_55198 = state_55174;
(statearr_55198[(7)] = inst_55115__$1);

return statearr_55198;
})();
if(cljs.core.truth_(inst_55125)){
var statearr_55201_58970 = state_55174__$1;
(statearr_55201_58970[(1)] = (5));

} else {
var statearr_55202_58972 = state_55174__$1;
(statearr_55202_58972[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55175 === (13))){
var state_55174__$1 = state_55174;
var statearr_55228_58973 = state_55174__$1;
(statearr_55228_58973[(2)] = null);

(statearr_55228_58973[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55175 === (6))){
var inst_55115 = (state_55174[(7)]);
var state_55174__$1 = state_55174;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55174__$1,(11),to,inst_55115);
} else {
if((state_val_55175 === (3))){
var inst_55164 = (state_55174[(2)]);
var state_55174__$1 = state_55174;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55174__$1,inst_55164);
} else {
if((state_val_55175 === (12))){
var state_55174__$1 = state_55174;
var statearr_55270_58978 = state_55174__$1;
(statearr_55270_58978[(2)] = null);

(statearr_55270_58978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55175 === (2))){
var state_55174__$1 = state_55174;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55174__$1,(4),from);
} else {
if((state_val_55175 === (11))){
var inst_55145 = (state_55174[(2)]);
var state_55174__$1 = state_55174;
if(cljs.core.truth_(inst_55145)){
var statearr_55276_58979 = state_55174__$1;
(statearr_55276_58979[(1)] = (12));

} else {
var statearr_55279_58980 = state_55174__$1;
(statearr_55279_58980[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55175 === (9))){
var state_55174__$1 = state_55174;
var statearr_55280_58982 = state_55174__$1;
(statearr_55280_58982[(2)] = null);

(statearr_55280_58982[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55175 === (5))){
var state_55174__$1 = state_55174;
if(cljs.core.truth_(close_QMARK_)){
var statearr_55284_58986 = state_55174__$1;
(statearr_55284_58986[(1)] = (8));

} else {
var statearr_55290_58987 = state_55174__$1;
(statearr_55290_58987[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55175 === (14))){
var inst_55150 = (state_55174[(2)]);
var state_55174__$1 = state_55174;
var statearr_55302_58990 = state_55174__$1;
(statearr_55302_58990[(2)] = inst_55150);

(statearr_55302_58990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55175 === (10))){
var inst_55139 = (state_55174[(2)]);
var state_55174__$1 = state_55174;
var statearr_55304_58993 = state_55174__$1;
(statearr_55304_58993[(2)] = inst_55139);

(statearr_55304_58993[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55175 === (8))){
var inst_55132 = cljs.core.async.close_BANG_(to);
var state_55174__$1 = state_55174;
var statearr_55306_58994 = state_55174__$1;
(statearr_55306_58994[(2)] = inst_55132);

(statearr_55306_58994[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__54152__auto__ = null;
var cljs$core$async$state_machine__54152__auto____0 = (function (){
var statearr_55310 = [null,null,null,null,null,null,null,null];
(statearr_55310[(0)] = cljs$core$async$state_machine__54152__auto__);

(statearr_55310[(1)] = (1));

return statearr_55310;
});
var cljs$core$async$state_machine__54152__auto____1 = (function (state_55174){
while(true){
var ret_value__54153__auto__ = (function (){try{while(true){
var result__54154__auto__ = switch__54151__auto__(state_55174);
if(cljs.core.keyword_identical_QMARK_(result__54154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54154__auto__;
}
break;
}
}catch (e55312){var ex__54155__auto__ = e55312;
var statearr_55313_58995 = state_55174;
(statearr_55313_58995[(2)] = ex__54155__auto__);


if(cljs.core.seq((state_55174[(4)]))){
var statearr_55314_58996 = state_55174;
(statearr_55314_58996[(1)] = cljs.core.first((state_55174[(4)])));

} else {
throw ex__54155__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59001 = state_55174;
state_55174 = G__59001;
continue;
} else {
return ret_value__54153__auto__;
}
break;
}
});
cljs$core$async$state_machine__54152__auto__ = function(state_55174){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54152__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54152__auto____1.call(this,state_55174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54152__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54152__auto____0;
cljs$core$async$state_machine__54152__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54152__auto____1;
return cljs$core$async$state_machine__54152__auto__;
})()
})();
var state__54434__auto__ = (function (){var statearr_55318 = f__54433__auto__();
(statearr_55318[(6)] = c__54431__auto___58967);

return statearr_55318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54434__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__55335){
var vec__55336 = p__55335;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55336,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55336,(1),null);
var job = vec__55336;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__54431__auto___59011 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54433__auto__ = (function (){var switch__54151__auto__ = (function (state_55346){
var state_val_55347 = (state_55346[(1)]);
if((state_val_55347 === (1))){
var state_55346__$1 = state_55346;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55346__$1,(2),res,v);
} else {
if((state_val_55347 === (2))){
var inst_55340 = (state_55346[(2)]);
var inst_55343 = cljs.core.async.close_BANG_(res);
var state_55346__$1 = (function (){var statearr_55363 = state_55346;
(statearr_55363[(7)] = inst_55340);

return statearr_55363;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_55346__$1,inst_55343);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__54152__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54152__auto____0 = (function (){
var statearr_55367 = [null,null,null,null,null,null,null,null];
(statearr_55367[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54152__auto__);

(statearr_55367[(1)] = (1));

return statearr_55367;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54152__auto____1 = (function (state_55346){
while(true){
var ret_value__54153__auto__ = (function (){try{while(true){
var result__54154__auto__ = switch__54151__auto__(state_55346);
if(cljs.core.keyword_identical_QMARK_(result__54154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54154__auto__;
}
break;
}
}catch (e55369){var ex__54155__auto__ = e55369;
var statearr_55371_59013 = state_55346;
(statearr_55371_59013[(2)] = ex__54155__auto__);


if(cljs.core.seq((state_55346[(4)]))){
var statearr_55376_59014 = state_55346;
(statearr_55376_59014[(1)] = cljs.core.first((state_55346[(4)])));

} else {
throw ex__54155__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59018 = state_55346;
state_55346 = G__59018;
continue;
} else {
return ret_value__54153__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54152__auto__ = function(state_55346){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54152__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54152__auto____1.call(this,state_55346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__54152__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54152__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54152__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54152__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54152__auto__;
})()
})();
var state__54434__auto__ = (function (){var statearr_55381 = f__54433__auto__();
(statearr_55381[(6)] = c__54431__auto___59011);

return statearr_55381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54434__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__55389){
var vec__55393 = p__55389;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55393,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55393,(1),null);
var job = vec__55393;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___59022 = n;
var __59023 = (0);
while(true){
if((__59023 < n__4613__auto___59022)){
var G__55397_59025 = type;
var G__55397_59026__$1 = (((G__55397_59025 instanceof cljs.core.Keyword))?G__55397_59025.fqn:null);
switch (G__55397_59026__$1) {
case "compute":
var c__54431__auto___59029 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__59023,c__54431__auto___59029,G__55397_59025,G__55397_59026__$1,n__4613__auto___59022,jobs,results,process,async){
return (function (){
var f__54433__auto__ = (function (){var switch__54151__auto__ = ((function (__59023,c__54431__auto___59029,G__55397_59025,G__55397_59026__$1,n__4613__auto___59022,jobs,results,process,async){
return (function (state_55421){
var state_val_55422 = (state_55421[(1)]);
if((state_val_55422 === (1))){
var state_55421__$1 = state_55421;
var statearr_55432_59033 = state_55421__$1;
(statearr_55432_59033[(2)] = null);

(statearr_55432_59033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55422 === (2))){
var state_55421__$1 = state_55421;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55421__$1,(4),jobs);
} else {
if((state_val_55422 === (3))){
var inst_55419 = (state_55421[(2)]);
var state_55421__$1 = state_55421;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55421__$1,inst_55419);
} else {
if((state_val_55422 === (4))){
var inst_55406 = (state_55421[(2)]);
var inst_55407 = process(inst_55406);
var state_55421__$1 = state_55421;
if(cljs.core.truth_(inst_55407)){
var statearr_55440_59034 = state_55421__$1;
(statearr_55440_59034[(1)] = (5));

} else {
var statearr_55442_59038 = state_55421__$1;
(statearr_55442_59038[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55422 === (5))){
var state_55421__$1 = state_55421;
var statearr_55444_59040 = state_55421__$1;
(statearr_55444_59040[(2)] = null);

(statearr_55444_59040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55422 === (6))){
var state_55421__$1 = state_55421;
var statearr_55449_59044 = state_55421__$1;
(statearr_55449_59044[(2)] = null);

(statearr_55449_59044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55422 === (7))){
var inst_55414 = (state_55421[(2)]);
var state_55421__$1 = state_55421;
var statearr_55457_59045 = state_55421__$1;
(statearr_55457_59045[(2)] = inst_55414);

(statearr_55457_59045[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__59023,c__54431__auto___59029,G__55397_59025,G__55397_59026__$1,n__4613__auto___59022,jobs,results,process,async))
;
return ((function (__59023,switch__54151__auto__,c__54431__auto___59029,G__55397_59025,G__55397_59026__$1,n__4613__auto___59022,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__54152__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54152__auto____0 = (function (){
var statearr_55466 = [null,null,null,null,null,null,null];
(statearr_55466[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54152__auto__);

(statearr_55466[(1)] = (1));

return statearr_55466;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54152__auto____1 = (function (state_55421){
while(true){
var ret_value__54153__auto__ = (function (){try{while(true){
var result__54154__auto__ = switch__54151__auto__(state_55421);
if(cljs.core.keyword_identical_QMARK_(result__54154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54154__auto__;
}
break;
}
}catch (e55467){var ex__54155__auto__ = e55467;
var statearr_55468_59050 = state_55421;
(statearr_55468_59050[(2)] = ex__54155__auto__);


if(cljs.core.seq((state_55421[(4)]))){
var statearr_55472_59051 = state_55421;
(statearr_55472_59051[(1)] = cljs.core.first((state_55421[(4)])));

} else {
throw ex__54155__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59052 = state_55421;
state_55421 = G__59052;
continue;
} else {
return ret_value__54153__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54152__auto__ = function(state_55421){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54152__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54152__auto____1.call(this,state_55421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__54152__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54152__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54152__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54152__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54152__auto__;
})()
;})(__59023,switch__54151__auto__,c__54431__auto___59029,G__55397_59025,G__55397_59026__$1,n__4613__auto___59022,jobs,results,process,async))
})();
var state__54434__auto__ = (function (){var statearr_55485 = f__54433__auto__();
(statearr_55485[(6)] = c__54431__auto___59029);

return statearr_55485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54434__auto__);
});})(__59023,c__54431__auto___59029,G__55397_59025,G__55397_59026__$1,n__4613__auto___59022,jobs,results,process,async))
);


break;
case "async":
var c__54431__auto___59059 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__59023,c__54431__auto___59059,G__55397_59025,G__55397_59026__$1,n__4613__auto___59022,jobs,results,process,async){
return (function (){
var f__54433__auto__ = (function (){var switch__54151__auto__ = ((function (__59023,c__54431__auto___59059,G__55397_59025,G__55397_59026__$1,n__4613__auto___59022,jobs,results,process,async){
return (function (state_55504){
var state_val_55508 = (state_55504[(1)]);
if((state_val_55508 === (1))){
var state_55504__$1 = state_55504;
var statearr_55512_59060 = state_55504__$1;
(statearr_55512_59060[(2)] = null);

(statearr_55512_59060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55508 === (2))){
var state_55504__$1 = state_55504;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55504__$1,(4),jobs);
} else {
if((state_val_55508 === (3))){
var inst_55500 = (state_55504[(2)]);
var state_55504__$1 = state_55504;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55504__$1,inst_55500);
} else {
if((state_val_55508 === (4))){
var inst_55492 = (state_55504[(2)]);
var inst_55493 = async(inst_55492);
var state_55504__$1 = state_55504;
if(cljs.core.truth_(inst_55493)){
var statearr_55513_59063 = state_55504__$1;
(statearr_55513_59063[(1)] = (5));

} else {
var statearr_55515_59064 = state_55504__$1;
(statearr_55515_59064[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55508 === (5))){
var state_55504__$1 = state_55504;
var statearr_55516_59065 = state_55504__$1;
(statearr_55516_59065[(2)] = null);

(statearr_55516_59065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55508 === (6))){
var state_55504__$1 = state_55504;
var statearr_55519_59068 = state_55504__$1;
(statearr_55519_59068[(2)] = null);

(statearr_55519_59068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55508 === (7))){
var inst_55498 = (state_55504[(2)]);
var state_55504__$1 = state_55504;
var statearr_55523_59070 = state_55504__$1;
(statearr_55523_59070[(2)] = inst_55498);

(statearr_55523_59070[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__59023,c__54431__auto___59059,G__55397_59025,G__55397_59026__$1,n__4613__auto___59022,jobs,results,process,async))
;
return ((function (__59023,switch__54151__auto__,c__54431__auto___59059,G__55397_59025,G__55397_59026__$1,n__4613__auto___59022,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__54152__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54152__auto____0 = (function (){
var statearr_55527 = [null,null,null,null,null,null,null];
(statearr_55527[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54152__auto__);

(statearr_55527[(1)] = (1));

return statearr_55527;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54152__auto____1 = (function (state_55504){
while(true){
var ret_value__54153__auto__ = (function (){try{while(true){
var result__54154__auto__ = switch__54151__auto__(state_55504);
if(cljs.core.keyword_identical_QMARK_(result__54154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54154__auto__;
}
break;
}
}catch (e55533){var ex__54155__auto__ = e55533;
var statearr_55534_59071 = state_55504;
(statearr_55534_59071[(2)] = ex__54155__auto__);


if(cljs.core.seq((state_55504[(4)]))){
var statearr_55537_59072 = state_55504;
(statearr_55537_59072[(1)] = cljs.core.first((state_55504[(4)])));

} else {
throw ex__54155__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59073 = state_55504;
state_55504 = G__59073;
continue;
} else {
return ret_value__54153__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54152__auto__ = function(state_55504){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54152__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54152__auto____1.call(this,state_55504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__54152__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54152__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54152__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54152__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54152__auto__;
})()
;})(__59023,switch__54151__auto__,c__54431__auto___59059,G__55397_59025,G__55397_59026__$1,n__4613__auto___59022,jobs,results,process,async))
})();
var state__54434__auto__ = (function (){var statearr_55542 = f__54433__auto__();
(statearr_55542[(6)] = c__54431__auto___59059);

return statearr_55542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54434__auto__);
});})(__59023,c__54431__auto___59059,G__55397_59025,G__55397_59026__$1,n__4613__auto___59022,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55397_59026__$1)].join('')));

}

var G__59077 = (__59023 + (1));
__59023 = G__59077;
continue;
} else {
}
break;
}

var c__54431__auto___59078 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54433__auto__ = (function (){var switch__54151__auto__ = (function (state_55582){
var state_val_55583 = (state_55582[(1)]);
if((state_val_55583 === (7))){
var inst_55578 = (state_55582[(2)]);
var state_55582__$1 = state_55582;
var statearr_55592_59079 = state_55582__$1;
(statearr_55592_59079[(2)] = inst_55578);

(statearr_55592_59079[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55583 === (1))){
var state_55582__$1 = state_55582;
var statearr_55593_59083 = state_55582__$1;
(statearr_55593_59083[(2)] = null);

(statearr_55593_59083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55583 === (4))){
var inst_55554 = (state_55582[(7)]);
var inst_55554__$1 = (state_55582[(2)]);
var inst_55559 = (inst_55554__$1 == null);
var state_55582__$1 = (function (){var statearr_55594 = state_55582;
(statearr_55594[(7)] = inst_55554__$1);

return statearr_55594;
})();
if(cljs.core.truth_(inst_55559)){
var statearr_55596_59086 = state_55582__$1;
(statearr_55596_59086[(1)] = (5));

} else {
var statearr_55597_59092 = state_55582__$1;
(statearr_55597_59092[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55583 === (6))){
var inst_55554 = (state_55582[(7)]);
var inst_55567 = (state_55582[(8)]);
var inst_55567__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_55569 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_55570 = [inst_55554,inst_55567__$1];
var inst_55571 = (new cljs.core.PersistentVector(null,2,(5),inst_55569,inst_55570,null));
var state_55582__$1 = (function (){var statearr_55601 = state_55582;
(statearr_55601[(8)] = inst_55567__$1);

return statearr_55601;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55582__$1,(8),jobs,inst_55571);
} else {
if((state_val_55583 === (3))){
var inst_55580 = (state_55582[(2)]);
var state_55582__$1 = state_55582;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55582__$1,inst_55580);
} else {
if((state_val_55583 === (2))){
var state_55582__$1 = state_55582;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55582__$1,(4),from);
} else {
if((state_val_55583 === (9))){
var inst_55575 = (state_55582[(2)]);
var state_55582__$1 = (function (){var statearr_55607 = state_55582;
(statearr_55607[(9)] = inst_55575);

return statearr_55607;
})();
var statearr_55608_59099 = state_55582__$1;
(statearr_55608_59099[(2)] = null);

(statearr_55608_59099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55583 === (5))){
var inst_55561 = cljs.core.async.close_BANG_(jobs);
var state_55582__$1 = state_55582;
var statearr_55610_59100 = state_55582__$1;
(statearr_55610_59100[(2)] = inst_55561);

(statearr_55610_59100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55583 === (8))){
var inst_55567 = (state_55582[(8)]);
var inst_55573 = (state_55582[(2)]);
var state_55582__$1 = (function (){var statearr_55614 = state_55582;
(statearr_55614[(10)] = inst_55573);

return statearr_55614;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55582__$1,(9),results,inst_55567);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__54152__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54152__auto____0 = (function (){
var statearr_55619 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_55619[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54152__auto__);

(statearr_55619[(1)] = (1));

return statearr_55619;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54152__auto____1 = (function (state_55582){
while(true){
var ret_value__54153__auto__ = (function (){try{while(true){
var result__54154__auto__ = switch__54151__auto__(state_55582);
if(cljs.core.keyword_identical_QMARK_(result__54154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54154__auto__;
}
break;
}
}catch (e55626){var ex__54155__auto__ = e55626;
var statearr_55627_59106 = state_55582;
(statearr_55627_59106[(2)] = ex__54155__auto__);


if(cljs.core.seq((state_55582[(4)]))){
var statearr_55632_59108 = state_55582;
(statearr_55632_59108[(1)] = cljs.core.first((state_55582[(4)])));

} else {
throw ex__54155__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59110 = state_55582;
state_55582 = G__59110;
continue;
} else {
return ret_value__54153__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54152__auto__ = function(state_55582){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54152__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54152__auto____1.call(this,state_55582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__54152__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54152__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54152__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54152__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54152__auto__;
})()
})();
var state__54434__auto__ = (function (){var statearr_55641 = f__54433__auto__();
(statearr_55641[(6)] = c__54431__auto___59078);

return statearr_55641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54434__auto__);
}));


var c__54431__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54433__auto__ = (function (){var switch__54151__auto__ = (function (state_55698){
var state_val_55699 = (state_55698[(1)]);
if((state_val_55699 === (7))){
var inst_55694 = (state_55698[(2)]);
var state_55698__$1 = state_55698;
var statearr_55713_59111 = state_55698__$1;
(statearr_55713_59111[(2)] = inst_55694);

(statearr_55713_59111[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55699 === (20))){
var state_55698__$1 = state_55698;
var statearr_55719_59116 = state_55698__$1;
(statearr_55719_59116[(2)] = null);

(statearr_55719_59116[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55699 === (1))){
var state_55698__$1 = state_55698;
var statearr_55723_59117 = state_55698__$1;
(statearr_55723_59117[(2)] = null);

(statearr_55723_59117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55699 === (4))){
var inst_55648 = (state_55698[(7)]);
var inst_55648__$1 = (state_55698[(2)]);
var inst_55651 = (inst_55648__$1 == null);
var state_55698__$1 = (function (){var statearr_55725 = state_55698;
(statearr_55725[(7)] = inst_55648__$1);

return statearr_55725;
})();
if(cljs.core.truth_(inst_55651)){
var statearr_55727_59120 = state_55698__$1;
(statearr_55727_59120[(1)] = (5));

} else {
var statearr_55731_59124 = state_55698__$1;
(statearr_55731_59124[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55699 === (15))){
var inst_55673 = (state_55698[(8)]);
var state_55698__$1 = state_55698;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55698__$1,(18),to,inst_55673);
} else {
if((state_val_55699 === (21))){
var inst_55689 = (state_55698[(2)]);
var state_55698__$1 = state_55698;
var statearr_55733_59129 = state_55698__$1;
(statearr_55733_59129[(2)] = inst_55689);

(statearr_55733_59129[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55699 === (13))){
var inst_55691 = (state_55698[(2)]);
var state_55698__$1 = (function (){var statearr_55739 = state_55698;
(statearr_55739[(9)] = inst_55691);

return statearr_55739;
})();
var statearr_55740_59131 = state_55698__$1;
(statearr_55740_59131[(2)] = null);

(statearr_55740_59131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55699 === (6))){
var inst_55648 = (state_55698[(7)]);
var state_55698__$1 = state_55698;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55698__$1,(11),inst_55648);
} else {
if((state_val_55699 === (17))){
var inst_55684 = (state_55698[(2)]);
var state_55698__$1 = state_55698;
if(cljs.core.truth_(inst_55684)){
var statearr_55748_59132 = state_55698__$1;
(statearr_55748_59132[(1)] = (19));

} else {
var statearr_55749_59133 = state_55698__$1;
(statearr_55749_59133[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55699 === (3))){
var inst_55696 = (state_55698[(2)]);
var state_55698__$1 = state_55698;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55698__$1,inst_55696);
} else {
if((state_val_55699 === (12))){
var inst_55666 = (state_55698[(10)]);
var state_55698__$1 = state_55698;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55698__$1,(14),inst_55666);
} else {
if((state_val_55699 === (2))){
var state_55698__$1 = state_55698;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55698__$1,(4),results);
} else {
if((state_val_55699 === (19))){
var state_55698__$1 = state_55698;
var statearr_55754_59136 = state_55698__$1;
(statearr_55754_59136[(2)] = null);

(statearr_55754_59136[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55699 === (11))){
var inst_55666 = (state_55698[(2)]);
var state_55698__$1 = (function (){var statearr_55756 = state_55698;
(statearr_55756[(10)] = inst_55666);

return statearr_55756;
})();
var statearr_55760_59137 = state_55698__$1;
(statearr_55760_59137[(2)] = null);

(statearr_55760_59137[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55699 === (9))){
var state_55698__$1 = state_55698;
var statearr_55767_59138 = state_55698__$1;
(statearr_55767_59138[(2)] = null);

(statearr_55767_59138[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55699 === (5))){
var state_55698__$1 = state_55698;
if(cljs.core.truth_(close_QMARK_)){
var statearr_55775_59145 = state_55698__$1;
(statearr_55775_59145[(1)] = (8));

} else {
var statearr_55776_59147 = state_55698__$1;
(statearr_55776_59147[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55699 === (14))){
var inst_55673 = (state_55698[(8)]);
var inst_55673__$1 = (state_55698[(2)]);
var inst_55676 = (inst_55673__$1 == null);
var inst_55677 = cljs.core.not(inst_55676);
var state_55698__$1 = (function (){var statearr_55777 = state_55698;
(statearr_55777[(8)] = inst_55673__$1);

return statearr_55777;
})();
if(inst_55677){
var statearr_55778_59152 = state_55698__$1;
(statearr_55778_59152[(1)] = (15));

} else {
var statearr_55779_59153 = state_55698__$1;
(statearr_55779_59153[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55699 === (16))){
var state_55698__$1 = state_55698;
var statearr_55781_59155 = state_55698__$1;
(statearr_55781_59155[(2)] = false);

(statearr_55781_59155[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55699 === (10))){
var inst_55658 = (state_55698[(2)]);
var state_55698__$1 = state_55698;
var statearr_55786_59156 = state_55698__$1;
(statearr_55786_59156[(2)] = inst_55658);

(statearr_55786_59156[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55699 === (18))){
var inst_55681 = (state_55698[(2)]);
var state_55698__$1 = state_55698;
var statearr_55790_59157 = state_55698__$1;
(statearr_55790_59157[(2)] = inst_55681);

(statearr_55790_59157[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55699 === (8))){
var inst_55654 = cljs.core.async.close_BANG_(to);
var state_55698__$1 = state_55698;
var statearr_55791_59158 = state_55698__$1;
(statearr_55791_59158[(2)] = inst_55654);

(statearr_55791_59158[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__54152__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54152__auto____0 = (function (){
var statearr_55795 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_55795[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54152__auto__);

(statearr_55795[(1)] = (1));

return statearr_55795;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54152__auto____1 = (function (state_55698){
while(true){
var ret_value__54153__auto__ = (function (){try{while(true){
var result__54154__auto__ = switch__54151__auto__(state_55698);
if(cljs.core.keyword_identical_QMARK_(result__54154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54154__auto__;
}
break;
}
}catch (e55807){var ex__54155__auto__ = e55807;
var statearr_55809_59163 = state_55698;
(statearr_55809_59163[(2)] = ex__54155__auto__);


if(cljs.core.seq((state_55698[(4)]))){
var statearr_55810_59164 = state_55698;
(statearr_55810_59164[(1)] = cljs.core.first((state_55698[(4)])));

} else {
throw ex__54155__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59165 = state_55698;
state_55698 = G__59165;
continue;
} else {
return ret_value__54153__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54152__auto__ = function(state_55698){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54152__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54152__auto____1.call(this,state_55698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__54152__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54152__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54152__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54152__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54152__auto__;
})()
})();
var state__54434__auto__ = (function (){var statearr_55813 = f__54433__auto__();
(statearr_55813[(6)] = c__54431__auto__);

return statearr_55813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54434__auto__);
}));

return c__54431__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__55822 = arguments.length;
switch (G__55822) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__55832 = arguments.length;
switch (G__55832) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__55852 = arguments.length;
switch (G__55852) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__54431__auto___59192 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54433__auto__ = (function (){var switch__54151__auto__ = (function (state_55891){
var state_val_55892 = (state_55891[(1)]);
if((state_val_55892 === (7))){
var inst_55887 = (state_55891[(2)]);
var state_55891__$1 = state_55891;
var statearr_55894_59196 = state_55891__$1;
(statearr_55894_59196[(2)] = inst_55887);

(statearr_55894_59196[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55892 === (1))){
var state_55891__$1 = state_55891;
var statearr_55899_59199 = state_55891__$1;
(statearr_55899_59199[(2)] = null);

(statearr_55899_59199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55892 === (4))){
var inst_55868 = (state_55891[(7)]);
var inst_55868__$1 = (state_55891[(2)]);
var inst_55869 = (inst_55868__$1 == null);
var state_55891__$1 = (function (){var statearr_55905 = state_55891;
(statearr_55905[(7)] = inst_55868__$1);

return statearr_55905;
})();
if(cljs.core.truth_(inst_55869)){
var statearr_55906_59203 = state_55891__$1;
(statearr_55906_59203[(1)] = (5));

} else {
var statearr_55907_59205 = state_55891__$1;
(statearr_55907_59205[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55892 === (13))){
var state_55891__$1 = state_55891;
var statearr_55915_59207 = state_55891__$1;
(statearr_55915_59207[(2)] = null);

(statearr_55915_59207[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55892 === (6))){
var inst_55868 = (state_55891[(7)]);
var inst_55874 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_55868) : p.call(null,inst_55868));
var state_55891__$1 = state_55891;
if(cljs.core.truth_(inst_55874)){
var statearr_55917_59218 = state_55891__$1;
(statearr_55917_59218[(1)] = (9));

} else {
var statearr_55918_59220 = state_55891__$1;
(statearr_55918_59220[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55892 === (3))){
var inst_55889 = (state_55891[(2)]);
var state_55891__$1 = state_55891;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55891__$1,inst_55889);
} else {
if((state_val_55892 === (12))){
var state_55891__$1 = state_55891;
var statearr_55929_59222 = state_55891__$1;
(statearr_55929_59222[(2)] = null);

(statearr_55929_59222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55892 === (2))){
var state_55891__$1 = state_55891;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55891__$1,(4),ch);
} else {
if((state_val_55892 === (11))){
var inst_55868 = (state_55891[(7)]);
var inst_55878 = (state_55891[(2)]);
var state_55891__$1 = state_55891;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55891__$1,(8),inst_55878,inst_55868);
} else {
if((state_val_55892 === (9))){
var state_55891__$1 = state_55891;
var statearr_55939_59223 = state_55891__$1;
(statearr_55939_59223[(2)] = tc);

(statearr_55939_59223[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55892 === (5))){
var inst_55871 = cljs.core.async.close_BANG_(tc);
var inst_55872 = cljs.core.async.close_BANG_(fc);
var state_55891__$1 = (function (){var statearr_55944 = state_55891;
(statearr_55944[(8)] = inst_55871);

return statearr_55944;
})();
var statearr_55945_59227 = state_55891__$1;
(statearr_55945_59227[(2)] = inst_55872);

(statearr_55945_59227[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55892 === (14))){
var inst_55885 = (state_55891[(2)]);
var state_55891__$1 = state_55891;
var statearr_55959_59230 = state_55891__$1;
(statearr_55959_59230[(2)] = inst_55885);

(statearr_55959_59230[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55892 === (10))){
var state_55891__$1 = state_55891;
var statearr_55964_59233 = state_55891__$1;
(statearr_55964_59233[(2)] = fc);

(statearr_55964_59233[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55892 === (8))){
var inst_55880 = (state_55891[(2)]);
var state_55891__$1 = state_55891;
if(cljs.core.truth_(inst_55880)){
var statearr_55965_59235 = state_55891__$1;
(statearr_55965_59235[(1)] = (12));

} else {
var statearr_55966_59236 = state_55891__$1;
(statearr_55966_59236[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__54152__auto__ = null;
var cljs$core$async$state_machine__54152__auto____0 = (function (){
var statearr_55967 = [null,null,null,null,null,null,null,null,null];
(statearr_55967[(0)] = cljs$core$async$state_machine__54152__auto__);

(statearr_55967[(1)] = (1));

return statearr_55967;
});
var cljs$core$async$state_machine__54152__auto____1 = (function (state_55891){
while(true){
var ret_value__54153__auto__ = (function (){try{while(true){
var result__54154__auto__ = switch__54151__auto__(state_55891);
if(cljs.core.keyword_identical_QMARK_(result__54154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54154__auto__;
}
break;
}
}catch (e55969){var ex__54155__auto__ = e55969;
var statearr_55971_59244 = state_55891;
(statearr_55971_59244[(2)] = ex__54155__auto__);


if(cljs.core.seq((state_55891[(4)]))){
var statearr_55977_59245 = state_55891;
(statearr_55977_59245[(1)] = cljs.core.first((state_55891[(4)])));

} else {
throw ex__54155__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59247 = state_55891;
state_55891 = G__59247;
continue;
} else {
return ret_value__54153__auto__;
}
break;
}
});
cljs$core$async$state_machine__54152__auto__ = function(state_55891){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54152__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54152__auto____1.call(this,state_55891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54152__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54152__auto____0;
cljs$core$async$state_machine__54152__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54152__auto____1;
return cljs$core$async$state_machine__54152__auto__;
})()
})();
var state__54434__auto__ = (function (){var statearr_55982 = f__54433__auto__();
(statearr_55982[(6)] = c__54431__auto___59192);

return statearr_55982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54434__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__54431__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54433__auto__ = (function (){var switch__54151__auto__ = (function (state_56014){
var state_val_56015 = (state_56014[(1)]);
if((state_val_56015 === (7))){
var inst_56009 = (state_56014[(2)]);
var state_56014__$1 = state_56014;
var statearr_56018_59252 = state_56014__$1;
(statearr_56018_59252[(2)] = inst_56009);

(statearr_56018_59252[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56015 === (1))){
var inst_55988 = init;
var inst_55990 = inst_55988;
var state_56014__$1 = (function (){var statearr_56019 = state_56014;
(statearr_56019[(7)] = inst_55990);

return statearr_56019;
})();
var statearr_56020_59258 = state_56014__$1;
(statearr_56020_59258[(2)] = null);

(statearr_56020_59258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56015 === (4))){
var inst_55993 = (state_56014[(8)]);
var inst_55993__$1 = (state_56014[(2)]);
var inst_55996 = (inst_55993__$1 == null);
var state_56014__$1 = (function (){var statearr_56024 = state_56014;
(statearr_56024[(8)] = inst_55993__$1);

return statearr_56024;
})();
if(cljs.core.truth_(inst_55996)){
var statearr_56025_59263 = state_56014__$1;
(statearr_56025_59263[(1)] = (5));

} else {
var statearr_56030_59265 = state_56014__$1;
(statearr_56030_59265[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56015 === (6))){
var inst_55993 = (state_56014[(8)]);
var inst_55990 = (state_56014[(7)]);
var inst_55999 = (state_56014[(9)]);
var inst_55999__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_55990,inst_55993) : f.call(null,inst_55990,inst_55993));
var inst_56001 = cljs.core.reduced_QMARK_(inst_55999__$1);
var state_56014__$1 = (function (){var statearr_56035 = state_56014;
(statearr_56035[(9)] = inst_55999__$1);

return statearr_56035;
})();
if(inst_56001){
var statearr_56041_59268 = state_56014__$1;
(statearr_56041_59268[(1)] = (8));

} else {
var statearr_56042_59269 = state_56014__$1;
(statearr_56042_59269[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56015 === (3))){
var inst_56011 = (state_56014[(2)]);
var state_56014__$1 = state_56014;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56014__$1,inst_56011);
} else {
if((state_val_56015 === (2))){
var state_56014__$1 = state_56014;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56014__$1,(4),ch);
} else {
if((state_val_56015 === (9))){
var inst_55999 = (state_56014[(9)]);
var inst_55990 = inst_55999;
var state_56014__$1 = (function (){var statearr_56052 = state_56014;
(statearr_56052[(7)] = inst_55990);

return statearr_56052;
})();
var statearr_56055_59273 = state_56014__$1;
(statearr_56055_59273[(2)] = null);

(statearr_56055_59273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56015 === (5))){
var inst_55990 = (state_56014[(7)]);
var state_56014__$1 = state_56014;
var statearr_56060_59276 = state_56014__$1;
(statearr_56060_59276[(2)] = inst_55990);

(statearr_56060_59276[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56015 === (10))){
var inst_56007 = (state_56014[(2)]);
var state_56014__$1 = state_56014;
var statearr_56061_59277 = state_56014__$1;
(statearr_56061_59277[(2)] = inst_56007);

(statearr_56061_59277[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56015 === (8))){
var inst_55999 = (state_56014[(9)]);
var inst_56003 = cljs.core.deref(inst_55999);
var state_56014__$1 = state_56014;
var statearr_56065_59279 = state_56014__$1;
(statearr_56065_59279[(2)] = inst_56003);

(statearr_56065_59279[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__54152__auto__ = null;
var cljs$core$async$reduce_$_state_machine__54152__auto____0 = (function (){
var statearr_56073 = [null,null,null,null,null,null,null,null,null,null];
(statearr_56073[(0)] = cljs$core$async$reduce_$_state_machine__54152__auto__);

(statearr_56073[(1)] = (1));

return statearr_56073;
});
var cljs$core$async$reduce_$_state_machine__54152__auto____1 = (function (state_56014){
while(true){
var ret_value__54153__auto__ = (function (){try{while(true){
var result__54154__auto__ = switch__54151__auto__(state_56014);
if(cljs.core.keyword_identical_QMARK_(result__54154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54154__auto__;
}
break;
}
}catch (e56075){var ex__54155__auto__ = e56075;
var statearr_56076_59283 = state_56014;
(statearr_56076_59283[(2)] = ex__54155__auto__);


if(cljs.core.seq((state_56014[(4)]))){
var statearr_56078_59284 = state_56014;
(statearr_56078_59284[(1)] = cljs.core.first((state_56014[(4)])));

} else {
throw ex__54155__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59285 = state_56014;
state_56014 = G__59285;
continue;
} else {
return ret_value__54153__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__54152__auto__ = function(state_56014){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__54152__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__54152__auto____1.call(this,state_56014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__54152__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__54152__auto____0;
cljs$core$async$reduce_$_state_machine__54152__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__54152__auto____1;
return cljs$core$async$reduce_$_state_machine__54152__auto__;
})()
})();
var state__54434__auto__ = (function (){var statearr_56082 = f__54433__auto__();
(statearr_56082[(6)] = c__54431__auto__);

return statearr_56082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54434__auto__);
}));

return c__54431__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__54431__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54433__auto__ = (function (){var switch__54151__auto__ = (function (state_56104){
var state_val_56106 = (state_56104[(1)]);
if((state_val_56106 === (1))){
var inst_56097 = cljs.core.async.reduce(f__$1,init,ch);
var state_56104__$1 = state_56104;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56104__$1,(2),inst_56097);
} else {
if((state_val_56106 === (2))){
var inst_56100 = (state_56104[(2)]);
var inst_56101 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_56100) : f__$1.call(null,inst_56100));
var state_56104__$1 = state_56104;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56104__$1,inst_56101);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__54152__auto__ = null;
var cljs$core$async$transduce_$_state_machine__54152__auto____0 = (function (){
var statearr_56112 = [null,null,null,null,null,null,null];
(statearr_56112[(0)] = cljs$core$async$transduce_$_state_machine__54152__auto__);

(statearr_56112[(1)] = (1));

return statearr_56112;
});
var cljs$core$async$transduce_$_state_machine__54152__auto____1 = (function (state_56104){
while(true){
var ret_value__54153__auto__ = (function (){try{while(true){
var result__54154__auto__ = switch__54151__auto__(state_56104);
if(cljs.core.keyword_identical_QMARK_(result__54154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54154__auto__;
}
break;
}
}catch (e56114){var ex__54155__auto__ = e56114;
var statearr_56116_59293 = state_56104;
(statearr_56116_59293[(2)] = ex__54155__auto__);


if(cljs.core.seq((state_56104[(4)]))){
var statearr_56120_59297 = state_56104;
(statearr_56120_59297[(1)] = cljs.core.first((state_56104[(4)])));

} else {
throw ex__54155__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59300 = state_56104;
state_56104 = G__59300;
continue;
} else {
return ret_value__54153__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__54152__auto__ = function(state_56104){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__54152__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__54152__auto____1.call(this,state_56104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__54152__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__54152__auto____0;
cljs$core$async$transduce_$_state_machine__54152__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__54152__auto____1;
return cljs$core$async$transduce_$_state_machine__54152__auto__;
})()
})();
var state__54434__auto__ = (function (){var statearr_56126 = f__54433__auto__();
(statearr_56126[(6)] = c__54431__auto__);

return statearr_56126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54434__auto__);
}));

return c__54431__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__56140 = arguments.length;
switch (G__56140) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__54431__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54433__auto__ = (function (){var switch__54151__auto__ = (function (state_56198){
var state_val_56199 = (state_56198[(1)]);
if((state_val_56199 === (7))){
var inst_56170 = (state_56198[(2)]);
var state_56198__$1 = state_56198;
var statearr_56220_59305 = state_56198__$1;
(statearr_56220_59305[(2)] = inst_56170);

(statearr_56220_59305[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56199 === (1))){
var inst_56153 = cljs.core.seq(coll);
var inst_56158 = inst_56153;
var state_56198__$1 = (function (){var statearr_56226 = state_56198;
(statearr_56226[(7)] = inst_56158);

return statearr_56226;
})();
var statearr_56227_59309 = state_56198__$1;
(statearr_56227_59309[(2)] = null);

(statearr_56227_59309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56199 === (4))){
var inst_56158 = (state_56198[(7)]);
var inst_56168 = cljs.core.first(inst_56158);
var state_56198__$1 = state_56198;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56198__$1,(7),ch,inst_56168);
} else {
if((state_val_56199 === (13))){
var inst_56189 = (state_56198[(2)]);
var state_56198__$1 = state_56198;
var statearr_56233_59311 = state_56198__$1;
(statearr_56233_59311[(2)] = inst_56189);

(statearr_56233_59311[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56199 === (6))){
var inst_56173 = (state_56198[(2)]);
var state_56198__$1 = state_56198;
if(cljs.core.truth_(inst_56173)){
var statearr_56239_59312 = state_56198__$1;
(statearr_56239_59312[(1)] = (8));

} else {
var statearr_56241_59317 = state_56198__$1;
(statearr_56241_59317[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56199 === (3))){
var inst_56193 = (state_56198[(2)]);
var state_56198__$1 = state_56198;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56198__$1,inst_56193);
} else {
if((state_val_56199 === (12))){
var state_56198__$1 = state_56198;
var statearr_56247_59323 = state_56198__$1;
(statearr_56247_59323[(2)] = null);

(statearr_56247_59323[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56199 === (2))){
var inst_56158 = (state_56198[(7)]);
var state_56198__$1 = state_56198;
if(cljs.core.truth_(inst_56158)){
var statearr_56248_59324 = state_56198__$1;
(statearr_56248_59324[(1)] = (4));

} else {
var statearr_56250_59325 = state_56198__$1;
(statearr_56250_59325[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56199 === (11))){
var inst_56186 = cljs.core.async.close_BANG_(ch);
var state_56198__$1 = state_56198;
var statearr_56251_59334 = state_56198__$1;
(statearr_56251_59334[(2)] = inst_56186);

(statearr_56251_59334[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56199 === (9))){
var state_56198__$1 = state_56198;
if(cljs.core.truth_(close_QMARK_)){
var statearr_56252_59336 = state_56198__$1;
(statearr_56252_59336[(1)] = (11));

} else {
var statearr_56253_59339 = state_56198__$1;
(statearr_56253_59339[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56199 === (5))){
var inst_56158 = (state_56198[(7)]);
var state_56198__$1 = state_56198;
var statearr_56254_59343 = state_56198__$1;
(statearr_56254_59343[(2)] = inst_56158);

(statearr_56254_59343[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56199 === (10))){
var inst_56191 = (state_56198[(2)]);
var state_56198__$1 = state_56198;
var statearr_56255_59344 = state_56198__$1;
(statearr_56255_59344[(2)] = inst_56191);

(statearr_56255_59344[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56199 === (8))){
var inst_56158 = (state_56198[(7)]);
var inst_56177 = cljs.core.next(inst_56158);
var inst_56158__$1 = inst_56177;
var state_56198__$1 = (function (){var statearr_56256 = state_56198;
(statearr_56256[(7)] = inst_56158__$1);

return statearr_56256;
})();
var statearr_56259_59350 = state_56198__$1;
(statearr_56259_59350[(2)] = null);

(statearr_56259_59350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__54152__auto__ = null;
var cljs$core$async$state_machine__54152__auto____0 = (function (){
var statearr_56261 = [null,null,null,null,null,null,null,null];
(statearr_56261[(0)] = cljs$core$async$state_machine__54152__auto__);

(statearr_56261[(1)] = (1));

return statearr_56261;
});
var cljs$core$async$state_machine__54152__auto____1 = (function (state_56198){
while(true){
var ret_value__54153__auto__ = (function (){try{while(true){
var result__54154__auto__ = switch__54151__auto__(state_56198);
if(cljs.core.keyword_identical_QMARK_(result__54154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54154__auto__;
}
break;
}
}catch (e56264){var ex__54155__auto__ = e56264;
var statearr_56266_59356 = state_56198;
(statearr_56266_59356[(2)] = ex__54155__auto__);


if(cljs.core.seq((state_56198[(4)]))){
var statearr_56270_59359 = state_56198;
(statearr_56270_59359[(1)] = cljs.core.first((state_56198[(4)])));

} else {
throw ex__54155__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59364 = state_56198;
state_56198 = G__59364;
continue;
} else {
return ret_value__54153__auto__;
}
break;
}
});
cljs$core$async$state_machine__54152__auto__ = function(state_56198){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54152__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54152__auto____1.call(this,state_56198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54152__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54152__auto____0;
cljs$core$async$state_machine__54152__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54152__auto____1;
return cljs$core$async$state_machine__54152__auto__;
})()
})();
var state__54434__auto__ = (function (){var statearr_56276 = f__54433__auto__();
(statearr_56276[(6)] = c__54431__auto__);

return statearr_56276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54434__auto__);
}));

return c__54431__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__56279 = arguments.length;
switch (G__56279) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_59372 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_59372(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_59376 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_59376(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_59377 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_59377(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_59384 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_59384(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async56305 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56305 = (function (ch,cs,meta56306){
this.ch = ch;
this.cs = cs;
this.meta56306 = meta56306;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async56305.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56307,meta56306__$1){
var self__ = this;
var _56307__$1 = this;
return (new cljs.core.async.t_cljs$core$async56305(self__.ch,self__.cs,meta56306__$1));
}));

(cljs.core.async.t_cljs$core$async56305.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56307){
var self__ = this;
var _56307__$1 = this;
return self__.meta56306;
}));

(cljs.core.async.t_cljs$core$async56305.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56305.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async56305.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56305.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async56305.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async56305.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async56305.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta56306","meta56306",-1224823289,null)], null);
}));

(cljs.core.async.t_cljs$core$async56305.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async56305.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56305");

(cljs.core.async.t_cljs$core$async56305.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async56305");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56305.
 */
cljs.core.async.__GT_t_cljs$core$async56305 = (function cljs$core$async$mult_$___GT_t_cljs$core$async56305(ch__$1,cs__$1,meta56306){
return (new cljs.core.async.t_cljs$core$async56305(ch__$1,cs__$1,meta56306));
});

}

return (new cljs.core.async.t_cljs$core$async56305(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__54431__auto___59427 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54433__auto__ = (function (){var switch__54151__auto__ = (function (state_56522){
var state_val_56524 = (state_56522[(1)]);
if((state_val_56524 === (7))){
var inst_56515 = (state_56522[(2)]);
var state_56522__$1 = state_56522;
var statearr_56529_59435 = state_56522__$1;
(statearr_56529_59435[(2)] = inst_56515);

(statearr_56529_59435[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56524 === (20))){
var inst_56399 = (state_56522[(7)]);
var inst_56422 = cljs.core.first(inst_56399);
var inst_56423 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56422,(0),null);
var inst_56424 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56422,(1),null);
var state_56522__$1 = (function (){var statearr_56533 = state_56522;
(statearr_56533[(8)] = inst_56423);

return statearr_56533;
})();
if(cljs.core.truth_(inst_56424)){
var statearr_56534_59447 = state_56522__$1;
(statearr_56534_59447[(1)] = (22));

} else {
var statearr_56537_59452 = state_56522__$1;
(statearr_56537_59452[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56524 === (27))){
var inst_56453 = (state_56522[(9)]);
var inst_56455 = (state_56522[(10)]);
var inst_56463 = (state_56522[(11)]);
var inst_56363 = (state_56522[(12)]);
var inst_56463__$1 = cljs.core._nth(inst_56453,inst_56455);
var inst_56465 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_56463__$1,inst_56363,done);
var state_56522__$1 = (function (){var statearr_56542 = state_56522;
(statearr_56542[(11)] = inst_56463__$1);

return statearr_56542;
})();
if(cljs.core.truth_(inst_56465)){
var statearr_56543_59459 = state_56522__$1;
(statearr_56543_59459[(1)] = (30));

} else {
var statearr_56549_59460 = state_56522__$1;
(statearr_56549_59460[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56524 === (1))){
var state_56522__$1 = state_56522;
var statearr_56553_59465 = state_56522__$1;
(statearr_56553_59465[(2)] = null);

(statearr_56553_59465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56524 === (24))){
var inst_56399 = (state_56522[(7)]);
var inst_56429 = (state_56522[(2)]);
var inst_56431 = cljs.core.next(inst_56399);
var inst_56373 = inst_56431;
var inst_56374 = null;
var inst_56375 = (0);
var inst_56376 = (0);
var state_56522__$1 = (function (){var statearr_56572 = state_56522;
(statearr_56572[(13)] = inst_56375);

(statearr_56572[(14)] = inst_56374);

(statearr_56572[(15)] = inst_56373);

(statearr_56572[(16)] = inst_56429);

(statearr_56572[(17)] = inst_56376);

return statearr_56572;
})();
var statearr_56582_59473 = state_56522__$1;
(statearr_56582_59473[(2)] = null);

(statearr_56582_59473[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56524 === (39))){
var state_56522__$1 = state_56522;
var statearr_56604_59476 = state_56522__$1;
(statearr_56604_59476[(2)] = null);

(statearr_56604_59476[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56524 === (4))){
var inst_56363 = (state_56522[(12)]);
var inst_56363__$1 = (state_56522[(2)]);
var inst_56364 = (inst_56363__$1 == null);
var state_56522__$1 = (function (){var statearr_56613 = state_56522;
(statearr_56613[(12)] = inst_56363__$1);

return statearr_56613;
})();
if(cljs.core.truth_(inst_56364)){
var statearr_56618_59485 = state_56522__$1;
(statearr_56618_59485[(1)] = (5));

} else {
var statearr_56620_59486 = state_56522__$1;
(statearr_56620_59486[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56524 === (15))){
var inst_56375 = (state_56522[(13)]);
var inst_56374 = (state_56522[(14)]);
var inst_56373 = (state_56522[(15)]);
var inst_56376 = (state_56522[(17)]);
var inst_56393 = (state_56522[(2)]);
var inst_56395 = (inst_56376 + (1));
var tmp56595 = inst_56375;
var tmp56596 = inst_56374;
var tmp56597 = inst_56373;
var inst_56373__$1 = tmp56597;
var inst_56374__$1 = tmp56596;
var inst_56375__$1 = tmp56595;
var inst_56376__$1 = inst_56395;
var state_56522__$1 = (function (){var statearr_56623 = state_56522;
(statearr_56623[(13)] = inst_56375__$1);

(statearr_56623[(14)] = inst_56374__$1);

(statearr_56623[(15)] = inst_56373__$1);

(statearr_56623[(18)] = inst_56393);

(statearr_56623[(17)] = inst_56376__$1);

return statearr_56623;
})();
var statearr_56624_59491 = state_56522__$1;
(statearr_56624_59491[(2)] = null);

(statearr_56624_59491[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56524 === (21))){
var inst_56434 = (state_56522[(2)]);
var state_56522__$1 = state_56522;
var statearr_56628_59495 = state_56522__$1;
(statearr_56628_59495[(2)] = inst_56434);

(statearr_56628_59495[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56524 === (31))){
var inst_56463 = (state_56522[(11)]);
var inst_56468 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_56463);
var state_56522__$1 = state_56522;
var statearr_56633_59496 = state_56522__$1;
(statearr_56633_59496[(2)] = inst_56468);

(statearr_56633_59496[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56524 === (32))){
var inst_56453 = (state_56522[(9)]);
var inst_56455 = (state_56522[(10)]);
var inst_56452 = (state_56522[(19)]);
var inst_56454 = (state_56522[(20)]);
var inst_56470 = (state_56522[(2)]);
var inst_56471 = (inst_56455 + (1));
var tmp56625 = inst_56453;
var tmp56626 = inst_56452;
var tmp56627 = inst_56454;
var inst_56452__$1 = tmp56626;
var inst_56453__$1 = tmp56625;
var inst_56454__$1 = tmp56627;
var inst_56455__$1 = inst_56471;
var state_56522__$1 = (function (){var statearr_56634 = state_56522;
(statearr_56634[(9)] = inst_56453__$1);

(statearr_56634[(10)] = inst_56455__$1);

(statearr_56634[(21)] = inst_56470);

(statearr_56634[(19)] = inst_56452__$1);

(statearr_56634[(20)] = inst_56454__$1);

return statearr_56634;
})();
var statearr_56635_59503 = state_56522__$1;
(statearr_56635_59503[(2)] = null);

(statearr_56635_59503[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56524 === (40))){
var inst_56487 = (state_56522[(22)]);
var inst_56491 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_56487);
var state_56522__$1 = state_56522;
var statearr_56636_59505 = state_56522__$1;
(statearr_56636_59505[(2)] = inst_56491);

(statearr_56636_59505[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56524 === (33))){
var inst_56475 = (state_56522[(23)]);
var inst_56479 = cljs.core.chunked_seq_QMARK_(inst_56475);
var state_56522__$1 = state_56522;
if(inst_56479){
var statearr_56637_59515 = state_56522__$1;
(statearr_56637_59515[(1)] = (36));

} else {
var statearr_56638_59516 = state_56522__$1;
(statearr_56638_59516[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56524 === (13))){
var inst_56387 = (state_56522[(24)]);
var inst_56390 = cljs.core.async.close_BANG_(inst_56387);
var state_56522__$1 = state_56522;
var statearr_56639_59519 = state_56522__$1;
(statearr_56639_59519[(2)] = inst_56390);

(statearr_56639_59519[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56524 === (22))){
var inst_56423 = (state_56522[(8)]);
var inst_56426 = cljs.core.async.close_BANG_(inst_56423);
var state_56522__$1 = state_56522;
var statearr_56641_59521 = state_56522__$1;
(statearr_56641_59521[(2)] = inst_56426);

(statearr_56641_59521[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56524 === (36))){
var inst_56475 = (state_56522[(23)]);
var inst_56482 = cljs.core.chunk_first(inst_56475);
var inst_56483 = cljs.core.chunk_rest(inst_56475);
var inst_56484 = cljs.core.count(inst_56482);
var inst_56452 = inst_56483;
var inst_56453 = inst_56482;
var inst_56454 = inst_56484;
var inst_56455 = (0);
var state_56522__$1 = (function (){var statearr_56646 = state_56522;
(statearr_56646[(9)] = inst_56453);

(statearr_56646[(10)] = inst_56455);

(statearr_56646[(19)] = inst_56452);

(statearr_56646[(20)] = inst_56454);

return statearr_56646;
})();
var statearr_56649_59526 = state_56522__$1;
(statearr_56649_59526[(2)] = null);

(statearr_56649_59526[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56524 === (41))){
var inst_56475 = (state_56522[(23)]);
var inst_56493 = (state_56522[(2)]);
var inst_56494 = cljs.core.next(inst_56475);
var inst_56452 = inst_56494;
var inst_56453 = null;
var inst_56454 = (0);
var inst_56455 = (0);
var state_56522__$1 = (function (){var statearr_56653 = state_56522;
(statearr_56653[(9)] = inst_56453);

(statearr_56653[(10)] = inst_56455);

(statearr_56653[(25)] = inst_56493);

(statearr_56653[(19)] = inst_56452);

(statearr_56653[(20)] = inst_56454);

return statearr_56653;
})();
var statearr_56654_59528 = state_56522__$1;
(statearr_56654_59528[(2)] = null);

(statearr_56654_59528[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56524 === (43))){
var state_56522__$1 = state_56522;
var statearr_56656_59530 = state_56522__$1;
(statearr_56656_59530[(2)] = null);

(statearr_56656_59530[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56524 === (29))){
var inst_56502 = (state_56522[(2)]);
var state_56522__$1 = state_56522;
var statearr_56657_59531 = state_56522__$1;
(statearr_56657_59531[(2)] = inst_56502);

(statearr_56657_59531[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56524 === (44))){
var inst_56512 = (state_56522[(2)]);
var state_56522__$1 = (function (){var statearr_56662 = state_56522;
(statearr_56662[(26)] = inst_56512);

return statearr_56662;
})();
var statearr_56663_59532 = state_56522__$1;
(statearr_56663_59532[(2)] = null);

(statearr_56663_59532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56524 === (6))){
var inst_56444 = (state_56522[(27)]);
var inst_56443 = cljs.core.deref(cs);
var inst_56444__$1 = cljs.core.keys(inst_56443);
var inst_56445 = cljs.core.count(inst_56444__$1);
var inst_56446 = cljs.core.reset_BANG_(dctr,inst_56445);
var inst_56451 = cljs.core.seq(inst_56444__$1);
var inst_56452 = inst_56451;
var inst_56453 = null;
var inst_56454 = (0);
var inst_56455 = (0);
var state_56522__$1 = (function (){var statearr_56664 = state_56522;
(statearr_56664[(27)] = inst_56444__$1);

(statearr_56664[(9)] = inst_56453);

(statearr_56664[(10)] = inst_56455);

(statearr_56664[(19)] = inst_56452);

(statearr_56664[(20)] = inst_56454);

(statearr_56664[(28)] = inst_56446);

return statearr_56664;
})();
var statearr_56665_59554 = state_56522__$1;
(statearr_56665_59554[(2)] = null);

(statearr_56665_59554[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56524 === (28))){
var inst_56475 = (state_56522[(23)]);
var inst_56452 = (state_56522[(19)]);
var inst_56475__$1 = cljs.core.seq(inst_56452);
var state_56522__$1 = (function (){var statearr_56666 = state_56522;
(statearr_56666[(23)] = inst_56475__$1);

return statearr_56666;
})();
if(inst_56475__$1){
var statearr_56667_59565 = state_56522__$1;
(statearr_56667_59565[(1)] = (33));

} else {
var statearr_56668_59566 = state_56522__$1;
(statearr_56668_59566[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56524 === (25))){
var inst_56455 = (state_56522[(10)]);
var inst_56454 = (state_56522[(20)]);
var inst_56458 = (inst_56455 < inst_56454);
var inst_56459 = inst_56458;
var state_56522__$1 = state_56522;
if(cljs.core.truth_(inst_56459)){
var statearr_56673_59570 = state_56522__$1;
(statearr_56673_59570[(1)] = (27));

} else {
var statearr_56674_59571 = state_56522__$1;
(statearr_56674_59571[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56524 === (34))){
var state_56522__$1 = state_56522;
var statearr_56675_59575 = state_56522__$1;
(statearr_56675_59575[(2)] = null);

(statearr_56675_59575[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56524 === (17))){
var state_56522__$1 = state_56522;
var statearr_56677_59576 = state_56522__$1;
(statearr_56677_59576[(2)] = null);

(statearr_56677_59576[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56524 === (3))){
var inst_56517 = (state_56522[(2)]);
var state_56522__$1 = state_56522;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56522__$1,inst_56517);
} else {
if((state_val_56524 === (12))){
var inst_56439 = (state_56522[(2)]);
var state_56522__$1 = state_56522;
var statearr_56678_59580 = state_56522__$1;
(statearr_56678_59580[(2)] = inst_56439);

(statearr_56678_59580[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56524 === (2))){
var state_56522__$1 = state_56522;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56522__$1,(4),ch);
} else {
if((state_val_56524 === (23))){
var state_56522__$1 = state_56522;
var statearr_56682_59581 = state_56522__$1;
(statearr_56682_59581[(2)] = null);

(statearr_56682_59581[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56524 === (35))){
var inst_56500 = (state_56522[(2)]);
var state_56522__$1 = state_56522;
var statearr_56683_59586 = state_56522__$1;
(statearr_56683_59586[(2)] = inst_56500);

(statearr_56683_59586[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56524 === (19))){
var inst_56399 = (state_56522[(7)]);
var inst_56412 = cljs.core.chunk_first(inst_56399);
var inst_56413 = cljs.core.chunk_rest(inst_56399);
var inst_56414 = cljs.core.count(inst_56412);
var inst_56373 = inst_56413;
var inst_56374 = inst_56412;
var inst_56375 = inst_56414;
var inst_56376 = (0);
var state_56522__$1 = (function (){var statearr_56688 = state_56522;
(statearr_56688[(13)] = inst_56375);

(statearr_56688[(14)] = inst_56374);

(statearr_56688[(15)] = inst_56373);

(statearr_56688[(17)] = inst_56376);

return statearr_56688;
})();
var statearr_56689_59599 = state_56522__$1;
(statearr_56689_59599[(2)] = null);

(statearr_56689_59599[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56524 === (11))){
var inst_56373 = (state_56522[(15)]);
var inst_56399 = (state_56522[(7)]);
var inst_56399__$1 = cljs.core.seq(inst_56373);
var state_56522__$1 = (function (){var statearr_56691 = state_56522;
(statearr_56691[(7)] = inst_56399__$1);

return statearr_56691;
})();
if(inst_56399__$1){
var statearr_56692_59605 = state_56522__$1;
(statearr_56692_59605[(1)] = (16));

} else {
var statearr_56693_59609 = state_56522__$1;
(statearr_56693_59609[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56524 === (9))){
var inst_56441 = (state_56522[(2)]);
var state_56522__$1 = state_56522;
var statearr_56695_59613 = state_56522__$1;
(statearr_56695_59613[(2)] = inst_56441);

(statearr_56695_59613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56524 === (5))){
var inst_56371 = cljs.core.deref(cs);
var inst_56372 = cljs.core.seq(inst_56371);
var inst_56373 = inst_56372;
var inst_56374 = null;
var inst_56375 = (0);
var inst_56376 = (0);
var state_56522__$1 = (function (){var statearr_56696 = state_56522;
(statearr_56696[(13)] = inst_56375);

(statearr_56696[(14)] = inst_56374);

(statearr_56696[(15)] = inst_56373);

(statearr_56696[(17)] = inst_56376);

return statearr_56696;
})();
var statearr_56699_59623 = state_56522__$1;
(statearr_56699_59623[(2)] = null);

(statearr_56699_59623[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56524 === (14))){
var state_56522__$1 = state_56522;
var statearr_56704_59624 = state_56522__$1;
(statearr_56704_59624[(2)] = null);

(statearr_56704_59624[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56524 === (45))){
var inst_56509 = (state_56522[(2)]);
var state_56522__$1 = state_56522;
var statearr_56705_59625 = state_56522__$1;
(statearr_56705_59625[(2)] = inst_56509);

(statearr_56705_59625[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56524 === (26))){
var inst_56444 = (state_56522[(27)]);
var inst_56504 = (state_56522[(2)]);
var inst_56505 = cljs.core.seq(inst_56444);
var state_56522__$1 = (function (){var statearr_56706 = state_56522;
(statearr_56706[(29)] = inst_56504);

return statearr_56706;
})();
if(inst_56505){
var statearr_56707_59631 = state_56522__$1;
(statearr_56707_59631[(1)] = (42));

} else {
var statearr_56708_59632 = state_56522__$1;
(statearr_56708_59632[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56524 === (16))){
var inst_56399 = (state_56522[(7)]);
var inst_56409 = cljs.core.chunked_seq_QMARK_(inst_56399);
var state_56522__$1 = state_56522;
if(inst_56409){
var statearr_56710_59633 = state_56522__$1;
(statearr_56710_59633[(1)] = (19));

} else {
var statearr_56711_59634 = state_56522__$1;
(statearr_56711_59634[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56524 === (38))){
var inst_56497 = (state_56522[(2)]);
var state_56522__$1 = state_56522;
var statearr_56713_59635 = state_56522__$1;
(statearr_56713_59635[(2)] = inst_56497);

(statearr_56713_59635[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56524 === (30))){
var state_56522__$1 = state_56522;
var statearr_56716_59638 = state_56522__$1;
(statearr_56716_59638[(2)] = null);

(statearr_56716_59638[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56524 === (10))){
var inst_56374 = (state_56522[(14)]);
var inst_56376 = (state_56522[(17)]);
var inst_56386 = cljs.core._nth(inst_56374,inst_56376);
var inst_56387 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56386,(0),null);
var inst_56388 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56386,(1),null);
var state_56522__$1 = (function (){var statearr_56717 = state_56522;
(statearr_56717[(24)] = inst_56387);

return statearr_56717;
})();
if(cljs.core.truth_(inst_56388)){
var statearr_56718_59639 = state_56522__$1;
(statearr_56718_59639[(1)] = (13));

} else {
var statearr_56719_59640 = state_56522__$1;
(statearr_56719_59640[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56524 === (18))){
var inst_56437 = (state_56522[(2)]);
var state_56522__$1 = state_56522;
var statearr_56720_59644 = state_56522__$1;
(statearr_56720_59644[(2)] = inst_56437);

(statearr_56720_59644[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56524 === (42))){
var state_56522__$1 = state_56522;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56522__$1,(45),dchan);
} else {
if((state_val_56524 === (37))){
var inst_56487 = (state_56522[(22)]);
var inst_56475 = (state_56522[(23)]);
var inst_56363 = (state_56522[(12)]);
var inst_56487__$1 = cljs.core.first(inst_56475);
var inst_56488 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_56487__$1,inst_56363,done);
var state_56522__$1 = (function (){var statearr_56728 = state_56522;
(statearr_56728[(22)] = inst_56487__$1);

return statearr_56728;
})();
if(cljs.core.truth_(inst_56488)){
var statearr_56730_59645 = state_56522__$1;
(statearr_56730_59645[(1)] = (39));

} else {
var statearr_56731_59646 = state_56522__$1;
(statearr_56731_59646[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56524 === (8))){
var inst_56375 = (state_56522[(13)]);
var inst_56376 = (state_56522[(17)]);
var inst_56378 = (inst_56376 < inst_56375);
var inst_56379 = inst_56378;
var state_56522__$1 = state_56522;
if(cljs.core.truth_(inst_56379)){
var statearr_56734_59647 = state_56522__$1;
(statearr_56734_59647[(1)] = (10));

} else {
var statearr_56737_59648 = state_56522__$1;
(statearr_56737_59648[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__54152__auto__ = null;
var cljs$core$async$mult_$_state_machine__54152__auto____0 = (function (){
var statearr_56739 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56739[(0)] = cljs$core$async$mult_$_state_machine__54152__auto__);

(statearr_56739[(1)] = (1));

return statearr_56739;
});
var cljs$core$async$mult_$_state_machine__54152__auto____1 = (function (state_56522){
while(true){
var ret_value__54153__auto__ = (function (){try{while(true){
var result__54154__auto__ = switch__54151__auto__(state_56522);
if(cljs.core.keyword_identical_QMARK_(result__54154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54154__auto__;
}
break;
}
}catch (e56741){var ex__54155__auto__ = e56741;
var statearr_56743_59656 = state_56522;
(statearr_56743_59656[(2)] = ex__54155__auto__);


if(cljs.core.seq((state_56522[(4)]))){
var statearr_56744_59657 = state_56522;
(statearr_56744_59657[(1)] = cljs.core.first((state_56522[(4)])));

} else {
throw ex__54155__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59662 = state_56522;
state_56522 = G__59662;
continue;
} else {
return ret_value__54153__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__54152__auto__ = function(state_56522){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__54152__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__54152__auto____1.call(this,state_56522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__54152__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__54152__auto____0;
cljs$core$async$mult_$_state_machine__54152__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__54152__auto____1;
return cljs$core$async$mult_$_state_machine__54152__auto__;
})()
})();
var state__54434__auto__ = (function (){var statearr_56745 = f__54433__auto__();
(statearr_56745[(6)] = c__54431__auto___59427);

return statearr_56745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54434__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__56750 = arguments.length;
switch (G__56750) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_59674 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_59674(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_59702 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_59702(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_59720 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_59720(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_59721 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_59721(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_59725 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_59725(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59730 = arguments.length;
var i__4737__auto___59733 = (0);
while(true){
if((i__4737__auto___59733 < len__4736__auto___59730)){
args__4742__auto__.push((arguments[i__4737__auto___59733]));

var G__59735 = (i__4737__auto___59733 + (1));
i__4737__auto___59733 = G__59735;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__56807){
var map__56808 = p__56807;
var map__56808__$1 = (((((!((map__56808 == null))))?(((((map__56808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56808.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56808):map__56808);
var opts = map__56808__$1;
var statearr_56811_59744 = state;
(statearr_56811_59744[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_56814_59746 = state;
(statearr_56814_59746[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_56815_59747 = state;
(statearr_56815_59747[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq56798){
var G__56799 = cljs.core.first(seq56798);
var seq56798__$1 = cljs.core.next(seq56798);
var G__56800 = cljs.core.first(seq56798__$1);
var seq56798__$2 = cljs.core.next(seq56798__$1);
var G__56801 = cljs.core.first(seq56798__$2);
var seq56798__$3 = cljs.core.next(seq56798__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56799,G__56800,G__56801,seq56798__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async56831 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56831 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta56832){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta56832 = meta56832;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async56831.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56833,meta56832__$1){
var self__ = this;
var _56833__$1 = this;
return (new cljs.core.async.t_cljs$core$async56831(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta56832__$1));
}));

(cljs.core.async.t_cljs$core$async56831.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56833){
var self__ = this;
var _56833__$1 = this;
return self__.meta56832;
}));

(cljs.core.async.t_cljs$core$async56831.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56831.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async56831.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56831.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async56831.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async56831.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async56831.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async56831.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async56831.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta56832","meta56832",1963590050,null)], null);
}));

(cljs.core.async.t_cljs$core$async56831.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async56831.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56831");

(cljs.core.async.t_cljs$core$async56831.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async56831");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56831.
 */
cljs.core.async.__GT_t_cljs$core$async56831 = (function cljs$core$async$mix_$___GT_t_cljs$core$async56831(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta56832){
return (new cljs.core.async.t_cljs$core$async56831(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta56832));
});

}

return (new cljs.core.async.t_cljs$core$async56831(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__54431__auto___59799 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54433__auto__ = (function (){var switch__54151__auto__ = (function (state_56993){
var state_val_56994 = (state_56993[(1)]);
if((state_val_56994 === (7))){
var inst_56891 = (state_56993[(2)]);
var state_56993__$1 = state_56993;
var statearr_56995_59806 = state_56993__$1;
(statearr_56995_59806[(2)] = inst_56891);

(statearr_56995_59806[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56994 === (20))){
var inst_56906 = (state_56993[(7)]);
var state_56993__$1 = state_56993;
var statearr_56996_59808 = state_56993__$1;
(statearr_56996_59808[(2)] = inst_56906);

(statearr_56996_59808[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56994 === (27))){
var state_56993__$1 = state_56993;
var statearr_56999_59809 = state_56993__$1;
(statearr_56999_59809[(2)] = null);

(statearr_56999_59809[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56994 === (1))){
var inst_56873 = (state_56993[(8)]);
var inst_56873__$1 = calc_state();
var inst_56880 = (inst_56873__$1 == null);
var inst_56881 = cljs.core.not(inst_56880);
var state_56993__$1 = (function (){var statearr_57000 = state_56993;
(statearr_57000[(8)] = inst_56873__$1);

return statearr_57000;
})();
if(inst_56881){
var statearr_57001_59817 = state_56993__$1;
(statearr_57001_59817[(1)] = (2));

} else {
var statearr_57002_59818 = state_56993__$1;
(statearr_57002_59818[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56994 === (24))){
var inst_56947 = (state_56993[(9)]);
var inst_56963 = (state_56993[(10)]);
var inst_56938 = (state_56993[(11)]);
var inst_56963__$1 = (inst_56938.cljs$core$IFn$_invoke$arity$1 ? inst_56938.cljs$core$IFn$_invoke$arity$1(inst_56947) : inst_56938.call(null,inst_56947));
var state_56993__$1 = (function (){var statearr_57003 = state_56993;
(statearr_57003[(10)] = inst_56963__$1);

return statearr_57003;
})();
if(cljs.core.truth_(inst_56963__$1)){
var statearr_57004_59821 = state_56993__$1;
(statearr_57004_59821[(1)] = (29));

} else {
var statearr_57007_59822 = state_56993__$1;
(statearr_57007_59822[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56994 === (4))){
var inst_56894 = (state_56993[(2)]);
var state_56993__$1 = state_56993;
if(cljs.core.truth_(inst_56894)){
var statearr_57011_59823 = state_56993__$1;
(statearr_57011_59823[(1)] = (8));

} else {
var statearr_57012_59824 = state_56993__$1;
(statearr_57012_59824[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56994 === (15))){
var inst_56929 = (state_56993[(2)]);
var state_56993__$1 = state_56993;
if(cljs.core.truth_(inst_56929)){
var statearr_57013_59826 = state_56993__$1;
(statearr_57013_59826[(1)] = (19));

} else {
var statearr_57014_59827 = state_56993__$1;
(statearr_57014_59827[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56994 === (21))){
var inst_56937 = (state_56993[(12)]);
var inst_56937__$1 = (state_56993[(2)]);
var inst_56938 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_56937__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_56939 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_56937__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_56940 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_56937__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_56993__$1 = (function (){var statearr_57020 = state_56993;
(statearr_57020[(11)] = inst_56938);

(statearr_57020[(12)] = inst_56937__$1);

(statearr_57020[(13)] = inst_56939);

return statearr_57020;
})();
return cljs.core.async.ioc_alts_BANG_(state_56993__$1,(22),inst_56940);
} else {
if((state_val_56994 === (31))){
var inst_56973 = (state_56993[(2)]);
var state_56993__$1 = state_56993;
if(cljs.core.truth_(inst_56973)){
var statearr_57022_59835 = state_56993__$1;
(statearr_57022_59835[(1)] = (32));

} else {
var statearr_57023_59836 = state_56993__$1;
(statearr_57023_59836[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56994 === (32))){
var inst_56946 = (state_56993[(14)]);
var state_56993__$1 = state_56993;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56993__$1,(35),out,inst_56946);
} else {
if((state_val_56994 === (33))){
var inst_56937 = (state_56993[(12)]);
var inst_56906 = inst_56937;
var state_56993__$1 = (function (){var statearr_57026 = state_56993;
(statearr_57026[(7)] = inst_56906);

return statearr_57026;
})();
var statearr_57027_59837 = state_56993__$1;
(statearr_57027_59837[(2)] = null);

(statearr_57027_59837[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56994 === (13))){
var inst_56906 = (state_56993[(7)]);
var inst_56917 = inst_56906.cljs$lang$protocol_mask$partition0$;
var inst_56918 = (inst_56917 & (64));
var inst_56919 = inst_56906.cljs$core$ISeq$;
var inst_56920 = (cljs.core.PROTOCOL_SENTINEL === inst_56919);
var inst_56921 = ((inst_56918) || (inst_56920));
var state_56993__$1 = state_56993;
if(cljs.core.truth_(inst_56921)){
var statearr_57032_59838 = state_56993__$1;
(statearr_57032_59838[(1)] = (16));

} else {
var statearr_57033_59839 = state_56993__$1;
(statearr_57033_59839[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56994 === (22))){
var inst_56947 = (state_56993[(9)]);
var inst_56946 = (state_56993[(14)]);
var inst_56945 = (state_56993[(2)]);
var inst_56946__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56945,(0),null);
var inst_56947__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56945,(1),null);
var inst_56949 = (inst_56946__$1 == null);
var inst_56950 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_56947__$1,change);
var inst_56951 = ((inst_56949) || (inst_56950));
var state_56993__$1 = (function (){var statearr_57037 = state_56993;
(statearr_57037[(9)] = inst_56947__$1);

(statearr_57037[(14)] = inst_56946__$1);

return statearr_57037;
})();
if(cljs.core.truth_(inst_56951)){
var statearr_57039_59840 = state_56993__$1;
(statearr_57039_59840[(1)] = (23));

} else {
var statearr_57043_59842 = state_56993__$1;
(statearr_57043_59842[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56994 === (36))){
var inst_56937 = (state_56993[(12)]);
var inst_56906 = inst_56937;
var state_56993__$1 = (function (){var statearr_57044 = state_56993;
(statearr_57044[(7)] = inst_56906);

return statearr_57044;
})();
var statearr_57046_59845 = state_56993__$1;
(statearr_57046_59845[(2)] = null);

(statearr_57046_59845[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56994 === (29))){
var inst_56963 = (state_56993[(10)]);
var state_56993__$1 = state_56993;
var statearr_57050_59846 = state_56993__$1;
(statearr_57050_59846[(2)] = inst_56963);

(statearr_57050_59846[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56994 === (6))){
var state_56993__$1 = state_56993;
var statearr_57054_59849 = state_56993__$1;
(statearr_57054_59849[(2)] = false);

(statearr_57054_59849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56994 === (28))){
var inst_56958 = (state_56993[(2)]);
var inst_56959 = calc_state();
var inst_56906 = inst_56959;
var state_56993__$1 = (function (){var statearr_57055 = state_56993;
(statearr_57055[(15)] = inst_56958);

(statearr_57055[(7)] = inst_56906);

return statearr_57055;
})();
var statearr_57056_59859 = state_56993__$1;
(statearr_57056_59859[(2)] = null);

(statearr_57056_59859[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56994 === (25))){
var inst_56987 = (state_56993[(2)]);
var state_56993__$1 = state_56993;
var statearr_57062_59861 = state_56993__$1;
(statearr_57062_59861[(2)] = inst_56987);

(statearr_57062_59861[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56994 === (34))){
var inst_56985 = (state_56993[(2)]);
var state_56993__$1 = state_56993;
var statearr_57063_59862 = state_56993__$1;
(statearr_57063_59862[(2)] = inst_56985);

(statearr_57063_59862[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56994 === (17))){
var state_56993__$1 = state_56993;
var statearr_57065_59863 = state_56993__$1;
(statearr_57065_59863[(2)] = false);

(statearr_57065_59863[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56994 === (3))){
var state_56993__$1 = state_56993;
var statearr_57068_59864 = state_56993__$1;
(statearr_57068_59864[(2)] = false);

(statearr_57068_59864[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56994 === (12))){
var inst_56989 = (state_56993[(2)]);
var state_56993__$1 = state_56993;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56993__$1,inst_56989);
} else {
if((state_val_56994 === (2))){
var inst_56873 = (state_56993[(8)]);
var inst_56883 = inst_56873.cljs$lang$protocol_mask$partition0$;
var inst_56884 = (inst_56883 & (64));
var inst_56885 = inst_56873.cljs$core$ISeq$;
var inst_56886 = (cljs.core.PROTOCOL_SENTINEL === inst_56885);
var inst_56887 = ((inst_56884) || (inst_56886));
var state_56993__$1 = state_56993;
if(cljs.core.truth_(inst_56887)){
var statearr_57099_59868 = state_56993__$1;
(statearr_57099_59868[(1)] = (5));

} else {
var statearr_57100_59869 = state_56993__$1;
(statearr_57100_59869[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56994 === (23))){
var inst_56946 = (state_56993[(14)]);
var inst_56953 = (inst_56946 == null);
var state_56993__$1 = state_56993;
if(cljs.core.truth_(inst_56953)){
var statearr_57101_59872 = state_56993__$1;
(statearr_57101_59872[(1)] = (26));

} else {
var statearr_57102_59874 = state_56993__$1;
(statearr_57102_59874[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56994 === (35))){
var inst_56976 = (state_56993[(2)]);
var state_56993__$1 = state_56993;
if(cljs.core.truth_(inst_56976)){
var statearr_57106_59875 = state_56993__$1;
(statearr_57106_59875[(1)] = (36));

} else {
var statearr_57107_59876 = state_56993__$1;
(statearr_57107_59876[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56994 === (19))){
var inst_56906 = (state_56993[(7)]);
var inst_56934 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_56906);
var state_56993__$1 = state_56993;
var statearr_57111_59877 = state_56993__$1;
(statearr_57111_59877[(2)] = inst_56934);

(statearr_57111_59877[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56994 === (11))){
var inst_56906 = (state_56993[(7)]);
var inst_56910 = (inst_56906 == null);
var inst_56911 = cljs.core.not(inst_56910);
var state_56993__$1 = state_56993;
if(inst_56911){
var statearr_57120_59878 = state_56993__$1;
(statearr_57120_59878[(1)] = (13));

} else {
var statearr_57122_59880 = state_56993__$1;
(statearr_57122_59880[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56994 === (9))){
var inst_56873 = (state_56993[(8)]);
var state_56993__$1 = state_56993;
var statearr_57124_59882 = state_56993__$1;
(statearr_57124_59882[(2)] = inst_56873);

(statearr_57124_59882[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56994 === (5))){
var state_56993__$1 = state_56993;
var statearr_57126_59883 = state_56993__$1;
(statearr_57126_59883[(2)] = true);

(statearr_57126_59883[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56994 === (14))){
var state_56993__$1 = state_56993;
var statearr_57127_59885 = state_56993__$1;
(statearr_57127_59885[(2)] = false);

(statearr_57127_59885[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56994 === (26))){
var inst_56947 = (state_56993[(9)]);
var inst_56955 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_56947);
var state_56993__$1 = state_56993;
var statearr_57129_59887 = state_56993__$1;
(statearr_57129_59887[(2)] = inst_56955);

(statearr_57129_59887[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56994 === (16))){
var state_56993__$1 = state_56993;
var statearr_57132_59888 = state_56993__$1;
(statearr_57132_59888[(2)] = true);

(statearr_57132_59888[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56994 === (38))){
var inst_56981 = (state_56993[(2)]);
var state_56993__$1 = state_56993;
var statearr_57133_59889 = state_56993__$1;
(statearr_57133_59889[(2)] = inst_56981);

(statearr_57133_59889[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56994 === (30))){
var inst_56947 = (state_56993[(9)]);
var inst_56938 = (state_56993[(11)]);
var inst_56939 = (state_56993[(13)]);
var inst_56968 = cljs.core.empty_QMARK_(inst_56938);
var inst_56969 = (inst_56939.cljs$core$IFn$_invoke$arity$1 ? inst_56939.cljs$core$IFn$_invoke$arity$1(inst_56947) : inst_56939.call(null,inst_56947));
var inst_56970 = cljs.core.not(inst_56969);
var inst_56971 = ((inst_56968) && (inst_56970));
var state_56993__$1 = state_56993;
var statearr_57134_59890 = state_56993__$1;
(statearr_57134_59890[(2)] = inst_56971);

(statearr_57134_59890[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56994 === (10))){
var inst_56873 = (state_56993[(8)]);
var inst_56902 = (state_56993[(2)]);
var inst_56903 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_56902,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_56904 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_56902,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_56905 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_56902,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_56906 = inst_56873;
var state_56993__$1 = (function (){var statearr_57135 = state_56993;
(statearr_57135[(16)] = inst_56904);

(statearr_57135[(17)] = inst_56905);

(statearr_57135[(18)] = inst_56903);

(statearr_57135[(7)] = inst_56906);

return statearr_57135;
})();
var statearr_57138_59894 = state_56993__$1;
(statearr_57138_59894[(2)] = null);

(statearr_57138_59894[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56994 === (18))){
var inst_56925 = (state_56993[(2)]);
var state_56993__$1 = state_56993;
var statearr_57144_59899 = state_56993__$1;
(statearr_57144_59899[(2)] = inst_56925);

(statearr_57144_59899[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56994 === (37))){
var state_56993__$1 = state_56993;
var statearr_57145_59900 = state_56993__$1;
(statearr_57145_59900[(2)] = null);

(statearr_57145_59900[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56994 === (8))){
var inst_56873 = (state_56993[(8)]);
var inst_56899 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_56873);
var state_56993__$1 = state_56993;
var statearr_57150_59901 = state_56993__$1;
(statearr_57150_59901[(2)] = inst_56899);

(statearr_57150_59901[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__54152__auto__ = null;
var cljs$core$async$mix_$_state_machine__54152__auto____0 = (function (){
var statearr_57156 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57156[(0)] = cljs$core$async$mix_$_state_machine__54152__auto__);

(statearr_57156[(1)] = (1));

return statearr_57156;
});
var cljs$core$async$mix_$_state_machine__54152__auto____1 = (function (state_56993){
while(true){
var ret_value__54153__auto__ = (function (){try{while(true){
var result__54154__auto__ = switch__54151__auto__(state_56993);
if(cljs.core.keyword_identical_QMARK_(result__54154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54154__auto__;
}
break;
}
}catch (e57157){var ex__54155__auto__ = e57157;
var statearr_57160_59908 = state_56993;
(statearr_57160_59908[(2)] = ex__54155__auto__);


if(cljs.core.seq((state_56993[(4)]))){
var statearr_57161_59909 = state_56993;
(statearr_57161_59909[(1)] = cljs.core.first((state_56993[(4)])));

} else {
throw ex__54155__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59911 = state_56993;
state_56993 = G__59911;
continue;
} else {
return ret_value__54153__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__54152__auto__ = function(state_56993){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__54152__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__54152__auto____1.call(this,state_56993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__54152__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__54152__auto____0;
cljs$core$async$mix_$_state_machine__54152__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__54152__auto____1;
return cljs$core$async$mix_$_state_machine__54152__auto__;
})()
})();
var state__54434__auto__ = (function (){var statearr_57162 = f__54433__auto__();
(statearr_57162[(6)] = c__54431__auto___59799);

return statearr_57162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54434__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_59924 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_59924(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_59932 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_59932(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_59938 = (function() {
var G__59940 = null;
var G__59940__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__59940__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__59940 = function(p,v){
switch(arguments.length){
case 1:
return G__59940__1.call(this,p);
case 2:
return G__59940__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__59940.cljs$core$IFn$_invoke$arity$1 = G__59940__1;
G__59940.cljs$core$IFn$_invoke$arity$2 = G__59940__2;
return G__59940;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__57185 = arguments.length;
switch (G__57185) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_59938(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_59938(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__57194 = arguments.length;
switch (G__57194) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__57187_SHARP_){
if(cljs.core.truth_((p1__57187_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__57187_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__57187_SHARP_.call(null,topic)))){
return p1__57187_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__57187_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57200 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57200 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta57201){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta57201 = meta57201;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57200.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57202,meta57201__$1){
var self__ = this;
var _57202__$1 = this;
return (new cljs.core.async.t_cljs$core$async57200(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta57201__$1));
}));

(cljs.core.async.t_cljs$core$async57200.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57202){
var self__ = this;
var _57202__$1 = this;
return self__.meta57201;
}));

(cljs.core.async.t_cljs$core$async57200.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57200.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async57200.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57200.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async57200.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async57200.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async57200.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async57200.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta57201","meta57201",729907356,null)], null);
}));

(cljs.core.async.t_cljs$core$async57200.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57200.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57200");

(cljs.core.async.t_cljs$core$async57200.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async57200");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57200.
 */
cljs.core.async.__GT_t_cljs$core$async57200 = (function cljs$core$async$__GT_t_cljs$core$async57200(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta57201){
return (new cljs.core.async.t_cljs$core$async57200(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta57201));
});

}

return (new cljs.core.async.t_cljs$core$async57200(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__54431__auto___59963 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54433__auto__ = (function (){var switch__54151__auto__ = (function (state_57336){
var state_val_57337 = (state_57336[(1)]);
if((state_val_57337 === (7))){
var inst_57323 = (state_57336[(2)]);
var state_57336__$1 = state_57336;
var statearr_57343_59971 = state_57336__$1;
(statearr_57343_59971[(2)] = inst_57323);

(statearr_57343_59971[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57337 === (20))){
var state_57336__$1 = state_57336;
var statearr_57344_59972 = state_57336__$1;
(statearr_57344_59972[(2)] = null);

(statearr_57344_59972[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57337 === (1))){
var state_57336__$1 = state_57336;
var statearr_57354_59974 = state_57336__$1;
(statearr_57354_59974[(2)] = null);

(statearr_57354_59974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57337 === (24))){
var inst_57290 = (state_57336[(7)]);
var inst_57311 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_57290);
var state_57336__$1 = state_57336;
var statearr_57363_59978 = state_57336__$1;
(statearr_57363_59978[(2)] = inst_57311);

(statearr_57363_59978[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57337 === (4))){
var inst_57238 = (state_57336[(8)]);
var inst_57238__$1 = (state_57336[(2)]);
var inst_57240 = (inst_57238__$1 == null);
var state_57336__$1 = (function (){var statearr_57372 = state_57336;
(statearr_57372[(8)] = inst_57238__$1);

return statearr_57372;
})();
if(cljs.core.truth_(inst_57240)){
var statearr_57373_59983 = state_57336__$1;
(statearr_57373_59983[(1)] = (5));

} else {
var statearr_57374_59984 = state_57336__$1;
(statearr_57374_59984[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57337 === (15))){
var inst_57284 = (state_57336[(2)]);
var state_57336__$1 = state_57336;
var statearr_57380_59990 = state_57336__$1;
(statearr_57380_59990[(2)] = inst_57284);

(statearr_57380_59990[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57337 === (21))){
var inst_57320 = (state_57336[(2)]);
var state_57336__$1 = (function (){var statearr_57387 = state_57336;
(statearr_57387[(9)] = inst_57320);

return statearr_57387;
})();
var statearr_57389_59992 = state_57336__$1;
(statearr_57389_59992[(2)] = null);

(statearr_57389_59992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57337 === (13))){
var inst_57265 = (state_57336[(10)]);
var inst_57268 = cljs.core.chunked_seq_QMARK_(inst_57265);
var state_57336__$1 = state_57336;
if(inst_57268){
var statearr_57401_59995 = state_57336__$1;
(statearr_57401_59995[(1)] = (16));

} else {
var statearr_57402_59998 = state_57336__$1;
(statearr_57402_59998[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57337 === (22))){
var inst_57306 = (state_57336[(2)]);
var state_57336__$1 = state_57336;
if(cljs.core.truth_(inst_57306)){
var statearr_57405_60003 = state_57336__$1;
(statearr_57405_60003[(1)] = (23));

} else {
var statearr_57406_60004 = state_57336__$1;
(statearr_57406_60004[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57337 === (6))){
var inst_57238 = (state_57336[(8)]);
var inst_57292 = (state_57336[(11)]);
var inst_57290 = (state_57336[(7)]);
var inst_57290__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_57238) : topic_fn.call(null,inst_57238));
var inst_57291 = cljs.core.deref(mults);
var inst_57292__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57291,inst_57290__$1);
var state_57336__$1 = (function (){var statearr_57408 = state_57336;
(statearr_57408[(11)] = inst_57292__$1);

(statearr_57408[(7)] = inst_57290__$1);

return statearr_57408;
})();
if(cljs.core.truth_(inst_57292__$1)){
var statearr_57410_60010 = state_57336__$1;
(statearr_57410_60010[(1)] = (19));

} else {
var statearr_57411_60011 = state_57336__$1;
(statearr_57411_60011[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57337 === (25))){
var inst_57313 = (state_57336[(2)]);
var state_57336__$1 = state_57336;
var statearr_57413_60013 = state_57336__$1;
(statearr_57413_60013[(2)] = inst_57313);

(statearr_57413_60013[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57337 === (17))){
var inst_57265 = (state_57336[(10)]);
var inst_57275 = cljs.core.first(inst_57265);
var inst_57276 = cljs.core.async.muxch_STAR_(inst_57275);
var inst_57277 = cljs.core.async.close_BANG_(inst_57276);
var inst_57278 = cljs.core.next(inst_57265);
var inst_57249 = inst_57278;
var inst_57250 = null;
var inst_57251 = (0);
var inst_57252 = (0);
var state_57336__$1 = (function (){var statearr_57415 = state_57336;
(statearr_57415[(12)] = inst_57251);

(statearr_57415[(13)] = inst_57252);

(statearr_57415[(14)] = inst_57250);

(statearr_57415[(15)] = inst_57277);

(statearr_57415[(16)] = inst_57249);

return statearr_57415;
})();
var statearr_57416_60018 = state_57336__$1;
(statearr_57416_60018[(2)] = null);

(statearr_57416_60018[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57337 === (3))){
var inst_57325 = (state_57336[(2)]);
var state_57336__$1 = state_57336;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57336__$1,inst_57325);
} else {
if((state_val_57337 === (12))){
var inst_57286 = (state_57336[(2)]);
var state_57336__$1 = state_57336;
var statearr_57420_60019 = state_57336__$1;
(statearr_57420_60019[(2)] = inst_57286);

(statearr_57420_60019[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57337 === (2))){
var state_57336__$1 = state_57336;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57336__$1,(4),ch);
} else {
if((state_val_57337 === (23))){
var state_57336__$1 = state_57336;
var statearr_57423_60020 = state_57336__$1;
(statearr_57423_60020[(2)] = null);

(statearr_57423_60020[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57337 === (19))){
var inst_57238 = (state_57336[(8)]);
var inst_57292 = (state_57336[(11)]);
var inst_57304 = cljs.core.async.muxch_STAR_(inst_57292);
var state_57336__$1 = state_57336;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57336__$1,(22),inst_57304,inst_57238);
} else {
if((state_val_57337 === (11))){
var inst_57265 = (state_57336[(10)]);
var inst_57249 = (state_57336[(16)]);
var inst_57265__$1 = cljs.core.seq(inst_57249);
var state_57336__$1 = (function (){var statearr_57427 = state_57336;
(statearr_57427[(10)] = inst_57265__$1);

return statearr_57427;
})();
if(inst_57265__$1){
var statearr_57429_60026 = state_57336__$1;
(statearr_57429_60026[(1)] = (13));

} else {
var statearr_57430_60028 = state_57336__$1;
(statearr_57430_60028[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57337 === (9))){
var inst_57288 = (state_57336[(2)]);
var state_57336__$1 = state_57336;
var statearr_57431_60029 = state_57336__$1;
(statearr_57431_60029[(2)] = inst_57288);

(statearr_57431_60029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57337 === (5))){
var inst_57246 = cljs.core.deref(mults);
var inst_57247 = cljs.core.vals(inst_57246);
var inst_57248 = cljs.core.seq(inst_57247);
var inst_57249 = inst_57248;
var inst_57250 = null;
var inst_57251 = (0);
var inst_57252 = (0);
var state_57336__$1 = (function (){var statearr_57435 = state_57336;
(statearr_57435[(12)] = inst_57251);

(statearr_57435[(13)] = inst_57252);

(statearr_57435[(14)] = inst_57250);

(statearr_57435[(16)] = inst_57249);

return statearr_57435;
})();
var statearr_57443_60030 = state_57336__$1;
(statearr_57443_60030[(2)] = null);

(statearr_57443_60030[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57337 === (14))){
var state_57336__$1 = state_57336;
var statearr_57452_60031 = state_57336__$1;
(statearr_57452_60031[(2)] = null);

(statearr_57452_60031[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57337 === (16))){
var inst_57265 = (state_57336[(10)]);
var inst_57270 = cljs.core.chunk_first(inst_57265);
var inst_57271 = cljs.core.chunk_rest(inst_57265);
var inst_57272 = cljs.core.count(inst_57270);
var inst_57249 = inst_57271;
var inst_57250 = inst_57270;
var inst_57251 = inst_57272;
var inst_57252 = (0);
var state_57336__$1 = (function (){var statearr_57457 = state_57336;
(statearr_57457[(12)] = inst_57251);

(statearr_57457[(13)] = inst_57252);

(statearr_57457[(14)] = inst_57250);

(statearr_57457[(16)] = inst_57249);

return statearr_57457;
})();
var statearr_57458_60045 = state_57336__$1;
(statearr_57458_60045[(2)] = null);

(statearr_57458_60045[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57337 === (10))){
var inst_57251 = (state_57336[(12)]);
var inst_57252 = (state_57336[(13)]);
var inst_57250 = (state_57336[(14)]);
var inst_57249 = (state_57336[(16)]);
var inst_57257 = cljs.core._nth(inst_57250,inst_57252);
var inst_57260 = cljs.core.async.muxch_STAR_(inst_57257);
var inst_57261 = cljs.core.async.close_BANG_(inst_57260);
var inst_57262 = (inst_57252 + (1));
var tmp57448 = inst_57251;
var tmp57449 = inst_57250;
var tmp57450 = inst_57249;
var inst_57249__$1 = tmp57450;
var inst_57250__$1 = tmp57449;
var inst_57251__$1 = tmp57448;
var inst_57252__$1 = inst_57262;
var state_57336__$1 = (function (){var statearr_57460 = state_57336;
(statearr_57460[(12)] = inst_57251__$1);

(statearr_57460[(13)] = inst_57252__$1);

(statearr_57460[(14)] = inst_57250__$1);

(statearr_57460[(17)] = inst_57261);

(statearr_57460[(16)] = inst_57249__$1);

return statearr_57460;
})();
var statearr_57461_60048 = state_57336__$1;
(statearr_57461_60048[(2)] = null);

(statearr_57461_60048[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57337 === (18))){
var inst_57281 = (state_57336[(2)]);
var state_57336__$1 = state_57336;
var statearr_57462_60049 = state_57336__$1;
(statearr_57462_60049[(2)] = inst_57281);

(statearr_57462_60049[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57337 === (8))){
var inst_57251 = (state_57336[(12)]);
var inst_57252 = (state_57336[(13)]);
var inst_57254 = (inst_57252 < inst_57251);
var inst_57255 = inst_57254;
var state_57336__$1 = state_57336;
if(cljs.core.truth_(inst_57255)){
var statearr_57466_60052 = state_57336__$1;
(statearr_57466_60052[(1)] = (10));

} else {
var statearr_57467_60053 = state_57336__$1;
(statearr_57467_60053[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__54152__auto__ = null;
var cljs$core$async$state_machine__54152__auto____0 = (function (){
var statearr_57469 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57469[(0)] = cljs$core$async$state_machine__54152__auto__);

(statearr_57469[(1)] = (1));

return statearr_57469;
});
var cljs$core$async$state_machine__54152__auto____1 = (function (state_57336){
while(true){
var ret_value__54153__auto__ = (function (){try{while(true){
var result__54154__auto__ = switch__54151__auto__(state_57336);
if(cljs.core.keyword_identical_QMARK_(result__54154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54154__auto__;
}
break;
}
}catch (e57471){var ex__54155__auto__ = e57471;
var statearr_57472_60055 = state_57336;
(statearr_57472_60055[(2)] = ex__54155__auto__);


if(cljs.core.seq((state_57336[(4)]))){
var statearr_57476_60056 = state_57336;
(statearr_57476_60056[(1)] = cljs.core.first((state_57336[(4)])));

} else {
throw ex__54155__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60061 = state_57336;
state_57336 = G__60061;
continue;
} else {
return ret_value__54153__auto__;
}
break;
}
});
cljs$core$async$state_machine__54152__auto__ = function(state_57336){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54152__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54152__auto____1.call(this,state_57336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54152__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54152__auto____0;
cljs$core$async$state_machine__54152__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54152__auto____1;
return cljs$core$async$state_machine__54152__auto__;
})()
})();
var state__54434__auto__ = (function (){var statearr_57481 = f__54433__auto__();
(statearr_57481[(6)] = c__54431__auto___59963);

return statearr_57481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54434__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__57498 = arguments.length;
switch (G__57498) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__57550 = arguments.length;
switch (G__57550) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__57557 = arguments.length;
switch (G__57557) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__54431__auto___60078 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54433__auto__ = (function (){var switch__54151__auto__ = (function (state_57616){
var state_val_57617 = (state_57616[(1)]);
if((state_val_57617 === (7))){
var state_57616__$1 = state_57616;
var statearr_57619_60079 = state_57616__$1;
(statearr_57619_60079[(2)] = null);

(statearr_57619_60079[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57617 === (1))){
var state_57616__$1 = state_57616;
var statearr_57620_60080 = state_57616__$1;
(statearr_57620_60080[(2)] = null);

(statearr_57620_60080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57617 === (4))){
var inst_57566 = (state_57616[(7)]);
var inst_57567 = (state_57616[(8)]);
var inst_57570 = (inst_57567 < inst_57566);
var state_57616__$1 = state_57616;
if(cljs.core.truth_(inst_57570)){
var statearr_57621_60084 = state_57616__$1;
(statearr_57621_60084[(1)] = (6));

} else {
var statearr_57622_60088 = state_57616__$1;
(statearr_57622_60088[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57617 === (15))){
var inst_57599 = (state_57616[(9)]);
var inst_57605 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_57599);
var state_57616__$1 = state_57616;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57616__$1,(17),out,inst_57605);
} else {
if((state_val_57617 === (13))){
var inst_57599 = (state_57616[(9)]);
var inst_57599__$1 = (state_57616[(2)]);
var inst_57600 = cljs.core.some(cljs.core.nil_QMARK_,inst_57599__$1);
var state_57616__$1 = (function (){var statearr_57623 = state_57616;
(statearr_57623[(9)] = inst_57599__$1);

return statearr_57623;
})();
if(cljs.core.truth_(inst_57600)){
var statearr_57625_60090 = state_57616__$1;
(statearr_57625_60090[(1)] = (14));

} else {
var statearr_57626_60091 = state_57616__$1;
(statearr_57626_60091[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57617 === (6))){
var state_57616__$1 = state_57616;
var statearr_57627_60093 = state_57616__$1;
(statearr_57627_60093[(2)] = null);

(statearr_57627_60093[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57617 === (17))){
var inst_57607 = (state_57616[(2)]);
var state_57616__$1 = (function (){var statearr_57632 = state_57616;
(statearr_57632[(10)] = inst_57607);

return statearr_57632;
})();
var statearr_57633_60097 = state_57616__$1;
(statearr_57633_60097[(2)] = null);

(statearr_57633_60097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57617 === (3))){
var inst_57612 = (state_57616[(2)]);
var state_57616__$1 = state_57616;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57616__$1,inst_57612);
} else {
if((state_val_57617 === (12))){
var _ = (function (){var statearr_57638 = state_57616;
(statearr_57638[(4)] = cljs.core.rest((state_57616[(4)])));

return statearr_57638;
})();
var state_57616__$1 = state_57616;
var ex57630 = (state_57616__$1[(2)]);
var statearr_57640_60099 = state_57616__$1;
(statearr_57640_60099[(5)] = ex57630);


if((ex57630 instanceof Object)){
var statearr_57641_60100 = state_57616__$1;
(statearr_57641_60100[(1)] = (11));

(statearr_57641_60100[(5)] = null);

} else {
throw ex57630;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57617 === (2))){
var inst_57565 = cljs.core.reset_BANG_(dctr,cnt);
var inst_57566 = cnt;
var inst_57567 = (0);
var state_57616__$1 = (function (){var statearr_57651 = state_57616;
(statearr_57651[(7)] = inst_57566);

(statearr_57651[(11)] = inst_57565);

(statearr_57651[(8)] = inst_57567);

return statearr_57651;
})();
var statearr_57652_60103 = state_57616__$1;
(statearr_57652_60103[(2)] = null);

(statearr_57652_60103[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57617 === (11))){
var inst_57577 = (state_57616[(2)]);
var inst_57578 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_57616__$1 = (function (){var statearr_57654 = state_57616;
(statearr_57654[(12)] = inst_57577);

return statearr_57654;
})();
var statearr_57656_60106 = state_57616__$1;
(statearr_57656_60106[(2)] = inst_57578);

(statearr_57656_60106[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57617 === (9))){
var inst_57567 = (state_57616[(8)]);
var _ = (function (){var statearr_57661 = state_57616;
(statearr_57661[(4)] = cljs.core.cons((12),(state_57616[(4)])));

return statearr_57661;
})();
var inst_57584 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_57567) : chs__$1.call(null,inst_57567));
var inst_57585 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_57567) : done.call(null,inst_57567));
var inst_57586 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_57584,inst_57585);
var ___$1 = (function (){var statearr_57662 = state_57616;
(statearr_57662[(4)] = cljs.core.rest((state_57616[(4)])));

return statearr_57662;
})();
var state_57616__$1 = state_57616;
var statearr_57663_60114 = state_57616__$1;
(statearr_57663_60114[(2)] = inst_57586);

(statearr_57663_60114[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57617 === (5))){
var inst_57597 = (state_57616[(2)]);
var state_57616__$1 = (function (){var statearr_57664 = state_57616;
(statearr_57664[(13)] = inst_57597);

return statearr_57664;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57616__$1,(13),dchan);
} else {
if((state_val_57617 === (14))){
var inst_57603 = cljs.core.async.close_BANG_(out);
var state_57616__$1 = state_57616;
var statearr_57667_60120 = state_57616__$1;
(statearr_57667_60120[(2)] = inst_57603);

(statearr_57667_60120[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57617 === (16))){
var inst_57610 = (state_57616[(2)]);
var state_57616__$1 = state_57616;
var statearr_57670_60122 = state_57616__$1;
(statearr_57670_60122[(2)] = inst_57610);

(statearr_57670_60122[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57617 === (10))){
var inst_57567 = (state_57616[(8)]);
var inst_57590 = (state_57616[(2)]);
var inst_57591 = (inst_57567 + (1));
var inst_57567__$1 = inst_57591;
var state_57616__$1 = (function (){var statearr_57673 = state_57616;
(statearr_57673[(8)] = inst_57567__$1);

(statearr_57673[(14)] = inst_57590);

return statearr_57673;
})();
var statearr_57674_60124 = state_57616__$1;
(statearr_57674_60124[(2)] = null);

(statearr_57674_60124[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57617 === (8))){
var inst_57595 = (state_57616[(2)]);
var state_57616__$1 = state_57616;
var statearr_57675_60127 = state_57616__$1;
(statearr_57675_60127[(2)] = inst_57595);

(statearr_57675_60127[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__54152__auto__ = null;
var cljs$core$async$state_machine__54152__auto____0 = (function (){
var statearr_57680 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57680[(0)] = cljs$core$async$state_machine__54152__auto__);

(statearr_57680[(1)] = (1));

return statearr_57680;
});
var cljs$core$async$state_machine__54152__auto____1 = (function (state_57616){
while(true){
var ret_value__54153__auto__ = (function (){try{while(true){
var result__54154__auto__ = switch__54151__auto__(state_57616);
if(cljs.core.keyword_identical_QMARK_(result__54154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54154__auto__;
}
break;
}
}catch (e57681){var ex__54155__auto__ = e57681;
var statearr_57682_60129 = state_57616;
(statearr_57682_60129[(2)] = ex__54155__auto__);


if(cljs.core.seq((state_57616[(4)]))){
var statearr_57683_60130 = state_57616;
(statearr_57683_60130[(1)] = cljs.core.first((state_57616[(4)])));

} else {
throw ex__54155__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60131 = state_57616;
state_57616 = G__60131;
continue;
} else {
return ret_value__54153__auto__;
}
break;
}
});
cljs$core$async$state_machine__54152__auto__ = function(state_57616){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54152__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54152__auto____1.call(this,state_57616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54152__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54152__auto____0;
cljs$core$async$state_machine__54152__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54152__auto____1;
return cljs$core$async$state_machine__54152__auto__;
})()
})();
var state__54434__auto__ = (function (){var statearr_57684 = f__54433__auto__();
(statearr_57684[(6)] = c__54431__auto___60078);

return statearr_57684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54434__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__57691 = arguments.length;
switch (G__57691) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__54431__auto___60142 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54433__auto__ = (function (){var switch__54151__auto__ = (function (state_57732){
var state_val_57733 = (state_57732[(1)]);
if((state_val_57733 === (7))){
var inst_57711 = (state_57732[(7)]);
var inst_57712 = (state_57732[(8)]);
var inst_57711__$1 = (state_57732[(2)]);
var inst_57712__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57711__$1,(0),null);
var inst_57713 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57711__$1,(1),null);
var inst_57714 = (inst_57712__$1 == null);
var state_57732__$1 = (function (){var statearr_57740 = state_57732;
(statearr_57740[(7)] = inst_57711__$1);

(statearr_57740[(8)] = inst_57712__$1);

(statearr_57740[(9)] = inst_57713);

return statearr_57740;
})();
if(cljs.core.truth_(inst_57714)){
var statearr_57742_60143 = state_57732__$1;
(statearr_57742_60143[(1)] = (8));

} else {
var statearr_57743_60144 = state_57732__$1;
(statearr_57743_60144[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57733 === (1))){
var inst_57700 = cljs.core.vec(chs);
var inst_57701 = inst_57700;
var state_57732__$1 = (function (){var statearr_57745 = state_57732;
(statearr_57745[(10)] = inst_57701);

return statearr_57745;
})();
var statearr_57746_60149 = state_57732__$1;
(statearr_57746_60149[(2)] = null);

(statearr_57746_60149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57733 === (4))){
var inst_57701 = (state_57732[(10)]);
var state_57732__$1 = state_57732;
return cljs.core.async.ioc_alts_BANG_(state_57732__$1,(7),inst_57701);
} else {
if((state_val_57733 === (6))){
var inst_57728 = (state_57732[(2)]);
var state_57732__$1 = state_57732;
var statearr_57750_60153 = state_57732__$1;
(statearr_57750_60153[(2)] = inst_57728);

(statearr_57750_60153[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57733 === (3))){
var inst_57730 = (state_57732[(2)]);
var state_57732__$1 = state_57732;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57732__$1,inst_57730);
} else {
if((state_val_57733 === (2))){
var inst_57701 = (state_57732[(10)]);
var inst_57704 = cljs.core.count(inst_57701);
var inst_57705 = (inst_57704 > (0));
var state_57732__$1 = state_57732;
if(cljs.core.truth_(inst_57705)){
var statearr_57756_60157 = state_57732__$1;
(statearr_57756_60157[(1)] = (4));

} else {
var statearr_57757_60158 = state_57732__$1;
(statearr_57757_60158[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57733 === (11))){
var inst_57701 = (state_57732[(10)]);
var inst_57721 = (state_57732[(2)]);
var tmp57751 = inst_57701;
var inst_57701__$1 = tmp57751;
var state_57732__$1 = (function (){var statearr_57762 = state_57732;
(statearr_57762[(10)] = inst_57701__$1);

(statearr_57762[(11)] = inst_57721);

return statearr_57762;
})();
var statearr_57771_60161 = state_57732__$1;
(statearr_57771_60161[(2)] = null);

(statearr_57771_60161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57733 === (9))){
var inst_57712 = (state_57732[(8)]);
var state_57732__$1 = state_57732;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57732__$1,(11),out,inst_57712);
} else {
if((state_val_57733 === (5))){
var inst_57726 = cljs.core.async.close_BANG_(out);
var state_57732__$1 = state_57732;
var statearr_57781_60163 = state_57732__$1;
(statearr_57781_60163[(2)] = inst_57726);

(statearr_57781_60163[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57733 === (10))){
var inst_57724 = (state_57732[(2)]);
var state_57732__$1 = state_57732;
var statearr_57782_60165 = state_57732__$1;
(statearr_57782_60165[(2)] = inst_57724);

(statearr_57782_60165[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57733 === (8))){
var inst_57711 = (state_57732[(7)]);
var inst_57712 = (state_57732[(8)]);
var inst_57701 = (state_57732[(10)]);
var inst_57713 = (state_57732[(9)]);
var inst_57716 = (function (){var cs = inst_57701;
var vec__57707 = inst_57711;
var v = inst_57712;
var c = inst_57713;
return (function (p1__57689_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__57689_SHARP_);
});
})();
var inst_57717 = cljs.core.filterv(inst_57716,inst_57701);
var inst_57701__$1 = inst_57717;
var state_57732__$1 = (function (){var statearr_57792 = state_57732;
(statearr_57792[(10)] = inst_57701__$1);

return statearr_57792;
})();
var statearr_57794_60169 = state_57732__$1;
(statearr_57794_60169[(2)] = null);

(statearr_57794_60169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__54152__auto__ = null;
var cljs$core$async$state_machine__54152__auto____0 = (function (){
var statearr_57798 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57798[(0)] = cljs$core$async$state_machine__54152__auto__);

(statearr_57798[(1)] = (1));

return statearr_57798;
});
var cljs$core$async$state_machine__54152__auto____1 = (function (state_57732){
while(true){
var ret_value__54153__auto__ = (function (){try{while(true){
var result__54154__auto__ = switch__54151__auto__(state_57732);
if(cljs.core.keyword_identical_QMARK_(result__54154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54154__auto__;
}
break;
}
}catch (e57804){var ex__54155__auto__ = e57804;
var statearr_57805_60174 = state_57732;
(statearr_57805_60174[(2)] = ex__54155__auto__);


if(cljs.core.seq((state_57732[(4)]))){
var statearr_57806_60176 = state_57732;
(statearr_57806_60176[(1)] = cljs.core.first((state_57732[(4)])));

} else {
throw ex__54155__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60179 = state_57732;
state_57732 = G__60179;
continue;
} else {
return ret_value__54153__auto__;
}
break;
}
});
cljs$core$async$state_machine__54152__auto__ = function(state_57732){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54152__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54152__auto____1.call(this,state_57732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54152__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54152__auto____0;
cljs$core$async$state_machine__54152__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54152__auto____1;
return cljs$core$async$state_machine__54152__auto__;
})()
})();
var state__54434__auto__ = (function (){var statearr_57810 = f__54433__auto__();
(statearr_57810[(6)] = c__54431__auto___60142);

return statearr_57810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54434__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__57832 = arguments.length;
switch (G__57832) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__54431__auto___60187 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54433__auto__ = (function (){var switch__54151__auto__ = (function (state_57874){
var state_val_57875 = (state_57874[(1)]);
if((state_val_57875 === (7))){
var inst_57855 = (state_57874[(7)]);
var inst_57855__$1 = (state_57874[(2)]);
var inst_57856 = (inst_57855__$1 == null);
var inst_57857 = cljs.core.not(inst_57856);
var state_57874__$1 = (function (){var statearr_57881 = state_57874;
(statearr_57881[(7)] = inst_57855__$1);

return statearr_57881;
})();
if(inst_57857){
var statearr_57882_60191 = state_57874__$1;
(statearr_57882_60191[(1)] = (8));

} else {
var statearr_57883_60193 = state_57874__$1;
(statearr_57883_60193[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57875 === (1))){
var inst_57845 = (0);
var state_57874__$1 = (function (){var statearr_57884 = state_57874;
(statearr_57884[(8)] = inst_57845);

return statearr_57884;
})();
var statearr_57885_60194 = state_57874__$1;
(statearr_57885_60194[(2)] = null);

(statearr_57885_60194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57875 === (4))){
var state_57874__$1 = state_57874;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57874__$1,(7),ch);
} else {
if((state_val_57875 === (6))){
var inst_57868 = (state_57874[(2)]);
var state_57874__$1 = state_57874;
var statearr_57891_60203 = state_57874__$1;
(statearr_57891_60203[(2)] = inst_57868);

(statearr_57891_60203[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57875 === (3))){
var inst_57871 = (state_57874[(2)]);
var inst_57872 = cljs.core.async.close_BANG_(out);
var state_57874__$1 = (function (){var statearr_57892 = state_57874;
(statearr_57892[(9)] = inst_57871);

return statearr_57892;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_57874__$1,inst_57872);
} else {
if((state_val_57875 === (2))){
var inst_57845 = (state_57874[(8)]);
var inst_57848 = (inst_57845 < n);
var state_57874__$1 = state_57874;
if(cljs.core.truth_(inst_57848)){
var statearr_57899_60209 = state_57874__$1;
(statearr_57899_60209[(1)] = (4));

} else {
var statearr_57900_60210 = state_57874__$1;
(statearr_57900_60210[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57875 === (11))){
var inst_57845 = (state_57874[(8)]);
var inst_57860 = (state_57874[(2)]);
var inst_57861 = (inst_57845 + (1));
var inst_57845__$1 = inst_57861;
var state_57874__$1 = (function (){var statearr_57905 = state_57874;
(statearr_57905[(10)] = inst_57860);

(statearr_57905[(8)] = inst_57845__$1);

return statearr_57905;
})();
var statearr_57906_60211 = state_57874__$1;
(statearr_57906_60211[(2)] = null);

(statearr_57906_60211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57875 === (9))){
var state_57874__$1 = state_57874;
var statearr_57911_60213 = state_57874__$1;
(statearr_57911_60213[(2)] = null);

(statearr_57911_60213[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57875 === (5))){
var state_57874__$1 = state_57874;
var statearr_57920_60214 = state_57874__$1;
(statearr_57920_60214[(2)] = null);

(statearr_57920_60214[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57875 === (10))){
var inst_57865 = (state_57874[(2)]);
var state_57874__$1 = state_57874;
var statearr_57926_60219 = state_57874__$1;
(statearr_57926_60219[(2)] = inst_57865);

(statearr_57926_60219[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57875 === (8))){
var inst_57855 = (state_57874[(7)]);
var state_57874__$1 = state_57874;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57874__$1,(11),out,inst_57855);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__54152__auto__ = null;
var cljs$core$async$state_machine__54152__auto____0 = (function (){
var statearr_57934 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_57934[(0)] = cljs$core$async$state_machine__54152__auto__);

(statearr_57934[(1)] = (1));

return statearr_57934;
});
var cljs$core$async$state_machine__54152__auto____1 = (function (state_57874){
while(true){
var ret_value__54153__auto__ = (function (){try{while(true){
var result__54154__auto__ = switch__54151__auto__(state_57874);
if(cljs.core.keyword_identical_QMARK_(result__54154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54154__auto__;
}
break;
}
}catch (e57940){var ex__54155__auto__ = e57940;
var statearr_57941_60224 = state_57874;
(statearr_57941_60224[(2)] = ex__54155__auto__);


if(cljs.core.seq((state_57874[(4)]))){
var statearr_57942_60225 = state_57874;
(statearr_57942_60225[(1)] = cljs.core.first((state_57874[(4)])));

} else {
throw ex__54155__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60226 = state_57874;
state_57874 = G__60226;
continue;
} else {
return ret_value__54153__auto__;
}
break;
}
});
cljs$core$async$state_machine__54152__auto__ = function(state_57874){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54152__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54152__auto____1.call(this,state_57874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54152__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54152__auto____0;
cljs$core$async$state_machine__54152__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54152__auto____1;
return cljs$core$async$state_machine__54152__auto__;
})()
})();
var state__54434__auto__ = (function (){var statearr_57950 = f__54433__auto__();
(statearr_57950[(6)] = c__54431__auto___60187);

return statearr_57950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54434__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57958 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57958 = (function (f,ch,meta57959){
this.f = f;
this.ch = ch;
this.meta57959 = meta57959;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57958.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57960,meta57959__$1){
var self__ = this;
var _57960__$1 = this;
return (new cljs.core.async.t_cljs$core$async57958(self__.f,self__.ch,meta57959__$1));
}));

(cljs.core.async.t_cljs$core$async57958.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57960){
var self__ = this;
var _57960__$1 = this;
return self__.meta57959;
}));

(cljs.core.async.t_cljs$core$async57958.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57958.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async57958.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async57958.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57958.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57991 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57991 = (function (f,ch,meta57959,_,fn1,meta57992){
this.f = f;
this.ch = ch;
this.meta57959 = meta57959;
this._ = _;
this.fn1 = fn1;
this.meta57992 = meta57992;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57991.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57993,meta57992__$1){
var self__ = this;
var _57993__$1 = this;
return (new cljs.core.async.t_cljs$core$async57991(self__.f,self__.ch,self__.meta57959,self__._,self__.fn1,meta57992__$1));
}));

(cljs.core.async.t_cljs$core$async57991.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57993){
var self__ = this;
var _57993__$1 = this;
return self__.meta57992;
}));

(cljs.core.async.t_cljs$core$async57991.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57991.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async57991.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async57991.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__57953_SHARP_){
var G__58008 = (((p1__57953_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__57953_SHARP_) : self__.f.call(null,p1__57953_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__58008) : f1.call(null,G__58008));
});
}));

(cljs.core.async.t_cljs$core$async57991.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta57959","meta57959",-1223356212,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async57958","cljs.core.async/t_cljs$core$async57958",340320553,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta57992","meta57992",-1427426920,null)], null);
}));

(cljs.core.async.t_cljs$core$async57991.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57991.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57991");

(cljs.core.async.t_cljs$core$async57991.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async57991");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57991.
 */
cljs.core.async.__GT_t_cljs$core$async57991 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async57991(f__$1,ch__$1,meta57959__$1,___$2,fn1__$1,meta57992){
return (new cljs.core.async.t_cljs$core$async57991(f__$1,ch__$1,meta57959__$1,___$2,fn1__$1,meta57992));
});

}

return (new cljs.core.async.t_cljs$core$async57991(self__.f,self__.ch,self__.meta57959,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__58055 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__58055) : self__.f.call(null,G__58055));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async57958.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57958.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async57958.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta57959","meta57959",-1223356212,null)], null);
}));

(cljs.core.async.t_cljs$core$async57958.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57958.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57958");

(cljs.core.async.t_cljs$core$async57958.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async57958");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57958.
 */
cljs.core.async.__GT_t_cljs$core$async57958 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async57958(f__$1,ch__$1,meta57959){
return (new cljs.core.async.t_cljs$core$async57958(f__$1,ch__$1,meta57959));
});

}

return (new cljs.core.async.t_cljs$core$async57958(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58073 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58073 = (function (f,ch,meta58074){
this.f = f;
this.ch = ch;
this.meta58074 = meta58074;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async58073.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58075,meta58074__$1){
var self__ = this;
var _58075__$1 = this;
return (new cljs.core.async.t_cljs$core$async58073(self__.f,self__.ch,meta58074__$1));
}));

(cljs.core.async.t_cljs$core$async58073.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58075){
var self__ = this;
var _58075__$1 = this;
return self__.meta58074;
}));

(cljs.core.async.t_cljs$core$async58073.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58073.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async58073.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58073.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async58073.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58073.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async58073.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta58074","meta58074",1837519740,null)], null);
}));

(cljs.core.async.t_cljs$core$async58073.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async58073.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58073");

(cljs.core.async.t_cljs$core$async58073.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async58073");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58073.
 */
cljs.core.async.__GT_t_cljs$core$async58073 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async58073(f__$1,ch__$1,meta58074){
return (new cljs.core.async.t_cljs$core$async58073(f__$1,ch__$1,meta58074));
});

}

return (new cljs.core.async.t_cljs$core$async58073(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58124 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58124 = (function (p,ch,meta58125){
this.p = p;
this.ch = ch;
this.meta58125 = meta58125;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async58124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58126,meta58125__$1){
var self__ = this;
var _58126__$1 = this;
return (new cljs.core.async.t_cljs$core$async58124(self__.p,self__.ch,meta58125__$1));
}));

(cljs.core.async.t_cljs$core$async58124.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58126){
var self__ = this;
var _58126__$1 = this;
return self__.meta58125;
}));

(cljs.core.async.t_cljs$core$async58124.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58124.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async58124.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async58124.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58124.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async58124.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58124.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async58124.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta58125","meta58125",-1731491610,null)], null);
}));

(cljs.core.async.t_cljs$core$async58124.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async58124.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58124");

(cljs.core.async.t_cljs$core$async58124.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async58124");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58124.
 */
cljs.core.async.__GT_t_cljs$core$async58124 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async58124(p__$1,ch__$1,meta58125){
return (new cljs.core.async.t_cljs$core$async58124(p__$1,ch__$1,meta58125));
});

}

return (new cljs.core.async.t_cljs$core$async58124(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__58165 = arguments.length;
switch (G__58165) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__54431__auto___60293 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54433__auto__ = (function (){var switch__54151__auto__ = (function (state_58212){
var state_val_58213 = (state_58212[(1)]);
if((state_val_58213 === (7))){
var inst_58207 = (state_58212[(2)]);
var state_58212__$1 = state_58212;
var statearr_58219_60297 = state_58212__$1;
(statearr_58219_60297[(2)] = inst_58207);

(statearr_58219_60297[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58213 === (1))){
var state_58212__$1 = state_58212;
var statearr_58220_60298 = state_58212__$1;
(statearr_58220_60298[(2)] = null);

(statearr_58220_60298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58213 === (4))){
var inst_58185 = (state_58212[(7)]);
var inst_58185__$1 = (state_58212[(2)]);
var inst_58186 = (inst_58185__$1 == null);
var state_58212__$1 = (function (){var statearr_58223 = state_58212;
(statearr_58223[(7)] = inst_58185__$1);

return statearr_58223;
})();
if(cljs.core.truth_(inst_58186)){
var statearr_58225_60303 = state_58212__$1;
(statearr_58225_60303[(1)] = (5));

} else {
var statearr_58226_60304 = state_58212__$1;
(statearr_58226_60304[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58213 === (6))){
var inst_58185 = (state_58212[(7)]);
var inst_58195 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_58185) : p.call(null,inst_58185));
var state_58212__$1 = state_58212;
if(cljs.core.truth_(inst_58195)){
var statearr_58228_60308 = state_58212__$1;
(statearr_58228_60308[(1)] = (8));

} else {
var statearr_58229_60310 = state_58212__$1;
(statearr_58229_60310[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58213 === (3))){
var inst_58209 = (state_58212[(2)]);
var state_58212__$1 = state_58212;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58212__$1,inst_58209);
} else {
if((state_val_58213 === (2))){
var state_58212__$1 = state_58212;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58212__$1,(4),ch);
} else {
if((state_val_58213 === (11))){
var inst_58199 = (state_58212[(2)]);
var state_58212__$1 = state_58212;
var statearr_58234_60315 = state_58212__$1;
(statearr_58234_60315[(2)] = inst_58199);

(statearr_58234_60315[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58213 === (9))){
var state_58212__$1 = state_58212;
var statearr_58237_60317 = state_58212__$1;
(statearr_58237_60317[(2)] = null);

(statearr_58237_60317[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58213 === (5))){
var inst_58192 = cljs.core.async.close_BANG_(out);
var state_58212__$1 = state_58212;
var statearr_58239_60319 = state_58212__$1;
(statearr_58239_60319[(2)] = inst_58192);

(statearr_58239_60319[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58213 === (10))){
var inst_58203 = (state_58212[(2)]);
var state_58212__$1 = (function (){var statearr_58240 = state_58212;
(statearr_58240[(8)] = inst_58203);

return statearr_58240;
})();
var statearr_58242_60322 = state_58212__$1;
(statearr_58242_60322[(2)] = null);

(statearr_58242_60322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58213 === (8))){
var inst_58185 = (state_58212[(7)]);
var state_58212__$1 = state_58212;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58212__$1,(11),out,inst_58185);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__54152__auto__ = null;
var cljs$core$async$state_machine__54152__auto____0 = (function (){
var statearr_58253 = [null,null,null,null,null,null,null,null,null];
(statearr_58253[(0)] = cljs$core$async$state_machine__54152__auto__);

(statearr_58253[(1)] = (1));

return statearr_58253;
});
var cljs$core$async$state_machine__54152__auto____1 = (function (state_58212){
while(true){
var ret_value__54153__auto__ = (function (){try{while(true){
var result__54154__auto__ = switch__54151__auto__(state_58212);
if(cljs.core.keyword_identical_QMARK_(result__54154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54154__auto__;
}
break;
}
}catch (e58254){var ex__54155__auto__ = e58254;
var statearr_58255_60333 = state_58212;
(statearr_58255_60333[(2)] = ex__54155__auto__);


if(cljs.core.seq((state_58212[(4)]))){
var statearr_58257_60334 = state_58212;
(statearr_58257_60334[(1)] = cljs.core.first((state_58212[(4)])));

} else {
throw ex__54155__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60339 = state_58212;
state_58212 = G__60339;
continue;
} else {
return ret_value__54153__auto__;
}
break;
}
});
cljs$core$async$state_machine__54152__auto__ = function(state_58212){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54152__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54152__auto____1.call(this,state_58212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54152__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54152__auto____0;
cljs$core$async$state_machine__54152__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54152__auto____1;
return cljs$core$async$state_machine__54152__auto__;
})()
})();
var state__54434__auto__ = (function (){var statearr_58258 = f__54433__auto__();
(statearr_58258[(6)] = c__54431__auto___60293);

return statearr_58258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54434__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__58265 = arguments.length;
switch (G__58265) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__54431__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54433__auto__ = (function (){var switch__54151__auto__ = (function (state_58362){
var state_val_58364 = (state_58362[(1)]);
if((state_val_58364 === (7))){
var inst_58357 = (state_58362[(2)]);
var state_58362__$1 = state_58362;
var statearr_58371_60346 = state_58362__$1;
(statearr_58371_60346[(2)] = inst_58357);

(statearr_58371_60346[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58364 === (20))){
var inst_58326 = (state_58362[(7)]);
var inst_58337 = (state_58362[(2)]);
var inst_58338 = cljs.core.next(inst_58326);
var inst_58306 = inst_58338;
var inst_58307 = null;
var inst_58308 = (0);
var inst_58309 = (0);
var state_58362__$1 = (function (){var statearr_58380 = state_58362;
(statearr_58380[(8)] = inst_58309);

(statearr_58380[(9)] = inst_58306);

(statearr_58380[(10)] = inst_58337);

(statearr_58380[(11)] = inst_58308);

(statearr_58380[(12)] = inst_58307);

return statearr_58380;
})();
var statearr_58381_60350 = state_58362__$1;
(statearr_58381_60350[(2)] = null);

(statearr_58381_60350[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58364 === (1))){
var state_58362__$1 = state_58362;
var statearr_58385_60351 = state_58362__$1;
(statearr_58385_60351[(2)] = null);

(statearr_58385_60351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58364 === (4))){
var inst_58292 = (state_58362[(13)]);
var inst_58292__$1 = (state_58362[(2)]);
var inst_58293 = (inst_58292__$1 == null);
var state_58362__$1 = (function (){var statearr_58386 = state_58362;
(statearr_58386[(13)] = inst_58292__$1);

return statearr_58386;
})();
if(cljs.core.truth_(inst_58293)){
var statearr_58387_60358 = state_58362__$1;
(statearr_58387_60358[(1)] = (5));

} else {
var statearr_58388_60360 = state_58362__$1;
(statearr_58388_60360[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58364 === (15))){
var state_58362__$1 = state_58362;
var statearr_58392_60361 = state_58362__$1;
(statearr_58392_60361[(2)] = null);

(statearr_58392_60361[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58364 === (21))){
var state_58362__$1 = state_58362;
var statearr_58393_60362 = state_58362__$1;
(statearr_58393_60362[(2)] = null);

(statearr_58393_60362[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58364 === (13))){
var inst_58309 = (state_58362[(8)]);
var inst_58306 = (state_58362[(9)]);
var inst_58308 = (state_58362[(11)]);
var inst_58307 = (state_58362[(12)]);
var inst_58322 = (state_58362[(2)]);
var inst_58323 = (inst_58309 + (1));
var tmp58389 = inst_58306;
var tmp58390 = inst_58308;
var tmp58391 = inst_58307;
var inst_58306__$1 = tmp58389;
var inst_58307__$1 = tmp58391;
var inst_58308__$1 = tmp58390;
var inst_58309__$1 = inst_58323;
var state_58362__$1 = (function (){var statearr_58406 = state_58362;
(statearr_58406[(8)] = inst_58309__$1);

(statearr_58406[(9)] = inst_58306__$1);

(statearr_58406[(14)] = inst_58322);

(statearr_58406[(11)] = inst_58308__$1);

(statearr_58406[(12)] = inst_58307__$1);

return statearr_58406;
})();
var statearr_58412_60373 = state_58362__$1;
(statearr_58412_60373[(2)] = null);

(statearr_58412_60373[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58364 === (22))){
var state_58362__$1 = state_58362;
var statearr_58415_60374 = state_58362__$1;
(statearr_58415_60374[(2)] = null);

(statearr_58415_60374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58364 === (6))){
var inst_58292 = (state_58362[(13)]);
var inst_58303 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_58292) : f.call(null,inst_58292));
var inst_58304 = cljs.core.seq(inst_58303);
var inst_58306 = inst_58304;
var inst_58307 = null;
var inst_58308 = (0);
var inst_58309 = (0);
var state_58362__$1 = (function (){var statearr_58421 = state_58362;
(statearr_58421[(8)] = inst_58309);

(statearr_58421[(9)] = inst_58306);

(statearr_58421[(11)] = inst_58308);

(statearr_58421[(12)] = inst_58307);

return statearr_58421;
})();
var statearr_58422_60375 = state_58362__$1;
(statearr_58422_60375[(2)] = null);

(statearr_58422_60375[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58364 === (17))){
var inst_58326 = (state_58362[(7)]);
var inst_58330 = cljs.core.chunk_first(inst_58326);
var inst_58331 = cljs.core.chunk_rest(inst_58326);
var inst_58332 = cljs.core.count(inst_58330);
var inst_58306 = inst_58331;
var inst_58307 = inst_58330;
var inst_58308 = inst_58332;
var inst_58309 = (0);
var state_58362__$1 = (function (){var statearr_58426 = state_58362;
(statearr_58426[(8)] = inst_58309);

(statearr_58426[(9)] = inst_58306);

(statearr_58426[(11)] = inst_58308);

(statearr_58426[(12)] = inst_58307);

return statearr_58426;
})();
var statearr_58427_60380 = state_58362__$1;
(statearr_58427_60380[(2)] = null);

(statearr_58427_60380[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58364 === (3))){
var inst_58359 = (state_58362[(2)]);
var state_58362__$1 = state_58362;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58362__$1,inst_58359);
} else {
if((state_val_58364 === (12))){
var inst_58347 = (state_58362[(2)]);
var state_58362__$1 = state_58362;
var statearr_58433_60382 = state_58362__$1;
(statearr_58433_60382[(2)] = inst_58347);

(statearr_58433_60382[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58364 === (2))){
var state_58362__$1 = state_58362;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58362__$1,(4),in$);
} else {
if((state_val_58364 === (23))){
var inst_58355 = (state_58362[(2)]);
var state_58362__$1 = state_58362;
var statearr_58435_60389 = state_58362__$1;
(statearr_58435_60389[(2)] = inst_58355);

(statearr_58435_60389[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58364 === (19))){
var inst_58342 = (state_58362[(2)]);
var state_58362__$1 = state_58362;
var statearr_58444_60390 = state_58362__$1;
(statearr_58444_60390[(2)] = inst_58342);

(statearr_58444_60390[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58364 === (11))){
var inst_58306 = (state_58362[(9)]);
var inst_58326 = (state_58362[(7)]);
var inst_58326__$1 = cljs.core.seq(inst_58306);
var state_58362__$1 = (function (){var statearr_58448 = state_58362;
(statearr_58448[(7)] = inst_58326__$1);

return statearr_58448;
})();
if(inst_58326__$1){
var statearr_58449_60392 = state_58362__$1;
(statearr_58449_60392[(1)] = (14));

} else {
var statearr_58450_60393 = state_58362__$1;
(statearr_58450_60393[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58364 === (9))){
var inst_58349 = (state_58362[(2)]);
var inst_58350 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_58362__$1 = (function (){var statearr_58451 = state_58362;
(statearr_58451[(15)] = inst_58349);

return statearr_58451;
})();
if(cljs.core.truth_(inst_58350)){
var statearr_58452_60401 = state_58362__$1;
(statearr_58452_60401[(1)] = (21));

} else {
var statearr_58456_60402 = state_58362__$1;
(statearr_58456_60402[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58364 === (5))){
var inst_58295 = cljs.core.async.close_BANG_(out);
var state_58362__$1 = state_58362;
var statearr_58460_60403 = state_58362__$1;
(statearr_58460_60403[(2)] = inst_58295);

(statearr_58460_60403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58364 === (14))){
var inst_58326 = (state_58362[(7)]);
var inst_58328 = cljs.core.chunked_seq_QMARK_(inst_58326);
var state_58362__$1 = state_58362;
if(inst_58328){
var statearr_58464_60407 = state_58362__$1;
(statearr_58464_60407[(1)] = (17));

} else {
var statearr_58465_60408 = state_58362__$1;
(statearr_58465_60408[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58364 === (16))){
var inst_58345 = (state_58362[(2)]);
var state_58362__$1 = state_58362;
var statearr_58466_60410 = state_58362__$1;
(statearr_58466_60410[(2)] = inst_58345);

(statearr_58466_60410[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58364 === (10))){
var inst_58309 = (state_58362[(8)]);
var inst_58307 = (state_58362[(12)]);
var inst_58320 = cljs.core._nth(inst_58307,inst_58309);
var state_58362__$1 = state_58362;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58362__$1,(13),out,inst_58320);
} else {
if((state_val_58364 === (18))){
var inst_58326 = (state_58362[(7)]);
var inst_58335 = cljs.core.first(inst_58326);
var state_58362__$1 = state_58362;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58362__$1,(20),out,inst_58335);
} else {
if((state_val_58364 === (8))){
var inst_58309 = (state_58362[(8)]);
var inst_58308 = (state_58362[(11)]);
var inst_58316 = (inst_58309 < inst_58308);
var inst_58317 = inst_58316;
var state_58362__$1 = state_58362;
if(cljs.core.truth_(inst_58317)){
var statearr_58470_60416 = state_58362__$1;
(statearr_58470_60416[(1)] = (10));

} else {
var statearr_58472_60417 = state_58362__$1;
(statearr_58472_60417[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__54152__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__54152__auto____0 = (function (){
var statearr_58476 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58476[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__54152__auto__);

(statearr_58476[(1)] = (1));

return statearr_58476;
});
var cljs$core$async$mapcat_STAR__$_state_machine__54152__auto____1 = (function (state_58362){
while(true){
var ret_value__54153__auto__ = (function (){try{while(true){
var result__54154__auto__ = switch__54151__auto__(state_58362);
if(cljs.core.keyword_identical_QMARK_(result__54154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54154__auto__;
}
break;
}
}catch (e58479){var ex__54155__auto__ = e58479;
var statearr_58480_60427 = state_58362;
(statearr_58480_60427[(2)] = ex__54155__auto__);


if(cljs.core.seq((state_58362[(4)]))){
var statearr_58481_60428 = state_58362;
(statearr_58481_60428[(1)] = cljs.core.first((state_58362[(4)])));

} else {
throw ex__54155__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60429 = state_58362;
state_58362 = G__60429;
continue;
} else {
return ret_value__54153__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__54152__auto__ = function(state_58362){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__54152__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__54152__auto____1.call(this,state_58362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__54152__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__54152__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__54152__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__54152__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__54152__auto__;
})()
})();
var state__54434__auto__ = (function (){var statearr_58483 = f__54433__auto__();
(statearr_58483[(6)] = c__54431__auto__);

return statearr_58483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54434__auto__);
}));

return c__54431__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__58495 = arguments.length;
switch (G__58495) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__58505 = arguments.length;
switch (G__58505) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__58514 = arguments.length;
switch (G__58514) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__54431__auto___60450 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54433__auto__ = (function (){var switch__54151__auto__ = (function (state_58545){
var state_val_58547 = (state_58545[(1)]);
if((state_val_58547 === (7))){
var inst_58539 = (state_58545[(2)]);
var state_58545__$1 = state_58545;
var statearr_58553_60451 = state_58545__$1;
(statearr_58553_60451[(2)] = inst_58539);

(statearr_58553_60451[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58547 === (1))){
var inst_58519 = null;
var state_58545__$1 = (function (){var statearr_58554 = state_58545;
(statearr_58554[(7)] = inst_58519);

return statearr_58554;
})();
var statearr_58555_60453 = state_58545__$1;
(statearr_58555_60453[(2)] = null);

(statearr_58555_60453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58547 === (4))){
var inst_58523 = (state_58545[(8)]);
var inst_58523__$1 = (state_58545[(2)]);
var inst_58525 = (inst_58523__$1 == null);
var inst_58526 = cljs.core.not(inst_58525);
var state_58545__$1 = (function (){var statearr_58557 = state_58545;
(statearr_58557[(8)] = inst_58523__$1);

return statearr_58557;
})();
if(inst_58526){
var statearr_58560_60458 = state_58545__$1;
(statearr_58560_60458[(1)] = (5));

} else {
var statearr_58562_60459 = state_58545__$1;
(statearr_58562_60459[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58547 === (6))){
var state_58545__$1 = state_58545;
var statearr_58564_60461 = state_58545__$1;
(statearr_58564_60461[(2)] = null);

(statearr_58564_60461[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58547 === (3))){
var inst_58541 = (state_58545[(2)]);
var inst_58542 = cljs.core.async.close_BANG_(out);
var state_58545__$1 = (function (){var statearr_58568 = state_58545;
(statearr_58568[(9)] = inst_58541);

return statearr_58568;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_58545__$1,inst_58542);
} else {
if((state_val_58547 === (2))){
var state_58545__$1 = state_58545;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58545__$1,(4),ch);
} else {
if((state_val_58547 === (11))){
var inst_58523 = (state_58545[(8)]);
var inst_58533 = (state_58545[(2)]);
var inst_58519 = inst_58523;
var state_58545__$1 = (function (){var statearr_58572 = state_58545;
(statearr_58572[(7)] = inst_58519);

(statearr_58572[(10)] = inst_58533);

return statearr_58572;
})();
var statearr_58577_60465 = state_58545__$1;
(statearr_58577_60465[(2)] = null);

(statearr_58577_60465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58547 === (9))){
var inst_58523 = (state_58545[(8)]);
var state_58545__$1 = state_58545;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58545__$1,(11),out,inst_58523);
} else {
if((state_val_58547 === (5))){
var inst_58523 = (state_58545[(8)]);
var inst_58519 = (state_58545[(7)]);
var inst_58528 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_58523,inst_58519);
var state_58545__$1 = state_58545;
if(inst_58528){
var statearr_58579_60466 = state_58545__$1;
(statearr_58579_60466[(1)] = (8));

} else {
var statearr_58580_60467 = state_58545__$1;
(statearr_58580_60467[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58547 === (10))){
var inst_58536 = (state_58545[(2)]);
var state_58545__$1 = state_58545;
var statearr_58581_60468 = state_58545__$1;
(statearr_58581_60468[(2)] = inst_58536);

(statearr_58581_60468[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58547 === (8))){
var inst_58519 = (state_58545[(7)]);
var tmp58578 = inst_58519;
var inst_58519__$1 = tmp58578;
var state_58545__$1 = (function (){var statearr_58583 = state_58545;
(statearr_58583[(7)] = inst_58519__$1);

return statearr_58583;
})();
var statearr_58585_60470 = state_58545__$1;
(statearr_58585_60470[(2)] = null);

(statearr_58585_60470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__54152__auto__ = null;
var cljs$core$async$state_machine__54152__auto____0 = (function (){
var statearr_58586 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_58586[(0)] = cljs$core$async$state_machine__54152__auto__);

(statearr_58586[(1)] = (1));

return statearr_58586;
});
var cljs$core$async$state_machine__54152__auto____1 = (function (state_58545){
while(true){
var ret_value__54153__auto__ = (function (){try{while(true){
var result__54154__auto__ = switch__54151__auto__(state_58545);
if(cljs.core.keyword_identical_QMARK_(result__54154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54154__auto__;
}
break;
}
}catch (e58587){var ex__54155__auto__ = e58587;
var statearr_58588_60482 = state_58545;
(statearr_58588_60482[(2)] = ex__54155__auto__);


if(cljs.core.seq((state_58545[(4)]))){
var statearr_58589_60483 = state_58545;
(statearr_58589_60483[(1)] = cljs.core.first((state_58545[(4)])));

} else {
throw ex__54155__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60484 = state_58545;
state_58545 = G__60484;
continue;
} else {
return ret_value__54153__auto__;
}
break;
}
});
cljs$core$async$state_machine__54152__auto__ = function(state_58545){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54152__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54152__auto____1.call(this,state_58545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54152__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54152__auto____0;
cljs$core$async$state_machine__54152__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54152__auto____1;
return cljs$core$async$state_machine__54152__auto__;
})()
})();
var state__54434__auto__ = (function (){var statearr_58590 = f__54433__auto__();
(statearr_58590[(6)] = c__54431__auto___60450);

return statearr_58590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54434__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__58604 = arguments.length;
switch (G__58604) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__54431__auto___60496 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54433__auto__ = (function (){var switch__54151__auto__ = (function (state_58679){
var state_val_58680 = (state_58679[(1)]);
if((state_val_58680 === (7))){
var inst_58675 = (state_58679[(2)]);
var state_58679__$1 = state_58679;
var statearr_58681_60499 = state_58679__$1;
(statearr_58681_60499[(2)] = inst_58675);

(statearr_58681_60499[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58680 === (1))){
var inst_58621 = (new Array(n));
var inst_58623 = inst_58621;
var inst_58624 = (0);
var state_58679__$1 = (function (){var statearr_58682 = state_58679;
(statearr_58682[(7)] = inst_58624);

(statearr_58682[(8)] = inst_58623);

return statearr_58682;
})();
var statearr_58683_60502 = state_58679__$1;
(statearr_58683_60502[(2)] = null);

(statearr_58683_60502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58680 === (4))){
var inst_58635 = (state_58679[(9)]);
var inst_58635__$1 = (state_58679[(2)]);
var inst_58636 = (inst_58635__$1 == null);
var inst_58637 = cljs.core.not(inst_58636);
var state_58679__$1 = (function (){var statearr_58684 = state_58679;
(statearr_58684[(9)] = inst_58635__$1);

return statearr_58684;
})();
if(inst_58637){
var statearr_58685_60505 = state_58679__$1;
(statearr_58685_60505[(1)] = (5));

} else {
var statearr_58686_60506 = state_58679__$1;
(statearr_58686_60506[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58680 === (15))){
var inst_58669 = (state_58679[(2)]);
var state_58679__$1 = state_58679;
var statearr_58687_60507 = state_58679__$1;
(statearr_58687_60507[(2)] = inst_58669);

(statearr_58687_60507[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58680 === (13))){
var state_58679__$1 = state_58679;
var statearr_58688_60508 = state_58679__$1;
(statearr_58688_60508[(2)] = null);

(statearr_58688_60508[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58680 === (6))){
var inst_58624 = (state_58679[(7)]);
var inst_58665 = (inst_58624 > (0));
var state_58679__$1 = state_58679;
if(cljs.core.truth_(inst_58665)){
var statearr_58689_60509 = state_58679__$1;
(statearr_58689_60509[(1)] = (12));

} else {
var statearr_58690_60510 = state_58679__$1;
(statearr_58690_60510[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58680 === (3))){
var inst_58677 = (state_58679[(2)]);
var state_58679__$1 = state_58679;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58679__$1,inst_58677);
} else {
if((state_val_58680 === (12))){
var inst_58623 = (state_58679[(8)]);
var inst_58667 = cljs.core.vec(inst_58623);
var state_58679__$1 = state_58679;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58679__$1,(15),out,inst_58667);
} else {
if((state_val_58680 === (2))){
var state_58679__$1 = state_58679;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58679__$1,(4),ch);
} else {
if((state_val_58680 === (11))){
var inst_58659 = (state_58679[(2)]);
var inst_58660 = (new Array(n));
var inst_58623 = inst_58660;
var inst_58624 = (0);
var state_58679__$1 = (function (){var statearr_58696 = state_58679;
(statearr_58696[(7)] = inst_58624);

(statearr_58696[(10)] = inst_58659);

(statearr_58696[(8)] = inst_58623);

return statearr_58696;
})();
var statearr_58698_60517 = state_58679__$1;
(statearr_58698_60517[(2)] = null);

(statearr_58698_60517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58680 === (9))){
var inst_58623 = (state_58679[(8)]);
var inst_58657 = cljs.core.vec(inst_58623);
var state_58679__$1 = state_58679;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58679__$1,(11),out,inst_58657);
} else {
if((state_val_58680 === (5))){
var inst_58644 = (state_58679[(11)]);
var inst_58624 = (state_58679[(7)]);
var inst_58635 = (state_58679[(9)]);
var inst_58623 = (state_58679[(8)]);
var inst_58643 = (inst_58623[inst_58624] = inst_58635);
var inst_58644__$1 = (inst_58624 + (1));
var inst_58649 = (inst_58644__$1 < n);
var state_58679__$1 = (function (){var statearr_58699 = state_58679;
(statearr_58699[(11)] = inst_58644__$1);

(statearr_58699[(12)] = inst_58643);

return statearr_58699;
})();
if(cljs.core.truth_(inst_58649)){
var statearr_58702_60532 = state_58679__$1;
(statearr_58702_60532[(1)] = (8));

} else {
var statearr_58703_60533 = state_58679__$1;
(statearr_58703_60533[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58680 === (14))){
var inst_58672 = (state_58679[(2)]);
var inst_58673 = cljs.core.async.close_BANG_(out);
var state_58679__$1 = (function (){var statearr_58706 = state_58679;
(statearr_58706[(13)] = inst_58672);

return statearr_58706;
})();
var statearr_58708_60538 = state_58679__$1;
(statearr_58708_60538[(2)] = inst_58673);

(statearr_58708_60538[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58680 === (10))){
var inst_58663 = (state_58679[(2)]);
var state_58679__$1 = state_58679;
var statearr_58710_60544 = state_58679__$1;
(statearr_58710_60544[(2)] = inst_58663);

(statearr_58710_60544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58680 === (8))){
var inst_58644 = (state_58679[(11)]);
var inst_58623 = (state_58679[(8)]);
var tmp58705 = inst_58623;
var inst_58623__$1 = tmp58705;
var inst_58624 = inst_58644;
var state_58679__$1 = (function (){var statearr_58711 = state_58679;
(statearr_58711[(7)] = inst_58624);

(statearr_58711[(8)] = inst_58623__$1);

return statearr_58711;
})();
var statearr_58712_60552 = state_58679__$1;
(statearr_58712_60552[(2)] = null);

(statearr_58712_60552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__54152__auto__ = null;
var cljs$core$async$state_machine__54152__auto____0 = (function (){
var statearr_58718 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58718[(0)] = cljs$core$async$state_machine__54152__auto__);

(statearr_58718[(1)] = (1));

return statearr_58718;
});
var cljs$core$async$state_machine__54152__auto____1 = (function (state_58679){
while(true){
var ret_value__54153__auto__ = (function (){try{while(true){
var result__54154__auto__ = switch__54151__auto__(state_58679);
if(cljs.core.keyword_identical_QMARK_(result__54154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54154__auto__;
}
break;
}
}catch (e58721){var ex__54155__auto__ = e58721;
var statearr_58723_60559 = state_58679;
(statearr_58723_60559[(2)] = ex__54155__auto__);


if(cljs.core.seq((state_58679[(4)]))){
var statearr_58727_60560 = state_58679;
(statearr_58727_60560[(1)] = cljs.core.first((state_58679[(4)])));

} else {
throw ex__54155__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60563 = state_58679;
state_58679 = G__60563;
continue;
} else {
return ret_value__54153__auto__;
}
break;
}
});
cljs$core$async$state_machine__54152__auto__ = function(state_58679){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54152__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54152__auto____1.call(this,state_58679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54152__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54152__auto____0;
cljs$core$async$state_machine__54152__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54152__auto____1;
return cljs$core$async$state_machine__54152__auto__;
})()
})();
var state__54434__auto__ = (function (){var statearr_58729 = f__54433__auto__();
(statearr_58729[(6)] = c__54431__auto___60496);

return statearr_58729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54434__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__58740 = arguments.length;
switch (G__58740) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__54431__auto___60571 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54433__auto__ = (function (){var switch__54151__auto__ = (function (state_58790){
var state_val_58791 = (state_58790[(1)]);
if((state_val_58791 === (7))){
var inst_58786 = (state_58790[(2)]);
var state_58790__$1 = state_58790;
var statearr_58793_60576 = state_58790__$1;
(statearr_58793_60576[(2)] = inst_58786);

(statearr_58793_60576[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58791 === (1))){
var inst_58741 = [];
var inst_58742 = inst_58741;
var inst_58743 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_58790__$1 = (function (){var statearr_58797 = state_58790;
(statearr_58797[(7)] = inst_58742);

(statearr_58797[(8)] = inst_58743);

return statearr_58797;
})();
var statearr_58798_60584 = state_58790__$1;
(statearr_58798_60584[(2)] = null);

(statearr_58798_60584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58791 === (4))){
var inst_58747 = (state_58790[(9)]);
var inst_58747__$1 = (state_58790[(2)]);
var inst_58749 = (inst_58747__$1 == null);
var inst_58750 = cljs.core.not(inst_58749);
var state_58790__$1 = (function (){var statearr_58800 = state_58790;
(statearr_58800[(9)] = inst_58747__$1);

return statearr_58800;
})();
if(inst_58750){
var statearr_58801_60585 = state_58790__$1;
(statearr_58801_60585[(1)] = (5));

} else {
var statearr_58802_60586 = state_58790__$1;
(statearr_58802_60586[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58791 === (15))){
var inst_58780 = (state_58790[(2)]);
var state_58790__$1 = state_58790;
var statearr_58806_60587 = state_58790__$1;
(statearr_58806_60587[(2)] = inst_58780);

(statearr_58806_60587[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58791 === (13))){
var state_58790__$1 = state_58790;
var statearr_58807_60591 = state_58790__$1;
(statearr_58807_60591[(2)] = null);

(statearr_58807_60591[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58791 === (6))){
var inst_58742 = (state_58790[(7)]);
var inst_58775 = inst_58742.length;
var inst_58776 = (inst_58775 > (0));
var state_58790__$1 = state_58790;
if(cljs.core.truth_(inst_58776)){
var statearr_58811_60593 = state_58790__$1;
(statearr_58811_60593[(1)] = (12));

} else {
var statearr_58814_60596 = state_58790__$1;
(statearr_58814_60596[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58791 === (3))){
var inst_58788 = (state_58790[(2)]);
var state_58790__$1 = state_58790;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58790__$1,inst_58788);
} else {
if((state_val_58791 === (12))){
var inst_58742 = (state_58790[(7)]);
var inst_58778 = cljs.core.vec(inst_58742);
var state_58790__$1 = state_58790;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58790__$1,(15),out,inst_58778);
} else {
if((state_val_58791 === (2))){
var state_58790__$1 = state_58790;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58790__$1,(4),ch);
} else {
if((state_val_58791 === (11))){
var inst_58753 = (state_58790[(10)]);
var inst_58747 = (state_58790[(9)]);
var inst_58764 = (state_58790[(2)]);
var inst_58765 = [];
var inst_58766 = inst_58765.push(inst_58747);
var inst_58742 = inst_58765;
var inst_58743 = inst_58753;
var state_58790__$1 = (function (){var statearr_58822 = state_58790;
(statearr_58822[(7)] = inst_58742);

(statearr_58822[(11)] = inst_58766);

(statearr_58822[(8)] = inst_58743);

(statearr_58822[(12)] = inst_58764);

return statearr_58822;
})();
var statearr_58823_60598 = state_58790__$1;
(statearr_58823_60598[(2)] = null);

(statearr_58823_60598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58791 === (9))){
var inst_58742 = (state_58790[(7)]);
var inst_58762 = cljs.core.vec(inst_58742);
var state_58790__$1 = state_58790;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58790__$1,(11),out,inst_58762);
} else {
if((state_val_58791 === (5))){
var inst_58753 = (state_58790[(10)]);
var inst_58747 = (state_58790[(9)]);
var inst_58743 = (state_58790[(8)]);
var inst_58753__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_58747) : f.call(null,inst_58747));
var inst_58754 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_58753__$1,inst_58743);
var inst_58755 = cljs.core.keyword_identical_QMARK_(inst_58743,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_58756 = ((inst_58754) || (inst_58755));
var state_58790__$1 = (function (){var statearr_58840 = state_58790;
(statearr_58840[(10)] = inst_58753__$1);

return statearr_58840;
})();
if(cljs.core.truth_(inst_58756)){
var statearr_58842_60604 = state_58790__$1;
(statearr_58842_60604[(1)] = (8));

} else {
var statearr_58844_60605 = state_58790__$1;
(statearr_58844_60605[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58791 === (14))){
var inst_58783 = (state_58790[(2)]);
var inst_58784 = cljs.core.async.close_BANG_(out);
var state_58790__$1 = (function (){var statearr_58854 = state_58790;
(statearr_58854[(13)] = inst_58783);

return statearr_58854;
})();
var statearr_58855_60611 = state_58790__$1;
(statearr_58855_60611[(2)] = inst_58784);

(statearr_58855_60611[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58791 === (10))){
var inst_58769 = (state_58790[(2)]);
var state_58790__$1 = state_58790;
var statearr_58858_60619 = state_58790__$1;
(statearr_58858_60619[(2)] = inst_58769);

(statearr_58858_60619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58791 === (8))){
var inst_58742 = (state_58790[(7)]);
var inst_58753 = (state_58790[(10)]);
var inst_58747 = (state_58790[(9)]);
var inst_58758 = inst_58742.push(inst_58747);
var tmp58849 = inst_58742;
var inst_58742__$1 = tmp58849;
var inst_58743 = inst_58753;
var state_58790__$1 = (function (){var statearr_58860 = state_58790;
(statearr_58860[(7)] = inst_58742__$1);

(statearr_58860[(8)] = inst_58743);

(statearr_58860[(14)] = inst_58758);

return statearr_58860;
})();
var statearr_58861_60624 = state_58790__$1;
(statearr_58861_60624[(2)] = null);

(statearr_58861_60624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__54152__auto__ = null;
var cljs$core$async$state_machine__54152__auto____0 = (function (){
var statearr_58863 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58863[(0)] = cljs$core$async$state_machine__54152__auto__);

(statearr_58863[(1)] = (1));

return statearr_58863;
});
var cljs$core$async$state_machine__54152__auto____1 = (function (state_58790){
while(true){
var ret_value__54153__auto__ = (function (){try{while(true){
var result__54154__auto__ = switch__54151__auto__(state_58790);
if(cljs.core.keyword_identical_QMARK_(result__54154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54154__auto__;
}
break;
}
}catch (e58868){var ex__54155__auto__ = e58868;
var statearr_58869_60625 = state_58790;
(statearr_58869_60625[(2)] = ex__54155__auto__);


if(cljs.core.seq((state_58790[(4)]))){
var statearr_58870_60626 = state_58790;
(statearr_58870_60626[(1)] = cljs.core.first((state_58790[(4)])));

} else {
throw ex__54155__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60627 = state_58790;
state_58790 = G__60627;
continue;
} else {
return ret_value__54153__auto__;
}
break;
}
});
cljs$core$async$state_machine__54152__auto__ = function(state_58790){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54152__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54152__auto____1.call(this,state_58790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54152__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54152__auto____0;
cljs$core$async$state_machine__54152__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54152__auto____1;
return cljs$core$async$state_machine__54152__auto__;
})()
})();
var state__54434__auto__ = (function (){var statearr_58873 = f__54433__auto__();
(statearr_58873[(6)] = c__54431__auto___60571);

return statearr_58873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54434__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
