goog.provide('cljs.source_map');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__47205){
var vec__47206 = p__47205;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47206,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47206,(1),null);
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
var vec__47215 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47215,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47215,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47215,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47215,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47215,(4),null);
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
var vec__47221 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47221,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47221,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47221,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47221,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47221,(4),null);
var vec__47224 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47224,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47224,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47224,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47224,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47224,(4),null);
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
var map__47233 = segmap;
var map__47233__$1 = (((((!((map__47233 == null))))?(((((map__47233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47233.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47233):map__47233);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47233__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47233__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47233__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47233__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47233__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var G__47247 = arguments.length;
switch (G__47247) {
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
var vec__47262 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__48782 = cljs.core.next(segs__$1);
var G__48783 = nrelseg;
var G__48784 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__48782;
relseg__$1 = G__48783;
result__$1 = G__48784;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47262,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47262,(1),null);
var G__48788 = (gline + (1));
var G__48789 = cljs.core.next(lines__$1);
var G__48790 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__48791 = result__$1;
gline = G__48788;
lines__$1 = G__48789;
relseg = G__48790;
result = G__48791;
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
var map__47267 = segmap;
var map__47267__$1 = (((((!((map__47267 == null))))?(((((map__47267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47267.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47267):map__47267);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47267__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47267__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47267__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47267__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47267__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (p1__47265_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__47265_SHARP_,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__47274 = arguments.length;
switch (G__47274) {
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
var vec__47284 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__48800 = cljs.core.next(segs__$1);
var G__48801 = nrelseg;
var G__48802 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__48800;
relseg__$1 = G__48801;
result__$1 = G__48802;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47284,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47284,(1),null);
var G__48803 = (gline + (1));
var G__48804 = cljs.core.next(lines__$1);
var G__48805 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__48806 = result__$1;
gline = G__48803;
lines__$1 = G__48804;
relseg = G__48805;
result = G__48806;
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__47292){
var vec__47293 = p__47292;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47293,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47293,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47293,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47293,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47293,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
}));

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (cols__$1,p__47297){
var vec__47298 = p__47297;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47298,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47298,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47298,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47298,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47298,(4),null);
var seg = vec__47298;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,cljs.core.deref(relseg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__47304){
var vec__47305 = p__47304;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47305,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47305,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47305,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47305,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47305,(4),null);
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
var seq__47314 = cljs.core.seq(infos);
var chunk__47315 = null;
var count__47316 = (0);
var i__47317 = (0);
while(true){
if((i__47317 < count__47316)){
var info = chunk__47315.cljs$core$IIndexed$_nth$arity$2(null,i__47317);
var segv_48821 = info__GT_segv(info,source_idx,line,col);
var gline_48822 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_48823 = cljs.core.count(cljs.core.deref(lines));
if((gline_48822 > (lc_48823 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__47314,chunk__47315,count__47316,i__47317,segv_48821,gline_48822,lc_48823,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_48822 - (lc_48823 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_48821], null));
});})(seq__47314,chunk__47315,count__47316,i__47317,segv_48821,gline_48822,lc_48823,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__47314,chunk__47315,count__47316,i__47317,segv_48821,gline_48822,lc_48823,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_48822], null),cljs.core.conj,segv_48821);
});})(seq__47314,chunk__47315,count__47316,i__47317,segv_48821,gline_48822,lc_48823,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__48825 = seq__47314;
var G__48826 = chunk__47315;
var G__48827 = count__47316;
var G__48828 = (i__47317 + (1));
seq__47314 = G__48825;
chunk__47315 = G__48826;
count__47316 = G__48827;
i__47317 = G__48828;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47314);
if(temp__5753__auto__){
var seq__47314__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47314__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__47314__$1);
var G__48832 = cljs.core.chunk_rest(seq__47314__$1);
var G__48833 = c__4556__auto__;
var G__48834 = cljs.core.count(c__4556__auto__);
var G__48835 = (0);
seq__47314 = G__48832;
chunk__47315 = G__48833;
count__47316 = G__48834;
i__47317 = G__48835;
continue;
} else {
var info = cljs.core.first(seq__47314__$1);
var segv_48836 = info__GT_segv(info,source_idx,line,col);
var gline_48837 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_48838 = cljs.core.count(cljs.core.deref(lines));
if((gline_48837 > (lc_48838 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__47314,chunk__47315,count__47316,i__47317,segv_48836,gline_48837,lc_48838,info,seq__47314__$1,temp__5753__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_48837 - (lc_48838 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_48836], null));
});})(seq__47314,chunk__47315,count__47316,i__47317,segv_48836,gline_48837,lc_48838,info,seq__47314__$1,temp__5753__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__47314,chunk__47315,count__47316,i__47317,segv_48836,gline_48837,lc_48838,info,seq__47314__$1,temp__5753__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_48837], null),cljs.core.conj,segv_48836);
});})(seq__47314,chunk__47315,count__47316,i__47317,segv_48836,gline_48837,lc_48838,info,seq__47314__$1,temp__5753__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__48848 = cljs.core.next(seq__47314__$1);
var G__48849 = null;
var G__48850 = (0);
var G__48851 = (0);
seq__47314 = G__48848;
chunk__47315 = G__48849;
count__47316 = G__48850;
i__47317 = G__48851;
continue;
}
} else {
return null;
}
}
break;
}
});
var seq__47327_48852 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__47328_48853 = null;
var count__47329_48854 = (0);
var i__47330_48855 = (0);
while(true){
if((i__47330_48855 < count__47329_48854)){
var vec__47537_48857 = chunk__47328_48853.cljs$core$IIndexed$_nth$arity$2(null,i__47330_48855);
var source_idx_48858 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47537_48857,(0),null);
var vec__47540_48859 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47537_48857,(1),null);
var __48860 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47540_48859,(0),null);
var lines_48861__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47540_48859,(1),null);
var seq__47543_48862 = cljs.core.seq(lines_48861__$1);
var chunk__47544_48863 = null;
var count__47545_48864 = (0);
var i__47546_48865 = (0);
while(true){
if((i__47546_48865 < count__47545_48864)){
var vec__47609_48866 = chunk__47544_48863.cljs$core$IIndexed$_nth$arity$2(null,i__47546_48865);
var line_48867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47609_48866,(0),null);
var cols_48868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47609_48866,(1),null);
var seq__47614_48869 = cljs.core.seq(cols_48868);
var chunk__47615_48870 = null;
var count__47616_48871 = (0);
var i__47617_48872 = (0);
while(true){
if((i__47617_48872 < count__47616_48871)){
var vec__47625_48873 = chunk__47615_48870.cljs$core$IIndexed$_nth$arity$2(null,i__47617_48872);
var col_48874 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47625_48873,(0),null);
var infos_48875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47625_48873,(1),null);
encode_cols(infos_48875,source_idx_48858,line_48867,col_48874);


var G__48877 = seq__47614_48869;
var G__48878 = chunk__47615_48870;
var G__48879 = count__47616_48871;
var G__48880 = (i__47617_48872 + (1));
seq__47614_48869 = G__48877;
chunk__47615_48870 = G__48878;
count__47616_48871 = G__48879;
i__47617_48872 = G__48880;
continue;
} else {
var temp__5753__auto___48881 = cljs.core.seq(seq__47614_48869);
if(temp__5753__auto___48881){
var seq__47614_48883__$1 = temp__5753__auto___48881;
if(cljs.core.chunked_seq_QMARK_(seq__47614_48883__$1)){
var c__4556__auto___48884 = cljs.core.chunk_first(seq__47614_48883__$1);
var G__48885 = cljs.core.chunk_rest(seq__47614_48883__$1);
var G__48886 = c__4556__auto___48884;
var G__48887 = cljs.core.count(c__4556__auto___48884);
var G__48888 = (0);
seq__47614_48869 = G__48885;
chunk__47615_48870 = G__48886;
count__47616_48871 = G__48887;
i__47617_48872 = G__48888;
continue;
} else {
var vec__47633_48889 = cljs.core.first(seq__47614_48883__$1);
var col_48890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47633_48889,(0),null);
var infos_48891 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47633_48889,(1),null);
encode_cols(infos_48891,source_idx_48858,line_48867,col_48890);


var G__48892 = cljs.core.next(seq__47614_48883__$1);
var G__48893 = null;
var G__48894 = (0);
var G__48895 = (0);
seq__47614_48869 = G__48892;
chunk__47615_48870 = G__48893;
count__47616_48871 = G__48894;
i__47617_48872 = G__48895;
continue;
}
} else {
}
}
break;
}


var G__48896 = seq__47543_48862;
var G__48897 = chunk__47544_48863;
var G__48898 = count__47545_48864;
var G__48899 = (i__47546_48865 + (1));
seq__47543_48862 = G__48896;
chunk__47544_48863 = G__48897;
count__47545_48864 = G__48898;
i__47546_48865 = G__48899;
continue;
} else {
var temp__5753__auto___48900 = cljs.core.seq(seq__47543_48862);
if(temp__5753__auto___48900){
var seq__47543_48901__$1 = temp__5753__auto___48900;
if(cljs.core.chunked_seq_QMARK_(seq__47543_48901__$1)){
var c__4556__auto___48903 = cljs.core.chunk_first(seq__47543_48901__$1);
var G__48904 = cljs.core.chunk_rest(seq__47543_48901__$1);
var G__48905 = c__4556__auto___48903;
var G__48906 = cljs.core.count(c__4556__auto___48903);
var G__48907 = (0);
seq__47543_48862 = G__48904;
chunk__47544_48863 = G__48905;
count__47545_48864 = G__48906;
i__47546_48865 = G__48907;
continue;
} else {
var vec__47637_48908 = cljs.core.first(seq__47543_48901__$1);
var line_48909 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47637_48908,(0),null);
var cols_48910 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47637_48908,(1),null);
var seq__47642_48911 = cljs.core.seq(cols_48910);
var chunk__47643_48912 = null;
var count__47644_48913 = (0);
var i__47645_48914 = (0);
while(true){
if((i__47645_48914 < count__47644_48913)){
var vec__47661_48916 = chunk__47643_48912.cljs$core$IIndexed$_nth$arity$2(null,i__47645_48914);
var col_48917 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47661_48916,(0),null);
var infos_48918 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47661_48916,(1),null);
encode_cols(infos_48918,source_idx_48858,line_48909,col_48917);


var G__48920 = seq__47642_48911;
var G__48921 = chunk__47643_48912;
var G__48922 = count__47644_48913;
var G__48923 = (i__47645_48914 + (1));
seq__47642_48911 = G__48920;
chunk__47643_48912 = G__48921;
count__47644_48913 = G__48922;
i__47645_48914 = G__48923;
continue;
} else {
var temp__5753__auto___48924__$1 = cljs.core.seq(seq__47642_48911);
if(temp__5753__auto___48924__$1){
var seq__47642_48925__$1 = temp__5753__auto___48924__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47642_48925__$1)){
var c__4556__auto___48926 = cljs.core.chunk_first(seq__47642_48925__$1);
var G__48927 = cljs.core.chunk_rest(seq__47642_48925__$1);
var G__48928 = c__4556__auto___48926;
var G__48929 = cljs.core.count(c__4556__auto___48926);
var G__48930 = (0);
seq__47642_48911 = G__48927;
chunk__47643_48912 = G__48928;
count__47644_48913 = G__48929;
i__47645_48914 = G__48930;
continue;
} else {
var vec__47665_48931 = cljs.core.first(seq__47642_48925__$1);
var col_48932 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47665_48931,(0),null);
var infos_48933 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47665_48931,(1),null);
encode_cols(infos_48933,source_idx_48858,line_48909,col_48932);


var G__48934 = cljs.core.next(seq__47642_48925__$1);
var G__48935 = null;
var G__48936 = (0);
var G__48937 = (0);
seq__47642_48911 = G__48934;
chunk__47643_48912 = G__48935;
count__47644_48913 = G__48936;
i__47645_48914 = G__48937;
continue;
}
} else {
}
}
break;
}


var G__48938 = cljs.core.next(seq__47543_48901__$1);
var G__48939 = null;
var G__48940 = (0);
var G__48941 = (0);
seq__47543_48862 = G__48938;
chunk__47544_48863 = G__48939;
count__47545_48864 = G__48940;
i__47546_48865 = G__48941;
continue;
}
} else {
}
}
break;
}


var G__48942 = seq__47327_48852;
var G__48943 = chunk__47328_48853;
var G__48944 = count__47329_48854;
var G__48945 = (i__47330_48855 + (1));
seq__47327_48852 = G__48942;
chunk__47328_48853 = G__48943;
count__47329_48854 = G__48944;
i__47330_48855 = G__48945;
continue;
} else {
var temp__5753__auto___48946 = cljs.core.seq(seq__47327_48852);
if(temp__5753__auto___48946){
var seq__47327_48947__$1 = temp__5753__auto___48946;
if(cljs.core.chunked_seq_QMARK_(seq__47327_48947__$1)){
var c__4556__auto___48949 = cljs.core.chunk_first(seq__47327_48947__$1);
var G__48951 = cljs.core.chunk_rest(seq__47327_48947__$1);
var G__48952 = c__4556__auto___48949;
var G__48953 = cljs.core.count(c__4556__auto___48949);
var G__48954 = (0);
seq__47327_48852 = G__48951;
chunk__47328_48853 = G__48952;
count__47329_48854 = G__48953;
i__47330_48855 = G__48954;
continue;
} else {
var vec__47668_48955 = cljs.core.first(seq__47327_48947__$1);
var source_idx_48956 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47668_48955,(0),null);
var vec__47671_48957 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47668_48955,(1),null);
var __48958 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47671_48957,(0),null);
var lines_48959__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47671_48957,(1),null);
var seq__47674_48970 = cljs.core.seq(lines_48959__$1);
var chunk__47675_48971 = null;
var count__47676_48972 = (0);
var i__47677_48973 = (0);
while(true){
if((i__47677_48973 < count__47676_48972)){
var vec__47742_48981 = chunk__47675_48971.cljs$core$IIndexed$_nth$arity$2(null,i__47677_48973);
var line_48982 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47742_48981,(0),null);
var cols_48983 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47742_48981,(1),null);
var seq__47747_48984 = cljs.core.seq(cols_48983);
var chunk__47748_48985 = null;
var count__47749_48986 = (0);
var i__47750_48987 = (0);
while(true){
if((i__47750_48987 < count__47749_48986)){
var vec__47764_48991 = chunk__47748_48985.cljs$core$IIndexed$_nth$arity$2(null,i__47750_48987);
var col_48992 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47764_48991,(0),null);
var infos_48993 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47764_48991,(1),null);
encode_cols(infos_48993,source_idx_48956,line_48982,col_48992);


var G__48999 = seq__47747_48984;
var G__49000 = chunk__47748_48985;
var G__49001 = count__47749_48986;
var G__49002 = (i__47750_48987 + (1));
seq__47747_48984 = G__48999;
chunk__47748_48985 = G__49000;
count__47749_48986 = G__49001;
i__47750_48987 = G__49002;
continue;
} else {
var temp__5753__auto___49003__$1 = cljs.core.seq(seq__47747_48984);
if(temp__5753__auto___49003__$1){
var seq__47747_49004__$1 = temp__5753__auto___49003__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47747_49004__$1)){
var c__4556__auto___49005 = cljs.core.chunk_first(seq__47747_49004__$1);
var G__49006 = cljs.core.chunk_rest(seq__47747_49004__$1);
var G__49007 = c__4556__auto___49005;
var G__49008 = cljs.core.count(c__4556__auto___49005);
var G__49009 = (0);
seq__47747_48984 = G__49006;
chunk__47748_48985 = G__49007;
count__47749_48986 = G__49008;
i__47750_48987 = G__49009;
continue;
} else {
var vec__47771_49010 = cljs.core.first(seq__47747_49004__$1);
var col_49011 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47771_49010,(0),null);
var infos_49012 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47771_49010,(1),null);
encode_cols(infos_49012,source_idx_48956,line_48982,col_49011);


var G__49013 = cljs.core.next(seq__47747_49004__$1);
var G__49014 = null;
var G__49015 = (0);
var G__49016 = (0);
seq__47747_48984 = G__49013;
chunk__47748_48985 = G__49014;
count__47749_48986 = G__49015;
i__47750_48987 = G__49016;
continue;
}
} else {
}
}
break;
}


var G__49018 = seq__47674_48970;
var G__49019 = chunk__47675_48971;
var G__49020 = count__47676_48972;
var G__49021 = (i__47677_48973 + (1));
seq__47674_48970 = G__49018;
chunk__47675_48971 = G__49019;
count__47676_48972 = G__49020;
i__47677_48973 = G__49021;
continue;
} else {
var temp__5753__auto___49022__$1 = cljs.core.seq(seq__47674_48970);
if(temp__5753__auto___49022__$1){
var seq__47674_49024__$1 = temp__5753__auto___49022__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47674_49024__$1)){
var c__4556__auto___49028 = cljs.core.chunk_first(seq__47674_49024__$1);
var G__49034 = cljs.core.chunk_rest(seq__47674_49024__$1);
var G__49035 = c__4556__auto___49028;
var G__49036 = cljs.core.count(c__4556__auto___49028);
var G__49037 = (0);
seq__47674_48970 = G__49034;
chunk__47675_48971 = G__49035;
count__47676_48972 = G__49036;
i__47677_48973 = G__49037;
continue;
} else {
var vec__47778_49046 = cljs.core.first(seq__47674_49024__$1);
var line_49047 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47778_49046,(0),null);
var cols_49048 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47778_49046,(1),null);
var seq__47783_49049 = cljs.core.seq(cols_49048);
var chunk__47784_49050 = null;
var count__47785_49051 = (0);
var i__47786_49052 = (0);
while(true){
if((i__47786_49052 < count__47785_49051)){
var vec__47801_49053 = chunk__47784_49050.cljs$core$IIndexed$_nth$arity$2(null,i__47786_49052);
var col_49054 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47801_49053,(0),null);
var infos_49055 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47801_49053,(1),null);
encode_cols(infos_49055,source_idx_48956,line_49047,col_49054);


var G__49062 = seq__47783_49049;
var G__49063 = chunk__47784_49050;
var G__49064 = count__47785_49051;
var G__49065 = (i__47786_49052 + (1));
seq__47783_49049 = G__49062;
chunk__47784_49050 = G__49063;
count__47785_49051 = G__49064;
i__47786_49052 = G__49065;
continue;
} else {
var temp__5753__auto___49066__$2 = cljs.core.seq(seq__47783_49049);
if(temp__5753__auto___49066__$2){
var seq__47783_49067__$1 = temp__5753__auto___49066__$2;
if(cljs.core.chunked_seq_QMARK_(seq__47783_49067__$1)){
var c__4556__auto___49068 = cljs.core.chunk_first(seq__47783_49067__$1);
var G__49069 = cljs.core.chunk_rest(seq__47783_49067__$1);
var G__49070 = c__4556__auto___49068;
var G__49071 = cljs.core.count(c__4556__auto___49068);
var G__49072 = (0);
seq__47783_49049 = G__49069;
chunk__47784_49050 = G__49070;
count__47785_49051 = G__49071;
i__47786_49052 = G__49072;
continue;
} else {
var vec__47809_49073 = cljs.core.first(seq__47783_49067__$1);
var col_49074 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47809_49073,(0),null);
var infos_49075 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47809_49073,(1),null);
encode_cols(infos_49075,source_idx_48956,line_49047,col_49074);


var G__49076 = cljs.core.next(seq__47783_49067__$1);
var G__49077 = null;
var G__49078 = (0);
var G__49079 = (0);
seq__47783_49049 = G__49076;
chunk__47784_49050 = G__49077;
count__47785_49051 = G__49078;
i__47786_49052 = G__49079;
continue;
}
} else {
}
}
break;
}


var G__49080 = cljs.core.next(seq__47674_49024__$1);
var G__49081 = null;
var G__49082 = (0);
var G__49083 = (0);
seq__47674_48970 = G__49080;
chunk__47675_48971 = G__49081;
count__47676_48972 = G__49082;
i__47677_48973 = G__49083;
continue;
}
} else {
}
}
break;
}


var G__49084 = cljs.core.next(seq__47327_48947__$1);
var G__49085 = null;
var G__49086 = (0);
var G__49087 = (0);
seq__47327_48852 = G__49084;
chunk__47328_48853 = G__49085;
count__47329_48854 = G__49086;
i__47330_48855 = G__49087;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__47818 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?(function (p1__47310_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__47310_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
}):cljs.core.identity),(function (p1__47311_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__47311_SHARP_,/\//));
}));
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__47312_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__47312_SHARP_);
}),cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,cljs.core.deref(lines))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(cljs.core.deref(names__GT_idx)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__47826 = G__47818;
goog.object.set(G__47826,"sourcesContent",cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__47826;
} else {
return G__47818;
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
var vec__47833 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47833,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47833,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__47836 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47836,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47836,(1),null);
var G__49092 = cljs.core.next(col_map_seq);
var G__49093 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__47836,col,infos,vec__47833,line,col_map){
return (function (v,p__47843){
var map__47845 = p__47843;
var map__47845__$1 = (((((!((map__47845 == null))))?(((((map__47845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47845.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47845):map__47845);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47845__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47845__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__47836,col,infos,vec__47833,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__49092;
new_cols = G__49093;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__49100 = cljs.core.next(line_map_seq);
var G__49101 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__49100;
new_lines = G__49101;
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
var seq__47850_49106 = cljs.core.seq(reverse_map);
var chunk__47851_49107 = null;
var count__47852_49108 = (0);
var i__47853_49109 = (0);
while(true){
if((i__47853_49109 < count__47852_49108)){
var vec__48340_49110 = chunk__47851_49107.cljs$core$IIndexed$_nth$arity$2(null,i__47853_49109);
var line_49111 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48340_49110,(0),null);
var columns_49112 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48340_49110,(1),null);
var seq__48345_49113 = cljs.core.seq(columns_49112);
var chunk__48346_49114 = null;
var count__48347_49115 = (0);
var i__48348_49116 = (0);
while(true){
if((i__48348_49116 < count__48347_49115)){
var vec__48464_49117 = chunk__48346_49114.cljs$core$IIndexed$_nth$arity$2(null,i__48348_49116);
var column_49118 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48464_49117,(0),null);
var column_info_49119 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48464_49117,(1),null);
var seq__48467_49121 = cljs.core.seq(column_info_49119);
var chunk__48468_49122 = null;
var count__48469_49123 = (0);
var i__48470_49124 = (0);
while(true){
if((i__48470_49124 < count__48469_49123)){
var map__48494_49125 = chunk__48468_49122.cljs$core$IIndexed$_nth$arity$2(null,i__48470_49124);
var map__48494_49126__$1 = (((((!((map__48494_49125 == null))))?(((((map__48494_49125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48494_49125.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48494_49125):map__48494_49125);
var gline_49127 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48494_49126__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_49128 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48494_49126__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_49129 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48494_49126__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_49127], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__48467_49121,chunk__48468_49122,count__48469_49123,i__48470_49124,seq__48345_49113,chunk__48346_49114,count__48347_49115,i__48348_49116,seq__47850_49106,chunk__47851_49107,count__47852_49108,i__47853_49109,map__48494_49125,map__48494_49126__$1,gline_49127,gcol_49128,name_49129,vec__48464_49117,column_49118,column_info_49119,vec__48340_49110,line_49111,columns_49112,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_49128], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_49111,new cljs.core.Keyword(null,"col","col",-1959363084),column_49118,new cljs.core.Keyword(null,"name","name",1843675177),name_49129], null));
});})(seq__48467_49121,chunk__48468_49122,count__48469_49123,i__48470_49124,seq__48345_49113,chunk__48346_49114,count__48347_49115,i__48348_49116,seq__47850_49106,chunk__47851_49107,count__47852_49108,i__47853_49109,map__48494_49125,map__48494_49126__$1,gline_49127,gcol_49128,name_49129,vec__48464_49117,column_49118,column_info_49119,vec__48340_49110,line_49111,columns_49112,inverted))
,cljs.core.sorted_map()));


var G__49133 = seq__48467_49121;
var G__49134 = chunk__48468_49122;
var G__49135 = count__48469_49123;
var G__49136 = (i__48470_49124 + (1));
seq__48467_49121 = G__49133;
chunk__48468_49122 = G__49134;
count__48469_49123 = G__49135;
i__48470_49124 = G__49136;
continue;
} else {
var temp__5753__auto___49137 = cljs.core.seq(seq__48467_49121);
if(temp__5753__auto___49137){
var seq__48467_49138__$1 = temp__5753__auto___49137;
if(cljs.core.chunked_seq_QMARK_(seq__48467_49138__$1)){
var c__4556__auto___49139 = cljs.core.chunk_first(seq__48467_49138__$1);
var G__49140 = cljs.core.chunk_rest(seq__48467_49138__$1);
var G__49141 = c__4556__auto___49139;
var G__49142 = cljs.core.count(c__4556__auto___49139);
var G__49143 = (0);
seq__48467_49121 = G__49140;
chunk__48468_49122 = G__49141;
count__48469_49123 = G__49142;
i__48470_49124 = G__49143;
continue;
} else {
var map__48507_49144 = cljs.core.first(seq__48467_49138__$1);
var map__48507_49145__$1 = (((((!((map__48507_49144 == null))))?(((((map__48507_49144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48507_49144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48507_49144):map__48507_49144);
var gline_49146 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48507_49145__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_49147 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48507_49145__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_49148 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48507_49145__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_49146], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__48467_49121,chunk__48468_49122,count__48469_49123,i__48470_49124,seq__48345_49113,chunk__48346_49114,count__48347_49115,i__48348_49116,seq__47850_49106,chunk__47851_49107,count__47852_49108,i__47853_49109,map__48507_49144,map__48507_49145__$1,gline_49146,gcol_49147,name_49148,seq__48467_49138__$1,temp__5753__auto___49137,vec__48464_49117,column_49118,column_info_49119,vec__48340_49110,line_49111,columns_49112,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_49147], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_49111,new cljs.core.Keyword(null,"col","col",-1959363084),column_49118,new cljs.core.Keyword(null,"name","name",1843675177),name_49148], null));
});})(seq__48467_49121,chunk__48468_49122,count__48469_49123,i__48470_49124,seq__48345_49113,chunk__48346_49114,count__48347_49115,i__48348_49116,seq__47850_49106,chunk__47851_49107,count__47852_49108,i__47853_49109,map__48507_49144,map__48507_49145__$1,gline_49146,gcol_49147,name_49148,seq__48467_49138__$1,temp__5753__auto___49137,vec__48464_49117,column_49118,column_info_49119,vec__48340_49110,line_49111,columns_49112,inverted))
,cljs.core.sorted_map()));


var G__49149 = cljs.core.next(seq__48467_49138__$1);
var G__49150 = null;
var G__49151 = (0);
var G__49152 = (0);
seq__48467_49121 = G__49149;
chunk__48468_49122 = G__49150;
count__48469_49123 = G__49151;
i__48470_49124 = G__49152;
continue;
}
} else {
}
}
break;
}


var G__49153 = seq__48345_49113;
var G__49154 = chunk__48346_49114;
var G__49155 = count__48347_49115;
var G__49156 = (i__48348_49116 + (1));
seq__48345_49113 = G__49153;
chunk__48346_49114 = G__49154;
count__48347_49115 = G__49155;
i__48348_49116 = G__49156;
continue;
} else {
var temp__5753__auto___49157 = cljs.core.seq(seq__48345_49113);
if(temp__5753__auto___49157){
var seq__48345_49158__$1 = temp__5753__auto___49157;
if(cljs.core.chunked_seq_QMARK_(seq__48345_49158__$1)){
var c__4556__auto___49159 = cljs.core.chunk_first(seq__48345_49158__$1);
var G__49160 = cljs.core.chunk_rest(seq__48345_49158__$1);
var G__49161 = c__4556__auto___49159;
var G__49162 = cljs.core.count(c__4556__auto___49159);
var G__49163 = (0);
seq__48345_49113 = G__49160;
chunk__48346_49114 = G__49161;
count__48347_49115 = G__49162;
i__48348_49116 = G__49163;
continue;
} else {
var vec__48522_49164 = cljs.core.first(seq__48345_49158__$1);
var column_49165 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48522_49164,(0),null);
var column_info_49166 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48522_49164,(1),null);
var seq__48525_49169 = cljs.core.seq(column_info_49166);
var chunk__48526_49170 = null;
var count__48527_49171 = (0);
var i__48528_49172 = (0);
while(true){
if((i__48528_49172 < count__48527_49171)){
var map__48573_49174 = chunk__48526_49170.cljs$core$IIndexed$_nth$arity$2(null,i__48528_49172);
var map__48573_49175__$1 = (((((!((map__48573_49174 == null))))?(((((map__48573_49174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48573_49174.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48573_49174):map__48573_49174);
var gline_49176 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48573_49175__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_49177 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48573_49175__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_49178 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48573_49175__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_49176], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__48525_49169,chunk__48526_49170,count__48527_49171,i__48528_49172,seq__48345_49113,chunk__48346_49114,count__48347_49115,i__48348_49116,seq__47850_49106,chunk__47851_49107,count__47852_49108,i__47853_49109,map__48573_49174,map__48573_49175__$1,gline_49176,gcol_49177,name_49178,vec__48522_49164,column_49165,column_info_49166,seq__48345_49158__$1,temp__5753__auto___49157,vec__48340_49110,line_49111,columns_49112,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_49177], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_49111,new cljs.core.Keyword(null,"col","col",-1959363084),column_49165,new cljs.core.Keyword(null,"name","name",1843675177),name_49178], null));
});})(seq__48525_49169,chunk__48526_49170,count__48527_49171,i__48528_49172,seq__48345_49113,chunk__48346_49114,count__48347_49115,i__48348_49116,seq__47850_49106,chunk__47851_49107,count__47852_49108,i__47853_49109,map__48573_49174,map__48573_49175__$1,gline_49176,gcol_49177,name_49178,vec__48522_49164,column_49165,column_info_49166,seq__48345_49158__$1,temp__5753__auto___49157,vec__48340_49110,line_49111,columns_49112,inverted))
,cljs.core.sorted_map()));


var G__49184 = seq__48525_49169;
var G__49185 = chunk__48526_49170;
var G__49186 = count__48527_49171;
var G__49187 = (i__48528_49172 + (1));
seq__48525_49169 = G__49184;
chunk__48526_49170 = G__49185;
count__48527_49171 = G__49186;
i__48528_49172 = G__49187;
continue;
} else {
var temp__5753__auto___49191__$1 = cljs.core.seq(seq__48525_49169);
if(temp__5753__auto___49191__$1){
var seq__48525_49195__$1 = temp__5753__auto___49191__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48525_49195__$1)){
var c__4556__auto___49198 = cljs.core.chunk_first(seq__48525_49195__$1);
var G__49199 = cljs.core.chunk_rest(seq__48525_49195__$1);
var G__49200 = c__4556__auto___49198;
var G__49201 = cljs.core.count(c__4556__auto___49198);
var G__49202 = (0);
seq__48525_49169 = G__49199;
chunk__48526_49170 = G__49200;
count__48527_49171 = G__49201;
i__48528_49172 = G__49202;
continue;
} else {
var map__48585_49203 = cljs.core.first(seq__48525_49195__$1);
var map__48585_49204__$1 = (((((!((map__48585_49203 == null))))?(((((map__48585_49203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48585_49203.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48585_49203):map__48585_49203);
var gline_49205 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48585_49204__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_49206 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48585_49204__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_49207 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48585_49204__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_49205], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__48525_49169,chunk__48526_49170,count__48527_49171,i__48528_49172,seq__48345_49113,chunk__48346_49114,count__48347_49115,i__48348_49116,seq__47850_49106,chunk__47851_49107,count__47852_49108,i__47853_49109,map__48585_49203,map__48585_49204__$1,gline_49205,gcol_49206,name_49207,seq__48525_49195__$1,temp__5753__auto___49191__$1,vec__48522_49164,column_49165,column_info_49166,seq__48345_49158__$1,temp__5753__auto___49157,vec__48340_49110,line_49111,columns_49112,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_49206], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_49111,new cljs.core.Keyword(null,"col","col",-1959363084),column_49165,new cljs.core.Keyword(null,"name","name",1843675177),name_49207], null));
});})(seq__48525_49169,chunk__48526_49170,count__48527_49171,i__48528_49172,seq__48345_49113,chunk__48346_49114,count__48347_49115,i__48348_49116,seq__47850_49106,chunk__47851_49107,count__47852_49108,i__47853_49109,map__48585_49203,map__48585_49204__$1,gline_49205,gcol_49206,name_49207,seq__48525_49195__$1,temp__5753__auto___49191__$1,vec__48522_49164,column_49165,column_info_49166,seq__48345_49158__$1,temp__5753__auto___49157,vec__48340_49110,line_49111,columns_49112,inverted))
,cljs.core.sorted_map()));


var G__49210 = cljs.core.next(seq__48525_49195__$1);
var G__49211 = null;
var G__49212 = (0);
var G__49213 = (0);
seq__48525_49169 = G__49210;
chunk__48526_49170 = G__49211;
count__48527_49171 = G__49212;
i__48528_49172 = G__49213;
continue;
}
} else {
}
}
break;
}


var G__49214 = cljs.core.next(seq__48345_49158__$1);
var G__49215 = null;
var G__49216 = (0);
var G__49217 = (0);
seq__48345_49113 = G__49214;
chunk__48346_49114 = G__49215;
count__48347_49115 = G__49216;
i__48348_49116 = G__49217;
continue;
}
} else {
}
}
break;
}


var G__49218 = seq__47850_49106;
var G__49219 = chunk__47851_49107;
var G__49220 = count__47852_49108;
var G__49221 = (i__47853_49109 + (1));
seq__47850_49106 = G__49218;
chunk__47851_49107 = G__49219;
count__47852_49108 = G__49220;
i__47853_49109 = G__49221;
continue;
} else {
var temp__5753__auto___49225 = cljs.core.seq(seq__47850_49106);
if(temp__5753__auto___49225){
var seq__47850_49227__$1 = temp__5753__auto___49225;
if(cljs.core.chunked_seq_QMARK_(seq__47850_49227__$1)){
var c__4556__auto___49228 = cljs.core.chunk_first(seq__47850_49227__$1);
var G__49229 = cljs.core.chunk_rest(seq__47850_49227__$1);
var G__49230 = c__4556__auto___49228;
var G__49231 = cljs.core.count(c__4556__auto___49228);
var G__49232 = (0);
seq__47850_49106 = G__49229;
chunk__47851_49107 = G__49230;
count__47852_49108 = G__49231;
i__47853_49109 = G__49232;
continue;
} else {
var vec__48590_49234 = cljs.core.first(seq__47850_49227__$1);
var line_49235 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48590_49234,(0),null);
var columns_49236 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48590_49234,(1),null);
var seq__48593_49237 = cljs.core.seq(columns_49236);
var chunk__48594_49238 = null;
var count__48595_49239 = (0);
var i__48596_49240 = (0);
while(true){
if((i__48596_49240 < count__48595_49239)){
var vec__48703_49241 = chunk__48594_49238.cljs$core$IIndexed$_nth$arity$2(null,i__48596_49240);
var column_49242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48703_49241,(0),null);
var column_info_49243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48703_49241,(1),null);
var seq__48706_49244 = cljs.core.seq(column_info_49243);
var chunk__48707_49245 = null;
var count__48708_49246 = (0);
var i__48709_49247 = (0);
while(true){
if((i__48709_49247 < count__48708_49246)){
var map__48730_49251 = chunk__48707_49245.cljs$core$IIndexed$_nth$arity$2(null,i__48709_49247);
var map__48730_49252__$1 = (((((!((map__48730_49251 == null))))?(((((map__48730_49251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48730_49251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48730_49251):map__48730_49251);
var gline_49253 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48730_49252__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_49254 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48730_49252__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_49256 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48730_49252__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_49253], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__48706_49244,chunk__48707_49245,count__48708_49246,i__48709_49247,seq__48593_49237,chunk__48594_49238,count__48595_49239,i__48596_49240,seq__47850_49106,chunk__47851_49107,count__47852_49108,i__47853_49109,map__48730_49251,map__48730_49252__$1,gline_49253,gcol_49254,name_49256,vec__48703_49241,column_49242,column_info_49243,vec__48590_49234,line_49235,columns_49236,seq__47850_49227__$1,temp__5753__auto___49225,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_49254], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_49235,new cljs.core.Keyword(null,"col","col",-1959363084),column_49242,new cljs.core.Keyword(null,"name","name",1843675177),name_49256], null));
});})(seq__48706_49244,chunk__48707_49245,count__48708_49246,i__48709_49247,seq__48593_49237,chunk__48594_49238,count__48595_49239,i__48596_49240,seq__47850_49106,chunk__47851_49107,count__47852_49108,i__47853_49109,map__48730_49251,map__48730_49252__$1,gline_49253,gcol_49254,name_49256,vec__48703_49241,column_49242,column_info_49243,vec__48590_49234,line_49235,columns_49236,seq__47850_49227__$1,temp__5753__auto___49225,inverted))
,cljs.core.sorted_map()));


var G__49275 = seq__48706_49244;
var G__49276 = chunk__48707_49245;
var G__49277 = count__48708_49246;
var G__49278 = (i__48709_49247 + (1));
seq__48706_49244 = G__49275;
chunk__48707_49245 = G__49276;
count__48708_49246 = G__49277;
i__48709_49247 = G__49278;
continue;
} else {
var temp__5753__auto___49279__$1 = cljs.core.seq(seq__48706_49244);
if(temp__5753__auto___49279__$1){
var seq__48706_49280__$1 = temp__5753__auto___49279__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48706_49280__$1)){
var c__4556__auto___49281 = cljs.core.chunk_first(seq__48706_49280__$1);
var G__49282 = cljs.core.chunk_rest(seq__48706_49280__$1);
var G__49283 = c__4556__auto___49281;
var G__49284 = cljs.core.count(c__4556__auto___49281);
var G__49285 = (0);
seq__48706_49244 = G__49282;
chunk__48707_49245 = G__49283;
count__48708_49246 = G__49284;
i__48709_49247 = G__49285;
continue;
} else {
var map__48732_49286 = cljs.core.first(seq__48706_49280__$1);
var map__48732_49287__$1 = (((((!((map__48732_49286 == null))))?(((((map__48732_49286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48732_49286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48732_49286):map__48732_49286);
var gline_49288 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48732_49287__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_49289 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48732_49287__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_49290 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48732_49287__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_49288], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__48706_49244,chunk__48707_49245,count__48708_49246,i__48709_49247,seq__48593_49237,chunk__48594_49238,count__48595_49239,i__48596_49240,seq__47850_49106,chunk__47851_49107,count__47852_49108,i__47853_49109,map__48732_49286,map__48732_49287__$1,gline_49288,gcol_49289,name_49290,seq__48706_49280__$1,temp__5753__auto___49279__$1,vec__48703_49241,column_49242,column_info_49243,vec__48590_49234,line_49235,columns_49236,seq__47850_49227__$1,temp__5753__auto___49225,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_49289], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_49235,new cljs.core.Keyword(null,"col","col",-1959363084),column_49242,new cljs.core.Keyword(null,"name","name",1843675177),name_49290], null));
});})(seq__48706_49244,chunk__48707_49245,count__48708_49246,i__48709_49247,seq__48593_49237,chunk__48594_49238,count__48595_49239,i__48596_49240,seq__47850_49106,chunk__47851_49107,count__47852_49108,i__47853_49109,map__48732_49286,map__48732_49287__$1,gline_49288,gcol_49289,name_49290,seq__48706_49280__$1,temp__5753__auto___49279__$1,vec__48703_49241,column_49242,column_info_49243,vec__48590_49234,line_49235,columns_49236,seq__47850_49227__$1,temp__5753__auto___49225,inverted))
,cljs.core.sorted_map()));


var G__49294 = cljs.core.next(seq__48706_49280__$1);
var G__49295 = null;
var G__49296 = (0);
var G__49297 = (0);
seq__48706_49244 = G__49294;
chunk__48707_49245 = G__49295;
count__48708_49246 = G__49296;
i__48709_49247 = G__49297;
continue;
}
} else {
}
}
break;
}


var G__49298 = seq__48593_49237;
var G__49299 = chunk__48594_49238;
var G__49300 = count__48595_49239;
var G__49301 = (i__48596_49240 + (1));
seq__48593_49237 = G__49298;
chunk__48594_49238 = G__49299;
count__48595_49239 = G__49300;
i__48596_49240 = G__49301;
continue;
} else {
var temp__5753__auto___49302__$1 = cljs.core.seq(seq__48593_49237);
if(temp__5753__auto___49302__$1){
var seq__48593_49303__$1 = temp__5753__auto___49302__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48593_49303__$1)){
var c__4556__auto___49304 = cljs.core.chunk_first(seq__48593_49303__$1);
var G__49305 = cljs.core.chunk_rest(seq__48593_49303__$1);
var G__49306 = c__4556__auto___49304;
var G__49307 = cljs.core.count(c__4556__auto___49304);
var G__49308 = (0);
seq__48593_49237 = G__49305;
chunk__48594_49238 = G__49306;
count__48595_49239 = G__49307;
i__48596_49240 = G__49308;
continue;
} else {
var vec__48735_49309 = cljs.core.first(seq__48593_49303__$1);
var column_49310 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48735_49309,(0),null);
var column_info_49311 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48735_49309,(1),null);
var seq__48738_49312 = cljs.core.seq(column_info_49311);
var chunk__48739_49313 = null;
var count__48740_49314 = (0);
var i__48741_49315 = (0);
while(true){
if((i__48741_49315 < count__48740_49314)){
var map__48758_49316 = chunk__48739_49313.cljs$core$IIndexed$_nth$arity$2(null,i__48741_49315);
var map__48758_49317__$1 = (((((!((map__48758_49316 == null))))?(((((map__48758_49316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48758_49316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48758_49316):map__48758_49316);
var gline_49318 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48758_49317__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_49320 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48758_49317__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_49321 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48758_49317__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_49318], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__48738_49312,chunk__48739_49313,count__48740_49314,i__48741_49315,seq__48593_49237,chunk__48594_49238,count__48595_49239,i__48596_49240,seq__47850_49106,chunk__47851_49107,count__47852_49108,i__47853_49109,map__48758_49316,map__48758_49317__$1,gline_49318,gcol_49320,name_49321,vec__48735_49309,column_49310,column_info_49311,seq__48593_49303__$1,temp__5753__auto___49302__$1,vec__48590_49234,line_49235,columns_49236,seq__47850_49227__$1,temp__5753__auto___49225,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_49320], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_49235,new cljs.core.Keyword(null,"col","col",-1959363084),column_49310,new cljs.core.Keyword(null,"name","name",1843675177),name_49321], null));
});})(seq__48738_49312,chunk__48739_49313,count__48740_49314,i__48741_49315,seq__48593_49237,chunk__48594_49238,count__48595_49239,i__48596_49240,seq__47850_49106,chunk__47851_49107,count__47852_49108,i__47853_49109,map__48758_49316,map__48758_49317__$1,gline_49318,gcol_49320,name_49321,vec__48735_49309,column_49310,column_info_49311,seq__48593_49303__$1,temp__5753__auto___49302__$1,vec__48590_49234,line_49235,columns_49236,seq__47850_49227__$1,temp__5753__auto___49225,inverted))
,cljs.core.sorted_map()));


var G__49326 = seq__48738_49312;
var G__49327 = chunk__48739_49313;
var G__49328 = count__48740_49314;
var G__49329 = (i__48741_49315 + (1));
seq__48738_49312 = G__49326;
chunk__48739_49313 = G__49327;
count__48740_49314 = G__49328;
i__48741_49315 = G__49329;
continue;
} else {
var temp__5753__auto___49330__$2 = cljs.core.seq(seq__48738_49312);
if(temp__5753__auto___49330__$2){
var seq__48738_49331__$1 = temp__5753__auto___49330__$2;
if(cljs.core.chunked_seq_QMARK_(seq__48738_49331__$1)){
var c__4556__auto___49333 = cljs.core.chunk_first(seq__48738_49331__$1);
var G__49334 = cljs.core.chunk_rest(seq__48738_49331__$1);
var G__49335 = c__4556__auto___49333;
var G__49336 = cljs.core.count(c__4556__auto___49333);
var G__49337 = (0);
seq__48738_49312 = G__49334;
chunk__48739_49313 = G__49335;
count__48740_49314 = G__49336;
i__48741_49315 = G__49337;
continue;
} else {
var map__48762_49338 = cljs.core.first(seq__48738_49331__$1);
var map__48762_49339__$1 = (((((!((map__48762_49338 == null))))?(((((map__48762_49338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48762_49338.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48762_49338):map__48762_49338);
var gline_49340 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48762_49339__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_49341 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48762_49339__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_49342 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48762_49339__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_49340], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__48738_49312,chunk__48739_49313,count__48740_49314,i__48741_49315,seq__48593_49237,chunk__48594_49238,count__48595_49239,i__48596_49240,seq__47850_49106,chunk__47851_49107,count__47852_49108,i__47853_49109,map__48762_49338,map__48762_49339__$1,gline_49340,gcol_49341,name_49342,seq__48738_49331__$1,temp__5753__auto___49330__$2,vec__48735_49309,column_49310,column_info_49311,seq__48593_49303__$1,temp__5753__auto___49302__$1,vec__48590_49234,line_49235,columns_49236,seq__47850_49227__$1,temp__5753__auto___49225,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_49341], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_49235,new cljs.core.Keyword(null,"col","col",-1959363084),column_49310,new cljs.core.Keyword(null,"name","name",1843675177),name_49342], null));
});})(seq__48738_49312,chunk__48739_49313,count__48740_49314,i__48741_49315,seq__48593_49237,chunk__48594_49238,count__48595_49239,i__48596_49240,seq__47850_49106,chunk__47851_49107,count__47852_49108,i__47853_49109,map__48762_49338,map__48762_49339__$1,gline_49340,gcol_49341,name_49342,seq__48738_49331__$1,temp__5753__auto___49330__$2,vec__48735_49309,column_49310,column_info_49311,seq__48593_49303__$1,temp__5753__auto___49302__$1,vec__48590_49234,line_49235,columns_49236,seq__47850_49227__$1,temp__5753__auto___49225,inverted))
,cljs.core.sorted_map()));


var G__49349 = cljs.core.next(seq__48738_49331__$1);
var G__49350 = null;
var G__49351 = (0);
var G__49352 = (0);
seq__48738_49312 = G__49349;
chunk__48739_49313 = G__49350;
count__48740_49314 = G__49351;
i__48741_49315 = G__49352;
continue;
}
} else {
}
}
break;
}


var G__49355 = cljs.core.next(seq__48593_49303__$1);
var G__49356 = null;
var G__49357 = (0);
var G__49358 = (0);
seq__48593_49237 = G__49355;
chunk__48594_49238 = G__49356;
count__48595_49239 = G__49357;
i__48596_49240 = G__49358;
continue;
}
} else {
}
}
break;
}


var G__49361 = cljs.core.next(seq__47850_49227__$1);
var G__49362 = null;
var G__49363 = (0);
var G__49364 = (0);
seq__47850_49106 = G__49361;
chunk__47851_49107 = G__49362;
count__47852_49108 = G__49363;
i__47853_49109 = G__49364;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(inverted);
});
