<!-- OccasionPrayers -->
<script>
	import {createEventDispatcher} from 'svelte';
	import { occasionalPrayersDB } from '../components/occasionalPrayersDB.js';
	import { titleCase } from 'title-case';

	let showCategory = [];
	let showPrayer = [];
	let dispatch = createEventDispatcher();

	function handleShowPrayer(p, i) {
		showPrayer[i] = !showPrayer[i];
		dispatch('opClick',p);
	}

	function handleSelectNone() {
		dispatch('opClick', undefined)
	}
</script>

<style>
	ul {
		list-style: none;
		z-index: 99;
	}
	p { 
		margin: 0; 
		padding: 0;
	}
	p.title {
		color: darkblue;
	}
	p.prayer {
		margin: 0.5em 0 0.25em 0.5em;
	}
</style>

<ul>
	<li on:click={ () => handleSelectNone()} >- none -</li>
	{#each $occasionalPrayersDB.categories as cat, i}
		<li on:click|stopPropagation={ () => showCategory[i] = !showCategory[i]} >{cat}</li>
		{#if showCategory[i]}
		<ul>
			{#each $occasionalPrayersDB.rows as row, j}
				{#if row.category === cat}
					<li on:click|stopPropagation={ () => handleShowPrayer(row, j) } >
						<p class='title'>
							{titleCase(row.title)} ({row.source})
						</p>
						{#if showPrayer[j]}
							<p class='prayer'>{row.prayer}</p>
						{/if}
					</li>
				{/if}
			{/each}
		</ul>
		{/if}
	{/each}
</ul>