/**
	{
		"api":1,
		"name":"Format SQL",
		"description":"Cleans and format SQL queries.",
		"author":"Ivan",
		"icon":"broom",
		"tags":"mysql,sql,prettify,clean,indent",
        "bias": -0.1
	}
**/

const pd = require('pretty-data').pd


const main = function(state){
	return state.text = pd.sql(state.text)	
}

module.exports ={
	main
}