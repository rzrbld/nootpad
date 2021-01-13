/**
	{
		"api":1,
		"name":"Format XML",
		"description":"Cleans and format XML/HTML documents.",
		"author":"Ivan",
		"icon":"broom",
		"tags":"html,prettify,clean,indent",
        "bias": -0.1
	}
**/

const pd = require('pretty-data').pd


const main = function(state){
	return state.text = pd.xml(state.text)	
}

module.exports ={
	main
}