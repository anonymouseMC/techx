StartupEvents.registry("item", function(event){
	function newItem(name, category){
		var id = name.replace(/[^a-zA-Z_]/g, "_").toLowerCase();
		event.create(id)
			.texture(`kubejs:item/${category?category+"/":""}${id}`)
			.displayName(name);
	}

	// for the sake of interesting and trying to make this realistic
	// sculked/gloomed fluorite works like a czochralski seed and we "grow"
	// pure monofluorium from it, which needs to be cut.

	// theres a small chance to make "multicrystalline fluorium", which we
	// treat as a small chance to be made instead of monofluorium. we cant
	// cut this into "fluorite" as its not perfect. instead, we can reuse
	// the flawed multifluorium to make glass, or to make Fluoric Acid.

	newItem("Monofluorium", "fluorite");
	newItem("Flawed Multifluorium", "fluorite");

	newItem("Fluorite Packed Steel Ingot", "fluorite");
	newItem("Encrusted Infused Alloy", "fluorite");
	newItem("Unprocessed Encrusted Infused Alloy", "fluorite");
});
