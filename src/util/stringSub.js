function stringSub(string,subObject){
	let result = string;
	for (var key in subObject) {
			result = result.replace(new RegExp("%" + key + "%", "g"), subObject[key]);
	}
	return result;
}

module.exports = stringSub;