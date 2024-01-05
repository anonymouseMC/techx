
ServerEvents.recipes( (event) => {
	event.remove({mod:"solapplepie"})

	event.shapeless("solapplepie:food_book",
		[
			"minecraft:book",
			"#forge:seeds"
		]
	);
	event.shaped("solapplepie:lunchbag",
		[
			" P ",
			"PSP",
			"PPP"
		],{
			"P":"minecraft:paper",
			"S":"minecraft:string"
		}
	);
	event.shaped("solapplepie:lunchbox",
		[
			" S ",
			"SBS",
			"SIS"
		],{
			"S":"create:iron_sheet",
			"I":"minecraft:iron_ingot",
			"B":"solapplepie:lunchbag"
		}
	);
	event.shaped("solapplepie:golden_lunchbox",
		[
			" P ",
			"PBP",
			"PEP"
		],{
			"P":"immersiveengineering:plate_electrum",
			"E":"immersiveengineering:ingot_electrum",
			"B":"solapplepie:lunchbox"
		}
	);
})
