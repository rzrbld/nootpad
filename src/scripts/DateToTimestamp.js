/**
    {
        "api":1,
        "name":"Date to Timestamp",
        "description":"Converts dates to Unix timestamp.",
        "author":"Noah Halford",
        "icon":"watch",
        "tags":"date,time,calendar,unix,timestamp"
    }
**/

const main = function(input){

    let parsedDate = Date.parse(input.text)

    if (isNaN(parsedDate)) {
        input.postError("Invalid Date")
    } else {
        return input.text = parsedDate / 1000
    }
}

module.exports ={
	main
}