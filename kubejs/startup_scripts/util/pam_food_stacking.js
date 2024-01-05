
/*edible.forEach((itemStack) => {
	var fp = itemStack.getFoodProperties(null)
	const value = (fp.nutrition + Math.floor(fp.saturationModifier)) / 2
	const final = Number(value.toString().slice(0,5))
	console.log(`${itemStack.id},${final}`)
})*/

// may be used later
var edibles = {};

//because who could possibly want to read tags in a startup script
//if you want something thats non-stackable to be re-stackable, add it to this list!
var ALLOW_STACKING = [
	"minecraft:rotten_flesh"
];


var SEEDZ = `pamhc2crops:agaveseeditem
pamhc2crops:alfalfaseeditem
pamhc2crops:aloeseeditem
pamhc2crops:amaranthseeditem
pamhc2crops:arrowrootseeditem
pamhc2crops:artichokeseeditem
pamhc2crops:asparagusseeditem
pamhc2crops:barleyseeditem
pamhc2crops:barrelcactusseeditem
pamhc2crops:beanseeditem
pamhc2crops:bellpepperseeditem
pamhc2crops:blackberryseeditem
pamhc2crops:blueberryseeditem
pamhc2crops:bokchoyseeditem
pamhc2crops:broccoliseeditem
pamhc2crops:brusselsproutseeditem
pamhc2crops:cabbageseeditem
pamhc2crops:cactusfruitseeditem
pamhc2crops:calabashseeditem
pamhc2crops:candleberryseeditem
pamhc2crops:canolaseeditem
pamhc2crops:cantaloupeseeditem
pamhc2crops:cassavaseeditem
pamhc2crops:cattailseeditem
pamhc2crops:cauliflowerseeditem
pamhc2crops:celeryseeditem
pamhc2crops:chiaseeditem
pamhc2crops:chickpeaseeditem
pamhc2crops:chilipepperseeditem
pamhc2crops:cloudberryseeditem
pamhc2crops:coffeebeanseeditem
pamhc2crops:cornseeditem
pamhc2crops:cottonseeditem
pamhc2crops:cranberryseeditem
pamhc2crops:cucumberseeditem
pamhc2crops:eggplantseeditem
pamhc2crops:elderberryseeditem
pamhc2crops:flaxseeditem
pamhc2crops:garlicseeditem
pamhc2crops:gingerseeditem
pamhc2crops:grapeseeditem
pamhc2crops:greengrapeseeditem
pamhc2crops:guaranaseeditem
pamhc2crops:huckleberryseeditem
pamhc2crops:jicamaseeditem
pamhc2crops:juniperberryseeditem
pamhc2crops:juteseeditem
pamhc2crops:kaleseeditem
pamhc2crops:kenafseeditem
pamhc2crops:kiwiseeditem
pamhc2crops:kohlrabiseeditem
pamhc2crops:leekseeditem
pamhc2crops:lentilseeditem
pamhc2crops:lettuceseeditem
pamhc2crops:lotusseeditem
pamhc2crops:milletseeditem
pamhc2crops:mulberryseeditem
pamhc2crops:mustardseedsseeditem
pamhc2crops:nettlesseeditem
pamhc2crops:nopalesseeditem
pamhc2crops:oatsseeditem
pamhc2crops:okraseeditem
pamhc2crops:onionseeditem
pamhc2crops:papyrusseeditem
pamhc2crops:parsnipseeditem
pamhc2crops:peanutseeditem
pamhc2crops:peasseeditem
pamhc2crops:pineappleseeditem
pamhc2crops:quinoaseeditem
pamhc2crops:radishseeditem
pamhc2crops:raspberryseeditem
pamhc2crops:rhubarbseeditem
pamhc2crops:riceseeditem
pamhc2crops:rutabagaseeditem
pamhc2crops:ryeseeditem
pamhc2crops:scallionseeditem
pamhc2crops:sesameseedsseeditem
pamhc2crops:sisalseeditem
pamhc2crops:sorghumseeditem
pamhc2crops:soybeanseeditem
pamhc2crops:spiceleafseeditem
pamhc2crops:spinachseeditem
pamhc2crops:strawberryseeditem
pamhc2crops:sunchokeseeditem
pamhc2crops:sweetpotatoseeditem
pamhc2crops:taroseeditem
pamhc2crops:tealeafseeditem
pamhc2crops:tomatilloseeditem
pamhc2crops:tomatoseeditem
pamhc2crops:truffleseeditem
pamhc2crops:turnipseeditem
pamhc2crops:waterchestnutseeditem
pamhc2crops:whitemushroomseeditem
pamhc2crops:wintersquashseeditem
pamhc2crops:wolfberryseeditem
pamhc2crops:yuccaseeditem
pamhc2crops:zucchiniseeditem`.split("\n");

var CROPS = `minecraft:apple
minecraft:beetroot
minecraft:carrot
minecraft:chorus_fruit
minecraft:cocoa_beans
minecraft:glow_berries
minecraft:melon_slice
minecraft:nether_wart
minecraft:potato
minecraft:pumpkin
minecraft:sweet_berries
minecraft:wheat
pamhc2crops:agaveitem
pamhc2crops:alfalfaitem
pamhc2crops:aloeitem
pamhc2crops:amaranthitem
pamhc2crops:arrowrootitem
pamhc2crops:artichokeitem
pamhc2crops:asparagusitem
pamhc2crops:barleyitem
pamhc2crops:barrelcactusitem
pamhc2crops:beanitem
pamhc2crops:bellpepperitem
pamhc2crops:blackberryitem
pamhc2crops:blueberryitem
pamhc2crops:bokchoyitem
pamhc2crops:broccoliitem
pamhc2crops:brusselsproutitem
pamhc2crops:cabbageitem
pamhc2crops:cactusfruititem
pamhc2crops:candleberryitem
pamhc2crops:canolaitem
pamhc2crops:cantaloupeitem
pamhc2crops:cassavaitem
pamhc2crops:cattailitem
pamhc2crops:caulifloweritem
pamhc2crops:celeryitem
pamhc2crops:chiaitem
pamhc2crops:chickpeaitem
pamhc2crops:chilipepperitem
pamhc2crops:cloudberryitem
pamhc2crops:coffeebeanitem
pamhc2crops:cornitem
pamhc2crops:cottonitem
pamhc2crops:cranberryitem
pamhc2crops:cucumberitem
pamhc2crops:eggplantitem
pamhc2crops:elderberryitem
pamhc2crops:flaxitem
pamhc2crops:garlicitem
pamhc2crops:gingeritem
pamhc2crops:grapeitem
pamhc2crops:greengrapeitem
pamhc2crops:huckleberryitem
pamhc2crops:jicamaitem
pamhc2crops:juniperberryitem
pamhc2crops:juteitem
pamhc2crops:kaleitem
pamhc2crops:kenafitem
pamhc2crops:kiwiitem
pamhc2crops:kohlrabiitem
pamhc2crops:leekitem
pamhc2crops:lentilitem
pamhc2crops:lettuceitem
pamhc2crops:lotusitem
pamhc2crops:milletitem
pamhc2crops:mulberryitem
pamhc2crops:mustardseedsitem
pamhc2crops:nettlesitem
pamhc2crops:nopalesitem
pamhc2crops:oatsitem
pamhc2crops:okraitem
pamhc2crops:onionitem
pamhc2crops:parsnipitem
pamhc2crops:peanutitem
pamhc2crops:peasitem
pamhc2crops:pineappleitem
pamhc2crops:quinoaitem
pamhc2crops:radishitem
pamhc2crops:raspberryitem
pamhc2crops:rhubarbitem
pamhc2crops:riceitem
pamhc2crops:rutabagaitem
pamhc2crops:ryeitem
pamhc2crops:scallionitem
pamhc2crops:sesameseedsitem
pamhc2crops:sisalitem
pamhc2crops:sorghumitem
pamhc2crops:soybeanitem
pamhc2crops:spiceleafitem
pamhc2crops:spinachitem
pamhc2crops:strawberryitem
pamhc2crops:sunchokeitem
pamhc2crops:sweetpotatoitem
pamhc2crops:taroitem
pamhc2crops:tealeafitem
pamhc2crops:tomatilloitem
pamhc2crops:tomatoitem
pamhc2crops:truffleitem
pamhc2crops:turnipitem
pamhc2crops:waterchestnutitem
pamhc2crops:whitemushroomitem
pamhc2crops:wintersquashitem
pamhc2crops:wolfberryitem
pamhc2crops:yuccaitem
pamhc2crops:zucchiniitem
pamhc2trees:acornitem
pamhc2trees:almonditem
pamhc2trees:apricotitem
pamhc2trees:avocadoitem
pamhc2trees:bananaitem
pamhc2trees:breadfruititem
pamhc2trees:candlenutitem
pamhc2trees:cashewitem
pamhc2trees:cherryitem
pamhc2trees:chestnutitem
pamhc2trees:cinnamonitem
pamhc2trees:coconutitem
pamhc2trees:dateitem
pamhc2trees:dragonfruititem
pamhc2trees:durianitem
pamhc2trees:figitem
pamhc2trees:gooseberryitem
pamhc2trees:grapefruititem
pamhc2trees:guavaitem
pamhc2trees:hazelnutitem
pamhc2trees:jackfruititem
pamhc2trees:lemonitem
pamhc2trees:limeitem
pamhc2trees:lycheeitem
pamhc2trees:mangoitem
pamhc2trees:maplesyrupitem
pamhc2trees:nutmegitem
pamhc2trees:oliveitem
pamhc2trees:orangeitem
pamhc2trees:papayaitem
pamhc2trees:passionfruititem
pamhc2trees:pawpawitem
pamhc2trees:peachitem
pamhc2trees:pearitem
pamhc2trees:pecanitem
pamhc2trees:peppercornitem
pamhc2trees:persimmonitem
pamhc2trees:pinenutitem
pamhc2trees:pistachioitem
pamhc2trees:plumitem
pamhc2trees:pomegranateitem
pamhc2trees:rambutanitem
pamhc2trees:soursopitem
pamhc2trees:starfruititem
pamhc2trees:tamarinditem
pamhc2trees:vanillabeanitem
pamhc2trees:walnutitem
supplementaries:flax`.split("\n").concat(SEEDZ);

var FORGE_SODAS = `pamhc2foodextended:cherrysodaitem
pamhc2foodextended:colasodaitem
pamhc2foodextended:gingersodaitem
pamhc2foodextended:grapefruitsodaitem
pamhc2foodextended:grapesodaitem
pamhc2foodextended:lemonlimesodaitem
pamhc2foodextended:orangesodaitem
pamhc2foodextended:rootbeersodaitem
pamhc2foodextended:strawberrysodaitem`.split('\n');

var FORGE_JUICES = `pamhc2foodcore:applejuiceitem
pamhc2foodcore:glowberryjuiceitem
pamhc2foodcore:melonjuiceitem
pamhc2foodcore:sweetberryjuiceitem
pamhc2foodextended:apricotjuiceitem
pamhc2foodextended:bananajuiceitem
pamhc2foodextended:blackberryjuiceitem
pamhc2foodextended:blueberryjuiceitem
pamhc2foodextended:breadfruitjuiceitem
pamhc2foodextended:cactusfruitjuiceitem
pamhc2foodextended:candleberryjuiceitem
pamhc2foodextended:cantaloupejuiceitem
pamhc2foodextended:cherryjuiceitem
pamhc2foodextended:cranberryjuiceitem
pamhc2foodextended:datejuiceitem
pamhc2foodextended:dragonfruitjuiceitem
pamhc2foodextended:durianjuiceitem
pamhc2foodextended:elderberryjuiceitem
pamhc2foodextended:figjuiceitem
pamhc2foodextended:gooseberryjuiceitem
pamhc2foodextended:grapefruitjuiceitem
pamhc2foodextended:grapejuiceitem
pamhc2foodextended:greengrapejuiceitem
pamhc2foodextended:guavajuiceitem
pamhc2foodextended:huckleberryjuiceitem
pamhc2foodextended:jackfruitjuiceitem
pamhc2foodextended:juniperberryjuiceitem
pamhc2foodextended:kiwijuiceitem
pamhc2foodextended:lemonjuiceitem
pamhc2foodextended:limejuiceitem
pamhc2foodextended:lycheejuiceitem
pamhc2foodextended:mangojuiceitem
pamhc2foodextended:mulberryjuiceitem
pamhc2foodextended:orangejuiceitem
pamhc2foodextended:papayajuiceitem
pamhc2foodextended:passionfruitjuiceitem
pamhc2foodextended:pawpawjuiceitem
pamhc2foodextended:peachjuiceitem
pamhc2foodextended:pearjuiceitem
pamhc2foodextended:persimmonjuiceitem
pamhc2foodextended:pineapplejuiceitem
pamhc2foodextended:plumjuiceitem
pamhc2foodextended:pomegranatejuiceitem
pamhc2foodextended:rambutanjuiceitem
pamhc2foodextended:raspberryjuiceitem
pamhc2foodextended:soursopjuiceitem
pamhc2foodextended:starfruitjuiceitem
pamhc2foodextended:strawberryjuiceitem
pamhc2foodextended:tamarindjuiceitem`.split('\n')

var FORGE_DRINKS = [].concat(FORGE_SODAS).concat(FORGE_JUICES);

var FORGE_YOGURTS = `pamhc2foodcore:appleyogurtitem
pamhc2foodcore:caramelyogurtitem
pamhc2foodcore:chocolateyogurtitem
pamhc2foodcore:glowberryyogurtitem
pamhc2foodcore:pumpkinyogurtitem
pamhc2foodcore:sweetberryyogurtitem
pamhc2foodcore:yogurtitem
pamhc2foodextended:apricotyogurtitem
pamhc2foodextended:bananayogurtitem
pamhc2foodextended:blackberryyogurtitem
pamhc2foodextended:blueberryyogurtitem
pamhc2foodextended:breadfruityogurtitem
pamhc2foodextended:cactusfruityogurtitem
pamhc2foodextended:candleberryyogurtitem
pamhc2foodextended:cantaloupeyogurtitem
pamhc2foodextended:cherryyogurtitem
pamhc2foodextended:cranberryyogurtitem
pamhc2foodextended:dateyogurtitem
pamhc2foodextended:dragonfruityogurtitem
pamhc2foodextended:durianyogurtitem
pamhc2foodextended:elderberryyogurtitem
pamhc2foodextended:figyogurtitem
pamhc2foodextended:gooseberryyogurtitem
pamhc2foodextended:grapefruityogurtitem
pamhc2foodextended:grapeyogurtitem
pamhc2foodextended:greengrapeyogurtitem
pamhc2foodextended:guavayogurtitem
pamhc2foodextended:huckleberryyogurtitem
pamhc2foodextended:jackfruityogurtitem
pamhc2foodextended:juniperberryyogurtitem
pamhc2foodextended:kiwiyogurtitem
pamhc2foodextended:lemonyogurtitem
pamhc2foodextended:limeyogurtitem
pamhc2foodextended:lycheeyogurtitem
pamhc2foodextended:mangoyogurtitem
pamhc2foodextended:mulberryyogurtitem
pamhc2foodextended:orangeyogurtitem
pamhc2foodextended:papayayogurtitem
pamhc2foodextended:passionfruityogurtitem
pamhc2foodextended:pawpawyogurtitem
pamhc2foodextended:peachyogurtitem
pamhc2foodextended:pearyogurtitem
pamhc2foodextended:persimmonyogurtitem
pamhc2foodextended:pineappleyogurtitem
pamhc2foodextended:plumyogurtitem
pamhc2foodextended:pomegranateyogurtitem
pamhc2foodextended:rambutanyogurtitem
pamhc2foodextended:raspberryyogurtitem
pamhc2foodextended:soursopyogurtitem
pamhc2foodextended:starfruityogurtitem
pamhc2foodextended:strawberryyogurtitem
pamhc2foodextended:tamarindyogurtitem`.split("\n");

var FORGE_SMOOTHIES = `pamhc2foodcore:applesmoothieitem
pamhc2foodcore:glowberrysmoothieitem
pamhc2foodcore:melonsmoothieitem
pamhc2foodcore:sweetberrysmoothieitem
pamhc2foodextended:apricotsmoothieitem
pamhc2foodextended:bananasmoothieitem
pamhc2foodextended:blackberrysmoothieitem
pamhc2foodextended:blueberrysmoothieitem
pamhc2foodextended:breadfruitsmoothieitem
pamhc2foodextended:cactusfruitsmoothieitem
pamhc2foodextended:candleberrysmoothieitem
pamhc2foodextended:cantaloupesmoothieitem
pamhc2foodextended:cherrysmoothieitem
pamhc2foodextended:cranberrysmoothieitem
pamhc2foodextended:datesmoothieitem
pamhc2foodextended:dragonfruitsmoothieitem
pamhc2foodextended:duriansmoothieitem
pamhc2foodextended:elderberrysmoothieitem
pamhc2foodextended:figsmoothieitem
pamhc2foodextended:gooseberrysmoothieitem
pamhc2foodextended:grapefruitsmoothieitem
pamhc2foodextended:grapesmoothieitem
pamhc2foodextended:greengrapesmoothieitem
pamhc2foodextended:guavasmoothieitem
pamhc2foodextended:huckleberrysmoothieitem
pamhc2foodextended:jackfruitsmoothieitem
pamhc2foodextended:juniperberrysmoothieitem
pamhc2foodextended:kiwismoothieitem
pamhc2foodextended:lemonsmoothieitem
pamhc2foodextended:limesmoothieitem
pamhc2foodextended:lycheesmoothieitem
pamhc2foodextended:mangosmoothieitem
pamhc2foodextended:mulberrysmoothieitem
pamhc2foodextended:orangesmoothieitem
pamhc2foodextended:papayasmoothieitem
pamhc2foodextended:passionfruitsmoothieitem
pamhc2foodextended:pawpawsmoothieitem
pamhc2foodextended:peachsmoothieitem
pamhc2foodextended:pearsmoothieitem
pamhc2foodextended:persimmonsmoothieitem
pamhc2foodextended:pineapplesmoothieitem
pamhc2foodextended:plumsmoothieitem
pamhc2foodextended:pomegranatesmoothieitem
pamhc2foodextended:rambutansmoothieitem
pamhc2foodextended:raspberrysmoothieitem
pamhc2foodextended:soursopsmoothieitem
pamhc2foodextended:starfruitsmoothieitem
pamhc2foodextended:strawberrysmoothieitem
pamhc2foodextended:tamarindsmoothieitem`.split("\n");

var FORGE_TEAS = `pamhc2foodcore:hotchocolateitem
pamhc2crops:hotcoffeeitem
pamhc2crops:hotteaitem
pamhc2crops:hotnettleteaitem
pamhc2foodextended:earlgreyteaitem
pamhc2foodextended:espressoitem
pamhc2foodextended:coffeeconlecheitem
pamhc2foodextended:rosepetalteaitem
pamhc2foodextended:greenteaitem
pamhc2foodextended:dandelionteaitem
pamhc2foodextended:pumpkinspicelatteitem
pamhc2foodextended:sweetteaitem`.split("\n")

var FORGE_EXTRA = `pamhc2foodextended:energydrinkitem
pamhc2foodextended:soymilkitem
pamhc2foodextended:carrotjuiceitem
pamhc2foodextended:eggnogitem
pamhc2foodextended:chocolatemilkitem
pamhc2foodextended:lemonaideitem
pamhc2foodextended:chocolatemilkshakeitem
pamhc2foodextended:applecideritem
pamhc2foodextended:pinacoladaitem`.split("\n")

var good_foods = {};

ItemEvents.modification(event => {
	//var CROPS = Ingredient.of('#forge:crops').stacks.toList().map(a => a.id);

	var dS = 8;
	var dW = 4;

	//hopeless
	([
		Item.of('minecraft:potion', '{Potion:"minecraft:water",Purity:-1}'),
		Item.of('minecraft:potion', '{Potion:"minecraft:water",Purity:0}'),
		Item.of('minecraft:potion', '{Potion:"minecraft:water",Purity:1}'),
		Item.of('minecraft:potion', '{Potion:"minecraft:water",Purity:2}'),
		Item.of('minecraft:potion', '{Potion:"minecraft:water",Purity:3}'),

		Item.of('minecraft:potion', '{Potion:"minecraft:water"}'),
		Item.of('minecraft:potion'),
		"minecraft:potion"
	]).forEach(pain => {
		event.modify(pain, suffering => {
			console.log("Setting potion size to:",dW);
			suffering.maxStackSize = dW;
		});
	});


	Ingredient.all.stacks.toList().stream()
		.filter((itemStack) => itemStack.edible).toList().forEach(stack => {

			var fp = stack.getFoodProperties(null);

			if(stack.id.split(":")[0] == "solapplepie"){ return; } 

			edibles[stack.id] = {food:fp.nutrition, sat:fp.saturationModifier};


			//drinks in pams are technically "edible" rather than "drinkable"
			//skip them
			if(fp.nutrition == 0){ return; }

			if(ALLOW_STACKING.includes(stack.id)){
				return;
			}

			console.log(`modifying <${stack.id}> [${fp.nutrition}][${fp.saturationModifier}]`);

			event.modify(stack.id, modItem => {
				var sourcemod = stack.id.split(':')[0];

				//ALL food only stacks to one. UNLESS its a #forge:crop


				// this is horrible and i hate it but it takes 10 minutes to test
				// so its going to stay horrible and moldy.
				if( FORGE_DRINKS.includes(stack.id) ){
					modItem.maxStackSize = dS;
				}else if( !CROPS.includes(stack.id) ){
					modItem.maxStackSize = 1;
				}else{
					if(SEEDZ.includes(stack.id)){
						modItem.foodProperties = null;
					}
					modItem.foodProperties = (food)=>{
						food.alwaysEdible( true );
						food.hunger( 1 );
						food.saturation( 1 );
					}
				}


				if( (/pamhc2food(core|extended)/).test(sourcemod) == true){
					//buff pamfoods
					modItem.foodProperties = (food) => {
						food.alwaysEdible( true );
						food.hunger( Math.min(fp.nutrition * 1.0, 20) );
						food.saturation( Math.min( Math.floor(fp.saturationModifier) * 0.5, 20) );

						if(fp.nutrition > 20){
							//positive effects
							good_foods[stack.id] = {food:fp.nutrition, sat:fp.saturationModifier};

							food.effect("minecraft:regeneration", 20, 4, 1)
						}


					}
				}else{
					//nerf nonmeals
					//for some reason, editing create's food causes everything to break. thanks create!
					if((/create/).test(sourcemod) == true){return;}

					modItem.foodProperties = (food) => {
						food.alwaysEdible( true );
						food.hunger( Math.ceil(fp.nutrition / 2) )
						food.saturation( Math.ceil(fp.saturationModifier / 2) )
					}
				}
			})

		});

	JsonIO.write("kubejs/node/food_values.json", edibles);
	JsonIO.write("kubejs/node/good_foods.json", good_foods);
	JsonIO.write("kubejs/node/pam_extra.json", {
		juices:FORGE_JUICES,
		sodas:FORGE_SODAS,
		yogurts:FORGE_YOGURTS,
		smoothies:FORGE_SMOOTHIES,
		teas:FORGE_TEAS,
		extra:FORGE_EXTRA
	});

	console.log("HUGEWAWACATVERYBIG");
})