ServerEvents.recipes( (event) => {

	//redstone acid in mixer only
	event.remove({id:"immersiveengineering:crafting/redstone_acid"});

	event.custom({
		"type": "create:mixing",
		"ingredients": [
			{
				"amount": 50,
				"fluid": "minecraft:water"
			},
			{
				"item": "minecraft:redstone"
			}
		],
		"results": [
			{
				"amount": 50,
				"fluid": "immersiveengineering:redstone_acid"
			}
		]
	});

	//new LV battery
	event.remove({id:"immersiveengineering:crafting/capacitor_lv"});
	event.shaped("1x immersiveengineering:capacitor_lv",
		["LCL",
		 "LAL",
		 "LBL"],
		{
			B:"immersiveengineering:wooden_barrel",
			L:"immersiveengineering:plate_lead",
			A:"immersiveengineering:redstone_acid_bucket",
			C:"immersiveengineering:wirecoil_copper"
		}
	);

	//new MV battery
	event.remove({id:"immersiveengineering:crafting/capacitor_mv"});
	event.shaped("1x immersiveengineering:capacitor_mv",
		["LCL",
		 "LAL",
		 "LBL"],
		{
			B:"immersiveengineering:wooden_barrel",
			L:"immersiveengineering:plate_electrum",
			A:"immersiveengineering:redstone_acid_bucket",
			C:"immersiveengineering:wirecoil_electrum"
		}
	);

	//new HV battery
	event.remove({id:"immersiveengineering:crafting/capacitor_hv"});
	event.shaped("1x immersiveengineering:capacitor_hv",
		["LCL",
		 "LAL",
		 "LBL"],
		{
			B:"immersiveengineering:wooden_barrel",
			L:"immersiveengineering:plate_aluminum",
			A:"immersiveengineering:redstone_acid_bucket",
			C:"immersiveengineering:wirecoil_steel"
		}
	);
});