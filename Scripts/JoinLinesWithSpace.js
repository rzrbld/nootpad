/**
	{
		"api":1,
		"name":"Join Lines With Space",
		"description":"Joins all lines with a space",
		"author":"riesentoaster",
		"icon":"collapse",
		"tags":"join, space",
		"bias": -0.1
	}
**/

const main = function(input){
	return input.text = input.text.replace(/\n/g, ' ');
}

module.exports ={
	main
}