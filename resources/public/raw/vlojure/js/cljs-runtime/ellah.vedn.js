goog.provide('ellah.vedn');
ellah.vedn.test_str = "(nth\n   (iterate (fn [f]\n                   \n                   (conj f\n                         (+ (last f)\n                          (last (butlast f)))))\n                 [0 1])\n   (+ 1 2))";
ellah.vedn.whitespace_characters = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["\t",null," ",null,"\n",null], null), null);
ellah.vedn.opener__GT_type = new cljs.core.PersistentArrayMap(null, 5, ["(",new cljs.core.Keyword(null,"list","list",765357683),"[",new cljs.core.Keyword(null,"vector","vector",1902966158),"{",new cljs.core.Keyword(null,"map","map",1371690461),"#{",new cljs.core.Keyword(null,"set","set",304602554),"#(",new cljs.core.Keyword(null,"lit-fn","lit-fn",782737969)], null);
ellah.vedn.type__GT_opener = clojure.set.map_invert(ellah.vedn.opener__GT_type);
ellah.vedn.type__GT_closer = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"list","list",765357683),")",new cljs.core.Keyword(null,"vector","vector",1902966158),"]",new cljs.core.Keyword(null,"map","map",1371690461),"}",new cljs.core.Keyword(null,"set","set",304602554),"}",new cljs.core.Keyword(null,"lit-fn","lit-fn",782737969),")"], null);
ellah.vedn.closer_tokens = cljs.core.vec(cljs.core.set(cljs.core.vals(ellah.vedn.type__GT_closer)));
ellah.vedn.special_tokens = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.keys(ellah.vedn.opener__GT_type),ellah.vedn.closer_tokens,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#_","#'","##Inf","##-Inf","##NaN","@","'","`","~@","~"], null)], 0)));
ellah.vedn.break_token = (function ellah$vedn$break_token(token){
return cljs.core.reverse(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,(function (){var size = cljs.core.count(token);
var index = (0);
var subtokens = cljs.core.List.EMPTY;
var subtoken_start = (0);
var in_string_QMARK_ = false;
while(true){
if((index >= size)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(subtokens,cljs.core.subs.cljs$core$IFn$_invoke$arity$2(token,subtoken_start));
} else {
var special_token = cljs.core.some(((function (index,subtokens,subtoken_start,in_string_QMARK_,size){
return (function (special_token){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(special_token,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(token,index,(index + cljs.core.count(special_token))))){
return special_token;
} else {
return null;
}
});})(index,subtokens,subtoken_start,in_string_QMARK_,size))
,ellah.vedn.special_tokens);
var quote_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(token,index),"\"")) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(token,(index - (1)),index),"\\")));
if(in_string_QMARK_){
if(quote_QMARK_){
var G__432513 = (index + (1));
var G__432514 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(subtokens,["\"",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(token,subtoken_start,index),"\""].join(''));
var G__432515 = (index + (1));
var G__432516 = false;
index = G__432513;
subtokens = G__432514;
subtoken_start = G__432515;
in_string_QMARK_ = G__432516;
continue;
} else {
var G__432517 = (index + (1));
var G__432518 = subtokens;
var G__432519 = subtoken_start;
var G__432520 = true;
index = G__432517;
subtokens = G__432518;
subtoken_start = G__432519;
in_string_QMARK_ = G__432520;
continue;
}
} else {
if(cljs.core.truth_(special_token)){
var special_token_size = cljs.core.count(special_token);
var G__432521 = (index + special_token_size);
var G__432522 = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(subtokens,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(token,subtoken_start,index),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([special_token], 0));
var G__432523 = (index + special_token_size);
var G__432524 = false;
index = G__432521;
subtokens = G__432522;
subtoken_start = G__432523;
in_string_QMARK_ = G__432524;
continue;
} else {
if(quote_QMARK_){
var G__432525 = (index + (1));
var G__432526 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(subtokens,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(token,subtoken_start,index));
var G__432527 = (index + (1));
var G__432528 = true;
index = G__432525;
subtokens = G__432526;
subtoken_start = G__432527;
in_string_QMARK_ = G__432528;
continue;
} else {
var G__432529 = (index + (1));
var G__432530 = subtokens;
var G__432531 = subtoken_start;
var G__432532 = false;
index = G__432529;
subtokens = G__432530;
subtoken_start = G__432531;
in_string_QMARK_ = G__432532;
continue;
}
}
}
}
break;
}
})()));
});
ellah.vedn.tokenize_clj = (function ellah$vedn$tokenize_clj(clj_str){
var size = cljs.core.count(clj_str);
var str_index = (0);
var past_tokens = cljs.core.List.EMPTY;
var token_start = null;
var in_str_QMARK_ = false;
while(true){
if((str_index >= size)){
return cljs.core.vec((cljs.core.truth_(token_start)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(past_tokens,ellah.vedn.break_token(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(clj_str,token_start))):past_tokens));
} else {
var current_character = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clj_str,str_index);
var whitespace_QMARK_ = (ellah.vedn.whitespace_characters.cljs$core$IFn$_invoke$arity$1 ? ellah.vedn.whitespace_characters.cljs$core$IFn$_invoke$arity$1(current_character) : ellah.vedn.whitespace_characters.call(null,current_character));
var quote_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_character,"\"");
if(in_str_QMARK_){
if(quote_QMARK_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clj_str,(str_index - (1))),"\\")){
var G__432535 = (str_index + (1));
var G__432536 = past_tokens;
var G__432537 = token_start;
var G__432538 = true;
str_index = G__432535;
past_tokens = G__432536;
token_start = G__432537;
in_str_QMARK_ = G__432538;
continue;
} else {
var G__432539 = (str_index + (1));
var G__432540 = (cljs.core.truth_(token_start)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(past_tokens,ellah.vedn.break_token(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(clj_str,token_start,(str_index + (1))))):past_tokens);
var G__432541 = null;
var G__432542 = false;
str_index = G__432539;
past_tokens = G__432540;
token_start = G__432541;
in_str_QMARK_ = G__432542;
continue;
}
} else {
var G__432543 = (str_index + (1));
var G__432544 = past_tokens;
var G__432545 = token_start;
var G__432546 = true;
str_index = G__432543;
past_tokens = G__432544;
token_start = G__432545;
in_str_QMARK_ = G__432546;
continue;
}
} else {
if(cljs.core.truth_(whitespace_QMARK_)){
var G__432547 = (str_index + (1));
var G__432548 = (cljs.core.truth_(token_start)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(past_tokens,ellah.vedn.break_token(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(clj_str,token_start,str_index))):past_tokens);
var G__432549 = null;
var G__432550 = false;
str_index = G__432547;
past_tokens = G__432548;
token_start = G__432549;
in_str_QMARK_ = G__432550;
continue;
} else {
var G__432551 = (str_index + (1));
var G__432552 = past_tokens;
var G__432553 = (function (){var or__4126__auto__ = token_start;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return str_index;
}
})();
var G__432554 = quote_QMARK_;
str_index = G__432551;
past_tokens = G__432552;
token_start = G__432553;
in_str_QMARK_ = G__432554;
continue;
}
}
}
break;
}
});
ellah.vedn.strip_single_line_comments = (function ellah$vedn$strip_single_line_comments(clj_str){
var index = (0);
var stripped_chars = cljs.core.PersistentVector.EMPTY;
var comment_QMARK_ = false;
var in_string_QMARK_ = false;
while(true){
if((index >= cljs.core.count(clj_str))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,stripped_chars);
} else {
var character = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clj_str,index);
var quote_QMARK_ = (((!(comment_QMARK_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(character,"\"")) && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clj_str,(index - (1))),"\\")))));
if(in_string_QMARK_){
var G__432559 = (index + (1));
var G__432560 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stripped_chars,character);
var G__432561 = false;
var G__432562 = (!(quote_QMARK_));
index = G__432559;
stripped_chars = G__432560;
comment_QMARK_ = G__432561;
in_string_QMARK_ = G__432562;
continue;
} else {
var in_comment_QMARK_ = ((comment_QMARK_) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(character,";")));
var G__432564 = (index + (1));
var G__432565 = ((in_comment_QMARK_)?stripped_chars:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stripped_chars,character));
var G__432566 = ((in_comment_QMARK_) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(character,"\n")));
var G__432567 = quote_QMARK_;
index = G__432564;
stripped_chars = G__432565;
comment_QMARK_ = G__432566;
in_string_QMARK_ = G__432567;
continue;
}
}
break;
}
});
ellah.vedn.literal_form = (function ellah$vedn$literal_form(token){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"literal","literal",1664775605),new cljs.core.Keyword(null,"value","value",305978217),token], null);
});
ellah.vedn.get_child = (function ellah$vedn$get_child(form,path){
if(cljs.core.empty_QMARK_(path)){
return form;
} else {
var G__432491 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(form),cljs.core.first(path));
var G__432492 = cljs.core.rest(path);
return (ellah.vedn.get_child.cljs$core$IFn$_invoke$arity$2 ? ellah.vedn.get_child.cljs$core$IFn$_invoke$arity$2(G__432491,G__432492) : ellah.vedn.get_child.call(null,G__432491,G__432492));
}
});
ellah.vedn.add_child = (function ellah$vedn$add_child(form,path,child){
if(cljs.core.empty_QMARK_(path)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(form,new cljs.core.Keyword(null,"children","children",-940561982),(function (p1__432493_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__432493_SHARP_,child);
}));
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.first(path)], null),(function (p1__432494_SHARP_){
var G__432495 = p1__432494_SHARP_;
var G__432496 = cljs.core.rest(path);
var G__432497 = child;
return (ellah.vedn.add_child.cljs$core$IFn$_invoke$arity$3 ? ellah.vedn.add_child.cljs$core$IFn$_invoke$arity$3(G__432495,G__432496,G__432497) : ellah.vedn.add_child.call(null,G__432495,G__432496,G__432497));
}));
}
});
ellah.vedn.vector_insert = (function ellah$vedn$vector_insert(v,index,value){
if(cljs.core.empty_QMARK_(v)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null);
} else {
var bounded_index = (function (){var x__4214__auto__ = (0);
var y__4215__auto__ = (function (){var x__4217__auto__ = (cljs.core.count - (1));
var y__4218__auto__ = index;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,(0),bounded_index),(new cljs.core.List(null,value,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,bounded_index)], 0)));
}
});
ellah.vedn.vector_remove = (function ellah$vedn$vector_remove(v,index){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,(0),index),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(index + (1)))));
});
ellah.vedn.insert_child = (function ellah$vedn$insert_child(form,path,child){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(path),(1))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(form,new cljs.core.Keyword(null,"children","children",-940561982),(function (p1__432498_SHARP_){
return ellah.vedn.vector_insert(p1__432498_SHARP_,(cljs.core.first(path) + (1)),child);
}));
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.first(path)], null),(function (p1__432499_SHARP_){
var G__432500 = p1__432499_SHARP_;
var G__432501 = cljs.core.rest(path);
var G__432502 = child;
return (ellah.vedn.insert_child.cljs$core$IFn$_invoke$arity$3 ? ellah.vedn.insert_child.cljs$core$IFn$_invoke$arity$3(G__432500,G__432501,G__432502) : ellah.vedn.insert_child.call(null,G__432500,G__432501,G__432502));
}));
}
});
ellah.vedn.replace_child = (function ellah$vedn$replace_child(form,path,child){
if(cljs.core.empty_QMARK_(path)){
return child;
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.first(path)], null),(function (p1__432503_SHARP_){
var G__432504 = p1__432503_SHARP_;
var G__432505 = cljs.core.rest(path);
var G__432506 = child;
return (ellah.vedn.replace_child.cljs$core$IFn$_invoke$arity$3 ? ellah.vedn.replace_child.cljs$core$IFn$_invoke$arity$3(G__432504,G__432505,G__432506) : ellah.vedn.replace_child.call(null,G__432504,G__432505,G__432506));
}));
}
});
ellah.vedn.remove_child = (function ellah$vedn$remove_child(form,path){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(path),(1))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(form,new cljs.core.Keyword(null,"children","children",-940561982),(function (p1__432507_SHARP_){
return ellah.vedn.vector_remove(p1__432507_SHARP_,cljs.core.first(path));
}));
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.first(path)], null),(function (p1__432508_SHARP_){
var G__432509 = p1__432508_SHARP_;
var G__432510 = cljs.core.rest(path);
return (ellah.vedn.remove_child.cljs$core$IFn$_invoke$arity$2 ? ellah.vedn.remove_child.cljs$core$IFn$_invoke$arity$2(G__432509,G__432510) : ellah.vedn.remove_child.call(null,G__432509,G__432510));
}));
}
});
ellah.vedn.tokens__GT_vedn = (function ellah$vedn$tokens__GT_vedn(tokens){
var token_index = (0);
var form = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY], null);
var path = cljs.core.PersistentVector.EMPTY;
while(true){
if((token_index >= cljs.core.count(tokens))){
return form;
} else {
var token = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tokens,token_index);
var opener_type = (ellah.vedn.opener__GT_type.cljs$core$IFn$_invoke$arity$1 ? ellah.vedn.opener__GT_type.cljs$core$IFn$_invoke$arity$1(token) : ellah.vedn.opener__GT_type.call(null,token));
if(cljs.core.truth_(opener_type)){
var G__432571 = (token_index + (1));
var G__432572 = ellah.vedn.add_child(form,path,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),opener_type,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY], null));
var G__432573 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,cljs.core.count(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ellah.vedn.get_child(form,path))));
token_index = G__432571;
form = G__432572;
path = G__432573;
continue;
} else {
if(cljs.core.truth_(ellah.util.in_QMARK_(ellah.vedn.closer_tokens,token))){
var G__432574 = (token_index + (1));
var G__432575 = form;
var G__432576 = cljs.core.pop(path);
token_index = G__432574;
form = G__432575;
path = G__432576;
continue;
} else {
var G__432577 = (token_index + (1));
var G__432578 = ellah.vedn.add_child(form,path,ellah.vedn.literal_form(token));
var G__432579 = path;
token_index = G__432577;
form = G__432578;
path = G__432579;
continue;
}
}
}
break;
}
});
ellah.vedn.clj__GT_vedn = (function ellah$vedn$clj__GT_vedn(clj_str){
return ellah.vedn.tokens__GT_vedn(ellah.vedn.tokenize_clj(ellah.vedn.strip_single_line_comments(clj_str)));
});
ellah.vedn.vedn__GT_clj = (function ellah$vedn$vedn__GT_clj(form){
var map__432511 = form;
var map__432511__$1 = (((((!((map__432511 == null))))?(((((map__432511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__432511.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__432511):map__432511);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__432511__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__432511__$1,new cljs.core.Keyword(null,"value","value",305978217));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__432511__$1,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"literal","literal",1664775605))){
return value;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((ellah.vedn.type__GT_opener.cljs$core$IFn$_invoke$arity$1 ? ellah.vedn.type__GT_opener.cljs$core$IFn$_invoke$arity$1(type) : ellah.vedn.type__GT_opener.call(null,type))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (child,first_QMARK_){
return [((cljs.core.not(first_QMARK_))?" ":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1((ellah.vedn.vedn__GT_clj.cljs$core$IFn$_invoke$arity$1 ? ellah.vedn.vedn__GT_clj.cljs$core$IFn$_invoke$arity$1(child) : ellah.vedn.vedn__GT_clj.call(null,child)))].join('');
}),children,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(false),true)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((ellah.vedn.type__GT_closer.cljs$core$IFn$_invoke$arity$1 ? ellah.vedn.type__GT_closer.cljs$core$IFn$_invoke$arity$1(type) : ellah.vedn.type__GT_closer.call(null,type)))].join('');
}
});

//# sourceMappingURL=ellah.vedn.js.map
