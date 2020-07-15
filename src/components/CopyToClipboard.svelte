<!-- Clipboard --> 
<script>
	export let label = "Copy to Clipboard";
	export let copy = false;
	export let thisDay = false;
	import { psDB } from './psDB.js';
	import { lessonDB } from './lessonDB.js';

	function okToCopy(cp, e) {
		navigator.permissions.query({name: "clipboard-write"})
		.then(result => { 
			if (result.state == "granted" || result.state == "prompt") {
				copyToClipboard(cp);
			}
		})
		.catch( error => { console.log(error); })
	}

	function copyToClipboard(cp, e) {
		if (!okToCopy) return;
		switch(true) {
			case cp === "mp": lessonDB.copyAllToClipboard(thisDay, "mp"); break;
			case cp === "ep": lessonDB.copyAllToClipboard(thisDay, "ep"); break;
			case cp === "eu": lessonDB.copyAllToClipboard(thisDay, "eu"); break;
			case cp.length === undefined: lessonDB.copyToClipboard(cp); break;
			default: psDB.copyToClipboard(cp); break;
		}
	}

	function copyPsalm(cp) {
		psDB.get([cp]).then(r => console.log("PSALM: ", r) )
		psDB.copyToClipboard(cp)
	}


</script>

<style>
button {
	margin-top: 0.2em;
	margin-right: 0.2em;
	border: 1px solid blue;
	border-radius: 5px;
	float: right;
}

</style>

<button on:click={ e => okToCopy(copy, e)} >{label}</button>
