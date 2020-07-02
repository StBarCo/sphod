<!-- ServiceTitle -->
<script>
    export let    service=false
                , thisDay=false 
                ;

    import { litDay } from './litDay.js';
    import format from 'date-fns/format';
    import { seasonTitle } from './season_title.js';
    import parseISO from 'date-fns/parseISO';
    import { titleCase } from 'title-case';

    let now = parseISO(thisDay.now)

    // thisDay =   thisDay ? thisDay : $litDay(new Date());
    console.log("SERVICE TITLE: ", thisDay)
    // season =    season ? season : $litDay.season;
    // lityear =   lityear ? lityear : $litDay.litYear;
    // week =      week ? week : $litDay.week
    // week =      (week === 0) ? "" : week


    let litTitle = titleCase(seasonTitle(thisDay.season))
    if (thisDay > 0) litTitle += " " + thisDay.week + thisDay.lityear;
</script>

<style>
    div { text-align: center; }
    h1 { font-variant: small-caps; }
</style>

<div>
    { #if service }
        <h1>{@html service }</h1>
    { /if }
    <h2>{ format(now, "EEEE, MMMM do, yyyy") }</h2>
    <h3>{ litTitle }</h3> 
</div>
