StartupEvents.registry("item", function(event){
//	event.create("")
//		.texture("")
//		.displayName("")
});

StartupEvents.registry("fluid", function(event){
	function add_liquid(id, name, color){
		event.create(id)
			.displayName(name)
			.bucketColor(color)
			.flowingTexture(`kubejs:block/fluid/${id}_flow`)
			.stillTexture(`kubejs:block/fluid/${id}_still`);
	}

	add_liquid("sculk_acid", "Sculked Acid", 0x07272D);
	add_liquid("gloom_acid", "Gloomed Acid", 0x3E180F);
});