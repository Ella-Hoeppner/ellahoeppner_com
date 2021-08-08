goog.provide('cljs.source_map');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__47104){
var vec__47105 = p__47104;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47105,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47105,(1),null);
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
var vec__47118 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47118,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47118,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47118,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47118,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47118,(4),null);
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
var vec__47129 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47129,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47129,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47129,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47129,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47129,(4),null);
var vec__47132 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47132,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47132,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47132,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47132,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47132,(4),null);
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
var map__47143 = segmap;
var map__47143__$1 = (((((!((map__47143 == null))))?(((((map__47143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47143.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47143):map__47143);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47143__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47143__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47143__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47143__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47143__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var G__47152 = arguments.length;
switch (G__47152) {
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
var vec__47160 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__49100 = cljs.core.next(segs__$1);
var G__49102 = nrelseg;
var G__49103 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__49100;
relseg__$1 = G__49102;
result__$1 = G__49103;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47160,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47160,(1),null);
var G__49108 = (gline + (1));
var G__49109 = cljs.core.next(lines__$1);
var G__49110 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__49111 = result__$1;
gline = G__49108;
lines__$1 = G__49109;
relseg = G__49110;
result = G__49111;
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
var map__47168 = segmap;
var map__47168__$1 = (((((!((map__47168 == null))))?(((((map__47168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47168.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47168):map__47168);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47168__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47168__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47168__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47168__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47168__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (p1__47166_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__47166_SHARP_,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__47190 = arguments.length;
switch (G__47190) {
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
var vec__47213 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__49151 = cljs.core.next(segs__$1);
var G__49155 = nrelseg;
var G__49156 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__49151;
relseg__$1 = G__49155;
result__$1 = G__49156;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47213,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47213,(1),null);
var G__49163 = (gline + (1));
var G__49164 = cljs.core.next(lines__$1);
var G__49165 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__49166 = result__$1;
gline = G__49163;
lines__$1 = G__49164;
relseg = G__49165;
result = G__49166;
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__47229){
var vec__47230 = p__47229;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47230,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47230,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47230,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47230,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47230,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
}));

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (cols__$1,p__47235){
var vec__47236 = p__47235;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47236,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47236,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47236,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47236,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47236,(4),null);
var seg = vec__47236;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,cljs.core.deref(relseg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__47242){
var vec__47245 = p__47242;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47245,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47245,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47245,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47245,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47245,(4),null);
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
var seq__47271 = cljs.core.seq(infos);
var chunk__47272 = null;
var count__47273 = (0);
var i__47274 = (0);
while(true){
if((i__47274 < count__47273)){
var info = chunk__47272.cljs$core$IIndexed$_nth$arity$2(null,i__47274);
var segv_49198 = info__GT_segv(info,source_idx,line,col);
var gline_49199 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_49200 = cljs.core.count(cljs.core.deref(lines));
if((gline_49199 > (lc_49200 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__47271,chunk__47272,count__47273,i__47274,segv_49198,gline_49199,lc_49200,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_49199 - (lc_49200 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_49198], null));
});})(seq__47271,chunk__47272,count__47273,i__47274,segv_49198,gline_49199,lc_49200,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__47271,chunk__47272,count__47273,i__47274,segv_49198,gline_49199,lc_49200,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_49199], null),cljs.core.conj,segv_49198);
});})(seq__47271,chunk__47272,count__47273,i__47274,segv_49198,gline_49199,lc_49200,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__49209 = seq__47271;
var G__49210 = chunk__47272;
var G__49211 = count__47273;
var G__49212 = (i__47274 + (1));
seq__47271 = G__49209;
chunk__47272 = G__49210;
count__47273 = G__49211;
i__47274 = G__49212;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47271);
if(temp__5753__auto__){
var seq__47271__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47271__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__47271__$1);
var G__49220 = cljs.core.chunk_rest(seq__47271__$1);
var G__49221 = c__4556__auto__;
var G__49222 = cljs.core.count(c__4556__auto__);
var G__49223 = (0);
seq__47271 = G__49220;
chunk__47272 = G__49221;
count__47273 = G__49222;
i__47274 = G__49223;
continue;
} else {
var info = cljs.core.first(seq__47271__$1);
var segv_49225 = info__GT_segv(info,source_idx,line,col);
var gline_49226 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_49227 = cljs.core.count(cljs.core.deref(lines));
if((gline_49226 > (lc_49227 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__47271,chunk__47272,count__47273,i__47274,segv_49225,gline_49226,lc_49227,info,seq__47271__$1,temp__5753__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_49226 - (lc_49227 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_49225], null));
});})(seq__47271,chunk__47272,count__47273,i__47274,segv_49225,gline_49226,lc_49227,info,seq__47271__$1,temp__5753__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__47271,chunk__47272,count__47273,i__47274,segv_49225,gline_49226,lc_49227,info,seq__47271__$1,temp__5753__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_49226], null),cljs.core.conj,segv_49225);
});})(seq__47271,chunk__47272,count__47273,i__47274,segv_49225,gline_49226,lc_49227,info,seq__47271__$1,temp__5753__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__49228 = cljs.core.next(seq__47271__$1);
var G__49229 = null;
var G__49230 = (0);
var G__49231 = (0);
seq__47271 = G__49228;
chunk__47272 = G__49229;
count__47273 = G__49230;
i__47274 = G__49231;
continue;
}
} else {
return null;
}
}
break;
}
});
var seq__47318_49232 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__47319_49233 = null;
var count__47320_49234 = (0);
var i__47321_49235 = (0);
while(true){
if((i__47321_49235 < count__47320_49234)){
var vec__47752_49238 = chunk__47319_49233.cljs$core$IIndexed$_nth$arity$2(null,i__47321_49235);
var source_idx_49239 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47752_49238,(0),null);
var vec__47755_49240 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47752_49238,(1),null);
var __49241 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47755_49240,(0),null);
var lines_49242__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47755_49240,(1),null);
var seq__47759_49244 = cljs.core.seq(lines_49242__$1);
var chunk__47760_49245 = null;
var count__47761_49246 = (0);
var i__47762_49247 = (0);
while(true){
if((i__47762_49247 < count__47761_49246)){
var vec__47821_49248 = chunk__47760_49245.cljs$core$IIndexed$_nth$arity$2(null,i__47762_49247);
var line_49249 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47821_49248,(0),null);
var cols_49250 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47821_49248,(1),null);
var seq__47827_49256 = cljs.core.seq(cols_49250);
var chunk__47828_49257 = null;
var count__47829_49258 = (0);
var i__47830_49259 = (0);
while(true){
if((i__47830_49259 < count__47829_49258)){
var vec__47837_49261 = chunk__47828_49257.cljs$core$IIndexed$_nth$arity$2(null,i__47830_49259);
var col_49262 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47837_49261,(0),null);
var infos_49263 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47837_49261,(1),null);
encode_cols(infos_49263,source_idx_49239,line_49249,col_49262);


var G__49268 = seq__47827_49256;
var G__49269 = chunk__47828_49257;
var G__49270 = count__47829_49258;
var G__49271 = (i__47830_49259 + (1));
seq__47827_49256 = G__49268;
chunk__47828_49257 = G__49269;
count__47829_49258 = G__49270;
i__47830_49259 = G__49271;
continue;
} else {
var temp__5753__auto___49274 = cljs.core.seq(seq__47827_49256);
if(temp__5753__auto___49274){
var seq__47827_49275__$1 = temp__5753__auto___49274;
if(cljs.core.chunked_seq_QMARK_(seq__47827_49275__$1)){
var c__4556__auto___49277 = cljs.core.chunk_first(seq__47827_49275__$1);
var G__49278 = cljs.core.chunk_rest(seq__47827_49275__$1);
var G__49279 = c__4556__auto___49277;
var G__49280 = cljs.core.count(c__4556__auto___49277);
var G__49281 = (0);
seq__47827_49256 = G__49278;
chunk__47828_49257 = G__49279;
count__47829_49258 = G__49280;
i__47830_49259 = G__49281;
continue;
} else {
var vec__47840_49282 = cljs.core.first(seq__47827_49275__$1);
var col_49283 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47840_49282,(0),null);
var infos_49284 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47840_49282,(1),null);
encode_cols(infos_49284,source_idx_49239,line_49249,col_49283);


var G__49294 = cljs.core.next(seq__47827_49275__$1);
var G__49295 = null;
var G__49296 = (0);
var G__49297 = (0);
seq__47827_49256 = G__49294;
chunk__47828_49257 = G__49295;
count__47829_49258 = G__49296;
i__47830_49259 = G__49297;
continue;
}
} else {
}
}
break;
}


var G__49298 = seq__47759_49244;
var G__49299 = chunk__47760_49245;
var G__49300 = count__47761_49246;
var G__49301 = (i__47762_49247 + (1));
seq__47759_49244 = G__49298;
chunk__47760_49245 = G__49299;
count__47761_49246 = G__49300;
i__47762_49247 = G__49301;
continue;
} else {
var temp__5753__auto___49305 = cljs.core.seq(seq__47759_49244);
if(temp__5753__auto___49305){
var seq__47759_49307__$1 = temp__5753__auto___49305;
if(cljs.core.chunked_seq_QMARK_(seq__47759_49307__$1)){
var c__4556__auto___49308 = cljs.core.chunk_first(seq__47759_49307__$1);
var G__49309 = cljs.core.chunk_rest(seq__47759_49307__$1);
var G__49310 = c__4556__auto___49308;
var G__49311 = cljs.core.count(c__4556__auto___49308);
var G__49312 = (0);
seq__47759_49244 = G__49309;
chunk__47760_49245 = G__49310;
count__47761_49246 = G__49311;
i__47762_49247 = G__49312;
continue;
} else {
var vec__47861_49314 = cljs.core.first(seq__47759_49307__$1);
var line_49315 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47861_49314,(0),null);
var cols_49316 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47861_49314,(1),null);
var seq__47864_49326 = cljs.core.seq(cols_49316);
var chunk__47865_49327 = null;
var count__47866_49328 = (0);
var i__47867_49329 = (0);
while(true){
if((i__47867_49329 < count__47866_49328)){
var vec__47879_49330 = chunk__47865_49327.cljs$core$IIndexed$_nth$arity$2(null,i__47867_49329);
var col_49331 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47879_49330,(0),null);
var infos_49332 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47879_49330,(1),null);
encode_cols(infos_49332,source_idx_49239,line_49315,col_49331);


var G__49336 = seq__47864_49326;
var G__49337 = chunk__47865_49327;
var G__49338 = count__47866_49328;
var G__49339 = (i__47867_49329 + (1));
seq__47864_49326 = G__49336;
chunk__47865_49327 = G__49337;
count__47866_49328 = G__49338;
i__47867_49329 = G__49339;
continue;
} else {
var temp__5753__auto___49340__$1 = cljs.core.seq(seq__47864_49326);
if(temp__5753__auto___49340__$1){
var seq__47864_49341__$1 = temp__5753__auto___49340__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47864_49341__$1)){
var c__4556__auto___49342 = cljs.core.chunk_first(seq__47864_49341__$1);
var G__49343 = cljs.core.chunk_rest(seq__47864_49341__$1);
var G__49344 = c__4556__auto___49342;
var G__49345 = cljs.core.count(c__4556__auto___49342);
var G__49346 = (0);
seq__47864_49326 = G__49343;
chunk__47865_49327 = G__49344;
count__47866_49328 = G__49345;
i__47867_49329 = G__49346;
continue;
} else {
var vec__47884_49347 = cljs.core.first(seq__47864_49341__$1);
var col_49348 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47884_49347,(0),null);
var infos_49349 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47884_49347,(1),null);
encode_cols(infos_49349,source_idx_49239,line_49315,col_49348);


var G__49350 = cljs.core.next(seq__47864_49341__$1);
var G__49351 = null;
var G__49352 = (0);
var G__49353 = (0);
seq__47864_49326 = G__49350;
chunk__47865_49327 = G__49351;
count__47866_49328 = G__49352;
i__47867_49329 = G__49353;
continue;
}
} else {
}
}
break;
}


var G__49354 = cljs.core.next(seq__47759_49307__$1);
var G__49355 = null;
var G__49356 = (0);
var G__49357 = (0);
seq__47759_49244 = G__49354;
chunk__47760_49245 = G__49355;
count__47761_49246 = G__49356;
i__47762_49247 = G__49357;
continue;
}
} else {
}
}
break;
}


var G__49359 = seq__47318_49232;
var G__49360 = chunk__47319_49233;
var G__49361 = count__47320_49234;
var G__49362 = (i__47321_49235 + (1));
seq__47318_49232 = G__49359;
chunk__47319_49233 = G__49360;
count__47320_49234 = G__49361;
i__47321_49235 = G__49362;
continue;
} else {
var temp__5753__auto___49366 = cljs.core.seq(seq__47318_49232);
if(temp__5753__auto___49366){
var seq__47318_49367__$1 = temp__5753__auto___49366;
if(cljs.core.chunked_seq_QMARK_(seq__47318_49367__$1)){
var c__4556__auto___49368 = cljs.core.chunk_first(seq__47318_49367__$1);
var G__49370 = cljs.core.chunk_rest(seq__47318_49367__$1);
var G__49371 = c__4556__auto___49368;
var G__49372 = cljs.core.count(c__4556__auto___49368);
var G__49373 = (0);
seq__47318_49232 = G__49370;
chunk__47319_49233 = G__49371;
count__47320_49234 = G__49372;
i__47321_49235 = G__49373;
continue;
} else {
var vec__47888_49374 = cljs.core.first(seq__47318_49367__$1);
var source_idx_49375 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47888_49374,(0),null);
var vec__47891_49376 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47888_49374,(1),null);
var __49377 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47891_49376,(0),null);
var lines_49378__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47891_49376,(1),null);
var seq__47898_49381 = cljs.core.seq(lines_49378__$1);
var chunk__47899_49382 = null;
var count__47900_49383 = (0);
var i__47901_49384 = (0);
while(true){
if((i__47901_49384 < count__47900_49383)){
var vec__47971_49386 = chunk__47899_49382.cljs$core$IIndexed$_nth$arity$2(null,i__47901_49384);
var line_49387 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47971_49386,(0),null);
var cols_49388 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47971_49386,(1),null);
var seq__47974_49391 = cljs.core.seq(cols_49388);
var chunk__47975_49392 = null;
var count__47976_49393 = (0);
var i__47977_49394 = (0);
while(true){
if((i__47977_49394 < count__47976_49393)){
var vec__47985_49395 = chunk__47975_49392.cljs$core$IIndexed$_nth$arity$2(null,i__47977_49394);
var col_49396 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47985_49395,(0),null);
var infos_49397 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47985_49395,(1),null);
encode_cols(infos_49397,source_idx_49375,line_49387,col_49396);


var G__49405 = seq__47974_49391;
var G__49406 = chunk__47975_49392;
var G__49407 = count__47976_49393;
var G__49408 = (i__47977_49394 + (1));
seq__47974_49391 = G__49405;
chunk__47975_49392 = G__49406;
count__47976_49393 = G__49407;
i__47977_49394 = G__49408;
continue;
} else {
var temp__5753__auto___49409__$1 = cljs.core.seq(seq__47974_49391);
if(temp__5753__auto___49409__$1){
var seq__47974_49410__$1 = temp__5753__auto___49409__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47974_49410__$1)){
var c__4556__auto___49412 = cljs.core.chunk_first(seq__47974_49410__$1);
var G__49413 = cljs.core.chunk_rest(seq__47974_49410__$1);
var G__49414 = c__4556__auto___49412;
var G__49415 = cljs.core.count(c__4556__auto___49412);
var G__49416 = (0);
seq__47974_49391 = G__49413;
chunk__47975_49392 = G__49414;
count__47976_49393 = G__49415;
i__47977_49394 = G__49416;
continue;
} else {
var vec__47996_49420 = cljs.core.first(seq__47974_49410__$1);
var col_49421 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47996_49420,(0),null);
var infos_49422 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47996_49420,(1),null);
encode_cols(infos_49422,source_idx_49375,line_49387,col_49421);


var G__49424 = cljs.core.next(seq__47974_49410__$1);
var G__49425 = null;
var G__49426 = (0);
var G__49427 = (0);
seq__47974_49391 = G__49424;
chunk__47975_49392 = G__49425;
count__47976_49393 = G__49426;
i__47977_49394 = G__49427;
continue;
}
} else {
}
}
break;
}


var G__49428 = seq__47898_49381;
var G__49429 = chunk__47899_49382;
var G__49430 = count__47900_49383;
var G__49431 = (i__47901_49384 + (1));
seq__47898_49381 = G__49428;
chunk__47899_49382 = G__49429;
count__47900_49383 = G__49430;
i__47901_49384 = G__49431;
continue;
} else {
var temp__5753__auto___49432__$1 = cljs.core.seq(seq__47898_49381);
if(temp__5753__auto___49432__$1){
var seq__47898_49433__$1 = temp__5753__auto___49432__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47898_49433__$1)){
var c__4556__auto___49434 = cljs.core.chunk_first(seq__47898_49433__$1);
var G__49435 = cljs.core.chunk_rest(seq__47898_49433__$1);
var G__49436 = c__4556__auto___49434;
var G__49437 = cljs.core.count(c__4556__auto___49434);
var G__49438 = (0);
seq__47898_49381 = G__49435;
chunk__47899_49382 = G__49436;
count__47900_49383 = G__49437;
i__47901_49384 = G__49438;
continue;
} else {
var vec__48002_49440 = cljs.core.first(seq__47898_49433__$1);
var line_49441 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48002_49440,(0),null);
var cols_49442 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48002_49440,(1),null);
var seq__48005_49443 = cljs.core.seq(cols_49442);
var chunk__48006_49444 = null;
var count__48007_49445 = (0);
var i__48008_49446 = (0);
while(true){
if((i__48008_49446 < count__48007_49445)){
var vec__48023_49451 = chunk__48006_49444.cljs$core$IIndexed$_nth$arity$2(null,i__48008_49446);
var col_49452 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48023_49451,(0),null);
var infos_49453 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48023_49451,(1),null);
encode_cols(infos_49453,source_idx_49375,line_49441,col_49452);


var G__49456 = seq__48005_49443;
var G__49457 = chunk__48006_49444;
var G__49458 = count__48007_49445;
var G__49459 = (i__48008_49446 + (1));
seq__48005_49443 = G__49456;
chunk__48006_49444 = G__49457;
count__48007_49445 = G__49458;
i__48008_49446 = G__49459;
continue;
} else {
var temp__5753__auto___49460__$2 = cljs.core.seq(seq__48005_49443);
if(temp__5753__auto___49460__$2){
var seq__48005_49461__$1 = temp__5753__auto___49460__$2;
if(cljs.core.chunked_seq_QMARK_(seq__48005_49461__$1)){
var c__4556__auto___49464 = cljs.core.chunk_first(seq__48005_49461__$1);
var G__49465 = cljs.core.chunk_rest(seq__48005_49461__$1);
var G__49466 = c__4556__auto___49464;
var G__49467 = cljs.core.count(c__4556__auto___49464);
var G__49468 = (0);
seq__48005_49443 = G__49465;
chunk__48006_49444 = G__49466;
count__48007_49445 = G__49467;
i__48008_49446 = G__49468;
continue;
} else {
var vec__48026_49469 = cljs.core.first(seq__48005_49461__$1);
var col_49470 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48026_49469,(0),null);
var infos_49471 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48026_49469,(1),null);
encode_cols(infos_49471,source_idx_49375,line_49441,col_49470);


var G__49472 = cljs.core.next(seq__48005_49461__$1);
var G__49473 = null;
var G__49474 = (0);
var G__49475 = (0);
seq__48005_49443 = G__49472;
chunk__48006_49444 = G__49473;
count__48007_49445 = G__49474;
i__48008_49446 = G__49475;
continue;
}
} else {
}
}
break;
}


var G__49477 = cljs.core.next(seq__47898_49433__$1);
var G__49478 = null;
var G__49479 = (0);
var G__49480 = (0);
seq__47898_49381 = G__49477;
chunk__47899_49382 = G__49478;
count__47900_49383 = G__49479;
i__47901_49384 = G__49480;
continue;
}
} else {
}
}
break;
}


var G__49481 = cljs.core.next(seq__47318_49367__$1);
var G__49482 = null;
var G__49483 = (0);
var G__49484 = (0);
seq__47318_49232 = G__49481;
chunk__47319_49233 = G__49482;
count__47320_49234 = G__49483;
i__47321_49235 = G__49484;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__48029 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?(function (p1__47252_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__47252_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
}):cljs.core.identity),(function (p1__47253_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__47253_SHARP_,/\//));
}));
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__47258_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__47258_SHARP_);
}),cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,cljs.core.deref(lines))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(cljs.core.deref(names__GT_idx)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__48036 = G__48029;
goog.object.set(G__48036,"sourcesContent",cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__48036;
} else {
return G__48029;
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
var vec__48037 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48037,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48037,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__48040 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48040,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48040,(1),null);
var G__49496 = cljs.core.next(col_map_seq);
var G__49497 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__48040,col,infos,vec__48037,line,col_map){
return (function (v,p__48044){
var map__48045 = p__48044;
var map__48045__$1 = (((((!((map__48045 == null))))?(((((map__48045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48045.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48045):map__48045);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48045__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48045__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__48040,col,infos,vec__48037,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__49496;
new_cols = G__49497;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__49503 = cljs.core.next(line_map_seq);
var G__49504 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__49503;
new_lines = G__49504;
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
var seq__48059_49507 = cljs.core.seq(reverse_map);
var chunk__48060_49508 = null;
var count__48061_49509 = (0);
var i__48062_49510 = (0);
while(true){
if((i__48062_49510 < count__48061_49509)){
var vec__48482_49514 = chunk__48060_49508.cljs$core$IIndexed$_nth$arity$2(null,i__48062_49510);
var line_49515 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48482_49514,(0),null);
var columns_49516 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48482_49514,(1),null);
var seq__48485_49518 = cljs.core.seq(columns_49516);
var chunk__48486_49519 = null;
var count__48487_49520 = (0);
var i__48488_49521 = (0);
while(true){
if((i__48488_49521 < count__48487_49520)){
var vec__48607_49523 = chunk__48486_49519.cljs$core$IIndexed$_nth$arity$2(null,i__48488_49521);
var column_49524 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48607_49523,(0),null);
var column_info_49525 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48607_49523,(1),null);
var seq__48610_49530 = cljs.core.seq(column_info_49525);
var chunk__48611_49531 = null;
var count__48612_49532 = (0);
var i__48613_49533 = (0);
while(true){
if((i__48613_49533 < count__48612_49532)){
var map__48668_49534 = chunk__48611_49531.cljs$core$IIndexed$_nth$arity$2(null,i__48613_49533);
var map__48668_49535__$1 = (((((!((map__48668_49534 == null))))?(((((map__48668_49534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48668_49534.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48668_49534):map__48668_49534);
var gline_49536 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48668_49535__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_49537 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48668_49535__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_49538 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48668_49535__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_49536], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__48610_49530,chunk__48611_49531,count__48612_49532,i__48613_49533,seq__48485_49518,chunk__48486_49519,count__48487_49520,i__48488_49521,seq__48059_49507,chunk__48060_49508,count__48061_49509,i__48062_49510,map__48668_49534,map__48668_49535__$1,gline_49536,gcol_49537,name_49538,vec__48607_49523,column_49524,column_info_49525,vec__48482_49514,line_49515,columns_49516,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_49537], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_49515,new cljs.core.Keyword(null,"col","col",-1959363084),column_49524,new cljs.core.Keyword(null,"name","name",1843675177),name_49538], null));
});})(seq__48610_49530,chunk__48611_49531,count__48612_49532,i__48613_49533,seq__48485_49518,chunk__48486_49519,count__48487_49520,i__48488_49521,seq__48059_49507,chunk__48060_49508,count__48061_49509,i__48062_49510,map__48668_49534,map__48668_49535__$1,gline_49536,gcol_49537,name_49538,vec__48607_49523,column_49524,column_info_49525,vec__48482_49514,line_49515,columns_49516,inverted))
,cljs.core.sorted_map()));


var G__49548 = seq__48610_49530;
var G__49549 = chunk__48611_49531;
var G__49550 = count__48612_49532;
var G__49551 = (i__48613_49533 + (1));
seq__48610_49530 = G__49548;
chunk__48611_49531 = G__49549;
count__48612_49532 = G__49550;
i__48613_49533 = G__49551;
continue;
} else {
var temp__5753__auto___49552 = cljs.core.seq(seq__48610_49530);
if(temp__5753__auto___49552){
var seq__48610_49553__$1 = temp__5753__auto___49552;
if(cljs.core.chunked_seq_QMARK_(seq__48610_49553__$1)){
var c__4556__auto___49555 = cljs.core.chunk_first(seq__48610_49553__$1);
var G__49558 = cljs.core.chunk_rest(seq__48610_49553__$1);
var G__49559 = c__4556__auto___49555;
var G__49560 = cljs.core.count(c__4556__auto___49555);
var G__49561 = (0);
seq__48610_49530 = G__49558;
chunk__48611_49531 = G__49559;
count__48612_49532 = G__49560;
i__48613_49533 = G__49561;
continue;
} else {
var map__48678_49562 = cljs.core.first(seq__48610_49553__$1);
var map__48678_49563__$1 = (((((!((map__48678_49562 == null))))?(((((map__48678_49562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48678_49562.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48678_49562):map__48678_49562);
var gline_49564 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48678_49563__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_49565 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48678_49563__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_49566 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48678_49563__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_49564], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__48610_49530,chunk__48611_49531,count__48612_49532,i__48613_49533,seq__48485_49518,chunk__48486_49519,count__48487_49520,i__48488_49521,seq__48059_49507,chunk__48060_49508,count__48061_49509,i__48062_49510,map__48678_49562,map__48678_49563__$1,gline_49564,gcol_49565,name_49566,seq__48610_49553__$1,temp__5753__auto___49552,vec__48607_49523,column_49524,column_info_49525,vec__48482_49514,line_49515,columns_49516,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_49565], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_49515,new cljs.core.Keyword(null,"col","col",-1959363084),column_49524,new cljs.core.Keyword(null,"name","name",1843675177),name_49566], null));
});})(seq__48610_49530,chunk__48611_49531,count__48612_49532,i__48613_49533,seq__48485_49518,chunk__48486_49519,count__48487_49520,i__48488_49521,seq__48059_49507,chunk__48060_49508,count__48061_49509,i__48062_49510,map__48678_49562,map__48678_49563__$1,gline_49564,gcol_49565,name_49566,seq__48610_49553__$1,temp__5753__auto___49552,vec__48607_49523,column_49524,column_info_49525,vec__48482_49514,line_49515,columns_49516,inverted))
,cljs.core.sorted_map()));


var G__49571 = cljs.core.next(seq__48610_49553__$1);
var G__49573 = null;
var G__49574 = (0);
var G__49575 = (0);
seq__48610_49530 = G__49571;
chunk__48611_49531 = G__49573;
count__48612_49532 = G__49574;
i__48613_49533 = G__49575;
continue;
}
} else {
}
}
break;
}


var G__49578 = seq__48485_49518;
var G__49579 = chunk__48486_49519;
var G__49580 = count__48487_49520;
var G__49581 = (i__48488_49521 + (1));
seq__48485_49518 = G__49578;
chunk__48486_49519 = G__49579;
count__48487_49520 = G__49580;
i__48488_49521 = G__49581;
continue;
} else {
var temp__5753__auto___49583 = cljs.core.seq(seq__48485_49518);
if(temp__5753__auto___49583){
var seq__48485_49584__$1 = temp__5753__auto___49583;
if(cljs.core.chunked_seq_QMARK_(seq__48485_49584__$1)){
var c__4556__auto___49585 = cljs.core.chunk_first(seq__48485_49584__$1);
var G__49586 = cljs.core.chunk_rest(seq__48485_49584__$1);
var G__49587 = c__4556__auto___49585;
var G__49588 = cljs.core.count(c__4556__auto___49585);
var G__49589 = (0);
seq__48485_49518 = G__49586;
chunk__48486_49519 = G__49587;
count__48487_49520 = G__49588;
i__48488_49521 = G__49589;
continue;
} else {
var vec__48691_49590 = cljs.core.first(seq__48485_49584__$1);
var column_49591 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48691_49590,(0),null);
var column_info_49592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48691_49590,(1),null);
var seq__48695_49596 = cljs.core.seq(column_info_49592);
var chunk__48696_49597 = null;
var count__48697_49598 = (0);
var i__48698_49599 = (0);
while(true){
if((i__48698_49599 < count__48697_49598)){
var map__48723_49600 = chunk__48696_49597.cljs$core$IIndexed$_nth$arity$2(null,i__48698_49599);
var map__48723_49601__$1 = (((((!((map__48723_49600 == null))))?(((((map__48723_49600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48723_49600.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48723_49600):map__48723_49600);
var gline_49602 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48723_49601__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_49603 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48723_49601__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_49604 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48723_49601__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_49602], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__48695_49596,chunk__48696_49597,count__48697_49598,i__48698_49599,seq__48485_49518,chunk__48486_49519,count__48487_49520,i__48488_49521,seq__48059_49507,chunk__48060_49508,count__48061_49509,i__48062_49510,map__48723_49600,map__48723_49601__$1,gline_49602,gcol_49603,name_49604,vec__48691_49590,column_49591,column_info_49592,seq__48485_49584__$1,temp__5753__auto___49583,vec__48482_49514,line_49515,columns_49516,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_49603], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_49515,new cljs.core.Keyword(null,"col","col",-1959363084),column_49591,new cljs.core.Keyword(null,"name","name",1843675177),name_49604], null));
});})(seq__48695_49596,chunk__48696_49597,count__48697_49598,i__48698_49599,seq__48485_49518,chunk__48486_49519,count__48487_49520,i__48488_49521,seq__48059_49507,chunk__48060_49508,count__48061_49509,i__48062_49510,map__48723_49600,map__48723_49601__$1,gline_49602,gcol_49603,name_49604,vec__48691_49590,column_49591,column_info_49592,seq__48485_49584__$1,temp__5753__auto___49583,vec__48482_49514,line_49515,columns_49516,inverted))
,cljs.core.sorted_map()));


var G__49614 = seq__48695_49596;
var G__49615 = chunk__48696_49597;
var G__49616 = count__48697_49598;
var G__49617 = (i__48698_49599 + (1));
seq__48695_49596 = G__49614;
chunk__48696_49597 = G__49615;
count__48697_49598 = G__49616;
i__48698_49599 = G__49617;
continue;
} else {
var temp__5753__auto___49618__$1 = cljs.core.seq(seq__48695_49596);
if(temp__5753__auto___49618__$1){
var seq__48695_49619__$1 = temp__5753__auto___49618__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48695_49619__$1)){
var c__4556__auto___49620 = cljs.core.chunk_first(seq__48695_49619__$1);
var G__49621 = cljs.core.chunk_rest(seq__48695_49619__$1);
var G__49622 = c__4556__auto___49620;
var G__49623 = cljs.core.count(c__4556__auto___49620);
var G__49624 = (0);
seq__48695_49596 = G__49621;
chunk__48696_49597 = G__49622;
count__48697_49598 = G__49623;
i__48698_49599 = G__49624;
continue;
} else {
var map__48739_49628 = cljs.core.first(seq__48695_49619__$1);
var map__48739_49629__$1 = (((((!((map__48739_49628 == null))))?(((((map__48739_49628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48739_49628.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48739_49628):map__48739_49628);
var gline_49630 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48739_49629__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_49631 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48739_49629__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_49632 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48739_49629__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_49630], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__48695_49596,chunk__48696_49597,count__48697_49598,i__48698_49599,seq__48485_49518,chunk__48486_49519,count__48487_49520,i__48488_49521,seq__48059_49507,chunk__48060_49508,count__48061_49509,i__48062_49510,map__48739_49628,map__48739_49629__$1,gline_49630,gcol_49631,name_49632,seq__48695_49619__$1,temp__5753__auto___49618__$1,vec__48691_49590,column_49591,column_info_49592,seq__48485_49584__$1,temp__5753__auto___49583,vec__48482_49514,line_49515,columns_49516,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_49631], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_49515,new cljs.core.Keyword(null,"col","col",-1959363084),column_49591,new cljs.core.Keyword(null,"name","name",1843675177),name_49632], null));
});})(seq__48695_49596,chunk__48696_49597,count__48697_49598,i__48698_49599,seq__48485_49518,chunk__48486_49519,count__48487_49520,i__48488_49521,seq__48059_49507,chunk__48060_49508,count__48061_49509,i__48062_49510,map__48739_49628,map__48739_49629__$1,gline_49630,gcol_49631,name_49632,seq__48695_49619__$1,temp__5753__auto___49618__$1,vec__48691_49590,column_49591,column_info_49592,seq__48485_49584__$1,temp__5753__auto___49583,vec__48482_49514,line_49515,columns_49516,inverted))
,cljs.core.sorted_map()));


var G__49637 = cljs.core.next(seq__48695_49619__$1);
var G__49638 = null;
var G__49639 = (0);
var G__49640 = (0);
seq__48695_49596 = G__49637;
chunk__48696_49597 = G__49638;
count__48697_49598 = G__49639;
i__48698_49599 = G__49640;
continue;
}
} else {
}
}
break;
}


var G__49643 = cljs.core.next(seq__48485_49584__$1);
var G__49644 = null;
var G__49645 = (0);
var G__49646 = (0);
seq__48485_49518 = G__49643;
chunk__48486_49519 = G__49644;
count__48487_49520 = G__49645;
i__48488_49521 = G__49646;
continue;
}
} else {
}
}
break;
}


var G__49647 = seq__48059_49507;
var G__49648 = chunk__48060_49508;
var G__49649 = count__48061_49509;
var G__49650 = (i__48062_49510 + (1));
seq__48059_49507 = G__49647;
chunk__48060_49508 = G__49648;
count__48061_49509 = G__49649;
i__48062_49510 = G__49650;
continue;
} else {
var temp__5753__auto___49651 = cljs.core.seq(seq__48059_49507);
if(temp__5753__auto___49651){
var seq__48059_49652__$1 = temp__5753__auto___49651;
if(cljs.core.chunked_seq_QMARK_(seq__48059_49652__$1)){
var c__4556__auto___49653 = cljs.core.chunk_first(seq__48059_49652__$1);
var G__49654 = cljs.core.chunk_rest(seq__48059_49652__$1);
var G__49655 = c__4556__auto___49653;
var G__49656 = cljs.core.count(c__4556__auto___49653);
var G__49657 = (0);
seq__48059_49507 = G__49654;
chunk__48060_49508 = G__49655;
count__48061_49509 = G__49656;
i__48062_49510 = G__49657;
continue;
} else {
var vec__48751_49660 = cljs.core.first(seq__48059_49652__$1);
var line_49661 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48751_49660,(0),null);
var columns_49662 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48751_49660,(1),null);
var seq__48754_49665 = cljs.core.seq(columns_49662);
var chunk__48755_49666 = null;
var count__48756_49667 = (0);
var i__48757_49668 = (0);
while(true){
if((i__48757_49668 < count__48756_49667)){
var vec__48898_49669 = chunk__48755_49666.cljs$core$IIndexed$_nth$arity$2(null,i__48757_49668);
var column_49670 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48898_49669,(0),null);
var column_info_49671 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48898_49669,(1),null);
var seq__48903_49675 = cljs.core.seq(column_info_49671);
var chunk__48904_49676 = null;
var count__48905_49677 = (0);
var i__48906_49678 = (0);
while(true){
if((i__48906_49678 < count__48905_49677)){
var map__48943_49684 = chunk__48904_49676.cljs$core$IIndexed$_nth$arity$2(null,i__48906_49678);
var map__48943_49685__$1 = (((((!((map__48943_49684 == null))))?(((((map__48943_49684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48943_49684.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48943_49684):map__48943_49684);
var gline_49686 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48943_49685__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_49687 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48943_49685__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_49688 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48943_49685__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_49686], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__48903_49675,chunk__48904_49676,count__48905_49677,i__48906_49678,seq__48754_49665,chunk__48755_49666,count__48756_49667,i__48757_49668,seq__48059_49507,chunk__48060_49508,count__48061_49509,i__48062_49510,map__48943_49684,map__48943_49685__$1,gline_49686,gcol_49687,name_49688,vec__48898_49669,column_49670,column_info_49671,vec__48751_49660,line_49661,columns_49662,seq__48059_49652__$1,temp__5753__auto___49651,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_49687], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_49661,new cljs.core.Keyword(null,"col","col",-1959363084),column_49670,new cljs.core.Keyword(null,"name","name",1843675177),name_49688], null));
});})(seq__48903_49675,chunk__48904_49676,count__48905_49677,i__48906_49678,seq__48754_49665,chunk__48755_49666,count__48756_49667,i__48757_49668,seq__48059_49507,chunk__48060_49508,count__48061_49509,i__48062_49510,map__48943_49684,map__48943_49685__$1,gline_49686,gcol_49687,name_49688,vec__48898_49669,column_49670,column_info_49671,vec__48751_49660,line_49661,columns_49662,seq__48059_49652__$1,temp__5753__auto___49651,inverted))
,cljs.core.sorted_map()));


var G__49716 = seq__48903_49675;
var G__49717 = chunk__48904_49676;
var G__49718 = count__48905_49677;
var G__49719 = (i__48906_49678 + (1));
seq__48903_49675 = G__49716;
chunk__48904_49676 = G__49717;
count__48905_49677 = G__49718;
i__48906_49678 = G__49719;
continue;
} else {
var temp__5753__auto___49725__$1 = cljs.core.seq(seq__48903_49675);
if(temp__5753__auto___49725__$1){
var seq__48903_49727__$1 = temp__5753__auto___49725__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48903_49727__$1)){
var c__4556__auto___49730 = cljs.core.chunk_first(seq__48903_49727__$1);
var G__49732 = cljs.core.chunk_rest(seq__48903_49727__$1);
var G__49733 = c__4556__auto___49730;
var G__49734 = cljs.core.count(c__4556__auto___49730);
var G__49735 = (0);
seq__48903_49675 = G__49732;
chunk__48904_49676 = G__49733;
count__48905_49677 = G__49734;
i__48906_49678 = G__49735;
continue;
} else {
var map__48958_49739 = cljs.core.first(seq__48903_49727__$1);
var map__48958_49740__$1 = (((((!((map__48958_49739 == null))))?(((((map__48958_49739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48958_49739.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48958_49739):map__48958_49739);
var gline_49741 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48958_49740__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_49742 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48958_49740__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_49743 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48958_49740__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_49741], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__48903_49675,chunk__48904_49676,count__48905_49677,i__48906_49678,seq__48754_49665,chunk__48755_49666,count__48756_49667,i__48757_49668,seq__48059_49507,chunk__48060_49508,count__48061_49509,i__48062_49510,map__48958_49739,map__48958_49740__$1,gline_49741,gcol_49742,name_49743,seq__48903_49727__$1,temp__5753__auto___49725__$1,vec__48898_49669,column_49670,column_info_49671,vec__48751_49660,line_49661,columns_49662,seq__48059_49652__$1,temp__5753__auto___49651,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_49742], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_49661,new cljs.core.Keyword(null,"col","col",-1959363084),column_49670,new cljs.core.Keyword(null,"name","name",1843675177),name_49743], null));
});})(seq__48903_49675,chunk__48904_49676,count__48905_49677,i__48906_49678,seq__48754_49665,chunk__48755_49666,count__48756_49667,i__48757_49668,seq__48059_49507,chunk__48060_49508,count__48061_49509,i__48062_49510,map__48958_49739,map__48958_49740__$1,gline_49741,gcol_49742,name_49743,seq__48903_49727__$1,temp__5753__auto___49725__$1,vec__48898_49669,column_49670,column_info_49671,vec__48751_49660,line_49661,columns_49662,seq__48059_49652__$1,temp__5753__auto___49651,inverted))
,cljs.core.sorted_map()));


var G__49762 = cljs.core.next(seq__48903_49727__$1);
var G__49763 = null;
var G__49764 = (0);
var G__49765 = (0);
seq__48903_49675 = G__49762;
chunk__48904_49676 = G__49763;
count__48905_49677 = G__49764;
i__48906_49678 = G__49765;
continue;
}
} else {
}
}
break;
}


var G__49766 = seq__48754_49665;
var G__49767 = chunk__48755_49666;
var G__49768 = count__48756_49667;
var G__49769 = (i__48757_49668 + (1));
seq__48754_49665 = G__49766;
chunk__48755_49666 = G__49767;
count__48756_49667 = G__49768;
i__48757_49668 = G__49769;
continue;
} else {
var temp__5753__auto___49770__$1 = cljs.core.seq(seq__48754_49665);
if(temp__5753__auto___49770__$1){
var seq__48754_49771__$1 = temp__5753__auto___49770__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48754_49771__$1)){
var c__4556__auto___49772 = cljs.core.chunk_first(seq__48754_49771__$1);
var G__49773 = cljs.core.chunk_rest(seq__48754_49771__$1);
var G__49774 = c__4556__auto___49772;
var G__49775 = cljs.core.count(c__4556__auto___49772);
var G__49776 = (0);
seq__48754_49665 = G__49773;
chunk__48755_49666 = G__49774;
count__48756_49667 = G__49775;
i__48757_49668 = G__49776;
continue;
} else {
var vec__48972_49777 = cljs.core.first(seq__48754_49771__$1);
var column_49778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48972_49777,(0),null);
var column_info_49779 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48972_49777,(1),null);
var seq__48975_49781 = cljs.core.seq(column_info_49779);
var chunk__48976_49782 = null;
var count__48977_49783 = (0);
var i__48978_49784 = (0);
while(true){
if((i__48978_49784 < count__48977_49783)){
var map__49018_49787 = chunk__48976_49782.cljs$core$IIndexed$_nth$arity$2(null,i__48978_49784);
var map__49018_49788__$1 = (((((!((map__49018_49787 == null))))?(((((map__49018_49787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49018_49787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49018_49787):map__49018_49787);
var gline_49789 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49018_49788__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_49790 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49018_49788__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_49791 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49018_49788__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_49789], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__48975_49781,chunk__48976_49782,count__48977_49783,i__48978_49784,seq__48754_49665,chunk__48755_49666,count__48756_49667,i__48757_49668,seq__48059_49507,chunk__48060_49508,count__48061_49509,i__48062_49510,map__49018_49787,map__49018_49788__$1,gline_49789,gcol_49790,name_49791,vec__48972_49777,column_49778,column_info_49779,seq__48754_49771__$1,temp__5753__auto___49770__$1,vec__48751_49660,line_49661,columns_49662,seq__48059_49652__$1,temp__5753__auto___49651,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_49790], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_49661,new cljs.core.Keyword(null,"col","col",-1959363084),column_49778,new cljs.core.Keyword(null,"name","name",1843675177),name_49791], null));
});})(seq__48975_49781,chunk__48976_49782,count__48977_49783,i__48978_49784,seq__48754_49665,chunk__48755_49666,count__48756_49667,i__48757_49668,seq__48059_49507,chunk__48060_49508,count__48061_49509,i__48062_49510,map__49018_49787,map__49018_49788__$1,gline_49789,gcol_49790,name_49791,vec__48972_49777,column_49778,column_info_49779,seq__48754_49771__$1,temp__5753__auto___49770__$1,vec__48751_49660,line_49661,columns_49662,seq__48059_49652__$1,temp__5753__auto___49651,inverted))
,cljs.core.sorted_map()));


var G__49814 = seq__48975_49781;
var G__49815 = chunk__48976_49782;
var G__49816 = count__48977_49783;
var G__49817 = (i__48978_49784 + (1));
seq__48975_49781 = G__49814;
chunk__48976_49782 = G__49815;
count__48977_49783 = G__49816;
i__48978_49784 = G__49817;
continue;
} else {
var temp__5753__auto___49818__$2 = cljs.core.seq(seq__48975_49781);
if(temp__5753__auto___49818__$2){
var seq__48975_49820__$1 = temp__5753__auto___49818__$2;
if(cljs.core.chunked_seq_QMARK_(seq__48975_49820__$1)){
var c__4556__auto___49822 = cljs.core.chunk_first(seq__48975_49820__$1);
var G__49823 = cljs.core.chunk_rest(seq__48975_49820__$1);
var G__49824 = c__4556__auto___49822;
var G__49825 = cljs.core.count(c__4556__auto___49822);
var G__49826 = (0);
seq__48975_49781 = G__49823;
chunk__48976_49782 = G__49824;
count__48977_49783 = G__49825;
i__48978_49784 = G__49826;
continue;
} else {
var map__49038_49828 = cljs.core.first(seq__48975_49820__$1);
var map__49038_49829__$1 = (((((!((map__49038_49828 == null))))?(((((map__49038_49828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49038_49828.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49038_49828):map__49038_49828);
var gline_49830 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49038_49829__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_49831 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49038_49829__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_49832 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49038_49829__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_49830], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__48975_49781,chunk__48976_49782,count__48977_49783,i__48978_49784,seq__48754_49665,chunk__48755_49666,count__48756_49667,i__48757_49668,seq__48059_49507,chunk__48060_49508,count__48061_49509,i__48062_49510,map__49038_49828,map__49038_49829__$1,gline_49830,gcol_49831,name_49832,seq__48975_49820__$1,temp__5753__auto___49818__$2,vec__48972_49777,column_49778,column_info_49779,seq__48754_49771__$1,temp__5753__auto___49770__$1,vec__48751_49660,line_49661,columns_49662,seq__48059_49652__$1,temp__5753__auto___49651,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_49831], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_49661,new cljs.core.Keyword(null,"col","col",-1959363084),column_49778,new cljs.core.Keyword(null,"name","name",1843675177),name_49832], null));
});})(seq__48975_49781,chunk__48976_49782,count__48977_49783,i__48978_49784,seq__48754_49665,chunk__48755_49666,count__48756_49667,i__48757_49668,seq__48059_49507,chunk__48060_49508,count__48061_49509,i__48062_49510,map__49038_49828,map__49038_49829__$1,gline_49830,gcol_49831,name_49832,seq__48975_49820__$1,temp__5753__auto___49818__$2,vec__48972_49777,column_49778,column_info_49779,seq__48754_49771__$1,temp__5753__auto___49770__$1,vec__48751_49660,line_49661,columns_49662,seq__48059_49652__$1,temp__5753__auto___49651,inverted))
,cljs.core.sorted_map()));


var G__49835 = cljs.core.next(seq__48975_49820__$1);
var G__49836 = null;
var G__49837 = (0);
var G__49838 = (0);
seq__48975_49781 = G__49835;
chunk__48976_49782 = G__49836;
count__48977_49783 = G__49837;
i__48978_49784 = G__49838;
continue;
}
} else {
}
}
break;
}


var G__49840 = cljs.core.next(seq__48754_49771__$1);
var G__49841 = null;
var G__49842 = (0);
var G__49843 = (0);
seq__48754_49665 = G__49840;
chunk__48755_49666 = G__49841;
count__48756_49667 = G__49842;
i__48757_49668 = G__49843;
continue;
}
} else {
}
}
break;
}


var G__49844 = cljs.core.next(seq__48059_49652__$1);
var G__49845 = null;
var G__49846 = (0);
var G__49847 = (0);
seq__48059_49507 = G__49844;
chunk__48060_49508 = G__49845;
count__48061_49509 = G__49846;
i__48062_49510 = G__49847;
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
