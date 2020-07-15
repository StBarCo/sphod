<!-- ListLessons -->
<script>
	export let ld; // LitDay object
	
	import { psDB } from './psDB.js';
	import { lessonDB } from './lessonDB.js';
	import { parsePsalm } from './parse-psalm.js';
	import { titleCase } from 'title-case';
	import SingleLesson from './SingleLesson.svelte';
	import Psalms from './Psalms.svelte';
	import CopyToClipboard from './CopyToClipboard.svelte';

	let psList = psDB.list(ld);
	let showPS = [];
	let showLesson1 = [];
	let showLesson2 = [];

	lessonDB.readings(ld);

	function myTitleCase(s) {
		if (typeof s === 'string' || s instanceof String) return titleCase(s);
		return "";
  	}

	function copy(service) {
		navigator.permissions.query({name: "clipboard-write"}).then(result => {
			if (result.state == "granted" || result.state == "prompt") {
		    console.log("copy all ", service, " to clipboard")
		  }
		 });
	};


</script>

<style>
	p {
		margin: 0;
		padding: 0;
	}

	div.item {
		border: 1px solid blue;
		border-radius: 5px;
		z-index: 9;
	}

</style>

<div>
	{#each psList as ps, i}
		<div class='item' on:click|stopPropagation={ () => showPS[i] = !showPS[i]} >
			<p> {ps} 				
				<CopyToClipboard copy={parsePsalm(ps)} />
			</p>
			{#if showPS[i]}
				<Psalms ps={ [parsePsalm(ps)] } /> <!-- Psalms expects a list of psalms -->
			{/if}
		</div>
    {/each}

    {#each $lessonDB.readings[ld.service + "1"] as l, i}
    	<div class='item' on:click|stopPropagation={ () => showLesson1[i] = !showLesson1[i]} >
    		<p> {myTitleCase(l.read)} ({l.style})
    			<CopyToClipboard copy={l} />
    		</p>
    		{#if showLesson1[i]}
    			<SingleLesson ref={l} />
    		{/if}
    	</div>
    {/each}
    
    {#each $lessonDB.readings[ld.service + "2"] as l, i}
    	<div class='item' on:click|stopPropagation={ () => showLesson2[i] = !showLesson2[i]} >
	    	<p>	{myTitleCase(l.read)} ({l.style})
	    		<CopyToClipboard copy={l} />
			</p>
	    	{#if showLesson2[i]}
	    		<SingleLesson ref={l} />
	    	{/if}
	    </div>
    {/each}
</div>