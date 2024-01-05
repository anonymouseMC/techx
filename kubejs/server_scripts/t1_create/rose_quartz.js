/*
	honey + water = CGM
	CGM + redstone = rose quartz
*/

ServerEvents.recipes(event => {
	event.custom({
		"type": "create:mixing",
		"ingredients": [
			{
				"amount": 1000,
				"fluid": "minecraft:water"
			},
			{
				"amount": 25,
				"item": "biomesoplenty:rose_quartz_chunk"
			}
		],
		"results": [
			{
				"amount": 1,
				"item": "create:rose_quartz"
			}
		]
	});

	event.shapeless("biomesoplenty:rose_quartz_chunk",["biomesoplenty:rose_quartz_block"])

	event.remove({id:"create:crafting/materials/rose_quartz"});
	event.custom({
		"type": "create:mixing",
		"ingredients": [
			{
				"amount": 250,
				"fluid": "minecraft:water"
			},
			{
				"amount": 25,
				"fluid": "create:honey"
			}
		],
		"results": [
			{
				"amount": 275,
				"fluid": "kubejs:crystal_growth_medium"
			}
		]
	});

	function add_cgm_growth(medium, result){
		event.custom({
			"type": "create:mixing",
			"ingredients": [
				{"item": medium},
				{"item": medium},
				{"item": medium},
				{"item": medium},
				{"item": medium},
				{"item": medium},
				{
					"amount": 250,
					"fluid": "kubejs:crystal_growth_medium"
				}
			],
			"results": [
				{
					"amount": 1,
					"item": result
				},
				{
					"chance": 0.25,
					"amount": 2,
					"item": result
				}
			]
		});
	}

	add_cgm_growth("minecraft:redstone", "create:rose_quartz");
	add_cgm_growth("create:cinder_flour", "minecraft:quartz");
	add_cgm_growth("minecraft:sculk", "minecraft:ender_pearl");
	add_cgm_growth("minecraft:smooth_basalt", "minecraft:amethyst_shard");
	add_cgm_growth("minecraft:prismarine_shard", "minecraft:prismarine_crystals");

	event.remove({id:"create:crafting/materials/sand_paper"});
	event.remove({id:"create:crafting/materials/red_sand_paper"});
	event.remove({id:"createaddition:crafting/diamond_grit_sandpaper"});

	([
		["minecraft:sand", "create:sand_paper"],
		["minecraft:red_sand", "create:red_sand_paper"],
		["mekanism:dust_diamond", "createaddition:diamond_grit_sandpaper"]
	]).forEach(([input,output]) => {
		event.shapeless(`1x ${output}`, [
			"minecraft:paper",
			"kubejs:resin",
			input
		]);
	});

	event.remove({id:"create:crafting/materials/electron_tube"});
	event.custom({
		"type": "create:mechanical_crafting",
		"acceptMirrored": true,
		"key": {
			"G": {"item": "minecraft:glass"},
			"R": {"item": "create:polished_rose_quartz"},
			"S": {"item": "createaddition:zinc_sheet"}
		},
		"pattern": [
			"G",
			"R",
			"S"
		],
		"result": {
			"item": "create:electron_tube"
		}
	});

	event.remove({id:"create:crafting/kinetics/mechanical_crafter"})
	event.shaped(
		"1x create:mechanical_crafter",
		[" C ",
		 " A ",
		 " B "],
		{
			A:"create:cogwheel",
			B:"create:brass_casing",
			C:"minecraft:crafting_table"
		}
	);
})