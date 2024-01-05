StartupEvents.registry("item", function(event){

	event.create("empty_tube")
		.texture("kubejs:item/empty_tube")
		.displayName("Empty Tube")

	event.create('sap')
		.texture("kubejs:item/sap")
		.displayName("Raw Sap")

	event.create('resin')
		.texture("kubejs:item/resin")
		.displayName("Sticky Resin")

	event.create('cool_gel')
		.texture("kubejs:item/cool_gel")
		.displayName("Cool Gel")

});

StartupEvents.registry("fluid", function(event){
	function add_liquid(id, name, color){
		event.create(id)
			.displayName(name)
			.bucketColor(color)
			.flowingTexture(`kubejs:block/fluid/${id}_flow`)
			.stillTexture(`kubejs:block/fluid/${id}_still`);
	}

	add_liquid("liquid_resin", "Sticky Resin", 0xF6D68E);
})