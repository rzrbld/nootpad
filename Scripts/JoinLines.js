/**
	{
		"api":1,
		"name":"Join Lines",
		"description":"Joins all lines without any delimiter.",
		"author":"riesentoaster",
		"icon":"collapse",
		"tags":"join"
	}
**/

const main = function(input){
	return input.text = input.text.replace(/\n/g, '');
}

module.exports ={
	main
}