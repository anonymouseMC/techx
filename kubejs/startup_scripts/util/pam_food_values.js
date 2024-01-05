try {
	if(module && process){
		var NODE = true;
	}else{
		var NODE = false;
	}
}catch(e){
	var NODE = false;
}

var pam_foods = {
	juice:`pamhc2foodcore:applejuiceitem
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
pamhc2foodextended:tamarindjuiceitem`.split("\n"),

	jelly:`pamhc2foodcore:applejellyitem
pamhc2foodcore:glowberryjellyitem
pamhc2foodcore:melonjellyitem
pamhc2foodcore:sweetberryjellyitem
pamhc2foodextended:apricotjellyitem
pamhc2foodextended:bananajellyitem
pamhc2foodextended:blackberryjellyitem
pamhc2foodextended:blueberryjellyitem
pamhc2foodextended:breadfruitjellyitem
pamhc2foodextended:cactusfruitjellyitem
pamhc2foodextended:candleberryjellyitem
pamhc2foodextended:cantaloupejellyitem
pamhc2foodextended:cherryjellyitem
pamhc2foodextended:cranberryjellyitem
pamhc2foodextended:datejellyitem
pamhc2foodextended:dragonfruitjellyitem
pamhc2foodextended:durianjellyitem
pamhc2foodextended:elderberryjellyitem
pamhc2foodextended:figjellyitem
pamhc2foodextended:gooseberryjellyitem
pamhc2foodextended:grapefruitjellyitem
pamhc2foodextended:grapejellyitem
pamhc2foodextended:greengrapejellyitem
pamhc2foodextended:guavajellyitem
pamhc2foodextended:huckleberryjellyitem
pamhc2foodextended:jackfruitjellyitem
pamhc2foodextended:juniperberryjellyitem
pamhc2foodextended:kiwijellyitem
pamhc2foodextended:lemonjellyitem
pamhc2foodextended:limejellyitem
pamhc2foodextended:lycheejellyitem
pamhc2foodextended:mangojellyitem
pamhc2foodextended:mulberryjellyitem
pamhc2foodextended:orangejellyitem
pamhc2foodextended:papayajellyitem
pamhc2foodextended:passionfruitjellyitem
pamhc2foodextended:pawpawjellyitem
pamhc2foodextended:peachjellyitem
pamhc2foodextended:pearjellyitem
pamhc2foodextended:persimmonjellyitem
pamhc2foodextended:pineapplejellyitem
pamhc2foodextended:plumjellyitem
pamhc2foodextended:pomegranatejellyitem
pamhc2foodextended:rambutanjellyitem
pamhc2foodextended:raspberryjellyitem
pamhc2foodextended:soursopjellyitem
pamhc2foodextended:starfruitjellyitem
pamhc2foodextended:strawberryjellyitem
pamhc2foodextended:tamarindjellyitem`.split("\n"),

	smoothie:`pamhc2foodextended:apricotsmoothieitem
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
pamhc2foodextended:tamarindsmoothieitem`.split("\n"),

	soda:`pamhc2foodextended:cherrysodaitem
pamhc2foodextended:colasodaitem
pamhc2foodextended:gingersodaitem
pamhc2foodextended:grapefruitsodaitem
pamhc2foodextended:grapesodaitem
pamhc2foodextended:lemonlimesodaitem
pamhc2foodextended:orangesodaitem
pamhc2foodextended:rootbeersodaitem
pamhc2foodextended:strawberrysodaitem`.split("\n"),

	tea:`pamhc2foodcore:hotchocolateitem
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
}

var pam_meals = {
	small_thirst:`pamhc2foodcore:appleyogurtitem
pamhc2foodcore:basicchickensandwichitem
pamhc2foodcore:basicfishsandwichitem
pamhc2foodcore:caramelyogurtitem
pamhc2foodcore:carrotsoupitem
pamhc2foodcore:chocolateyogurtitem
pamhc2foodcore:glowberryyogurtitem
pamhc2foodcore:noodlesoupitem
pamhc2foodcore:potatosoupitem
pamhc2foodcore:pumpkinsoupitem
pamhc2foodcore:pumpkinyogurtitem
pamhc2foodcore:sweetberryyogurtitem
pamhc2foodcore:yogurtitem
pamhc2foodextended:applejellysandwichitem
pamhc2foodextended:apricotjellysandwichitem
pamhc2foodextended:apricotyogurtitem
pamhc2foodextended:bananajellysandwichitem
pamhc2foodextended:bananayogurtitem
pamhc2foodextended:blackberryjellysandwichitem
pamhc2foodextended:blackberryyogurtitem
pamhc2foodextended:blueberryjellysandwichitem
pamhc2foodextended:blueberryyogurtitem
pamhc2foodextended:bolognasandwichitem
pamhc2foodextended:breadfruitjellysandwichitem
pamhc2foodextended:breadfruityogurtitem
pamhc2foodextended:cactusfruitjellysandwichitem
pamhc2foodextended:cactusfruityogurtitem
pamhc2foodextended:cactussoupitem
pamhc2foodextended:candleberryjellysandwichitem
pamhc2foodextended:candleberryyogurtitem
pamhc2foodextended:cantaloupejellysandwichitem
pamhc2foodextended:cantaloupeyogurtitem
pamhc2foodextended:cherryjellysandwichitem
pamhc2foodextended:cherryyogurtitem
pamhc2foodextended:chickennoodlesoupitem
pamhc2foodextended:cranberryjellysandwichitem
pamhc2foodextended:cranberryyogurtitem
pamhc2foodextended:creamedbroccolisoupitem
pamhc2foodextended:creamofavocadosoupitem
pamhc2foodextended:cucumbersandwichitem
pamhc2foodextended:datejellysandwichitem
pamhc2foodextended:dateyogurtitem
pamhc2foodextended:dragonfruitjellysandwichitem
pamhc2foodextended:dragonfruityogurtitem
pamhc2foodextended:driedsoupitem
pamhc2foodextended:durianjellysandwichitem
pamhc2foodextended:durianyogurtitem
pamhc2foodextended:elderberryjellysandwichitem
pamhc2foodextended:elderberryyogurtitem
pamhc2foodextended:figjellysandwichitem
pamhc2foodextended:figyogurtitem
pamhc2foodextended:friedbolognasandwichitem
pamhc2foodextended:gardensoupitem
pamhc2foodextended:gooseberryjellysandwichitem
pamhc2foodextended:gooseberryyogurtitem
pamhc2foodextended:grapefruitjellysandwichitem
pamhc2foodextended:grapefruityogurtitem
pamhc2foodextended:grapejellysandwichitem
pamhc2foodextended:grapeyogurtitem
pamhc2foodextended:greengrapejellysandwichitem
pamhc2foodextended:greengrapeyogurtitem
pamhc2foodextended:groiledcheesesandwichitem
pamhc2foodextended:guavajellysandwichitem
pamhc2foodextended:guavayogurtitem
pamhc2foodextended:hamandcheesesandwichitem
pamhc2foodextended:hamsweetpicklesandwichitem
pamhc2foodextended:honeysandwichitem
pamhc2foodextended:hotandsoursoupitem
pamhc2foodextended:huckleberryjellysandwichitem
pamhc2foodextended:huckleberryyogurtitem
pamhc2foodextended:jackfruitjellysandwichitem
pamhc2foodextended:jackfruityogurtitem
pamhc2foodextended:juniperberryjellysandwichitem
pamhc2foodextended:juniperberryyogurtitem
pamhc2foodextended:kiwijellysandwichitem
pamhc2foodextended:kiwiyogurtitem
pamhc2foodextended:lambbarleysoupitem
pamhc2foodextended:leafychickensandwichitem
pamhc2foodextended:leafyfishsandwichitem
pamhc2foodextended:leekbaconsoupitem
pamhc2foodextended:lemonjellysandwichitem
pamhc2foodextended:lemonyogurtitem
pamhc2foodextended:limejellysandwichitem
pamhc2foodextended:limeyogurtitem
pamhc2foodextended:loxbagelsandwichitem
pamhc2foodextended:lycheejellysandwichitem
pamhc2foodextended:lycheeyogurtitem
pamhc2foodextended:mangojellysandwichitem
pamhc2foodextended:mangoyogurtitem
pamhc2foodextended:meatloafsandwichitem
pamhc2foodextended:melonjellysandwichitem
pamhc2foodextended:misosoupitem
pamhc2foodextended:mulberryjellysandwichitem
pamhc2foodextended:mulberryyogurtitem
pamhc2foodextended:oldworldveggiesoupitem
pamhc2foodextended:orangejellysandwichitem
pamhc2foodextended:orangeyogurtitem
pamhc2foodextended:papayajellysandwichitem
pamhc2foodextended:papayayogurtitem
pamhc2foodextended:passionfruitjellysandwichitem
pamhc2foodextended:passionfruityogurtitem
pamhc2foodextended:pawpawjellysandwichitem
pamhc2foodextended:pawpawyogurtitem
pamhc2foodextended:peaandhamsoupitem
pamhc2foodextended:peachjellysandwichitem
pamhc2foodextended:peachyogurtitem
pamhc2foodextended:peanutbutterbananasandwichitem
pamhc2foodextended:pearjellysandwichitem
pamhc2foodextended:pearyogurtitem
pamhc2foodextended:persimmonjellysandwichitem
pamhc2foodextended:persimmonyogurtitem
pamhc2foodextended:pineapplejellysandwichitem
pamhc2foodextended:pineappleyogurtitem
pamhc2foodextended:pizzasoupitem
pamhc2foodextended:plumjellysandwichitem
pamhc2foodextended:plumyogurtitem
pamhc2foodextended:pomegranatejellysandwichitem
pamhc2foodextended:pomegranateyogurtitem
pamhc2foodextended:potatoandleeksoupitem
pamhc2foodextended:rambutanjellysandwichitem
pamhc2foodextended:rambutanyogurtitem
pamhc2foodextended:raspberryjellysandwichitem
pamhc2foodextended:raspberryyogurtitem
pamhc2foodextended:seedsoupitem
pamhc2foodextended:soursopjellysandwichitem
pamhc2foodextended:soursopyogurtitem
pamhc2foodextended:splitpeasoupitem
pamhc2foodextended:starfruitjellysandwichitem
pamhc2foodextended:starfruityogurtitem
pamhc2foodextended:strawberryjellysandwichitem
pamhc2foodextended:strawberryyogurtitem
pamhc2foodextended:sweetberryjellysandwichitem
pamhc2foodextended:tamarindjellysandwichitem
pamhc2foodextended:tamarindyogurtitem
pamhc2foodextended:toastsandwichitem
pamhc2foodextended:tomatosoupitem
pamhc2foodextended:vegetablesoupitem
pamhc2foodextended:wontonsoupitem`.split("\n"),

	medium_thirst:`pamhc2foodcore:baconcheeseburgeritem
pamhc2foodcore:basiccheeseburgeritem
pamhc2foodcore:basichamburgeritem
pamhc2foodextended:avocadoburritoitem
pamhc2foodextended:baconmushroomburgeritem
pamhc2foodextended:baconpancakesitem
pamhc2foodextended:beanburritoitem
pamhc2foodextended:beetburgeritem
pamhc2foodextended:chimichangaitem
pamhc2foodextended:chipsanddipitem
pamhc2foodextended:coleslawburgeritem
pamhc2foodextended:deluxecheeseburgeritem
pamhc2foodextended:fajitaburritoitem
pamhc2foodextended:heartybreakfastitem
pamhc2foodextended:jalapenoburgeritem
pamhc2foodextended:maplesyruppancakesitem
pamhc2foodextended:maplesyrupwafflesitem
pamhc2foodextended:onionhamburgeritem
pamhc2foodextended:paradiseburgeritem
pamhc2foodextended:rootbeerfloatitem
pamhc2foodextended:salisburysteakitem
pamhc2foodextended:spagettiandmeatballsitem
pamhc2foodextended:spagettiitem`.split("\n"),

	full_meal:`pamhc2foodcore:chickendinneritem
pamhc2foodextended:breakfastburritoitem
pamhc2foodextended:cookoutmealitem
pamhc2foodextended:cornedbeefbreakfastitem
pamhc2foodextended:delightedmealitem
pamhc2foodextended:fishdinneritem
pamhc2foodextended:friedfeastitem
pamhc2foodextended:gourmetbeefburgeritem
pamhc2foodextended:gourmetmuttonburgeritem
pamhc2foodextended:gourmetporkburgeritem
pamhc2foodextended:heartybreakfastitem
pamhc2foodextended:homestylelunchitem
pamhc2foodextended:koreandinneritem
pamhc2foodextended:ploughmanslunchitem
pamhc2foodextended:southernstylebreakfastitem
pamhc2foodextended:spaghettidinneritem
pamhc2foodextended:sundayhighteaitem
pamhc2foodextended:theatreboxitem`.split("\n")
}

var pam_seeds = [
	"pamhc2crops:agaveseeditem",
	"pamhc2crops:alfalfaseeditem",
	"pamhc2crops:aloeseeditem",
	"pamhc2crops:amaranthseeditem",
	"pamhc2crops:arrowrootseeditem",
	"pamhc2crops:artichokeseeditem",
	"pamhc2crops:asparagusseeditem",
	"pamhc2crops:barleyseeditem",
	"pamhc2crops:barrelcactusseeditem",
	"pamhc2crops:beanseeditem",
	"pamhc2crops:bellpepperseeditem",
	"pamhc2crops:blackberryseeditem",
	"pamhc2crops:blueberryseeditem",
	"pamhc2crops:bokchoyseeditem",
	"pamhc2crops:broccoliseeditem",
	"pamhc2crops:brusselsproutseeditem",
	"pamhc2crops:cabbageseeditem",
	"pamhc2crops:cactusfruitseeditem",
	"pamhc2crops:calabashseeditem",
	"pamhc2crops:candleberryseeditem",
	"pamhc2crops:canolaseeditem",
	"pamhc2crops:cantaloupeseeditem",
	"pamhc2crops:cassavaseeditem",
	"pamhc2crops:cattailseeditem",
	"pamhc2crops:cauliflowerseeditem",
	"pamhc2crops:celeryseeditem",
	"pamhc2crops:chiaseeditem",
	"pamhc2crops:chickpeaseeditem",
	"pamhc2crops:chilipepperseeditem",
	"pamhc2crops:cloudberryseeditem",
	"pamhc2crops:coffeebeanseeditem",
	"pamhc2crops:cornseeditem",
	"pamhc2crops:cottonseeditem",
	"pamhc2crops:cranberryseeditem",
	"pamhc2crops:cucumberseeditem",
	"pamhc2crops:eggplantseeditem",
	"pamhc2crops:elderberryseeditem",
	"pamhc2crops:flaxseeditem",
	"pamhc2crops:garlicseeditem",
	"pamhc2crops:gingerseeditem",
	"pamhc2crops:grapeseeditem",
	"pamhc2crops:greengrapeseeditem",
	"pamhc2crops:guaranaseeditem",
	"pamhc2crops:huckleberryseeditem",
	"pamhc2crops:jicamaseeditem",
	"pamhc2crops:juniperberryseeditem",
	"pamhc2crops:juteseeditem",
	"pamhc2crops:kaleseeditem",
	"pamhc2crops:kenafseeditem",
	"pamhc2crops:kiwiseeditem",
	"pamhc2crops:kohlrabiseeditem",
	"pamhc2crops:leekseeditem",
	"pamhc2crops:lentilseeditem",
	"pamhc2crops:lettuceseeditem",
	"pamhc2crops:lotusseeditem",
	"pamhc2crops:milletseeditem",
	"pamhc2crops:mulberryseeditem",
	"pamhc2crops:mustardseedsseeditem",
	"pamhc2crops:nettlesseeditem",
	"pamhc2crops:nopalesseeditem",
	"pamhc2crops:oatsseeditem",
	"pamhc2crops:okraseeditem",
	"pamhc2crops:onionseeditem",
	"pamhc2crops:papyrusseeditem",
	"pamhc2crops:parsnipseeditem",
	"pamhc2crops:peanutseeditem",
	"pamhc2crops:peasseeditem",
	"pamhc2crops:pineappleseeditem",
	"pamhc2crops:quinoaseeditem",
	"pamhc2crops:radishseeditem",
	"pamhc2crops:raspberryseeditem",
	"pamhc2crops:rhubarbseeditem",
	"pamhc2crops:riceseeditem",
	"pamhc2crops:rutabagaseeditem",
	"pamhc2crops:ryeseeditem",
	"pamhc2crops:scallionseeditem",
	"pamhc2crops:sesameseedsseeditem",
	"pamhc2crops:sisalseeditem",
	"pamhc2crops:sorghumseeditem",
	"pamhc2crops:soybeanseeditem",
	"pamhc2crops:spiceleafseeditem",
	"pamhc2crops:spinachseeditem",
	"pamhc2crops:strawberryseeditem",
	"pamhc2crops:sunchokeseeditem",
	"pamhc2crops:sweetpotatoseeditem",
	"pamhc2crops:taroseeditem",
	"pamhc2crops:tealeafseeditem",
	"pamhc2crops:tomatilloseeditem",
	"pamhc2crops:tomatoseeditem",
	"pamhc2crops:truffleseeditem",
	"pamhc2crops:turnipseeditem",
	"pamhc2crops:waterchestnutseeditem",
	"pamhc2crops:whitemushroomseeditem",
	"pamhc2crops:wintersquashseeditem",
	"pamhc2crops:wolfberryseeditem",
	"pamhc2crops:yuccaseeditem",
	"pamhc2crops:zucchiniseeditem"
];

var pam_misc = [
	{item:"pamhc2foodextended:energydrinkitem", fill:8, sat:8},
	{item:"pamhc2foodextended:soymilkitem", fill:8, sat:8},
	{item:"pamhc2foodextended:carrotjuiceitem", fill:8, sat:8},
	{item:"pamhc2foodextended:eggnogitem", fill:8, sat:8},
	{item:"pamhc2foodextended:chocolatemilkitem", fill:8, sat:8},
	{item:"pamhc2foodextended:lemonaideitem", fill:8, sat:8},
	{item:"pamhc2foodextended:chocolatemilkshakeitem", fill:8, sat:8},
	{item:"pamhc2foodextended:applecideritem", fill:8, sat:8},
	{item:"pamhc2foodextended:pinacoladaitem", fill:8, sat:8}
];

// REMOVING hunger, ADDING thirst
Object.entries({
	juice:[6,8],
	jelly:[6,8],
	smoothie:[8,6],
	soda:[8,6],
	tea:[8,4],
}).forEach( ([k,[fill,sat]]) => {
	pam_foods[k] = pam_foods[k].map(a => ({item:a, fill:fill, sat:sat}) )
	pam_foods["misc"] = pam_misc;
});
pam_foods = ([]).concat.apply(Object.values(pam_foods)).reduce((acc, val) => acc.concat(val), [])

// ADDING thirst (Kjs never touches this)
Object.entries({
	small_thirst:[4,4, false],
	medium_thirst:[8,8, false],
	full_meal:[16,20, false]
}).forEach( ([k,[fill,sat]]) => {
	pam_meals[k] = pam_meals[k].map(a => ({item:a, fill:fill, sat:sat}) )
});
pam_meals = ([]).concat.apply(Object.values(pam_meals)).reduce((acc, val) => acc.concat(val), [])

if(NODE){
	function ma_to_console(ma, op){
		console.log("\n\n", op, ":\n",
			ma.map(a => (`["${a.item}", ${a.fill}, ${a.sat}]`)).join(", ")
		);
	}
	ma_to_console(pam_foods, "replace");
	ma_to_console(pam_meals, "add")

	module.exports = {thirstReplace: pam_foods, addThirst: pam_meals};
	process.exit(0);
}


ItemEvents.modification(event => {
	pam_foods.concat(pam_seeds).forEach(drink => {
		event.modify(drink, item => {
			item.foodProperties = food => {
				food.hunger(0);
				food.saturation(0);
			}
		})
	});
})

//this amount of callbacks reminds me of KOjs