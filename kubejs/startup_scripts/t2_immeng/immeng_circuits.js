StartupEvents.registry("item", function(event){
	event.create("unprocessed_electronic_component")
		.texture("kubejs:item/immeng_circuit/unprocessed_electronic_component")
		.displayName("Unprocessed Electronic Component");

	event.create("unprocessed_advanced_electronic_component")
		.texture("kubejs:item/immeng_circuit/unprocessed_advanced_electronic_component")
		.displayName("Unprocessed Advanced Electronic Component");

	event.create("unprocessed_vacuum_tube")
		.texture("kubejs:item/immeng_circuit/unprocessed_vacuum_tube")
		.displayName("Unprocessed Vacuum Tube");

	event.create("vacuum_tube_glass")
		.texture("kubejs:item/immeng_circuit/vacuum_tube_glass")
		.displayName("Vacuum Tube Glass");
});