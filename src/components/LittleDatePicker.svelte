<!-- LittleDatePicker -->
<script>
	import {createEventDispatcher, onMount} from 'svelte';
  import {titleCase} from 'title-case';
  import {scriptureDB} from './scriptureDB.js';
  import getDayOfYear from 'date-fns/getDayOfYear';
  import getDaysInMonth from 'date-fns/getDaysInMonth';
  import endOfMonth from 'date-fns/endOfMonth';
  import addDays from 'date-fns/addDays';


  scriptureDB.init()

	let headers = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	let days = initMonth();
	
	let dispatch = createEventDispatcher();

  function myTitleCase(s) {
    if (typeof s === 'string' || s instanceof String) return titleCase(s);
    return "";
  }


  function dayName(ld) {
    let thisWeek = ld.week === 0 ? "" : ld.week;
    let dn = myTitleCase(ld.season) + " " + thisWeek + ld.litYear ; 
    return dn;
  }

  function initMonth() {
    let days = [];
    let now = new Date();

    // let monthAbbrev = monthNames[month].slice(0,3);
    // let nextMonthAbbrev = monthNames[(month+1)%12].slice(0,3);
    //  find the last Monday of the previous month
    var firstOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)
    var firstDay = firstOfMonth.getDay();
    var firstCalendarDay = addDays(firstOfMonth, -firstDay)
    var daysInThisMonth = getDaysInMonth(now);
    var calendarDays = daysInThisMonth + firstDay + (6 - endOfMonth(now).getDay())
    // var daysInLastMonth = new Date(year, month, 0).getDate();
    // var prevMonth = month==0 ? 11 : month-1;
    for (let i = 0; i < calendarDays; i++) {
      let d = addDays(firstCalendarDay, i);
      days.push( d );
    }
    return days;

}
	
</script>

<style>
.calendar {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(7, minmax(5%, 14%));
  grid-template-rows: 25px;
  grid-auto-rows: 25px;
  overflow: auto;
}
.day {
  border: 1px solid blue;
  border-radius: 25px;
  text-align: center;
  vertical-align: middle;
  width: 25px;
  padding: 0px;
  letter-spacing: 1px;
  font-size: 14px;
  box-sizing: border-box;
  color: #98a0a6;
  position: relative;
  z-index: 1;
}

.day:nth-of-type(7n + 7) {
  border-right: 1;
}
.day:nth-of-type(n + 1):nth-of-type(-n + 7) {
  grid-row: 1;
  margin-bottom: 1em;
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
  margin-bottom: 1em;
}
.day-disabled {
  color: rgba(152, 160, 166, 0.5);
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fdf9ff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E");
  cursor: not-allowed;
}
.season {}


</style>

<p>little date picker here</p>
<div class="calendar">
  {#each headers as header}
    <span class="day-name" on:click={()=>dispatch('headerClick',header)}>{header}</span>
  {/each}

  {#each days as d}
    <span class='day' on:click={ () => dispatch('dayClick', d)}> 
      { d.getDate() }
    </span>
  {/each}

</div>

