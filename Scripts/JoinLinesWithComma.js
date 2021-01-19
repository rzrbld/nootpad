/**
	{
		"api":1,
		"name":"Join Lines With Comma",
		"description":"Joins all lines with a comma.",
		"author":"riesentoaster",
		"icon":"collapse",
		"tags":"join, comma",
		"bias": -0.1
	}
**/

const main = function(input){
	return input.text = input.text.replace(/\n/g, ',');
}

module.exports ={
	main
}