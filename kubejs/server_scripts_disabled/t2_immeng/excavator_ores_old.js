var normal = [
	"ancient_debris",
	"auricupride",
	"beryl",
	"bituminous_coal",
	"cassiterite",
	"chalcopyrite",
	"cinnabar",
	"cooled_lava_tube",
	"cooperite",
	"galena",
	"igneous_rock",
	"laterite",
	"mephitic_quarzite",
	"nether_silt",
	"pentlandite",
	"silt",
	"uraninite",
	"wolframite"
]

var dim_types = {
	"minecraft:overworld":[
		{
			"chance": 0.3,
			"output": {
				"item": "minecraft:cobblestone"
			}
		},
		{
			"chance": 0.1,
			"output": {
				"item": "minecraft:gravel"
			}
		},
		{
			"chance": 0.5,
			"output": {
				"item": "minecraft:cobbled_deepslate"
			}
		}
	],
	"minecraft:the_nether":[
		{
			"chance": 0.5,
			"output": {
				"item": "minecraft:netherrack"
			}
		},
		{
			"chance": 0.3,
			"output": {
				"item": "minecraft:basalt"
			}
		},
		{
			"chance": 0.2,
			"output": {
				"item": "minecraft:gravel"
			}
		}
	],
	"deeperdarker:otherside/gloom":[
		{
			"chance": 0.5,
			"output": {
				"item": "deeperdarker:cobbled_gloomslate"
			}
		},
		{
			"chance": 0.4,
			"output": {
				"item": "minecraft:netherrack"
			}
		},
		{
			"chance": 0.1,
			"output": {
				"item": "minecraft:blackstone"
			}
		}
	],
	"deeperdarker:otherside/sculk":[
		{
			"chance": 0.5,
			"output": {
				"item": "deeperdarker:cobbled_sculk_stone"
			}
		},
		{
			"chance": 0.4,
			"output": {
				"item": "minecraft:cobbled_deepslate"
			}
		},
		{
			"chance": 0.1,
			"output": {
				"item": "minecraft:blackstone"
			}
		}
	]
}
ServerEvents.recipes( (event) => {

	event.remove({id:"create:crafting/palettes/scorchia"});
	event.remove({id:"createaddition:compat/immersiveengineering/sphalerite"});

	normal.forEach( vein => {
		event.remove({id:`immersiveengineering:mineral/${vein}`});
	})


	function add_ore_vein(name, rarity, dim, ores){

		var rarities = {
			"very_common":[40, 0.05],
			"common":[30, 0.25],
			"stone":[40, 0.3],
			"deep":[30, 0.25]
		}

		event.custom({
			"type": "immersiveengineering:mineral_mix",
			"dimensions": [ dim.split("/")[0] ],
			"fail_chance": rarities[rarity][1],
			"ores": ores.map(([id,chance]) => ( {"output":{"item":id},"chance":chance} )),
			"spoils": dim_types[dim],
			"sample_background": dim_types[dim][0]["output"]["item"],
			"weight": rarities[rarity][0]
		}).id(`immersiveengineering:mineral/techx/tx_${name}`)
	}

/*
	add_ore_vein(
		"",
		50,
		"minecraft:overworld",
		0.25,
		[
			["minecraft:",0.],
		]
	);

*/

	//OVERWORLD
	// VERY COMMON
	add_ore_vein(
		"alternite",
		"very_common",
		"minecraft:overworld",
		[
			["minecraft:andesite",0.3],
			["minecraft:diorite",0.3],
			["minecraft:granite",0.3],
			["minecraft:tuff",0.1],
		]
	);
	add_ore_vein(
		"silt",
		"very_common",
		"minecraft:overworld",
		[
			["minecraft:clay",0.4],
			["mekanism:salt",0.1],
			["minecraft:dirt",0.4],
			["minecraft:sand",0.1]
		]
	);

	// COMMON
	add_ore_vein(
		"modernite",
		"common",
		"minecraft:overworld",
		[
			["minecraft:moss_block",0.3],
			["minecraft:amethyst_shard",0.2],
			["minecraft:tuff",0.25],
			["minecraft:calcite",0.25]
		]
	);

	// STONE
	add_ore_vein(
		"scoria",
		"stone",
		"minecraft:overworld",
		[
			["minecraft:coal",0.3],
			["create:scoria",0.7]
		]
	);

	add_ore_vein(
		"limestone",
		"stone",
		"minecraft:overworld",
		[
			["create:limestone",0.7],
			["mekanism:raw_tin",0.3]
		]
	);

	add_ore_vein(
		"malachite",
		"stone",
		"minecraft:overworld",
		[
			["minecraft:dripstone_block",0.7],
			["minecraft:raw_copper",0.3]
		]
	);

	add_ore_vein(
		"sphalerite",
		"stone",
		"minecraft:overworld",
		[
			["minecraft:andesite",0.5],
			["create:raw_zinc",0.5]
		]
	);

	add_ore_vein(
		"banded_iron",
		"stone",
		"minecraft:overworld",
		[
			["minecraft:tuff",0.5],
			["minecraft:raw_iron",0.5]
		]
	);

	//DEEP ORES
	add_ore_vein(
		"opulium",
		"deep",
		"minecraft:overworld",
		[
			["create:ochrum",0.7],
			["minecraft:raw_gold",0.3]
		]
	);
	add_ore_vein(
		"crimsite",
		"deep",
		"minecraft:overworld",
		[
			["create:crimsite",0.7],
			["minecraft:redstone",0.3]
		]
	);
	add_ore_vein(
		"asurine",
		"deep",
		"minecraft:overworld",
		[
			["create:asurine",0.7],
			["minecraft:lapis",0.3]
		]
	);
	add_ore_vein(
		"redstate_pyroclast",
		"deep",
		"minecraft:overworld",
		[
			["minecraft:obsidian",0.7],
			["regions_unexplored:raw_redstone_block",0.3]
		]
	);


	//NETHER
	// STONE
	add_ore_vein(
		"netheric_blend",
		"stone",
		"minecraft:the_nether",
		[
			["minecraft:glowstone_dust",0.23],
			["minecraft:netherrack",0.75],
			["minecraft:ancient_debris",0.02]
		]
	);
	add_ore_vein(
		"scorchia",
		"stone",
		"minecraft:the_nether",
		[
			["minecraft:diamond",0.05],
			["minecraft:coal",0.4],
			["create:scorchia",0.6]
		]
	);
	add_ore_vein(
		"casserite",
		"stone",
		"minecraft:the_nether",
		[
			["minecraft:quartz",0.5],
			["techx:nethered_tin",0.5]
		]
	);
	add_ore_vein(
		"argentite",
		"stone",
		"minecraft:the_nether",
		[
			["techx:nethered_silver",0.5],
			["techx:nethered_lead",0.5]
		]
	);
	add_ore_vein(
		"vanillite",
		"stone",
		"minecraft:the_nether",
		[
			["minecraft:raw_gold",0.5],
			["minecraft:quartz",0.5]
		]
	);
	add_ore_vein(
		"electrite",
		"stone",
		"minecraft:the_nether",
		[
			["minecraft:raw_gold",0.5],
			["minecraft:nethered_silver",0.5]
		]
	);
	add_ore_vein(
		"pentlandite",
		"stone",
		"minecraft:the_nether",
		[
			["minecraft:raw_iron",0.4],
			["techx:nethered_nickel",0.6]
		]
	);
	add_ore_vein(
		"laterite",
		"stone",
		"minecraft:the_nether",
		[
			["minecraft:raw_iron",0.4],
			["kubejs:nethered_bauxite",0.6]
		]
	);


	//DEEP
	add_ore_vein(
		"sulfuric_blend",
		"deep",
		"minecraft:the_nether",
		[
			["kubejs:nethered_lead",0.4],
			["minecraft:magma_block",0.2],
			["biomesoplenty:brimstone",0.4]
		]
	);
	add_ore_vein(
		"vicious_flesh",
		"deep",
		"minecraft:the_nether",
		[
			["minecraft:honey_block",0.4],
			["minecraft:calcite",0.2],
			["biomesoplenty:flesh",0.2],
			["biomesoplenty:porous_flesh",0.2]
		]
	);
	add_ore_vein(
		"dense_felsic",
		"deep",
		"minecraft:the_nether",
		[
			["minecraft:obsidian",0.3],
			["minecraft:blackstone",0.5],
			["regions_unexplored:cobalt_obsidian",0.1],
			["minecraft:crying_obsidian",0.1]
		]
	);
	add_ore_vein(
		"basalt_pyroclast",
		"deep",
		"minecraft:the_nether",
		[
			["minecraft:basalt",0.2],
			["minecraft:magma_block",0.1],
			["supplementaries:ash",0.2],
			["kubejs:nethered_bauxite",0.5]
		]
	);
	add_ore_vein(
		"angeline",
		"deep",
		"minecraft:the_nether",
		[
			["minecraft:glowstone_dust",0.3],
			["biomesoplenty:rose_quartz_chunk",0.2],
			["kubejs:nethered_nickel",0.5]
		]
	);
	add_ore_vein(
		"corporealine",
		"deep",
		"minecraft:the_nether",
		[
			["minecraft:bone_block",0.2],
			["minecraft:soul_soil",0.4],
			["minecraft:soul_sand",0.4]
		]
	);

	(["sculk","gloom"]).forEach(vt => {
		var ore_type = (vt == "sculk"?"sculk_stone":"gloomslate")


		add_ore_vein(
			`${vt}_pitchblende`,
			"deep",
			`deeperdarker:otherside/${vt}`,
			[
				[`kubejs:${ore_type}_lead_ore`,0.5],
				[`kubejs:${ore_type}_uranium_ore`,0.5],
			]
		);
		add_ore_vein(
			`${vt}_fluorium`,
			"deep",
			`deeperdarker:otherside/${vt}`,
			[
				[`minecraft:raw_iron`,0.2],
				[`kubejs:${ore_type}_fluorite_ore`,0.8],
			]
		);
		add_ore_vein(
			`${vt}_densite`,
			"deep",
			`deeperdarker:otherside/${vt}`,
			[
				[`kubejs:${ore_type}_osmium_ore`,0.5],
				[`kubejs:${ore_type}_lead_ore`,0.5],
			]
		);
		add_ore_vein(
			`${vt}_litholite`,
			"deep",
			`deeperdarker:otherside/${vt}`,
			[
				[`kubejs:${ore_type}_fluorite_ore`,0.8],
				[`kubejs:${ore_type}_tin_ore`,0.2],
			]
		);
	});

	add_ore_vein(
		"gloom_sculk",
		"stone",
		"deeperdarker:otherside/gloom",
		[
			["deeperdarker:sculk_gleam",0.1],
			["minecraft:sculk",0.9],
		]
	);
	add_ore_vein(
		"sculk_sculk",
		"stone",
		"deeperdarker:otherside/gloom",
		[
			["deeperdarker:crystallized_amber",0.1],
			["deeperdarker:gloomy_sculk",0.9],
		]
	);
});
