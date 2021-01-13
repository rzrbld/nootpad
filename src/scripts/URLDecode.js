/**
	{
		"api":1,
		"name":"URL Decode",
		"description":"Decodes URL entities in your text.",
		"author":"Ivan",
		"icon":"link",
		"tags":"url,decode,convert"
	}
**/

const main = function(input) {
	
	return input.text = decodeURIComponent(input.text)
	
}

module.exports ={
	main
}