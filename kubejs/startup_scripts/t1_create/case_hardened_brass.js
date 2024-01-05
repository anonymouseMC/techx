/*
	brass ingot -> deploy lava -> deploy water -> repeat x5
	each ingot of hard brass will cost 2.5 buckets of each.
*/

StartupEvents.registry("item", function(event){
	event.create("hardened_brass")
		.texture("kubejs:item/hardened_brass/hardened_brass")
		.displayName("Case-hardened Brass");

	event.create("unprocessed_hardened_brass")
		.texture("kubejs:item/hardened_brass/unprocessed_hardened_brass")
		.displayName("Unprocessed Case-hardened Brass");

	event.create("cracked_brass")
		.texture("kubejs:item/hardened_brass/cracked_brass")
		.displayName("Cracked Brass Ingot");

	event.create("crushed_raw_brass")
		.texture("kubejs:item/hardened_brass/crushed_raw_brass")
		.displayName("Crushed Raw Brass");
});
