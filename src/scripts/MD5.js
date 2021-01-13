/**
	{
		"api":1,
		"name":"MD5 Checksum",
		"description":"Computes the checksum of your text (Hex encoded).",
		"author":"Ivan",
		"icon":"fingerprint",
		"tags":"strip,slashes,remove"
	}
**/

const Hashes = require('jshashes');

const main = function(state){
  var MD5 = new Hashes.MD5;
  return state.text = MD5.hex(state.text)
}

module.exports ={
	main
}