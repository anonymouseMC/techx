
/*
	  high-performance mechanical component
	  heat-resistant mechanical component
	  hydraulic mechanical component

	sparkplug
	carburettor
*/

StartupEvents.registry("item", function(event){
	function newItem(name, category){
		var id = name.replace(/[^a-zA-Z_]/g, "_").toLowerCase();
		event.create(id)
			.texture(`kubejs:item/${category?category+"/":""}${id}`)
			.displayName(name);
	}

	newItem("High Performance Electric Mechanism", "component");
	newItem("Heat-Resistant Mechanical Component", "component");
	newItem("Hydraulic Mechanical Component", "component");

	newItem("Incomplete High Performance Electric Mechanism", "component");
	newItem("Incomplete Heat-Resistant Mechanical Component", "component");
	newItem("Incomplete Hydraulic Mechanical Component", "component");

	newItem("Aluminium Gear");

	newItem("Spark Plug", "component");
	newItem("Carburettor", "component");
});

StartupEvents.registry("fluid", function(event){

});