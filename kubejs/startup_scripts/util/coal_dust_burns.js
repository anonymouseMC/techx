ItemEvents.modification(event => {
	([
		"mekanism:dust_coal",
		"mekanism:dust_charcoal"
	]).forEach(tb => {
		event.modify(tb, item => {
			item.burnTime = 200;
		});
	})
})