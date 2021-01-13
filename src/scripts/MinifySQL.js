/**
	{
		"api":1,
		"name":"Minify SQL",
		"description":"Cleans and minifies SQL queries.",
		"author":"Ivan",
		"icon":"broom",
		"tags":"mysql,sql,minify,clean,indent",
        "bias": -0.1
	}
**/

const pd = require('pretty-data').pd


const main = function(state){
	return state.text = pd.sqlmin(state.text)	
}

module.exports ={
	main
}