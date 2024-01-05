
ServerEvents.recipes( (event) => {
	event.remove({id:"mekanism:steel_casing"});

	([
		"mekanism:basic_energy_cube",
		"immersiveengineering:capacitor_hv"
	]).forEach(b => {
		event.shaped("1x mekanism:steel_casing",[
			"PWP",
			"WBW",
			"PWP"
		],{
			"B":b,
			"W":"kubejs:netherite_wire",
			"P":"kubejs:netherite_plate"
		});
	})
});

