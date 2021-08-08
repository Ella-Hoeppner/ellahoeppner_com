goog.provide('cljs.source_map');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__62112){
var vec__62115 = p__62112;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62115,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62115,(1),null);
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
var vec__62129 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62129,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62129,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62129,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62129,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62129,(4),null);
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
var vec__62182 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62182,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62182,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62182,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62182,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62182,(4),null);
var vec__62189 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62189,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62189,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62189,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62189,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62189,(4),null);
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
var map__62251 = segmap;
var map__62251__$1 = (((((!((map__62251 == null))))?(((((map__62251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62251):map__62251);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62251__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62251__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62251__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62251__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62251__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var G__62320 = arguments.length;
switch (G__62320) {
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
var vec__62380 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__64958 = cljs.core.next(segs__$1);
var G__64959 = nrelseg;
var G__64960 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__64958;
relseg__$1 = G__64959;
result__$1 = G__64960;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62380,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62380,(1),null);
var G__64966 = (gline + (1));
var G__64967 = cljs.core.next(lines__$1);
var G__64968 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__64969 = result__$1;
gline = G__64966;
lines__$1 = G__64967;
relseg = G__64968;
result = G__64969;
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
var map__62400 = segmap;
var map__62400__$1 = (((((!((map__62400 == null))))?(((((map__62400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62400.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62400):map__62400);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62400__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62400__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62400__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62400__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62400__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (p1__62391_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__62391_SHARP_,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__62438 = arguments.length;
switch (G__62438) {
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
var vec__62467 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__65019 = cljs.core.next(segs__$1);
var G__65020 = nrelseg;
var G__65021 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__65019;
relseg__$1 = G__65020;
result__$1 = G__65021;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62467,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62467,(1),null);
var G__65023 = (gline + (1));
var G__65024 = cljs.core.next(lines__$1);
var G__65025 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__65026 = result__$1;
gline = G__65023;
lines__$1 = G__65024;
relseg = G__65025;
result = G__65026;
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__62474){
var vec__62477 = p__62474;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62477,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62477,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62477,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62477,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62477,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
}));

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (cols__$1,p__62507){
var vec__62508 = p__62507;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62508,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62508,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62508,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62508,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62508,(4),null);
var seg = vec__62508;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,cljs.core.deref(relseg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__62515){
var vec__62516 = p__62515;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62516,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62516,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62516,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62516,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62516,(4),null);
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
var seq__62535 = cljs.core.seq(infos);
var chunk__62536 = null;
var count__62537 = (0);
var i__62538 = (0);
while(true){
if((i__62538 < count__62537)){
var info = chunk__62536.cljs$core$IIndexed$_nth$arity$2(null,i__62538);
var segv_65057 = info__GT_segv(info,source_idx,line,col);
var gline_65058 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_65059 = cljs.core.count(cljs.core.deref(lines));
if((gline_65058 > (lc_65059 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__62535,chunk__62536,count__62537,i__62538,segv_65057,gline_65058,lc_65059,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_65058 - (lc_65059 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_65057], null));
});})(seq__62535,chunk__62536,count__62537,i__62538,segv_65057,gline_65058,lc_65059,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__62535,chunk__62536,count__62537,i__62538,segv_65057,gline_65058,lc_65059,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_65058], null),cljs.core.conj,segv_65057);
});})(seq__62535,chunk__62536,count__62537,i__62538,segv_65057,gline_65058,lc_65059,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__65063 = seq__62535;
var G__65064 = chunk__62536;
var G__65065 = count__62537;
var G__65066 = (i__62538 + (1));
seq__62535 = G__65063;
chunk__62536 = G__65064;
count__62537 = G__65065;
i__62538 = G__65066;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__62535);
if(temp__5753__auto__){
var seq__62535__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62535__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__62535__$1);
var G__65068 = cljs.core.chunk_rest(seq__62535__$1);
var G__65069 = c__4556__auto__;
var G__65070 = cljs.core.count(c__4556__auto__);
var G__65071 = (0);
seq__62535 = G__65068;
chunk__62536 = G__65069;
count__62537 = G__65070;
i__62538 = G__65071;
continue;
} else {
var info = cljs.core.first(seq__62535__$1);
var segv_65072 = info__GT_segv(info,source_idx,line,col);
var gline_65073 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_65074 = cljs.core.count(cljs.core.deref(lines));
if((gline_65073 > (lc_65074 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__62535,chunk__62536,count__62537,i__62538,segv_65072,gline_65073,lc_65074,info,seq__62535__$1,temp__5753__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_65073 - (lc_65074 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_65072], null));
});})(seq__62535,chunk__62536,count__62537,i__62538,segv_65072,gline_65073,lc_65074,info,seq__62535__$1,temp__5753__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__62535,chunk__62536,count__62537,i__62538,segv_65072,gline_65073,lc_65074,info,seq__62535__$1,temp__5753__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_65073], null),cljs.core.conj,segv_65072);
});})(seq__62535,chunk__62536,count__62537,i__62538,segv_65072,gline_65073,lc_65074,info,seq__62535__$1,temp__5753__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__65086 = cljs.core.next(seq__62535__$1);
var G__65087 = null;
var G__65089 = (0);
var G__65090 = (0);
seq__62535 = G__65086;
chunk__62536 = G__65087;
count__62537 = G__65089;
i__62538 = G__65090;
continue;
}
} else {
return null;
}
}
break;
}
});
var seq__62608_65091 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__62610_65092 = null;
var count__62611_65093 = (0);
var i__62612_65094 = (0);
while(true){
if((i__62612_65094 < count__62611_65093)){
var vec__63118_65095 = chunk__62610_65092.cljs$core$IIndexed$_nth$arity$2(null,i__62612_65094);
var source_idx_65096 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63118_65095,(0),null);
var vec__63121_65097 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63118_65095,(1),null);
var __65098 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63121_65097,(0),null);
var lines_65099__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63121_65097,(1),null);
var seq__63125_65101 = cljs.core.seq(lines_65099__$1);
var chunk__63126_65102 = null;
var count__63127_65103 = (0);
var i__63128_65104 = (0);
while(true){
if((i__63128_65104 < count__63127_65103)){
var vec__63232_65105 = chunk__63126_65102.cljs$core$IIndexed$_nth$arity$2(null,i__63128_65104);
var line_65106 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63232_65105,(0),null);
var cols_65107 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63232_65105,(1),null);
var seq__63235_65108 = cljs.core.seq(cols_65107);
var chunk__63236_65109 = null;
var count__63237_65110 = (0);
var i__63238_65111 = (0);
while(true){
if((i__63238_65111 < count__63237_65110)){
var vec__63251_65112 = chunk__63236_65109.cljs$core$IIndexed$_nth$arity$2(null,i__63238_65111);
var col_65113 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63251_65112,(0),null);
var infos_65114 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63251_65112,(1),null);
encode_cols(infos_65114,source_idx_65096,line_65106,col_65113);


var G__65126 = seq__63235_65108;
var G__65127 = chunk__63236_65109;
var G__65128 = count__63237_65110;
var G__65129 = (i__63238_65111 + (1));
seq__63235_65108 = G__65126;
chunk__63236_65109 = G__65127;
count__63237_65110 = G__65128;
i__63238_65111 = G__65129;
continue;
} else {
var temp__5753__auto___65130 = cljs.core.seq(seq__63235_65108);
if(temp__5753__auto___65130){
var seq__63235_65131__$1 = temp__5753__auto___65130;
if(cljs.core.chunked_seq_QMARK_(seq__63235_65131__$1)){
var c__4556__auto___65132 = cljs.core.chunk_first(seq__63235_65131__$1);
var G__65133 = cljs.core.chunk_rest(seq__63235_65131__$1);
var G__65134 = c__4556__auto___65132;
var G__65135 = cljs.core.count(c__4556__auto___65132);
var G__65136 = (0);
seq__63235_65108 = G__65133;
chunk__63236_65109 = G__65134;
count__63237_65110 = G__65135;
i__63238_65111 = G__65136;
continue;
} else {
var vec__63258_65137 = cljs.core.first(seq__63235_65131__$1);
var col_65138 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63258_65137,(0),null);
var infos_65139 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63258_65137,(1),null);
encode_cols(infos_65139,source_idx_65096,line_65106,col_65138);


var G__65141 = cljs.core.next(seq__63235_65131__$1);
var G__65142 = null;
var G__65143 = (0);
var G__65144 = (0);
seq__63235_65108 = G__65141;
chunk__63236_65109 = G__65142;
count__63237_65110 = G__65143;
i__63238_65111 = G__65144;
continue;
}
} else {
}
}
break;
}


var G__65145 = seq__63125_65101;
var G__65146 = chunk__63126_65102;
var G__65147 = count__63127_65103;
var G__65148 = (i__63128_65104 + (1));
seq__63125_65101 = G__65145;
chunk__63126_65102 = G__65146;
count__63127_65103 = G__65147;
i__63128_65104 = G__65148;
continue;
} else {
var temp__5753__auto___65153 = cljs.core.seq(seq__63125_65101);
if(temp__5753__auto___65153){
var seq__63125_65154__$1 = temp__5753__auto___65153;
if(cljs.core.chunked_seq_QMARK_(seq__63125_65154__$1)){
var c__4556__auto___65155 = cljs.core.chunk_first(seq__63125_65154__$1);
var G__65157 = cljs.core.chunk_rest(seq__63125_65154__$1);
var G__65158 = c__4556__auto___65155;
var G__65159 = cljs.core.count(c__4556__auto___65155);
var G__65160 = (0);
seq__63125_65101 = G__65157;
chunk__63126_65102 = G__65158;
count__63127_65103 = G__65159;
i__63128_65104 = G__65160;
continue;
} else {
var vec__63269_65166 = cljs.core.first(seq__63125_65154__$1);
var line_65167 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63269_65166,(0),null);
var cols_65168 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63269_65166,(1),null);
var seq__63275_65169 = cljs.core.seq(cols_65168);
var chunk__63276_65170 = null;
var count__63277_65171 = (0);
var i__63278_65172 = (0);
while(true){
if((i__63278_65172 < count__63277_65171)){
var vec__63303_65174 = chunk__63276_65170.cljs$core$IIndexed$_nth$arity$2(null,i__63278_65172);
var col_65175 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63303_65174,(0),null);
var infos_65176 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63303_65174,(1),null);
encode_cols(infos_65176,source_idx_65096,line_65167,col_65175);


var G__65185 = seq__63275_65169;
var G__65186 = chunk__63276_65170;
var G__65187 = count__63277_65171;
var G__65188 = (i__63278_65172 + (1));
seq__63275_65169 = G__65185;
chunk__63276_65170 = G__65186;
count__63277_65171 = G__65187;
i__63278_65172 = G__65188;
continue;
} else {
var temp__5753__auto___65189__$1 = cljs.core.seq(seq__63275_65169);
if(temp__5753__auto___65189__$1){
var seq__63275_65193__$1 = temp__5753__auto___65189__$1;
if(cljs.core.chunked_seq_QMARK_(seq__63275_65193__$1)){
var c__4556__auto___65194 = cljs.core.chunk_first(seq__63275_65193__$1);
var G__65195 = cljs.core.chunk_rest(seq__63275_65193__$1);
var G__65196 = c__4556__auto___65194;
var G__65197 = cljs.core.count(c__4556__auto___65194);
var G__65198 = (0);
seq__63275_65169 = G__65195;
chunk__63276_65170 = G__65196;
count__63277_65171 = G__65197;
i__63278_65172 = G__65198;
continue;
} else {
var vec__63311_65199 = cljs.core.first(seq__63275_65193__$1);
var col_65200 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63311_65199,(0),null);
var infos_65201 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63311_65199,(1),null);
encode_cols(infos_65201,source_idx_65096,line_65167,col_65200);


var G__65203 = cljs.core.next(seq__63275_65193__$1);
var G__65204 = null;
var G__65205 = (0);
var G__65206 = (0);
seq__63275_65169 = G__65203;
chunk__63276_65170 = G__65204;
count__63277_65171 = G__65205;
i__63278_65172 = G__65206;
continue;
}
} else {
}
}
break;
}


var G__65208 = cljs.core.next(seq__63125_65154__$1);
var G__65209 = null;
var G__65210 = (0);
var G__65211 = (0);
seq__63125_65101 = G__65208;
chunk__63126_65102 = G__65209;
count__63127_65103 = G__65210;
i__63128_65104 = G__65211;
continue;
}
} else {
}
}
break;
}


var G__65216 = seq__62608_65091;
var G__65217 = chunk__62610_65092;
var G__65218 = count__62611_65093;
var G__65219 = (i__62612_65094 + (1));
seq__62608_65091 = G__65216;
chunk__62610_65092 = G__65217;
count__62611_65093 = G__65218;
i__62612_65094 = G__65219;
continue;
} else {
var temp__5753__auto___65220 = cljs.core.seq(seq__62608_65091);
if(temp__5753__auto___65220){
var seq__62608_65221__$1 = temp__5753__auto___65220;
if(cljs.core.chunked_seq_QMARK_(seq__62608_65221__$1)){
var c__4556__auto___65222 = cljs.core.chunk_first(seq__62608_65221__$1);
var G__65223 = cljs.core.chunk_rest(seq__62608_65221__$1);
var G__65224 = c__4556__auto___65222;
var G__65225 = cljs.core.count(c__4556__auto___65222);
var G__65226 = (0);
seq__62608_65091 = G__65223;
chunk__62610_65092 = G__65224;
count__62611_65093 = G__65225;
i__62612_65094 = G__65226;
continue;
} else {
var vec__63335_65227 = cljs.core.first(seq__62608_65221__$1);
var source_idx_65228 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63335_65227,(0),null);
var vec__63338_65229 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63335_65227,(1),null);
var __65230 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63338_65229,(0),null);
var lines_65231__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63338_65229,(1),null);
var seq__63342_65232 = cljs.core.seq(lines_65231__$1);
var chunk__63343_65233 = null;
var count__63344_65234 = (0);
var i__63345_65235 = (0);
while(true){
if((i__63345_65235 < count__63344_65234)){
var vec__63465_65236 = chunk__63343_65233.cljs$core$IIndexed$_nth$arity$2(null,i__63345_65235);
var line_65237 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63465_65236,(0),null);
var cols_65238 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63465_65236,(1),null);
var seq__63469_65240 = cljs.core.seq(cols_65238);
var chunk__63470_65241 = null;
var count__63471_65242 = (0);
var i__63472_65243 = (0);
while(true){
if((i__63472_65243 < count__63471_65242)){
var vec__63501_65244 = chunk__63470_65241.cljs$core$IIndexed$_nth$arity$2(null,i__63472_65243);
var col_65245 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63501_65244,(0),null);
var infos_65246 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63501_65244,(1),null);
encode_cols(infos_65246,source_idx_65228,line_65237,col_65245);


var G__65247 = seq__63469_65240;
var G__65248 = chunk__63470_65241;
var G__65249 = count__63471_65242;
var G__65250 = (i__63472_65243 + (1));
seq__63469_65240 = G__65247;
chunk__63470_65241 = G__65248;
count__63471_65242 = G__65249;
i__63472_65243 = G__65250;
continue;
} else {
var temp__5753__auto___65251__$1 = cljs.core.seq(seq__63469_65240);
if(temp__5753__auto___65251__$1){
var seq__63469_65252__$1 = temp__5753__auto___65251__$1;
if(cljs.core.chunked_seq_QMARK_(seq__63469_65252__$1)){
var c__4556__auto___65255 = cljs.core.chunk_first(seq__63469_65252__$1);
var G__65256 = cljs.core.chunk_rest(seq__63469_65252__$1);
var G__65257 = c__4556__auto___65255;
var G__65258 = cljs.core.count(c__4556__auto___65255);
var G__65259 = (0);
seq__63469_65240 = G__65256;
chunk__63470_65241 = G__65257;
count__63471_65242 = G__65258;
i__63472_65243 = G__65259;
continue;
} else {
var vec__63518_65261 = cljs.core.first(seq__63469_65252__$1);
var col_65262 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63518_65261,(0),null);
var infos_65264 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63518_65261,(1),null);
encode_cols(infos_65264,source_idx_65228,line_65237,col_65262);


var G__65271 = cljs.core.next(seq__63469_65252__$1);
var G__65272 = null;
var G__65273 = (0);
var G__65274 = (0);
seq__63469_65240 = G__65271;
chunk__63470_65241 = G__65272;
count__63471_65242 = G__65273;
i__63472_65243 = G__65274;
continue;
}
} else {
}
}
break;
}


var G__65278 = seq__63342_65232;
var G__65279 = chunk__63343_65233;
var G__65280 = count__63344_65234;
var G__65281 = (i__63345_65235 + (1));
seq__63342_65232 = G__65278;
chunk__63343_65233 = G__65279;
count__63344_65234 = G__65280;
i__63345_65235 = G__65281;
continue;
} else {
var temp__5753__auto___65282__$1 = cljs.core.seq(seq__63342_65232);
if(temp__5753__auto___65282__$1){
var seq__63342_65283__$1 = temp__5753__auto___65282__$1;
if(cljs.core.chunked_seq_QMARK_(seq__63342_65283__$1)){
var c__4556__auto___65284 = cljs.core.chunk_first(seq__63342_65283__$1);
var G__65285 = cljs.core.chunk_rest(seq__63342_65283__$1);
var G__65286 = c__4556__auto___65284;
var G__65287 = cljs.core.count(c__4556__auto___65284);
var G__65288 = (0);
seq__63342_65232 = G__65285;
chunk__63343_65233 = G__65286;
count__63344_65234 = G__65287;
i__63345_65235 = G__65288;
continue;
} else {
var vec__63531_65292 = cljs.core.first(seq__63342_65283__$1);
var line_65293 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63531_65292,(0),null);
var cols_65294 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63531_65292,(1),null);
var seq__63535_65295 = cljs.core.seq(cols_65294);
var chunk__63536_65296 = null;
var count__63537_65297 = (0);
var i__63538_65298 = (0);
while(true){
if((i__63538_65298 < count__63537_65297)){
var vec__63560_65301 = chunk__63536_65296.cljs$core$IIndexed$_nth$arity$2(null,i__63538_65298);
var col_65302 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63560_65301,(0),null);
var infos_65303 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63560_65301,(1),null);
encode_cols(infos_65303,source_idx_65228,line_65293,col_65302);


var G__65304 = seq__63535_65295;
var G__65305 = chunk__63536_65296;
var G__65306 = count__63537_65297;
var G__65307 = (i__63538_65298 + (1));
seq__63535_65295 = G__65304;
chunk__63536_65296 = G__65305;
count__63537_65297 = G__65306;
i__63538_65298 = G__65307;
continue;
} else {
var temp__5753__auto___65309__$2 = cljs.core.seq(seq__63535_65295);
if(temp__5753__auto___65309__$2){
var seq__63535_65310__$1 = temp__5753__auto___65309__$2;
if(cljs.core.chunked_seq_QMARK_(seq__63535_65310__$1)){
var c__4556__auto___65311 = cljs.core.chunk_first(seq__63535_65310__$1);
var G__65315 = cljs.core.chunk_rest(seq__63535_65310__$1);
var G__65316 = c__4556__auto___65311;
var G__65317 = cljs.core.count(c__4556__auto___65311);
var G__65318 = (0);
seq__63535_65295 = G__65315;
chunk__63536_65296 = G__65316;
count__63537_65297 = G__65317;
i__63538_65298 = G__65318;
continue;
} else {
var vec__63574_65319 = cljs.core.first(seq__63535_65310__$1);
var col_65320 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63574_65319,(0),null);
var infos_65321 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63574_65319,(1),null);
encode_cols(infos_65321,source_idx_65228,line_65293,col_65320);


var G__65322 = cljs.core.next(seq__63535_65310__$1);
var G__65323 = null;
var G__65324 = (0);
var G__65325 = (0);
seq__63535_65295 = G__65322;
chunk__63536_65296 = G__65323;
count__63537_65297 = G__65324;
i__63538_65298 = G__65325;
continue;
}
} else {
}
}
break;
}


var G__65326 = cljs.core.next(seq__63342_65283__$1);
var G__65327 = null;
var G__65328 = (0);
var G__65329 = (0);
seq__63342_65232 = G__65326;
chunk__63343_65233 = G__65327;
count__63344_65234 = G__65328;
i__63345_65235 = G__65329;
continue;
}
} else {
}
}
break;
}


var G__65331 = cljs.core.next(seq__62608_65221__$1);
var G__65332 = null;
var G__65333 = (0);
var G__65334 = (0);
seq__62608_65091 = G__65331;
chunk__62610_65092 = G__65332;
count__62611_65093 = G__65333;
i__62612_65094 = G__65334;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__63577 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?(function (p1__62520_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__62520_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
}):cljs.core.identity),(function (p1__62521_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__62521_SHARP_,/\//));
}));
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__62522_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__62522_SHARP_);
}),cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,cljs.core.deref(lines))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(cljs.core.deref(names__GT_idx)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__63588 = G__63577;
goog.object.set(G__63588,"sourcesContent",cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__63588;
} else {
return G__63577;
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
var vec__63596 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63596,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63596,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__63600 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63600,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63600,(1),null);
var G__65351 = cljs.core.next(col_map_seq);
var G__65352 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__63600,col,infos,vec__63596,line,col_map){
return (function (v,p__63607){
var map__63612 = p__63607;
var map__63612__$1 = (((((!((map__63612 == null))))?(((((map__63612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63612.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63612):map__63612);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63612__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63612__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__63600,col,infos,vec__63596,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__65351;
new_cols = G__65352;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__65354 = cljs.core.next(line_map_seq);
var G__65355 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__65354;
new_lines = G__65355;
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
var seq__63622_65357 = cljs.core.seq(reverse_map);
var chunk__63623_65358 = null;
var count__63624_65359 = (0);
var i__63625_65360 = (0);
while(true){
if((i__63625_65360 < count__63624_65359)){
var vec__64345_65361 = chunk__63623_65358.cljs$core$IIndexed$_nth$arity$2(null,i__63625_65360);
var line_65362 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64345_65361,(0),null);
var columns_65363 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64345_65361,(1),null);
var seq__64348_65364 = cljs.core.seq(columns_65363);
var chunk__64349_65365 = null;
var count__64350_65366 = (0);
var i__64351_65367 = (0);
while(true){
if((i__64351_65367 < count__64350_65366)){
var vec__64479_65368 = chunk__64349_65365.cljs$core$IIndexed$_nth$arity$2(null,i__64351_65367);
var column_65369 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64479_65368,(0),null);
var column_info_65370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64479_65368,(1),null);
var seq__64482_65371 = cljs.core.seq(column_info_65370);
var chunk__64483_65372 = null;
var count__64484_65373 = (0);
var i__64485_65374 = (0);
while(true){
if((i__64485_65374 < count__64484_65373)){
var map__64525_65375 = chunk__64483_65372.cljs$core$IIndexed$_nth$arity$2(null,i__64485_65374);
var map__64525_65376__$1 = (((((!((map__64525_65375 == null))))?(((((map__64525_65375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64525_65375.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64525_65375):map__64525_65375);
var gline_65377 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64525_65376__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_65378 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64525_65376__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_65379 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64525_65376__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_65377], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__64482_65371,chunk__64483_65372,count__64484_65373,i__64485_65374,seq__64348_65364,chunk__64349_65365,count__64350_65366,i__64351_65367,seq__63622_65357,chunk__63623_65358,count__63624_65359,i__63625_65360,map__64525_65375,map__64525_65376__$1,gline_65377,gcol_65378,name_65379,vec__64479_65368,column_65369,column_info_65370,vec__64345_65361,line_65362,columns_65363,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_65378], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_65362,new cljs.core.Keyword(null,"col","col",-1959363084),column_65369,new cljs.core.Keyword(null,"name","name",1843675177),name_65379], null));
});})(seq__64482_65371,chunk__64483_65372,count__64484_65373,i__64485_65374,seq__64348_65364,chunk__64349_65365,count__64350_65366,i__64351_65367,seq__63622_65357,chunk__63623_65358,count__63624_65359,i__63625_65360,map__64525_65375,map__64525_65376__$1,gline_65377,gcol_65378,name_65379,vec__64479_65368,column_65369,column_info_65370,vec__64345_65361,line_65362,columns_65363,inverted))
,cljs.core.sorted_map()));


var G__65403 = seq__64482_65371;
var G__65404 = chunk__64483_65372;
var G__65405 = count__64484_65373;
var G__65406 = (i__64485_65374 + (1));
seq__64482_65371 = G__65403;
chunk__64483_65372 = G__65404;
count__64484_65373 = G__65405;
i__64485_65374 = G__65406;
continue;
} else {
var temp__5753__auto___65408 = cljs.core.seq(seq__64482_65371);
if(temp__5753__auto___65408){
var seq__64482_65410__$1 = temp__5753__auto___65408;
if(cljs.core.chunked_seq_QMARK_(seq__64482_65410__$1)){
var c__4556__auto___65411 = cljs.core.chunk_first(seq__64482_65410__$1);
var G__65412 = cljs.core.chunk_rest(seq__64482_65410__$1);
var G__65413 = c__4556__auto___65411;
var G__65414 = cljs.core.count(c__4556__auto___65411);
var G__65415 = (0);
seq__64482_65371 = G__65412;
chunk__64483_65372 = G__65413;
count__64484_65373 = G__65414;
i__64485_65374 = G__65415;
continue;
} else {
var map__64537_65416 = cljs.core.first(seq__64482_65410__$1);
var map__64537_65417__$1 = (((((!((map__64537_65416 == null))))?(((((map__64537_65416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64537_65416.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64537_65416):map__64537_65416);
var gline_65418 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64537_65417__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_65419 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64537_65417__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_65420 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64537_65417__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_65418], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__64482_65371,chunk__64483_65372,count__64484_65373,i__64485_65374,seq__64348_65364,chunk__64349_65365,count__64350_65366,i__64351_65367,seq__63622_65357,chunk__63623_65358,count__63624_65359,i__63625_65360,map__64537_65416,map__64537_65417__$1,gline_65418,gcol_65419,name_65420,seq__64482_65410__$1,temp__5753__auto___65408,vec__64479_65368,column_65369,column_info_65370,vec__64345_65361,line_65362,columns_65363,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_65419], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_65362,new cljs.core.Keyword(null,"col","col",-1959363084),column_65369,new cljs.core.Keyword(null,"name","name",1843675177),name_65420], null));
});})(seq__64482_65371,chunk__64483_65372,count__64484_65373,i__64485_65374,seq__64348_65364,chunk__64349_65365,count__64350_65366,i__64351_65367,seq__63622_65357,chunk__63623_65358,count__63624_65359,i__63625_65360,map__64537_65416,map__64537_65417__$1,gline_65418,gcol_65419,name_65420,seq__64482_65410__$1,temp__5753__auto___65408,vec__64479_65368,column_65369,column_info_65370,vec__64345_65361,line_65362,columns_65363,inverted))
,cljs.core.sorted_map()));


var G__65425 = cljs.core.next(seq__64482_65410__$1);
var G__65426 = null;
var G__65427 = (0);
var G__65428 = (0);
seq__64482_65371 = G__65425;
chunk__64483_65372 = G__65426;
count__64484_65373 = G__65427;
i__64485_65374 = G__65428;
continue;
}
} else {
}
}
break;
}


var G__65435 = seq__64348_65364;
var G__65436 = chunk__64349_65365;
var G__65437 = count__64350_65366;
var G__65438 = (i__64351_65367 + (1));
seq__64348_65364 = G__65435;
chunk__64349_65365 = G__65436;
count__64350_65366 = G__65437;
i__64351_65367 = G__65438;
continue;
} else {
var temp__5753__auto___65440 = cljs.core.seq(seq__64348_65364);
if(temp__5753__auto___65440){
var seq__64348_65441__$1 = temp__5753__auto___65440;
if(cljs.core.chunked_seq_QMARK_(seq__64348_65441__$1)){
var c__4556__auto___65442 = cljs.core.chunk_first(seq__64348_65441__$1);
var G__65443 = cljs.core.chunk_rest(seq__64348_65441__$1);
var G__65444 = c__4556__auto___65442;
var G__65445 = cljs.core.count(c__4556__auto___65442);
var G__65446 = (0);
seq__64348_65364 = G__65443;
chunk__64349_65365 = G__65444;
count__64350_65366 = G__65445;
i__64351_65367 = G__65446;
continue;
} else {
var vec__64546_65447 = cljs.core.first(seq__64348_65441__$1);
var column_65448 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64546_65447,(0),null);
var column_info_65449 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64546_65447,(1),null);
var seq__64549_65451 = cljs.core.seq(column_info_65449);
var chunk__64550_65452 = null;
var count__64551_65453 = (0);
var i__64552_65454 = (0);
while(true){
if((i__64552_65454 < count__64551_65453)){
var map__64580_65460 = chunk__64550_65452.cljs$core$IIndexed$_nth$arity$2(null,i__64552_65454);
var map__64580_65461__$1 = (((((!((map__64580_65460 == null))))?(((((map__64580_65460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64580_65460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64580_65460):map__64580_65460);
var gline_65463 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64580_65461__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_65464 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64580_65461__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_65465 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64580_65461__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_65463], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__64549_65451,chunk__64550_65452,count__64551_65453,i__64552_65454,seq__64348_65364,chunk__64349_65365,count__64350_65366,i__64351_65367,seq__63622_65357,chunk__63623_65358,count__63624_65359,i__63625_65360,map__64580_65460,map__64580_65461__$1,gline_65463,gcol_65464,name_65465,vec__64546_65447,column_65448,column_info_65449,seq__64348_65441__$1,temp__5753__auto___65440,vec__64345_65361,line_65362,columns_65363,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_65464], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_65362,new cljs.core.Keyword(null,"col","col",-1959363084),column_65448,new cljs.core.Keyword(null,"name","name",1843675177),name_65465], null));
});})(seq__64549_65451,chunk__64550_65452,count__64551_65453,i__64552_65454,seq__64348_65364,chunk__64349_65365,count__64350_65366,i__64351_65367,seq__63622_65357,chunk__63623_65358,count__63624_65359,i__63625_65360,map__64580_65460,map__64580_65461__$1,gline_65463,gcol_65464,name_65465,vec__64546_65447,column_65448,column_info_65449,seq__64348_65441__$1,temp__5753__auto___65440,vec__64345_65361,line_65362,columns_65363,inverted))
,cljs.core.sorted_map()));


var G__65470 = seq__64549_65451;
var G__65471 = chunk__64550_65452;
var G__65472 = count__64551_65453;
var G__65473 = (i__64552_65454 + (1));
seq__64549_65451 = G__65470;
chunk__64550_65452 = G__65471;
count__64551_65453 = G__65472;
i__64552_65454 = G__65473;
continue;
} else {
var temp__5753__auto___65474__$1 = cljs.core.seq(seq__64549_65451);
if(temp__5753__auto___65474__$1){
var seq__64549_65476__$1 = temp__5753__auto___65474__$1;
if(cljs.core.chunked_seq_QMARK_(seq__64549_65476__$1)){
var c__4556__auto___65478 = cljs.core.chunk_first(seq__64549_65476__$1);
var G__65480 = cljs.core.chunk_rest(seq__64549_65476__$1);
var G__65481 = c__4556__auto___65478;
var G__65482 = cljs.core.count(c__4556__auto___65478);
var G__65483 = (0);
seq__64549_65451 = G__65480;
chunk__64550_65452 = G__65481;
count__64551_65453 = G__65482;
i__64552_65454 = G__65483;
continue;
} else {
var map__64585_65487 = cljs.core.first(seq__64549_65476__$1);
var map__64585_65488__$1 = (((((!((map__64585_65487 == null))))?(((((map__64585_65487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64585_65487.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64585_65487):map__64585_65487);
var gline_65489 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64585_65488__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_65490 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64585_65488__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_65491 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64585_65488__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_65489], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__64549_65451,chunk__64550_65452,count__64551_65453,i__64552_65454,seq__64348_65364,chunk__64349_65365,count__64350_65366,i__64351_65367,seq__63622_65357,chunk__63623_65358,count__63624_65359,i__63625_65360,map__64585_65487,map__64585_65488__$1,gline_65489,gcol_65490,name_65491,seq__64549_65476__$1,temp__5753__auto___65474__$1,vec__64546_65447,column_65448,column_info_65449,seq__64348_65441__$1,temp__5753__auto___65440,vec__64345_65361,line_65362,columns_65363,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_65490], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_65362,new cljs.core.Keyword(null,"col","col",-1959363084),column_65448,new cljs.core.Keyword(null,"name","name",1843675177),name_65491], null));
});})(seq__64549_65451,chunk__64550_65452,count__64551_65453,i__64552_65454,seq__64348_65364,chunk__64349_65365,count__64350_65366,i__64351_65367,seq__63622_65357,chunk__63623_65358,count__63624_65359,i__63625_65360,map__64585_65487,map__64585_65488__$1,gline_65489,gcol_65490,name_65491,seq__64549_65476__$1,temp__5753__auto___65474__$1,vec__64546_65447,column_65448,column_info_65449,seq__64348_65441__$1,temp__5753__auto___65440,vec__64345_65361,line_65362,columns_65363,inverted))
,cljs.core.sorted_map()));


var G__65498 = cljs.core.next(seq__64549_65476__$1);
var G__65499 = null;
var G__65500 = (0);
var G__65501 = (0);
seq__64549_65451 = G__65498;
chunk__64550_65452 = G__65499;
count__64551_65453 = G__65500;
i__64552_65454 = G__65501;
continue;
}
} else {
}
}
break;
}


var G__65503 = cljs.core.next(seq__64348_65441__$1);
var G__65504 = null;
var G__65505 = (0);
var G__65506 = (0);
seq__64348_65364 = G__65503;
chunk__64349_65365 = G__65504;
count__64350_65366 = G__65505;
i__64351_65367 = G__65506;
continue;
}
} else {
}
}
break;
}


var G__65507 = seq__63622_65357;
var G__65508 = chunk__63623_65358;
var G__65509 = count__63624_65359;
var G__65510 = (i__63625_65360 + (1));
seq__63622_65357 = G__65507;
chunk__63623_65358 = G__65508;
count__63624_65359 = G__65509;
i__63625_65360 = G__65510;
continue;
} else {
var temp__5753__auto___65511 = cljs.core.seq(seq__63622_65357);
if(temp__5753__auto___65511){
var seq__63622_65512__$1 = temp__5753__auto___65511;
if(cljs.core.chunked_seq_QMARK_(seq__63622_65512__$1)){
var c__4556__auto___65513 = cljs.core.chunk_first(seq__63622_65512__$1);
var G__65514 = cljs.core.chunk_rest(seq__63622_65512__$1);
var G__65515 = c__4556__auto___65513;
var G__65516 = cljs.core.count(c__4556__auto___65513);
var G__65517 = (0);
seq__63622_65357 = G__65514;
chunk__63623_65358 = G__65515;
count__63624_65359 = G__65516;
i__63625_65360 = G__65517;
continue;
} else {
var vec__64598_65518 = cljs.core.first(seq__63622_65512__$1);
var line_65519 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64598_65518,(0),null);
var columns_65520 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64598_65518,(1),null);
var seq__64601_65521 = cljs.core.seq(columns_65520);
var chunk__64602_65522 = null;
var count__64603_65523 = (0);
var i__64604_65524 = (0);
while(true){
if((i__64604_65524 < count__64603_65523)){
var vec__64776_65528 = chunk__64602_65522.cljs$core$IIndexed$_nth$arity$2(null,i__64604_65524);
var column_65529 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64776_65528,(0),null);
var column_info_65530 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64776_65528,(1),null);
var seq__64781_65533 = cljs.core.seq(column_info_65530);
var chunk__64782_65534 = null;
var count__64783_65535 = (0);
var i__64784_65536 = (0);
while(true){
if((i__64784_65536 < count__64783_65535)){
var map__64803_65537 = chunk__64782_65534.cljs$core$IIndexed$_nth$arity$2(null,i__64784_65536);
var map__64803_65538__$1 = (((((!((map__64803_65537 == null))))?(((((map__64803_65537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64803_65537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64803_65537):map__64803_65537);
var gline_65539 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64803_65538__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_65540 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64803_65538__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_65541 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64803_65538__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_65539], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__64781_65533,chunk__64782_65534,count__64783_65535,i__64784_65536,seq__64601_65521,chunk__64602_65522,count__64603_65523,i__64604_65524,seq__63622_65357,chunk__63623_65358,count__63624_65359,i__63625_65360,map__64803_65537,map__64803_65538__$1,gline_65539,gcol_65540,name_65541,vec__64776_65528,column_65529,column_info_65530,vec__64598_65518,line_65519,columns_65520,seq__63622_65512__$1,temp__5753__auto___65511,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_65540], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_65519,new cljs.core.Keyword(null,"col","col",-1959363084),column_65529,new cljs.core.Keyword(null,"name","name",1843675177),name_65541], null));
});})(seq__64781_65533,chunk__64782_65534,count__64783_65535,i__64784_65536,seq__64601_65521,chunk__64602_65522,count__64603_65523,i__64604_65524,seq__63622_65357,chunk__63623_65358,count__63624_65359,i__63625_65360,map__64803_65537,map__64803_65538__$1,gline_65539,gcol_65540,name_65541,vec__64776_65528,column_65529,column_info_65530,vec__64598_65518,line_65519,columns_65520,seq__63622_65512__$1,temp__5753__auto___65511,inverted))
,cljs.core.sorted_map()));


var G__65545 = seq__64781_65533;
var G__65546 = chunk__64782_65534;
var G__65547 = count__64783_65535;
var G__65548 = (i__64784_65536 + (1));
seq__64781_65533 = G__65545;
chunk__64782_65534 = G__65546;
count__64783_65535 = G__65547;
i__64784_65536 = G__65548;
continue;
} else {
var temp__5753__auto___65549__$1 = cljs.core.seq(seq__64781_65533);
if(temp__5753__auto___65549__$1){
var seq__64781_65550__$1 = temp__5753__auto___65549__$1;
if(cljs.core.chunked_seq_QMARK_(seq__64781_65550__$1)){
var c__4556__auto___65551 = cljs.core.chunk_first(seq__64781_65550__$1);
var G__65552 = cljs.core.chunk_rest(seq__64781_65550__$1);
var G__65553 = c__4556__auto___65551;
var G__65554 = cljs.core.count(c__4556__auto___65551);
var G__65555 = (0);
seq__64781_65533 = G__65552;
chunk__64782_65534 = G__65553;
count__64783_65535 = G__65554;
i__64784_65536 = G__65555;
continue;
} else {
var map__64818_65556 = cljs.core.first(seq__64781_65550__$1);
var map__64818_65557__$1 = (((((!((map__64818_65556 == null))))?(((((map__64818_65556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64818_65556.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64818_65556):map__64818_65556);
var gline_65558 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64818_65557__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_65559 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64818_65557__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_65560 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64818_65557__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_65558], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__64781_65533,chunk__64782_65534,count__64783_65535,i__64784_65536,seq__64601_65521,chunk__64602_65522,count__64603_65523,i__64604_65524,seq__63622_65357,chunk__63623_65358,count__63624_65359,i__63625_65360,map__64818_65556,map__64818_65557__$1,gline_65558,gcol_65559,name_65560,seq__64781_65550__$1,temp__5753__auto___65549__$1,vec__64776_65528,column_65529,column_info_65530,vec__64598_65518,line_65519,columns_65520,seq__63622_65512__$1,temp__5753__auto___65511,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_65559], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_65519,new cljs.core.Keyword(null,"col","col",-1959363084),column_65529,new cljs.core.Keyword(null,"name","name",1843675177),name_65560], null));
});})(seq__64781_65533,chunk__64782_65534,count__64783_65535,i__64784_65536,seq__64601_65521,chunk__64602_65522,count__64603_65523,i__64604_65524,seq__63622_65357,chunk__63623_65358,count__63624_65359,i__63625_65360,map__64818_65556,map__64818_65557__$1,gline_65558,gcol_65559,name_65560,seq__64781_65550__$1,temp__5753__auto___65549__$1,vec__64776_65528,column_65529,column_info_65530,vec__64598_65518,line_65519,columns_65520,seq__63622_65512__$1,temp__5753__auto___65511,inverted))
,cljs.core.sorted_map()));


var G__65561 = cljs.core.next(seq__64781_65550__$1);
var G__65562 = null;
var G__65563 = (0);
var G__65564 = (0);
seq__64781_65533 = G__65561;
chunk__64782_65534 = G__65562;
count__64783_65535 = G__65563;
i__64784_65536 = G__65564;
continue;
}
} else {
}
}
break;
}


var G__65565 = seq__64601_65521;
var G__65566 = chunk__64602_65522;
var G__65567 = count__64603_65523;
var G__65568 = (i__64604_65524 + (1));
seq__64601_65521 = G__65565;
chunk__64602_65522 = G__65566;
count__64603_65523 = G__65567;
i__64604_65524 = G__65568;
continue;
} else {
var temp__5753__auto___65569__$1 = cljs.core.seq(seq__64601_65521);
if(temp__5753__auto___65569__$1){
var seq__64601_65570__$1 = temp__5753__auto___65569__$1;
if(cljs.core.chunked_seq_QMARK_(seq__64601_65570__$1)){
var c__4556__auto___65571 = cljs.core.chunk_first(seq__64601_65570__$1);
var G__65572 = cljs.core.chunk_rest(seq__64601_65570__$1);
var G__65573 = c__4556__auto___65571;
var G__65574 = cljs.core.count(c__4556__auto___65571);
var G__65575 = (0);
seq__64601_65521 = G__65572;
chunk__64602_65522 = G__65573;
count__64603_65523 = G__65574;
i__64604_65524 = G__65575;
continue;
} else {
var vec__64842_65576 = cljs.core.first(seq__64601_65570__$1);
var column_65577 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64842_65576,(0),null);
var column_info_65578 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64842_65576,(1),null);
var seq__64845_65583 = cljs.core.seq(column_info_65578);
var chunk__64846_65584 = null;
var count__64847_65585 = (0);
var i__64848_65586 = (0);
while(true){
if((i__64848_65586 < count__64847_65585)){
var map__64876_65587 = chunk__64846_65584.cljs$core$IIndexed$_nth$arity$2(null,i__64848_65586);
var map__64876_65588__$1 = (((((!((map__64876_65587 == null))))?(((((map__64876_65587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64876_65587.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64876_65587):map__64876_65587);
var gline_65589 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64876_65588__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_65590 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64876_65588__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_65591 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64876_65588__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_65589], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__64845_65583,chunk__64846_65584,count__64847_65585,i__64848_65586,seq__64601_65521,chunk__64602_65522,count__64603_65523,i__64604_65524,seq__63622_65357,chunk__63623_65358,count__63624_65359,i__63625_65360,map__64876_65587,map__64876_65588__$1,gline_65589,gcol_65590,name_65591,vec__64842_65576,column_65577,column_info_65578,seq__64601_65570__$1,temp__5753__auto___65569__$1,vec__64598_65518,line_65519,columns_65520,seq__63622_65512__$1,temp__5753__auto___65511,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_65590], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_65519,new cljs.core.Keyword(null,"col","col",-1959363084),column_65577,new cljs.core.Keyword(null,"name","name",1843675177),name_65591], null));
});})(seq__64845_65583,chunk__64846_65584,count__64847_65585,i__64848_65586,seq__64601_65521,chunk__64602_65522,count__64603_65523,i__64604_65524,seq__63622_65357,chunk__63623_65358,count__63624_65359,i__63625_65360,map__64876_65587,map__64876_65588__$1,gline_65589,gcol_65590,name_65591,vec__64842_65576,column_65577,column_info_65578,seq__64601_65570__$1,temp__5753__auto___65569__$1,vec__64598_65518,line_65519,columns_65520,seq__63622_65512__$1,temp__5753__auto___65511,inverted))
,cljs.core.sorted_map()));


var G__65597 = seq__64845_65583;
var G__65598 = chunk__64846_65584;
var G__65599 = count__64847_65585;
var G__65600 = (i__64848_65586 + (1));
seq__64845_65583 = G__65597;
chunk__64846_65584 = G__65598;
count__64847_65585 = G__65599;
i__64848_65586 = G__65600;
continue;
} else {
var temp__5753__auto___65601__$2 = cljs.core.seq(seq__64845_65583);
if(temp__5753__auto___65601__$2){
var seq__64845_65602__$1 = temp__5753__auto___65601__$2;
if(cljs.core.chunked_seq_QMARK_(seq__64845_65602__$1)){
var c__4556__auto___65603 = cljs.core.chunk_first(seq__64845_65602__$1);
var G__65610 = cljs.core.chunk_rest(seq__64845_65602__$1);
var G__65611 = c__4556__auto___65603;
var G__65612 = cljs.core.count(c__4556__auto___65603);
var G__65613 = (0);
seq__64845_65583 = G__65610;
chunk__64846_65584 = G__65611;
count__64847_65585 = G__65612;
i__64848_65586 = G__65613;
continue;
} else {
var map__64887_65615 = cljs.core.first(seq__64845_65602__$1);
var map__64887_65616__$1 = (((((!((map__64887_65615 == null))))?(((((map__64887_65615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64887_65615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64887_65615):map__64887_65615);
var gline_65617 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64887_65616__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_65618 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64887_65616__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_65619 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64887_65616__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_65617], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__64845_65583,chunk__64846_65584,count__64847_65585,i__64848_65586,seq__64601_65521,chunk__64602_65522,count__64603_65523,i__64604_65524,seq__63622_65357,chunk__63623_65358,count__63624_65359,i__63625_65360,map__64887_65615,map__64887_65616__$1,gline_65617,gcol_65618,name_65619,seq__64845_65602__$1,temp__5753__auto___65601__$2,vec__64842_65576,column_65577,column_info_65578,seq__64601_65570__$1,temp__5753__auto___65569__$1,vec__64598_65518,line_65519,columns_65520,seq__63622_65512__$1,temp__5753__auto___65511,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_65618], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_65519,new cljs.core.Keyword(null,"col","col",-1959363084),column_65577,new cljs.core.Keyword(null,"name","name",1843675177),name_65619], null));
});})(seq__64845_65583,chunk__64846_65584,count__64847_65585,i__64848_65586,seq__64601_65521,chunk__64602_65522,count__64603_65523,i__64604_65524,seq__63622_65357,chunk__63623_65358,count__63624_65359,i__63625_65360,map__64887_65615,map__64887_65616__$1,gline_65617,gcol_65618,name_65619,seq__64845_65602__$1,temp__5753__auto___65601__$2,vec__64842_65576,column_65577,column_info_65578,seq__64601_65570__$1,temp__5753__auto___65569__$1,vec__64598_65518,line_65519,columns_65520,seq__63622_65512__$1,temp__5753__auto___65511,inverted))
,cljs.core.sorted_map()));


var G__65640 = cljs.core.next(seq__64845_65602__$1);
var G__65641 = null;
var G__65642 = (0);
var G__65643 = (0);
seq__64845_65583 = G__65640;
chunk__64846_65584 = G__65641;
count__64847_65585 = G__65642;
i__64848_65586 = G__65643;
continue;
}
} else {
}
}
break;
}


var G__65644 = cljs.core.next(seq__64601_65570__$1);
var G__65645 = null;
var G__65646 = (0);
var G__65647 = (0);
seq__64601_65521 = G__65644;
chunk__64602_65522 = G__65645;
count__64603_65523 = G__65646;
i__64604_65524 = G__65647;
continue;
}
} else {
}
}
break;
}


var G__65648 = cljs.core.next(seq__63622_65512__$1);
var G__65649 = null;
var G__65650 = (0);
var G__65651 = (0);
seq__63622_65357 = G__65648;
chunk__63623_65358 = G__65649;
count__63624_65359 = G__65650;
i__63625_65360 = G__65651;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(inverted);
});

//# sourceMappingURL=cljs.source_map.js.map
