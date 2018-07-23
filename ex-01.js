//Get first letters

function getFirstLetterFromFirstName (objArray) {

	var firstLettersArray = [];

	for (var i = 0; i<objArray.length; i++) {
		var obj = objArray[i];

		var name = obj.firstName;

		var firstCap = name[0];

		firstLettersArray.push(firstCap.toUpperCase());
	}

	return firstLettersArray;

}


var names = [{
  firstName: "pedro",
  lastName: "Paramo"
}, {
  firstName: "chuck",
  lastName: "Norris"
}, {
  firstName: "vicente",
  lastName: "Fernandez"
}, {
  firstName: "electric",
  lastName: "Blue"
}];

getFirstLetterFromFirstName(names); // => ["P", "C", "V", "E"]

console.log(getFirstLetterFromFirstName(names))