// this is very cursed

	// fine uranium powder: very grey powder slightly green
	// aqueous uranium: liquid, browny green
	// uranium quadroxide: liquid, forest green
	// turgid uranium: liquid, murky yellow
	// uranyl carbonate: liquid, brown

	// uranyl carbonate: gas, brown
	// uranium solution: gas, yellow-brown
	// uranium peroxide: gas, lime green

	// uranium peroxide: liquid, lime green
	// (DONE) mekanism:yellow_cake: item, canary yellow
	// uranium yellowcake trioxide: item, pale yellow, burnt
	// uranium tetrafluoride: item, sky blue & deep green chunks
	// radioactive sludge: liquid, deep green
	
	// hydrogen peroxide: gas, pale pink
	// nitric acid: gas, deep blue
	// nitrogen: gas, pale blue

	// g/s uranium -mix> raw uranium ore
	// uranium ore STARTS at t3 mek processing (inject -> crush) but can do more

	//  uranium dust -crush> fine uranium powder
	//  fine uranium powder + redstone acid (hydrochloric acid) -heated mix> aqueous uranium (UO2)2 + redstone dust
	//  aqueous uranium -distillation stack> radioactive sludge + Uranium Quadroxide
	//  uranium quadroxide + nitric acid + sulphuric acid -mix> radioactive sludge + Turgid Uranium
	//  turgid uranium -heated compacting> uranyl carbonate (l) + copper nugget

	//  uranyl carbonate (l) -condensentrate> uranyl carbonate (g)

	//  uranyl carbonate (g) + nitric acid (g) -CI> uranium solution (g)
	//  uranium solution (g) + hydrogen peroxide (g) -CI> uranium peroxide (g)

	//  uranium peroxide (g) -decondensentrating> uranium peroxide (l)

	//  uranium peroxide -heated press> uranium yellowcake (mekanism, quadroxide)
	//  uranium yellowcake -furnace> uranium yellowcake (trioxide)
	//  uranium yellowcake (trioxide) + hydrofluoric acid -superheat mix> uranium tetrafluoride + water
	//  uranium tetrafluoride + fluorite shard -superheat mix> uranium ingot + fluorite dust (90%)

	// other
	//  water + hydrogen + fluorite shard -PRC> hydrogen peroxide + fluorite dust
	//  radioactive sludge -electrolysis> nuclear waste + chlorine

	//  nitrate -oxid> nitrogen
	// nitrogen + water -CI> nitric acid
(()=>{
	var EventBuses = Java.loadClass('dev.architectury.platform.forge.EventBuses');
	var GasDeferredRegister = Java.loadClass('mekanism.common.registration.impl.GasDeferredRegister');
	var Radiation = Java.loadClass('mekanism.api.chemical.gas.attribute.GasAttributes').Radiation;

	var GASES = new GasDeferredRegister('kubejs');

	([
		["hydrogen_peroxide", 0xFFAAE8],
		["nitric_acid", 0x3A61FF],
		["nitrogen", 0x4CFFA5]
	]).forEach(([id, name]) => {
		GASES.register(id, name);
	});

	([
		["uranyl_carbonate", 0x995524, 0.01],
		["uranium_solution", 0xFF913D, 0.01],
		["uranium_peroxide", 0xADFF2B, 0.05],
		["dilute_radioactive_sludge", 0x18282F, 0.075]
	]).forEach(([id, name, rads]) => {
		GASES.register(id, name, new Radiation(rads));
	});



	GASES.register(EventBuses.getModEventBus('kubejs').get());
})()

StartupEvents.registry("item", function(event){
	function newItem(name, category){
		var id = name.replace(/[^a-zA-Z_]/g, "_").toLowerCase();
		event.create(id)
			.texture(`kubejs:item/${category?category+"/":""}${id}`)
			.displayName(name);
	}

	newItem("Pre-Processed Uranium Slurry", "uranium_process");
	newItem("Fine Uranium Powder", "uranium_process");
	newItem("Uranium Trioxide Cake", "uranium_process");
	newItem("Uranium Tetrafluoride", "uranium_process");
});

StartupEvents.registry("fluid", function(event){
	function add_liquid(id, name, color){
		event.create(id)
			.displayName(name)
			.bucketColor(color)
			.thinTexture(color);
	};

	([
		["nitric_acid",  "Nitric Acid",  0x3A61EF],
		["aqueous_uranium",    "Aqueous Uranium",    0x528C00],
		["uranium_quadroxide", "Uranium Quadroxide", 0x3A5524],
		["turgid_uranium",     "Turgid Uranium",     0x997C00],
		["uranyl_carbonate",   "Uranyl Carbonate",   0x995534],
		["uranium_peroxide",   "Uranium Peroxide",   0xADFF3B],
		["radioactive_sludge", "Radioactive Sludge", 0x182827]
	]).forEach(([id, name, color])=>{
		add_liquid(id, name, color);
	});
});