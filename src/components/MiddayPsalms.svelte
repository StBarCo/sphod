<!-- GetPsalm -->
<script>
    import { psDB } from './psDB.js';
    import Psalms from './Psalms.svelte';

    //import { Button } from 'smelte';

    let ps = []; // list of psalms to get

    function handleClick(event) {
        // this weirdness about getting the data is because
        // the data attribute gets coerced into a single string
        // what follows is just easier than interpreting the string
        let [f, t] = [1,999];
        let p = parseInt( event.target.getAttribute('data-ps') );
        if (p === 31){ f = 4; t = 6}
        ps = [[p, f, t]];
        psDB.get(ps)
    }

</script>

<style>
    .wrapper {
        display: grid;
        grid-template-columns: 45% auto;
        grid-gap: 1em;
        grid-auto-rows: minmax( 1em, auto);
        line-height: 1.3em;
        margin: 0;
    }
    .one {
        grid-column: 1 ;
        grid-row: 1;
        text-align: center; 
    }
    .two {
        grid-column: 2;
        grid-row: 1;
        text-align: center; 
    }
    .three {
        grid-column: 1 ;
        grid-row: 2;
        text-align: center; 
    }
    .four {
        grid-column: 2;
        grid-row: 2;
        text-align: center; 
        }
    
</style>

<div class='wrapper'>
    <button class='one' data-ps=119 on:click={handleClick}>Psalm 119</button>
    <button class='two' data-ps=121 on:click={handleClick}>Psalm 121</button>
    <button class='three' data-ps=124 on:click={handleClick}>Psalm 124</button>
    <button class='four' data-ps=126 on:click={handleClick}>Psalm 126</button>
</div>
<Psalms {ps} />