ServerEvents.recipes( (event) => {
	event.remove("ae2:network/blocks/inscribers");
	event.shaped("1x ae2:inscriber",[
		"AHA",
		"CTC",
		"AHA"
	],{
		"A":"mekanism:alloy_atomic",
		"C":"mekanism:ultimate_control_circuit",
		"H":"kubejs:hydraulic_mechanical_component",
		"T":"mekanism:teleportation_core"
	});
	event.remove({id:"mekanism:teleportation_core"});
	event.shaped("1x mekanism:teleportation_core", [
		"PAP",
		"AQA",
		"PAP",
	],{
		"P":"mekanism:pellet_antimatter",
		"A":"mekanism:alloy_atomic",
		"Q":"ae2:charged_certus_quartz_crystal"
	});
});
