<!-- Canticle -->
<script>
	export let lesson;
	import { canticleDB } from './canticleDB.js';
	import CanticleTitle from './CanticleTitle.svelte'
	import PlayAudio from './PlayAudio.svelte';
	import Line from './Line.svelte';

	canticleDB.forLesson(lesson);

</script>


{#if $canticleDB[lesson]._id}
<div>
	<CanticleTitle canticle={$canticleDB[lesson]} />
	<PlayAudio src={$canticleDB[lesson]._id} /> 
	{#each $canticleDB[lesson].text as l }
			<Line indent={l.indent} text={l.text} />
	{/each}
</div>
{/if}
