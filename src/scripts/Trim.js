/**
	{
		"api":1,
		"name":"Trim",
		"description":"Trims leading and trailing whitespace.",
		"author":"Joshua Nozzi",
		"icon":"scissors",
		"tags":"trim,whitespace,empty,space"
	}
**/

const main = function(state){
	return state.text = state.text.trim();
}

module.exports ={
	main
}