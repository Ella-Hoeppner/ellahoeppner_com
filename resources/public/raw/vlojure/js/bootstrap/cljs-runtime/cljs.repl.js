goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__70303){
var map__70304 = p__70303;
var map__70304__$1 = (((((!((map__70304 == null))))?(((((map__70304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70304):map__70304);
var m = map__70304__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70304__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70304__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__70306_70407 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__70307_70408 = null;
var count__70308_70409 = (0);
var i__70309_70410 = (0);
while(true){
if((i__70309_70410 < count__70308_70409)){
var f_70411 = chunk__70307_70408.cljs$core$IIndexed$_nth$arity$2(null,i__70309_70410);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_70411], 0));


var G__70412 = seq__70306_70407;
var G__70413 = chunk__70307_70408;
var G__70414 = count__70308_70409;
var G__70415 = (i__70309_70410 + (1));
seq__70306_70407 = G__70412;
chunk__70307_70408 = G__70413;
count__70308_70409 = G__70414;
i__70309_70410 = G__70415;
continue;
} else {
var temp__5753__auto___70416 = cljs.core.seq(seq__70306_70407);
if(temp__5753__auto___70416){
var seq__70306_70417__$1 = temp__5753__auto___70416;
if(cljs.core.chunked_seq_QMARK_(seq__70306_70417__$1)){
var c__4556__auto___70418 = cljs.core.chunk_first(seq__70306_70417__$1);
var G__70419 = cljs.core.chunk_rest(seq__70306_70417__$1);
var G__70420 = c__4556__auto___70418;
var G__70421 = cljs.core.count(c__4556__auto___70418);
var G__70422 = (0);
seq__70306_70407 = G__70419;
chunk__70307_70408 = G__70420;
count__70308_70409 = G__70421;
i__70309_70410 = G__70422;
continue;
} else {
var f_70423 = cljs.core.first(seq__70306_70417__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_70423], 0));


var G__70424 = cljs.core.next(seq__70306_70417__$1);
var G__70425 = null;
var G__70426 = (0);
var G__70427 = (0);
seq__70306_70407 = G__70424;
chunk__70307_70408 = G__70425;
count__70308_70409 = G__70426;
i__70309_70410 = G__70427;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_70428 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_70428], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_70428)))?cljs.core.second(arglists_70428):arglists_70428)], 0));
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
var seq__70310_70429 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__70311_70430 = null;
var count__70312_70431 = (0);
var i__70313_70432 = (0);
while(true){
if((i__70313_70432 < count__70312_70431)){
var vec__70324_70433 = chunk__70311_70430.cljs$core$IIndexed$_nth$arity$2(null,i__70313_70432);
var name_70434 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70324_70433,(0),null);
var map__70327_70435 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70324_70433,(1),null);
var map__70327_70436__$1 = (((((!((map__70327_70435 == null))))?(((((map__70327_70435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70327_70435.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70327_70435):map__70327_70435);
var doc_70437 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70327_70436__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_70438 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70327_70436__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_70434], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_70438], 0));

if(cljs.core.truth_(doc_70437)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_70437], 0));
} else {
}


var G__70439 = seq__70310_70429;
var G__70440 = chunk__70311_70430;
var G__70441 = count__70312_70431;
var G__70442 = (i__70313_70432 + (1));
seq__70310_70429 = G__70439;
chunk__70311_70430 = G__70440;
count__70312_70431 = G__70441;
i__70313_70432 = G__70442;
continue;
} else {
var temp__5753__auto___70443 = cljs.core.seq(seq__70310_70429);
if(temp__5753__auto___70443){
var seq__70310_70444__$1 = temp__5753__auto___70443;
if(cljs.core.chunked_seq_QMARK_(seq__70310_70444__$1)){
var c__4556__auto___70445 = cljs.core.chunk_first(seq__70310_70444__$1);
var G__70446 = cljs.core.chunk_rest(seq__70310_70444__$1);
var G__70447 = c__4556__auto___70445;
var G__70448 = cljs.core.count(c__4556__auto___70445);
var G__70449 = (0);
seq__70310_70429 = G__70446;
chunk__70311_70430 = G__70447;
count__70312_70431 = G__70448;
i__70313_70432 = G__70449;
continue;
} else {
var vec__70329_70450 = cljs.core.first(seq__70310_70444__$1);
var name_70451 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70329_70450,(0),null);
var map__70332_70452 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70329_70450,(1),null);
var map__70332_70453__$1 = (((((!((map__70332_70452 == null))))?(((((map__70332_70452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70332_70452.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70332_70452):map__70332_70452);
var doc_70454 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70332_70453__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_70455 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70332_70453__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_70451], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_70455], 0));

if(cljs.core.truth_(doc_70454)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_70454], 0));
} else {
}


var G__70456 = cljs.core.next(seq__70310_70444__$1);
var G__70457 = null;
var G__70458 = (0);
var G__70459 = (0);
seq__70310_70429 = G__70456;
chunk__70311_70430 = G__70457;
count__70312_70431 = G__70458;
i__70313_70432 = G__70459;
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

var seq__70334 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__70335 = null;
var count__70336 = (0);
var i__70337 = (0);
while(true){
if((i__70337 < count__70336)){
var role = chunk__70335.cljs$core$IIndexed$_nth$arity$2(null,i__70337);
var temp__5753__auto___70460__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___70460__$1)){
var spec_70461 = temp__5753__auto___70460__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_70461)], 0));
} else {
}


var G__70462 = seq__70334;
var G__70463 = chunk__70335;
var G__70464 = count__70336;
var G__70465 = (i__70337 + (1));
seq__70334 = G__70462;
chunk__70335 = G__70463;
count__70336 = G__70464;
i__70337 = G__70465;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__70334);
if(temp__5753__auto____$1){
var seq__70334__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__70334__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__70334__$1);
var G__70466 = cljs.core.chunk_rest(seq__70334__$1);
var G__70467 = c__4556__auto__;
var G__70468 = cljs.core.count(c__4556__auto__);
var G__70469 = (0);
seq__70334 = G__70466;
chunk__70335 = G__70467;
count__70336 = G__70468;
i__70337 = G__70469;
continue;
} else {
var role = cljs.core.first(seq__70334__$1);
var temp__5753__auto___70470__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___70470__$2)){
var spec_70471 = temp__5753__auto___70470__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_70471)], 0));
} else {
}


var G__70472 = cljs.core.next(seq__70334__$1);
var G__70473 = null;
var G__70474 = (0);
var G__70475 = (0);
seq__70334 = G__70472;
chunk__70335 = G__70473;
count__70336 = G__70474;
i__70337 = G__70475;
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
var G__70476 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__70477 = cljs.core.ex_cause(t);
via = G__70476;
t = G__70477;
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
var map__70340 = datafied_throwable;
var map__70340__$1 = (((((!((map__70340 == null))))?(((((map__70340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70340.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70340):map__70340);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70340__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70340__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__70340__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__70341 = cljs.core.last(via);
var map__70341__$1 = (((((!((map__70341 == null))))?(((((map__70341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70341.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70341):map__70341);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70341__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70341__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70341__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__70342 = data;
var map__70342__$1 = (((((!((map__70342 == null))))?(((((map__70342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70342.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70342):map__70342);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70342__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70342__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70342__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__70343 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__70343__$1 = (((((!((map__70343 == null))))?(((((map__70343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70343):map__70343);
var top_data = map__70343__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70343__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__70348 = phase;
var G__70348__$1 = (((G__70348 instanceof cljs.core.Keyword))?G__70348.fqn:null);
switch (G__70348__$1) {
case "read-source":
var map__70349 = data;
var map__70349__$1 = (((((!((map__70349 == null))))?(((((map__70349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70349):map__70349);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70349__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70349__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__70351 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__70351__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70351,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__70351);
var G__70351__$2 = (cljs.core.truth_((function (){var fexpr__70352 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__70352.cljs$core$IFn$_invoke$arity$1 ? fexpr__70352.cljs$core$IFn$_invoke$arity$1(source) : fexpr__70352.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__70351__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__70351__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70351__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__70351__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__70353 = top_data;
var G__70353__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70353,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__70353);
var G__70353__$2 = (cljs.core.truth_((function (){var fexpr__70354 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__70354.cljs$core$IFn$_invoke$arity$1 ? fexpr__70354.cljs$core$IFn$_invoke$arity$1(source) : fexpr__70354.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__70353__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__70353__$1);
var G__70353__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70353__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__70353__$2);
var G__70353__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70353__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__70353__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70353__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__70353__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__70355 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70355,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70355,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70355,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70355,(3),null);
var G__70358 = top_data;
var G__70358__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70358,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__70358);
var G__70358__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70358__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__70358__$1);
var G__70358__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70358__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__70358__$2);
var G__70358__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70358__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__70358__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70358__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__70358__$4;
}

break;
case "execution":
var vec__70359 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70359,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70359,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70359,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70359,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__70339_SHARP_){
var or__4126__auto__ = (p1__70339_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__70363 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__70363.cljs$core$IFn$_invoke$arity$1 ? fexpr__70363.cljs$core$IFn$_invoke$arity$1(p1__70339_SHARP_) : fexpr__70363.call(null,p1__70339_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__70364 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__70364__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70364,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__70364);
var G__70364__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70364__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__70364__$1);
var G__70364__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70364__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__70364__$2);
var G__70364__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70364__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__70364__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70364__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__70364__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__70348__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__70367){
var map__70368 = p__70367;
var map__70368__$1 = (((((!((map__70368 == null))))?(((((map__70368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70368):map__70368);
var triage_data = map__70368__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70368__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70368__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70368__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70368__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70368__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70368__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70368__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70368__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__70370 = phase;
var G__70370__$1 = (((G__70370 instanceof cljs.core.Keyword))?G__70370.fqn:null);
switch (G__70370__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__70371 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__70372 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__70373 = loc;
var G__70374 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__70375_70480 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__70376_70481 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__70377_70482 = true;
var _STAR_print_fn_STAR__temp_val__70378_70483 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__70377_70482);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__70378_70483);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__70365_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__70365_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__70376_70481);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__70375_70480);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__70371,G__70372,G__70373,G__70374) : format.call(null,G__70371,G__70372,G__70373,G__70374));

break;
case "macroexpansion":
var G__70379 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__70380 = cause_type;
var G__70381 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__70382 = loc;
var G__70383 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__70379,G__70380,G__70381,G__70382,G__70383) : format.call(null,G__70379,G__70380,G__70381,G__70382,G__70383));

break;
case "compile-syntax-check":
var G__70384 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__70385 = cause_type;
var G__70386 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__70387 = loc;
var G__70388 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__70384,G__70385,G__70386,G__70387,G__70388) : format.call(null,G__70384,G__70385,G__70386,G__70387,G__70388));

break;
case "compilation":
var G__70389 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__70390 = cause_type;
var G__70391 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__70392 = loc;
var G__70393 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__70389,G__70390,G__70391,G__70392,G__70393) : format.call(null,G__70389,G__70390,G__70391,G__70392,G__70393));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__70394 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__70395 = symbol;
var G__70396 = loc;
var G__70397 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__70398_70484 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__70399_70485 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__70400_70486 = true;
var _STAR_print_fn_STAR__temp_val__70401_70487 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__70400_70486);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__70401_70487);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__70366_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__70366_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__70399_70485);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__70398_70484);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__70394,G__70395,G__70396,G__70397) : format.call(null,G__70394,G__70395,G__70396,G__70397));
} else {
var G__70402 = "Execution error%s at %s(%s).\n%s\n";
var G__70403 = cause_type;
var G__70404 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__70405 = loc;
var G__70406 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__70402,G__70403,G__70404,G__70405,G__70406) : format.call(null,G__70402,G__70403,G__70404,G__70405,G__70406));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__70370__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
