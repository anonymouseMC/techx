ServerEvents.recipes( event => {
	event.remove({id:"createdieselgenerators:crafting/asphalt_block"})
	event.custom({
		"type":"create:mixing",
		"ingredients":[
			{"amount":5, "fluid":"kubejs:oil_sludge"},
			{"item":"minecraft:gravel"},
			{"item":"minecraft:sand"}
		],
		"results":[
			{"amount":2,"item":"createdieselgenerators:asphalt_block"}
		]
	})
});
