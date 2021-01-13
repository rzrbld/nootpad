/**
    {
        "api":1,
        "name":"SHA256 Hash",
        "description":"Computes the SHA256 hash of your text (Hex encoded)",
        "icon":"fingerprint",
        "tags":"strip,slashes,remove"
    }
**/
const Hashes = require('jshashes');

const main = function(state){
  var SHA256 = new Hashes.SHA256;
  return state.text = SHA256.hex(state.text)
}

module.exports ={
	main
}