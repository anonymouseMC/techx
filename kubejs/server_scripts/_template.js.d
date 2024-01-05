var scriptName = "";

ServerEvents.recipes( (event) => {
	console.log(scriptName + "recipes()");
});
ServerEvents.tags("item", (event) => {
	console.log(scriptName + "tags(item)");
});
ServerEvents.tags("item", (event) => {
	console.log(scriptName + "tags(fluid)");
})