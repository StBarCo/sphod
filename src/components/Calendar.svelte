<div class="calendar">
	{#each headers as header}
	<span class="day-name" on:click={()=>dispatch('headerClick',header)}>{header}</span>
	{/each}

  {#each days as ld}
    <span class='{dayClass(ld)}' on:click={ () => dispatch('dayClick', ld)}> 
      { ld.dom }
      <br>
      <span class='season'>{ dayName(ld) } </span>
    </span>
  {/each}

</div>

<script>
	import {createEventDispatcher, onMount} from 'svelte';
  import {titleCase} from 'title-case';
  import {scriptureDB} from './scriptureDB.js';

  scriptureDB.init()

	export var headers = [];
	export let days = [];
	export let items = [];
	
	let dispatch = createEventDispatcher();

  function dayName(ld) {
    let thisWeek = ld.week === 0 ? "" : ld.week;
    let dn = titleCase(ld.season) + " " + thisWeek + ld.litYear ; 
    return dn;
  }

  function dayClass(ld) {
    return "day " + ld.colors[0];
  }

	
</script>

<style>
.white, .gold {
  background: linear-gradient( 9deg, silver, white);
  color: darkblue;
}
.green {
  background: linear-gradient( 9deg, rgba(23, 102, 10, 0.8), rgba(226, 255, 221, 0.8));
  color: indigo;
}
.red {
  background: linear-gradient( 9deg, pink, red);
  color: beige;
}
.violet, .purple {
  background: linear-gradient( 9deg, rgba(60, 1, 99, 0.8), rgba(241, 229, 249, 0.8));
  color: whitesmoke;
}
.blue {
  background: linear-gradient( 9deg, rgba(0, 5, 99, 0.8), rgba(220, 230, 239, 0.8));
  color: whitesmoke;
}
.rose {
  background: linear-gradient( 9deg, rgba(188, 9, 103, 0.8), rgba(239, 220, 230, 0.8));
  color: darkgrey;
}
.black {
  background: linear-gradient( 9deg, lightgrey, black);
  color: darkgrey;
}

.calendar {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(7, minmax(5%, 14%));
  grid-template-rows: 50px;
  grid-auto-rows: 120px;
  overflow: auto;
}
.litDay {
  font-variant: small-caps;
  color: darkblue;
}
.day {
  border-bottom: 1px solid rgba(166, 168, 179, 0.12);
  border-right: 1px solid rgba(166, 168, 179, 0.12);
  text-align: right;
  padding: 5px;
  letter-spacing: 1px;
  font-size: 14px;
  box-sizing: border-box;
  position: relative;
  z-index: 1;
}
@media (max-width: 800px)
     { 
      .day { 
        font-size: 12px;
      }
}

.day:nth-of-type(7n + 7) {
  border-right: 1;
}
.day:nth-of-type(n + 1):nth-of-type(-n + 7) {
  grid-row: 1;
}
.day:nth-of-type(n + 8):nth-of-type(-n + 14) {
  grid-row: 2;
}
.day:nth-of-type(n + 15):nth-of-type(-n + 21) {
  grid-row: 3;
}
.day:nth-of-type(n + 22):nth-of-type(-n + 28) {
  grid-row: 4;
}
.day:nth-of-type(n + 29):nth-of-type(-n + 35) {
  grid-row: 5;
}
.day:nth-of-type(n + 36):nth-of-type(-n + 42) {
  grid-row: 6;
}
.day:nth-of-type(7n + 1) {
  grid-column: 1/1;
}
.day:nth-of-type(7n + 2) {
  grid-column: 2/2;
}
.day:nth-of-type(7n + 3) {
  grid-column: 3/3;
}
.day:nth-of-type(7n + 4) {
  grid-column: 4/4;
}
.day:nth-of-type(7n + 5) {
  grid-column: 5/5;
}
.day:nth-of-type(7n + 6) {
  grid-column: 6/6;
}
.day:nth-of-type(7n + 7) {
  grid-column: 7/7;
}
.day-name {
  font-size: 12px;
  text-transform: uppercase;
  color: #e9a1a7;
  text-align: center;
  border-bottom: 1px solid rgba(166, 168, 179, 0.12);
  line-height: 50px;
  font-weight: 500;
}
.day-disabled {
  color: rgba(152, 160, 166, 0.5);
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fdf9ff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E");
  cursor: not-allowed;
}
.season {}
@media (max-width: 600px) {
  .season {
    display: none;
  }
  .day {
    text-align: center;
    border: 1px solid black;
    border-radius: 25px;
    margin: 5px;
    text-align: center;
  }
  .calendar {
      grid-auto-rows: 40px;
  }
}



</style>

