goog.provide('ellah.graphics');
var module$node_modules$pixi_DOT_js$dist$cjs$pixi=shadow.js.require("module$node_modules$pixi_DOT_js$dist$cjs$pixi", {});
var module$node_modules$fontfaceobserver$fontfaceobserver_standalone=shadow.js.require("module$node_modules$fontfaceobserver$fontfaceobserver_standalone", {});
if((typeof ellah !== 'undefined') && (typeof ellah.graphics !== 'undefined') && (typeof ellah.graphics.graphics_state !== 'undefined')){
} else {
ellah.graphics.graphics_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
ellah.graphics.get_graphics = (function ellah$graphics$get_graphics(var_args){
var args__4742__auto__ = [];
var len__4736__auto___80523 = arguments.length;
var i__4737__auto___80524 = (0);
while(true){
if((i__4737__auto___80524 < len__4736__auto___80523)){
args__4742__auto__.push((arguments[i__4737__auto___80524]));

var G__80525 = (i__4737__auto___80524 + (1));
i__4737__auto___80524 = G__80525;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return ellah.graphics.get_graphics.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(ellah.graphics.get_graphics.cljs$core$IFn$_invoke$arity$variadic = (function (p__78847){
var vec__78848 = p__78847;
var layer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78848,(0),null);
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
(ellah.graphics.get_graphics.cljs$lang$applyTo = (function (seq78846){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq78846));
}));

ellah.graphics.set_attr_BANG_ = (function ellah$graphics$set_attr_BANG_(key,value){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ellah.graphics.graphics_state,(function (p1__78851_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__78851_SHARP_,key,value);
}));

return value;
});
ellah.graphics.update_attr_BANG_ = (function ellah$graphics$update_attr_BANG_(key,value){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ellah.graphics.graphics_state,(function (p1__78852_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__78852_SHARP_,key,value);
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
ellah.graphics.hide_text_input = (function ellah$graphics$hide_text_input(){
var text_input = new cljs.core.Keyword(null,"text-input","text-input",-1937260843).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ellah.graphics.graphics_state));
return (text_input.style.display = "none");
});
ellah.graphics.activate_text_input = (function ellah$graphics$activate_text_input(path){
var text_input_80526 = new cljs.core.Keyword(null,"text-input","text-input",-1937260843).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ellah.graphics.graphics_state));
(text_input_80526.style.display = "block");

(text_input_80526.value = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(ellah.vedn.get_child(new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ellah.graphics.graphics_state)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),path))));

return ellah.graphics.set_attr_BANG_(new cljs.core.Keyword(null,"text-input-path","text-input-path",1110769199),path);
});
ellah.graphics.resize = (function ellah$graphics$resize(){
var current_width = ellah.graphics.app_width();
var current_height = ellah.graphics.app_height();
new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ellah.graphics.graphics_state)).renderer.resize(current_width,current_height);

var text_input = new cljs.core.Keyword(null,"text-input","text-input",-1937260843).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ellah.graphics.graphics_state));
var text_width = (current_width * ellah.constants.text_input_size);
(text_input.style.left = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((current_width - text_width) / (2)) | (0))),"px"].join(''));

(text_input.style.top = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(((current_height / (2)) | (0))),"px"].join(''));

return (new cljs.core.Keyword(null,"text-input","text-input",-1937260843).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ellah.graphics.graphics_state)).style.width = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((text_width | (0))),"px"].join(''));
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
var map__78853 = layout;
var map__78853__$1 = (((((!((map__78853 == null))))?(((((map__78853.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__78853.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__78853):map__78853);
var sublayouts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78853__$1,new cljs.core.Keyword(null,"sublayouts","sublayouts",-1203105463));
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
var map__78855 = layout;
var map__78855__$1 = (((((!((map__78855 == null))))?(((((map__78855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__78855.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__78855):map__78855);
var sublayouts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78855__$1,new cljs.core.Keyword(null,"sublayouts","sublayouts",-1203105463));
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
var G__78857 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sublayouts","sublayouts",-1203105463).cljs$core$IFn$_invoke$arity$1(layout),cljs.core.first(path));
var G__78858 = cljs.core.rest(path);
return (ellah.graphics.get_sublayout.cljs$core$IFn$_invoke$arity$2 ? ellah.graphics.get_sublayout.cljs$core$IFn$_invoke$arity$2(G__78857,G__78858) : ellah.graphics.get_sublayout.call(null,G__78857,G__78858));
}
});
ellah.graphics.form_layout = (function ellah$graphics$form_layout(form,starting_layout){
var current_layout = starting_layout;
var map__78859 = form;
var map__78859__$1 = (((((!((map__78859 == null))))?(((((map__78859.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__78859.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__78859):map__78859);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78859__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78859__$1,new cljs.core.Keyword(null,"value","value",305978217));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78859__$1,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"literal","literal",1664775605))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(current_layout,new cljs.core.Keyword(null,"type","type",1174270348),type,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"value","value",305978217),value], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(current_layout,new cljs.core.Keyword(null,"type","type",1174270348),type,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"sublayouts","sublayouts",-1203105463),(function (){var subform_count = cljs.core.count(children);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(subform_count,(1))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__78861 = cljs.core.first(children);
var G__78862 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(current_layout,new cljs.core.Keyword(null,"radius","radius",-2073122258),(ellah.constants.sole_subform_shrink_factor * new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(current_layout)));
return (ellah.graphics.form_layout.cljs$core$IFn$_invoke$arity$2 ? ellah.graphics.form_layout.cljs$core$IFn$_invoke$arity$2(G__78861,G__78862) : ellah.graphics.form_layout.call(null,G__78861,G__78862));
})()], null);
} else {
var raw_radius = Math.sin((Math.PI / subform_count));
var unscaled_radius = (raw_radius / (raw_radius + (1)));
var radius = ((unscaled_radius * ((1) - ellah.constants.bubble_thickness)) * new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(current_layout));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (subform,i){
var angle = ((Math.PI * -0.5) - (((Math.PI * (2)) * i) / subform_count));
var G__78863 = subform;
var G__78864 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([current_layout,ellah.geometry.scale_point(ellah.geometry.angle_point(angle),((new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(current_layout) * ((1) - ellah.constants.bubble_thickness)) - radius))], 0)),new cljs.core.Keyword(null,"radius","radius",-2073122258),(ellah.constants.subform_shrink_factor * radius));
return (ellah.graphics.form_layout.cljs$core$IFn$_invoke$arity$2 ? ellah.graphics.form_layout.cljs$core$IFn$_invoke$arity$2(G__78863,G__78864) : ellah.graphics.form_layout.call(null,G__78863,G__78864));
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
var len__4736__auto___80527 = arguments.length;
var i__4737__auto___80528 = (0);
while(true){
if((i__4737__auto___80528 < len__4736__auto___80527)){
args__4742__auto__.push((arguments[i__4737__auto___80528]));

var G__80529 = (i__4737__auto___80528 + (1));
i__4737__auto___80528 = G__80529;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return ellah.graphics.rect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(ellah.graphics.rect.cljs$core$IFn$_invoke$arity$variadic = (function (p__78868,fill,p__78869){
var vec__78870 = p__78868;
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78870,(0),null);
var size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78870,(1),null);
var vec__78873 = p__78869;
var layer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78873,(0),null);
var graphics = ellah.graphics.get_graphics.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([layer], 0));
graphics.beginFill(fill);

graphics.drawRect(ellah.graphics.screen_x(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(pos)),ellah.graphics.screen_y(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(pos)),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(size) * ellah.graphics.app_size()),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(size) * ellah.graphics.app_size()));

return graphics.endFill();
}));

(ellah.graphics.rect.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(ellah.graphics.rect.cljs$lang$applyTo = (function (seq78865){
var G__78866 = cljs.core.first(seq78865);
var seq78865__$1 = cljs.core.next(seq78865);
var G__78867 = cljs.core.first(seq78865__$1);
var seq78865__$2 = cljs.core.next(seq78865__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78866,G__78867,seq78865__$2);
}));

ellah.graphics.circle = (function ellah$graphics$circle(var_args){
var args__4742__auto__ = [];
var len__4736__auto___80530 = arguments.length;
var i__4737__auto___80531 = (0);
while(true){
if((i__4737__auto___80531 < len__4736__auto___80530)){
args__4742__auto__.push((arguments[i__4737__auto___80531]));

var G__80532 = (i__4737__auto___80531 + (1));
i__4737__auto___80531 = G__80532;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic = (function (p__78879,fill,p__78880){
var map__78881 = p__78879;
var map__78881__$1 = (((((!((map__78881 == null))))?(((((map__78881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__78881.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__78881):map__78881);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78881__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78881__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78881__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var vec__78882 = p__78880;
var layer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78882,(0),null);
var graphics = ellah.graphics.get_graphics.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([layer], 0));
graphics.beginFill(fill);

graphics.drawCircle(ellah.graphics.screen_x(x),ellah.graphics.screen_y(y),(radius * ellah.graphics.app_size()));

return graphics.endFill();
}));

(ellah.graphics.circle.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(ellah.graphics.circle.cljs$lang$applyTo = (function (seq78876){
var G__78877 = cljs.core.first(seq78876);
var seq78876__$1 = cljs.core.next(seq78876);
var G__78878 = cljs.core.first(seq78876__$1);
var seq78876__$2 = cljs.core.next(seq78876__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78877,G__78878,seq78876__$2);
}));

ellah.graphics.polygon = (function ellah$graphics$polygon(var_args){
var args__4742__auto__ = [];
var len__4736__auto___80533 = arguments.length;
var i__4737__auto___80534 = (0);
while(true){
if((i__4737__auto___80534 < len__4736__auto___80533)){
args__4742__auto__.push((arguments[i__4737__auto___80534]));

var G__80535 = (i__4737__auto___80534 + (1));
i__4737__auto___80534 = G__80535;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return ellah.graphics.polygon.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(ellah.graphics.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (points,fill,p__78890){
var vec__78891 = p__78890;
var layer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78891,(0),null);
var graphics = ellah.graphics.get_graphics.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([layer], 0));
graphics.beginFill(fill);

graphics.drawPolygon(cljs.core.clj__GT_js(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__78886_SHARP_){
return (new module$node_modules$pixi_DOT_js$dist$cjs$pixi.Point(ellah.graphics.screen_x(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p1__78886_SHARP_)),ellah.graphics.screen_y(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p1__78886_SHARP_))));
}),points)));

return graphics.endFill();
}));

(ellah.graphics.polygon.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(ellah.graphics.polygon.cljs$lang$applyTo = (function (seq78887){
var G__78888 = cljs.core.first(seq78887);
var seq78887__$1 = cljs.core.next(seq78887);
var G__78889 = cljs.core.first(seq78887__$1);
var seq78887__$2 = cljs.core.next(seq78887__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78888,G__78889,seq78887__$2);
}));

ellah.graphics.line = (function ellah$graphics$line(var_args){
var args__4742__auto__ = [];
var len__4736__auto___80536 = arguments.length;
var i__4737__auto___80537 = (0);
while(true){
if((i__4737__auto___80537 < len__4736__auto___80536)){
args__4742__auto__.push((arguments[i__4737__auto___80537]));

var G__80538 = (i__4737__auto___80537 + (1));
i__4737__auto___80537 = G__80538;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return ellah.graphics.line.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(ellah.graphics.line.cljs$core$IFn$_invoke$arity$variadic = (function (start,end,width,color,p__78899){
var vec__78900 = p__78899;
var layer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78900,(0),null);
var graphics = ellah.graphics.get_graphics.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([layer], 0));
graphics.lineStyle((width * ellah.graphics.app_width()),color);

graphics.moveTo(ellah.graphics.screen_x(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(start)),ellah.graphics.screen_y(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(start)));

graphics.lineTo(ellah.graphics.screen_x(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(end)),ellah.graphics.screen_y(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(end)));

return graphics.lineStyle((0));
}));

(ellah.graphics.line.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(ellah.graphics.line.cljs$lang$applyTo = (function (seq78894){
var G__78895 = cljs.core.first(seq78894);
var seq78894__$1 = cljs.core.next(seq78894);
var G__78896 = cljs.core.first(seq78894__$1);
var seq78894__$2 = cljs.core.next(seq78894__$1);
var G__78897 = cljs.core.first(seq78894__$2);
var seq78894__$3 = cljs.core.next(seq78894__$2);
var G__78898 = cljs.core.first(seq78894__$3);
var seq78894__$4 = cljs.core.next(seq78894__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78895,G__78896,G__78897,G__78898,seq78894__$4);
}));

ellah.graphics.text = (function ellah$graphics$text(var_args){
var args__4742__auto__ = [];
var len__4736__auto___80539 = arguments.length;
var i__4737__auto___80540 = (0);
while(true){
if((i__4737__auto___80540 < len__4736__auto___80539)){
args__4742__auto__.push((arguments[i__4737__auto___80540]));

var G__80541 = (i__4737__auto___80540 + (1));
i__4737__auto___80540 = G__80541;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return ellah.graphics.text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(ellah.graphics.text.cljs$core$IFn$_invoke$arity$variadic = (function (s,pos,size,color,p__78908){
var vec__78909 = p__78908;
var layer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78909,(0),null);
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
(ellah.graphics.text.cljs$lang$applyTo = (function (seq78903){
var G__78904 = cljs.core.first(seq78903);
var seq78903__$1 = cljs.core.next(seq78903);
var G__78905 = cljs.core.first(seq78903__$1);
var seq78903__$2 = cljs.core.next(seq78903__$1);
var G__78906 = cljs.core.first(seq78903__$2);
var seq78903__$3 = cljs.core.next(seq78903__$2);
var G__78907 = cljs.core.first(seq78903__$3);
var seq78903__$4 = cljs.core.next(seq78903__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78904,G__78905,G__78906,G__78907,seq78903__$4);
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
ellah.graphics.adjust_layout = (function ellah$graphics$adjust_layout(layout,pos,zoom){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(layout,new cljs.core.Keyword(null,"x","x",2099068185),(function (p1__78912_SHARP_){
return (zoom * (p1__78912_SHARP_ + new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(pos)));
})),new cljs.core.Keyword(null,"y","y",-1757859776),(function (p1__78913_SHARP_){
return (zoom * (p1__78913_SHARP_ + new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(pos)));
})),new cljs.core.Keyword(null,"radius","radius",-2073122258),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,zoom)),new cljs.core.Keyword(null,"sublayouts","sublayouts",-1203105463),(function (sub){
if(cljs.core.truth_(sub)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__78914_SHARP_){
return (ellah.graphics.adjust_layout.cljs$core$IFn$_invoke$arity$3 ? ellah.graphics.adjust_layout.cljs$core$IFn$_invoke$arity$3(p1__78914_SHARP_,pos,zoom) : ellah.graphics.adjust_layout.call(null,p1__78914_SHARP_,pos,zoom));
}),sub);
} else {
return null;
}
}));
});
ellah.graphics.map_layout = (function ellah$graphics$map_layout(layout,from,to){
return (function ellah$graphics$map_layout_$_f(layout__$1,p__78918,radius_change_factor){
var map__78919 = p__78918;
var map__78919__$1 = (((((!((map__78919 == null))))?(((((map__78919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__78919.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__78919):map__78919);
var offset = map__78919__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78919__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78919__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(layout__$1,new cljs.core.Keyword(null,"x","x",2099068185),(function (p1__78915_SHARP_){
return (x + (p1__78915_SHARP_ * radius_change_factor));
})),new cljs.core.Keyword(null,"y","y",-1757859776),(function (p1__78916_SHARP_){
return (y + (p1__78916_SHARP_ * radius_change_factor));
})),new cljs.core.Keyword(null,"radius","radius",-2073122258),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,radius_change_factor)),new cljs.core.Keyword(null,"sublayouts","sublayouts",-1203105463),(function (sub){
if(cljs.core.truth_(sub)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__78917_SHARP_){
return ellah$graphics$map_layout_$_f(p1__78917_SHARP_,offset,radius_change_factor);
}),sub);
} else {
return null;
}
}));
})(layout,ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ellah.geometry.subtract_points(ellah.geometry.subtract_points(to,ellah.geometry.scale_point(ellah.geometry.unit,new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(to))),ellah.geometry.subtract_points(from,ellah.geometry.scale_point(ellah.geometry.unit,new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(from))))], 0)),(new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(to) / new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(from)));
});
ellah.graphics.render_layout = (function ellah$graphics$render_layout(var_args){
var args__4742__auto__ = [];
var len__4736__auto___80542 = arguments.length;
var i__4737__auto___80543 = (0);
while(true){
if((i__4737__auto___80543 < len__4736__auto___80542)){
args__4742__auto__.push((arguments[i__4737__auto___80543]));

var G__80544 = (i__4737__auto___80543 + (1));
i__4737__auto___80543 = G__80544;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return ellah.graphics.render_layout.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(ellah.graphics.render_layout.cljs$core$IFn$_invoke$arity$variadic = (function (layout,p__78925){
var vec__78926 = p__78925;
var layer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78926,(0),null);
var center = layout;
var radius = new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(layout);
if(cljs.core.truth_((function (){var G__78930 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(layout);
var fexpr__78929 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"lit-fn","lit-fn",782737969),null,new cljs.core.Keyword(null,"list","list",765357683),null,new cljs.core.Keyword(null,"literal","literal",1664775605),null,new cljs.core.Keyword(null,"set","set",304602554),null,new cljs.core.Keyword(null,"map","map",1371690461),null], null), null);
return (fexpr__78929.cljs$core$IFn$_invoke$arity$1 ? fexpr__78929.cljs$core$IFn$_invoke$arity$1(G__78930) : fexpr__78929.call(null,G__78930));
})())){
ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic(layout,ellah.constants.foreground_color,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([layer], 0));
} else {
}

if(cljs.core.truth_((function (){var G__78932 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(layout);
var fexpr__78931 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lit-fn","lit-fn",782737969),null,new cljs.core.Keyword(null,"map","map",1371690461),null], null), null);
return (fexpr__78931.cljs$core$IFn$_invoke$arity$1 ? fexpr__78931.cljs$core$IFn$_invoke$arity$1(G__78932) : fexpr__78931.call(null,G__78932));
})())){
var r_80545 = new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(layout);
var seq__78933_80546 = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ellah.geometry.PI * 0.25),(ellah.geometry.PI * 0.75),(ellah.geometry.PI * 1.25),(ellah.geometry.PI * 1.75)], null));
var chunk__78934_80547 = null;
var count__78935_80548 = (0);
var i__78936_80549 = (0);
while(true){
if((i__78936_80549 < count__78935_80548)){
var base_angle_80550 = chunk__78934_80547.cljs$core$IIndexed$_nth$arity$2(null,i__78936_80549);
ellah.graphics.polygon.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([layout,ellah.geometry.scale_point(ellah.geometry.angle_point((base_angle_80550 - ellah.constants.map_point_width)),r_80545)], 0)),ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([layout,ellah.geometry.scale_point(ellah.geometry.angle_point(base_angle_80550),((ellah.constants.map_point_height + (1)) * r_80545))], 0)),ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([layout,ellah.geometry.scale_point(ellah.geometry.angle_point((base_angle_80550 + ellah.constants.map_point_width)),r_80545)], 0))], null),ellah.constants.foreground_color,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([layer], 0));


var G__80551 = seq__78933_80546;
var G__80552 = chunk__78934_80547;
var G__80553 = count__78935_80548;
var G__80554 = (i__78936_80549 + (1));
seq__78933_80546 = G__80551;
chunk__78934_80547 = G__80552;
count__78935_80548 = G__80553;
i__78936_80549 = G__80554;
continue;
} else {
var temp__5753__auto___80555 = cljs.core.seq(seq__78933_80546);
if(temp__5753__auto___80555){
var seq__78933_80556__$1 = temp__5753__auto___80555;
if(cljs.core.chunked_seq_QMARK_(seq__78933_80556__$1)){
var c__4556__auto___80557 = cljs.core.chunk_first(seq__78933_80556__$1);
var G__80558 = cljs.core.chunk_rest(seq__78933_80556__$1);
var G__80559 = c__4556__auto___80557;
var G__80560 = cljs.core.count(c__4556__auto___80557);
var G__80561 = (0);
seq__78933_80546 = G__80558;
chunk__78934_80547 = G__80559;
count__78935_80548 = G__80560;
i__78936_80549 = G__80561;
continue;
} else {
var base_angle_80562 = cljs.core.first(seq__78933_80556__$1);
ellah.graphics.polygon.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([layout,ellah.geometry.scale_point(ellah.geometry.angle_point((base_angle_80562 - ellah.constants.map_point_width)),r_80545)], 0)),ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([layout,ellah.geometry.scale_point(ellah.geometry.angle_point(base_angle_80562),((ellah.constants.map_point_height + (1)) * r_80545))], 0)),ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([layout,ellah.geometry.scale_point(ellah.geometry.angle_point((base_angle_80562 + ellah.constants.map_point_width)),r_80545)], 0))], null),ellah.constants.foreground_color,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([layer], 0));


var G__80563 = cljs.core.next(seq__78933_80556__$1);
var G__80564 = null;
var G__80565 = (0);
var G__80566 = (0);
seq__78933_80546 = G__80563;
chunk__78934_80547 = G__80564;
count__78935_80548 = G__80565;
i__78936_80549 = G__80566;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_((function (){var G__78938 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(layout);
var fexpr__78937 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lit-fn","lit-fn",782737969),null,new cljs.core.Keyword(null,"set","set",304602554),null], null), null);
return (fexpr__78937.cljs$core$IFn$_invoke$arity$1 ? fexpr__78937.cljs$core$IFn$_invoke$arity$1(G__78938) : fexpr__78937.call(null,G__78938));
})())){
var r_80567 = new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(layout);
var seq__78939_80568 = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(ellah.geometry.PI * 0.5),ellah.geometry.PI,(ellah.geometry.PI * 1.5)], null));
var chunk__78940_80569 = null;
var count__78941_80570 = (0);
var i__78942_80571 = (0);
while(true){
if((i__78942_80571 < count__78941_80570)){
var angle_80572 = chunk__78940_80569.cljs$core$IIndexed$_nth$arity$2(null,i__78942_80571);
var base_offset_80573 = ellah.geometry.scale_point(ellah.geometry.angle_point((angle_80572 + (ellah.geometry.PI * 0.5))),(r_80567 * ellah.constants.set_line_offset));
var seq__78951_80574 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [base_offset_80573,ellah.geometry.scale_point(base_offset_80573,(-1))], null));
var chunk__78952_80575 = null;
var count__78953_80576 = (0);
var i__78954_80577 = (0);
while(true){
if((i__78954_80577 < count__78953_80576)){
var offset_80578 = chunk__78952_80575.cljs$core$IIndexed$_nth$arity$2(null,i__78954_80577);
ellah.graphics.line.cljs$core$IFn$_invoke$arity$variadic(ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([offset_80578,layout], 0)),ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([layout,offset_80578,ellah.geometry.scale_point(ellah.geometry.angle_point(angle_80572),((ellah.constants.set_line_length + (1)) * r_80567))], 0)),(r_80567 * ellah.constants.set_line_width),ellah.constants.foreground_color,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([layer], 0));


var G__80579 = seq__78951_80574;
var G__80580 = chunk__78952_80575;
var G__80581 = count__78953_80576;
var G__80582 = (i__78954_80577 + (1));
seq__78951_80574 = G__80579;
chunk__78952_80575 = G__80580;
count__78953_80576 = G__80581;
i__78954_80577 = G__80582;
continue;
} else {
var temp__5753__auto___80583 = cljs.core.seq(seq__78951_80574);
if(temp__5753__auto___80583){
var seq__78951_80584__$1 = temp__5753__auto___80583;
if(cljs.core.chunked_seq_QMARK_(seq__78951_80584__$1)){
var c__4556__auto___80585 = cljs.core.chunk_first(seq__78951_80584__$1);
var G__80586 = cljs.core.chunk_rest(seq__78951_80584__$1);
var G__80587 = c__4556__auto___80585;
var G__80588 = cljs.core.count(c__4556__auto___80585);
var G__80589 = (0);
seq__78951_80574 = G__80586;
chunk__78952_80575 = G__80587;
count__78953_80576 = G__80588;
i__78954_80577 = G__80589;
continue;
} else {
var offset_80590 = cljs.core.first(seq__78951_80584__$1);
ellah.graphics.line.cljs$core$IFn$_invoke$arity$variadic(ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([offset_80590,layout], 0)),ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([layout,offset_80590,ellah.geometry.scale_point(ellah.geometry.angle_point(angle_80572),((ellah.constants.set_line_length + (1)) * r_80567))], 0)),(r_80567 * ellah.constants.set_line_width),ellah.constants.foreground_color,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([layer], 0));


var G__80591 = cljs.core.next(seq__78951_80584__$1);
var G__80592 = null;
var G__80593 = (0);
var G__80594 = (0);
seq__78951_80574 = G__80591;
chunk__78952_80575 = G__80592;
count__78953_80576 = G__80593;
i__78954_80577 = G__80594;
continue;
}
} else {
}
}
break;
}


var G__80595 = seq__78939_80568;
var G__80596 = chunk__78940_80569;
var G__80597 = count__78941_80570;
var G__80598 = (i__78942_80571 + (1));
seq__78939_80568 = G__80595;
chunk__78940_80569 = G__80596;
count__78941_80570 = G__80597;
i__78942_80571 = G__80598;
continue;
} else {
var temp__5753__auto___80599 = cljs.core.seq(seq__78939_80568);
if(temp__5753__auto___80599){
var seq__78939_80600__$1 = temp__5753__auto___80599;
if(cljs.core.chunked_seq_QMARK_(seq__78939_80600__$1)){
var c__4556__auto___80601 = cljs.core.chunk_first(seq__78939_80600__$1);
var G__80602 = cljs.core.chunk_rest(seq__78939_80600__$1);
var G__80603 = c__4556__auto___80601;
var G__80604 = cljs.core.count(c__4556__auto___80601);
var G__80605 = (0);
seq__78939_80568 = G__80602;
chunk__78940_80569 = G__80603;
count__78941_80570 = G__80604;
i__78942_80571 = G__80605;
continue;
} else {
var angle_80606 = cljs.core.first(seq__78939_80600__$1);
var base_offset_80607 = ellah.geometry.scale_point(ellah.geometry.angle_point((angle_80606 + (ellah.geometry.PI * 0.5))),(r_80567 * ellah.constants.set_line_offset));
var seq__78955_80608 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [base_offset_80607,ellah.geometry.scale_point(base_offset_80607,(-1))], null));
var chunk__78956_80609 = null;
var count__78957_80610 = (0);
var i__78958_80611 = (0);
while(true){
if((i__78958_80611 < count__78957_80610)){
var offset_80612 = chunk__78956_80609.cljs$core$IIndexed$_nth$arity$2(null,i__78958_80611);
ellah.graphics.line.cljs$core$IFn$_invoke$arity$variadic(ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([offset_80612,layout], 0)),ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([layout,offset_80612,ellah.geometry.scale_point(ellah.geometry.angle_point(angle_80606),((ellah.constants.set_line_length + (1)) * r_80567))], 0)),(r_80567 * ellah.constants.set_line_width),ellah.constants.foreground_color,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([layer], 0));


var G__80613 = seq__78955_80608;
var G__80614 = chunk__78956_80609;
var G__80615 = count__78957_80610;
var G__80616 = (i__78958_80611 + (1));
seq__78955_80608 = G__80613;
chunk__78956_80609 = G__80614;
count__78957_80610 = G__80615;
i__78958_80611 = G__80616;
continue;
} else {
var temp__5753__auto___80617__$1 = cljs.core.seq(seq__78955_80608);
if(temp__5753__auto___80617__$1){
var seq__78955_80618__$1 = temp__5753__auto___80617__$1;
if(cljs.core.chunked_seq_QMARK_(seq__78955_80618__$1)){
var c__4556__auto___80619 = cljs.core.chunk_first(seq__78955_80618__$1);
var G__80620 = cljs.core.chunk_rest(seq__78955_80618__$1);
var G__80621 = c__4556__auto___80619;
var G__80622 = cljs.core.count(c__4556__auto___80619);
var G__80623 = (0);
seq__78955_80608 = G__80620;
chunk__78956_80609 = G__80621;
count__78957_80610 = G__80622;
i__78958_80611 = G__80623;
continue;
} else {
var offset_80624 = cljs.core.first(seq__78955_80618__$1);
ellah.graphics.line.cljs$core$IFn$_invoke$arity$variadic(ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([offset_80624,layout], 0)),ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([layout,offset_80624,ellah.geometry.scale_point(ellah.geometry.angle_point(angle_80606),((ellah.constants.set_line_length + (1)) * r_80567))], 0)),(r_80567 * ellah.constants.set_line_width),ellah.constants.foreground_color,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([layer], 0));


var G__80625 = cljs.core.next(seq__78955_80618__$1);
var G__80626 = null;
var G__80627 = (0);
var G__80628 = (0);
seq__78955_80608 = G__80625;
chunk__78956_80609 = G__80626;
count__78957_80610 = G__80627;
i__78958_80611 = G__80628;
continue;
}
} else {
}
}
break;
}


var G__80629 = cljs.core.next(seq__78939_80600__$1);
var G__80630 = null;
var G__80631 = (0);
var G__80632 = (0);
seq__78939_80568 = G__80629;
chunk__78940_80569 = G__80630;
count__78941_80570 = G__80631;
i__78942_80571 = G__80632;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_((function (){var G__78960 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(layout);
var fexpr__78959 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lit-fn","lit-fn",782737969),null,new cljs.core.Keyword(null,"list","list",765357683),null,new cljs.core.Keyword(null,"set","set",304602554),null,new cljs.core.Keyword(null,"map","map",1371690461),null], null), null);
return (fexpr__78959.cljs$core$IFn$_invoke$arity$1 ? fexpr__78959.cljs$core$IFn$_invoke$arity$1(G__78960) : fexpr__78959.call(null,G__78960));
})())){
ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update.cljs$core$IFn$_invoke$arity$3(layout,new cljs.core.Keyword(null,"radius","radius",-2073122258),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,((1) - ellah.constants.bubble_thickness))),ellah.constants.background_color,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([layer], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(layout),new cljs.core.Keyword(null,"vector","vector",1902966158))){
ellah.graphics.polygon.cljs$core$IFn$_invoke$arity$variadic(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__78921_SHARP_){
return ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([center,ellah.geometry.scale_point(p1__78921_SHARP_,(radius * ellah.constants.vector_size_factor))], 0));
}),ellah.geometry.polygon.cljs$core$IFn$_invoke$arity$variadic((8),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(ellah.geometry.PI * 0.125)], 0))),ellah.constants.foreground_color,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([layer], 0));

ellah.graphics.polygon.cljs$core$IFn$_invoke$arity$variadic(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__78922_SHARP_){
return ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([center,ellah.geometry.scale_point(p1__78922_SHARP_,((radius * ellah.constants.vector_size_factor) * ((1) - ellah.constants.bubble_thickness)))], 0));
}),ellah.geometry.polygon.cljs$core$IFn$_invoke$arity$variadic((8),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(ellah.geometry.PI * 0.125)], 0))),ellah.constants.background_color,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([layer], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(layout),new cljs.core.Keyword(null,"literal","literal",1664775605))){
return ellah.graphics.text.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(layout),layout,new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(layout),ellah.constants.text_color,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([layer], 0));
} else {
return null;
}
}));

(ellah.graphics.render_layout.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(ellah.graphics.render_layout.cljs$lang$applyTo = (function (seq78923){
var G__78924 = cljs.core.first(seq78923);
var seq78923__$1 = cljs.core.next(seq78923);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78924,seq78923__$1);
}));

ellah.graphics.formbar_offset = (function ellah$graphics$formbar_offset(index){
return ((ellah.constants.formbar_pos + ellah.constants.formbar_radius) + (index * (((2) * ellah.constants.formbar_radius) * ellah.constants.formbar_spacing)));
});
ellah.graphics.formbar_zone_size = (function ellah$graphics$formbar_zone_size(side){
var side_stage_count = cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"formbars","formbars",393026901).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ellah.graphics.graphics_state)),side));
if((side_stage_count === (0))){
return (0);
} else {
return (ellah.graphics.formbar_offset(side_stage_count) - ellah.constants.formbar_radius);
}
});
ellah.graphics.adjusted_form_layout = (function ellah$graphics$adjusted_form_layout(){
var current_app_rect = ellah.graphics.app_rect();
var vec__78961 = current_app_rect;
var app_pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78961,(0),null);
var app_size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78961,(1),null);
var min_y = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(app_pos) + ellah.graphics.formbar_zone_size(new cljs.core.Keyword(null,"top","top",-1856271961)));
var max_y = ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(app_size) + new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(app_pos)) - ellah.graphics.formbar_zone_size(new cljs.core.Keyword(null,"bottom","bottom",-1550509018)));
var min_x = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(app_pos) + ellah.graphics.formbar_zone_size(new cljs.core.Keyword(null,"left","left",-399115937)));
var max_x = ((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(app_size) + new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(app_pos)) - ellah.graphics.formbar_zone_size(new cljs.core.Keyword(null,"right","right",-452581833)));
var form_rect = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),min_x,new cljs.core.Keyword(null,"y","y",-1757859776),min_y], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(max_x - min_x),new cljs.core.Keyword(null,"y","y",-1757859776),(max_y - min_y)], null)], null);
var form_circle = ellah.geometry.circle_within(form_rect);
return ellah.graphics.map_layout(ellah.graphics.adjust_layout(ellah.graphics.adjust_layout(ellah.graphics.current_form_layout(),new cljs.core.Keyword(null,"camera-pos","camera-pos",666924233).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ellah.graphics.graphics_state)),new cljs.core.Keyword(null,"camera-zoom","camera-zoom",-1214902147).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ellah.graphics.graphics_state))),ellah.geometry.unit,0.5),ellah.geometry.circle_within(current_app_rect),form_circle);
});
ellah.graphics.formbar_arrangement = (function ellah$graphics$formbar_arrangement(){
return cljs.core.zipmap(ellah.constants.screen_sides,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (side){
var vec__78964 = ellah.graphics.app_rect();
var app_pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78964,(0),null);
var app_size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78964,(1),null);
var map__78967 = cljs.core.deref(ellah.graphics.graphics_state);
var map__78967__$1 = (((((!((map__78967 == null))))?(((((map__78967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__78967.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__78967):map__78967);
var formbars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78967__$1,new cljs.core.Keyword(null,"formbars","formbars",393026901));
var horizontal_QMARK_ = (function (){var fexpr__78969 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bottom","bottom",-1550509018),null,new cljs.core.Keyword(null,"top","top",-1856271961),null], null), null);
return (fexpr__78969.cljs$core$IFn$_invoke$arity$1 ? fexpr__78969.cljs$core$IFn$_invoke$arity$1(side) : fexpr__78969.call(null,side));
})();
var bar_stages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(formbars,side);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (stage,stage_index){
var sizes = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (bar){
var x__4214__auto__ = (0);
var y__4215__auto__ = (function (){var size = cljs.core.count(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(bar));
return ((((size - (1)) * (2)) * ellah.constants.formbar_radius) * ((1) - ellah.constants.formbar_outline_thickness));
})();
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
}),stage);
var total_size = (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,sizes) + (((ellah.constants.formbar_spacing + (1)) * ellah.constants.formbar_radius) * (cljs.core.count(stage) - (1))));
var edge_offset = ((ellah.constants.formbar_pos + ellah.constants.formbar_radius) + (stage_index * (ellah.constants.formbar_radius + (ellah.constants.formbar_radius * ellah.constants.formbar_spacing))));
var offsets = cljs.core.vec(cljs.core.reverse(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (offsets,size){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(offsets,((cljs.core.first(offsets) + size) + ((ellah.constants.formbar_spacing + (1)) * ellah.constants.formbar_radius)));
}),(new cljs.core.List(null,(-0.5 * total_size),null,(1),null)),cljs.core.rest(cljs.core.reverse(sizes)))));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$4((function (bar,size,bar_offset){
var bar_pos = (function (){var G__78970 = side;
var G__78970__$1 = (((G__78970 instanceof cljs.core.Keyword))?G__78970.fqn:null);
switch (G__78970__$1) {
case "bottom":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(app_pos) + (0.5 * new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(app_size))) + bar_offset),new cljs.core.Keyword(null,"y","y",-1757859776),((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(app_pos) + new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(app_size)) - edge_offset)], null);

break;
case "top":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(app_pos) + (0.5 * new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(app_size))) + bar_offset),new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(app_pos) + edge_offset)], null);

break;
case "left":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(app_pos) + edge_offset),new cljs.core.Keyword(null,"y","y",-1757859776),((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(app_pos) + (0.5 * new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(app_size))) + bar_offset)], null);

break;
case "right":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(app_pos) + new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(app_size)) - edge_offset),new cljs.core.Keyword(null,"y","y",-1757859776),((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(app_pos) + (0.5 * new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(app_size))) + bar_offset)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__78970__$1)].join('')));

}
})();
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bar_pos,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(cljs.core.truth_(horizontal_QMARK_)?size:(0)),new cljs.core.Keyword(null,"height","height",1025178622),(cljs.core.truth_(horizontal_QMARK_)?(0):size),new cljs.core.Keyword(null,"circles","circles",-1947060917),cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (form,form_index){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bar_pos,ellah.geometry.scale_point(cljs.core.PersistentArrayMap.createAsIfByAssoc([(cljs.core.truth_(horizontal_QMARK_)?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"y","y",-1757859776)),(((2) * ((1) - ellah.constants.formbar_outline_thickness)) * ellah.constants.formbar_radius)]),form_index)], 0)),new cljs.core.Keyword(null,"radius","radius",-2073122258),((ellah.constants.formbar_radius * ((1) - ellah.constants.formbar_outline_thickness)) * ellah.constants.formbar_form_size),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"form","form",-1624062471),form], 0));
}),new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(bar),cljs.core.range.cljs$core$IFn$_invoke$arity$0())], null)], 0));
}),stage,sizes,offsets);
}),bar_stages,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
}),ellah.constants.screen_sides));
});
ellah.graphics.formbar_path_at = (function ellah$graphics$formbar_path_at(pos){
var full_arrangement = ellah.graphics.formbar_arrangement();
return cljs.core.some((function (side){
var arrangement = cljs.core.get.cljs$core$IFn$_invoke$arity$2(full_arrangement,side);
var horizontal_QMARK_ = (function (){var fexpr__78971 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bottom","bottom",-1550509018),null,new cljs.core.Keyword(null,"top","top",-1856271961),null], null), null);
return (fexpr__78971.cljs$core$IFn$_invoke$arity$1 ? fexpr__78971.cljs$core$IFn$_invoke$arity$1(side) : fexpr__78971.call(null,side));
})();
return cljs.core.some((function (stage_index){
var stage = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(arrangement,stage_index);
return cljs.core.some((function (bar_index){
var bar = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(stage,bar_index);
if((((ellah.geometry.point_magnitude(ellah.geometry.subtract_points(pos,bar)) <= ellah.constants.formbar_radius)) || ((ellah.geometry.point_magnitude(ellah.geometry.subtract_points(pos,ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bar,(cljs.core.truth_(horizontal_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(bar)], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(bar)], null))], 0)))) <= ellah.constants.formbar_radius)) || (ellah.geometry.in_rect_QMARK_((cljs.core.truth_(horizontal_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ellah.geometry.subtract_points(bar,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),ellah.constants.formbar_radius], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(bar),new cljs.core.Keyword(null,"y","y",-1757859776),((2) * ellah.constants.formbar_radius)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ellah.geometry.subtract_points(bar,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),ellah.constants.formbar_radius], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),((2) * ellah.constants.formbar_radius),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(bar)], null)], null)),pos)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [side,stage_index,bar_index], null);
} else {
return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(stage)));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(arrangement)));
}),ellah.constants.screen_sides);
});
ellah.graphics.formbar_form_path_at = (function ellah$graphics$formbar_form_path_at(pos){
var full_arrangement = ellah.graphics.formbar_arrangement();
return cljs.core.some((function (side){
var arrangement = cljs.core.get.cljs$core$IFn$_invoke$arity$2(full_arrangement,side);
return cljs.core.some((function (stage_index){
var stage = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(arrangement,stage_index);
return cljs.core.some((function (bar_index){
var bar = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(stage,bar_index);
var map__78972 = bar;
var map__78972__$1 = (((((!((map__78972 == null))))?(((((map__78972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__78972.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__78972):map__78972);
var circles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78972__$1,new cljs.core.Keyword(null,"circles","circles",-1947060917));
return cljs.core.some((function (circle_index){
var bar_circle = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(circles,circle_index);
if(ellah.geometry.in_circle_QMARK_(bar_circle,pos)){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [side,stage_index,bar_index,new cljs.core.Keyword(null,"circles","circles",-1947060917),circle_index,new cljs.core.Keyword(null,"form","form",-1624062471)], null);
} else {
return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(circles)));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(stage)));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(arrangement)));
}),ellah.constants.screen_sides);
});
ellah.graphics.get_mouse_zone = (function ellah$graphics$get_mouse_zone(){
var vec__78974 = ellah.graphics.app_rect();
var app_pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78974,(0),null);
var app_size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78974,(1),null);
var map__78977 = cljs.core.deref(ellah.graphics.graphics_state);
var map__78977__$1 = (((((!((map__78977 == null))))?(((((map__78977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__78977.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__78977):map__78977);
var mouse = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78977__$1,new cljs.core.Keyword(null,"mouse","mouse",478628972));
var eval_zone_radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78977__$1,new cljs.core.Keyword(null,"eval-zone-radius","eval-zone-radius",1772203622));
if((ellah.geometry.point_magnitude(ellah.geometry.subtract_points(ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app_pos,cljs.core.select_keys(app_size,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776)], null))], 0)),mouse)) <= ellah.constants.discard_zone_radius)){
return new cljs.core.Keyword(null,"discard","discard",-1939593545);
} else {
if((ellah.geometry.point_magnitude(ellah.geometry.subtract_points(ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app_pos,app_size], 0)),mouse)) <= eval_zone_radius)){
return new cljs.core.Keyword(null,"eval","eval",-1103567905);
} else {
if(cljs.core.truth_(ellah.graphics.formbar_path_at(mouse))){
return new cljs.core.Keyword(null,"formbar","formbar",824418093);
} else {
return new cljs.core.Keyword(null,"program","program",781564284);

}
}
}
});
ellah.graphics.render_sublayouts = (function ellah$graphics$render_sublayouts(var_args){
var args__4742__auto__ = [];
var len__4736__auto___80634 = arguments.length;
var i__4737__auto___80635 = (0);
while(true){
if((i__4737__auto___80635 < len__4736__auto___80634)){
args__4742__auto__.push((arguments[i__4737__auto___80635]));

var G__80636 = (i__4737__auto___80635 + (1));
i__4737__auto___80635 = G__80636;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return ellah.graphics.render_sublayouts.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(ellah.graphics.render_sublayouts.cljs$core$IFn$_invoke$arity$variadic = (function (layout,p__78981){
var vec__78982 = p__78981;
var layer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78982,(0),null);
var seq__78985 = cljs.core.seq(ellah.graphics.flatten_layout(layout));
var chunk__78986 = null;
var count__78987 = (0);
var i__78988 = (0);
while(true){
if((i__78988 < count__78987)){
var sublayout = chunk__78986.cljs$core$IIndexed$_nth$arity$2(null,i__78988);
ellah.graphics.render_layout.cljs$core$IFn$_invoke$arity$variadic(sublayout,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([layer], 0));


var G__80637 = seq__78985;
var G__80638 = chunk__78986;
var G__80639 = count__78987;
var G__80640 = (i__78988 + (1));
seq__78985 = G__80637;
chunk__78986 = G__80638;
count__78987 = G__80639;
i__78988 = G__80640;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__78985);
if(temp__5753__auto__){
var seq__78985__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__78985__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__78985__$1);
var G__80641 = cljs.core.chunk_rest(seq__78985__$1);
var G__80642 = c__4556__auto__;
var G__80643 = cljs.core.count(c__4556__auto__);
var G__80644 = (0);
seq__78985 = G__80641;
chunk__78986 = G__80642;
count__78987 = G__80643;
i__78988 = G__80644;
continue;
} else {
var sublayout = cljs.core.first(seq__78985__$1);
ellah.graphics.render_layout.cljs$core$IFn$_invoke$arity$variadic(sublayout,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([layer], 0));


var G__80645 = cljs.core.next(seq__78985__$1);
var G__80646 = null;
var G__80647 = (0);
var G__80648 = (0);
seq__78985 = G__80645;
chunk__78986 = G__80646;
count__78987 = G__80647;
i__78988 = G__80648;
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
(ellah.graphics.render_sublayouts.cljs$lang$applyTo = (function (seq78979){
var G__78980 = cljs.core.first(seq78979);
var seq78979__$1 = cljs.core.next(seq78979);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78980,seq78979__$1);
}));

ellah.graphics.mouse_dragging_QMARK_ = (function ellah$graphics$mouse_dragging_QMARK_(){
return (new cljs.core.Keyword(null,"drag-dist","drag-dist",-1927545717).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mouse","mouse",478628972).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ellah.graphics.graphics_state))) > ellah.constants.min_drag_dist);
});
ellah.graphics.placement_form = (function ellah$graphics$placement_form(){
var map__78989 = cljs.core.deref(ellah.graphics.graphics_state);
var map__78989__$1 = (((((!((map__78989 == null))))?(((((map__78989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__78989.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__78989):map__78989);
var mouse = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78989__$1,new cljs.core.Keyword(null,"mouse","mouse",478628972));
var formbars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78989__$1,new cljs.core.Keyword(null,"formbars","formbars",393026901));
var map__78990 = mouse;
var map__78990__$1 = (((((!((map__78990 == null))))?(((((map__78990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__78990.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__78990):map__78990);
var down_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78990__$1,new cljs.core.Keyword(null,"down?","down?",1701019493));
var down_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78990__$1,new cljs.core.Keyword(null,"down-path","down-path",-1576662356));
var down_zone = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78990__$1,new cljs.core.Keyword(null,"down-zone","down-zone",-858806618));
var down_formbar_form_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78990__$1,new cljs.core.Keyword(null,"down-formbar-form-path","down-formbar-form-path",-1673861711));
if(cljs.core.truth_(down_QMARK_)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(down_zone,new cljs.core.Keyword(null,"program","program",781564284))){
return ellah.vedn.get_child(new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ellah.graphics.graphics_state)),cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.list((0)),down_path)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(down_zone,new cljs.core.Keyword(null,"eval","eval",-1103567905))){
return cljs.core.last(new cljs.core.Keyword(null,"eval-results","eval-results",553789722).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ellah.graphics.graphics_state)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(down_zone,new cljs.core.Keyword(null,"discard","discard",-1939593545))){
return cljs.core.first(new cljs.core.Keyword(null,"discard-history","discard-history",92573038).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ellah.graphics.graphics_state)));
} else {
if(cljs.core.truth_(down_formbar_form_path)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ellah.graphics.formbar_arrangement(),down_formbar_form_path);
} else {
return null;
}
}
}
}
} else {
return null;
}
});
ellah.graphics.get_formbar_insertion_index = (function ellah$graphics$get_formbar_insertion_index(){
var map__78993 = cljs.core.deref(ellah.graphics.graphics_state);
var map__78993__$1 = (((((!((map__78993 == null))))?(((((map__78993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__78993.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__78993):map__78993);
var mouse = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78993__$1,new cljs.core.Keyword(null,"mouse","mouse",478628972));
var formbar_path = ellah.graphics.formbar_path_at(mouse);
if(cljs.core.truth_(ellah.graphics.formbar_path_at)){
var arrangement = ellah.graphics.formbar_arrangement();
var screen_side = cljs.core.first(formbar_path);
var bar_arrangement = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(arrangement,formbar_path);
var form_spacing = (ellah.constants.formbar_radius * ((1) - ellah.constants.formbar_outline_thickness));
if((cljs.core.count(new cljs.core.Keyword(null,"circles","circles",-1947060917).cljs$core$IFn$_invoke$arity$1(bar_arrangement)) === (0))){
return (0);
} else {
var horizontal_QMARK_ = (function (){var fexpr__78995 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bottom","bottom",-1550509018),null,new cljs.core.Keyword(null,"top","top",-1856271961),null], null), null);
return (fexpr__78995.cljs$core$IFn$_invoke$arity$1 ? fexpr__78995.cljs$core$IFn$_invoke$arity$1(screen_side) : fexpr__78995.call(null,screen_side));
})();
var offset = ((cljs.core.truth_(horizontal_QMARK_)?(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(mouse) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(bar_arrangement)):(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(mouse) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(bar_arrangement))) / ((2) * form_spacing));
if((offset < (0))){
return (0);
} else {
return ((offset | (0)) + (1));
}
}
} else {
return null;
}
});
ellah.graphics.render_app_state = (function ellah$graphics$render_app_state(state,control_state){
var current_app_rect = ellah.graphics.app_rect();
var vec__78998 = current_app_rect;
var app_pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78998,(0),null);
var app_size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78998,(1),null);
var mouse_zone = ellah.graphics.get_mouse_zone();
var current_placement_form = ellah.graphics.placement_form();
ellah.graphics.rect.cljs$core$IFn$_invoke$arity$variadic(current_app_rect,ellah.constants.background_color,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"background","background",-863952629)], 0));

var map__79001 = cljs.core.deref(ellah.graphics.graphics_state);
var map__79001__$1 = (((((!((map__79001 == null))))?(((((map__79001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__79001.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__79001):map__79001);
var mouse = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79001__$1,new cljs.core.Keyword(null,"mouse","mouse",478628972));
var dragging_QMARK_ = ellah.graphics.mouse_dragging_QMARK_();
ellah.graphics.render_sublayouts.cljs$core$IFn$_invoke$arity$variadic(ellah.graphics.adjusted_form_layout(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"program","program",781564284)], 0));

if(cljs.core.truth_(((dragging_QMARK_)?ellah.graphics.placement_form():false))){
ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(mouse,new cljs.core.Keyword(null,"radius","radius",-2073122258),ellah.constants.drag_cursor_radius),ellah.constants.highlight_color,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"drag","drag",449951290)], 0));
} else {
}

var layout_path_80649 = ellah.graphics.layout_path_at(ellah.graphics.adjusted_form_layout(),new cljs.core.Keyword(null,"mouse","mouse",478628972).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ellah.graphics.graphics_state)));
var insertion_path_80650 = ellah.graphics.layout_insertion_path_at(ellah.graphics.adjusted_form_layout(),new cljs.core.Keyword(null,"mouse","mouse",478628972).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ellah.graphics.graphics_state)));
var literal_QMARK__80651 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(layout_path_80649),cljs.core.count(insertion_path_80650))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"literal","literal",1664775605),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ellah.vedn.get_child(new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ellah.graphics.graphics_state)),cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.list((0)),insertion_path_80650)))))));
if(cljs.core.truth_((function (){var and__4115__auto__ = layout_path_80649;
if(cljs.core.truth_(and__4115__auto__)){
return (((!(dragging_QMARK_))) && (literal_QMARK__80651));
} else {
return and__4115__auto__;
}
})())){
ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic(ellah.graphics.get_sublayout(ellah.graphics.adjusted_form_layout(),layout_path_80649),ellah.constants.highlight_color,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"program","program",781564284)], 0));
} else {
}

if(cljs.core.truth_((function (){var and__4115__auto__ = layout_path_80649;
if(cljs.core.truth_(and__4115__auto__)){
return current_placement_form;
} else {
return and__4115__auto__;
}
})())){
var sublayout_80652 = ellah.graphics.get_sublayout(ellah.graphics.adjusted_form_layout(),layout_path_80649);
if(dragging_QMARK_){
var parent_radius_80653 = new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(sublayout_80652);
var radius_80654 = (ellah.constants.drop_form_radius_factor * new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"sublayouts","sublayouts",-1203105463).cljs$core$IFn$_invoke$arity$1(sublayout_80652))));
var child_count_80655 = cljs.core.count(new cljs.core.Keyword(null,"sublayouts","sublayouts",-1203105463).cljs$core$IFn$_invoke$arity$1(sublayout_80652));
var angle_80656 = (- ((((cljs.core.last(insertion_path_80650) + 0.5) / child_count_80655) + 0.25) * ellah.geometry.TAU));
var placement_pos_80657 = ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sublayout_80652,ellah.geometry.scale_point(ellah.geometry.angle_point(angle_80656),(parent_radius_80653 - (ellah.constants.drop_form_offset_factor * radius_80654)))], 0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mouse_zone,new cljs.core.Keyword(null,"program","program",781564284))){
ellah.graphics.line.cljs$core$IFn$_invoke$arity$variadic(mouse,placement_pos_80657,ellah.constants.drag_cursor_line_width,ellah.constants.highlight_color,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"drag-forms","drag-forms",75833442)], 0));

var base_sublayout_80658 = ellah.graphics.form_layout(ellah.graphics.placement_form(),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ellah.geometry.origin,new cljs.core.Keyword(null,"radius","radius",-2073122258),(1)));
if(literal_QMARK__80651){
ellah.graphics.render_sublayouts.cljs$core$IFn$_invoke$arity$variadic(ellah.graphics.adjust_layout(base_sublayout_80658,ellah.geometry.scale_point(sublayout_80652,((1) / new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(sublayout_80652))),new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(sublayout_80652)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"drag-forms","drag-forms",75833442)], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ellah.vedn.get_child(new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ellah.graphics.graphics_state)),cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.list((0)),layout_path_80649))))))){
ellah.graphics.render_sublayouts.cljs$core$IFn$_invoke$arity$variadic(ellah.graphics.adjust_layout(base_sublayout_80658,ellah.geometry.scale_point(sublayout_80652,((1) / (ellah.constants.drop_form_radius_factor * new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(sublayout_80652)))),(ellah.constants.drop_form_radius_factor * new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(sublayout_80652))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"drag-forms","drag-forms",75833442)], 0));
} else {
ellah.graphics.render_sublayouts.cljs$core$IFn$_invoke$arity$variadic(ellah.graphics.adjust_layout(base_sublayout_80658,ellah.geometry.scale_point(placement_pos_80657,((1) / radius_80654)),radius_80654),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"drag-forms","drag-forms",75833442)], 0));
}
}
} else {
}
} else {
}
} else {
}

var arrangement_80659 = ellah.graphics.formbar_arrangement();
var formbar_form_path_80660 = ellah.graphics.formbar_form_path_at(mouse);
var seq__79003_80661 = cljs.core.seq(ellah.constants.screen_sides);
var chunk__79004_80662 = null;
var count__79005_80663 = (0);
var i__79006_80664 = (0);
while(true){
if((i__79006_80664 < count__79005_80663)){
var side_80665 = chunk__79004_80662.cljs$core$IIndexed$_nth$arity$2(null,i__79006_80664);
var horizontal_QMARK__80666 = (function (){var fexpr__79729 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bottom","bottom",-1550509018),null,new cljs.core.Keyword(null,"top","top",-1856271961),null], null), null);
return (fexpr__79729.cljs$core$IFn$_invoke$arity$1 ? fexpr__79729.cljs$core$IFn$_invoke$arity$1(side_80665) : fexpr__79729.call(null,side_80665));
})();
var side_arrangement_80667 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(arrangement_80659,side_80665);
var seq__79730_80668 = cljs.core.seq(side_arrangement_80667);
var chunk__79731_80669 = null;
var count__79732_80670 = (0);
var i__79733_80671 = (0);
while(true){
if((i__79733_80671 < count__79732_80670)){
var stage_80672 = chunk__79731_80669.cljs$core$IIndexed$_nth$arity$2(null,i__79733_80671);
var seq__79870_80673 = cljs.core.seq(stage_80672);
var chunk__79871_80674 = null;
var count__79872_80675 = (0);
var i__79873_80676 = (0);
while(true){
if((i__79873_80676 < count__79872_80675)){
var bar_80677 = chunk__79871_80674.cljs$core$IIndexed$_nth$arity$2(null,i__79873_80676);
var seq__79906_80678 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ellah.constants.foreground_color,(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ellah.constants.background_color,((1) - ellah.constants.formbar_outline_thickness)], null)], null));
var chunk__79907_80679 = null;
var count__79908_80680 = (0);
var i__79909_80681 = (0);
while(true){
if((i__79909_80681 < count__79908_80680)){
var vec__79916_80682 = chunk__79907_80679.cljs$core$IIndexed$_nth$arity$2(null,i__79909_80681);
var color_80683 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79916_80682,(0),null);
var radius_factor_80684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79916_80682,(1),null);
ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bar_80677,new cljs.core.Keyword(null,"radius","radius",-2073122258),(ellah.constants.formbar_radius * radius_factor_80684)),color_80683,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));

if(cljs.core.truth_(horizontal_QMARK__80666)){
ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bar_80677,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(bar_80677)], null)], 0)),new cljs.core.Keyword(null,"radius","radius",-2073122258),(ellah.constants.formbar_radius * radius_factor_80684)),color_80683,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));

ellah.graphics.rect.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ellah.geometry.subtract_points(bar_80677,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),(ellah.constants.formbar_radius * radius_factor_80684)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(bar_80677),new cljs.core.Keyword(null,"y","y",-1757859776),(((2) * ellah.constants.formbar_radius) * radius_factor_80684)], null)], null),color_80683,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));
} else {
ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bar_80677,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(bar_80677)], null)], 0)),new cljs.core.Keyword(null,"radius","radius",-2073122258),(ellah.constants.formbar_radius * radius_factor_80684)),color_80683,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));

ellah.graphics.rect.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ellah.geometry.subtract_points(bar_80677,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),(ellah.constants.formbar_radius * radius_factor_80684)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(((2) * ellah.constants.formbar_radius) * radius_factor_80684),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(bar_80677)], null)], null),color_80683,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));
}


var G__80685 = seq__79906_80678;
var G__80686 = chunk__79907_80679;
var G__80687 = count__79908_80680;
var G__80688 = (i__79909_80681 + (1));
seq__79906_80678 = G__80685;
chunk__79907_80679 = G__80686;
count__79908_80680 = G__80687;
i__79909_80681 = G__80688;
continue;
} else {
var temp__5753__auto___80689 = cljs.core.seq(seq__79906_80678);
if(temp__5753__auto___80689){
var seq__79906_80690__$1 = temp__5753__auto___80689;
if(cljs.core.chunked_seq_QMARK_(seq__79906_80690__$1)){
var c__4556__auto___80691 = cljs.core.chunk_first(seq__79906_80690__$1);
var G__80692 = cljs.core.chunk_rest(seq__79906_80690__$1);
var G__80693 = c__4556__auto___80691;
var G__80694 = cljs.core.count(c__4556__auto___80691);
var G__80695 = (0);
seq__79906_80678 = G__80692;
chunk__79907_80679 = G__80693;
count__79908_80680 = G__80694;
i__79909_80681 = G__80695;
continue;
} else {
var vec__79919_80696 = cljs.core.first(seq__79906_80690__$1);
var color_80697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79919_80696,(0),null);
var radius_factor_80698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79919_80696,(1),null);
ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bar_80677,new cljs.core.Keyword(null,"radius","radius",-2073122258),(ellah.constants.formbar_radius * radius_factor_80698)),color_80697,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));

if(cljs.core.truth_(horizontal_QMARK__80666)){
ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bar_80677,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(bar_80677)], null)], 0)),new cljs.core.Keyword(null,"radius","radius",-2073122258),(ellah.constants.formbar_radius * radius_factor_80698)),color_80697,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));

ellah.graphics.rect.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ellah.geometry.subtract_points(bar_80677,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),(ellah.constants.formbar_radius * radius_factor_80698)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(bar_80677),new cljs.core.Keyword(null,"y","y",-1757859776),(((2) * ellah.constants.formbar_radius) * radius_factor_80698)], null)], null),color_80697,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));
} else {
ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bar_80677,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(bar_80677)], null)], 0)),new cljs.core.Keyword(null,"radius","radius",-2073122258),(ellah.constants.formbar_radius * radius_factor_80698)),color_80697,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));

ellah.graphics.rect.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ellah.geometry.subtract_points(bar_80677,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),(ellah.constants.formbar_radius * radius_factor_80698)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(((2) * ellah.constants.formbar_radius) * radius_factor_80698),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(bar_80677)], null)], null),color_80697,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));
}


var G__80699 = cljs.core.next(seq__79906_80690__$1);
var G__80700 = null;
var G__80701 = (0);
var G__80702 = (0);
seq__79906_80678 = G__80699;
chunk__79907_80679 = G__80700;
count__79908_80680 = G__80701;
i__79909_80681 = G__80702;
continue;
}
} else {
}
}
break;
}


var G__80703 = seq__79870_80673;
var G__80704 = chunk__79871_80674;
var G__80705 = count__79872_80675;
var G__80706 = (i__79873_80676 + (1));
seq__79870_80673 = G__80703;
chunk__79871_80674 = G__80704;
count__79872_80675 = G__80705;
i__79873_80676 = G__80706;
continue;
} else {
var temp__5753__auto___80707 = cljs.core.seq(seq__79870_80673);
if(temp__5753__auto___80707){
var seq__79870_80708__$1 = temp__5753__auto___80707;
if(cljs.core.chunked_seq_QMARK_(seq__79870_80708__$1)){
var c__4556__auto___80709 = cljs.core.chunk_first(seq__79870_80708__$1);
var G__80710 = cljs.core.chunk_rest(seq__79870_80708__$1);
var G__80711 = c__4556__auto___80709;
var G__80712 = cljs.core.count(c__4556__auto___80709);
var G__80713 = (0);
seq__79870_80673 = G__80710;
chunk__79871_80674 = G__80711;
count__79872_80675 = G__80712;
i__79873_80676 = G__80713;
continue;
} else {
var bar_80714 = cljs.core.first(seq__79870_80708__$1);
var seq__79922_80715 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ellah.constants.foreground_color,(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ellah.constants.background_color,((1) - ellah.constants.formbar_outline_thickness)], null)], null));
var chunk__79923_80716 = null;
var count__79924_80717 = (0);
var i__79925_80718 = (0);
while(true){
if((i__79925_80718 < count__79924_80717)){
var vec__79932_80719 = chunk__79923_80716.cljs$core$IIndexed$_nth$arity$2(null,i__79925_80718);
var color_80720 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79932_80719,(0),null);
var radius_factor_80721 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79932_80719,(1),null);
ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bar_80714,new cljs.core.Keyword(null,"radius","radius",-2073122258),(ellah.constants.formbar_radius * radius_factor_80721)),color_80720,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));

if(cljs.core.truth_(horizontal_QMARK__80666)){
ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bar_80714,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(bar_80714)], null)], 0)),new cljs.core.Keyword(null,"radius","radius",-2073122258),(ellah.constants.formbar_radius * radius_factor_80721)),color_80720,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));

ellah.graphics.rect.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ellah.geometry.subtract_points(bar_80714,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),(ellah.constants.formbar_radius * radius_factor_80721)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(bar_80714),new cljs.core.Keyword(null,"y","y",-1757859776),(((2) * ellah.constants.formbar_radius) * radius_factor_80721)], null)], null),color_80720,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));
} else {
ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bar_80714,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(bar_80714)], null)], 0)),new cljs.core.Keyword(null,"radius","radius",-2073122258),(ellah.constants.formbar_radius * radius_factor_80721)),color_80720,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));

ellah.graphics.rect.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ellah.geometry.subtract_points(bar_80714,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),(ellah.constants.formbar_radius * radius_factor_80721)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(((2) * ellah.constants.formbar_radius) * radius_factor_80721),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(bar_80714)], null)], null),color_80720,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));
}


var G__80722 = seq__79922_80715;
var G__80723 = chunk__79923_80716;
var G__80724 = count__79924_80717;
var G__80725 = (i__79925_80718 + (1));
seq__79922_80715 = G__80722;
chunk__79923_80716 = G__80723;
count__79924_80717 = G__80724;
i__79925_80718 = G__80725;
continue;
} else {
var temp__5753__auto___80726__$1 = cljs.core.seq(seq__79922_80715);
if(temp__5753__auto___80726__$1){
var seq__79922_80727__$1 = temp__5753__auto___80726__$1;
if(cljs.core.chunked_seq_QMARK_(seq__79922_80727__$1)){
var c__4556__auto___80728 = cljs.core.chunk_first(seq__79922_80727__$1);
var G__80729 = cljs.core.chunk_rest(seq__79922_80727__$1);
var G__80730 = c__4556__auto___80728;
var G__80731 = cljs.core.count(c__4556__auto___80728);
var G__80732 = (0);
seq__79922_80715 = G__80729;
chunk__79923_80716 = G__80730;
count__79924_80717 = G__80731;
i__79925_80718 = G__80732;
continue;
} else {
var vec__79935_80733 = cljs.core.first(seq__79922_80727__$1);
var color_80734 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79935_80733,(0),null);
var radius_factor_80735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79935_80733,(1),null);
ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bar_80714,new cljs.core.Keyword(null,"radius","radius",-2073122258),(ellah.constants.formbar_radius * radius_factor_80735)),color_80734,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));

if(cljs.core.truth_(horizontal_QMARK__80666)){
ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bar_80714,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(bar_80714)], null)], 0)),new cljs.core.Keyword(null,"radius","radius",-2073122258),(ellah.constants.formbar_radius * radius_factor_80735)),color_80734,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));

ellah.graphics.rect.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ellah.geometry.subtract_points(bar_80714,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),(ellah.constants.formbar_radius * radius_factor_80735)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(bar_80714),new cljs.core.Keyword(null,"y","y",-1757859776),(((2) * ellah.constants.formbar_radius) * radius_factor_80735)], null)], null),color_80734,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));
} else {
ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bar_80714,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(bar_80714)], null)], 0)),new cljs.core.Keyword(null,"radius","radius",-2073122258),(ellah.constants.formbar_radius * radius_factor_80735)),color_80734,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));

ellah.graphics.rect.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ellah.geometry.subtract_points(bar_80714,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),(ellah.constants.formbar_radius * radius_factor_80735)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(((2) * ellah.constants.formbar_radius) * radius_factor_80735),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(bar_80714)], null)], null),color_80734,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));
}


var G__80736 = cljs.core.next(seq__79922_80727__$1);
var G__80737 = null;
var G__80738 = (0);
var G__80739 = (0);
seq__79922_80715 = G__80736;
chunk__79923_80716 = G__80737;
count__79924_80717 = G__80738;
i__79925_80718 = G__80739;
continue;
}
} else {
}
}
break;
}


var G__80740 = cljs.core.next(seq__79870_80708__$1);
var G__80741 = null;
var G__80742 = (0);
var G__80743 = (0);
seq__79870_80673 = G__80740;
chunk__79871_80674 = G__80741;
count__79872_80675 = G__80742;
i__79873_80676 = G__80743;
continue;
}
} else {
}
}
break;
}


var G__80744 = seq__79730_80668;
var G__80745 = chunk__79731_80669;
var G__80746 = count__79732_80670;
var G__80747 = (i__79733_80671 + (1));
seq__79730_80668 = G__80744;
chunk__79731_80669 = G__80745;
count__79732_80670 = G__80746;
i__79733_80671 = G__80747;
continue;
} else {
var temp__5753__auto___80748 = cljs.core.seq(seq__79730_80668);
if(temp__5753__auto___80748){
var seq__79730_80749__$1 = temp__5753__auto___80748;
if(cljs.core.chunked_seq_QMARK_(seq__79730_80749__$1)){
var c__4556__auto___80750 = cljs.core.chunk_first(seq__79730_80749__$1);
var G__80751 = cljs.core.chunk_rest(seq__79730_80749__$1);
var G__80752 = c__4556__auto___80750;
var G__80753 = cljs.core.count(c__4556__auto___80750);
var G__80754 = (0);
seq__79730_80668 = G__80751;
chunk__79731_80669 = G__80752;
count__79732_80670 = G__80753;
i__79733_80671 = G__80754;
continue;
} else {
var stage_80755 = cljs.core.first(seq__79730_80749__$1);
var seq__79938_80756 = cljs.core.seq(stage_80755);
var chunk__79939_80757 = null;
var count__79940_80758 = (0);
var i__79941_80759 = (0);
while(true){
if((i__79941_80759 < count__79940_80758)){
var bar_80760 = chunk__79939_80757.cljs$core$IIndexed$_nth$arity$2(null,i__79941_80759);
var seq__79974_80761 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ellah.constants.foreground_color,(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ellah.constants.background_color,((1) - ellah.constants.formbar_outline_thickness)], null)], null));
var chunk__79975_80762 = null;
var count__79976_80763 = (0);
var i__79977_80764 = (0);
while(true){
if((i__79977_80764 < count__79976_80763)){
var vec__79984_80765 = chunk__79975_80762.cljs$core$IIndexed$_nth$arity$2(null,i__79977_80764);
var color_80766 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79984_80765,(0),null);
var radius_factor_80767 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79984_80765,(1),null);
ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bar_80760,new cljs.core.Keyword(null,"radius","radius",-2073122258),(ellah.constants.formbar_radius * radius_factor_80767)),color_80766,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));

if(cljs.core.truth_(horizontal_QMARK__80666)){
ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bar_80760,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(bar_80760)], null)], 0)),new cljs.core.Keyword(null,"radius","radius",-2073122258),(ellah.constants.formbar_radius * radius_factor_80767)),color_80766,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));

ellah.graphics.rect.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ellah.geometry.subtract_points(bar_80760,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),(ellah.constants.formbar_radius * radius_factor_80767)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(bar_80760),new cljs.core.Keyword(null,"y","y",-1757859776),(((2) * ellah.constants.formbar_radius) * radius_factor_80767)], null)], null),color_80766,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));
} else {
ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bar_80760,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(bar_80760)], null)], 0)),new cljs.core.Keyword(null,"radius","radius",-2073122258),(ellah.constants.formbar_radius * radius_factor_80767)),color_80766,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));

ellah.graphics.rect.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ellah.geometry.subtract_points(bar_80760,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),(ellah.constants.formbar_radius * radius_factor_80767)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(((2) * ellah.constants.formbar_radius) * radius_factor_80767),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(bar_80760)], null)], null),color_80766,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));
}


var G__80768 = seq__79974_80761;
var G__80769 = chunk__79975_80762;
var G__80770 = count__79976_80763;
var G__80771 = (i__79977_80764 + (1));
seq__79974_80761 = G__80768;
chunk__79975_80762 = G__80769;
count__79976_80763 = G__80770;
i__79977_80764 = G__80771;
continue;
} else {
var temp__5753__auto___80772__$1 = cljs.core.seq(seq__79974_80761);
if(temp__5753__auto___80772__$1){
var seq__79974_80773__$1 = temp__5753__auto___80772__$1;
if(cljs.core.chunked_seq_QMARK_(seq__79974_80773__$1)){
var c__4556__auto___80774 = cljs.core.chunk_first(seq__79974_80773__$1);
var G__80775 = cljs.core.chunk_rest(seq__79974_80773__$1);
var G__80776 = c__4556__auto___80774;
var G__80777 = cljs.core.count(c__4556__auto___80774);
var G__80778 = (0);
seq__79974_80761 = G__80775;
chunk__79975_80762 = G__80776;
count__79976_80763 = G__80777;
i__79977_80764 = G__80778;
continue;
} else {
var vec__79987_80779 = cljs.core.first(seq__79974_80773__$1);
var color_80780 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79987_80779,(0),null);
var radius_factor_80781 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79987_80779,(1),null);
ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bar_80760,new cljs.core.Keyword(null,"radius","radius",-2073122258),(ellah.constants.formbar_radius * radius_factor_80781)),color_80780,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));

if(cljs.core.truth_(horizontal_QMARK__80666)){
ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bar_80760,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(bar_80760)], null)], 0)),new cljs.core.Keyword(null,"radius","radius",-2073122258),(ellah.constants.formbar_radius * radius_factor_80781)),color_80780,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));

ellah.graphics.rect.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ellah.geometry.subtract_points(bar_80760,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),(ellah.constants.formbar_radius * radius_factor_80781)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(bar_80760),new cljs.core.Keyword(null,"y","y",-1757859776),(((2) * ellah.constants.formbar_radius) * radius_factor_80781)], null)], null),color_80780,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));
} else {
ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bar_80760,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(bar_80760)], null)], 0)),new cljs.core.Keyword(null,"radius","radius",-2073122258),(ellah.constants.formbar_radius * radius_factor_80781)),color_80780,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));

ellah.graphics.rect.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ellah.geometry.subtract_points(bar_80760,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),(ellah.constants.formbar_radius * radius_factor_80781)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(((2) * ellah.constants.formbar_radius) * radius_factor_80781),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(bar_80760)], null)], null),color_80780,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));
}


var G__80782 = cljs.core.next(seq__79974_80773__$1);
var G__80783 = null;
var G__80784 = (0);
var G__80785 = (0);
seq__79974_80761 = G__80782;
chunk__79975_80762 = G__80783;
count__79976_80763 = G__80784;
i__79977_80764 = G__80785;
continue;
}
} else {
}
}
break;
}


var G__80786 = seq__79938_80756;
var G__80787 = chunk__79939_80757;
var G__80788 = count__79940_80758;
var G__80789 = (i__79941_80759 + (1));
seq__79938_80756 = G__80786;
chunk__79939_80757 = G__80787;
count__79940_80758 = G__80788;
i__79941_80759 = G__80789;
continue;
} else {
var temp__5753__auto___80790__$1 = cljs.core.seq(seq__79938_80756);
if(temp__5753__auto___80790__$1){
var seq__79938_80791__$1 = temp__5753__auto___80790__$1;
if(cljs.core.chunked_seq_QMARK_(seq__79938_80791__$1)){
var c__4556__auto___80792 = cljs.core.chunk_first(seq__79938_80791__$1);
var G__80793 = cljs.core.chunk_rest(seq__79938_80791__$1);
var G__80794 = c__4556__auto___80792;
var G__80795 = cljs.core.count(c__4556__auto___80792);
var G__80796 = (0);
seq__79938_80756 = G__80793;
chunk__79939_80757 = G__80794;
count__79940_80758 = G__80795;
i__79941_80759 = G__80796;
continue;
} else {
var bar_80797 = cljs.core.first(seq__79938_80791__$1);
var seq__79990_80798 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ellah.constants.foreground_color,(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ellah.constants.background_color,((1) - ellah.constants.formbar_outline_thickness)], null)], null));
var chunk__79991_80799 = null;
var count__79992_80800 = (0);
var i__79993_80801 = (0);
while(true){
if((i__79993_80801 < count__79992_80800)){
var vec__80000_80802 = chunk__79991_80799.cljs$core$IIndexed$_nth$arity$2(null,i__79993_80801);
var color_80803 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80000_80802,(0),null);
var radius_factor_80804 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80000_80802,(1),null);
ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bar_80797,new cljs.core.Keyword(null,"radius","radius",-2073122258),(ellah.constants.formbar_radius * radius_factor_80804)),color_80803,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));

if(cljs.core.truth_(horizontal_QMARK__80666)){
ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bar_80797,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(bar_80797)], null)], 0)),new cljs.core.Keyword(null,"radius","radius",-2073122258),(ellah.constants.formbar_radius * radius_factor_80804)),color_80803,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));

ellah.graphics.rect.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ellah.geometry.subtract_points(bar_80797,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),(ellah.constants.formbar_radius * radius_factor_80804)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(bar_80797),new cljs.core.Keyword(null,"y","y",-1757859776),(((2) * ellah.constants.formbar_radius) * radius_factor_80804)], null)], null),color_80803,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));
} else {
ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bar_80797,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(bar_80797)], null)], 0)),new cljs.core.Keyword(null,"radius","radius",-2073122258),(ellah.constants.formbar_radius * radius_factor_80804)),color_80803,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));

ellah.graphics.rect.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ellah.geometry.subtract_points(bar_80797,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),(ellah.constants.formbar_radius * radius_factor_80804)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(((2) * ellah.constants.formbar_radius) * radius_factor_80804),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(bar_80797)], null)], null),color_80803,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));
}


var G__80805 = seq__79990_80798;
var G__80806 = chunk__79991_80799;
var G__80807 = count__79992_80800;
var G__80808 = (i__79993_80801 + (1));
seq__79990_80798 = G__80805;
chunk__79991_80799 = G__80806;
count__79992_80800 = G__80807;
i__79993_80801 = G__80808;
continue;
} else {
var temp__5753__auto___80809__$2 = cljs.core.seq(seq__79990_80798);
if(temp__5753__auto___80809__$2){
var seq__79990_80810__$1 = temp__5753__auto___80809__$2;
if(cljs.core.chunked_seq_QMARK_(seq__79990_80810__$1)){
var c__4556__auto___80811 = cljs.core.chunk_first(seq__79990_80810__$1);
var G__80812 = cljs.core.chunk_rest(seq__79990_80810__$1);
var G__80813 = c__4556__auto___80811;
var G__80814 = cljs.core.count(c__4556__auto___80811);
var G__80815 = (0);
seq__79990_80798 = G__80812;
chunk__79991_80799 = G__80813;
count__79992_80800 = G__80814;
i__79993_80801 = G__80815;
continue;
} else {
var vec__80003_80816 = cljs.core.first(seq__79990_80810__$1);
var color_80817 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80003_80816,(0),null);
var radius_factor_80818 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80003_80816,(1),null);
ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bar_80797,new cljs.core.Keyword(null,"radius","radius",-2073122258),(ellah.constants.formbar_radius * radius_factor_80818)),color_80817,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));

if(cljs.core.truth_(horizontal_QMARK__80666)){
ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bar_80797,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(bar_80797)], null)], 0)),new cljs.core.Keyword(null,"radius","radius",-2073122258),(ellah.constants.formbar_radius * radius_factor_80818)),color_80817,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));

ellah.graphics.rect.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ellah.geometry.subtract_points(bar_80797,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),(ellah.constants.formbar_radius * radius_factor_80818)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(bar_80797),new cljs.core.Keyword(null,"y","y",-1757859776),(((2) * ellah.constants.formbar_radius) * radius_factor_80818)], null)], null),color_80817,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));
} else {
ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bar_80797,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(bar_80797)], null)], 0)),new cljs.core.Keyword(null,"radius","radius",-2073122258),(ellah.constants.formbar_radius * radius_factor_80818)),color_80817,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));

ellah.graphics.rect.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ellah.geometry.subtract_points(bar_80797,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),(ellah.constants.formbar_radius * radius_factor_80818)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(((2) * ellah.constants.formbar_radius) * radius_factor_80818),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(bar_80797)], null)], null),color_80817,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));
}


var G__80819 = cljs.core.next(seq__79990_80810__$1);
var G__80820 = null;
var G__80821 = (0);
var G__80822 = (0);
seq__79990_80798 = G__80819;
chunk__79991_80799 = G__80820;
count__79992_80800 = G__80821;
i__79993_80801 = G__80822;
continue;
}
} else {
}
}
break;
}


var G__80823 = cljs.core.next(seq__79938_80791__$1);
var G__80824 = null;
var G__80825 = (0);
var G__80826 = (0);
seq__79938_80756 = G__80823;
chunk__79939_80757 = G__80824;
count__79940_80758 = G__80825;
i__79941_80759 = G__80826;
continue;
}
} else {
}
}
break;
}


var G__80827 = cljs.core.next(seq__79730_80749__$1);
var G__80828 = null;
var G__80829 = (0);
var G__80830 = (0);
seq__79730_80668 = G__80827;
chunk__79731_80669 = G__80828;
count__79732_80670 = G__80829;
i__79733_80671 = G__80830;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_((function (){var and__4115__auto__ = formbar_form_path_80660;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(formbar_form_path_80660),side_80665);
} else {
return and__4115__auto__;
}
})())){
ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(arrangement_80659,cljs.core.butlast(ellah.graphics.formbar_form_path_at(mouse))),new cljs.core.Keyword(null,"radius","radius",-2073122258),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,((1) / ellah.constants.formbar_form_size))),ellah.constants.highlight_color,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));
} else {
}

var seq__80006_80831 = cljs.core.seq(side_arrangement_80667);
var chunk__80007_80832 = null;
var count__80008_80833 = (0);
var i__80009_80834 = (0);
while(true){
if((i__80009_80834 < count__80008_80833)){
var stage_80835 = chunk__80007_80832.cljs$core$IIndexed$_nth$arity$2(null,i__80009_80834);
var seq__80050_80836 = cljs.core.seq(stage_80835);
var chunk__80051_80837 = null;
var count__80052_80838 = (0);
var i__80053_80839 = (0);
while(true){
if((i__80053_80839 < count__80052_80838)){
var bar_80840 = chunk__80051_80837.cljs$core$IIndexed$_nth$arity$2(null,i__80053_80839);
var seq__80062_80841 = cljs.core.seq(new cljs.core.Keyword(null,"circles","circles",-1947060917).cljs$core$IFn$_invoke$arity$1(bar_80840));
var chunk__80063_80842 = null;
var count__80064_80843 = (0);
var i__80065_80844 = (0);
while(true){
if((i__80065_80844 < count__80064_80843)){
var bar_circle_80845 = chunk__80063_80842.cljs$core$IIndexed$_nth$arity$2(null,i__80065_80844);
ellah.graphics.render_sublayouts.cljs$core$IFn$_invoke$arity$variadic(ellah.graphics.form_layout(new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(bar_circle_80845),bar_circle_80845),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));


var G__80846 = seq__80062_80841;
var G__80847 = chunk__80063_80842;
var G__80848 = count__80064_80843;
var G__80849 = (i__80065_80844 + (1));
seq__80062_80841 = G__80846;
chunk__80063_80842 = G__80847;
count__80064_80843 = G__80848;
i__80065_80844 = G__80849;
continue;
} else {
var temp__5753__auto___80850 = cljs.core.seq(seq__80062_80841);
if(temp__5753__auto___80850){
var seq__80062_80851__$1 = temp__5753__auto___80850;
if(cljs.core.chunked_seq_QMARK_(seq__80062_80851__$1)){
var c__4556__auto___80852 = cljs.core.chunk_first(seq__80062_80851__$1);
var G__80853 = cljs.core.chunk_rest(seq__80062_80851__$1);
var G__80854 = c__4556__auto___80852;
var G__80855 = cljs.core.count(c__4556__auto___80852);
var G__80856 = (0);
seq__80062_80841 = G__80853;
chunk__80063_80842 = G__80854;
count__80064_80843 = G__80855;
i__80065_80844 = G__80856;
continue;
} else {
var bar_circle_80857 = cljs.core.first(seq__80062_80851__$1);
ellah.graphics.render_sublayouts.cljs$core$IFn$_invoke$arity$variadic(ellah.graphics.form_layout(new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(bar_circle_80857),bar_circle_80857),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));


var G__80858 = cljs.core.next(seq__80062_80851__$1);
var G__80859 = null;
var G__80860 = (0);
var G__80861 = (0);
seq__80062_80841 = G__80858;
chunk__80063_80842 = G__80859;
count__80064_80843 = G__80860;
i__80065_80844 = G__80861;
continue;
}
} else {
}
}
break;
}


var G__80862 = seq__80050_80836;
var G__80863 = chunk__80051_80837;
var G__80864 = count__80052_80838;
var G__80865 = (i__80053_80839 + (1));
seq__80050_80836 = G__80862;
chunk__80051_80837 = G__80863;
count__80052_80838 = G__80864;
i__80053_80839 = G__80865;
continue;
} else {
var temp__5753__auto___80866 = cljs.core.seq(seq__80050_80836);
if(temp__5753__auto___80866){
var seq__80050_80867__$1 = temp__5753__auto___80866;
if(cljs.core.chunked_seq_QMARK_(seq__80050_80867__$1)){
var c__4556__auto___80868 = cljs.core.chunk_first(seq__80050_80867__$1);
var G__80869 = cljs.core.chunk_rest(seq__80050_80867__$1);
var G__80870 = c__4556__auto___80868;
var G__80871 = cljs.core.count(c__4556__auto___80868);
var G__80872 = (0);
seq__80050_80836 = G__80869;
chunk__80051_80837 = G__80870;
count__80052_80838 = G__80871;
i__80053_80839 = G__80872;
continue;
} else {
var bar_80873 = cljs.core.first(seq__80050_80867__$1);
var seq__80066_80874 = cljs.core.seq(new cljs.core.Keyword(null,"circles","circles",-1947060917).cljs$core$IFn$_invoke$arity$1(bar_80873));
var chunk__80067_80875 = null;
var count__80068_80876 = (0);
var i__80069_80877 = (0);
while(true){
if((i__80069_80877 < count__80068_80876)){
var bar_circle_80878 = chunk__80067_80875.cljs$core$IIndexed$_nth$arity$2(null,i__80069_80877);
ellah.graphics.render_sublayouts.cljs$core$IFn$_invoke$arity$variadic(ellah.graphics.form_layout(new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(bar_circle_80878),bar_circle_80878),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));


var G__80879 = seq__80066_80874;
var G__80880 = chunk__80067_80875;
var G__80881 = count__80068_80876;
var G__80882 = (i__80069_80877 + (1));
seq__80066_80874 = G__80879;
chunk__80067_80875 = G__80880;
count__80068_80876 = G__80881;
i__80069_80877 = G__80882;
continue;
} else {
var temp__5753__auto___80883__$1 = cljs.core.seq(seq__80066_80874);
if(temp__5753__auto___80883__$1){
var seq__80066_80884__$1 = temp__5753__auto___80883__$1;
if(cljs.core.chunked_seq_QMARK_(seq__80066_80884__$1)){
var c__4556__auto___80885 = cljs.core.chunk_first(seq__80066_80884__$1);
var G__80886 = cljs.core.chunk_rest(seq__80066_80884__$1);
var G__80887 = c__4556__auto___80885;
var G__80888 = cljs.core.count(c__4556__auto___80885);
var G__80889 = (0);
seq__80066_80874 = G__80886;
chunk__80067_80875 = G__80887;
count__80068_80876 = G__80888;
i__80069_80877 = G__80889;
continue;
} else {
var bar_circle_80890 = cljs.core.first(seq__80066_80884__$1);
ellah.graphics.render_sublayouts.cljs$core$IFn$_invoke$arity$variadic(ellah.graphics.form_layout(new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(bar_circle_80890),bar_circle_80890),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));


var G__80891 = cljs.core.next(seq__80066_80884__$1);
var G__80892 = null;
var G__80893 = (0);
var G__80894 = (0);
seq__80066_80874 = G__80891;
chunk__80067_80875 = G__80892;
count__80068_80876 = G__80893;
i__80069_80877 = G__80894;
continue;
}
} else {
}
}
break;
}


var G__80895 = cljs.core.next(seq__80050_80867__$1);
var G__80896 = null;
var G__80897 = (0);
var G__80898 = (0);
seq__80050_80836 = G__80895;
chunk__80051_80837 = G__80896;
count__80052_80838 = G__80897;
i__80053_80839 = G__80898;
continue;
}
} else {
}
}
break;
}


var G__80899 = seq__80006_80831;
var G__80900 = chunk__80007_80832;
var G__80901 = count__80008_80833;
var G__80902 = (i__80009_80834 + (1));
seq__80006_80831 = G__80899;
chunk__80007_80832 = G__80900;
count__80008_80833 = G__80901;
i__80009_80834 = G__80902;
continue;
} else {
var temp__5753__auto___80903 = cljs.core.seq(seq__80006_80831);
if(temp__5753__auto___80903){
var seq__80006_80904__$1 = temp__5753__auto___80903;
if(cljs.core.chunked_seq_QMARK_(seq__80006_80904__$1)){
var c__4556__auto___80905 = cljs.core.chunk_first(seq__80006_80904__$1);
var G__80906 = cljs.core.chunk_rest(seq__80006_80904__$1);
var G__80907 = c__4556__auto___80905;
var G__80908 = cljs.core.count(c__4556__auto___80905);
var G__80909 = (0);
seq__80006_80831 = G__80906;
chunk__80007_80832 = G__80907;
count__80008_80833 = G__80908;
i__80009_80834 = G__80909;
continue;
} else {
var stage_80910 = cljs.core.first(seq__80006_80904__$1);
var seq__80070_80911 = cljs.core.seq(stage_80910);
var chunk__80071_80912 = null;
var count__80072_80913 = (0);
var i__80073_80914 = (0);
while(true){
if((i__80073_80914 < count__80072_80913)){
var bar_80915 = chunk__80071_80912.cljs$core$IIndexed$_nth$arity$2(null,i__80073_80914);
var seq__80082_80916 = cljs.core.seq(new cljs.core.Keyword(null,"circles","circles",-1947060917).cljs$core$IFn$_invoke$arity$1(bar_80915));
var chunk__80083_80917 = null;
var count__80084_80918 = (0);
var i__80085_80919 = (0);
while(true){
if((i__80085_80919 < count__80084_80918)){
var bar_circle_80920 = chunk__80083_80917.cljs$core$IIndexed$_nth$arity$2(null,i__80085_80919);
ellah.graphics.render_sublayouts.cljs$core$IFn$_invoke$arity$variadic(ellah.graphics.form_layout(new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(bar_circle_80920),bar_circle_80920),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));


var G__80921 = seq__80082_80916;
var G__80922 = chunk__80083_80917;
var G__80923 = count__80084_80918;
var G__80924 = (i__80085_80919 + (1));
seq__80082_80916 = G__80921;
chunk__80083_80917 = G__80922;
count__80084_80918 = G__80923;
i__80085_80919 = G__80924;
continue;
} else {
var temp__5753__auto___80925__$1 = cljs.core.seq(seq__80082_80916);
if(temp__5753__auto___80925__$1){
var seq__80082_80926__$1 = temp__5753__auto___80925__$1;
if(cljs.core.chunked_seq_QMARK_(seq__80082_80926__$1)){
var c__4556__auto___80927 = cljs.core.chunk_first(seq__80082_80926__$1);
var G__80928 = cljs.core.chunk_rest(seq__80082_80926__$1);
var G__80929 = c__4556__auto___80927;
var G__80930 = cljs.core.count(c__4556__auto___80927);
var G__80931 = (0);
seq__80082_80916 = G__80928;
chunk__80083_80917 = G__80929;
count__80084_80918 = G__80930;
i__80085_80919 = G__80931;
continue;
} else {
var bar_circle_80932 = cljs.core.first(seq__80082_80926__$1);
ellah.graphics.render_sublayouts.cljs$core$IFn$_invoke$arity$variadic(ellah.graphics.form_layout(new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(bar_circle_80932),bar_circle_80932),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));


var G__80933 = cljs.core.next(seq__80082_80926__$1);
var G__80934 = null;
var G__80935 = (0);
var G__80936 = (0);
seq__80082_80916 = G__80933;
chunk__80083_80917 = G__80934;
count__80084_80918 = G__80935;
i__80085_80919 = G__80936;
continue;
}
} else {
}
}
break;
}


var G__80937 = seq__80070_80911;
var G__80938 = chunk__80071_80912;
var G__80939 = count__80072_80913;
var G__80940 = (i__80073_80914 + (1));
seq__80070_80911 = G__80937;
chunk__80071_80912 = G__80938;
count__80072_80913 = G__80939;
i__80073_80914 = G__80940;
continue;
} else {
var temp__5753__auto___80941__$1 = cljs.core.seq(seq__80070_80911);
if(temp__5753__auto___80941__$1){
var seq__80070_80942__$1 = temp__5753__auto___80941__$1;
if(cljs.core.chunked_seq_QMARK_(seq__80070_80942__$1)){
var c__4556__auto___80943 = cljs.core.chunk_first(seq__80070_80942__$1);
var G__80944 = cljs.core.chunk_rest(seq__80070_80942__$1);
var G__80945 = c__4556__auto___80943;
var G__80946 = cljs.core.count(c__4556__auto___80943);
var G__80947 = (0);
seq__80070_80911 = G__80944;
chunk__80071_80912 = G__80945;
count__80072_80913 = G__80946;
i__80073_80914 = G__80947;
continue;
} else {
var bar_80948 = cljs.core.first(seq__80070_80942__$1);
var seq__80086_80949 = cljs.core.seq(new cljs.core.Keyword(null,"circles","circles",-1947060917).cljs$core$IFn$_invoke$arity$1(bar_80948));
var chunk__80087_80950 = null;
var count__80088_80951 = (0);
var i__80089_80952 = (0);
while(true){
if((i__80089_80952 < count__80088_80951)){
var bar_circle_80953 = chunk__80087_80950.cljs$core$IIndexed$_nth$arity$2(null,i__80089_80952);
ellah.graphics.render_sublayouts.cljs$core$IFn$_invoke$arity$variadic(ellah.graphics.form_layout(new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(bar_circle_80953),bar_circle_80953),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));


var G__80954 = seq__80086_80949;
var G__80955 = chunk__80087_80950;
var G__80956 = count__80088_80951;
var G__80957 = (i__80089_80952 + (1));
seq__80086_80949 = G__80954;
chunk__80087_80950 = G__80955;
count__80088_80951 = G__80956;
i__80089_80952 = G__80957;
continue;
} else {
var temp__5753__auto___80958__$2 = cljs.core.seq(seq__80086_80949);
if(temp__5753__auto___80958__$2){
var seq__80086_80959__$1 = temp__5753__auto___80958__$2;
if(cljs.core.chunked_seq_QMARK_(seq__80086_80959__$1)){
var c__4556__auto___80960 = cljs.core.chunk_first(seq__80086_80959__$1);
var G__80961 = cljs.core.chunk_rest(seq__80086_80959__$1);
var G__80962 = c__4556__auto___80960;
var G__80963 = cljs.core.count(c__4556__auto___80960);
var G__80964 = (0);
seq__80086_80949 = G__80961;
chunk__80087_80950 = G__80962;
count__80088_80951 = G__80963;
i__80089_80952 = G__80964;
continue;
} else {
var bar_circle_80965 = cljs.core.first(seq__80086_80959__$1);
ellah.graphics.render_sublayouts.cljs$core$IFn$_invoke$arity$variadic(ellah.graphics.form_layout(new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(bar_circle_80965),bar_circle_80965),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));


var G__80966 = cljs.core.next(seq__80086_80959__$1);
var G__80967 = null;
var G__80968 = (0);
var G__80969 = (0);
seq__80086_80949 = G__80966;
chunk__80087_80950 = G__80967;
count__80088_80951 = G__80968;
i__80089_80952 = G__80969;
continue;
}
} else {
}
}
break;
}


var G__80970 = cljs.core.next(seq__80070_80942__$1);
var G__80971 = null;
var G__80972 = (0);
var G__80973 = (0);
seq__80070_80911 = G__80970;
chunk__80071_80912 = G__80971;
count__80072_80913 = G__80972;
i__80073_80914 = G__80973;
continue;
}
} else {
}
}
break;
}


var G__80974 = cljs.core.next(seq__80006_80904__$1);
var G__80975 = null;
var G__80976 = (0);
var G__80977 = (0);
seq__80006_80831 = G__80974;
chunk__80007_80832 = G__80975;
count__80008_80833 = G__80976;
i__80009_80834 = G__80977;
continue;
}
} else {
}
}
break;
}


var G__80978 = seq__79003_80661;
var G__80979 = chunk__79004_80662;
var G__80980 = count__79005_80663;
var G__80981 = (i__79006_80664 + (1));
seq__79003_80661 = G__80978;
chunk__79004_80662 = G__80979;
count__79005_80663 = G__80980;
i__79006_80664 = G__80981;
continue;
} else {
var temp__5753__auto___80982 = cljs.core.seq(seq__79003_80661);
if(temp__5753__auto___80982){
var seq__79003_80983__$1 = temp__5753__auto___80982;
if(cljs.core.chunked_seq_QMARK_(seq__79003_80983__$1)){
var c__4556__auto___80984 = cljs.core.chunk_first(seq__79003_80983__$1);
var G__80985 = cljs.core.chunk_rest(seq__79003_80983__$1);
var G__80986 = c__4556__auto___80984;
var G__80987 = cljs.core.count(c__4556__auto___80984);
var G__80988 = (0);
seq__79003_80661 = G__80985;
chunk__79004_80662 = G__80986;
count__79005_80663 = G__80987;
i__79006_80664 = G__80988;
continue;
} else {
var side_80989 = cljs.core.first(seq__79003_80983__$1);
var horizontal_QMARK__80990 = (function (){var fexpr__80090 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bottom","bottom",-1550509018),null,new cljs.core.Keyword(null,"top","top",-1856271961),null], null), null);
return (fexpr__80090.cljs$core$IFn$_invoke$arity$1 ? fexpr__80090.cljs$core$IFn$_invoke$arity$1(side_80989) : fexpr__80090.call(null,side_80989));
})();
var side_arrangement_80991 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(arrangement_80659,side_80989);
var seq__80091_80992 = cljs.core.seq(side_arrangement_80991);
var chunk__80092_80993 = null;
var count__80093_80994 = (0);
var i__80094_80995 = (0);
while(true){
if((i__80094_80995 < count__80093_80994)){
var stage_80996 = chunk__80092_80993.cljs$core$IIndexed$_nth$arity$2(null,i__80094_80995);
var seq__80231_80997 = cljs.core.seq(stage_80996);
var chunk__80232_80998 = null;
var count__80233_80999 = (0);
var i__80234_81000 = (0);
while(true){
if((i__80234_81000 < count__80233_80999)){
var bar_81001 = chunk__80232_80998.cljs$core$IIndexed$_nth$arity$2(null,i__80234_81000);
var seq__80267_81002 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ellah.constants.foreground_color,(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ellah.constants.background_color,((1) - ellah.constants.formbar_outline_thickness)], null)], null));
var chunk__80268_81003 = null;
var count__80269_81004 = (0);
var i__80270_81005 = (0);
while(true){
if((i__80270_81005 < count__80269_81004)){
var vec__80277_81006 = chunk__80268_81003.cljs$core$IIndexed$_nth$arity$2(null,i__80270_81005);
var color_81007 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80277_81006,(0),null);
var radius_factor_81008 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80277_81006,(1),null);
ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bar_81001,new cljs.core.Keyword(null,"radius","radius",-2073122258),(ellah.constants.formbar_radius * radius_factor_81008)),color_81007,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));

if(cljs.core.truth_(horizontal_QMARK__80990)){
ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bar_81001,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(bar_81001)], null)], 0)),new cljs.core.Keyword(null,"radius","radius",-2073122258),(ellah.constants.formbar_radius * radius_factor_81008)),color_81007,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));

ellah.graphics.rect.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ellah.geometry.subtract_points(bar_81001,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),(ellah.constants.formbar_radius * radius_factor_81008)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(bar_81001),new cljs.core.Keyword(null,"y","y",-1757859776),(((2) * ellah.constants.formbar_radius) * radius_factor_81008)], null)], null),color_81007,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));
} else {
ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bar_81001,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(bar_81001)], null)], 0)),new cljs.core.Keyword(null,"radius","radius",-2073122258),(ellah.constants.formbar_radius * radius_factor_81008)),color_81007,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));

ellah.graphics.rect.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ellah.geometry.subtract_points(bar_81001,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),(ellah.constants.formbar_radius * radius_factor_81008)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(((2) * ellah.constants.formbar_radius) * radius_factor_81008),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(bar_81001)], null)], null),color_81007,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));
}


var G__81009 = seq__80267_81002;
var G__81010 = chunk__80268_81003;
var G__81011 = count__80269_81004;
var G__81012 = (i__80270_81005 + (1));
seq__80267_81002 = G__81009;
chunk__80268_81003 = G__81010;
count__80269_81004 = G__81011;
i__80270_81005 = G__81012;
continue;
} else {
var temp__5753__auto___81013__$1 = cljs.core.seq(seq__80267_81002);
if(temp__5753__auto___81013__$1){
var seq__80267_81014__$1 = temp__5753__auto___81013__$1;
if(cljs.core.chunked_seq_QMARK_(seq__80267_81014__$1)){
var c__4556__auto___81015 = cljs.core.chunk_first(seq__80267_81014__$1);
var G__81016 = cljs.core.chunk_rest(seq__80267_81014__$1);
var G__81017 = c__4556__auto___81015;
var G__81018 = cljs.core.count(c__4556__auto___81015);
var G__81019 = (0);
seq__80267_81002 = G__81016;
chunk__80268_81003 = G__81017;
count__80269_81004 = G__81018;
i__80270_81005 = G__81019;
continue;
} else {
var vec__80280_81020 = cljs.core.first(seq__80267_81014__$1);
var color_81021 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80280_81020,(0),null);
var radius_factor_81022 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80280_81020,(1),null);
ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bar_81001,new cljs.core.Keyword(null,"radius","radius",-2073122258),(ellah.constants.formbar_radius * radius_factor_81022)),color_81021,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));

if(cljs.core.truth_(horizontal_QMARK__80990)){
ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bar_81001,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(bar_81001)], null)], 0)),new cljs.core.Keyword(null,"radius","radius",-2073122258),(ellah.constants.formbar_radius * radius_factor_81022)),color_81021,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));

ellah.graphics.rect.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ellah.geometry.subtract_points(bar_81001,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),(ellah.constants.formbar_radius * radius_factor_81022)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(bar_81001),new cljs.core.Keyword(null,"y","y",-1757859776),(((2) * ellah.constants.formbar_radius) * radius_factor_81022)], null)], null),color_81021,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));
} else {
ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bar_81001,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(bar_81001)], null)], 0)),new cljs.core.Keyword(null,"radius","radius",-2073122258),(ellah.constants.formbar_radius * radius_factor_81022)),color_81021,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));

ellah.graphics.rect.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ellah.geometry.subtract_points(bar_81001,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),(ellah.constants.formbar_radius * radius_factor_81022)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(((2) * ellah.constants.formbar_radius) * radius_factor_81022),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(bar_81001)], null)], null),color_81021,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));
}


var G__81023 = cljs.core.next(seq__80267_81014__$1);
var G__81024 = null;
var G__81025 = (0);
var G__81026 = (0);
seq__80267_81002 = G__81023;
chunk__80268_81003 = G__81024;
count__80269_81004 = G__81025;
i__80270_81005 = G__81026;
continue;
}
} else {
}
}
break;
}


var G__81027 = seq__80231_80997;
var G__81028 = chunk__80232_80998;
var G__81029 = count__80233_80999;
var G__81030 = (i__80234_81000 + (1));
seq__80231_80997 = G__81027;
chunk__80232_80998 = G__81028;
count__80233_80999 = G__81029;
i__80234_81000 = G__81030;
continue;
} else {
var temp__5753__auto___81031__$1 = cljs.core.seq(seq__80231_80997);
if(temp__5753__auto___81031__$1){
var seq__80231_81032__$1 = temp__5753__auto___81031__$1;
if(cljs.core.chunked_seq_QMARK_(seq__80231_81032__$1)){
var c__4556__auto___81033 = cljs.core.chunk_first(seq__80231_81032__$1);
var G__81034 = cljs.core.chunk_rest(seq__80231_81032__$1);
var G__81035 = c__4556__auto___81033;
var G__81036 = cljs.core.count(c__4556__auto___81033);
var G__81037 = (0);
seq__80231_80997 = G__81034;
chunk__80232_80998 = G__81035;
count__80233_80999 = G__81036;
i__80234_81000 = G__81037;
continue;
} else {
var bar_81038 = cljs.core.first(seq__80231_81032__$1);
var seq__80283_81039 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ellah.constants.foreground_color,(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ellah.constants.background_color,((1) - ellah.constants.formbar_outline_thickness)], null)], null));
var chunk__80284_81040 = null;
var count__80285_81041 = (0);
var i__80286_81042 = (0);
while(true){
if((i__80286_81042 < count__80285_81041)){
var vec__80293_81043 = chunk__80284_81040.cljs$core$IIndexed$_nth$arity$2(null,i__80286_81042);
var color_81044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80293_81043,(0),null);
var radius_factor_81045 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80293_81043,(1),null);
ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bar_81038,new cljs.core.Keyword(null,"radius","radius",-2073122258),(ellah.constants.formbar_radius * radius_factor_81045)),color_81044,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));

if(cljs.core.truth_(horizontal_QMARK__80990)){
ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bar_81038,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(bar_81038)], null)], 0)),new cljs.core.Keyword(null,"radius","radius",-2073122258),(ellah.constants.formbar_radius * radius_factor_81045)),color_81044,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));

ellah.graphics.rect.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ellah.geometry.subtract_points(bar_81038,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),(ellah.constants.formbar_radius * radius_factor_81045)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(bar_81038),new cljs.core.Keyword(null,"y","y",-1757859776),(((2) * ellah.constants.formbar_radius) * radius_factor_81045)], null)], null),color_81044,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));
} else {
ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bar_81038,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(bar_81038)], null)], 0)),new cljs.core.Keyword(null,"radius","radius",-2073122258),(ellah.constants.formbar_radius * radius_factor_81045)),color_81044,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));

ellah.graphics.rect.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ellah.geometry.subtract_points(bar_81038,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),(ellah.constants.formbar_radius * radius_factor_81045)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(((2) * ellah.constants.formbar_radius) * radius_factor_81045),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(bar_81038)], null)], null),color_81044,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));
}


var G__81046 = seq__80283_81039;
var G__81047 = chunk__80284_81040;
var G__81048 = count__80285_81041;
var G__81049 = (i__80286_81042 + (1));
seq__80283_81039 = G__81046;
chunk__80284_81040 = G__81047;
count__80285_81041 = G__81048;
i__80286_81042 = G__81049;
continue;
} else {
var temp__5753__auto___81050__$2 = cljs.core.seq(seq__80283_81039);
if(temp__5753__auto___81050__$2){
var seq__80283_81051__$1 = temp__5753__auto___81050__$2;
if(cljs.core.chunked_seq_QMARK_(seq__80283_81051__$1)){
var c__4556__auto___81052 = cljs.core.chunk_first(seq__80283_81051__$1);
var G__81053 = cljs.core.chunk_rest(seq__80283_81051__$1);
var G__81054 = c__4556__auto___81052;
var G__81055 = cljs.core.count(c__4556__auto___81052);
var G__81056 = (0);
seq__80283_81039 = G__81053;
chunk__80284_81040 = G__81054;
count__80285_81041 = G__81055;
i__80286_81042 = G__81056;
continue;
} else {
var vec__80296_81057 = cljs.core.first(seq__80283_81051__$1);
var color_81058 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80296_81057,(0),null);
var radius_factor_81059 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80296_81057,(1),null);
ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bar_81038,new cljs.core.Keyword(null,"radius","radius",-2073122258),(ellah.constants.formbar_radius * radius_factor_81059)),color_81058,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));

if(cljs.core.truth_(horizontal_QMARK__80990)){
ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bar_81038,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(bar_81038)], null)], 0)),new cljs.core.Keyword(null,"radius","radius",-2073122258),(ellah.constants.formbar_radius * radius_factor_81059)),color_81058,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));

ellah.graphics.rect.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ellah.geometry.subtract_points(bar_81038,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),(ellah.constants.formbar_radius * radius_factor_81059)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(bar_81038),new cljs.core.Keyword(null,"y","y",-1757859776),(((2) * ellah.constants.formbar_radius) * radius_factor_81059)], null)], null),color_81058,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));
} else {
ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bar_81038,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(bar_81038)], null)], 0)),new cljs.core.Keyword(null,"radius","radius",-2073122258),(ellah.constants.formbar_radius * radius_factor_81059)),color_81058,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));

ellah.graphics.rect.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ellah.geometry.subtract_points(bar_81038,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),(ellah.constants.formbar_radius * radius_factor_81059)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(((2) * ellah.constants.formbar_radius) * radius_factor_81059),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(bar_81038)], null)], null),color_81058,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));
}


var G__81060 = cljs.core.next(seq__80283_81051__$1);
var G__81061 = null;
var G__81062 = (0);
var G__81063 = (0);
seq__80283_81039 = G__81060;
chunk__80284_81040 = G__81061;
count__80285_81041 = G__81062;
i__80286_81042 = G__81063;
continue;
}
} else {
}
}
break;
}


var G__81064 = cljs.core.next(seq__80231_81032__$1);
var G__81065 = null;
var G__81066 = (0);
var G__81067 = (0);
seq__80231_80997 = G__81064;
chunk__80232_80998 = G__81065;
count__80233_80999 = G__81066;
i__80234_81000 = G__81067;
continue;
}
} else {
}
}
break;
}


var G__81068 = seq__80091_80992;
var G__81069 = chunk__80092_80993;
var G__81070 = count__80093_80994;
var G__81071 = (i__80094_80995 + (1));
seq__80091_80992 = G__81068;
chunk__80092_80993 = G__81069;
count__80093_80994 = G__81070;
i__80094_80995 = G__81071;
continue;
} else {
var temp__5753__auto___81072__$1 = cljs.core.seq(seq__80091_80992);
if(temp__5753__auto___81072__$1){
var seq__80091_81073__$1 = temp__5753__auto___81072__$1;
if(cljs.core.chunked_seq_QMARK_(seq__80091_81073__$1)){
var c__4556__auto___81074 = cljs.core.chunk_first(seq__80091_81073__$1);
var G__81075 = cljs.core.chunk_rest(seq__80091_81073__$1);
var G__81076 = c__4556__auto___81074;
var G__81077 = cljs.core.count(c__4556__auto___81074);
var G__81078 = (0);
seq__80091_80992 = G__81075;
chunk__80092_80993 = G__81076;
count__80093_80994 = G__81077;
i__80094_80995 = G__81078;
continue;
} else {
var stage_81079 = cljs.core.first(seq__80091_81073__$1);
var seq__80299_81080 = cljs.core.seq(stage_81079);
var chunk__80300_81081 = null;
var count__80301_81082 = (0);
var i__80302_81083 = (0);
while(true){
if((i__80302_81083 < count__80301_81082)){
var bar_81084 = chunk__80300_81081.cljs$core$IIndexed$_nth$arity$2(null,i__80302_81083);
var seq__80335_81085 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ellah.constants.foreground_color,(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ellah.constants.background_color,((1) - ellah.constants.formbar_outline_thickness)], null)], null));
var chunk__80336_81086 = null;
var count__80337_81087 = (0);
var i__80338_81088 = (0);
while(true){
if((i__80338_81088 < count__80337_81087)){
var vec__80345_81089 = chunk__80336_81086.cljs$core$IIndexed$_nth$arity$2(null,i__80338_81088);
var color_81090 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80345_81089,(0),null);
var radius_factor_81091 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80345_81089,(1),null);
ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bar_81084,new cljs.core.Keyword(null,"radius","radius",-2073122258),(ellah.constants.formbar_radius * radius_factor_81091)),color_81090,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));

if(cljs.core.truth_(horizontal_QMARK__80990)){
ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bar_81084,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(bar_81084)], null)], 0)),new cljs.core.Keyword(null,"radius","radius",-2073122258),(ellah.constants.formbar_radius * radius_factor_81091)),color_81090,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));

ellah.graphics.rect.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ellah.geometry.subtract_points(bar_81084,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),(ellah.constants.formbar_radius * radius_factor_81091)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(bar_81084),new cljs.core.Keyword(null,"y","y",-1757859776),(((2) * ellah.constants.formbar_radius) * radius_factor_81091)], null)], null),color_81090,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));
} else {
ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bar_81084,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(bar_81084)], null)], 0)),new cljs.core.Keyword(null,"radius","radius",-2073122258),(ellah.constants.formbar_radius * radius_factor_81091)),color_81090,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));

ellah.graphics.rect.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ellah.geometry.subtract_points(bar_81084,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),(ellah.constants.formbar_radius * radius_factor_81091)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(((2) * ellah.constants.formbar_radius) * radius_factor_81091),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(bar_81084)], null)], null),color_81090,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));
}


var G__81092 = seq__80335_81085;
var G__81093 = chunk__80336_81086;
var G__81094 = count__80337_81087;
var G__81095 = (i__80338_81088 + (1));
seq__80335_81085 = G__81092;
chunk__80336_81086 = G__81093;
count__80337_81087 = G__81094;
i__80338_81088 = G__81095;
continue;
} else {
var temp__5753__auto___81096__$2 = cljs.core.seq(seq__80335_81085);
if(temp__5753__auto___81096__$2){
var seq__80335_81097__$1 = temp__5753__auto___81096__$2;
if(cljs.core.chunked_seq_QMARK_(seq__80335_81097__$1)){
var c__4556__auto___81098 = cljs.core.chunk_first(seq__80335_81097__$1);
var G__81099 = cljs.core.chunk_rest(seq__80335_81097__$1);
var G__81100 = c__4556__auto___81098;
var G__81101 = cljs.core.count(c__4556__auto___81098);
var G__81102 = (0);
seq__80335_81085 = G__81099;
chunk__80336_81086 = G__81100;
count__80337_81087 = G__81101;
i__80338_81088 = G__81102;
continue;
} else {
var vec__80348_81103 = cljs.core.first(seq__80335_81097__$1);
var color_81104 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80348_81103,(0),null);
var radius_factor_81105 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80348_81103,(1),null);
ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bar_81084,new cljs.core.Keyword(null,"radius","radius",-2073122258),(ellah.constants.formbar_radius * radius_factor_81105)),color_81104,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));

if(cljs.core.truth_(horizontal_QMARK__80990)){
ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bar_81084,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(bar_81084)], null)], 0)),new cljs.core.Keyword(null,"radius","radius",-2073122258),(ellah.constants.formbar_radius * radius_factor_81105)),color_81104,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));

ellah.graphics.rect.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ellah.geometry.subtract_points(bar_81084,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),(ellah.constants.formbar_radius * radius_factor_81105)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(bar_81084),new cljs.core.Keyword(null,"y","y",-1757859776),(((2) * ellah.constants.formbar_radius) * radius_factor_81105)], null)], null),color_81104,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));
} else {
ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bar_81084,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(bar_81084)], null)], 0)),new cljs.core.Keyword(null,"radius","radius",-2073122258),(ellah.constants.formbar_radius * radius_factor_81105)),color_81104,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));

ellah.graphics.rect.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ellah.geometry.subtract_points(bar_81084,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),(ellah.constants.formbar_radius * radius_factor_81105)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(((2) * ellah.constants.formbar_radius) * radius_factor_81105),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(bar_81084)], null)], null),color_81104,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));
}


var G__81106 = cljs.core.next(seq__80335_81097__$1);
var G__81107 = null;
var G__81108 = (0);
var G__81109 = (0);
seq__80335_81085 = G__81106;
chunk__80336_81086 = G__81107;
count__80337_81087 = G__81108;
i__80338_81088 = G__81109;
continue;
}
} else {
}
}
break;
}


var G__81110 = seq__80299_81080;
var G__81111 = chunk__80300_81081;
var G__81112 = count__80301_81082;
var G__81113 = (i__80302_81083 + (1));
seq__80299_81080 = G__81110;
chunk__80300_81081 = G__81111;
count__80301_81082 = G__81112;
i__80302_81083 = G__81113;
continue;
} else {
var temp__5753__auto___81114__$2 = cljs.core.seq(seq__80299_81080);
if(temp__5753__auto___81114__$2){
var seq__80299_81115__$1 = temp__5753__auto___81114__$2;
if(cljs.core.chunked_seq_QMARK_(seq__80299_81115__$1)){
var c__4556__auto___81116 = cljs.core.chunk_first(seq__80299_81115__$1);
var G__81117 = cljs.core.chunk_rest(seq__80299_81115__$1);
var G__81118 = c__4556__auto___81116;
var G__81119 = cljs.core.count(c__4556__auto___81116);
var G__81120 = (0);
seq__80299_81080 = G__81117;
chunk__80300_81081 = G__81118;
count__80301_81082 = G__81119;
i__80302_81083 = G__81120;
continue;
} else {
var bar_81121 = cljs.core.first(seq__80299_81115__$1);
var seq__80351_81122 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ellah.constants.foreground_color,(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ellah.constants.background_color,((1) - ellah.constants.formbar_outline_thickness)], null)], null));
var chunk__80352_81123 = null;
var count__80353_81124 = (0);
var i__80354_81125 = (0);
while(true){
if((i__80354_81125 < count__80353_81124)){
var vec__80361_81126 = chunk__80352_81123.cljs$core$IIndexed$_nth$arity$2(null,i__80354_81125);
var color_81127 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80361_81126,(0),null);
var radius_factor_81128 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80361_81126,(1),null);
ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bar_81121,new cljs.core.Keyword(null,"radius","radius",-2073122258),(ellah.constants.formbar_radius * radius_factor_81128)),color_81127,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));

if(cljs.core.truth_(horizontal_QMARK__80990)){
ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bar_81121,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(bar_81121)], null)], 0)),new cljs.core.Keyword(null,"radius","radius",-2073122258),(ellah.constants.formbar_radius * radius_factor_81128)),color_81127,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));

ellah.graphics.rect.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ellah.geometry.subtract_points(bar_81121,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),(ellah.constants.formbar_radius * radius_factor_81128)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(bar_81121),new cljs.core.Keyword(null,"y","y",-1757859776),(((2) * ellah.constants.formbar_radius) * radius_factor_81128)], null)], null),color_81127,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));
} else {
ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bar_81121,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(bar_81121)], null)], 0)),new cljs.core.Keyword(null,"radius","radius",-2073122258),(ellah.constants.formbar_radius * radius_factor_81128)),color_81127,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));

ellah.graphics.rect.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ellah.geometry.subtract_points(bar_81121,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),(ellah.constants.formbar_radius * radius_factor_81128)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(((2) * ellah.constants.formbar_radius) * radius_factor_81128),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(bar_81121)], null)], null),color_81127,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));
}


var G__81129 = seq__80351_81122;
var G__81130 = chunk__80352_81123;
var G__81131 = count__80353_81124;
var G__81132 = (i__80354_81125 + (1));
seq__80351_81122 = G__81129;
chunk__80352_81123 = G__81130;
count__80353_81124 = G__81131;
i__80354_81125 = G__81132;
continue;
} else {
var temp__5753__auto___81133__$3 = cljs.core.seq(seq__80351_81122);
if(temp__5753__auto___81133__$3){
var seq__80351_81134__$1 = temp__5753__auto___81133__$3;
if(cljs.core.chunked_seq_QMARK_(seq__80351_81134__$1)){
var c__4556__auto___81135 = cljs.core.chunk_first(seq__80351_81134__$1);
var G__81136 = cljs.core.chunk_rest(seq__80351_81134__$1);
var G__81137 = c__4556__auto___81135;
var G__81138 = cljs.core.count(c__4556__auto___81135);
var G__81139 = (0);
seq__80351_81122 = G__81136;
chunk__80352_81123 = G__81137;
count__80353_81124 = G__81138;
i__80354_81125 = G__81139;
continue;
} else {
var vec__80364_81140 = cljs.core.first(seq__80351_81134__$1);
var color_81141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80364_81140,(0),null);
var radius_factor_81142 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80364_81140,(1),null);
ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bar_81121,new cljs.core.Keyword(null,"radius","radius",-2073122258),(ellah.constants.formbar_radius * radius_factor_81142)),color_81141,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));

if(cljs.core.truth_(horizontal_QMARK__80990)){
ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bar_81121,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(bar_81121)], null)], 0)),new cljs.core.Keyword(null,"radius","radius",-2073122258),(ellah.constants.formbar_radius * radius_factor_81142)),color_81141,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));

ellah.graphics.rect.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ellah.geometry.subtract_points(bar_81121,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),(ellah.constants.formbar_radius * radius_factor_81142)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(bar_81121),new cljs.core.Keyword(null,"y","y",-1757859776),(((2) * ellah.constants.formbar_radius) * radius_factor_81142)], null)], null),color_81141,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));
} else {
ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bar_81121,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(bar_81121)], null)], 0)),new cljs.core.Keyword(null,"radius","radius",-2073122258),(ellah.constants.formbar_radius * radius_factor_81142)),color_81141,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));

ellah.graphics.rect.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ellah.geometry.subtract_points(bar_81121,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),(ellah.constants.formbar_radius * radius_factor_81142)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(((2) * ellah.constants.formbar_radius) * radius_factor_81142),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(bar_81121)], null)], null),color_81141,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));
}


var G__81143 = cljs.core.next(seq__80351_81134__$1);
var G__81144 = null;
var G__81145 = (0);
var G__81146 = (0);
seq__80351_81122 = G__81143;
chunk__80352_81123 = G__81144;
count__80353_81124 = G__81145;
i__80354_81125 = G__81146;
continue;
}
} else {
}
}
break;
}


var G__81147 = cljs.core.next(seq__80299_81115__$1);
var G__81148 = null;
var G__81149 = (0);
var G__81150 = (0);
seq__80299_81080 = G__81147;
chunk__80300_81081 = G__81148;
count__80301_81082 = G__81149;
i__80302_81083 = G__81150;
continue;
}
} else {
}
}
break;
}


var G__81151 = cljs.core.next(seq__80091_81073__$1);
var G__81152 = null;
var G__81153 = (0);
var G__81154 = (0);
seq__80091_80992 = G__81151;
chunk__80092_80993 = G__81152;
count__80093_80994 = G__81153;
i__80094_80995 = G__81154;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_((function (){var and__4115__auto__ = formbar_form_path_80660;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(formbar_form_path_80660),side_80989);
} else {
return and__4115__auto__;
}
})())){
ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(arrangement_80659,cljs.core.butlast(ellah.graphics.formbar_form_path_at(mouse))),new cljs.core.Keyword(null,"radius","radius",-2073122258),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,((1) / ellah.constants.formbar_form_size))),ellah.constants.highlight_color,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));
} else {
}

var seq__80367_81155 = cljs.core.seq(side_arrangement_80991);
var chunk__80368_81156 = null;
var count__80369_81157 = (0);
var i__80370_81158 = (0);
while(true){
if((i__80370_81158 < count__80369_81157)){
var stage_81159 = chunk__80368_81156.cljs$core$IIndexed$_nth$arity$2(null,i__80370_81158);
var seq__80411_81160 = cljs.core.seq(stage_81159);
var chunk__80412_81161 = null;
var count__80413_81162 = (0);
var i__80414_81163 = (0);
while(true){
if((i__80414_81163 < count__80413_81162)){
var bar_81164 = chunk__80412_81161.cljs$core$IIndexed$_nth$arity$2(null,i__80414_81163);
var seq__80423_81165 = cljs.core.seq(new cljs.core.Keyword(null,"circles","circles",-1947060917).cljs$core$IFn$_invoke$arity$1(bar_81164));
var chunk__80424_81166 = null;
var count__80425_81167 = (0);
var i__80426_81168 = (0);
while(true){
if((i__80426_81168 < count__80425_81167)){
var bar_circle_81169 = chunk__80424_81166.cljs$core$IIndexed$_nth$arity$2(null,i__80426_81168);
ellah.graphics.render_sublayouts.cljs$core$IFn$_invoke$arity$variadic(ellah.graphics.form_layout(new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(bar_circle_81169),bar_circle_81169),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));


var G__81170 = seq__80423_81165;
var G__81171 = chunk__80424_81166;
var G__81172 = count__80425_81167;
var G__81173 = (i__80426_81168 + (1));
seq__80423_81165 = G__81170;
chunk__80424_81166 = G__81171;
count__80425_81167 = G__81172;
i__80426_81168 = G__81173;
continue;
} else {
var temp__5753__auto___81174__$1 = cljs.core.seq(seq__80423_81165);
if(temp__5753__auto___81174__$1){
var seq__80423_81175__$1 = temp__5753__auto___81174__$1;
if(cljs.core.chunked_seq_QMARK_(seq__80423_81175__$1)){
var c__4556__auto___81176 = cljs.core.chunk_first(seq__80423_81175__$1);
var G__81177 = cljs.core.chunk_rest(seq__80423_81175__$1);
var G__81178 = c__4556__auto___81176;
var G__81179 = cljs.core.count(c__4556__auto___81176);
var G__81180 = (0);
seq__80423_81165 = G__81177;
chunk__80424_81166 = G__81178;
count__80425_81167 = G__81179;
i__80426_81168 = G__81180;
continue;
} else {
var bar_circle_81181 = cljs.core.first(seq__80423_81175__$1);
ellah.graphics.render_sublayouts.cljs$core$IFn$_invoke$arity$variadic(ellah.graphics.form_layout(new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(bar_circle_81181),bar_circle_81181),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));


var G__81182 = cljs.core.next(seq__80423_81175__$1);
var G__81183 = null;
var G__81184 = (0);
var G__81185 = (0);
seq__80423_81165 = G__81182;
chunk__80424_81166 = G__81183;
count__80425_81167 = G__81184;
i__80426_81168 = G__81185;
continue;
}
} else {
}
}
break;
}


var G__81186 = seq__80411_81160;
var G__81187 = chunk__80412_81161;
var G__81188 = count__80413_81162;
var G__81189 = (i__80414_81163 + (1));
seq__80411_81160 = G__81186;
chunk__80412_81161 = G__81187;
count__80413_81162 = G__81188;
i__80414_81163 = G__81189;
continue;
} else {
var temp__5753__auto___81190__$1 = cljs.core.seq(seq__80411_81160);
if(temp__5753__auto___81190__$1){
var seq__80411_81191__$1 = temp__5753__auto___81190__$1;
if(cljs.core.chunked_seq_QMARK_(seq__80411_81191__$1)){
var c__4556__auto___81192 = cljs.core.chunk_first(seq__80411_81191__$1);
var G__81193 = cljs.core.chunk_rest(seq__80411_81191__$1);
var G__81194 = c__4556__auto___81192;
var G__81195 = cljs.core.count(c__4556__auto___81192);
var G__81196 = (0);
seq__80411_81160 = G__81193;
chunk__80412_81161 = G__81194;
count__80413_81162 = G__81195;
i__80414_81163 = G__81196;
continue;
} else {
var bar_81197 = cljs.core.first(seq__80411_81191__$1);
var seq__80427_81198 = cljs.core.seq(new cljs.core.Keyword(null,"circles","circles",-1947060917).cljs$core$IFn$_invoke$arity$1(bar_81197));
var chunk__80428_81199 = null;
var count__80429_81200 = (0);
var i__80430_81201 = (0);
while(true){
if((i__80430_81201 < count__80429_81200)){
var bar_circle_81202 = chunk__80428_81199.cljs$core$IIndexed$_nth$arity$2(null,i__80430_81201);
ellah.graphics.render_sublayouts.cljs$core$IFn$_invoke$arity$variadic(ellah.graphics.form_layout(new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(bar_circle_81202),bar_circle_81202),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));


var G__81203 = seq__80427_81198;
var G__81204 = chunk__80428_81199;
var G__81205 = count__80429_81200;
var G__81206 = (i__80430_81201 + (1));
seq__80427_81198 = G__81203;
chunk__80428_81199 = G__81204;
count__80429_81200 = G__81205;
i__80430_81201 = G__81206;
continue;
} else {
var temp__5753__auto___81207__$2 = cljs.core.seq(seq__80427_81198);
if(temp__5753__auto___81207__$2){
var seq__80427_81208__$1 = temp__5753__auto___81207__$2;
if(cljs.core.chunked_seq_QMARK_(seq__80427_81208__$1)){
var c__4556__auto___81209 = cljs.core.chunk_first(seq__80427_81208__$1);
var G__81210 = cljs.core.chunk_rest(seq__80427_81208__$1);
var G__81211 = c__4556__auto___81209;
var G__81212 = cljs.core.count(c__4556__auto___81209);
var G__81213 = (0);
seq__80427_81198 = G__81210;
chunk__80428_81199 = G__81211;
count__80429_81200 = G__81212;
i__80430_81201 = G__81213;
continue;
} else {
var bar_circle_81214 = cljs.core.first(seq__80427_81208__$1);
ellah.graphics.render_sublayouts.cljs$core$IFn$_invoke$arity$variadic(ellah.graphics.form_layout(new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(bar_circle_81214),bar_circle_81214),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));


var G__81215 = cljs.core.next(seq__80427_81208__$1);
var G__81216 = null;
var G__81217 = (0);
var G__81218 = (0);
seq__80427_81198 = G__81215;
chunk__80428_81199 = G__81216;
count__80429_81200 = G__81217;
i__80430_81201 = G__81218;
continue;
}
} else {
}
}
break;
}


var G__81219 = cljs.core.next(seq__80411_81191__$1);
var G__81220 = null;
var G__81221 = (0);
var G__81222 = (0);
seq__80411_81160 = G__81219;
chunk__80412_81161 = G__81220;
count__80413_81162 = G__81221;
i__80414_81163 = G__81222;
continue;
}
} else {
}
}
break;
}


var G__81223 = seq__80367_81155;
var G__81224 = chunk__80368_81156;
var G__81225 = count__80369_81157;
var G__81226 = (i__80370_81158 + (1));
seq__80367_81155 = G__81223;
chunk__80368_81156 = G__81224;
count__80369_81157 = G__81225;
i__80370_81158 = G__81226;
continue;
} else {
var temp__5753__auto___81227__$1 = cljs.core.seq(seq__80367_81155);
if(temp__5753__auto___81227__$1){
var seq__80367_81228__$1 = temp__5753__auto___81227__$1;
if(cljs.core.chunked_seq_QMARK_(seq__80367_81228__$1)){
var c__4556__auto___81229 = cljs.core.chunk_first(seq__80367_81228__$1);
var G__81230 = cljs.core.chunk_rest(seq__80367_81228__$1);
var G__81231 = c__4556__auto___81229;
var G__81232 = cljs.core.count(c__4556__auto___81229);
var G__81233 = (0);
seq__80367_81155 = G__81230;
chunk__80368_81156 = G__81231;
count__80369_81157 = G__81232;
i__80370_81158 = G__81233;
continue;
} else {
var stage_81234 = cljs.core.first(seq__80367_81228__$1);
var seq__80431_81235 = cljs.core.seq(stage_81234);
var chunk__80432_81236 = null;
var count__80433_81237 = (0);
var i__80434_81238 = (0);
while(true){
if((i__80434_81238 < count__80433_81237)){
var bar_81239 = chunk__80432_81236.cljs$core$IIndexed$_nth$arity$2(null,i__80434_81238);
var seq__80443_81240 = cljs.core.seq(new cljs.core.Keyword(null,"circles","circles",-1947060917).cljs$core$IFn$_invoke$arity$1(bar_81239));
var chunk__80444_81241 = null;
var count__80445_81242 = (0);
var i__80446_81243 = (0);
while(true){
if((i__80446_81243 < count__80445_81242)){
var bar_circle_81244 = chunk__80444_81241.cljs$core$IIndexed$_nth$arity$2(null,i__80446_81243);
ellah.graphics.render_sublayouts.cljs$core$IFn$_invoke$arity$variadic(ellah.graphics.form_layout(new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(bar_circle_81244),bar_circle_81244),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));


var G__81245 = seq__80443_81240;
var G__81246 = chunk__80444_81241;
var G__81247 = count__80445_81242;
var G__81248 = (i__80446_81243 + (1));
seq__80443_81240 = G__81245;
chunk__80444_81241 = G__81246;
count__80445_81242 = G__81247;
i__80446_81243 = G__81248;
continue;
} else {
var temp__5753__auto___81249__$2 = cljs.core.seq(seq__80443_81240);
if(temp__5753__auto___81249__$2){
var seq__80443_81250__$1 = temp__5753__auto___81249__$2;
if(cljs.core.chunked_seq_QMARK_(seq__80443_81250__$1)){
var c__4556__auto___81251 = cljs.core.chunk_first(seq__80443_81250__$1);
var G__81252 = cljs.core.chunk_rest(seq__80443_81250__$1);
var G__81253 = c__4556__auto___81251;
var G__81254 = cljs.core.count(c__4556__auto___81251);
var G__81255 = (0);
seq__80443_81240 = G__81252;
chunk__80444_81241 = G__81253;
count__80445_81242 = G__81254;
i__80446_81243 = G__81255;
continue;
} else {
var bar_circle_81256 = cljs.core.first(seq__80443_81250__$1);
ellah.graphics.render_sublayouts.cljs$core$IFn$_invoke$arity$variadic(ellah.graphics.form_layout(new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(bar_circle_81256),bar_circle_81256),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));


var G__81257 = cljs.core.next(seq__80443_81250__$1);
var G__81258 = null;
var G__81259 = (0);
var G__81260 = (0);
seq__80443_81240 = G__81257;
chunk__80444_81241 = G__81258;
count__80445_81242 = G__81259;
i__80446_81243 = G__81260;
continue;
}
} else {
}
}
break;
}


var G__81261 = seq__80431_81235;
var G__81262 = chunk__80432_81236;
var G__81263 = count__80433_81237;
var G__81264 = (i__80434_81238 + (1));
seq__80431_81235 = G__81261;
chunk__80432_81236 = G__81262;
count__80433_81237 = G__81263;
i__80434_81238 = G__81264;
continue;
} else {
var temp__5753__auto___81265__$2 = cljs.core.seq(seq__80431_81235);
if(temp__5753__auto___81265__$2){
var seq__80431_81266__$1 = temp__5753__auto___81265__$2;
if(cljs.core.chunked_seq_QMARK_(seq__80431_81266__$1)){
var c__4556__auto___81267 = cljs.core.chunk_first(seq__80431_81266__$1);
var G__81268 = cljs.core.chunk_rest(seq__80431_81266__$1);
var G__81269 = c__4556__auto___81267;
var G__81270 = cljs.core.count(c__4556__auto___81267);
var G__81271 = (0);
seq__80431_81235 = G__81268;
chunk__80432_81236 = G__81269;
count__80433_81237 = G__81270;
i__80434_81238 = G__81271;
continue;
} else {
var bar_81272 = cljs.core.first(seq__80431_81266__$1);
var seq__80447_81273 = cljs.core.seq(new cljs.core.Keyword(null,"circles","circles",-1947060917).cljs$core$IFn$_invoke$arity$1(bar_81272));
var chunk__80448_81274 = null;
var count__80449_81275 = (0);
var i__80450_81276 = (0);
while(true){
if((i__80450_81276 < count__80449_81275)){
var bar_circle_81277 = chunk__80448_81274.cljs$core$IIndexed$_nth$arity$2(null,i__80450_81276);
ellah.graphics.render_sublayouts.cljs$core$IFn$_invoke$arity$variadic(ellah.graphics.form_layout(new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(bar_circle_81277),bar_circle_81277),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));


var G__81278 = seq__80447_81273;
var G__81279 = chunk__80448_81274;
var G__81280 = count__80449_81275;
var G__81281 = (i__80450_81276 + (1));
seq__80447_81273 = G__81278;
chunk__80448_81274 = G__81279;
count__80449_81275 = G__81280;
i__80450_81276 = G__81281;
continue;
} else {
var temp__5753__auto___81282__$3 = cljs.core.seq(seq__80447_81273);
if(temp__5753__auto___81282__$3){
var seq__80447_81283__$1 = temp__5753__auto___81282__$3;
if(cljs.core.chunked_seq_QMARK_(seq__80447_81283__$1)){
var c__4556__auto___81284 = cljs.core.chunk_first(seq__80447_81283__$1);
var G__81285 = cljs.core.chunk_rest(seq__80447_81283__$1);
var G__81286 = c__4556__auto___81284;
var G__81287 = cljs.core.count(c__4556__auto___81284);
var G__81288 = (0);
seq__80447_81273 = G__81285;
chunk__80448_81274 = G__81286;
count__80449_81275 = G__81287;
i__80450_81276 = G__81288;
continue;
} else {
var bar_circle_81289 = cljs.core.first(seq__80447_81283__$1);
ellah.graphics.render_sublayouts.cljs$core$IFn$_invoke$arity$variadic(ellah.graphics.form_layout(new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(bar_circle_81289),bar_circle_81289),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));


var G__81290 = cljs.core.next(seq__80447_81283__$1);
var G__81291 = null;
var G__81292 = (0);
var G__81293 = (0);
seq__80447_81273 = G__81290;
chunk__80448_81274 = G__81291;
count__80449_81275 = G__81292;
i__80450_81276 = G__81293;
continue;
}
} else {
}
}
break;
}


var G__81294 = cljs.core.next(seq__80431_81266__$1);
var G__81295 = null;
var G__81296 = (0);
var G__81297 = (0);
seq__80431_81235 = G__81294;
chunk__80432_81236 = G__81295;
count__80433_81237 = G__81296;
i__80434_81238 = G__81297;
continue;
}
} else {
}
}
break;
}


var G__81298 = cljs.core.next(seq__80367_81228__$1);
var G__81299 = null;
var G__81300 = (0);
var G__81301 = (0);
seq__80367_81155 = G__81298;
chunk__80368_81156 = G__81299;
count__80369_81157 = G__81300;
i__80370_81158 = G__81301;
continue;
}
} else {
}
}
break;
}


var G__81302 = cljs.core.next(seq__79003_80983__$1);
var G__81303 = null;
var G__81304 = (0);
var G__81305 = (0);
seq__79003_80661 = G__81302;
chunk__79004_80662 = G__81303;
count__79005_80663 = G__81304;
i__79006_80664 = G__81305;
continue;
}
} else {
}
}
break;
}

ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app_pos,cljs.core.select_keys(app_size,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776)], null))], 0)),new cljs.core.Keyword(null,"radius","radius",-2073122258),ellah.constants.discard_zone_radius),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mouse_zone,new cljs.core.Keyword(null,"discard","discard",-1939593545)))?ellah.constants.highlight_color:ellah.constants.foreground_color),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"menu","menu",352255198)], 0));

ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app_pos,cljs.core.select_keys(app_size,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776)], null))], 0)),new cljs.core.Keyword(null,"radius","radius",-2073122258),(((1) - ellah.constants.discard_zone_bar_thickness) * ellah.constants.discard_zone_radius)),ellah.constants.background_color,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"menu","menu",352255198)], 0));

var last_discard_81306 = cljs.core.first(new cljs.core.Keyword(null,"discard-history","discard-history",92573038).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ellah.graphics.graphics_state)));
if(cljs.core.truth_(last_discard_81306)){
var radius_81307 = ((((1) - ellah.constants.eval_zone_bar_thickness) * ellah.constants.discard_zone_radius) / (Math.sqrt((2)) + (1)));
ellah.graphics.render_sublayouts.cljs$core$IFn$_invoke$arity$variadic(ellah.graphics.form_layout(last_discard_81306,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(app_pos,new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(app_size) - radius_81307))),new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,radius_81307)),new cljs.core.Keyword(null,"radius","radius",-2073122258),(radius_81307 * ellah.constants.discard_zone_form_radius_factor))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"menu","menu",352255198)], 0));

} else {
}

var eval_zone_radius_81308 = new cljs.core.Keyword(null,"eval-zone-radius","eval-zone-radius",1772203622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ellah.graphics.graphics_state));
ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app_pos,app_size], 0)),new cljs.core.Keyword(null,"radius","radius",-2073122258),eval_zone_radius_81308),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mouse_zone,new cljs.core.Keyword(null,"eval","eval",-1103567905)))?ellah.constants.highlight_color:ellah.constants.foreground_color),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"menu","menu",352255198)], 0));

ellah.graphics.circle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app_pos,app_size], 0)),new cljs.core.Keyword(null,"radius","radius",-2073122258),(((1) - ellah.constants.discard_zone_bar_thickness) * eval_zone_radius_81308)),ellah.constants.background_color,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"menu","menu",352255198)], 0));

var last_eval_form_81309 = cljs.core.last(new cljs.core.Keyword(null,"eval-results","eval-results",553789722).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ellah.graphics.graphics_state)));
if(cljs.core.truth_(last_eval_form_81309)){
var radius_81310 = ((((1) - ellah.constants.eval_zone_bar_thickness) * new cljs.core.Keyword(null,"eval-zone-radius","eval-zone-radius",1772203622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ellah.graphics.graphics_state))) / (Math.sqrt((2)) + (1)));
ellah.graphics.render_sublayouts.cljs$core$IFn$_invoke$arity$variadic(ellah.graphics.form_layout(last_eval_form_81309,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ellah.geometry.subtract_points(ellah.geometry.add_points.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app_pos,app_size], 0)),ellah.geometry.scale_point(ellah.geometry.unit,radius_81310)),new cljs.core.Keyword(null,"radius","radius",-2073122258),(radius_81310 * ellah.constants.eval_zone_form_radius_factor))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"menu","menu",352255198)], 0));
} else {
}

if(cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mouse_zone,new cljs.core.Keyword(null,"formbar","formbar",824418093)))?current_placement_form:false))){
var formbar_path = ellah.graphics.formbar_path_at(mouse);
if(cljs.core.truth_(formbar_path)){
var arrangement = ellah.graphics.formbar_arrangement();
var screen_side = cljs.core.first(formbar_path);
var bar_arrangement = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(arrangement,formbar_path);
var form_spacing = (ellah.constants.formbar_radius * ((1) - ellah.constants.formbar_outline_thickness));
var insertion_index = ellah.graphics.get_formbar_insertion_index();
var placement_circle = (((cljs.core.count(new cljs.core.Keyword(null,"circles","circles",-1947060917).cljs$core$IFn$_invoke$arity$1(bar_arrangement)) === (0)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bar_arrangement,new cljs.core.Keyword(null,"radius","radius",-2073122258),(form_spacing * ellah.constants.formbar_placement_size)):(function (){var horizontal_QMARK_ = (function (){var fexpr__80451 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bottom","bottom",-1550509018),null,new cljs.core.Keyword(null,"top","top",-1856271961),null], null), null);
return (fexpr__80451.cljs$core$IFn$_invoke$arity$1 ? fexpr__80451.cljs$core$IFn$_invoke$arity$1(screen_side) : fexpr__80451.call(null,screen_side));
})();
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bar_arrangement,new cljs.core.Keyword(null,"radius","radius",-2073122258),(form_spacing * ellah.constants.formbar_placement_size)),(cljs.core.truth_(horizontal_QMARK_)?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"y","y",-1757859776)),(function (p1__78996_SHARP_){
return (p1__78996_SHARP_ + (((insertion_index - 0.5) * (2)) * form_spacing));
})),(cljs.core.truth_(horizontal_QMARK_)?new cljs.core.Keyword(null,"y","y",-1757859776):new cljs.core.Keyword(null,"x","x",2099068185)),(function (p1__78997_SHARP_){
var G__80454 = p1__78997_SHARP_;
var G__80455 = (form_spacing * ellah.constants.formbar_placement_offset);
var fexpr__80453 = (cljs.core.truth_((function (){var fexpr__80456 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),null,new cljs.core.Keyword(null,"left","left",-399115937),null], null), null);
return (fexpr__80456.cljs$core$IFn$_invoke$arity$1 ? fexpr__80456.cljs$core$IFn$_invoke$arity$1(screen_side) : fexpr__80456.call(null,screen_side));
})())?cljs.core._PLUS_:cljs.core._);
return (fexpr__80453.cljs$core$IFn$_invoke$arity$2 ? fexpr__80453.cljs$core$IFn$_invoke$arity$2(G__80454,G__80455) : fexpr__80453.call(null,G__80454,G__80455));
}));
})());
return ellah.graphics.render_sublayouts.cljs$core$IFn$_invoke$arity$variadic(ellah.graphics.form_layout(ellah.graphics.placement_form(),placement_circle),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formbar","formbar",824418093)], 0));
} else {
return null;
}
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
var app = new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ellah.graphics.graphics_state));
var delta = (app.ticker.elapsedMS / (1000));
var map__80460 = ellah.constants.camera_speed(new cljs.core.Keyword(null,"camera-move-diff","camera-move-diff",-592839139).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ellah.graphics.graphics_state)));
var map__80460__$1 = (((((!((map__80460 == null))))?(((((map__80460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80460):map__80460);
var move = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80460__$1,new cljs.core.Keyword(null,"move","move",-2110884309));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80460__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
ellah.graphics.update_attr_BANG_(new cljs.core.Keyword(null,"camera-pos","camera-pos",666924233),(function (p1__80457_SHARP_){
return ellah.geometry.tween_points(ellah.graphics.ideal_camera_pos(),p1__80457_SHARP_,Math.pow(move,delta));
}));

ellah.graphics.update_attr_BANG_(new cljs.core.Keyword(null,"camera-zoom","camera-zoom",-1214902147),(function (p1__80458_SHARP_){
return Math.pow(Math.E,ellah.util.tween(Math.log(ellah.graphics.ideal_camera_zoom()),Math.log(p1__80458_SHARP_),Math.pow(zoom,delta)));
}));

ellah.graphics.update_attr_BANG_(new cljs.core.Keyword(null,"eval-zone-radius","eval-zone-radius",1772203622),(function (size){
var p = Math.pow(ellah.constants.eval_zone_speed,delta);
return ((p * size) + (((1) - p) * ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ellah.graphics.get_mouse_zone(),new cljs.core.Keyword(null,"eval","eval",-1103567905)))?ellah.constants.eval_zone_max_radius:ellah.constants.eval_zone_min_radius)));
}));

ellah.graphics.resize();

var seq__80462_81311 = cljs.core.seq(ellah.constants.ui_layers);
var chunk__80463_81312 = null;
var count__80464_81313 = (0);
var i__80465_81314 = (0);
while(true){
if((i__80465_81314 < count__80464_81313)){
var layer_81315 = chunk__80463_81312.cljs$core$IIndexed$_nth$arity$2(null,i__80465_81314);
ellah.graphics.get_graphics.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([layer_81315], 0)).clear();


var G__81316 = seq__80462_81311;
var G__81317 = chunk__80463_81312;
var G__81318 = count__80464_81313;
var G__81319 = (i__80465_81314 + (1));
seq__80462_81311 = G__81316;
chunk__80463_81312 = G__81317;
count__80464_81313 = G__81318;
i__80465_81314 = G__81319;
continue;
} else {
var temp__5753__auto___81320 = cljs.core.seq(seq__80462_81311);
if(temp__5753__auto___81320){
var seq__80462_81321__$1 = temp__5753__auto___81320;
if(cljs.core.chunked_seq_QMARK_(seq__80462_81321__$1)){
var c__4556__auto___81322 = cljs.core.chunk_first(seq__80462_81321__$1);
var G__81323 = cljs.core.chunk_rest(seq__80462_81321__$1);
var G__81324 = c__4556__auto___81322;
var G__81325 = cljs.core.count(c__4556__auto___81322);
var G__81326 = (0);
seq__80462_81311 = G__81323;
chunk__80463_81312 = G__81324;
count__80464_81313 = G__81325;
i__80465_81314 = G__81326;
continue;
} else {
var layer_81327 = cljs.core.first(seq__80462_81321__$1);
ellah.graphics.get_graphics.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([layer_81327], 0)).clear();


var G__81328 = cljs.core.next(seq__80462_81321__$1);
var G__81329 = null;
var G__81330 = (0);
var G__81331 = (0);
seq__80462_81311 = G__81328;
chunk__80463_81312 = G__81329;
count__80464_81313 = G__81330;
i__80465_81314 = G__81331;
continue;
}
} else {
}
}
break;
}

var stage_81332 = app.stage;
var texts_81333 = new cljs.core.Keyword(null,"texts","texts",-2031072472).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ellah.graphics.graphics_state));
if(cljs.core.truth_(texts_81333)){
var seq__80466_81334 = cljs.core.seq(cljs.core.vals(texts_81333));
var chunk__80467_81335 = null;
var count__80468_81336 = (0);
var i__80469_81337 = (0);
while(true){
if((i__80469_81337 < count__80468_81336)){
var text_container_81338 = chunk__80467_81335.cljs$core$IIndexed$_nth$arity$2(null,i__80469_81337);
stage_81332.removeChild(text_container_81338);

text_container_81338.destroy(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"children","children",-940561982),true,new cljs.core.Keyword(null,"texture","texture",-266291651),true,new cljs.core.Keyword(null,"baseTexture","baseTexture",719523960),true], null)));


var G__81339 = seq__80466_81334;
var G__81340 = chunk__80467_81335;
var G__81341 = count__80468_81336;
var G__81342 = (i__80469_81337 + (1));
seq__80466_81334 = G__81339;
chunk__80467_81335 = G__81340;
count__80468_81336 = G__81341;
i__80469_81337 = G__81342;
continue;
} else {
var temp__5753__auto___81343 = cljs.core.seq(seq__80466_81334);
if(temp__5753__auto___81343){
var seq__80466_81344__$1 = temp__5753__auto___81343;
if(cljs.core.chunked_seq_QMARK_(seq__80466_81344__$1)){
var c__4556__auto___81345 = cljs.core.chunk_first(seq__80466_81344__$1);
var G__81346 = cljs.core.chunk_rest(seq__80466_81344__$1);
var G__81347 = c__4556__auto___81345;
var G__81348 = cljs.core.count(c__4556__auto___81345);
var G__81349 = (0);
seq__80466_81334 = G__81346;
chunk__80467_81335 = G__81347;
count__80468_81336 = G__81348;
i__80469_81337 = G__81349;
continue;
} else {
var text_container_81350 = cljs.core.first(seq__80466_81344__$1);
stage_81332.removeChild(text_container_81350);

text_container_81350.destroy(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"children","children",-940561982),true,new cljs.core.Keyword(null,"texture","texture",-266291651),true,new cljs.core.Keyword(null,"baseTexture","baseTexture",719523960),true], null)));


var G__81351 = cljs.core.next(seq__80466_81344__$1);
var G__81352 = null;
var G__81353 = (0);
var G__81354 = (0);
seq__80466_81334 = G__81351;
chunk__80467_81335 = G__81352;
count__80468_81336 = G__81353;
i__80469_81337 = G__81354;
continue;
}
} else {
}
}
break;
}
} else {
}

var seq__80470_81355 = cljs.core.seq(cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,ellah.constants.ui_layers,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
var chunk__80471_81356 = null;
var count__80472_81357 = (0);
var i__80473_81358 = (0);
while(true){
if((i__80473_81358 < count__80472_81357)){
var vec__80480_81359 = chunk__80471_81356.cljs$core$IIndexed$_nth$arity$2(null,i__80473_81358);
var layer_81360 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80480_81359,(0),null);
var z_81361 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80480_81359,(1),null);
var container_81362 = (new module$node_modules$pixi_DOT_js$dist$cjs$pixi.Container());
ellah.graphics.update_attr_BANG_(new cljs.core.Keyword(null,"texts","texts",-2031072472),((function (seq__80470_81355,chunk__80471_81356,count__80472_81357,i__80473_81358,container_81362,vec__80480_81359,layer_81360,z_81361,stage_81332,texts_81333,app,delta,map__80460,map__80460__$1,move,zoom){
return (function (p1__80459_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__80459_SHARP_,layer_81360,container_81362);
});})(seq__80470_81355,chunk__80471_81356,count__80472_81357,i__80473_81358,container_81362,vec__80480_81359,layer_81360,z_81361,stage_81332,texts_81333,app,delta,map__80460,map__80460__$1,move,zoom))
);

(container_81362.zIndex = (0.5 + z_81361));

stage_81332.addChild(container_81362);


var G__81363 = seq__80470_81355;
var G__81364 = chunk__80471_81356;
var G__81365 = count__80472_81357;
var G__81366 = (i__80473_81358 + (1));
seq__80470_81355 = G__81363;
chunk__80471_81356 = G__81364;
count__80472_81357 = G__81365;
i__80473_81358 = G__81366;
continue;
} else {
var temp__5753__auto___81367 = cljs.core.seq(seq__80470_81355);
if(temp__5753__auto___81367){
var seq__80470_81368__$1 = temp__5753__auto___81367;
if(cljs.core.chunked_seq_QMARK_(seq__80470_81368__$1)){
var c__4556__auto___81369 = cljs.core.chunk_first(seq__80470_81368__$1);
var G__81370 = cljs.core.chunk_rest(seq__80470_81368__$1);
var G__81371 = c__4556__auto___81369;
var G__81372 = cljs.core.count(c__4556__auto___81369);
var G__81373 = (0);
seq__80470_81355 = G__81370;
chunk__80471_81356 = G__81371;
count__80472_81357 = G__81372;
i__80473_81358 = G__81373;
continue;
} else {
var vec__80483_81374 = cljs.core.first(seq__80470_81368__$1);
var layer_81375 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80483_81374,(0),null);
var z_81376 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80483_81374,(1),null);
var container_81377 = (new module$node_modules$pixi_DOT_js$dist$cjs$pixi.Container());
ellah.graphics.update_attr_BANG_(new cljs.core.Keyword(null,"texts","texts",-2031072472),((function (seq__80470_81355,chunk__80471_81356,count__80472_81357,i__80473_81358,container_81377,vec__80483_81374,layer_81375,z_81376,seq__80470_81368__$1,temp__5753__auto___81367,stage_81332,texts_81333,app,delta,map__80460,map__80460__$1,move,zoom){
return (function (p1__80459_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__80459_SHARP_,layer_81375,container_81377);
});})(seq__80470_81355,chunk__80471_81356,count__80472_81357,i__80473_81358,container_81377,vec__80483_81374,layer_81375,z_81376,seq__80470_81368__$1,temp__5753__auto___81367,stage_81332,texts_81333,app,delta,map__80460,map__80460__$1,move,zoom))
);

(container_81377.zIndex = (0.5 + z_81376));

stage_81332.addChild(container_81377);


var G__81378 = cljs.core.next(seq__80470_81368__$1);
var G__81379 = null;
var G__81380 = (0);
var G__81381 = (0);
seq__80470_81355 = G__81378;
chunk__80471_81356 = G__81379;
count__80472_81357 = G__81380;
i__80473_81358 = G__81381;
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
return ellah.graphics.update_attr_BANG_(new cljs.core.Keyword(null,"eval-results","eval-results",553789722),(function (p1__80486_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__80486_SHARP_,cljs.core.first(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ellah.vedn.clj__GT_vedn(cljs.core.str.cljs$core$IFn$_invoke$arity$1(result)))));
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
ellah.graphics.track_discard = (function ellah$graphics$track_discard(form){
return ellah.graphics.update_attr_BANG_(new cljs.core.Keyword(null,"discard-history","discard-history",92573038),(function (p1__80487_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__80487_SHARP_,form);
}));
});
ellah.graphics.delete_formbar_form_at = (function ellah$graphics$delete_formbar_form_at(path){
var vec__80489 = path;
var side = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80489,(0),null);
var stage = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80489,(1),null);
var substage = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80489,(2),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80489,(3),null);
var form_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80489,(4),null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ellah.graphics.graphics_state,(function (state){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"formbars","formbars",393026901),side,stage,substage,new cljs.core.Keyword(null,"forms","forms",2045992350)], null),(function (p1__80488_SHARP_){
return ellah.vedn.vector_remove(p1__80488_SHARP_,form_index);
}));
}));
});
ellah.graphics.on_click_down = (function ellah$graphics$on_click_down(event){
ellah.graphics.update_mouse_pos(event);

var map__80492 = cljs.core.deref(ellah.graphics.graphics_state);
var map__80492__$1 = (((((!((map__80492 == null))))?(((((map__80492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80492):map__80492);
var mouse = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80492__$1,new cljs.core.Keyword(null,"mouse","mouse",478628972));
var layout = ellah.graphics.adjusted_form_layout();
var layout_path = ellah.graphics.layout_path_at(layout,mouse);
var zone = ellah.graphics.get_mouse_zone();
return ellah.graphics.update_attr_BANG_(new cljs.core.Keyword(null,"mouse","mouse",478628972),(function (state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"down?","down?",1701019493),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"down-path","down-path",-1576662356),layout_path,new cljs.core.Keyword(null,"down-zone","down-zone",-858806618),zone,new cljs.core.Keyword(null,"down-formbar-form-path","down-formbar-form-path",-1673861711),ellah.graphics.formbar_form_path_at(mouse)], 0));
}));
});
ellah.graphics.on_click_up = (function ellah$graphics$on_click_up(event){
ellah.graphics.update_mouse_pos(event);

var map__80496 = cljs.core.deref(ellah.graphics.graphics_state);
var map__80496__$1 = (((((!((map__80496 == null))))?(((((map__80496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80496):map__80496);
var mouse = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80496__$1,new cljs.core.Keyword(null,"mouse","mouse",478628972));
var selected_layout_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80496__$1,new cljs.core.Keyword(null,"selected-layout-path","selected-layout-path",1007788705));
var layout = ellah.graphics.adjusted_form_layout();
var layout_path = ellah.graphics.layout_path_at(layout,mouse);
var map__80497 = mouse;
var map__80497__$1 = (((((!((map__80497 == null))))?(((((map__80497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80497.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80497):map__80497);
var down_zone = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80497__$1,new cljs.core.Keyword(null,"down-zone","down-zone",-858806618));
var down_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80497__$1,new cljs.core.Keyword(null,"down-path","down-path",-1576662356));
if(ellah.graphics.mouse_dragging_QMARK_()){
var G__80500_81382 = ellah.graphics.get_mouse_zone();
var G__80500_81383__$1 = (((G__80500_81382 instanceof cljs.core.Keyword))?G__80500_81382.fqn:null);
switch (G__80500_81383__$1) {
case "program":
var insertion_path_81385 = ellah.graphics.layout_insertion_path_at(layout,mouse);
var current_placement_form_81386 = ellah.graphics.placement_form();
if(cljs.core.truth_(current_placement_form_81386)){
ellah.graphics.update_attr_BANG_(new cljs.core.Keyword(null,"form","form",-1624062471),(function (form){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(layout_path),cljs.core.count(insertion_path_81385))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"literal","literal",1664775605),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ellah.vedn.get_child(form,cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.list((0)),insertion_path_81385)))))){
return ellah.vedn.replace_child(form,cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.list((0)),layout_path)),current_placement_form_81386);
} else {
return ellah.vedn.insert_child(form,cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.list((0)),insertion_path_81385,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.list((0))], 0))),current_placement_form_81386);
}
} else {
return ellah.vedn.insert_child(form,cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.list((0)),insertion_path_81385)),current_placement_form_81386);
}
}));
} else {
}

break;
case "discard":
var G__80501_81387 = down_zone;
var G__80501_81388__$1 = (((G__80501_81387 instanceof cljs.core.Keyword))?G__80501_81387.fqn:null);
switch (G__80501_81388__$1) {
case "program":
if(cljs.core.truth_(down_path)){
if(cljs.core.empty_QMARK_(down_path)){
ellah.graphics.track_discard(cljs.core.first(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ellah.graphics.graphics_state)))));

ellah.graphics.set_attr_BANG_(new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY], null)], null)], null));

ellah.graphics.set_attr_BANG_(new cljs.core.Keyword(null,"selected-layout-path","selected-layout-path",1007788705),null);
} else {
if((((cljs.core.count(selected_layout_path) > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_layout_path,down_path)))){
ellah.graphics.update_attr_BANG_(new cljs.core.Keyword(null,"selected-layout-path","selected-layout-path",1007788705),cljs.core.pop);
} else {
}

ellah.graphics.track_discard(ellah.vedn.get_child(new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ellah.graphics.graphics_state)),cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.list((0)),down_path))));

ellah.graphics.update_attr_BANG_(new cljs.core.Keyword(null,"form","form",-1624062471),(function (p1__80494_SHARP_){
return ellah.vedn.remove_child(p1__80494_SHARP_,cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.list((0)),down_path)));
}));
}
} else {
}

break;
case "formbar":
var map__80502_81390 = mouse;
var map__80502_81391__$1 = (((((!((map__80502_81390 == null))))?(((((map__80502_81390.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80502_81390.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80502_81390):map__80502_81390);
var down_formbar_form_path_81392 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80502_81391__$1,new cljs.core.Keyword(null,"down-formbar-form-path","down-formbar-form-path",-1673861711));
if(cljs.core.truth_(down_formbar_form_path_81392)){
var arrangement_81393 = ellah.graphics.formbar_arrangement();
ellah.graphics.track_discard(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(arrangement_81393,down_formbar_form_path_81392));

ellah.graphics.delete_formbar_form_at(down_formbar_form_path_81392);
} else {
}

break;
default:

}

break;
case "eval":
var current_placement_form_81394 = ellah.graphics.placement_form();
if(cljs.core.truth_(current_placement_form_81394)){
ellah.evaluation.eval_clj.cljs$core$IFn$_invoke$arity$variadic(ellah.vedn.vedn__GT_clj(current_placement_form_81394),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ellah.graphics.log_eval_result], 0));
} else {
}

break;
case "formbar":
var insertion_index_81395 = ellah.graphics.get_formbar_insertion_index();
var formbar_path_81396 = ellah.graphics.formbar_path_at(mouse);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ellah.graphics.graphics_state,(function (state){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"formbars","formbars",393026901)], null),formbar_path_81396,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"forms","forms",2045992350)], null)], 0)),(function (p1__80495_SHARP_){
return ellah.vedn.vector_insert(p1__80495_SHARP_,insertion_index_81395,ellah.graphics.placement_form());
}));
}));

break;
default:

}
} else {
}

if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"down-zone","down-zone",-858806618).cljs$core$IFn$_invoke$arity$1(mouse),new cljs.core.Keyword(null,"program","program",781564284))) && ((!(ellah.graphics.mouse_dragging_QMARK_()))))){
ellah.graphics.set_attr_BANG_(new cljs.core.Keyword(null,"selected-layout-path","selected-layout-path",1007788705),new cljs.core.Keyword(null,"down-path","down-path",-1576662356).cljs$core$IFn$_invoke$arity$1(mouse));

var zoomed_form_81397 = ellah.vedn.get_child(new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ellah.graphics.graphics_state)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),down_path));
var map__80504_81398 = zoomed_form_81397;
var map__80504_81399__$1 = (((((!((map__80504_81398 == null))))?(((((map__80504_81398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80504_81398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80504_81398):map__80504_81398);
var type_81400 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80504_81399__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var value_81401 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80504_81399__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type_81400,new cljs.core.Keyword(null,"literal","literal",1664775605))){
ellah.graphics.activate_text_input(down_path);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"text-input-path","text-input-path",1110769199).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ellah.graphics.graphics_state)))){
ellah.graphics.hide_text_input();

ellah.graphics.update_attr_BANG_(new cljs.core.Keyword(null,"form","form",-1624062471),(function (form){
return ellah.vedn.replace_child(form,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),new cljs.core.Keyword(null,"text-input-path","text-input-path",1110769199).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ellah.graphics.graphics_state))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"literal","literal",1664775605),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"text-input","text-input",-1937260843).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ellah.graphics.graphics_state)).value], null));
}));

ellah.util.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"text-input","text-input",-1937260843).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ellah.graphics.graphics_state)).value], 0));
} else {
}
}
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

var seq__80507_81402 = cljs.core.seq(cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,ellah.constants.ui_layers,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
var chunk__80508_81403 = null;
var count__80509_81404 = (0);
var i__80510_81405 = (0);
while(true){
if((i__80510_81405 < count__80509_81404)){
var vec__80517_81406 = chunk__80508_81403.cljs$core$IIndexed$_nth$arity$2(null,i__80510_81405);
var layer_81407 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80517_81406,(0),null);
var z_81408 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80517_81406,(1),null);
ellah.graphics.update_attr_BANG_(new cljs.core.Keyword(null,"graphics","graphics",-2079995979),((function (seq__80507_81402,chunk__80508_81403,count__80509_81404,i__80510_81405,vec__80517_81406,layer_81407,z_81408,app,stage){
return (function (p1__80506_SHARP_){
var graphics = (new module$node_modules$pixi_DOT_js$dist$cjs$pixi.Graphics());
(graphics.zIndex = z_81408);

stage.addChild(graphics);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__80506_SHARP_,layer_81407,graphics);
});})(seq__80507_81402,chunk__80508_81403,count__80509_81404,i__80510_81405,vec__80517_81406,layer_81407,z_81408,app,stage))
);


var G__81409 = seq__80507_81402;
var G__81410 = chunk__80508_81403;
var G__81411 = count__80509_81404;
var G__81412 = (i__80510_81405 + (1));
seq__80507_81402 = G__81409;
chunk__80508_81403 = G__81410;
count__80509_81404 = G__81411;
i__80510_81405 = G__81412;
continue;
} else {
var temp__5753__auto___81413 = cljs.core.seq(seq__80507_81402);
if(temp__5753__auto___81413){
var seq__80507_81414__$1 = temp__5753__auto___81413;
if(cljs.core.chunked_seq_QMARK_(seq__80507_81414__$1)){
var c__4556__auto___81415 = cljs.core.chunk_first(seq__80507_81414__$1);
var G__81416 = cljs.core.chunk_rest(seq__80507_81414__$1);
var G__81417 = c__4556__auto___81415;
var G__81418 = cljs.core.count(c__4556__auto___81415);
var G__81419 = (0);
seq__80507_81402 = G__81416;
chunk__80508_81403 = G__81417;
count__80509_81404 = G__81418;
i__80510_81405 = G__81419;
continue;
} else {
var vec__80520_81420 = cljs.core.first(seq__80507_81414__$1);
var layer_81421 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80520_81420,(0),null);
var z_81422 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80520_81420,(1),null);
ellah.graphics.update_attr_BANG_(new cljs.core.Keyword(null,"graphics","graphics",-2079995979),((function (seq__80507_81402,chunk__80508_81403,count__80509_81404,i__80510_81405,vec__80520_81420,layer_81421,z_81422,seq__80507_81414__$1,temp__5753__auto___81413,app,stage){
return (function (p1__80506_SHARP_){
var graphics = (new module$node_modules$pixi_DOT_js$dist$cjs$pixi.Graphics());
(graphics.zIndex = z_81422);

stage.addChild(graphics);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__80506_SHARP_,layer_81421,graphics);
});})(seq__80507_81402,chunk__80508_81403,count__80509_81404,i__80510_81405,vec__80520_81420,layer_81421,z_81422,seq__80507_81414__$1,temp__5753__auto___81413,app,stage))
);


var G__81423 = cljs.core.next(seq__80507_81414__$1);
var G__81424 = null;
var G__81425 = (0);
var G__81426 = (0);
seq__80507_81402 = G__81423;
chunk__80508_81403 = G__81424;
count__80509_81404 = G__81425;
i__80510_81405 = G__81426;
continue;
}
} else {
}
}
break;
}

document.body.appendChild(app.view);

app.ticker.add(update_fn);

var interaction_81427 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ellah.graphics.graphics_state)).renderer.plugins),"interaction");
interaction_81427.on("pointerdown",ellah.graphics.on_click_down);

interaction_81427.on("pointerup",ellah.graphics.on_click_up);

interaction_81427.on("pointermove",ellah.graphics.update_mouse_pos);

ellah.graphics.set_attr_BANG_(new cljs.core.Keyword(null,"camera-pos","camera-pos",666924233),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));

ellah.graphics.set_attr_BANG_(new cljs.core.Keyword(null,"camera-zoom","camera-zoom",-1214902147),(1));

ellah.graphics.set_attr_BANG_(new cljs.core.Keyword(null,"eval-zone-radius","eval-zone-radius",1772203622),ellah.constants.eval_zone_min_radius);

ellah.graphics.set_attr_BANG_(new cljs.core.Keyword(null,"form","form",-1624062471),ellah.vedn.clj__GT_vedn(ellah.constants.starting_program));

ellah.graphics.set_attr_BANG_(new cljs.core.Keyword(null,"eval-results","eval-results",553789722),cljs.core.PersistentVector.EMPTY);

ellah.graphics.set_attr_BANG_(new cljs.core.Keyword(null,"formbars","formbars",393026901),ellah.constants.formbar_defaults);

var font_81428 = (new module$node_modules$fontfaceobserver$fontfaceobserver_standalone(ellah.constants.font_name));
font_81428.load().then((function (){
ellah.graphics.set_attr_BANG_(new cljs.core.Keyword(null,"font-loaded?","font-loaded?",-1665361590),true);

return ellah.util.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Font loaded."], 0));
}));

var text_input_81429 = document.createElement("input");
(text_input_81429.type = "text");

document.body.appendChild(text_input_81429);

ellah.graphics.set_attr_BANG_(new cljs.core.Keyword(null,"text-input","text-input",-1937260843),text_input_81429);

(text_input_81429.style.position = "absolute");

ellah.graphics.hide_text_input();

return ellah.graphics.resize();
});

//# sourceMappingURL=ellah.graphics.js.map
