ServerEvents.recipes(event => {
	var mixing = (input,output) => {
		event.custom({
			"type": "create:mixing",
			"ingredients":input,
			"results": [
				{
					"item": output
				}
			]
		});
	};
	var millingStandard = (inputTag,output) => {

		event.custom({
			"type": "create:crushing",
			"ingredients": [
				{
					"tag": inputTag
				}
			],
			"processingTime": 400,
			"results": [
				{
					"item": output
				},
				{
					"chance": 0.75,
					"item": output
				}
			]
		});
		event.custom({
			"type": "create:milling",
			"ingredients": [
				{
					"tag": inputTag
				}
			],
			"processingTime": 200,
			"results": [
				{
					"item": output
				},
				{
					"chance": 0.15,
					"item": output
				}
			]
		});
	}


	//remove andesite alloy from iron
	event.remove({id:"create:crafting/materials/andesite_alloy"});
	event.remove({id:"create:mixing/andesite_alloy"});


	//remove create's dough, flour
	event.remove({id:"create:milling/wheat"});
	event.remove({output:"create:dough"});
	event.remove({output:"create:wheat_flour"});

	//remove pams recipe for flour
	event.remove({id:"pamhc2foodcore:flour_x1_flour_plants"});

	//remove pams recipe for dough
	event.remove({id:"pamhc2foodcore:doughitem_x2"});

	//re-impliment the create recipes with pams stuff
	millingStandard("forge:flour_plants", "pamhc2foodcore:flouritem");
	mixing([
		{
			"item":"pamhc2foodcore:flouritem"
		},
		{
			"amount": 50,
			"fluid": "minecraft:water",
			"nbt": {}
		}
	], "pamhc2foodcore:doughitem");

})
