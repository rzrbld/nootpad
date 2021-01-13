/**
	{
		"api":1,
		"name":"Kebab Case",
		"description":"converts-your-text-to-kebab-case.",
		"author":"Ivan",
		"icon":"kebab",
		"tags":"kebab,case,function,lodash"
	}
**/

const ld = require('lodash')

const main = function(input){
	
    return input.text = ld.kebabCase(input.text)
	
}

module.exports ={
	main
}