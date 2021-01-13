/**
	{
		"api":1,
		"name":"URL Encode",
		"description":"Encodes URL entities in your text.",
		"author":"Ivan",
		"icon":"link",
		"tags":"url,encode,convert"
	}
**/

const main = function(input) {
	
	return input.text = encodeURIComponent(input.text)
	
}

module.exports ={
	main
}