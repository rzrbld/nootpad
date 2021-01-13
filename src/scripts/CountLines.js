/**
	{
		"api":1,
		"name":"Count Lines",
		"description":"Get the line count of your text",
		"author":"andipaetzold",
		"icon":"counter",
		"tags":"count,length,size,line"
	}
**/

const main = function(input) {
	
	input.postInfo(`${input.text.split('\n').length} lines`)
	
}

module.exports ={
	main
}