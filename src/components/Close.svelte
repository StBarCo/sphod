<!-- Close -->
<script>
	export let thisStyle = "";

	import {createEventDispatcher} from 'svelte';

	let dispatch = createEventDispatcher()
</script>
<style>
	span {
		background-color: red;
		font-size: 18px;
		border: 1px solid black;
		border-radius: 50px;
		padding: 5px 12px;
	}
</style>
<span style={thisStyle} on:click={ () => dispatch('closeClick') }>X</span>
