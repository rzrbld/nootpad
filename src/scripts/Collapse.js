/**
    {
        "api":1,
        "name":"Collapse lines",
        "description":"Removes all linebreaks from your text",
        "author":"Dennis",
        "icon":"collapse",
        "tags":"strip,remove,collapse,join"
    }
**/

const main = function(input){
	let split = input.text.split(/\r\n|\r|\n/)
    input.postInfo(`${split.length} lines collapsed`)
    return input.fullText = split.join()
}

module.exports ={
	main
}