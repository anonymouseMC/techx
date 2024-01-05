/*
	this file maps blocks to their drops when mined.
	this is done with loot tables.
	kubejs's loot tables are undocumented, implementing this was faster than scouring obscure issues for a solution
*/

var fs = require('fs');

function fmtDrop(drop){
	return JSON.stringify({
		"type": "minecraft:block",
		"pools": [{
			"rolls": 1,
			"entries": [{
				"type": "minecraft:item",
				"name": drop
			}]
		}]
	});
}

([
	["kubejs:nether_tin_ore","kubejs:nethered_tin"],
	["kubejs:nether_bauxite_ore","kubejs:nethered_bauxite"],
	["kubejs:nether_lead_ore","kubejs:nethered_lead"],
	["kubejs:nether_nickel_ore","kubejs:nethered_nickel"],
	["kubejs:nether_silver_ore","kubejs:nethered_silver"],

	["kubejs:sculk_stone_osmium_ore","kubejs:sculked_osmium"],
	["kubejs:gloomslate_osmium_ore","kubejs:gloomed_osmium"],

	["kubejs:sculk_stone_uranium_ore","kubejs:sculked_uranium"],
	["kubejs:gloomslate_uranium_ore","kubejs:gloomed_uranium"],

	["kubejs:sculk_stone_fluorite_ore","kubejs:sculked_fluorite"],
	["kubejs:gloomslate_fluorite_ore","kubejs:gloomed_fluorite"],

	["kubejs:sculk_stone_lead_ore","kubejs:sculked_lead"],
	["kubejs:gloomslate_lead_ore","kubejs:gloomed_lead"],

	["kubejs:sculk_stone_tin_ore","kubejs:sculked_tin"],
	["kubejs:gloomslate_tin_ore","kubejs:gloomed_tin"]
]).forEach(([block, drop])=>{
	var fn = block.split(':')[1] + ".json";
	console.log(fn, fmtDrop(drop) );
	fs.writeFileSync(fn, fmtDrop(drop) );
});