/**
	{
		"api":1,
		"name":"Deburr",
		"description":"Converts your text to basic latin characters.",
		"author":"Ivan",
		"icon":"colosseum",
		"tags":"burr,special,characters,function,lodash"
	}
**/

const ld = require('lodash')

const main = function(input){
	
    return input.text = ld.deburr(input.text)
	
}

module.exports ={
	main
}