/**
	{
		"api":1,
		"name":"Camel Case",
		"description":"convertsYourTextToCamelCase",
		"author":"Ivan",
		"icon":"camel",
		"tags":"camel,case,function,lodash"
	}
**/

const ld = require('lodash')

const main = function(input){
	return input.text = ld.camelCase(input.text);
}

module.exports ={
	main
}