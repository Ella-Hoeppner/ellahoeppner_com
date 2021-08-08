goog.provide('ellah.graphics');
var module$node_modules$pixi_DOT_js$dist$cjs$pixi=shadow.js.require("module$node_modules$pixi_DOT_js$dist$cjs$pixi", {});
var module$node_modules$fontfaceobserver$fontfaceobserver_standalone=shadow.js.require("module$node_modules$fontfaceobserver$fontfaceobserver_standalone", {});
if((typeof ellah !== 'undefined') && (typeof ellah.graphics !== 'undefined') && (typeof ellah.graphics.graphics_state !== 'undefined')){
} else {
ellah.graphics.graphics_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
ellah.graphics.get_graphics = (function ellah$graphics$get_graphics(var_args){
var args__4742__auto__ = [];
var len__4736__auto___91342 = arguments.length;
var i__4737__auto___91343 = (0);
while(true){
if((i__4737__auto___91343 < len__4736__auto___91342)){
args__4742__auto__.push((arguments[i__4737__auto___91343]));

var G__91344 = (i__4737__auto___91343 + (1));
i__4737__auto___91343 = G__91344;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return ellah.graphics.get_graphics.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(ellah.graphics.get_graphics.cljs$core$IFn$_invoke$arity$variadic = (function (p__91019){
var vec__91020 = p__91019;
var layer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91020,(0),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"graphics","graphics",-2079995979).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ellah.graphics.graphics_state)),(function (){var or__4126__auto__ = layer;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.first(ellah.constants.ui_layers);
}
})());
}));

(ellah.graphics.get_graphics.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(ellah.graphics.get_graphics.cljs$lang$applyTo = (function (seq91018){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq91018));
}));

ellah.graphics.set_attr_BANG_ = (function ellah$graphics$set_attr_BANG_(key,value){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ellah.graphics.graphics_state,(function (p1__91023_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__91023_SHARP_,key,value);
}));

return value;
});
ellah.graphics.update_attr_BANG_ = (function ellah$graphics$update_attr_BANG_(key,value){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ellah.graphics.graphics_state,(function (p1__91024_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__91024_SHARP_,key,value);
}));
});
ellah.graphics.app_width = (function ellah$graphics$app_width(){
return window.innerWidth;
});
ellah.graphics.app_height = (function ellah$graphics$app_height(){
return window.innerHeight;
});
ellah.graphics.app_size = (function ellah$graphics$app_size(){
var x__4217__auto__ = ellah.graphics.app_width();
var y__4218__auto__ = ellah.graphics.app_height();
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
});
ellah.graphics.app_aspect_ratio = (function ellah$graphics$app_aspect_ratio(){
return (ellah.graphics.app_width() / ellah.graphics.app_height());
});
ellah.graphics.resize = (function ellah$graphics$resize(){
return new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ellah.graphics.graphics_state)).renderer.resize(ellah.graphics.app_width(),ellah.graphics.app_height());
});
ellah.graphics.screen_x = (function ellah$graphics$screen_x(x){
var w = ellah.graphics.app_width();
var h = ellah.graphics.app_height();
var s = (function (){var x__4217__auto__ = w;
var y__4218__auto__ = h;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return ((0.5 * (w - s)) + (x * s));
});
ellah.graphics.layout_path_at = (function ellah$graphics$layout_path_at(layout,pos){
if(ellah.geometry.in_circle_QMARK_(layout,pos)){
var map__91025 = layout;
var map__91025__$1 = (((((!((map__91025 == null))))?(((((map__91025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91025.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__91025):map__91025);
var sublayouts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91025__$1,new cljs.core.Keyword(null,"sublayouts","sublayouts",-1203105463));
if(cljs.core.empty_QMARK_(sublayouts)){
return cljs.core.List.EMPTY;
} else {
var or__4126__auto__ = cljs.core.some((function (i){
var sublayout = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sublayouts,i);
var sub_path = (ellah.graphics.layout_path_at.cljs$core$IFn$_invoke$arity$2 ? ellah.graphics.layout_path_at.cljs$core$IFn$_invoke$arity$2(sublayout,pos) : ellah.graphics.layout_path_at.call(null,sublayout,pos));
if(cljs.core.truth_(sub_path)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sub_path,i);
} else {
return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(sublayouts)));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.List.EMPTY;
}
}
} else {
return null;
}
});
ellah.graphics.layout_insertion_path_at = (function ellah$graphics$layout_insertion_path_at(layout,pos){
if(ellah.geometry.in_circle_QMARK_(layout,pos)){
var map__91027 = layout;
var map__91027__$1 = (((((!((map__91027 == null))))?(((((map__91027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91027.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__91027):map__91027);
var sublayouts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91027__$1,new cljs.core.Keyword(null,"sublayouts","sublayouts",-1203105463));
if(cljs.core.empty_QMARK_(sublayouts)){
return cljs.core.List.EMPTY;
} else {
var or__4126__auto__ = cljs.core.some((function (i){
var sublayout = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sublayouts,i);
var sub_path = (ellah.graphics.layout_insertion_path_at.cljs$core$IFn$_invoke$arity$2 ? ellah.graphics.layout_insertion_path_at.cljs$core$IFn$_invoke$arity$2(sublayout,pos) : ellah.graphics.layout_insertion_path_at.call(null,sublayout,pos));
if(cljs.core.truth_(sub_path)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sub_path,i);
} else {
return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(sublayouts)));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var diff = ellah.geometry.subtract_points(pos,layout);
return (new cljs.core.List(null,(((cljs.core.count(sublayouts) * cljs.core.mod((ellah.geometry.point_angle(diff) + ellah.geometry.PI),ellah.geometry.TAU)) / ellah.geometry.TAU) | (0)),null,(1),null));
}
}
} else {
return null;
}
});
ellah.graphics.get_sublayout = (function ellah$graphics$get_sublayout(layout,path){
if(cljs.core.empty_QMARK_(path)){
return layout;
} else {
var G__91029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sublayouts","sublayouts",-1203105463).cljs$core$IFn$_invoke$arity$1(layout),cljs.core.first(path));
var G__91030 = cljs.core.rest(path);
return (ellah.graphics.get_sublayout.cljs$core$IFn$_invoke$arity$2 ? ellah.graphics.get_sublayout.cljs$core$IFn$_invoke$arity$2(G__91029,G__91030) : ellah.graphics.get_sublayout.call(null,G__91029,G__91030));
}
});
ellah.graphics.form_layout = (function ellah$graphics$form_layout(form,starting_layout){
var current_layout = starting_layout;
var map__91031 = form;
var map__91031__$1 = (((((!((map__91031 == null))))?(((((map__91031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91031.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__91031):map__91031);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91031__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91031__$1,new cljs.core.Keyword(null,"value","value",305978217));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91031__$1,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"literal","literal",1664775605))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(current_layout,new cljs.core.Keyword(null,"type","type",1174270348),type,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"value","value",305978217),value], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(current_layout,new cljs.core.Keyword(null,"type","type",1174270348),type,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"sublayouts","sublayouts",-1203105463),(function (){var subform_count = cljs.core.count(children);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(subform_count,(1))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__91033 = cljs.core.first(children);
var G__91034 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(current_layout,new cljs.core.Keyword(null,"radius","radius",-2073122258),(ellah.constants.sole_subform_shrink_factor * new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(current_layout)));
return (ellah.graphics.form_layout.cljs$core$IFn$_invoke$arity$2 ? ellah.graphics.form_layout.cljs$core$IFn$_invoke$arity$2(G__91033,G__91034) : ellah.graphics.form_layout.call(null,G__91033,G__91034));
})()], null);
} else {
var raw_radius = Math.sin((Math.PI / subform_count));
var unscaled_radius = (raw_radius / (raw_radius + (1)));
var radius = ((unscaled_radius * ((1) - ellah.constants.bubble_thickness)) * new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(current_layout));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (subform,i){
var angle = ((Math.PI * -0.5) - (((Math.PI * (2)) * i) / subform_count));
var G__91035 = subform;
var G__91036 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([current_layout,ellah.geometry.scale_point(ellah.geometry.angle_point(angle),((new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(current_layout) * ((1) - ellah.constants.bubble_thickness)) - radius))], 0)),new cljs.core.Keyword(null,"radius","radius",-2073122258),(ellah.constants.subform_shrink_factor * radius));
return (ellah.graphics.form_layout.cljs$core$IFn$_invoke$arity$2 ? ellah.graphics.form_layout.cljs$core$IFn$_invoke$arity$2(G__91035,G__91036) : ellah.graphics.form_layout.call(null,G__91035,G__91036));
}),children,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
}
})()], 0));
}
});
ellah.graphics.current_form_layout = (function ellah$graphics$current_form_layout(){
return ellah.graphics.form_layout(cljs.core.first(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ellah.graphics.graphics_state)))),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ellah.geometry.origin,new cljs.core.Keyword(null,"radius","radius",-2073122258),(1)));
});
ellah.graphics.ideal_camera_pos = (function ellah$graphics$ideal_camera_pos(){
return ellah.geometry.scale_point(ellah.graphics.get_sublayout(ellah.graphics.current_form_layout(),new cljs.core.Keyword(null,"selected-layout-path","selected-layout-path",1007788705).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ellah.graphics.graphics_state))),(-1));
});
ellah.graphics.ideal_camera_zoom = (function ellah$graphics$ideal_camera_zoom(){
return (ellah.constants.base_zoom / new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(ellah.graphics.get_sublayout(ellah.graphics.current_form_layout(),new cljs.core.Keyword(null,"selected-layout-path","selected-layout-path",1007788705).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ellah.graphics.graphics_state)))));
});
ellah.graphics.screen_y = (function ellah$graphics$screen_y(y){
var w = ellah.graphics.app_width();
var h = ellah.graphics.app_height();
var s = (function (){var x__4217__auto__ = w;
var y__4218__auto__ = h;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return ((0.5 * (h - s)) + (y * s));
});
ellah.graphics.rect = (function ellah$graphics$rect(var_args){
var args__4742__auto__ = [];
var len__4736__auto___91345 = arguments.length;
var i__4737__auto___91346 = (0);
while(true){
if((i__4737__auto___91346 < len__4736__auto___91345)){
args__4742__auto__.push((arguments[i__4737__auto___91346]));

var G__91347 = (i__4737__auto___91346 + (1));
i__4737__auto___91346 = G__91347;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return ellah.graphics.rect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(ellah.graphics.rect.cljs$core$IFn$_invoke$arity$variadic = (function (pos,size,fill,p__91041){
var vec__91042 = p__91041;
var layer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91042,(0),null);
var graphics = ellah.graphics.get_graphics.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([layer], 0));
graphics.beginFill(fill);

graphics.drawRect(ellah.graphics.screen_x(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(pos)),ellah.graphics.screen_y(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(pos)),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(size) * ellah.graphics.app_size()),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(size) * ellah.graphics.app_size()));

return graphics.endFill();
}));

(ellah.graphics.rect.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(ellah.graphics.rect.cljs$lang$applyTo = (function (seq91037){
var G__91038 = cljs.core.first(seq91037);
var seq91037__$1 = cljs.core.next(seq91037);
var G__91039 = cljs.core.first(seq91037__$1);
var seq91037__$2 = cljs.core.next(seq91037__$1);
var G__91040 = cljs.core.first(seq91037__$2);
var seq91037__$3 = cljs.core.next(seq91037__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__91038,G__91039,G__91040,seq91037__$3);
}));

ellah.graphics.circle = (function ellah$graphics$circle(var_args){
var args__4742__auto__ = [];
var len__4736__auto___91348 = arguments.length;
var i__4737__auto___91349 = (0);
while(true){
if((i__4737__auto___91349 < len__4736__auto___91348)){
args__4742__auto__.push((arguments[i__4737__auto___91349]));

var G__91350 = (i__4737__auto___91349 + (1));
i__4737__auto___91349 = G__91350;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic = (function (p__91048,fill,p__91049){
var map__91050 = p__91048;
var map__91050__$1 = (((((!((map__91050 == null))))?(((((map__91050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91050.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__91050):map__91050);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91050__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91050__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91050__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var vec__91051 = p__91049;
var layer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91051,(0),null);
var graphics = ellah.graphics.get_graphics.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([layer], 0));
graphics.beginFill(fill);

graphics.drawCircle(ellah.graphics.screen_x(x),ellah.graphics.screen_y(y),(radius * ellah.graphics.app_size()));

return graphics.endFill();
}));

(ellah.graphics.circle.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(ellah.graphics.circle.cljs$lang$applyTo = (function (seq91045){
var G__91046 = cljs.core.first(seq91045);
var seq91045__$1 = cljs.core.next(seq91045);
var G__91047 = cljs.core.first(seq91045__$1);
var seq91045__$2 = cljs.core.next(seq91045__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__91046,G__91047,seq91045__$2);
}));

ellah.graphics.polygon = (function ellah$graphics$polygon(var_args){
var args__4742__auto__ = [];
var len__4736__auto___91351 = arguments.length;
var i__4737__auto___91352 = (0);
while(true){
if((i__4737__auto___91352 < len__4736__auto___91351)){
args__4742__auto__.push((arguments[i__4737__auto___91352]));

var G__91353 = (i__4737__auto___91352 + (1));
i__4737__auto___91352 = G__91353;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return ellah.graphics.polygon.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(ellah.graphics.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (points,fill,p__91059){
var vec__91060 = p__91059;
var layer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91060,(0),null);
var graphics = ellah.graphics.get_graphics.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([layer], 0));
graphics.beginFill(fill);

graphics.drawPolygon(cljs.core.clj__GT_js(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__91055_SHARP_){
return (new module$node_modules$pixi_DOT_js$dist$cjs$pixi.Point(ellah.graphics.screen_x(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p1__91055_SHARP_)),ellah.graphics.screen_y(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p1__91055_SHARP_))));
}),points)));

return graphics.endFill();
}));

(ellah.graphics.polygon.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(ellah.graphics.polygon.cljs$lang$applyTo = (function (seq91056){
var G__91057 = cljs.core.first(seq91056);
var seq91056__$1 = cljs.core.next(seq91056);
var G__91058 = cljs.core.first(seq91056__$1);
var seq91056__$2 = cljs.core.next(seq91056__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__91057,G__91058,seq91056__$2);
}));

ellah.graphics.line = (function ellah$graphics$line(var_args){
var args__4742__auto__ = [];
var len__4736__auto___91354 = arguments.length;
var i__4737__auto___91355 = (0);
while(true){
if((i__4737__auto___91355 < len__4736__auto___91354)){
args__4742__auto__.push((arguments[i__4737__auto___91355]));

var G__91356 = (i__4737__auto___91355 + (1));
i__4737__auto___91355 = G__91356;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return ellah.graphics.line.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(ellah.graphics.line.cljs$core$IFn$_invoke$arity$variadic = (function (start,end,width,color,p__91068){
var vec__91069 = p__91068;
var layer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91069,(0),null);
var graphics = ellah.graphics.get_graphics.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([layer], 0));
graphics.lineStyle((width * ellah.graphics.app_width()),color);

graphics.moveTo(ellah.graphics.screen_x(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(start)),ellah.graphics.screen_y(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(start)));

graphics.lineTo(ellah.graphics.screen_x(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(end)),ellah.graphics.screen_y(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(end)));

return graphics.lineStyle((0));
}));

(ellah.graphics.line.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(ellah.graphics.line.cljs$lang$applyTo = (function (seq91063){
var G__91064 = cljs.core.first(seq91063);
var seq91063__$1 = cljs.core.next(seq91063);
var G__91065 = cljs.core.first(seq91063__$1);
var seq91063__$2 = cljs.core.next(seq91063__$1);
var G__91066 = cljs.core.first(seq91063__$2);
var seq91063__$3 = cljs.core.next(seq91063__$2);
var G__91067 = cljs.core.first(seq91063__$3);
var seq91063__$4 = cljs.core.next(seq91063__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__91064,G__91065,G__91066,G__91067,seq91063__$4);
}));

ellah.graphics.text = (function ellah$graphics$text(var_args){
var args__4742__auto__ = [];
var len__4736__auto___91357 = arguments.length;
var i__4737__auto___91358 = (0);
while(true){
if((i__4737__auto___91358 < len__4736__auto___91357)){
args__4742__auto__.push((arguments[i__4737__auto___91358]));

var G__91359 = (i__4737__auto___91358 + (1));
i__4737__auto___91358 = G__91359;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return ellah.graphics.text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(ellah.graphics.text.cljs$core$IFn$_invoke$arity$variadic = (function (s,pos,size,color,p__91077){
var vec__91078 = p__91077;
var layer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91078,(0),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"font-loaded?","font-loaded?",-1665361590).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ellah.graphics.graphics_state)))){
var length = cljs.core.count(s);
var t = (new module$node_modules$pixi_DOT_js$dist$cjs$pixi.Text(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fontFamily","fontFamily",1493518353),ellah.constants.font_name,new cljs.core.Keyword(null,"fontSize","fontSize",919623033),"8pt",new cljs.core.Keyword(null,"fill","fill",883462889),color], null))));
var scale = ((size * ellah.graphics.app_size()) * (function (){var x__4217__auto__ = ellah.constants.text_max_size;
var y__4218__auto__ = (ellah.constants.text_scale_factor / length);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})());
(t.x = ((ellah.graphics.screen_x(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(pos)) + (scale * ellah.constants.text_x_offset)) - ((t.width * scale) * 0.5)));

(t.y = ((ellah.graphics.screen_y(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(pos)) + (scale * ellah.constants.text_y_offset)) - ((t.height * scale) * 0.5)));

(t.scale.x = scale);

(t.scale.y = scale);

(t.resolution = (10));

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"texts","texts",-2031072472).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ellah.graphics.graphics_state)),(function (){var or__4126__auto__ = layer;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.first(ellah.constants.ui_layers);
}
})()).addChild(t);
} else {
return null;
}
}));

(ellah.graphics.text.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(ellah.graphics.text.cljs$lang$applyTo = (function (seq91072){
var G__91073 = cljs.core.first(seq91072);
var seq91072__$1 = cljs.core.next(seq91072);
var G__91074 = cljs.core.first(seq91072__$1);
var seq91072__$2 = cljs.core.next(seq91072__$1);
var G__91075 = cljs.core.first(seq91072__$2);
var seq91072__$3 = cljs.core.next(seq91072__$2);
var G__91076 = cljs.core.first(seq91072__$3);
var seq91072__$4 = cljs.core.next(seq91072__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__91073,G__91074,G__91075,G__91076,seq91072__$4);
}));

ellah.graphics.flatten_layout = (function ellah$graphics$flatten_layout(layout){
if(cljs.core.truth_(new cljs.core.Keyword(null,"sublayouts","sublayouts",-1203105463).cljs$core$IFn$_invoke$arity$1(layout))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(ellah.graphics.flatten_layout,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"sublayouts","sublayouts",-1203105463).cljs$core$IFn$_invoke$arity$1(layout)], 0)),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(layout,new cljs.core.Keyword(null,"sublayouts","sublayouts",-1203105463)));
} else {
return (new cljs.core.List(null,layout,null,(1),null));
}
});
ellah.graphics.app_rect = (function ellah$graphics$app_rect(){
return ellah.geometry.rect_around(ellah.geometry.unit_square,ellah.graphics.app_aspect_ratio());
});
ellah.graphics.adjust_layout = (function ellah$graphics$adjust_layout(pos,zoom,layout){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(layout,new cljs.core.Keyword(null,"x","x",2099068185),(function (p1__91081_SHARP_){
return (zoom * (p1__91081_SHARP_ + new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(pos)));
})),new cljs.core.Keyword(null,"y","y",-1757859776),(function (p1__91082_SHARP_){
return (zoom * (p1__91082_SHARP_ + new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(pos)));
})),new cljs.core.Keyword(null,"radius","radius",-2073122258),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,zoom)),new cljs.core.Keyword(null,"sublayouts","sublayouts",-1203105463),(function (p1__91083_SHARP_){
if(cljs.core.truth_(p1__91083_SHARP_)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(ellah.graphics.adjust_layout,pos,zoom),p1__91083_SHARP_);
} else {
return null;
}
}));
});
ellah.graphics.render_layout = (function ellah$graphics$render_layout(var_args){
var args__4742__auto__ = [];
var len__4736__auto___91360 = arguments.length;
var i__4737__auto___91361 = (0);
while(true){
if((i__4737__auto___91361 < len__4736__auto___91360)){
args__4742__auto__.push((arguments[i__4737__auto___91361]));

var G__91362 = (i__4737__auto___91361 + (1));
i__4737__auto___91361 = G__91362;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return ellah.graphics.render_layout.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(ellah.graphics.render_layout.cljs$core$IFn$_invoke$arity$variadic = (function (layout,p__91088){
var vec__91089 = p__91088;
var layer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91089,(0),null);
var center = layout;
var radius = new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(layout);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(layout),new cljs.core.Keyword(null,"list","list",765357683))){
ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic(layout,ellah.constants.foreground_color,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([layer], 0));

ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update.cljs$core$IFn$_invoke$arity$3(layout,new cljs.core.Keyword(null,"radius","radius",-2073122258),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,((1) - ellah.constants.bubble_thickness))),ellah.constants.background_color,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([layer], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(layout),new cljs.core.Keyword(null,"vector","vector",1902966158))){
ellah.graphics.polygon.cljs$core$IFn$_invoke$arity$variadic(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__91084_SHARP_){
return ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([center,ellah.geometry.scale_point(p1__91084_SHARP_,(radius * ellah.constants.vector_size_factor))], 0));
}),ellah.geometry.polygon.cljs$core$IFn$_invoke$arity$variadic((8),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(ellah.geometry.PI * 0.125)], 0))),ellah.constants.foreground_color,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([layer], 0));

ellah.graphics.polygon.cljs$core$IFn$_invoke$arity$variadic(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__91085_SHARP_){
return ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([center,ellah.geometry.scale_point(p1__91085_SHARP_,((radius * ellah.constants.vector_size_factor) * ((1) - ellah.constants.bubble_thickness)))], 0));
}),ellah.geometry.polygon.cljs$core$IFn$_invoke$arity$variadic((8),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(ellah.geometry.PI * 0.125)], 0))),ellah.constants.background_color,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([layer], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(layout),new cljs.core.Keyword(null,"literal","literal",1664775605))){
ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic(layout,ellah.constants.foreground_color,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([layer], 0));

return ellah.graphics.text.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(layout),layout,new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(layout),ellah.constants.text_color,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([layer], 0));
} else {
return null;
}
}));

(ellah.graphics.render_layout.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(ellah.graphics.render_layout.cljs$lang$applyTo = (function (seq91086){
var G__91087 = cljs.core.first(seq91086);
var seq91086__$1 = cljs.core.next(seq91086);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__91087,seq91086__$1);
}));

ellah.graphics.formbar_y = (function ellah$graphics$formbar_y(index){
var vec__91092 = ellah.graphics.app_rect();
var app_pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91092,(0),null);
var app_size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91092,(1),null);
return ((((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(app_pos) + new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(app_size)) - ellah.constants.formbar_pos) - ellah.constants.formbar_radius) - (index * (((2) * ellah.constants.formbar_radius) * ellah.constants.formbar_spacing)));
});
ellah.graphics.formbar_zone_top = (function ellah$graphics$formbar_zone_top(){
return (ellah.graphics.formbar_y((cljs.core.count(new cljs.core.Keyword(null,"formbars","formbars",393026901).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ellah.graphics.graphics_state))) - (1))) - ellah.constants.formbar_radius);
});
ellah.graphics.adjusted_form_layout = (function ellah$graphics$adjusted_form_layout(){
var vec__91095 = ellah.graphics.app_rect();
var app_pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91095,(0),null);
var app_size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91095,(1),null);
var min_y = (function (){var x__4217__auto__ = (0);
var y__4218__auto__ = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(app_pos);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
var max_y = (function (){var x__4217__auto__ = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(app_size) + new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(app_pos));
var y__4218__auto__ = ellah.graphics.formbar_zone_top();
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
var y_space = (max_y - min_y);
var radius = (function (){var x__4217__auto__ = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(app_size);
var y__4218__auto__ = y_space;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return ellah.graphics.adjust_layout(ellah.geometry.unit,0.5,ellah.graphics.adjust_layout(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),((y_space - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(app_size)) / radius)], null),radius,ellah.graphics.adjust_layout(new cljs.core.Keyword(null,"camera-pos","camera-pos",666924233).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ellah.graphics.graphics_state)),new cljs.core.Keyword(null,"camera-zoom","camera-zoom",-1214902147).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ellah.graphics.graphics_state)),ellah.graphics.current_form_layout())));
});
ellah.graphics.formbar_width = (function ellah$graphics$formbar_width(index){
var x__4214__auto__ = (0);
var y__4215__auto__ = (function (){var size = cljs.core.count(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"formbars","formbars",393026901).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ellah.graphics.graphics_state)),index)));
return ((((size - (1)) * (2)) * ellah.constants.formbar_radius) * ellah.constants.formbar_form_size);
})();
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
});
ellah.graphics.formbar_form_spacing = (((2) * ellah.constants.formbar_radius) * ellah.constants.formbar_form_size);
ellah.graphics.formbar_circle = (function ellah$graphics$formbar_circle(outer_index,inner_index){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),((0.5 * ((1) - ellah.graphics.formbar_width(outer_index))) + (inner_index * ellah.graphics.formbar_form_spacing)),new cljs.core.Keyword(null,"y","y",-1757859776),ellah.graphics.formbar_y(outer_index),new cljs.core.Keyword(null,"radius","radius",-2073122258),((ellah.constants.formbar_radius * ellah.constants.formbar_form_size) * ((1) - ellah.constants.formbar_outline_thickness))], null);
});
ellah.graphics.get_mouse_zone = (function ellah$graphics$get_mouse_zone(){
var vec__91098 = ellah.graphics.app_rect();
var app_pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91098,(0),null);
var app_size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91098,(1),null);
var map__91101 = cljs.core.deref(ellah.graphics.graphics_state);
var map__91101__$1 = (((((!((map__91101 == null))))?(((((map__91101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__91101):map__91101);
var mouse = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91101__$1,new cljs.core.Keyword(null,"mouse","mouse",478628972));
var eval_zone_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91101__$1,new cljs.core.Keyword(null,"eval-zone-size","eval-zone-size",1345284358));
if((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(mouse) >= (((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(app_size) + new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(app_pos)) + (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(mouse) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(app_pos))) - ellah.constants.discard_zone_size))){
return new cljs.core.Keyword(null,"discard","discard",-1939593545);
} else {
if((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(mouse) >= (((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(app_size) + new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(app_pos)) + (((1) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(mouse)) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(app_pos))) - eval_zone_size))){
return new cljs.core.Keyword(null,"eval","eval",-1103567905);
} else {
if(cljs.core.truth_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (previous_true_QMARK_,formbar_index){
var or__4126__auto__ = previous_true_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return ((ellah.geometry.in_circle_QMARK_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),(0.5 * ((1) - ellah.graphics.formbar_width(formbar_index))),new cljs.core.Keyword(null,"y","y",-1757859776),ellah.graphics.formbar_y(formbar_index),new cljs.core.Keyword(null,"radius","radius",-2073122258),ellah.constants.formbar_radius], null),mouse)) || (ellah.geometry.in_circle_QMARK_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),(0.5 * ((1) + ellah.graphics.formbar_width(formbar_index))),new cljs.core.Keyword(null,"y","y",-1757859776),ellah.graphics.formbar_y(formbar_index),new cljs.core.Keyword(null,"radius","radius",-2073122258),ellah.constants.formbar_radius], null),mouse)) || (ellah.geometry.in_rect_QMARK_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0.5 * ((1) - ellah.graphics.formbar_width(formbar_index))),new cljs.core.Keyword(null,"y","y",-1757859776),(ellah.graphics.formbar_y(formbar_index) - ellah.constants.formbar_radius)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),ellah.graphics.formbar_width(formbar_index),new cljs.core.Keyword(null,"y","y",-1757859776),((2) * ellah.constants.formbar_radius)], null)], null),mouse)));
}
}),false,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"formbars","formbars",393026901).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ellah.graphics.graphics_state))))))){
return new cljs.core.Keyword(null,"formbar","formbar",824418093);
} else {
return new cljs.core.Keyword(null,"program","program",781564284);

}
}
}
});
ellah.graphics.render_sublayouts = (function ellah$graphics$render_sublayouts(var_args){
var args__4742__auto__ = [];
var len__4736__auto___91363 = arguments.length;
var i__4737__auto___91364 = (0);
while(true){
if((i__4737__auto___91364 < len__4736__auto___91363)){
args__4742__auto__.push((arguments[i__4737__auto___91364]));

var G__91365 = (i__4737__auto___91364 + (1));
i__4737__auto___91364 = G__91365;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return ellah.graphics.render_sublayouts.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(ellah.graphics.render_sublayouts.cljs$core$IFn$_invoke$arity$variadic = (function (layout,p__91105){
var vec__91106 = p__91105;
var layer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91106,(0),null);
var seq__91109 = cljs.core.seq(ellah.graphics.flatten_layout(layout));
var chunk__91110 = null;
var count__91111 = (0);
var i__91112 = (0);
while(true){
if((i__91112 < count__91111)){
var sublayout = chunk__91110.cljs$core$IIndexed$_nth$arity$2(null,i__91112);
ellah.graphics.render_layout.cljs$core$IFn$_invoke$arity$variadic(sublayout,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([layer], 0));


var G__91366 = seq__91109;
var G__91367 = chunk__91110;
var G__91368 = count__91111;
var G__91369 = (i__91112 + (1));
seq__91109 = G__91366;
chunk__91110 = G__91367;
count__91111 = G__91368;
i__91112 = G__91369;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__91109);
if(temp__5753__auto__){
var seq__91109__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__91109__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__91109__$1);
var G__91370 = cljs.core.chunk_rest(seq__91109__$1);
var G__91371 = c__4556__auto__;
var G__91372 = cljs.core.count(c__4556__auto__);
var G__91373 = (0);
seq__91109 = G__91370;
chunk__91110 = G__91371;
count__91111 = G__91372;
i__91112 = G__91373;
continue;
} else {
var sublayout = cljs.core.first(seq__91109__$1);
ellah.graphics.render_layout.cljs$core$IFn$_invoke$arity$variadic(sublayout,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([layer], 0));


var G__91374 = cljs.core.next(seq__91109__$1);
var G__91375 = null;
var G__91376 = (0);
var G__91377 = (0);
seq__91109 = G__91374;
chunk__91110 = G__91375;
count__91111 = G__91376;
i__91112 = G__91377;
continue;
}
} else {
return null;
}
}
break;
}
}));

(ellah.graphics.render_sublayouts.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(ellah.graphics.render_sublayouts.cljs$lang$applyTo = (function (seq91103){
var G__91104 = cljs.core.first(seq91103);
var seq91103__$1 = cljs.core.next(seq91103);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__91104,seq91103__$1);
}));

ellah.graphics.mouse_dragging_QMARK_ = (function ellah$graphics$mouse_dragging_QMARK_(){
return (new cljs.core.Keyword(null,"drag-dist","drag-dist",-1927545717).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mouse","mouse",478628972).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ellah.graphics.graphics_state))) > ellah.constants.min_drag_dist);
});
ellah.graphics.placement_form = (function ellah$graphics$placement_form(){
var mouse_state = new cljs.core.Keyword(null,"mouse","mouse",478628972).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ellah.graphics.graphics_state));
var map__91113 = mouse_state;
var map__91113__$1 = (((((!((map__91113 == null))))?(((((map__91113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91113.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__91113):map__91113);
var down_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91113__$1,new cljs.core.Keyword(null,"down?","down?",1701019493));
var down_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91113__$1,new cljs.core.Keyword(null,"down-path","down-path",-1576662356));
var down_zone = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91113__$1,new cljs.core.Keyword(null,"down-zone","down-zone",-858806618));
var down_formbar_indeces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91113__$1,new cljs.core.Keyword(null,"down-formbar-indeces","down-formbar-indeces",-1191819382));
var vec__91114 = down_formbar_indeces;
var down_formbar_outer_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91114,(0),null);
var down_formbar_inner_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91114,(1),null);
if(cljs.core.truth_(down_QMARK_)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(down_zone,new cljs.core.Keyword(null,"program","program",781564284))){
return ellah.vedn.get_child(new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ellah.graphics.graphics_state)),cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.list((0)),down_path)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(down_zone,new cljs.core.Keyword(null,"eval","eval",-1103567905))){
return cljs.core.last(new cljs.core.Keyword(null,"eval-results","eval-results",553789722).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ellah.graphics.graphics_state)));
} else {
if(cljs.core.truth_(down_formbar_indeces)){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"formbars","formbars",393026901).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ellah.graphics.graphics_state)),down_formbar_outer_index)),down_formbar_inner_index);
} else {
return null;
}
}
}
} else {
return null;
}
});
ellah.graphics.formbar_insertion_indeces = (function ellah$graphics$formbar_insertion_indeces(p__91119){
var map__91120 = p__91119;
var map__91120__$1 = (((((!((map__91120 == null))))?(((((map__91120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__91120):map__91120);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91120__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91120__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__91122 = cljs.core.deref(ellah.graphics.graphics_state);
var map__91122__$1 = (((((!((map__91122 == null))))?(((((map__91122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91122.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__91122):map__91122);
var formbars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91122__$1,new cljs.core.Keyword(null,"formbars","formbars",393026901));
var formbar_count = cljs.core.count(formbars);
var outer_index = cljs.core.some((function (p1__91118_SHARP_){
if(((ellah.graphics.formbar_y(p1__91118_SHARP_) - ellah.constants.formbar_radius) < y)){
return p1__91118_SHARP_;
} else {
return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(formbar_count));
var width = ellah.graphics.formbar_width(outer_index);
var x_offset = (x - ((0.5 * ((1) - width)) - ellah.constants.formbar_radius));
var adjusted_x = ((x_offset / ellah.graphics.formbar_form_spacing) - 0.5);
var inner_index = (((adjusted_x < (0)))?(-1):(adjusted_x | (0)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [outer_index,inner_index], null);
});
ellah.graphics.render_app_state = (function ellah$graphics$render_app_state(state,control_state){
var vec__91128 = ellah.graphics.app_rect();
var app_pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91128,(0),null);
var app_size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91128,(1),null);
var mouse_zone = ellah.graphics.get_mouse_zone();
var current_placement_form = ellah.graphics.placement_form();
ellah.graphics.rect(app_pos,app_size,ellah.constants.background_color);

var map__91131 = cljs.core.deref(ellah.graphics.graphics_state);
var map__91131__$1 = (((((!((map__91131 == null))))?(((((map__91131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91131.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__91131):map__91131);
var mouse = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91131__$1,new cljs.core.Keyword(null,"mouse","mouse",478628972));
var dragging_QMARK_ = ellah.graphics.mouse_dragging_QMARK_();
ellah.graphics.render_sublayouts(ellah.graphics.adjusted_form_layout());

if(cljs.core.truth_(((dragging_QMARK_)?ellah.graphics.placement_form():false))){
ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(mouse,new cljs.core.Keyword(null,"radius","radius",-2073122258),ellah.constants.drag_cursor_radius),ellah.constants.highlight_color,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"drag","drag",449951290)], 0));
} else {
}

var layout_path_91378 = ellah.graphics.layout_path_at(ellah.graphics.adjusted_form_layout(),new cljs.core.Keyword(null,"mouse","mouse",478628972).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ellah.graphics.graphics_state)));
var insertion_path_91379 = ellah.graphics.layout_insertion_path_at(ellah.graphics.adjusted_form_layout(),new cljs.core.Keyword(null,"mouse","mouse",478628972).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ellah.graphics.graphics_state)));
var literal_QMARK__91380 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(layout_path_91378),cljs.core.count(insertion_path_91379))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"literal","literal",1664775605),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ellah.vedn.get_child(new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ellah.graphics.graphics_state)),cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.list((0)),insertion_path_91379)))))));
if(cljs.core.truth_((function (){var and__4115__auto__ = layout_path_91378;
if(cljs.core.truth_(and__4115__auto__)){
return (((!(dragging_QMARK_))) && (literal_QMARK__91380));
} else {
return and__4115__auto__;
}
})())){
ellah.graphics.circle(ellah.graphics.get_sublayout(ellah.graphics.adjusted_form_layout(),layout_path_91378),ellah.constants.highlight_color);
} else {
}

if(cljs.core.truth_((function (){var and__4115__auto__ = layout_path_91378;
if(cljs.core.truth_(and__4115__auto__)){
return current_placement_form;
} else {
return and__4115__auto__;
}
})())){
var sublayout_91381 = ellah.graphics.get_sublayout(ellah.graphics.adjusted_form_layout(),layout_path_91378);
if(dragging_QMARK_){
var parent_radius_91382 = new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(sublayout_91381);
var radius_91383 = (ellah.constants.drop_form_radius_factor * new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"sublayouts","sublayouts",-1203105463).cljs$core$IFn$_invoke$arity$1(sublayout_91381))));
var child_count_91384 = cljs.core.count(new cljs.core.Keyword(null,"sublayouts","sublayouts",-1203105463).cljs$core$IFn$_invoke$arity$1(sublayout_91381));
var angle_91385 = (- ((((cljs.core.last(insertion_path_91379) + 0.5) / child_count_91384) + 0.25) * ellah.geometry.TAU));
var placement_pos_91386 = ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sublayout_91381,ellah.geometry.scale_point(ellah.geometry.angle_point(angle_91385),(parent_radius_91382 - (ellah.constants.drop_form_offset_factor * radius_91383)))], 0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mouse_zone,new cljs.core.Keyword(null,"program","program",781564284))){
ellah.graphics.line.cljs$core$IFn$_invoke$arity$variadic(mouse,placement_pos_91386,ellah.constants.drag_cursor_line_width,ellah.constants.highlight_color,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"drag-forms","drag-forms",75833442)], 0));

var base_sublayout_91387 = ellah.graphics.form_layout(ellah.graphics.placement_form(),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ellah.geometry.origin,new cljs.core.Keyword(null,"radius","radius",-2073122258),(1)));
if(literal_QMARK__91380){
ellah.graphics.render_sublayouts.cljs$core$IFn$_invoke$arity$variadic(ellah.graphics.adjust_layout(ellah.geometry.scale_point(sublayout_91381,((1) / new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(sublayout_91381))),new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(sublayout_91381),base_sublayout_91387),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"drag-forms","drag-forms",75833442)], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ellah.vedn.get_child(new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ellah.graphics.graphics_state)),cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.list((0)),layout_path_91378))))))){
ellah.graphics.render_sublayouts.cljs$core$IFn$_invoke$arity$variadic(ellah.graphics.adjust_layout(ellah.geometry.scale_point(sublayout_91381,((1) / (ellah.constants.drop_form_radius_factor * new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(sublayout_91381)))),(ellah.constants.drop_form_radius_factor * new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(sublayout_91381)),base_sublayout_91387),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"drag-forms","drag-forms",75833442)], 0));
} else {
ellah.graphics.render_sublayouts.cljs$core$IFn$_invoke$arity$variadic(ellah.graphics.adjust_layout(ellah.geometry.scale_point(placement_pos_91386,((1) / radius_91383)),radius_91383,base_sublayout_91387),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"drag-forms","drag-forms",75833442)], 0));
}
}
} else {
}
} else {
}
} else {
}

ellah.graphics.polygon.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app_pos,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(app_size)], null)], 0)),ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app_pos,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),ellah.constants.discard_zone_size,new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(app_size)], null)], 0)),ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app_pos,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(app_size) - ellah.constants.discard_zone_size)], null)], 0))], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mouse_zone,new cljs.core.Keyword(null,"discard","discard",-1939593545)))?ellah.constants.highlight_color:ellah.constants.foreground_color),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"menu","menu",352255198)], 0));

ellah.graphics.polygon.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app_pos,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(app_size)], null)], 0)),ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app_pos,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(((1) - ellah.constants.discard_zone_bar_thickness) * ellah.constants.discard_zone_size),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(app_size)], null)], 0)),ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app_pos,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(app_size) - (((1) - ellah.constants.discard_zone_bar_thickness) * ellah.constants.discard_zone_size))], null)], 0))], null),ellah.constants.background_color,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"menu","menu",352255198)], 0));

var eval_zone_size_91388 = new cljs.core.Keyword(null,"eval-zone-size","eval-zone-size",1345284358).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ellah.graphics.graphics_state));
ellah.graphics.polygon.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app_pos,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(app_size),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(app_size)], null)], 0)),ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app_pos,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(app_size) - eval_zone_size_91388),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(app_size)], null)], 0)),ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app_pos,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(app_size),new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(app_size) - eval_zone_size_91388)], null)], 0))], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mouse_zone,new cljs.core.Keyword(null,"eval","eval",-1103567905)))?ellah.constants.highlight_color:ellah.constants.foreground_color),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"menu","menu",352255198)], 0));

ellah.graphics.polygon.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app_pos,app_size], 0)),ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app_pos,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(app_size) - (((1) - ellah.constants.eval_zone_bar_thickness) * eval_zone_size_91388)),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(app_size)], null)], 0)),ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app_pos,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(app_size),new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(app_size) - (((1) - ellah.constants.eval_zone_bar_thickness) * eval_zone_size_91388))], null)], 0))], null),ellah.constants.background_color,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"menu","menu",352255198)], 0));

var last_eval_form_91389 = cljs.core.last(new cljs.core.Keyword(null,"eval-results","eval-results",553789722).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ellah.graphics.graphics_state)));
if(cljs.core.truth_(last_eval_form_91389)){
var s_91390 = (((1) - ellah.constants.eval_zone_bar_thickness) * new cljs.core.Keyword(null,"eval-zone-size","eval-zone-size",1345284358).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ellah.graphics.graphics_state)));
var radius_91391 = (s_91390 / (Math.sqrt((2)) + (2)));
ellah.graphics.render_sublayouts.cljs$core$IFn$_invoke$arity$variadic(ellah.graphics.form_layout(last_eval_form_91389,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ellah.geometry.subtract_points(ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app_pos,app_size], 0)),ellah.geometry.scale_point(ellah.geometry.unit,radius_91391)),new cljs.core.Keyword(null,"radius","radius",-2073122258),(radius_91391 * ellah.constants.eval_zone_form_radius_factor))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"menu","menu",352255198)], 0));
} else {
}

var seq__91133_91392 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"formbars","formbars",393026901).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ellah.graphics.graphics_state)))));
var chunk__91134_91393 = null;
var count__91135_91394 = (0);
var i__91136_91395 = (0);
while(true){
if((i__91136_91395 < count__91135_91394)){
var formbar_index_91396 = chunk__91134_91393.cljs$core$IIndexed$_nth$arity$2(null,i__91136_91395);
var map__91205_91397 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"formbars","formbars",393026901).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ellah.graphics.graphics_state)),formbar_index_91396);
var map__91205_91398__$1 = (((((!((map__91205_91397 == null))))?(((((map__91205_91397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91205_91397.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__91205_91397):map__91205_91397);
var forms_91399 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91205_91398__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var seq__91207_91400 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"radius-factor","radius-factor",-1083742108),(1),new cljs.core.Keyword(null,"color","color",1011675173),ellah.constants.foreground_color], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"radius-factor","radius-factor",-1083742108),((1) - ellah.constants.formbar_outline_thickness),new cljs.core.Keyword(null,"color","color",1011675173),ellah.constants.background_color], null)], null));
var chunk__91208_91401 = null;
var count__91209_91402 = (0);
var i__91210_91403 = (0);
while(true){
if((i__91210_91403 < count__91209_91402)){
var map__91223_91404 = chunk__91208_91401.cljs$core$IIndexed$_nth$arity$2(null,i__91210_91403);
var map__91223_91405__$1 = (((((!((map__91223_91404 == null))))?(((((map__91223_91404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91223_91404.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__91223_91404):map__91223_91404);
var color_91406 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91223_91405__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var radius_factor_91407 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91223_91405__$1,new cljs.core.Keyword(null,"radius-factor","radius-factor",-1083742108));
var seq__91225_91408 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null));
var chunk__91226_91409 = null;
var count__91227_91410 = (0);
var i__91228_91411 = (0);
while(true){
if((i__91228_91411 < count__91227_91410)){
var side_91412 = chunk__91226_91409.cljs$core$IIndexed$_nth$arity$2(null,i__91228_91411);
ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),(0.5 * ((1) + (side_91412 * ellah.graphics.formbar_width(formbar_index_91396)))),new cljs.core.Keyword(null,"y","y",-1757859776),ellah.graphics.formbar_y(formbar_index_91396),new cljs.core.Keyword(null,"radius","radius",-2073122258),(ellah.constants.formbar_radius * radius_factor_91407)], null),color_91406,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));


var G__91413 = seq__91225_91408;
var G__91414 = chunk__91226_91409;
var G__91415 = count__91227_91410;
var G__91416 = (i__91228_91411 + (1));
seq__91225_91408 = G__91413;
chunk__91226_91409 = G__91414;
count__91227_91410 = G__91415;
i__91228_91411 = G__91416;
continue;
} else {
var temp__5753__auto___91417 = cljs.core.seq(seq__91225_91408);
if(temp__5753__auto___91417){
var seq__91225_91418__$1 = temp__5753__auto___91417;
if(cljs.core.chunked_seq_QMARK_(seq__91225_91418__$1)){
var c__4556__auto___91419 = cljs.core.chunk_first(seq__91225_91418__$1);
var G__91420 = cljs.core.chunk_rest(seq__91225_91418__$1);
var G__91421 = c__4556__auto___91419;
var G__91422 = cljs.core.count(c__4556__auto___91419);
var G__91423 = (0);
seq__91225_91408 = G__91420;
chunk__91226_91409 = G__91421;
count__91227_91410 = G__91422;
i__91228_91411 = G__91423;
continue;
} else {
var side_91424 = cljs.core.first(seq__91225_91418__$1);
ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),(0.5 * ((1) + (side_91424 * ellah.graphics.formbar_width(formbar_index_91396)))),new cljs.core.Keyword(null,"y","y",-1757859776),ellah.graphics.formbar_y(formbar_index_91396),new cljs.core.Keyword(null,"radius","radius",-2073122258),(ellah.constants.formbar_radius * radius_factor_91407)], null),color_91406,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));


var G__91425 = cljs.core.next(seq__91225_91418__$1);
var G__91426 = null;
var G__91427 = (0);
var G__91428 = (0);
seq__91225_91408 = G__91425;
chunk__91226_91409 = G__91426;
count__91227_91410 = G__91427;
i__91228_91411 = G__91428;
continue;
}
} else {
}
}
break;
}

ellah.graphics.rect.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0.5 * ((1) - ellah.graphics.formbar_width(formbar_index_91396))),new cljs.core.Keyword(null,"y","y",-1757859776),(ellah.graphics.formbar_y(formbar_index_91396) - (ellah.constants.formbar_radius * radius_factor_91407))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),ellah.graphics.formbar_width(formbar_index_91396),new cljs.core.Keyword(null,"y","y",-1757859776),((2) * (ellah.constants.formbar_radius * radius_factor_91407))], null),color_91406,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));


var G__91429 = seq__91207_91400;
var G__91430 = chunk__91208_91401;
var G__91431 = count__91209_91402;
var G__91432 = (i__91210_91403 + (1));
seq__91207_91400 = G__91429;
chunk__91208_91401 = G__91430;
count__91209_91402 = G__91431;
i__91210_91403 = G__91432;
continue;
} else {
var temp__5753__auto___91433 = cljs.core.seq(seq__91207_91400);
if(temp__5753__auto___91433){
var seq__91207_91434__$1 = temp__5753__auto___91433;
if(cljs.core.chunked_seq_QMARK_(seq__91207_91434__$1)){
var c__4556__auto___91435 = cljs.core.chunk_first(seq__91207_91434__$1);
var G__91436 = cljs.core.chunk_rest(seq__91207_91434__$1);
var G__91437 = c__4556__auto___91435;
var G__91438 = cljs.core.count(c__4556__auto___91435);
var G__91439 = (0);
seq__91207_91400 = G__91436;
chunk__91208_91401 = G__91437;
count__91209_91402 = G__91438;
i__91210_91403 = G__91439;
continue;
} else {
var map__91229_91440 = cljs.core.first(seq__91207_91434__$1);
var map__91229_91441__$1 = (((((!((map__91229_91440 == null))))?(((((map__91229_91440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91229_91440.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__91229_91440):map__91229_91440);
var color_91442 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91229_91441__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var radius_factor_91443 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91229_91441__$1,new cljs.core.Keyword(null,"radius-factor","radius-factor",-1083742108));
var seq__91231_91444 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null));
var chunk__91232_91445 = null;
var count__91233_91446 = (0);
var i__91234_91447 = (0);
while(true){
if((i__91234_91447 < count__91233_91446)){
var side_91448 = chunk__91232_91445.cljs$core$IIndexed$_nth$arity$2(null,i__91234_91447);
ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),(0.5 * ((1) + (side_91448 * ellah.graphics.formbar_width(formbar_index_91396)))),new cljs.core.Keyword(null,"y","y",-1757859776),ellah.graphics.formbar_y(formbar_index_91396),new cljs.core.Keyword(null,"radius","radius",-2073122258),(ellah.constants.formbar_radius * radius_factor_91443)], null),color_91442,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));


var G__91449 = seq__91231_91444;
var G__91450 = chunk__91232_91445;
var G__91451 = count__91233_91446;
var G__91452 = (i__91234_91447 + (1));
seq__91231_91444 = G__91449;
chunk__91232_91445 = G__91450;
count__91233_91446 = G__91451;
i__91234_91447 = G__91452;
continue;
} else {
var temp__5753__auto___91453__$1 = cljs.core.seq(seq__91231_91444);
if(temp__5753__auto___91453__$1){
var seq__91231_91454__$1 = temp__5753__auto___91453__$1;
if(cljs.core.chunked_seq_QMARK_(seq__91231_91454__$1)){
var c__4556__auto___91455 = cljs.core.chunk_first(seq__91231_91454__$1);
var G__91456 = cljs.core.chunk_rest(seq__91231_91454__$1);
var G__91457 = c__4556__auto___91455;
var G__91458 = cljs.core.count(c__4556__auto___91455);
var G__91459 = (0);
seq__91231_91444 = G__91456;
chunk__91232_91445 = G__91457;
count__91233_91446 = G__91458;
i__91234_91447 = G__91459;
continue;
} else {
var side_91460 = cljs.core.first(seq__91231_91454__$1);
ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),(0.5 * ((1) + (side_91460 * ellah.graphics.formbar_width(formbar_index_91396)))),new cljs.core.Keyword(null,"y","y",-1757859776),ellah.graphics.formbar_y(formbar_index_91396),new cljs.core.Keyword(null,"radius","radius",-2073122258),(ellah.constants.formbar_radius * radius_factor_91443)], null),color_91442,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));


var G__91461 = cljs.core.next(seq__91231_91454__$1);
var G__91462 = null;
var G__91463 = (0);
var G__91464 = (0);
seq__91231_91444 = G__91461;
chunk__91232_91445 = G__91462;
count__91233_91446 = G__91463;
i__91234_91447 = G__91464;
continue;
}
} else {
}
}
break;
}

ellah.graphics.rect.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0.5 * ((1) - ellah.graphics.formbar_width(formbar_index_91396))),new cljs.core.Keyword(null,"y","y",-1757859776),(ellah.graphics.formbar_y(formbar_index_91396) - (ellah.constants.formbar_radius * radius_factor_91443))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),ellah.graphics.formbar_width(formbar_index_91396),new cljs.core.Keyword(null,"y","y",-1757859776),((2) * (ellah.constants.formbar_radius * radius_factor_91443))], null),color_91442,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));


var G__91465 = cljs.core.next(seq__91207_91434__$1);
var G__91466 = null;
var G__91467 = (0);
var G__91468 = (0);
seq__91207_91400 = G__91465;
chunk__91208_91401 = G__91466;
count__91209_91402 = G__91467;
i__91210_91403 = G__91468;
continue;
}
} else {
}
}
break;
}

var seq__91235_91469 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(forms_91399)));
var chunk__91236_91470 = null;
var count__91237_91471 = (0);
var i__91238_91472 = (0);
while(true){
if((i__91238_91472 < count__91237_91471)){
var i_91473 = chunk__91236_91470.cljs$core$IIndexed$_nth$arity$2(null,i__91238_91472);
var form_91474 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(forms_91399,i_91473);
var current_circle_91475 = ellah.graphics.formbar_circle(formbar_index_91396,i_91473);
if(ellah.geometry.in_circle_QMARK_(current_circle_91475,mouse)){
ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update.cljs$core$IFn$_invoke$arity$3(current_circle_91475,new cljs.core.Keyword(null,"radius","radius",-2073122258),((function (seq__91235_91469,chunk__91236_91470,count__91237_91471,i__91238_91472,seq__91133_91392,chunk__91134_91393,count__91135_91394,i__91136_91395,form_91474,current_circle_91475,i_91473,map__91205_91397,map__91205_91398__$1,forms_91399,formbar_index_91396,map__91131,map__91131__$1,mouse,dragging_QMARK_,vec__91128,app_pos,app_size,mouse_zone,current_placement_form){
return (function (p1__91124_SHARP_){
return (p1__91124_SHARP_ / ellah.constants.formbar_form_size);
});})(seq__91235_91469,chunk__91236_91470,count__91237_91471,i__91238_91472,seq__91133_91392,chunk__91134_91393,count__91135_91394,i__91136_91395,form_91474,current_circle_91475,i_91473,map__91205_91397,map__91205_91398__$1,forms_91399,formbar_index_91396,map__91131,map__91131__$1,mouse,dragging_QMARK_,vec__91128,app_pos,app_size,mouse_zone,current_placement_form))
),ellah.constants.highlight_color,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));
} else {
}

ellah.graphics.render_sublayouts.cljs$core$IFn$_invoke$arity$variadic(ellah.graphics.form_layout(form_91474,current_circle_91475),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));


var G__91476 = seq__91235_91469;
var G__91477 = chunk__91236_91470;
var G__91478 = count__91237_91471;
var G__91479 = (i__91238_91472 + (1));
seq__91235_91469 = G__91476;
chunk__91236_91470 = G__91477;
count__91237_91471 = G__91478;
i__91238_91472 = G__91479;
continue;
} else {
var temp__5753__auto___91480 = cljs.core.seq(seq__91235_91469);
if(temp__5753__auto___91480){
var seq__91235_91481__$1 = temp__5753__auto___91480;
if(cljs.core.chunked_seq_QMARK_(seq__91235_91481__$1)){
var c__4556__auto___91482 = cljs.core.chunk_first(seq__91235_91481__$1);
var G__91483 = cljs.core.chunk_rest(seq__91235_91481__$1);
var G__91484 = c__4556__auto___91482;
var G__91485 = cljs.core.count(c__4556__auto___91482);
var G__91486 = (0);
seq__91235_91469 = G__91483;
chunk__91236_91470 = G__91484;
count__91237_91471 = G__91485;
i__91238_91472 = G__91486;
continue;
} else {
var i_91487 = cljs.core.first(seq__91235_91481__$1);
var form_91488 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(forms_91399,i_91487);
var current_circle_91489 = ellah.graphics.formbar_circle(formbar_index_91396,i_91487);
if(ellah.geometry.in_circle_QMARK_(current_circle_91489,mouse)){
ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update.cljs$core$IFn$_invoke$arity$3(current_circle_91489,new cljs.core.Keyword(null,"radius","radius",-2073122258),((function (seq__91235_91469,chunk__91236_91470,count__91237_91471,i__91238_91472,seq__91133_91392,chunk__91134_91393,count__91135_91394,i__91136_91395,form_91488,current_circle_91489,i_91487,seq__91235_91481__$1,temp__5753__auto___91480,map__91205_91397,map__91205_91398__$1,forms_91399,formbar_index_91396,map__91131,map__91131__$1,mouse,dragging_QMARK_,vec__91128,app_pos,app_size,mouse_zone,current_placement_form){
return (function (p1__91124_SHARP_){
return (p1__91124_SHARP_ / ellah.constants.formbar_form_size);
});})(seq__91235_91469,chunk__91236_91470,count__91237_91471,i__91238_91472,seq__91133_91392,chunk__91134_91393,count__91135_91394,i__91136_91395,form_91488,current_circle_91489,i_91487,seq__91235_91481__$1,temp__5753__auto___91480,map__91205_91397,map__91205_91398__$1,forms_91399,formbar_index_91396,map__91131,map__91131__$1,mouse,dragging_QMARK_,vec__91128,app_pos,app_size,mouse_zone,current_placement_form))
),ellah.constants.highlight_color,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));
} else {
}

ellah.graphics.render_sublayouts.cljs$core$IFn$_invoke$arity$variadic(ellah.graphics.form_layout(form_91488,current_circle_91489),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));


var G__91490 = cljs.core.next(seq__91235_91481__$1);
var G__91491 = null;
var G__91492 = (0);
var G__91493 = (0);
seq__91235_91469 = G__91490;
chunk__91236_91470 = G__91491;
count__91237_91471 = G__91492;
i__91238_91472 = G__91493;
continue;
}
} else {
}
}
break;
}


var G__91494 = seq__91133_91392;
var G__91495 = chunk__91134_91393;
var G__91496 = count__91135_91394;
var G__91497 = (i__91136_91395 + (1));
seq__91133_91392 = G__91494;
chunk__91134_91393 = G__91495;
count__91135_91394 = G__91496;
i__91136_91395 = G__91497;
continue;
} else {
var temp__5753__auto___91498 = cljs.core.seq(seq__91133_91392);
if(temp__5753__auto___91498){
var seq__91133_91499__$1 = temp__5753__auto___91498;
if(cljs.core.chunked_seq_QMARK_(seq__91133_91499__$1)){
var c__4556__auto___91500 = cljs.core.chunk_first(seq__91133_91499__$1);
var G__91501 = cljs.core.chunk_rest(seq__91133_91499__$1);
var G__91502 = c__4556__auto___91500;
var G__91503 = cljs.core.count(c__4556__auto___91500);
var G__91504 = (0);
seq__91133_91392 = G__91501;
chunk__91134_91393 = G__91502;
count__91135_91394 = G__91503;
i__91136_91395 = G__91504;
continue;
} else {
var formbar_index_91505 = cljs.core.first(seq__91133_91499__$1);
var map__91239_91506 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"formbars","formbars",393026901).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ellah.graphics.graphics_state)),formbar_index_91505);
var map__91239_91507__$1 = (((((!((map__91239_91506 == null))))?(((((map__91239_91506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91239_91506.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__91239_91506):map__91239_91506);
var forms_91508 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91239_91507__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var seq__91241_91509 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"radius-factor","radius-factor",-1083742108),(1),new cljs.core.Keyword(null,"color","color",1011675173),ellah.constants.foreground_color], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"radius-factor","radius-factor",-1083742108),((1) - ellah.constants.formbar_outline_thickness),new cljs.core.Keyword(null,"color","color",1011675173),ellah.constants.background_color], null)], null));
var chunk__91242_91510 = null;
var count__91243_91511 = (0);
var i__91244_91512 = (0);
while(true){
if((i__91244_91512 < count__91243_91511)){
var map__91257_91513 = chunk__91242_91510.cljs$core$IIndexed$_nth$arity$2(null,i__91244_91512);
var map__91257_91514__$1 = (((((!((map__91257_91513 == null))))?(((((map__91257_91513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91257_91513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__91257_91513):map__91257_91513);
var color_91515 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91257_91514__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var radius_factor_91516 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91257_91514__$1,new cljs.core.Keyword(null,"radius-factor","radius-factor",-1083742108));
var seq__91259_91517 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null));
var chunk__91260_91518 = null;
var count__91261_91519 = (0);
var i__91262_91520 = (0);
while(true){
if((i__91262_91520 < count__91261_91519)){
var side_91521 = chunk__91260_91518.cljs$core$IIndexed$_nth$arity$2(null,i__91262_91520);
ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),(0.5 * ((1) + (side_91521 * ellah.graphics.formbar_width(formbar_index_91505)))),new cljs.core.Keyword(null,"y","y",-1757859776),ellah.graphics.formbar_y(formbar_index_91505),new cljs.core.Keyword(null,"radius","radius",-2073122258),(ellah.constants.formbar_radius * radius_factor_91516)], null),color_91515,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));


var G__91522 = seq__91259_91517;
var G__91523 = chunk__91260_91518;
var G__91524 = count__91261_91519;
var G__91525 = (i__91262_91520 + (1));
seq__91259_91517 = G__91522;
chunk__91260_91518 = G__91523;
count__91261_91519 = G__91524;
i__91262_91520 = G__91525;
continue;
} else {
var temp__5753__auto___91526__$1 = cljs.core.seq(seq__91259_91517);
if(temp__5753__auto___91526__$1){
var seq__91259_91527__$1 = temp__5753__auto___91526__$1;
if(cljs.core.chunked_seq_QMARK_(seq__91259_91527__$1)){
var c__4556__auto___91528 = cljs.core.chunk_first(seq__91259_91527__$1);
var G__91529 = cljs.core.chunk_rest(seq__91259_91527__$1);
var G__91530 = c__4556__auto___91528;
var G__91531 = cljs.core.count(c__4556__auto___91528);
var G__91532 = (0);
seq__91259_91517 = G__91529;
chunk__91260_91518 = G__91530;
count__91261_91519 = G__91531;
i__91262_91520 = G__91532;
continue;
} else {
var side_91533 = cljs.core.first(seq__91259_91527__$1);
ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),(0.5 * ((1) + (side_91533 * ellah.graphics.formbar_width(formbar_index_91505)))),new cljs.core.Keyword(null,"y","y",-1757859776),ellah.graphics.formbar_y(formbar_index_91505),new cljs.core.Keyword(null,"radius","radius",-2073122258),(ellah.constants.formbar_radius * radius_factor_91516)], null),color_91515,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));


var G__91534 = cljs.core.next(seq__91259_91527__$1);
var G__91535 = null;
var G__91536 = (0);
var G__91537 = (0);
seq__91259_91517 = G__91534;
chunk__91260_91518 = G__91535;
count__91261_91519 = G__91536;
i__91262_91520 = G__91537;
continue;
}
} else {
}
}
break;
}

ellah.graphics.rect.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0.5 * ((1) - ellah.graphics.formbar_width(formbar_index_91505))),new cljs.core.Keyword(null,"y","y",-1757859776),(ellah.graphics.formbar_y(formbar_index_91505) - (ellah.constants.formbar_radius * radius_factor_91516))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),ellah.graphics.formbar_width(formbar_index_91505),new cljs.core.Keyword(null,"y","y",-1757859776),((2) * (ellah.constants.formbar_radius * radius_factor_91516))], null),color_91515,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));


var G__91538 = seq__91241_91509;
var G__91539 = chunk__91242_91510;
var G__91540 = count__91243_91511;
var G__91541 = (i__91244_91512 + (1));
seq__91241_91509 = G__91538;
chunk__91242_91510 = G__91539;
count__91243_91511 = G__91540;
i__91244_91512 = G__91541;
continue;
} else {
var temp__5753__auto___91542__$1 = cljs.core.seq(seq__91241_91509);
if(temp__5753__auto___91542__$1){
var seq__91241_91543__$1 = temp__5753__auto___91542__$1;
if(cljs.core.chunked_seq_QMARK_(seq__91241_91543__$1)){
var c__4556__auto___91544 = cljs.core.chunk_first(seq__91241_91543__$1);
var G__91545 = cljs.core.chunk_rest(seq__91241_91543__$1);
var G__91546 = c__4556__auto___91544;
var G__91547 = cljs.core.count(c__4556__auto___91544);
var G__91548 = (0);
seq__91241_91509 = G__91545;
chunk__91242_91510 = G__91546;
count__91243_91511 = G__91547;
i__91244_91512 = G__91548;
continue;
} else {
var map__91263_91549 = cljs.core.first(seq__91241_91543__$1);
var map__91263_91550__$1 = (((((!((map__91263_91549 == null))))?(((((map__91263_91549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91263_91549.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__91263_91549):map__91263_91549);
var color_91551 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91263_91550__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var radius_factor_91552 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91263_91550__$1,new cljs.core.Keyword(null,"radius-factor","radius-factor",-1083742108));
var seq__91265_91553 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null));
var chunk__91266_91554 = null;
var count__91267_91555 = (0);
var i__91268_91556 = (0);
while(true){
if((i__91268_91556 < count__91267_91555)){
var side_91557 = chunk__91266_91554.cljs$core$IIndexed$_nth$arity$2(null,i__91268_91556);
ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),(0.5 * ((1) + (side_91557 * ellah.graphics.formbar_width(formbar_index_91505)))),new cljs.core.Keyword(null,"y","y",-1757859776),ellah.graphics.formbar_y(formbar_index_91505),new cljs.core.Keyword(null,"radius","radius",-2073122258),(ellah.constants.formbar_radius * radius_factor_91552)], null),color_91551,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));


var G__91558 = seq__91265_91553;
var G__91559 = chunk__91266_91554;
var G__91560 = count__91267_91555;
var G__91561 = (i__91268_91556 + (1));
seq__91265_91553 = G__91558;
chunk__91266_91554 = G__91559;
count__91267_91555 = G__91560;
i__91268_91556 = G__91561;
continue;
} else {
var temp__5753__auto___91562__$2 = cljs.core.seq(seq__91265_91553);
if(temp__5753__auto___91562__$2){
var seq__91265_91563__$1 = temp__5753__auto___91562__$2;
if(cljs.core.chunked_seq_QMARK_(seq__91265_91563__$1)){
var c__4556__auto___91564 = cljs.core.chunk_first(seq__91265_91563__$1);
var G__91565 = cljs.core.chunk_rest(seq__91265_91563__$1);
var G__91566 = c__4556__auto___91564;
var G__91567 = cljs.core.count(c__4556__auto___91564);
var G__91568 = (0);
seq__91265_91553 = G__91565;
chunk__91266_91554 = G__91566;
count__91267_91555 = G__91567;
i__91268_91556 = G__91568;
continue;
} else {
var side_91569 = cljs.core.first(seq__91265_91563__$1);
ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),(0.5 * ((1) + (side_91569 * ellah.graphics.formbar_width(formbar_index_91505)))),new cljs.core.Keyword(null,"y","y",-1757859776),ellah.graphics.formbar_y(formbar_index_91505),new cljs.core.Keyword(null,"radius","radius",-2073122258),(ellah.constants.formbar_radius * radius_factor_91552)], null),color_91551,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));


var G__91570 = cljs.core.next(seq__91265_91563__$1);
var G__91571 = null;
var G__91572 = (0);
var G__91573 = (0);
seq__91265_91553 = G__91570;
chunk__91266_91554 = G__91571;
count__91267_91555 = G__91572;
i__91268_91556 = G__91573;
continue;
}
} else {
}
}
break;
}

ellah.graphics.rect.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0.5 * ((1) - ellah.graphics.formbar_width(formbar_index_91505))),new cljs.core.Keyword(null,"y","y",-1757859776),(ellah.graphics.formbar_y(formbar_index_91505) - (ellah.constants.formbar_radius * radius_factor_91552))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),ellah.graphics.formbar_width(formbar_index_91505),new cljs.core.Keyword(null,"y","y",-1757859776),((2) * (ellah.constants.formbar_radius * radius_factor_91552))], null),color_91551,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));


var G__91574 = cljs.core.next(seq__91241_91543__$1);
var G__91575 = null;
var G__91576 = (0);
var G__91577 = (0);
seq__91241_91509 = G__91574;
chunk__91242_91510 = G__91575;
count__91243_91511 = G__91576;
i__91244_91512 = G__91577;
continue;
}
} else {
}
}
break;
}

var seq__91269_91578 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(forms_91508)));
var chunk__91270_91579 = null;
var count__91271_91580 = (0);
var i__91272_91581 = (0);
while(true){
if((i__91272_91581 < count__91271_91580)){
var i_91582 = chunk__91270_91579.cljs$core$IIndexed$_nth$arity$2(null,i__91272_91581);
var form_91583 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(forms_91508,i_91582);
var current_circle_91584 = ellah.graphics.formbar_circle(formbar_index_91505,i_91582);
if(ellah.geometry.in_circle_QMARK_(current_circle_91584,mouse)){
ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update.cljs$core$IFn$_invoke$arity$3(current_circle_91584,new cljs.core.Keyword(null,"radius","radius",-2073122258),((function (seq__91269_91578,chunk__91270_91579,count__91271_91580,i__91272_91581,seq__91133_91392,chunk__91134_91393,count__91135_91394,i__91136_91395,form_91583,current_circle_91584,i_91582,map__91239_91506,map__91239_91507__$1,forms_91508,formbar_index_91505,seq__91133_91499__$1,temp__5753__auto___91498,map__91131,map__91131__$1,mouse,dragging_QMARK_,vec__91128,app_pos,app_size,mouse_zone,current_placement_form){
return (function (p1__91124_SHARP_){
return (p1__91124_SHARP_ / ellah.constants.formbar_form_size);
});})(seq__91269_91578,chunk__91270_91579,count__91271_91580,i__91272_91581,seq__91133_91392,chunk__91134_91393,count__91135_91394,i__91136_91395,form_91583,current_circle_91584,i_91582,map__91239_91506,map__91239_91507__$1,forms_91508,formbar_index_91505,seq__91133_91499__$1,temp__5753__auto___91498,map__91131,map__91131__$1,mouse,dragging_QMARK_,vec__91128,app_pos,app_size,mouse_zone,current_placement_form))
),ellah.constants.highlight_color,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));
} else {
}

ellah.graphics.render_sublayouts.cljs$core$IFn$_invoke$arity$variadic(ellah.graphics.form_layout(form_91583,current_circle_91584),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));


var G__91585 = seq__91269_91578;
var G__91586 = chunk__91270_91579;
var G__91587 = count__91271_91580;
var G__91588 = (i__91272_91581 + (1));
seq__91269_91578 = G__91585;
chunk__91270_91579 = G__91586;
count__91271_91580 = G__91587;
i__91272_91581 = G__91588;
continue;
} else {
var temp__5753__auto___91589__$1 = cljs.core.seq(seq__91269_91578);
if(temp__5753__auto___91589__$1){
var seq__91269_91590__$1 = temp__5753__auto___91589__$1;
if(cljs.core.chunked_seq_QMARK_(seq__91269_91590__$1)){
var c__4556__auto___91591 = cljs.core.chunk_first(seq__91269_91590__$1);
var G__91592 = cljs.core.chunk_rest(seq__91269_91590__$1);
var G__91593 = c__4556__auto___91591;
var G__91594 = cljs.core.count(c__4556__auto___91591);
var G__91595 = (0);
seq__91269_91578 = G__91592;
chunk__91270_91579 = G__91593;
count__91271_91580 = G__91594;
i__91272_91581 = G__91595;
continue;
} else {
var i_91596 = cljs.core.first(seq__91269_91590__$1);
var form_91597 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(forms_91508,i_91596);
var current_circle_91598 = ellah.graphics.formbar_circle(formbar_index_91505,i_91596);
if(ellah.geometry.in_circle_QMARK_(current_circle_91598,mouse)){
ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update.cljs$core$IFn$_invoke$arity$3(current_circle_91598,new cljs.core.Keyword(null,"radius","radius",-2073122258),((function (seq__91269_91578,chunk__91270_91579,count__91271_91580,i__91272_91581,seq__91133_91392,chunk__91134_91393,count__91135_91394,i__91136_91395,form_91597,current_circle_91598,i_91596,seq__91269_91590__$1,temp__5753__auto___91589__$1,map__91239_91506,map__91239_91507__$1,forms_91508,formbar_index_91505,seq__91133_91499__$1,temp__5753__auto___91498,map__91131,map__91131__$1,mouse,dragging_QMARK_,vec__91128,app_pos,app_size,mouse_zone,current_placement_form){
return (function (p1__91124_SHARP_){
return (p1__91124_SHARP_ / ellah.constants.formbar_form_size);
});})(seq__91269_91578,chunk__91270_91579,count__91271_91580,i__91272_91581,seq__91133_91392,chunk__91134_91393,count__91135_91394,i__91136_91395,form_91597,current_circle_91598,i_91596,seq__91269_91590__$1,temp__5753__auto___91589__$1,map__91239_91506,map__91239_91507__$1,forms_91508,formbar_index_91505,seq__91133_91499__$1,temp__5753__auto___91498,map__91131,map__91131__$1,mouse,dragging_QMARK_,vec__91128,app_pos,app_size,mouse_zone,current_placement_form))
),ellah.constants.highlight_color,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));
} else {
}

ellah.graphics.render_sublayouts.cljs$core$IFn$_invoke$arity$variadic(ellah.graphics.form_layout(form_91597,current_circle_91598),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));


var G__91599 = cljs.core.next(seq__91269_91590__$1);
var G__91600 = null;
var G__91601 = (0);
var G__91602 = (0);
seq__91269_91578 = G__91599;
chunk__91270_91579 = G__91600;
count__91271_91580 = G__91601;
i__91272_91581 = G__91602;
continue;
}
} else {
}
}
break;
}


var G__91603 = cljs.core.next(seq__91133_91499__$1);
var G__91604 = null;
var G__91605 = (0);
var G__91606 = (0);
seq__91133_91392 = G__91603;
chunk__91134_91393 = G__91604;
count__91135_91394 = G__91605;
i__91136_91395 = G__91606;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mouse_zone,new cljs.core.Keyword(null,"formbar","formbar",824418093)))?current_placement_form:false))){
var insertion_indeces = ellah.graphics.formbar_insertion_indeces(mouse);
var base_circle = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ellah.graphics.formbar_circle,insertion_indeces);
return ellah.graphics.render_sublayouts.cljs$core$IFn$_invoke$arity$variadic(ellah.graphics.form_layout(current_placement_form,cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(base_circle,new cljs.core.Keyword(null,"x","x",2099068185),(function (p1__91125_SHARP_){
return (p1__91125_SHARP_ + (0.5 * ellah.graphics.formbar_form_spacing));
})),new cljs.core.Keyword(null,"y","y",-1757859776),(function (p1__91126_SHARP_){
return (p1__91126_SHARP_ - ((0.5 * ellah.graphics.formbar_form_spacing) * ellah.constants.formbar_placement_offset));
})),new cljs.core.Keyword(null,"radius","radius",-2073122258),(function (p1__91127_SHARP_){
return (p1__91127_SHARP_ * ellah.constants.formbar_placement_size);
}))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));
} else {
return null;
}
});
ellah.graphics.get_mouse_pos = (function ellah$graphics$get_mouse_pos(){
var plugins = new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ellah.graphics.graphics_state)).renderer.plugins;
var raw_pos = cljs.core.clj__GT_js(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(plugins),"interaction").mouse.global);
var x = raw_pos.x;
var y = raw_pos.y;
var width = ellah.graphics.app_width();
var height = ellah.graphics.app_height();
var size = ellah.graphics.app_size();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),((x - (0.5 * (width - size))) / size),new cljs.core.Keyword(null,"y","y",-1757859776),((y - (0.5 * (height - size))) / size)], null);
});
ellah.graphics.update_graphics = (function ellah$graphics$update_graphics(app_state,control_state){
ellah.util.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"down-zone","down-zone",-858806618).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mouse","mouse",478628972).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ellah.graphics.graphics_state))),ellah.graphics.placement_form()], 0));

var app = new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ellah.graphics.graphics_state));
var delta = (app.ticker.elapsedMS / (1000));
var map__91276 = ellah.constants.camera_speed(new cljs.core.Keyword(null,"camera-move-diff","camera-move-diff",-592839139).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ellah.graphics.graphics_state)));
var map__91276__$1 = (((((!((map__91276 == null))))?(((((map__91276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__91276):map__91276);
var move = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91276__$1,new cljs.core.Keyword(null,"move","move",-2110884309));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91276__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
ellah.graphics.update_attr_BANG_(new cljs.core.Keyword(null,"camera-pos","camera-pos",666924233),(function (p1__91273_SHARP_){
return ellah.geometry.tween_points(ellah.graphics.ideal_camera_pos(),p1__91273_SHARP_,Math.pow(move,delta));
}));

ellah.graphics.update_attr_BANG_(new cljs.core.Keyword(null,"camera-zoom","camera-zoom",-1214902147),(function (p1__91274_SHARP_){
return Math.pow(Math.E,ellah.util.tween(Math.log(ellah.graphics.ideal_camera_zoom()),Math.log(p1__91274_SHARP_),Math.pow(zoom,delta)));
}));

ellah.graphics.update_attr_BANG_(new cljs.core.Keyword(null,"eval-zone-size","eval-zone-size",1345284358),(function (size){
var p = Math.pow(ellah.constants.eval_zone_speed,delta);
return ((p * size) + (((1) - p) * ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ellah.graphics.get_mouse_zone(),new cljs.core.Keyword(null,"eval","eval",-1103567905)))?ellah.constants.eval_zone_max_size:ellah.constants.eval_zone_min_size)));
}));

ellah.graphics.resize();

var seq__91278_91607 = cljs.core.seq(ellah.constants.ui_layers);
var chunk__91279_91608 = null;
var count__91280_91609 = (0);
var i__91281_91610 = (0);
while(true){
if((i__91281_91610 < count__91280_91609)){
var layer_91611 = chunk__91279_91608.cljs$core$IIndexed$_nth$arity$2(null,i__91281_91610);
ellah.graphics.get_graphics.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([layer_91611], 0)).clear();


var G__91612 = seq__91278_91607;
var G__91613 = chunk__91279_91608;
var G__91614 = count__91280_91609;
var G__91615 = (i__91281_91610 + (1));
seq__91278_91607 = G__91612;
chunk__91279_91608 = G__91613;
count__91280_91609 = G__91614;
i__91281_91610 = G__91615;
continue;
} else {
var temp__5753__auto___91616 = cljs.core.seq(seq__91278_91607);
if(temp__5753__auto___91616){
var seq__91278_91617__$1 = temp__5753__auto___91616;
if(cljs.core.chunked_seq_QMARK_(seq__91278_91617__$1)){
var c__4556__auto___91618 = cljs.core.chunk_first(seq__91278_91617__$1);
var G__91619 = cljs.core.chunk_rest(seq__91278_91617__$1);
var G__91620 = c__4556__auto___91618;
var G__91621 = cljs.core.count(c__4556__auto___91618);
var G__91622 = (0);
seq__91278_91607 = G__91619;
chunk__91279_91608 = G__91620;
count__91280_91609 = G__91621;
i__91281_91610 = G__91622;
continue;
} else {
var layer_91623 = cljs.core.first(seq__91278_91617__$1);
ellah.graphics.get_graphics.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([layer_91623], 0)).clear();


var G__91624 = cljs.core.next(seq__91278_91617__$1);
var G__91625 = null;
var G__91626 = (0);
var G__91627 = (0);
seq__91278_91607 = G__91624;
chunk__91279_91608 = G__91625;
count__91280_91609 = G__91626;
i__91281_91610 = G__91627;
continue;
}
} else {
}
}
break;
}

var stage_91628 = app.stage;
var texts_91629 = new cljs.core.Keyword(null,"texts","texts",-2031072472).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ellah.graphics.graphics_state));
if(cljs.core.truth_(texts_91629)){
var seq__91282_91630 = cljs.core.seq(cljs.core.vals(texts_91629));
var chunk__91283_91631 = null;
var count__91284_91632 = (0);
var i__91285_91633 = (0);
while(true){
if((i__91285_91633 < count__91284_91632)){
var text_container_91634 = chunk__91283_91631.cljs$core$IIndexed$_nth$arity$2(null,i__91285_91633);
stage_91628.removeChild(text_container_91634);

text_container_91634.destroy(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"children","children",-940561982),true,new cljs.core.Keyword(null,"texture","texture",-266291651),true,new cljs.core.Keyword(null,"baseTexture","baseTexture",719523960),true], null)));


var G__91635 = seq__91282_91630;
var G__91636 = chunk__91283_91631;
var G__91637 = count__91284_91632;
var G__91638 = (i__91285_91633 + (1));
seq__91282_91630 = G__91635;
chunk__91283_91631 = G__91636;
count__91284_91632 = G__91637;
i__91285_91633 = G__91638;
continue;
} else {
var temp__5753__auto___91639 = cljs.core.seq(seq__91282_91630);
if(temp__5753__auto___91639){
var seq__91282_91640__$1 = temp__5753__auto___91639;
if(cljs.core.chunked_seq_QMARK_(seq__91282_91640__$1)){
var c__4556__auto___91641 = cljs.core.chunk_first(seq__91282_91640__$1);
var G__91642 = cljs.core.chunk_rest(seq__91282_91640__$1);
var G__91643 = c__4556__auto___91641;
var G__91644 = cljs.core.count(c__4556__auto___91641);
var G__91645 = (0);
seq__91282_91630 = G__91642;
chunk__91283_91631 = G__91643;
count__91284_91632 = G__91644;
i__91285_91633 = G__91645;
continue;
} else {
var text_container_91646 = cljs.core.first(seq__91282_91640__$1);
stage_91628.removeChild(text_container_91646);

text_container_91646.destroy(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"children","children",-940561982),true,new cljs.core.Keyword(null,"texture","texture",-266291651),true,new cljs.core.Keyword(null,"baseTexture","baseTexture",719523960),true], null)));


var G__91647 = cljs.core.next(seq__91282_91640__$1);
var G__91648 = null;
var G__91649 = (0);
var G__91650 = (0);
seq__91282_91630 = G__91647;
chunk__91283_91631 = G__91648;
count__91284_91632 = G__91649;
i__91285_91633 = G__91650;
continue;
}
} else {
}
}
break;
}
} else {
}

var seq__91286_91651 = cljs.core.seq(cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,ellah.constants.ui_layers,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
var chunk__91287_91652 = null;
var count__91288_91653 = (0);
var i__91289_91654 = (0);
while(true){
if((i__91289_91654 < count__91288_91653)){
var vec__91296_91655 = chunk__91287_91652.cljs$core$IIndexed$_nth$arity$2(null,i__91289_91654);
var layer_91656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91296_91655,(0),null);
var z_91657 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91296_91655,(1),null);
var container_91658 = (new module$node_modules$pixi_DOT_js$dist$cjs$pixi.Container());
ellah.graphics.update_attr_BANG_(new cljs.core.Keyword(null,"texts","texts",-2031072472),((function (seq__91286_91651,chunk__91287_91652,count__91288_91653,i__91289_91654,container_91658,vec__91296_91655,layer_91656,z_91657,stage_91628,texts_91629,app,delta,map__91276,map__91276__$1,move,zoom){
return (function (p1__91275_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__91275_SHARP_,layer_91656,container_91658);
});})(seq__91286_91651,chunk__91287_91652,count__91288_91653,i__91289_91654,container_91658,vec__91296_91655,layer_91656,z_91657,stage_91628,texts_91629,app,delta,map__91276,map__91276__$1,move,zoom))
);

(container_91658.zIndex = (0.5 + z_91657));

stage_91628.addChild(container_91658);


var G__91659 = seq__91286_91651;
var G__91660 = chunk__91287_91652;
var G__91661 = count__91288_91653;
var G__91662 = (i__91289_91654 + (1));
seq__91286_91651 = G__91659;
chunk__91287_91652 = G__91660;
count__91288_91653 = G__91661;
i__91289_91654 = G__91662;
continue;
} else {
var temp__5753__auto___91663 = cljs.core.seq(seq__91286_91651);
if(temp__5753__auto___91663){
var seq__91286_91664__$1 = temp__5753__auto___91663;
if(cljs.core.chunked_seq_QMARK_(seq__91286_91664__$1)){
var c__4556__auto___91665 = cljs.core.chunk_first(seq__91286_91664__$1);
var G__91666 = cljs.core.chunk_rest(seq__91286_91664__$1);
var G__91667 = c__4556__auto___91665;
var G__91668 = cljs.core.count(c__4556__auto___91665);
var G__91669 = (0);
seq__91286_91651 = G__91666;
chunk__91287_91652 = G__91667;
count__91288_91653 = G__91668;
i__91289_91654 = G__91669;
continue;
} else {
var vec__91299_91670 = cljs.core.first(seq__91286_91664__$1);
var layer_91671 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91299_91670,(0),null);
var z_91672 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91299_91670,(1),null);
var container_91673 = (new module$node_modules$pixi_DOT_js$dist$cjs$pixi.Container());
ellah.graphics.update_attr_BANG_(new cljs.core.Keyword(null,"texts","texts",-2031072472),((function (seq__91286_91651,chunk__91287_91652,count__91288_91653,i__91289_91654,container_91673,vec__91299_91670,layer_91671,z_91672,seq__91286_91664__$1,temp__5753__auto___91663,stage_91628,texts_91629,app,delta,map__91276,map__91276__$1,move,zoom){
return (function (p1__91275_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__91275_SHARP_,layer_91671,container_91673);
});})(seq__91286_91651,chunk__91287_91652,count__91288_91653,i__91289_91654,container_91673,vec__91299_91670,layer_91671,z_91672,seq__91286_91664__$1,temp__5753__auto___91663,stage_91628,texts_91629,app,delta,map__91276,map__91276__$1,move,zoom))
);

(container_91673.zIndex = (0.5 + z_91672));

stage_91628.addChild(container_91673);


var G__91674 = cljs.core.next(seq__91286_91664__$1);
var G__91675 = null;
var G__91676 = (0);
var G__91677 = (0);
seq__91286_91651 = G__91674;
chunk__91287_91652 = G__91675;
count__91288_91653 = G__91676;
i__91289_91654 = G__91677;
continue;
}
} else {
}
}
break;
}

return ellah.graphics.render_app_state(app_state,control_state);
});
ellah.graphics.log_eval_result = (function ellah$graphics$log_eval_result(result){
return ellah.graphics.update_attr_BANG_(new cljs.core.Keyword(null,"eval-results","eval-results",553789722),(function (p1__91302_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__91302_SHARP_,cljs.core.first(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ellah.vedn.clj__GT_vedn(cljs.core.str.cljs$core$IFn$_invoke$arity$1(result)))));
}));
});
ellah.graphics.update_mouse_pos = (function ellah$graphics$update_mouse_pos(event){
var screen_pos = event.data.global;
var x = screen_pos.x;
var y = screen_pos.y;
var width = ellah.graphics.app_width();
var height = ellah.graphics.app_height();
var size = ellah.graphics.app_size();
var current_pos = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),((x - (0.5 * (width - size))) / size),new cljs.core.Keyword(null,"y","y",-1757859776),((y - (0.5 * (height - size))) / size)], null);
return ellah.graphics.update_attr_BANG_(new cljs.core.Keyword(null,"mouse","mouse",478628972),(function (state){
var diff = ellah.geometry.subtract_points(state,current_pos);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([state,current_pos], 0)),new cljs.core.Keyword(null,"drag-dist","drag-dist",-1927545717),(cljs.core.truth_(new cljs.core.Keyword(null,"down?","down?",1701019493).cljs$core$IFn$_invoke$arity$1(state))?(ellah.geometry.point_magnitude(diff) + new cljs.core.Keyword(null,"drag-dist","drag-dist",-1927545717).cljs$core$IFn$_invoke$arity$1(state)):null));
}));
});
ellah.graphics.on_click_down = (function ellah$graphics$on_click_down(event){
ellah.graphics.update_mouse_pos(event);

var map__91304 = cljs.core.deref(ellah.graphics.graphics_state);
var map__91304__$1 = (((((!((map__91304 == null))))?(((((map__91304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__91304):map__91304);
var formbars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91304__$1,new cljs.core.Keyword(null,"formbars","formbars",393026901));
var mouse = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91304__$1,new cljs.core.Keyword(null,"mouse","mouse",478628972));
var layout = ellah.graphics.adjusted_form_layout();
var layout_path = ellah.graphics.layout_path_at(layout,mouse);
var zone = ellah.graphics.get_mouse_zone();
var formbar_zone_indeces = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(zone,new cljs.core.Keyword(null,"formbar","formbar",824418093)))?cljs.core.some((function (p1__91303_SHARP_){
if(ellah.geometry.in_circle_QMARK_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ellah.graphics.formbar_circle,p1__91303_SHARP_),mouse)){
return p1__91303_SHARP_;
} else {
return null;
}
}),(function (){var iter__4529__auto__ = (function ellah$graphics$on_click_down_$_iter__91306(s__91307){
return (new cljs.core.LazySeq(null,(function (){
var s__91307__$1 = s__91307;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__91307__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var i = cljs.core.first(xs__6308__auto__);
var iterys__4525__auto__ = ((function (s__91307__$1,i,xs__6308__auto__,temp__5753__auto__,map__91304,map__91304__$1,formbars,mouse,layout,layout_path,zone){
return (function ellah$graphics$on_click_down_$_iter__91306_$_iter__91308(s__91309){
return (new cljs.core.LazySeq(null,((function (s__91307__$1,i,xs__6308__auto__,temp__5753__auto__,map__91304,map__91304__$1,formbars,mouse,layout,layout_path,zone){
return (function (){
var s__91309__$1 = s__91309;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__91309__$1);
if(temp__5753__auto____$1){
var s__91309__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__91309__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__91309__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__91311 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__91310 = (0);
while(true){
if((i__91310 < size__4528__auto__)){
var i2 = cljs.core._nth(c__4527__auto__,i__91310);
cljs.core.chunk_append(b__91311,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,i2], null));

var G__91678 = (i__91310 + (1));
i__91310 = G__91678;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__91311),ellah$graphics$on_click_down_$_iter__91306_$_iter__91308(cljs.core.chunk_rest(s__91309__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__91311),null);
}
} else {
var i2 = cljs.core.first(s__91309__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,i2], null),ellah$graphics$on_click_down_$_iter__91306_$_iter__91308(cljs.core.rest(s__91309__$2)));
}
} else {
return null;
}
break;
}
});})(s__91307__$1,i,xs__6308__auto__,temp__5753__auto__,map__91304,map__91304__$1,formbars,mouse,layout,layout_path,zone))
,null,null));
});})(s__91307__$1,i,xs__6308__auto__,temp__5753__auto__,map__91304,map__91304__$1,formbars,mouse,layout,layout_path,zone))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(formbars,i))))));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,ellah$graphics$on_click_down_$_iter__91306(cljs.core.rest(s__91307__$1)));
} else {
var G__91679 = cljs.core.rest(s__91307__$1);
s__91307__$1 = G__91679;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(formbars)));
})()):null);
return ellah.graphics.update_attr_BANG_(new cljs.core.Keyword(null,"mouse","mouse",478628972),(function (state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"down?","down?",1701019493),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"down-path","down-path",-1576662356),layout_path,new cljs.core.Keyword(null,"down-zone","down-zone",-858806618),zone,new cljs.core.Keyword(null,"down-formbar-indeces","down-formbar-indeces",-1191819382),formbar_zone_indeces], 0));
}));
});
ellah.graphics.on_click_up = (function ellah$graphics$on_click_up(event){
ellah.graphics.update_mouse_pos(event);

var mouse_state = new cljs.core.Keyword(null,"mouse","mouse",478628972).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ellah.graphics.graphics_state));
var layout = ellah.graphics.adjusted_form_layout();
var layout_path = ellah.graphics.layout_path_at(layout,mouse_state);
var map__91315 = mouse_state;
var map__91315__$1 = (((((!((map__91315 == null))))?(((((map__91315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__91315):map__91315);
var down_zone = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91315__$1,new cljs.core.Keyword(null,"down-zone","down-zone",-858806618));
var down_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91315__$1,new cljs.core.Keyword(null,"down-path","down-path",-1576662356));
if(ellah.graphics.mouse_dragging_QMARK_()){
var G__91317_91680 = ellah.graphics.get_mouse_zone();
var G__91317_91681__$1 = (((G__91317_91680 instanceof cljs.core.Keyword))?G__91317_91680.fqn:null);
switch (G__91317_91681__$1) {
case "program":
var insertion_path_91683 = ellah.graphics.layout_insertion_path_at(layout,mouse_state);
var current_placement_form_91684 = ellah.graphics.placement_form();
if(cljs.core.truth_(current_placement_form_91684)){
ellah.graphics.update_attr_BANG_(new cljs.core.Keyword(null,"form","form",-1624062471),(function (form){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(layout_path),cljs.core.count(insertion_path_91683))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"literal","literal",1664775605),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ellah.vedn.get_child(form,cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.list((0)),insertion_path_91683)))))){
return ellah.vedn.replace_child(form,cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.list((0)),layout_path)),current_placement_form_91684);
} else {
return ellah.vedn.insert_child(form,cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.list((0)),insertion_path_91683,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.list((0))], 0))),current_placement_form_91684);
}
} else {
return ellah.vedn.insert_child(form,cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.list((0)),insertion_path_91683)),current_placement_form_91684);
}
}));
} else {
}

break;
case "discard":
var G__91318_91685 = down_zone;
var G__91318_91686__$1 = (((G__91318_91685 instanceof cljs.core.Keyword))?G__91318_91685.fqn:null);
switch (G__91318_91686__$1) {
case "program":
if(cljs.core.truth_(down_path)){
ellah.graphics.update_attr_BANG_(new cljs.core.Keyword(null,"form","form",-1624062471),(function (p1__91312_SHARP_){
return ellah.vedn.remove_child(p1__91312_SHARP_,cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.list((0)),down_path)));
}));
} else {
}

break;
case "formbar":
var vec__91319_91688 = new cljs.core.Keyword(null,"down-formbar-indeces","down-formbar-indeces",-1191819382).cljs$core$IFn$_invoke$arity$1(mouse_state);
var outer_index_91689 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91319_91688,(0),null);
var inner_index_91690 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91319_91688,(1),null);
ellah.graphics.update_attr_BANG_(new cljs.core.Keyword(null,"formbars","formbars",393026901),(function (formbars){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(formbars,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [outer_index_91689,new cljs.core.Keyword(null,"forms","forms",2045992350)], null),(function (p1__91313_SHARP_){
return ellah.vedn.vector_remove(p1__91313_SHARP_,inner_index_91690);
}));
}));

break;
default:

}

break;
case "eval":
if(cljs.core.truth_(down_path)){
var down_form_91691 = ellah.vedn.get_child(new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ellah.graphics.graphics_state)),cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.list((0)),down_path)));
ellah.evaluation.eval_clj.cljs$core$IFn$_invoke$arity$variadic(ellah.vedn.vedn__GT_clj(down_form_91691),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ellah.graphics.log_eval_result], 0));
} else {
}

break;
case "formbar":
var current_placement_form_91692 = ellah.graphics.placement_form();
if(cljs.core.truth_(current_placement_form_91692)){
var vec__91322_91693 = ellah.graphics.formbar_insertion_indeces(mouse_state);
var outer_index_91694 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91322_91693,(0),null);
var inner_index_91695 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91322_91693,(1),null);
ellah.graphics.update_attr_BANG_(new cljs.core.Keyword(null,"formbars","formbars",393026901),(function (formbars){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(formbars,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [outer_index_91694,new cljs.core.Keyword(null,"forms","forms",2045992350)], null),(function (p1__91314_SHARP_){
return ellah.vedn.vector_insert(p1__91314_SHARP_,(inner_index_91695 + (1)),current_placement_form_91692);
}));
}));
} else {
}

break;
default:

}
} else {
}

if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"down-zone","down-zone",-858806618).cljs$core$IFn$_invoke$arity$1(mouse_state),new cljs.core.Keyword(null,"program","program",781564284))) && ((!(ellah.graphics.mouse_dragging_QMARK_()))))){
ellah.graphics.set_attr_BANG_(new cljs.core.Keyword(null,"selected-layout-path","selected-layout-path",1007788705),new cljs.core.Keyword(null,"down-path","down-path",-1576662356).cljs$core$IFn$_invoke$arity$1(mouse_state));
} else {
}

ellah.graphics.update_attr_BANG_(new cljs.core.Keyword(null,"mouse","mouse",478628972),(function (state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"down?","down?",1701019493),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"drag-dist","drag-dist",-1927545717),(0)], 0));
}));

return ellah.graphics.set_attr_BANG_(new cljs.core.Keyword(null,"camera-move-diff","camera-move-diff",-592839139),(cljs.core.count(layout_path) - cljs.core.count(new cljs.core.Keyword(null,"selected-layout-path","selected-layout-path",1007788705).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ellah.graphics.graphics_state)))));
});
ellah.graphics.init = (function ellah$graphics$init(update_fn){
var app = ellah.graphics.set_attr_BANG_(new cljs.core.Keyword(null,"app","app",-560961707),(new module$node_modules$pixi_DOT_js$dist$cjs$pixi.Application(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoResize","autoResize",-1840132617),true], null)))));
var stage = app.stage;
(stage.sortableChildren = true);

ellah.graphics.set_attr_BANG_(new cljs.core.Keyword(null,"graphics","graphics",-2079995979),cljs.core.PersistentArrayMap.EMPTY);

var seq__91326_91696 = cljs.core.seq(cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,ellah.constants.ui_layers,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
var chunk__91327_91697 = null;
var count__91328_91698 = (0);
var i__91329_91699 = (0);
while(true){
if((i__91329_91699 < count__91328_91698)){
var vec__91336_91700 = chunk__91327_91697.cljs$core$IIndexed$_nth$arity$2(null,i__91329_91699);
var layer_91701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91336_91700,(0),null);
var z_91702 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91336_91700,(1),null);
ellah.graphics.update_attr_BANG_(new cljs.core.Keyword(null,"graphics","graphics",-2079995979),((function (seq__91326_91696,chunk__91327_91697,count__91328_91698,i__91329_91699,vec__91336_91700,layer_91701,z_91702,app,stage){
return (function (p1__91325_SHARP_){
var graphics = (new module$node_modules$pixi_DOT_js$dist$cjs$pixi.Graphics());
(graphics.zIndex = z_91702);

stage.addChild(graphics);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__91325_SHARP_,layer_91701,graphics);
});})(seq__91326_91696,chunk__91327_91697,count__91328_91698,i__91329_91699,vec__91336_91700,layer_91701,z_91702,app,stage))
);


var G__91703 = seq__91326_91696;
var G__91704 = chunk__91327_91697;
var G__91705 = count__91328_91698;
var G__91706 = (i__91329_91699 + (1));
seq__91326_91696 = G__91703;
chunk__91327_91697 = G__91704;
count__91328_91698 = G__91705;
i__91329_91699 = G__91706;
continue;
} else {
var temp__5753__auto___91707 = cljs.core.seq(seq__91326_91696);
if(temp__5753__auto___91707){
var seq__91326_91708__$1 = temp__5753__auto___91707;
if(cljs.core.chunked_seq_QMARK_(seq__91326_91708__$1)){
var c__4556__auto___91709 = cljs.core.chunk_first(seq__91326_91708__$1);
var G__91710 = cljs.core.chunk_rest(seq__91326_91708__$1);
var G__91711 = c__4556__auto___91709;
var G__91712 = cljs.core.count(c__4556__auto___91709);
var G__91713 = (0);
seq__91326_91696 = G__91710;
chunk__91327_91697 = G__91711;
count__91328_91698 = G__91712;
i__91329_91699 = G__91713;
continue;
} else {
var vec__91339_91714 = cljs.core.first(seq__91326_91708__$1);
var layer_91715 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91339_91714,(0),null);
var z_91716 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91339_91714,(1),null);
ellah.graphics.update_attr_BANG_(new cljs.core.Keyword(null,"graphics","graphics",-2079995979),((function (seq__91326_91696,chunk__91327_91697,count__91328_91698,i__91329_91699,vec__91339_91714,layer_91715,z_91716,seq__91326_91708__$1,temp__5753__auto___91707,app,stage){
return (function (p1__91325_SHARP_){
var graphics = (new module$node_modules$pixi_DOT_js$dist$cjs$pixi.Graphics());
(graphics.zIndex = z_91716);

stage.addChild(graphics);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__91325_SHARP_,layer_91715,graphics);
});})(seq__91326_91696,chunk__91327_91697,count__91328_91698,i__91329_91699,vec__91339_91714,layer_91715,z_91716,seq__91326_91708__$1,temp__5753__auto___91707,app,stage))
);


var G__91717 = cljs.core.next(seq__91326_91708__$1);
var G__91718 = null;
var G__91719 = (0);
var G__91720 = (0);
seq__91326_91696 = G__91717;
chunk__91327_91697 = G__91718;
count__91328_91698 = G__91719;
i__91329_91699 = G__91720;
continue;
}
} else {
}
}
break;
}

document.body.appendChild(app.view);

ellah.graphics.resize();

app.ticker.add(update_fn);

var interaction_91721 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ellah.graphics.graphics_state)).renderer.plugins),"interaction");
interaction_91721.on("pointerdown",ellah.graphics.on_click_down);

interaction_91721.on("pointerup",ellah.graphics.on_click_up);

interaction_91721.on("pointermove",ellah.graphics.update_mouse_pos);

ellah.graphics.set_attr_BANG_(new cljs.core.Keyword(null,"camera-pos","camera-pos",666924233),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));

ellah.graphics.set_attr_BANG_(new cljs.core.Keyword(null,"camera-zoom","camera-zoom",-1214902147),(1));

ellah.graphics.set_attr_BANG_(new cljs.core.Keyword(null,"eval-zone-size","eval-zone-size",1345284358),ellah.constants.eval_zone_min_size);

ellah.graphics.set_attr_BANG_(new cljs.core.Keyword(null,"form","form",-1624062471),ellah.vedn.clj__GT_vedn(ellah.vedn.test_str));

ellah.graphics.set_attr_BANG_(new cljs.core.Keyword(null,"eval-results","eval-results",553789722),cljs.core.PersistentVector.EMPTY);

ellah.graphics.set_attr_BANG_(new cljs.core.Keyword(null,"formbars","formbars",393026901),ellah.constants.formbar_defaults);

var font = (new module$node_modules$fontfaceobserver$fontfaceobserver_standalone(ellah.constants.font_name));
return font.load().then((function (){
ellah.graphics.set_attr_BANG_(new cljs.core.Keyword(null,"font-loaded?","font-loaded?",-1665361590),true);

return ellah.util.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Font loaded."], 0));
}));
});

//# sourceMappingURL=ellah.graphics.js.map
