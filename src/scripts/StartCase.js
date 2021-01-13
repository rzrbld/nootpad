/**
	{
		"api":1,
		"name":"Start Case",
		"description":"Converts Your Text To Start Case.",
		"author":"Ivan",
		"icon":"type",
		"tags":"start,case,function,lodash"
	}
**/

const ld = require('lodash')

const main = function(input) {
	
    return input.text = ld.startCase(input.text)
	
}

module.exports ={
	main
}