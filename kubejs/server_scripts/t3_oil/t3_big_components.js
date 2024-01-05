
ServerEvents.recipes( (event) => {
	event.shaped("1x kubejs:carburettor",
		[
			" PP",
			"SHG"
		],{
			"P":"kubejs:hydraulic_mechanical_component",
			"S":"createdieselgenerators:engine_silencer",
			"H":"kubejs:heat_resistant_mechanical_component",
			"G":"minecraft:tinted_glass"
		}
	);

	event.shaped("1x kubejs:spark_plug",
		[
			" A ",
			"BCB",
			" D "
		],{
			"A":"immersiveengineering:connector_lv",
			"B":"kubejs:coke_brick_item",
			"C":"immersiveengineering:capacitor_lv",
			"D":"kubejs:high_performance_electric_mechanism"
		}
	);

	event.custom({
		"type":"create:pressing",
		"ingredients":[
			{"item":"immersiveengineering:plate_aluminum"}
		],
		"results":[
			{"item":"kubejs:aluminium_gear", "count":2}
		]
	});
});
