/**
	{
		"api":1,
		"name":"Format CSS",
		"description":"Cleans and format CSS stylesheets.",
		"author":"Ivan",
		"icon":"broom",
		"tags":"css,prettify,clean,indent",
        "bias": -0.1
	}
**/

const pd = require('pretty-data').pd


const main = function(state){
	return state.text = pd.css(state.text)	
}

module.exports ={
	main
}