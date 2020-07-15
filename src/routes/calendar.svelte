<script>
	import {createEventDispatcher, onMount} from 'svelte';
	import Calendar from "../components/Calendar.svelte";
	import DailyLessons from "../components/DailyLessons.svelte";
	import {litDay} from '../components/litDay.js';
	import getDayOfYear from 'date-fns/getDayOfYear';
	import getDaysInMonth from 'date-fns/getDaysInMonth';
	import endOfMonth from 'date-fns/endOfMonth';
	import addDays from 'date-fns/addDays';
	// import { fade } from 'svelte/transition';

	var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

	let headers = [];
	let now = new Date();
	let year = now.getFullYear();		//	this is the month & year displayed
	let month = now.getMonth();
	let showThisDay = false;
	let thisDay = undefined;
	let showMP = false;
	let showEP = false;
	let showEU = false;

	var days = [];	//	The days to display in each box

	//	The Calendar Component just displays stuff in a row & column. It has no knowledge of dates.
	//	The items[] below are placed (by you) in a specified row & column of the calendar.
	//	You need to call findRowCol() to calc the row/col based on each items start date. Each date box has a Date() property.
	//	And, if an item overlaps rows, then you need to add a 2nd item on the subsequent row.
	var items = [];

	function initMonthItems() {
		days.forEach( d => {
			// JSON.parse - used to clone litDay objects
			litDay.getByDate(d.date);
			items.push( JSON.parse( JSON.stringify($litDay) ) );
		})

		//This is where you calc the row/col to put each dated item
		for (let i of items) {
			// let rc = findRowCol(i.date);
			let rc = findRowCol(i.now);
			if (rc == null) {
				i.startCol = i.startRow = 0;
			} else {
				i.startCol = rc.col;
				i.startRow = rc.row;
			}
		}
	}

	$: month,year,initContent();

	// choose what date/day gets displayed in each date box.
	function initContent() {
		headers = dayNames;
		initMonth();
		// initMonthItems();
	}

	function initMonth() {
		days = [];

		// let monthAbbrev = monthNames[month].slice(0,3);
		// let nextMonthAbbrev = monthNames[(month+1)%12].slice(0,3);
		//	find the last Monday of the previous month
		var firstOfMonth = new Date(year, month, 1)
		var firstDay = firstOfMonth.getDay();
		var firstCalendarDay = addDays(firstOfMonth, -firstDay)
		var daysInThisMonth = getDaysInMonth(firstOfMonth);
		var calendarDays = daysInThisMonth + firstDay + (6 - endOfMonth(firstOfMonth).getDay())
		// var daysInLastMonth = new Date(year, month, 0).getDate();
		// var prevMonth = month==0 ? 11 : month-1;

		for (let i = 0; i < calendarDays; i++) {
			var d = addDays(firstCalendarDay, i)
			litDay.getByDate(d);
			days.push( JSON.parse( JSON.stringify($litDay) ) )
		}

	}

	function findRowCol(dt) {
		dt = new Date(dt); // dt gets passed around as a string
		for (let i=0;i<days.length;i++) {
			let d = days[i].date;
			if (d.getYear() === dt.getYear()
				&& d.getMonth() === dt.getMonth()
				&& d.getDate() === dt.getDate())
				return {row:Math.floor(i/7)+2,col:i%7+1};
		}
		return null;	
	}

	function dayClick(e) {
		showThisDay = !showThisDay;
		thisDay = e;
	}
	function headerClick(e) {
	}
	function next() {
		month++;
		if (month == 12) {
			year++;
			month=0;
		}
	}
	function prev() {
		if (month==0) {
			month=11;
			year--;
		} else {
			month--;
		}
	}


</script>

{#if showThisDay }
	<DailyLessons {thisDay} on:closeClick={ e => showThisDay = !showThisDay}/>
{/if}

<div class="calendar-container">
  <div class="calendar-header">
    <h1>
      <button on:click={()=>year--}>&Lt;</button>
      <button on:click={()=>prev()}>&lt;</button>
       {monthNames[month]} {year}
      <button on:click={()=>next()}>&gt;</button>
      <button on:click={()=>year++}>&Gt;</button>
    </h1>
		
	</div>
	<Calendar
		{headers}
		{days}
		on:dayClick={(e)=>dayClick(e.detail)}
		on:headerClick={(e)=>headerClick(e.detail)}
		/>
</div>
	
<style>
.calendar-container {
  width: 90%;
  margin: auto;
  overflow: hidden;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background: #fff;
  /* max-width: 1200px; */
}
.calendar-header {
  text-align: center;
  padding: 20px 0;
  background: #eef;
  border-bottom: 1px solid rgba(166, 168, 179, 0.12);
}
.calendar-header h1 {
  margin: 0;
  font-size: 18px;
}
.calendar-header button {
  background: #eef;
  border: 1px ;
  padding: 6;
  color: rgba(81, 86, 93, 0.7);
  cursor: pointer;
  outline: 0;
}
</style>


