StartupEvents.registry("item", function(event){
	event.create("leyden_jar")
		.texture("kubejs:item/component/leyden_jar")
		.displayName("Leyden Jar")
		.tooltip(Text.gray("Its a (terrible) capacitor!"));
});
