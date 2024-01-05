


ServerEvents.recipes( (event) => {

	event.custom({
		"type": "create:mechanical_crafting",
		"acceptMirrored": false,
		"key": {
			"T":{"item":"createdieselgenerators:canister"},
			"N":{"item":"kubejs:netherite_plate"},
			"B":{"item":"kubejs:hardened_brass"},
			"L":{"item":"kubejs:lubricant_item"}
		},
		"pattern": [
			" N ",
			"NTN",
			"BNL",
			"BBL"
		],
		"result": {
			"count": 2,
			"item": "kubejs:heat_resistant_mechanical_component"
		}
	});

/*
	i have no idea why, i have tried everything
	but the recipe below throws no errors, no warnings,
	but breaks every other sequenced assembly.

	i have no idea why.

	the INTENDED recipe is below. if you can get it
	working you should use it instead.
*/


/*
	event.custom({
		"type": "create:sequenced_assembly",
		"ingredient": {
			"item":'kubejs:hardened_brass'
		},
		"loops": 1,
		"results": [
			{
				"item": 'kubejs:heat_resistant_mechanical_component'
			}
		],
		"sequence": [
			{
				"type": "create:deploying",
				"ingredients": [
					{
						"item": 'kubejs:incomplete_heat_resistant_mechanical_component'
					},
					{
						"item": 'kubejs:netherite_plate'
					}
				],
				"results": [
					{
						"item": 'kubejs:incomplete_heat_resistant_mechanical_component'
					}
				]
			},
			{
				"type": "create:deploying",
				"ingredients": [
					{
						"item": 'kubejs:incomplete_heat_resistant_mechanical_component'
					},
					{
						"item": 'kubejs:netherite_plate'
					}
				],
				"results": [
					{
						"item": 'kubejs:incomplete_heat_resistant_mechanical_component'
					}
				]
			},
			{
				"type": "create:deploying",
				"ingredients": [
					{
						"item": 'kubejs:incomplete_heat_resistant_mechanical_component'
					},
					{
						"item": 'minecraft:tinted_glass'
					}
				],
				"results": [
					{
						"item": 'kubejs:incomplete_heat_resistant_mechanical_component'
					}
				]
			},
			{
				"type": "create:deploying",
				"ingredients": [
					{
						"item": 'kubejs:incomplete_heat_resistant_mechanical_component'
					},
					{
						"item": 'kubejs:lubricant_item'
					}
				],
				"results": [
					{
						"item": 'kubejs:incomplete_heat_resistant_mechanical_component'
					}
				]
			}
		],
		"transitionalItem": {
			"item": 'kubejs:incomplete_heat_resistant_mechanical_component'
		}
	});*/
});
