goog.provide('ellah.vedn');
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
var G__182050 = (index + (1));
var G__182051 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(subtokens,["\"",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(token,subtoken_start,index),"\""].join(''));
var G__182052 = (index + (1));
var G__182053 = false;
index = G__182050;
subtokens = G__182051;
subtoken_start = G__182052;
in_string_QMARK_ = G__182053;
continue;
} else {
var G__182054 = (index + (1));
var G__182055 = subtokens;
var G__182056 = subtoken_start;
var G__182057 = true;
index = G__182054;
subtokens = G__182055;
subtoken_start = G__182056;
in_string_QMARK_ = G__182057;
continue;
}
} else {
if(cljs.core.truth_(special_token)){
var special_token_size = cljs.core.count(special_token);
var G__182058 = (index + special_token_size);
var G__182059 = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(subtokens,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(token,subtoken_start,index),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([special_token], 0));
var G__182060 = (index + special_token_size);
var G__182061 = false;
index = G__182058;
subtokens = G__182059;
subtoken_start = G__182060;
in_string_QMARK_ = G__182061;
continue;
} else {
if(quote_QMARK_){
var G__182062 = (index + (1));
var G__182063 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(subtokens,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(token,subtoken_start,index));
var G__182064 = (index + (1));
var G__182065 = true;
index = G__182062;
subtokens = G__182063;
subtoken_start = G__182064;
in_string_QMARK_ = G__182065;
continue;
} else {
var G__182066 = (index + (1));
var G__182067 = subtokens;
var G__182068 = subtoken_start;
var G__182069 = false;
index = G__182066;
subtokens = G__182067;
subtoken_start = G__182068;
in_string_QMARK_ = G__182069;
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
var G__182070 = (str_index + (1));
var G__182071 = past_tokens;
var G__182072 = token_start;
var G__182073 = true;
str_index = G__182070;
past_tokens = G__182071;
token_start = G__182072;
in_str_QMARK_ = G__182073;
continue;
} else {
var G__182074 = (str_index + (1));
var G__182075 = (cljs.core.truth_(token_start)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(past_tokens,ellah.vedn.break_token(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(clj_str,token_start,(str_index + (1))))):past_tokens);
var G__182076 = null;
var G__182077 = false;
str_index = G__182074;
past_tokens = G__182075;
token_start = G__182076;
in_str_QMARK_ = G__182077;
continue;
}
} else {
var G__182078 = (str_index + (1));
var G__182079 = past_tokens;
var G__182080 = token_start;
var G__182081 = true;
str_index = G__182078;
past_tokens = G__182079;
token_start = G__182080;
in_str_QMARK_ = G__182081;
continue;
}
} else {
if(cljs.core.truth_(whitespace_QMARK_)){
var G__182082 = (str_index + (1));
var G__182083 = (cljs.core.truth_(token_start)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(past_tokens,ellah.vedn.break_token(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(clj_str,token_start,str_index))):past_tokens);
var G__182084 = null;
var G__182085 = false;
str_index = G__182082;
past_tokens = G__182083;
token_start = G__182084;
in_str_QMARK_ = G__182085;
continue;
} else {
var G__182086 = (str_index + (1));
var G__182087 = past_tokens;
var G__182088 = (function (){var or__4126__auto__ = token_start;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return str_index;
}
})();
var G__182089 = quote_QMARK_;
str_index = G__182086;
past_tokens = G__182087;
token_start = G__182088;
in_str_QMARK_ = G__182089;
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
var G__182090 = (index + (1));
var G__182091 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stripped_chars,character);
var G__182092 = false;
var G__182093 = (!(quote_QMARK_));
index = G__182090;
stripped_chars = G__182091;
comment_QMARK_ = G__182092;
in_string_QMARK_ = G__182093;
continue;
} else {
var in_comment_QMARK_ = ((comment_QMARK_) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(character,";")));
var G__182094 = (index + (1));
var G__182095 = ((in_comment_QMARK_)?stripped_chars:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stripped_chars,character));
var G__182096 = ((in_comment_QMARK_) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(character,"\n")));
var G__182097 = quote_QMARK_;
index = G__182094;
stripped_chars = G__182095;
comment_QMARK_ = G__182096;
in_string_QMARK_ = G__182097;
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
var G__182028 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(form),cljs.core.first(path));
var G__182029 = cljs.core.rest(path);
return (ellah.vedn.get_child.cljs$core$IFn$_invoke$arity$2 ? ellah.vedn.get_child.cljs$core$IFn$_invoke$arity$2(G__182028,G__182029) : ellah.vedn.get_child.call(null,G__182028,G__182029));
}
});
ellah.vedn.add_child = (function ellah$vedn$add_child(form,path,child){
if(cljs.core.empty_QMARK_(path)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(form,new cljs.core.Keyword(null,"children","children",-940561982),(function (p1__182030_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__182030_SHARP_,child);
}));
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.first(path)], null),(function (p1__182031_SHARP_){
var G__182032 = p1__182031_SHARP_;
var G__182033 = cljs.core.rest(path);
var G__182034 = child;
return (ellah.vedn.add_child.cljs$core$IFn$_invoke$arity$3 ? ellah.vedn.add_child.cljs$core$IFn$_invoke$arity$3(G__182032,G__182033,G__182034) : ellah.vedn.add_child.call(null,G__182032,G__182033,G__182034));
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
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(form,new cljs.core.Keyword(null,"children","children",-940561982),(function (p1__182035_SHARP_){
return ellah.vedn.vector_insert(p1__182035_SHARP_,(cljs.core.first(path) + (1)),child);
}));
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.first(path)], null),(function (p1__182036_SHARP_){
var G__182037 = p1__182036_SHARP_;
var G__182038 = cljs.core.rest(path);
var G__182039 = child;
return (ellah.vedn.insert_child.cljs$core$IFn$_invoke$arity$3 ? ellah.vedn.insert_child.cljs$core$IFn$_invoke$arity$3(G__182037,G__182038,G__182039) : ellah.vedn.insert_child.call(null,G__182037,G__182038,G__182039));
}));
}
});
ellah.vedn.replace_child = (function ellah$vedn$replace_child(form,path,child){
if(cljs.core.empty_QMARK_(path)){
return child;
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.first(path)], null),(function (p1__182040_SHARP_){
var G__182041 = p1__182040_SHARP_;
var G__182042 = cljs.core.rest(path);
var G__182043 = child;
return (ellah.vedn.replace_child.cljs$core$IFn$_invoke$arity$3 ? ellah.vedn.replace_child.cljs$core$IFn$_invoke$arity$3(G__182041,G__182042,G__182043) : ellah.vedn.replace_child.call(null,G__182041,G__182042,G__182043));
}));
}
});
ellah.vedn.remove_child = (function ellah$vedn$remove_child(form,path){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(path),(1))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(form,new cljs.core.Keyword(null,"children","children",-940561982),(function (p1__182044_SHARP_){
return ellah.vedn.vector_remove(p1__182044_SHARP_,cljs.core.first(path));
}));
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.first(path)], null),(function (p1__182045_SHARP_){
var G__182046 = p1__182045_SHARP_;
var G__182047 = cljs.core.rest(path);
return (ellah.vedn.remove_child.cljs$core$IFn$_invoke$arity$2 ? ellah.vedn.remove_child.cljs$core$IFn$_invoke$arity$2(G__182046,G__182047) : ellah.vedn.remove_child.call(null,G__182046,G__182047));
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
var G__182104 = (token_index + (1));
var G__182105 = ellah.vedn.add_child(form,path,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),opener_type,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY], null));
var G__182106 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,cljs.core.count(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ellah.vedn.get_child(form,path))));
token_index = G__182104;
form = G__182105;
path = G__182106;
continue;
} else {
if(cljs.core.truth_(ellah.util.in_QMARK_(ellah.vedn.closer_tokens,token))){
var G__182107 = (token_index + (1));
var G__182108 = form;
var G__182109 = cljs.core.pop(path);
token_index = G__182107;
form = G__182108;
path = G__182109;
continue;
} else {
var G__182111 = (token_index + (1));
var G__182112 = ellah.vedn.add_child(form,path,ellah.vedn.literal_form(token));
var G__182113 = path;
token_index = G__182111;
form = G__182112;
path = G__182113;
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
var map__182048 = form;
var map__182048__$1 = (((((!((map__182048 == null))))?(((((map__182048.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__182048.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__182048):map__182048);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__182048__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__182048__$1,new cljs.core.Keyword(null,"value","value",305978217));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__182048__$1,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"literal","literal",1664775605))){
return value;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((ellah.vedn.type__GT_opener.cljs$core$IFn$_invoke$arity$1 ? ellah.vedn.type__GT_opener.cljs$core$IFn$_invoke$arity$1(type) : ellah.vedn.type__GT_opener.call(null,type))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (child,first_QMARK_){
return [((cljs.core.not(first_QMARK_))?" ":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1((ellah.vedn.vedn__GT_clj.cljs$core$IFn$_invoke$arity$1 ? ellah.vedn.vedn__GT_clj.cljs$core$IFn$_invoke$arity$1(child) : ellah.vedn.vedn__GT_clj.call(null,child)))].join('');
}),children,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(false),true)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((ellah.vedn.type__GT_closer.cljs$core$IFn$_invoke$arity$1 ? ellah.vedn.type__GT_closer.cljs$core$IFn$_invoke$arity$1(type) : ellah.vedn.type__GT_closer.call(null,type)))].join('');
}
});

//# sourceMappingURL=ellah.vedn.js.map
