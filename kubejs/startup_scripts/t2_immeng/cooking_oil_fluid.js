StartupEvents.registry("fluid", function(event){
	function add_liquid(id, name, color){
		event.create(id)
			.displayName(name)
			.bucketColor(color)
			.flowingTexture(`kubejs:block/fluid/${id}_flow`)
			.stillTexture(`kubejs:block/fluid/${id}_still`);
	}
	add_liquid("cooking_oil", "Cooking Oil", 0xBBC788);
});