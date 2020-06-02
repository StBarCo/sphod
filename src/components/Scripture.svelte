<!-- Scripture -->
<script>
    export let text, ref;
    import Reference from './Reference.svelte';
</script>

<style>
    p{ 
        line-height: 1.3em;
        margin: 0;
        margin-bottom: 2em;
    }
</style>

<p>{text} <Reference text={ref} /></p>
