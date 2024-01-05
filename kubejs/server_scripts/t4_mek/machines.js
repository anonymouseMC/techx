var MACHINES = {
	starter:[
		"mekanism:metallurgic_infuser",
		"mekanism:enrichment_chamber"
	],
	basic:[
		"mekanism:precision_sawmill",
		"mekanism:crusher",
		"mekanism:energized_smelter",
		"mekanism:rotary_condensentrator",
	],
	advanced:[
		"mekanism:nutritional_liquifier",
		"mekanism:osmium_compressor",
		"mekanism:purification_chamber",
		"mekanism:pressurized_reaction_chamber",
		"mekanism:electrolytic_separator",
		"mekanism:chemical_infuser",
		"mekanism:chemical_oxidizer"
	],
	elite:[
		"mekanism:combiner",
		"mekanism:solar_neutron_activator",
		"mekanism:chemical_injection_chamber"
	],
	ultimate:[
		"mekanism:chemical_dissolution_chamber",
		"mekanism:chemical_washer",
		"mekanism:chemical_crystallizer",
		"mekanism:isotopic_centrifuge"
	]
}

ServerEvents.recipes( (event) => {
	event.remove({id:"mekanism:electrolytic_core"});
	event.shaped("1x mekanism:electrolytic_core",[
		"IRI",
		"GIC",
		"IRI",
	],{
		"R":"kubejs:aluminium_gear",
		"I":"mekanism:alloy_infused",
		"G":"minecraft:gold_ingot",
		"C":"immersiveengineering:ingot_hop_graphite"
	});


	// rhino is missing array.flat
	// the more i use rhino, the more it gives me ie flashbacks
	([]).concat.apply([], Object.entries(MACHINES).map(a=>a[1]) ).forEach( machine => {
		console.log(machine);
		event.remove({id:machine})
	})

	event.shaped("1x mekanism:metallurgic_infuser",[
		"HKH",
		"CSC",
		"HPH"
	],{
		"H":"kubejs:hardened_steel",
		"C":"kubejs:hydraulic_mechanical_component",
		"P":"kubejs:high_performance_electric_mechanism",
		"S":"mekanism:steel_casing",
		"K":"kubejs:spark_plug"
	});

	event.remove({id:"mekanism:enrichment_chamber"});
	event.shaped("1x mekanism:enrichment_chamber",[
		"QTQ",
		"MSM",
		"CHC"
	],{
		"S":"mekanism:steel_casing",
		"Q":"kubejs:hardened_steel",
		"M":"kubejs:hydraulic_mechanical_component",
		"H":"immersiveengineering:furnace_heater",
		"C":"kubejs:heat_resistant_mechanical_component",
		"T":"minecraft:tinted_glass"
	});

	event.shaped("1x mekanism:nutritional_liquifier",[
		"HTH",
		"GPG",
		"KCK"
	],{
		"K":"mekanism:advanced_control_circuit",
		"C":"mekanism:steel_casing",
		"P":"create:propeller",
		"T":"create:fluid_tank",
		"G":"#forge:glass/colorless",
		"H":"kubejs:hardened_steel"
	});
/*
		"C":"mekanism:steel_casing",
		"H":"kubejs:hardened_steel",
		"M":"kubejs:hydraulic_mechanical_component",
		"E":"kubejs:high_performance_electric_mechanism",
		"R":"kubejs:heat_resistant_mechanical_component",
		"O":"mekanism:ingot_osmium",
		"B":"mekanism:basic_control_circuit",
*/
	event.shaped("1x mekanism:precision_sawmill",[
		"OHO",
		"ZCX",
		"OBO"
	],{
		"C":"mekanism:steel_casing",
		"H":"kubejs:hardened_steel",
		"O":"mekanism:ingot_osmium",
		"B":"mekanism:basic_control_circuit",
		"X":"immersiveengineering:sawblade",
		"Z":"immersiveengineering:rockcutter"		
	});
	
	event.shaped("1x mekanism:crusher",[
		"BMB",
		"ECE",
		"OMO",
	],{
		"M":"kubejs:hydraulic_mechanical_component",
		"B":"mekanism:basic_control_circuit",
		"E":"kubejs:high_performance_electric_mechanism",
		"C":"mekanism:steel_casing",
		"O":"mekanism:ingot_osmium"
	});

	event.shaped("1x mekanism:energized_smelter",[
		"BOB",
		"RCR",
		"ZZZ"
	],{
		"C":"mekanism:steel_casing",
		"O":"mekanism:ingot_osmium",
		"R":"kubejs:heat_resistant_mechanical_component",
		"B":"mekanism:basic_control_circuit",
		"Z":"immersiveengineering:blastbrick_reinforced"		
	});

	event.shaped("1x mekanism:rotary_condensentrator",[
		"SQS",
		"CKC",
		"GGG"
	],{
		"C":"mekanism:metallurgic_infuser",
		"K":"mekanism:basic_control_circuit",
		"S":"kubejs:spark_plug",
		"Q":"immersiveengineering:plate_constantan",
		"G":"#techx:is_hv_glass"
	})

	// adv
/*
		"C":"mekanism:steel_casing",
		"I":"mekanism:alloy_infused",
		"M":"kubejs:hydraulic_mechanical_component",
		"E":"kubejs:high_performance_electric_mechanism",
		"R":"kubejs:heat_resistant_mechanical_component",
		"O":"mekanism:ingot_osmium",
		"A":"mekanism:advanced_control_circuit",
*/

	event.shaped("1x mekanism:purification_chamber", [
		"HAH",
		"SCS",
		"HIH"
	],{
		"C":"mekanism:enrichment_chamber",
		"S":"immersiveengineering:plate_silver",
		"H":"kubejs:hardened_steel",
		"A":"mekanism:advanced_control_circuit",
		"I":"mekanism:alloy_infused"
	});
	event.shaped("1x mekanism:osmium_compressor", [
		"HAH",
		"DCD",
		"ITI"
	],{
		"C":"mekanism:crusher",
		"T":"mekanism:advanced_chemical_tank",
		"I":"mekanism:alloy_infused",
		"A":"mekanism:advanced_control_circuit",
		"H":"kubejs:hardened_steel",
		"D":"kubejs:high_performance_electric_mechanism"
	});
	event.shaped("1x mekanism:pressurized_reaction_chamber", [
		"ITI",
		"GHG",
		"ACA"
	],{
		"H":"mekanism:resistive_heater",
		"I":"mekanism:alloy_infused",
		"A":"mekanism:advanced_control_circuit",
		"G":"mekanism:advanced_chemical_tank",
		"T":"createdieselgenerators:oil_barrel",
		"C":"mekanism:steel_casing"		

	});
	event.shaped("1x mekanism:electrolytic_separator", [
		"IAI",
		"HEH",
		"HCH"
	],{
		"H":"kubejs:hardened_steel",
		"I":"mekanism:alloy_infused",
		"A":"mekanism:advanced_control_circuit",
		"E":"mekanism:electrolytic_core",
		"C":"mekanism:steel_casing"
	});
	event.shaped("1x mekanism:chemical_infuser", [
		"HAH",
		"GIB",
		"HCH"
	],{
		"H":"kubejs:hardened_steel",
		"A":"mekanism:advanced_control_circuit",
		"I":"mekanism:alloy_infused",
		"B":"mekanism:advanced_bin",
		"G":"mekanism:advanced_chemical_tank",
		"C":"mekanism:steel_casing"
	});
	event.shaped("1x mekanism:chemical_oxidizer", [
		"HGH",
		"GAG",
		"HCH"
	],{
		"H":"kubejs:hardened_steel",
		"A":"mekanism:advanced_control_circuit",
		"G":"mekanism:advanced_chemical_tank",
		"C":"mekanism:steel_casing"
	});

	event.shaped("1x mekanism:chemical_dissolution_chamber", [
		"HQH",
		"KTK",
		"HCH"
	],{
		"C":"mekanism:chemical_infuser",
		"H":"kubejs:hardened_steel",
		"T":"create:fluid_tank",
		"K":"mekanism:advanced_control_circuit",
		"Q":"kubejs:hydraulic_mechanical_component"
	});

	//elite
	event.shaped("1x mekanism:combiner",[
		"HPH",
		"PQP",
		"HCH"
	],{
		"C":"mekanism:elite_control_circuit",
		"H":"kubejs:hardened_steel",
		"P":"kubejs:hydraulic_mechanical_component",
		"Q":"mekanism:osmium_compressor"
	});
	event.shaped("1x mekanism:solar_neutron_activator",[
		"SSS",
		"TLT",
		"HBH"
	],{
		"S":"mekanismgenerators:advanced_solar_generator",
		"L":"mekanism:laser",
		"H":"mekanism:pressurised_reaction_chamber",
		"T":"kubejs:hardened_steel_plate",
		"B":"create:fluid_tank"
	});
	event.shaped("1x mekanism:chemical_injection_chamber",[
		"HIH",
		"PEP",
		"HGH"
	],{
		"I":"mekanism:chemical_infuser",
		"E":"mekanism:elite_control_circuit",
		"P":"mekanism:purification_chamber",
		"G":"mekanism:advanced_chemical_tank",
		"H":"mekanism:hardened_steel"
	});

	//ultimate
	
	event.shaped("1x mekanism:chemical_washer",[
		"HAH",
		"KIK",
		"HAH"
	],{
		"I":"mekanism:chemical_injection_chamber",
		"K":"mekanism:ultimate_control_circuit",
		"A":"mekanism:alloy_atomic",
		"H":"mekanism:hardened_steel"
	});
	event.shaped("1x mekanism:chemical_crystallizer",[
		"HKH",
		"AIA",
		"HKH"
	],{
		"I":"mekanism:chemical_injection_chamber",
		"K":"mekanism:ultimate_control_circuit",
		"A":"mekanism:alloy_atomic",
		"H":"mekanism:hardened_steel"
	});
	event.shaped("1x mekanism:isotopic_centrifuge",[
		"HSH",
		"EGE",
		"HKH"
	],{
		"E":"kubejs:high_performance_electric_mechanism",
		"H":"kubejs:hardened_steel",
		"S":"mekanism:solar_neutron_activator",
		"K":"mekanism:ultimate_control_circuit",
		"G":"mekanism:advanced_chemical_tank"
	});




});
