ServerEvents.recipes( (event) => {
	event.custom({
		"type": "create:sequenced_assembly",
		"ingredient": {
			"item":'create:precision_mechanism'
		},
		"loops": 1,
		"results": [
			{
				"item": 'kubejs:high_performance_electric_mechanism'
			},
		],
		"sequence": [
			{
				"type": "create:deploying",
				"ingredients": [
					{
						"item": 'kubejs:incomplete_high_performance_electric_mechanism'
					},
					{
						"item": 'kubejs:aluminium_gear'
					}
				],
				"results": [
					{
						"item": 'kubejs:incomplete_high_performance_electric_mechanism'
					}
				]
			},
			{
				"type": "create:deploying",
				"ingredients": [
					{
						"item": 'kubejs:incomplete_high_performance_electric_mechanism'
					},
					{
						"item": 'kubejs:aluminium_gear'
					}
				],
				"results": [
					{
						"item": 'kubejs:incomplete_high_performance_electric_mechanism'
					}
				]
			},
			{
				"type": "create:deploying",
				"ingredients": [
					{
						"item": 'kubejs:incomplete_high_performance_electric_mechanism'
					},
					{
						"item": 'immersiveengineering:component_electronic_adv'
					}
				],
				"results": [
					{
						"item": 'kubejs:incomplete_high_performance_electric_mechanism'
					}
				]
			},
			{
				"type": "create:deploying",
				"ingredients": [
					{
						"item": 'kubejs:incomplete_high_performance_electric_mechanism'
					},
					{
						"item": 'kubejs:lubricant_item'
					}
				],
				"results": [
					{
						"item": 'kubejs:incomplete_high_performance_electric_mechanism'
					}
				]
			},
		],
		"transitionalItem": {
			"item": 'kubejs:incomplete_high_performance_electric_mechanism'
		}
	});
});
