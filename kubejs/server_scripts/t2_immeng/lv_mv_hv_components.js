
var voltages = [
	["lv", "immersiveengineering:ingot_constantan", "kubejs:wire_constantan", "immersiveengineering:wirecoil_copper",   "#minecraft:terracotta"],
	["mv", "immersiveengineering:ingot_electrum",   "immersiveengineering:wire_electrum", "immersiveengineering:wirecoil_electrum", "#minecraft:terracotta"],
	["hv", "immersiveengineering:ingot_aluminum",   "immersiveengineering:wire_aluminum", "immersiveengineering:wirecoil_steel",    "#techx:is_hv_glass"]
];

ServerEvents.tags("item", (event)=>{
	event.add("techx:is_hv_glass", "immersiveengineering:slag_glass")
	event.add("techx:is_hv_glass", "immersiveengineering:insulating_glass")
})

ServerEvents.recipes( (event) => {

	event.custom({
		"type":"createaddition:rolling",
		"input": {
	      	"tag": "forge:plates/constantan"
		},
		"result": {
			"item": "kubejs:wire_constantan",
			"count": 2
		}
	});

	voltages.forEach( ([voltage, material, wire, coilname, insulator])=>{

		event.remove({id:`immersiveengineering:crafting/connector_${voltage}`});
		event.remove({id:`immersiveengineering:crafting/connector_${voltage}_relay`});

		event.shaped(
			Item.of(`immersiveengineering:connector_${voltage}`,4),
			[" C ",
			 "ICI",
			 "ICI"],
			{
				I:insulator,
				C:material
			}
		);
		event.shaped(
			Item.of(`immersiveengineering:connector_${voltage}_relay`,12),
			[" C ",
			 "ICI",
			 "   "],
			{
				I:insulator,
				C:material
			}
		);

		event.remove({output:{item:coilname}});
		event.shaped(
			Item.of(coilname, 4),
			[
				"WWW",
				"WSW",
				"WWW"
			],
			{
				W:wire,
				S:"createaddition:spool"
			}
		)
	});
	
});
