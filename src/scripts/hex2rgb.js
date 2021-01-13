/**
     {
         "api":1,
         "name":"Hex to RGB",
         "description":"Convert color in hexadecimal to RGB.",
         "author":"Venkat",
         "icon":"color-wheel",
         "tags":"hex,color,rgb,convert"
     }
 **/

const main = function(input){
    R = hexToR(input.text);
    G = hexToG(input.text);
    B = hexToB(input.text);

    return input.text = R.toString().concat(',').
                   concat(G.toString()).concat(',').
                   concat(B.toString());
}

function hexToR(h) { return parseInt((cutHex(h)).substring(0,2),16) }
function hexToG(h) { return parseInt((cutHex(h)).substring(2,4),16) }
function hexToB(h) { return parseInt((cutHex(h)).substring(4,6),16) }
function cutHex(h) { return (h.charAt(0)=="#") ? h.substring(1,7) : h}


module.exports ={
	main
}