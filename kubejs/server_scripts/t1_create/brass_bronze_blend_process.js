ServerEvents.recipes(event => {
	function add_mixing(i,o){
		event.custom({
			"type": "create:mixing",
			"ingredients": i,
			"results": [o]
		});
	}

	event.shapeless(
		Item.of("kubejs:bronze_blend", 2),
		[
			"3x minecraft:raw_copper",
			"1x mekanism:raw_tin"
		]
	);

	add_mixing([
		{"item":"create:crushed_raw_copper"},
		{"item":"create:crushed_raw_zinc"}],
		{"item":"kubejs:brass_blend", "count":1}
	);
	add_mixing([
		{"item":"create:crushed_raw_copper"},
		{"item":"create:crushed_raw_copper"},
		{"item":"create:crushed_raw_copper"},
		{"item":"create:crushed_raw_tin"}],
		{"item":"kubejs:bronze_blend", "count":4}
	);
	function blast_smelt(o,i){
		event.smelting(o,i);
		event.blasting(o,i);
	}

	blast_smelt("mekanism:ingot_bronze", "kubejs:bronze_blend");
	blast_smelt("create:brass_ingot", "kubejs:brass_blend");
})