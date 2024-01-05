
ServerEvents.recipes( (event) => {
	
	event.remove({id:"createaddition:mixing/electrum"});
	event.remove({type:"immersiveengineering:alloysmelter"});

	event.custom({
		"type":"create:mixing",
		"heatRequirement":"heated",
		"ingredients":[
			{"item":"mekanism:dust_iron"},
			{"tag":"forge:glass", "count":2}
		],
		"results":[
			{"item":"immersiveengineering:insulating_glass"}
		]
	});

	event.custom({
		"type":"create:mixing",
		"heatRequirement":"heated",
		"ingredients":[
			{"item":"minecraft:copper_ingot", "count":3},
			{"tag":"mekanism:ingot_tin"}
		],
		"results":[
			{"item":"mekanism:ingot_bronze", "count":4}
		]
	});
});
