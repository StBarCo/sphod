<!-- LordsPrayer -->
<script>
    import Line from './Line.svelte';
    import Versical from './Versical.svelte';
    import Rubric from './Rubric.svelte';
    // import { Button } from 'smelte';

    let modern = false;
    let indent = true;
</script>

<style>

</style>

<Rubric text={"Officiant and People"} />
<div>
    <button on:click={e => modern=false} >Traditional</button>
    <button on:click={e => modern=true} >Modern</button>
</div>
<h3>Lord's Prayer</h3>
{#if modern }
    <Line text={"Our Father in heaven"} />
        <Line {indent} text={"hallowed be your Name,"} />
        <Line {indent} text={"your kingdom come,"} />
        <Line {indent} text={"your will be done,"} />
        <Line {indent} text={"on earth as it is in heaven."} />
    <Line text={"Give us today our daily bread."} />
    <Line text={"And forgive us our sins,"} />
        <Line {indent} text={"as we forgive those"} />
        <Line {indent} text={"who sin against us."} />
    <Line text={"Save us from the time of trial,"} />
        <Line {indent} text={"and deliver us from evil."} />
    <Line text={"For the kingdom, the power,"} />
        <Line {indent} text={"and the glory are yours,"} />
        <Line {indent} text={"now and for ever. Amen."} />
{:else}
    <Line text={"Our Father, who art in heaven"} />
        <Line {indent} text={"hallowed be thy Name,"} />
        <Line {indent} text={"thy kingdom come,"} />
        <Line {indent} text={"thy will be done,"} />
        <Line {indent} text={"on earth as it is in heaven."} />
    <Line text={"Give us this day our daily bread."} />
    <Line text={"And forgive us our trespasses,"} />
        <Line {indent} text={"as we forgive those"} />
        <Line {indent} text={"who trespass against us."} />
    <Line text={"And lead us not into temptation,"} />
        <Line {indent} text={"but deliver us from evil."} />
    <Line text={"For thine is the kingdom,"} />
        <Line {indent} text={"and the power, and the glory,"} />
        <Line {indent} text={"for ever and ever. Amen."} />
{/if}
