
/*
	new:
		ceramic crucible
		hot netherite crucible
		liquid netherite

		netherite plate
		netherite wire

*/


StartupEvents.registry("item", function(event){
	event.create("ceramic_crucible")
		.texture("kubejs:item/netherite/ceramic_crucible")
		.displayName("High-Temparature Ceramic Crucible");

	event.create("hot_liquid_netherite_crucible")
		.texture("kubejs:item/netherite/hot_liquid_netherite_crucible")
		.displayName("Liquid Netherite Ceramic Crucible");

	event.create("netherite_plate")
		.texture("kubejs:item/netherite/netherite_plate")
		.displayName("Netherite Plate");

	event.create("netherite_wire")
		.texture("kubejs:item/netherite/netherite_wire")
		.displayName("Netherite Wire");


	([
		["plate","Plate"],
		["wire","Wire"],
		["ingot","Ingot"],
		["blank","Blank"]
	]).forEach(([id,name]) => {
		event.create("netherite_" + id + "_cast")
			.texture("kubejs:item/netherite/cast/netherite_" + id + "_cast")
			.displayName(id=="blank"? "Blank Netherite Cast" : "Netherite " + name + " Cast" );
	});

});

StartupEvents.registry("fluid", function(event){
	function add_liquid(id, name){
		event.create(id)
			.displayName(name)
			.noBucket()
			.flowingTexture(`kubejs:block/fluid/${id}_flow`)
			.stillTexture(`kubejs:block/fluid/${id}_still`);
	}

	add_liquid("liquid_netherite", "Liquid Netherite");
});