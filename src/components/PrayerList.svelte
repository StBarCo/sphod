<!-- PrayerList -->
<script>
	import Prayer from '../components/Prayer.svelte';
	import OccasionalPrayers from '../components/OccasionalPrayers.svelte';
	import { prayerListDB } from '../components/prayer-list-db.js';

	prayerListDB.init();

	function removePrayer(e) {
		prayerListDB.remove(e.detail)
	}

	function handleDoneEditPrayer(e) {
		addPrayer = false;
		prayerListDB.init();
	}

</script>

<style>

</style>

<div>
	{#if $prayerListDB.total_rows === 0}
		<p>Prayer List is Empty</p>
	{:else}
		{#each $prayerListDB.rows as prayer, i}
			<Prayer prayer={prayer.doc} 
					on:removePrayer={ e => removePrayer(e)}
					on:doneEditPrayer={ e => handleDoneEditPrayer(e)}
				/>
		{/each}
	{/if}
</div>
