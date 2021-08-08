goog.provide('cljs.compiler');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler.es5_GT__EQ_ = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (lang){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lang,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(cljs.core.name(lang),/^ecmascript/,"es"))], null);
}))),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ecmascript5","ecmascript5",342717552),new cljs.core.Keyword(null,"ecmascript5-strict","ecmascript5-strict",888234811),new cljs.core.Keyword(null,"ecmascript6","ecmascript6",723864898),new cljs.core.Keyword(null,"ecmascript6-strict","ecmascript6-strict",-786049555),new cljs.core.Keyword(null,"ecmascript-2015","ecmascript-2015",-902254444),new cljs.core.Keyword(null,"ecmascript6-typed","ecmascript6-typed",-1978203054),new cljs.core.Keyword(null,"ecmascript-2016","ecmascript-2016",471574729),new cljs.core.Keyword(null,"ecmascript-2017","ecmascript-2017",620145058),new cljs.core.Keyword(null,"ecmascript-next","ecmascript-next",-1935155962)], null));
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_source_map_data_gen_col_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
/**
 * Gets the part up to the first `.` of a namespace.
 * Returns the empty string for nil.
 * Returns the entire string if no `.` in namespace
 */
cljs.compiler.get_first_ns_segment = (function cljs$compiler$get_first_ns_segment(ns){
var ns__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
var idx = ns__$1.indexOf(".");
if(((-1) === idx)){
return ns__$1;
} else {
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ns__$1,(0),idx);
}
});
cljs.compiler.find_ns_starts_with = (function cljs$compiler$find_ns_starts_with(needle){
return cljs.core.reduce_kv((function (xs,ns,_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(needle,cljs.compiler.get_first_ns_segment(ns))){
return cljs.core.reduced(needle);
} else {
return null;
}
}),null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__67192 = s;
var map__67192__$1 = (((((!((map__67192 == null))))?(((((map__67192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67192):map__67192);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67192__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67192__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__67195 = info;
var map__67196 = G__67195;
var map__67196__$1 = (((((!((map__67196 == null))))?(((((map__67196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67196.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67196):map__67196);
var shadow__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67196__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__67195__$1 = G__67195;
while(true){
var d__$2 = d__$1;
var map__67201 = G__67195__$1;
var map__67201__$1 = (((((!((map__67201 == null))))?(((((map__67201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67201.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67201):map__67201);
var shadow__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67201__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$2)){
var G__68489 = (d__$2 + (1));
var G__68490 = shadow__$2;
d__$1 = G__68489;
G__67195__$1 = G__68490;
continue;
} else {
if(cljs.core.truth_(cljs.compiler.find_ns_starts_with.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s).cljs$core$IHash$_hash$arity$1(null),cljs.compiler.shadow_depth(s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__67206){
var map__67207 = p__67206;
var map__67207__$1 = (((((!((map__67207 == null))))?(((((map__67207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67207.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67207):map__67207);
var name_var = map__67207__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67207__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67207__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__67214 = info;
var map__67214__$1 = (((((!((map__67214 == null))))?(((((map__67214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67214.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67214):map__67214);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67214__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67214__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("_$_",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__67217 = [clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),".","$"),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('');
return (cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__67217) : cljs.compiler.munge.call(null,G__67217));
})());
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(reserved,s) == null)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"$"].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var G__67245 = arguments.length;
switch (G__67245) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(s,cljs.compiler.js_reserved);
}));

(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_(s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if((!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null)))){
return cljs.compiler.fn_self_name(s);
} else {
var depth = cljs.compiler.shadow_depth(s);
var code = cljs.compiler.hash_scope(s);
var renamed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?["self__.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):(((!((renamed == null))))?renamed:name
));
var munged_name = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(name__$1,reserved);
if(((field === true) || ((depth === (0))))){
return munged_name;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(munged_name),"__$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace(ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved(reserved);
var ss__$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(rf,clojure.string.split.cljs$core$IFn$_invoke$arity$2(ss__$1,/\./));
var ss__$3 = clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",ss__$2);
var ms = (function (){var fexpr__67274 = new cljs.core.Var(function(){return cljs.core.munge_str;},new cljs.core.Symbol("cljs.core","munge-str","cljs.core/munge-str",-301346665,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"munge-str","munge-str",-2042069652,null),"cljs/core.cljs",25,1,11501,11501,new cljs.core.Symbol(null,"string","string",-349010059,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),null,(cljs.core.truth_(cljs.core.munge_str)?cljs.core.munge_str.cljs$lang$test:null)]));
return (fexpr__67274.cljs$core$IFn$_invoke$arity$1 ? fexpr__67274.cljs$core$IFn$_invoke$arity$1(ss__$3) : fexpr__67274.call(null,ss__$3));
})();
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(ms);
} else {
return ms;
}
}
}));

(cljs.compiler.munge.cljs$lang$maxFixedArity = 2);

cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__67276 = cp;
switch (G__67276) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if(((((31) < cp)) && ((cp < (127))))){
return c;
} else {
var unpadded = cp.toString((16));
var pad = cljs.core.subs.cljs$core$IFn$_invoke$arity$2("0000",unpadded.length);
return ["\\u",pad,cljs.core.str.cljs$core$IFn$_invoke$arity$1(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__67277_68505 = cljs.core.seq(s);
var chunk__67278_68506 = null;
var count__67279_68507 = (0);
var i__67280_68508 = (0);
while(true){
if((i__67280_68508 < count__67279_68507)){
var c_68510 = chunk__67278_68506.cljs$core$IIndexed$_nth$arity$2(null,i__67280_68508);
sb.append(cljs.compiler.escape_char(c_68510));


var G__68511 = seq__67277_68505;
var G__68512 = chunk__67278_68506;
var G__68513 = count__67279_68507;
var G__68514 = (i__67280_68508 + (1));
seq__67277_68505 = G__68511;
chunk__67278_68506 = G__68512;
count__67279_68507 = G__68513;
i__67280_68508 = G__68514;
continue;
} else {
var temp__5753__auto___68515 = cljs.core.seq(seq__67277_68505);
if(temp__5753__auto___68515){
var seq__67277_68516__$1 = temp__5753__auto___68515;
if(cljs.core.chunked_seq_QMARK_(seq__67277_68516__$1)){
var c__4556__auto___68517 = cljs.core.chunk_first(seq__67277_68516__$1);
var G__68521 = cljs.core.chunk_rest(seq__67277_68516__$1);
var G__68522 = c__4556__auto___68517;
var G__68523 = cljs.core.count(c__4556__auto___68517);
var G__68524 = (0);
seq__67277_68505 = G__68521;
chunk__67278_68506 = G__68522;
count__67279_68507 = G__68523;
i__67280_68508 = G__68524;
continue;
} else {
var c_68525 = cljs.core.first(seq__67277_68516__$1);
sb.append(cljs.compiler.escape_char(c_68525));


var G__68526 = cljs.core.next(seq__67277_68516__$1);
var G__68527 = null;
var G__68528 = (0);
var G__68529 = (0);
seq__67277_68505 = G__68526;
chunk__67278_68506 = G__68527;
count__67279_68507 = G__68528;
i__67280_68508 = G__68529;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"\""].join('');
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__67289 = cljs.core.get_global_hierarchy;
return (fexpr__67289.cljs$core$IFn$_invoke$arity$0 ? fexpr__67289.cljs$core$IFn$_invoke$arity$0() : fexpr__67289.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__67290_68533 = ast;
var map__67290_68534__$1 = (((((!((map__67290_68533 == null))))?(((((map__67290_68533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67290_68533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67290_68533):map__67290_68533);
var env_68535 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67290_68534__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_68535))){
var map__67296_68536 = env_68535;
var map__67296_68537__$1 = (((((!((map__67296_68536 == null))))?(((((map__67296_68536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67296_68536.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67296_68536):map__67296_68536);
var line_68538 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67296_68537__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_68539 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67296_68537__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (m){
var minfo = (function (){var G__67298 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_((function (){var G__67300 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast);
var fexpr__67299 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__67299.cljs$core$IFn$_invoke$arity$1 ? fexpr__67299.cljs$core$IFn$_invoke$arity$1(G__67300) : fexpr__67299.call(null,G__67300));
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67298,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__67298;
}
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_68538 - (1))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (line__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_68539)?(column_68539 - (1)):(0))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (column__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(column__$1,minfo);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
}));
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.cljs$core$IFn$_invoke$arity$1(ast);
});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var G__67313 = arguments.length;
switch (G__67313) {
case 0:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___68547 = arguments.length;
var i__4737__auto___68548 = (0);
while(true){
if((i__4737__auto___68548 < len__4736__auto___68547)){
args_arr__4757__auto__.push((arguments[i__4737__auto___68548]));

var G__68549 = (i__4737__auto___68548 + (1));
i__4737__auto___68548 = G__68549;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((5)),(0),null));
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4758__auto__);

}
});

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1 = (function (a){
if((a == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_(a)){
cljs.compiler.emit(a);
} else {
if(cljs.analyzer.cljs_seq_QMARK_(a)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,a);
} else {
if(goog.isFunction(a)){
(a.cljs$core$IFn$_invoke$arity$0 ? a.cljs$core$IFn$_invoke$arity$0() : a.call(null));
} else {
var s_68553 = (function (){var G__67317 = a;
if((!(typeof a === 'string'))){
return G__67317.toString();
} else {
return G__67317;
}
})();
var temp__5757__auto___68554 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5757__auto___68554 == null)){
} else {
var sm_data_68555 = temp__5757__auto___68554;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sm_data_68555,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(function (p1__67301_SHARP_){
return (p1__67301_SHARP_ + s_68553.length);
}));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_68553], 0));

}
}
}
}

return null;
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(e);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,xs){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(e);

var seq__67324 = cljs.core.seq(xs);
var chunk__67325 = null;
var count__67326 = (0);
var i__67327 = (0);
while(true){
if((i__67327 < count__67326)){
var x = chunk__67325.cljs$core$IIndexed$_nth$arity$2(null,i__67327);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__68558 = seq__67324;
var G__68559 = chunk__67325;
var G__68560 = count__67326;
var G__68561 = (i__67327 + (1));
seq__67324 = G__68558;
chunk__67325 = G__68559;
count__67326 = G__68560;
i__67327 = G__68561;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__67324);
if(temp__5753__auto__){
var seq__67324__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67324__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__67324__$1);
var G__68562 = cljs.core.chunk_rest(seq__67324__$1);
var G__68563 = c__4556__auto__;
var G__68564 = cljs.core.count(c__4556__auto__);
var G__68565 = (0);
seq__67324 = G__68562;
chunk__67325 = G__68563;
count__67326 = G__68564;
i__67327 = G__68565;
continue;
} else {
var x = cljs.core.first(seq__67324__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__68566 = cljs.core.next(seq__67324__$1);
var G__68567 = null;
var G__68568 = (0);
var G__68569 = (0);
seq__67324 = G__68566;
chunk__67325 = G__68567;
count__67326 = G__68568;
i__67327 = G__68569;
continue;
}
} else {
return null;
}
}
break;
}
}));

/** @this {Function} */
(cljs.compiler.emits.cljs$lang$applyTo = (function (seq67307){
var G__67308 = cljs.core.first(seq67307);
var seq67307__$1 = cljs.core.next(seq67307);
var G__67309 = cljs.core.first(seq67307__$1);
var seq67307__$2 = cljs.core.next(seq67307__$1);
var G__67310 = cljs.core.first(seq67307__$2);
var seq67307__$3 = cljs.core.next(seq67307__$2);
var G__67311 = cljs.core.first(seq67307__$3);
var seq67307__$4 = cljs.core.next(seq67307__$3);
var G__67312 = cljs.core.first(seq67307__$4);
var seq67307__$5 = cljs.core.next(seq67307__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67308,G__67309,G__67310,G__67311,G__67312,seq67307__$5);
}));

(cljs.compiler.emits.cljs$lang$maxFixedArity = (5));

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.cljs$core$IFn$_invoke$arity$0();

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (p__67334){
var map__67335 = p__67334;
var map__67335__$1 = (((((!((map__67335 == null))))?(((((map__67335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67335.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67335):map__67335);
var m = map__67335__$1;
var gen_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67335__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0)], 0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__67347 = arguments.length;
switch (G__67347) {
case 0:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___68578 = arguments.length;
var i__4737__auto___68579 = (0);
while(true){
if((i__4737__auto___68579 < len__4736__auto___68578)){
args_arr__4757__auto__.push((arguments[i__4737__auto___68579]));

var G__68580 = (i__4737__auto___68579 + (1));
i__4737__auto___68579 = G__68580;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((5)),(0),null));
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4758__auto__);

}
});

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1 = (function (a){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(e);

return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,xs){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(e);

var seq__67363_68581 = cljs.core.seq(xs);
var chunk__67364_68582 = null;
var count__67365_68583 = (0);
var i__67366_68584 = (0);
while(true){
if((i__67366_68584 < count__67365_68583)){
var x_68585 = chunk__67364_68582.cljs$core$IIndexed$_nth$arity$2(null,i__67366_68584);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_68585);


var G__68586 = seq__67363_68581;
var G__68587 = chunk__67364_68582;
var G__68588 = count__67365_68583;
var G__68589 = (i__67366_68584 + (1));
seq__67363_68581 = G__68586;
chunk__67364_68582 = G__68587;
count__67365_68583 = G__68588;
i__67366_68584 = G__68589;
continue;
} else {
var temp__5753__auto___68590 = cljs.core.seq(seq__67363_68581);
if(temp__5753__auto___68590){
var seq__67363_68591__$1 = temp__5753__auto___68590;
if(cljs.core.chunked_seq_QMARK_(seq__67363_68591__$1)){
var c__4556__auto___68592 = cljs.core.chunk_first(seq__67363_68591__$1);
var G__68593 = cljs.core.chunk_rest(seq__67363_68591__$1);
var G__68594 = c__4556__auto___68592;
var G__68595 = cljs.core.count(c__4556__auto___68592);
var G__68596 = (0);
seq__67363_68581 = G__68593;
chunk__67364_68582 = G__68594;
count__67365_68583 = G__68595;
i__67366_68584 = G__68596;
continue;
} else {
var x_68597 = cljs.core.first(seq__67363_68591__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_68597);


var G__68598 = cljs.core.next(seq__67363_68591__$1);
var G__68599 = null;
var G__68600 = (0);
var G__68601 = (0);
seq__67363_68581 = G__68598;
chunk__67364_68582 = G__68599;
count__67365_68583 = G__68600;
i__67366_68584 = G__68601;
continue;
}
} else {
}
}
break;
}

return cljs.compiler._emitln();
}));

/** @this {Function} */
(cljs.compiler.emitln.cljs$lang$applyTo = (function (seq67341){
var G__67342 = cljs.core.first(seq67341);
var seq67341__$1 = cljs.core.next(seq67341);
var G__67343 = cljs.core.first(seq67341__$1);
var seq67341__$2 = cljs.core.next(seq67341__$1);
var G__67344 = cljs.core.first(seq67341__$2);
var seq67341__$3 = cljs.core.next(seq67341__$2);
var G__67345 = cljs.core.first(seq67341__$3);
var seq67341__$4 = cljs.core.next(seq67341__$3);
var G__67346 = cljs.core.first(seq67341__$4);
var seq67341__$5 = cljs.core.next(seq67341__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67342,G__67343,G__67344,G__67345,G__67346,seq67341__$5);
}));

(cljs.compiler.emitln.cljs$lang$maxFixedArity = (5));

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__67376_68602 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__67377_68603 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__67378_68604 = true;
var _STAR_print_fn_STAR__temp_val__67379_68605 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__67378_68604);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__67379_68605);

try{cljs.compiler.emit(expr);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__67377_68603);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__67376_68602);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_constant_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_constant_STAR_ = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__67383 = cljs.core.get_global_hierarchy;
return (fexpr__67383.cljs$core$IFn$_invoke$arity$0 ? fexpr__67383.cljs$core$IFn$_invoke$arity$0() : fexpr__67383.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit-constant*"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}









cljs.compiler.all_distinct_QMARK_ = (function cljs$compiler$all_distinct_QMARK_(xs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,xs);
});
cljs.compiler.emit_constant_no_meta = (function cljs$compiler$emit_constant_no_meta(x){
if(cljs.analyzer.cljs_seq_QMARK_(x)){
return (cljs.compiler.emit_list.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_list.cljs$core$IFn$_invoke$arity$2(x,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_list.call(null,x,cljs.compiler.emit_constants_comma_sep));
} else {
if(cljs.core.record_QMARK_(x)){
var vec__67388 = cljs.analyzer.record_ns_PLUS_name(x);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67388,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67388,(1),null);
var G__67391 = ns;
var G__67392 = name;
var G__67393 = (function (){
var G__67394 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,x);
return (cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__67394) : cljs.compiler.emit_constant.call(null,G__67394));
});
return (cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3 ? cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3(G__67391,G__67392,G__67393) : cljs.compiler.emit_record_value.call(null,G__67391,G__67392,G__67393));
} else {
if(cljs.analyzer.cljs_map_QMARK_(x)){
var G__67395 = cljs.core.keys(x);
var G__67396 = cljs.core.vals(x);
var G__67397 = cljs.compiler.emit_constants_comma_sep;
var G__67398 = cljs.compiler.all_distinct_QMARK_;
return (cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4 ? cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4(G__67395,G__67396,G__67397,G__67398) : cljs.compiler.emit_map.call(null,G__67395,G__67396,G__67397,G__67398));
} else {
if(cljs.analyzer.cljs_vector_QMARK_(x)){
return (cljs.compiler.emit_vector.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_vector.cljs$core$IFn$_invoke$arity$2(x,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_vector.call(null,x,cljs.compiler.emit_constants_comma_sep));
} else {
if(cljs.analyzer.cljs_set_QMARK_(x)){
return (cljs.compiler.emit_set.cljs$core$IFn$_invoke$arity$3 ? cljs.compiler.emit_set.cljs$core$IFn$_invoke$arity$3(x,cljs.compiler.emit_constants_comma_sep,cljs.compiler.all_distinct_QMARK_) : cljs.compiler.emit_set.call(null,x,cljs.compiler.emit_constants_comma_sep,cljs.compiler.all_distinct_QMARK_));
} else {
return cljs.compiler.emit_constant_STAR_.cljs$core$IFn$_invoke$arity$1(x);

}
}
}
}
}
});
cljs.compiler.emit_constant = (function cljs$compiler$emit_constant(v){
var m = cljs.analyzer.elide_irrelevant_meta(cljs.core.meta(v));
if((!((cljs.core.seq(m) == null)))){
var G__67400 = (function (){
return cljs.compiler.emit_constant_no_meta(v);
});
var G__67401 = (function (){
return cljs.compiler.emit_constant_no_meta(m);
});
return (cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2(G__67400,G__67401) : cljs.compiler.emit_with_meta.call(null,G__67400,G__67401));
} else {
return cljs.compiler.emit_constant_no_meta(v);
}
});
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["failed compiling constant: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"; ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(x)], 0))," is not a valid ClojureScript constant."].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"constant","constant",-379609303),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(x),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,null,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("null");
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,Number,(function (x){
if(cljs.core.truth_(isNaN(x))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("NaN");
} else {
if(cljs.core.not(isFinite(x))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1((((x > (0)))?"Infinity":"-Infinity"));
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(",x,")");

}
}
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,String,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.compiler.wrap_in_double_quotes(cljs.compiler.escape_string(x)));
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,Boolean,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(x)?"true":"false"));
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,RegExp,(function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(new RegExp(\"\"))");
} else {
var vec__67403 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67403,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67403,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67403,(2),null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(pattern);
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace(kw);
var name = cljs.core.name(kw);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("new cljs.core.Keyword(");

cljs.compiler.emit_constant(ns);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(name);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant((cljs.core.truth_(ns)?[ns,"/",name].join(''):name));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(cljs.core.hash(kw));

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(")");
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace(sym);
var name = cljs.core.name(sym);
var symstr = (((!((ns == null))))?[ns,"/",name].join(''):name);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("new cljs.core.Symbol(");

cljs.compiler.emit_constant(ns);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(name);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(symstr);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(cljs.core.hash(sym));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(null);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(")");
});
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Keyword,(function (x){
var temp__5751__auto__ = (function (){var and__4115__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__4115__auto__)){
var G__67415 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__67415) : x.call(null,G__67415));
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var value = temp__5751__auto__;
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2("cljs.core.",value);
} else {
return cljs.compiler.emits_keyword(x);
}
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Symbol,(function (x){
var temp__5751__auto__ = (function (){var and__4115__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__4115__auto__)){
var G__67420 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__67420) : x.call(null,G__67420));
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var value = temp__5751__auto__;
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2("cljs.core.",value);
} else {
return cljs.compiler.emits_symbol(x);
}
}));
cljs.compiler.emit_constants_comma_sep = (function cljs$compiler$emit_constants_comma_sep(cs){
return (function (){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,m){
if(cljs.core.even_QMARK_(i)){
return cljs.compiler.emit_constant(m);
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(m);
}
}),cljs.compiler.comma_sep(cs)));
});
});
cljs.compiler.array_map_threshold = (8);
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,Date,(function (date){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("new Date(",date.getTime(),")");
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash(uuid_str),")");
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.tagged_literals.JSValue,(function (v){
var items = v.val;
if(cljs.core.map_QMARK_(items)){
var G__67427 = items;
var G__67428 = (function (p1__67426_SHARP_){
return (function (){
return cljs.compiler.emit_constant(p1__67426_SHARP_);
});
});
return (cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2(G__67427,G__67428) : cljs.compiler.emit_js_object.call(null,G__67427,G__67428));
} else {
return (cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2(items,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_js_array.call(null,items,cljs.compiler.emit_constants_comma_sep));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__67430){
var map__67431 = p__67430;
var map__67431__$1 = (((((!((map__67431 == null))))?(((((map__67431.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67431.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67431):map__67431);
var ast = map__67431__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67431__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67431__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67431__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5751__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5751__auto__)){
var const_expr = temp__5751__auto__;
return cljs.compiler.emit(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__67433 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__67433__$1 = (((((!((map__67433 == null))))?(((((map__67433.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67433.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67433):map__67433);
var cenv = map__67433__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67433__$1,new cljs.core.Keyword(null,"options","options",99638489));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name(var_name),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var or__4126__auto__ = js_module_name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.name(var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ast));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var reserved = (function (){var G__67435 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4115__auto__ = (function (){var G__67439 = new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options);
return (cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1(G__67439) : cljs.compiler.es5_GT__EQ_.call(null,G__67439));
})();
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.namespace(var_name) == null)));
} else {
return and__4115__auto__;
}
})())){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(G__67435,cljs.analyzer.es5_allowed);
} else {
return G__67435;
}
})();
var js_module = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4126__auto__ = cljs.core.namespace(var_name);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.name(var_name);
}
})()], null));
var info__$2 = (function (){var G__67440 = info__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(G__67440,reserved);
} else {
return G__67440;
}
})();
var env__57424__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__57424__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var G__67441_68631 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__67441_68632__$1 = (((G__67441_68631 instanceof cljs.core.Keyword))?G__67441_68631.fqn:null);
switch (G__67441_68632__$1) {
case "commonjs":
if(cljs.core.truth_(cljs.core.namespace(var_name))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),reserved),"[\"default\"].",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.name(var_name),reserved));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.name(var_name),reserved),"[\"default\"]");
}

break;
case "es6":
if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.namespace(var_name);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("default",cljs.core.name(var_name));
} else {
return and__4115__auto__;
}
})())){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),reserved),"[\"default\"]");
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(info__$2);
}

break;
default:
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(info__$2);

}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__57424__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"var","var",-769682797),(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"binding","binding",539932593),(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"local","local",-1497766724),(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__67442){
var map__67443 = p__67442;
var map__67443__$1 = (((((!((map__67443 == null))))?(((((map__67443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67443.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67443):map__67443);
var arg = map__67443__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67443__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67443__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67443__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67443__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_(sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_(meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__67448 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__67448__$1 = (((((!((map__67448 == null))))?(((((map__67448.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67448.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67448):map__67448);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67448__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__57424__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__57424__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("new cljs.core.Var(function(){return ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),";},",sym,",",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__57424__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.with_meta(",expr,",",meta,")");
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__67451){
var map__67452 = p__67451;
var map__67452__$1 = (((((!((map__67452 == null))))?(((((map__67452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67452.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67452):map__67452);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67452__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67452__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67452__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__57424__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__57424__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_with_meta(expr,meta);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__57424__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_((function (p1__67454_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__67454_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),keys__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys__$1)),cljs.core.count(keys__$1))));
});
cljs.compiler.emit_map = (function cljs$compiler$emit_map(keys,vals,comma_sep,distinct_keys_QMARK_){
if((cljs.core.count(keys) === (0))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count(keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_((distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1(keys) : distinct_keys_QMARK_.call(null,keys)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentArrayMap(null, ",cljs.core.count(keys),", [",(function (){var G__67467 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__67467) : comma_sep.call(null,G__67467));
})(),"], null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentArrayMap.createAsIfByAssoc([",(function (){var G__67468 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__67468) : comma_sep.call(null,G__67468));
})(),"])");
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.PersistentHashMap.fromArrays([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(keys) : comma_sep.call(null,keys)),"],[",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(vals) : comma_sep.call(null,vals)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__67469){
var map__67470 = p__67469;
var map__67470__$1 = (((((!((map__67470 == null))))?(((((map__67470.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67470.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67470):map__67470);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67470__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67470__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67470__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__57424__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__57424__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_map(keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__57424__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_list = (function cljs$compiler$emit_list(items,comma_sep){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.List.EMPTY");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.list(",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),")");
}
});
cljs.compiler.emit_vector = (function cljs$compiler$emit_vector(items,comma_sep){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentVector.EMPTY");
} else {
var cnt = cljs.core.count(items);
if((cnt < (32))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentVector(null, ",cnt,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"], null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentVector.fromArray([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"], true)");
}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__67482){
var map__67483 = p__67482;
var map__67483__$1 = (((((!((map__67483 == null))))?(((((map__67483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67483.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67483):map__67483);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67483__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67483__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__57424__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__57424__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_vector(items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__57424__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_((function (p1__67487_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__67487_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),items__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,items__$1)),cljs.core.count(items__$1))));
});
cljs.compiler.emit_set = (function cljs$compiler$emit_set(items,comma_sep,distinct_constants_QMARK_){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_((distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1(items) : distinct_constants_QMARK_.call(null,items)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count(items),", [",(function (){var G__67503 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(items,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("null"));
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__67503) : comma_sep.call(null,G__67503));
})(),"], null), null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentHashSet.createAsIfByAssoc([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set","set",304602554),(function (p__67508){
var map__67509 = p__67508;
var map__67509__$1 = (((((!((map__67509 == null))))?(((((map__67509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67509.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67509):map__67509);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67509__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67509__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__57424__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__57424__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_set(items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__57424__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("({");

var temp__5753__auto___68653 = cljs.core.seq(items);
if(temp__5753__auto___68653){
var items_68654__$1 = temp__5753__auto___68653;
var vec__67511_68655 = items_68654__$1;
var seq__67512_68656 = cljs.core.seq(vec__67511_68655);
var first__67513_68657 = cljs.core.first(seq__67512_68656);
var seq__67512_68658__$1 = cljs.core.next(seq__67512_68656);
var vec__67514_68659 = first__67513_68657;
var k_68660 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67514_68659,(0),null);
var v_68661 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67514_68659,(1),null);
var r_68662 = seq__67512_68658__$1;
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4("\"",cljs.core.name(k_68660),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_68661) : emit_js_object_val.call(null,v_68661)));

var seq__67521_68664 = cljs.core.seq(r_68662);
var chunk__67522_68665 = null;
var count__67523_68666 = (0);
var i__67524_68667 = (0);
while(true){
if((i__67524_68667 < count__67523_68666)){
var vec__67531_68668 = chunk__67522_68665.cljs$core$IIndexed$_nth$arity$2(null,i__67524_68667);
var k_68670__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67531_68668,(0),null);
var v_68672__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67531_68668,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_68670__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_68672__$1) : emit_js_object_val.call(null,v_68672__$1)));


var G__68677 = seq__67521_68664;
var G__68678 = chunk__67522_68665;
var G__68679 = count__67523_68666;
var G__68680 = (i__67524_68667 + (1));
seq__67521_68664 = G__68677;
chunk__67522_68665 = G__68678;
count__67523_68666 = G__68679;
i__67524_68667 = G__68680;
continue;
} else {
var temp__5753__auto___68681__$1 = cljs.core.seq(seq__67521_68664);
if(temp__5753__auto___68681__$1){
var seq__67521_68682__$1 = temp__5753__auto___68681__$1;
if(cljs.core.chunked_seq_QMARK_(seq__67521_68682__$1)){
var c__4556__auto___68684 = cljs.core.chunk_first(seq__67521_68682__$1);
var G__68685 = cljs.core.chunk_rest(seq__67521_68682__$1);
var G__68686 = c__4556__auto___68684;
var G__68687 = cljs.core.count(c__4556__auto___68684);
var G__68688 = (0);
seq__67521_68664 = G__68685;
chunk__67522_68665 = G__68686;
count__67523_68666 = G__68687;
i__67524_68667 = G__68688;
continue;
} else {
var vec__67534_68689 = cljs.core.first(seq__67521_68682__$1);
var k_68690__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67534_68689,(0),null);
var v_68691__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67534_68689,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_68690__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_68691__$1) : emit_js_object_val.call(null,v_68691__$1)));


var G__68692 = cljs.core.next(seq__67521_68682__$1);
var G__68693 = null;
var G__68694 = (0);
var G__68695 = (0);
seq__67521_68664 = G__68692;
chunk__67522_68665 = G__68693;
count__67523_68666 = G__68694;
i__67524_68667 = G__68695;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})");
});
cljs.compiler.emit_js_array = (function cljs$compiler$emit_js_array(items,comma_sep){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("[",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"]");
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__67541){
var map__67542 = p__67541;
var map__67542__$1 = (((((!((map__67542 == null))))?(((((map__67542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67542.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67542):map__67542);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67542__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67542__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67542__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__57424__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__57424__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_js_object(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__57424__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__67547){
var map__67548 = p__67547;
var map__67548__$1 = (((((!((map__67548 == null))))?(((((map__67548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67548):map__67548);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67548__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67548__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__57424__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__57424__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_js_array(items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__57424__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(ns,".map__GT_",name,"(",items,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__67554){
var map__67555 = p__67554;
var map__67555__$1 = (((((!((map__67555 == null))))?(((((map__67555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67555):map__67555);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67555__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__67557){
var map__67558 = p__67557;
var map__67558__$1 = (((((!((map__67558 == null))))?(((((map__67558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67558.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67558):map__67558);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67558__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67558__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__57424__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__57424__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_constant(form);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__57424__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__67564 = cljs.analyzer.unwrap_quote(expr);
var map__67564__$1 = (((((!((map__67564 == null))))?(((((map__67564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67564.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67564):map__67564);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67564__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67564__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67564__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__4126__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"const","const",1709929842)))?(function (){var and__4115__auto__ = form;
if(cljs.core.truth_(and__4115__auto__)){
return (!(((((typeof form === 'string') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,"")))) || (((typeof form === 'number') && ((form === (0))))))));
} else {
return and__4115__auto__;
}
})():false);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if((!((const_expr == null)))){
return (cljs.compiler.truthy_constant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.truthy_constant_QMARK_.cljs$core$IFn$_invoke$arity$1(const_expr) : cljs.compiler.truthy_constant_QMARK_.call(null,const_expr));
} else {
return false;
}
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(expr){
var map__67566 = cljs.analyzer.unwrap_quote(expr);
var map__67566__$1 = (((((!((map__67566 == null))))?(((((map__67566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67566.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67566):map__67566);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67566__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67566__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67566__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__4126__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"const","const",1709929842))) && (((form === false) || ((form == null)))));
if(or__4126__auto__){
return or__4126__auto__;
} else {
if((!((const_expr == null)))){
return (cljs.compiler.falsey_constant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.falsey_constant_QMARK_.cljs$core$IFn$_invoke$arity$1(const_expr) : cljs.compiler.falsey_constant_QMARK_.call(null,const_expr));
} else {
return false;
}
}
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag(env,e);
var or__4126__auto__ = (function (){var fexpr__67569 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null);
return (fexpr__67569.cljs$core$IFn$_invoke$arity$1 ? fexpr__67569.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__67569.call(null,tag));
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_(e);
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__67575){
var map__67576 = p__67575;
var map__67576__$1 = (((((!((map__67576 == null))))?(((((map__67576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67576.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67576):map__67576);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67576__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67576__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67576__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67576__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67576__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not((function (){var or__4126__auto__ = unchecked;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.compiler.safe_test_QMARK_(env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_(test))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then);
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_(test))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(else$);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",((checked)?"cljs.core.truth_":null),"(",test,")?",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([then,":",else$,")"], 0));
} else {
if(checked){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(cljs.core.truth_(",test,")){");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(",test,"){");
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(then,"} else {");

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(else$,"}");
}

}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__67578){
var map__67579 = p__67578;
var map__67579__$1 = (((((!((map__67579 == null))))?(((((map__67579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67579.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67579):map__67579);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67579__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67579__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67579__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67579__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function(){");
} else {
}

var gs = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("caseval__");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",gs,";");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("switch (",v,") {");

var seq__67581_68709 = cljs.core.seq(nodes);
var chunk__67582_68710 = null;
var count__67583_68711 = (0);
var i__67584_68712 = (0);
while(true){
if((i__67584_68712 < count__67583_68711)){
var map__67605_68715 = chunk__67582_68710.cljs$core$IIndexed$_nth$arity$2(null,i__67584_68712);
var map__67605_68716__$1 = (((((!((map__67605_68715 == null))))?(((((map__67605_68715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67605_68715.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67605_68715):map__67605_68715);
var ts_68717 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67605_68716__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__67606_68718 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67605_68716__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__67606_68719__$1 = (((((!((map__67606_68718 == null))))?(((((map__67606_68718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67606_68718.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67606_68718):map__67606_68718);
var then_68720 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67606_68719__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__67609_68721 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_68717));
var chunk__67610_68722 = null;
var count__67611_68723 = (0);
var i__67612_68724 = (0);
while(true){
if((i__67612_68724 < count__67611_68723)){
var test_68728 = chunk__67610_68722.cljs$core$IIndexed$_nth$arity$2(null,i__67612_68724);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_68728,":");


var G__68730 = seq__67609_68721;
var G__68731 = chunk__67610_68722;
var G__68732 = count__67611_68723;
var G__68733 = (i__67612_68724 + (1));
seq__67609_68721 = G__68730;
chunk__67610_68722 = G__68731;
count__67611_68723 = G__68732;
i__67612_68724 = G__68733;
continue;
} else {
var temp__5753__auto___68735 = cljs.core.seq(seq__67609_68721);
if(temp__5753__auto___68735){
var seq__67609_68736__$1 = temp__5753__auto___68735;
if(cljs.core.chunked_seq_QMARK_(seq__67609_68736__$1)){
var c__4556__auto___68737 = cljs.core.chunk_first(seq__67609_68736__$1);
var G__68738 = cljs.core.chunk_rest(seq__67609_68736__$1);
var G__68739 = c__4556__auto___68737;
var G__68740 = cljs.core.count(c__4556__auto___68737);
var G__68741 = (0);
seq__67609_68721 = G__68738;
chunk__67610_68722 = G__68739;
count__67611_68723 = G__68740;
i__67612_68724 = G__68741;
continue;
} else {
var test_68742 = cljs.core.first(seq__67609_68736__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_68742,":");


var G__68743 = cljs.core.next(seq__67609_68736__$1);
var G__68744 = null;
var G__68745 = (0);
var G__68746 = (0);
seq__67609_68721 = G__68743;
chunk__67610_68722 = G__68744;
count__67611_68723 = G__68745;
i__67612_68724 = G__68746;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_68720);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_68720);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__68749 = seq__67581_68709;
var G__68750 = chunk__67582_68710;
var G__68751 = count__67583_68711;
var G__68752 = (i__67584_68712 + (1));
seq__67581_68709 = G__68749;
chunk__67582_68710 = G__68750;
count__67583_68711 = G__68751;
i__67584_68712 = G__68752;
continue;
} else {
var temp__5753__auto___68753 = cljs.core.seq(seq__67581_68709);
if(temp__5753__auto___68753){
var seq__67581_68754__$1 = temp__5753__auto___68753;
if(cljs.core.chunked_seq_QMARK_(seq__67581_68754__$1)){
var c__4556__auto___68755 = cljs.core.chunk_first(seq__67581_68754__$1);
var G__68756 = cljs.core.chunk_rest(seq__67581_68754__$1);
var G__68757 = c__4556__auto___68755;
var G__68758 = cljs.core.count(c__4556__auto___68755);
var G__68759 = (0);
seq__67581_68709 = G__68756;
chunk__67582_68710 = G__68757;
count__67583_68711 = G__68758;
i__67584_68712 = G__68759;
continue;
} else {
var map__67623_68760 = cljs.core.first(seq__67581_68754__$1);
var map__67623_68761__$1 = (((((!((map__67623_68760 == null))))?(((((map__67623_68760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67623_68760.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67623_68760):map__67623_68760);
var ts_68762 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67623_68761__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__67624_68763 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67623_68761__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__67624_68764__$1 = (((((!((map__67624_68763 == null))))?(((((map__67624_68763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67624_68763.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67624_68763):map__67624_68763);
var then_68765 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67624_68764__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__67634_68767 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_68762));
var chunk__67635_68768 = null;
var count__67636_68769 = (0);
var i__67637_68770 = (0);
while(true){
if((i__67637_68770 < count__67636_68769)){
var test_68772 = chunk__67635_68768.cljs$core$IIndexed$_nth$arity$2(null,i__67637_68770);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_68772,":");


var G__68773 = seq__67634_68767;
var G__68774 = chunk__67635_68768;
var G__68775 = count__67636_68769;
var G__68776 = (i__67637_68770 + (1));
seq__67634_68767 = G__68773;
chunk__67635_68768 = G__68774;
count__67636_68769 = G__68775;
i__67637_68770 = G__68776;
continue;
} else {
var temp__5753__auto___68780__$1 = cljs.core.seq(seq__67634_68767);
if(temp__5753__auto___68780__$1){
var seq__67634_68784__$1 = temp__5753__auto___68780__$1;
if(cljs.core.chunked_seq_QMARK_(seq__67634_68784__$1)){
var c__4556__auto___68785 = cljs.core.chunk_first(seq__67634_68784__$1);
var G__68786 = cljs.core.chunk_rest(seq__67634_68784__$1);
var G__68787 = c__4556__auto___68785;
var G__68788 = cljs.core.count(c__4556__auto___68785);
var G__68789 = (0);
seq__67634_68767 = G__68786;
chunk__67635_68768 = G__68787;
count__67636_68769 = G__68788;
i__67637_68770 = G__68789;
continue;
} else {
var test_68791 = cljs.core.first(seq__67634_68784__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_68791,":");


var G__68792 = cljs.core.next(seq__67634_68784__$1);
var G__68793 = null;
var G__68794 = (0);
var G__68795 = (0);
seq__67634_68767 = G__68792;
chunk__67635_68768 = G__68793;
count__67636_68769 = G__68794;
i__67637_68770 = G__68795;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_68765);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_68765);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__68797 = cljs.core.next(seq__67581_68754__$1);
var G__68798 = null;
var G__68799 = (0);
var G__68800 = (0);
seq__67581_68709 = G__68797;
chunk__67582_68710 = G__68798;
count__67583_68711 = G__68799;
i__67584_68712 = G__68800;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",default$);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(default$);
}
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",gs,";})()");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__67655){
var map__67658 = p__67655;
var map__67658__$1 = (((((!((map__67658 == null))))?(((((map__67658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67658.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67658):map__67658);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67658__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67658__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(function(){throw ",throw$,"})()");
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("throw ",throw$,";");
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.mapped_types,t))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.mapped_types,t);
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"!"))){
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__67670 = env;
var G__67671 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(t,(1));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__67670,G__67671) : cljs.compiler.resolve_type.call(null,G__67670,G__67671));
})())].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__67672 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),idx),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(idx + (1)),cljs.core.count(t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67672,(0),null);
var rstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67672,(1),null);
var ret_t = (cljs.core.truth_(rstr)?(cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,rstr) : cljs.compiler.resolve_type.call(null,env,rstr)):null);
var axstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fstr,(9),(cljs.core.count(fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_(axstr))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__67665_SHARP_){
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,p1__67665_SHARP_) : cljs.compiler.resolve_type.call(null,env,p1__67665_SHARP_));
}),clojure.string.trim),clojure.string.split.cljs$core$IFn$_invoke$arity$2(axstr,/,/)));
var G__67679 = ["function(",clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",args_ts),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__67679,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__67679;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__67688 = env;
var G__67689 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),(cljs.core.count(t) - (1)));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__67688,G__67689) : cljs.compiler.resolve_type.call(null,G__67688,G__67689));
})()),"="].join('');
} else {
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(t)))));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(clojure.string.trim(ts),(1),(cljs.core.count(ts) - (1)));
var xs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(ts__$1,/\|/);
return ["{",clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__67694_SHARP_){
return cljs.compiler.resolve_type(env,p1__67694_SHARP_);
}),xs)),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find(/@param/,line))){
var vec__67696 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__67697 = cljs.core.seq(vec__67696);
var first__67698 = cljs.core.first(seq__67697);
var seq__67697__$1 = cljs.core.next(seq__67697);
var p = first__67698;
var first__67698__$1 = cljs.core.first(seq__67697__$1);
var seq__67697__$2 = cljs.core.next(seq__67697__$1);
var ts = first__67698__$1;
var first__67698__$2 = cljs.core.first(seq__67697__$2);
var seq__67697__$3 = cljs.core.next(seq__67697__$2);
var n = first__67698__$2;
var xs = seq__67697__$3;
if(cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@param",p))?(function (){var and__4115__auto__ = ts;
if(cljs.core.truth_(and__4115__auto__)){
return goog.string.startsWith(ts,"{");
} else {
return and__4115__auto__;
}
})():false))){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types(env,ts),cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find(/@return/,line))){
var vec__67704 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__67705 = cljs.core.seq(vec__67704);
var first__67706 = cljs.core.first(seq__67705);
var seq__67705__$1 = cljs.core.next(seq__67705);
var p = first__67706;
var first__67706__$1 = cljs.core.first(seq__67705__$1);
var seq__67705__$2 = cljs.core.next(seq__67705__$1);
var ts = first__67706__$1;
var xs = seq__67705__$2;
if(cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@return",p))?(function (){var and__4115__auto__ = ts;
if(cljs.core.truth_(and__4115__auto__)){
return goog.string.startsWith(ts,"{");
} else {
return and__4115__auto__;
}
})():false))){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types(env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
var G__67713 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null));
var fexpr__67712 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null);
return (fexpr__67712.cljs$core$IFn$_invoke$arity$1 ? fexpr__67712.cljs$core$IFn$_invoke$arity$1(G__67713) : fexpr__67712.call(null,G__67713));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__67720 = arguments.length;
switch (G__67720) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3(null,doc,jsdoc);
}));

(cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = (function cljs$compiler$print_comment_lines(e){
var vec__67739 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__67715_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())){
return cljs.compiler.munge_param_return(env,p1__67715_SHARP_);
} else {
return p1__67715_SHARP_;
}
}),clojure.string.split_lines(e));
var seq__67740 = cljs.core.seq(vec__67739);
var first__67741 = cljs.core.first(seq__67740);
var seq__67740__$1 = cljs.core.next(seq__67740);
var x = first__67741;
var ys = seq__67740__$1;
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(x,"*/","* /"));

var seq__67743 = cljs.core.seq(ys);
var chunk__67744 = null;
var count__67745 = (0);
var i__67746 = (0);
while(true){
if((i__67746 < count__67745)){
var next_line = chunk__67744.cljs$core$IIndexed$_nth$arity$2(null,i__67746);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__68809 = seq__67743;
var G__68810 = chunk__67744;
var G__68811 = count__67745;
var G__68812 = (i__67746 + (1));
seq__67743 = G__68809;
chunk__67744 = G__68810;
count__67745 = G__68811;
i__67746 = G__68812;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__67743);
if(temp__5753__auto__){
var seq__67743__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67743__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__67743__$1);
var G__68813 = cljs.core.chunk_rest(seq__67743__$1);
var G__68814 = c__4556__auto__;
var G__68815 = cljs.core.count(c__4556__auto__);
var G__68816 = (0);
seq__67743 = G__68813;
chunk__67744 = G__68814;
count__67745 = G__68815;
i__67746 = G__68816;
continue;
} else {
var next_line = cljs.core.first(seq__67743__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__68817 = cljs.core.next(seq__67743__$1);
var G__68818 = null;
var G__68819 = (0);
var G__68820 = (0);
seq__67743 = G__68817;
chunk__67744 = G__68818;
count__67745 = G__68819;
i__67746 = G__68820;
continue;
}
} else {
return null;
}
}
break;
}
});
if(cljs.core.seq(docs__$2)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

var seq__67751_68821 = cljs.core.seq(docs__$2);
var chunk__67752_68822 = null;
var count__67753_68823 = (0);
var i__67754_68824 = (0);
while(true){
if((i__67754_68824 < count__67753_68823)){
var e_68825 = chunk__67752_68822.cljs$core$IIndexed$_nth$arity$2(null,i__67754_68824);
if(cljs.core.truth_(e_68825)){
print_comment_lines(e_68825);
} else {
}


var G__68826 = seq__67751_68821;
var G__68827 = chunk__67752_68822;
var G__68828 = count__67753_68823;
var G__68829 = (i__67754_68824 + (1));
seq__67751_68821 = G__68826;
chunk__67752_68822 = G__68827;
count__67753_68823 = G__68828;
i__67754_68824 = G__68829;
continue;
} else {
var temp__5753__auto___68830 = cljs.core.seq(seq__67751_68821);
if(temp__5753__auto___68830){
var seq__67751_68831__$1 = temp__5753__auto___68830;
if(cljs.core.chunked_seq_QMARK_(seq__67751_68831__$1)){
var c__4556__auto___68832 = cljs.core.chunk_first(seq__67751_68831__$1);
var G__68834 = cljs.core.chunk_rest(seq__67751_68831__$1);
var G__68835 = c__4556__auto___68832;
var G__68836 = cljs.core.count(c__4556__auto___68832);
var G__68837 = (0);
seq__67751_68821 = G__68834;
chunk__67752_68822 = G__68835;
count__67753_68823 = G__68836;
i__67754_68824 = G__68837;
continue;
} else {
var e_68838 = cljs.core.first(seq__67751_68831__$1);
if(cljs.core.truth_(e_68838)){
print_comment_lines(e_68838);
} else {
}


var G__68839 = cljs.core.next(seq__67751_68831__$1);
var G__68840 = null;
var G__68841 = (0);
var G__68842 = (0);
seq__67751_68821 = G__68839;
chunk__67752_68822 = G__68840;
count__67753_68823 = G__68841;
i__67754_68824 = G__68842;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" */");
} else {
return null;
}
}));

(cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3);

cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return ((typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number'));
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__4115__auto__ = cljs.core.some((function (p1__67761_SHARP_){
return goog.string.startsWith(p1__67761_SHARP_,"@define");
}),jsdoc);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = opts;
if(cljs.core.truth_(and__4115__auto____$1)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478))){
var define = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)], null));
if(cljs.compiler.valid_define_value_QMARK_(define)){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([define], 0));
} else {
return null;
}
} else {
return false;
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__67765){
var map__67766 = p__67765;
var map__67766__$1 = (((((!((map__67766 == null))))?(((((map__67766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67766):map__67766);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67766__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67766__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67766__$1,new cljs.core.Keyword(null,"test","test",577538877));
var goog_define = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67766__$1,new cljs.core.Keyword(null,"goog-define","goog-define",-1048305441));
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67766__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67766__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67766__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67766__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67766__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67766__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__4126__auto__ = init;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name);
cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3(env,doc,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_(goog_define)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["@define {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog_define),"}"].join('')], null):null),jsdoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)], 0)));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("return (");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(var$);

if(cljs.core.truth_(init)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(" = ",(function (){var temp__5751__auto__ = cljs.compiler.get_define(mname,jsdoc);
if(cljs.core.truth_(temp__5751__auto__)){
var define = temp__5751__auto__;
return define;
} else {
return init;
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("; return (");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"the-var","the-var",1428415613),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast], 0)));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(");})()");
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(")");
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("goog.exportSymbol('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(export$),"', ",mname,");");
} else {
}

if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
return test;
} else {
return and__4115__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
} else {
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(var$,".cljs$lang$test = ",test,";");
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__67776){
var map__67777 = p__67776;
var map__67777__$1 = (((((!((map__67777 == null))))?(((((map__67777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67777.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67777):map__67777);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67777__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67777__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67777__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name)),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("(function (",arglist,"){");

var seq__67783_68847 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),params)));
var chunk__67784_68848 = null;
var count__67785_68849 = (0);
var i__67786_68850 = (0);
while(true){
if((i__67786_68850 < count__67785_68849)){
var vec__67796_68851 = chunk__67784_68848.cljs$core$IIndexed$_nth$arity$2(null,i__67786_68850);
var i_68852 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67796_68851,(0),null);
var param_68853 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67796_68851,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_68853);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__68854 = seq__67783_68847;
var G__68855 = chunk__67784_68848;
var G__68856 = count__67785_68849;
var G__68857 = (i__67786_68850 + (1));
seq__67783_68847 = G__68854;
chunk__67784_68848 = G__68855;
count__67785_68849 = G__68856;
i__67786_68850 = G__68857;
continue;
} else {
var temp__5753__auto___68858 = cljs.core.seq(seq__67783_68847);
if(temp__5753__auto___68858){
var seq__67783_68859__$1 = temp__5753__auto___68858;
if(cljs.core.chunked_seq_QMARK_(seq__67783_68859__$1)){
var c__4556__auto___68860 = cljs.core.chunk_first(seq__67783_68859__$1);
var G__68861 = cljs.core.chunk_rest(seq__67783_68859__$1);
var G__68862 = c__4556__auto___68860;
var G__68863 = cljs.core.count(c__4556__auto___68860);
var G__68864 = (0);
seq__67783_68847 = G__68861;
chunk__67784_68848 = G__68862;
count__67785_68849 = G__68863;
i__67786_68850 = G__68864;
continue;
} else {
var vec__67800_68865 = cljs.core.first(seq__67783_68859__$1);
var i_68866 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67800_68865,(0),null);
var param_68867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67800_68865,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_68867);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__68868 = cljs.core.next(seq__67783_68859__$1);
var G__68869 = null;
var G__68870 = (0);
var G__68871 = (0);
seq__67783_68847 = G__68868;
chunk__67784_68848 = G__68869;
count__67785_68849 = G__68870;
i__67786_68850 = G__68871;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count(params))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(cljs.core.butlast(params)));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = cljs.core.first(",arglist,");");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = cljs.core.rest(",arglist,");");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name,"(");

var seq__67803_68872 = cljs.core.seq(params);
var chunk__67804_68873 = null;
var count__67805_68874 = (0);
var i__67806_68875 = (0);
while(true){
if((i__67806_68875 < count__67805_68874)){
var param_68876 = chunk__67804_68873.cljs$core$IIndexed$_nth$arity$2(null,i__67806_68875);
cljs.compiler.emit(param_68876);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_68876,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__68878 = seq__67803_68872;
var G__68879 = chunk__67804_68873;
var G__68880 = count__67805_68874;
var G__68881 = (i__67806_68875 + (1));
seq__67803_68872 = G__68878;
chunk__67804_68873 = G__68879;
count__67805_68874 = G__68880;
i__67806_68875 = G__68881;
continue;
} else {
var temp__5753__auto___68882 = cljs.core.seq(seq__67803_68872);
if(temp__5753__auto___68882){
var seq__67803_68883__$1 = temp__5753__auto___68882;
if(cljs.core.chunked_seq_QMARK_(seq__67803_68883__$1)){
var c__4556__auto___68884 = cljs.core.chunk_first(seq__67803_68883__$1);
var G__68885 = cljs.core.chunk_rest(seq__67803_68883__$1);
var G__68886 = c__4556__auto___68884;
var G__68887 = cljs.core.count(c__4556__auto___68884);
var G__68888 = (0);
seq__67803_68872 = G__68885;
chunk__67804_68873 = G__68886;
count__67805_68874 = G__68887;
i__67806_68875 = G__68888;
continue;
} else {
var param_68890 = cljs.core.first(seq__67803_68883__$1);
cljs.compiler.emit(param_68890);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_68890,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__68892 = cljs.core.next(seq__67803_68883__$1);
var G__68893 = null;
var G__68894 = (0);
var G__68895 = (0);
seq__67803_68872 = G__68892;
chunk__67804_68873 = G__68893;
count__67805_68874 = G__68894;
i__67806_68875 = G__68895;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(");");
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = cljs.core.seq(",arglist,");");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name,"(");

var seq__67814_68896 = cljs.core.seq(params);
var chunk__67815_68897 = null;
var count__67816_68898 = (0);
var i__67817_68899 = (0);
while(true){
if((i__67817_68899 < count__67816_68898)){
var param_68900 = chunk__67815_68897.cljs$core$IIndexed$_nth$arity$2(null,i__67817_68899);
cljs.compiler.emit(param_68900);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_68900,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__68902 = seq__67814_68896;
var G__68903 = chunk__67815_68897;
var G__68904 = count__67816_68898;
var G__68905 = (i__67817_68899 + (1));
seq__67814_68896 = G__68902;
chunk__67815_68897 = G__68903;
count__67816_68898 = G__68904;
i__67817_68899 = G__68905;
continue;
} else {
var temp__5753__auto___68906 = cljs.core.seq(seq__67814_68896);
if(temp__5753__auto___68906){
var seq__67814_68907__$1 = temp__5753__auto___68906;
if(cljs.core.chunked_seq_QMARK_(seq__67814_68907__$1)){
var c__4556__auto___68908 = cljs.core.chunk_first(seq__67814_68907__$1);
var G__68909 = cljs.core.chunk_rest(seq__67814_68907__$1);
var G__68910 = c__4556__auto___68908;
var G__68911 = cljs.core.count(c__4556__auto___68908);
var G__68912 = (0);
seq__67814_68896 = G__68909;
chunk__67815_68897 = G__68910;
count__67816_68898 = G__68911;
i__67817_68899 = G__68912;
continue;
} else {
var param_68913 = cljs.core.first(seq__67814_68907__$1);
cljs.compiler.emit(param_68913);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_68913,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__68914 = cljs.core.next(seq__67814_68907__$1);
var G__68915 = null;
var G__68916 = (0);
var G__68917 = (0);
seq__67814_68896 = G__68914;
chunk__67815_68897 = G__68915;
count__67816_68898 = G__68916;
i__67817_68899 = G__68917;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(");");
}

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})");
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__67822 = cljs.core.seq(params);
var chunk__67824 = null;
var count__67825 = (0);
var i__67826 = (0);
while(true){
if((i__67826 < count__67825)){
var param = chunk__67824.cljs$core$IIndexed$_nth$arity$2(null,i__67826);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__68918 = seq__67822;
var G__68919 = chunk__67824;
var G__68920 = count__67825;
var G__68921 = (i__67826 + (1));
seq__67822 = G__68918;
chunk__67824 = G__68919;
count__67825 = G__68920;
i__67826 = G__68921;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__67822);
if(temp__5753__auto__){
var seq__67822__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67822__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__67822__$1);
var G__68924 = cljs.core.chunk_rest(seq__67822__$1);
var G__68925 = c__4556__auto__;
var G__68926 = cljs.core.count(c__4556__auto__);
var G__68927 = (0);
seq__67822 = G__68924;
chunk__67824 = G__68925;
count__67825 = G__68926;
i__67826 = G__68927;
continue;
} else {
var param = cljs.core.first(seq__67822__$1);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__68929 = cljs.core.next(seq__67822__$1);
var G__68930 = null;
var G__68931 = (0);
var G__68932 = (0);
seq__67822 = G__68929;
chunk__67824 = G__68930;
count__67825 = G__68931;
i__67826 = G__68932;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__67831){
var map__67833 = p__67831;
var map__67833__$1 = (((((!((map__67833 == null))))?(((((map__67833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67833.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67833):map__67833);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67833__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67833__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67833__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67833__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67833__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67833__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__57424__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__57424__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(function ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"(");

cljs.compiler.emit_fn_params(params);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("while(true){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__57424__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if((((startslice >= (0))) && (cljs.core.integer_QMARK_(startslice)))){
} else {
throw (new Error("Assert failed: (and (>= startslice 0) (integer? startslice))"));
}

var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
var i = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__i"].join('');
var a = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__a"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("var ",i," = 0, ",a," = new Array(arguments.length -  ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([startslice,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("while (",i," < ",a,".length) {",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}"], 0));

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__67838){
var map__67839 = p__67838;
var map__67839__$1 = (((((!((map__67839 == null))))?(((((map__67839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67839.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67839):map__67839);
var f = map__67839__$1;
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67839__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67839__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67839__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67839__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67839__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67839__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67839__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67839__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__57424__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__57424__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var name_68945__$1 = (function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_68946 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_68945__$1);
var delegate_name_68947 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_68946),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() { ");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",delegate_name_68947," = function (");

var seq__67845_68948 = cljs.core.seq(params);
var chunk__67846_68949 = null;
var count__67847_68950 = (0);
var i__67848_68951 = (0);
while(true){
if((i__67848_68951 < count__67847_68950)){
var param_68953 = chunk__67846_68949.cljs$core$IIndexed$_nth$arity$2(null,i__67848_68951);
cljs.compiler.emit(param_68953);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_68953,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__68954 = seq__67845_68948;
var G__68955 = chunk__67846_68949;
var G__68956 = count__67847_68950;
var G__68957 = (i__67848_68951 + (1));
seq__67845_68948 = G__68954;
chunk__67846_68949 = G__68955;
count__67847_68950 = G__68956;
i__67848_68951 = G__68957;
continue;
} else {
var temp__5753__auto___68958 = cljs.core.seq(seq__67845_68948);
if(temp__5753__auto___68958){
var seq__67845_68959__$1 = temp__5753__auto___68958;
if(cljs.core.chunked_seq_QMARK_(seq__67845_68959__$1)){
var c__4556__auto___68960 = cljs.core.chunk_first(seq__67845_68959__$1);
var G__68961 = cljs.core.chunk_rest(seq__67845_68959__$1);
var G__68962 = c__4556__auto___68960;
var G__68963 = cljs.core.count(c__4556__auto___68960);
var G__68964 = (0);
seq__67845_68948 = G__68961;
chunk__67846_68949 = G__68962;
count__67847_68950 = G__68963;
i__67848_68951 = G__68964;
continue;
} else {
var param_68965 = cljs.core.first(seq__67845_68959__$1);
cljs.compiler.emit(param_68965);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_68965,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__68966 = cljs.core.next(seq__67845_68959__$1);
var G__68967 = null;
var G__68968 = (0);
var G__68969 = (0);
seq__67845_68948 = G__68966;
chunk__67846_68949 = G__68967;
count__67847_68950 = G__68968;
i__67848_68951 = G__68969;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("while(true){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",mname_68946," = function (",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",(cljs.core.count(params) - (1)),") {");

var a_68979 = cljs.compiler.emit_arguments_to_array((cljs.core.count(params) - (1)));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("  ",cljs.core.last(params)," = new cljs.core.IndexedSeq(",a_68979,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("} ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name_68947,".call(this,");

var seq__67852_68980 = cljs.core.seq(params);
var chunk__67853_68981 = null;
var count__67854_68982 = (0);
var i__67855_68983 = (0);
while(true){
if((i__67855_68983 < count__67854_68982)){
var param_68984 = chunk__67853_68981.cljs$core$IIndexed$_nth$arity$2(null,i__67855_68983);
cljs.compiler.emit(param_68984);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_68984,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__68985 = seq__67852_68980;
var G__68986 = chunk__67853_68981;
var G__68987 = count__67854_68982;
var G__68988 = (i__67855_68983 + (1));
seq__67852_68980 = G__68985;
chunk__67853_68981 = G__68986;
count__67854_68982 = G__68987;
i__67855_68983 = G__68988;
continue;
} else {
var temp__5753__auto___68989 = cljs.core.seq(seq__67852_68980);
if(temp__5753__auto___68989){
var seq__67852_68990__$1 = temp__5753__auto___68989;
if(cljs.core.chunked_seq_QMARK_(seq__67852_68990__$1)){
var c__4556__auto___68991 = cljs.core.chunk_first(seq__67852_68990__$1);
var G__68992 = cljs.core.chunk_rest(seq__67852_68990__$1);
var G__68993 = c__4556__auto___68991;
var G__68994 = cljs.core.count(c__4556__auto___68991);
var G__68995 = (0);
seq__67852_68980 = G__68992;
chunk__67853_68981 = G__68993;
count__67854_68982 = G__68994;
i__67855_68983 = G__68995;
continue;
} else {
var param_68997 = cljs.core.first(seq__67852_68990__$1);
cljs.compiler.emit(param_68997);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_68997,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__68998 = cljs.core.next(seq__67852_68990__$1);
var G__68999 = null;
var G__69000 = (0);
var G__69001 = (0);
seq__67852_68980 = G__68998;
chunk__67853_68981 = G__68999;
count__67854_68982 = G__69000;
i__67855_68983 = G__69001;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_68946,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(mname_68946,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.Keyword(null,"name","name",1843675177),name_68945__$1));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_68946,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_68947,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_68946,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__57424__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__67870){
var map__67875 = p__67870;
var map__67875__$1 = (((((!((map__67875 == null))))?(((((map__67875.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67875.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67875):map__67875);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67875__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67875__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67875__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67875__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67875__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67875__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var in_loop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67875__$1,new cljs.core.Keyword(null,"in-loop","in-loop",-187298246));
var loop_lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67875__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var recur_params = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__67867_SHARP_){
var and__4115__auto__ = p1__67867_SHARP_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.deref(new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__67867_SHARP_));
} else {
return and__4115__auto__;
}
}),recur_frames)], 0));
var loop_locals = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(recur_params,(cljs.core.truth_((function (){var or__4126__auto__ = in_loop;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.seq(recur_params);
}
})())?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([loop_lets], 0)):null))));
if(loop_locals){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("((function (",cljs.compiler.comma_sep(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,loop_locals)),"){");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
}
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
} else {
cljs.compiler.emit_fn_method(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
}
} else {
var name_69009__$1 = (function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_69010 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_69009__$1);
var maxparams_69011 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_69012 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_69010),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
}),methods$));
var ms_69013 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__67868_SHARP_){
return cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__67868_SHARP_)));
}),cljs.core.seq(mmap_69012));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() {");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",mname_69010," = null;");

var seq__67877_69015 = cljs.core.seq(ms_69013);
var chunk__67878_69016 = null;
var count__67879_69017 = (0);
var i__67880_69018 = (0);
while(true){
if((i__67880_69018 < count__67879_69017)){
var vec__67889_69019 = chunk__67878_69016.cljs$core$IIndexed$_nth$arity$2(null,i__67880_69018);
var n_69020 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67889_69019,(0),null);
var meth_69021 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67889_69019,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_69020," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_69021))){
cljs.compiler.emit_variadic_fn_method(meth_69021);
} else {
cljs.compiler.emit_fn_method(meth_69021);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__69022 = seq__67877_69015;
var G__69023 = chunk__67878_69016;
var G__69024 = count__67879_69017;
var G__69025 = (i__67880_69018 + (1));
seq__67877_69015 = G__69022;
chunk__67878_69016 = G__69023;
count__67879_69017 = G__69024;
i__67880_69018 = G__69025;
continue;
} else {
var temp__5753__auto___69026 = cljs.core.seq(seq__67877_69015);
if(temp__5753__auto___69026){
var seq__67877_69027__$1 = temp__5753__auto___69026;
if(cljs.core.chunked_seq_QMARK_(seq__67877_69027__$1)){
var c__4556__auto___69028 = cljs.core.chunk_first(seq__67877_69027__$1);
var G__69029 = cljs.core.chunk_rest(seq__67877_69027__$1);
var G__69030 = c__4556__auto___69028;
var G__69031 = cljs.core.count(c__4556__auto___69028);
var G__69032 = (0);
seq__67877_69015 = G__69029;
chunk__67878_69016 = G__69030;
count__67879_69017 = G__69031;
i__67880_69018 = G__69032;
continue;
} else {
var vec__67896_69033 = cljs.core.first(seq__67877_69027__$1);
var n_69034 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67896_69033,(0),null);
var meth_69035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67896_69033,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_69034," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_69035))){
cljs.compiler.emit_variadic_fn_method(meth_69035);
} else {
cljs.compiler.emit_fn_method(meth_69035);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__69038 = cljs.core.next(seq__67877_69027__$1);
var G__69039 = null;
var G__69040 = (0);
var G__69041 = (0);
seq__67877_69015 = G__69038;
chunk__67878_69016 = G__69039;
count__67879_69017 = G__69040;
i__67880_69018 = G__69041;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_69010," = function(",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(maxparams_69011),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_69011)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(maxparams_69011));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = var_args;");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("switch(arguments.length){");

var seq__67899_69050 = cljs.core.seq(ms_69013);
var chunk__67900_69051 = null;
var count__67901_69052 = (0);
var i__67902_69053 = (0);
while(true){
if((i__67902_69053 < count__67901_69052)){
var vec__67914_69054 = chunk__67900_69051.cljs$core$IIndexed$_nth$arity$2(null,i__67902_69053);
var n_69055 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67914_69054,(0),null);
var meth_69056 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67914_69054,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_69056))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_69057 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_69057," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_69058 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_69057," = new cljs.core.IndexedSeq(",a_69058,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_69055,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_69011)),(((cljs.core.count(maxparams_69011) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_69057,");"], 0));
} else {
var pcnt_69067 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_69056));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_69067,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_69055,".call(this",(((pcnt_69067 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_69067,maxparams_69011)),null,(1),null)),(2),null))),");");
}


var G__69070 = seq__67899_69050;
var G__69071 = chunk__67900_69051;
var G__69072 = count__67901_69052;
var G__69073 = (i__67902_69053 + (1));
seq__67899_69050 = G__69070;
chunk__67900_69051 = G__69071;
count__67901_69052 = G__69072;
i__67902_69053 = G__69073;
continue;
} else {
var temp__5753__auto___69074 = cljs.core.seq(seq__67899_69050);
if(temp__5753__auto___69074){
var seq__67899_69077__$1 = temp__5753__auto___69074;
if(cljs.core.chunked_seq_QMARK_(seq__67899_69077__$1)){
var c__4556__auto___69078 = cljs.core.chunk_first(seq__67899_69077__$1);
var G__69080 = cljs.core.chunk_rest(seq__67899_69077__$1);
var G__69081 = c__4556__auto___69078;
var G__69082 = cljs.core.count(c__4556__auto___69078);
var G__69083 = (0);
seq__67899_69050 = G__69080;
chunk__67900_69051 = G__69081;
count__67901_69052 = G__69082;
i__67902_69053 = G__69083;
continue;
} else {
var vec__67922_69085 = cljs.core.first(seq__67899_69077__$1);
var n_69086 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67922_69085,(0),null);
var meth_69087 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67922_69085,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_69087))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_69088 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_69088," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_69089 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_69088," = new cljs.core.IndexedSeq(",a_69089,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_69086,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_69011)),(((cljs.core.count(maxparams_69011) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_69088,");"], 0));
} else {
var pcnt_69092 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_69087));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_69092,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_69086,".call(this",(((pcnt_69092 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_69092,maxparams_69011)),null,(1),null)),(2),null))),");");
}


var G__69094 = cljs.core.next(seq__67899_69077__$1);
var G__69095 = null;
var G__69096 = (0);
var G__69097 = (0);
seq__67899_69050 = G__69094;
chunk__67900_69051 = G__69095;
count__67901_69052 = G__69096;
i__67902_69053 = G__69097;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

var arg_count_js_69099 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val(cljs.core.first(ms_69013)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("throw(new Error('Invalid arity: ' + ",arg_count_js_69099,"));");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_69010,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_69010,".cljs$lang$applyTo = ",cljs.core.some((function (p1__67869_SHARP_){
var vec__67929 = p1__67869_SHARP_;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67929,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67929,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
}),ms_69013),".cljs$lang$applyTo;");
} else {
}

var seq__67932_69100 = cljs.core.seq(ms_69013);
var chunk__67933_69101 = null;
var count__67934_69102 = (0);
var i__67935_69103 = (0);
while(true){
if((i__67935_69103 < count__67934_69102)){
var vec__67942_69104 = chunk__67933_69101.cljs$core$IIndexed$_nth$arity$2(null,i__67935_69103);
var n_69105 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67942_69104,(0),null);
var meth_69106 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67942_69104,(1),null);
var c_69110 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_69106));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_69106))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_69010,".cljs$core$IFn$_invoke$arity$variadic = ",n_69105,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_69010,".cljs$core$IFn$_invoke$arity$",c_69110," = ",n_69105,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__69111 = seq__67932_69100;
var G__69112 = chunk__67933_69101;
var G__69113 = count__67934_69102;
var G__69114 = (i__67935_69103 + (1));
seq__67932_69100 = G__69111;
chunk__67933_69101 = G__69112;
count__67934_69102 = G__69113;
i__67935_69103 = G__69114;
continue;
} else {
var temp__5753__auto___69115 = cljs.core.seq(seq__67932_69100);
if(temp__5753__auto___69115){
var seq__67932_69116__$1 = temp__5753__auto___69115;
if(cljs.core.chunked_seq_QMARK_(seq__67932_69116__$1)){
var c__4556__auto___69117 = cljs.core.chunk_first(seq__67932_69116__$1);
var G__69119 = cljs.core.chunk_rest(seq__67932_69116__$1);
var G__69120 = c__4556__auto___69117;
var G__69121 = cljs.core.count(c__4556__auto___69117);
var G__69122 = (0);
seq__67932_69100 = G__69119;
chunk__67933_69101 = G__69120;
count__67934_69102 = G__69121;
i__67935_69103 = G__69122;
continue;
} else {
var vec__67946_69126 = cljs.core.first(seq__67932_69116__$1);
var n_69127 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67946_69126,(0),null);
var meth_69128 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67946_69126,(1),null);
var c_69129 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_69128));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_69128))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_69010,".cljs$core$IFn$_invoke$arity$variadic = ",n_69127,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_69010,".cljs$core$IFn$_invoke$arity$",c_69129," = ",n_69127,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__69130 = cljs.core.next(seq__67932_69116__$1);
var G__69131 = null;
var G__69132 = (0);
var G__69133 = (0);
seq__67932_69100 = G__69130;
chunk__67933_69101 = G__69131;
count__67934_69102 = G__69132;
i__67935_69103 = G__69133;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_69010,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");
}

if(loop_locals){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(";})(",cljs.compiler.comma_sep(loop_locals),"))");
} else {
return null;
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"do","do",46310725),(function (p__67949){
var map__67950 = p__67949;
var map__67950__$1 = (((((!((map__67950 == null))))?(((((map__67950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67950.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67950):map__67950);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67950__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67950__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67950__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq(statements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__67961_69134 = cljs.core.seq(statements);
var chunk__67962_69135 = null;
var count__67963_69136 = (0);
var i__67964_69137 = (0);
while(true){
if((i__67964_69137 < count__67963_69136)){
var s_69138 = chunk__67962_69135.cljs$core$IIndexed$_nth$arity$2(null,i__67964_69137);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_69138);


var G__69139 = seq__67961_69134;
var G__69140 = chunk__67962_69135;
var G__69141 = count__67963_69136;
var G__69142 = (i__67964_69137 + (1));
seq__67961_69134 = G__69139;
chunk__67962_69135 = G__69140;
count__67963_69136 = G__69141;
i__67964_69137 = G__69142;
continue;
} else {
var temp__5753__auto___69143 = cljs.core.seq(seq__67961_69134);
if(temp__5753__auto___69143){
var seq__67961_69144__$1 = temp__5753__auto___69143;
if(cljs.core.chunked_seq_QMARK_(seq__67961_69144__$1)){
var c__4556__auto___69145 = cljs.core.chunk_first(seq__67961_69144__$1);
var G__69146 = cljs.core.chunk_rest(seq__67961_69144__$1);
var G__69147 = c__4556__auto___69145;
var G__69148 = cljs.core.count(c__4556__auto___69145);
var G__69149 = (0);
seq__67961_69134 = G__69146;
chunk__67962_69135 = G__69147;
count__67963_69136 = G__69148;
i__67964_69137 = G__69149;
continue;
} else {
var s_69150 = cljs.core.first(seq__67961_69144__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_69150);


var G__69151 = cljs.core.next(seq__67961_69144__$1);
var G__69152 = null;
var G__69153 = (0);
var G__69154 = (0);
seq__67961_69134 = G__69151;
chunk__67962_69135 = G__69152;
count__67963_69136 = G__69153;
i__67964_69137 = G__69154;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit(ret);

if(((cljs.core.seq(statements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__67975){
var map__67976 = p__67975;
var map__67976__$1 = (((((!((map__67976 == null))))?(((((map__67976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67976.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67976):map__67976);
var try$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67976__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67976__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67976__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67976__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67976__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("try{",try$,"}");

if(cljs.core.truth_(name)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("catch (",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"){",catch$,"}");
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"const","const",1709929842),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.unwrap_quote(finally$)))){
} else {
throw (new Error(["Assert failed: ","finally block cannot contain constant","\n","(not= :const (:op (ana/unwrap-quote finally)))"].join('')));
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("finally {",finally$,"}");
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(try$);
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__67983,is_loop){
var map__67984 = p__67983;
var map__67984__$1 = (((((!((map__67984 == null))))?(((((map__67984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67984.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67984):map__67984);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67984__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67984__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67984__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__67986_69164 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__67987_69165 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope(binding),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
}),bindings):null));
(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__67987_69165);

try{var seq__67996_69166 = cljs.core.seq(bindings);
var chunk__67997_69167 = null;
var count__67998_69168 = (0);
var i__67999_69169 = (0);
while(true){
if((i__67999_69169 < count__67998_69168)){
var map__68032_69170 = chunk__67997_69167.cljs$core$IIndexed$_nth$arity$2(null,i__67999_69169);
var map__68032_69171__$1 = (((((!((map__68032_69170 == null))))?(((((map__68032_69170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68032_69170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68032_69170):map__68032_69170);
var binding_69172 = map__68032_69171__$1;
var init_69173 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68032_69171__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_69172);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_69173,";");


var G__69174 = seq__67996_69166;
var G__69175 = chunk__67997_69167;
var G__69176 = count__67998_69168;
var G__69177 = (i__67999_69169 + (1));
seq__67996_69166 = G__69174;
chunk__67997_69167 = G__69175;
count__67998_69168 = G__69176;
i__67999_69169 = G__69177;
continue;
} else {
var temp__5753__auto___69179 = cljs.core.seq(seq__67996_69166);
if(temp__5753__auto___69179){
var seq__67996_69181__$1 = temp__5753__auto___69179;
if(cljs.core.chunked_seq_QMARK_(seq__67996_69181__$1)){
var c__4556__auto___69182 = cljs.core.chunk_first(seq__67996_69181__$1);
var G__69183 = cljs.core.chunk_rest(seq__67996_69181__$1);
var G__69184 = c__4556__auto___69182;
var G__69185 = cljs.core.count(c__4556__auto___69182);
var G__69186 = (0);
seq__67996_69166 = G__69183;
chunk__67997_69167 = G__69184;
count__67998_69168 = G__69185;
i__67999_69169 = G__69186;
continue;
} else {
var map__68041_69187 = cljs.core.first(seq__67996_69181__$1);
var map__68041_69188__$1 = (((((!((map__68041_69187 == null))))?(((((map__68041_69187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68041_69187.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68041_69187):map__68041_69187);
var binding_69189 = map__68041_69188__$1;
var init_69190 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68041_69188__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_69189);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_69190,";");


var G__69191 = cljs.core.next(seq__67996_69181__$1);
var G__69192 = null;
var G__69193 = (0);
var G__69194 = (0);
seq__67996_69166 = G__69191;
chunk__67997_69167 = G__69192;
count__67998_69168 = G__69193;
i__67999_69169 = G__69194;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("while(true){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(expr);

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");
} else {
}
}finally {(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__67986_69164);
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let(ast,false);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let(ast,true);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__68043){
var map__68044 = p__68043;
var map__68044__$1 = (((((!((map__68044 == null))))?(((((map__68044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68044.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68044):map__68044);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68044__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68044__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68044__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4613__auto___69197 = cljs.core.count(exprs);
var i_69198 = (0);
while(true){
if((i_69198 < n__4613__auto___69197)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_69198) : temps.call(null,i_69198))," = ",(exprs.cljs$core$IFn$_invoke$arity$1 ? exprs.cljs$core$IFn$_invoke$arity$1(i_69198) : exprs.call(null,i_69198)),";");

var G__69201 = (i_69198 + (1));
i_69198 = G__69201;
continue;
} else {
}
break;
}

var n__4613__auto___69203 = cljs.core.count(exprs);
var i_69204 = (0);
while(true){
if((i_69204 < n__4613__auto___69203)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(i_69204) : params.call(null,i_69204)))," = ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_69204) : temps.call(null,i_69204)),";");

var G__69205 = (i_69204 + (1));
i_69204 = G__69205;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("continue;");
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__68050){
var map__68051 = p__68050;
var map__68051__$1 = (((((!((map__68051 == null))))?(((((map__68051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68051.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68051):map__68051);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68051__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68051__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68051__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__68055_69209 = cljs.core.seq(bindings);
var chunk__68056_69210 = null;
var count__68057_69211 = (0);
var i__68058_69212 = (0);
while(true){
if((i__68058_69212 < count__68057_69211)){
var map__68077_69213 = chunk__68056_69210.cljs$core$IIndexed$_nth$arity$2(null,i__68058_69212);
var map__68077_69214__$1 = (((((!((map__68077_69213 == null))))?(((((map__68077_69213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68077_69213.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68077_69213):map__68077_69213);
var binding_69215 = map__68077_69214__$1;
var init_69216 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68077_69214__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_69215)," = ",init_69216,";");


var G__69217 = seq__68055_69209;
var G__69218 = chunk__68056_69210;
var G__69219 = count__68057_69211;
var G__69220 = (i__68058_69212 + (1));
seq__68055_69209 = G__69217;
chunk__68056_69210 = G__69218;
count__68057_69211 = G__69219;
i__68058_69212 = G__69220;
continue;
} else {
var temp__5753__auto___69221 = cljs.core.seq(seq__68055_69209);
if(temp__5753__auto___69221){
var seq__68055_69222__$1 = temp__5753__auto___69221;
if(cljs.core.chunked_seq_QMARK_(seq__68055_69222__$1)){
var c__4556__auto___69223 = cljs.core.chunk_first(seq__68055_69222__$1);
var G__69224 = cljs.core.chunk_rest(seq__68055_69222__$1);
var G__69225 = c__4556__auto___69223;
var G__69226 = cljs.core.count(c__4556__auto___69223);
var G__69227 = (0);
seq__68055_69209 = G__69224;
chunk__68056_69210 = G__69225;
count__68057_69211 = G__69226;
i__68058_69212 = G__69227;
continue;
} else {
var map__68083_69229 = cljs.core.first(seq__68055_69222__$1);
var map__68083_69230__$1 = (((((!((map__68083_69229 == null))))?(((((map__68083_69229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68083_69229.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68083_69229):map__68083_69229);
var binding_69231 = map__68083_69230__$1;
var init_69232 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68083_69230__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_69231)," = ",init_69232,";");


var G__69234 = cljs.core.next(seq__68055_69222__$1);
var G__69235 = null;
var G__69236 = (0);
var G__69237 = (0);
seq__68055_69209 = G__69234;
chunk__68056_69210 = G__69235;
count__68057_69211 = G__69236;
i__68058_69212 = G__69237;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(expr);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym).replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join(''));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__68110){
var map__68111 = p__68110;
var map__68111__$1 = (((((!((map__68111 == null))))?(((((map__68111.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68111.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68111):map__68111);
var expr = map__68111__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68111__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68111__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68111__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__4115__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
if(cljs.core.not(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info))){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return false;
}
} else {
return and__4115__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag(env,cljs.core.first(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__4115__auto__ = protocol;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = tag;
if(cljs.core.truth_(and__4115__auto____$1)){
var or__4126__auto__ = (function (){var and__4115__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4115__auto____$2)){
var and__4115__auto____$3 = protocol;
if(cljs.core.truth_(and__4115__auto____$3)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__4115__auto____$3;
}
} else {
return and__4115__auto____$2;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto____$2 = (function (){var or__4126__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__4115__auto____$2)){
var or__4126__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,tag);
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
if((!(cljs.core.set_QMARK_(tag)))){
if(cljs.core.not((function (){var fexpr__68163 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"null",new cljs.core.Symbol(null,"any","any",-948528346,null),"null",new cljs.core.Symbol(null,"js","js",-886355190,null),"null",new cljs.core.Symbol(null,"number","number",-1084057331,null),"null",new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),"null",new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"function","function",-486723946,null),"null",new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),"null"], null), null);
return (fexpr__68163.cljs$core$IFn$_invoke$arity$1 ? fexpr__68163.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__68163.call(null,tag));
})())){
var temp__5753__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var(env,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(tag,cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true)));
if(cljs.core.truth_(temp__5753__auto__)){
var ps = temp__5753__auto__;
return (ps.cljs$core$IFn$_invoke$arity$1 ? ps.cljs$core$IFn$_invoke$arity$1(protocol) : ps.call(null,protocol));
} else {
return null;
}
} else {
return false;
}
} else {
return false;
}
}
} else {
return and__4115__auto____$2;
}
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})();
var first_arg_tag = cljs.analyzer.infer_tag(env,cljs.core.first(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var opt_not_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_arg_tag,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null))));
var opt_count_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null))) && (cljs.core.boolean$((function (){var fexpr__68166 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null"], null), null);
return (fexpr__68166.cljs$core$IFn$_invoke$arity$1 ? fexpr__68166.cljs$core$IFn$_invoke$arity$1(first_arg_tag) : fexpr__68166.call(null,first_arg_tag));
})())));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var ftag = cljs.analyzer.infer_tag(env,f);
var js_QMARK_ = (function (){var or__4126__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"js","js",-886355190,null));
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null));
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
return new cljs.core.Keyword(null,"foreign","foreign",990521149).cljs$core$IFn$_invoke$arity$1(info);
}
}
})();
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__4126__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (function (){var temp__5753__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
if(cljs.core.truth_(temp__5753__auto__)){
var ns_str = temp__5753__auto__;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(clojure.string.split.cljs$core$IFn$_invoke$arity$2(ns_str,/\./),(0),null),"goog");
} else {
return null;
}
})();
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return (!(cljs.core.contains_QMARK_(new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)),ns)));
}
}
})():null);
var keyword_QMARK_ = (function (){var or__4126__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),ftag);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var f__$1 = cljs.analyzer.unwrap_quote(f);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"const","const",1709929842))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f__$1) instanceof cljs.core.Keyword)));
}
})();
var vec__68115 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count(args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if(((cljs.core.not(variadic_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(mps),(1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return (arity > mfa);
} else {
return and__4115__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__68108_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__68108_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__68109_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__68109_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68115,(0),null);
var variadic_invoke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68115,(1),null);
var env__57424__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__57424__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(!(",cljs.core.first(args),"))");
} else {
if(opt_count_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("((",cljs.core.first(args),").length)");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_69261 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.compiler.protocol_prefix(protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(args),".",pimpl_69261,"(",cljs.compiler.comma_sep(cljs.core.cons("null",cljs.core.rest(args))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(keyword_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count(args),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_69263 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,"(",cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(mfa_69263,args)),(((mfa_69263 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.comma_sep(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(mfa_69263,args)),"], 0))"], 0));
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = js_QMARK_;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(f__$1,"(",cljs.compiler.comma_sep(args),")");
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
var G__68191 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1);
var fexpr__68190 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__68190.cljs$core$IFn$_invoke$arity$1 ? fexpr__68190.cljs$core$IFn$_invoke$arity$1(G__68191) : fexpr__68190.call(null,G__68191));
} else {
return and__4115__auto__;
}
})())){
var fprop_69270 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
if(cljs.core.truth_(cljs.analyzer._STAR_fn_invoke_direct_STAR_)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_69270," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_69270,"(",cljs.compiler.comma_sep(args),") : ",f__$1,"(",cljs.compiler.comma_sep(args),"))"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_69270," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_69270,"(",cljs.compiler.comma_sep(args),") : ",f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),"))"], 0));
}
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),")");
}

}
}
}
}
}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__57424__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__68196){
var map__68197 = p__68196;
var map__68197__$1 = (((((!((map__68197 == null))))?(((((map__68197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68197.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68197):map__68197);
var ctor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68197__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68197__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68197__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__57424__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__57424__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("(new ",ctor,"(",cljs.compiler.comma_sep(args),"))");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__57424__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__68210){
var map__68211 = p__68210;
var map__68211__$1 = (((((!((map__68211 == null))))?(((((map__68211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68211.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68211):map__68211);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68211__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68211__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68211__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__57424__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__57424__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("(",target," = ",val,")");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__57424__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_global_export = (function cljs$compiler$emit_global_export(ns_name,global_exports,lib){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_global_export(lib)," = goog.global",cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (prop){
return ["[\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop),"\"]"].join('');
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name((function (){var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(global_exports,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(lib));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(global_exports,cljs.core.name(lib));
}
})()),/\./))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
});
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__68227 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__68227__$1 = (((((!((map__68227 == null))))?(((((map__68227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68227.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68227):map__68227);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68227__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68227__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__68228 = options;
var map__68228__$1 = (((((!((map__68228 == null))))?(((((map__68228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68228.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68228):map__68228);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68228__$1,new cljs.core.Keyword(null,"target","target",253001721));
var nodejs_rt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68228__$1,new cljs.core.Keyword(null,"nodejs-rt","nodejs-rt",-512437071));
var optimizations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68228__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__68229 = (function (){var libs__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(seen)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(libs)),deps));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__68238 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__68238__$1 = (((((!((map__68238 == null))))?(((((map__68238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68238):map__68238);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68238__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68238__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68229,(0),null);
var libs_to_load = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68229,(1),null);
var global_exports_libs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__68244_69282 = cljs.core.seq(libs_to_load);
var chunk__68245_69283 = null;
var count__68246_69284 = (0);
var i__68247_69285 = (0);
while(true){
if((i__68247_69285 < count__68246_69284)){
var lib_69287 = chunk__68245_69283.cljs$core$IIndexed$_nth$arity$2(null,i__68247_69285);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_69287)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_69287),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_69287),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_69287),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_69287),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_69287,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_69287),"');");
}

}
}
}


var G__69295 = seq__68244_69282;
var G__69296 = chunk__68245_69283;
var G__69297 = count__68246_69284;
var G__69298 = (i__68247_69285 + (1));
seq__68244_69282 = G__69295;
chunk__68245_69283 = G__69296;
count__68246_69284 = G__69297;
i__68247_69285 = G__69298;
continue;
} else {
var temp__5753__auto___69299 = cljs.core.seq(seq__68244_69282);
if(temp__5753__auto___69299){
var seq__68244_69300__$1 = temp__5753__auto___69299;
if(cljs.core.chunked_seq_QMARK_(seq__68244_69300__$1)){
var c__4556__auto___69301 = cljs.core.chunk_first(seq__68244_69300__$1);
var G__69302 = cljs.core.chunk_rest(seq__68244_69300__$1);
var G__69303 = c__4556__auto___69301;
var G__69304 = cljs.core.count(c__4556__auto___69301);
var G__69305 = (0);
seq__68244_69282 = G__69302;
chunk__68245_69283 = G__69303;
count__68246_69284 = G__69304;
i__68247_69285 = G__69305;
continue;
} else {
var lib_69306 = cljs.core.first(seq__68244_69300__$1);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_69306)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_69306),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_69306),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_69306),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_69306),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_69306,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_69306),"');");
}

}
}
}


var G__69307 = cljs.core.next(seq__68244_69300__$1);
var G__69308 = null;
var G__69309 = (0);
var G__69310 = (0);
seq__68244_69282 = G__69307;
chunk__68245_69283 = G__69308;
count__68246_69284 = G__69309;
i__68247_69285 = G__69310;
continue;
}
} else {
}
}
break;
}

var seq__68283_69315 = cljs.core.seq(node_libs);
var chunk__68284_69316 = null;
var count__68285_69317 = (0);
var i__68286_69318 = (0);
while(true){
if((i__68286_69318 < count__68285_69317)){
var lib_69319 = chunk__68284_69316.cljs$core$IIndexed$_nth$arity$2(null,i__68286_69318);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_69319)," = require('",lib_69319,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__69320 = seq__68283_69315;
var G__69321 = chunk__68284_69316;
var G__69322 = count__68285_69317;
var G__69323 = (i__68286_69318 + (1));
seq__68283_69315 = G__69320;
chunk__68284_69316 = G__69321;
count__68285_69317 = G__69322;
i__68286_69318 = G__69323;
continue;
} else {
var temp__5753__auto___69324 = cljs.core.seq(seq__68283_69315);
if(temp__5753__auto___69324){
var seq__68283_69325__$1 = temp__5753__auto___69324;
if(cljs.core.chunked_seq_QMARK_(seq__68283_69325__$1)){
var c__4556__auto___69326 = cljs.core.chunk_first(seq__68283_69325__$1);
var G__69327 = cljs.core.chunk_rest(seq__68283_69325__$1);
var G__69328 = c__4556__auto___69326;
var G__69329 = cljs.core.count(c__4556__auto___69326);
var G__69330 = (0);
seq__68283_69315 = G__69327;
chunk__68284_69316 = G__69328;
count__68285_69317 = G__69329;
i__68286_69318 = G__69330;
continue;
} else {
var lib_69331 = cljs.core.first(seq__68283_69325__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_69331)," = require('",lib_69331,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__69332 = cljs.core.next(seq__68283_69325__$1);
var G__69333 = null;
var G__69334 = (0);
var G__69335 = (0);
seq__68283_69315 = G__69332;
chunk__68284_69316 = G__69333;
count__68285_69317 = G__69334;
i__68286_69318 = G__69335;
continue;
}
} else {
}
}
break;
}

var seq__68292_69336 = cljs.core.seq(global_exports_libs);
var chunk__68293_69338 = null;
var count__68294_69339 = (0);
var i__68295_69341 = (0);
while(true){
if((i__68295_69341 < count__68294_69339)){
var lib_69344 = chunk__68293_69338.cljs$core$IIndexed$_nth$arity$2(null,i__68295_69341);
var map__68307_69345 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_69344));
var map__68307_69346__$1 = (((((!((map__68307_69345 == null))))?(((((map__68307_69345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68307_69345.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68307_69345):map__68307_69345);
var global_exports_69347 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68307_69346__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_69347,lib_69344);


var G__69351 = seq__68292_69336;
var G__69352 = chunk__68293_69338;
var G__69353 = count__68294_69339;
var G__69354 = (i__68295_69341 + (1));
seq__68292_69336 = G__69351;
chunk__68293_69338 = G__69352;
count__68294_69339 = G__69353;
i__68295_69341 = G__69354;
continue;
} else {
var temp__5753__auto___69356 = cljs.core.seq(seq__68292_69336);
if(temp__5753__auto___69356){
var seq__68292_69357__$1 = temp__5753__auto___69356;
if(cljs.core.chunked_seq_QMARK_(seq__68292_69357__$1)){
var c__4556__auto___69358 = cljs.core.chunk_first(seq__68292_69357__$1);
var G__69359 = cljs.core.chunk_rest(seq__68292_69357__$1);
var G__69360 = c__4556__auto___69358;
var G__69361 = cljs.core.count(c__4556__auto___69358);
var G__69362 = (0);
seq__68292_69336 = G__69359;
chunk__68293_69338 = G__69360;
count__68294_69339 = G__69361;
i__68295_69341 = G__69362;
continue;
} else {
var lib_69363 = cljs.core.first(seq__68292_69357__$1);
var map__68309_69364 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_69363));
var map__68309_69365__$1 = (((((!((map__68309_69364 == null))))?(((((map__68309_69364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68309_69364.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68309_69364):map__68309_69364);
var global_exports_69366 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68309_69365__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_69366,lib_69363);


var G__69371 = cljs.core.next(seq__68292_69357__$1);
var G__69372 = null;
var G__69373 = (0);
var G__69374 = (0);
seq__68292_69336 = G__69371;
chunk__68293_69338 = G__69372;
count__68294_69339 = G__69373;
i__68295_69341 = G__69374;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([loaded_libs,");"], 0));
} else {
return null;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__68313){
var map__68314 = p__68313;
var map__68314__$1 = (((((!((map__68314 == null))))?(((((map__68314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68314.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68314):map__68314);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68314__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68314__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68314__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68314__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68314__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68314__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68314__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("'nil';");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__68321){
var map__68322 = p__68321;
var map__68322__$1 = (((((!((map__68322 == null))))?(((((map__68322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68322):map__68322);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68322__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68322__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68322__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68322__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68322__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68322__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68322__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"');");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("goog.require('cljs.core');");

if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');");
} else {
}
}

cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

return cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__68328){
var map__68329 = p__68328;
var map__68329__$1 = (((((!((map__68329 == null))))?(((((map__68329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68329.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68329):map__68329);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68329__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68329__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68329__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68329__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68329__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__68332_69383 = cljs.core.seq(protocols);
var chunk__68333_69384 = null;
var count__68334_69385 = (0);
var i__68335_69386 = (0);
while(true){
if((i__68335_69386 < count__68334_69385)){
var protocol_69391 = chunk__68333_69384.cljs$core$IIndexed$_nth$arity$2(null,i__68335_69386);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_69391)),"}");


var G__69392 = seq__68332_69383;
var G__69393 = chunk__68333_69384;
var G__69394 = count__68334_69385;
var G__69395 = (i__68335_69386 + (1));
seq__68332_69383 = G__69392;
chunk__68333_69384 = G__69393;
count__68334_69385 = G__69394;
i__68335_69386 = G__69395;
continue;
} else {
var temp__5753__auto___69396 = cljs.core.seq(seq__68332_69383);
if(temp__5753__auto___69396){
var seq__68332_69397__$1 = temp__5753__auto___69396;
if(cljs.core.chunked_seq_QMARK_(seq__68332_69397__$1)){
var c__4556__auto___69398 = cljs.core.chunk_first(seq__68332_69397__$1);
var G__69399 = cljs.core.chunk_rest(seq__68332_69397__$1);
var G__69400 = c__4556__auto___69398;
var G__69401 = cljs.core.count(c__4556__auto___69398);
var G__69402 = (0);
seq__68332_69383 = G__69399;
chunk__68333_69384 = G__69400;
count__68334_69385 = G__69401;
i__68335_69386 = G__69402;
continue;
} else {
var protocol_69403 = cljs.core.first(seq__68332_69397__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_69403)),"}");


var G__69404 = cljs.core.next(seq__68332_69397__$1);
var G__69405 = null;
var G__69406 = (0);
var G__69407 = (0);
seq__68332_69383 = G__69404;
chunk__68333_69384 = G__69405;
count__68334_69385 = G__69406;
i__68335_69386 = G__69407;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__68338_69408 = cljs.core.seq(fields__$1);
var chunk__68339_69409 = null;
var count__68340_69410 = (0);
var i__68341_69411 = (0);
while(true){
if((i__68341_69411 < count__68340_69410)){
var fld_69412 = chunk__68339_69409.cljs$core$IIndexed$_nth$arity$2(null,i__68341_69411);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_69412," = ",fld_69412,";");


var G__69414 = seq__68338_69408;
var G__69415 = chunk__68339_69409;
var G__69416 = count__68340_69410;
var G__69417 = (i__68341_69411 + (1));
seq__68338_69408 = G__69414;
chunk__68339_69409 = G__69415;
count__68340_69410 = G__69416;
i__68341_69411 = G__69417;
continue;
} else {
var temp__5753__auto___69419 = cljs.core.seq(seq__68338_69408);
if(temp__5753__auto___69419){
var seq__68338_69420__$1 = temp__5753__auto___69419;
if(cljs.core.chunked_seq_QMARK_(seq__68338_69420__$1)){
var c__4556__auto___69421 = cljs.core.chunk_first(seq__68338_69420__$1);
var G__69423 = cljs.core.chunk_rest(seq__68338_69420__$1);
var G__69424 = c__4556__auto___69421;
var G__69425 = cljs.core.count(c__4556__auto___69421);
var G__69426 = (0);
seq__68338_69408 = G__69423;
chunk__68339_69409 = G__69424;
count__68340_69410 = G__69425;
i__68341_69411 = G__69426;
continue;
} else {
var fld_69427 = cljs.core.first(seq__68338_69420__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_69427," = ",fld_69427,";");


var G__69428 = cljs.core.next(seq__68338_69420__$1);
var G__69429 = null;
var G__69430 = (0);
var G__69431 = (0);
seq__68338_69408 = G__69428;
chunk__68339_69409 = G__69429;
count__68340_69410 = G__69430;
i__68341_69411 = G__69431;
continue;
}
} else {
}
}
break;
}

var seq__68345_69434 = cljs.core.seq(pmasks);
var chunk__68346_69435 = null;
var count__68347_69436 = (0);
var i__68348_69437 = (0);
while(true){
if((i__68348_69437 < count__68347_69436)){
var vec__68356_69443 = chunk__68346_69435.cljs$core$IIndexed$_nth$arity$2(null,i__68348_69437);
var pno_69444 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68356_69443,(0),null);
var pmask_69445 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68356_69443,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_69444,"$ = ",pmask_69445,";");


var G__69446 = seq__68345_69434;
var G__69447 = chunk__68346_69435;
var G__69448 = count__68347_69436;
var G__69449 = (i__68348_69437 + (1));
seq__68345_69434 = G__69446;
chunk__68346_69435 = G__69447;
count__68347_69436 = G__69448;
i__68348_69437 = G__69449;
continue;
} else {
var temp__5753__auto___69450 = cljs.core.seq(seq__68345_69434);
if(temp__5753__auto___69450){
var seq__68345_69451__$1 = temp__5753__auto___69450;
if(cljs.core.chunked_seq_QMARK_(seq__68345_69451__$1)){
var c__4556__auto___69452 = cljs.core.chunk_first(seq__68345_69451__$1);
var G__69453 = cljs.core.chunk_rest(seq__68345_69451__$1);
var G__69454 = c__4556__auto___69452;
var G__69455 = cljs.core.count(c__4556__auto___69452);
var G__69456 = (0);
seq__68345_69434 = G__69453;
chunk__68346_69435 = G__69454;
count__68347_69436 = G__69455;
i__68348_69437 = G__69456;
continue;
} else {
var vec__68362_69457 = cljs.core.first(seq__68345_69451__$1);
var pno_69458 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68362_69457,(0),null);
var pmask_69459 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68362_69457,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_69458,"$ = ",pmask_69459,";");


var G__69460 = cljs.core.next(seq__68345_69451__$1);
var G__69461 = null;
var G__69462 = (0);
var G__69463 = (0);
seq__68345_69434 = G__69460;
chunk__68346_69435 = G__69461;
count__68347_69436 = G__69462;
i__68348_69437 = G__69463;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("});");

return cljs.compiler.emit(body);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__68366){
var map__68367 = p__68366;
var map__68367__$1 = (((((!((map__68367 == null))))?(((((map__68367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68367.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68367):map__68367);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68367__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68367__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68367__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68367__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68367__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__68369_69479 = cljs.core.seq(protocols);
var chunk__68370_69480 = null;
var count__68371_69481 = (0);
var i__68372_69482 = (0);
while(true){
if((i__68372_69482 < count__68371_69481)){
var protocol_69483 = chunk__68370_69480.cljs$core$IIndexed$_nth$arity$2(null,i__68372_69482);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_69483)),"}");


var G__69484 = seq__68369_69479;
var G__69485 = chunk__68370_69480;
var G__69486 = count__68371_69481;
var G__69487 = (i__68372_69482 + (1));
seq__68369_69479 = G__69484;
chunk__68370_69480 = G__69485;
count__68371_69481 = G__69486;
i__68372_69482 = G__69487;
continue;
} else {
var temp__5753__auto___69488 = cljs.core.seq(seq__68369_69479);
if(temp__5753__auto___69488){
var seq__68369_69489__$1 = temp__5753__auto___69488;
if(cljs.core.chunked_seq_QMARK_(seq__68369_69489__$1)){
var c__4556__auto___69490 = cljs.core.chunk_first(seq__68369_69489__$1);
var G__69491 = cljs.core.chunk_rest(seq__68369_69489__$1);
var G__69492 = c__4556__auto___69490;
var G__69493 = cljs.core.count(c__4556__auto___69490);
var G__69494 = (0);
seq__68369_69479 = G__69491;
chunk__68370_69480 = G__69492;
count__68371_69481 = G__69493;
i__68372_69482 = G__69494;
continue;
} else {
var protocol_69495 = cljs.core.first(seq__68369_69489__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_69495)),"}");


var G__69496 = cljs.core.next(seq__68369_69489__$1);
var G__69497 = null;
var G__69498 = (0);
var G__69499 = (0);
seq__68369_69479 = G__69496;
chunk__68370_69480 = G__69497;
count__68371_69481 = G__69498;
i__68372_69482 = G__69499;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__68375_69506 = cljs.core.seq(fields__$1);
var chunk__68376_69507 = null;
var count__68377_69508 = (0);
var i__68378_69509 = (0);
while(true){
if((i__68378_69509 < count__68377_69508)){
var fld_69514 = chunk__68376_69507.cljs$core$IIndexed$_nth$arity$2(null,i__68378_69509);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_69514," = ",fld_69514,";");


var G__69515 = seq__68375_69506;
var G__69516 = chunk__68376_69507;
var G__69517 = count__68377_69508;
var G__69518 = (i__68378_69509 + (1));
seq__68375_69506 = G__69515;
chunk__68376_69507 = G__69516;
count__68377_69508 = G__69517;
i__68378_69509 = G__69518;
continue;
} else {
var temp__5753__auto___69519 = cljs.core.seq(seq__68375_69506);
if(temp__5753__auto___69519){
var seq__68375_69520__$1 = temp__5753__auto___69519;
if(cljs.core.chunked_seq_QMARK_(seq__68375_69520__$1)){
var c__4556__auto___69521 = cljs.core.chunk_first(seq__68375_69520__$1);
var G__69524 = cljs.core.chunk_rest(seq__68375_69520__$1);
var G__69525 = c__4556__auto___69521;
var G__69526 = cljs.core.count(c__4556__auto___69521);
var G__69527 = (0);
seq__68375_69506 = G__69524;
chunk__68376_69507 = G__69525;
count__68377_69508 = G__69526;
i__68378_69509 = G__69527;
continue;
} else {
var fld_69534 = cljs.core.first(seq__68375_69520__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_69534," = ",fld_69534,";");


var G__69535 = cljs.core.next(seq__68375_69520__$1);
var G__69536 = null;
var G__69537 = (0);
var G__69538 = (0);
seq__68375_69506 = G__69535;
chunk__68376_69507 = G__69536;
count__68377_69508 = G__69537;
i__68378_69509 = G__69538;
continue;
}
} else {
}
}
break;
}

var seq__68382_69539 = cljs.core.seq(pmasks);
var chunk__68383_69540 = null;
var count__68384_69541 = (0);
var i__68385_69542 = (0);
while(true){
if((i__68385_69542 < count__68384_69541)){
var vec__68397_69543 = chunk__68383_69540.cljs$core$IIndexed$_nth$arity$2(null,i__68385_69542);
var pno_69544 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68397_69543,(0),null);
var pmask_69545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68397_69543,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_69544,"$ = ",pmask_69545,";");


var G__69546 = seq__68382_69539;
var G__69547 = chunk__68383_69540;
var G__69548 = count__68384_69541;
var G__69549 = (i__68385_69542 + (1));
seq__68382_69539 = G__69546;
chunk__68383_69540 = G__69547;
count__68384_69541 = G__69548;
i__68385_69542 = G__69549;
continue;
} else {
var temp__5753__auto___69550 = cljs.core.seq(seq__68382_69539);
if(temp__5753__auto___69550){
var seq__68382_69551__$1 = temp__5753__auto___69550;
if(cljs.core.chunked_seq_QMARK_(seq__68382_69551__$1)){
var c__4556__auto___69552 = cljs.core.chunk_first(seq__68382_69551__$1);
var G__69553 = cljs.core.chunk_rest(seq__68382_69551__$1);
var G__69554 = c__4556__auto___69552;
var G__69555 = cljs.core.count(c__4556__auto___69552);
var G__69556 = (0);
seq__68382_69539 = G__69553;
chunk__68383_69540 = G__69554;
count__68384_69541 = G__69555;
i__68385_69542 = G__69556;
continue;
} else {
var vec__68400_69557 = cljs.core.first(seq__68382_69551__$1);
var pno_69558 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68400_69557,(0),null);
var pmask_69559 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68400_69557,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_69558,"$ = ",pmask_69559,";");


var G__69560 = cljs.core.next(seq__68382_69551__$1);
var G__69561 = null;
var G__69562 = (0);
var G__69563 = (0);
seq__68382_69539 = G__69560;
chunk__68383_69540 = G__69561;
count__68384_69541 = G__69562;
i__68385_69542 = G__69563;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("});");

return cljs.compiler.emit(body);
}));
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__68403){
var map__68407 = p__68403;
var map__68407__$1 = (((((!((map__68407 == null))))?(((((map__68407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68407.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68407):map__68407);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68407__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68407__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68407__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68407__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68407__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__57424__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__57424__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3(target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__57424__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"host-field","host-field",-72662140),(function (ast){
return cljs.compiler.emit_dot(ast);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"host-call","host-call",1059629755),(function (ast){
return cljs.compiler.emit_dot(ast);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__68411){
var map__68412 = p__68411;
var map__68412__$1 = (((((!((map__68412 == null))))?(((((map__68412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68412):map__68412);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68412__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68412__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68412__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68412__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68412__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4115__auto__ = code;
if(cljs.core.truth_(and__4115__auto__)){
return goog.string.startsWith(clojure.string.trim(code),"/*");
} else {
return and__4115__auto__;
}
})())){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(code);
} else {
var env__57424__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__57424__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(code);
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__57424__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("goog.require('cljs.core');");

var seq__68428 = cljs.core.seq(table);
var chunk__68429 = null;
var count__68430 = (0);
var i__68431 = (0);
while(true){
if((i__68431 < count__68430)){
var vec__68443 = chunk__68429.cljs$core$IIndexed$_nth$arity$2(null,i__68431);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68443,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68443,(1),null);
var ns_69591 = cljs.core.namespace(sym);
var name_69592 = cljs.core.name(sym);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword(sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol(sym);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(sym))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));

}
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(";\n");


var G__69593 = seq__68428;
var G__69594 = chunk__68429;
var G__69595 = count__68430;
var G__69596 = (i__68431 + (1));
seq__68428 = G__69593;
chunk__68429 = G__69594;
count__68430 = G__69595;
i__68431 = G__69596;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__68428);
if(temp__5753__auto__){
var seq__68428__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68428__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__68428__$1);
var G__69597 = cljs.core.chunk_rest(seq__68428__$1);
var G__69598 = c__4556__auto__;
var G__69599 = cljs.core.count(c__4556__auto__);
var G__69600 = (0);
seq__68428 = G__69597;
chunk__68429 = G__69598;
count__68430 = G__69599;
i__68431 = G__69600;
continue;
} else {
var vec__68447 = cljs.core.first(seq__68428__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68447,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68447,(1),null);
var ns_69602 = cljs.core.namespace(sym);
var name_69603 = cljs.core.name(sym);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword(sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol(sym);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(sym))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));

}
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(";\n");


var G__69605 = cljs.core.next(seq__68428__$1);
var G__69606 = null;
var G__69607 = (0);
var G__69608 = (0);
seq__68428 = G__69605;
chunk__68429 = G__69606;
count__68430 = G__69607;
i__68431 = G__69608;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_externs = (function cljs$compiler$emit_externs(var_args){
var G__68455 = arguments.length;
switch (G__68455) {
case 1:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1 = (function (externs){
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(cljs.core.PersistentVector.EMPTY,externs,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY),(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?cljs.analyzer.get_externs():null));
}));

(cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4 = (function (prefix,externs,top_level,known_externs){
var ks = cljs.core.seq(cljs.core.keys(externs));
while(true){
if(ks){
var k_69613 = cljs.core.first(ks);
var vec__68456_69614 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,k_69613);
var top_69615 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68456_69614,(0),null);
var prefix_SINGLEQUOTE__69616 = vec__68456_69614;
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_69613)) && ((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(known_externs,prefix_SINGLEQUOTE__69616) == null)))){
if((!(((cljs.core.contains_QMARK_(cljs.core.deref(top_level),top_69615)) || (cljs.core.contains_QMARK_(known_externs,top_69615)))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__69616)),";");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(top_level,cljs.core.conj,top_69615);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__69616)),";");
}
} else {
}

var m_69617 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(externs,k_69613);
if(cljs.core.empty_QMARK_(m_69617)){
} else {
cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(prefix_SINGLEQUOTE__69616,m_69617,top_level,known_externs);
}

var G__69618 = cljs.core.next(ks);
ks = G__69618;
continue;
} else {
return null;
}
break;
}
}));

(cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=cljs.compiler.js.map
