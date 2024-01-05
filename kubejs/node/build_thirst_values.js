// this is to be run with nodejs!

var cfg = {
	first:`[Drinks]
	#Defines items that will recover thirst when drunk
	#Format: [["item-id-1", hydration-amount, quenching-amount], ["item-id-2", hydration-amount, quenching-amount], ...etc]
	drinks = [`,
	
	second:`]
[Foods]
	#Defines items that will recover thirst when eaten
	#Format: [["item-id-1", hydration-amount, quenching-amount], ["item-id-2", hydration-amount, quenching-amount], ...etc]
	foods = [`,

	third:`]
[Blacklist]
	#A mod may have added thirst compatibility to an item via code. If you want to edit the thirst values
	#of that item, add an entry in one of the first two lists. If instead you want to remove thirst support for that item, add an entry in this list
	#Format: ["examplemod:example_item_1", "examplemod:example_item_2"]
	itemsBlacklist = []`
}

var fs = require('fs');

function generate_config(drinks, foods){
	var fin = cfg.first + drinks.map(a => `["${a[0]}",${a[1]},${a[2]}]` ).toString() + cfg.second + foods.map(a => `["${a[0]}",${a[1]},${a[2]}]` ).toString() + cfg.third;
	fs.writeFileSync('./item_settings.toml', fin);
	console.log(fin)
}

var food_values = require('./food_values.json'); // all foods
var good_foods = require('./good_foods.json');   // all foods that restore more than an entire hunger bar (by default)
var {juices, sodas, yogurts, smoothies, teas, extra} = require('./pam_extra.json'); // extra stuff, (juices... etc)

function map_food_to_thirst( id, hunger, saturation ){

	var threshold = 10; // only grant thirst to items that restore 8 or more food

	//default
	var thirst_restored = Math.floor( (hunger - threshold) / 2);
	var thirst_sat_restored = Math.floor( thirst_restored * saturation );

	switch(true){
		case juices.includes(id):
			thirst_restored = 6;
			thirst_sat_restored = 8;
		break;
		case sodas.includes(id):
			thirst_restored = 16;
			thirst_sat_restored = 8;
		break;
		case yogurts.includes(id):
			thirst_restored = 4;
			thirst_sat_restored = 4;
		break;
		case smoothies.includes(id):
			thirst_restored = 8;
			thirst_sat_restored = 8;
		break;
		case teas.includes(id):
			thirst_restored = 4;
			thirst_sat_restored = 4;
		break;
		case extra.includes(id):
			thirst_restored = 10;
			thirst_sat_restored = 10;
		break;
		case id == "minecraft:potion":
			thirst_restored = 3;
			thirst_sat_restored = 4;
		break;
		case id == "thirst:terracotta_water_bowl":
			thirst_restored = 3;
			thirst_sat_restored = 4;
		break;
	}

	return [ id, thirst_restored, thirst_sat_restored ];
}

var totalFoodList = Object.entries(food_values)
	.map( ([id, values]) => map_food_to_thirst(id, values.food, values.sat) ) // generate thirst values.
	.filter( a => ((a[1] > 0) && a[2] > 0) ) // remove all values with 0 and negative food values.


console.log(totalFoodList);
	// stored in the format [itemID, thirstHydrated, thirstQuenched]

generate_config(totalFoodList, totalFoodList);
// put item_settings.toml into config/thirst/ to apply it.