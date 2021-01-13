/**
	{
		"api":1,
		"name":"Shuffle Lines",
		"description":"Randomize each line of your text.",
		"author":"@Clarko",
		"icon":"dice",
		"tags":"shuffle,random"
	}
**/

const main = function(input) {
	let lines = input.text.split('\n');
	let j = lines.length;

	// Fisher-Yates Shuffle
	while (j) {
		i = Math.floor(Math.random() * j--);
		temp = lines[j];
		lines[j] = lines[i];
		lines[i] = temp;
	}
	
	return input.text = lines.join('\n');
}

module.exports ={
	main
}
