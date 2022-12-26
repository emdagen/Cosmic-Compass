export let filteredArray = (array, value) => {
	return array.filter((suggestion) => {
		const hasEnteredEnoughCharacters = value.length >= 2;
		const includesValue = suggestion[0]
			.toLowerCase()
			.includes(value.toLowerCase());
		return hasEnteredEnoughCharacters && includesValue;
	});
};
