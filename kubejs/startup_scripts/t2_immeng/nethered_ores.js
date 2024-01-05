/* nether ores */
var n_ores = [
	"tin",
	"bauxite",
	"lead",
	"nickel",
	"silver"
];

var n_lang_ores = {
	"tin": "Tin",
	"bauxite":"Bauxite",
	"lead":    "Lead",
	"nickel":  "Nickel",
	"silver":     "Silver"
}

/* */
StartupEvents.registry("item", function(event){
	n_ores.forEach(ore => {
		event.create(`nethered_${ore}`)
			.displayName(`Nethered ${n_lang_ores[ore]}`)
			.rarity("uncommon")
			.texture(`kubejs:item/nethered_${ore}`)
	});
});

StartupEvents.registry("block", function(event){
	n_ores.forEach(ore => {
		console.log(`creating ${n_lang_ores[ore]} (nether_${ore}_ore)`);

		event.create(`nether_${ore}_ore`)
			.displayName(`Nether ${n_lang_ores[ore]} Ore`)
			.soundType("netherrack")
			.mapColor("color_red")
			.hardness(5.0)
			.resistance(1.0)
			.requiresTool(true)
			.tagBlock("mineable/pickaxe")
			.tagBlock("minecraft:needs_diamond_tool")
			.tagBlock(`forge:ores/${ore}`)
			.tagBlock(`forge:ores`)
			.tagBlock(`forge:ore_rates/singular`)
			.opaque(true)
			.fullBlock(true)
			.renderType('solid')
			.textureAll(`kubejs:block/nether_${ore}_ore`);
	});
});