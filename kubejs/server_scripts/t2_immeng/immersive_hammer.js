
ServerEvents.recipes( (event) => {
	event.remove({id:"immersiveengineering:crafting/hammer"});
	event.shaped(
		"immersiveengineering:hammer",
		[" PI",
		 " SP",
		 "S  "],
		{
			I:"minecraft:iron_ingot",
			S:"minecraft:stick",
			P:"create:sturdy_sheet"
		}
	)
});
