
ItemEvents.modification(event => {

	// builders tea is really, really weird.
	// replacing its FoodItem results in everything that depends on
	// create throwing InvocationTargetException: null, of which i have
	// no idea why.

	// I could fix this by replacing builders_tea with kubejs:builders_tea
	// which seems the most plausible, OR, more preferably, treating builders
	// tea like a haste potion and having it return very little water.

	//event.modify("create:builders_tea", modItem => {
	//	modItem.maxStackSize = 2;
	//});

	// raw nerf
	([
		"minecraft:beef",
		"minecraft:rabbit",
		"minecraft:mutton",
		"minecraft:chicken",
		"minecraft:potato",
		"minecraft:porkchop",
		"minecraft:potato",
		"minecraft:cod",
		"minecraft:salmon"
	]).forEach(item => {
		event.modify(item, modItem => {
			modItem.foodProperties = (food) => {
				food.hunger(1);
				food.saturation(1);
			}
		});
	});


	// saturation nerf
	([
		"minecraft:baked_potato",
		"minecraft:rotten_flesh",
		"minecraft:cooked_beef",
		"minecraft:cooked_rabbit",
		"minecraft:cooked_mutton",
		"minecraft:cooked_chicken",
		"minecraft:cooked_porkchop",
		"minecraft:cooked_cod",
		"minecraft:cooked_salmon",
		"minecraft:beetroot_soup"
	]).forEach(item => {
		event.modify(item, modItem => {
			modItem.foodProperties = (food) => {
				food.hunger(3);
				food.saturation(1);
			}
		});
	});

	// used in a lot of recipes, would be awkward if it didnt stack.
	// counter: we make it the worst food in the game!
	event.modify("minecraft:dried_kelp", modItem => {
		modItem.maxStackSize = 64;
		modItem.foodProperties = (food) => {
			food.hunger(1);
			food.saturation(0);
		}

	})
});
