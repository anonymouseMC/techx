ServerEvents.recipes((event)=>{
	event.remove({id:"create:sequenced_assembly/sturdy_sheet"});
	event.custom({
		"type": "create:sequenced_assembly",
		"ingredient": {
			"item": "mekanism:dust_obsidian"
		},
		"loops": 1,
		"results": [
			{
				"item": "create:sturdy_sheet"
			}
		],
		"sequence": [
			{
				"type": "create:filling",
				"ingredients": [
					{
						"item": "create:unprocessed_obsidian_sheet"
					},
					{
						"amount": 500,
						"fluid": "minecraft:lava",
						"nbt": {}
					}
				],
				"results": [
					{
						"item": "create:unprocessed_obsidian_sheet"
					}
				]
			},
			{
				"type": "create:deploying",
				"ingredients":[
					{"item":"create:unprocessed_obsidian_sheet"},
					{"item":"create:iron_sheet"}
				],
				"results": [
					{
						"item": "create:unprocessed_obsidian_sheet"
					}
				]
			},
			{
				"type": "create:pressing",
				"ingredients": [
					{
						"item": "create:unprocessed_obsidian_sheet"
					}
				],
				"results": [
					{
						"item": "create:unprocessed_obsidian_sheet"
					}
				]
			},
			{
				"type": "create:pressing",
				"ingredients": [
					{
						"item": "create:unprocessed_obsidian_sheet"
					}
				],
				"results": [
					{
						"item": "create:unprocessed_obsidian_sheet"
					}
				]
			},
			{
				"type": "create:pressing",
				"ingredients": [
					{
						"item": "create:unprocessed_obsidian_sheet"
					}
				],
				"results": [
					{
						"item": "create:unprocessed_obsidian_sheet"
					}
				]
			}
		],
		"transitionalItem": {
			"item": "create:unprocessed_obsidian_sheet"
		}
	})
})