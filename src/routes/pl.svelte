<!-- pl (Prayer List) -->
<script>

	import Prayer from '../components/Prayer.svelte';
	import OccasionalPrayers from '../components/OccasionalPrayers.svelte';
	import LittleDatePicker from '../components/LittleDatePicker.svelte';

	let prayerObj =	{ for: ""
					, why: ""
					, until: new Date()
					, op: undefined
					}
	let prayers = [];
	let showOPs = false;
	let dateChosen = false;
	let formattedSelected;

</script>

<style>

</style>

<p>Add to prayer list</p>
<ul>
	<li>Pray for: <input value={prayerObj.for} placeholder="who or what" /></li>
	<li>why? <textarea value={prayerObj.why} placeholder="praying for what reason?" /></li>
	<li>Until? 
		<LittleDatePicker />
	</li>
	<li on:click={ () => showOPs = !showOPs} >
		{#if showOPs}
			<OccasionalPrayers />
		{:else}
			Add Occasional Prayer
		{/if}
	</li>

</ul>
<div>
	{#each prayers as prayer}
		<Prayer {prayer} />
	{/each}
</div>