ServerEvents.recipes( (event) => {
	function add_distilling(input, output, heating){
		event.custom({
			"type": "createdieselgenerators:distillation",
			"ingredients": [
				{
					"fluid": input,
					"amount": output.map(a => a.amount).reduce((a, b) => a + b, 0)
				}
			],
			"heatRequirement": (heating?heating:"heated"),
			"processingTime": 200,
			"results": output.reverse()
		});
	}

	var KEY_TO_ALT_ACID = {
		"gloom": "kubejs:sculk_acid",
		"sculk": "kubejs:gloom_acid"
	};

	var KEY_TO_ACID = {
		"gloom": "kubejs:gloom_acid",
		"sculk": "kubejs:sculk_acid"
	};

	([
		"gloom",
		"sculk"
	]).forEach(sculk => {
		//osmium
		event.custom({
			"type":"create:mixing",
			"heatRequirement":"superheated",
			"ingredients":[
				{
					"amount":500,
					"fluid": KEY_TO_ACID[ sculk ]
				},
				{
					"count":1,
					"item":`kubejs:${sculk}ed_osmium`
				}
			],
			"results":[
				{
					"amount":450,
					"fluid": KEY_TO_ALT_ACID[ sculk ]
				},
				{
					"count":1,
					"item":"mekanism:dust_osmium"
				}
			]
		}); // for 5x
		event.custom({
			"type":"create:mixing",
			"heatRequirement":"superheated",
			"ingredients":[
				{
					"amount":500,
					"fluid": KEY_TO_ACID[ sculk ]
				},
				{
					"amount":50,
					"fluid": "kubejs:crystal_growth_medium",
				},
				{
					"count":1,
					"item":`kubejs:${sculk}ed_osmium`
				}
			],
			"results":[
				{
					"amount":450,
					"fluid": KEY_TO_ALT_ACID[ sculk ]
				},
				{
					"count":2,
					"item":"kubejs:pre_processed_osmium_slurry"
				}
			]
		});
		//fluorite
		event.custom({
			"type":"create:mixing",
			"heatRequirement":"superheated",
			"ingredients":[
				{
					"amount":750,
					"fluid": KEY_TO_ACID[ sculk ]
				},
				{
					"count":1,
					"item":`kubejs:${sculk}ed_fluorite`
				}
			],
			"results":[
				{
					"amount":650,
					"fluid": KEY_TO_ALT_ACID[ sculk ]
				},
				{
					"count":1,
					"chance":0.1,
					"item":"kubejs:monofluorium"
				},
				{
					"count":1,
					"chance":0.9,
					"item":"kubejs:flawed_multifluorium"
				}
			]
		});
		
		//uranium
		event.custom({
			"type":"create:mixing",
			"heatRequirement":"superheated",
			"ingredients":[
				{
					"amount":1000,
					"fluid": KEY_TO_ACID[ sculk ]
				},
				{
					"count":1,
					"item":`kubejs:${sculk}ed_uranium`
				}
			],
			"results":[
				{
					"amount":900,
					"fluid": KEY_TO_ALT_ACID[ sculk ]
				},
				{
					"count":2,
					"item":"mekanism:shard_uranium"
				}
			]
		}); // for 5x
		event.custom({
			"type":"create:mixing",
			"heatRequirement":"superheated",
			"ingredients":[
				{
					"amount":1000,
					"fluid": KEY_TO_ACID[ sculk ]
				},
				{
					"amount":50,
					"fluid": "kubejs:crystal_growth_medium",
				},
				{
					"count":1,
					"item":`kubejs:${sculk}ed_uranium`
				}
			],
			"results":[
				{
					"amount":900,
					"fluid": KEY_TO_ALT_ACID[ sculk ]
				},
				{
					"count":2,
					"item":"kubejs:pre_processed_uranium_slurry"
				}
			]
		});
	});

	//pre-processed's to slurry
	([
		["kubejs:pre_processed_uranium_slurry", "mekanism:dirty_uranium"],
		["kubejs:pre_processed_osmium_slurry", "mekanism:dirty_osmium"],
	]).forEach(([item, chem])=>{
		event.custom({
			"type":"mekanism:dissolution",
			"gasInput":{
				"amount":1,
				"gas":"mekanism:sulfuric_acid"
			},
			"itemInput":{
				"amount":3,
				"ingredient":{
					"item":item
				}
			},
			"output":{
				"amount":2000,
				"chemicalType":"slurry",
				"slurry":chem
			}
		});
	});


	//cutting fluorium into fluorite

	([
		["kubejs:flawed_multifluorium", 0.5],
		["kubejs:monofluorium", 0.9]
	]).forEach( ([item, chance]) => {
		event.custom({
			"type": "mekanism:sawing",
			"input": {
				"ingredient": {
					"item": item
				}
			},
			"mainOutput": {
				"count": 8,
				"item": "mekanism:fluorite_gem"
			},
			"secondaryChance": chance,
			"secondaryOutput": {
				"item": "mekanism:dust_fluorite"
			}
		});

		event.custom({
			"type": "mekanism:crushing",
			"input": {
				"ingredient":{
					"item": item
				}
			},
			"output": {
				"count": 9,
				"item": "mekanism:dust_fluorite"
			}
		});

	});


	//uranium stuff

	//condensentrations
	([
		// LIQUID, GAS
		["kubejs:uranium_peroxide", "kubejs:uranium_peroxide"],
		["kubejs:uranyl_carbonate", "kubejs:uranyl_carbonate"],
		["kubejs:nitric_acid", "kubejs:nitric_acid"]
	]).forEach(([a,b])=>{
		event.custom({
			"type": "mekanism:rotary",
			"fluidInput": {
				"amount": 1,
				"fluid": a
			},
			"fluidOutput": {
				"amount": 1,
				"fluid": a
			},
			"gasInput": {
				"amount": 1,
				"gas": b
			},
			"gasOutput": {
				"amount": 1,
				"gas": b
			}
		})
	});


	event.remove({input:"mekanism:dust_uranium"});
	event.remove({output:"mekanism:dust_uranium"});

	event.remove({input:"create:crushed_raw_uranium"});
	event.remove({output:"create:crushed_raw_uranium"});

	event.remove({output:"mekanism:ingot_uranium", not:{type:"minecraft:crafting_shaped"}});
	event.remove({id:"mekanism:processing/uranium/yellow_cake_uranium"});

	event.custom({
		"type":"mekanism:enriching",
		"input":{
			"ingredient":{
				"tag":"mekanism:dirty_dusts/uranium"
			}
		},
		"output":{
			"item":"mekanism:dust_uranium"
		}
	});
	event.custom({
		"type":"create:mixing",
		"ingredients":[
			{"item":"mekanism:nugget_steel"},
			{"item":"mekanism:nugget_steel"},
			{"item":"mekanism:nugget_steel"},
			{"item":"mekanism:nugget_steel"},
			{"item":"mekanism:nugget_steel"},
			{"item":"mekanism:nugget_steel"},
			{"item":"mekanism:nugget_steel"},
			{"item":"mekanism:nugget_steel"},
			{"item":"mekanism:nugget_steel"},
			{"item":"mekanism:nugget_steel"},
			{"item":"mekanism:nugget_steel"},
			{"item":"mekanism:nugget_steel"},
			{"item":"mekanism:nugget_steel"},
			{"item":"mekanism:nugget_steel"},
			{"item":"mekanism:nugget_steel"},
			{"item":"mekanism:nugget_steel"},
			{"item":"mekanism:dust_uranium"}
		],
		"results":[
			{"count":15, "item":"mekanism:nugget_steel"},
			{"chance":0.8, "item":"mekanism:nugget_steel"},
			{"item":"kubejs:fine_uranium_powder"}
		]
	});

/*
	event.custom({
		"type":"create:mixing",
		"ingredients":[],
		"results":[]
	});
*/

	event.custom({
		"type":"create:mixing",
		"heatRequirement":"heated",
		"ingredients":[
			{"item":"kubejs:fine_uranium_powder"},
			{"fluid":"immersiveengineering:redstone_acid", "amount":500}
		],
		"results":[
			{"fluid":"kubejs:aqueous_uranium", "amount":750},
			{"item":"minecraft:redstone"}
		]
	});

	add_distilling(
		"kubejs:aqueous_uranium", [
		{"amount":1, "fluid":"kubejs:radioactive_sludge"},
		{"amount":1, "fluid":"kubejs:red_mud"},
		{"amount":3, "fluid":"kubejs:uranium_quadroxide"}
	]);

	event.custom({
		"type":"create:mixing",
		"heatRequirement":"heated",
		"ingredients":[
			{"amount":400,"fluid":"kubejs:uranium_quadroxide"},
			{"amount":50,"fluid":"kubejs:nitric_acid"},
			{"amount":50,"fluid":"mekanism:sulfuric_acid"}
		],
		"results":[
			{"amount":5, "fluid":"kubejs:radioactive_sludge"},
			{"amount":395,"fluid":"kubejs:turgid_uranium"}
		]
	});

	event.custom({
		"type":"create:compacting",
		"heatRequirement":"heated",
		"ingredients":[
			{"amount":200, "fluid":"kubejs:turgid_uranium"}
		],
		"results":[
			{"item":"create:copper_nugget", "amount":2},
			{"amount":250, "fluid":"kubejs:uranyl_carbonate"}
		]
	});

	function add_ci(i_o, i_t, o, rc){
		event.custom({
			"type": "mekanism:chemical_infusing",
			"leftInput": {
				"amount": 1,
				"gas": i_o
			},
			"rightInput": {
				"amount": 1,
				"gas": i_t
			},
			"output": {
				"amount": rc?rc:1,
				"gas": o
			},
		});
	}

	add_ci(
		"kubejs:uranyl_carbonate",
		"kubejs:nitric_acid",
		"kubejs:uranium_solution"
	);
	add_ci(
		"kubejs:uranium_solution",
		"kubejs:hydrogen_peroxide",
		"kubejs:uranium_peroxide"
	);

	event.custom({
		"type":"create:compacting",
		"heatRequirement":"heated",
		"ingredients":[
			{"amount":250, "fluid":"kubejs:uranium_peroxide"}
		],
		"results":[
			{"item":"mekanism:yellow_cake_uranium"},
			{"item":"mekanism:yellow_cake_uranium"}
		]
	});

	event.smelting('1x kubejs:uranium_trioxide_cake', 'mekanism:yellow_cake_uranium');

	event.custom({
		"type":"create:mixing",
		"heatRequirement":"superheated",
		"ingredients":[
			{"item":"kubejs:uranium_trioxide_cake"},
			{"fluid":"mekanism:hydrofluoric_acid", "amount":500}
		],
		"results":[
			{"item":"kubejs:uranium_tetrafluoride", "amount":2},
			{"fluid":"mekanism:sulfur_dioxide", "amount":100}
		]
	});
	event.custom({
		"type":"create:mixing",
		"heatRequirement":"superheated",
		"ingredients":[
			{"item":"kubejs:uranium_tetrafluoride"},
			{"item":"mekanism:fluorite_gem"}
		],
		"results":[
			{"item":"mekanism:nugget_uranium", "count":9},
			{"item":"mekanism:nugget_uranium", "count":5, "chance":0.5},
			{"item":"mekanism:nugget_uranium", "count":9, "chance":0.1},
			{"item":'mekanism:dust_fluorite', "chance":0.9}
		]
	});


	//other stuff for uranium
	event.custom({
		"type": "mekanism:reaction",
		"duration": 400,
		"energyRequired": 200,
		"fluidInput": {
			"amount": 200,
			"tag": "minecraft:water"
		},
		"gasInput": {
			"amount": 100,
			"gas": "mekanism:hydrogen"
		},
		"gasOutput": {
			"amount": 10,
			"gas": "kubejs:hydrogen_peroxide"
		},
		"itemInput": {
			"ingredient": {
				"item": "mekanism:fluorite_gem"
			}
		},
		"itemOutput": {
			"count": 1,
			"item": "mekanism:dust_fluorite"
		}
	});

	event.custom({
		"type": "mekanism:separating",
		"input": {
			"amount": 2,
			"fluid": "kubejs:radioactive_sludge"
		},
		"leftGasOutput": {
			"amount": 2,
			"gas": "mekanism:chlorine"
		},
		"rightGasOutput": {
			"amount": 1,
			"gas": "mekanism:spent_nuclear_waste"
		}
	});

	event.custom({
		"type": "mekanism:oxidizing",
		"input": {
			"ingredient": {
				"item":"immersiveengineering:dust_saltpeter"
			}
		},
		"output": {
			"amount": 100,
			"gas": "kubejs:nitrogen"
		}
	});

	add_ci(
		"kubejs:nitrogen",
		"mekanism:hydrogen",
		"kubejs:nitric_acid"
	);


	event.remove({id:"mekanism:processing/refined_obsidian/ingot/from_dust"});
	event.remove({id:"jaopca:immersiveengineering.dust_to_material.refined_obsidian"});
	event.remove({id:"mekanism:processing/refined_obsidian/dust/from_obsidian_dust"});

	event.custom({
		"type": "mekanism:injecting",
		"chemicalInput": {
			"amount": 1,
			"gas": "mekanism:sulfur_dioxide"
		},
		"itemInput": {
			"ingredient": {
				"item": "mekanism:dust_obsidian"
			}
		},
		"output": {
			"item": "mekanism:dust_refined_obsidian"
		}
	});
	event.custom({
		"type": "mekanism:injecting",
		"chemicalInput": {
			"amount": 1,
			"gas": "mekanism:uranium_hexafluoride"
		},
		"itemInput": {
			"ingredient": {
				"item": "mekanism:dust_refined_obsidian"
			}
		},
		"output": {
			"item": "mekanism:ingot_refined_obsidian"
		}
	});
});

