<!-- GetCanticle -->
<script>

    export let named;

    import Line from './Line.svelte';
    import Rubric from './Rubric.svelte';

    let indent = true;

    let canticle = {
        pascha_nostrum: {
              name: "Pascha Nostrum"
            , title: "Christ Our Passover"
            , text: [
                  [ 1, "Alleluia. Christ our Passover has been sacrificed for us; *"]
                , [ 2, "therefore let us keep the feast,"]
                , [ 1, "Not with the old leaven, the leaven of malice and evil, *"]
                , [ 2, "but with the unleavened bread of sincerity and truth. Alleluia."]
                , [ 1, "Christ being raised from the dead will never die again; *"]
                , [ 2, "death no longer has dominion over him."]
                , [ 1, "The death that he died, he died to sin, once for all; *"]
                , [ 2, "but the life he lives, he lives to God."]
                , [ 1, "So also consider yourselves dead to sin, *"]
                , [ 2, "and alive to God in Jesus Christ our Lord. Alleluia."]
                , [ 1, "Christ has been raised from the dead, *"]
                , [ 2, "the first fruits of those who have fallen asleep."]
                , [ 1, "For since by a man came death, *"]
                , [ 2, "by a man has come also the resurrection of the dead."]
                , [ 1, "For as in Adam all die, *"]
                , [ 2, "so also in Christ shall all be made alive. Alleluia."]
                , [ "ref", "1 CORINTHIANS 5:7-8; ROMANS 6:9-11; 1 CORINTHIANS 15:20-22"]
            ]
        } //end of pascha_nostrum
    } // end of canticles


</script>

<style>
    .name { 
        font-size: 1.1em; 
        font-style: italic;
    }
    .title { 
        font-size: 1.1em;
        margin-left: 2em;
    }
</style>

<div>
    <p>
        <span class="name">{canticle[named].name}</span>
        <span class="title">{canticle[named].title}</span>
    </p>
    {#each canticle[named].text as [ofType, l] }
        {#if ofType === 1} <Line text={l} />
        {:else if ofType === 2} <Line {indent} text={l} />
        {:else if ofType === "ref"} <Rubric text={l} />
        {/if}
    {/each}
</div>

