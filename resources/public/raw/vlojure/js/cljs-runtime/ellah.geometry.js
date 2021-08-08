goog.provide('ellah.geometry');
ellah.geometry.PI = Math.PI;
ellah.geometry.TAU = ((2) * ellah.geometry.PI);
ellah.geometry.origin = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null);
ellah.geometry.unit = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null);
ellah.geometry.unit_square = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ellah.geometry.origin,ellah.geometry.unit], null);
ellah.geometry.add_points = (function ellah$geometry$add_points(var_args){
var args__4742__auto__ = [];
var len__4736__auto___75782 = arguments.length;
var i__4737__auto___75783 = (0);
while(true){
if((i__4737__auto___75783 < len__4736__auto___75782)){
args__4742__auto__.push((arguments[i__4737__auto___75783]));

var G__75785 = (i__4737__auto___75783 + (1));
i__4737__auto___75783 = G__75785;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic = (function (points){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),points)),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),points))], null);
}));

(ellah.geometry.add_points.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(ellah.geometry.add_points.cljs$lang$applyTo = (function (seq75732){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq75732));
}));

ellah.geometry.multiply_points = (function ellah$geometry$multiply_points(var_args){
var args__4742__auto__ = [];
var len__4736__auto___75790 = arguments.length;
var i__4737__auto___75791 = (0);
while(true){
if((i__4737__auto___75791 < len__4736__auto___75790)){
args__4742__auto__.push((arguments[i__4737__auto___75791]));

var G__75792 = (i__4737__auto___75791 + (1));
i__4737__auto___75791 = G__75792;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return ellah.geometry.multiply_points.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(ellah.geometry.multiply_points.cljs$core$IFn$_invoke$arity$variadic = (function (points){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),points)),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),points))], null);
}));

(ellah.geometry.multiply_points.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(ellah.geometry.multiply_points.cljs$lang$applyTo = (function (seq75739){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq75739));
}));

ellah.geometry.scale_point = (function ellah$geometry$scale_point(a,s){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a) * s),new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a) * s)], null);
});
ellah.geometry.subtract_points = (function ellah$geometry$subtract_points(a,b){
return ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,ellah.geometry.scale_point(b,(-1))], 0));
});
ellah.geometry.in_rect_QMARK_ = (function ellah$geometry$in_rect_QMARK_(p__75743,point){
var vec__75744 = p__75743;
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75744,(0),null);
var size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75744,(1),null);
var off = ellah.geometry.subtract_points(point,pos);
return ((((((0) <= new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(off))) && ((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(off) <= new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(size))))) && (((((0) <= new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(off))) && ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(off) <= new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(size))))));
});
ellah.geometry.rect_within = (function ellah$geometry$rect_within(p__75753,aspect_ratio){
var vec__75754 = p__75753;
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75754,(0),null);
var size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75754,(1),null);
var rect_width = (function (){var x__4217__auto__ = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(size);
var y__4218__auto__ = (aspect_ratio * new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(size));
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
var rect_height = (rect_width / aspect_ratio);
var rect_size = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),rect_width,new cljs.core.Keyword(null,"y","y",-1757859776),rect_height], null);
var rect_pos = ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pos,ellah.geometry.scale_point(ellah.geometry.subtract_points(size,rect_size),0.5)], 0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rect_pos,rect_size], null);
});
ellah.geometry.rect_around = (function ellah$geometry$rect_around(p__75757,aspect_ratio){
var vec__75758 = p__75757;
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75758,(0),null);
var size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75758,(1),null);
var rect_width = (function (){var x__4214__auto__ = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(size);
var y__4215__auto__ = (aspect_ratio * new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(size));
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
var rect_height = (rect_width / aspect_ratio);
var rect_size = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),rect_width,new cljs.core.Keyword(null,"y","y",-1757859776),rect_height], null);
var rect_pos = ellah.geometry.subtract_points(pos,ellah.geometry.scale_point(ellah.geometry.subtract_points(rect_size,size),0.5));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rect_pos,rect_size], null);
});
ellah.geometry.point_square_magnitude = (function ellah$geometry$point_square_magnitude(p){
return (Math.pow(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p),(2)) + Math.pow(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p),(2)));
});
ellah.geometry.point_magnitude = (function ellah$geometry$point_magnitude(p){
return Math.sqrt(ellah.geometry.point_square_magnitude(p));
});
ellah.geometry.normalize_point = (function ellah$geometry$normalize_point(p){
var mag = ellah.geometry.point_magnitude(p);
if((mag === (0))){
return p;
} else {
return ellah.geometry.scale_point(p,((1) / mag));
}
});
ellah.geometry.tween_points = (function ellah$geometry$tween_points(p1,p2,t){
return ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ellah.geometry.scale_point(p2,t),ellah.geometry.scale_point(p1,((1) - t))], 0));
});
ellah.geometry.average_point = (function ellah$geometry$average_point(points){
return ellah.geometry.scale_point(ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([points], 0)),((1) / cljs.core.count(points)));
});
ellah.geometry.angle_point = (function ellah$geometry$angle_point(angle){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),Math.cos(angle),new cljs.core.Keyword(null,"y","y",-1757859776),Math.sin(angle)], null);
});
ellah.geometry.point_angle = (function ellah$geometry$point_angle(point){
return Math.atan2(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point));
});
ellah.geometry.reflect_point = (function ellah$geometry$reflect_point(point,angle){
var map__75761 = point;
var map__75761__$1 = (((((!((map__75761 == null))))?(((((map__75761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75761.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75761):map__75761);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75761__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75761__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var double_angle = ((2) * cljs.core.mod(angle,((2) * Math.PI)));
var c = Math.cos(double_angle);
var s = Math.sin(double_angle);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),((s * y) - (c * x)),new cljs.core.Keyword(null,"y","y",-1757859776),((s * x) + (c * y))], null);
});
ellah.geometry.normal_point = (function ellah$geometry$normal_point(point){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(- new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point)),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point)], null);
});
ellah.geometry.polygon = (function ellah$geometry$polygon(var_args){
var args__4742__auto__ = [];
var len__4736__auto___75797 = arguments.length;
var i__4737__auto___75798 = (0);
while(true){
if((i__4737__auto___75798 < len__4736__auto___75797)){
args__4742__auto__.push((arguments[i__4737__auto___75798]));

var G__75799 = (i__4737__auto___75798 + (1));
i__4737__auto___75798 = G__75799;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return ellah.geometry.polygon.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(ellah.geometry.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (sides,p__75767){
var vec__75770 = p__75767;
var rotation = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75770,(0),null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
var angle = (rotation + ((ellah.geometry.TAU * i) / sides));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),Math.cos(angle),new cljs.core.Keyword(null,"y","y",-1757859776),Math.sin(angle)], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(sides));
}));

(ellah.geometry.polygon.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(ellah.geometry.polygon.cljs$lang$applyTo = (function (seq75763){
var G__75764 = cljs.core.first(seq75763);
var seq75763__$1 = cljs.core.next(seq75763);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__75764,seq75763__$1);
}));

ellah.geometry.map_point = (function ellah$geometry$map_point(from_pos,from_size,to_pos,to_size,point){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (pos,dim){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pos,dim,(function (){var from_min = (dim.cljs$core$IFn$_invoke$arity$1 ? dim.cljs$core$IFn$_invoke$arity$1(from_pos) : dim.call(null,from_pos));
var from_max = (from_min + (dim.cljs$core$IFn$_invoke$arity$1 ? dim.cljs$core$IFn$_invoke$arity$1(from_size) : dim.call(null,from_size)));
var to_min = (dim.cljs$core$IFn$_invoke$arity$1 ? dim.cljs$core$IFn$_invoke$arity$1(to_pos) : dim.call(null,to_pos));
var to_max = (to_min + (dim.cljs$core$IFn$_invoke$arity$1 ? dim.cljs$core$IFn$_invoke$arity$1(to_size) : dim.call(null,to_size)));
return ellah.util.map_range.cljs$core$IFn$_invoke$arity$variadic(from_min,from_max,to_min,to_max,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(dim.cljs$core$IFn$_invoke$arity$1 ? dim.cljs$core$IFn$_invoke$arity$1(point) : dim.call(null,point))], 0));
})());
}),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null));
});
ellah.geometry.adjust_aspect_ratio = (function ellah$geometry$adjust_aspect_ratio(point,ar){
return ellah.geometry.multiply_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([point,cljs.core.last(ellah.geometry.rect_within(ellah.geometry.unit_square,ar))], 0));
});
ellah.geometry.in_circle_QMARK_ = (function ellah$geometry$in_circle_QMARK_(circle,pos){
return (ellah.geometry.point_square_magnitude(ellah.geometry.subtract_points(circle,pos)) < Math.pow(new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(circle),(2)));
});

//# sourceMappingURL=ellah.geometry.js.map
