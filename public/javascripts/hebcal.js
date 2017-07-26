


// TODO get date info from user input
var hebrewDay = "9";
var hebrewMonth = "Av";
var years = [5700, 5701]

for (var i = 0; i < years.length; i++) {
	var hebrewYear = years[i];
	var url = "http://www.hebcal.com/converter/?cfg=json&hy=" + hebrewYear + "&hm=" + hebrewMonth + "&hd=" + hebrewDay + "&h2g=1";
	$.getJSON(url, function(data) {
    //data is the JSON string

	});
}


