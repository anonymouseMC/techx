ServerEvents.recipes( (event) => {
	event.shaped(Item.of('pamhc2foodextended:lemondrizzlecakeitem', "{display:{Name:'{\"text\":\"Yellow Cake\"}'}}"),[
		" S ",
		"CTC",
		" B ",
	],{
		"S":"mekanism:dust_sulfur",
		"T":"kubejs:uranium_tetrafluoride",
		"C":"mekanism:yellow_cake_uranium",
		"B":"create:blaze_cake_base"
	})
});
