/**
	{
		"api":1,
		"name":"HTML Decode",
		"description":"Decodes HTML entities in your text",
		"author":"See Source",
		"icon":"HTML",
		"tags":"html,decode,web"
	}
**/

const he = require('he');

const main = function(input){
	return input.text = he.decode(input.text)
}

module.exports ={
	main
}
