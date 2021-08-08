goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___65930 = arguments.length;
var i__4737__auto___65931 = (0);
while(true){
if((i__4737__auto___65931 < len__4736__auto___65930)){
args__4742__auto__.push((arguments[i__4737__auto___65931]));

var G__65932 = (i__4737__auto___65931 + (1));
i__4737__auto___65931 = G__65932;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq64927){
var G__64928 = cljs.core.first(seq64927);
var seq64927__$1 = cljs.core.next(seq64927);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64928,seq64927__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__64954 = cljs.core.seq(sources);
var chunk__64955 = null;
var count__64956 = (0);
var i__64957 = (0);
while(true){
if((i__64957 < count__64956)){
var map__65022 = chunk__64955.cljs$core$IIndexed$_nth$arity$2(null,i__64957);
var map__65022__$1 = (((((!((map__65022 == null))))?(((((map__65022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65022.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65022):map__65022);
var src = map__65022__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65022__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65022__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65022__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65022__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e65029){var e_65935 = e65029;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_65935);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_65935.message)].join('')));
}

var G__65939 = seq__64954;
var G__65940 = chunk__64955;
var G__65941 = count__64956;
var G__65942 = (i__64957 + (1));
seq__64954 = G__65939;
chunk__64955 = G__65940;
count__64956 = G__65941;
i__64957 = G__65942;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__64954);
if(temp__5753__auto__){
var seq__64954__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64954__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__64954__$1);
var G__65943 = cljs.core.chunk_rest(seq__64954__$1);
var G__65944 = c__4556__auto__;
var G__65945 = cljs.core.count(c__4556__auto__);
var G__65946 = (0);
seq__64954 = G__65943;
chunk__64955 = G__65944;
count__64956 = G__65945;
i__64957 = G__65946;
continue;
} else {
var map__65040 = cljs.core.first(seq__64954__$1);
var map__65040__$1 = (((((!((map__65040 == null))))?(((((map__65040.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65040.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65040):map__65040);
var src = map__65040__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65040__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65040__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65040__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65040__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e65116){var e_65951 = e65116;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_65951);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_65951.message)].join('')));
}

var G__65953 = cljs.core.next(seq__64954__$1);
var G__65954 = null;
var G__65955 = (0);
var G__65956 = (0);
seq__64954 = G__65953;
chunk__64955 = G__65954;
count__64956 = G__65955;
i__64957 = G__65956;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__65212 = cljs.core.seq(js_requires);
var chunk__65213 = null;
var count__65214 = (0);
var i__65215 = (0);
while(true){
if((i__65215 < count__65214)){
var js_ns = chunk__65213.cljs$core$IIndexed$_nth$arity$2(null,i__65215);
var require_str_65969 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_65969);


var G__65970 = seq__65212;
var G__65971 = chunk__65213;
var G__65972 = count__65214;
var G__65973 = (i__65215 + (1));
seq__65212 = G__65970;
chunk__65213 = G__65971;
count__65214 = G__65972;
i__65215 = G__65973;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__65212);
if(temp__5753__auto__){
var seq__65212__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65212__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__65212__$1);
var G__65974 = cljs.core.chunk_rest(seq__65212__$1);
var G__65975 = c__4556__auto__;
var G__65976 = cljs.core.count(c__4556__auto__);
var G__65977 = (0);
seq__65212 = G__65974;
chunk__65213 = G__65975;
count__65214 = G__65976;
i__65215 = G__65977;
continue;
} else {
var js_ns = cljs.core.first(seq__65212__$1);
var require_str_65979 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_65979);


var G__65980 = cljs.core.next(seq__65212__$1);
var G__65981 = null;
var G__65982 = (0);
var G__65983 = (0);
seq__65212 = G__65980;
chunk__65213 = G__65981;
count__65214 = G__65982;
i__65215 = G__65983;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__65330){
var map__65335 = p__65330;
var map__65335__$1 = (((((!((map__65335 == null))))?(((((map__65335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65335.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65335):map__65335);
var msg = map__65335__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65335__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65335__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__65339(s__65340){
return (new cljs.core.LazySeq(null,(function (){
var s__65340__$1 = s__65340;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__65340__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__65349 = cljs.core.first(xs__6308__auto__);
var map__65349__$1 = (((((!((map__65349 == null))))?(((((map__65349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65349):map__65349);
var src = map__65349__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65349__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65349__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__65340__$1,map__65349,map__65349__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__65335,map__65335__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__65339_$_iter__65341(s__65342){
return (new cljs.core.LazySeq(null,((function (s__65340__$1,map__65349,map__65349__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__65335,map__65335__$1,msg,info,reload_info){
return (function (){
var s__65342__$1 = s__65342;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__65342__$1);
if(temp__5753__auto____$1){
var s__65342__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__65342__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__65342__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__65344 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__65343 = (0);
while(true){
if((i__65343 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__65343);
cljs.core.chunk_append(b__65344,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__65994 = (i__65343 + (1));
i__65343 = G__65994;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65344),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__65339_$_iter__65341(cljs.core.chunk_rest(s__65342__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65344),null);
}
} else {
var warning = cljs.core.first(s__65342__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__65339_$_iter__65341(cljs.core.rest(s__65342__$2)));
}
} else {
return null;
}
break;
}
});})(s__65340__$1,map__65349,map__65349__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__65335,map__65335__$1,msg,info,reload_info))
,null,null));
});})(s__65340__$1,map__65349,map__65349__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__65335,map__65335__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__65339(cljs.core.rest(s__65340__$1)));
} else {
var G__65996 = cljs.core.rest(s__65340__$1);
s__65340__$1 = G__65996;
continue;
}
} else {
var G__65997 = cljs.core.rest(s__65340__$1);
s__65340__$1 = G__65997;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__65399_66003 = cljs.core.seq(warnings);
var chunk__65400_66004 = null;
var count__65401_66005 = (0);
var i__65402_66006 = (0);
while(true){
if((i__65402_66006 < count__65401_66005)){
var map__65450_66010 = chunk__65400_66004.cljs$core$IIndexed$_nth$arity$2(null,i__65402_66006);
var map__65450_66011__$1 = (((((!((map__65450_66010 == null))))?(((((map__65450_66010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65450_66010.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65450_66010):map__65450_66010);
var w_66015 = map__65450_66011__$1;
var msg_66016__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65450_66011__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_66017 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65450_66011__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_66018 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65450_66011__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_66019 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65450_66011__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_66019)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_66017),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_66018),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_66016__$1)].join(''));


var G__66020 = seq__65399_66003;
var G__66021 = chunk__65400_66004;
var G__66022 = count__65401_66005;
var G__66023 = (i__65402_66006 + (1));
seq__65399_66003 = G__66020;
chunk__65400_66004 = G__66021;
count__65401_66005 = G__66022;
i__65402_66006 = G__66023;
continue;
} else {
var temp__5753__auto___66024 = cljs.core.seq(seq__65399_66003);
if(temp__5753__auto___66024){
var seq__65399_66025__$1 = temp__5753__auto___66024;
if(cljs.core.chunked_seq_QMARK_(seq__65399_66025__$1)){
var c__4556__auto___66026 = cljs.core.chunk_first(seq__65399_66025__$1);
var G__66027 = cljs.core.chunk_rest(seq__65399_66025__$1);
var G__66028 = c__4556__auto___66026;
var G__66029 = cljs.core.count(c__4556__auto___66026);
var G__66030 = (0);
seq__65399_66003 = G__66027;
chunk__65400_66004 = G__66028;
count__65401_66005 = G__66029;
i__65402_66006 = G__66030;
continue;
} else {
var map__65479_66031 = cljs.core.first(seq__65399_66025__$1);
var map__65479_66032__$1 = (((((!((map__65479_66031 == null))))?(((((map__65479_66031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65479_66031.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65479_66031):map__65479_66031);
var w_66033 = map__65479_66032__$1;
var msg_66034__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65479_66032__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_66035 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65479_66032__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_66036 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65479_66032__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_66037 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65479_66032__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_66037)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_66035),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_66036),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_66034__$1)].join(''));


var G__66045 = cljs.core.next(seq__65399_66025__$1);
var G__66046 = null;
var G__66047 = (0);
var G__66048 = (0);
seq__65399_66003 = G__66045;
chunk__65400_66004 = G__66046;
count__65401_66005 = G__66047;
i__65402_66006 = G__66048;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__65308_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__65308_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__65594){
var map__65595 = p__65594;
var map__65595__$1 = (((((!((map__65595 == null))))?(((((map__65595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65595.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65595):map__65595);
var msg = map__65595__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65595__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__65604 = cljs.core.seq(updates);
var chunk__65606 = null;
var count__65607 = (0);
var i__65608 = (0);
while(true){
if((i__65608 < count__65607)){
var path = chunk__65606.cljs$core$IIndexed$_nth$arity$2(null,i__65608);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__65727_66065 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__65731_66066 = null;
var count__65732_66067 = (0);
var i__65733_66068 = (0);
while(true){
if((i__65733_66068 < count__65732_66067)){
var node_66073 = chunk__65731_66066.cljs$core$IIndexed$_nth$arity$2(null,i__65733_66068);
if(cljs.core.not(node_66073.shadow$old)){
var path_match_66074 = shadow.cljs.devtools.client.browser.match_paths(node_66073.getAttribute("href"),path);
if(cljs.core.truth_(path_match_66074)){
var new_link_66077 = (function (){var G__65762 = node_66073.cloneNode(true);
G__65762.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_66074),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__65762;
})();
(node_66073.shadow$old = true);

(new_link_66077.onload = ((function (seq__65727_66065,chunk__65731_66066,count__65732_66067,i__65733_66068,seq__65604,chunk__65606,count__65607,i__65608,new_link_66077,path_match_66074,node_66073,path,map__65595,map__65595__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_66073);
});})(seq__65727_66065,chunk__65731_66066,count__65732_66067,i__65733_66068,seq__65604,chunk__65606,count__65607,i__65608,new_link_66077,path_match_66074,node_66073,path,map__65595,map__65595__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_66074], 0));

goog.dom.insertSiblingAfter(new_link_66077,node_66073);


var G__66081 = seq__65727_66065;
var G__66082 = chunk__65731_66066;
var G__66083 = count__65732_66067;
var G__66084 = (i__65733_66068 + (1));
seq__65727_66065 = G__66081;
chunk__65731_66066 = G__66082;
count__65732_66067 = G__66083;
i__65733_66068 = G__66084;
continue;
} else {
var G__66085 = seq__65727_66065;
var G__66086 = chunk__65731_66066;
var G__66087 = count__65732_66067;
var G__66088 = (i__65733_66068 + (1));
seq__65727_66065 = G__66085;
chunk__65731_66066 = G__66086;
count__65732_66067 = G__66087;
i__65733_66068 = G__66088;
continue;
}
} else {
var G__66089 = seq__65727_66065;
var G__66090 = chunk__65731_66066;
var G__66091 = count__65732_66067;
var G__66092 = (i__65733_66068 + (1));
seq__65727_66065 = G__66089;
chunk__65731_66066 = G__66090;
count__65732_66067 = G__66091;
i__65733_66068 = G__66092;
continue;
}
} else {
var temp__5753__auto___66093 = cljs.core.seq(seq__65727_66065);
if(temp__5753__auto___66093){
var seq__65727_66094__$1 = temp__5753__auto___66093;
if(cljs.core.chunked_seq_QMARK_(seq__65727_66094__$1)){
var c__4556__auto___66095 = cljs.core.chunk_first(seq__65727_66094__$1);
var G__66097 = cljs.core.chunk_rest(seq__65727_66094__$1);
var G__66098 = c__4556__auto___66095;
var G__66099 = cljs.core.count(c__4556__auto___66095);
var G__66100 = (0);
seq__65727_66065 = G__66097;
chunk__65731_66066 = G__66098;
count__65732_66067 = G__66099;
i__65733_66068 = G__66100;
continue;
} else {
var node_66101 = cljs.core.first(seq__65727_66094__$1);
if(cljs.core.not(node_66101.shadow$old)){
var path_match_66102 = shadow.cljs.devtools.client.browser.match_paths(node_66101.getAttribute("href"),path);
if(cljs.core.truth_(path_match_66102)){
var new_link_66103 = (function (){var G__65768 = node_66101.cloneNode(true);
G__65768.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_66102),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__65768;
})();
(node_66101.shadow$old = true);

(new_link_66103.onload = ((function (seq__65727_66065,chunk__65731_66066,count__65732_66067,i__65733_66068,seq__65604,chunk__65606,count__65607,i__65608,new_link_66103,path_match_66102,node_66101,seq__65727_66094__$1,temp__5753__auto___66093,path,map__65595,map__65595__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_66101);
});})(seq__65727_66065,chunk__65731_66066,count__65732_66067,i__65733_66068,seq__65604,chunk__65606,count__65607,i__65608,new_link_66103,path_match_66102,node_66101,seq__65727_66094__$1,temp__5753__auto___66093,path,map__65595,map__65595__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_66102], 0));

goog.dom.insertSiblingAfter(new_link_66103,node_66101);


var G__66108 = cljs.core.next(seq__65727_66094__$1);
var G__66109 = null;
var G__66110 = (0);
var G__66111 = (0);
seq__65727_66065 = G__66108;
chunk__65731_66066 = G__66109;
count__65732_66067 = G__66110;
i__65733_66068 = G__66111;
continue;
} else {
var G__66112 = cljs.core.next(seq__65727_66094__$1);
var G__66113 = null;
var G__66114 = (0);
var G__66115 = (0);
seq__65727_66065 = G__66112;
chunk__65731_66066 = G__66113;
count__65732_66067 = G__66114;
i__65733_66068 = G__66115;
continue;
}
} else {
var G__66117 = cljs.core.next(seq__65727_66094__$1);
var G__66118 = null;
var G__66119 = (0);
var G__66120 = (0);
seq__65727_66065 = G__66117;
chunk__65731_66066 = G__66118;
count__65732_66067 = G__66119;
i__65733_66068 = G__66120;
continue;
}
}
} else {
}
}
break;
}


var G__66121 = seq__65604;
var G__66122 = chunk__65606;
var G__66123 = count__65607;
var G__66124 = (i__65608 + (1));
seq__65604 = G__66121;
chunk__65606 = G__66122;
count__65607 = G__66123;
i__65608 = G__66124;
continue;
} else {
var G__66125 = seq__65604;
var G__66126 = chunk__65606;
var G__66127 = count__65607;
var G__66128 = (i__65608 + (1));
seq__65604 = G__66125;
chunk__65606 = G__66126;
count__65607 = G__66127;
i__65608 = G__66128;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__65604);
if(temp__5753__auto__){
var seq__65604__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65604__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__65604__$1);
var G__66130 = cljs.core.chunk_rest(seq__65604__$1);
var G__66131 = c__4556__auto__;
var G__66132 = cljs.core.count(c__4556__auto__);
var G__66133 = (0);
seq__65604 = G__66130;
chunk__65606 = G__66131;
count__65607 = G__66132;
i__65608 = G__66133;
continue;
} else {
var path = cljs.core.first(seq__65604__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__65780_66137 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__65784_66138 = null;
var count__65785_66139 = (0);
var i__65786_66140 = (0);
while(true){
if((i__65786_66140 < count__65785_66139)){
var node_66141 = chunk__65784_66138.cljs$core$IIndexed$_nth$arity$2(null,i__65786_66140);
if(cljs.core.not(node_66141.shadow$old)){
var path_match_66142 = shadow.cljs.devtools.client.browser.match_paths(node_66141.getAttribute("href"),path);
if(cljs.core.truth_(path_match_66142)){
var new_link_66143 = (function (){var G__65801 = node_66141.cloneNode(true);
G__65801.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_66142),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__65801;
})();
(node_66141.shadow$old = true);

(new_link_66143.onload = ((function (seq__65780_66137,chunk__65784_66138,count__65785_66139,i__65786_66140,seq__65604,chunk__65606,count__65607,i__65608,new_link_66143,path_match_66142,node_66141,path,seq__65604__$1,temp__5753__auto__,map__65595,map__65595__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_66141);
});})(seq__65780_66137,chunk__65784_66138,count__65785_66139,i__65786_66140,seq__65604,chunk__65606,count__65607,i__65608,new_link_66143,path_match_66142,node_66141,path,seq__65604__$1,temp__5753__auto__,map__65595,map__65595__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_66142], 0));

goog.dom.insertSiblingAfter(new_link_66143,node_66141);


var G__66146 = seq__65780_66137;
var G__66147 = chunk__65784_66138;
var G__66148 = count__65785_66139;
var G__66149 = (i__65786_66140 + (1));
seq__65780_66137 = G__66146;
chunk__65784_66138 = G__66147;
count__65785_66139 = G__66148;
i__65786_66140 = G__66149;
continue;
} else {
var G__66152 = seq__65780_66137;
var G__66153 = chunk__65784_66138;
var G__66154 = count__65785_66139;
var G__66155 = (i__65786_66140 + (1));
seq__65780_66137 = G__66152;
chunk__65784_66138 = G__66153;
count__65785_66139 = G__66154;
i__65786_66140 = G__66155;
continue;
}
} else {
var G__66156 = seq__65780_66137;
var G__66157 = chunk__65784_66138;
var G__66158 = count__65785_66139;
var G__66159 = (i__65786_66140 + (1));
seq__65780_66137 = G__66156;
chunk__65784_66138 = G__66157;
count__65785_66139 = G__66158;
i__65786_66140 = G__66159;
continue;
}
} else {
var temp__5753__auto___66160__$1 = cljs.core.seq(seq__65780_66137);
if(temp__5753__auto___66160__$1){
var seq__65780_66161__$1 = temp__5753__auto___66160__$1;
if(cljs.core.chunked_seq_QMARK_(seq__65780_66161__$1)){
var c__4556__auto___66164 = cljs.core.chunk_first(seq__65780_66161__$1);
var G__66165 = cljs.core.chunk_rest(seq__65780_66161__$1);
var G__66166 = c__4556__auto___66164;
var G__66167 = cljs.core.count(c__4556__auto___66164);
var G__66168 = (0);
seq__65780_66137 = G__66165;
chunk__65784_66138 = G__66166;
count__65785_66139 = G__66167;
i__65786_66140 = G__66168;
continue;
} else {
var node_66169 = cljs.core.first(seq__65780_66161__$1);
if(cljs.core.not(node_66169.shadow$old)){
var path_match_66171 = shadow.cljs.devtools.client.browser.match_paths(node_66169.getAttribute("href"),path);
if(cljs.core.truth_(path_match_66171)){
var new_link_66173 = (function (){var G__65804 = node_66169.cloneNode(true);
G__65804.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_66171),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__65804;
})();
(node_66169.shadow$old = true);

(new_link_66173.onload = ((function (seq__65780_66137,chunk__65784_66138,count__65785_66139,i__65786_66140,seq__65604,chunk__65606,count__65607,i__65608,new_link_66173,path_match_66171,node_66169,seq__65780_66161__$1,temp__5753__auto___66160__$1,path,seq__65604__$1,temp__5753__auto__,map__65595,map__65595__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_66169);
});})(seq__65780_66137,chunk__65784_66138,count__65785_66139,i__65786_66140,seq__65604,chunk__65606,count__65607,i__65608,new_link_66173,path_match_66171,node_66169,seq__65780_66161__$1,temp__5753__auto___66160__$1,path,seq__65604__$1,temp__5753__auto__,map__65595,map__65595__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_66171], 0));

goog.dom.insertSiblingAfter(new_link_66173,node_66169);


var G__66180 = cljs.core.next(seq__65780_66161__$1);
var G__66181 = null;
var G__66182 = (0);
var G__66183 = (0);
seq__65780_66137 = G__66180;
chunk__65784_66138 = G__66181;
count__65785_66139 = G__66182;
i__65786_66140 = G__66183;
continue;
} else {
var G__66184 = cljs.core.next(seq__65780_66161__$1);
var G__66185 = null;
var G__66186 = (0);
var G__66187 = (0);
seq__65780_66137 = G__66184;
chunk__65784_66138 = G__66185;
count__65785_66139 = G__66186;
i__65786_66140 = G__66187;
continue;
}
} else {
var G__66188 = cljs.core.next(seq__65780_66161__$1);
var G__66189 = null;
var G__66190 = (0);
var G__66191 = (0);
seq__65780_66137 = G__66188;
chunk__65784_66138 = G__66189;
count__65785_66139 = G__66190;
i__65786_66140 = G__66191;
continue;
}
}
} else {
}
}
break;
}


var G__66192 = cljs.core.next(seq__65604__$1);
var G__66193 = null;
var G__66194 = (0);
var G__66195 = (0);
seq__65604 = G__66192;
chunk__65606 = G__66193;
count__65607 = G__66194;
i__65608 = G__66195;
continue;
} else {
var G__66196 = cljs.core.next(seq__65604__$1);
var G__66197 = null;
var G__66198 = (0);
var G__66199 = (0);
seq__65604 = G__66196;
chunk__65606 = G__66197;
count__65607 = G__66198;
i__65608 = G__66199;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__65809){
var map__65810 = p__65809;
var map__65810__$1 = (((((!((map__65810 == null))))?(((((map__65810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65810.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65810):map__65810);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65810__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.client_info = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null);
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__65831){
var map__65832 = p__65831;
var map__65832__$1 = (((((!((map__65832 == null))))?(((((map__65832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65832.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65832):map__65832);
var _ = map__65832__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65832__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__65838,done,error){
var map__65839 = p__65838;
var map__65839__$1 = (((((!((map__65839 == null))))?(((((map__65839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65839.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65839):map__65839);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65839__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__65842,done,error){
var map__65843 = p__65842;
var map__65843__$1 = (((((!((map__65843 == null))))?(((((map__65843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65843.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65843):map__65843);
var msg = map__65843__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65843__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65843__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65843__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__65845){
var map__65846 = p__65845;
var map__65846__$1 = (((((!((map__65846 == null))))?(((((map__65846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65846.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65846):map__65846);
var src = map__65846__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65846__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__65849 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__65849) : done.call(null,G__65849));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__65853){
var map__65854 = p__65853;
var map__65854__$1 = (((((!((map__65854 == null))))?(((((map__65854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65854.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65854):map__65854);
var msg__$1 = map__65854__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65854__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e65866){var ex = e65866;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__65872){
var map__65873 = p__65872;
var map__65873__$1 = (((((!((map__65873 == null))))?(((((map__65873.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65873.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65873):map__65873);
var env = map__65873__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65873__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__65885){
var map__65888 = p__65885;
var map__65888__$1 = (((((!((map__65888 == null))))?(((((map__65888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65888):map__65888);
var msg = map__65888__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65888__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__65901){
var map__65903 = p__65901;
var map__65903__$1 = (((((!((map__65903 == null))))?(((((map__65903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65903.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65903):map__65903);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65903__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65903__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__65913){
var map__65914 = p__65913;
var map__65914__$1 = (((((!((map__65914 == null))))?(((((map__65914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65914.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65914):map__65914);
var svc = map__65914__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65914__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
