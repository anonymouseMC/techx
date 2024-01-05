var materials = [
	"wood",
	"stone",
	"iron",
	"diamond",
	"gold",
	"netherite",
	"bronze",
	"lapis_lazuli",
	"osmium",
	"refined_glowstone",
	"refined_obsidian",
	"steel"
];

var sets_to_remove = [
	"lapis_lazuli",
	"osmium",
	"refined_glowstone",
	"refined_obsidian",
	"steel"
];

var TOOL_TYPES = [
	"pickaxe",
	"axe",
	"shovel",
	"hoe",
	"sword"
];

ServerEvents.recipes((event)=>{
	materials.forEach(material => {
		event.remove({id:`mekanismtools:${material}/tools/paxel`});
	});

	sets_to_remove.forEach(material => {
		TOOL_TYPES.forEach(type => {
			event.remove({id:`mekanismtools:${material}/tools/${type}`});
			event.remove({id:`mekanismtools:${material}/shield`});
		})
	})
})