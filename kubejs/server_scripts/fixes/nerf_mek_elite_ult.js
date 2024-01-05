ServerEvents.recipes( (event) => {

	event.remove({id:"mekanism:fluid_tank/basic"});
	event.remove({id:"mekanism:chemical_tank/basic"});


	event.shaped("1x mekanism:basic_fluid_tank",[
		"OVO",
		"TTT",
		"TTT",
	],{
		"T":"createdieselgenerators:oil_barrel",
		"O":"mekanism:ingot_osmium",
		"V":"create:fluid_valve"
	});
	event.shaped("1x mekanism:basic_chemical_tank",[
		"OHO",
		"CCC",
		"CCC",
	],{
		"C":"createdieselgenerators:canister",
		"O":"mekanism:ingot_osmium",
		"H":"#create:valve_handles"
	});

// no elite/ultimate tanks, too OP

	([
		"elite",
		"ultimate"
	]).forEach(type => {
		event.remove({id:`mekanism:fluid_tank/${type}`});
		event.remove({id:`mekanism:chemical_tank/${type}`});
		event.remove({id:`mekanism:bin/${type}`});

		event.remove({id:`mekanism:tier_installer/${type}`})

		event.remove({id:`mekanism:energy_cube/${type}`});
		event.remove({id:`mekanism:transmitter/universal_cable/${type}`});
		event.remove({id:`mekanism:transmitter/mechanical_pipe/${type}`});
		event.remove({id:`mekanism:transmitter/pressurized_tube/${type}`});
		event.remove({id:`mekanism:transmitter/logistical_transporter/${type}`});
	});

	//elytra or jetpack?
	event.remove({id:"mekanism:hdpe_elytra"});
	event.custom({
		"type": "create:mechanical_crafting",
		"acceptMirrored": false,
		"key": {
			"S":{"item":"mekanism:hdpe_sheet"},
			"B":{"item":"mekanism:advanced_control_circuit"},
			"H":{"item":"kubejs:heat_resistant_mechanical_component"},
			"G":{"item":"immersiveengineering:glider"}
		},
		"pattern": [
			" SBS ",
			"SSGSS",
			"SSHSS",
			"SS SS",
			"SS SS",
			"S   S"
		],
		"result": {
			"count": 1,
			"item": "mekanism:hdpe_elytra"
		}
	});

	event.remove({id:"mekanism:jetpack"});
	event.custom({
		"type": "create:mechanical_crafting",
		"acceptMirrored": false,
		"key": {
			"S":{"item":"mekanism:hdpe_sheet"},
			"B":{"item":"mekanism:advanced_control_circuit"},
			"I":{"item":"mekanism:alloy_infused"},
			"H":{"item":"kubejs:heat_resistant_mechanical_component"},
			"G":{"item":"mekanism:advanced_chemical_tank"},
			"Q":{"item":"kubejs:hardened_steel"}
		},
		"pattern": [
			" SHGBGHS ",
			"SSSHIHSSS",
			"   QIQ   ",
		],
		"result": {
			"count": 1,
			"item": "mekanism:jetpack"
		}
	})
});
