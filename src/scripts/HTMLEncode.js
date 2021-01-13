/**
	{
		"api":1,
		"name":"HTML Encode",
		"description":"Encodes HTML entities in your text",
		"author":"See Source",
		"icon":"HTML",
		"tags":"html,encode,web"
	}
**/

const he = require('he');

const main = function(input){
	return input.text = he.encode(input.text)
}

module.exports ={
	main
}
