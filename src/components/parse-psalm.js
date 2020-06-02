// parse-psalm 

export function parsePsalm(s) {
	let [psalm, chap, vsFrom, vsTo] = s.replace(/[\s\:\-\,]/g, " ").split(' ')
	vsFrom = vsFrom ? vsFrom : 1;
	vsTo = vsTo ? vsTo : 999;
	console.log("Psalm:", psalm, chap, vsFrom, vsTo)
	return [parseInt(chap), parseInt(vsFrom), parseInt(vsTo) ];
}
