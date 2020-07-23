// jsHelpers.js

export const objsEqual = (obj1, obj2) => {
	// only works for shallow objects
	let obj1Keys = Object.keys(obj1);
	let obj2Keys = Object.keys(obj2);

	if (obj1Keys.length !== objKeys2.length) { return false; }

	obj1Keys.forEach( k => {
		if( obj1[k] !== obj2[k]) { return false; }
	})
	return true;
}