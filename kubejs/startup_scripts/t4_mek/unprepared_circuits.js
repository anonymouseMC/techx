StartupEvents.registry("item", function(event){
	function newItem(name, category){
		var id = name.replace(/[^a-zA-Z_]/g, "_").toLowerCase();
		event.create(id)
			.texture(`kubejs:item/${category?category+"/":""}${id}`)
			.displayName(name);
	}

	newItem("Unprepared Printed Basic Circuit", "circuits");
	newItem("Unprepared Printed Advanced Circuit", "circuits");
	newItem("Unprepared Printed Elite Circuit", "circuits");
	newItem("Unprepared Printed Ultimate Circuit", "circuits");

});
