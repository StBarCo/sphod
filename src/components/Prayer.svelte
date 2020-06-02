<!-- Prayer -->
<script>
	export let prayer = {for: "", why: "", until: new Date(), op: undefined};
	export let expand = false;

	import { titleCase } from 'title-case';

</script>

<style>
	ul {
		list-style: none;
	}
</style>

<div>
	<ul>
		<li on:click={ () => expand = !expand}> For: {prayer.for} </li>
		{#if expand}
			<li>{prayer.why}</li>
			<li>Until: {prayer.until}</li>
			{#if prayer.op}
				<li>Occasional Prayer: </li>
				<p>show occasional prayer with option to change</p>
			{:else}
				<li>Add Occasional Prayer</li>
			{/if}
		{/if}
	</ul>
</div>
