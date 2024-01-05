/*
	brass ingot -> deploy lava -> deploy water -> repeat x5
	each ingot of hard brass will cost 2.5 buckets of each.
*/

StartupEvents.registry("item", function(event){
	event.create("wtf")
		.texture("kubejs:item/meta/wtf")
		.displayName("WTF??");

	([
		[0,"Freezing"],
		[1,"Ice Cold"],
		[2,"Frigid"],
		[3,"Chilly"],
		[4,"Neutral"],
		[5,"Warm"],
		[6,"Hot"],
		[7,"Boiling"],
		[8,"Scorching"]
	]).forEach(([tid, tname]) => {
		event.create(`temp_${tid}`)
			.texture(`kubejs:item/meta/temp/${tid}`)
			.displayName(`Temparature ${tname} (${tid})`)
	})
});