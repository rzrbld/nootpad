/**
	{
		"api":1,
		"name":"New Honk Script",
		"description":"Returns a basic Honk script.",
		"author":"tlewis, rzrbld",
		"icon":"quote",
		"tags":"honk,state,script,debug,new,create"
	}
**/


var script = `
/**
	{
		"api":1,
		"name":"New Boop Script",
		"description":"What does your script do?",
		"author":"Whooooooo are you?",
		"icon":"broom",
        "tags":"place,tags,here"
        "bias":0.0
	}
**/

const main = function(input){
	try {
        
        /*
        The 'input' object has two properties to deal with text: text (selection), fullText.

        input.fullText will contain or set the entire string from the Boop editor, regardless of whether a selection is made or not.
        input.text will contain or set the currently selected text, otherwise it will behave like fullText.
        */

		input.fullText = input.text; // Remove all but selected text
	}
	catch(error) {
		input.postError("Explain what went wrong here...")
	}
	
}

module.exports ={
	main
}
`;


const main = function(state){
	try {
		return state.text = script
	}
	catch(error) {
		state.postError("Something strange happened here...")
	}
}

module.exports ={
	main
}
