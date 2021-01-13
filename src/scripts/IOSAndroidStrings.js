/**
  {
    "api":1,
    "name":"iOS Localizables to Android Strings",
    "description":"Converts iOS Localizables to Android Strings",
    "author":"Manuel Kunz (https://github.com/KunzManuel)",
    "icon":"translation",
    "tags":"string,android,ios"
  }
**/

const main = function(input){
    let lines = input.fullText.split('\n')
    var result = []
    lines.forEach(element => {
      if(element !== "") {
        var regex = /"(.*?)"/g
        var matches = [];
        var match = regex.exec(element);
        while (match != null) {
            matches.push(match[1]);
            match = regex.exec(element);
        }
        result.push("<string name=\"" + matches[0] + "\">" + matches[1] + "</string>")
      }      
    })   
    return input.fullText = result.join('\n')
}

module.exports ={
	main
}

