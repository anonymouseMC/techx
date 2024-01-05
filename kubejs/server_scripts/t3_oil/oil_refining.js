ServerEvents.tags("fluid", (event)=>{
	event.add("techx:heavy_oil", "kubejs:heavy_oil")
	event.add("techx:light_oil", "kubejs:light_oil")
	event.add("techx:redstone_acid", "immersiveengineering:redstone_acid")
});


ServerEvents.recipes((event)=>{

	//remove the default oil refining recipe
	event.remove({id:"createdieselgenerators:distillation/crude_oil"});

	function fluid_in(fluid, amount){
		return {
			"fluid": fluid,
			"amount": amount
		}
	}

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

	event.shapeless(Item.of("kubejs:cracking_catalyst", 1), ["2x mekanism:dust_sulfur", "2x immersiveengineering:dust_saltpeter"]);

	add_distilling(
		"createdieselgenerators:crude_oil", [
		fluid_in("kubejs:light_oil", 50),
		fluid_in("kubejs:heavy_oil", 50),
		fluid_in("kubejs:oil_sludge", 5)
	]);

	add_distilling(
		"kubejs:light_oil", [
		fluid_in("kubejs:gasoline", 50),
		fluid_in("kubejs:diesel", 50),
		fluid_in("kubejs:oil_sludge", 10)
	]);

	add_distilling(
		"kubejs:heavy_oil", [
		fluid_in("kubejs:raw_fuel", 50),
		fluid_in("kubejs:lubricant", 25),
		fluid_in("kubejs:oil_sludge", 25)
	]);

	event.custom({
		"type": "immersiveengineering:refinery",
		"energy": 800,
		"catalyst":{
			"item":"kubejs:cracking_catalyst"
		},
		"input0": {
			"amount": 2,
			"tag": "techx:heavy_oil"
		},
		"input1": {
			"amount": 2,
			"tag": "techx:redstone_acid"
		},
		"result": {
			"amount": 2,
			"fluid": "kubejs:light_oil"
		}
	});
});

ServerEvents.tags("fluid", (event)=>{
	event.add("techx:is_light_fuel", "kubejs:gasoline");
	event.add("techx:is_light_fuel", "kubejs:diesel");

	event.add("techx:is_heavy_fuel", "kubejs:nether_diesel");

	event.add("techx:is_bio_fuel", "immersiveengineering:biodiesel");


	event.add("techx:is_bioethanol", "createaddition:bioethanol");
	event.add("techx:is_ethanol", "immersiveengineering:ethanol");
})