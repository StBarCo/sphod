<!-- Lines
    like Line, but takes a list of lines
-->
<script>
    export let lines, indent = false;
    import Line from './Line.svelte';
</script>

<div>
    {#each lines as text}
        <Line {indent} {text} />
    {/each}
</div>