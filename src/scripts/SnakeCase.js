/**
	{
		"api":1,
		"name":"Snake Case",
		"description":"converts_your_text_to_snake_case.",
		"author":"Ivan",
		"icon":"snake",
		"tags":"snake,case,function,lodash"
	}
**/

const ld = require('lodash')

const main = function(input) {
	
    return input.text = ld.snakeCase(input.text)
	
}

module.exports ={
	main
}