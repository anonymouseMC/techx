ServerEvents.recipes( (event) => {
	function gi(m){ return [`immersiveengineering:ingot_${m}`,`immersiveengineering:dust_${m}`] }
	([
		["minecraft:copper_ingot", "mekanism:dust_copper"],
		gi("nickel"),
		gi("aluminum"),
		gi("silver"),
		gi("constantan"),
		gi("electrum"),
	]).forEach( ([i,o])=>{
		event.custom({
			"type":"create:crushing",
			"ingredients":[
				{"item":i}
			],
			"results":[
				{"item":o}
			]
		})
	} )
});
