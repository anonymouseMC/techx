ServerEvents.recipes(event => {
	event.remove({id:"create:crafting/kinetics/mechanical_drill"});
	event.remove({id:"create:crafting/kinetics/mechanical_harvester"});

	event.shaped(
		"1x create:mechanical_harvester",
		["CBC",
		 "CBC",
		 " A "],
		{
			A:"create:andesite_casing",
			B:"create:brass_sheet",
			C:"create:andesite_alloy"
		}
	);
	event.shaped(
		"1x create:mechanical_drill",
		[" A ",
		 "ACA",
		 "CBC"],
		{
			A:"create:andesite_alloy",
			B:"kubejs:hardened_brass",
			C:"create:andesite_casing"
		}
	);

	event.custom({
		"type": "create:crushing",
		"ingredients": [
			{
				"item": "kubejs:cracked_brass"
			}
		],
		"processingTime": 350,
		"results": [
			{
				"item": "kubejs:crushed_raw_brass"
			},
			{
				"chance":0.75,
				"item": "create:experience_nugget"
			}
		]
	});
	var hbTrans = "kubejs:unprocessed_hardened_brass";
	event.recipes.create.sequenced_assembly(
		[
			Item.of("kubejs:hardened_brass").withChance(60),
			Item.of("kubejs:cracked_brass").withChance(40)
		],
		"create:brass_ingot",
		[
			event.recipes.create.filling(hbTrans, [hbTrans, Fluid.lava(500)  ] ),
			event.recipes.create.filling(hbTrans, [hbTrans, Fluid.water(500) ] )
		]
	).transitionalItem(hbTrans).loops(3);

	event.blasting("create:brass_ingot", "kubejs:crushed_raw_brass");



});