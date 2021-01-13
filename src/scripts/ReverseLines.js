/**
	{
		"api":1,
		"name":"Reverse Lines",
		"description":"Flips every line of your text.",
		"author":"@Clarko",
		"icon":"flip",
		"tags":"reverse,order,invert,mirror,flip,upside,down"
	}
**/

const main = function(input){
	return input.text = input.text.split('\n').reverse().join('\n')
	
}
  
module.exports ={
	main
}