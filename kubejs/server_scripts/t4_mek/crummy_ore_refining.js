
ServerEvents.recipes( (event) => {
	([
		"sculk",
		"gloom"
	]).forEach(s => {
		([
			"tin",
			"lead"
		]).forEach(ore => {
			event.custom({
				"type":"create:mixing",
				"heatRequirement":"superheated",
				"ingredients":[
					{"amount":1000, "fluid":"immersiveengineering:redstone_acid"},
					{"amount":1, "item":`kubejs:${s}ed_${ore}`}
				],
				"results":[
					{"amount":100, "fluid": `kubejs:${s}_acid` },
					{"count":3,"item":`mekanism:nugget_${ore}`}
				],
			})
		})
	})
});
