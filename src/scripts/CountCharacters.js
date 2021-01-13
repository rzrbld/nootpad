/**
	{
		"api":1,
		"name":"Count Characters",
		"description":"Get the length of your text",
		"author":"Ivan",
		"icon":"counter",
		"tags":"count,length,size,character"
	}
**/


const ld = require('lodash')

const main = function(input) {
	
	input.postInfo(`${ld.size(input.text)} characters`)
	
}

module.exports ={
	main
}