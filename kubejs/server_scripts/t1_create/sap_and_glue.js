ServerEvents.recipes((event)=>{
	// squish sap out of saplings */

	event.custom({
		"type": "create:pressing",
		"ingredients": [{
			"tag":"minecraft:saplings"
		}],
		"results": [
				// okay, want to know my fun fact of the day?
				// if a create recipe has only a chanced output
				// and, is given a stack of items; the machine
				// will crash the game once the final item is
				// processed.
				//   java.lang.NullPointerException: Cannot assign field "locked" because "this.heldItem" is null at com.simibubi.create.content.logistics.depot.DepotBehaviour.tick(DepotBehaviour.java:147) ~[create-1.20.1-0.5.1.f.jar%23326!/:0.5.1.f] {re:classloading}
				// this was really fun to find.
			{
				"item":"minecraft:stick"
			},
			{
				"chance": 0.25,
				"item": "kubejs:sap"
			}
		]
	});


	// honey + sap = resin
	event.custom({
		"type": "create:mixing",
		"ingredients": [
			{
				"item": "kubejs:sap"
			},
			{
				"amount": 125,
				"fluid": "create:honey"
			},
			{
				"amount": 125,
				"fluid": "minecraft:water"
			}
		],
		"results": [
			{
				"amount": 250,
				"fluid": "kubejs:liquid_resin"
			}
		]
	});

	// slime + sap = resin
	event.custom({
		"type": "create:mixing",
		"ingredients": [
			{
				"item": "minecraft:slime_ball"
			},
			{
				"amount": 125,
				"fluid": "minecraft:water"
			}
		],
		"results": [
			{
				"amount": 125,
				"fluid": "kubejs:liquid_resin"
			}
		]
	});

	// liquid resin to normal resin
	event.custom({
		"type": "create:compacting",
		"ingredients": [{
			"amount": 125,
			"fluid": "kubejs:liquid_resin"
		}],
		"results": [{
			"item": "kubejs:resin"
		}]
	});

	event.shaped(
		"4x kubejs:empty_tube",
		[" A ",
		 " A ",
		 " B "],
		{
			A:"create:iron_sheet",
			B:"minecraft:iron_nugget"
		}
	);

	event.remove({id:"create:crafting/kinetics/super_glue"});
	event.shaped(
		"1x create:super_glue",
		["AAA",
		 "ABA",
		 "AAA"],
		{
			A:"kubejs:sap",
			B:"kubejs:empty_tube"
		}
	);

	([
		["kubejs:liquid_resin", "create:super_glue"],
		["kubejs:lubricant", "kubejs:lubricant_item"]
	]).forEach(([fluid,item])=>{
		event.custom({
			"type": "create:filling",
			"ingredients": [
				{
					"item": "kubejs:empty_tube"
				},
				{
					"amount": 250,
					"fluid": fluid
				}
			],
			"results": [
				{
					"item": item
				}
			]
		});
	});


})