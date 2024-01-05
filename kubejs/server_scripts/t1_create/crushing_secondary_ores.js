ServerEvents.recipes( (event) => {
	//rmeove 
	event.custom({
		"type":"create:mixing",
		"ingredients":[
			{"fluid":"minecraft:water", "amount":200},
			{"item":"minecraft:dripstone_block"}
		],
		"results":[
			{"item":"minecraft:clay_ball"}
		]
	});
	([
		"create:crushing/crimsite_recycling",
		"create:crushing/ochrum_recycling",
		"create:crushing/veridium_recycling",
		"create:crushing/asurine_recycling",
		"create:crushing/tuff_recycling",

		"create:crushing/crimsite",
		"create:crushing/ochrum",
		"create:crushing/veridium",
		"create:crushing/asurine",
		"create:crushing/tuff",

		"create:milling/dripstone_block",
		"create:milling/andesite",

		"create:splashing/mekanism/crushed_raw_tin",
		"create:splashing/crushed_raw_copper",
		"create:splashing/crushed_raw_gold",
		"create:splashing/crushed_raw_iron",
		"create:splashing/crushed_raw_zinc",
	]).forEach( ide => {
		event.remove({id:ide});
	});

	//return;

	var STONES = [
		["create:stone_types/ochrum", "create:crushed_raw_gold", 0.333  ],
		["create:stone_types/scoria", "mekanism:dust_coal", 0.8  ],
		["create:stone_types/scorchia", "minecraft:coal", 0.8  ],
		["create:stone_types/tuff", "create:crushed_raw_iron", 0.6  ],
		["create:stone_types/crimsite", "minecraft:redstone", 0.9  ],
		["create:stone_types/dripstone", "create:crushed_raw_copper", 0.333  ],
		["create:stone_types/andesite", "create:crushed_raw_zinc", 0.5  ],
		["create:stone_types/asurine", "minecraft:lapis_lazuli", 0.5  ],
		["create:stone_types/veridium", "minecraft:emerald", 0.05  ],
		["create:stone_types/limestone", "create:crushed_raw_tin", 0.7]
	];
	STONES.forEach( ([source, product, chance]) => {
		//event.remove({type:"create:crushing", ingredients:source });
		event.custom({
			"type":"create:crushing",
			"ingredients":[
				{"tag": source}
			],
			"processingTime":500,
			"results":[
				{
					"chance":chance,
					"item":product
				},
				{
					"chance": 0.5,
					"item": "create:experience_nugget"
				}
			]
		});
	});

	var SECONDARY = [
		["create:crushed_raw_gold",   "minecraft:gold_nugget", "create:zinc_nugget",    "create:rose_quartz",  0.1 ],
		["create:crushed_raw_iron",   "minecraft:iron_nugget", "mekanism:nugget_tin",   "minecraft:redstone",  0.25 ],
		["create:crushed_raw_copper", "create:copper_nugget",  "minecraft:gold_nugget", "minecraft:clay_ball",      0.3 ],
		["create:crushed_raw_zinc",   "create:zinc_nugget",    "create:copper_nugget",  "minecraft:gunpowder", 0.125],
		["create:crushed_raw_tin",    "mekanism:nugget_tin",   "minecraft:iron_nugget", "minecraft:clay_ball",      0.3]
	];
	SECONDARY.forEach( ([source, type, guaranteed, byproduct, bychance]) => {
		//event.remove({type:"create:splashing", ingredients:source });

		event.custom({
			"type": "create:splashing",
			"ingredients": [
				{
					"item": source
				}
			],
			"results": [
				{
					"count": 9,
					"item": type
				},
				{
					"item": guaranteed
				},
				{
					"item": byproduct,
					"chance": bychance
				}
			]
		});
	});

	// refining grass for seeds
	// this IS ore processing. fight me

	// for some reason, dev.latvian.mods.kubejs.item.ItemStackSet, does not extend array, but implements forEach.
	// the more i use kubejs the more i hate it. so we have to do this which is dumb
	var STUPID_SEEDS = [];
	Ingredient.of('#techx:pam_seeds').stacks.forEach( a => STUPID_SEEDS.push(a.id) )

	event.custom({
		"type":"create:splashing",
		"ingredients":[
			{"tag":"regions_unexplored:grass"}
		],
		"results": STUPID_SEEDS.map(a => ({"item":a, "chance":0.01}) )

	});


	// infinite ore checklist:

	// need a recipe for netheric slurry,
	// maybe from terracotta + netherrack to give better gold yield in t2?

	// iron <- wash gravel
	// gold <- wash red sand <- crush terracotta <- smelt clay to terracotta <- wash sand
	// gold <- netheric slurry recycling
	// copper <- wash basalt shale <- crush basalt <- make basalt from lava+ice
	// zinc <- wash magma shale <- crush magma block <- craft from magma cream <- slime from aloe, blaze from blaze farm
	// tin

	// nickel
	// silver
	// lead
	// bauxite

	// osmium
	// uranium
	// fluorite

});

ServerEvents.tags("item", (event)=>{
	event.add("techx:is_basalt", "minecraft:basalt");
	event.add("techx:is_basalt", "minecraft:smooth_basalt");
	event.add("techx:is_basalt", "minecraft:polished_basalt");
})
