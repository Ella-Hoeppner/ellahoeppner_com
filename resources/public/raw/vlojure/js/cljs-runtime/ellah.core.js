goog.provide('ellah.core');
ellah.core.update_app = (function ellah$core$update_app(){
return ellah.graphics.update_graphics(null,null);
});
ellah.core.init = (function ellah$core$init(){
console.log("Initializing...");

ellah.graphics.init(ellah.core.update_app);

return ellah.evaluation.init();
});

//# sourceMappingURL=ellah.core.js.map
