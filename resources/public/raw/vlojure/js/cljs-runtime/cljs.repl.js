goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__70118){
var map__70119 = p__70118;
var map__70119__$1 = (((((!((map__70119 == null))))?(((((map__70119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70119.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70119):map__70119);
var m = map__70119__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70119__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70119__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__70121_70222 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__70122_70223 = null;
var count__70123_70224 = (0);
var i__70124_70225 = (0);
while(true){
if((i__70124_70225 < count__70123_70224)){
var f_70226 = chunk__70122_70223.cljs$core$IIndexed$_nth$arity$2(null,i__70124_70225);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_70226], 0));


var G__70227 = seq__70121_70222;
var G__70228 = chunk__70122_70223;
var G__70229 = count__70123_70224;
var G__70230 = (i__70124_70225 + (1));
seq__70121_70222 = G__70227;
chunk__70122_70223 = G__70228;
count__70123_70224 = G__70229;
i__70124_70225 = G__70230;
continue;
} else {
var temp__5753__auto___70231 = cljs.core.seq(seq__70121_70222);
if(temp__5753__auto___70231){
var seq__70121_70232__$1 = temp__5753__auto___70231;
if(cljs.core.chunked_seq_QMARK_(seq__70121_70232__$1)){
var c__4556__auto___70233 = cljs.core.chunk_first(seq__70121_70232__$1);
var G__70234 = cljs.core.chunk_rest(seq__70121_70232__$1);
var G__70235 = c__4556__auto___70233;
var G__70236 = cljs.core.count(c__4556__auto___70233);
var G__70237 = (0);
seq__70121_70222 = G__70234;
chunk__70122_70223 = G__70235;
count__70123_70224 = G__70236;
i__70124_70225 = G__70237;
continue;
} else {
var f_70238 = cljs.core.first(seq__70121_70232__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_70238], 0));


var G__70239 = cljs.core.next(seq__70121_70232__$1);
var G__70240 = null;
var G__70241 = (0);
var G__70242 = (0);
seq__70121_70222 = G__70239;
chunk__70122_70223 = G__70240;
count__70123_70224 = G__70241;
i__70124_70225 = G__70242;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_70243 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_70243], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_70243)))?cljs.core.second(arglists_70243):arglists_70243)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__70125_70244 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__70126_70245 = null;
var count__70127_70246 = (0);
var i__70128_70247 = (0);
while(true){
if((i__70128_70247 < count__70127_70246)){
var vec__70139_70248 = chunk__70126_70245.cljs$core$IIndexed$_nth$arity$2(null,i__70128_70247);
var name_70249 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70139_70248,(0),null);
var map__70142_70250 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70139_70248,(1),null);
var map__70142_70251__$1 = (((((!((map__70142_70250 == null))))?(((((map__70142_70250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70142_70250.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70142_70250):map__70142_70250);
var doc_70252 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70142_70251__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_70253 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70142_70251__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_70249], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_70253], 0));

if(cljs.core.truth_(doc_70252)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_70252], 0));
} else {
}


var G__70254 = seq__70125_70244;
var G__70255 = chunk__70126_70245;
var G__70256 = count__70127_70246;
var G__70257 = (i__70128_70247 + (1));
seq__70125_70244 = G__70254;
chunk__70126_70245 = G__70255;
count__70127_70246 = G__70256;
i__70128_70247 = G__70257;
continue;
} else {
var temp__5753__auto___70258 = cljs.core.seq(seq__70125_70244);
if(temp__5753__auto___70258){
var seq__70125_70259__$1 = temp__5753__auto___70258;
if(cljs.core.chunked_seq_QMARK_(seq__70125_70259__$1)){
var c__4556__auto___70260 = cljs.core.chunk_first(seq__70125_70259__$1);
var G__70261 = cljs.core.chunk_rest(seq__70125_70259__$1);
var G__70262 = c__4556__auto___70260;
var G__70263 = cljs.core.count(c__4556__auto___70260);
var G__70264 = (0);
seq__70125_70244 = G__70261;
chunk__70126_70245 = G__70262;
count__70127_70246 = G__70263;
i__70128_70247 = G__70264;
continue;
} else {
var vec__70144_70265 = cljs.core.first(seq__70125_70259__$1);
var name_70266 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70144_70265,(0),null);
var map__70147_70267 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70144_70265,(1),null);
var map__70147_70268__$1 = (((((!((map__70147_70267 == null))))?(((((map__70147_70267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70147_70267.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70147_70267):map__70147_70267);
var doc_70269 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70147_70268__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_70270 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70147_70268__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_70266], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_70270], 0));

if(cljs.core.truth_(doc_70269)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_70269], 0));
} else {
}


var G__70271 = cljs.core.next(seq__70125_70259__$1);
var G__70272 = null;
var G__70273 = (0);
var G__70274 = (0);
seq__70125_70244 = G__70271;
chunk__70126_70245 = G__70272;
count__70127_70246 = G__70273;
i__70128_70247 = G__70274;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__70149 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__70150 = null;
var count__70151 = (0);
var i__70152 = (0);
while(true){
if((i__70152 < count__70151)){
var role = chunk__70150.cljs$core$IIndexed$_nth$arity$2(null,i__70152);
var temp__5753__auto___70275__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___70275__$1)){
var spec_70276 = temp__5753__auto___70275__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_70276)], 0));
} else {
}


var G__70277 = seq__70149;
var G__70278 = chunk__70150;
var G__70279 = count__70151;
var G__70280 = (i__70152 + (1));
seq__70149 = G__70277;
chunk__70150 = G__70278;
count__70151 = G__70279;
i__70152 = G__70280;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__70149);
if(temp__5753__auto____$1){
var seq__70149__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__70149__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__70149__$1);
var G__70281 = cljs.core.chunk_rest(seq__70149__$1);
var G__70282 = c__4556__auto__;
var G__70283 = cljs.core.count(c__4556__auto__);
var G__70284 = (0);
seq__70149 = G__70281;
chunk__70150 = G__70282;
count__70151 = G__70283;
i__70152 = G__70284;
continue;
} else {
var role = cljs.core.first(seq__70149__$1);
var temp__5753__auto___70285__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___70285__$2)){
var spec_70286 = temp__5753__auto___70285__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_70286)], 0));
} else {
}


var G__70287 = cljs.core.next(seq__70149__$1);
var G__70288 = null;
var G__70289 = (0);
var G__70290 = (0);
seq__70149 = G__70287;
chunk__70150 = G__70288;
count__70151 = G__70289;
i__70152 = G__70290;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__70291 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__70292 = cljs.core.ex_cause(t);
via = G__70291;
t = G__70292;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__70155 = datafied_throwable;
var map__70155__$1 = (((((!((map__70155 == null))))?(((((map__70155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70155.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70155):map__70155);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70155__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70155__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__70155__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__70156 = cljs.core.last(via);
var map__70156__$1 = (((((!((map__70156 == null))))?(((((map__70156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70156):map__70156);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70156__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70156__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70156__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__70157 = data;
var map__70157__$1 = (((((!((map__70157 == null))))?(((((map__70157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70157.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70157):map__70157);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70157__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70157__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70157__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__70158 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__70158__$1 = (((((!((map__70158 == null))))?(((((map__70158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70158.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70158):map__70158);
var top_data = map__70158__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70158__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__70163 = phase;
var G__70163__$1 = (((G__70163 instanceof cljs.core.Keyword))?G__70163.fqn:null);
switch (G__70163__$1) {
case "read-source":
var map__70164 = data;
var map__70164__$1 = (((((!((map__70164 == null))))?(((((map__70164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70164):map__70164);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70164__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70164__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__70166 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__70166__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70166,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__70166);
var G__70166__$2 = (cljs.core.truth_((function (){var fexpr__70167 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__70167.cljs$core$IFn$_invoke$arity$1 ? fexpr__70167.cljs$core$IFn$_invoke$arity$1(source) : fexpr__70167.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__70166__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__70166__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70166__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__70166__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__70168 = top_data;
var G__70168__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70168,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__70168);
var G__70168__$2 = (cljs.core.truth_((function (){var fexpr__70169 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__70169.cljs$core$IFn$_invoke$arity$1 ? fexpr__70169.cljs$core$IFn$_invoke$arity$1(source) : fexpr__70169.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__70168__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__70168__$1);
var G__70168__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70168__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__70168__$2);
var G__70168__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70168__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__70168__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70168__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__70168__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__70170 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70170,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70170,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70170,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70170,(3),null);
var G__70173 = top_data;
var G__70173__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70173,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__70173);
var G__70173__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70173__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__70173__$1);
var G__70173__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70173__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__70173__$2);
var G__70173__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70173__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__70173__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70173__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__70173__$4;
}

break;
case "execution":
var vec__70174 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70174,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70174,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70174,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70174,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__70154_SHARP_){
var or__4126__auto__ = (p1__70154_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__70178 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__70178.cljs$core$IFn$_invoke$arity$1 ? fexpr__70178.cljs$core$IFn$_invoke$arity$1(p1__70154_SHARP_) : fexpr__70178.call(null,p1__70154_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__70179 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__70179__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70179,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__70179);
var G__70179__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70179__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__70179__$1);
var G__70179__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70179__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__70179__$2);
var G__70179__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70179__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__70179__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70179__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__70179__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__70163__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__70182){
var map__70183 = p__70182;
var map__70183__$1 = (((((!((map__70183 == null))))?(((((map__70183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70183):map__70183);
var triage_data = map__70183__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70183__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70183__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70183__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70183__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70183__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70183__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70183__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70183__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__70185 = phase;
var G__70185__$1 = (((G__70185 instanceof cljs.core.Keyword))?G__70185.fqn:null);
switch (G__70185__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__70186 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__70187 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__70188 = loc;
var G__70189 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__70190_70295 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__70191_70296 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__70192_70297 = true;
var _STAR_print_fn_STAR__temp_val__70193_70298 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__70192_70297);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__70193_70298);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__70180_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__70180_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__70191_70296);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__70190_70295);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__70186,G__70187,G__70188,G__70189) : format.call(null,G__70186,G__70187,G__70188,G__70189));

break;
case "macroexpansion":
var G__70194 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__70195 = cause_type;
var G__70196 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__70197 = loc;
var G__70198 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__70194,G__70195,G__70196,G__70197,G__70198) : format.call(null,G__70194,G__70195,G__70196,G__70197,G__70198));

break;
case "compile-syntax-check":
var G__70199 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__70200 = cause_type;
var G__70201 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__70202 = loc;
var G__70203 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__70199,G__70200,G__70201,G__70202,G__70203) : format.call(null,G__70199,G__70200,G__70201,G__70202,G__70203));

break;
case "compilation":
var G__70204 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__70205 = cause_type;
var G__70206 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__70207 = loc;
var G__70208 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__70204,G__70205,G__70206,G__70207,G__70208) : format.call(null,G__70204,G__70205,G__70206,G__70207,G__70208));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__70209 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__70210 = symbol;
var G__70211 = loc;
var G__70212 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__70213_70299 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__70214_70300 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__70215_70301 = true;
var _STAR_print_fn_STAR__temp_val__70216_70302 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__70215_70301);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__70216_70302);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__70181_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__70181_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__70214_70300);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__70213_70299);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__70209,G__70210,G__70211,G__70212) : format.call(null,G__70209,G__70210,G__70211,G__70212));
} else {
var G__70217 = "Execution error%s at %s(%s).\n%s\n";
var G__70218 = cause_type;
var G__70219 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__70220 = loc;
var G__70221 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__70217,G__70218,G__70219,G__70220,G__70221) : format.call(null,G__70217,G__70218,G__70219,G__70220,G__70221));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__70185__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
