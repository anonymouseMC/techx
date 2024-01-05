ServerEvents.recipes((event)=>{
	//soul sprouts rare? sift for them!
	event.custom({
		"type": "create:mixing",
		"ingredients": [
			{
				"amount": 500,
				"fluid": "minecraft:water"
			},
			{
				"amount": 1,
				"tag": "minecraft:soul_fire_base_blocks"
			}
		],
		"results": [
			{
				"chance":0.015625,
				"amount": 1,
				"item": "cold_sweat:soul_sprout"
			}
		]
	})

	event.shapeless(
		"1x kubejs:cool_gel",
		[
			"minecraft:water_bucket",
			"kubejs:sap"
		],
	);
	event.shapeless(
		"8x kubejs:cool_gel",
		[
			"minecraft:water_bucket",
			"8x kubejs:sap"
		],
	);

	event.remove({id:"cold_sweat:soulspring_lamp"});

	([
		"minecraft:sculk_catalyst",
		"minecraft:heart_of_the_sea",
		"#techx:is_gateway_eye"
	]).forEach( rare_item => {
		event.shaped(
			Item.of('cold_sweat:soulspring_lamp', '{fuel:64.0d}'),
			[" H ",
			 "RSR",
			 " C "],
			{
				C:"minecraft:chain",
				H:"createdieselgenerators:kelp_handle",
				R:"create:sturdy_sheet",
				S:rare_item
			}
		)		
	})
});
