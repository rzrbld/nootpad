/**
    {
        "api":1,
        "name":"SHA512 Hash",
        "description":"Computes the SHA512 hash of your text (Hex encoded)",
        "icon":"fingerprint",
        "tags":"strip,slashes,remove"
    }
**/

const Hashes = require('jshashes');

const main = function(state){
  var SHA512 = new Hashes.SHA512;
  return state.text = SHA512.hex(state.text)
}

module.exports ={
	main
}