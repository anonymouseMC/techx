/*
	Motivation for this change is for two reasons
	#1 progression-wise, it makes sense
	#2 copper oxidises to all hell in real life
	QUEUE OF THINGS TO FIX:

*/

ServerEvents.recipes(event => {
	event.remove({id:"create:crafting/kinetics/fluid_pipe_vertical"});
	event.remove({id:"create:crafting/kinetics/fluid_pipe"});

	event.custom({
		"type": "create:pressing",
		"ingredients": [
			{
				"item": "mekanism:ingot_bronze"
			}
		],
		"results": [
			{
				"item": "kubejs:bronze_sheet"
			}
		]
	});

	event.shaped( "4x create:fluid_pipe",
		["   ",
		 "SCS",
		 "   "],
		{
			C:"mekanism:ingot_bronze",
			S:"kubejs:bronze_sheet"
		}
	);

	event.shaped( "4x create:fluid_pipe",
		[" S ",
		 " C ",
		 " S "],
		{
			C:"mekanism:ingot_bronze",
			S:"kubejs:bronze_sheet"
		}
	);

	event.remove({id:"create:crafting/kinetics/smart_fluid_pipe"});
	event.shaped( "1x create:smart_fluid_pipe",
		[" S ",
		 " P ",
		 " S "],
		{
			S:"create:brass_sheet",
			P:"create:fluid_pipe"
		}
	);

	event.remove({id:"create:crafting/kinetics/fluid_tank"});
	event.shaped( "1x create:fluid_tank",
		[" S ",
		 "SBS",
		 " S "],
		{
			S:"create:brass_sheet",
			B:"minecraft:barrel"
		}
	);

	event.remove({id:"create:crafting/kinetics/spout"});
	event.shaped( "1x create:spout",
		["ITI",
		 "IKI",
		 " P "],
		{
			I:"create:iron_sheet",
			T:"create:fluid_tank",
			K:"minecraft:dried_kelp",
			P:"create:fluid_pipe",
		}
	);

});