
/*
		var json = JSON.parse(new Gson().toJson(r.json));

		console.log(r.id);
		event.remove(r);
		event.custom(json).id(r.id + "_manual_only")

*/

var COOKING_TOOLS = [
	"forge:tool_bakeware",
	"forge:tool_cuttingboard",
	"forge:tool_skillet",
	"forge:tool_roller",
	"forge:tool_juicer",
	"forge:tool_saucepan",
	"forge:tool_pot",
	"forge:tool_grinder",
	"forge:tool_mixingbowl"
];

function fix_tool(json, replace){
	COOKING_TOOLS.forEach(tool => {
		if(json.ingredients[0].tag == tool){
			if(replace == "delete"){
				json.ingredients.shift();
			}else{
				json.ingredients[0].tag = replace;
			}
		}
	});
	return json;
}

function generate_man_id(item, uid){
	return "kubejs_" + item.replace(":","_") + "_" + uid + "_manual_only"
}

var ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

ServerEvents.recipes( (event) => {
	([
		"pamhc2foodcore",
		"pamhc2foodextended"
	]).forEach(m => {
		function convert_mechanical(json, type){
			var newjson = {
				"type":"create:mechanical_crafting",
				"acceptMirrored": true,
				"key":{},
				"pattern":[],
				"result":json.result
			};

			var linear = "";

			json.ingredients.forEach((ingredient,i) => {
				var letter = ALPHABET[i];
				newjson["key"][letter] = ingredient;
				linear = linear + letter;
			});

			if((linear.length <= 3) && (type == "square")){
				return;
			}
			if((linear.length <= 1) && (type == "tall")){
				return;
			}

			switch(type){
				case "line":
					newjson.pattern[0] = linear;
				break;
				case "tall":
					newjson.pattern = linear.split("");
				break;
				case "square":
					switch(linear.length){
						case 4:
						case 5:
						case 6:
							newjson.pattern = [ linear.slice(0,3), linear.slice(3,linear.length).padEnd(3) ]
						break;
						case 7:
						case 8:
						case 9:
							newjson.pattern = [ linear.slice(0,3), linear.slice(3,6), linear.slice(6,linear.length).padEnd(3) ]
						break;
					}
				break;
			}
			event.custom(newjson).id(generate_man_id(newjson.result.item, "mechanical_crafting_"+ type))
		}

		function add_crafting(rjson, nc){
			if(!nc){
				rjson = fix_tool(rjson, "forge:tool_bakeware");
				event.custom(rjson).id( generate_man_id(rjson.result.item, "man_crafting") );
			}
			rjson = fix_tool(rjson, "delete");
			convert_mechanical(rjson, "line")
			convert_mechanical(rjson, "tall")
			convert_mechanical(rjson, "square")

		}
		function add_compacting(rjson, nc){
			if(!nc){
				if(rjson.result.item.includes("juice")){
					rjson = fix_tool(rjson, "forge:tool_juicer")
				}else{
					rjson = fix_tool(rjson, "forge:tool_roller")					
				}

				event.custom(rjson).id( generate_man_id(rjson.result.item, "man_compacting") )
			}
			rjson = fix_tool(rjson, "delete");
			event.custom({
				"type":"create:compacting",
				"ingredients":rjson.ingredients,
				"results":[
					rjson.result
				]
			}).id(generate_man_id(rjson.result.item, "compacting"))
		}
		function add_mixing(rjson, nc){
			if(!nc){
				rjson = fix_tool(rjson, "forge:tool_saucepan")
				event.custom(rjson).id( generate_man_id(rjson.result.item, "man_mixing") )
			}
			rjson = fix_tool(rjson, "delete");
			event.custom({
				"type":"create:mixing",
				"ingredients":rjson.ingredients,
				"results":[
					rjson.result
				]
			}).id(generate_man_id(rjson.result.item, "mixing"))
		}
		function add_alt(rjson,tool){
			event.custom(rjson).id(generate_man_id(rjson.result.item, "alt"))
			if(tool == "forge:tool_grinder"){
				add_compacting(rjson, true);
			}else{
				add_mixing(rjson, true);
			}

		}

		var MEATS_FIND_REPLACE = [
			["forge:rawbeef",   "forge:cookedbeef"],
			["forge:rawpork",   "forge:cookedpork"],
			["forge:rawmutton", "forge:cookedmutton"],
			["forge:rawchicken","forge:cookedchicken"],
			["forge:rawrabbit", "forge:cookedrabbit"],
			["forge:rawfish",   "forge:cookedfish"]
		]

		function fix_uncooked_meats(json){
			json.ingredients.map(ii => {
				if(!ii.tag){return ii;}
				MEATS_FIND_REPLACE.forEach(meatset => {
					if(ii.tag == meatset[0]){
						ii.tag = meatset[1];
					}
				});
				return ii;
			});
			return json;
		}

		event.remove({output:"pamhc2foodcore:cookingoilitem"})
		event.remove({output:"pamhc2foodcore:fruitpunchitem"})
		event.remove({output:"pamhc2foodcore:p8juiceitem"})

		// for some reason, kubejs throws an error if i filter type by
		// /minecraft\:(smelting|campfire_cooking|smoking|blasting)/
		// but only errors on first load, so we use the dumb way.

		event.forEachRecipe([
			{mod:m, not:{type:"minecraft:smelting"} },
			{mod:m, not:{type:"minecraft:campfire_cooking"} },
			{mod:m, not:{type:"minecraft:smoking"} },
			{mod:m, not:{type:"minecraft:blasting"} }
		], r => {

			var rawjson = new (Java.loadClass("com.google.gson.Gson"))().toJson(r.json);
			var parsed = JSON.parse(rawjson);



			if(!(parsed.ingredients)){
				return false;
			}

			if(!(parsed.ingredients[0])){
				return false;
			}
			//console.log("TURBOWAWA", parsed)

			if(parsed.result.item == "pamhc2foodcore:fruitpunchitem"){
				return false;
			}

			parsed = fix_uncooked_meats(parsed);

			try {
				//console.log("little wawa")
				var tool = parsed.ingredients[0].tag;
				switch(tool){
					case "forge:tool_bakeware":
					case "forge:tool_cuttingboard":
					case "forge:tool_skillet":
						add_crafting(parsed, false);
					break;

					case "forge:tool_roller":
					case "forge:tool_juicer":
						add_compacting(parsed, false);
					break;

					case "forge:tool_saucepan":
					case "forge:tool_pot":
						add_mixing(parsed, false);
					break;

					case "forge:tool_grinder":
					case "forge:tool_mixingbowl":
						add_alt(parsed, tool);
					break;
				}
			}catch(e){
				console.log(e,parsed);
				return false;
			}
		});
		
		event.remove({mod:m});
	})

});
