<!-- GetPsalm -->
<script>
    //import { Button } from 'smelte';
    let ps = "selected";
    function handleClick() {
        console.log("GET PSALM:", ps)
        thisPsalm = ps;
    }
</script>

<div>
    <button on:click={e => ps = 119}>Psalm 119</button>
    <button on:click={e => ps = 121}>Psalm 121</button>
    <button on:click={e => ps = 124}>Psalm 124</button>
    <button on:click={e => ps = 126}>Psalm 126</button>
    <div>
        <slot>Psalm {ps} goes here</slot>
    </div>
</div>
