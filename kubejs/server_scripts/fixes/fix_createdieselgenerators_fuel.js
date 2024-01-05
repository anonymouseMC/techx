ServerEvents.recipes((event)=>{
	// we will use immersive engineering for 99% of recipes.
	// so we remove most of CDG's recipes!
	event.remove({id:/createdieselgenerators:mixing\/.*/})
})

