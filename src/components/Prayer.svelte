<!-- Prayer -->
<script>
	export let prayer = {for: "", why: "", until: new Date(), op: undefined};
	export let expand = false;

	import { titleCase } from 'title-case';
	import Close from './Close.svelte';
	import OccasionalPrayers from './OccasionalPrayers.svelte';
	import { prayerListDB } from './prayer-list-db.js';
	import {createEventDispatcher} from 'svelte';

	let dispatch = createEventDispatcher();


	let showOP = false;
	let addOP = false;
	let changeOP = false;

	let close = "float: right; position: relative;"

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
	function removePrayer(e) {
		prayerListDB.remove(prayer);
		dispatch('removeClick', prayer);
	}
</script>

<style>
	ul {
		list-style: none;
	}
	button.addOP {
		width: 80%;
	}
</style>

<div>
	<ul>
		<li on:click={ () => handleExpand()} >
			For: {prayer.for} 
			{#if expand}<Close thisStyle={close} on:closeClick={ e => removePrayer(e)}/>{/if} 
		</li>
		{#if expand}
			<li>{prayer.why}</li>
			{#if prayer.op}
				<li on:click={ () => handleShowOP()} >
					Occasional Prayer: {titleCase(prayer.op.title)}
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
	{#if expand && showOP && addOP }
		<OccasionalPrayers on:opClick={ e => handleOPClick(e) }/>
	{/if}
</div>
