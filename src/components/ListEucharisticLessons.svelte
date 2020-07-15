<!-- ListEucharisticLessons -->
<script>
	export let ld; // LitDay object
	
	import { eucharistDB } from './eucharistDB.js';
	import SingleLesson from './SingleLesson.svelte';
	import Psalms from './Psalms.svelte';
	import { parsePsalm } from './parse-psalm.js';

	eucharistDB.readings(ld);
	let showOT = []
	 ,  showPS = []
	 ,  showNT = []
	 ,  showGS = []
	 ;

</script>

<style>
	p {
		margin: 0;
		padding: 0;
		z-index: 5;
	}
	div {
		z-index: 9;
	}
	div.item {
		border: 1px solid blue;
		border-radius: 5px;
		z-index: 9;
	}
</style>

<div>
	{#each $eucharistDB.ot as ot, i}
		<div class='item' on:click|stopPropagation={ () => showOT[i] = !showOT[i]} >
			<p> {ot.read} ({ot.style}) </p>
		</div>
		{#if showOT[i]}
			<SingleLesson ref={ot} />
		{/if}
    {/each}

	{#each $eucharistDB.ps as ps, i}
		<div class='item' on:click|stopPropagation={ () => showPS[i] = !showPS[i]} >
			<p> {ps.read} ({ps.style}) </p>
		</div>
		{#if showPS[i]}
			<Psalms ps={ [parsePsalm(ps.read)] } /> <!-- Psalms expects a list of psalms -->
		{/if}
    {/each}

	{#each $eucharistDB.nt as nt, i}
		<div class='item' on:click|stopPropagation={ () => showNT[i] = !showNT[i]} >
			<p> {nt.read} ({nt.style}) </p>
		</div>
		{#if showNT[i]}
			<SingleLesson ref={nt} />
		{/if}
    {/each}

	{#each $eucharistDB.gs as gs, i}
		<div class='item' on:click|stopPropagation={ () => showGS[i] = !showGS[i]} >
			<p> {gs.read} ({gs.style}) </p>
		</div>
		{#if showGS[i]}
			<SingleLesson ref={gs.read} />
		{/if}
    {/each}


</div>