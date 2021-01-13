/**
	{
		"api":1,
		"name":"YAML to JSON",
		"description":"Converts YAML to JSON.",
		"author":"Ivan",
		"icon":"metamorphose",
		"tags":"markup,convert"
	}
**/

const yaml = require('js-yaml');

const main = function(input){

	try {
        return input.text = JSON.stringify(yaml.load(input.text), null, 2)
	}
	catch(error) {
		input.postError("Invalid YAML")
	}
	
}

module.exports ={
	main
}