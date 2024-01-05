StartupEvents.registry("item", function(event){
	function newItem(name, category){
		var id = name.replace(/[^a-zA-Z_]/g, "_").toLowerCase();
		event.create(id)
			.texture(`kubejs:item/${category?category+"/":""}${id}`)
			.displayName(name);
	}
});

StartupEvents.registry("fluid", function(event){
	function add_liquid(id, name, color){
		event.create(id)
			.displayName(name)
			.bucketColor(color)
			.flowingTexture(`kubejs:block/fluid/${id}_flow`)
			.stillTexture(`kubejs:block/fluid/${id}_still`);
	}
});