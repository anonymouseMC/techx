StartupEvents.registry("item", function(event){
	function addBroken(id, reason){
		event.create(id)
			.texture(`kubejs:item/meta/ignoreme`)
			.displayName("Broken Item. Ignore.")
			.tooltip(Text.gray(reason));
	}

	// this is really, really stupid
	// datapack recipes are dumb.

	addBroken("biomesoplenty:cherry_slab", "Create: S&R Didnt update correctly to 1.20.1 and update BoP cherry recipes");
	addBroken("biomesoplenty:stripped_cherry_log", "Create doesnt account for BoP removing cherry logs");
	addBroken("biomesoplenty:stripped_cherry_wood", "Create doesnt account for BoP removing cherry logs");
	addBroken("biomesoplenty:cherry_log", "Create doesnt account for BoP removing cherry logs");
	addBroken("biomesoplenty:cherry_wood", "Create doesnt account for BoP removing cherry logs");
});
