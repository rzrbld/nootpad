/**
	{
		"api":1,
		"name":"Trim End",
		"description":"Trims trailing whitespace.",
		"author":"Joshua Nozzi",
		"icon":"scissors",
		"tags":"trim,end,right,trailing,whitespace,empty,space"
	}
**/

const main = function(state){
  
  return state.text = state.text.trimEnd();
  
}
  
module.exports ={
	main
}