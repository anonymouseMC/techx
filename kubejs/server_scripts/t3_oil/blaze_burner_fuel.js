/*
	we need to control when superheated burners are unlocked
	the easiest way is to just re-define all the recipes ourselves.
*/

var blacklist = [
	"biodiesel",
	"biofuel",
	"creosote",
	"crude_oil",
	"diesel",
	"ethanol",
	"gasoline",
	"lava",
	"plantoil"
];

ServerEvents.recipes((event) => {
	function remove_id(id) {
		event.remove({id:id});
	}

	function add_burn_recipe(input, burnTime, superheat){
		event.custom({
			"type":"createaddition:liquid_burning",
			"input": {
				"fluid": input,
				"amount": 1000
			},
			"burnTime": burnTime,
			"superheated": superheat
		});
	}

	add_burn_recipe("kubejs:nether_diesel", 6400, true);

	add_burn_recipe("kubejs:diesel",   6000, false);
	add_burn_recipe("kubejs:biodiesel",6000, false);
	add_burn_recipe("kubejs:gasoline", 9000, false);
	add_burn_recipe("minecraft:lava",  900,  false);

	blacklist.forEach(entry => {
		remove_id("createaddition:liquid_burning/" + entry);
	});


	// blaze cake needs nether diesel.
	// i want superheat to come from liquid fuels, but
	// there are some die-hard people that will hate it
	// and want to stick to blaze cake.
	event.remove({id:"create:filling/blaze_cake"});
	event.custom({
		"type": "create:sequenced_assembly",
		"ingredient": {
			"item": "create:blaze_cake_base"
		},
		"loops": 1,
		"results": [
			{
				"item": "create:blaze_cake"
			}
		],
		"sequence": [
			{
				"type": "create:filling",
				"ingredients": [
					{
						"item": "kubejs:unprocessed_blaze_cake"
					},
					{
						"amount": 500,
						"fluid": "minecraft:lava",
						"nbt": {}
					}
				],
				"results": [
					{
						"item": "kubejs:unprocessed_blaze_cake"
					}
				]
			},
			{
				"type": "create:filling",
				"ingredients": [
					{
						"item": "kubejs:unprocessed_blaze_cake"
					},
					{
						"amount": 500,
						"fluid": "kubejs:nether_diesel"
					}
				],
				"results": [
					{
						"item": "create:blaze_cake"
					}
				]
			}
		],
		"transitionalItem": {
			"item": "kubejs:unprocessed_blaze_cake"
		}
	})

});