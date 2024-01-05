ServerEvents.recipes( (event) => {
	//cant put two ingots together to make metal rods
	event.remove(/immersiveengineering\:crafting\/stick_.*/);

	//hammer cant make sheets / plates
	event.remove({id:/jaopca\:immersiveengineering\.material_to_plate_hammer\.*/})
	event.remove({id:/immersiveengineering\:crafting\/plate_\.*/})

	//hammer cant crush ores
	event.remove({id:/immersiveengineering\:crafting\/raw_hammercrushing_\.*/})
	event.remove({id:/immersiveengineering\:crafting\/hammercrushing_\.*/})

	//wire snips cant make wire.
	//may be removed entirely as they are kinda useless
	event.remove({id:/immersiveengineering:crafting\/wire_.*/});
	event.remove({id:/jaopca:immersiveengineering\.plate_to_wire\..*/});

	event.shaped("4x immersiveengineering:stick_treated",[
		"P  ",
		"P  ",
		"   "
	],{
		P:"#forge:treated_wood"
	});

	event.custom({
		"type":"create:filling",
		"ingredients":[
			{"item":"minecraft:stick"},
			{"fluid":"immersiveengineering:creosote", "amount":62}
		],
		"results":[
			{"item":"immersiveengineering:stick_treated"},
		]
	})
});
