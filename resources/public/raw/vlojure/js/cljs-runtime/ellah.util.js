goog.provide('ellah.util');
ellah.util.in_QMARK_ = (function ellah$util$in_QMARK_(coll,value){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([value]),coll);
});
ellah.util.seek = (function ellah$util$seek(pred,coll){
return cljs.core.first(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(pred),coll));
});
ellah.util.divis_QMARK_ = (function ellah$util$divis_QMARK_(x,div){
return (cljs.core.mod(x,div) === (0));
});
ellah.util.pad = (function ellah$util$pad(var_args){
var args__4742__auto__ = [];
var len__4736__auto___75729 = arguments.length;
var i__4737__auto___75730 = (0);
while(true){
if((i__4737__auto___75730 < len__4736__auto___75729)){
args__4742__auto__.push((arguments[i__4737__auto___75730]));

var G__75731 = (i__4737__auto___75730 + (1));
i__4737__auto___75730 = G__75731;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return ellah.util.pad.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(ellah.util.pad.cljs$core$IFn$_invoke$arity$variadic = (function (coll,value,p__75701){
var vec__75702 = p__75701;
var num = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75702,(0),null);
if(cljs.core.truth_(num)){
return cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(num,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(coll,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(value))));
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(coll,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(value));
}
}));

(ellah.util.pad.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(ellah.util.pad.cljs$lang$applyTo = (function (seq75698){
var G__75699 = cljs.core.first(seq75698);
var seq75698__$1 = cljs.core.next(seq75698);
var G__75700 = cljs.core.first(seq75698__$1);
var seq75698__$2 = cljs.core.next(seq75698__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__75699,G__75700,seq75698__$2);
}));

ellah.util.map_range = (function ellah$util$map_range(var_args){
var args__4742__auto__ = [];
var len__4736__auto___75733 = arguments.length;
var i__4737__auto___75734 = (0);
while(true){
if((i__4737__auto___75734 < len__4736__auto___75733)){
args__4742__auto__.push((arguments[i__4737__auto___75734]));

var G__75735 = (i__4737__auto___75734 + (1));
i__4737__auto___75734 = G__75735;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return ellah.util.map_range.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(ellah.util.map_range.cljs$core$IFn$_invoke$arity$variadic = (function (from_min,from_max,to_min,to_max,p__75710){
var vec__75711 = p__75710;
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75711,(0),null);
if(cljs.core.truth_(value)){
return ((((value - from_min) / (from_max - from_min)) * (to_max - to_min)) + to_min);
} else {
return (function (value__$1){
return ((((value__$1 - from_min) / (from_max - from_min)) * (to_max - to_min)) + to_min);
});
}
}));

(ellah.util.map_range.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(ellah.util.map_range.cljs$lang$applyTo = (function (seq75705){
var G__75706 = cljs.core.first(seq75705);
var seq75705__$1 = cljs.core.next(seq75705);
var G__75707 = cljs.core.first(seq75705__$1);
var seq75705__$2 = cljs.core.next(seq75705__$1);
var G__75708 = cljs.core.first(seq75705__$2);
var seq75705__$3 = cljs.core.next(seq75705__$2);
var G__75709 = cljs.core.first(seq75705__$3);
var seq75705__$4 = cljs.core.next(seq75705__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__75706,G__75707,G__75708,G__75709,seq75705__$4);
}));

ellah.util.prop_range = (function ellah$util$prop_range(var_args){
var args__4742__auto__ = [];
var len__4736__auto___75736 = arguments.length;
var i__4737__auto___75737 = (0);
while(true){
if((i__4737__auto___75737 < len__4736__auto___75736)){
args__4742__auto__.push((arguments[i__4737__auto___75737]));

var G__75738 = (i__4737__auto___75737 + (1));
i__4737__auto___75737 = G__75738;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return ellah.util.prop_range.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(ellah.util.prop_range.cljs$core$IFn$_invoke$arity$variadic = (function (n,p__75717){
var vec__75718 = p__75717;
var open = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75718,(0),null);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__75714_SHARP_){
return (p1__75714_SHARP_ / (cljs.core.truth_(open)?n:(n - (1))));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(n));
}));

(ellah.util.prop_range.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(ellah.util.prop_range.cljs$lang$applyTo = (function (seq75715){
var G__75716 = cljs.core.first(seq75715);
var seq75715__$1 = cljs.core.next(seq75715);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__75716,seq75715__$1);
}));

ellah.util.par = (function ellah$util$par(x){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));

return x;
});
ellah.util.sign = (function ellah$util$sign(x){
if((x > (0))){
return (1);
} else {
if((x < (0))){
return (-1);
} else {
return (0);

}
}
});
ellah.util.rand_geom = (function ellah$util$rand_geom(p){
if((p > cljs.core.rand.cljs$core$IFn$_invoke$arity$0())){
return (0);
} else {
return ((ellah.util.rand_geom.cljs$core$IFn$_invoke$arity$1 ? ellah.util.rand_geom.cljs$core$IFn$_invoke$arity$1(p) : ellah.util.rand_geom.call(null,p)) + (1));
}
});
ellah.util.rand_exp = (function ellah$util$rand_exp(){
return (- Math.log(cljs.core.rand.cljs$core$IFn$_invoke$arity$0()));
});
ellah.util.sigmoid = (function ellah$util$sigmoid(x){
return ((1) / (Math.exp((- x)) + (1)));
});
ellah.util.swirly_looper = (function ellah$util$swirly_looper(var_args){
var args__4742__auto__ = [];
var len__4736__auto___75740 = arguments.length;
var i__4737__auto___75741 = (0);
while(true){
if((i__4737__auto___75741 < len__4736__auto___75740)){
args__4742__auto__.push((arguments[i__4737__auto___75741]));

var G__75742 = (i__4737__auto___75741 + (1));
i__4737__auto___75741 = G__75742;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return ellah.util.swirly_looper.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(ellah.util.swirly_looper.cljs$core$IFn$_invoke$arity$variadic = (function (p__75722){
var vec__75723 = p__75722;
var number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75723,(0),null);
var freq_param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75723,(1),null);
var amp_factor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75723,(2),null);
var number__$1 = (function (){var or__4126__auto__ = number;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (10);
}
})();
var freqs = cljs.core.take.cljs$core$IFn$_invoke$arity$2(number__$1,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1((function (){
return (ellah.util.rand_geom((function (){var or__4126__auto__ = freq_param;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return 0.5;
}
})()) + (1));
})));
var amplitudes = cljs.core.take.cljs$core$IFn$_invoke$arity$2(number__$1,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1((function (){
return ((1) / ((ellah.util.rand_exp() * (function (){var or__4126__auto__ = amp_factor;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()) + (1)));
})));
var offsets = cljs.core.take.cljs$core$IFn$_invoke$arity$2(number__$1,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.rand.cljs$core$IFn$_invoke$arity$1((Math.PI * (2)));
})));
return (function (x){
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$4((function (f,a,o){
return (a * Math.sin((o + (((Math.PI * (2)) * f) * x))));
}),freqs,amplitudes,offsets)) / Math.sqrt(number__$1));
});
}));

(ellah.util.swirly_looper.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(ellah.util.swirly_looper.cljs$lang$applyTo = (function (seq75721){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq75721));
}));

ellah.util.update_BANG_ = (function ellah$util$update_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___75747 = arguments.length;
var i__4737__auto___75748 = (0);
while(true){
if((i__4737__auto___75748 < len__4736__auto___75747)){
args__4742__auto__.push((arguments[i__4737__auto___75748]));

var G__75749 = (i__4737__auto___75748 + (1));
i__4737__auto___75748 = G__75749;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return ellah.util.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(ellah.util.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (atom,update_args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(atom,(function (a){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.update,a),update_args);
}));
}));

(ellah.util.update_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(ellah.util.update_BANG_.cljs$lang$applyTo = (function (seq75726){
var G__75727 = cljs.core.first(seq75726);
var seq75726__$1 = cljs.core.next(seq75726);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__75727,seq75726__$1);
}));

ellah.util.table_interp_function = (function ellah$util$table_interp_function(table){
return (function (x){
if((x < (0))){
return cljs.core.first(table);
} else {
if((x >= (1))){
return cljs.core.last(table);
} else {
var index = (x * (cljs.core.count(table) - (1)));
return ellah.util.map_range.cljs$core$IFn$_invoke$arity$variadic((0),(1),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(table,(index | (0))),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(table,Math.ceil(index)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mod(index,(1))], 0));

}
}
});
});
ellah.util.rand_exp_range = (function ellah$util$rand_exp_range(min_value,max_value){
return (min_value * Math.pow((max_value / min_value),cljs.core.rand.cljs$core$IFn$_invoke$arity$0()));
});
ellah.util.log = (function ellah$util$log(var_args){
var args__4742__auto__ = [];
var len__4736__auto___75750 = arguments.length;
var i__4737__auto___75751 = (0);
while(true){
if((i__4737__auto___75751 < len__4736__auto___75750)){
args__4742__auto__.push((arguments[i__4737__auto___75751]));

var G__75752 = (i__4737__auto___75751 + (1));
i__4737__auto___75751 = G__75752;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return ellah.util.log.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(ellah.util.log.cljs$core$IFn$_invoke$arity$variadic = (function (values){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(console.log,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.clj__GT_js,values));

return cljs.core.last(values);
}));

(ellah.util.log.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(ellah.util.log.cljs$lang$applyTo = (function (seq75728){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq75728));
}));

ellah.util.tween = (function ellah$util$tween(a,b,t){
return ((b * t) + (a * ((1) - t)));
});

//# sourceMappingURL=ellah.util.js.map
