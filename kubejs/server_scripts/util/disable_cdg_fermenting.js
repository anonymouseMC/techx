ServerEvents.recipes( (event) => {
	event.remove({id:"createdieselgenerators:basin_fermenting"})
	event.remove({output:{item:"createdieselgenerators:basin_lid"}})
});