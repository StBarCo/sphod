<!-- EditPrayer -->
<script>
	export let prayerObj = initPrayerObj();
	import OccasionalPrayers from './OccasionalPrayers.svelte';
	import { prayerListDB } from '../components/prayer-list-db.js';
	import { titleCase } from 'title-case';
	import {createEventDispatcher} from 'svelte';
	import rfdc from 'rfdc';
	import isEqual from 'lodash/isEqual';
	const clone = rfdc();

	let isNew = ((prayerObj.for.length + prayerObj.why.length) === 0);

	let dispatch = createEventDispatcher();
	let tPrayer = clone(prayerObj);
	let addOP = false;
	let changeOP = false;

	function myTitleCase(s) {
		if (typeof s === 'string' || s instanceof String) return titleCase(s);
		return "";
  	}



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

	function handleOPClick(e) {
		tPrayer.op = e.detail;
		addOP = false;
	}


	function handleResetOP() {
		tPrayer = initPrayerObj();
		addOP = true;
	}

	function handleSaveClick(e) {
		if ( !isEqual(prayerObj, tPrayer) ) {
			prayerObj = tPrayer;
			isNew ? prayerListDB.add(prayerObj) : prayerListDB.update(prayerObj);
			isNew = false;
		}
		dispatch('doneEditPrayer', prayerObj);
	}

	function handleResetClick() {
		tPrayer = prayerObj;
		document.getElementById('prayerRequest').value = "";
	}

	function thisTextarea() {
		return tPrayer.why.length > 0 ? tPrayer.for + '\r\n' + tPrayer.why : tPrayer.for;
	}

	function handleChangeOP() {
		changeOP = !changeOP;
	}
	function toggleText(toggle, whenTrue, whenFalse) {
		return toggle ? whenTrue : whenFalse;
	}
</script>

<style>
	p {
		margin: 0;
		padding: 0;
		width: 98%;
	}

	div {
		position: absolute;
		width: 82%;
		background-color: white;
		border: 1px solid blue;
		border-radius: 5px;
		padding: 5px;
		z-index: 9;
	}

	textarea {
		width: 95%;
		height: 10em;
	}

	p.options {
		text-align: center;
		margin-bottom: 1em;
	}

	button {
		width: 45%;
		border-radius: 1em;
	}

	button.green {
		background-color: green;
		color: beige;
	}
	button.red {
		background-color: red;
		color: beige ;
	}
	button.blue {
		background-color: lightblue;
		width: 33%;
	}
</style>

<div>
	<p class='options'>
		<button class='green' on:click={ e => handleSaveClick(e) } >All Done</button>
		<button class='red' on:click={ () => handleResetClick() } >Reset</button>
	</p>
		<textarea 	id='prayerRequest'
					placeholder="who or what to praying for and for what reason?" 
					on:input={ (e) => changingText(e) }
					value={thisTextarea()}
		/>

	{#if tPrayer.for.length > 0}
		<p>For: {tPrayer.for}</p>
	{/if}
	{#if tPrayer.why.length > 0}
		<p>Why: {tPrayer.why}</p>
	{/if}

	{#if tPrayer.op}
		<p>Occasional Prayer</p>
		<p>{ myTitleCase(tPrayer.op.title)}
			<button class='blue' on:click={ () => handleChangeOP() } >
				{ toggleText(changeOP, "All Done", "Change") }
			</button>
		{#if changeOP}
			<OccasionalPrayers on:opClick={ e => handleOPClick(e) }/>

		{:else}
			<p>{tPrayer.op.category} from {tPrayer.op.source}</p>
			<p>{myTitleCase(tPrayer.op.title)}</p>
			<p>{tPrayer.op.prayer}</p>
		{/if}
		</p>
-->
	{:else}
		<button on:click={ () => addOP = !addOP} >Add Occasional Prayer</button>
		{#if addOP }
			<OccasionalPrayers on:opClick={ e => handleOPClick(e) }/>
		{/if}
	{/if}
</div>