/**
     {
         "api":1,
         "name":"Eval Javascript",
         "description":"Runs your text as Javascript Code.",
         "author":"Sebastiaan Besselsen",
         "icon":"command",
         "tags":"js,script,run"
     }
 **/

const main = function(input){
    const script = input.text.replace(/\n\n\/\/ Result:[\s\S]*$/, '');

    let output = '';
    try {
        output = eval(script);
        if (typeof output !== 'string') {
            output = JSON.stringify(output, null, 2);
        }
    } catch (e) {
        input.postError(e.toString());
    }

    return input.text = script + "\n\n// Result:\n\n" + output;
}

module.exports ={
	main
}