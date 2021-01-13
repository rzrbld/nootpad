/**
    {
        "api":1,
        "name":"Remove Duplicate Lines",
        "description":"Ensures each line of your text is unique.",
        "author":"andipaetzold",
        "icon":"filtration",
        "tags":"unique,duplicate"
    }
**/

const main = function(input){
    let lines = input.text.split('\n')
    let out =  unique(lines)

    return input.text = out.join('\n')
    
    input.postInfo(`${lines.length - out.length} lines removed`)

}

function unique(array) {
	return [...new Set(array)]
}

module.exports ={
	main
}
