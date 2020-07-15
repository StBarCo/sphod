<!-- CanticleTitle -->
<script>
	export let canticle;
  	import {titleCase} from 'title-case';

  function myTitleCase(s) {
    if (typeof s === 'string' || s instanceof String) return titleCase(s);
    return "";
  }


</script>

<style>
	span { 
		font-style: italic;
		padding-left: 2em; 
	}
	h3 {
		margin-top: 2em;
		font-weight: bold;
	}
</style>

<h3>{myTitleCase(canticle.name)} <span>{myTitleCase(canticle.title)}</span></h3>
