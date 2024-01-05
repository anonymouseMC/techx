
ServerEvents.recipes( (event) => {
/*	event.remove({id:"immersiveengineering:smelting/ingot_silver3"});
	event.remove({id:"immersiveengineering:smelting/ingot_silver_from_blasting3"});

	event.remove({id:"create:crushing/raw_silver_ore"})
	event.remove({id:"create:crushing/raw_silver_block"})

	event.remove({id:"immersiveengineering:arcfurnace/raw_ore_silver"})
	event.remove({id:"immersiveengineering:arcfurnace/ore_silver"})
	event.remove({id:"immersiveengineering:arcfurnace/dust_silver"})
	event.remove({id:"immersiveengineering:arcfurnace/raw_block_silver"})*/

	// process
	// nethered ore -crusher> nethered silver chunks
	// nethered silver chunks + water -squeezer> raw silver

	//nether slurry recycling
	//many things to find!
	event.custom({
		"type": "create:compacting",
		"ingredients": [
			{
				"amount": 1000,
				"fluid": "kubejs:nether_slurry",
				"nbt": {}
			}
		],
		"results": [
			{"chance":0.5,"item": "create:cinder_flour"},
			{"chance":0.1,"item": "minecraft:gold_nugget"},
			{"chance":0.1,"item": "minecraft:quartz"},
			{"chance":0.05,"item": "cold_sweat:soul_sprout"},
			{"chance":0.8,"item": "minecraft:soul_sand"}
		]
	})

	event.custom({
		"type": "immersiveengineering:crusher",
		"energy": 10000,
		"input": {
			"item":"kubejs:nethered_silver"
		},
		"result": {
			"item": "kubejs:nethered_silver_chunks"
		},
		"secondaries": [
			{"chance":0.33333334,"output":{"tag":"forge:dusts/gold"}}
		]
	});

	event.custom({
		"type":"create:mixing",
		"heatRequirement":"heated",
		"ingredients":[
			{"item":"kubejs:nethered_silver_chunks"},
			{"fluid":"minecraft:water","amount":250}
		],
		"results":[
			{"item":"kubejs:soggy_silver_chunks"},
			{"item":"kubejs:soggy_silver_chunks", "chance":0.25}
		]

	})

	event.custom({
		"type": "immersiveengineering:squeezer",
		"energy": 12800,
		"fluid": {
			"amount": 250,
			"fluid": "kubejs:nether_slurry"
		},
		"result":{
			"item":"immersiveengineering:raw_silver"
		},
		"input": {
			"item": "kubejs:soggy_silver_chunks"
		}
	});

});
