ServerEvents.recipes( (event) => {

	event.shaped("1x pamhc2foodcore:bakewareitem",[
		"BBB",
		"   ",
		"   "
	],{
		"B":"minecraft:brick"
	});
	event.shaped("1x pamhc2foodcore:juiceritem",[
		" B ",
		" S ",
		"   "
	],{
		"B":"#minecraft:buttons",
		"S":"#forge:stone"
	});
	event.shaped("1x pamhc2foodcore:grinderitem",[
		" R ",
		"S S",
		"SSS"
	],{
		"S":"#forge:stone",
		"R":"minecraft:stick"
	});
	event.shaped("1x pamhc2foodcore:mixingbowlitem",[
		" R ",
		" B ",
		"   "
	],{
		"R":"minecraft:stick",
		"B":"minecraft:bowl"
	});
	event.shaped("1x pamhc2foodcore:rolleritem",[
		"   ",
		"SPS",
		"   "
	],{
		"S":"minecraft:stick",
		"P":"#minecraft:wooden_slabs"
	});
	([
		"minecraft:copper_ingot",
		"minecraft:brick"
	]).forEach( item => {
		event.shaped("1x pamhc2foodcore:saucepanitem",[
			"  S",
			"BS ",
			"BB "
		],{
			"S":"minecraft:stick",
			"B":item
		});		
	});

	event.shapeless("8x pamhc2foodcore:freshwateritem", ["minecraft:water_bucket"]).id("kubejs_pamwater_manual_only");
	event.shapeless("8x pamhc2foodcore:freshmilkitem",  ["minecraft:milk_bucket" ]).id("kubejs_pammilk_manual_only" );

});
