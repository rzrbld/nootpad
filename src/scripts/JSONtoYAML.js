/**
	{
		"api":1,
		"name":"JSON to YAML",
		"description":"Converts JSON to YAML.",
		"author":"Ivan",
		"icon":"metamorphose",
		"tags":"markup,convert"
	}
**/

const yaml = require('js-yaml');

const main = function(input){
	try {
		return input.text = yaml.dump(JSON.parse(input.text))
	}
	catch(error) {
		input.postError("Invalid JSON")
	}
}

module.exports ={
	main
}