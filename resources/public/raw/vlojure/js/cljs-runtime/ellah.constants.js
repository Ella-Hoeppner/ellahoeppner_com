goog.provide('ellah.constants');
console.log(window.innerWidth);
ellah.constants.landscape_QMARK_ = (window.innerWidth >= window.innerHeight);
ellah.constants.background_color = (726546);
ellah.constants.foreground_color = (1979689);
ellah.constants.highlight_color = (3031350);
ellah.constants.text_color = (6913902);
ellah.constants.text_input_size = 0.25;
ellah.constants.font_name = "monoid-bold";
ellah.constants.screen_sides = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"left","left",-399115937)], null);
ellah.constants.ui_layers = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"program","program",781564284),new cljs.core.Keyword(null,"drag-forms","drag-forms",75833442),new cljs.core.Keyword(null,"formbar","formbar",824418093),new cljs.core.Keyword(null,"menu","menu",352255198),new cljs.core.Keyword(null,"drag","drag",449951290),new cljs.core.Keyword(null,"overlay","overlay",-139131598)], null);
ellah.constants.max_aspect_ratio = ((2) / (1));
ellah.constants.min_aspect_ratio = ((1) / (2));
ellah.constants.subform_shrink_factor = 0.95;
ellah.constants.sole_subform_shrink_factor = 0.75;
ellah.constants.bubble_thickness = 0.05;
ellah.constants.vector_size_factor = 1.1;
ellah.constants.map_point_height = 0.1;
ellah.constants.map_point_width = 0.05;
ellah.constants.set_line_length = 0.075;
ellah.constants.set_line_width = 0.05;
ellah.constants.set_line_offset = 0.1;
ellah.constants.base_zoom = 0.95;
ellah.constants.text_scale_factor = 0.24;
ellah.constants.text_max_size = 0.135;
ellah.constants.text_x_offset = -0.4;
ellah.constants.text_y_offset = 0.5;
ellah.constants.min_drag_dist = 0.025;
ellah.constants.drag_cursor_line_width = 0.0075;
ellah.constants.drag_cursor_radius = 0.015;
ellah.constants.drop_form_radius_factor = 0.5;
ellah.constants.drop_form_offset_factor = 1.2;
ellah.constants.formbar_radius = ((ellah.constants.landscape_QMARK_)?0.04:0.08);
ellah.constants.formbar_pos = 0.025;
ellah.constants.formbar_spacing = 1.1;
ellah.constants.formbar_outline_thickness = 0.15;
ellah.constants.formbar_form_size = 0.85;
ellah.constants.formbar_placement_offset = 0.9;
ellah.constants.formbar_placement_size = 0.55;
ellah.constants.discard_zone_radius = 0.15;
ellah.constants.discard_zone_bar_thickness = 0.05;
ellah.constants.discard_zone_form_radius_factor = 0.9;
ellah.constants.eval_zone_min_radius = 0.15;
ellah.constants.eval_zone_max_radius = 0.6;
ellah.constants.eval_zone_speed = ((1) / Math.pow((10),(5)));
ellah.constants.eval_zone_bar_thickness = 0.05;
ellah.constants.eval_zone_form_radius_factor = 0.9;
ellah.constants.camera_speed = (function ellah$constants$camera_speed(diff){
var base_speed_exp = 4.5;
var speed_boost_exp = 1.5;
var slow_speed = ((1) / Math.pow((10),base_speed_exp));
var fast_speed = ((1) / Math.pow((10),(base_speed_exp + (Math.abs(diff) * speed_boost_exp))));
if((diff > (0))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"move","move",-2110884309),fast_speed,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),slow_speed], null);
} else {
if((diff < (0))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"move","move",-2110884309),slow_speed,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),fast_speed], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"move","move",-2110884309),slow_speed,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),slow_speed], null);

}
}
});
ellah.constants.starting_program = "(nth\n   (iterate (fn [f]\n                   (conj f\n                         (+ (last f)\n                            (last (butlast f)))))\n                 [0 1])\n   10)";
ellah.constants.formbar_defaults = (function (){var primary = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.first,new cljs.core.Keyword(null,"children","children",-940561982),ellah.vedn.clj__GT_vedn),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["()","[]","{}","#()","#{}"], null))], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.first,new cljs.core.Keyword(null,"children","children",-940561982),ellah.vedn.clj__GT_vedn),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fn","let","mapv"], null))], null)], null)], null);
var secondary = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.first,new cljs.core.Keyword(null,"children","children",-940561982),ellah.vedn.clj__GT_vedn),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+","-","*","/","mod"], null))], null)], null)], null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"bottom","bottom",-1550509018),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"right","right",-452581833),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"top","top",-1856271961),cljs.core.PersistentVector.EMPTY], null),((ellah.constants.landscape_QMARK_)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"right","right",-452581833),primary,new cljs.core.Keyword(null,"left","left",-399115937),secondary], null):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bottom","bottom",-1550509018),primary,new cljs.core.Keyword(null,"top","top",-1856271961),secondary], null))], 0));
})();

//# sourceMappingURL=ellah.constants.js.map
