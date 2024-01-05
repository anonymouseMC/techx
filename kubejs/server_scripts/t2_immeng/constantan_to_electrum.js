
ServerEvents.recipes( (event) => {

	event.remove({id:"immersiveengineering:crafting/light_engineering"});
	event.shaped("1x immersiveengineering:light_engineering",
		["SCS",
		 "CIC",
		 "SCS"],
		{
			S:"immersiveengineering:sheetmetal_iron",
			C:"immersiveengineering:component_iron",
			I:"immersiveengineering:ingot_constantan"
		}
	);

	event.shaped(Item.of('immersiveengineering:blueprint', '{blueprint:"components"}'),
		["BGI",
		 "DDD",
		 "PPP"],
		{
			D:"#forge:dyes/blue",
			P:"minecraft:paper",
			B:"create:brass_ingot",
			G:"minecraft:gold_ingot",
			I:"minecraft:iron_ingot"
		}
	);

	event.remove({id:"immersiveengineering:blueprint/component_iron"});
	event.remove({id:"immersiveengineering:crafting/component_iron"});
	event.custom({
		"type":"immersiveengineering:blueprint",
		"category":"components",
		"inputs": [
			{
				"base_ingredient": {
					"item":"create:iron_sheet"
				},
				"count":4
			},
			{
				"item":"minecraft:iron_ingot"
			}
		],
		"result":{
			"item":"immersiveengineering:component_iron"
		}
	});

});
