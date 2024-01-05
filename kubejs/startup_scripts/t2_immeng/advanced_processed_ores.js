StartupEvents.registry("item", function(event){
	event.create("nethered_silver_chunks")
		.texture("kubejs:item/ore_processing/nethered_silver_chunks")
		.displayName("Nethered Silver Chunks")

	event.create("soggy_silver_chunks")
		.texture("kubejs:item/ore_processing/soggy_silver_chunks")
		.displayName("Soggy Silver Chunks")

});

StartupEvents.registry("fluid", function(event){
	function add_liquid(id, name, color){
		event.create(id)
			.displayName(name)
			.bucketColor(color)
			.flowingTexture(`kubejs:block/fluid/${id}_flow`)
			.stillTexture(`kubejs:block/fluid/${id}_still`);
	}

	add_liquid("nether_slurry", "Nether Slurry", 0x713131);
});