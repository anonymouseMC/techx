StartupEvents.registry("block", function(event){

	event.create(`fluid_engineering_block`)
		.displayName(`Fluid Engineering Block`)
		.soundType("copper")
		.mapColor("metal")
		.hardness(3.0)
		.resistance(1.0)
		.requiresTool(true)
		.tagBlock("mineable/pickaxe")
		.tagBlock("minecraft:needs_iron_tool")
		.opaque(true)
		.fullBlock(true)
		.renderType('solid')
		.textureAll(`kubejs:block/fluid_engineering_block`);

	event.create(`reinforced_engineering_block`)
		.displayName(`Reinforced Engineering Block`)
		.soundType("metal")
		.mapColor("metal")
		.hardness(4.0)
		.resistance(1.0)
		.requiresTool(true)
		.tagBlock("mineable/pickaxe")
		.tagBlock("minecraft:needs_iron_tool")
		.opaque(true)
		.fullBlock(true)
		.renderType('solid')
		.textureAll(`kubejs:block/reinforced_engineering_block`);

	event.create(`industrial_engineering_block`)
		.displayName(`Industrial Engineering Block`)
		.soundType("metal")
		.mapColor("metal")
		.hardness(4.0)
		.resistance(1.0)
		.requiresTool(true)
		.tagBlock("mineable/pickaxe")
		.tagBlock("minecraft:needs_iron_tool")
		.opaque(true)
		.fullBlock(true)
		.renderType('solid')
		.textureAll(`kubejs:block/industrial_engineering_block`);
});