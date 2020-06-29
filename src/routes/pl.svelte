<!-- pl (Prayer List) -->
<script>

	import PrayerList from '../components/PrayerList.svelte';
	import Close from '../components/Close.svelte';
	import EditPrayer from '../components/EditPrayer.svelte';


	let addPrayer = false;

	function handleAddPrayer() {
		addPrayer = !addPrayer;
	}


</script>

<style>
	p.addPrayer {
		border: 1px solid grey;
		background-color: lightblue;
		border-radius: 1em;
		padding: 0.5em;
	}
</style>

<p class='addPrayer' on:click={ (e) => handleAddPrayer(e) }>Add to prayer list</p>
{#if addPrayer} 
	<!-- this path only for new prayers -->
	<EditPrayer  />
{/if}

<div>
	<p>Prayers for...</p>
	<PrayerList />
</div>