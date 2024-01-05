ServerEvents.recipes( (event) => {
	event.remove({id:"mekanism:energy_cube/basic"});
	event.shaped("1x mekanism:basic_energy_cube",[
		"RTR",
		"IOI",
		"RTR"
	],{
		"O":"mekanism:ingot_osmium",
		"T":"mekanism:energy_tablet",
		"R":"minecraft:redstone",
		"I":"minecraft:iron_ingot"
	});
});
