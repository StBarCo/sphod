<!-- Lesson -->
<script>
	export let lesson, service;
	import { lessonDB } from './lessonDB.js';

	lessonDB.get(lesson, service);

	function addAudio() {

	}
</script>

{#if $lessonDB[lesson].length > 0}
<p>
	{#each $lessonDB[lesson] as partialLesson}
		{#each partialLesson.text as l, i}
			{#if i === 0}
				<audio controls src='{"https://audio.esv.org/hw/" + partialLesson.query}'>
					Audio not available
				</audio>
			{/if}
			{@html l}
		{/each}
	{/each}
</p>
{/if}
