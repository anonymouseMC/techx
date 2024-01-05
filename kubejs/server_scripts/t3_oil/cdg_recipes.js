ServerEvents.recipes( (event) => {

	event.remove({id:"createdieselgenerators:crafting/oil_scanner"})
	event.remove({id:"createdieselgenerators:crafting/distillation_controller"})

	event.shaped("createdieselgenerators:distillation_controller",[
			"APA",
			"HCH",
			"AIA"
		],{
			"A":"immersiveengineering:plate_aluminum",
			"H":"kubejs:hardened_steel_plate",
			"C":"immersiveengineering:component_electronic_adv",
			"P":"#forge:glass_panes/colorless",
			"I":"kubejs:industrial_engineering_block"
		}
	);
	event.shaped("createdieselgenerators:oil_scanner",[
			"APA",
			"HCH",
			" S "
		],{
			"A":"immersiveengineering:plate_aluminum",
			"H":"kubejs:hardened_steel_plate",
			"C":"immersiveengineering:component_electronic_adv",
			"P":"#forge:glass_panes/colorless",
			"S":"immersiveengineering:stick_aluminum"
		}
	);



	event.remove({id:"createdieselgenerators:crafting/oil_barrel"});
	event.remove({id:"createdieselgenerators:crafting/canister"});

	event.shaped("createdieselgenerators:oil_barrel",[
			" N ",
			"NTN",
			" N "
		],{
			"T":"create:fluid_tank",
			"N":"mekanism:nugget_steel"
		}
	);
	event.shaped("createdieselgenerators:canister",[
			" V ",
			" E ",
			" C "
		],{
			"V":"#create:valve_handles",
			"E":"kubejs:reinforced_engineering_block",
			"C":"minecraft:cauldron"
		}
	);


	event.remove({output:/createdieselgenerators:engine_(piston|silencer|turbocharger)/});

	event.shaped("createdieselgenerators:engine_piston",[
		" RS",
		" KR",
		"A  "
	],{
		"S":"kubejs:hardened_steel",
		"R":"create:sturdy_sheet",
		"K":"immersiveengineering:stick_aluminum",
		"A":"kubejs:hardened_steel_component"
	});
	event.shaped("createdieselgenerators:engine_silencer",[
		" WA",
		"WPW",
		"AW "
	],{
		"W":"#minecraft:wool",
		"P":"create:sturdy_sheet",
		"A":"immersiveengineering:stick_aluminum"
	});
	event.shaped("createdieselgenerators:engine_turbocharger",[
		"PPN",
		"PMN",
		"PN "
	],{
		"P":"create:fluid_pipe",
		"N":"kubejs:netherite_plate",
		"M":"kubejs:hardened_steel_component"
	});


	event.remove({output:/createdieselgenerators:(|large_|huge_)diesel_engine/});

	event.shaped("createdieselgenerators:diesel_engine",[
		"PTP",
		"PAP",
		"BSB"
	],{
		"P":"createdieselgenerators:engine_piston",
		"S":"create:steam_engine",
		"A":"immersiveengineering:sheetmetal_aluminum",
		"B":"create:brass_block",
		"T":"createdieselgenerators:oil_barrel"
	});
	event.shaped("createdieselgenerators:large_diesel_engine",[
		"SDS",
		"SES",
		"LCL"
	],{
		"S":"kubejs:spark_plug",
		"D":"createdieselgenerators:diesel_engine",
		"E":"immersiveengineering:sheetmetal_electrum",
		"L":"kubejs:lubricant_item",
		"C":"immersiveengineering:capacitor_mv"
	});
	event.shaped("createdieselgenerators:huge_diesel_engine",[
		"PCL",
		"WTW",
		"PBP"
	],{
		"C":"kubejs:carburettor",
		"P":"kubejs:netherite_plate",
		"B":"immersiveengineering:capacitor_hv",
		"L":"kubejs:lubricant_item",
		"W":"kubejs:netherite_wire",
		"T":"createdieselgenerators:large_diesel_engine"
	});

});

