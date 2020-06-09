<!-- pl (Prayer List) -->
<script>

	import Prayer from '../components/Prayer.svelte';
	import OccasionalPrayers from '../components/OccasionalPrayers.svelte';
	import { prayerListDB } from '../components/prayer-list-db.js';
	import Close from '../components/Close.svelte';

	prayerListDB.init();

	let prayerObj =	initPrayerObj();
	let tPrayer = "empty";
	let prayerLine = 0;
	let addPrayer = false;
	let showOPs = false;
	let datepicker = false;
	let dateChosen = false;
	let formattedSelected;
	function handleAddPrayer() {
		addPrayer = !addPrayer;
	}
	function initPrayerObj() {
		return { _id: new Date()
				, for: ""
				, why: ""
				, op: undefined
				}
	}

	function dayClick(e) {
		console.log("DAY CLIKC:", e)
	}

	function headerClick(e) {
		console.log("HHEADER CLICK: ", e)
	}

	function handleOPClick(e) {
		console.log("OP CLICK: ", e)
		prayerObj.op = e.detail;
	}
	function drop(l, i) {
		return l.slice(0,i).concat(l.slice(i+1));
	}
	function handleSaveOP() {
		console.log("SAVE OP")
		prayerListDB.add(prayerObj);
		prayerObj = initPrayerObj();
	}

	function handleResetOP() {
		prayerObj = initPrayerObj();
	}

	function changingText(e) {
		let i = e.target.value.indexOf('\n')
		if (i < 0) {
			prayerObj.for = e.target.value;
		}
		else {
			prayerObj.for = e.target.value.substring(0,i);
			prayerObj.why = e.target.value.substring(i+1);
		}
	}

</script>

<style>
	textarea {
		width: 90%;
		padding: 2%;
		margin: 2%;
	}
</style>

<p on:click={ (e) => handleAddPrayer(e) }>Add to prayer list</p>
{#if addPrayer}

<textarea 	placeholder="who or what to praying for\n for what reason?" 
			on:input={ (e) => changingText(e) }

/>

<p on:click={ () => showOPs = !showOPs} >
		Add Occasional Prayer
		{#if showOPs}
			<Close />
		{/if}

{#if showOPs}
	{#if prayerObj.op}
		<p>{prayerObj.op.title}</p>
	{:else}
		<p>None Selected</p>
	{/if}
		<OccasionalPrayers on:opClick={ (e) => handleOPClick(e)} />
	{/if}

</p>
<p> For: {prayerObj.for}</p>
<p>Why: {prayerObj.why}</p>
{#if prayerObj.op}
	<p>Occasional Prayer: {prayerObj.op.title}</p>
	<p>{prayerObj.op.prayer}
{/if}
<p>
	<button on:click={ () => handleSaveOP() } >Save</button>
	<button on:click={ () => handleResetOP() } >Reset</button>
</p>

{/if}
<div>
	{#if $prayerListDB.total_rows === 0}
		<p>Prayer List is Empty</p>
	{:else}
		{#each $prayerListDB.rows as prayer, i}
			<Prayer prayer={prayer.doc} />
		{/each}
	{/if}
</div>