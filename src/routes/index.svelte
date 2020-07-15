<script>
	import {getHours, getMinutes} from 'date-fns';
	import { goto } from '@sapper/app';

	let now = new Date();
	let hrs = getHours(now);
	let mns = getMinutes(now);
	switch(true) {
		case (hrs > 19): goto('/compline'); break;
		case (hrs > 14): goto("/ep"); break; 
		case (hrs > 10 & mns > 29): goto("/midday"); break;
		default: goto("/mp");
	}

</script>