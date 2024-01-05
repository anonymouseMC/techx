/*

	simplified bayer process.

	nethered bauxite -crush> nethered bauxite chips
	nethered bauxite chips + water -heated-mix> soggy bauxite + netheric sludge
	soggy bauxite -squeeze> bauxite chips
	bauxite chips + aceldahyde + redstone acid -heated-mix> sodium aluminate + regurgic acid + netheric sludge 
	sodium aluminate + crystal growth solution + water -mix> alumina oxide
	alumina oxide + carbon -arc> aluminium ingot

	alumina oxide is oredict'd to raw aluminium. for mekanism
	regurgic acid can be 1:1'd in a refinery with differing catalyst to get some of either of the acids (aceldahyde, redstone acid) back at a 1:1 rate

	
	complex process is rewarded with 2.5ish ingot per ore. with mekanism 1:5 processing after this gives you 12.5 ingot per ore!
	

	simplified:
	1 nether bauxite -crush> -heat-mix> -squeeze> -heated-mix> -mix> -arc> 3 aluminium
	- 1b water
	- 0.5b aceldahyde
	- 0.5b redstone acid
	- 1b CGS
	- 2 carbon
	+ 3-5b netheric sludge
	+ 0.25b regurgic acid
*/


ServerEvents.recipes( (event) => {
	event.remove({id:"immersiveengineering:smelting/ingot_aluminum3"});
	event.remove({id:"immersiveengineering:smelting/ingot_aluminum_from_blasting3"});

	event.remove({id:"create:crushing/raw_aluminum_ore"});
	event.remove({id:"create:crushing/raw_aluminrum_block"});

	([
		"create:crushed_raw_aluminum",
		"immersiveengineering:raw_aluminum"
	]).forEach(trouble => {
		event.remove({input: trouble});
		event.remove({output: trouble});
	});

/*
	event.custom({
		"type":"immersiveengineering:crusher",
		"energy":10000,
		"input":{"item":"kubejs:nethered_bauxite"},
		"result":{"item":"kubejs:nether_bauxite_chips","count":2},
		"secondaries":[{
			"chance":0.5,
			"item":"create:cinder_flour"
		}]
	});
*/
	
	event.custom({
		"type": "immersiveengineering:crusher",
		"energy": 10000,
		"input": {
			"item":"kubejs:nethered_bauxite"
		},
		"result": {
			"item": "kubejs:nether_bauxite_chips"
		},
		"secondaries": [
			{"chance":0.33333334,"output":{"tag":"forge:dusts/gold"}}
		]
	})

	event.custom({
		"type":"create:mixing",
		"heatRequirement":"heated",
		"ingredients":[
			{"amount":2,"item":"kubejs:nether_bauxite_chips"},
			{"amount":3000, "fluid":"minecraft:water"}
		],
		"results":[
			{"amount":1, "item":"kubejs:soggy_bauxite_chips"},
			{"amount":1000, "fluid":"kubejs:nether_slurry"},
			{"chance":0.5, "amount":2, "item":"kubejs:soggy_bauxite_chips"}
		]
	});

	event.custom({
		"type":"immersiveengineering:squeezer",
		"energy":19200,
		"input":{"base_ingredient":{"item":"kubejs:soggy_bauxite_chips"},"count":1},
		"result":{"item":"kubejs:bauxite_chips"}
	});

	event.custom({
		"type":"create:mixing",
		"heatRequirement":"heated",
		"ingredients":[
			{"amount":2,"item":"kubejs:bauxite_chips"},
			{"amount":1, "item":"minecraft:soul_sand"},
			{"amount":500, "fluidTag":"forge:acetaldehyde"},
			{"amount":500, "fluidTag":"forge:redstone_acid"}
		],
		"results":[
			{"amount":2, "item":"kubejs:sodium_aluminate"},
			{"amount":2000, "fluid":"kubejs:red_mud"},
			{"chance":0.2, "amount":1, "item":"kubejs:nether_bauxite_chips"}
		]		
	});

	event.custom({
		"type": "create:mixing",
		"ingredients": [
			{
				"amount":1,
				"item": "kubejs:sodium_aluminate"
			},
			{
				"amount": 100,
				"fluid": "kubejs:crystal_growth_medium"
			}
		],
		"results": [
			{
				"chance":0.2,
				"amount":1,
				"item":"kubejs:sodium_aluminate"
			},
			{
				"chance":0.8,
				"amount": 2,
				"item": "kubejs:alumina_oxide"
			}
		]
	});

	event.custom({
		"type":"immersiveengineering:arc_furnace",
		"energy":51200,
		"time":300,
		"input":{
			"item":"kubejs:alumina_oxide"
		},
		"additives":[
			{"item":"kubejs:carbon_dust","count":4}
		],
		"results":[
			{"tag":"forge:ingots/aluminum","count":2}
		]
	});


	//carbon from coal or charcoal
	([
		["minecraft:coal", 1],
		["minecraft:charcoal", 4],
		["immersiveengineering:coal_coke", 8]
	]).forEach(([i,c]) => {
		event.custom({
			"type":"create:mixing",
			"ingredients":[
				{"item":i},
				{"item":"minecraft:gravel", "count":1}
			],
			"results":[
				{"item":"kubejs:carbon_dust", "count":c},
				{"item":"minecraft:gravel", "count":1, "chance":0.9}
			]
		})
	});

	// red mud recycling
	// irl, red mud is an industrial waste issue, so we delay this to T4
	event.custom({
		"type":"mekanism:reaction",
		"duration":100,
		"fluidInput":{
			"amount":100,
			"fluid":"kubejs:red_mud"
		},
		"gasInput":{
			"amount":100,
			"gas":"mekanism:steam"
		},
		"gasOutput":{
			"amount":10,
			"gas":"mekanism:brine"
		},
		"itemInput":{
			"ingredient":{
				"tag":"forge:dusts/sulfur"
			}
		},
		"itemOutput":{
			"item":"minecraft:mud"
		}
	})
});
