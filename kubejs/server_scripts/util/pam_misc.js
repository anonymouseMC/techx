ServerEvents.recipes( (event) => {

	event.custom({
		"type":"create:compacting",
		"ingredients":[
			{"tag":"techx:for_cooking_oil"}
		],
		"results":[
			{
				"fluid":"kubejs:cooking_oil",
				"amount":25
			}
		]
	})

	event.custom({
		"type":"immersiveengineering:squeezer",
		"energy":6400,
		"fluid":{
			"amount":50,
			"fluid":"kubejs:cooking_oil"
		},
		"input":{
			"tag":"techx:for_cooking_oil"
		}
	});

	event.custom({
		"type": "create:filling",
		"ingredients": [
			{
				"item": "minecraft:glass_bottle"
			},
			{
				"amount": 125,
				"fluid": "kubejs:cooking_oil"
			}
		],
		"results": [
			{
				"item": "pamhc2foodcore:cookingoilitem"
			}
		]
	})
});

ServerEvents.tags("item", (event) => {
	([
		"pamhc2crops:sesameseedsitem",
		"pamhc2trees:almonditem",
		"pamhc2crops:canolaitem",
	]).forEach(i => {
		event.add("techx:for_cooking_oil", i)
	});
})