/*

Crude oil -fractioning> Light, Heavy oil, oily sludge

Light Oil  -fractioning>  Gasoline (petrol), Diesel
Heavy Oil  -fractioning>  Heavy Fuel, Lubricant, Oily Sludge
Heavy Oil + Steam + Cracking Catalyst -cracking> Light Oil

Heavy Fuel + Cinder Flour -mixing> Netherated Diesel + Sulphur

Cracking Catalyst = nitrogen + sulphur dust

Residual Oils represent things like bitumen, tar, and other "residue"
It doesnt make much sense to split them up into different things, as it has few uses.
This pack wont include pyrolysis of wood for tar because its "too complex".
Uses: Asphalt, Medical Adhesive, Sealant, Black Dye.

Gasoline, Diesel are all fuels usable by small engines
Netherated Diesel is only usable by large engines. Superheats Blaze Burners
Lubricant is needed for machining of advanced parts like the mekanism machine frame.

The "General Rule" is that as soon as you start producing Crude Oil, you can just turn it all into light oil.
You only really need Heavy Oil when you finish Immersive Engineering and start Mekanism

*/


StartupEvents.registry("item", function(event){
	event.create('cracking_catalyst')
		.texture("kubejs:item/cracking_catalyst")
		.displayName("Cracking Catalyst")
		.tooltip("Not consumed when used, Only one is needed per machine!")
		.maxStackSize(1);

	event.create("lubricant_item")
		.texture("kubejs:item/lubricant_item")
		.displayName("Lubricant")
});

StartupEvents.registry("fluid", function(event){

	function add_liquid(id, name, color){
		event.create(id)
			.displayName(name)
			.bucketColor(color)
			.flowingTexture(`kubejs:block/fluid/${id}_flow`)
			.stillTexture(`kubejs:block/fluid/${id}_still`);
	}

	function add_simp_liquid(id, name, color){
		event.create(id)
			.displayName(name)
			.bucketColor(color)
			.thinTexture(color);
	}


	add_liquid("heavy_oil", "Heavy Oil", 0xDF6E34);
	add_liquid("light_oil", "Light Oil", 0xF0A133);

	add_liquid("gasoline", "Petrol (Gasoline)", 0xC0A881);
	add_liquid("diesel", "Diesel", 0xC19E57);

	add_liquid("raw_fuel", "Raw Fuel", 0x89B7D6);	
	add_liquid("lubricant", "Lubricant", 0x0D683E);
	
	add_liquid("nether_diesel", "Netherated Diesel", 0x1F4ED1);

	add_liquid("oil_sludge", "Oily Sludge", 0x26140D);


	add_simp_liquid("biodiesel", "Bio-Diesel", 0x57340F);
});