<!-- Collect -->
<script>
    export let ofType; // week, day, peace, grace
    import { litDay } from './litDay.js';
    import { collectDB } from './collectDB.js';
    // import { Button } from 'smelte';
    import { titleCase } from 'title-case';
    collectDB.get(ofType);

    // if day is tues and of type is peace - don't show
    // if day is wed and of type is grace - don't show
    let showPeaceButton = ($litDay.dow != 2) && (ofType === 'peace');
    let showGraceButton = ($litDay.dow != 3) && (ofType === 'grace');
    let showPeace = false;
    let showGrace = false;
    let showThis = hideable();
    
    function hideable() {
        if (showPeaceButton && !showPeace) return "hideMe";
        if (showGraceButton && !showGrace) return "hideMe";
        return "showMe";
    }

    function handleGraceButton() {
        showGrace = !showGrace;
        showThis = (showThis === 'hideMe') ? 'showMe' : 'hideMe';
    }
    function handlePeaceButton() {
        showPeace = !showPeace;
        showThis = (showThis === 'hideMe') ? 'showMe' : 'hideMe';
    }
</script>

<style>
    .hideMe { display: none; }
    .showMe { display: block; }

</style>

<div>
    {#if showPeaceButton}
        <button on:click={handlePeaceButton} >Collect for Peace</button>
    {/if}
    {#if showGraceButton }
        <button on:click={handleGraceButton} >Collect for Grace</button>
    {/if}
    
    {#if $collectDB[ofType].title.length > 0 }
        <h3 class={ showThis } >{titleCase($collectDB[ofType].title)}</h3>
        <p class={ showThis } >{$collectDB[ofType].text}</p>
    {/if}
</div>