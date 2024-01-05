ServerEvents.recipes(event => {
	event.remove({id:"create:mechanical_crafting/crushing_wheel"});
	event.shaped(
		Item.of("create:crushing_wheel", 2),
		["BBB",
		 "BWB",
		 "BBB"],
		{
			W: "create:water_wheel",
			B: "create:andesite_alloy_block"
		}
	)
})