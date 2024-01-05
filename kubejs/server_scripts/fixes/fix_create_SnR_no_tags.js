/*
	by default, create SnR doesnt tag anything.
	this fixes the rails so they can be used in quests

	grr...
*/

var types = [
	"acacia",
	"birch",
	"spruce",
	"dark_oak",
	"jungle",
	"oak",
	"spruce",
	"mangrove",
	"warped",
	"crimson",
	"blackstone",
	"ender",
	"tieless",
	"phantom",

	"create_andesite",

	"biomesoplenty_cherry",
	"biomesoplenty_dead",
	"biomesoplenty_fir",
	"biomesoplenty_hellbark",
	"biomesoplenty_jacaranda",
	"biomesoplenty_magic",
	"biomesoplenty_mahogany",
	"biomesoplenty_palm",
	"biomesoplenty_redwood",
	"biomesoplenty_umbran",
	"biomesoplenty_willow"
];

var gauges = [
	"",
	"_narrow",
	"_wide"
]

ServerEvents.tags("item", (event)=>{
	// event.add("techx:heavy_oil", "kubejs:heavy_oil")
	event.add("techx:is_track", "create:track");
	types.forEach(type => {
		gauges.forEach(gauge => {
			console.log(`fixing railways:track_${type}${gauge}`);
			event.add("techx:is_track", `railways:track_${type}${gauge}`);
		});

		event.add("techx:is_gauge_standard", `railways:track_${type}`);
		event.add("techx:is_gauge_wide", `railways:track_${type}_wide`);
		event.add("techx:is_gauge_narrow", `railways:track_${type}_narrow`);
	});
});
