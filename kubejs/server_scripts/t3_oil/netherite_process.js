/*
	netherite process
	ancient debris -> mix with sludge -> scrap
	ancient debris -> mekanism crushing -> scrap 

	scrap -superheated> dirty netherite scrap

	dirty scrap + gold dust -shapeless> netherite dust

	netherite dust + ceramic crucible -> arc furnace -> hot netherite crucible
	hot netherite crucible -drain> ceramic crucible + 1000mb liquid netherite

	liquid netherite is the standard form of netherite. you cannot turn a netherite ingot into a plate.

	1000mb liquid netherite + ingot mould -> netherite ingot
	1000mb liquid netherite + plate mould -> netherite plate
	1000mb liquid netherite + wire mould -> netherite wire

	ingot/plate/wire can be reheated and recast at no loss
*/

ServerEvents.tags("fluid", (event)=>{
	event.add("techx:liquid_netherite", "kubejs:liquid_netherite")
})

ServerEvents.recipes( (event) => {
	event.remove({output:"minecraft:netherite_scrap"});
	event.remove({output:"mekanism:dirty_netherite_scrap"});
	event.remove({output:"mekanism:dust_netherite"});
	event.remove({id:"minecraft:netherite_ingot"});

	//recycling fixes
	event.remove({id:"mekanism:processing/netherite/scrap_to_dust"});
	event.remove({id:"mekanism:processing/netherite/ingot_from_dust_blasting"});
	event.remove({id:"mekanism:processing/netherite/ingot_from_dust_smelting"});
	event.remove({id:"jaopca:immersiveengineering.dust_to_material.netherite"});
	event.remove({id:"mekanism:processing/netherite/dust_to_ancient_debris"});

	event.shaped("4x kubejs:ceramic_crucible",[
			"C C",
			"CBC",
			"CCC",
		],{
			"C":"kubejs:coke_brick_item",
			"B":"kubejs:blast_brick_item"
		})

	event.custom({
		"type":"create:mixing",
		"heatRequirement":"heated",
		"ingredients":[
			{
				"amount":25,
				"fluid":"kubejs:oil_sludge"
			},
			{
				"amount":1,
				"item":"minecraft:ancient_debris"
			}
		],
		"results":[
			{"item":"minecraft:netherite_scrap"},
			{"item":"minecraft:netherite_scrap", "chance":0.2}
		]
	});

	//no oil sludge, but 20% less scrap
	event.custom({
		"type":"mekanism:crushing",
		"input":{
			"ingredient":{
				"item":"minecraft:ancient_debris"
			}
		},
		"output":{
			"item":"minecraft:netherite_scrap"
		}
	});

	event.custom({
		"type":"create:compacting",
		"heatRequirement":"superheated",
		"ingredients":[
			{
				"amount":4,
				"item":"minecraft:netherite_scrap"
			},
			{
				"amount":1,
				"item":"mekanism:dust_sulfur"
			},
			[
				{
					"amount":4,
					"tag":"forge:ingots/gold"
				},
				{
					"amount":4,
					"tag":"forge:dusts/gold"
				}
			]
		],
		"results":[
			{"item":"mekanism:dust_netherite"}
		]
	});

	event.custom({
		"type":"immersiveengineering:arc_furnace",
		"energy":51200,
		"time":300,
		"input":{
			"item":"mekanism:dust_netherite"
		},
		"additives":[
			{"item":"kubejs:ceramic_crucible","count":1}
		],
		"results":[
			{"item":"kubejs:hot_liquid_netherite_crucible","count":1}
		]
	});

	event.custom({
		"type": "create:emptying",
		"ingredients": [
			{
				"item": "kubejs:hot_liquid_netherite_crucible"
			}
		],
		"results": [
			{
				"item": "kubejs:ceramic_crucible"
			},
			{
				"amount": 1000,
				"fluid": "kubejs:liquid_netherite"
			}
		]
	});

	// casts
	event.custom({
		"type": "create:compacting",
		"ingredients": [
			{
				"amount": 250,
				"fluidTag": "minecraft:water"
			},{
				"item":"minecraft:sand"
			},{
				"item":"minecraft:clay"
			},{
				"item":"kubejs:resin"
			}
		],
		"results": [
			{
				"item": "kubejs:netherite_blank_cast"
			}
		]
	})

	var last = "kubejs:netherite_blank_cast";
	([
		"",
		"kubejs:netherite_ingot_cast",
		"kubejs:netherite_plate_cast",
		"kubejs:netherite_wire_cast",
		"kubejs:netherite_blank_cast"
	]).forEach((i,idx) => {
		if(idx == 0){return;}
		event.custom({
			"type":"create:pressing",
			"ingredients":[
				{"item":last}
			],
			"results":[
				{"item":i}
			],
		});
		last = i;
	});

	([
		["kubejs:netherite_ingot_cast", "minecraft:netherite_ingot"],
		["kubejs:netherite_plate_cast", "kubejs:netherite_plate"],
		["kubejs:netherite_wire_cast", "kubejs:netherite_wire"]
	]).forEach(([cast, result]) => {
		event.custom({
			"type": "immersiveengineering:bottling_machine",
			"fluid": {
				"amount": 500,
				"tag": "techx:liquid_netherite"
			},
			"input": {
				"item": cast
			},
			"results": [
				{
					"item": result
				}
			]
		});

		//recycling
		event.custom({
			"type":"create:crushing",
			"ingredients":[
				{"item":result}
			],
			"results":[
				{"item":"mekanism:dirty_netherite_scrap"}
			]
		});
	})

	//recycled scrap to new cast
	event.custom({
		"type":"immersiveengineering:arc_furnace",
		"energy":51200,
		"time":300,
		"input":{
			"base_ingredient":{
				"item":"mekanism:dirty_netherite_scrap"
			},
			"count":3
		},
		"additives":[
			{"item":"kubejs:ceramic_crucible","count":1}
		],
		"results":[
			{"item":"kubejs:hot_liquid_netherite_crucible","count":1}
		]
	})

});
