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
var map__57473 = s;
var map__57473__$1 = (((((!((map__57473 == null))))?(((((map__57473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57473.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57473):map__57473);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57473__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57473__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__57483 = info;
var map__57485 = G__57483;
var map__57485__$1 = (((((!((map__57485 == null))))?(((((map__57485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57485.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57485):map__57485);
var shadow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57485__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__57483__$1 = G__57483;
while(true){
var d__$2 = d__$1;
var map__57527 = G__57483__$1;
var map__57527__$1 = (((((!((map__57527 == null))))?(((((map__57527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57527.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57527):map__57527);
var shadow__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57527__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__60474 = (d__$2 + (1));
var G__60475 = shadow__$1;
d__$1 = G__60474;
G__57483__$1 = G__60475;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__57555){
var map__57556 = p__57555;
var map__57556__$1 = (((((!((map__57556 == null))))?(((((map__57556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57556.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57556):map__57556);
var name_var = map__57556__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57556__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57556__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__57561 = info;
var map__57561__$1 = (((((!((map__57561 == null))))?(((((map__57561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57561.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57561):map__57561);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57561__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57561__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("_$_",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__57563 = [clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),".","$"),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('');
return (cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__57563) : cljs.compiler.munge.call(null,G__57563));
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
var G__57601 = arguments.length;
switch (G__57601) {
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
var ms = (function (){var fexpr__57618 = new cljs.core.Var(function(){return cljs.core.munge_str;},new cljs.core.Symbol("cljs.core","munge-str","cljs.core/munge-str",-301346665,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"munge-str","munge-str",-2042069652,null),"cljs/core.cljs",25,1,11501,11501,new cljs.core.Symbol(null,"string","string",-349010059,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),null,(cljs.core.truth_(cljs.core.munge_str)?cljs.core.munge_str.cljs$lang$test:null)]));
return (fexpr__57618.cljs$core$IFn$_invoke$arity$1 ? fexpr__57618.cljs$core$IFn$_invoke$arity$1(ss__$3) : fexpr__57618.call(null,ss__$3));
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
var G__57628 = cp;
switch (G__57628) {
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
var seq__57634_60534 = cljs.core.seq(s);
var chunk__57635_60535 = null;
var count__57636_60536 = (0);
var i__57637_60537 = (0);
while(true){
if((i__57637_60537 < count__57636_60536)){
var c_60539 = chunk__57635_60535.cljs$core$IIndexed$_nth$arity$2(null,i__57637_60537);
sb.append(cljs.compiler.escape_char(c_60539));


var G__60540 = seq__57634_60534;
var G__60541 = chunk__57635_60535;
var G__60542 = count__57636_60536;
var G__60543 = (i__57637_60537 + (1));
seq__57634_60534 = G__60540;
chunk__57635_60535 = G__60541;
count__57636_60536 = G__60542;
i__57637_60537 = G__60543;
continue;
} else {
var temp__5753__auto___60545 = cljs.core.seq(seq__57634_60534);
if(temp__5753__auto___60545){
var seq__57634_60546__$1 = temp__5753__auto___60545;
if(cljs.core.chunked_seq_QMARK_(seq__57634_60546__$1)){
var c__4556__auto___60547 = cljs.core.chunk_first(seq__57634_60546__$1);
var G__60548 = cljs.core.chunk_rest(seq__57634_60546__$1);
var G__60549 = c__4556__auto___60547;
var G__60550 = cljs.core.count(c__4556__auto___60547);
var G__60551 = (0);
seq__57634_60534 = G__60548;
chunk__57635_60535 = G__60549;
count__57636_60536 = G__60550;
i__57637_60537 = G__60551;
continue;
} else {
var c_60554 = cljs.core.first(seq__57634_60546__$1);
sb.append(cljs.compiler.escape_char(c_60554));


var G__60555 = cljs.core.next(seq__57634_60546__$1);
var G__60556 = null;
var G__60557 = (0);
var G__60558 = (0);
seq__57634_60534 = G__60555;
chunk__57635_60535 = G__60556;
count__57636_60536 = G__60557;
i__57637_60537 = G__60558;
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
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__57658 = cljs.core.get_global_hierarchy;
return (fexpr__57658.cljs$core$IFn$_invoke$arity$0 ? fexpr__57658.cljs$core$IFn$_invoke$arity$0() : fexpr__57658.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__57665_60568 = ast;
var map__57665_60569__$1 = (((((!((map__57665_60568 == null))))?(((((map__57665_60568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57665_60568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57665_60568):map__57665_60568);
var env_60570 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57665_60569__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_60570))){
var map__57671_60572 = env_60570;
var map__57671_60573__$1 = (((((!((map__57671_60572 == null))))?(((((map__57671_60572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57671_60572.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57671_60572):map__57671_60572);
var line_60574 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57671_60573__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_60575 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57671_60573__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (m){
var minfo = (function (){var G__57677 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_((function (){var G__57679 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast);
var fexpr__57678 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__57678.cljs$core$IFn$_invoke$arity$1 ? fexpr__57678.cljs$core$IFn$_invoke$arity$1(G__57679) : fexpr__57678.call(null,G__57679));
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57677,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__57677;
}
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_60574 - (1))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (line__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_60575)?(column_60575 - (1)):(0))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (column__$1){
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
var G__57703 = arguments.length;
switch (G__57703) {
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
var len__4736__auto___60601 = arguments.length;
var i__4737__auto___60602 = (0);
while(true){
if((i__4737__auto___60602 < len__4736__auto___60601)){
args_arr__4757__auto__.push((arguments[i__4737__auto___60602]));

var G__60603 = (i__4737__auto___60602 + (1));
i__4737__auto___60602 = G__60603;
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
var s_60618 = (function (){var G__57734 = a;
if((!(typeof a === 'string'))){
return G__57734.toString();
} else {
return G__57734;
}
})();
var temp__5757__auto___60620 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5757__auto___60620 == null)){
} else {
var sm_data_60623 = temp__5757__auto___60620;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sm_data_60623,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(function (p1__57688_SHARP_){
return (p1__57688_SHARP_ + s_60618.length);
}));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_60618], 0));

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

var seq__57767 = cljs.core.seq(xs);
var chunk__57768 = null;
var count__57769 = (0);
var i__57770 = (0);
while(true){
if((i__57770 < count__57769)){
var x = chunk__57768.cljs$core$IIndexed$_nth$arity$2(null,i__57770);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__60628 = seq__57767;
var G__60629 = chunk__57768;
var G__60630 = count__57769;
var G__60631 = (i__57770 + (1));
seq__57767 = G__60628;
chunk__57768 = G__60629;
count__57769 = G__60630;
i__57770 = G__60631;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__57767);
if(temp__5753__auto__){
var seq__57767__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57767__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__57767__$1);
var G__60632 = cljs.core.chunk_rest(seq__57767__$1);
var G__60633 = c__4556__auto__;
var G__60634 = cljs.core.count(c__4556__auto__);
var G__60635 = (0);
seq__57767 = G__60632;
chunk__57768 = G__60633;
count__57769 = G__60634;
i__57770 = G__60635;
continue;
} else {
var x = cljs.core.first(seq__57767__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__60636 = cljs.core.next(seq__57767__$1);
var G__60637 = null;
var G__60638 = (0);
var G__60639 = (0);
seq__57767 = G__60636;
chunk__57768 = G__60637;
count__57769 = G__60638;
i__57770 = G__60639;
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
(cljs.compiler.emits.cljs$lang$applyTo = (function (seq57694){
var G__57695 = cljs.core.first(seq57694);
var seq57694__$1 = cljs.core.next(seq57694);
var G__57696 = cljs.core.first(seq57694__$1);
var seq57694__$2 = cljs.core.next(seq57694__$1);
var G__57697 = cljs.core.first(seq57694__$2);
var seq57694__$3 = cljs.core.next(seq57694__$2);
var G__57698 = cljs.core.first(seq57694__$3);
var seq57694__$4 = cljs.core.next(seq57694__$3);
var G__57699 = cljs.core.first(seq57694__$4);
var seq57694__$5 = cljs.core.next(seq57694__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57695,G__57696,G__57697,G__57698,G__57699,seq57694__$5);
}));

(cljs.compiler.emits.cljs$lang$maxFixedArity = (5));

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.cljs$core$IFn$_invoke$arity$0();

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (p__57807){
var map__57808 = p__57807;
var map__57808__$1 = (((((!((map__57808 == null))))?(((((map__57808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57808.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57808):map__57808);
var m = map__57808__$1;
var gen_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57808__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0)], 0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__57840 = arguments.length;
switch (G__57840) {
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
var len__4736__auto___60654 = arguments.length;
var i__4737__auto___60655 = (0);
while(true){
if((i__4737__auto___60655 < len__4736__auto___60654)){
args_arr__4757__auto__.push((arguments[i__4737__auto___60655]));

var G__60656 = (i__4737__auto___60655 + (1));
i__4737__auto___60655 = G__60656;
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

var seq__57886_60663 = cljs.core.seq(xs);
var chunk__57887_60664 = null;
var count__57888_60665 = (0);
var i__57889_60666 = (0);
while(true){
if((i__57889_60666 < count__57888_60665)){
var x_60667 = chunk__57887_60664.cljs$core$IIndexed$_nth$arity$2(null,i__57889_60666);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_60667);


var G__60668 = seq__57886_60663;
var G__60669 = chunk__57887_60664;
var G__60670 = count__57888_60665;
var G__60671 = (i__57889_60666 + (1));
seq__57886_60663 = G__60668;
chunk__57887_60664 = G__60669;
count__57888_60665 = G__60670;
i__57889_60666 = G__60671;
continue;
} else {
var temp__5753__auto___60672 = cljs.core.seq(seq__57886_60663);
if(temp__5753__auto___60672){
var seq__57886_60673__$1 = temp__5753__auto___60672;
if(cljs.core.chunked_seq_QMARK_(seq__57886_60673__$1)){
var c__4556__auto___60674 = cljs.core.chunk_first(seq__57886_60673__$1);
var G__60675 = cljs.core.chunk_rest(seq__57886_60673__$1);
var G__60676 = c__4556__auto___60674;
var G__60677 = cljs.core.count(c__4556__auto___60674);
var G__60678 = (0);
seq__57886_60663 = G__60675;
chunk__57887_60664 = G__60676;
count__57888_60665 = G__60677;
i__57889_60666 = G__60678;
continue;
} else {
var x_60680 = cljs.core.first(seq__57886_60673__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_60680);


var G__60681 = cljs.core.next(seq__57886_60673__$1);
var G__60682 = null;
var G__60683 = (0);
var G__60684 = (0);
seq__57886_60663 = G__60681;
chunk__57887_60664 = G__60682;
count__57888_60665 = G__60683;
i__57889_60666 = G__60684;
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
(cljs.compiler.emitln.cljs$lang$applyTo = (function (seq57833){
var G__57834 = cljs.core.first(seq57833);
var seq57833__$1 = cljs.core.next(seq57833);
var G__57835 = cljs.core.first(seq57833__$1);
var seq57833__$2 = cljs.core.next(seq57833__$1);
var G__57836 = cljs.core.first(seq57833__$2);
var seq57833__$3 = cljs.core.next(seq57833__$2);
var G__57837 = cljs.core.first(seq57833__$3);
var seq57833__$4 = cljs.core.next(seq57833__$3);
var G__57838 = cljs.core.first(seq57833__$4);
var seq57833__$5 = cljs.core.next(seq57833__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57834,G__57835,G__57836,G__57837,G__57838,seq57833__$5);
}));

(cljs.compiler.emitln.cljs$lang$maxFixedArity = (5));

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__57916_60695 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__57917_60696 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__57918_60697 = true;
var _STAR_print_fn_STAR__temp_val__57919_60698 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__57918_60697);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__57919_60698);

try{cljs.compiler.emit(expr);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__57917_60696);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__57916_60695);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_constant_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_constant_STAR_ = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__57936 = cljs.core.get_global_hierarchy;
return (fexpr__57936.cljs$core$IFn$_invoke$arity$0 ? fexpr__57936.cljs$core$IFn$_invoke$arity$0() : fexpr__57936.call(null));
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
var vec__57955 = cljs.analyzer.record_ns_PLUS_name(x);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57955,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57955,(1),null);
var G__57961 = ns;
var G__57962 = name;
var G__57963 = (function (){
var G__57965 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,x);
return (cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__57965) : cljs.compiler.emit_constant.call(null,G__57965));
});
return (cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3 ? cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3(G__57961,G__57962,G__57963) : cljs.compiler.emit_record_value.call(null,G__57961,G__57962,G__57963));
} else {
if(cljs.analyzer.cljs_map_QMARK_(x)){
var G__57968 = cljs.core.keys(x);
var G__57969 = cljs.core.vals(x);
var G__57970 = cljs.compiler.emit_constants_comma_sep;
var G__57971 = cljs.compiler.all_distinct_QMARK_;
return (cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4 ? cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4(G__57968,G__57969,G__57970,G__57971) : cljs.compiler.emit_map.call(null,G__57968,G__57969,G__57970,G__57971));
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
var G__57980 = (function (){
return cljs.compiler.emit_constant_no_meta(v);
});
var G__57981 = (function (){
return cljs.compiler.emit_constant_no_meta(m);
});
return (cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2(G__57980,G__57981) : cljs.compiler.emit_with_meta.call(null,G__57980,G__57981));
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
var vec__58009 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58009,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58009,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58009,(2),null);
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
var G__58034 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__58034) : x.call(null,G__58034));
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
var G__58042 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__58042) : x.call(null,G__58042));
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
var G__58068 = items;
var G__58069 = (function (p1__58060_SHARP_){
return (function (){
return cljs.compiler.emit_constant(p1__58060_SHARP_);
});
});
return (cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2(G__58068,G__58069) : cljs.compiler.emit_js_object.call(null,G__58068,G__58069));
} else {
return (cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2(items,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_js_array.call(null,items,cljs.compiler.emit_constants_comma_sep));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__58083){
var map__58084 = p__58083;
var map__58084__$1 = (((((!((map__58084 == null))))?(((((map__58084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58084):map__58084);
var ast = map__58084__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58084__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58084__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58084__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5751__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5751__auto__)){
var const_expr = temp__5751__auto__;
return cljs.compiler.emit(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__58092 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__58092__$1 = (((((!((map__58092 == null))))?(((((map__58092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58092):map__58092);
var cenv = map__58092__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58092__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__58109 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4115__auto__ = (function (){var G__58119 = new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options);
return (cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1(G__58119) : cljs.compiler.es5_GT__EQ_.call(null,G__58119));
})();
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.namespace(var_name) == null)));
} else {
return and__4115__auto__;
}
})())){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(G__58109,cljs.analyzer.es5_allowed);
} else {
return G__58109;
}
})();
var js_module = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4126__auto__ = cljs.core.namespace(var_name);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.name(var_name);
}
})()], null));
var info__$2 = (function (){var G__58128 = info__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(G__58128,reserved);
} else {
return G__58128;
}
})();
var env__57424__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__57424__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var G__58141_60749 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__58141_60750__$1 = (((G__58141_60749 instanceof cljs.core.Keyword))?G__58141_60749.fqn:null);
switch (G__58141_60750__$1) {
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__58173){
var map__58174 = p__58173;
var map__58174__$1 = (((((!((map__58174 == null))))?(((((map__58174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58174.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58174):map__58174);
var arg = map__58174__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58174__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58174__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58174__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58174__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_(sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_(meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__58202 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__58202__$1 = (((((!((map__58202 == null))))?(((((map__58202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58202.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58202):map__58202);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58202__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__58230){
var map__58231 = p__58230;
var map__58231__$1 = (((((!((map__58231 == null))))?(((((map__58231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58231.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58231):map__58231);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58231__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58231__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58231__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return ((cljs.core.every_QMARK_((function (p1__58238_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__58238_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),keys__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys__$1)),cljs.core.count(keys__$1))));
});
cljs.compiler.emit_map = (function cljs$compiler$emit_map(keys,vals,comma_sep,distinct_keys_QMARK_){
if((cljs.core.count(keys) === (0))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count(keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_((distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1(keys) : distinct_keys_QMARK_.call(null,keys)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentArrayMap(null, ",cljs.core.count(keys),", [",(function (){var G__58259 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__58259) : comma_sep.call(null,G__58259));
})(),"], null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentArrayMap.createAsIfByAssoc([",(function (){var G__58260 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__58260) : comma_sep.call(null,G__58260));
})(),"])");
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.PersistentHashMap.fromArrays([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(keys) : comma_sep.call(null,keys)),"],[",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(vals) : comma_sep.call(null,vals)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__58263){
var map__58264 = p__58263;
var map__58264__$1 = (((((!((map__58264 == null))))?(((((map__58264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58264.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58264):map__58264);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58264__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58264__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58264__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__58305){
var map__58312 = p__58305;
var map__58312__$1 = (((((!((map__58312 == null))))?(((((map__58312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58312.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58312):map__58312);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58312__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58312__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return ((cljs.core.every_QMARK_((function (p1__58341_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__58341_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),items__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,items__$1)),cljs.core.count(items__$1))));
});
cljs.compiler.emit_set = (function cljs$compiler$emit_set(items,comma_sep,distinct_constants_QMARK_){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_((distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1(items) : distinct_constants_QMARK_.call(null,items)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count(items),", [",(function (){var G__58372 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(items,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("null"));
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__58372) : comma_sep.call(null,G__58372));
})(),"], null), null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentHashSet.createAsIfByAssoc([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set","set",304602554),(function (p__58382){
var map__58383 = p__58382;
var map__58383__$1 = (((((!((map__58383 == null))))?(((((map__58383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58383.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58383):map__58383);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58383__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58383__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var temp__5753__auto___60803 = cljs.core.seq(items);
if(temp__5753__auto___60803){
var items_60806__$1 = temp__5753__auto___60803;
var vec__58394_60807 = items_60806__$1;
var seq__58395_60808 = cljs.core.seq(vec__58394_60807);
var first__58396_60809 = cljs.core.first(seq__58395_60808);
var seq__58395_60810__$1 = cljs.core.next(seq__58395_60808);
var vec__58397_60811 = first__58396_60809;
var k_60812 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58397_60811,(0),null);
var v_60813 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58397_60811,(1),null);
var r_60814 = seq__58395_60810__$1;
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4("\"",cljs.core.name(k_60812),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_60813) : emit_js_object_val.call(null,v_60813)));

var seq__58400_60816 = cljs.core.seq(r_60814);
var chunk__58401_60817 = null;
var count__58402_60818 = (0);
var i__58403_60819 = (0);
while(true){
if((i__58403_60819 < count__58402_60818)){
var vec__58423_60820 = chunk__58401_60817.cljs$core$IIndexed$_nth$arity$2(null,i__58403_60819);
var k_60821__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58423_60820,(0),null);
var v_60822__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58423_60820,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_60821__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_60822__$1) : emit_js_object_val.call(null,v_60822__$1)));


var G__60823 = seq__58400_60816;
var G__60824 = chunk__58401_60817;
var G__60825 = count__58402_60818;
var G__60826 = (i__58403_60819 + (1));
seq__58400_60816 = G__60823;
chunk__58401_60817 = G__60824;
count__58402_60818 = G__60825;
i__58403_60819 = G__60826;
continue;
} else {
var temp__5753__auto___60827__$1 = cljs.core.seq(seq__58400_60816);
if(temp__5753__auto___60827__$1){
var seq__58400_60828__$1 = temp__5753__auto___60827__$1;
if(cljs.core.chunked_seq_QMARK_(seq__58400_60828__$1)){
var c__4556__auto___60829 = cljs.core.chunk_first(seq__58400_60828__$1);
var G__60830 = cljs.core.chunk_rest(seq__58400_60828__$1);
var G__60831 = c__4556__auto___60829;
var G__60832 = cljs.core.count(c__4556__auto___60829);
var G__60833 = (0);
seq__58400_60816 = G__60830;
chunk__58401_60817 = G__60831;
count__58402_60818 = G__60832;
i__58403_60819 = G__60833;
continue;
} else {
var vec__58428_60834 = cljs.core.first(seq__58400_60828__$1);
var k_60835__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58428_60834,(0),null);
var v_60836__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58428_60834,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_60835__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_60836__$1) : emit_js_object_val.call(null,v_60836__$1)));


var G__60845 = cljs.core.next(seq__58400_60828__$1);
var G__60846 = null;
var G__60847 = (0);
var G__60848 = (0);
seq__58400_60816 = G__60845;
chunk__58401_60817 = G__60846;
count__58402_60818 = G__60847;
i__58403_60819 = G__60848;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__58441){
var map__58442 = p__58441;
var map__58442__$1 = (((((!((map__58442 == null))))?(((((map__58442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58442.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58442):map__58442);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58442__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58442__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58442__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__58453){
var map__58454 = p__58453;
var map__58454__$1 = (((((!((map__58454 == null))))?(((((map__58454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58454.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58454):map__58454);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58454__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58454__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__58467){
var map__58468 = p__58467;
var map__58468__$1 = (((((!((map__58468 == null))))?(((((map__58468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58468.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58468):map__58468);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58468__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__58475){
var map__58477 = p__58475;
var map__58477__$1 = (((((!((map__58477 == null))))?(((((map__58477.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58477.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58477):map__58477);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58477__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58477__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var map__58493 = cljs.analyzer.unwrap_quote(expr);
var map__58493__$1 = (((((!((map__58493 == null))))?(((((map__58493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58493.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58493):map__58493);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58493__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58493__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58493__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var map__58515 = cljs.analyzer.unwrap_quote(expr);
var map__58515__$1 = (((((!((map__58515 == null))))?(((((map__58515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58515.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58515):map__58515);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58515__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58515__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58515__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var or__4126__auto__ = (function (){var fexpr__58552 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null);
return (fexpr__58552.cljs$core$IFn$_invoke$arity$1 ? fexpr__58552.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__58552.call(null,tag));
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_(e);
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__58569){
var map__58570 = p__58569;
var map__58570__$1 = (((((!((map__58570 == null))))?(((((map__58570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58570.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58570):map__58570);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58570__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58570__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58570__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58570__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58570__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__58592){
var map__58593 = p__58592;
var map__58593__$1 = (((((!((map__58593 == null))))?(((((map__58593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58593.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58593):map__58593);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58593__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58593__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58593__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58593__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__58610_60890 = cljs.core.seq(nodes);
var chunk__58611_60891 = null;
var count__58612_60892 = (0);
var i__58613_60893 = (0);
while(true){
if((i__58613_60893 < count__58612_60892)){
var map__58746_60894 = chunk__58611_60891.cljs$core$IIndexed$_nth$arity$2(null,i__58613_60893);
var map__58746_60895__$1 = (((((!((map__58746_60894 == null))))?(((((map__58746_60894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58746_60894.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58746_60894):map__58746_60894);
var ts_60896 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58746_60895__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__58748_60897 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58746_60895__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__58748_60898__$1 = (((((!((map__58748_60897 == null))))?(((((map__58748_60897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58748_60897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58748_60897):map__58748_60897);
var then_60899 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58748_60898__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__58771_60914 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_60896));
var chunk__58772_60915 = null;
var count__58773_60916 = (0);
var i__58774_60917 = (0);
while(true){
if((i__58774_60917 < count__58773_60916)){
var test_60924 = chunk__58772_60915.cljs$core$IIndexed$_nth$arity$2(null,i__58774_60917);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_60924,":");


var G__60929 = seq__58771_60914;
var G__60930 = chunk__58772_60915;
var G__60931 = count__58773_60916;
var G__60932 = (i__58774_60917 + (1));
seq__58771_60914 = G__60929;
chunk__58772_60915 = G__60930;
count__58773_60916 = G__60931;
i__58774_60917 = G__60932;
continue;
} else {
var temp__5753__auto___60936 = cljs.core.seq(seq__58771_60914);
if(temp__5753__auto___60936){
var seq__58771_60938__$1 = temp__5753__auto___60936;
if(cljs.core.chunked_seq_QMARK_(seq__58771_60938__$1)){
var c__4556__auto___60943 = cljs.core.chunk_first(seq__58771_60938__$1);
var G__60944 = cljs.core.chunk_rest(seq__58771_60938__$1);
var G__60945 = c__4556__auto___60943;
var G__60946 = cljs.core.count(c__4556__auto___60943);
var G__60947 = (0);
seq__58771_60914 = G__60944;
chunk__58772_60915 = G__60945;
count__58773_60916 = G__60946;
i__58774_60917 = G__60947;
continue;
} else {
var test_60949 = cljs.core.first(seq__58771_60938__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_60949,":");


var G__60950 = cljs.core.next(seq__58771_60938__$1);
var G__60952 = null;
var G__60956 = (0);
var G__60957 = (0);
seq__58771_60914 = G__60950;
chunk__58772_60915 = G__60952;
count__58773_60916 = G__60956;
i__58774_60917 = G__60957;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_60899);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_60899);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__60969 = seq__58610_60890;
var G__60970 = chunk__58611_60891;
var G__60971 = count__58612_60892;
var G__60972 = (i__58613_60893 + (1));
seq__58610_60890 = G__60969;
chunk__58611_60891 = G__60970;
count__58612_60892 = G__60971;
i__58613_60893 = G__60972;
continue;
} else {
var temp__5753__auto___60974 = cljs.core.seq(seq__58610_60890);
if(temp__5753__auto___60974){
var seq__58610_60975__$1 = temp__5753__auto___60974;
if(cljs.core.chunked_seq_QMARK_(seq__58610_60975__$1)){
var c__4556__auto___60980 = cljs.core.chunk_first(seq__58610_60975__$1);
var G__60982 = cljs.core.chunk_rest(seq__58610_60975__$1);
var G__60983 = c__4556__auto___60980;
var G__60984 = cljs.core.count(c__4556__auto___60980);
var G__60985 = (0);
seq__58610_60890 = G__60982;
chunk__58611_60891 = G__60983;
count__58612_60892 = G__60984;
i__58613_60893 = G__60985;
continue;
} else {
var map__58839_60990 = cljs.core.first(seq__58610_60975__$1);
var map__58839_60991__$1 = (((((!((map__58839_60990 == null))))?(((((map__58839_60990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58839_60990.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58839_60990):map__58839_60990);
var ts_60992 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58839_60991__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__58841_60993 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58839_60991__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__58841_60994__$1 = (((((!((map__58841_60993 == null))))?(((((map__58841_60993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58841_60993.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58841_60993):map__58841_60993);
var then_60995 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58841_60994__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__58864_61011 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_60992));
var chunk__58865_61012 = null;
var count__58866_61013 = (0);
var i__58867_61014 = (0);
while(true){
if((i__58867_61014 < count__58866_61013)){
var test_61019 = chunk__58865_61012.cljs$core$IIndexed$_nth$arity$2(null,i__58867_61014);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_61019,":");


var G__61023 = seq__58864_61011;
var G__61024 = chunk__58865_61012;
var G__61025 = count__58866_61013;
var G__61026 = (i__58867_61014 + (1));
seq__58864_61011 = G__61023;
chunk__58865_61012 = G__61024;
count__58866_61013 = G__61025;
i__58867_61014 = G__61026;
continue;
} else {
var temp__5753__auto___61029__$1 = cljs.core.seq(seq__58864_61011);
if(temp__5753__auto___61029__$1){
var seq__58864_61034__$1 = temp__5753__auto___61029__$1;
if(cljs.core.chunked_seq_QMARK_(seq__58864_61034__$1)){
var c__4556__auto___61035 = cljs.core.chunk_first(seq__58864_61034__$1);
var G__61037 = cljs.core.chunk_rest(seq__58864_61034__$1);
var G__61038 = c__4556__auto___61035;
var G__61039 = cljs.core.count(c__4556__auto___61035);
var G__61040 = (0);
seq__58864_61011 = G__61037;
chunk__58865_61012 = G__61038;
count__58866_61013 = G__61039;
i__58867_61014 = G__61040;
continue;
} else {
var test_61045 = cljs.core.first(seq__58864_61034__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_61045,":");


var G__61047 = cljs.core.next(seq__58864_61034__$1);
var G__61049 = null;
var G__61050 = (0);
var G__61052 = (0);
seq__58864_61011 = G__61047;
chunk__58865_61012 = G__61049;
count__58866_61013 = G__61050;
i__58867_61014 = G__61052;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_60995);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_60995);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__61062 = cljs.core.next(seq__58610_60975__$1);
var G__61063 = null;
var G__61064 = (0);
var G__61065 = (0);
seq__58610_60890 = G__61062;
chunk__58611_60891 = G__61063;
count__58612_60892 = G__61064;
i__58613_60893 = G__61065;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__58883){
var map__58884 = p__58883;
var map__58884__$1 = (((((!((map__58884 == null))))?(((((map__58884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58884.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58884):map__58884);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58884__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58884__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__58904 = env;
var G__58905 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(t,(1));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__58904,G__58905) : cljs.compiler.resolve_type.call(null,G__58904,G__58905));
})())].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__58910 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),idx),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(idx + (1)),cljs.core.count(t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58910,(0),null);
var rstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58910,(1),null);
var ret_t = (cljs.core.truth_(rstr)?(cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,rstr) : cljs.compiler.resolve_type.call(null,env,rstr)):null);
var axstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fstr,(9),(cljs.core.count(fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_(axstr))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__58893_SHARP_){
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,p1__58893_SHARP_) : cljs.compiler.resolve_type.call(null,env,p1__58893_SHARP_));
}),clojure.string.trim),clojure.string.split.cljs$core$IFn$_invoke$arity$2(axstr,/,/)));
var G__58971 = ["function(",clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",args_ts),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__58971,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__58971;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__58976 = env;
var G__58977 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),(cljs.core.count(t) - (1)));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__58976,G__58977) : cljs.compiler.resolve_type.call(null,G__58976,G__58977));
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
return ["{",clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58988_SHARP_){
return cljs.compiler.resolve_type(env,p1__58988_SHARP_);
}),xs)),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find(/@param/,line))){
var vec__58998 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__58999 = cljs.core.seq(vec__58998);
var first__59000 = cljs.core.first(seq__58999);
var seq__58999__$1 = cljs.core.next(seq__58999);
var p = first__59000;
var first__59000__$1 = cljs.core.first(seq__58999__$1);
var seq__58999__$2 = cljs.core.next(seq__58999__$1);
var ts = first__59000__$1;
var first__59000__$2 = cljs.core.first(seq__58999__$2);
var seq__58999__$3 = cljs.core.next(seq__58999__$2);
var n = first__59000__$2;
var xs = seq__58999__$3;
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
var vec__59008 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__59009 = cljs.core.seq(vec__59008);
var first__59010 = cljs.core.first(seq__59009);
var seq__59009__$1 = cljs.core.next(seq__59009);
var p = first__59010;
var first__59010__$1 = cljs.core.first(seq__59009__$1);
var seq__59009__$2 = cljs.core.next(seq__59009__$1);
var ts = first__59010__$1;
var xs = seq__59009__$2;
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
var G__59020 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null));
var fexpr__59019 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null);
return (fexpr__59019.cljs$core$IFn$_invoke$arity$1 ? fexpr__59019.cljs$core$IFn$_invoke$arity$1(G__59020) : fexpr__59019.call(null,G__59020));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__59032 = arguments.length;
switch (G__59032) {
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
var vec__59080 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59021_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())){
return cljs.compiler.munge_param_return(env,p1__59021_SHARP_);
} else {
return p1__59021_SHARP_;
}
}),clojure.string.split_lines(e));
var seq__59081 = cljs.core.seq(vec__59080);
var first__59082 = cljs.core.first(seq__59081);
var seq__59081__$1 = cljs.core.next(seq__59081);
var x = first__59082;
var ys = seq__59081__$1;
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(x,"*/","* /"));

var seq__59088 = cljs.core.seq(ys);
var chunk__59089 = null;
var count__59090 = (0);
var i__59091 = (0);
while(true){
if((i__59091 < count__59090)){
var next_line = chunk__59089.cljs$core$IIndexed$_nth$arity$2(null,i__59091);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__61139 = seq__59088;
var G__61140 = chunk__59089;
var G__61141 = count__59090;
var G__61142 = (i__59091 + (1));
seq__59088 = G__61139;
chunk__59089 = G__61140;
count__59090 = G__61141;
i__59091 = G__61142;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__59088);
if(temp__5753__auto__){
var seq__59088__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59088__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__59088__$1);
var G__61149 = cljs.core.chunk_rest(seq__59088__$1);
var G__61150 = c__4556__auto__;
var G__61151 = cljs.core.count(c__4556__auto__);
var G__61152 = (0);
seq__59088 = G__61149;
chunk__59089 = G__61150;
count__59090 = G__61151;
i__59091 = G__61152;
continue;
} else {
var next_line = cljs.core.first(seq__59088__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__61158 = cljs.core.next(seq__59088__$1);
var G__61159 = null;
var G__61160 = (0);
var G__61161 = (0);
seq__59088 = G__61158;
chunk__59089 = G__61159;
count__59090 = G__61160;
i__59091 = G__61161;
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

var seq__59112_61165 = cljs.core.seq(docs__$2);
var chunk__59113_61166 = null;
var count__59114_61167 = (0);
var i__59115_61168 = (0);
while(true){
if((i__59115_61168 < count__59114_61167)){
var e_61173 = chunk__59113_61166.cljs$core$IIndexed$_nth$arity$2(null,i__59115_61168);
if(cljs.core.truth_(e_61173)){
print_comment_lines(e_61173);
} else {
}


var G__61175 = seq__59112_61165;
var G__61176 = chunk__59113_61166;
var G__61177 = count__59114_61167;
var G__61178 = (i__59115_61168 + (1));
seq__59112_61165 = G__61175;
chunk__59113_61166 = G__61176;
count__59114_61167 = G__61177;
i__59115_61168 = G__61178;
continue;
} else {
var temp__5753__auto___61180 = cljs.core.seq(seq__59112_61165);
if(temp__5753__auto___61180){
var seq__59112_61182__$1 = temp__5753__auto___61180;
if(cljs.core.chunked_seq_QMARK_(seq__59112_61182__$1)){
var c__4556__auto___61187 = cljs.core.chunk_first(seq__59112_61182__$1);
var G__61188 = cljs.core.chunk_rest(seq__59112_61182__$1);
var G__61189 = c__4556__auto___61187;
var G__61190 = cljs.core.count(c__4556__auto___61187);
var G__61191 = (0);
seq__59112_61165 = G__61188;
chunk__59113_61166 = G__61189;
count__59114_61167 = G__61190;
i__59115_61168 = G__61191;
continue;
} else {
var e_61195 = cljs.core.first(seq__59112_61182__$1);
if(cljs.core.truth_(e_61195)){
print_comment_lines(e_61195);
} else {
}


var G__61196 = cljs.core.next(seq__59112_61182__$1);
var G__61197 = null;
var G__61198 = (0);
var G__61199 = (0);
seq__59112_61165 = G__61196;
chunk__59113_61166 = G__61197;
count__59114_61167 = G__61198;
i__59115_61168 = G__61199;
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
var and__4115__auto__ = cljs.core.some((function (p1__59151_SHARP_){
return goog.string.startsWith(p1__59151_SHARP_,"@define");
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__59168){
var map__59169 = p__59168;
var map__59169__$1 = (((((!((map__59169 == null))))?(((((map__59169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59169.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59169):map__59169);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59169__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59169__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59169__$1,new cljs.core.Keyword(null,"test","test",577538877));
var goog_define = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59169__$1,new cljs.core.Keyword(null,"goog-define","goog-define",-1048305441));
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59169__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59169__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59169__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59169__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59169__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59169__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__59194){
var map__59197 = p__59194;
var map__59197__$1 = (((((!((map__59197 == null))))?(((((map__59197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59197.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59197):map__59197);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59197__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59197__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59197__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name)),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("(function (",arglist,"){");

var seq__59211_61233 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),params)));
var chunk__59212_61234 = null;
var count__59213_61235 = (0);
var i__59214_61236 = (0);
while(true){
if((i__59214_61236 < count__59213_61235)){
var vec__59237_61238 = chunk__59212_61234.cljs$core$IIndexed$_nth$arity$2(null,i__59214_61236);
var i_61239 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59237_61238,(0),null);
var param_61240 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59237_61238,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_61240);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__61241 = seq__59211_61233;
var G__61242 = chunk__59212_61234;
var G__61243 = count__59213_61235;
var G__61244 = (i__59214_61236 + (1));
seq__59211_61233 = G__61241;
chunk__59212_61234 = G__61242;
count__59213_61235 = G__61243;
i__59214_61236 = G__61244;
continue;
} else {
var temp__5753__auto___61246 = cljs.core.seq(seq__59211_61233);
if(temp__5753__auto___61246){
var seq__59211_61247__$1 = temp__5753__auto___61246;
if(cljs.core.chunked_seq_QMARK_(seq__59211_61247__$1)){
var c__4556__auto___61248 = cljs.core.chunk_first(seq__59211_61247__$1);
var G__61249 = cljs.core.chunk_rest(seq__59211_61247__$1);
var G__61250 = c__4556__auto___61248;
var G__61251 = cljs.core.count(c__4556__auto___61248);
var G__61252 = (0);
seq__59211_61233 = G__61249;
chunk__59212_61234 = G__61250;
count__59213_61235 = G__61251;
i__59214_61236 = G__61252;
continue;
} else {
var vec__59248_61254 = cljs.core.first(seq__59211_61247__$1);
var i_61255 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59248_61254,(0),null);
var param_61256 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59248_61254,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_61256);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__61257 = cljs.core.next(seq__59211_61247__$1);
var G__61258 = null;
var G__61259 = (0);
var G__61260 = (0);
seq__59211_61233 = G__61257;
chunk__59212_61234 = G__61258;
count__59213_61235 = G__61259;
i__59214_61236 = G__61260;
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

var seq__59254_61264 = cljs.core.seq(params);
var chunk__59255_61265 = null;
var count__59256_61266 = (0);
var i__59257_61267 = (0);
while(true){
if((i__59257_61267 < count__59256_61266)){
var param_61268 = chunk__59255_61265.cljs$core$IIndexed$_nth$arity$2(null,i__59257_61267);
cljs.compiler.emit(param_61268);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_61268,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__61269 = seq__59254_61264;
var G__61270 = chunk__59255_61265;
var G__61271 = count__59256_61266;
var G__61272 = (i__59257_61267 + (1));
seq__59254_61264 = G__61269;
chunk__59255_61265 = G__61270;
count__59256_61266 = G__61271;
i__59257_61267 = G__61272;
continue;
} else {
var temp__5753__auto___61274 = cljs.core.seq(seq__59254_61264);
if(temp__5753__auto___61274){
var seq__59254_61275__$1 = temp__5753__auto___61274;
if(cljs.core.chunked_seq_QMARK_(seq__59254_61275__$1)){
var c__4556__auto___61277 = cljs.core.chunk_first(seq__59254_61275__$1);
var G__61278 = cljs.core.chunk_rest(seq__59254_61275__$1);
var G__61279 = c__4556__auto___61277;
var G__61280 = cljs.core.count(c__4556__auto___61277);
var G__61281 = (0);
seq__59254_61264 = G__61278;
chunk__59255_61265 = G__61279;
count__59256_61266 = G__61280;
i__59257_61267 = G__61281;
continue;
} else {
var param_61283 = cljs.core.first(seq__59254_61275__$1);
cljs.compiler.emit(param_61283);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_61283,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__61284 = cljs.core.next(seq__59254_61275__$1);
var G__61285 = null;
var G__61286 = (0);
var G__61287 = (0);
seq__59254_61264 = G__61284;
chunk__59255_61265 = G__61285;
count__59256_61266 = G__61286;
i__59257_61267 = G__61287;
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

var seq__59286_61288 = cljs.core.seq(params);
var chunk__59287_61289 = null;
var count__59288_61290 = (0);
var i__59289_61291 = (0);
while(true){
if((i__59289_61291 < count__59288_61290)){
var param_61293 = chunk__59287_61289.cljs$core$IIndexed$_nth$arity$2(null,i__59289_61291);
cljs.compiler.emit(param_61293);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_61293,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__61294 = seq__59286_61288;
var G__61295 = chunk__59287_61289;
var G__61296 = count__59288_61290;
var G__61297 = (i__59289_61291 + (1));
seq__59286_61288 = G__61294;
chunk__59287_61289 = G__61295;
count__59288_61290 = G__61296;
i__59289_61291 = G__61297;
continue;
} else {
var temp__5753__auto___61298 = cljs.core.seq(seq__59286_61288);
if(temp__5753__auto___61298){
var seq__59286_61299__$1 = temp__5753__auto___61298;
if(cljs.core.chunked_seq_QMARK_(seq__59286_61299__$1)){
var c__4556__auto___61301 = cljs.core.chunk_first(seq__59286_61299__$1);
var G__61302 = cljs.core.chunk_rest(seq__59286_61299__$1);
var G__61303 = c__4556__auto___61301;
var G__61304 = cljs.core.count(c__4556__auto___61301);
var G__61305 = (0);
seq__59286_61288 = G__61302;
chunk__59287_61289 = G__61303;
count__59288_61290 = G__61304;
i__59289_61291 = G__61305;
continue;
} else {
var param_61306 = cljs.core.first(seq__59286_61299__$1);
cljs.compiler.emit(param_61306);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_61306,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__61307 = cljs.core.next(seq__59286_61299__$1);
var G__61308 = null;
var G__61309 = (0);
var G__61310 = (0);
seq__59286_61288 = G__61307;
chunk__59287_61289 = G__61308;
count__59288_61290 = G__61309;
i__59289_61291 = G__61310;
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
var seq__59313 = cljs.core.seq(params);
var chunk__59314 = null;
var count__59315 = (0);
var i__59316 = (0);
while(true){
if((i__59316 < count__59315)){
var param = chunk__59314.cljs$core$IIndexed$_nth$arity$2(null,i__59316);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__61320 = seq__59313;
var G__61321 = chunk__59314;
var G__61322 = count__59315;
var G__61323 = (i__59316 + (1));
seq__59313 = G__61320;
chunk__59314 = G__61321;
count__59315 = G__61322;
i__59316 = G__61323;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__59313);
if(temp__5753__auto__){
var seq__59313__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59313__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__59313__$1);
var G__61326 = cljs.core.chunk_rest(seq__59313__$1);
var G__61327 = c__4556__auto__;
var G__61328 = cljs.core.count(c__4556__auto__);
var G__61329 = (0);
seq__59313 = G__61326;
chunk__59314 = G__61327;
count__59315 = G__61328;
i__59316 = G__61329;
continue;
} else {
var param = cljs.core.first(seq__59313__$1);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__61330 = cljs.core.next(seq__59313__$1);
var G__61331 = null;
var G__61332 = (0);
var G__61333 = (0);
seq__59313 = G__61330;
chunk__59314 = G__61331;
count__59315 = G__61332;
i__59316 = G__61333;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__59367){
var map__59368 = p__59367;
var map__59368__$1 = (((((!((map__59368 == null))))?(((((map__59368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59368):map__59368);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59368__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59368__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59368__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59368__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59368__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59368__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__59394){
var map__59399 = p__59394;
var map__59399__$1 = (((((!((map__59399 == null))))?(((((map__59399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59399.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59399):map__59399);
var f = map__59399__$1;
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59399__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59399__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59399__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59399__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59399__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59399__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59399__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59399__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__57424__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__57424__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var name_61345__$1 = (function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_61346 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_61345__$1);
var delegate_name_61347 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_61346),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() { ");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",delegate_name_61347," = function (");

var seq__59420_61348 = cljs.core.seq(params);
var chunk__59421_61349 = null;
var count__59422_61350 = (0);
var i__59423_61351 = (0);
while(true){
if((i__59423_61351 < count__59422_61350)){
var param_61352 = chunk__59421_61349.cljs$core$IIndexed$_nth$arity$2(null,i__59423_61351);
cljs.compiler.emit(param_61352);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_61352,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__61354 = seq__59420_61348;
var G__61355 = chunk__59421_61349;
var G__61356 = count__59422_61350;
var G__61357 = (i__59423_61351 + (1));
seq__59420_61348 = G__61354;
chunk__59421_61349 = G__61355;
count__59422_61350 = G__61356;
i__59423_61351 = G__61357;
continue;
} else {
var temp__5753__auto___61359 = cljs.core.seq(seq__59420_61348);
if(temp__5753__auto___61359){
var seq__59420_61361__$1 = temp__5753__auto___61359;
if(cljs.core.chunked_seq_QMARK_(seq__59420_61361__$1)){
var c__4556__auto___61363 = cljs.core.chunk_first(seq__59420_61361__$1);
var G__61364 = cljs.core.chunk_rest(seq__59420_61361__$1);
var G__61365 = c__4556__auto___61363;
var G__61366 = cljs.core.count(c__4556__auto___61363);
var G__61367 = (0);
seq__59420_61348 = G__61364;
chunk__59421_61349 = G__61365;
count__59422_61350 = G__61366;
i__59423_61351 = G__61367;
continue;
} else {
var param_61368 = cljs.core.first(seq__59420_61361__$1);
cljs.compiler.emit(param_61368);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_61368,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__61372 = cljs.core.next(seq__59420_61361__$1);
var G__61373 = null;
var G__61374 = (0);
var G__61375 = (0);
seq__59420_61348 = G__61372;
chunk__59421_61349 = G__61373;
count__59422_61350 = G__61374;
i__59423_61351 = G__61375;
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

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",mname_61346," = function (",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",(cljs.core.count(params) - (1)),") {");

var a_61378 = cljs.compiler.emit_arguments_to_array((cljs.core.count(params) - (1)));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("  ",cljs.core.last(params)," = new cljs.core.IndexedSeq(",a_61378,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("} ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name_61347,".call(this,");

var seq__59478_61379 = cljs.core.seq(params);
var chunk__59479_61380 = null;
var count__59480_61381 = (0);
var i__59481_61382 = (0);
while(true){
if((i__59481_61382 < count__59480_61381)){
var param_61383 = chunk__59479_61380.cljs$core$IIndexed$_nth$arity$2(null,i__59481_61382);
cljs.compiler.emit(param_61383);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_61383,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__61385 = seq__59478_61379;
var G__61386 = chunk__59479_61380;
var G__61387 = count__59480_61381;
var G__61388 = (i__59481_61382 + (1));
seq__59478_61379 = G__61385;
chunk__59479_61380 = G__61386;
count__59480_61381 = G__61387;
i__59481_61382 = G__61388;
continue;
} else {
var temp__5753__auto___61389 = cljs.core.seq(seq__59478_61379);
if(temp__5753__auto___61389){
var seq__59478_61390__$1 = temp__5753__auto___61389;
if(cljs.core.chunked_seq_QMARK_(seq__59478_61390__$1)){
var c__4556__auto___61392 = cljs.core.chunk_first(seq__59478_61390__$1);
var G__61393 = cljs.core.chunk_rest(seq__59478_61390__$1);
var G__61394 = c__4556__auto___61392;
var G__61395 = cljs.core.count(c__4556__auto___61392);
var G__61396 = (0);
seq__59478_61379 = G__61393;
chunk__59479_61380 = G__61394;
count__59480_61381 = G__61395;
i__59481_61382 = G__61396;
continue;
} else {
var param_61398 = cljs.core.first(seq__59478_61390__$1);
cljs.compiler.emit(param_61398);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_61398,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__61399 = cljs.core.next(seq__59478_61390__$1);
var G__61400 = null;
var G__61401 = (0);
var G__61402 = (0);
seq__59478_61379 = G__61399;
chunk__59479_61380 = G__61400;
count__59480_61381 = G__61401;
i__59481_61382 = G__61402;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_61346,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(mname_61346,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.Keyword(null,"name","name",1843675177),name_61345__$1));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_61346,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_61347,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_61346,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__57424__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__59517){
var map__59518 = p__59517;
var map__59518__$1 = (((((!((map__59518 == null))))?(((((map__59518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59518.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59518):map__59518);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59518__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59518__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59518__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59518__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59518__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59518__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var in_loop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59518__$1,new cljs.core.Keyword(null,"in-loop","in-loop",-187298246));
var loop_lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59518__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var recur_params = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__59504_SHARP_){
var and__4115__auto__ = p1__59504_SHARP_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.deref(new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__59504_SHARP_));
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
var name_61422__$1 = (function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_61423 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_61422__$1);
var maxparams_61424 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_61425 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_61423),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
}),methods$));
var ms_61426 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__59506_SHARP_){
return cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__59506_SHARP_)));
}),cljs.core.seq(mmap_61425));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() {");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",mname_61423," = null;");

var seq__59537_61430 = cljs.core.seq(ms_61426);
var chunk__59538_61431 = null;
var count__59539_61432 = (0);
var i__59540_61433 = (0);
while(true){
if((i__59540_61433 < count__59539_61432)){
var vec__59572_61434 = chunk__59538_61431.cljs$core$IIndexed$_nth$arity$2(null,i__59540_61433);
var n_61435 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59572_61434,(0),null);
var meth_61436 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59572_61434,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_61435," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_61436))){
cljs.compiler.emit_variadic_fn_method(meth_61436);
} else {
cljs.compiler.emit_fn_method(meth_61436);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__61442 = seq__59537_61430;
var G__61443 = chunk__59538_61431;
var G__61444 = count__59539_61432;
var G__61445 = (i__59540_61433 + (1));
seq__59537_61430 = G__61442;
chunk__59538_61431 = G__61443;
count__59539_61432 = G__61444;
i__59540_61433 = G__61445;
continue;
} else {
var temp__5753__auto___61450 = cljs.core.seq(seq__59537_61430);
if(temp__5753__auto___61450){
var seq__59537_61451__$1 = temp__5753__auto___61450;
if(cljs.core.chunked_seq_QMARK_(seq__59537_61451__$1)){
var c__4556__auto___61452 = cljs.core.chunk_first(seq__59537_61451__$1);
var G__61453 = cljs.core.chunk_rest(seq__59537_61451__$1);
var G__61454 = c__4556__auto___61452;
var G__61455 = cljs.core.count(c__4556__auto___61452);
var G__61456 = (0);
seq__59537_61430 = G__61453;
chunk__59538_61431 = G__61454;
count__59539_61432 = G__61455;
i__59540_61433 = G__61456;
continue;
} else {
var vec__59577_61457 = cljs.core.first(seq__59537_61451__$1);
var n_61458 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59577_61457,(0),null);
var meth_61459 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59577_61457,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_61458," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_61459))){
cljs.compiler.emit_variadic_fn_method(meth_61459);
} else {
cljs.compiler.emit_fn_method(meth_61459);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__61460 = cljs.core.next(seq__59537_61451__$1);
var G__61461 = null;
var G__61462 = (0);
var G__61463 = (0);
seq__59537_61430 = G__61460;
chunk__59538_61431 = G__61461;
count__59539_61432 = G__61462;
i__59540_61433 = G__61463;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_61423," = function(",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(maxparams_61424),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_61424)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(maxparams_61424));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = var_args;");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("switch(arguments.length){");

var seq__59582_61464 = cljs.core.seq(ms_61426);
var chunk__59583_61465 = null;
var count__59584_61466 = (0);
var i__59585_61470 = (0);
while(true){
if((i__59585_61470 < count__59584_61466)){
var vec__59627_61481 = chunk__59583_61465.cljs$core$IIndexed$_nth$arity$2(null,i__59585_61470);
var n_61482 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59627_61481,(0),null);
var meth_61483 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59627_61481,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_61483))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_61487 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_61487," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_61488 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_61487," = new cljs.core.IndexedSeq(",a_61488,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_61482,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_61424)),(((cljs.core.count(maxparams_61424) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_61487,");"], 0));
} else {
var pcnt_61490 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_61483));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_61490,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_61482,".call(this",(((pcnt_61490 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_61490,maxparams_61424)),null,(1),null)),(2),null))),");");
}


var G__61501 = seq__59582_61464;
var G__61502 = chunk__59583_61465;
var G__61503 = count__59584_61466;
var G__61504 = (i__59585_61470 + (1));
seq__59582_61464 = G__61501;
chunk__59583_61465 = G__61502;
count__59584_61466 = G__61503;
i__59585_61470 = G__61504;
continue;
} else {
var temp__5753__auto___61505 = cljs.core.seq(seq__59582_61464);
if(temp__5753__auto___61505){
var seq__59582_61506__$1 = temp__5753__auto___61505;
if(cljs.core.chunked_seq_QMARK_(seq__59582_61506__$1)){
var c__4556__auto___61507 = cljs.core.chunk_first(seq__59582_61506__$1);
var G__61508 = cljs.core.chunk_rest(seq__59582_61506__$1);
var G__61509 = c__4556__auto___61507;
var G__61510 = cljs.core.count(c__4556__auto___61507);
var G__61511 = (0);
seq__59582_61464 = G__61508;
chunk__59583_61465 = G__61509;
count__59584_61466 = G__61510;
i__59585_61470 = G__61511;
continue;
} else {
var vec__59641_61513 = cljs.core.first(seq__59582_61506__$1);
var n_61514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59641_61513,(0),null);
var meth_61515 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59641_61513,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_61515))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_61516 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_61516," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_61519 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_61516," = new cljs.core.IndexedSeq(",a_61519,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_61514,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_61424)),(((cljs.core.count(maxparams_61424) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_61516,");"], 0));
} else {
var pcnt_61524 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_61515));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_61524,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_61514,".call(this",(((pcnt_61524 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_61524,maxparams_61424)),null,(1),null)),(2),null))),");");
}


var G__61527 = cljs.core.next(seq__59582_61506__$1);
var G__61528 = null;
var G__61529 = (0);
var G__61530 = (0);
seq__59582_61464 = G__61527;
chunk__59583_61465 = G__61528;
count__59584_61466 = G__61529;
i__59585_61470 = G__61530;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

var arg_count_js_61531 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val(cljs.core.first(ms_61426)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("throw(new Error('Invalid arity: ' + ",arg_count_js_61531,"));");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_61423,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_61423,".cljs$lang$applyTo = ",cljs.core.some((function (p1__59513_SHARP_){
var vec__59653 = p1__59513_SHARP_;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59653,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59653,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
}),ms_61426),".cljs$lang$applyTo;");
} else {
}

var seq__59658_61536 = cljs.core.seq(ms_61426);
var chunk__59659_61537 = null;
var count__59660_61538 = (0);
var i__59661_61539 = (0);
while(true){
if((i__59661_61539 < count__59660_61538)){
var vec__59686_61540 = chunk__59659_61537.cljs$core$IIndexed$_nth$arity$2(null,i__59661_61539);
var n_61541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59686_61540,(0),null);
var meth_61542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59686_61540,(1),null);
var c_61544 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_61542));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_61542))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_61423,".cljs$core$IFn$_invoke$arity$variadic = ",n_61541,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_61423,".cljs$core$IFn$_invoke$arity$",c_61544," = ",n_61541,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__61547 = seq__59658_61536;
var G__61548 = chunk__59659_61537;
var G__61549 = count__59660_61538;
var G__61550 = (i__59661_61539 + (1));
seq__59658_61536 = G__61547;
chunk__59659_61537 = G__61548;
count__59660_61538 = G__61549;
i__59661_61539 = G__61550;
continue;
} else {
var temp__5753__auto___61551 = cljs.core.seq(seq__59658_61536);
if(temp__5753__auto___61551){
var seq__59658_61552__$1 = temp__5753__auto___61551;
if(cljs.core.chunked_seq_QMARK_(seq__59658_61552__$1)){
var c__4556__auto___61553 = cljs.core.chunk_first(seq__59658_61552__$1);
var G__61554 = cljs.core.chunk_rest(seq__59658_61552__$1);
var G__61555 = c__4556__auto___61553;
var G__61556 = cljs.core.count(c__4556__auto___61553);
var G__61557 = (0);
seq__59658_61536 = G__61554;
chunk__59659_61537 = G__61555;
count__59660_61538 = G__61556;
i__59661_61539 = G__61557;
continue;
} else {
var vec__59713_61558 = cljs.core.first(seq__59658_61552__$1);
var n_61559 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59713_61558,(0),null);
var meth_61560 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59713_61558,(1),null);
var c_61561 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_61560));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_61560))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_61423,".cljs$core$IFn$_invoke$arity$variadic = ",n_61559,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_61423,".cljs$core$IFn$_invoke$arity$",c_61561," = ",n_61559,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__61565 = cljs.core.next(seq__59658_61552__$1);
var G__61566 = null;
var G__61567 = (0);
var G__61568 = (0);
seq__59658_61536 = G__61565;
chunk__59659_61537 = G__61566;
count__59660_61538 = G__61567;
i__59661_61539 = G__61568;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_61423,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");
}

if(loop_locals){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(";})(",cljs.compiler.comma_sep(loop_locals),"))");
} else {
return null;
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"do","do",46310725),(function (p__59722){
var map__59723 = p__59722;
var map__59723__$1 = (((((!((map__59723 == null))))?(((((map__59723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59723.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59723):map__59723);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59723__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59723__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59723__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq(statements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__59726_61582 = cljs.core.seq(statements);
var chunk__59727_61583 = null;
var count__59728_61584 = (0);
var i__59729_61585 = (0);
while(true){
if((i__59729_61585 < count__59728_61584)){
var s_61586 = chunk__59727_61583.cljs$core$IIndexed$_nth$arity$2(null,i__59729_61585);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_61586);


var G__61591 = seq__59726_61582;
var G__61592 = chunk__59727_61583;
var G__61593 = count__59728_61584;
var G__61594 = (i__59729_61585 + (1));
seq__59726_61582 = G__61591;
chunk__59727_61583 = G__61592;
count__59728_61584 = G__61593;
i__59729_61585 = G__61594;
continue;
} else {
var temp__5753__auto___61595 = cljs.core.seq(seq__59726_61582);
if(temp__5753__auto___61595){
var seq__59726_61597__$1 = temp__5753__auto___61595;
if(cljs.core.chunked_seq_QMARK_(seq__59726_61597__$1)){
var c__4556__auto___61599 = cljs.core.chunk_first(seq__59726_61597__$1);
var G__61600 = cljs.core.chunk_rest(seq__59726_61597__$1);
var G__61601 = c__4556__auto___61599;
var G__61602 = cljs.core.count(c__4556__auto___61599);
var G__61603 = (0);
seq__59726_61582 = G__61600;
chunk__59727_61583 = G__61601;
count__59728_61584 = G__61602;
i__59729_61585 = G__61603;
continue;
} else {
var s_61609 = cljs.core.first(seq__59726_61597__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_61609);


var G__61613 = cljs.core.next(seq__59726_61597__$1);
var G__61614 = null;
var G__61615 = (0);
var G__61616 = (0);
seq__59726_61582 = G__61613;
chunk__59727_61583 = G__61614;
count__59728_61584 = G__61615;
i__59729_61585 = G__61616;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__59750){
var map__59751 = p__59750;
var map__59751__$1 = (((((!((map__59751 == null))))?(((((map__59751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59751.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59751):map__59751);
var try$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59751__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59751__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59751__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59751__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59751__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__59767,is_loop){
var map__59768 = p__59767;
var map__59768__$1 = (((((!((map__59768 == null))))?(((((map__59768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59768.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59768):map__59768);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59768__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59768__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59768__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__59772_61678 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__59773_61679 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope(binding),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
}),bindings):null));
(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__59773_61679);

try{var seq__59776_61685 = cljs.core.seq(bindings);
var chunk__59777_61686 = null;
var count__59778_61687 = (0);
var i__59779_61688 = (0);
while(true){
if((i__59779_61688 < count__59778_61687)){
var map__59797_61693 = chunk__59777_61686.cljs$core$IIndexed$_nth$arity$2(null,i__59779_61688);
var map__59797_61694__$1 = (((((!((map__59797_61693 == null))))?(((((map__59797_61693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59797_61693.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59797_61693):map__59797_61693);
var binding_61695 = map__59797_61694__$1;
var init_61696 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59797_61694__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_61695);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_61696,";");


var G__61715 = seq__59776_61685;
var G__61716 = chunk__59777_61686;
var G__61717 = count__59778_61687;
var G__61718 = (i__59779_61688 + (1));
seq__59776_61685 = G__61715;
chunk__59777_61686 = G__61716;
count__59778_61687 = G__61717;
i__59779_61688 = G__61718;
continue;
} else {
var temp__5753__auto___61720 = cljs.core.seq(seq__59776_61685);
if(temp__5753__auto___61720){
var seq__59776_61721__$1 = temp__5753__auto___61720;
if(cljs.core.chunked_seq_QMARK_(seq__59776_61721__$1)){
var c__4556__auto___61722 = cljs.core.chunk_first(seq__59776_61721__$1);
var G__61724 = cljs.core.chunk_rest(seq__59776_61721__$1);
var G__61725 = c__4556__auto___61722;
var G__61726 = cljs.core.count(c__4556__auto___61722);
var G__61727 = (0);
seq__59776_61685 = G__61724;
chunk__59777_61686 = G__61725;
count__59778_61687 = G__61726;
i__59779_61688 = G__61727;
continue;
} else {
var map__59815_61729 = cljs.core.first(seq__59776_61721__$1);
var map__59815_61730__$1 = (((((!((map__59815_61729 == null))))?(((((map__59815_61729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59815_61729.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59815_61729):map__59815_61729);
var binding_61731 = map__59815_61730__$1;
var init_61732 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59815_61730__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_61731);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_61732,";");


var G__61745 = cljs.core.next(seq__59776_61721__$1);
var G__61746 = null;
var G__61747 = (0);
var G__61748 = (0);
seq__59776_61685 = G__61745;
chunk__59777_61686 = G__61746;
count__59778_61687 = G__61747;
i__59779_61688 = G__61748;
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
}finally {(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__59772_61678);
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__59830){
var map__59832 = p__59830;
var map__59832__$1 = (((((!((map__59832 == null))))?(((((map__59832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59832.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59832):map__59832);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59832__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59832__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59832__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4613__auto___61765 = cljs.core.count(exprs);
var i_61767 = (0);
while(true){
if((i_61767 < n__4613__auto___61765)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_61767) : temps.call(null,i_61767))," = ",(exprs.cljs$core$IFn$_invoke$arity$1 ? exprs.cljs$core$IFn$_invoke$arity$1(i_61767) : exprs.call(null,i_61767)),";");

var G__61768 = (i_61767 + (1));
i_61767 = G__61768;
continue;
} else {
}
break;
}

var n__4613__auto___61770 = cljs.core.count(exprs);
var i_61771 = (0);
while(true){
if((i_61771 < n__4613__auto___61770)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(i_61771) : params.call(null,i_61771)))," = ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_61771) : temps.call(null,i_61771)),";");

var G__61775 = (i_61771 + (1));
i_61771 = G__61775;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("continue;");
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__59841){
var map__59843 = p__59841;
var map__59843__$1 = (((((!((map__59843 == null))))?(((((map__59843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59843.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59843):map__59843);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59843__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59843__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59843__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__59850_61782 = cljs.core.seq(bindings);
var chunk__59851_61783 = null;
var count__59852_61784 = (0);
var i__59853_61785 = (0);
while(true){
if((i__59853_61785 < count__59852_61784)){
var map__59871_61787 = chunk__59851_61783.cljs$core$IIndexed$_nth$arity$2(null,i__59853_61785);
var map__59871_61788__$1 = (((((!((map__59871_61787 == null))))?(((((map__59871_61787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59871_61787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59871_61787):map__59871_61787);
var binding_61789 = map__59871_61788__$1;
var init_61790 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59871_61788__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_61789)," = ",init_61790,";");


var G__61794 = seq__59850_61782;
var G__61795 = chunk__59851_61783;
var G__61796 = count__59852_61784;
var G__61797 = (i__59853_61785 + (1));
seq__59850_61782 = G__61794;
chunk__59851_61783 = G__61795;
count__59852_61784 = G__61796;
i__59853_61785 = G__61797;
continue;
} else {
var temp__5753__auto___61802 = cljs.core.seq(seq__59850_61782);
if(temp__5753__auto___61802){
var seq__59850_61803__$1 = temp__5753__auto___61802;
if(cljs.core.chunked_seq_QMARK_(seq__59850_61803__$1)){
var c__4556__auto___61804 = cljs.core.chunk_first(seq__59850_61803__$1);
var G__61805 = cljs.core.chunk_rest(seq__59850_61803__$1);
var G__61806 = c__4556__auto___61804;
var G__61807 = cljs.core.count(c__4556__auto___61804);
var G__61808 = (0);
seq__59850_61782 = G__61805;
chunk__59851_61783 = G__61806;
count__59852_61784 = G__61807;
i__59853_61785 = G__61808;
continue;
} else {
var map__59879_61812 = cljs.core.first(seq__59850_61803__$1);
var map__59879_61813__$1 = (((((!((map__59879_61812 == null))))?(((((map__59879_61812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59879_61812.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59879_61812):map__59879_61812);
var binding_61815 = map__59879_61813__$1;
var init_61816 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59879_61813__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_61815)," = ",init_61816,";");


var G__61818 = cljs.core.next(seq__59850_61803__$1);
var G__61820 = null;
var G__61821 = (0);
var G__61822 = (0);
seq__59850_61782 = G__61818;
chunk__59851_61783 = G__61820;
count__59852_61784 = G__61821;
i__59853_61785 = G__61822;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__59896){
var map__59897 = p__59896;
var map__59897__$1 = (((((!((map__59897 == null))))?(((((map__59897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59897):map__59897);
var expr = map__59897__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59897__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59897__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59897__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
if(cljs.core.not((function (){var fexpr__59943 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"null",new cljs.core.Symbol(null,"any","any",-948528346,null),"null",new cljs.core.Symbol(null,"js","js",-886355190,null),"null",new cljs.core.Symbol(null,"number","number",-1084057331,null),"null",new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),"null",new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"function","function",-486723946,null),"null",new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),"null"], null), null);
return (fexpr__59943.cljs$core$IFn$_invoke$arity$1 ? fexpr__59943.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__59943.call(null,tag));
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
var opt_count_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null))) && (cljs.core.boolean$((function (){var fexpr__59946 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null"], null), null);
return (fexpr__59946.cljs$core$IFn$_invoke$arity$1 ? fexpr__59946.cljs$core$IFn$_invoke$arity$1(first_arg_tag) : fexpr__59946.call(null,first_arg_tag));
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
var vec__59902 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count(args);
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
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__59891_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__59891_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__59892_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__59892_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59902,(0),null);
var variadic_invoke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59902,(1),null);
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
var pimpl_61879 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.compiler.protocol_prefix(protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(args),".",pimpl_61879,"(",cljs.compiler.comma_sep(cljs.core.cons("null",cljs.core.rest(args))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(keyword_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count(args),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_61883 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,"(",cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(mfa_61883,args)),(((mfa_61883 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.comma_sep(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(mfa_61883,args)),"], 0))"], 0));
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
var G__59982 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1);
var fexpr__59981 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__59981.cljs$core$IFn$_invoke$arity$1 ? fexpr__59981.cljs$core$IFn$_invoke$arity$1(G__59982) : fexpr__59981.call(null,G__59982));
} else {
return and__4115__auto__;
}
})())){
var fprop_61894 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
if(cljs.core.truth_(cljs.analyzer._STAR_fn_invoke_direct_STAR_)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_61894," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_61894,"(",cljs.compiler.comma_sep(args),") : ",f__$1,"(",cljs.compiler.comma_sep(args),"))"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_61894," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_61894,"(",cljs.compiler.comma_sep(args),") : ",f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),"))"], 0));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__59994){
var map__59996 = p__59994;
var map__59996__$1 = (((((!((map__59996 == null))))?(((((map__59996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59996.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59996):map__59996);
var ctor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59996__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59996__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59996__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__60014){
var map__60015 = p__60014;
var map__60015__$1 = (((((!((map__60015 == null))))?(((((map__60015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60015.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60015):map__60015);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60015__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60015__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60015__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var map__60035 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__60035__$1 = (((((!((map__60035 == null))))?(((((map__60035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60035.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60035):map__60035);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60035__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60035__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__60036 = options;
var map__60036__$1 = (((((!((map__60036 == null))))?(((((map__60036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60036.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60036):map__60036);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60036__$1,new cljs.core.Keyword(null,"target","target",253001721));
var nodejs_rt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60036__$1,new cljs.core.Keyword(null,"nodejs-rt","nodejs-rt",-512437071));
var optimizations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60036__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__60037 = (function (){var libs__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(seen)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(libs)),deps));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__60050 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__60050__$1 = (((((!((map__60050 == null))))?(((((map__60050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60050.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60050):map__60050);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60050__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60050__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60037,(0),null);
var libs_to_load = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60037,(1),null);
var global_exports_libs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__60057_61951 = cljs.core.seq(libs_to_load);
var chunk__60058_61952 = null;
var count__60059_61953 = (0);
var i__60060_61954 = (0);
while(true){
if((i__60060_61954 < count__60059_61953)){
var lib_61959 = chunk__60058_61952.cljs$core$IIndexed$_nth$arity$2(null,i__60060_61954);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_61959)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_61959),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_61959),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_61959),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_61959),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_61959,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_61959),"');");
}

}
}
}


var G__61970 = seq__60057_61951;
var G__61971 = chunk__60058_61952;
var G__61972 = count__60059_61953;
var G__61973 = (i__60060_61954 + (1));
seq__60057_61951 = G__61970;
chunk__60058_61952 = G__61971;
count__60059_61953 = G__61972;
i__60060_61954 = G__61973;
continue;
} else {
var temp__5753__auto___61975 = cljs.core.seq(seq__60057_61951);
if(temp__5753__auto___61975){
var seq__60057_61976__$1 = temp__5753__auto___61975;
if(cljs.core.chunked_seq_QMARK_(seq__60057_61976__$1)){
var c__4556__auto___61977 = cljs.core.chunk_first(seq__60057_61976__$1);
var G__61979 = cljs.core.chunk_rest(seq__60057_61976__$1);
var G__61980 = c__4556__auto___61977;
var G__61981 = cljs.core.count(c__4556__auto___61977);
var G__61982 = (0);
seq__60057_61951 = G__61979;
chunk__60058_61952 = G__61980;
count__60059_61953 = G__61981;
i__60060_61954 = G__61982;
continue;
} else {
var lib_61984 = cljs.core.first(seq__60057_61976__$1);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_61984)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_61984),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_61984),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_61984),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_61984),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_61984,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_61984),"');");
}

}
}
}


var G__61988 = cljs.core.next(seq__60057_61976__$1);
var G__61989 = null;
var G__61990 = (0);
var G__61991 = (0);
seq__60057_61951 = G__61988;
chunk__60058_61952 = G__61989;
count__60059_61953 = G__61990;
i__60060_61954 = G__61991;
continue;
}
} else {
}
}
break;
}

var seq__60115_61993 = cljs.core.seq(node_libs);
var chunk__60116_61994 = null;
var count__60117_61995 = (0);
var i__60118_61996 = (0);
while(true){
if((i__60118_61996 < count__60117_61995)){
var lib_61999 = chunk__60116_61994.cljs$core$IIndexed$_nth$arity$2(null,i__60118_61996);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_61999)," = require('",lib_61999,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__62002 = seq__60115_61993;
var G__62003 = chunk__60116_61994;
var G__62004 = count__60117_61995;
var G__62005 = (i__60118_61996 + (1));
seq__60115_61993 = G__62002;
chunk__60116_61994 = G__62003;
count__60117_61995 = G__62004;
i__60118_61996 = G__62005;
continue;
} else {
var temp__5753__auto___62007 = cljs.core.seq(seq__60115_61993);
if(temp__5753__auto___62007){
var seq__60115_62008__$1 = temp__5753__auto___62007;
if(cljs.core.chunked_seq_QMARK_(seq__60115_62008__$1)){
var c__4556__auto___62009 = cljs.core.chunk_first(seq__60115_62008__$1);
var G__62010 = cljs.core.chunk_rest(seq__60115_62008__$1);
var G__62011 = c__4556__auto___62009;
var G__62012 = cljs.core.count(c__4556__auto___62009);
var G__62013 = (0);
seq__60115_61993 = G__62010;
chunk__60116_61994 = G__62011;
count__60117_61995 = G__62012;
i__60118_61996 = G__62013;
continue;
} else {
var lib_62014 = cljs.core.first(seq__60115_62008__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_62014)," = require('",lib_62014,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__62018 = cljs.core.next(seq__60115_62008__$1);
var G__62019 = null;
var G__62020 = (0);
var G__62021 = (0);
seq__60115_61993 = G__62018;
chunk__60116_61994 = G__62019;
count__60117_61995 = G__62020;
i__60118_61996 = G__62021;
continue;
}
} else {
}
}
break;
}

var seq__60134_62025 = cljs.core.seq(global_exports_libs);
var chunk__60135_62026 = null;
var count__60136_62027 = (0);
var i__60137_62028 = (0);
while(true){
if((i__60137_62028 < count__60136_62027)){
var lib_62030 = chunk__60135_62026.cljs$core$IIndexed$_nth$arity$2(null,i__60137_62028);
var map__60159_62032 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_62030));
var map__60159_62033__$1 = (((((!((map__60159_62032 == null))))?(((((map__60159_62032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60159_62032.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60159_62032):map__60159_62032);
var global_exports_62034 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60159_62033__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_62034,lib_62030);


var G__62040 = seq__60134_62025;
var G__62041 = chunk__60135_62026;
var G__62042 = count__60136_62027;
var G__62043 = (i__60137_62028 + (1));
seq__60134_62025 = G__62040;
chunk__60135_62026 = G__62041;
count__60136_62027 = G__62042;
i__60137_62028 = G__62043;
continue;
} else {
var temp__5753__auto___62064 = cljs.core.seq(seq__60134_62025);
if(temp__5753__auto___62064){
var seq__60134_62066__$1 = temp__5753__auto___62064;
if(cljs.core.chunked_seq_QMARK_(seq__60134_62066__$1)){
var c__4556__auto___62068 = cljs.core.chunk_first(seq__60134_62066__$1);
var G__62069 = cljs.core.chunk_rest(seq__60134_62066__$1);
var G__62070 = c__4556__auto___62068;
var G__62071 = cljs.core.count(c__4556__auto___62068);
var G__62072 = (0);
seq__60134_62025 = G__62069;
chunk__60135_62026 = G__62070;
count__60136_62027 = G__62071;
i__60137_62028 = G__62072;
continue;
} else {
var lib_62073 = cljs.core.first(seq__60134_62066__$1);
var map__60166_62075 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_62073));
var map__60166_62076__$1 = (((((!((map__60166_62075 == null))))?(((((map__60166_62075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60166_62075.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60166_62075):map__60166_62075);
var global_exports_62077 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60166_62076__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_62077,lib_62073);


var G__62090 = cljs.core.next(seq__60134_62066__$1);
var G__62091 = null;
var G__62092 = (0);
var G__62093 = (0);
seq__60134_62025 = G__62090;
chunk__60135_62026 = G__62091;
count__60136_62027 = G__62092;
i__60137_62028 = G__62093;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__60171){
var map__60172 = p__60171;
var map__60172__$1 = (((((!((map__60172 == null))))?(((((map__60172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60172.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60172):map__60172);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60172__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60172__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60172__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60172__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60172__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60172__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60172__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("'nil';");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__60182){
var map__60183 = p__60182;
var map__60183__$1 = (((((!((map__60183 == null))))?(((((map__60183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60183):map__60183);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60183__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60183__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60183__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60183__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60183__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60183__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60183__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__60189){
var map__60190 = p__60189;
var map__60190__$1 = (((((!((map__60190 == null))))?(((((map__60190.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60190.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60190):map__60190);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60190__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60190__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60190__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60190__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60190__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__60205_62137 = cljs.core.seq(protocols);
var chunk__60206_62138 = null;
var count__60207_62139 = (0);
var i__60208_62140 = (0);
while(true){
if((i__60208_62140 < count__60207_62139)){
var protocol_62141 = chunk__60206_62138.cljs$core$IIndexed$_nth$arity$2(null,i__60208_62140);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_62141)),"}");


var G__62142 = seq__60205_62137;
var G__62143 = chunk__60206_62138;
var G__62144 = count__60207_62139;
var G__62145 = (i__60208_62140 + (1));
seq__60205_62137 = G__62142;
chunk__60206_62138 = G__62143;
count__60207_62139 = G__62144;
i__60208_62140 = G__62145;
continue;
} else {
var temp__5753__auto___62153 = cljs.core.seq(seq__60205_62137);
if(temp__5753__auto___62153){
var seq__60205_62154__$1 = temp__5753__auto___62153;
if(cljs.core.chunked_seq_QMARK_(seq__60205_62154__$1)){
var c__4556__auto___62155 = cljs.core.chunk_first(seq__60205_62154__$1);
var G__62156 = cljs.core.chunk_rest(seq__60205_62154__$1);
var G__62157 = c__4556__auto___62155;
var G__62158 = cljs.core.count(c__4556__auto___62155);
var G__62159 = (0);
seq__60205_62137 = G__62156;
chunk__60206_62138 = G__62157;
count__60207_62139 = G__62158;
i__60208_62140 = G__62159;
continue;
} else {
var protocol_62160 = cljs.core.first(seq__60205_62154__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_62160)),"}");


var G__62162 = cljs.core.next(seq__60205_62154__$1);
var G__62163 = null;
var G__62164 = (0);
var G__62165 = (0);
seq__60205_62137 = G__62162;
chunk__60206_62138 = G__62163;
count__60207_62139 = G__62164;
i__60208_62140 = G__62165;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__60215_62169 = cljs.core.seq(fields__$1);
var chunk__60216_62170 = null;
var count__60217_62171 = (0);
var i__60218_62172 = (0);
while(true){
if((i__60218_62172 < count__60217_62171)){
var fld_62173 = chunk__60216_62170.cljs$core$IIndexed$_nth$arity$2(null,i__60218_62172);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_62173," = ",fld_62173,";");


var G__62174 = seq__60215_62169;
var G__62175 = chunk__60216_62170;
var G__62176 = count__60217_62171;
var G__62177 = (i__60218_62172 + (1));
seq__60215_62169 = G__62174;
chunk__60216_62170 = G__62175;
count__60217_62171 = G__62176;
i__60218_62172 = G__62177;
continue;
} else {
var temp__5753__auto___62179 = cljs.core.seq(seq__60215_62169);
if(temp__5753__auto___62179){
var seq__60215_62180__$1 = temp__5753__auto___62179;
if(cljs.core.chunked_seq_QMARK_(seq__60215_62180__$1)){
var c__4556__auto___62181 = cljs.core.chunk_first(seq__60215_62180__$1);
var G__62185 = cljs.core.chunk_rest(seq__60215_62180__$1);
var G__62186 = c__4556__auto___62181;
var G__62187 = cljs.core.count(c__4556__auto___62181);
var G__62188 = (0);
seq__60215_62169 = G__62185;
chunk__60216_62170 = G__62186;
count__60217_62171 = G__62187;
i__60218_62172 = G__62188;
continue;
} else {
var fld_62198 = cljs.core.first(seq__60215_62180__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_62198," = ",fld_62198,";");


var G__62199 = cljs.core.next(seq__60215_62180__$1);
var G__62200 = null;
var G__62201 = (0);
var G__62202 = (0);
seq__60215_62169 = G__62199;
chunk__60216_62170 = G__62200;
count__60217_62171 = G__62201;
i__60218_62172 = G__62202;
continue;
}
} else {
}
}
break;
}

var seq__60227_62203 = cljs.core.seq(pmasks);
var chunk__60228_62204 = null;
var count__60229_62205 = (0);
var i__60230_62206 = (0);
while(true){
if((i__60230_62206 < count__60229_62205)){
var vec__60248_62210 = chunk__60228_62204.cljs$core$IIndexed$_nth$arity$2(null,i__60230_62206);
var pno_62211 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60248_62210,(0),null);
var pmask_62212 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60248_62210,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_62211,"$ = ",pmask_62212,";");


var G__62218 = seq__60227_62203;
var G__62219 = chunk__60228_62204;
var G__62220 = count__60229_62205;
var G__62221 = (i__60230_62206 + (1));
seq__60227_62203 = G__62218;
chunk__60228_62204 = G__62219;
count__60229_62205 = G__62220;
i__60230_62206 = G__62221;
continue;
} else {
var temp__5753__auto___62222 = cljs.core.seq(seq__60227_62203);
if(temp__5753__auto___62222){
var seq__60227_62223__$1 = temp__5753__auto___62222;
if(cljs.core.chunked_seq_QMARK_(seq__60227_62223__$1)){
var c__4556__auto___62224 = cljs.core.chunk_first(seq__60227_62223__$1);
var G__62225 = cljs.core.chunk_rest(seq__60227_62223__$1);
var G__62226 = c__4556__auto___62224;
var G__62227 = cljs.core.count(c__4556__auto___62224);
var G__62228 = (0);
seq__60227_62203 = G__62225;
chunk__60228_62204 = G__62226;
count__60229_62205 = G__62227;
i__60230_62206 = G__62228;
continue;
} else {
var vec__60253_62231 = cljs.core.first(seq__60227_62223__$1);
var pno_62232 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60253_62231,(0),null);
var pmask_62233 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60253_62231,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_62232,"$ = ",pmask_62233,";");


var G__62235 = cljs.core.next(seq__60227_62223__$1);
var G__62236 = null;
var G__62237 = (0);
var G__62238 = (0);
seq__60227_62203 = G__62235;
chunk__60228_62204 = G__62236;
count__60229_62205 = G__62237;
i__60230_62206 = G__62238;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__60256){
var map__60257 = p__60256;
var map__60257__$1 = (((((!((map__60257 == null))))?(((((map__60257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60257.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60257):map__60257);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60257__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60257__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60257__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60257__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60257__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__60261_62259 = cljs.core.seq(protocols);
var chunk__60265_62260 = null;
var count__60266_62261 = (0);
var i__60267_62262 = (0);
while(true){
if((i__60267_62262 < count__60266_62261)){
var protocol_62263 = chunk__60265_62260.cljs$core$IIndexed$_nth$arity$2(null,i__60267_62262);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_62263)),"}");


var G__62264 = seq__60261_62259;
var G__62265 = chunk__60265_62260;
var G__62266 = count__60266_62261;
var G__62267 = (i__60267_62262 + (1));
seq__60261_62259 = G__62264;
chunk__60265_62260 = G__62265;
count__60266_62261 = G__62266;
i__60267_62262 = G__62267;
continue;
} else {
var temp__5753__auto___62268 = cljs.core.seq(seq__60261_62259);
if(temp__5753__auto___62268){
var seq__60261_62270__$1 = temp__5753__auto___62268;
if(cljs.core.chunked_seq_QMARK_(seq__60261_62270__$1)){
var c__4556__auto___62271 = cljs.core.chunk_first(seq__60261_62270__$1);
var G__62272 = cljs.core.chunk_rest(seq__60261_62270__$1);
var G__62273 = c__4556__auto___62271;
var G__62274 = cljs.core.count(c__4556__auto___62271);
var G__62275 = (0);
seq__60261_62259 = G__62272;
chunk__60265_62260 = G__62273;
count__60266_62261 = G__62274;
i__60267_62262 = G__62275;
continue;
} else {
var protocol_62281 = cljs.core.first(seq__60261_62270__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_62281)),"}");


var G__62284 = cljs.core.next(seq__60261_62270__$1);
var G__62285 = null;
var G__62286 = (0);
var G__62287 = (0);
seq__60261_62259 = G__62284;
chunk__60265_62260 = G__62285;
count__60266_62261 = G__62286;
i__60267_62262 = G__62287;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__60272_62289 = cljs.core.seq(fields__$1);
var chunk__60273_62290 = null;
var count__60274_62291 = (0);
var i__60275_62292 = (0);
while(true){
if((i__60275_62292 < count__60274_62291)){
var fld_62296 = chunk__60273_62290.cljs$core$IIndexed$_nth$arity$2(null,i__60275_62292);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_62296," = ",fld_62296,";");


var G__62297 = seq__60272_62289;
var G__62298 = chunk__60273_62290;
var G__62299 = count__60274_62291;
var G__62300 = (i__60275_62292 + (1));
seq__60272_62289 = G__62297;
chunk__60273_62290 = G__62298;
count__60274_62291 = G__62299;
i__60275_62292 = G__62300;
continue;
} else {
var temp__5753__auto___62302 = cljs.core.seq(seq__60272_62289);
if(temp__5753__auto___62302){
var seq__60272_62303__$1 = temp__5753__auto___62302;
if(cljs.core.chunked_seq_QMARK_(seq__60272_62303__$1)){
var c__4556__auto___62304 = cljs.core.chunk_first(seq__60272_62303__$1);
var G__62305 = cljs.core.chunk_rest(seq__60272_62303__$1);
var G__62306 = c__4556__auto___62304;
var G__62307 = cljs.core.count(c__4556__auto___62304);
var G__62308 = (0);
seq__60272_62289 = G__62305;
chunk__60273_62290 = G__62306;
count__60274_62291 = G__62307;
i__60275_62292 = G__62308;
continue;
} else {
var fld_62309 = cljs.core.first(seq__60272_62303__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_62309," = ",fld_62309,";");


var G__62313 = cljs.core.next(seq__60272_62303__$1);
var G__62314 = null;
var G__62315 = (0);
var G__62316 = (0);
seq__60272_62289 = G__62313;
chunk__60273_62290 = G__62314;
count__60274_62291 = G__62315;
i__60275_62292 = G__62316;
continue;
}
} else {
}
}
break;
}

var seq__60280_62321 = cljs.core.seq(pmasks);
var chunk__60281_62322 = null;
var count__60282_62323 = (0);
var i__60283_62324 = (0);
while(true){
if((i__60283_62324 < count__60282_62323)){
var vec__60294_62325 = chunk__60281_62322.cljs$core$IIndexed$_nth$arity$2(null,i__60283_62324);
var pno_62326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60294_62325,(0),null);
var pmask_62327 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60294_62325,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_62326,"$ = ",pmask_62327,";");


var G__62329 = seq__60280_62321;
var G__62330 = chunk__60281_62322;
var G__62331 = count__60282_62323;
var G__62332 = (i__60283_62324 + (1));
seq__60280_62321 = G__62329;
chunk__60281_62322 = G__62330;
count__60282_62323 = G__62331;
i__60283_62324 = G__62332;
continue;
} else {
var temp__5753__auto___62333 = cljs.core.seq(seq__60280_62321);
if(temp__5753__auto___62333){
var seq__60280_62336__$1 = temp__5753__auto___62333;
if(cljs.core.chunked_seq_QMARK_(seq__60280_62336__$1)){
var c__4556__auto___62339 = cljs.core.chunk_first(seq__60280_62336__$1);
var G__62340 = cljs.core.chunk_rest(seq__60280_62336__$1);
var G__62341 = c__4556__auto___62339;
var G__62342 = cljs.core.count(c__4556__auto___62339);
var G__62343 = (0);
seq__60280_62321 = G__62340;
chunk__60281_62322 = G__62341;
count__60282_62323 = G__62342;
i__60283_62324 = G__62343;
continue;
} else {
var vec__60300_62345 = cljs.core.first(seq__60280_62336__$1);
var pno_62346 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60300_62345,(0),null);
var pmask_62347 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60300_62345,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_62346,"$ = ",pmask_62347,";");


var G__62349 = cljs.core.next(seq__60280_62336__$1);
var G__62350 = null;
var G__62351 = (0);
var G__62352 = (0);
seq__60280_62321 = G__62349;
chunk__60281_62322 = G__62350;
count__60282_62323 = G__62351;
i__60283_62324 = G__62352;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__60306){
var map__60307 = p__60306;
var map__60307__$1 = (((((!((map__60307 == null))))?(((((map__60307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60307):map__60307);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60307__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60307__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60307__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60307__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60307__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__60323){
var map__60324 = p__60323;
var map__60324__$1 = (((((!((map__60324 == null))))?(((((map__60324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60324):map__60324);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60324__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60324__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60324__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60324__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60324__$1,new cljs.core.Keyword(null,"args","args",1315556576));
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

var seq__60364 = cljs.core.seq(table);
var chunk__60365 = null;
var count__60366 = (0);
var i__60367 = (0);
while(true){
if((i__60367 < count__60366)){
var vec__60383 = chunk__60365.cljs$core$IIndexed$_nth$arity$2(null,i__60367);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60383,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60383,(1),null);
var ns_62389 = cljs.core.namespace(sym);
var name_62390 = cljs.core.name(sym);
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


var G__62404 = seq__60364;
var G__62405 = chunk__60365;
var G__62406 = count__60366;
var G__62407 = (i__60367 + (1));
seq__60364 = G__62404;
chunk__60365 = G__62405;
count__60366 = G__62406;
i__60367 = G__62407;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__60364);
if(temp__5753__auto__){
var seq__60364__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60364__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__60364__$1);
var G__62408 = cljs.core.chunk_rest(seq__60364__$1);
var G__62409 = c__4556__auto__;
var G__62410 = cljs.core.count(c__4556__auto__);
var G__62411 = (0);
seq__60364 = G__62408;
chunk__60365 = G__62409;
count__60366 = G__62410;
i__60367 = G__62411;
continue;
} else {
var vec__60394 = cljs.core.first(seq__60364__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60394,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60394,(1),null);
var ns_62412 = cljs.core.namespace(sym);
var name_62413 = cljs.core.name(sym);
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


var G__62420 = cljs.core.next(seq__60364__$1);
var G__62421 = null;
var G__62422 = (0);
var G__62423 = (0);
seq__60364 = G__62420;
chunk__60365 = G__62421;
count__60366 = G__62422;
i__60367 = G__62423;
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
var G__60411 = arguments.length;
switch (G__60411) {
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
var k_62444 = cljs.core.first(ks);
var vec__60420_62445 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,k_62444);
var top_62446 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60420_62445,(0),null);
var prefix_SINGLEQUOTE__62447 = vec__60420_62445;
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_62444)) && ((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(known_externs,prefix_SINGLEQUOTE__62447) == null)))){
if((!(((cljs.core.contains_QMARK_(cljs.core.deref(top_level),top_62446)) || (cljs.core.contains_QMARK_(known_externs,top_62446)))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__62447)),";");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(top_level,cljs.core.conj,top_62446);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__62447)),";");
}
} else {
}

var m_62453 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(externs,k_62444);
if(cljs.core.empty_QMARK_(m_62453)){
} else {
cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(prefix_SINGLEQUOTE__62447,m_62453,top_level,known_externs);
}

var G__62456 = cljs.core.next(ks);
ks = G__62456;
continue;
} else {
return null;
}
break;
}
}));

(cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=cljs.compiler.js.map
