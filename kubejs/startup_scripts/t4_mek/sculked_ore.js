/* sculk ores */
var ores = [
	"uranium",
	"fluorite",
	"lead",
	"osmium",
	"tin"
];

var stones = [
	"gloomslate",
	"sculk_stone"
];

var refine = {
	"gloomslate":"gloomed",
	"sculk_stone":"sculked"
}

var lang_ores = {
	"uranium": "Uranium",
	"fluorite":"Fluorite",
	"lead":    "Lead",
	"osmium":  "Osmium",
	"tin":     "Tin"
}

var lang_stones = {
	"gloomslate":"Gloomslate",
	"sculk_stone":"Sculk Stone"
}

var lang_refine = {
	"gloomed":"Gloomed",
	"sculked":"Sculked"
}
/* */
StartupEvents.registry("item", function(event){
	stones.forEach(stone => {
		var type = refine[stone];
		ores.forEach(ore => {
			event.create(`${type}_${ore}`)
				.displayName(`${lang_refine[type]} ${lang_ores[ore]} Ore`)
				.rarity("rare")
				.texture(`kubejs:item/${type}_${ore}`)
		});
	});
});

StartupEvents.registry("block", function(event){
	stones.forEach(stone => {
		ores.forEach(ore => {
			console.log(`creating ${lang_stones[stone]} ${lang_ores[ore]} (${stone}_${ore}_ore)`);

			event.create(`${stone}_${ore}_ore`)
				.displayName(`${lang_stones[stone]} ${lang_ores[ore]} Ore`)
				.soundType("deepslate")
				.mapColor("color_gray")
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
				.textureAll(`kubejs:block/${stone}_${ore}_ore`);
		});
	});
});