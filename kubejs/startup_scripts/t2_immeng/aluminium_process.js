/*

	simplified bayer process.

	nethered bauxite -crush> nethered bauxite chips
	nethered bauxite chips + water -heated-mix> soggy bauxite + netheric sludge
	soggy bauxite -squeeze> bauxite chips
	bauxite chips + aceldahyde + redstone acid -heated-mix> sodium aluminate + regurgic acid + netheric sludge 
	sodium aluminate + crystal growth solution + water -mix> alumina oxide
	alumina oxide + carbon -arc> aluminium ingot

	alumina oxide is oredict'd to raw aluminium. for mekanism
	regurgic acid can be 1:1'd in a refinery with differing catalyst to get some of either of the acids (aceldahyde, redstone acid) back at a 1:1 rate

	
	complex process is rewarded with 2.5ish ingot per ore. with mekanism 1:5 processing after this gives you 12.5 ingot per ore!
	

	simplified:
	1 nether bauxite -crush> -heat-mix> -squeeze> -heated-mix> -mix> -arc> 3 aluminium
	- 1b water
	- 0.5b aceldahyde
	- 0.5b redstone acid
	- 1b CGS
	- 2 carbon
	+ 3-5b netheric sludge
	+ 0.25b regurgic acid
*/

StartupEvents.registry("item", function(event){
	event.create("nether_bauxite_chips")
		.texture("kubejs:item/aluminum/nether_bauxite_chips")
		.displayName("Nethered Bauxite Chips");

	event.create("soggy_bauxite_chips")
		.texture("kubejs:item/aluminum/soggy_bauxite_chips")
		.displayName("Soggy Bauxite Chips");

	event.create("bauxite_chips")
		.texture("kubejs:item/aluminum/bauxite_chips")
		.displayName("Bauxite Chips");

	event.create("sodium_aluminate")
		.texture("kubejs:item/aluminum/sodium_aluminate")
		.displayName("Sodium Aluminate");

	event.create("alumina_oxide")
		.texture("kubejs:item/aluminum/alumina_oxide")
		.displayName("Alumina Oxide");
});

StartupEvents.registry("fluid", function(event){
	function add_liquid(id, name, color){
		event.create(id)
			.displayName(name)
			.bucketColor(color)
			.flowingTexture(`kubejs:block/fluid/${id}_flow`)
			.stillTexture(`kubejs:block/fluid/${id}_still`);
	}

	add_liquid("regurgic_acid", "Regurgic Acid", 0xC5FF84);
	add_liquid("red_mud", "Red Mud", 0xAB5D5B);
});