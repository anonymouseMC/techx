StartupEvents.registry("item", function(event){
	event.create('bronze_blend')
		.texture("kubejs:item/bronze_blend")
		.displayName("Bronze Blend");

	event.create("brass_blend")
		.texture("kubejs:item/brass_blend")
		.displayName("Brass Blend");

	event.create("bronze_sheet")
		.texture("kubejs:item/bronze_sheet")
		.displayName("Bronze Sheet");
});