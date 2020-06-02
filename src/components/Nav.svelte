<script>
	export let segment;
	import {slide} from 'svelte/transition';

	let src = '/images/Hamburger_icon.png' ;
	let showMenu = false;
</script> 

<style>
	nav {
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
		margin-top: 0.5em;
	}
	div.options {
		position: absolute;
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
</style>

<nav>
	<ul>
		<li class='topLine'>
				<img {src} alt="menu selection" on:click={ e => showMenu = !showMenu} />
		</li>
		<li class='bcp topLine'>Book of Common Prayer 2019</li>
	</ul>
</nav>
{#if showMenu}
	<div class='options' transition:slide>
		<ul>
			<!-- note to the programmer: BE SURE to alternate left and right
				or you will get weird columns!
			-->
			<li class="options left">
				<a 	aria-current='{segment === "mp" ? "page" : undefined}'
					on:click={ e => showMenu = false} 
					href="mp"
				>
					Morning Prayer
				</a>
			</li>
			<li class="options right">
				<a 	aria-current='{segment === "midday" ? "page" : undefined}' 
					on:click={ e => showMenu = false} 
					href="midday"
				>
					Midday Prayer
				</a>
			</li>
			<li class="options left">
				<a 	aria-current='{segment === "ep" ? "page" : undefined}' 
					on:click={ e => showMenu = false} 
					href="ep"
				>
					Evening Prayer
				</a>
			</li>
			<li class="options right">
				<a 	aria-current='{segment === "compline" ? "page" : undefined}' 
					on:click={ e => showMenu = false} 
					href="compline"
				>
					Compline
				</a>
			</li>
			<li class="options left">
				<a 	aria-current='{segment === "family" ? "page" : undefined}' 
					on:click={ e => showMenu = false} 
					href="family"
				>
					Family Prayers
				</a>
			</li>
			<li class="options right">
				<a 	aria-current='{segment === "" ? "page" : undefined}' 
					on:click={ e => showMenu = false} 
					href="/"
				>
					Calendar
				</a>
			</li>
			<li class="options left">
				<a 	aria-current='{segment === "pastoral" ? "page" : undefined}' 
					on:click={ e => showMenu = false} 
					href="pastoral"
				>
					Pastoral
				</a>
			</li>
			<li class="options right">
				<a 	aria-current='{segment === "vigil" ? "page" : undefined}' 
					on:click={ e => showMenu = false} 
					href="vigil"
				>
					Vigil
				</a>
			</li>
			<li class="options left">
				<a 	aria-current='{segment === "canticles" ? "page" : undefined}' 
					on:click={ e => showMenu = false} 
					href="canticles"
				>
					Canticles
				</a>
			</li>
            <li class="options right">
            	<a 	aria-current='{segment === "op" ? "page" : undefined}' 
            		on:click={ e => showMenu = false} 
            		href="op"
            	>
            		Occasional Prayers
            	</a>
            </li>
			<li class="options left">
				<a 	aria-current='{segment === "pl" ? "page" : undefined}' 
					on:click={ e => showMenu = false} 
					href="pl"
				>
					Prayer List
				</a>
			</li>

			<li class="options right">
				<a 	aria-current='{segment === "about" ? "page" : undefined}' 
					on:click={ e => showMenu = false} 
					href="about"
				>
					About
				</a>
			</li>
			<li class="options left">
				<a 	aria-current='{segment === "blog" ? "page" : undefined}' 
					on:click={ e => showMenu = false} 
					href="blog"
				>
					Blog
				</a>
			</li>


		</ul>
	</div>
{/if}
