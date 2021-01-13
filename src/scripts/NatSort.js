/**
     {
         "api":1,
         "name":"Natural Sort Lines",
         "description":"Sort lines with smart handling of numbers.",
         "author":"Sebastiaan Besselsen",
         "icon":"sort-numbers",
         "tags":"sort,natural,natsort"
     }
 **/

const main = function(input){
    let sorted = input.text.replace(/\n$/, '').split('\n')
        .sort((a, b) => a.localeCompare(b, undefined, {numeric: true, sensitivity: 'base'}))
        .join('\n');

    if (sorted === input.text) {
        sorted = sorted.split('\n').reverse().join('\n');
    }
    return input.text = sorted;
}

module.exports ={
	main
}