ServerEvents.recipes( (event) => {
	event.remove({id:"immersiveengineering:crafting/blastbrick"});
	event.shaped("1x immersiveengineering:blastbrick",
		["BB ",
		 "BB ",
		 "   "],
		{
			B:"kubejs:blast_brick_item"
		}
	);

	event.custom({
		"type": "create:crushing",
		"ingredients": [
			{
				"item": "minecraft:quartz"
			}
		],
		"processingTime": 400,
		"results": [
			{
			"item": "mekanism:dust_quartz"
			}
		]
	});

	/* cinder flour + quartz dust + brick + lava = blast brick */
	/* cinder flour + quartz dust + brick + sand = coke brick */
	event.custom({
		"type": "create:mixing",
		"ingredients": [
			{
				"amount": 100,
				"fluid": "minecraft:lava"
			},
			{
				"amount": 1,
				"item": "create:cinder_flour"
			},
			{
				"amount": 1,
				"item": "mekanism:dust_quartz"
			},
			{
				"amount": 1,
				"item": "minecraft:brick"
			}
		],
		"results": [
			{
				"amount": 2,
				"item": "kubejs:blast_brick_item"
			}
		]
	});


	event.remove({id:"immersiveengineering:crafting/cokebrick"});
	event.shaped("1x immersiveengineering:cokebrick",
		["BB ",
		 "BB ",
		 "   "],
		{
			B:"kubejs:coke_brick_item"
		}
	);
	event.custom({
		"type": "create:mixing",
		"ingredients": [
			{
				"amount": 1,
				"item": "create:cinder_flour"
			},
			{
				"amount": 1,
				"item": "minecraft:sand"
			},
			{
				"amount": 1,
				"item": "mekanism:dust_quartz"
			},
			{
				"amount": 1,
				"item": "minecraft:brick"
			}
		],
		"results": [
			{
				"amount": 2,
				"item": "kubejs:coke_brick_item"
			}
		]
	});

	event.remove({id:"immersiveengineering:blastfurnace/steel"});
	event.remove({id:"immersiveengineering:blastfurnace/steel_block"});
	event.custom({
		"type": "immersiveengineering:blast_furnace",
		"input": {
			"tag": "forge:ingots/iron"
		},
		"result": {
			"item":"kubejs:encrusted_steel"
		},
		"slag": {
			"tag": "forge:slag"
		},
		"time": 1200
	});

	event.custom({
		"type": "create:sequenced_assembly",
		"ingredient": {
			"item": "kubejs:encrusted_steel"
		},
		"loops": 10,
		"results": [
			{
				"chance":60.0,
				"item": "mekanism:ingot_steel"
			},
			{
				"chance":20.0,
				"item": "mekanism:nugget_steel",
				"count": 6
			},
			{
				"chance":15.0,
				"item": "mekanism:ingot_steel",
				"count": 2
			},
			{
				"chance":5.0,
				"item": "immersiveengineering:slag"
			}
		],
		"sequence": [
			{
				"type": "create:pressing",
				"ingredients": [
					{
						"item": "kubejs:unprocessed_steel"
					}
				],
				"results": [
					{
						"item": "kubejs:unprocessed_steel"
					}
				]
			},
			{
				"type": "create:filling",
				"ingredients": [
					{
						"item": "kubejs:unprocessed_steel"
					},
					{
						"amount": 1000,
						"fluid": "minecraft:water",
						"nbt": {}
					}
				],
				"results": [
					{
						"item": "kubejs:unprocessed_steel"
					}
				]
			}
		],
		"transitionalItem": {
			"item": "kubejs:unprocessed_steel"
		}
	});


	//hardened steel

	event.shapeless(
		"1x kubejs:carbon_packed_steel_ingot",
		[
			{"tag":"minecraft:coals"},
			{"tag":"minecraft:coals"},
			{"tag":"minecraft:coals"},
			{"tag":"minecraft:coals"},
			{"item":"mekanism:ingot_steel"}
		]
	)
	event.shapeless(
		"1x kubejs:carbon_packed_steel_ingot",
		[
			{"item":"kubejs:carbon_dust"},
			{"item":"kubejs:carbon_dust"},
			{"item":"kubejs:carbon_dust"},
			{"item":"kubejs:carbon_dust"},
			{"item":"mekanism:ingot_steel"}
		]
	)

	event.custom({
		"type": "immersiveengineering:blast_furnace",
		"input": {
			"item":"kubejs:carbon_packed_steel_ingot"
		},
		"result": {
			"item":"kubejs:encrusted_hardened_steel"
		},
		"slag": {
			"tag": "forge:slag"
		},
		"time": 1800
	});

	event.custom({
		"type": "create:sequenced_assembly",
		"ingredient": {
			"item": "kubejs:encrusted_hardened_steel"
		},
		"loops": 10,
		"results": [
			{
				"chance":70.0,
				"item": "kubejs:hardened_steel"
			},
			{
				"chance":15.0,
				"item": "kubejs:hardened_steel",
				"count": 2
			},
			{
				"chance":15.0,
				"item": "immersiveengineering:slag"
			}
		],
		"sequence": [
			{
				"type": "create:pressing",
				"ingredients": [
					{
						"item": "kubejs:unprocessed_hardened_steel"
					}
				],
				"results": [
					{
						"item": "kubejs:unprocessed_hardened_steel"
					}
				]
			},
			{
				"type": "create:filling",
				"ingredients": [
					{
						"item": "kubejs:unprocessed_hardened_steel"
					},
					{
						"amount": 1000,
						"fluid": "minecraft:water",
						"nbt": {}
					}
				],
				"results": [
					{
						"item": "kubejs:unprocessed_hardened_steel"
					}
				]
			}
		],
		"transitionalItem": {
			"item": "kubejs:unprocessed_hardened_steel"
		}
	});

})