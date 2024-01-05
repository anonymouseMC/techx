ServerEvents.recipes( (event) => {
	event.remove({id:/mekanism:metallurgic_infusing\/alloy\/.*/});
	event.remove({id:/mekanism:control_circuit\/.*/});	

	// basic circuit
	event.custom({
		"type": "create:mechanical_crafting",
		"acceptMirrored": false,
		"key": {
			"C":{"item":"immersiveengineering:component_electronic_adv"},
			"B":{"item":"immersiveengineering:circuit_board"},
			"A":{"item":"immersiveengineering:wire_aluminum"},
			"G":{"item":"minecraft:gold_nugget"},
			"W":{"item":"kubejs:netherite_wire"},
			"N":{"item":"mekanism:nugget_osmium"}
		},
		"pattern": [
			" C ",
			"WBW",
			"ANA",
			"GGG"
		],
		"result": {
			"count": 2,
			"item": "kubejs:unprepared_printed_basic_circuit"
		}
	});
	event.custom({
		"type": "mekanism:metallurgic_infusing",
		"chemicalInput": {
			"amount": 100,
			"tag": "mekanism:redstone"
		},
		"itemInput": {
			"ingredient": {
				"item":"kubejs:unprepared_printed_basic_circuit"
			}
		},
		"output": {
			"item": "mekanism:basic_control_circuit"
		}
	});

	//advanced circuit & alloy
	event.custom({
		"type": "create:deploying",
		"ingredients": [
			{
				"item": "kubejs:unprepared_printed_basic_circuit"
			},
			{
				"item":"kubejs:monofluorium"
			}
		],
		"results": [
			{
				"item": "kubejs:unprepared_printed_advanced_circuit"
			}
		]
	});
	event.custom({
		"type": "mekanism:metallurgic_infusing",
		"chemicalInput": {
			"amount": 500,
			"tag": "mekanism:redstone"
		},
		"itemInput": {
			"ingredient": {
				"item":"kubejs:unprepared_printed_advanced_circuit"
			}
		},
		"output": {
			"item": "mekanism:advanced_control_circuit"
		}
	});

	// yes, you can supplement tin for fungus
	// why? because its interesting.
	// maybe in this world fungus has cool strength properties... or something.
	// who knows, its cool though.
	([
		"mekanism:fungi",
		"mekanism:tin"
	]).forEach(infuse => {
		event.custom({
			"type": "mekanism:metallurgic_infusing",
			"chemicalInput": {
				"amount": 50,
				"tag": infuse
			},
			"itemInput": {
				"ingredient": {
					"item":"kubejs:unprepared_printed_advanced_circuit"
				}
			},
			"output": {
				"item": "mekanism:advanced_control_circuit"
			}
		});		
	});

	//alloy
	event.shapeless("1x kubejs:fluorite_packed_steel_ingot",[
		"#forge:dusts/fluorite",
		"#forge:dusts/fluorite",
		"#forge:dusts/fluorite",
		"#forge:dusts/fluorite",
		"mekanism:ingot_steel",
		"mekanism:enriched_redstone",
		"mekanism:enriched_redstone",
		"mekanism:enriched_redstone",
		"mekanism:enriched_redstone"
	]);
	event.custom({
		"type": "immersiveengineering:blast_furnace",
		"input": {
			"item":"kubejs:fluorite_packed_steel_ingot"
		},
		"result": {
			"item":"kubejs:encrusted_infused_alloy"
		},
		"slag": {
			"item":"minecraft:calcite"
		},
		"time": 2400
	});
	//despite this 10x "crush-wash" cycle, lubricant has the magical property of...
	//not really being useful. this recipe fixes that mostly.
	event.custom({
		"type": "create:sequenced_assembly",
		"ingredient": {
			"item": "kubejs:encrusted_infused_alloy"
		},
		"loops": 10,
		"results": [
			{
				"chance":80.0,
				"item": "mekanism:alloy_infused"
			},
			{
				"chance":10.0,
				"item": "kubejs:encrusted_infused_alloy"
			},
			{
				"chance":5.0,
				"item": "mekanism:enriched_redstone",
				"count": 4
			},
			{
				"chance":5.0,
				"item": "mekanism:dust_fluorite",
				"count": 4
			}
		],
		"sequence": [
			{
				"type": "create:pressing",
				"ingredients": [
					{
						"item": "kubejs:unprocessed_encrusted_infused_alloy"
					}
				],
				"results": [
					{
						"item": "kubejs:unprocessed_encrusted_infused_alloy"
					}
				]
			},
			{
				"type": "create:filling",
				"ingredients": [
					{
						"item": "kubejs:unprocessed_encrusted_infused_alloy"
					},
					{
						"amount": 75,
						"fluid": "kubejs:lubricant"
					}
				],
				"results": [
					{
						"item": "kubejs:unprocessed_encrusted_infused_alloy"
					}
				]
			}
		],
		"transitionalItem": {
			"item": "kubejs:unprocessed_encrusted_infused_alloy"
		}
	});

	// elite
	event.custom({
		"type":"immersiveengineering:arc_furnace",
		"energy":51200,
		"time":300,
		"input":{
			"item":"mekanism:alloy_infused"
		},
		"additives":[
			{"item":"mekanism:nugget_uranium","count":3}
		],
		"results":[
			{"item":"mekanism:alloy_reinforced"}
		]
	});


	event.custom({
		"type": "create:deploying",
		"ingredients": [
			{
				"item": "kubejs:unprepared_printed_advanced_circuit"
			},
			{
				"item":"mekanism:nugget_uranium"
			}
		],
		"results": [
			{
				"chance":0.5,
				"item": "kubejs:unprepared_printed_elite_circuit"
			},
			{
				"chance":0.25,
				"item": "kubejs:unprepared_printed_basic_circuit"
			},
			{
				"chance":0.25,
				"item": "kubejs:unprepared_printed_advanced_circuit"
			}
		]
	});

	([
		"mekanism:fungi",
		"mekanism:diamond"
	]).forEach(infuse => {
		event.custom({
			"type": "mekanism:metallurgic_infusing",
			"chemicalInput": {
				"amount": 25,
				"tag": infuse
			},
			"itemInput": {
				"ingredient": {
					"item":"kubejs:unprepared_printed_elite_circuit"
				}
			},
			"output": {
				"item": "mekanism:elite_control_circuit"
			}
		});
	});

	//ultimate

	event.custom({
		"type": "create:deploying",
		"ingredients": [
			{
				"item": "kubejs:unprepared_printed_elite_circuit"
			},
			{
				"item":"mekanism:nugget_refined_obsidian"
			}
		],
		"results": [
			{
				"chance":0.334,
				"item": "kubejs:unprepared_printed_ultimate_circuit"
			},
			{
				"chance":0.333,
				"item": "kubejs:unprepared_printed_basic_circuit"
			},
			{
				"chance":0.333,
				"item": "kubejs:unprepared_printed_advanced_circuit"
			}
		]
	});

	event.custom({
		"type": "mekanism:metallurgic_infusing",
		"chemicalInput": {
			"amount": 40,
			"tag": "mekanism:diamond"
		},
		"itemInput": {
			"ingredient": {
				"item":"kubejs:unprepared_printed_ultimate_circuit"
			}
		},
		"output": {
			"item": "mekanism:ultimate_control_circuit"
		}
	});

	event.remove({id:"waystones:warp_dust"})
	event.custom({
		"type":"create:mixing",
		"heatRequirement":"superheated",
		"ingredients":[
			{"item":"minecraft:ender_pearl"},
			{"item":"minecraft:amethyst_shard"},
			{"amount":200, "fluid":"kubejs:crystal_growth_medium"}
		],
		"results":[
			{chance:0.9, "item":"minecraft:ender_pearl"},
			{chance:0.9, "item":"minecraft:amethyst_shard"},
			{chance:0.1, "item":"waystones:warp_dust"}
		]
	});
	event.custom({
		"type":"create:mixing",
		"heatRequirement":"superheated",
		"ingredients":[
			{"item":"waystones:warp_dust"},
			{"item":"waystones:warp_dust"},
			{"item":"waystones:warp_dust"},
			{"item":"waystones:warp_dust"},
			{"item":"mekanism:alloy_reinforced"}
		],
		"results":[
			{"item":"mekanism:alloy_atomic"}
		]
	});

});
