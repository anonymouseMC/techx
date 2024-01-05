function wash(input, output){
  return {
    "type": "create:mixing",
    "heatRequirement": "heated",
    "ingredients": [
      {
        "item": input
      },
      {
        "amount": 250,
        "fluid": "minecraft:water",
        "nbt": {}
      }
    ],
    "results": [
      {
        "count": 1,
        "item":output
      }
    ]
  }
}

ServerEvents.recipes((event) => {
  function add_washing(i,o){
    console.log(`adding washing ${i} -> ${o}`);
    event.custom(wash(i,o));
  }
  //add_washing("kubejs:nethered_silver", "immersiveengineering:raw_silver");
  add_washing("kubejs:nethered_tin",    "mekanism:raw_tin");
  //add_washing("kubejs:nethered_bauxite","immersiveengineering:raw_aluminum");
  add_washing("kubejs:nethered_nickel", "immersiveengineering:raw_nickel");
  add_washing("kubejs:nethered_lead",   "immersiveengineering:raw_lead");
});
