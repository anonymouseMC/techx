ServerEvents.tags("fluid", (event)=>{
	event.remove('minecraft:water', "createaddition:bioethanol");
	event.remove('minecraft:water', "createaddition:flowing_bioethanol");
	event.remove('minecraft:water', "createaddition:flowing_seed_oil");
	event.remove('minecraft:water', "createaddition:seed_oil");
})
