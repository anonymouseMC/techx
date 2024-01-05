ServerEvents.tags("item", event => {
	function pamAnalagousRegex(pattern){
		return new Regexp(
			`pamhc2(foodcore|foodextended|trees|crops)\:${pattern}`
		);
	}

	event.add("forge:smoothie", /pamhc2(foodcore|foodextended|trees|crops)\:.*smoothieitem/ );
	event.add("forge:soup", /pamhc2(foodcore|foodextended|trees|crops)\:.*soupitem/ );
	event.add("forge:sandwich", /pamhc2(foodcore|foodextended|trees|crops)\:.*sandwichitem/ );
	event.add("forge:yogurt", /pamhc2(foodcore|foodextended|trees|crops)\:.*yogurtitem/ );

	event.add("techx:pam_seeds", /pamhc2(foodcore|foodextended|trees|crops)\:.*seeditem/);

	([
		"pamhc2foodextended:breakfastburritoitem",
		"pamhc2foodextended:theatreboxitem",
		"pamhc2foodextended:friedfeastitem",
		"pamhc2foodextended:sundayhighteaitem",
		"pamhc2foodextended:delightedmealitem",
		"pamhc2foodextended:cookoutmealitem",
		"pamhc2foodextended:southernstylebreakfastitem",
		"pamhc2foodextended:heartybreakfastitem",
		"pamhc2foodextended:cornedbeefbreakfastitem",
		"pamhc2foodcore:chickendinneritem",
		"pamhc2foodextended:ploughmanslunchitem",
		"pamhc2foodextended:homestylelunchitem",
		"pamhc2foodextended:spaghettidinneritem",
		"pamhc2foodextended:fishdinneritem",
		"pamhc2foodextended:koreandinneritem",
		"pamhc2foodextended:gourmetporkburgeritem",
		"pamhc2foodextended:gourmetmuttonburgeritem",
		"pamhc2foodextended:gourmetbeefburgeritem"
	]).forEach(f => event.add("techx:full_meal", f));

	([
		"pamhc2foodextended:rootbeerfloatitem",
		"pamhc2foodextended:chipsanddipitem",
		"pamhc2foodextended:baconpancakesitem",
		"pamhc2foodextended:maplesyrupwafflesitem",
		"pamhc2foodextended:maplesyruppancakesitem",
		"pamhc2foodextended:spagettiitem",
		"pamhc2foodextended:spagettiandmeatballsitem",
		"pamhc2foodextended:chimichangaitem",
		"pamhc2foodcore:basiccheeseburgeritem",
		"pamhc2foodcore:basichamburgeritem",
		"pamhc2foodcore:baconcheeseburgeritem",
		"pamhc2foodextended:coleslawburgeritem",
		"pamhc2foodextended:beetburgeritem",
		"pamhc2foodextended:paradiseburgeritem",
		"pamhc2foodextended:deluxecheeseburgeritem",
		"pamhc2foodextended:baconmushroomburgeritem",
		"pamhc2foodextended:onionhamburgeritem",
		"pamhc2foodextended:jalapenoburgeritem",
		"pamhc2foodextended:beanburritoitem",
		"pamhc2foodextended:fajitaburritoitem",
		"pamhc2foodextended:avocadoburritoitem",
		"pamhc2foodextended:salisburysteakitem",
		"pamhc2foodextended:heartybreakfastitem"
	]).forEach(f => event.add("techx:medium_thirst", f));

	([
		"#forge:sandwich",
		"#forge:soup",
		"#forge:yogurt"
	]).forEach(f => event.add("techx:small_thirst", f));

	([
		["forge:cookedbeef", "pamhc2foodextended:cookedtofeakitem"],
		["forge:cookedpork", "pamhc2foodextended:cookedtofaconitem"],
		["forge:cookedmutton", "pamhc2foodextended:cookedtofuttonitem"],
		["forge:cookedchicken", "pamhc2foodextended:cookedtofickenitem"],
		["forge:cookedrabbit", "pamhc2foodextended:cookedtofabbititem"],
		["forge:cookedfish", "pamhc2foodextended:cookedtofishitem"]
	]).forEach(([t,i])=>event.add(t, i));

	//removal
	// bananas and avocados arent... eggs?
	event.removeAll('forge:egg/avocado');
	event.removeAll('forge:egg/banana');

})
