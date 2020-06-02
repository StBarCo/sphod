<!-- OccasionPrayers -->
<script>
	import { occasionalPrayersDB } from '../components/occasionalPrayersDB.js';
	import { titleCase } from 'title-case';

	let showCategory = [];
	let showPrayer = [];
</script>

<style>
	ul {
		list-style: none;
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
	{#each $occasionalPrayersDB.categories as cat, i}
		<li on:click={ () => showCategory[i] = !showCategory[i]} >{cat}</li>
		{#if showCategory[i]}
		<ul>
			{#each $occasionalPrayersDB.rows as row, j}
				{#if row.category === cat}
					<li on:click={ () => showPrayer[j] = !showPrayer[j] } >
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