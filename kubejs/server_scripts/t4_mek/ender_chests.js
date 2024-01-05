ServerEvents.recipes( (event) => {
	event.remove({mod:"enderchests"});

	event.shaped(Item.of('enderchests:ender_bag', '{code:"fff",open:0b,owner:"all"}'),[
		"EEE",
		"GWS",
		"HBH"
	],{
		"H":"kubejs:heat_resistant_mechanical_component",
		"B":"solapplepie:lunchbag",
		"E":"#techx:is_gateway_eye",
		"W":"kubejs:netherite_wire",
		"G":"kubejs:gloom_acid_bucket",
		"S":"kubejs:sculk_acid_bucket"
	});
	event.shaped(Item.of('enderchests:ender_bag', '{code:"fff",open:0b,owner:"all"}'),[
		"EEE",
		"SWG",
		"HBH"
	],{
		"H":"kubejs:heat_resistant_mechanical_component",
		"B":"solapplepie:lunchbag",
		"E":"#techx:is_gateway_eye",
		"W":"kubejs:netherite_wire",
		"G":"kubejs:gloom_acid_bucket",
		"S":"kubejs:sculk_acid_bucket"
	});

	event.shaped(Item.of('enderchests:ender_chest', '{code:"FFF",owner:"all"}'),[
		"EEE",
		"EBE",
		"EEE"
	],{
		"E":"deeperdarker:echo_planks",
		"B":Item.of('enderchests:ender_bag', '{code:"fff"}')
	})
});
