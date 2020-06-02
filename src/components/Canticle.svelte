<!-- Canticle -->
<script>
	export let lesson;
	import { canticleDB } from './canticleDB.js';
	import Line from './Line.svelte'
	canticleDB.forLesson(lesson);
</script>

<div>
	{#each $canticleDB[lesson].text as l }
			<Line indent={l.indent} text={l.text} />
	{/each}
</div>
