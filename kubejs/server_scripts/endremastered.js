
var eyes = [
	"endrem:black_eye",
	"endrem:cold_eye",
	"endrem:corrupted_eye",
	"endrem:lost_eye",
	"endrem:nether_eye",
	"endrem:old_eye",
	"endrem:rogue_eye",
	"endrem:cursed_eye",
	"endrem:evil_eye",
	"endrem:guardian_eye",
	"endrem:wither_eye",
	"endrem:witch_eye",
	"endrem:undead_eye",
	"endrem:exotic_eye",
	"endrem:cryptic_eye"
];

ServerEvents.recipes((event)=>{
	eyes.forEach(eye => {
		event.shapeless(`2x ${eye}`,[
			eye,
			"minecraft:ender_eye"
		]);		
	})
});

ServerEvents.tags("item", (event) => {
	eyes.forEach(e=>{
		event.add("techx:is_gateway_eye", e)
	})
});