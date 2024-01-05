
var ores = [
	"immersiveengineering:deepslate_ore_aluminum",
	"immersiveengineering:ore_aluminum",
	"immersiveengineering:deepslate_ore_lead",
	"immersiveengineering:ore_lead",
	"immersiveengineering:deepslate_ore_silver",
	"immersiveengineering:ore_silver",
	"immersiveengineering:deepslate_ore_nickel",
	"immersiveengineering:ore_nickel",
	"immersiveengineering:deepslate_ore_uranium",
	"immersiveengineering:ore_uranium",

	"mekanism:deepslate_osmium_ore",
	"mekanism:osmium_ore",
	"mekanism:deepslate_uranium_ore",
	"mekanism:uranium_ore",
	"mekanism:deepslate_fluorite_ore",
	"mekanism:fluorite_ore",
	"mekanism:deepslate_lead_ore",
	"mekanism:lead_ore",

	"deeperdarker:sculk_stone_coal_ore",
	"deeperdarker:gloomslate_coal_ore",
	"deeperdarker:sculk_stone_iron_ore",
	"deeperdarker:gloomslate_iron_ore",
	"deeperdarker:sculk_stone_copper_ore",
	"deeperdarker:gloomslate_copper_ore",
	"deeperdarker:sculk_stone_gold_ore",
	"deeperdarker:gloomslate_gold_ore",
	"deeperdarker:sculk_stone_redstone_ore",
	"deeperdarker:gloomslate_redstone_ore",
	"deeperdarker:sculk_stone_emerald_ore",
	"deeperdarker:gloomslate_emerald_ore",
	"deeperdarker:sculk_stone_lapis_ore",
	"deeperdarker:gloomslate_lapis_ore",
	"deeperdarker:sculk_stone_diamond_ore",
	"deeperdarker:gloomslate_diamond_ore"
]

ServerEvents.recipes( (event) => {
	ores.forEach( ore => {
		event.remove({input:{item:ore}})
	});
});
