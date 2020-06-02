<!-- Versical -->
<script>
    export let speaker="", says;
</script>

<style>
    .wrapper {
        display: grid;
        grid-template-columns: 4em auto;
        grid-gap: 1em;
        grid-auto-rows: minmax( 1em, auto);
        line-height: 1.3em;
        margin: 0;
    }
    .says {
        font-style: normal;
        grid-column: 2 ;
        grid-row: 1;
    }
    .speaker {
        font-style: italic;
        grid-column: 1;
        grid-row: 1;
        }
</style>

<div class='wrapper'>
    <div class='speaker'>{speaker}</div>
    <div class='says'>{says}</div>
</div>