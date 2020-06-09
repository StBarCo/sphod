<script>
	export let segment;
	import {slide} from 'svelte/transition';

	let src = '/images/Hamburger_icon.png' ;
	let showMenu = false;
	const names =
			{ "mp": "Morning Prayer"
			, "midday": "Midday Prayer"
			, "ep": "Evening Prayer"
			, "compline": "Compline"
			, "family": "Family Prayers"
			, "/": "Calendar"
			, "pastoral": "Pastoral"
			, "vigil": "Vigal"
			, "canticles": "Canticles"
			, "op": "Occasional Prayers"
			, "pl": "Prayer List"
			, "about": "About"
			, "blog": "Blog"
			, "db": "Load Database"
			};

	function currentPage(p) {
		return names[p] ? names[p] : "Calendar"
	}

	function leftRight(n) {
		return ((n % 2) === 0) ? "options left" : "options right"
	}
</script> 

<style>
	nav {
		position: fixed;
		top: 0px;
		width: 100%;
		z-index: 9999;
		background-color: lavender;
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li.options {
		display: block;
		margin: 0.2em 0.5em;
		float: left;
		width: 43%;
		border: 1px solid blue;
		border-radius: 5px;

	}

	li.topLine {
		display: block;
		float: left;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
		color: darkred;
	}


	a {
		text-decoration: none;
		padding: 0.5em 0.5em;
		display: block;
	}
	img {
		width: 1.8em;
		border: 1px solid black;
		border-radius: 5px;
		margin: 0.8em;
		background-color: white;
	}
	li.bcp {
		font-size: 134%;
		text-align: right;
		margin-left: 1em;
		margin-top: 0;
	}
	div.options {
		position: fixed;
		left: 0px;
		z-index: 9999;
		top: 4em;
		width: auto;
		border: 1px solid black;
		border-radius: 5px;
		background-color: white;
		padding: 0.5em;
		margin-left: 0.5em;
		margin-right: 0.5em;
	}
	li.left {
		float: left;
		margin-left: 0.5em;
	}
	li.right {
		float: right;
		margin-right: 0.5em;
	}
	p.page {
		position: absolute;
		width:	90%;
		text-align: center;
		padding: 0;
		margin: 0;
		top: 2em;
	}
</style>

<nav>
	<ul>
		<li class='topLine'>
				<img {src} alt="menu selection" on:click={ e => showMenu = !showMenu} />
		</li>
		<li class='bcp topLine'>Book of Common Prayer 2019</li>
	</ul>
	<p class='page'>{currentPage(segment)}</p>
</nav>
{#if showMenu}
	<div class='options' transition:slide>
		<ul>
			{#each Object.keys(names) as key, i}

				<li class='{leftRight(i)}' >
					<a aria-current='{segment === key ? "page" : undefined}'
					   on:click={e => showMenu = false}
					   href={key}
					>
					{names[key]}
				</a>
				</li>
			{/each}
		</ul>
	</div>
{/if}
