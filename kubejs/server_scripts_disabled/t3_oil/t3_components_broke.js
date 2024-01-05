
/*
	  high-performance mechanical component
	  heat-resistant mechanical component
	  hydraulic mechanical component

	sparkplug
	carburettor
*/


ServerEvents.recipes( (event) => {
	function ts_lb(input, one, two, three, four, result, transition){
		console.log("guh",result);
		event.custom({
			"type": "create:sequenced_assembly",
			"ingredient": {
				"item":input
			},
			"loops": 1,
			"results": [
				{
					"item": result
				},
			],
			"sequence": [
				{
					"type": "create:deploying",
					"ingredients": [
						{
							"item": transition
						},
						{
							"item": one
						}
					],
					"results": [
						{
							"item": transition
						}
					]
				},
				{
					"type": "create:deploying",
					"ingredients": [
						{
							"item": transition
						},
						{
							"item": two
						}
					],
					"results": [
						{
							"item": transition
						}
					]
				},
				{
					"type": "create:deploying",
					"ingredients": [
						{
							"item": transition
						},
						{
							"item": three
						}
					],
					"results": [
						{
							"item": transition
						}
					]
				},
				{
					"type": "create:deploying",
					"ingredients": [
						{
							"item": transition
						},
						{
							"item": four
						}
					],
					"results": [
						{
							"item": transition
						}
					]
				}
			],
			"transitionalItem": {
				"item": transition
			}
		});
	}


	ts_lb(
		"kubejs:hardened_brass",
		"kubejs:netherite_plate",
		"kubejs:netherite_plate",
		"minecraft:tinted_glass",
		"kubejs:lubricant_item",
		"kubejs:heat_resistant_mechanical_component",
		"kubejs:incomplete_heat_resistant_mechanical_component"
	);

	ts_lb(
		'kubejs:hardened_steel_component',
		'kubejs:hardened_steel_plate',

		'immersiveengineering:coil_mv',
		'minecraft:piston',
		'kubejs:lubricant_item',

		'kubejs:hydraulic_mechanical_component',
		'kubejs:incomplete_hydraulic_mechanical_component'
	);

	ts_lb(
		"create:precision_mechanism",
		"kubejs:aluminium_gear",
		"kubejs:aluminium_gear",
		"immersiveengineering:component_electronic_adv",
		"kubejs:lubricant_item",
		"kubejs:high_performance_electric_mechanism",
		"kubejs:incomplete_high_performance_electric_mechanism"
	);
});
