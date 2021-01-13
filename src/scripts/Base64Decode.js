/**
	{
		"api":1,
		"name":"Base64 Decode",
		"description":"Decodes your text from Base64",
		"author":"See Source",
		"icon":"metamorphose",
		"tags":"base64,btoa,decode"
	}
**/

const { decode } = require('js-base64').Base64

const main = function(input){
	return input.text = decode(input.text)
}

module.exports ={
	main
}