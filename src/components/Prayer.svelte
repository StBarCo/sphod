<!-- Prayer -->
<script>
	export let prayer = {};
	export let expand = false;

	import { titleCase } from 'title-case';
	import Close from './Close.svelte';
	import OccasionalPrayers from './OccasionalPrayers.svelte';
	import EditPrayer from './EditPrayer.svelte';
	import { prayerListDB } from './prayer-list-db.js';
	import {createEventDispatcher} from 'svelte';

	let dispatch = createEventDispatcher();


	let showOP = false;
	let addOP = false;
	let changeOP = false;
	let editPrayer = false;

	let close = "float: right; position: relative;"

  function myTitleCase(s) {
  	if (typeof s === 'string' || s instanceof String) return titleCase(s);
  	return "";
  }


	function handleAddOP() {
		addOP = !addOP;
		if ( !addOP) {
			changeOP = false;
		}
	}

	function handleShowOP() {
		showOP = !showOP;
		if (!showOP) {
			addOP = false;
			changeOP = false;
		}
	}

	function handleExpand() {
		expand = !expand;
		if(!expand) {
			showOP = false;
			addOP = false;
			changeOP = false;
		}
	}

	function handleOPClick(e) {
		prayer.op = e.detail;
		prayerListDB.update(prayer);

	}

	function handleDoneEditPrayer(e) {
		editPrayer = false;
		expand = false;
		dispatch('doneEditPrayer', e.detail)
	}
</script>

<style>
	div.expandPrayer {
		position: relative;
		top: 1em;
		width: 99%;
		border: 1px solid grey;
	}

	ul {
		list-style: none;
		margin: 0.25em 0;
		padding: 0;
	}
	button {
		border: 1px solid grey;
		border-radius: 1em;
	}
	button.addOP {
		width: 80%;
	}

	button.prayFor {
		background-color: lightblue;
		padding: 0.25em 1em;
	}
	button.lightblue { background-color: lightblue; }
	button.green { background-color: green; color: beige;}
	button.red { background-color: red; color: beige;}
</style>

<div>
	{#if editPrayer}<EditPrayer prayerObj={prayer} on:doneEditPrayer={ e => handleDoneEditPrayer(e)} />{/if}

	{#if prayer} <!-- sometimes prayer is undefined, don't understand why -->
	<div class='expandPrayer'>
		<ul>
			<li on:click={ () => handleExpand()} >
				{#if !expand}
					<button class='prayFor'>{prayer.for}</button> 
				{:else}
						<button class='lightblue'>{prayer.for} - Close</button> 
						<button class='green' on:click|stopPropagation={ e => editPrayer = !editPrayer}>
							Change
						</button>
						<button class='red' on:click={ e => dispatch('removePrayer', prayer)} >
							Remove
						</button>
				{/if} 
			</li>
			{#if expand}
				<li>{prayer.why}</li>
				{#if prayer.op}
					<li on:click={ () => handleShowOP()} >
						Occasional Prayer: {myTitleCase(prayer.op.title)}
					</li>
				{:else}
					<li on:click={ () => handleAddOP()}>
						Add Occasional Prayer
					</li>
				{/if}
	
				{#if showOP}
					<ul>
						<li>For: {prayer.op.category}, from: {prayer.op.source}</li>
						<li>{prayer.op.prayer}</li>
						<li>
							<button class='addOP' on:click={ () => handleAddOP()}>
								{ #if addOP }
									Done With Occasional Prayers
								{:else}
									Change Occasional Prayer
								{/if}
							</button>
						</li>
					</ul>
				{/if}
	
			{/if}
		</ul>
	</div>
	{/if}
	{#if expand && addOP }
		<OccasionalPrayers on:opClick={ e => handleOPClick(e) }/>
	{/if}
</div>
