
ServerEvents.recipes( (event) => {
	event.shaped(
		"4x kubejs:fluid_engineering_block",
		[
			"IPI",
			"PCP",
			"IPI"
		],{
			P:"create:fluid_pipe",
			I:"immersiveengineering:ingot_constantan",
			C:"create:copper_casing"
		}
	);
	event.shaped(
		"4x kubejs:reinforced_engineering_block",
		[
			"CIC",
			"INI",
			"CIC"
		],{
			N:"immersiveengineering:ingot_electrum",
			I:"kubejs:hardened_steel",
			C:"kubejs:hardened_steel_component"
		}
	);
	event.shaped(
		"kubejs:industrial_engineering_block",
		[
			"IPI",
			"PCP",
			"IPI"
		],{
			P:"kubejs:reinforced_engineering_block",
			I:"immersiveengineering:ingot_aluminum",
			C:"immersiveengineering:component_electronic_adv"
		}
	);
});
