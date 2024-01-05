ServerEvents.recipes( (event) => {

	event.remove({id:"immersiveengineering:crafting/constantan_mix"});
	event.remove({id:"createaddition:compat/immersiveengineering/constantan"});
	event.remove({id:"immersiveengineering:alloysmelter/constantan"});

	event.custom({
		"type": "create:mixing",
		"heatRequirement": "heated",
		"ingredients": [
			{
				"item": "immersiveengineering:dust_nickel"
			},
			{
				"item": "mekanism:dust_copper"
			}
		],
		"results": [
			{
				"item": "immersiveengineering:dust_constantan"
			}
		]
	});

});
