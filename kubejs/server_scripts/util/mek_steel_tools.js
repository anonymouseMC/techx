
ServerEvents.recipes( (event) => {
	event.remove({
		id:/immersiveengineering:.*_steel/,
		output:{
			tag:"forge:tools"
		}
	});

	var i = "mekanism:ingot_steel";
	var s = "immersiveengineering:stick_steel";

	event.shaped(
		"mekanismtools:steel_pickaxe",
		["III",
		 " S ",
		 " S "],
		{
			S:s,
			I:i
		}
	);
	event.shaped(
		"mekanismtools:steel_axe",
		["II ",
		 "IS ",
		 " S "],
		{
			S:s,
			I:i
		}
	);
	event.shaped(
		"mekanismtools:steel_shovel",
		[" I ",
		 " S ",
		 " S "],
		{
			S:s,
			I:i
		}
	);
	event.shaped(
		"mekanismtools:steel_hoe",
		["II ",
		 " S ",
		 " S "],
		{
			S:s,
			I:i
		}
	);
	event.shaped(
		"mekanismtools:steel_sword",
		[" I ",
		 " I ",
		 " S "],
		{
			S:s,
			I:i
		}
	);
	event.shaped(
		"mekanismtools:steel_shield",
		["IRI",
		 "III",
		 " I "],
		{
			R:"minecraft:iron_ingot",
			I:i
		}
	);

	event.remove({id:"immersiveengineering:crafting/shield"})
	event.shaped(
		"immersiveengineering:shield",
		["PGP",
		 "PSP",
		 "PTP"],
		{
			P:"immersiveengineering:plate_steel",
			G:"minecraft:glass_pane",
			S:"mekanismtools:steel_shield",
			T:"immersiveengineering:treated_wood_horizontal"
		}
	);
});
