<!-- DailyLessons -->
<script>
	export let thisDay; // thisDay is a litDay object
	import {createEventDispatcher} from 'svelte';
	import { fly, slide } from 'svelte/transition';
    import format from 'date-fns/format';
	import Lesson from './Lesson.svelte';
	import ListLessons from './ListLessons.svelte';
    import ServiceTitle from './ServiceTitle.svelte';
    import Psalms from './Psalms.svelte';
    import ListEucharisticLessons from './ListEucharisticLessons.svelte';
    import CopyToClipboard from './CopyToClipboard.svelte';

	let dispatch = createEventDispatcher();
	let label = "Copy all lessons to Clipboard";

	let showEPlist = false;
	let showEUlist = false;
	let showMPlist = false;
	let flyTransition = { x: -200, duration: 300 };
	let slideTransition = { };

	function ldWithService(ld, service){
		ld.service = service;
		return ld;
	}

</script>

<style>
#thisDay {
	width: 90%;
	height:	auto;
	border: 1px solid black;
	border-left: none;
	border-radius: 0 5px 5px 0;
	position: absolute;
	top: 80px;
	left: 0px;
	z-index: 2;
	background-color: white;
}

.lesson {
	position:relative;
	background-color: white;
	margin: 1em;
	z-index: 3;
}

button.close {
	position: absolute;
	text-align: center;
	font-size: 15px;
	background-color: red;
	font-weight: bold;
	width: 2em;
	height: 2em;
	border-radius: 1em;
	border: none;
	margin: .2em;
}

div.dailyDetail {
	text-align: center;
	margin: 0;
}

div.select {
	border: 1px solid blue;
	border-radius: 5px;
	margin: 5px 0;
	background-color: rgb(173, 224, 230, 0.2);
}
</style>



<div id='thisDay' transition:fly={flyTransition}>
	<button class='close' on:click={()=>dispatch('closeClick')}>x</button>
	<div class='dailyDetail'>
		<ServiceTitle {thisDay} />
	</div>

	<div class='select' on:click={ () => showMPlist = !showMPlist} >
		Morning Prayer Lessons 
		<CopyToClipboard copy={"mp"} {label} {thisDay} />
		{#if showMPlist}
			<div class='lesson' transition:slide={slideTransition}>
				<ListLessons ld={ ldWithService(thisDay, "mp")} />
			</div>
		{/if}
	</div>

	<div class='select' on:click={ () => showEPlist = !showEPlist} >
		Evenint Prayer Lessons
		<CopyToClipboard copy={"ep"} {label} {thisDay} />
		{#if showEPlist}
			<div class='lesson' transition:slide={slideTransition}>
				<ListLessons ld={ldWithService(thisDay, 'ep')} />
			</div>
		{/if}
	</div>

	<div class='select' on:click={ () => showEUlist = !showEUlist} >
		Eucharist Lessons 
		<CopyToClipboard copy={"eu"} {label} {thisDay} />
		{#if showEUlist}
			<div class='lesson' transition:slide={slideTransition}>
				<ListEucharisticLessons ld={thisDay} />
			</div>
		{/if}
	</div>
</div>
