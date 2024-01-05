
ServerEvents.recipes( (event) => {

	event.remove("immersiveengineering:crafting/component_steel");
	event.remove("immersiveengineering:blueprint/component_steel");
	event.custom({
		"type":"immersiveengineering:blueprint",
		"category":"components",
		"inputs": [
			{
				"base_ingredient": {
					"item":"immersiveengineering:plate_steel"
				},
				"count":4
			},
			{
				"item":"mekanism:ingot_steel"
			}
		],
		"result":{
			"item":"immersiveengineering:component_steel"
		}
	});
	
	event.custom({
		"type":"immersiveengineering:blueprint",
		"category":"components",
		"inputs": [
			{
				"base_ingredient": {
					"item":"kubejs:hardened_steel_plate"
				},
				"count":4
			},
			{
				"item":"kubejs:hardened_steel"
			}
		],
		"result":{
			"item":"kubejs:hardened_steel_component"
		}
	});

	event.custom({
		"type": "create:sequenced_assembly",
		"ingredient": {
			"item": "kubejs:hardened_steel"
		},
		"loops": 1,
		"results": [
			{
				"item": "kubejs:hardened_steel_plate"
			}
		],
		"sequence": [
			{
				"type": "create:pressing",
				"ingredients": [
					{
						"item": "kubejs:unprocessed_hardened_steel_plate"
					}
				],
				"results": [
					{
						"item": "kubejs:unprocessed_hardened_steel_plate"
					}
				]
			},
			{
				"type": "create:pressing",
				"ingredients": [
					{
						"item": "kubejs:unprocessed_hardened_steel_plate"
					}
				],
				"results": [
					{
						"item": "kubejs:unprocessed_hardened_steel_plate"
					}
				]
			},
			{
				"type": "create:pressing",
				"ingredients": [
					{
						"item": "kubejs:unprocessed_hardened_steel_plate"
					}
				],
				"results": [
					{
						"item": "kubejs:unprocessed_hardened_steel_plate"
					}
				]
			},
			{
				"type": "create:pressing",
				"ingredients": [
					{
						"item": "kubejs:unprocessed_hardened_steel_plate"
					}
				],
				"results": [
					{
						"item": "kubejs:unprocessed_hardened_steel_plate"
					}
				]
			},
			{
				"type": "create:pressing",
				"ingredients": [
					{
						"item": "kubejs:unprocessed_hardened_steel_plate"
					}
				],
				"results": [
					{
						"item": "kubejs:unprocessed_hardened_steel_plate"
					}
				]
			},
			{
				"type": "create:pressing",
				"ingredients": [
					{
						"item": "kubejs:unprocessed_hardened_steel_plate"
					}
				],
				"results": [
					{
						"item": "kubejs:unprocessed_hardened_steel_plate"
					}
				]
			}
		],
		"transitionalItem": {
			"item": "kubejs:unprocessed_hardened_steel_plate"
		}
	})

	event.remove({id:"immersiveengineering:crafting/heavy_engineering"});
	event.shaped( "1x immersiveengineering:heavy_engineering",
	[
		"SCS",
		"CEC",
		"SCS"
	],{
		S:"immersiveengineering:sheetmetal_steel",
		C:"immersiveengineering:component_steel",
		E:"immersiveengineering:component_electronic"
	});
});
