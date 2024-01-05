ServerEvents.recipes( (event) => {
	event.remove({id:"createaddition:crafting/rolling_mill"});
	event.shaped( "1x createaddition:rolling_mill",
		["PCP",
		 "PCP",
		 "MBM"],
		{

			P:"create:sturdy_sheet",
			M:"create:precision_mechanism",
			C:"kubejs:hardened_brass",
			B:"create:brass_casing"
		}
	);

	event.custom({
		"type": "create:mechanical_crafting",
		"acceptMirrored": true,
		"key": {
			"B": {"item": "minecraft:glass_bottle"},
			"S": {"item": "create:iron_sheet"},
			"W": {"item": "createaddition:iron_wire"}
		},
		"pattern": [
			"S",
			"W",
			"S",
			"B",
			"S"
		],
		"result": {
			"item": "kubejs:leyden_jar"
		}
	});

	event.remove({id:"createaddition:mechanical_crafting/alternator"});
	event.shaped( "1x createaddition:alternator",
		["ASA",
		 "SRS",
		 "ALA"],
		{
			A:"create:sturdy_sheet",
			S:"createaddition:gold_spool",
			R:"create:shaft",
			L:"kubejs:leyden_jar"
		}
	);


	event.remove({id:"createaddition:mechanical_crafting/electric_motor"});
	event.shaped( "1x createaddition:electric_motor",
		["CSC",
		 "SRS",
		 "CLC"],
		{
			C:"kubejs:hardened_brass",
			S:"createaddition:copper_spool",
			R:"create:shaft",
			L:"kubejs:leyden_jar"
		}
	);

	event.remove({id:/createaddition:crafting\/(large|small)_connector_.*/});

	event.shaped( "1x createaddition:large_connector",
		[" R ",
		 "SRS",
		 "SRS"],
		{
			R:"createaddition:gold_rod",
			S:"create:iron_sheet"
		}
	);

	event.shaped( "1x createaddition:connector",
		["   ",
		 " R ",
		 "SRS"],
		{
			R:"createaddition:copper_rod",
			S:"create:iron_sheet"
		}
	);

	event.remove({id:/createaddition:crafting\/modular_accumulator_.*/});
	event.shaped( "2x createaddition:modular_accumulator",
		["WBW",
		 "LLL",
		 "LLL"],
		{
			W:"createaddition:gold_wire",
			B:"create:brass_casing",
			L:"kubejs:leyden_jar"
		}
	);

	event.remove({id:"createaddition:mechanical_crafting/tesla_coil"})
	event.custom({
		"type": "create:mechanical_crafting",
		"acceptMirrored": true,
		"key": {
			"C": {"item": "createaddition:copper_spool"},
			"B": {"item": "create:brass_ingot"},
			"L": {"item": "kubejs:leyden_jar"},
			"A": {"item": "create:brass_casing"},
			"S": {"item": "create:brass_sheet"},
			"E": {"item": "create:electron_tube"},
		},
		"pattern": [
			"CCC",
			" B ",
			"LAL",
			"SES"
		],
		"result": {
			"item": "createaddition:tesla_coil"
		}
	});

});