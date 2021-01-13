/**
    {
        "api":1,
        "name":"HTML Encode all characters",
        "description":"HTML Encodes every character in your text",
        "author":"Ivan",
        "icon":"HTML",
        "tags":"html,encode,web,email",
        "bias":-0.1
    }
**/

const main = function(input){
    let str = input.text;
    var out = "";
    for (var i = 0; i < str.length; i++) {
         out += `&#${str.charCodeAt(i)};`;
    }
    return input.text = out;
}

module.exports ={
	main
}