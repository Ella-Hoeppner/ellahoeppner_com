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
var map__28744 = s;
var map__28744__$1 = (((((!((map__28744 == null))))?(((((map__28744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28744.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28744):map__28744);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28744__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28744__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__28752 = info;
var map__28753 = G__28752;
var map__28753__$1 = (((((!((map__28753 == null))))?(((((map__28753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28753.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28753):map__28753);
var shadow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28753__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__28752__$1 = G__28752;
while(true){
var d__$2 = d__$1;
var map__28762 = G__28752__$1;
var map__28762__$1 = (((((!((map__28762 == null))))?(((((map__28762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28762.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28762):map__28762);
var shadow__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28762__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__29798 = (d__$2 + (1));
var G__29799 = shadow__$1;
d__$1 = G__29798;
G__28752__$1 = G__29799;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__28766){
var map__28767 = p__28766;
var map__28767__$1 = (((((!((map__28767 == null))))?(((((map__28767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28767.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28767):map__28767);
var name_var = map__28767__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28767__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28767__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__28770 = info;
var map__28770__$1 = (((((!((map__28770 == null))))?(((((map__28770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28770.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28770):map__28770);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28770__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28770__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("_$_",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__28773 = [clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),".","$"),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('');
return (cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__28773) : cljs.compiler.munge.call(null,G__28773));
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
var G__28781 = arguments.length;
switch (G__28781) {
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
var ms = (function (){var fexpr__28784 = new cljs.core.Var(function(){return cljs.core.munge_str;},new cljs.core.Symbol("cljs.core","munge-str","cljs.core/munge-str",-301346665,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"munge-str","munge-str",-2042069652,null),"cljs/core.cljs",25,1,11501,11501,new cljs.core.Symbol(null,"string","string",-349010059,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),null,(cljs.core.truth_(cljs.core.munge_str)?cljs.core.munge_str.cljs$lang$test:null)]));
return (fexpr__28784.cljs$core$IFn$_invoke$arity$1 ? fexpr__28784.cljs$core$IFn$_invoke$arity$1(ss__$3) : fexpr__28784.call(null,ss__$3));
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
var G__28786 = cp;
switch (G__28786) {
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
var seq__28789_29825 = cljs.core.seq(s);
var chunk__28790_29826 = null;
var count__28791_29827 = (0);
var i__28792_29828 = (0);
while(true){
if((i__28792_29828 < count__28791_29827)){
var c_29829 = chunk__28790_29826.cljs$core$IIndexed$_nth$arity$2(null,i__28792_29828);
sb.append(cljs.compiler.escape_char(c_29829));


var G__29830 = seq__28789_29825;
var G__29831 = chunk__28790_29826;
var G__29832 = count__28791_29827;
var G__29833 = (i__28792_29828 + (1));
seq__28789_29825 = G__29830;
chunk__28790_29826 = G__29831;
count__28791_29827 = G__29832;
i__28792_29828 = G__29833;
continue;
} else {
var temp__5753__auto___29834 = cljs.core.seq(seq__28789_29825);
if(temp__5753__auto___29834){
var seq__28789_29835__$1 = temp__5753__auto___29834;
if(cljs.core.chunked_seq_QMARK_(seq__28789_29835__$1)){
var c__4556__auto___29836 = cljs.core.chunk_first(seq__28789_29835__$1);
var G__29837 = cljs.core.chunk_rest(seq__28789_29835__$1);
var G__29838 = c__4556__auto___29836;
var G__29839 = cljs.core.count(c__4556__auto___29836);
var G__29840 = (0);
seq__28789_29825 = G__29837;
chunk__28790_29826 = G__29838;
count__28791_29827 = G__29839;
i__28792_29828 = G__29840;
continue;
} else {
var c_29842 = cljs.core.first(seq__28789_29835__$1);
sb.append(cljs.compiler.escape_char(c_29842));


var G__29843 = cljs.core.next(seq__28789_29835__$1);
var G__29844 = null;
var G__29845 = (0);
var G__29846 = (0);
seq__28789_29825 = G__29843;
chunk__28790_29826 = G__29844;
count__28791_29827 = G__29845;
i__28792_29828 = G__29846;
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
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__28800 = cljs.core.get_global_hierarchy;
return (fexpr__28800.cljs$core$IFn$_invoke$arity$0 ? fexpr__28800.cljs$core$IFn$_invoke$arity$0() : fexpr__28800.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
cljs.compiler.emit = (function cljs$compiler$emit(ast){
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__28809_29857 = ast;
var map__28809_29858__$1 = (((((!((map__28809_29857 == null))))?(((((map__28809_29857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28809_29857.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28809_29857):map__28809_29857);
var env_29859 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28809_29858__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_29859))){
var map__28813_29861 = env_29859;
var map__28813_29862__$1 = (((((!((map__28813_29861 == null))))?(((((map__28813_29861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28813_29861.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28813_29861):map__28813_29861);
var line_29863 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28813_29862__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_29864 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28813_29862__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (m){
var minfo = (function (){var G__28815 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_((function (){var G__28817 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast);
var fexpr__28816 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__28816.cljs$core$IFn$_invoke$arity$1 ? fexpr__28816.cljs$core$IFn$_invoke$arity$1(G__28817) : fexpr__28816.call(null,G__28817));
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28815,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__28815;
}
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_29863 - (1))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (line__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_29864)?(column_29864 - (1)):(0))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (column__$1){
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
var G__28829 = arguments.length;
switch (G__28829) {
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
var len__4736__auto___29869 = arguments.length;
var i__4737__auto___29870 = (0);
while(true){
if((i__4737__auto___29870 < len__4736__auto___29869)){
args_arr__4757__auto__.push((arguments[i__4737__auto___29870]));

var G__29871 = (i__4737__auto___29870 + (1));
i__4737__auto___29870 = G__29871;
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
var s_29872 = (function (){var G__28831 = a;
if((!(typeof a === 'string'))){
return G__28831.toString();
} else {
return G__28831;
}
})();
var temp__5757__auto___29876 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5757__auto___29876 == null)){
} else {
var sm_data_29877 = temp__5757__auto___29876;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sm_data_29877,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(function (p1__28818_SHARP_){
return (p1__28818_SHARP_ + s_29872.length);
}));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_29872], 0));

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

var seq__28839 = cljs.core.seq(xs);
var chunk__28840 = null;
var count__28841 = (0);
var i__28842 = (0);
while(true){
if((i__28842 < count__28841)){
var x = chunk__28840.cljs$core$IIndexed$_nth$arity$2(null,i__28842);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__29878 = seq__28839;
var G__29879 = chunk__28840;
var G__29880 = count__28841;
var G__29881 = (i__28842 + (1));
seq__28839 = G__29878;
chunk__28840 = G__29879;
count__28841 = G__29880;
i__28842 = G__29881;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__28839);
if(temp__5753__auto__){
var seq__28839__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28839__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28839__$1);
var G__29882 = cljs.core.chunk_rest(seq__28839__$1);
var G__29883 = c__4556__auto__;
var G__29884 = cljs.core.count(c__4556__auto__);
var G__29885 = (0);
seq__28839 = G__29882;
chunk__28840 = G__29883;
count__28841 = G__29884;
i__28842 = G__29885;
continue;
} else {
var x = cljs.core.first(seq__28839__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__29886 = cljs.core.next(seq__28839__$1);
var G__29887 = null;
var G__29888 = (0);
var G__29889 = (0);
seq__28839 = G__29886;
chunk__28840 = G__29887;
count__28841 = G__29888;
i__28842 = G__29889;
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
(cljs.compiler.emits.cljs$lang$applyTo = (function (seq28823){
var G__28824 = cljs.core.first(seq28823);
var seq28823__$1 = cljs.core.next(seq28823);
var G__28825 = cljs.core.first(seq28823__$1);
var seq28823__$2 = cljs.core.next(seq28823__$1);
var G__28826 = cljs.core.first(seq28823__$2);
var seq28823__$3 = cljs.core.next(seq28823__$2);
var G__28827 = cljs.core.first(seq28823__$3);
var seq28823__$4 = cljs.core.next(seq28823__$3);
var G__28828 = cljs.core.first(seq28823__$4);
var seq28823__$5 = cljs.core.next(seq28823__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28824,G__28825,G__28826,G__28827,G__28828,seq28823__$5);
}));

(cljs.compiler.emits.cljs$lang$maxFixedArity = (5));

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.cljs$core$IFn$_invoke$arity$0();

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (p__28847){
var map__28848 = p__28847;
var map__28848__$1 = (((((!((map__28848 == null))))?(((((map__28848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28848.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28848):map__28848);
var m = map__28848__$1;
var gen_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28848__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0)], 0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__28875 = arguments.length;
switch (G__28875) {
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
var len__4736__auto___29902 = arguments.length;
var i__4737__auto___29903 = (0);
while(true){
if((i__4737__auto___29903 < len__4736__auto___29902)){
args_arr__4757__auto__.push((arguments[i__4737__auto___29903]));

var G__29904 = (i__4737__auto___29903 + (1));
i__4737__auto___29903 = G__29904;
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

var seq__28878_29907 = cljs.core.seq(xs);
var chunk__28879_29908 = null;
var count__28880_29909 = (0);
var i__28881_29910 = (0);
while(true){
if((i__28881_29910 < count__28880_29909)){
var x_29911 = chunk__28879_29908.cljs$core$IIndexed$_nth$arity$2(null,i__28881_29910);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_29911);


var G__29912 = seq__28878_29907;
var G__29913 = chunk__28879_29908;
var G__29914 = count__28880_29909;
var G__29915 = (i__28881_29910 + (1));
seq__28878_29907 = G__29912;
chunk__28879_29908 = G__29913;
count__28880_29909 = G__29914;
i__28881_29910 = G__29915;
continue;
} else {
var temp__5753__auto___29917 = cljs.core.seq(seq__28878_29907);
if(temp__5753__auto___29917){
var seq__28878_29918__$1 = temp__5753__auto___29917;
if(cljs.core.chunked_seq_QMARK_(seq__28878_29918__$1)){
var c__4556__auto___29919 = cljs.core.chunk_first(seq__28878_29918__$1);
var G__29920 = cljs.core.chunk_rest(seq__28878_29918__$1);
var G__29921 = c__4556__auto___29919;
var G__29922 = cljs.core.count(c__4556__auto___29919);
var G__29923 = (0);
seq__28878_29907 = G__29920;
chunk__28879_29908 = G__29921;
count__28880_29909 = G__29922;
i__28881_29910 = G__29923;
continue;
} else {
var x_29924 = cljs.core.first(seq__28878_29918__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_29924);


var G__29928 = cljs.core.next(seq__28878_29918__$1);
var G__29929 = null;
var G__29930 = (0);
var G__29931 = (0);
seq__28878_29907 = G__29928;
chunk__28879_29908 = G__29929;
count__28880_29909 = G__29930;
i__28881_29910 = G__29931;
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
(cljs.compiler.emitln.cljs$lang$applyTo = (function (seq28869){
var G__28870 = cljs.core.first(seq28869);
var seq28869__$1 = cljs.core.next(seq28869);
var G__28871 = cljs.core.first(seq28869__$1);
var seq28869__$2 = cljs.core.next(seq28869__$1);
var G__28872 = cljs.core.first(seq28869__$2);
var seq28869__$3 = cljs.core.next(seq28869__$2);
var G__28873 = cljs.core.first(seq28869__$3);
var seq28869__$4 = cljs.core.next(seq28869__$3);
var G__28874 = cljs.core.first(seq28869__$4);
var seq28869__$5 = cljs.core.next(seq28869__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28870,G__28871,G__28872,G__28873,G__28874,seq28869__$5);
}));

(cljs.compiler.emitln.cljs$lang$maxFixedArity = (5));

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__28885_29932 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28886_29933 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28887_29934 = true;
var _STAR_print_fn_STAR__temp_val__28888_29935 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28887_29934);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28888_29935);

try{cljs.compiler.emit(expr);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28886_29933);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28885_29932);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
});
cljs.compiler.emit_constant_STAR_ = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__28893 = cljs.core.get_global_hierarchy;
return (fexpr__28893.cljs$core$IFn$_invoke$arity$0 ? fexpr__28893.cljs$core$IFn$_invoke$arity$0() : fexpr__28893.call(null));
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
var vec__28895 = cljs.analyzer.record_ns_PLUS_name(x);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28895,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28895,(1),null);
var G__28898 = ns;
var G__28899 = name;
var G__28900 = (function (){
var G__28901 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,x);
return (cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__28901) : cljs.compiler.emit_constant.call(null,G__28901));
});
return (cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3 ? cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3(G__28898,G__28899,G__28900) : cljs.compiler.emit_record_value.call(null,G__28898,G__28899,G__28900));
} else {
if(cljs.analyzer.cljs_map_QMARK_(x)){
var G__28903 = cljs.core.keys(x);
var G__28904 = cljs.core.vals(x);
var G__28905 = cljs.compiler.emit_constants_comma_sep;
var G__28906 = cljs.compiler.all_distinct_QMARK_;
return (cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4 ? cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4(G__28903,G__28904,G__28905,G__28906) : cljs.compiler.emit_map.call(null,G__28903,G__28904,G__28905,G__28906));
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
var G__28910 = (function (){
return cljs.compiler.emit_constant_no_meta(v);
});
var G__28911 = (function (){
return cljs.compiler.emit_constant_no_meta(m);
});
return (cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2(G__28910,G__28911) : cljs.compiler.emit_with_meta.call(null,G__28910,G__28911));
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
var vec__28918 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28918,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28918,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28918,(2),null);
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
var G__28933 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__28933) : x.call(null,G__28933));
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
var G__28935 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__28935) : x.call(null,G__28935));
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
var G__28937 = items;
var G__28938 = (function (p1__28936_SHARP_){
return (function (){
return cljs.compiler.emit_constant(p1__28936_SHARP_);
});
});
return (cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2(G__28937,G__28938) : cljs.compiler.emit_js_object.call(null,G__28937,G__28938));
} else {
return (cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2(items,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_js_array.call(null,items,cljs.compiler.emit_constants_comma_sep));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__28943){
var map__28945 = p__28943;
var map__28945__$1 = (((((!((map__28945 == null))))?(((((map__28945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28945.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28945):map__28945);
var ast = map__28945__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28945__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28945__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28945__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5751__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5751__auto__)){
var const_expr = temp__5751__auto__;
return cljs.compiler.emit(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__28951 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__28951__$1 = (((((!((map__28951 == null))))?(((((map__28951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28951.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28951):map__28951);
var cenv = map__28951__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28951__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__28954 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4115__auto__ = (function (){var G__28958 = new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options);
return (cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1(G__28958) : cljs.compiler.es5_GT__EQ_.call(null,G__28958));
})();
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.namespace(var_name) == null)));
} else {
return and__4115__auto__;
}
})())){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(G__28954,cljs.analyzer.es5_allowed);
} else {
return G__28954;
}
})();
var js_module = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4126__auto__ = cljs.core.namespace(var_name);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.name(var_name);
}
})()], null));
var info__$2 = (function (){var G__28959 = info__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(G__28959,reserved);
} else {
return G__28959;
}
})();
var env__28686__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28686__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var G__28960_29971 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__28960_29972__$1 = (((G__28960_29971 instanceof cljs.core.Keyword))?G__28960_29971.fqn:null);
switch (G__28960_29972__$1) {
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

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28686__auto__))){
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__28968){
var map__28969 = p__28968;
var map__28969__$1 = (((((!((map__28969 == null))))?(((((map__28969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28969.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28969):map__28969);
var arg = map__28969__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28969__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28969__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28969__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28969__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));


var map__28976 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__28976__$1 = (((((!((map__28976 == null))))?(((((map__28976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28976.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28976):map__28976);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28976__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__28686__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28686__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("new cljs.core.Var(function(){return ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),";},",sym,",",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28686__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.with_meta(",expr,",",meta,")");
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__28985){
var map__28986 = p__28985;
var map__28986__$1 = (((((!((map__28986 == null))))?(((((map__28986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28986.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28986):map__28986);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28986__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28986__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28986__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__28686__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28686__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_with_meta(expr,meta);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28686__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_((function (p1__28988_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__28988_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),keys__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys__$1)),cljs.core.count(keys__$1))));
});
cljs.compiler.emit_map = (function cljs$compiler$emit_map(keys,vals,comma_sep,distinct_keys_QMARK_){
if((cljs.core.count(keys) === (0))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count(keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_((distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1(keys) : distinct_keys_QMARK_.call(null,keys)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentArrayMap(null, ",cljs.core.count(keys),", [",(function (){var G__29001 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__29001) : comma_sep.call(null,G__29001));
})(),"], null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentArrayMap.createAsIfByAssoc([",(function (){var G__29006 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__29006) : comma_sep.call(null,G__29006));
})(),"])");
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.PersistentHashMap.fromArrays([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(keys) : comma_sep.call(null,keys)),"],[",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(vals) : comma_sep.call(null,vals)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__29007){
var map__29008 = p__29007;
var map__29008__$1 = (((((!((map__29008 == null))))?(((((map__29008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29008.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29008):map__29008);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29008__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29008__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29008__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__28686__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28686__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_map(keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28686__auto__))){
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__29014){
var map__29015 = p__29014;
var map__29015__$1 = (((((!((map__29015 == null))))?(((((map__29015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29015.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29015):map__29015);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29015__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29015__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__28686__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28686__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_vector(items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28686__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_((function (p1__29021_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__29021_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),items__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,items__$1)),cljs.core.count(items__$1))));
});
cljs.compiler.emit_set = (function cljs$compiler$emit_set(items,comma_sep,distinct_constants_QMARK_){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_((distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1(items) : distinct_constants_QMARK_.call(null,items)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count(items),", [",(function (){var G__29022 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(items,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("null"));
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__29022) : comma_sep.call(null,G__29022));
})(),"], null), null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentHashSet.createAsIfByAssoc([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set","set",304602554),(function (p__29024){
var map__29025 = p__29024;
var map__29025__$1 = (((((!((map__29025 == null))))?(((((map__29025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29025.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29025):map__29025);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29025__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29025__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__28686__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28686__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_set(items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28686__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("({");

var temp__5753__auto___30013 = cljs.core.seq(items);
if(temp__5753__auto___30013){
var items_30014__$1 = temp__5753__auto___30013;
var vec__29031_30015 = items_30014__$1;
var seq__29032_30016 = cljs.core.seq(vec__29031_30015);
var first__29033_30017 = cljs.core.first(seq__29032_30016);
var seq__29032_30018__$1 = cljs.core.next(seq__29032_30016);
var vec__29034_30019 = first__29033_30017;
var k_30020 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29034_30019,(0),null);
var v_30021 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29034_30019,(1),null);
var r_30022 = seq__29032_30018__$1;
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4("\"",cljs.core.name(k_30020),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_30021) : emit_js_object_val.call(null,v_30021)));

var seq__29038_30023 = cljs.core.seq(r_30022);
var chunk__29039_30024 = null;
var count__29040_30025 = (0);
var i__29041_30026 = (0);
while(true){
if((i__29041_30026 < count__29040_30025)){
var vec__29049_30027 = chunk__29039_30024.cljs$core$IIndexed$_nth$arity$2(null,i__29041_30026);
var k_30028__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29049_30027,(0),null);
var v_30029__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29049_30027,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_30028__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_30029__$1) : emit_js_object_val.call(null,v_30029__$1)));


var G__30030 = seq__29038_30023;
var G__30031 = chunk__29039_30024;
var G__30032 = count__29040_30025;
var G__30033 = (i__29041_30026 + (1));
seq__29038_30023 = G__30030;
chunk__29039_30024 = G__30031;
count__29040_30025 = G__30032;
i__29041_30026 = G__30033;
continue;
} else {
var temp__5753__auto___30034__$1 = cljs.core.seq(seq__29038_30023);
if(temp__5753__auto___30034__$1){
var seq__29038_30035__$1 = temp__5753__auto___30034__$1;
if(cljs.core.chunked_seq_QMARK_(seq__29038_30035__$1)){
var c__4556__auto___30036 = cljs.core.chunk_first(seq__29038_30035__$1);
var G__30037 = cljs.core.chunk_rest(seq__29038_30035__$1);
var G__30038 = c__4556__auto___30036;
var G__30039 = cljs.core.count(c__4556__auto___30036);
var G__30040 = (0);
seq__29038_30023 = G__30037;
chunk__29039_30024 = G__30038;
count__29040_30025 = G__30039;
i__29041_30026 = G__30040;
continue;
} else {
var vec__29056_30042 = cljs.core.first(seq__29038_30035__$1);
var k_30043__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29056_30042,(0),null);
var v_30044__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29056_30042,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_30043__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_30044__$1) : emit_js_object_val.call(null,v_30044__$1)));


var G__30046 = cljs.core.next(seq__29038_30035__$1);
var G__30047 = null;
var G__30048 = (0);
var G__30049 = (0);
seq__29038_30023 = G__30046;
chunk__29039_30024 = G__30047;
count__29040_30025 = G__30048;
i__29041_30026 = G__30049;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__29060){
var map__29061 = p__29060;
var map__29061__$1 = (((((!((map__29061 == null))))?(((((map__29061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29061.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29061):map__29061);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29061__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29061__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29061__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__28686__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28686__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_js_object(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28686__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__29066){
var map__29067 = p__29066;
var map__29067__$1 = (((((!((map__29067 == null))))?(((((map__29067.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29067.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29067):map__29067);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29067__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29067__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__28686__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28686__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_js_array(items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28686__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(ns,".map__GT_",name,"(",items,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__29072){
var map__29073 = p__29072;
var map__29073__$1 = (((((!((map__29073 == null))))?(((((map__29073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29073.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29073):map__29073);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29073__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__29075){
var map__29076 = p__29075;
var map__29076__$1 = (((((!((map__29076 == null))))?(((((map__29076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29076.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29076):map__29076);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29076__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29076__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__28686__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28686__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_constant(form);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28686__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__29082 = cljs.analyzer.unwrap_quote(expr);
var map__29082__$1 = (((((!((map__29082 == null))))?(((((map__29082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29082.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29082):map__29082);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29082__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29082__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29082__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var map__29088 = cljs.analyzer.unwrap_quote(expr);
var map__29088__$1 = (((((!((map__29088 == null))))?(((((map__29088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29088.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29088):map__29088);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29088__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29088__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29088__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var or__4126__auto__ = (function (){var fexpr__29096 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null);
return (fexpr__29096.cljs$core$IFn$_invoke$arity$1 ? fexpr__29096.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__29096.call(null,tag));
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_(e);
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__29097){
var map__29098 = p__29097;
var map__29098__$1 = (((((!((map__29098 == null))))?(((((map__29098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29098):map__29098);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29098__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29098__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29098__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29098__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29098__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__29100){
var map__29101 = p__29100;
var map__29101__$1 = (((((!((map__29101 == null))))?(((((map__29101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29101):map__29101);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29101__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29101__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29101__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29101__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__29103_30069 = cljs.core.seq(nodes);
var chunk__29104_30070 = null;
var count__29105_30071 = (0);
var i__29106_30072 = (0);
while(true){
if((i__29106_30072 < count__29105_30071)){
var map__29139_30073 = chunk__29104_30070.cljs$core$IIndexed$_nth$arity$2(null,i__29106_30072);
var map__29139_30074__$1 = (((((!((map__29139_30073 == null))))?(((((map__29139_30073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29139_30073.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29139_30073):map__29139_30073);
var ts_30075 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29139_30074__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__29140_30076 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29139_30074__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__29140_30077__$1 = (((((!((map__29140_30076 == null))))?(((((map__29140_30076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29140_30076.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29140_30076):map__29140_30076);
var then_30078 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29140_30077__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__29143_30084 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_30075));
var chunk__29144_30085 = null;
var count__29145_30086 = (0);
var i__29146_30087 = (0);
while(true){
if((i__29146_30087 < count__29145_30086)){
var test_30089 = chunk__29144_30085.cljs$core$IIndexed$_nth$arity$2(null,i__29146_30087);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_30089,":");


var G__30090 = seq__29143_30084;
var G__30091 = chunk__29144_30085;
var G__30092 = count__29145_30086;
var G__30093 = (i__29146_30087 + (1));
seq__29143_30084 = G__30090;
chunk__29144_30085 = G__30091;
count__29145_30086 = G__30092;
i__29146_30087 = G__30093;
continue;
} else {
var temp__5753__auto___30094 = cljs.core.seq(seq__29143_30084);
if(temp__5753__auto___30094){
var seq__29143_30095__$1 = temp__5753__auto___30094;
if(cljs.core.chunked_seq_QMARK_(seq__29143_30095__$1)){
var c__4556__auto___30100 = cljs.core.chunk_first(seq__29143_30095__$1);
var G__30101 = cljs.core.chunk_rest(seq__29143_30095__$1);
var G__30102 = c__4556__auto___30100;
var G__30103 = cljs.core.count(c__4556__auto___30100);
var G__30104 = (0);
seq__29143_30084 = G__30101;
chunk__29144_30085 = G__30102;
count__29145_30086 = G__30103;
i__29146_30087 = G__30104;
continue;
} else {
var test_30108 = cljs.core.first(seq__29143_30095__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_30108,":");


var G__30109 = cljs.core.next(seq__29143_30095__$1);
var G__30110 = null;
var G__30111 = (0);
var G__30112 = (0);
seq__29143_30084 = G__30109;
chunk__29144_30085 = G__30110;
count__29145_30086 = G__30111;
i__29146_30087 = G__30112;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_30078);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_30078);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__30113 = seq__29103_30069;
var G__30114 = chunk__29104_30070;
var G__30115 = count__29105_30071;
var G__30116 = (i__29106_30072 + (1));
seq__29103_30069 = G__30113;
chunk__29104_30070 = G__30114;
count__29105_30071 = G__30115;
i__29106_30072 = G__30116;
continue;
} else {
var temp__5753__auto___30117 = cljs.core.seq(seq__29103_30069);
if(temp__5753__auto___30117){
var seq__29103_30119__$1 = temp__5753__auto___30117;
if(cljs.core.chunked_seq_QMARK_(seq__29103_30119__$1)){
var c__4556__auto___30120 = cljs.core.chunk_first(seq__29103_30119__$1);
var G__30121 = cljs.core.chunk_rest(seq__29103_30119__$1);
var G__30122 = c__4556__auto___30120;
var G__30123 = cljs.core.count(c__4556__auto___30120);
var G__30124 = (0);
seq__29103_30069 = G__30121;
chunk__29104_30070 = G__30122;
count__29105_30071 = G__30123;
i__29106_30072 = G__30124;
continue;
} else {
var map__29159_30125 = cljs.core.first(seq__29103_30119__$1);
var map__29159_30126__$1 = (((((!((map__29159_30125 == null))))?(((((map__29159_30125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29159_30125.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29159_30125):map__29159_30125);
var ts_30127 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29159_30126__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__29160_30128 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29159_30126__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__29160_30129__$1 = (((((!((map__29160_30128 == null))))?(((((map__29160_30128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29160_30128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29160_30128):map__29160_30128);
var then_30130 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29160_30129__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__29163_30135 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_30127));
var chunk__29164_30136 = null;
var count__29165_30137 = (0);
var i__29166_30138 = (0);
while(true){
if((i__29166_30138 < count__29165_30137)){
var test_30140 = chunk__29164_30136.cljs$core$IIndexed$_nth$arity$2(null,i__29166_30138);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_30140,":");


var G__30141 = seq__29163_30135;
var G__30142 = chunk__29164_30136;
var G__30143 = count__29165_30137;
var G__30144 = (i__29166_30138 + (1));
seq__29163_30135 = G__30141;
chunk__29164_30136 = G__30142;
count__29165_30137 = G__30143;
i__29166_30138 = G__30144;
continue;
} else {
var temp__5753__auto___30145__$1 = cljs.core.seq(seq__29163_30135);
if(temp__5753__auto___30145__$1){
var seq__29163_30146__$1 = temp__5753__auto___30145__$1;
if(cljs.core.chunked_seq_QMARK_(seq__29163_30146__$1)){
var c__4556__auto___30147 = cljs.core.chunk_first(seq__29163_30146__$1);
var G__30149 = cljs.core.chunk_rest(seq__29163_30146__$1);
var G__30150 = c__4556__auto___30147;
var G__30151 = cljs.core.count(c__4556__auto___30147);
var G__30152 = (0);
seq__29163_30135 = G__30149;
chunk__29164_30136 = G__30150;
count__29165_30137 = G__30151;
i__29166_30138 = G__30152;
continue;
} else {
var test_30153 = cljs.core.first(seq__29163_30146__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_30153,":");


var G__30155 = cljs.core.next(seq__29163_30146__$1);
var G__30156 = null;
var G__30157 = (0);
var G__30158 = (0);
seq__29163_30135 = G__30155;
chunk__29164_30136 = G__30156;
count__29165_30137 = G__30157;
i__29166_30138 = G__30158;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_30130);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_30130);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__30160 = cljs.core.next(seq__29103_30119__$1);
var G__30161 = null;
var G__30162 = (0);
var G__30163 = (0);
seq__29103_30069 = G__30160;
chunk__29104_30070 = G__30161;
count__29105_30071 = G__30162;
i__29106_30072 = G__30163;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__29169){
var map__29170 = p__29169;
var map__29170__$1 = (((((!((map__29170 == null))))?(((((map__29170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29170):map__29170);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29170__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29170__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__29179 = env;
var G__29180 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(t,(1));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__29179,G__29180) : cljs.compiler.resolve_type.call(null,G__29179,G__29180));
})())].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__29181 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),idx),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(idx + (1)),cljs.core.count(t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29181,(0),null);
var rstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29181,(1),null);
var ret_t = (cljs.core.truth_(rstr)?(cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,rstr) : cljs.compiler.resolve_type.call(null,env,rstr)):null);
var axstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fstr,(9),(cljs.core.count(fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_(axstr))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__29176_SHARP_){
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,p1__29176_SHARP_) : cljs.compiler.resolve_type.call(null,env,p1__29176_SHARP_));
}),clojure.string.trim),clojure.string.split.cljs$core$IFn$_invoke$arity$2(axstr,/,/)));
var G__29189 = ["function(",clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",args_ts),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__29189,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__29189;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__29196 = env;
var G__29197 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),(cljs.core.count(t) - (1)));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__29196,G__29197) : cljs.compiler.resolve_type.call(null,G__29196,G__29197));
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
return ["{",clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29199_SHARP_){
return cljs.compiler.resolve_type(env,p1__29199_SHARP_);
}),xs)),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find(/@param/,line))){
var vec__29201 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__29202 = cljs.core.seq(vec__29201);
var first__29203 = cljs.core.first(seq__29202);
var seq__29202__$1 = cljs.core.next(seq__29202);
var p = first__29203;
var first__29203__$1 = cljs.core.first(seq__29202__$1);
var seq__29202__$2 = cljs.core.next(seq__29202__$1);
var ts = first__29203__$1;
var first__29203__$2 = cljs.core.first(seq__29202__$2);
var seq__29202__$3 = cljs.core.next(seq__29202__$2);
var n = first__29203__$2;
var xs = seq__29202__$3;
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
var vec__29204 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__29205 = cljs.core.seq(vec__29204);
var first__29206 = cljs.core.first(seq__29205);
var seq__29205__$1 = cljs.core.next(seq__29205);
var p = first__29206;
var first__29206__$1 = cljs.core.first(seq__29205__$1);
var seq__29205__$2 = cljs.core.next(seq__29205__$1);
var ts = first__29206__$1;
var xs = seq__29205__$2;
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
var G__29210 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null));
var fexpr__29209 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null);
return (fexpr__29209.cljs$core$IFn$_invoke$arity$1 ? fexpr__29209.cljs$core$IFn$_invoke$arity$1(G__29210) : fexpr__29209.call(null,G__29210));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__29213 = arguments.length;
switch (G__29213) {
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
var vec__29227 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29211_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())){
return cljs.compiler.munge_param_return(env,p1__29211_SHARP_);
} else {
return p1__29211_SHARP_;
}
}),clojure.string.split_lines(e));
var seq__29228 = cljs.core.seq(vec__29227);
var first__29229 = cljs.core.first(seq__29228);
var seq__29228__$1 = cljs.core.next(seq__29228);
var x = first__29229;
var ys = seq__29228__$1;
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(x,"*/","* /"));

var seq__29231 = cljs.core.seq(ys);
var chunk__29232 = null;
var count__29233 = (0);
var i__29234 = (0);
while(true){
if((i__29234 < count__29233)){
var next_line = chunk__29232.cljs$core$IIndexed$_nth$arity$2(null,i__29234);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__30182 = seq__29231;
var G__30183 = chunk__29232;
var G__30184 = count__29233;
var G__30185 = (i__29234 + (1));
seq__29231 = G__30182;
chunk__29232 = G__30183;
count__29233 = G__30184;
i__29234 = G__30185;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__29231);
if(temp__5753__auto__){
var seq__29231__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29231__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__29231__$1);
var G__30188 = cljs.core.chunk_rest(seq__29231__$1);
var G__30189 = c__4556__auto__;
var G__30190 = cljs.core.count(c__4556__auto__);
var G__30191 = (0);
seq__29231 = G__30188;
chunk__29232 = G__30189;
count__29233 = G__30190;
i__29234 = G__30191;
continue;
} else {
var next_line = cljs.core.first(seq__29231__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__30192 = cljs.core.next(seq__29231__$1);
var G__30193 = null;
var G__30194 = (0);
var G__30195 = (0);
seq__29231 = G__30192;
chunk__29232 = G__30193;
count__29233 = G__30194;
i__29234 = G__30195;
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

var seq__29239_30200 = cljs.core.seq(docs__$2);
var chunk__29240_30201 = null;
var count__29241_30202 = (0);
var i__29242_30203 = (0);
while(true){
if((i__29242_30203 < count__29241_30202)){
var e_30204 = chunk__29240_30201.cljs$core$IIndexed$_nth$arity$2(null,i__29242_30203);
if(cljs.core.truth_(e_30204)){
print_comment_lines(e_30204);
} else {
}


var G__30205 = seq__29239_30200;
var G__30206 = chunk__29240_30201;
var G__30207 = count__29241_30202;
var G__30208 = (i__29242_30203 + (1));
seq__29239_30200 = G__30205;
chunk__29240_30201 = G__30206;
count__29241_30202 = G__30207;
i__29242_30203 = G__30208;
continue;
} else {
var temp__5753__auto___30210 = cljs.core.seq(seq__29239_30200);
if(temp__5753__auto___30210){
var seq__29239_30211__$1 = temp__5753__auto___30210;
if(cljs.core.chunked_seq_QMARK_(seq__29239_30211__$1)){
var c__4556__auto___30212 = cljs.core.chunk_first(seq__29239_30211__$1);
var G__30213 = cljs.core.chunk_rest(seq__29239_30211__$1);
var G__30214 = c__4556__auto___30212;
var G__30215 = cljs.core.count(c__4556__auto___30212);
var G__30216 = (0);
seq__29239_30200 = G__30213;
chunk__29240_30201 = G__30214;
count__29241_30202 = G__30215;
i__29242_30203 = G__30216;
continue;
} else {
var e_30217 = cljs.core.first(seq__29239_30211__$1);
if(cljs.core.truth_(e_30217)){
print_comment_lines(e_30217);
} else {
}


var G__30218 = cljs.core.next(seq__29239_30211__$1);
var G__30219 = null;
var G__30220 = (0);
var G__30221 = (0);
seq__29239_30200 = G__30218;
chunk__29240_30201 = G__30219;
count__29241_30202 = G__30220;
i__29242_30203 = G__30221;
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
var and__4115__auto__ = cljs.core.some((function (p1__29244_SHARP_){
return goog.string.startsWith(p1__29244_SHARP_,"@define");
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__29250){
var map__29252 = p__29250;
var map__29252__$1 = (((((!((map__29252 == null))))?(((((map__29252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29252):map__29252);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29252__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29252__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29252__$1,new cljs.core.Keyword(null,"test","test",577538877));
var goog_define = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29252__$1,new cljs.core.Keyword(null,"goog-define","goog-define",-1048305441));
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29252__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29252__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29252__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29252__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29252__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29252__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__29263){
var map__29264 = p__29263;
var map__29264__$1 = (((((!((map__29264 == null))))?(((((map__29264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29264.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29264):map__29264);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29264__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29264__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29264__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name)),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("(function (",arglist,"){");

var seq__29266_30231 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),params)));
var chunk__29267_30232 = null;
var count__29268_30233 = (0);
var i__29269_30234 = (0);
while(true){
if((i__29269_30234 < count__29268_30233)){
var vec__29276_30239 = chunk__29267_30232.cljs$core$IIndexed$_nth$arity$2(null,i__29269_30234);
var i_30240 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29276_30239,(0),null);
var param_30241 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29276_30239,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_30241);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__30244 = seq__29266_30231;
var G__30245 = chunk__29267_30232;
var G__30246 = count__29268_30233;
var G__30247 = (i__29269_30234 + (1));
seq__29266_30231 = G__30244;
chunk__29267_30232 = G__30245;
count__29268_30233 = G__30246;
i__29269_30234 = G__30247;
continue;
} else {
var temp__5753__auto___30248 = cljs.core.seq(seq__29266_30231);
if(temp__5753__auto___30248){
var seq__29266_30249__$1 = temp__5753__auto___30248;
if(cljs.core.chunked_seq_QMARK_(seq__29266_30249__$1)){
var c__4556__auto___30250 = cljs.core.chunk_first(seq__29266_30249__$1);
var G__30251 = cljs.core.chunk_rest(seq__29266_30249__$1);
var G__30252 = c__4556__auto___30250;
var G__30253 = cljs.core.count(c__4556__auto___30250);
var G__30254 = (0);
seq__29266_30231 = G__30251;
chunk__29267_30232 = G__30252;
count__29268_30233 = G__30253;
i__29269_30234 = G__30254;
continue;
} else {
var vec__29279_30255 = cljs.core.first(seq__29266_30249__$1);
var i_30256 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29279_30255,(0),null);
var param_30257 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29279_30255,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_30257);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__30258 = cljs.core.next(seq__29266_30249__$1);
var G__30259 = null;
var G__30260 = (0);
var G__30261 = (0);
seq__29266_30231 = G__30258;
chunk__29267_30232 = G__30259;
count__29268_30233 = G__30260;
i__29269_30234 = G__30261;
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

var seq__29286_30262 = cljs.core.seq(params);
var chunk__29287_30263 = null;
var count__29288_30264 = (0);
var i__29289_30265 = (0);
while(true){
if((i__29289_30265 < count__29288_30264)){
var param_30266 = chunk__29287_30263.cljs$core$IIndexed$_nth$arity$2(null,i__29289_30265);
cljs.compiler.emit(param_30266);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_30266,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__30267 = seq__29286_30262;
var G__30268 = chunk__29287_30263;
var G__30269 = count__29288_30264;
var G__30270 = (i__29289_30265 + (1));
seq__29286_30262 = G__30267;
chunk__29287_30263 = G__30268;
count__29288_30264 = G__30269;
i__29289_30265 = G__30270;
continue;
} else {
var temp__5753__auto___30271 = cljs.core.seq(seq__29286_30262);
if(temp__5753__auto___30271){
var seq__29286_30272__$1 = temp__5753__auto___30271;
if(cljs.core.chunked_seq_QMARK_(seq__29286_30272__$1)){
var c__4556__auto___30273 = cljs.core.chunk_first(seq__29286_30272__$1);
var G__30274 = cljs.core.chunk_rest(seq__29286_30272__$1);
var G__30275 = c__4556__auto___30273;
var G__30276 = cljs.core.count(c__4556__auto___30273);
var G__30277 = (0);
seq__29286_30262 = G__30274;
chunk__29287_30263 = G__30275;
count__29288_30264 = G__30276;
i__29289_30265 = G__30277;
continue;
} else {
var param_30279 = cljs.core.first(seq__29286_30272__$1);
cljs.compiler.emit(param_30279);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_30279,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__30280 = cljs.core.next(seq__29286_30272__$1);
var G__30281 = null;
var G__30282 = (0);
var G__30283 = (0);
seq__29286_30262 = G__30280;
chunk__29287_30263 = G__30281;
count__29288_30264 = G__30282;
i__29289_30265 = G__30283;
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

var seq__29294_30284 = cljs.core.seq(params);
var chunk__29295_30285 = null;
var count__29296_30286 = (0);
var i__29297_30287 = (0);
while(true){
if((i__29297_30287 < count__29296_30286)){
var param_30288 = chunk__29295_30285.cljs$core$IIndexed$_nth$arity$2(null,i__29297_30287);
cljs.compiler.emit(param_30288);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_30288,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__30289 = seq__29294_30284;
var G__30290 = chunk__29295_30285;
var G__30291 = count__29296_30286;
var G__30292 = (i__29297_30287 + (1));
seq__29294_30284 = G__30289;
chunk__29295_30285 = G__30290;
count__29296_30286 = G__30291;
i__29297_30287 = G__30292;
continue;
} else {
var temp__5753__auto___30293 = cljs.core.seq(seq__29294_30284);
if(temp__5753__auto___30293){
var seq__29294_30294__$1 = temp__5753__auto___30293;
if(cljs.core.chunked_seq_QMARK_(seq__29294_30294__$1)){
var c__4556__auto___30295 = cljs.core.chunk_first(seq__29294_30294__$1);
var G__30297 = cljs.core.chunk_rest(seq__29294_30294__$1);
var G__30298 = c__4556__auto___30295;
var G__30299 = cljs.core.count(c__4556__auto___30295);
var G__30300 = (0);
seq__29294_30284 = G__30297;
chunk__29295_30285 = G__30298;
count__29296_30286 = G__30299;
i__29297_30287 = G__30300;
continue;
} else {
var param_30302 = cljs.core.first(seq__29294_30294__$1);
cljs.compiler.emit(param_30302);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_30302,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__30307 = cljs.core.next(seq__29294_30294__$1);
var G__30308 = null;
var G__30309 = (0);
var G__30310 = (0);
seq__29294_30284 = G__30307;
chunk__29295_30285 = G__30308;
count__29296_30286 = G__30309;
i__29297_30287 = G__30310;
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
var seq__29302 = cljs.core.seq(params);
var chunk__29303 = null;
var count__29304 = (0);
var i__29305 = (0);
while(true){
if((i__29305 < count__29304)){
var param = chunk__29303.cljs$core$IIndexed$_nth$arity$2(null,i__29305);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__30314 = seq__29302;
var G__30315 = chunk__29303;
var G__30316 = count__29304;
var G__30317 = (i__29305 + (1));
seq__29302 = G__30314;
chunk__29303 = G__30315;
count__29304 = G__30316;
i__29305 = G__30317;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__29302);
if(temp__5753__auto__){
var seq__29302__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29302__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__29302__$1);
var G__30318 = cljs.core.chunk_rest(seq__29302__$1);
var G__30319 = c__4556__auto__;
var G__30320 = cljs.core.count(c__4556__auto__);
var G__30321 = (0);
seq__29302 = G__30318;
chunk__29303 = G__30319;
count__29304 = G__30320;
i__29305 = G__30321;
continue;
} else {
var param = cljs.core.first(seq__29302__$1);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__30322 = cljs.core.next(seq__29302__$1);
var G__30323 = null;
var G__30324 = (0);
var G__30325 = (0);
seq__29302 = G__30322;
chunk__29303 = G__30323;
count__29304 = G__30324;
i__29305 = G__30325;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__29316){
var map__29317 = p__29316;
var map__29317__$1 = (((((!((map__29317 == null))))?(((((map__29317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29317.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29317):map__29317);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29317__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29317__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29317__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29317__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29317__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29317__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__28686__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28686__auto__))){
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

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28686__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__29327){
var map__29328 = p__29327;
var map__29328__$1 = (((((!((map__29328 == null))))?(((((map__29328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29328.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29328):map__29328);
var f = map__29328__$1;
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29328__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29328__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29328__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29328__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29328__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29328__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29328__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29328__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__28686__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28686__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var name_30337__$1 = (function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_30338 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_30337__$1);
var delegate_name_30339 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_30338),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() { ");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",delegate_name_30339," = function (");

var seq__29334_30342 = cljs.core.seq(params);
var chunk__29335_30343 = null;
var count__29336_30344 = (0);
var i__29337_30345 = (0);
while(true){
if((i__29337_30345 < count__29336_30344)){
var param_30350 = chunk__29335_30343.cljs$core$IIndexed$_nth$arity$2(null,i__29337_30345);
cljs.compiler.emit(param_30350);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_30350,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__30351 = seq__29334_30342;
var G__30352 = chunk__29335_30343;
var G__30353 = count__29336_30344;
var G__30354 = (i__29337_30345 + (1));
seq__29334_30342 = G__30351;
chunk__29335_30343 = G__30352;
count__29336_30344 = G__30353;
i__29337_30345 = G__30354;
continue;
} else {
var temp__5753__auto___30355 = cljs.core.seq(seq__29334_30342);
if(temp__5753__auto___30355){
var seq__29334_30356__$1 = temp__5753__auto___30355;
if(cljs.core.chunked_seq_QMARK_(seq__29334_30356__$1)){
var c__4556__auto___30357 = cljs.core.chunk_first(seq__29334_30356__$1);
var G__30358 = cljs.core.chunk_rest(seq__29334_30356__$1);
var G__30359 = c__4556__auto___30357;
var G__30360 = cljs.core.count(c__4556__auto___30357);
var G__30361 = (0);
seq__29334_30342 = G__30358;
chunk__29335_30343 = G__30359;
count__29336_30344 = G__30360;
i__29337_30345 = G__30361;
continue;
} else {
var param_30362 = cljs.core.first(seq__29334_30356__$1);
cljs.compiler.emit(param_30362);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_30362,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__30363 = cljs.core.next(seq__29334_30356__$1);
var G__30364 = null;
var G__30365 = (0);
var G__30366 = (0);
seq__29334_30342 = G__30363;
chunk__29335_30343 = G__30364;
count__29336_30344 = G__30365;
i__29337_30345 = G__30366;
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

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",mname_30338," = function (",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",(cljs.core.count(params) - (1)),") {");

var a_30367 = cljs.compiler.emit_arguments_to_array((cljs.core.count(params) - (1)));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("  ",cljs.core.last(params)," = new cljs.core.IndexedSeq(",a_30367,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("} ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name_30339,".call(this,");

var seq__29340_30368 = cljs.core.seq(params);
var chunk__29341_30369 = null;
var count__29342_30370 = (0);
var i__29343_30371 = (0);
while(true){
if((i__29343_30371 < count__29342_30370)){
var param_30372 = chunk__29341_30369.cljs$core$IIndexed$_nth$arity$2(null,i__29343_30371);
cljs.compiler.emit(param_30372);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_30372,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__30373 = seq__29340_30368;
var G__30374 = chunk__29341_30369;
var G__30375 = count__29342_30370;
var G__30376 = (i__29343_30371 + (1));
seq__29340_30368 = G__30373;
chunk__29341_30369 = G__30374;
count__29342_30370 = G__30375;
i__29343_30371 = G__30376;
continue;
} else {
var temp__5753__auto___30377 = cljs.core.seq(seq__29340_30368);
if(temp__5753__auto___30377){
var seq__29340_30378__$1 = temp__5753__auto___30377;
if(cljs.core.chunked_seq_QMARK_(seq__29340_30378__$1)){
var c__4556__auto___30379 = cljs.core.chunk_first(seq__29340_30378__$1);
var G__30380 = cljs.core.chunk_rest(seq__29340_30378__$1);
var G__30381 = c__4556__auto___30379;
var G__30382 = cljs.core.count(c__4556__auto___30379);
var G__30383 = (0);
seq__29340_30368 = G__30380;
chunk__29341_30369 = G__30381;
count__29342_30370 = G__30382;
i__29343_30371 = G__30383;
continue;
} else {
var param_30384 = cljs.core.first(seq__29340_30378__$1);
cljs.compiler.emit(param_30384);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_30384,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__30385 = cljs.core.next(seq__29340_30378__$1);
var G__30386 = null;
var G__30387 = (0);
var G__30388 = (0);
seq__29340_30368 = G__30385;
chunk__29341_30369 = G__30386;
count__29342_30370 = G__30387;
i__29343_30371 = G__30388;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_30338,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(mname_30338,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.Keyword(null,"name","name",1843675177),name_30337__$1));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_30338,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_30339,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_30338,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28686__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__29351){
var map__29352 = p__29351;
var map__29352__$1 = (((((!((map__29352 == null))))?(((((map__29352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29352):map__29352);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29352__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29352__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29352__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29352__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29352__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29352__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var in_loop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29352__$1,new cljs.core.Keyword(null,"in-loop","in-loop",-187298246));
var loop_lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29352__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var recur_params = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__29348_SHARP_){
var and__4115__auto__ = p1__29348_SHARP_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.deref(new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__29348_SHARP_));
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
var name_30413__$1 = (function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_30414 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_30413__$1);
var maxparams_30415 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_30416 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_30414),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
}),methods$));
var ms_30417 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__29349_SHARP_){
return cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__29349_SHARP_)));
}),cljs.core.seq(mmap_30416));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() {");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",mname_30414," = null;");

var seq__29367_30420 = cljs.core.seq(ms_30417);
var chunk__29368_30421 = null;
var count__29369_30422 = (0);
var i__29370_30423 = (0);
while(true){
if((i__29370_30423 < count__29369_30422)){
var vec__29381_30424 = chunk__29368_30421.cljs$core$IIndexed$_nth$arity$2(null,i__29370_30423);
var n_30425 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29381_30424,(0),null);
var meth_30426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29381_30424,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_30425," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_30426))){
cljs.compiler.emit_variadic_fn_method(meth_30426);
} else {
cljs.compiler.emit_fn_method(meth_30426);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__30430 = seq__29367_30420;
var G__30431 = chunk__29368_30421;
var G__30432 = count__29369_30422;
var G__30433 = (i__29370_30423 + (1));
seq__29367_30420 = G__30430;
chunk__29368_30421 = G__30431;
count__29369_30422 = G__30432;
i__29370_30423 = G__30433;
continue;
} else {
var temp__5753__auto___30434 = cljs.core.seq(seq__29367_30420);
if(temp__5753__auto___30434){
var seq__29367_30436__$1 = temp__5753__auto___30434;
if(cljs.core.chunked_seq_QMARK_(seq__29367_30436__$1)){
var c__4556__auto___30437 = cljs.core.chunk_first(seq__29367_30436__$1);
var G__30438 = cljs.core.chunk_rest(seq__29367_30436__$1);
var G__30439 = c__4556__auto___30437;
var G__30440 = cljs.core.count(c__4556__auto___30437);
var G__30441 = (0);
seq__29367_30420 = G__30438;
chunk__29368_30421 = G__30439;
count__29369_30422 = G__30440;
i__29370_30423 = G__30441;
continue;
} else {
var vec__29384_30445 = cljs.core.first(seq__29367_30436__$1);
var n_30446 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29384_30445,(0),null);
var meth_30447 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29384_30445,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_30446," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_30447))){
cljs.compiler.emit_variadic_fn_method(meth_30447);
} else {
cljs.compiler.emit_fn_method(meth_30447);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__30448 = cljs.core.next(seq__29367_30436__$1);
var G__30449 = null;
var G__30450 = (0);
var G__30451 = (0);
seq__29367_30420 = G__30448;
chunk__29368_30421 = G__30449;
count__29369_30422 = G__30450;
i__29370_30423 = G__30451;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_30414," = function(",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(maxparams_30415),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_30415)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(maxparams_30415));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = var_args;");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("switch(arguments.length){");

var seq__29388_30452 = cljs.core.seq(ms_30417);
var chunk__29389_30453 = null;
var count__29390_30454 = (0);
var i__29391_30455 = (0);
while(true){
if((i__29391_30455 < count__29390_30454)){
var vec__29414_30456 = chunk__29389_30453.cljs$core$IIndexed$_nth$arity$2(null,i__29391_30455);
var n_30457 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29414_30456,(0),null);
var meth_30458 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29414_30456,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_30458))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_30459 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_30459," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_30460 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_30459," = new cljs.core.IndexedSeq(",a_30460,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_30457,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_30415)),(((cljs.core.count(maxparams_30415) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_30459,");"], 0));
} else {
var pcnt_30465 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_30458));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_30465,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_30457,".call(this",(((pcnt_30465 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_30465,maxparams_30415)),null,(1),null)),(2),null))),");");
}


var G__30466 = seq__29388_30452;
var G__30467 = chunk__29389_30453;
var G__30468 = count__29390_30454;
var G__30469 = (i__29391_30455 + (1));
seq__29388_30452 = G__30466;
chunk__29389_30453 = G__30467;
count__29390_30454 = G__30468;
i__29391_30455 = G__30469;
continue;
} else {
var temp__5753__auto___30470 = cljs.core.seq(seq__29388_30452);
if(temp__5753__auto___30470){
var seq__29388_30471__$1 = temp__5753__auto___30470;
if(cljs.core.chunked_seq_QMARK_(seq__29388_30471__$1)){
var c__4556__auto___30472 = cljs.core.chunk_first(seq__29388_30471__$1);
var G__30473 = cljs.core.chunk_rest(seq__29388_30471__$1);
var G__30474 = c__4556__auto___30472;
var G__30475 = cljs.core.count(c__4556__auto___30472);
var G__30476 = (0);
seq__29388_30452 = G__30473;
chunk__29389_30453 = G__30474;
count__29390_30454 = G__30475;
i__29391_30455 = G__30476;
continue;
} else {
var vec__29417_30477 = cljs.core.first(seq__29388_30471__$1);
var n_30478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29417_30477,(0),null);
var meth_30479 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29417_30477,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_30479))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_30480 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_30480," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_30481 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_30480," = new cljs.core.IndexedSeq(",a_30481,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_30478,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_30415)),(((cljs.core.count(maxparams_30415) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_30480,");"], 0));
} else {
var pcnt_30482 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_30479));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_30482,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_30478,".call(this",(((pcnt_30482 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_30482,maxparams_30415)),null,(1),null)),(2),null))),");");
}


var G__30486 = cljs.core.next(seq__29388_30471__$1);
var G__30487 = null;
var G__30488 = (0);
var G__30489 = (0);
seq__29388_30452 = G__30486;
chunk__29389_30453 = G__30487;
count__29390_30454 = G__30488;
i__29391_30455 = G__30489;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

var arg_count_js_30490 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val(cljs.core.first(ms_30417)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("throw(new Error('Invalid arity: ' + ",arg_count_js_30490,"));");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_30414,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_30414,".cljs$lang$applyTo = ",cljs.core.some((function (p1__29350_SHARP_){
var vec__29421 = p1__29350_SHARP_;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29421,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29421,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
}),ms_30417),".cljs$lang$applyTo;");
} else {
}

var seq__29428_30497 = cljs.core.seq(ms_30417);
var chunk__29429_30498 = null;
var count__29430_30499 = (0);
var i__29431_30500 = (0);
while(true){
if((i__29431_30500 < count__29430_30499)){
var vec__29462_30501 = chunk__29429_30498.cljs$core$IIndexed$_nth$arity$2(null,i__29431_30500);
var n_30502 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29462_30501,(0),null);
var meth_30503 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29462_30501,(1),null);
var c_30504 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_30503));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_30503))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_30414,".cljs$core$IFn$_invoke$arity$variadic = ",n_30502,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_30414,".cljs$core$IFn$_invoke$arity$",c_30504," = ",n_30502,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__30505 = seq__29428_30497;
var G__30506 = chunk__29429_30498;
var G__30507 = count__29430_30499;
var G__30508 = (i__29431_30500 + (1));
seq__29428_30497 = G__30505;
chunk__29429_30498 = G__30506;
count__29430_30499 = G__30507;
i__29431_30500 = G__30508;
continue;
} else {
var temp__5753__auto___30509 = cljs.core.seq(seq__29428_30497);
if(temp__5753__auto___30509){
var seq__29428_30510__$1 = temp__5753__auto___30509;
if(cljs.core.chunked_seq_QMARK_(seq__29428_30510__$1)){
var c__4556__auto___30511 = cljs.core.chunk_first(seq__29428_30510__$1);
var G__30512 = cljs.core.chunk_rest(seq__29428_30510__$1);
var G__30513 = c__4556__auto___30511;
var G__30514 = cljs.core.count(c__4556__auto___30511);
var G__30515 = (0);
seq__29428_30497 = G__30512;
chunk__29429_30498 = G__30513;
count__29430_30499 = G__30514;
i__29431_30500 = G__30515;
continue;
} else {
var vec__29479_30516 = cljs.core.first(seq__29428_30510__$1);
var n_30517 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29479_30516,(0),null);
var meth_30518 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29479_30516,(1),null);
var c_30519 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_30518));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_30518))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_30414,".cljs$core$IFn$_invoke$arity$variadic = ",n_30517,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_30414,".cljs$core$IFn$_invoke$arity$",c_30519," = ",n_30517,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__30522 = cljs.core.next(seq__29428_30510__$1);
var G__30523 = null;
var G__30524 = (0);
var G__30525 = (0);
seq__29428_30497 = G__30522;
chunk__29429_30498 = G__30523;
count__29430_30499 = G__30524;
i__29431_30500 = G__30525;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_30414,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");
}

if(loop_locals){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(";})(",cljs.compiler.comma_sep(loop_locals),"))");
} else {
return null;
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"do","do",46310725),(function (p__29485){
var map__29486 = p__29485;
var map__29486__$1 = (((((!((map__29486 == null))))?(((((map__29486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29486.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29486):map__29486);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29486__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29486__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29486__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq(statements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__29489_30530 = cljs.core.seq(statements);
var chunk__29490_30531 = null;
var count__29491_30532 = (0);
var i__29492_30533 = (0);
while(true){
if((i__29492_30533 < count__29491_30532)){
var s_30540 = chunk__29490_30531.cljs$core$IIndexed$_nth$arity$2(null,i__29492_30533);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_30540);


var G__30541 = seq__29489_30530;
var G__30542 = chunk__29490_30531;
var G__30543 = count__29491_30532;
var G__30544 = (i__29492_30533 + (1));
seq__29489_30530 = G__30541;
chunk__29490_30531 = G__30542;
count__29491_30532 = G__30543;
i__29492_30533 = G__30544;
continue;
} else {
var temp__5753__auto___30545 = cljs.core.seq(seq__29489_30530);
if(temp__5753__auto___30545){
var seq__29489_30546__$1 = temp__5753__auto___30545;
if(cljs.core.chunked_seq_QMARK_(seq__29489_30546__$1)){
var c__4556__auto___30547 = cljs.core.chunk_first(seq__29489_30546__$1);
var G__30548 = cljs.core.chunk_rest(seq__29489_30546__$1);
var G__30549 = c__4556__auto___30547;
var G__30550 = cljs.core.count(c__4556__auto___30547);
var G__30551 = (0);
seq__29489_30530 = G__30548;
chunk__29490_30531 = G__30549;
count__29491_30532 = G__30550;
i__29492_30533 = G__30551;
continue;
} else {
var s_30553 = cljs.core.first(seq__29489_30546__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_30553);


var G__30554 = cljs.core.next(seq__29489_30546__$1);
var G__30555 = null;
var G__30556 = (0);
var G__30557 = (0);
seq__29489_30530 = G__30554;
chunk__29490_30531 = G__30555;
count__29491_30532 = G__30556;
i__29492_30533 = G__30557;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__29495){
var map__29496 = p__29495;
var map__29496__$1 = (((((!((map__29496 == null))))?(((((map__29496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29496):map__29496);
var try$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29496__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29496__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29496__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29496__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29496__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__29510,is_loop){
var map__29511 = p__29510;
var map__29511__$1 = (((((!((map__29511 == null))))?(((((map__29511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29511.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29511):map__29511);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29511__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29511__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29511__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__29515_30567 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__29516_30568 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope(binding),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
}),bindings):null));
(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__29516_30568);

try{var seq__29534_30570 = cljs.core.seq(bindings);
var chunk__29535_30571 = null;
var count__29536_30572 = (0);
var i__29537_30573 = (0);
while(true){
if((i__29537_30573 < count__29536_30572)){
var map__29544_30574 = chunk__29535_30571.cljs$core$IIndexed$_nth$arity$2(null,i__29537_30573);
var map__29544_30575__$1 = (((((!((map__29544_30574 == null))))?(((((map__29544_30574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29544_30574.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29544_30574):map__29544_30574);
var binding_30576 = map__29544_30575__$1;
var init_30577 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29544_30575__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_30576);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_30577,";");


var G__30579 = seq__29534_30570;
var G__30580 = chunk__29535_30571;
var G__30581 = count__29536_30572;
var G__30582 = (i__29537_30573 + (1));
seq__29534_30570 = G__30579;
chunk__29535_30571 = G__30580;
count__29536_30572 = G__30581;
i__29537_30573 = G__30582;
continue;
} else {
var temp__5753__auto___30587 = cljs.core.seq(seq__29534_30570);
if(temp__5753__auto___30587){
var seq__29534_30588__$1 = temp__5753__auto___30587;
if(cljs.core.chunked_seq_QMARK_(seq__29534_30588__$1)){
var c__4556__auto___30589 = cljs.core.chunk_first(seq__29534_30588__$1);
var G__30590 = cljs.core.chunk_rest(seq__29534_30588__$1);
var G__30591 = c__4556__auto___30589;
var G__30592 = cljs.core.count(c__4556__auto___30589);
var G__30593 = (0);
seq__29534_30570 = G__30590;
chunk__29535_30571 = G__30591;
count__29536_30572 = G__30592;
i__29537_30573 = G__30593;
continue;
} else {
var map__29546_30596 = cljs.core.first(seq__29534_30588__$1);
var map__29546_30597__$1 = (((((!((map__29546_30596 == null))))?(((((map__29546_30596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29546_30596.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29546_30596):map__29546_30596);
var binding_30598 = map__29546_30597__$1;
var init_30599 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29546_30597__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_30598);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_30599,";");


var G__30604 = cljs.core.next(seq__29534_30588__$1);
var G__30605 = null;
var G__30606 = (0);
var G__30607 = (0);
seq__29534_30570 = G__30604;
chunk__29535_30571 = G__30605;
count__29536_30572 = G__30606;
i__29537_30573 = G__30607;
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
}finally {(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__29515_30567);
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__29560){
var map__29562 = p__29560;
var map__29562__$1 = (((((!((map__29562 == null))))?(((((map__29562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29562.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29562):map__29562);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29562__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29562__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29562__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4613__auto___30612 = cljs.core.count(exprs);
var i_30613 = (0);
while(true){
if((i_30613 < n__4613__auto___30612)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_30613) : temps.call(null,i_30613))," = ",(exprs.cljs$core$IFn$_invoke$arity$1 ? exprs.cljs$core$IFn$_invoke$arity$1(i_30613) : exprs.call(null,i_30613)),";");

var G__30614 = (i_30613 + (1));
i_30613 = G__30614;
continue;
} else {
}
break;
}

var n__4613__auto___30615 = cljs.core.count(exprs);
var i_30619 = (0);
while(true){
if((i_30619 < n__4613__auto___30615)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(i_30619) : params.call(null,i_30619)))," = ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_30619) : temps.call(null,i_30619)),";");

var G__30620 = (i_30619 + (1));
i_30619 = G__30620;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("continue;");
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__29576){
var map__29577 = p__29576;
var map__29577__$1 = (((((!((map__29577 == null))))?(((((map__29577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29577.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29577):map__29577);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29577__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29577__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29577__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__29579_30626 = cljs.core.seq(bindings);
var chunk__29580_30627 = null;
var count__29581_30628 = (0);
var i__29582_30629 = (0);
while(true){
if((i__29582_30629 < count__29581_30628)){
var map__29589_30631 = chunk__29580_30627.cljs$core$IIndexed$_nth$arity$2(null,i__29582_30629);
var map__29589_30632__$1 = (((((!((map__29589_30631 == null))))?(((((map__29589_30631.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29589_30631.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29589_30631):map__29589_30631);
var binding_30633 = map__29589_30632__$1;
var init_30634 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29589_30632__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_30633)," = ",init_30634,";");


var G__30635 = seq__29579_30626;
var G__30636 = chunk__29580_30627;
var G__30637 = count__29581_30628;
var G__30638 = (i__29582_30629 + (1));
seq__29579_30626 = G__30635;
chunk__29580_30627 = G__30636;
count__29581_30628 = G__30637;
i__29582_30629 = G__30638;
continue;
} else {
var temp__5753__auto___30639 = cljs.core.seq(seq__29579_30626);
if(temp__5753__auto___30639){
var seq__29579_30640__$1 = temp__5753__auto___30639;
if(cljs.core.chunked_seq_QMARK_(seq__29579_30640__$1)){
var c__4556__auto___30641 = cljs.core.chunk_first(seq__29579_30640__$1);
var G__30642 = cljs.core.chunk_rest(seq__29579_30640__$1);
var G__30643 = c__4556__auto___30641;
var G__30644 = cljs.core.count(c__4556__auto___30641);
var G__30645 = (0);
seq__29579_30626 = G__30642;
chunk__29580_30627 = G__30643;
count__29581_30628 = G__30644;
i__29582_30629 = G__30645;
continue;
} else {
var map__29591_30647 = cljs.core.first(seq__29579_30640__$1);
var map__29591_30648__$1 = (((((!((map__29591_30647 == null))))?(((((map__29591_30647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29591_30647.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29591_30647):map__29591_30647);
var binding_30649 = map__29591_30648__$1;
var init_30650 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29591_30648__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_30649)," = ",init_30650,";");


var G__30657 = cljs.core.next(seq__29579_30640__$1);
var G__30658 = null;
var G__30659 = (0);
var G__30660 = (0);
seq__29579_30626 = G__30657;
chunk__29580_30627 = G__30658;
count__29581_30628 = G__30659;
i__29582_30629 = G__30660;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__29603){
var map__29604 = p__29603;
var map__29604__$1 = (((((!((map__29604 == null))))?(((((map__29604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29604.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29604):map__29604);
var expr = map__29604__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29604__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29604__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29604__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
if(cljs.core.not((function (){var fexpr__29622 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"null",new cljs.core.Symbol(null,"any","any",-948528346,null),"null",new cljs.core.Symbol(null,"js","js",-886355190,null),"null",new cljs.core.Symbol(null,"number","number",-1084057331,null),"null",new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),"null",new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"function","function",-486723946,null),"null",new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),"null"], null), null);
return (fexpr__29622.cljs$core$IFn$_invoke$arity$1 ? fexpr__29622.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__29622.call(null,tag));
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
var opt_count_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null))) && (cljs.core.boolean$((function (){var fexpr__29626 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null"], null), null);
return (fexpr__29626.cljs$core$IFn$_invoke$arity$1 ? fexpr__29626.cljs$core$IFn$_invoke$arity$1(first_arg_tag) : fexpr__29626.call(null,first_arg_tag));
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
var vec__29610 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count(args);
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
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__29597_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__29597_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__29598_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__29598_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29610,(0),null);
var variadic_invoke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29610,(1),null);
var env__28686__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28686__auto__))){
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
var pimpl_30688 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.compiler.protocol_prefix(protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(args),".",pimpl_30688,"(",cljs.compiler.comma_sep(cljs.core.cons("null",cljs.core.rest(args))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(keyword_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count(args),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_30693 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,"(",cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(mfa_30693,args)),(((mfa_30693 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.comma_sep(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(mfa_30693,args)),"], 0))"], 0));
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
var G__29643 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1);
var fexpr__29642 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__29642.cljs$core$IFn$_invoke$arity$1 ? fexpr__29642.cljs$core$IFn$_invoke$arity$1(G__29643) : fexpr__29642.call(null,G__29643));
} else {
return and__4115__auto__;
}
})())){
var fprop_30698 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
if(cljs.core.truth_(cljs.analyzer._STAR_fn_invoke_direct_STAR_)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_30698," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_30698,"(",cljs.compiler.comma_sep(args),") : ",f__$1,"(",cljs.compiler.comma_sep(args),"))"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_30698," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_30698,"(",cljs.compiler.comma_sep(args),") : ",f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),"))"], 0));
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

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28686__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__29650){
var map__29652 = p__29650;
var map__29652__$1 = (((((!((map__29652 == null))))?(((((map__29652.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29652.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29652):map__29652);
var ctor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29652__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29652__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29652__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__28686__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28686__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("(new ",ctor,"(",cljs.compiler.comma_sep(args),"))");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28686__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__29654){
var map__29655 = p__29654;
var map__29655__$1 = (((((!((map__29655 == null))))?(((((map__29655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29655):map__29655);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29655__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29655__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29655__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__28686__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28686__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("(",target," = ",val,")");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28686__auto__))){
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
var map__29659 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__29659__$1 = (((((!((map__29659 == null))))?(((((map__29659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29659.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29659):map__29659);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29659__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29659__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__29660 = options;
var map__29660__$1 = (((((!((map__29660 == null))))?(((((map__29660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29660.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29660):map__29660);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29660__$1,new cljs.core.Keyword(null,"target","target",253001721));
var nodejs_rt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29660__$1,new cljs.core.Keyword(null,"nodejs-rt","nodejs-rt",-512437071));
var optimizations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29660__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__29661 = (function (){var libs__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(seen)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(libs)),deps));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__29666 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__29666__$1 = (((((!((map__29666 == null))))?(((((map__29666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29666.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29666):map__29666);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29666__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29666__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29661,(0),null);
var libs_to_load = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29661,(1),null);
var global_exports_libs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__29668_30716 = cljs.core.seq(libs_to_load);
var chunk__29669_30717 = null;
var count__29670_30718 = (0);
var i__29671_30719 = (0);
while(true){
if((i__29671_30719 < count__29670_30718)){
var lib_30720 = chunk__29669_30717.cljs$core$IIndexed$_nth$arity$2(null,i__29671_30719);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_30720)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_30720),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_30720),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_30720),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_30720),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_30720,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_30720),"');");
}

}
}
}


var G__30723 = seq__29668_30716;
var G__30724 = chunk__29669_30717;
var G__30725 = count__29670_30718;
var G__30726 = (i__29671_30719 + (1));
seq__29668_30716 = G__30723;
chunk__29669_30717 = G__30724;
count__29670_30718 = G__30725;
i__29671_30719 = G__30726;
continue;
} else {
var temp__5753__auto___30727 = cljs.core.seq(seq__29668_30716);
if(temp__5753__auto___30727){
var seq__29668_30728__$1 = temp__5753__auto___30727;
if(cljs.core.chunked_seq_QMARK_(seq__29668_30728__$1)){
var c__4556__auto___30729 = cljs.core.chunk_first(seq__29668_30728__$1);
var G__30730 = cljs.core.chunk_rest(seq__29668_30728__$1);
var G__30731 = c__4556__auto___30729;
var G__30732 = cljs.core.count(c__4556__auto___30729);
var G__30733 = (0);
seq__29668_30716 = G__30730;
chunk__29669_30717 = G__30731;
count__29670_30718 = G__30732;
i__29671_30719 = G__30733;
continue;
} else {
var lib_30734 = cljs.core.first(seq__29668_30728__$1);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_30734)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_30734),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_30734),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_30734),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_30734),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_30734,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_30734),"');");
}

}
}
}


var G__30739 = cljs.core.next(seq__29668_30728__$1);
var G__30740 = null;
var G__30741 = (0);
var G__30742 = (0);
seq__29668_30716 = G__30739;
chunk__29669_30717 = G__30740;
count__29670_30718 = G__30741;
i__29671_30719 = G__30742;
continue;
}
} else {
}
}
break;
}

var seq__29672_30743 = cljs.core.seq(node_libs);
var chunk__29673_30744 = null;
var count__29674_30745 = (0);
var i__29675_30746 = (0);
while(true){
if((i__29675_30746 < count__29674_30745)){
var lib_30747 = chunk__29673_30744.cljs$core$IIndexed$_nth$arity$2(null,i__29675_30746);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_30747)," = require('",lib_30747,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__30748 = seq__29672_30743;
var G__30749 = chunk__29673_30744;
var G__30750 = count__29674_30745;
var G__30751 = (i__29675_30746 + (1));
seq__29672_30743 = G__30748;
chunk__29673_30744 = G__30749;
count__29674_30745 = G__30750;
i__29675_30746 = G__30751;
continue;
} else {
var temp__5753__auto___30752 = cljs.core.seq(seq__29672_30743);
if(temp__5753__auto___30752){
var seq__29672_30753__$1 = temp__5753__auto___30752;
if(cljs.core.chunked_seq_QMARK_(seq__29672_30753__$1)){
var c__4556__auto___30754 = cljs.core.chunk_first(seq__29672_30753__$1);
var G__30755 = cljs.core.chunk_rest(seq__29672_30753__$1);
var G__30756 = c__4556__auto___30754;
var G__30757 = cljs.core.count(c__4556__auto___30754);
var G__30758 = (0);
seq__29672_30743 = G__30755;
chunk__29673_30744 = G__30756;
count__29674_30745 = G__30757;
i__29675_30746 = G__30758;
continue;
} else {
var lib_30760 = cljs.core.first(seq__29672_30753__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_30760)," = require('",lib_30760,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__30762 = cljs.core.next(seq__29672_30753__$1);
var G__30763 = null;
var G__30764 = (0);
var G__30765 = (0);
seq__29672_30743 = G__30762;
chunk__29673_30744 = G__30763;
count__29674_30745 = G__30764;
i__29675_30746 = G__30765;
continue;
}
} else {
}
}
break;
}

var seq__29676_30766 = cljs.core.seq(global_exports_libs);
var chunk__29677_30767 = null;
var count__29678_30768 = (0);
var i__29679_30769 = (0);
while(true){
if((i__29679_30769 < count__29678_30768)){
var lib_30770 = chunk__29677_30767.cljs$core$IIndexed$_nth$arity$2(null,i__29679_30769);
var map__29684_30771 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_30770));
var map__29684_30772__$1 = (((((!((map__29684_30771 == null))))?(((((map__29684_30771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29684_30771.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29684_30771):map__29684_30771);
var global_exports_30773 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29684_30772__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_30773,lib_30770);


var G__30774 = seq__29676_30766;
var G__30775 = chunk__29677_30767;
var G__30776 = count__29678_30768;
var G__30777 = (i__29679_30769 + (1));
seq__29676_30766 = G__30774;
chunk__29677_30767 = G__30775;
count__29678_30768 = G__30776;
i__29679_30769 = G__30777;
continue;
} else {
var temp__5753__auto___30782 = cljs.core.seq(seq__29676_30766);
if(temp__5753__auto___30782){
var seq__29676_30783__$1 = temp__5753__auto___30782;
if(cljs.core.chunked_seq_QMARK_(seq__29676_30783__$1)){
var c__4556__auto___30784 = cljs.core.chunk_first(seq__29676_30783__$1);
var G__30785 = cljs.core.chunk_rest(seq__29676_30783__$1);
var G__30786 = c__4556__auto___30784;
var G__30787 = cljs.core.count(c__4556__auto___30784);
var G__30788 = (0);
seq__29676_30766 = G__30785;
chunk__29677_30767 = G__30786;
count__29678_30768 = G__30787;
i__29679_30769 = G__30788;
continue;
} else {
var lib_30790 = cljs.core.first(seq__29676_30783__$1);
var map__29686_30791 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_30790));
var map__29686_30792__$1 = (((((!((map__29686_30791 == null))))?(((((map__29686_30791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29686_30791.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29686_30791):map__29686_30791);
var global_exports_30793 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29686_30792__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_30793,lib_30790);


var G__30795 = cljs.core.next(seq__29676_30783__$1);
var G__30796 = null;
var G__30797 = (0);
var G__30798 = (0);
seq__29676_30766 = G__30795;
chunk__29677_30767 = G__30796;
count__29678_30768 = G__30797;
i__29679_30769 = G__30798;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__29691){
var map__29692 = p__29691;
var map__29692__$1 = (((((!((map__29692 == null))))?(((((map__29692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29692.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29692):map__29692);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29692__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29692__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29692__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29692__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29692__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29692__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29692__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("'nil';");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__29696){
var map__29697 = p__29696;
var map__29697__$1 = (((((!((map__29697 == null))))?(((((map__29697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29697.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29697):map__29697);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29697__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29697__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29697__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29697__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29697__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29697__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29697__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__29699){
var map__29700 = p__29699;
var map__29700__$1 = (((((!((map__29700 == null))))?(((((map__29700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29700.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29700):map__29700);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29700__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29700__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29700__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29700__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29700__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__29702_30806 = cljs.core.seq(protocols);
var chunk__29703_30807 = null;
var count__29704_30808 = (0);
var i__29705_30809 = (0);
while(true){
if((i__29705_30809 < count__29704_30808)){
var protocol_30810 = chunk__29703_30807.cljs$core$IIndexed$_nth$arity$2(null,i__29705_30809);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_30810)),"}");


var G__30811 = seq__29702_30806;
var G__30812 = chunk__29703_30807;
var G__30813 = count__29704_30808;
var G__30814 = (i__29705_30809 + (1));
seq__29702_30806 = G__30811;
chunk__29703_30807 = G__30812;
count__29704_30808 = G__30813;
i__29705_30809 = G__30814;
continue;
} else {
var temp__5753__auto___30815 = cljs.core.seq(seq__29702_30806);
if(temp__5753__auto___30815){
var seq__29702_30816__$1 = temp__5753__auto___30815;
if(cljs.core.chunked_seq_QMARK_(seq__29702_30816__$1)){
var c__4556__auto___30817 = cljs.core.chunk_first(seq__29702_30816__$1);
var G__30818 = cljs.core.chunk_rest(seq__29702_30816__$1);
var G__30819 = c__4556__auto___30817;
var G__30820 = cljs.core.count(c__4556__auto___30817);
var G__30821 = (0);
seq__29702_30806 = G__30818;
chunk__29703_30807 = G__30819;
count__29704_30808 = G__30820;
i__29705_30809 = G__30821;
continue;
} else {
var protocol_30822 = cljs.core.first(seq__29702_30816__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_30822)),"}");


var G__30823 = cljs.core.next(seq__29702_30816__$1);
var G__30824 = null;
var G__30825 = (0);
var G__30826 = (0);
seq__29702_30806 = G__30823;
chunk__29703_30807 = G__30824;
count__29704_30808 = G__30825;
i__29705_30809 = G__30826;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__29706_30827 = cljs.core.seq(fields__$1);
var chunk__29707_30828 = null;
var count__29708_30829 = (0);
var i__29709_30830 = (0);
while(true){
if((i__29709_30830 < count__29708_30829)){
var fld_30831 = chunk__29707_30828.cljs$core$IIndexed$_nth$arity$2(null,i__29709_30830);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_30831," = ",fld_30831,";");


var G__30832 = seq__29706_30827;
var G__30833 = chunk__29707_30828;
var G__30834 = count__29708_30829;
var G__30835 = (i__29709_30830 + (1));
seq__29706_30827 = G__30832;
chunk__29707_30828 = G__30833;
count__29708_30829 = G__30834;
i__29709_30830 = G__30835;
continue;
} else {
var temp__5753__auto___30836 = cljs.core.seq(seq__29706_30827);
if(temp__5753__auto___30836){
var seq__29706_30837__$1 = temp__5753__auto___30836;
if(cljs.core.chunked_seq_QMARK_(seq__29706_30837__$1)){
var c__4556__auto___30838 = cljs.core.chunk_first(seq__29706_30837__$1);
var G__30839 = cljs.core.chunk_rest(seq__29706_30837__$1);
var G__30840 = c__4556__auto___30838;
var G__30841 = cljs.core.count(c__4556__auto___30838);
var G__30842 = (0);
seq__29706_30827 = G__30839;
chunk__29707_30828 = G__30840;
count__29708_30829 = G__30841;
i__29709_30830 = G__30842;
continue;
} else {
var fld_30844 = cljs.core.first(seq__29706_30837__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_30844," = ",fld_30844,";");


var G__30845 = cljs.core.next(seq__29706_30837__$1);
var G__30846 = null;
var G__30847 = (0);
var G__30848 = (0);
seq__29706_30827 = G__30845;
chunk__29707_30828 = G__30846;
count__29708_30829 = G__30847;
i__29709_30830 = G__30848;
continue;
}
} else {
}
}
break;
}

var seq__29710_30850 = cljs.core.seq(pmasks);
var chunk__29711_30851 = null;
var count__29712_30852 = (0);
var i__29713_30853 = (0);
while(true){
if((i__29713_30853 < count__29712_30852)){
var vec__29720_30854 = chunk__29711_30851.cljs$core$IIndexed$_nth$arity$2(null,i__29713_30853);
var pno_30855 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29720_30854,(0),null);
var pmask_30856 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29720_30854,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_30855,"$ = ",pmask_30856,";");


var G__30860 = seq__29710_30850;
var G__30861 = chunk__29711_30851;
var G__30862 = count__29712_30852;
var G__30863 = (i__29713_30853 + (1));
seq__29710_30850 = G__30860;
chunk__29711_30851 = G__30861;
count__29712_30852 = G__30862;
i__29713_30853 = G__30863;
continue;
} else {
var temp__5753__auto___30864 = cljs.core.seq(seq__29710_30850);
if(temp__5753__auto___30864){
var seq__29710_30865__$1 = temp__5753__auto___30864;
if(cljs.core.chunked_seq_QMARK_(seq__29710_30865__$1)){
var c__4556__auto___30866 = cljs.core.chunk_first(seq__29710_30865__$1);
var G__30868 = cljs.core.chunk_rest(seq__29710_30865__$1);
var G__30869 = c__4556__auto___30866;
var G__30870 = cljs.core.count(c__4556__auto___30866);
var G__30871 = (0);
seq__29710_30850 = G__30868;
chunk__29711_30851 = G__30869;
count__29712_30852 = G__30870;
i__29713_30853 = G__30871;
continue;
} else {
var vec__29723_30872 = cljs.core.first(seq__29710_30865__$1);
var pno_30873 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29723_30872,(0),null);
var pmask_30874 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29723_30872,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_30873,"$ = ",pmask_30874,";");


var G__30875 = cljs.core.next(seq__29710_30865__$1);
var G__30876 = null;
var G__30877 = (0);
var G__30878 = (0);
seq__29710_30850 = G__30875;
chunk__29711_30851 = G__30876;
count__29712_30852 = G__30877;
i__29713_30853 = G__30878;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__29726){
var map__29727 = p__29726;
var map__29727__$1 = (((((!((map__29727 == null))))?(((((map__29727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29727):map__29727);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29727__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29727__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29727__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29727__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29727__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__29729_30903 = cljs.core.seq(protocols);
var chunk__29730_30904 = null;
var count__29731_30905 = (0);
var i__29732_30906 = (0);
while(true){
if((i__29732_30906 < count__29731_30905)){
var protocol_30907 = chunk__29730_30904.cljs$core$IIndexed$_nth$arity$2(null,i__29732_30906);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_30907)),"}");


var G__30908 = seq__29729_30903;
var G__30909 = chunk__29730_30904;
var G__30910 = count__29731_30905;
var G__30911 = (i__29732_30906 + (1));
seq__29729_30903 = G__30908;
chunk__29730_30904 = G__30909;
count__29731_30905 = G__30910;
i__29732_30906 = G__30911;
continue;
} else {
var temp__5753__auto___30912 = cljs.core.seq(seq__29729_30903);
if(temp__5753__auto___30912){
var seq__29729_30913__$1 = temp__5753__auto___30912;
if(cljs.core.chunked_seq_QMARK_(seq__29729_30913__$1)){
var c__4556__auto___30914 = cljs.core.chunk_first(seq__29729_30913__$1);
var G__30915 = cljs.core.chunk_rest(seq__29729_30913__$1);
var G__30916 = c__4556__auto___30914;
var G__30917 = cljs.core.count(c__4556__auto___30914);
var G__30918 = (0);
seq__29729_30903 = G__30915;
chunk__29730_30904 = G__30916;
count__29731_30905 = G__30917;
i__29732_30906 = G__30918;
continue;
} else {
var protocol_30919 = cljs.core.first(seq__29729_30913__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_30919)),"}");


var G__30920 = cljs.core.next(seq__29729_30913__$1);
var G__30921 = null;
var G__30922 = (0);
var G__30923 = (0);
seq__29729_30903 = G__30920;
chunk__29730_30904 = G__30921;
count__29731_30905 = G__30922;
i__29732_30906 = G__30923;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__29733_30924 = cljs.core.seq(fields__$1);
var chunk__29734_30925 = null;
var count__29735_30927 = (0);
var i__29736_30928 = (0);
while(true){
if((i__29736_30928 < count__29735_30927)){
var fld_30929 = chunk__29734_30925.cljs$core$IIndexed$_nth$arity$2(null,i__29736_30928);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_30929," = ",fld_30929,";");


var G__30931 = seq__29733_30924;
var G__30932 = chunk__29734_30925;
var G__30933 = count__29735_30927;
var G__30934 = (i__29736_30928 + (1));
seq__29733_30924 = G__30931;
chunk__29734_30925 = G__30932;
count__29735_30927 = G__30933;
i__29736_30928 = G__30934;
continue;
} else {
var temp__5753__auto___30937 = cljs.core.seq(seq__29733_30924);
if(temp__5753__auto___30937){
var seq__29733_30938__$1 = temp__5753__auto___30937;
if(cljs.core.chunked_seq_QMARK_(seq__29733_30938__$1)){
var c__4556__auto___30940 = cljs.core.chunk_first(seq__29733_30938__$1);
var G__30941 = cljs.core.chunk_rest(seq__29733_30938__$1);
var G__30942 = c__4556__auto___30940;
var G__30943 = cljs.core.count(c__4556__auto___30940);
var G__30944 = (0);
seq__29733_30924 = G__30941;
chunk__29734_30925 = G__30942;
count__29735_30927 = G__30943;
i__29736_30928 = G__30944;
continue;
} else {
var fld_30945 = cljs.core.first(seq__29733_30938__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_30945," = ",fld_30945,";");


var G__30946 = cljs.core.next(seq__29733_30938__$1);
var G__30947 = null;
var G__30948 = (0);
var G__30949 = (0);
seq__29733_30924 = G__30946;
chunk__29734_30925 = G__30947;
count__29735_30927 = G__30948;
i__29736_30928 = G__30949;
continue;
}
} else {
}
}
break;
}

var seq__29745_30950 = cljs.core.seq(pmasks);
var chunk__29746_30951 = null;
var count__29747_30952 = (0);
var i__29748_30953 = (0);
while(true){
if((i__29748_30953 < count__29747_30952)){
var vec__29757_30954 = chunk__29746_30951.cljs$core$IIndexed$_nth$arity$2(null,i__29748_30953);
var pno_30955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29757_30954,(0),null);
var pmask_30956 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29757_30954,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_30955,"$ = ",pmask_30956,";");


var G__30958 = seq__29745_30950;
var G__30959 = chunk__29746_30951;
var G__30960 = count__29747_30952;
var G__30961 = (i__29748_30953 + (1));
seq__29745_30950 = G__30958;
chunk__29746_30951 = G__30959;
count__29747_30952 = G__30960;
i__29748_30953 = G__30961;
continue;
} else {
var temp__5753__auto___30962 = cljs.core.seq(seq__29745_30950);
if(temp__5753__auto___30962){
var seq__29745_30963__$1 = temp__5753__auto___30962;
if(cljs.core.chunked_seq_QMARK_(seq__29745_30963__$1)){
var c__4556__auto___30964 = cljs.core.chunk_first(seq__29745_30963__$1);
var G__30965 = cljs.core.chunk_rest(seq__29745_30963__$1);
var G__30966 = c__4556__auto___30964;
var G__30967 = cljs.core.count(c__4556__auto___30964);
var G__30968 = (0);
seq__29745_30950 = G__30965;
chunk__29746_30951 = G__30966;
count__29747_30952 = G__30967;
i__29748_30953 = G__30968;
continue;
} else {
var vec__29760_30969 = cljs.core.first(seq__29745_30963__$1);
var pno_30970 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29760_30969,(0),null);
var pmask_30971 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29760_30969,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_30970,"$ = ",pmask_30971,";");


var G__30973 = cljs.core.next(seq__29745_30963__$1);
var G__30974 = null;
var G__30975 = (0);
var G__30976 = (0);
seq__29745_30950 = G__30973;
chunk__29746_30951 = G__30974;
count__29747_30952 = G__30975;
i__29748_30953 = G__30976;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__29763){
var map__29764 = p__29763;
var map__29764__$1 = (((((!((map__29764 == null))))?(((((map__29764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29764.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29764):map__29764);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29764__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29764__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29764__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29764__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29764__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__28686__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28686__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3(target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28686__auto__))){
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__29767){
var map__29768 = p__29767;
var map__29768__$1 = (((((!((map__29768 == null))))?(((((map__29768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29768.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29768):map__29768);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29768__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29768__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29768__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29768__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29768__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4115__auto__ = code;
if(cljs.core.truth_(and__4115__auto__)){
return goog.string.startsWith(clojure.string.trim(code),"/*");
} else {
return and__4115__auto__;
}
})())){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(code);
} else {
var env__28686__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28686__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(code);
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28686__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("goog.require('cljs.core');");

var seq__29774 = cljs.core.seq(table);
var chunk__29775 = null;
var count__29776 = (0);
var i__29777 = (0);
while(true){
if((i__29777 < count__29776)){
var vec__29785 = chunk__29775.cljs$core$IIndexed$_nth$arity$2(null,i__29777);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29785,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29785,(1),null);
var ns_30982 = cljs.core.namespace(sym);
var name_30983 = cljs.core.name(sym);
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


var G__30984 = seq__29774;
var G__30985 = chunk__29775;
var G__30986 = count__29776;
var G__30987 = (i__29777 + (1));
seq__29774 = G__30984;
chunk__29775 = G__30985;
count__29776 = G__30986;
i__29777 = G__30987;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__29774);
if(temp__5753__auto__){
var seq__29774__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29774__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__29774__$1);
var G__30992 = cljs.core.chunk_rest(seq__29774__$1);
var G__30993 = c__4556__auto__;
var G__30994 = cljs.core.count(c__4556__auto__);
var G__30995 = (0);
seq__29774 = G__30992;
chunk__29775 = G__30993;
count__29776 = G__30994;
i__29777 = G__30995;
continue;
} else {
var vec__29788 = cljs.core.first(seq__29774__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29788,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29788,(1),null);
var ns_30996 = cljs.core.namespace(sym);
var name_30997 = cljs.core.name(sym);
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


var G__30998 = cljs.core.next(seq__29774__$1);
var G__30999 = null;
var G__31000 = (0);
var G__31001 = (0);
seq__29774 = G__30998;
chunk__29775 = G__30999;
count__29776 = G__31000;
i__29777 = G__31001;
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
var G__29792 = arguments.length;
switch (G__29792) {
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
var k_31003 = cljs.core.first(ks);
var vec__29793_31004 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,k_31003);
var top_31005 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29793_31004,(0),null);
var prefix_SINGLEQUOTE__31006 = vec__29793_31004;
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_31003)) && ((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(known_externs,prefix_SINGLEQUOTE__31006) == null)))){
if((!(((cljs.core.contains_QMARK_(cljs.core.deref(top_level),top_31005)) || (cljs.core.contains_QMARK_(known_externs,top_31005)))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__31006)),";");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(top_level,cljs.core.conj,top_31005);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__31006)),";");
}
} else {
}

var m_31011 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(externs,k_31003);
if(cljs.core.empty_QMARK_(m_31011)){
} else {
cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(prefix_SINGLEQUOTE__31006,m_31011,top_level,known_externs);
}

var G__31012 = cljs.core.next(ks);
ks = G__31012;
continue;
} else {
return null;
}
break;
}
}));

(cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4);

