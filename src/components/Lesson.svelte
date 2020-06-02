<!-- Lesson -->
<script>
	export let lesson, service;
	import { lessonDB } from './lessonDB.js';

	lessonDB.get(lesson, service);
</script>

<p>
	{#each $lessonDB[lesson] as partialLesson}
		{#each partialLesson as l}
			{@html l}
		{/each}
	{/each}
</p>
