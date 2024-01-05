ServerEvents.recipes( (event) => {
	event.custom({
		"type": "create:sequenced_assembly",
		"ingredient": {
			"item":'kubejs:hardened_steel_component'
		},
		"loops": 1,
		"results": [
			{
				"item": 'kubejs:hydraulic_mechanical_component'
			},
		],
		"sequence": [
			{
				"type": "create:deploying",
				"ingredients": [
					{
						"item": 'kubejs:incomplete_hydraulic_mechanical_component'
					},
					{
						"item": 'kubejs:hardened_steel_plate'
					}
				],
				"results": [
					{
						"item": 'kubejs:incomplete_hydraulic_mechanical_component'
					}
				]
			},
			{
				"type": "create:deploying",
				"ingredients": [
					{
						"item": 'kubejs:incomplete_hydraulic_mechanical_component'
					},
					{
						"item": 'immersiveengineering:coil_mv'
					}
				],
				"results": [
					{
						"item": 'kubejs:incomplete_hydraulic_mechanical_component'
					}
				]
			},
			{
				"type": "create:deploying",
				"ingredients": [
					{
						"item": 'kubejs:incomplete_hydraulic_mechanical_component'
					},
					{
						"item": 'minecraft:piston'
					}
				],
				"results": [
					{
						"item": 'kubejs:incomplete_hydraulic_mechanical_component'
					}
				]
			},
			{
				"type": "create:deploying",
				"ingredients": [
					{
						"item": 'kubejs:incomplete_hydraulic_mechanical_component'
					},
					{
						"item": 'kubejs:lubricant_item'
					}
				],
				"results": [
					{
						"item": 'kubejs:incomplete_hydraulic_mechanical_component'
					}
				]
			}
		],
		"transitionalItem": {
			"item": 'kubejs:incomplete_hydraulic_mechanical_component'
		}
	});
});
