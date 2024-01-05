
ServerEvents.recipes( (event) => {
	
	event.remove({id:"immersiveengineering:blueprint/component_electronic"});
	event.remove({id:"immersiveengineering:blueprint/component_electronic_adv"});
	event.remove({id:"immersiveengineering:blueprint/electron_tube"});

		
	//vac tubes
	event.shaped("1x kubejs:vacuum_tube_glass",[
		" A ",
		"AAA",
		"A A"
	],{
		A:"#forge:glass_panes/colorless"
	});

	event.custom({
		"type":"immersiveengineering:blueprint",
		"category":"components",
		"inputs": [
			{
				"base_ingredient": {
					"tag":"forge:glass_panes/colorless"
				},
				"count":4
			}
		],
		"result":{
			"item":"kubejs:vacuum_tube_glass",
			"count":2
		}
	})


	event.custom({
		"type": "create:sequenced_assembly",
		"ingredient": {
			"item": "kubejs:vacuum_tube_glass"
		},
		"loops": 1,
		"results": [
			{
				"item": "immersiveengineering:electron_tube"
			}
		],
		"sequence": [
			{
				"type":"create:deploying",
				"ingredients":[
					{"item": "kubejs:unprocessed_vacuum_tube"},
					{"item": "create:electron_tube"},
				],
				"results":[
					{"item": "kubejs:unprocessed_vacuum_tube"}
				]
			},
			{
				"type":"create:deploying",
				"ingredients":[
					{"item": "kubejs:unprocessed_vacuum_tube"},
					{"item": "kubejs:wire_constantan"},
				],
				"results":[
					{"item": "kubejs:unprocessed_vacuum_tube"}
				]
			},
			{
				"type":"create:deploying",
				"ingredients":[
					{"item": "kubejs:unprocessed_vacuum_tube"},
					{"item": "immersiveengineering:plate_nickel"},
				],
				"results":[
					{"item": "kubejs:unprocessed_vacuum_tube"}
				]
			},
			{
				"type": "create:pressing",
				"ingredients": [
					{"item": "kubejs:unprocessed_vacuum_tube"}
				],
				"results": [
					{"item": "kubejs:unprocessed_vacuum_tube"}
				]
			}
		],
		"transitionalItem": {
			"item": "kubejs:unprocessed_vacuum_tube"
		}
	});

	event.custom({
		"type": "create:sequenced_assembly",
		"ingredient": {
			"item": "minecraft:quartz"
		},
		"loops": 1,
		"results": [
			{
				"item": "immersiveengineering:component_electronic"
			}
		],
		"sequence": [
			{
				"type":"create:deploying",
				"ingredients":[
					{"item": "kubejs:unprocessed_electronic_component"},
					{"tag": "forge:treated_wood_slab"},
				],
				"results":[
					{"item": "kubejs:unprocessed_electronic_component"}
				]
			},
			{
				"type":"create:deploying",
				"ingredients":[
					{"item": "kubejs:unprocessed_electronic_component"},
					{"item": "immersiveengineering:wire_electrum"},
				],
				"results":[
					{"item": "kubejs:unprocessed_electronic_component"}
				]
			},
			{
				"type":"create:deploying",
				"ingredients":[
					{"item": "kubejs:unprocessed_electronic_component"},
					{"item": "immersiveengineering:wire_electrum"},
				],
				"results":[
					{"item": "kubejs:unprocessed_electronic_component"}
				]
			},
			{
				"type":"create:deploying",
				"ingredients":[
					{"item": "kubejs:unprocessed_electronic_component"},
					{"item": "kubejs:leyden_jar"},
				],
				"results":[
					{"item": "kubejs:unprocessed_electronic_component"}
				]
			},
			{
				"type": "create:pressing",
				"ingredients": [
					{"item": "kubejs:unprocessed_electronic_component"}
				],
				"results": [
					{"item": "kubejs:unprocessed_electronic_component"}
				]
			}
		],
		"transitionalItem": {
			"item": "kubejs:unprocessed_electronic_component"
		}
	});

	event.custom({
		"type": "create:sequenced_assembly",
		"ingredient": {
			"item": "immersiveengineering:plate_duroplast"
		},
		"loops": 1,
		"results": [
			{
				"item": "immersiveengineering:component_electronic_adv"
			}
		],
		"sequence": [
			{
				"type":"create:deploying",
				"ingredients":[
					{"item": "kubejs:unprocessed_advanced_electronic_component"},
					{"item": "immersiveengineering:electron_tube"},
				],
				"results":[
					{"item": "kubejs:unprocessed_advanced_electronic_component"}
				]
			},
			{
				"type":"create:deploying",
				"ingredients":[
					{"item": "kubejs:unprocessed_advanced_electronic_component"},
					{"item": "immersiveengineering:electron_tube"},
				],
				"results":[
					{"item": "kubejs:unprocessed_advanced_electronic_component"}
				]
			},
			{
				"type":"create:deploying",
				"ingredients":[
					{"item": "kubejs:unprocessed_advanced_electronic_component"},
					{"item": "immersiveengineering:wire_aluminum"},
				],
				"results":[
					{"item": "kubejs:unprocessed_advanced_electronic_component"}
				]
			},
			{
				"type":"create:deploying",
				"ingredients":[
					{"item": "kubejs:unprocessed_advanced_electronic_component"},
					{"item": "immersiveengineering:wire_aluminum"},
				],
				"results":[
					{"item": "kubejs:unprocessed_advanced_electronic_component"}
				]
			},
			{
				"type":"create:filling",
				"ingredients":[
					{"item": "kubejs:unprocessed_advanced_electronic_component"},
					{
						"amount": 100,
						"fluid": "immersiveengineering:phenolic_resin",
						"nbt": {}
					}
				],
				"results":[
					{"item": "kubejs:unprocessed_advanced_electronic_component"}
				]
			},
			{
				"type": "create:pressing",
				"ingredients": [
					{"item": "kubejs:unprocessed_advanced_electronic_component"}
				],
				"results": [
					{"item": "kubejs:unprocessed_advanced_electronic_component"}
				]
			}
		],
		"transitionalItem": {
			"item": "kubejs:unprocessed_advanced_electronic_component"
		}
	});
});
