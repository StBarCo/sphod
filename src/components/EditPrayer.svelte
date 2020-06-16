<!-- EditPrayer -->
<script>
	export let prayerObj = initPrayerObj();
	import OccasionalPrayers from './OccasionalPrayers.svelte';
	import { prayerListDB } from '../components/prayer-list-db.js';
	import {createEventDispatcher} from 'svelte';
	import rfdc from 'rfdc';
	const clone = rfdc();

	let isNew = ((prayerObj.for.length + prayerObj.why.length) === 0);

	let dispatch = createEventDispatcher();
	let tPrayer = clone(prayerObj);
	let addOP = false;

	function initPrayerObj() {
		return { _id: new Date().toISOString()
				, for: ""
				, why: ""
				, op: undefined
				}
	}

	function changingText(e) {
		let i = e.target.value.indexOf('\n')
		if (i < 0) {
			tPrayer.for = e.target.value;
		}
		else {
			tPrayer.for = e.target.value.substring(0,i);
			tPrayer.why = e.target.value.substring(i+1);
		}
	}

	function handleOPClick() {
		console.log('do something smart')
	}

	function handleSaveOP() {
		console.log("SAVE OP")
		prayerListDB.add(tPrayer);
		tPrayer = initPrayerObj();
		addPrayer = false;
	}

	function handleResetOP() {
		tPrayer = initPrayerObj();
	}

	function handleSaveClick(e) {
		console.log("HANDLE SAVE CLICK", prayerObj === tPrayer)
		prayerObj = tPrayer;
		// saving prayer goes here!!!
		dispatch('closeEditPrayer', e);
	}

	function handleResetClick() {
		console.log("RESET", tPrayer, prayerObj)
		tPrayer = prayerObj;
	}

	function thisTextarea() {
		return tPrayer.why.length > 0 ? tPrayer.for + '/n' + tPrayer.why : tPrayer.for;
	}
</script>

<style>
	p {
		margin: 0;
		padding: 0;
	}
	div {
		position: absolute;
		width: 82%;
		background-color: white;
		border: 1px solid blue;
		border-radius: 5px;
		padding: 5px;
	}
	input {
		width: 95%;
	}
	textarea {
		width: 95%;
		height: 10em;
	}

	ul {
		width: 95%;
		list-style: none;
	}

	p.options {
		text-align: center;
		margin-bottom: 1em;
	}

	button.green {
		width: 45%;
		background-color: green;
		color: beige;
		border-radius: 1em;
	}
	button.red {
		width: 45%;
		background-color: red;
		color: beige ;
		border-radius: 1em;
	}
</style>

<div>
	<p class='options'>
		<button class='green' on:click={ e => handleSaveClick(e) } >All Done</button>
		<button class='red' on:click={ () => handleResetClick() } >Reset</button>
	</p>
	{#if isNew}
		<textarea 	placeholder="who or what to praying for and for what reason?" 
					on:input={ (e) => changingText(e) }
					value={thisTextarea()}
		/>
	{:else}
		<p>Pray for</p>
		<input value={tPrayer.for} />
		<p>Prayer Request</p>
		<textarea value={tPrayer.why} ></textarea>
		<br>
	{/if}

	{#if tPrayer.op}
		<ul>
		<li>Occasional Prayer</li>
		<li>{tPrayer.op.title}</li>
		<li>{tPrayer.op.category} from {tPrayer.op.from}</li>
		<li>{tPrayer.op.prayer}</li>
		<li>
			<button on:click={ () => handleSaveOP() } >Save</button>
			<button on:click={ () => handleResetOP() } >Reset</button>
		</li>
		</ul>
	{:else}
		<button on:click={ () => addOP = !addOP} >Add Occasional Prayer</button>
		{#if addOP }
			<OccasionalPrayers on:opClick={ e => handleOPClick(e) }/>
		{/if}
	{/if}
</div>