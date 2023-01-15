export const determineIndex = (arr, y) => {
	return arr.findIndex((x) => x.card._id === y);
};
