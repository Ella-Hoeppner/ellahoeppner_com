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
var map__51942 = s;
var map__51942__$1 = (((((!((map__51942 == null))))?(((((map__51942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51942.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51942):map__51942);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51942__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51942__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__51945 = info;
var map__51946 = G__51945;
var map__51946__$1 = (((((!((map__51946 == null))))?(((((map__51946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51946.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51946):map__51946);
var shadow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51946__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__51945__$1 = G__51945;
while(true){
var d__$2 = d__$1;
var map__51953 = G__51945__$1;
var map__51953__$1 = (((((!((map__51953 == null))))?(((((map__51953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51953):map__51953);
var shadow__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51953__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__53104 = (d__$2 + (1));
var G__53105 = shadow__$1;
d__$1 = G__53104;
G__51945__$1 = G__53105;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__51958){
var map__51959 = p__51958;
var map__51959__$1 = (((((!((map__51959 == null))))?(((((map__51959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51959.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51959):map__51959);
var name_var = map__51959__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51959__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51959__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__51962 = info;
var map__51962__$1 = (((((!((map__51962 == null))))?(((((map__51962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51962.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51962):map__51962);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51962__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51962__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("_$_",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__51983 = [clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),".","$"),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('');
return (cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__51983) : cljs.compiler.munge.call(null,G__51983));
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
var G__52022 = arguments.length;
switch (G__52022) {
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
var ms = (function (){var fexpr__52025 = new cljs.core.Var(function(){return cljs.core.munge_str;},new cljs.core.Symbol("cljs.core","munge-str","cljs.core/munge-str",-301346665,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"munge-str","munge-str",-2042069652,null),"cljs/core.cljs",25,1,11501,11501,new cljs.core.Symbol(null,"string","string",-349010059,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),null,(cljs.core.truth_(cljs.core.munge_str)?cljs.core.munge_str.cljs$lang$test:null)]));
return (fexpr__52025.cljs$core$IFn$_invoke$arity$1 ? fexpr__52025.cljs$core$IFn$_invoke$arity$1(ss__$3) : fexpr__52025.call(null,ss__$3));
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
var G__52029 = cp;
switch (G__52029) {
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
var seq__52034_53114 = cljs.core.seq(s);
var chunk__52035_53115 = null;
var count__52036_53116 = (0);
var i__52037_53117 = (0);
while(true){
if((i__52037_53117 < count__52036_53116)){
var c_53118 = chunk__52035_53115.cljs$core$IIndexed$_nth$arity$2(null,i__52037_53117);
sb.append(cljs.compiler.escape_char(c_53118));


var G__53120 = seq__52034_53114;
var G__53121 = chunk__52035_53115;
var G__53122 = count__52036_53116;
var G__53123 = (i__52037_53117 + (1));
seq__52034_53114 = G__53120;
chunk__52035_53115 = G__53121;
count__52036_53116 = G__53122;
i__52037_53117 = G__53123;
continue;
} else {
var temp__5753__auto___53129 = cljs.core.seq(seq__52034_53114);
if(temp__5753__auto___53129){
var seq__52034_53130__$1 = temp__5753__auto___53129;
if(cljs.core.chunked_seq_QMARK_(seq__52034_53130__$1)){
var c__4556__auto___53131 = cljs.core.chunk_first(seq__52034_53130__$1);
var G__53133 = cljs.core.chunk_rest(seq__52034_53130__$1);
var G__53134 = c__4556__auto___53131;
var G__53135 = cljs.core.count(c__4556__auto___53131);
var G__53136 = (0);
seq__52034_53114 = G__53133;
chunk__52035_53115 = G__53134;
count__52036_53116 = G__53135;
i__52037_53117 = G__53136;
continue;
} else {
var c_53137 = cljs.core.first(seq__52034_53130__$1);
sb.append(cljs.compiler.escape_char(c_53137));


var G__53138 = cljs.core.next(seq__52034_53130__$1);
var G__53139 = null;
var G__53140 = (0);
var G__53141 = (0);
seq__52034_53114 = G__53138;
chunk__52035_53115 = G__53139;
count__52036_53116 = G__53140;
i__52037_53117 = G__53141;
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
cljs.compiler.emit_STAR_ = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__52046 = cljs.core.get_global_hierarchy;
return (fexpr__52046.cljs$core$IFn$_invoke$arity$0 ? fexpr__52046.cljs$core$IFn$_invoke$arity$0() : fexpr__52046.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
cljs.compiler.emit = (function cljs$compiler$emit(ast){
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__52051_53142 = ast;
var map__52051_53143__$1 = (((((!((map__52051_53142 == null))))?(((((map__52051_53142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52051_53142.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52051_53142):map__52051_53142);
var env_53144 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52051_53143__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_53144))){
var map__52057_53145 = env_53144;
var map__52057_53146__$1 = (((((!((map__52057_53145 == null))))?(((((map__52057_53145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52057_53145.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52057_53145):map__52057_53145);
var line_53147 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52057_53146__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_53148 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52057_53146__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (m){
var minfo = (function (){var G__52060 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_((function (){var G__52063 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast);
var fexpr__52062 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__52062.cljs$core$IFn$_invoke$arity$1 ? fexpr__52062.cljs$core$IFn$_invoke$arity$1(G__52063) : fexpr__52062.call(null,G__52063));
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52060,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__52060;
}
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_53147 - (1))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (line__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_53148)?(column_53148 - (1)):(0))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (column__$1){
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
var G__52090 = arguments.length;
switch (G__52090) {
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
var len__4736__auto___53156 = arguments.length;
var i__4737__auto___53157 = (0);
while(true){
if((i__4737__auto___53157 < len__4736__auto___53156)){
args_arr__4757__auto__.push((arguments[i__4737__auto___53157]));

var G__53158 = (i__4737__auto___53157 + (1));
i__4737__auto___53157 = G__53158;
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
var s_53161 = (function (){var G__52105 = a;
if((!(typeof a === 'string'))){
return G__52105.toString();
} else {
return G__52105;
}
})();
var temp__5757__auto___53162 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5757__auto___53162 == null)){
} else {
var sm_data_53163 = temp__5757__auto___53162;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sm_data_53163,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(function (p1__52079_SHARP_){
return (p1__52079_SHARP_ + s_53161.length);
}));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_53161], 0));

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

var seq__52112 = cljs.core.seq(xs);
var chunk__52113 = null;
var count__52114 = (0);
var i__52115 = (0);
while(true){
if((i__52115 < count__52114)){
var x = chunk__52113.cljs$core$IIndexed$_nth$arity$2(null,i__52115);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__53169 = seq__52112;
var G__53170 = chunk__52113;
var G__53171 = count__52114;
var G__53172 = (i__52115 + (1));
seq__52112 = G__53169;
chunk__52113 = G__53170;
count__52114 = G__53171;
i__52115 = G__53172;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__52112);
if(temp__5753__auto__){
var seq__52112__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52112__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__52112__$1);
var G__53173 = cljs.core.chunk_rest(seq__52112__$1);
var G__53174 = c__4556__auto__;
var G__53175 = cljs.core.count(c__4556__auto__);
var G__53176 = (0);
seq__52112 = G__53173;
chunk__52113 = G__53174;
count__52114 = G__53175;
i__52115 = G__53176;
continue;
} else {
var x = cljs.core.first(seq__52112__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__53177 = cljs.core.next(seq__52112__$1);
var G__53178 = null;
var G__53179 = (0);
var G__53180 = (0);
seq__52112 = G__53177;
chunk__52113 = G__53178;
count__52114 = G__53179;
i__52115 = G__53180;
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
(cljs.compiler.emits.cljs$lang$applyTo = (function (seq52083){
var G__52084 = cljs.core.first(seq52083);
var seq52083__$1 = cljs.core.next(seq52083);
var G__52085 = cljs.core.first(seq52083__$1);
var seq52083__$2 = cljs.core.next(seq52083__$1);
var G__52086 = cljs.core.first(seq52083__$2);
var seq52083__$3 = cljs.core.next(seq52083__$2);
var G__52087 = cljs.core.first(seq52083__$3);
var seq52083__$4 = cljs.core.next(seq52083__$3);
var G__52088 = cljs.core.first(seq52083__$4);
var seq52083__$5 = cljs.core.next(seq52083__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52084,G__52085,G__52086,G__52087,G__52088,seq52083__$5);
}));

(cljs.compiler.emits.cljs$lang$maxFixedArity = (5));

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.cljs$core$IFn$_invoke$arity$0();

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (p__52137){
var map__52138 = p__52137;
var map__52138__$1 = (((((!((map__52138 == null))))?(((((map__52138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52138.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52138):map__52138);
var m = map__52138__$1;
var gen_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52138__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0)], 0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__52148 = arguments.length;
switch (G__52148) {
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
var len__4736__auto___53182 = arguments.length;
var i__4737__auto___53183 = (0);
while(true){
if((i__4737__auto___53183 < len__4736__auto___53182)){
args_arr__4757__auto__.push((arguments[i__4737__auto___53183]));

var G__53185 = (i__4737__auto___53183 + (1));
i__4737__auto___53183 = G__53185;
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

var seq__52160_53189 = cljs.core.seq(xs);
var chunk__52161_53190 = null;
var count__52162_53191 = (0);
var i__52163_53192 = (0);
while(true){
if((i__52163_53192 < count__52162_53191)){
var x_53193 = chunk__52161_53190.cljs$core$IIndexed$_nth$arity$2(null,i__52163_53192);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_53193);


var G__53195 = seq__52160_53189;
var G__53196 = chunk__52161_53190;
var G__53197 = count__52162_53191;
var G__53198 = (i__52163_53192 + (1));
seq__52160_53189 = G__53195;
chunk__52161_53190 = G__53196;
count__52162_53191 = G__53197;
i__52163_53192 = G__53198;
continue;
} else {
var temp__5753__auto___53200 = cljs.core.seq(seq__52160_53189);
if(temp__5753__auto___53200){
var seq__52160_53201__$1 = temp__5753__auto___53200;
if(cljs.core.chunked_seq_QMARK_(seq__52160_53201__$1)){
var c__4556__auto___53203 = cljs.core.chunk_first(seq__52160_53201__$1);
var G__53204 = cljs.core.chunk_rest(seq__52160_53201__$1);
var G__53205 = c__4556__auto___53203;
var G__53206 = cljs.core.count(c__4556__auto___53203);
var G__53207 = (0);
seq__52160_53189 = G__53204;
chunk__52161_53190 = G__53205;
count__52162_53191 = G__53206;
i__52163_53192 = G__53207;
continue;
} else {
var x_53208 = cljs.core.first(seq__52160_53201__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_53208);


var G__53209 = cljs.core.next(seq__52160_53201__$1);
var G__53210 = null;
var G__53211 = (0);
var G__53212 = (0);
seq__52160_53189 = G__53209;
chunk__52161_53190 = G__53210;
count__52162_53191 = G__53211;
i__52163_53192 = G__53212;
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
(cljs.compiler.emitln.cljs$lang$applyTo = (function (seq52142){
var G__52143 = cljs.core.first(seq52142);
var seq52142__$1 = cljs.core.next(seq52142);
var G__52144 = cljs.core.first(seq52142__$1);
var seq52142__$2 = cljs.core.next(seq52142__$1);
var G__52145 = cljs.core.first(seq52142__$2);
var seq52142__$3 = cljs.core.next(seq52142__$2);
var G__52146 = cljs.core.first(seq52142__$3);
var seq52142__$4 = cljs.core.next(seq52142__$3);
var G__52147 = cljs.core.first(seq52142__$4);
var seq52142__$5 = cljs.core.next(seq52142__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52143,G__52144,G__52145,G__52146,G__52147,seq52142__$5);
}));

(cljs.compiler.emitln.cljs$lang$maxFixedArity = (5));

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__52168_53213 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__52169_53214 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__52170_53215 = true;
var _STAR_print_fn_STAR__temp_val__52171_53216 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__52170_53215);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__52171_53216);

try{cljs.compiler.emit(expr);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__52169_53214);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__52168_53213);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
});
cljs.compiler.emit_constant_STAR_ = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__52172 = cljs.core.get_global_hierarchy;
return (fexpr__52172.cljs$core$IFn$_invoke$arity$0 ? fexpr__52172.cljs$core$IFn$_invoke$arity$0() : fexpr__52172.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit-constant*"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();









cljs.compiler.all_distinct_QMARK_ = (function cljs$compiler$all_distinct_QMARK_(xs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,xs);
});
cljs.compiler.emit_constant_no_meta = (function cljs$compiler$emit_constant_no_meta(x){
if(cljs.analyzer.cljs_seq_QMARK_(x)){
return (cljs.compiler.emit_list.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_list.cljs$core$IFn$_invoke$arity$2(x,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_list.call(null,x,cljs.compiler.emit_constants_comma_sep));
} else {
if(cljs.core.record_QMARK_(x)){
var vec__52174 = cljs.analyzer.record_ns_PLUS_name(x);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52174,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52174,(1),null);
var G__52178 = ns;
var G__52179 = name;
var G__52180 = (function (){
var G__52181 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,x);
return (cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__52181) : cljs.compiler.emit_constant.call(null,G__52181));
});
return (cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3 ? cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3(G__52178,G__52179,G__52180) : cljs.compiler.emit_record_value.call(null,G__52178,G__52179,G__52180));
} else {
if(cljs.analyzer.cljs_map_QMARK_(x)){
var G__52185 = cljs.core.keys(x);
var G__52186 = cljs.core.vals(x);
var G__52187 = cljs.compiler.emit_constants_comma_sep;
var G__52188 = cljs.compiler.all_distinct_QMARK_;
return (cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4 ? cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4(G__52185,G__52186,G__52187,G__52188) : cljs.compiler.emit_map.call(null,G__52185,G__52186,G__52187,G__52188));
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
var G__52193 = (function (){
return cljs.compiler.emit_constant_no_meta(v);
});
var G__52194 = (function (){
return cljs.compiler.emit_constant_no_meta(m);
});
return (cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2(G__52193,G__52194) : cljs.compiler.emit_with_meta.call(null,G__52193,G__52194));
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
var vec__52200 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52200,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52200,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52200,(2),null);
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
var G__52204 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__52204) : x.call(null,G__52204));
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
var G__52207 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__52207) : x.call(null,G__52207));
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
var G__52214 = items;
var G__52215 = (function (p1__52213_SHARP_){
return (function (){
return cljs.compiler.emit_constant(p1__52213_SHARP_);
});
});
return (cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2(G__52214,G__52215) : cljs.compiler.emit_js_object.call(null,G__52214,G__52215));
} else {
return (cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2(items,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_js_array.call(null,items,cljs.compiler.emit_constants_comma_sep));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__52221){
var map__52222 = p__52221;
var map__52222__$1 = (((((!((map__52222 == null))))?(((((map__52222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52222.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52222):map__52222);
var ast = map__52222__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52222__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52222__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52222__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5751__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5751__auto__)){
var const_expr = temp__5751__auto__;
return cljs.compiler.emit(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__52224 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__52224__$1 = (((((!((map__52224 == null))))?(((((map__52224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52224.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52224):map__52224);
var cenv = map__52224__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52224__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__52227 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4115__auto__ = (function (){var G__52230 = new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options);
return (cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1(G__52230) : cljs.compiler.es5_GT__EQ_.call(null,G__52230));
})();
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.namespace(var_name) == null)));
} else {
return and__4115__auto__;
}
})())){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(G__52227,cljs.analyzer.es5_allowed);
} else {
return G__52227;
}
})();
var js_module = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4126__auto__ = cljs.core.namespace(var_name);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.name(var_name);
}
})()], null));
var info__$2 = (function (){var G__52234 = info__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(G__52234,reserved);
} else {
return G__52234;
}
})();
var env__45183__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__45183__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var G__52235_53240 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__52235_53241__$1 = (((G__52235_53240 instanceof cljs.core.Keyword))?G__52235_53240.fqn:null);
switch (G__52235_53241__$1) {
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

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__45183__auto__))){
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__52243){
var map__52244 = p__52243;
var map__52244__$1 = (((((!((map__52244 == null))))?(((((map__52244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52244):map__52244);
var arg = map__52244__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52244__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52244__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52244__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52244__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));


var map__52246 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__52246__$1 = (((((!((map__52246 == null))))?(((((map__52246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52246.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52246):map__52246);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52246__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__45183__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__45183__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("new cljs.core.Var(function(){return ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),";},",sym,",",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__45183__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.with_meta(",expr,",",meta,")");
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__52271){
var map__52272 = p__52271;
var map__52272__$1 = (((((!((map__52272 == null))))?(((((map__52272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52272):map__52272);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52272__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52272__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52272__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__45183__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__45183__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_with_meta(expr,meta);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__45183__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_((function (p1__52274_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__52274_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),keys__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys__$1)),cljs.core.count(keys__$1))));
});
cljs.compiler.emit_map = (function cljs$compiler$emit_map(keys,vals,comma_sep,distinct_keys_QMARK_){
if((cljs.core.count(keys) === (0))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count(keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_((distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1(keys) : distinct_keys_QMARK_.call(null,keys)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentArrayMap(null, ",cljs.core.count(keys),", [",(function (){var G__52275 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__52275) : comma_sep.call(null,G__52275));
})(),"], null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentArrayMap.createAsIfByAssoc([",(function (){var G__52276 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__52276) : comma_sep.call(null,G__52276));
})(),"])");
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.PersistentHashMap.fromArrays([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(keys) : comma_sep.call(null,keys)),"],[",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(vals) : comma_sep.call(null,vals)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__52277){
var map__52278 = p__52277;
var map__52278__$1 = (((((!((map__52278 == null))))?(((((map__52278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52278.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52278):map__52278);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52278__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52278__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52278__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__45183__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__45183__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_map(keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__45183__auto__))){
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__52284){
var map__52285 = p__52284;
var map__52285__$1 = (((((!((map__52285 == null))))?(((((map__52285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52285):map__52285);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52285__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52285__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__45183__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__45183__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_vector(items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__45183__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_((function (p1__52287_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__52287_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),items__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,items__$1)),cljs.core.count(items__$1))));
});
cljs.compiler.emit_set = (function cljs$compiler$emit_set(items,comma_sep,distinct_constants_QMARK_){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_((distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1(items) : distinct_constants_QMARK_.call(null,items)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count(items),", [",(function (){var G__52294 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(items,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("null"));
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__52294) : comma_sep.call(null,G__52294));
})(),"], null), null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentHashSet.createAsIfByAssoc([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set","set",304602554),(function (p__52297){
var map__52299 = p__52297;
var map__52299__$1 = (((((!((map__52299 == null))))?(((((map__52299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52299.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52299):map__52299);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52299__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52299__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__45183__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__45183__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_set(items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__45183__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("({");

var temp__5753__auto___53273 = cljs.core.seq(items);
if(temp__5753__auto___53273){
var items_53274__$1 = temp__5753__auto___53273;
var vec__52302_53275 = items_53274__$1;
var seq__52303_53276 = cljs.core.seq(vec__52302_53275);
var first__52304_53277 = cljs.core.first(seq__52303_53276);
var seq__52303_53278__$1 = cljs.core.next(seq__52303_53276);
var vec__52305_53279 = first__52304_53277;
var k_53280 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52305_53279,(0),null);
var v_53281 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52305_53279,(1),null);
var r_53282 = seq__52303_53278__$1;
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4("\"",cljs.core.name(k_53280),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_53281) : emit_js_object_val.call(null,v_53281)));

var seq__52308_53284 = cljs.core.seq(r_53282);
var chunk__52309_53285 = null;
var count__52310_53286 = (0);
var i__52311_53287 = (0);
while(true){
if((i__52311_53287 < count__52310_53286)){
var vec__52318_53288 = chunk__52309_53285.cljs$core$IIndexed$_nth$arity$2(null,i__52311_53287);
var k_53289__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52318_53288,(0),null);
var v_53290__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52318_53288,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_53289__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_53290__$1) : emit_js_object_val.call(null,v_53290__$1)));


var G__53291 = seq__52308_53284;
var G__53292 = chunk__52309_53285;
var G__53293 = count__52310_53286;
var G__53294 = (i__52311_53287 + (1));
seq__52308_53284 = G__53291;
chunk__52309_53285 = G__53292;
count__52310_53286 = G__53293;
i__52311_53287 = G__53294;
continue;
} else {
var temp__5753__auto___53295__$1 = cljs.core.seq(seq__52308_53284);
if(temp__5753__auto___53295__$1){
var seq__52308_53297__$1 = temp__5753__auto___53295__$1;
if(cljs.core.chunked_seq_QMARK_(seq__52308_53297__$1)){
var c__4556__auto___53298 = cljs.core.chunk_first(seq__52308_53297__$1);
var G__53299 = cljs.core.chunk_rest(seq__52308_53297__$1);
var G__53300 = c__4556__auto___53298;
var G__53301 = cljs.core.count(c__4556__auto___53298);
var G__53302 = (0);
seq__52308_53284 = G__53299;
chunk__52309_53285 = G__53300;
count__52310_53286 = G__53301;
i__52311_53287 = G__53302;
continue;
} else {
var vec__52321_53304 = cljs.core.first(seq__52308_53297__$1);
var k_53305__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52321_53304,(0),null);
var v_53306__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52321_53304,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_53305__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_53306__$1) : emit_js_object_val.call(null,v_53306__$1)));


var G__53312 = cljs.core.next(seq__52308_53297__$1);
var G__53313 = null;
var G__53314 = (0);
var G__53315 = (0);
seq__52308_53284 = G__53312;
chunk__52309_53285 = G__53313;
count__52310_53286 = G__53314;
i__52311_53287 = G__53315;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__52324){
var map__52325 = p__52324;
var map__52325__$1 = (((((!((map__52325 == null))))?(((((map__52325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52325.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52325):map__52325);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52325__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52325__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52325__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__45183__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__45183__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_js_object(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__45183__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__52330){
var map__52332 = p__52330;
var map__52332__$1 = (((((!((map__52332 == null))))?(((((map__52332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52332.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52332):map__52332);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52332__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52332__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__45183__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__45183__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_js_array(items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__45183__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(ns,".map__GT_",name,"(",items,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__52334){
var map__52335 = p__52334;
var map__52335__$1 = (((((!((map__52335 == null))))?(((((map__52335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52335.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52335):map__52335);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52335__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__52337){
var map__52338 = p__52337;
var map__52338__$1 = (((((!((map__52338 == null))))?(((((map__52338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52338.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52338):map__52338);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52338__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52338__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__45183__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__45183__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_constant(form);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__45183__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__52344 = cljs.analyzer.unwrap_quote(expr);
var map__52344__$1 = (((((!((map__52344 == null))))?(((((map__52344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52344.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52344):map__52344);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52344__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52344__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52344__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var map__52351 = cljs.analyzer.unwrap_quote(expr);
var map__52351__$1 = (((((!((map__52351 == null))))?(((((map__52351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52351.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52351):map__52351);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52351__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52351__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52351__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var or__4126__auto__ = (function (){var fexpr__52354 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null);
return (fexpr__52354.cljs$core$IFn$_invoke$arity$1 ? fexpr__52354.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__52354.call(null,tag));
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_(e);
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__52355){
var map__52356 = p__52355;
var map__52356__$1 = (((((!((map__52356 == null))))?(((((map__52356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52356.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52356):map__52356);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52356__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52356__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52356__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52356__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52356__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__52368){
var map__52369 = p__52368;
var map__52369__$1 = (((((!((map__52369 == null))))?(((((map__52369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52369):map__52369);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52369__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52369__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52369__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52369__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__52371_53340 = cljs.core.seq(nodes);
var chunk__52372_53341 = null;
var count__52373_53342 = (0);
var i__52374_53343 = (0);
while(true){
if((i__52374_53343 < count__52373_53342)){
var map__52402_53345 = chunk__52372_53341.cljs$core$IIndexed$_nth$arity$2(null,i__52374_53343);
var map__52402_53346__$1 = (((((!((map__52402_53345 == null))))?(((((map__52402_53345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52402_53345.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52402_53345):map__52402_53345);
var ts_53347 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52402_53346__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__52404_53348 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52402_53346__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__52404_53349__$1 = (((((!((map__52404_53348 == null))))?(((((map__52404_53348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52404_53348.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52404_53348):map__52404_53348);
var then_53350 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52404_53349__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__52407_53353 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_53347));
var chunk__52408_53354 = null;
var count__52409_53355 = (0);
var i__52410_53356 = (0);
while(true){
if((i__52410_53356 < count__52409_53355)){
var test_53357 = chunk__52408_53354.cljs$core$IIndexed$_nth$arity$2(null,i__52410_53356);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_53357,":");


var G__53358 = seq__52407_53353;
var G__53359 = chunk__52408_53354;
var G__53360 = count__52409_53355;
var G__53361 = (i__52410_53356 + (1));
seq__52407_53353 = G__53358;
chunk__52408_53354 = G__53359;
count__52409_53355 = G__53360;
i__52410_53356 = G__53361;
continue;
} else {
var temp__5753__auto___53362 = cljs.core.seq(seq__52407_53353);
if(temp__5753__auto___53362){
var seq__52407_53363__$1 = temp__5753__auto___53362;
if(cljs.core.chunked_seq_QMARK_(seq__52407_53363__$1)){
var c__4556__auto___53364 = cljs.core.chunk_first(seq__52407_53363__$1);
var G__53365 = cljs.core.chunk_rest(seq__52407_53363__$1);
var G__53366 = c__4556__auto___53364;
var G__53367 = cljs.core.count(c__4556__auto___53364);
var G__53368 = (0);
seq__52407_53353 = G__53365;
chunk__52408_53354 = G__53366;
count__52409_53355 = G__53367;
i__52410_53356 = G__53368;
continue;
} else {
var test_53370 = cljs.core.first(seq__52407_53363__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_53370,":");


var G__53371 = cljs.core.next(seq__52407_53363__$1);
var G__53372 = null;
var G__53373 = (0);
var G__53374 = (0);
seq__52407_53353 = G__53371;
chunk__52408_53354 = G__53372;
count__52409_53355 = G__53373;
i__52410_53356 = G__53374;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_53350);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_53350);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__53376 = seq__52371_53340;
var G__53377 = chunk__52372_53341;
var G__53378 = count__52373_53342;
var G__53379 = (i__52374_53343 + (1));
seq__52371_53340 = G__53376;
chunk__52372_53341 = G__53377;
count__52373_53342 = G__53378;
i__52374_53343 = G__53379;
continue;
} else {
var temp__5753__auto___53380 = cljs.core.seq(seq__52371_53340);
if(temp__5753__auto___53380){
var seq__52371_53381__$1 = temp__5753__auto___53380;
if(cljs.core.chunked_seq_QMARK_(seq__52371_53381__$1)){
var c__4556__auto___53382 = cljs.core.chunk_first(seq__52371_53381__$1);
var G__53384 = cljs.core.chunk_rest(seq__52371_53381__$1);
var G__53385 = c__4556__auto___53382;
var G__53386 = cljs.core.count(c__4556__auto___53382);
var G__53387 = (0);
seq__52371_53340 = G__53384;
chunk__52372_53341 = G__53385;
count__52373_53342 = G__53386;
i__52374_53343 = G__53387;
continue;
} else {
var map__52419_53388 = cljs.core.first(seq__52371_53381__$1);
var map__52419_53389__$1 = (((((!((map__52419_53388 == null))))?(((((map__52419_53388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52419_53388.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52419_53388):map__52419_53388);
var ts_53390 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52419_53389__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__52420_53391 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52419_53389__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__52420_53392__$1 = (((((!((map__52420_53391 == null))))?(((((map__52420_53391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52420_53391.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52420_53391):map__52420_53391);
var then_53393 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52420_53392__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__52423_53400 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_53390));
var chunk__52424_53401 = null;
var count__52425_53402 = (0);
var i__52426_53403 = (0);
while(true){
if((i__52426_53403 < count__52425_53402)){
var test_53405 = chunk__52424_53401.cljs$core$IIndexed$_nth$arity$2(null,i__52426_53403);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_53405,":");


var G__53406 = seq__52423_53400;
var G__53407 = chunk__52424_53401;
var G__53408 = count__52425_53402;
var G__53409 = (i__52426_53403 + (1));
seq__52423_53400 = G__53406;
chunk__52424_53401 = G__53407;
count__52425_53402 = G__53408;
i__52426_53403 = G__53409;
continue;
} else {
var temp__5753__auto___53410__$1 = cljs.core.seq(seq__52423_53400);
if(temp__5753__auto___53410__$1){
var seq__52423_53411__$1 = temp__5753__auto___53410__$1;
if(cljs.core.chunked_seq_QMARK_(seq__52423_53411__$1)){
var c__4556__auto___53412 = cljs.core.chunk_first(seq__52423_53411__$1);
var G__53413 = cljs.core.chunk_rest(seq__52423_53411__$1);
var G__53414 = c__4556__auto___53412;
var G__53415 = cljs.core.count(c__4556__auto___53412);
var G__53416 = (0);
seq__52423_53400 = G__53413;
chunk__52424_53401 = G__53414;
count__52425_53402 = G__53415;
i__52426_53403 = G__53416;
continue;
} else {
var test_53417 = cljs.core.first(seq__52423_53411__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_53417,":");


var G__53420 = cljs.core.next(seq__52423_53411__$1);
var G__53421 = null;
var G__53422 = (0);
var G__53423 = (0);
seq__52423_53400 = G__53420;
chunk__52424_53401 = G__53421;
count__52425_53402 = G__53422;
i__52426_53403 = G__53423;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_53393);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_53393);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__53427 = cljs.core.next(seq__52371_53381__$1);
var G__53428 = null;
var G__53429 = (0);
var G__53430 = (0);
seq__52371_53340 = G__53427;
chunk__52372_53341 = G__53428;
count__52373_53342 = G__53429;
i__52374_53343 = G__53430;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__52434){
var map__52435 = p__52434;
var map__52435__$1 = (((((!((map__52435 == null))))?(((((map__52435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52435.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52435):map__52435);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52435__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52435__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__52440 = env;
var G__52441 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(t,(1));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__52440,G__52441) : cljs.compiler.resolve_type.call(null,G__52440,G__52441));
})())].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__52442 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),idx),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(idx + (1)),cljs.core.count(t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52442,(0),null);
var rstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52442,(1),null);
var ret_t = (cljs.core.truth_(rstr)?(cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,rstr) : cljs.compiler.resolve_type.call(null,env,rstr)):null);
var axstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fstr,(9),(cljs.core.count(fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_(axstr))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__52437_SHARP_){
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,p1__52437_SHARP_) : cljs.compiler.resolve_type.call(null,env,p1__52437_SHARP_));
}),clojure.string.trim),clojure.string.split.cljs$core$IFn$_invoke$arity$2(axstr,/,/)));
var G__52446 = ["function(",clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",args_ts),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__52446,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__52446;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__52454 = env;
var G__52455 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),(cljs.core.count(t) - (1)));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__52454,G__52455) : cljs.compiler.resolve_type.call(null,G__52454,G__52455));
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
return ["{",clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52456_SHARP_){
return cljs.compiler.resolve_type(env,p1__52456_SHARP_);
}),xs)),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find(/@param/,line))){
var vec__52458 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__52459 = cljs.core.seq(vec__52458);
var first__52460 = cljs.core.first(seq__52459);
var seq__52459__$1 = cljs.core.next(seq__52459);
var p = first__52460;
var first__52460__$1 = cljs.core.first(seq__52459__$1);
var seq__52459__$2 = cljs.core.next(seq__52459__$1);
var ts = first__52460__$1;
var first__52460__$2 = cljs.core.first(seq__52459__$2);
var seq__52459__$3 = cljs.core.next(seq__52459__$2);
var n = first__52460__$2;
var xs = seq__52459__$3;
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
var vec__52462 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__52463 = cljs.core.seq(vec__52462);
var first__52464 = cljs.core.first(seq__52463);
var seq__52463__$1 = cljs.core.next(seq__52463);
var p = first__52464;
var first__52464__$1 = cljs.core.first(seq__52463__$1);
var seq__52463__$2 = cljs.core.next(seq__52463__$1);
var ts = first__52464__$1;
var xs = seq__52463__$2;
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
var G__52472 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null));
var fexpr__52471 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null);
return (fexpr__52471.cljs$core$IFn$_invoke$arity$1 ? fexpr__52471.cljs$core$IFn$_invoke$arity$1(G__52472) : fexpr__52471.call(null,G__52472));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__52478 = arguments.length;
switch (G__52478) {
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
var vec__52496 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52476_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())){
return cljs.compiler.munge_param_return(env,p1__52476_SHARP_);
} else {
return p1__52476_SHARP_;
}
}),clojure.string.split_lines(e));
var seq__52497 = cljs.core.seq(vec__52496);
var first__52498 = cljs.core.first(seq__52497);
var seq__52497__$1 = cljs.core.next(seq__52497);
var x = first__52498;
var ys = seq__52497__$1;
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(x,"*/","* /"));

var seq__52503 = cljs.core.seq(ys);
var chunk__52504 = null;
var count__52505 = (0);
var i__52506 = (0);
while(true){
if((i__52506 < count__52505)){
var next_line = chunk__52504.cljs$core$IIndexed$_nth$arity$2(null,i__52506);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__53479 = seq__52503;
var G__53480 = chunk__52504;
var G__53481 = count__52505;
var G__53482 = (i__52506 + (1));
seq__52503 = G__53479;
chunk__52504 = G__53480;
count__52505 = G__53481;
i__52506 = G__53482;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__52503);
if(temp__5753__auto__){
var seq__52503__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52503__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__52503__$1);
var G__53484 = cljs.core.chunk_rest(seq__52503__$1);
var G__53485 = c__4556__auto__;
var G__53486 = cljs.core.count(c__4556__auto__);
var G__53487 = (0);
seq__52503 = G__53484;
chunk__52504 = G__53485;
count__52505 = G__53486;
i__52506 = G__53487;
continue;
} else {
var next_line = cljs.core.first(seq__52503__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__53489 = cljs.core.next(seq__52503__$1);
var G__53490 = null;
var G__53491 = (0);
var G__53492 = (0);
seq__52503 = G__53489;
chunk__52504 = G__53490;
count__52505 = G__53491;
i__52506 = G__53492;
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

var seq__52510_53493 = cljs.core.seq(docs__$2);
var chunk__52511_53494 = null;
var count__52512_53495 = (0);
var i__52513_53497 = (0);
while(true){
if((i__52513_53497 < count__52512_53495)){
var e_53498 = chunk__52511_53494.cljs$core$IIndexed$_nth$arity$2(null,i__52513_53497);
if(cljs.core.truth_(e_53498)){
print_comment_lines(e_53498);
} else {
}


var G__53499 = seq__52510_53493;
var G__53500 = chunk__52511_53494;
var G__53501 = count__52512_53495;
var G__53502 = (i__52513_53497 + (1));
seq__52510_53493 = G__53499;
chunk__52511_53494 = G__53500;
count__52512_53495 = G__53501;
i__52513_53497 = G__53502;
continue;
} else {
var temp__5753__auto___53504 = cljs.core.seq(seq__52510_53493);
if(temp__5753__auto___53504){
var seq__52510_53505__$1 = temp__5753__auto___53504;
if(cljs.core.chunked_seq_QMARK_(seq__52510_53505__$1)){
var c__4556__auto___53506 = cljs.core.chunk_first(seq__52510_53505__$1);
var G__53507 = cljs.core.chunk_rest(seq__52510_53505__$1);
var G__53508 = c__4556__auto___53506;
var G__53509 = cljs.core.count(c__4556__auto___53506);
var G__53510 = (0);
seq__52510_53493 = G__53507;
chunk__52511_53494 = G__53508;
count__52512_53495 = G__53509;
i__52513_53497 = G__53510;
continue;
} else {
var e_53511 = cljs.core.first(seq__52510_53505__$1);
if(cljs.core.truth_(e_53511)){
print_comment_lines(e_53511);
} else {
}


var G__53512 = cljs.core.next(seq__52510_53505__$1);
var G__53513 = null;
var G__53514 = (0);
var G__53515 = (0);
seq__52510_53493 = G__53512;
chunk__52511_53494 = G__53513;
count__52512_53495 = G__53514;
i__52513_53497 = G__53515;
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
var and__4115__auto__ = cljs.core.some((function (p1__52515_SHARP_){
return goog.string.startsWith(p1__52515_SHARP_,"@define");
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__52519){
var map__52521 = p__52519;
var map__52521__$1 = (((((!((map__52521 == null))))?(((((map__52521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52521.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52521):map__52521);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52521__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52521__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52521__$1,new cljs.core.Keyword(null,"test","test",577538877));
var goog_define = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52521__$1,new cljs.core.Keyword(null,"goog-define","goog-define",-1048305441));
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52521__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52521__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52521__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52521__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52521__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52521__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__52533){
var map__52534 = p__52533;
var map__52534__$1 = (((((!((map__52534 == null))))?(((((map__52534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52534.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52534):map__52534);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52534__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52534__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52534__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name)),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("(function (",arglist,"){");

var seq__52539_53527 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),params)));
var chunk__52541_53528 = null;
var count__52542_53529 = (0);
var i__52543_53530 = (0);
while(true){
if((i__52543_53530 < count__52542_53529)){
var vec__52550_53531 = chunk__52541_53528.cljs$core$IIndexed$_nth$arity$2(null,i__52543_53530);
var i_53532 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52550_53531,(0),null);
var param_53533 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52550_53531,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_53533);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__53535 = seq__52539_53527;
var G__53536 = chunk__52541_53528;
var G__53537 = count__52542_53529;
var G__53538 = (i__52543_53530 + (1));
seq__52539_53527 = G__53535;
chunk__52541_53528 = G__53536;
count__52542_53529 = G__53537;
i__52543_53530 = G__53538;
continue;
} else {
var temp__5753__auto___53542 = cljs.core.seq(seq__52539_53527);
if(temp__5753__auto___53542){
var seq__52539_53545__$1 = temp__5753__auto___53542;
if(cljs.core.chunked_seq_QMARK_(seq__52539_53545__$1)){
var c__4556__auto___53547 = cljs.core.chunk_first(seq__52539_53545__$1);
var G__53548 = cljs.core.chunk_rest(seq__52539_53545__$1);
var G__53549 = c__4556__auto___53547;
var G__53550 = cljs.core.count(c__4556__auto___53547);
var G__53551 = (0);
seq__52539_53527 = G__53548;
chunk__52541_53528 = G__53549;
count__52542_53529 = G__53550;
i__52543_53530 = G__53551;
continue;
} else {
var vec__52553_53552 = cljs.core.first(seq__52539_53545__$1);
var i_53553 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52553_53552,(0),null);
var param_53554 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52553_53552,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_53554);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__53555 = cljs.core.next(seq__52539_53545__$1);
var G__53556 = null;
var G__53557 = (0);
var G__53558 = (0);
seq__52539_53527 = G__53555;
chunk__52541_53528 = G__53556;
count__52542_53529 = G__53557;
i__52543_53530 = G__53558;
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

var seq__52556_53559 = cljs.core.seq(params);
var chunk__52557_53560 = null;
var count__52558_53561 = (0);
var i__52559_53562 = (0);
while(true){
if((i__52559_53562 < count__52558_53561)){
var param_53563 = chunk__52557_53560.cljs$core$IIndexed$_nth$arity$2(null,i__52559_53562);
cljs.compiler.emit(param_53563);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_53563,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__53568 = seq__52556_53559;
var G__53569 = chunk__52557_53560;
var G__53570 = count__52558_53561;
var G__53571 = (i__52559_53562 + (1));
seq__52556_53559 = G__53568;
chunk__52557_53560 = G__53569;
count__52558_53561 = G__53570;
i__52559_53562 = G__53571;
continue;
} else {
var temp__5753__auto___53572 = cljs.core.seq(seq__52556_53559);
if(temp__5753__auto___53572){
var seq__52556_53573__$1 = temp__5753__auto___53572;
if(cljs.core.chunked_seq_QMARK_(seq__52556_53573__$1)){
var c__4556__auto___53575 = cljs.core.chunk_first(seq__52556_53573__$1);
var G__53576 = cljs.core.chunk_rest(seq__52556_53573__$1);
var G__53577 = c__4556__auto___53575;
var G__53578 = cljs.core.count(c__4556__auto___53575);
var G__53579 = (0);
seq__52556_53559 = G__53576;
chunk__52557_53560 = G__53577;
count__52558_53561 = G__53578;
i__52559_53562 = G__53579;
continue;
} else {
var param_53581 = cljs.core.first(seq__52556_53573__$1);
cljs.compiler.emit(param_53581);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_53581,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__53582 = cljs.core.next(seq__52556_53573__$1);
var G__53583 = null;
var G__53584 = (0);
var G__53585 = (0);
seq__52556_53559 = G__53582;
chunk__52557_53560 = G__53583;
count__52558_53561 = G__53584;
i__52559_53562 = G__53585;
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

var seq__52573_53586 = cljs.core.seq(params);
var chunk__52574_53587 = null;
var count__52575_53588 = (0);
var i__52576_53589 = (0);
while(true){
if((i__52576_53589 < count__52575_53588)){
var param_53590 = chunk__52574_53587.cljs$core$IIndexed$_nth$arity$2(null,i__52576_53589);
cljs.compiler.emit(param_53590);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_53590,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__53591 = seq__52573_53586;
var G__53592 = chunk__52574_53587;
var G__53593 = count__52575_53588;
var G__53594 = (i__52576_53589 + (1));
seq__52573_53586 = G__53591;
chunk__52574_53587 = G__53592;
count__52575_53588 = G__53593;
i__52576_53589 = G__53594;
continue;
} else {
var temp__5753__auto___53595 = cljs.core.seq(seq__52573_53586);
if(temp__5753__auto___53595){
var seq__52573_53596__$1 = temp__5753__auto___53595;
if(cljs.core.chunked_seq_QMARK_(seq__52573_53596__$1)){
var c__4556__auto___53597 = cljs.core.chunk_first(seq__52573_53596__$1);
var G__53598 = cljs.core.chunk_rest(seq__52573_53596__$1);
var G__53599 = c__4556__auto___53597;
var G__53600 = cljs.core.count(c__4556__auto___53597);
var G__53601 = (0);
seq__52573_53586 = G__53598;
chunk__52574_53587 = G__53599;
count__52575_53588 = G__53600;
i__52576_53589 = G__53601;
continue;
} else {
var param_53602 = cljs.core.first(seq__52573_53596__$1);
cljs.compiler.emit(param_53602);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_53602,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__53605 = cljs.core.next(seq__52573_53596__$1);
var G__53606 = null;
var G__53607 = (0);
var G__53608 = (0);
seq__52573_53586 = G__53605;
chunk__52574_53587 = G__53606;
count__52575_53588 = G__53607;
i__52576_53589 = G__53608;
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
var seq__52582 = cljs.core.seq(params);
var chunk__52583 = null;
var count__52584 = (0);
var i__52585 = (0);
while(true){
if((i__52585 < count__52584)){
var param = chunk__52583.cljs$core$IIndexed$_nth$arity$2(null,i__52585);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__53611 = seq__52582;
var G__53612 = chunk__52583;
var G__53613 = count__52584;
var G__53614 = (i__52585 + (1));
seq__52582 = G__53611;
chunk__52583 = G__53612;
count__52584 = G__53613;
i__52585 = G__53614;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__52582);
if(temp__5753__auto__){
var seq__52582__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52582__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__52582__$1);
var G__53615 = cljs.core.chunk_rest(seq__52582__$1);
var G__53616 = c__4556__auto__;
var G__53617 = cljs.core.count(c__4556__auto__);
var G__53618 = (0);
seq__52582 = G__53615;
chunk__52583 = G__53616;
count__52584 = G__53617;
i__52585 = G__53618;
continue;
} else {
var param = cljs.core.first(seq__52582__$1);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__53621 = cljs.core.next(seq__52582__$1);
var G__53622 = null;
var G__53623 = (0);
var G__53624 = (0);
seq__52582 = G__53621;
chunk__52583 = G__53622;
count__52584 = G__53623;
i__52585 = G__53624;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__52600){
var map__52601 = p__52600;
var map__52601__$1 = (((((!((map__52601 == null))))?(((((map__52601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52601.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52601):map__52601);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52601__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52601__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52601__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52601__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52601__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52601__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__45183__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__45183__auto__))){
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

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__45183__auto__))){
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

var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
var i = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__i"].join('');
var a = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__a"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("var ",i," = 0, ",a," = new Array(arguments.length -  ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([startslice,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("while (",i," < ",a,".length) {",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}"], 0));

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__52615){
var map__52616 = p__52615;
var map__52616__$1 = (((((!((map__52616 == null))))?(((((map__52616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52616.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52616):map__52616);
var f = map__52616__$1;
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52616__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52616__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52616__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52616__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52616__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52616__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52616__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52616__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__45183__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__45183__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var name_53634__$1 = (function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_53635 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_53634__$1);
var delegate_name_53636 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_53635),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() { ");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",delegate_name_53636," = function (");

var seq__52640_53637 = cljs.core.seq(params);
var chunk__52641_53638 = null;
var count__52642_53639 = (0);
var i__52643_53640 = (0);
while(true){
if((i__52643_53640 < count__52642_53639)){
var param_53641 = chunk__52641_53638.cljs$core$IIndexed$_nth$arity$2(null,i__52643_53640);
cljs.compiler.emit(param_53641);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_53641,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__53647 = seq__52640_53637;
var G__53648 = chunk__52641_53638;
var G__53649 = count__52642_53639;
var G__53650 = (i__52643_53640 + (1));
seq__52640_53637 = G__53647;
chunk__52641_53638 = G__53648;
count__52642_53639 = G__53649;
i__52643_53640 = G__53650;
continue;
} else {
var temp__5753__auto___53651 = cljs.core.seq(seq__52640_53637);
if(temp__5753__auto___53651){
var seq__52640_53652__$1 = temp__5753__auto___53651;
if(cljs.core.chunked_seq_QMARK_(seq__52640_53652__$1)){
var c__4556__auto___53653 = cljs.core.chunk_first(seq__52640_53652__$1);
var G__53655 = cljs.core.chunk_rest(seq__52640_53652__$1);
var G__53656 = c__4556__auto___53653;
var G__53657 = cljs.core.count(c__4556__auto___53653);
var G__53658 = (0);
seq__52640_53637 = G__53655;
chunk__52641_53638 = G__53656;
count__52642_53639 = G__53657;
i__52643_53640 = G__53658;
continue;
} else {
var param_53659 = cljs.core.first(seq__52640_53652__$1);
cljs.compiler.emit(param_53659);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_53659,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__53661 = cljs.core.next(seq__52640_53652__$1);
var G__53662 = null;
var G__53663 = (0);
var G__53664 = (0);
seq__52640_53637 = G__53661;
chunk__52641_53638 = G__53662;
count__52642_53639 = G__53663;
i__52643_53640 = G__53664;
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

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",mname_53635," = function (",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",(cljs.core.count(params) - (1)),") {");

var a_53665 = cljs.compiler.emit_arguments_to_array((cljs.core.count(params) - (1)));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("  ",cljs.core.last(params)," = new cljs.core.IndexedSeq(",a_53665,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("} ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name_53636,".call(this,");

var seq__52662_53667 = cljs.core.seq(params);
var chunk__52663_53668 = null;
var count__52664_53669 = (0);
var i__52665_53670 = (0);
while(true){
if((i__52665_53670 < count__52664_53669)){
var param_53672 = chunk__52663_53668.cljs$core$IIndexed$_nth$arity$2(null,i__52665_53670);
cljs.compiler.emit(param_53672);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_53672,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__53677 = seq__52662_53667;
var G__53678 = chunk__52663_53668;
var G__53679 = count__52664_53669;
var G__53680 = (i__52665_53670 + (1));
seq__52662_53667 = G__53677;
chunk__52663_53668 = G__53678;
count__52664_53669 = G__53679;
i__52665_53670 = G__53680;
continue;
} else {
var temp__5753__auto___53681 = cljs.core.seq(seq__52662_53667);
if(temp__5753__auto___53681){
var seq__52662_53682__$1 = temp__5753__auto___53681;
if(cljs.core.chunked_seq_QMARK_(seq__52662_53682__$1)){
var c__4556__auto___53683 = cljs.core.chunk_first(seq__52662_53682__$1);
var G__53684 = cljs.core.chunk_rest(seq__52662_53682__$1);
var G__53685 = c__4556__auto___53683;
var G__53686 = cljs.core.count(c__4556__auto___53683);
var G__53687 = (0);
seq__52662_53667 = G__53684;
chunk__52663_53668 = G__53685;
count__52664_53669 = G__53686;
i__52665_53670 = G__53687;
continue;
} else {
var param_53688 = cljs.core.first(seq__52662_53682__$1);
cljs.compiler.emit(param_53688);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_53688,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__53689 = cljs.core.next(seq__52662_53682__$1);
var G__53690 = null;
var G__53691 = (0);
var G__53692 = (0);
seq__52662_53667 = G__53689;
chunk__52663_53668 = G__53690;
count__52664_53669 = G__53691;
i__52665_53670 = G__53692;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_53635,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(mname_53635,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.Keyword(null,"name","name",1843675177),name_53634__$1));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_53635,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_53636,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_53635,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__45183__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__52711){
var map__52712 = p__52711;
var map__52712__$1 = (((((!((map__52712 == null))))?(((((map__52712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52712.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52712):map__52712);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52712__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52712__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52712__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52712__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52712__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52712__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var in_loop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52712__$1,new cljs.core.Keyword(null,"in-loop","in-loop",-187298246));
var loop_lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52712__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var recur_params = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__52696_SHARP_){
var and__4115__auto__ = p1__52696_SHARP_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.deref(new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__52696_SHARP_));
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
var name_53711__$1 = (function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_53712 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_53711__$1);
var maxparams_53713 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_53714 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_53712),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
}),methods$));
var ms_53715 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__52703_SHARP_){
return cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__52703_SHARP_)));
}),cljs.core.seq(mmap_53714));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() {");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",mname_53712," = null;");

var seq__52747_53717 = cljs.core.seq(ms_53715);
var chunk__52748_53718 = null;
var count__52749_53719 = (0);
var i__52750_53720 = (0);
while(true){
if((i__52750_53720 < count__52749_53719)){
var vec__52765_53722 = chunk__52748_53718.cljs$core$IIndexed$_nth$arity$2(null,i__52750_53720);
var n_53723 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52765_53722,(0),null);
var meth_53724 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52765_53722,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_53723," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_53724))){
cljs.compiler.emit_variadic_fn_method(meth_53724);
} else {
cljs.compiler.emit_fn_method(meth_53724);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__53726 = seq__52747_53717;
var G__53727 = chunk__52748_53718;
var G__53728 = count__52749_53719;
var G__53729 = (i__52750_53720 + (1));
seq__52747_53717 = G__53726;
chunk__52748_53718 = G__53727;
count__52749_53719 = G__53728;
i__52750_53720 = G__53729;
continue;
} else {
var temp__5753__auto___53730 = cljs.core.seq(seq__52747_53717);
if(temp__5753__auto___53730){
var seq__52747_53731__$1 = temp__5753__auto___53730;
if(cljs.core.chunked_seq_QMARK_(seq__52747_53731__$1)){
var c__4556__auto___53732 = cljs.core.chunk_first(seq__52747_53731__$1);
var G__53733 = cljs.core.chunk_rest(seq__52747_53731__$1);
var G__53734 = c__4556__auto___53732;
var G__53735 = cljs.core.count(c__4556__auto___53732);
var G__53736 = (0);
seq__52747_53717 = G__53733;
chunk__52748_53718 = G__53734;
count__52749_53719 = G__53735;
i__52750_53720 = G__53736;
continue;
} else {
var vec__52768_53737 = cljs.core.first(seq__52747_53731__$1);
var n_53738 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52768_53737,(0),null);
var meth_53739 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52768_53737,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_53738," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_53739))){
cljs.compiler.emit_variadic_fn_method(meth_53739);
} else {
cljs.compiler.emit_fn_method(meth_53739);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__53741 = cljs.core.next(seq__52747_53731__$1);
var G__53742 = null;
var G__53743 = (0);
var G__53744 = (0);
seq__52747_53717 = G__53741;
chunk__52748_53718 = G__53742;
count__52749_53719 = G__53743;
i__52750_53720 = G__53744;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_53712," = function(",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(maxparams_53713),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_53713)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(maxparams_53713));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = var_args;");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("switch(arguments.length){");

var seq__52777_53747 = cljs.core.seq(ms_53715);
var chunk__52778_53748 = null;
var count__52779_53749 = (0);
var i__52780_53750 = (0);
while(true){
if((i__52780_53750 < count__52779_53749)){
var vec__52797_53751 = chunk__52778_53748.cljs$core$IIndexed$_nth$arity$2(null,i__52780_53750);
var n_53752 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52797_53751,(0),null);
var meth_53753 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52797_53751,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_53753))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_53754 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_53754," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_53755 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_53754," = new cljs.core.IndexedSeq(",a_53755,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_53752,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_53713)),(((cljs.core.count(maxparams_53713) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_53754,");"], 0));
} else {
var pcnt_53761 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_53753));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_53761,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_53752,".call(this",(((pcnt_53761 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_53761,maxparams_53713)),null,(1),null)),(2),null))),");");
}


var G__53763 = seq__52777_53747;
var G__53764 = chunk__52778_53748;
var G__53765 = count__52779_53749;
var G__53766 = (i__52780_53750 + (1));
seq__52777_53747 = G__53763;
chunk__52778_53748 = G__53764;
count__52779_53749 = G__53765;
i__52780_53750 = G__53766;
continue;
} else {
var temp__5753__auto___53767 = cljs.core.seq(seq__52777_53747);
if(temp__5753__auto___53767){
var seq__52777_53768__$1 = temp__5753__auto___53767;
if(cljs.core.chunked_seq_QMARK_(seq__52777_53768__$1)){
var c__4556__auto___53769 = cljs.core.chunk_first(seq__52777_53768__$1);
var G__53770 = cljs.core.chunk_rest(seq__52777_53768__$1);
var G__53771 = c__4556__auto___53769;
var G__53772 = cljs.core.count(c__4556__auto___53769);
var G__53773 = (0);
seq__52777_53747 = G__53770;
chunk__52778_53748 = G__53771;
count__52779_53749 = G__53772;
i__52780_53750 = G__53773;
continue;
} else {
var vec__52806_53774 = cljs.core.first(seq__52777_53768__$1);
var n_53775 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52806_53774,(0),null);
var meth_53776 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52806_53774,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_53776))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_53777 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_53777," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_53778 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_53777," = new cljs.core.IndexedSeq(",a_53778,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_53775,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_53713)),(((cljs.core.count(maxparams_53713) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_53777,");"], 0));
} else {
var pcnt_53781 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_53776));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_53781,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_53775,".call(this",(((pcnt_53781 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_53781,maxparams_53713)),null,(1),null)),(2),null))),");");
}


var G__53782 = cljs.core.next(seq__52777_53768__$1);
var G__53783 = null;
var G__53784 = (0);
var G__53785 = (0);
seq__52777_53747 = G__53782;
chunk__52778_53748 = G__53783;
count__52779_53749 = G__53784;
i__52780_53750 = G__53785;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

var arg_count_js_53786 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val(cljs.core.first(ms_53715)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("throw(new Error('Invalid arity: ' + ",arg_count_js_53786,"));");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_53712,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_53712,".cljs$lang$applyTo = ",cljs.core.some((function (p1__52710_SHARP_){
var vec__52810 = p1__52710_SHARP_;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52810,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52810,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
}),ms_53715),".cljs$lang$applyTo;");
} else {
}

var seq__52813_53788 = cljs.core.seq(ms_53715);
var chunk__52814_53789 = null;
var count__52815_53790 = (0);
var i__52816_53791 = (0);
while(true){
if((i__52816_53791 < count__52815_53790)){
var vec__52829_53792 = chunk__52814_53789.cljs$core$IIndexed$_nth$arity$2(null,i__52816_53791);
var n_53793 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52829_53792,(0),null);
var meth_53794 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52829_53792,(1),null);
var c_53795 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_53794));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_53794))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_53712,".cljs$core$IFn$_invoke$arity$variadic = ",n_53793,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_53712,".cljs$core$IFn$_invoke$arity$",c_53795," = ",n_53793,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__53800 = seq__52813_53788;
var G__53801 = chunk__52814_53789;
var G__53802 = count__52815_53790;
var G__53803 = (i__52816_53791 + (1));
seq__52813_53788 = G__53800;
chunk__52814_53789 = G__53801;
count__52815_53790 = G__53802;
i__52816_53791 = G__53803;
continue;
} else {
var temp__5753__auto___53804 = cljs.core.seq(seq__52813_53788);
if(temp__5753__auto___53804){
var seq__52813_53805__$1 = temp__5753__auto___53804;
if(cljs.core.chunked_seq_QMARK_(seq__52813_53805__$1)){
var c__4556__auto___53806 = cljs.core.chunk_first(seq__52813_53805__$1);
var G__53807 = cljs.core.chunk_rest(seq__52813_53805__$1);
var G__53808 = c__4556__auto___53806;
var G__53809 = cljs.core.count(c__4556__auto___53806);
var G__53810 = (0);
seq__52813_53788 = G__53807;
chunk__52814_53789 = G__53808;
count__52815_53790 = G__53809;
i__52816_53791 = G__53810;
continue;
} else {
var vec__52832_53811 = cljs.core.first(seq__52813_53805__$1);
var n_53812 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52832_53811,(0),null);
var meth_53813 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52832_53811,(1),null);
var c_53814 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_53813));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_53813))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_53712,".cljs$core$IFn$_invoke$arity$variadic = ",n_53812,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_53712,".cljs$core$IFn$_invoke$arity$",c_53814," = ",n_53812,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__53817 = cljs.core.next(seq__52813_53805__$1);
var G__53818 = null;
var G__53819 = (0);
var G__53820 = (0);
seq__52813_53788 = G__53817;
chunk__52814_53789 = G__53818;
count__52815_53790 = G__53819;
i__52816_53791 = G__53820;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_53712,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");
}

if(loop_locals){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(";})(",cljs.compiler.comma_sep(loop_locals),"))");
} else {
return null;
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"do","do",46310725),(function (p__52839){
var map__52840 = p__52839;
var map__52840__$1 = (((((!((map__52840 == null))))?(((((map__52840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52840.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52840):map__52840);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52840__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52840__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52840__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq(statements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__52844_53829 = cljs.core.seq(statements);
var chunk__52845_53830 = null;
var count__52846_53831 = (0);
var i__52847_53832 = (0);
while(true){
if((i__52847_53832 < count__52846_53831)){
var s_53833 = chunk__52845_53830.cljs$core$IIndexed$_nth$arity$2(null,i__52847_53832);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_53833);


var G__53835 = seq__52844_53829;
var G__53836 = chunk__52845_53830;
var G__53837 = count__52846_53831;
var G__53838 = (i__52847_53832 + (1));
seq__52844_53829 = G__53835;
chunk__52845_53830 = G__53836;
count__52846_53831 = G__53837;
i__52847_53832 = G__53838;
continue;
} else {
var temp__5753__auto___53839 = cljs.core.seq(seq__52844_53829);
if(temp__5753__auto___53839){
var seq__52844_53840__$1 = temp__5753__auto___53839;
if(cljs.core.chunked_seq_QMARK_(seq__52844_53840__$1)){
var c__4556__auto___53841 = cljs.core.chunk_first(seq__52844_53840__$1);
var G__53842 = cljs.core.chunk_rest(seq__52844_53840__$1);
var G__53843 = c__4556__auto___53841;
var G__53844 = cljs.core.count(c__4556__auto___53841);
var G__53845 = (0);
seq__52844_53829 = G__53842;
chunk__52845_53830 = G__53843;
count__52846_53831 = G__53844;
i__52847_53832 = G__53845;
continue;
} else {
var s_53847 = cljs.core.first(seq__52844_53840__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_53847);


var G__53849 = cljs.core.next(seq__52844_53840__$1);
var G__53850 = null;
var G__53851 = (0);
var G__53852 = (0);
seq__52844_53829 = G__53849;
chunk__52845_53830 = G__53850;
count__52846_53831 = G__53851;
i__52847_53832 = G__53852;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__52869){
var map__52872 = p__52869;
var map__52872__$1 = (((((!((map__52872 == null))))?(((((map__52872.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52872.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52872):map__52872);
var try$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52872__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52872__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52872__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52872__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52872__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__52875,is_loop){
var map__52876 = p__52875;
var map__52876__$1 = (((((!((map__52876 == null))))?(((((map__52876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52876.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52876):map__52876);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52876__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52876__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52876__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__52880_53856 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__52881_53857 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope(binding),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
}),bindings):null));
(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__52881_53857);

try{var seq__52882_53858 = cljs.core.seq(bindings);
var chunk__52883_53859 = null;
var count__52884_53860 = (0);
var i__52885_53861 = (0);
while(true){
if((i__52885_53861 < count__52884_53860)){
var map__52890_53862 = chunk__52883_53859.cljs$core$IIndexed$_nth$arity$2(null,i__52885_53861);
var map__52890_53863__$1 = (((((!((map__52890_53862 == null))))?(((((map__52890_53862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52890_53862.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52890_53862):map__52890_53862);
var binding_53864 = map__52890_53863__$1;
var init_53865 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52890_53863__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_53864);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_53865,";");


var G__53867 = seq__52882_53858;
var G__53868 = chunk__52883_53859;
var G__53869 = count__52884_53860;
var G__53870 = (i__52885_53861 + (1));
seq__52882_53858 = G__53867;
chunk__52883_53859 = G__53868;
count__52884_53860 = G__53869;
i__52885_53861 = G__53870;
continue;
} else {
var temp__5753__auto___53872 = cljs.core.seq(seq__52882_53858);
if(temp__5753__auto___53872){
var seq__52882_53879__$1 = temp__5753__auto___53872;
if(cljs.core.chunked_seq_QMARK_(seq__52882_53879__$1)){
var c__4556__auto___53880 = cljs.core.chunk_first(seq__52882_53879__$1);
var G__53881 = cljs.core.chunk_rest(seq__52882_53879__$1);
var G__53882 = c__4556__auto___53880;
var G__53883 = cljs.core.count(c__4556__auto___53880);
var G__53884 = (0);
seq__52882_53858 = G__53881;
chunk__52883_53859 = G__53882;
count__52884_53860 = G__53883;
i__52885_53861 = G__53884;
continue;
} else {
var map__52892_53886 = cljs.core.first(seq__52882_53879__$1);
var map__52892_53887__$1 = (((((!((map__52892_53886 == null))))?(((((map__52892_53886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52892_53886.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52892_53886):map__52892_53886);
var binding_53888 = map__52892_53887__$1;
var init_53889 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52892_53887__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_53888);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_53889,";");


var G__53890 = cljs.core.next(seq__52882_53879__$1);
var G__53891 = null;
var G__53892 = (0);
var G__53893 = (0);
seq__52882_53858 = G__53890;
chunk__52883_53859 = G__53891;
count__52884_53860 = G__53892;
i__52885_53861 = G__53893;
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
}finally {(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__52880_53856);
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__52894){
var map__52895 = p__52894;
var map__52895__$1 = (((((!((map__52895 == null))))?(((((map__52895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52895.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52895):map__52895);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52895__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52895__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52895__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4613__auto___53895 = cljs.core.count(exprs);
var i_53896 = (0);
while(true){
if((i_53896 < n__4613__auto___53895)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_53896) : temps.call(null,i_53896))," = ",(exprs.cljs$core$IFn$_invoke$arity$1 ? exprs.cljs$core$IFn$_invoke$arity$1(i_53896) : exprs.call(null,i_53896)),";");

var G__53901 = (i_53896 + (1));
i_53896 = G__53901;
continue;
} else {
}
break;
}

var n__4613__auto___53902 = cljs.core.count(exprs);
var i_53903 = (0);
while(true){
if((i_53903 < n__4613__auto___53902)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(i_53903) : params.call(null,i_53903)))," = ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_53903) : temps.call(null,i_53903)),";");

var G__53904 = (i_53903 + (1));
i_53903 = G__53904;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("continue;");
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__52897){
var map__52898 = p__52897;
var map__52898__$1 = (((((!((map__52898 == null))))?(((((map__52898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52898.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52898):map__52898);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52898__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52898__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52898__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__52900_53909 = cljs.core.seq(bindings);
var chunk__52901_53910 = null;
var count__52902_53911 = (0);
var i__52903_53912 = (0);
while(true){
if((i__52903_53912 < count__52902_53911)){
var map__52908_53913 = chunk__52901_53910.cljs$core$IIndexed$_nth$arity$2(null,i__52903_53912);
var map__52908_53914__$1 = (((((!((map__52908_53913 == null))))?(((((map__52908_53913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52908_53913.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52908_53913):map__52908_53913);
var binding_53915 = map__52908_53914__$1;
var init_53916 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52908_53914__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_53915)," = ",init_53916,";");


var G__53917 = seq__52900_53909;
var G__53918 = chunk__52901_53910;
var G__53919 = count__52902_53911;
var G__53920 = (i__52903_53912 + (1));
seq__52900_53909 = G__53917;
chunk__52901_53910 = G__53918;
count__52902_53911 = G__53919;
i__52903_53912 = G__53920;
continue;
} else {
var temp__5753__auto___53921 = cljs.core.seq(seq__52900_53909);
if(temp__5753__auto___53921){
var seq__52900_53922__$1 = temp__5753__auto___53921;
if(cljs.core.chunked_seq_QMARK_(seq__52900_53922__$1)){
var c__4556__auto___53923 = cljs.core.chunk_first(seq__52900_53922__$1);
var G__53924 = cljs.core.chunk_rest(seq__52900_53922__$1);
var G__53925 = c__4556__auto___53923;
var G__53926 = cljs.core.count(c__4556__auto___53923);
var G__53927 = (0);
seq__52900_53909 = G__53924;
chunk__52901_53910 = G__53925;
count__52902_53911 = G__53926;
i__52903_53912 = G__53927;
continue;
} else {
var map__52915_53928 = cljs.core.first(seq__52900_53922__$1);
var map__52915_53929__$1 = (((((!((map__52915_53928 == null))))?(((((map__52915_53928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52915_53928.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52915_53928):map__52915_53928);
var binding_53930 = map__52915_53929__$1;
var init_53931 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52915_53929__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_53930)," = ",init_53931,";");


var G__53936 = cljs.core.next(seq__52900_53922__$1);
var G__53937 = null;
var G__53938 = (0);
var G__53939 = (0);
seq__52900_53909 = G__53936;
chunk__52901_53910 = G__53937;
count__52902_53911 = G__53938;
i__52903_53912 = G__53939;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__52919){
var map__52920 = p__52919;
var map__52920__$1 = (((((!((map__52920 == null))))?(((((map__52920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52920.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52920):map__52920);
var expr = map__52920__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52920__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52920__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52920__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
if(cljs.core.not((function (){var fexpr__52932 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"null",new cljs.core.Symbol(null,"any","any",-948528346,null),"null",new cljs.core.Symbol(null,"js","js",-886355190,null),"null",new cljs.core.Symbol(null,"number","number",-1084057331,null),"null",new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),"null",new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"function","function",-486723946,null),"null",new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),"null"], null), null);
return (fexpr__52932.cljs$core$IFn$_invoke$arity$1 ? fexpr__52932.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__52932.call(null,tag));
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
var opt_count_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null))) && (cljs.core.boolean$((function (){var fexpr__52934 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null"], null), null);
return (fexpr__52934.cljs$core$IFn$_invoke$arity$1 ? fexpr__52934.cljs$core$IFn$_invoke$arity$1(first_arg_tag) : fexpr__52934.call(null,first_arg_tag));
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
var vec__52922 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count(args);
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
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__52917_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__52917_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__52918_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__52918_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52922,(0),null);
var variadic_invoke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52922,(1),null);
var env__45183__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__45183__auto__))){
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
var pimpl_53967 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.compiler.protocol_prefix(protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(args),".",pimpl_53967,"(",cljs.compiler.comma_sep(cljs.core.cons("null",cljs.core.rest(args))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(keyword_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count(args),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_53968 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,"(",cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(mfa_53968,args)),(((mfa_53968 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.comma_sep(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(mfa_53968,args)),"], 0))"], 0));
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
var G__52947 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1);
var fexpr__52946 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__52946.cljs$core$IFn$_invoke$arity$1 ? fexpr__52946.cljs$core$IFn$_invoke$arity$1(G__52947) : fexpr__52946.call(null,G__52947));
} else {
return and__4115__auto__;
}
})())){
var fprop_53971 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
if(cljs.core.truth_(cljs.analyzer._STAR_fn_invoke_direct_STAR_)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_53971," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_53971,"(",cljs.compiler.comma_sep(args),") : ",f__$1,"(",cljs.compiler.comma_sep(args),"))"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_53971," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_53971,"(",cljs.compiler.comma_sep(args),") : ",f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),"))"], 0));
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

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__45183__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__52948){
var map__52949 = p__52948;
var map__52949__$1 = (((((!((map__52949 == null))))?(((((map__52949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52949.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52949):map__52949);
var ctor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52949__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52949__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52949__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__45183__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__45183__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("(new ",ctor,"(",cljs.compiler.comma_sep(args),"))");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__45183__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__52951){
var map__52952 = p__52951;
var map__52952__$1 = (((((!((map__52952 == null))))?(((((map__52952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52952):map__52952);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52952__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52952__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52952__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__45183__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__45183__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("(",target," = ",val,")");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__45183__auto__))){
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
var map__52955 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__52955__$1 = (((((!((map__52955 == null))))?(((((map__52955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52955.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52955):map__52955);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52955__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52955__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__52956 = options;
var map__52956__$1 = (((((!((map__52956 == null))))?(((((map__52956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52956):map__52956);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52956__$1,new cljs.core.Keyword(null,"target","target",253001721));
var nodejs_rt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52956__$1,new cljs.core.Keyword(null,"nodejs-rt","nodejs-rt",-512437071));
var optimizations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52956__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__52957 = (function (){var libs__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(seen)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(libs)),deps));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__52962 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__52962__$1 = (((((!((map__52962 == null))))?(((((map__52962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52962.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52962):map__52962);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52962__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52962__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52957,(0),null);
var libs_to_load = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52957,(1),null);
var global_exports_libs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__52964_53989 = cljs.core.seq(libs_to_load);
var chunk__52965_53990 = null;
var count__52966_53991 = (0);
var i__52967_53992 = (0);
while(true){
if((i__52967_53992 < count__52966_53991)){
var lib_53997 = chunk__52965_53990.cljs$core$IIndexed$_nth$arity$2(null,i__52967_53992);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_53997)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_53997),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_53997),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_53997),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_53997),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_53997,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_53997),"');");
}

}
}
}


var G__53998 = seq__52964_53989;
var G__53999 = chunk__52965_53990;
var G__54000 = count__52966_53991;
var G__54001 = (i__52967_53992 + (1));
seq__52964_53989 = G__53998;
chunk__52965_53990 = G__53999;
count__52966_53991 = G__54000;
i__52967_53992 = G__54001;
continue;
} else {
var temp__5753__auto___54002 = cljs.core.seq(seq__52964_53989);
if(temp__5753__auto___54002){
var seq__52964_54003__$1 = temp__5753__auto___54002;
if(cljs.core.chunked_seq_QMARK_(seq__52964_54003__$1)){
var c__4556__auto___54004 = cljs.core.chunk_first(seq__52964_54003__$1);
var G__54005 = cljs.core.chunk_rest(seq__52964_54003__$1);
var G__54006 = c__4556__auto___54004;
var G__54007 = cljs.core.count(c__4556__auto___54004);
var G__54008 = (0);
seq__52964_53989 = G__54005;
chunk__52965_53990 = G__54006;
count__52966_53991 = G__54007;
i__52967_53992 = G__54008;
continue;
} else {
var lib_54009 = cljs.core.first(seq__52964_54003__$1);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_54009)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_54009),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_54009),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_54009),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_54009),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_54009,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_54009),"');");
}

}
}
}


var G__54010 = cljs.core.next(seq__52964_54003__$1);
var G__54011 = null;
var G__54012 = (0);
var G__54013 = (0);
seq__52964_53989 = G__54010;
chunk__52965_53990 = G__54011;
count__52966_53991 = G__54012;
i__52967_53992 = G__54013;
continue;
}
} else {
}
}
break;
}

var seq__52969_54014 = cljs.core.seq(node_libs);
var chunk__52970_54015 = null;
var count__52971_54016 = (0);
var i__52972_54017 = (0);
while(true){
if((i__52972_54017 < count__52971_54016)){
var lib_54018 = chunk__52970_54015.cljs$core$IIndexed$_nth$arity$2(null,i__52972_54017);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_54018)," = require('",lib_54018,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__54019 = seq__52969_54014;
var G__54020 = chunk__52970_54015;
var G__54021 = count__52971_54016;
var G__54022 = (i__52972_54017 + (1));
seq__52969_54014 = G__54019;
chunk__52970_54015 = G__54020;
count__52971_54016 = G__54021;
i__52972_54017 = G__54022;
continue;
} else {
var temp__5753__auto___54023 = cljs.core.seq(seq__52969_54014);
if(temp__5753__auto___54023){
var seq__52969_54024__$1 = temp__5753__auto___54023;
if(cljs.core.chunked_seq_QMARK_(seq__52969_54024__$1)){
var c__4556__auto___54025 = cljs.core.chunk_first(seq__52969_54024__$1);
var G__54026 = cljs.core.chunk_rest(seq__52969_54024__$1);
var G__54027 = c__4556__auto___54025;
var G__54028 = cljs.core.count(c__4556__auto___54025);
var G__54029 = (0);
seq__52969_54014 = G__54026;
chunk__52970_54015 = G__54027;
count__52971_54016 = G__54028;
i__52972_54017 = G__54029;
continue;
} else {
var lib_54030 = cljs.core.first(seq__52969_54024__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_54030)," = require('",lib_54030,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__54031 = cljs.core.next(seq__52969_54024__$1);
var G__54032 = null;
var G__54033 = (0);
var G__54034 = (0);
seq__52969_54014 = G__54031;
chunk__52970_54015 = G__54032;
count__52971_54016 = G__54033;
i__52972_54017 = G__54034;
continue;
}
} else {
}
}
break;
}

var seq__52973_54035 = cljs.core.seq(global_exports_libs);
var chunk__52974_54036 = null;
var count__52975_54037 = (0);
var i__52976_54038 = (0);
while(true){
if((i__52976_54038 < count__52975_54037)){
var lib_54039 = chunk__52974_54036.cljs$core$IIndexed$_nth$arity$2(null,i__52976_54038);
var map__52981_54040 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_54039));
var map__52981_54041__$1 = (((((!((map__52981_54040 == null))))?(((((map__52981_54040.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52981_54040.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52981_54040):map__52981_54040);
var global_exports_54042 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52981_54041__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_54042,lib_54039);


var G__54045 = seq__52973_54035;
var G__54046 = chunk__52974_54036;
var G__54047 = count__52975_54037;
var G__54048 = (i__52976_54038 + (1));
seq__52973_54035 = G__54045;
chunk__52974_54036 = G__54046;
count__52975_54037 = G__54047;
i__52976_54038 = G__54048;
continue;
} else {
var temp__5753__auto___54050 = cljs.core.seq(seq__52973_54035);
if(temp__5753__auto___54050){
var seq__52973_54051__$1 = temp__5753__auto___54050;
if(cljs.core.chunked_seq_QMARK_(seq__52973_54051__$1)){
var c__4556__auto___54052 = cljs.core.chunk_first(seq__52973_54051__$1);
var G__54053 = cljs.core.chunk_rest(seq__52973_54051__$1);
var G__54054 = c__4556__auto___54052;
var G__54055 = cljs.core.count(c__4556__auto___54052);
var G__54056 = (0);
seq__52973_54035 = G__54053;
chunk__52974_54036 = G__54054;
count__52975_54037 = G__54055;
i__52976_54038 = G__54056;
continue;
} else {
var lib_54057 = cljs.core.first(seq__52973_54051__$1);
var map__52983_54058 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_54057));
var map__52983_54059__$1 = (((((!((map__52983_54058 == null))))?(((((map__52983_54058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52983_54058.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52983_54058):map__52983_54058);
var global_exports_54060 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52983_54059__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_54060,lib_54057);


var G__54086 = cljs.core.next(seq__52973_54051__$1);
var G__54087 = null;
var G__54088 = (0);
var G__54089 = (0);
seq__52973_54035 = G__54086;
chunk__52974_54036 = G__54087;
count__52975_54037 = G__54088;
i__52976_54038 = G__54089;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__52985){
var map__52986 = p__52985;
var map__52986__$1 = (((((!((map__52986 == null))))?(((((map__52986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52986.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52986):map__52986);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52986__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52986__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52986__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52986__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52986__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52986__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52986__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("'nil';");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__52989){
var map__52996 = p__52989;
var map__52996__$1 = (((((!((map__52996 == null))))?(((((map__52996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52996.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52996):map__52996);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52996__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52996__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52996__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52996__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52996__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52996__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52996__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__52999){
var map__53000 = p__52999;
var map__53000__$1 = (((((!((map__53000 == null))))?(((((map__53000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53000.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53000):map__53000);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53000__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53000__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53000__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53000__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53000__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__53002_54097 = cljs.core.seq(protocols);
var chunk__53003_54098 = null;
var count__53004_54099 = (0);
var i__53005_54100 = (0);
while(true){
if((i__53005_54100 < count__53004_54099)){
var protocol_54101 = chunk__53003_54098.cljs$core$IIndexed$_nth$arity$2(null,i__53005_54100);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_54101)),"}");


var G__54102 = seq__53002_54097;
var G__54103 = chunk__53003_54098;
var G__54104 = count__53004_54099;
var G__54105 = (i__53005_54100 + (1));
seq__53002_54097 = G__54102;
chunk__53003_54098 = G__54103;
count__53004_54099 = G__54104;
i__53005_54100 = G__54105;
continue;
} else {
var temp__5753__auto___54106 = cljs.core.seq(seq__53002_54097);
if(temp__5753__auto___54106){
var seq__53002_54107__$1 = temp__5753__auto___54106;
if(cljs.core.chunked_seq_QMARK_(seq__53002_54107__$1)){
var c__4556__auto___54108 = cljs.core.chunk_first(seq__53002_54107__$1);
var G__54109 = cljs.core.chunk_rest(seq__53002_54107__$1);
var G__54110 = c__4556__auto___54108;
var G__54111 = cljs.core.count(c__4556__auto___54108);
var G__54112 = (0);
seq__53002_54097 = G__54109;
chunk__53003_54098 = G__54110;
count__53004_54099 = G__54111;
i__53005_54100 = G__54112;
continue;
} else {
var protocol_54113 = cljs.core.first(seq__53002_54107__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_54113)),"}");


var G__54114 = cljs.core.next(seq__53002_54107__$1);
var G__54115 = null;
var G__54116 = (0);
var G__54117 = (0);
seq__53002_54097 = G__54114;
chunk__53003_54098 = G__54115;
count__53004_54099 = G__54116;
i__53005_54100 = G__54117;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__53007_54119 = cljs.core.seq(fields__$1);
var chunk__53008_54120 = null;
var count__53009_54121 = (0);
var i__53010_54122 = (0);
while(true){
if((i__53010_54122 < count__53009_54121)){
var fld_54123 = chunk__53008_54120.cljs$core$IIndexed$_nth$arity$2(null,i__53010_54122);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_54123," = ",fld_54123,";");


var G__54125 = seq__53007_54119;
var G__54126 = chunk__53008_54120;
var G__54127 = count__53009_54121;
var G__54128 = (i__53010_54122 + (1));
seq__53007_54119 = G__54125;
chunk__53008_54120 = G__54126;
count__53009_54121 = G__54127;
i__53010_54122 = G__54128;
continue;
} else {
var temp__5753__auto___54129 = cljs.core.seq(seq__53007_54119);
if(temp__5753__auto___54129){
var seq__53007_54130__$1 = temp__5753__auto___54129;
if(cljs.core.chunked_seq_QMARK_(seq__53007_54130__$1)){
var c__4556__auto___54131 = cljs.core.chunk_first(seq__53007_54130__$1);
var G__54132 = cljs.core.chunk_rest(seq__53007_54130__$1);
var G__54133 = c__4556__auto___54131;
var G__54134 = cljs.core.count(c__4556__auto___54131);
var G__54135 = (0);
seq__53007_54119 = G__54132;
chunk__53008_54120 = G__54133;
count__53009_54121 = G__54134;
i__53010_54122 = G__54135;
continue;
} else {
var fld_54138 = cljs.core.first(seq__53007_54130__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_54138," = ",fld_54138,";");


var G__54139 = cljs.core.next(seq__53007_54130__$1);
var G__54140 = null;
var G__54141 = (0);
var G__54142 = (0);
seq__53007_54119 = G__54139;
chunk__53008_54120 = G__54140;
count__53009_54121 = G__54141;
i__53010_54122 = G__54142;
continue;
}
} else {
}
}
break;
}

var seq__53013_54144 = cljs.core.seq(pmasks);
var chunk__53014_54145 = null;
var count__53015_54146 = (0);
var i__53016_54147 = (0);
while(true){
if((i__53016_54147 < count__53015_54146)){
var vec__53023_54148 = chunk__53014_54145.cljs$core$IIndexed$_nth$arity$2(null,i__53016_54147);
var pno_54149 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53023_54148,(0),null);
var pmask_54150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53023_54148,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_54149,"$ = ",pmask_54150,";");


var G__54151 = seq__53013_54144;
var G__54152 = chunk__53014_54145;
var G__54153 = count__53015_54146;
var G__54154 = (i__53016_54147 + (1));
seq__53013_54144 = G__54151;
chunk__53014_54145 = G__54152;
count__53015_54146 = G__54153;
i__53016_54147 = G__54154;
continue;
} else {
var temp__5753__auto___54155 = cljs.core.seq(seq__53013_54144);
if(temp__5753__auto___54155){
var seq__53013_54156__$1 = temp__5753__auto___54155;
if(cljs.core.chunked_seq_QMARK_(seq__53013_54156__$1)){
var c__4556__auto___54157 = cljs.core.chunk_first(seq__53013_54156__$1);
var G__54158 = cljs.core.chunk_rest(seq__53013_54156__$1);
var G__54159 = c__4556__auto___54157;
var G__54160 = cljs.core.count(c__4556__auto___54157);
var G__54161 = (0);
seq__53013_54144 = G__54158;
chunk__53014_54145 = G__54159;
count__53015_54146 = G__54160;
i__53016_54147 = G__54161;
continue;
} else {
var vec__53026_54162 = cljs.core.first(seq__53013_54156__$1);
var pno_54163 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53026_54162,(0),null);
var pmask_54164 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53026_54162,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_54163,"$ = ",pmask_54164,";");


var G__54165 = cljs.core.next(seq__53013_54156__$1);
var G__54166 = null;
var G__54167 = (0);
var G__54168 = (0);
seq__53013_54144 = G__54165;
chunk__53014_54145 = G__54166;
count__53015_54146 = G__54167;
i__53016_54147 = G__54168;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__53032){
var map__53033 = p__53032;
var map__53033__$1 = (((((!((map__53033 == null))))?(((((map__53033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53033.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53033):map__53033);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53033__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53033__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53033__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53033__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53033__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__53041_54169 = cljs.core.seq(protocols);
var chunk__53042_54170 = null;
var count__53043_54171 = (0);
var i__53044_54172 = (0);
while(true){
if((i__53044_54172 < count__53043_54171)){
var protocol_54173 = chunk__53042_54170.cljs$core$IIndexed$_nth$arity$2(null,i__53044_54172);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_54173)),"}");


var G__54174 = seq__53041_54169;
var G__54175 = chunk__53042_54170;
var G__54176 = count__53043_54171;
var G__54177 = (i__53044_54172 + (1));
seq__53041_54169 = G__54174;
chunk__53042_54170 = G__54175;
count__53043_54171 = G__54176;
i__53044_54172 = G__54177;
continue;
} else {
var temp__5753__auto___54178 = cljs.core.seq(seq__53041_54169);
if(temp__5753__auto___54178){
var seq__53041_54179__$1 = temp__5753__auto___54178;
if(cljs.core.chunked_seq_QMARK_(seq__53041_54179__$1)){
var c__4556__auto___54180 = cljs.core.chunk_first(seq__53041_54179__$1);
var G__54181 = cljs.core.chunk_rest(seq__53041_54179__$1);
var G__54182 = c__4556__auto___54180;
var G__54183 = cljs.core.count(c__4556__auto___54180);
var G__54184 = (0);
seq__53041_54169 = G__54181;
chunk__53042_54170 = G__54182;
count__53043_54171 = G__54183;
i__53044_54172 = G__54184;
continue;
} else {
var protocol_54185 = cljs.core.first(seq__53041_54179__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_54185)),"}");


var G__54186 = cljs.core.next(seq__53041_54179__$1);
var G__54187 = null;
var G__54188 = (0);
var G__54189 = (0);
seq__53041_54169 = G__54186;
chunk__53042_54170 = G__54187;
count__53043_54171 = G__54188;
i__53044_54172 = G__54189;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__53045_54190 = cljs.core.seq(fields__$1);
var chunk__53046_54191 = null;
var count__53047_54192 = (0);
var i__53048_54193 = (0);
while(true){
if((i__53048_54193 < count__53047_54192)){
var fld_54195 = chunk__53046_54191.cljs$core$IIndexed$_nth$arity$2(null,i__53048_54193);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_54195," = ",fld_54195,";");


var G__54196 = seq__53045_54190;
var G__54197 = chunk__53046_54191;
var G__54198 = count__53047_54192;
var G__54199 = (i__53048_54193 + (1));
seq__53045_54190 = G__54196;
chunk__53046_54191 = G__54197;
count__53047_54192 = G__54198;
i__53048_54193 = G__54199;
continue;
} else {
var temp__5753__auto___54201 = cljs.core.seq(seq__53045_54190);
if(temp__5753__auto___54201){
var seq__53045_54204__$1 = temp__5753__auto___54201;
if(cljs.core.chunked_seq_QMARK_(seq__53045_54204__$1)){
var c__4556__auto___54205 = cljs.core.chunk_first(seq__53045_54204__$1);
var G__54206 = cljs.core.chunk_rest(seq__53045_54204__$1);
var G__54207 = c__4556__auto___54205;
var G__54208 = cljs.core.count(c__4556__auto___54205);
var G__54209 = (0);
seq__53045_54190 = G__54206;
chunk__53046_54191 = G__54207;
count__53047_54192 = G__54208;
i__53048_54193 = G__54209;
continue;
} else {
var fld_54211 = cljs.core.first(seq__53045_54204__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_54211," = ",fld_54211,";");


var G__54212 = cljs.core.next(seq__53045_54204__$1);
var G__54213 = null;
var G__54214 = (0);
var G__54215 = (0);
seq__53045_54190 = G__54212;
chunk__53046_54191 = G__54213;
count__53047_54192 = G__54214;
i__53048_54193 = G__54215;
continue;
}
} else {
}
}
break;
}

var seq__53049_54216 = cljs.core.seq(pmasks);
var chunk__53050_54217 = null;
var count__53051_54218 = (0);
var i__53052_54219 = (0);
while(true){
if((i__53052_54219 < count__53051_54218)){
var vec__53059_54220 = chunk__53050_54217.cljs$core$IIndexed$_nth$arity$2(null,i__53052_54219);
var pno_54221 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53059_54220,(0),null);
var pmask_54222 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53059_54220,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_54221,"$ = ",pmask_54222,";");


var G__54245 = seq__53049_54216;
var G__54246 = chunk__53050_54217;
var G__54247 = count__53051_54218;
var G__54248 = (i__53052_54219 + (1));
seq__53049_54216 = G__54245;
chunk__53050_54217 = G__54246;
count__53051_54218 = G__54247;
i__53052_54219 = G__54248;
continue;
} else {
var temp__5753__auto___54249 = cljs.core.seq(seq__53049_54216);
if(temp__5753__auto___54249){
var seq__53049_54250__$1 = temp__5753__auto___54249;
if(cljs.core.chunked_seq_QMARK_(seq__53049_54250__$1)){
var c__4556__auto___54251 = cljs.core.chunk_first(seq__53049_54250__$1);
var G__54252 = cljs.core.chunk_rest(seq__53049_54250__$1);
var G__54253 = c__4556__auto___54251;
var G__54254 = cljs.core.count(c__4556__auto___54251);
var G__54255 = (0);
seq__53049_54216 = G__54252;
chunk__53050_54217 = G__54253;
count__53051_54218 = G__54254;
i__53052_54219 = G__54255;
continue;
} else {
var vec__53062_54256 = cljs.core.first(seq__53049_54250__$1);
var pno_54257 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53062_54256,(0),null);
var pmask_54258 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53062_54256,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_54257,"$ = ",pmask_54258,";");


var G__54259 = cljs.core.next(seq__53049_54250__$1);
var G__54260 = null;
var G__54261 = (0);
var G__54262 = (0);
seq__53049_54216 = G__54259;
chunk__53050_54217 = G__54260;
count__53051_54218 = G__54261;
i__53052_54219 = G__54262;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__53065){
var map__53066 = p__53065;
var map__53066__$1 = (((((!((map__53066 == null))))?(((((map__53066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53066.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53066):map__53066);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53066__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53066__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53066__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53066__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53066__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__45183__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__45183__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3(target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__45183__auto__))){
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__53068){
var map__53069 = p__53068;
var map__53069__$1 = (((((!((map__53069 == null))))?(((((map__53069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53069.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53069):map__53069);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53069__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53069__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53069__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53069__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53069__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4115__auto__ = code;
if(cljs.core.truth_(and__4115__auto__)){
return goog.string.startsWith(clojure.string.trim(code),"/*");
} else {
return and__4115__auto__;
}
})())){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(code);
} else {
var env__45183__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__45183__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(code);
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__45183__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("goog.require('cljs.core');");

var seq__53075 = cljs.core.seq(table);
var chunk__53076 = null;
var count__53077 = (0);
var i__53078 = (0);
while(true){
if((i__53078 < count__53077)){
var vec__53085 = chunk__53076.cljs$core$IIndexed$_nth$arity$2(null,i__53078);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53085,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53085,(1),null);
var ns_54270 = cljs.core.namespace(sym);
var name_54271 = cljs.core.name(sym);
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


var G__54274 = seq__53075;
var G__54275 = chunk__53076;
var G__54276 = count__53077;
var G__54277 = (i__53078 + (1));
seq__53075 = G__54274;
chunk__53076 = G__54275;
count__53077 = G__54276;
i__53078 = G__54277;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__53075);
if(temp__5753__auto__){
var seq__53075__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53075__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__53075__$1);
var G__54278 = cljs.core.chunk_rest(seq__53075__$1);
var G__54279 = c__4556__auto__;
var G__54280 = cljs.core.count(c__4556__auto__);
var G__54281 = (0);
seq__53075 = G__54278;
chunk__53076 = G__54279;
count__53077 = G__54280;
i__53078 = G__54281;
continue;
} else {
var vec__53088 = cljs.core.first(seq__53075__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53088,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53088,(1),null);
var ns_54282 = cljs.core.namespace(sym);
var name_54283 = cljs.core.name(sym);
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


var G__54289 = cljs.core.next(seq__53075__$1);
var G__54290 = null;
var G__54291 = (0);
var G__54292 = (0);
seq__53075 = G__54289;
chunk__53076 = G__54290;
count__53077 = G__54291;
i__53078 = G__54292;
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
var G__53092 = arguments.length;
switch (G__53092) {
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
var k_54294 = cljs.core.first(ks);
var vec__53093_54295 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,k_54294);
var top_54296 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53093_54295,(0),null);
var prefix_SINGLEQUOTE__54297 = vec__53093_54295;
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_54294)) && ((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(known_externs,prefix_SINGLEQUOTE__54297) == null)))){
if((!(((cljs.core.contains_QMARK_(cljs.core.deref(top_level),top_54296)) || (cljs.core.contains_QMARK_(known_externs,top_54296)))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__54297)),";");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(top_level,cljs.core.conj,top_54296);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__54297)),";");
}
} else {
}

var m_54299 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(externs,k_54294);
if(cljs.core.empty_QMARK_(m_54299)){
} else {
cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(prefix_SINGLEQUOTE__54297,m_54299,top_level,known_externs);
}

var G__54304 = cljs.core.next(ks);
ks = G__54304;
continue;
} else {
return null;
}
break;
}
}));

(cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4);

