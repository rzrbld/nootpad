/**
	{
		"api":1,
		"name":"Minify CSS",
		"description":"Cleans and minifies CSS stylesheets.",
		"author":"Ivan",
		"icon":"broom",
		"tags":"css,minify,clean,indent",
        "bias": -0.1
	}
**/

const pd = require('pretty-data').pd


const main = function(state){
	return state.text = pd.cssmin(state.text)	
}

module.exports ={
	main
}