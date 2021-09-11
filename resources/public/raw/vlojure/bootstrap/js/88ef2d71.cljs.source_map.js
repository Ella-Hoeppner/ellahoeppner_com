goog.provide('cljs.source_map');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__23817){
var vec__23819 = p__23817;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23819,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23819,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources(sources);
return (function (a,b){
return cljs.core.compare((sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(a) : sources__$1.call(null,a)),(sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(b) : sources__$1.call(null,b)));
});
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__23827 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23827,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23827,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23827,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23827,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23827,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(goog.object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(seg));
if(cljs.core.truth_(temp__5753__auto__)){
var name__$1 = temp__5753__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__23838 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23838,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23838,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23838,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23838,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23838,(4),null);
var vec__23841 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23841,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23841,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23841,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23841,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23841,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__4126__auto__ = col;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta(nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__23846 = segmap;
var map__23846__$1 = (((((!((map__23846 == null))))?(((((map__23846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23846.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23846):map__23846);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23846__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23846__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23846__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23846__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23846__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (v){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
}),cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__23856 = arguments.length;
switch (G__23856) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2(goog.object.get(source_map,"mappings"),source_map);
}));

(cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by(cljs.source_map.source_compare(sources));
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__23862 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__25448 = cljs.core.next(segs__$1);
var G__25449 = nrelseg;
var G__25450 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__25448;
relseg__$1 = G__25449;
result__$1 = G__25450;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23862,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23862,(1),null);
var G__25451 = (gline + (1));
var G__25452 = cljs.core.next(lines__$1);
var G__25453 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__25454 = result__$1;
gline = G__25451;
lines__$1 = G__25452;
relseg = G__25453;
result = G__25454;
continue;
} else {
return result;
}
break;
}
}));

(cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2);

/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__23871 = segmap;
var map__23871__$1 = (((((!((map__23871 == null))))?(((((map__23871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23871.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23871):map__23871);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23871__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23871__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23871__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23871__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23871__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (p1__23867_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__23867_SHARP_,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__23878 = arguments.length;
switch (G__23878) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2(goog.object.get(source_map,"mappings"),source_map);
}));

(cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__23891 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__25466 = cljs.core.next(segs__$1);
var G__25467 = nrelseg;
var G__25468 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__25466;
relseg__$1 = G__25467;
result__$1 = G__25468;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23891,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23891,(1),null);
var G__25470 = (gline + (1));
var G__25471 = cljs.core.next(lines__$1);
var G__25472 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__25473 = result__$1;
gline = G__25470;
lines__$1 = G__25471;
relseg = G__25472;
result = G__25473;
continue;
} else {
return result;
}
break;
}
}));

(cljs.source_map.decode.cljs$lang$maxFixedArity = 2);

/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (segs,cols){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__23896){
var vec__23897 = p__23896;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23897,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23897,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23897,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23897,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23897,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
}));

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (cols__$1,p__23900){
var vec__23901 = p__23900;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23901,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23901,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23901,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23901,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23901,(4),null);
var seg = vec__23901;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,cljs.core.deref(relseg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__23905){
var vec__23906 = p__23905;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23906,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23906,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23906,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23906,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23906,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return lname;
}
})()], null);
}));

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cols__$1,cljs.source_map.base64_vlq.encode(offset));
}),cljs.core.PersistentVector.EMPTY,cols));
}),cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var preamble_lines = cljs.core.take.cljs$core$IFn$_invoke$arity$2((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY));
var info__GT_segv = (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__5751__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__5751__auto__)){
var name = temp__5751__auto__;
var idx = (function (){var temp__5751__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(names__GT_idx),name);
if(cljs.core.truth_(temp__5751__auto____$1)){
var idx = temp__5751__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref(name_idx);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segv,idx);
} else {
return segv;
}
});
var encode_cols = (function (infos,source_idx,line,col){
var seq__23913 = cljs.core.seq(infos);
var chunk__23914 = null;
var count__23915 = (0);
var i__23916 = (0);
while(true){
if((i__23916 < count__23915)){
var info = chunk__23914.cljs$core$IIndexed$_nth$arity$2(null,i__23916);
var segv_25483 = info__GT_segv(info,source_idx,line,col);
var gline_25484 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_25485 = cljs.core.count(cljs.core.deref(lines));
if((gline_25484 > (lc_25485 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__23913,chunk__23914,count__23915,i__23916,segv_25483,gline_25484,lc_25485,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_25484 - (lc_25485 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_25483], null));
});})(seq__23913,chunk__23914,count__23915,i__23916,segv_25483,gline_25484,lc_25485,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__23913,chunk__23914,count__23915,i__23916,segv_25483,gline_25484,lc_25485,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_25484], null),cljs.core.conj,segv_25483);
});})(seq__23913,chunk__23914,count__23915,i__23916,segv_25483,gline_25484,lc_25485,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__25487 = seq__23913;
var G__25488 = chunk__23914;
var G__25489 = count__23915;
var G__25490 = (i__23916 + (1));
seq__23913 = G__25487;
chunk__23914 = G__25488;
count__23915 = G__25489;
i__23916 = G__25490;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__23913);
if(temp__5753__auto__){
var seq__23913__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23913__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__23913__$1);
var G__25491 = cljs.core.chunk_rest(seq__23913__$1);
var G__25492 = c__4556__auto__;
var G__25493 = cljs.core.count(c__4556__auto__);
var G__25494 = (0);
seq__23913 = G__25491;
chunk__23914 = G__25492;
count__23915 = G__25493;
i__23916 = G__25494;
continue;
} else {
var info = cljs.core.first(seq__23913__$1);
var segv_25495 = info__GT_segv(info,source_idx,line,col);
var gline_25496 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_25497 = cljs.core.count(cljs.core.deref(lines));
if((gline_25496 > (lc_25497 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__23913,chunk__23914,count__23915,i__23916,segv_25495,gline_25496,lc_25497,info,seq__23913__$1,temp__5753__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_25496 - (lc_25497 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_25495], null));
});})(seq__23913,chunk__23914,count__23915,i__23916,segv_25495,gline_25496,lc_25497,info,seq__23913__$1,temp__5753__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__23913,chunk__23914,count__23915,i__23916,segv_25495,gline_25496,lc_25497,info,seq__23913__$1,temp__5753__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_25496], null),cljs.core.conj,segv_25495);
});})(seq__23913,chunk__23914,count__23915,i__23916,segv_25495,gline_25496,lc_25497,info,seq__23913__$1,temp__5753__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__25502 = cljs.core.next(seq__23913__$1);
var G__25503 = null;
var G__25504 = (0);
var G__25505 = (0);
seq__23913 = G__25502;
chunk__23914 = G__25503;
count__23915 = G__25504;
i__23916 = G__25505;
continue;
}
} else {
return null;
}
}
break;
}
});
var seq__23922_25508 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__23923_25509 = null;
var count__23924_25510 = (0);
var i__23925_25511 = (0);
while(true){
if((i__23925_25511 < count__23924_25510)){
var vec__24155_25513 = chunk__23923_25509.cljs$core$IIndexed$_nth$arity$2(null,i__23925_25511);
var source_idx_25514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24155_25513,(0),null);
var vec__24158_25515 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24155_25513,(1),null);
var __25516 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24158_25515,(0),null);
var lines_25517__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24158_25515,(1),null);
var seq__24161_25520 = cljs.core.seq(lines_25517__$1);
var chunk__24162_25521 = null;
var count__24163_25522 = (0);
var i__24164_25523 = (0);
while(true){
if((i__24164_25523 < count__24163_25522)){
var vec__24226_25524 = chunk__24162_25521.cljs$core$IIndexed$_nth$arity$2(null,i__24164_25523);
var line_25525 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24226_25524,(0),null);
var cols_25526 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24226_25524,(1),null);
var seq__24229_25528 = cljs.core.seq(cols_25526);
var chunk__24230_25529 = null;
var count__24231_25530 = (0);
var i__24232_25531 = (0);
while(true){
if((i__24232_25531 < count__24231_25530)){
var vec__24249_25532 = chunk__24230_25529.cljs$core$IIndexed$_nth$arity$2(null,i__24232_25531);
var col_25533 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24249_25532,(0),null);
var infos_25534 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24249_25532,(1),null);
encode_cols(infos_25534,source_idx_25514,line_25525,col_25533);


var G__25535 = seq__24229_25528;
var G__25536 = chunk__24230_25529;
var G__25537 = count__24231_25530;
var G__25538 = (i__24232_25531 + (1));
seq__24229_25528 = G__25535;
chunk__24230_25529 = G__25536;
count__24231_25530 = G__25537;
i__24232_25531 = G__25538;
continue;
} else {
var temp__5753__auto___25539 = cljs.core.seq(seq__24229_25528);
if(temp__5753__auto___25539){
var seq__24229_25540__$1 = temp__5753__auto___25539;
if(cljs.core.chunked_seq_QMARK_(seq__24229_25540__$1)){
var c__4556__auto___25541 = cljs.core.chunk_first(seq__24229_25540__$1);
var G__25542 = cljs.core.chunk_rest(seq__24229_25540__$1);
var G__25543 = c__4556__auto___25541;
var G__25544 = cljs.core.count(c__4556__auto___25541);
var G__25545 = (0);
seq__24229_25528 = G__25542;
chunk__24230_25529 = G__25543;
count__24231_25530 = G__25544;
i__24232_25531 = G__25545;
continue;
} else {
var vec__24255_25550 = cljs.core.first(seq__24229_25540__$1);
var col_25551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24255_25550,(0),null);
var infos_25552 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24255_25550,(1),null);
encode_cols(infos_25552,source_idx_25514,line_25525,col_25551);


var G__25553 = cljs.core.next(seq__24229_25540__$1);
var G__25554 = null;
var G__25555 = (0);
var G__25556 = (0);
seq__24229_25528 = G__25553;
chunk__24230_25529 = G__25554;
count__24231_25530 = G__25555;
i__24232_25531 = G__25556;
continue;
}
} else {
}
}
break;
}


var G__25557 = seq__24161_25520;
var G__25558 = chunk__24162_25521;
var G__25559 = count__24163_25522;
var G__25560 = (i__24164_25523 + (1));
seq__24161_25520 = G__25557;
chunk__24162_25521 = G__25558;
count__24163_25522 = G__25559;
i__24164_25523 = G__25560;
continue;
} else {
var temp__5753__auto___25561 = cljs.core.seq(seq__24161_25520);
if(temp__5753__auto___25561){
var seq__24161_25562__$1 = temp__5753__auto___25561;
if(cljs.core.chunked_seq_QMARK_(seq__24161_25562__$1)){
var c__4556__auto___25563 = cljs.core.chunk_first(seq__24161_25562__$1);
var G__25564 = cljs.core.chunk_rest(seq__24161_25562__$1);
var G__25565 = c__4556__auto___25563;
var G__25566 = cljs.core.count(c__4556__auto___25563);
var G__25567 = (0);
seq__24161_25520 = G__25564;
chunk__24162_25521 = G__25565;
count__24163_25522 = G__25566;
i__24164_25523 = G__25567;
continue;
} else {
var vec__24262_25569 = cljs.core.first(seq__24161_25562__$1);
var line_25570 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24262_25569,(0),null);
var cols_25571 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24262_25569,(1),null);
var seq__24266_25573 = cljs.core.seq(cols_25571);
var chunk__24268_25574 = null;
var count__24269_25575 = (0);
var i__24270_25576 = (0);
while(true){
if((i__24270_25576 < count__24269_25575)){
var vec__24287_25577 = chunk__24268_25574.cljs$core$IIndexed$_nth$arity$2(null,i__24270_25576);
var col_25578 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24287_25577,(0),null);
var infos_25579 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24287_25577,(1),null);
encode_cols(infos_25579,source_idx_25514,line_25570,col_25578);


var G__25580 = seq__24266_25573;
var G__25581 = chunk__24268_25574;
var G__25582 = count__24269_25575;
var G__25583 = (i__24270_25576 + (1));
seq__24266_25573 = G__25580;
chunk__24268_25574 = G__25581;
count__24269_25575 = G__25582;
i__24270_25576 = G__25583;
continue;
} else {
var temp__5753__auto___25584__$1 = cljs.core.seq(seq__24266_25573);
if(temp__5753__auto___25584__$1){
var seq__24266_25585__$1 = temp__5753__auto___25584__$1;
if(cljs.core.chunked_seq_QMARK_(seq__24266_25585__$1)){
var c__4556__auto___25587 = cljs.core.chunk_first(seq__24266_25585__$1);
var G__25588 = cljs.core.chunk_rest(seq__24266_25585__$1);
var G__25589 = c__4556__auto___25587;
var G__25590 = cljs.core.count(c__4556__auto___25587);
var G__25591 = (0);
seq__24266_25573 = G__25588;
chunk__24268_25574 = G__25589;
count__24269_25575 = G__25590;
i__24270_25576 = G__25591;
continue;
} else {
var vec__24294_25592 = cljs.core.first(seq__24266_25585__$1);
var col_25593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24294_25592,(0),null);
var infos_25594 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24294_25592,(1),null);
encode_cols(infos_25594,source_idx_25514,line_25570,col_25593);


var G__25595 = cljs.core.next(seq__24266_25585__$1);
var G__25596 = null;
var G__25597 = (0);
var G__25598 = (0);
seq__24266_25573 = G__25595;
chunk__24268_25574 = G__25596;
count__24269_25575 = G__25597;
i__24270_25576 = G__25598;
continue;
}
} else {
}
}
break;
}


var G__25599 = cljs.core.next(seq__24161_25562__$1);
var G__25600 = null;
var G__25601 = (0);
var G__25602 = (0);
seq__24161_25520 = G__25599;
chunk__24162_25521 = G__25600;
count__24163_25522 = G__25601;
i__24164_25523 = G__25602;
continue;
}
} else {
}
}
break;
}


var G__25603 = seq__23922_25508;
var G__25604 = chunk__23923_25509;
var G__25605 = count__23924_25510;
var G__25606 = (i__23925_25511 + (1));
seq__23922_25508 = G__25603;
chunk__23923_25509 = G__25604;
count__23924_25510 = G__25605;
i__23925_25511 = G__25606;
continue;
} else {
var temp__5753__auto___25607 = cljs.core.seq(seq__23922_25508);
if(temp__5753__auto___25607){
var seq__23922_25608__$1 = temp__5753__auto___25607;
if(cljs.core.chunked_seq_QMARK_(seq__23922_25608__$1)){
var c__4556__auto___25610 = cljs.core.chunk_first(seq__23922_25608__$1);
var G__25611 = cljs.core.chunk_rest(seq__23922_25608__$1);
var G__25612 = c__4556__auto___25610;
var G__25613 = cljs.core.count(c__4556__auto___25610);
var G__25614 = (0);
seq__23922_25508 = G__25611;
chunk__23923_25509 = G__25612;
count__23924_25510 = G__25613;
i__23925_25511 = G__25614;
continue;
} else {
var vec__24303_25615 = cljs.core.first(seq__23922_25608__$1);
var source_idx_25616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24303_25615,(0),null);
var vec__24306_25617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24303_25615,(1),null);
var __25618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24306_25617,(0),null);
var lines_25619__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24306_25617,(1),null);
var seq__24310_25623 = cljs.core.seq(lines_25619__$1);
var chunk__24311_25624 = null;
var count__24312_25625 = (0);
var i__24313_25626 = (0);
while(true){
if((i__24313_25626 < count__24312_25625)){
var vec__24387_25627 = chunk__24311_25624.cljs$core$IIndexed$_nth$arity$2(null,i__24313_25626);
var line_25628 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24387_25627,(0),null);
var cols_25629 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24387_25627,(1),null);
var seq__24391_25630 = cljs.core.seq(cols_25629);
var chunk__24392_25631 = null;
var count__24393_25632 = (0);
var i__24394_25633 = (0);
while(true){
if((i__24394_25633 < count__24393_25632)){
var vec__24409_25635 = chunk__24392_25631.cljs$core$IIndexed$_nth$arity$2(null,i__24394_25633);
var col_25636 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24409_25635,(0),null);
var infos_25637 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24409_25635,(1),null);
encode_cols(infos_25637,source_idx_25616,line_25628,col_25636);


var G__25641 = seq__24391_25630;
var G__25642 = chunk__24392_25631;
var G__25643 = count__24393_25632;
var G__25644 = (i__24394_25633 + (1));
seq__24391_25630 = G__25641;
chunk__24392_25631 = G__25642;
count__24393_25632 = G__25643;
i__24394_25633 = G__25644;
continue;
} else {
var temp__5753__auto___25645__$1 = cljs.core.seq(seq__24391_25630);
if(temp__5753__auto___25645__$1){
var seq__24391_25646__$1 = temp__5753__auto___25645__$1;
if(cljs.core.chunked_seq_QMARK_(seq__24391_25646__$1)){
var c__4556__auto___25647 = cljs.core.chunk_first(seq__24391_25646__$1);
var G__25648 = cljs.core.chunk_rest(seq__24391_25646__$1);
var G__25649 = c__4556__auto___25647;
var G__25650 = cljs.core.count(c__4556__auto___25647);
var G__25651 = (0);
seq__24391_25630 = G__25648;
chunk__24392_25631 = G__25649;
count__24393_25632 = G__25650;
i__24394_25633 = G__25651;
continue;
} else {
var vec__24416_25653 = cljs.core.first(seq__24391_25646__$1);
var col_25654 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24416_25653,(0),null);
var infos_25655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24416_25653,(1),null);
encode_cols(infos_25655,source_idx_25616,line_25628,col_25654);


var G__25656 = cljs.core.next(seq__24391_25646__$1);
var G__25657 = null;
var G__25658 = (0);
var G__25659 = (0);
seq__24391_25630 = G__25656;
chunk__24392_25631 = G__25657;
count__24393_25632 = G__25658;
i__24394_25633 = G__25659;
continue;
}
} else {
}
}
break;
}


var G__25660 = seq__24310_25623;
var G__25661 = chunk__24311_25624;
var G__25662 = count__24312_25625;
var G__25663 = (i__24313_25626 + (1));
seq__24310_25623 = G__25660;
chunk__24311_25624 = G__25661;
count__24312_25625 = G__25662;
i__24313_25626 = G__25663;
continue;
} else {
var temp__5753__auto___25664__$1 = cljs.core.seq(seq__24310_25623);
if(temp__5753__auto___25664__$1){
var seq__24310_25665__$1 = temp__5753__auto___25664__$1;
if(cljs.core.chunked_seq_QMARK_(seq__24310_25665__$1)){
var c__4556__auto___25666 = cljs.core.chunk_first(seq__24310_25665__$1);
var G__25667 = cljs.core.chunk_rest(seq__24310_25665__$1);
var G__25668 = c__4556__auto___25666;
var G__25669 = cljs.core.count(c__4556__auto___25666);
var G__25670 = (0);
seq__24310_25623 = G__25667;
chunk__24311_25624 = G__25668;
count__24312_25625 = G__25669;
i__24313_25626 = G__25670;
continue;
} else {
var vec__24427_25672 = cljs.core.first(seq__24310_25665__$1);
var line_25673 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24427_25672,(0),null);
var cols_25674 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24427_25672,(1),null);
var seq__24430_25676 = cljs.core.seq(cols_25674);
var chunk__24431_25677 = null;
var count__24432_25678 = (0);
var i__24433_25679 = (0);
while(true){
if((i__24433_25679 < count__24432_25678)){
var vec__24447_25680 = chunk__24431_25677.cljs$core$IIndexed$_nth$arity$2(null,i__24433_25679);
var col_25681 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24447_25680,(0),null);
var infos_25682 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24447_25680,(1),null);
encode_cols(infos_25682,source_idx_25616,line_25673,col_25681);


var G__25685 = seq__24430_25676;
var G__25686 = chunk__24431_25677;
var G__25687 = count__24432_25678;
var G__25688 = (i__24433_25679 + (1));
seq__24430_25676 = G__25685;
chunk__24431_25677 = G__25686;
count__24432_25678 = G__25687;
i__24433_25679 = G__25688;
continue;
} else {
var temp__5753__auto___25692__$2 = cljs.core.seq(seq__24430_25676);
if(temp__5753__auto___25692__$2){
var seq__24430_25694__$1 = temp__5753__auto___25692__$2;
if(cljs.core.chunked_seq_QMARK_(seq__24430_25694__$1)){
var c__4556__auto___25695 = cljs.core.chunk_first(seq__24430_25694__$1);
var G__25696 = cljs.core.chunk_rest(seq__24430_25694__$1);
var G__25697 = c__4556__auto___25695;
var G__25698 = cljs.core.count(c__4556__auto___25695);
var G__25699 = (0);
seq__24430_25676 = G__25696;
chunk__24431_25677 = G__25697;
count__24432_25678 = G__25698;
i__24433_25679 = G__25699;
continue;
} else {
var vec__24454_25700 = cljs.core.first(seq__24430_25694__$1);
var col_25701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24454_25700,(0),null);
var infos_25702 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24454_25700,(1),null);
encode_cols(infos_25702,source_idx_25616,line_25673,col_25701);


var G__25703 = cljs.core.next(seq__24430_25694__$1);
var G__25704 = null;
var G__25705 = (0);
var G__25706 = (0);
seq__24430_25676 = G__25703;
chunk__24431_25677 = G__25704;
count__24432_25678 = G__25705;
i__24433_25679 = G__25706;
continue;
}
} else {
}
}
break;
}


var G__25707 = cljs.core.next(seq__24310_25665__$1);
var G__25708 = null;
var G__25709 = (0);
var G__25710 = (0);
seq__24310_25623 = G__25707;
chunk__24311_25624 = G__25708;
count__24312_25625 = G__25709;
i__24313_25626 = G__25710;
continue;
}
} else {
}
}
break;
}


var G__25711 = cljs.core.next(seq__23922_25608__$1);
var G__25712 = null;
var G__25713 = (0);
var G__25714 = (0);
seq__23922_25508 = G__25711;
chunk__23923_25509 = G__25712;
count__23924_25510 = G__25713;
i__23925_25511 = G__25714;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__24459 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?(function (p1__23909_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__23909_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
}):cljs.core.identity),(function (p1__23910_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__23910_SHARP_,/\//));
}));
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23911_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__23911_SHARP_);
}),cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,cljs.core.deref(lines))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(cljs.core.deref(names__GT_idx)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__24469 = G__24459;
goog.object.set(G__24469,"sourcesContent",cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__24469;
} else {
return G__24459;
}
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq(cljs_map);
var new_lines = cljs.core.sorted_map();
while(true){
if(line_map_seq){
var vec__24476 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24476,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24476,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__24480 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24480,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24480,(1),null);
var G__25720 = cljs.core.next(col_map_seq);
var G__25721 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__24480,col,infos,vec__24476,line,col_map){
return (function (v,p__24488){
var map__24489 = p__24488;
var map__24489__$1 = (((((!((map__24489 == null))))?(((((map__24489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24489.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24489):map__24489);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24489__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24489__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__24480,col,infos,vec__24476,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__25720;
new_cols = G__25721;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__25725 = cljs.core.next(line_map_seq);
var G__25726 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__25725;
new_lines = G__25726;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.sorted_map());
var seq__24497_25727 = cljs.core.seq(reverse_map);
var chunk__24498_25728 = null;
var count__24499_25729 = (0);
var i__24500_25730 = (0);
while(true){
if((i__24500_25730 < count__24499_25729)){
var vec__24997_25731 = chunk__24498_25728.cljs$core$IIndexed$_nth$arity$2(null,i__24500_25730);
var line_25732 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24997_25731,(0),null);
var columns_25733 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24997_25731,(1),null);
var seq__25000_25735 = cljs.core.seq(columns_25733);
var chunk__25001_25736 = null;
var count__25002_25737 = (0);
var i__25003_25738 = (0);
while(true){
if((i__25003_25738 < count__25002_25737)){
var vec__25116_25740 = chunk__25001_25736.cljs$core$IIndexed$_nth$arity$2(null,i__25003_25738);
var column_25741 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25116_25740,(0),null);
var column_info_25742 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25116_25740,(1),null);
var seq__25119_25746 = cljs.core.seq(column_info_25742);
var chunk__25120_25747 = null;
var count__25121_25748 = (0);
var i__25122_25749 = (0);
while(true){
if((i__25122_25749 < count__25121_25748)){
var map__25133_25751 = chunk__25120_25747.cljs$core$IIndexed$_nth$arity$2(null,i__25122_25749);
var map__25133_25752__$1 = (((((!((map__25133_25751 == null))))?(((((map__25133_25751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25133_25751.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25133_25751):map__25133_25751);
var gline_25753 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25133_25752__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_25754 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25133_25752__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_25755 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25133_25752__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_25753], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__25119_25746,chunk__25120_25747,count__25121_25748,i__25122_25749,seq__25000_25735,chunk__25001_25736,count__25002_25737,i__25003_25738,seq__24497_25727,chunk__24498_25728,count__24499_25729,i__24500_25730,map__25133_25751,map__25133_25752__$1,gline_25753,gcol_25754,name_25755,vec__25116_25740,column_25741,column_info_25742,vec__24997_25731,line_25732,columns_25733,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_25754], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_25732,new cljs.core.Keyword(null,"col","col",-1959363084),column_25741,new cljs.core.Keyword(null,"name","name",1843675177),name_25755], null));
});})(seq__25119_25746,chunk__25120_25747,count__25121_25748,i__25122_25749,seq__25000_25735,chunk__25001_25736,count__25002_25737,i__25003_25738,seq__24497_25727,chunk__24498_25728,count__24499_25729,i__24500_25730,map__25133_25751,map__25133_25752__$1,gline_25753,gcol_25754,name_25755,vec__25116_25740,column_25741,column_info_25742,vec__24997_25731,line_25732,columns_25733,inverted))
,cljs.core.sorted_map()));


var G__25780 = seq__25119_25746;
var G__25781 = chunk__25120_25747;
var G__25782 = count__25121_25748;
var G__25783 = (i__25122_25749 + (1));
seq__25119_25746 = G__25780;
chunk__25120_25747 = G__25781;
count__25121_25748 = G__25782;
i__25122_25749 = G__25783;
continue;
} else {
var temp__5753__auto___25784 = cljs.core.seq(seq__25119_25746);
if(temp__5753__auto___25784){
var seq__25119_25785__$1 = temp__5753__auto___25784;
if(cljs.core.chunked_seq_QMARK_(seq__25119_25785__$1)){
var c__4556__auto___25786 = cljs.core.chunk_first(seq__25119_25785__$1);
var G__25788 = cljs.core.chunk_rest(seq__25119_25785__$1);
var G__25789 = c__4556__auto___25786;
var G__25790 = cljs.core.count(c__4556__auto___25786);
var G__25791 = (0);
seq__25119_25746 = G__25788;
chunk__25120_25747 = G__25789;
count__25121_25748 = G__25790;
i__25122_25749 = G__25791;
continue;
} else {
var map__25148_25793 = cljs.core.first(seq__25119_25785__$1);
var map__25148_25794__$1 = (((((!((map__25148_25793 == null))))?(((((map__25148_25793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25148_25793.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25148_25793):map__25148_25793);
var gline_25795 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25148_25794__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_25796 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25148_25794__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_25797 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25148_25794__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_25795], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__25119_25746,chunk__25120_25747,count__25121_25748,i__25122_25749,seq__25000_25735,chunk__25001_25736,count__25002_25737,i__25003_25738,seq__24497_25727,chunk__24498_25728,count__24499_25729,i__24500_25730,map__25148_25793,map__25148_25794__$1,gline_25795,gcol_25796,name_25797,seq__25119_25785__$1,temp__5753__auto___25784,vec__25116_25740,column_25741,column_info_25742,vec__24997_25731,line_25732,columns_25733,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_25796], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_25732,new cljs.core.Keyword(null,"col","col",-1959363084),column_25741,new cljs.core.Keyword(null,"name","name",1843675177),name_25797], null));
});})(seq__25119_25746,chunk__25120_25747,count__25121_25748,i__25122_25749,seq__25000_25735,chunk__25001_25736,count__25002_25737,i__25003_25738,seq__24497_25727,chunk__24498_25728,count__24499_25729,i__24500_25730,map__25148_25793,map__25148_25794__$1,gline_25795,gcol_25796,name_25797,seq__25119_25785__$1,temp__5753__auto___25784,vec__25116_25740,column_25741,column_info_25742,vec__24997_25731,line_25732,columns_25733,inverted))
,cljs.core.sorted_map()));


var G__25820 = cljs.core.next(seq__25119_25785__$1);
var G__25821 = null;
var G__25822 = (0);
var G__25823 = (0);
seq__25119_25746 = G__25820;
chunk__25120_25747 = G__25821;
count__25121_25748 = G__25822;
i__25122_25749 = G__25823;
continue;
}
} else {
}
}
break;
}


var G__25824 = seq__25000_25735;
var G__25825 = chunk__25001_25736;
var G__25826 = count__25002_25737;
var G__25827 = (i__25003_25738 + (1));
seq__25000_25735 = G__25824;
chunk__25001_25736 = G__25825;
count__25002_25737 = G__25826;
i__25003_25738 = G__25827;
continue;
} else {
var temp__5753__auto___25834 = cljs.core.seq(seq__25000_25735);
if(temp__5753__auto___25834){
var seq__25000_25835__$1 = temp__5753__auto___25834;
if(cljs.core.chunked_seq_QMARK_(seq__25000_25835__$1)){
var c__4556__auto___25836 = cljs.core.chunk_first(seq__25000_25835__$1);
var G__25838 = cljs.core.chunk_rest(seq__25000_25835__$1);
var G__25839 = c__4556__auto___25836;
var G__25840 = cljs.core.count(c__4556__auto___25836);
var G__25841 = (0);
seq__25000_25735 = G__25838;
chunk__25001_25736 = G__25839;
count__25002_25737 = G__25840;
i__25003_25738 = G__25841;
continue;
} else {
var vec__25157_25843 = cljs.core.first(seq__25000_25835__$1);
var column_25844 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25157_25843,(0),null);
var column_info_25845 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25157_25843,(1),null);
var seq__25163_25848 = cljs.core.seq(column_info_25845);
var chunk__25164_25849 = null;
var count__25165_25850 = (0);
var i__25166_25851 = (0);
while(true){
if((i__25166_25851 < count__25165_25850)){
var map__25189_25852 = chunk__25164_25849.cljs$core$IIndexed$_nth$arity$2(null,i__25166_25851);
var map__25189_25853__$1 = (((((!((map__25189_25852 == null))))?(((((map__25189_25852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25189_25852.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25189_25852):map__25189_25852);
var gline_25854 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25189_25853__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_25855 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25189_25853__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_25856 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25189_25853__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_25854], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__25163_25848,chunk__25164_25849,count__25165_25850,i__25166_25851,seq__25000_25735,chunk__25001_25736,count__25002_25737,i__25003_25738,seq__24497_25727,chunk__24498_25728,count__24499_25729,i__24500_25730,map__25189_25852,map__25189_25853__$1,gline_25854,gcol_25855,name_25856,vec__25157_25843,column_25844,column_info_25845,seq__25000_25835__$1,temp__5753__auto___25834,vec__24997_25731,line_25732,columns_25733,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_25855], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_25732,new cljs.core.Keyword(null,"col","col",-1959363084),column_25844,new cljs.core.Keyword(null,"name","name",1843675177),name_25856], null));
});})(seq__25163_25848,chunk__25164_25849,count__25165_25850,i__25166_25851,seq__25000_25735,chunk__25001_25736,count__25002_25737,i__25003_25738,seq__24497_25727,chunk__24498_25728,count__24499_25729,i__24500_25730,map__25189_25852,map__25189_25853__$1,gline_25854,gcol_25855,name_25856,vec__25157_25843,column_25844,column_info_25845,seq__25000_25835__$1,temp__5753__auto___25834,vec__24997_25731,line_25732,columns_25733,inverted))
,cljs.core.sorted_map()));


var G__25871 = seq__25163_25848;
var G__25872 = chunk__25164_25849;
var G__25873 = count__25165_25850;
var G__25874 = (i__25166_25851 + (1));
seq__25163_25848 = G__25871;
chunk__25164_25849 = G__25872;
count__25165_25850 = G__25873;
i__25166_25851 = G__25874;
continue;
} else {
var temp__5753__auto___25875__$1 = cljs.core.seq(seq__25163_25848);
if(temp__5753__auto___25875__$1){
var seq__25163_25877__$1 = temp__5753__auto___25875__$1;
if(cljs.core.chunked_seq_QMARK_(seq__25163_25877__$1)){
var c__4556__auto___25878 = cljs.core.chunk_first(seq__25163_25877__$1);
var G__25881 = cljs.core.chunk_rest(seq__25163_25877__$1);
var G__25882 = c__4556__auto___25878;
var G__25883 = cljs.core.count(c__4556__auto___25878);
var G__25884 = (0);
seq__25163_25848 = G__25881;
chunk__25164_25849 = G__25882;
count__25165_25850 = G__25883;
i__25166_25851 = G__25884;
continue;
} else {
var map__25214_25886 = cljs.core.first(seq__25163_25877__$1);
var map__25214_25887__$1 = (((((!((map__25214_25886 == null))))?(((((map__25214_25886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25214_25886.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25214_25886):map__25214_25886);
var gline_25888 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25214_25887__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_25889 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25214_25887__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_25890 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25214_25887__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_25888], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__25163_25848,chunk__25164_25849,count__25165_25850,i__25166_25851,seq__25000_25735,chunk__25001_25736,count__25002_25737,i__25003_25738,seq__24497_25727,chunk__24498_25728,count__24499_25729,i__24500_25730,map__25214_25886,map__25214_25887__$1,gline_25888,gcol_25889,name_25890,seq__25163_25877__$1,temp__5753__auto___25875__$1,vec__25157_25843,column_25844,column_info_25845,seq__25000_25835__$1,temp__5753__auto___25834,vec__24997_25731,line_25732,columns_25733,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_25889], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_25732,new cljs.core.Keyword(null,"col","col",-1959363084),column_25844,new cljs.core.Keyword(null,"name","name",1843675177),name_25890], null));
});})(seq__25163_25848,chunk__25164_25849,count__25165_25850,i__25166_25851,seq__25000_25735,chunk__25001_25736,count__25002_25737,i__25003_25738,seq__24497_25727,chunk__24498_25728,count__24499_25729,i__24500_25730,map__25214_25886,map__25214_25887__$1,gline_25888,gcol_25889,name_25890,seq__25163_25877__$1,temp__5753__auto___25875__$1,vec__25157_25843,column_25844,column_info_25845,seq__25000_25835__$1,temp__5753__auto___25834,vec__24997_25731,line_25732,columns_25733,inverted))
,cljs.core.sorted_map()));


var G__25905 = cljs.core.next(seq__25163_25877__$1);
var G__25906 = null;
var G__25907 = (0);
var G__25908 = (0);
seq__25163_25848 = G__25905;
chunk__25164_25849 = G__25906;
count__25165_25850 = G__25907;
i__25166_25851 = G__25908;
continue;
}
} else {
}
}
break;
}


var G__25910 = cljs.core.next(seq__25000_25835__$1);
var G__25911 = null;
var G__25912 = (0);
var G__25913 = (0);
seq__25000_25735 = G__25910;
chunk__25001_25736 = G__25911;
count__25002_25737 = G__25912;
i__25003_25738 = G__25913;
continue;
}
} else {
}
}
break;
}


var G__25914 = seq__24497_25727;
var G__25915 = chunk__24498_25728;
var G__25916 = count__24499_25729;
var G__25917 = (i__24500_25730 + (1));
seq__24497_25727 = G__25914;
chunk__24498_25728 = G__25915;
count__24499_25729 = G__25916;
i__24500_25730 = G__25917;
continue;
} else {
var temp__5753__auto___25919 = cljs.core.seq(seq__24497_25727);
if(temp__5753__auto___25919){
var seq__24497_25922__$1 = temp__5753__auto___25919;
if(cljs.core.chunked_seq_QMARK_(seq__24497_25922__$1)){
var c__4556__auto___25923 = cljs.core.chunk_first(seq__24497_25922__$1);
var G__25926 = cljs.core.chunk_rest(seq__24497_25922__$1);
var G__25927 = c__4556__auto___25923;
var G__25928 = cljs.core.count(c__4556__auto___25923);
var G__25929 = (0);
seq__24497_25727 = G__25926;
chunk__24498_25728 = G__25927;
count__24499_25729 = G__25928;
i__24500_25730 = G__25929;
continue;
} else {
var vec__25237_25931 = cljs.core.first(seq__24497_25922__$1);
var line_25932 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25237_25931,(0),null);
var columns_25933 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25237_25931,(1),null);
var seq__25241_25934 = cljs.core.seq(columns_25933);
var chunk__25244_25935 = null;
var count__25245_25936 = (0);
var i__25246_25937 = (0);
while(true){
if((i__25246_25937 < count__25245_25936)){
var vec__25360_25938 = chunk__25244_25935.cljs$core$IIndexed$_nth$arity$2(null,i__25246_25937);
var column_25939 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25360_25938,(0),null);
var column_info_25940 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25360_25938,(1),null);
var seq__25363_25941 = cljs.core.seq(column_info_25940);
var chunk__25364_25942 = null;
var count__25365_25943 = (0);
var i__25366_25944 = (0);
while(true){
if((i__25366_25944 < count__25365_25943)){
var map__25393_25948 = chunk__25364_25942.cljs$core$IIndexed$_nth$arity$2(null,i__25366_25944);
var map__25393_25949__$1 = (((((!((map__25393_25948 == null))))?(((((map__25393_25948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25393_25948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25393_25948):map__25393_25948);
var gline_25950 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25393_25949__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_25951 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25393_25949__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_25952 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25393_25949__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_25950], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__25363_25941,chunk__25364_25942,count__25365_25943,i__25366_25944,seq__25241_25934,chunk__25244_25935,count__25245_25936,i__25246_25937,seq__24497_25727,chunk__24498_25728,count__24499_25729,i__24500_25730,map__25393_25948,map__25393_25949__$1,gline_25950,gcol_25951,name_25952,vec__25360_25938,column_25939,column_info_25940,vec__25237_25931,line_25932,columns_25933,seq__24497_25922__$1,temp__5753__auto___25919,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_25951], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_25932,new cljs.core.Keyword(null,"col","col",-1959363084),column_25939,new cljs.core.Keyword(null,"name","name",1843675177),name_25952], null));
});})(seq__25363_25941,chunk__25364_25942,count__25365_25943,i__25366_25944,seq__25241_25934,chunk__25244_25935,count__25245_25936,i__25246_25937,seq__24497_25727,chunk__24498_25728,count__24499_25729,i__24500_25730,map__25393_25948,map__25393_25949__$1,gline_25950,gcol_25951,name_25952,vec__25360_25938,column_25939,column_info_25940,vec__25237_25931,line_25932,columns_25933,seq__24497_25922__$1,temp__5753__auto___25919,inverted))
,cljs.core.sorted_map()));


var G__25960 = seq__25363_25941;
var G__25961 = chunk__25364_25942;
var G__25962 = count__25365_25943;
var G__25963 = (i__25366_25944 + (1));
seq__25363_25941 = G__25960;
chunk__25364_25942 = G__25961;
count__25365_25943 = G__25962;
i__25366_25944 = G__25963;
continue;
} else {
var temp__5753__auto___25964__$1 = cljs.core.seq(seq__25363_25941);
if(temp__5753__auto___25964__$1){
var seq__25363_25965__$1 = temp__5753__auto___25964__$1;
if(cljs.core.chunked_seq_QMARK_(seq__25363_25965__$1)){
var c__4556__auto___25967 = cljs.core.chunk_first(seq__25363_25965__$1);
var G__25969 = cljs.core.chunk_rest(seq__25363_25965__$1);
var G__25970 = c__4556__auto___25967;
var G__25971 = cljs.core.count(c__4556__auto___25967);
var G__25972 = (0);
seq__25363_25941 = G__25969;
chunk__25364_25942 = G__25970;
count__25365_25943 = G__25971;
i__25366_25944 = G__25972;
continue;
} else {
var map__25395_25975 = cljs.core.first(seq__25363_25965__$1);
var map__25395_25976__$1 = (((((!((map__25395_25975 == null))))?(((((map__25395_25975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25395_25975.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25395_25975):map__25395_25975);
var gline_25977 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25395_25976__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_25978 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25395_25976__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_25979 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25395_25976__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_25977], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__25363_25941,chunk__25364_25942,count__25365_25943,i__25366_25944,seq__25241_25934,chunk__25244_25935,count__25245_25936,i__25246_25937,seq__24497_25727,chunk__24498_25728,count__24499_25729,i__24500_25730,map__25395_25975,map__25395_25976__$1,gline_25977,gcol_25978,name_25979,seq__25363_25965__$1,temp__5753__auto___25964__$1,vec__25360_25938,column_25939,column_info_25940,vec__25237_25931,line_25932,columns_25933,seq__24497_25922__$1,temp__5753__auto___25919,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_25978], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_25932,new cljs.core.Keyword(null,"col","col",-1959363084),column_25939,new cljs.core.Keyword(null,"name","name",1843675177),name_25979], null));
});})(seq__25363_25941,chunk__25364_25942,count__25365_25943,i__25366_25944,seq__25241_25934,chunk__25244_25935,count__25245_25936,i__25246_25937,seq__24497_25727,chunk__24498_25728,count__24499_25729,i__24500_25730,map__25395_25975,map__25395_25976__$1,gline_25977,gcol_25978,name_25979,seq__25363_25965__$1,temp__5753__auto___25964__$1,vec__25360_25938,column_25939,column_info_25940,vec__25237_25931,line_25932,columns_25933,seq__24497_25922__$1,temp__5753__auto___25919,inverted))
,cljs.core.sorted_map()));


var G__25990 = cljs.core.next(seq__25363_25965__$1);
var G__25991 = null;
var G__25992 = (0);
var G__25993 = (0);
seq__25363_25941 = G__25990;
chunk__25364_25942 = G__25991;
count__25365_25943 = G__25992;
i__25366_25944 = G__25993;
continue;
}
} else {
}
}
break;
}


var G__25994 = seq__25241_25934;
var G__25995 = chunk__25244_25935;
var G__25996 = count__25245_25936;
var G__25997 = (i__25246_25937 + (1));
seq__25241_25934 = G__25994;
chunk__25244_25935 = G__25995;
count__25245_25936 = G__25996;
i__25246_25937 = G__25997;
continue;
} else {
var temp__5753__auto___25998__$1 = cljs.core.seq(seq__25241_25934);
if(temp__5753__auto___25998__$1){
var seq__25241_25999__$1 = temp__5753__auto___25998__$1;
if(cljs.core.chunked_seq_QMARK_(seq__25241_25999__$1)){
var c__4556__auto___26000 = cljs.core.chunk_first(seq__25241_25999__$1);
var G__26001 = cljs.core.chunk_rest(seq__25241_25999__$1);
var G__26002 = c__4556__auto___26000;
var G__26003 = cljs.core.count(c__4556__auto___26000);
var G__26004 = (0);
seq__25241_25934 = G__26001;
chunk__25244_25935 = G__26002;
count__25245_25936 = G__26003;
i__25246_25937 = G__26004;
continue;
} else {
var vec__25398_26006 = cljs.core.first(seq__25241_25999__$1);
var column_26007 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25398_26006,(0),null);
var column_info_26008 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25398_26006,(1),null);
var seq__25401_26012 = cljs.core.seq(column_info_26008);
var chunk__25402_26013 = null;
var count__25403_26014 = (0);
var i__25404_26015 = (0);
while(true){
if((i__25404_26015 < count__25403_26014)){
var map__25416_26016 = chunk__25402_26013.cljs$core$IIndexed$_nth$arity$2(null,i__25404_26015);
var map__25416_26017__$1 = (((((!((map__25416_26016 == null))))?(((((map__25416_26016.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25416_26016.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25416_26016):map__25416_26016);
var gline_26018 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25416_26017__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_26019 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25416_26017__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_26020 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25416_26017__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_26018], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__25401_26012,chunk__25402_26013,count__25403_26014,i__25404_26015,seq__25241_25934,chunk__25244_25935,count__25245_25936,i__25246_25937,seq__24497_25727,chunk__24498_25728,count__24499_25729,i__24500_25730,map__25416_26016,map__25416_26017__$1,gline_26018,gcol_26019,name_26020,vec__25398_26006,column_26007,column_info_26008,seq__25241_25999__$1,temp__5753__auto___25998__$1,vec__25237_25931,line_25932,columns_25933,seq__24497_25922__$1,temp__5753__auto___25919,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_26019], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_25932,new cljs.core.Keyword(null,"col","col",-1959363084),column_26007,new cljs.core.Keyword(null,"name","name",1843675177),name_26020], null));
});})(seq__25401_26012,chunk__25402_26013,count__25403_26014,i__25404_26015,seq__25241_25934,chunk__25244_25935,count__25245_25936,i__25246_25937,seq__24497_25727,chunk__24498_25728,count__24499_25729,i__24500_25730,map__25416_26016,map__25416_26017__$1,gline_26018,gcol_26019,name_26020,vec__25398_26006,column_26007,column_info_26008,seq__25241_25999__$1,temp__5753__auto___25998__$1,vec__25237_25931,line_25932,columns_25933,seq__24497_25922__$1,temp__5753__auto___25919,inverted))
,cljs.core.sorted_map()));


var G__26027 = seq__25401_26012;
var G__26028 = chunk__25402_26013;
var G__26029 = count__25403_26014;
var G__26030 = (i__25404_26015 + (1));
seq__25401_26012 = G__26027;
chunk__25402_26013 = G__26028;
count__25403_26014 = G__26029;
i__25404_26015 = G__26030;
continue;
} else {
var temp__5753__auto___26031__$2 = cljs.core.seq(seq__25401_26012);
if(temp__5753__auto___26031__$2){
var seq__25401_26032__$1 = temp__5753__auto___26031__$2;
if(cljs.core.chunked_seq_QMARK_(seq__25401_26032__$1)){
var c__4556__auto___26033 = cljs.core.chunk_first(seq__25401_26032__$1);
var G__26035 = cljs.core.chunk_rest(seq__25401_26032__$1);
var G__26036 = c__4556__auto___26033;
var G__26037 = cljs.core.count(c__4556__auto___26033);
var G__26038 = (0);
seq__25401_26012 = G__26035;
chunk__25402_26013 = G__26036;
count__25403_26014 = G__26037;
i__25404_26015 = G__26038;
continue;
} else {
var map__25422_26041 = cljs.core.first(seq__25401_26032__$1);
var map__25422_26042__$1 = (((((!((map__25422_26041 == null))))?(((((map__25422_26041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25422_26041.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25422_26041):map__25422_26041);
var gline_26043 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25422_26042__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_26044 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25422_26042__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_26045 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25422_26042__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_26043], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__25401_26012,chunk__25402_26013,count__25403_26014,i__25404_26015,seq__25241_25934,chunk__25244_25935,count__25245_25936,i__25246_25937,seq__24497_25727,chunk__24498_25728,count__24499_25729,i__24500_25730,map__25422_26041,map__25422_26042__$1,gline_26043,gcol_26044,name_26045,seq__25401_26032__$1,temp__5753__auto___26031__$2,vec__25398_26006,column_26007,column_info_26008,seq__25241_25999__$1,temp__5753__auto___25998__$1,vec__25237_25931,line_25932,columns_25933,seq__24497_25922__$1,temp__5753__auto___25919,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_26044], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_25932,new cljs.core.Keyword(null,"col","col",-1959363084),column_26007,new cljs.core.Keyword(null,"name","name",1843675177),name_26045], null));
});})(seq__25401_26012,chunk__25402_26013,count__25403_26014,i__25404_26015,seq__25241_25934,chunk__25244_25935,count__25245_25936,i__25246_25937,seq__24497_25727,chunk__24498_25728,count__24499_25729,i__24500_25730,map__25422_26041,map__25422_26042__$1,gline_26043,gcol_26044,name_26045,seq__25401_26032__$1,temp__5753__auto___26031__$2,vec__25398_26006,column_26007,column_info_26008,seq__25241_25999__$1,temp__5753__auto___25998__$1,vec__25237_25931,line_25932,columns_25933,seq__24497_25922__$1,temp__5753__auto___25919,inverted))
,cljs.core.sorted_map()));


var G__26051 = cljs.core.next(seq__25401_26032__$1);
var G__26052 = null;
var G__26053 = (0);
var G__26054 = (0);
seq__25401_26012 = G__26051;
chunk__25402_26013 = G__26052;
count__25403_26014 = G__26053;
i__25404_26015 = G__26054;
continue;
}
} else {
}
}
break;
}


var G__26056 = cljs.core.next(seq__25241_25999__$1);
var G__26058 = null;
var G__26059 = (0);
var G__26060 = (0);
seq__25241_25934 = G__26056;
chunk__25244_25935 = G__26058;
count__25245_25936 = G__26059;
i__25246_25937 = G__26060;
continue;
}
} else {
}
}
break;
}


var G__26061 = cljs.core.next(seq__24497_25922__$1);
var G__26062 = null;
var G__26063 = (0);
var G__26064 = (0);
seq__24497_25727 = G__26061;
chunk__24498_25728 = G__26062;
count__24499_25729 = G__26063;
i__24500_25730 = G__26064;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(inverted);
});
