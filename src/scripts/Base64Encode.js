/**
	{
		"api":1,
		"name":"Base64 Encode",
		"description":"Encodes your text to Base64",
		"author":"See Source",
		"icon":"metamorphose",
		"tags":"base64,atob,encode"
	}
**/

const { encode } = require('js-base64').Base64

const main = function(input){
	return input.text = encode(input.text)
}

module.exports ={
	main
}