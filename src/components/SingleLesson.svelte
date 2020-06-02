<!-- SingleLesson.svelte -->
<script>
	export let ref = {read: "", style: "" };
	// import { scriptureDB } from './scriptureDB.js';
	import {onMount} from 'svelte';
	import axios from 'axios'; // for http requests

	let text;
	
	axios.defaults.headers.common['Authorization'] = "Token 77f1ef822a19e06867cf335a168713f9d2159bfc";

	onMount( async () => {
	 	await axios.get('https://api.esv.org/v3/passage/html?q=' + ref.read + ";include-audio-link=false")
		.then( resp => {
			text = resp.data.passages;
		})
		.catch( err => { text = "Couldn't get Bible: ", err})
	})
</script>

<style>
	

</style>

<div>
	{#if text}
		{#each text as t}
			<div>{@html t}</div>
		{/each}
	{:else}
		<p>Looking for {ref.read}</p>
	{/if}
</div>