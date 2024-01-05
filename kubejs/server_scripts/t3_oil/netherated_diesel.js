// bioethanol + ethanol + 

ServerEvents.recipes( (event) => {
	event.remove({id:"immersiveengineering:refinery/biodiesel"});

	event.remove({id:"createdieselgenerators:compacting/plant_oil"});
	event.remove({id:"createaddition:compacting/seed_oil"});

	event.custom({
		"type": "immersiveengineering:squeezer",
		"energy": 6400,
		"input": {
			"tag":"techx:pam_seeds"
		},
		"fluid": {
			"amount": 50,
			"fluid": "immersiveengineering:plantoil"
		}
	});
	event.custom({
		"type": "immersiveengineering:refinery",
		"energy": 400,
		"catalyst":{
			"item":"createaddition:biomass_pellet"
		},
		"input0": {
			"amount": 1,
			"tag": "techx:is_ethanol"
		},
		"input1": {
			"amount": 1,
			"tag": "techx:is_bioethanol"
		},
		"result": {
			"amount": 2,
			"fluid": "kubejs:biodiesel"
		}
	});

	event.custom({
		"type": "immersiveengineering:refinery",
		"energy": 1600,
		"catalyst":{
			"item":"kubejs:cracking_catalyst"
		},
		"input0": {
			"amount": 2,
			"tag": "techx:is_raw_fuel"
		},
		"input1": {
			"amount": 2,
			"tag": "techx:is_bioethanol"
		},
		"result": {
			"amount": 4,
			"fluid": "kubejs:gasoline"
		}
	});

	event.custom({
		"type":"create:mixing",
		"ingredients":[
			{"amount":250, "fluid":"kubejs:diesel"},
			{"amount":125, "fluid":"kubejs:gasoline"},
			{"item":"minecraft:fire_charge"},
			{"amount":200, "fluid":"kubejs:raw_fuel"}
		],
		"results":[
			{"chance":0.2, "amount":150,"fluid":"kubejs:oil_sludge"},
			{"chance":0.8, "amount":250,"fluid":"kubejs:nether_diesel"}
		]
	})
	event.custom({
		"type":"create:mixing",
		"ingredients":[
			{"amount":550, "fluid":"kubejs:biodiesel"},
			{"amount":125, "fluid":"kubejs:gasoline"},
			{"item":"minecraft:fire_charge"},
			{"amount":200, "fluid":"kubejs:raw_fuel"}
		],
		"results":[
			{"chance":0.8, "amount":250,"fluid":"kubejs:nether_diesel"}
		]
	})
});
ServerEvents.tags("fluid", event => {
	event.add("techx:is_raw_fuel", "kubejs:raw_fuel");
})