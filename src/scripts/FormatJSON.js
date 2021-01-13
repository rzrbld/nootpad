/**
	{
		"api":1,
		"name":"Format JSON",
		"description":"Cleans and format JSON documents.",
		"author":"Ivan",
		"icon":"broom",
		"tags":"json,prettify,clean,indent"
	}
**/

const main = function(state){
	try {
		// I feel like this should have a real parser/formatter
		// but hey, it works so who am I to judge?
		return state.text = JSON.stringify(JSON.parse(state.text), null, 2);
	}
	catch(error) {
		state.postError("Invalid JSON")
	}
}

module.exports ={
	main
}