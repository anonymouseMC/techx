ServerEvents.recipes( (event) => {
	event.remove({id:"immersiveengineering:crafting/gunpowder_from_dusts"});
	event.custom({
		"type": "create:mixing",
		"ingredients": [
			{
				"amount": 4,
				"item": "immersiveengineering:dust_saltpeter"
			},
			{
				"amount": 1,
				"item": "mekanism:dust_sulfur"
			},
			{
				"amount": 1,
				"item": "minecraft:charcoal"
			}
		],
		"results": [
			{
				"amount": 8,
				"item": "minecraft:gunpowder"
			}
		]
	})
});
