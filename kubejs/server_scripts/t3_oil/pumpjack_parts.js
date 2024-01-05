
ServerEvents.recipes( (event) => {
	event.remove({output:/createdieselgenerators:pumpjack_(crank|head|bearing)/});

	event.shaped("createdieselgenerators:pumpjack_crank",[
		"RSR",
		"RCR",
		"ZCZ"
	],{
		"C":"kubejs:reinforced_engineering_block",
		"R":"immersiveengineering:stick_aluminum",
		"Z":"createaddition:zinc_sheet",
		"S":"create:shaft"
	});

	event.shaped("createdieselgenerators:pumpjack_bearing",[
		"ZMZ",
		"PCP",
		"ZPZ"
	],{
		"C":"kubejs:reinforced_engineering_block",
		"P":"immersiveengineering:plate_aluminum",
		"Z":"createaddition:zinc_sheet",
		"M":"create:mechanical_bearing"
	});

	event.shaped("createdieselgenerators:pumpjack_head",[
		"P P",
		"CRC",
		"P P"
	],{
		"C":"kubejs:reinforced_engineering_block",
		"R":"immersiveengineering:stick_aluminum",
		"P":"createaddition:zinc_sheet"
	});
});
