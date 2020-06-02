<!-- ServiceTitle -->
<script>
    export let    service=false
                , now = false
                , season=false
                , week=false
                , lityear=false 
                ;

    import { litDay } from './litDay.js';
    import format from 'date-fns/format';
    import { seasonTitle } from './season_title.js';
    import parseISO from 'date-fns/parseISO';

    now =       now ? new Date(now) : new Date($litDay.now);
    season =    season ? season : $litDay.season;
    lityear =   lityear ? lityear : $litDay.litYear;
    week =      week ? week : $litDay.week
    week =      (week === 0) ? "" : week

    console.log("ServiceTitle: ", now, season, lityear, week, seasonTitle(season))


    let litTitle = seasonTitle(season) + " " + week + lityear;
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
