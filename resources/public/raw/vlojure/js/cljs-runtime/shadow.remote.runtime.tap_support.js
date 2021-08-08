goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__59294,p__59295){
var map__59298 = p__59294;
var map__59298__$1 = (((((!((map__59298 == null))))?(((((map__59298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59298.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59298):map__59298);
var svc = map__59298__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59298__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59298__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59298__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__59299 = p__59295;
var map__59299__$1 = (((((!((map__59299 == null))))?(((((map__59299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59299.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59299):map__59299);
var msg = map__59299__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59299__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59299__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59299__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__59299__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__59326,p__59327){
var map__59332 = p__59326;
var map__59332__$1 = (((((!((map__59332 == null))))?(((((map__59332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59332.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59332):map__59332);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59332__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__59333 = p__59327;
var map__59333__$1 = (((((!((map__59333 == null))))?(((((map__59333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59333.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59333):map__59333);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59333__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__59361,p__59362){
var map__59363 = p__59361;
var map__59363__$1 = (((((!((map__59363 == null))))?(((((map__59363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59363.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59363):map__59363);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59363__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59363__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__59365 = p__59362;
var map__59365__$1 = (((((!((map__59365 == null))))?(((((map__59365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59365.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59365):map__59365);
var msg = map__59365__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__59365__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__59373,tid){
var map__59374 = p__59373;
var map__59374__$1 = (((((!((map__59374 == null))))?(((((map__59374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59374.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59374):map__59374);
var svc = map__59374__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59374__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__59386 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__59387 = null;
var count__59388 = (0);
var i__59389 = (0);
while(true){
if((i__59389 < count__59388)){
var vec__59413 = chunk__59387.cljs$core$IIndexed$_nth$arity$2(null,i__59389);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59413,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59413,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__59533 = seq__59386;
var G__59534 = chunk__59387;
var G__59535 = count__59388;
var G__59536 = (i__59389 + (1));
seq__59386 = G__59533;
chunk__59387 = G__59534;
count__59388 = G__59535;
i__59389 = G__59536;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__59386);
if(temp__5753__auto__){
var seq__59386__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59386__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__59386__$1);
var G__59544 = cljs.core.chunk_rest(seq__59386__$1);
var G__59545 = c__4556__auto__;
var G__59546 = cljs.core.count(c__4556__auto__);
var G__59547 = (0);
seq__59386 = G__59544;
chunk__59387 = G__59545;
count__59388 = G__59546;
i__59389 = G__59547;
continue;
} else {
var vec__59432 = cljs.core.first(seq__59386__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59432,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59432,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__59558 = cljs.core.next(seq__59386__$1);
var G__59559 = null;
var G__59560 = (0);
var G__59561 = (0);
seq__59386 = G__59558;
chunk__59387 = G__59559;
count__59388 = G__59560;
i__59389 = G__59561;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__59378_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__59378_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__59379_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__59379_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__59380_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__59380_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__59381_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__59381_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__59469){
var map__59470 = p__59469;
var map__59470__$1 = (((((!((map__59470 == null))))?(((((map__59470.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59470.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59470):map__59470);
var svc = map__59470__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59470__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59470__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
