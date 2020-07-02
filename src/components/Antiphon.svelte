<!-- Antiphon -->

<script>
    import { litDay } from './litDay.js';
    import Line from './Line.svelte';
    import Rubric from './Rubric.svelte';

    function sayAlleluia(a) {
        return a.alleluia ? ocome + ", Alleluia" : ocome;
    }

    let service = $litDay.service;
    let season = $litDay.season;

    let indent = true;
    let oneOf = $litDay.doy % 3;
    const ocome = "O come, let us adore him";
    const antiphons = {
        mp: {
            proper: [
                { say: "The earth is the Lord’s for he made it: *"
                , orThis: true
                }
            ,   { say: "Worship the Lord in the beauty of holiness: *"
                , orThis: true
                }
            ,   { say: "The mercy of the Lord is everlasting: *"
                }
            ]
        ,   advent: [
                { say: "Our King and Savior now draws near: *"}
            ]
        ,   christmas: [
                { say: "Alleluia, to us a child is born: *"
                , alleluia: true
                }
            ]
        ,   epiphany: [
                { say: "The Lord has shown forth his glory: *"}
            ]
        ,   presentation: [
                { say: "The Lord has shown forth his glory: *"}
            ]
        ,   annunciation: [
                { say: "The Word was made flesh and dwelt among us: *"}
            ]
        ,   lent: [
                { say: "The Lord is full of compassion and mercy: *"}
            ]
        ,   easter: [
                { say: "Alleluia. The Lord is risen indeed: *"
                , alleluia: true
                }
            ]
        ,   ascension: [
                { say: "Alleluia. Christ the Lord has ascended into heaven: *"
                , alleluia: true
                }
            ]
        ,   penetcost: [
                { say: "Alleluia. The Spirit of the Lord renews the face of the earth: *"
                , alleluia: true
                }
            ]
        ,   trinity: [
                { say: "Father, Son, and Holy Spirit, one God: *"}
            ]
        ,   all_saints: [
                { say: "The Lord is glorious in his saints: *"}
            ]

        }
    }
        
    let theseAntiphons = undefined;
    if (service === 'mp') theseAntiphons = antiphons[service][season] ? antiphons[service][season] : antiphons[service]["proper"] 

</script>
{#if service === 'mp'}
    {#each theseAntiphons as a }
        <Line text={a.say} />
        <Line {indent} text={sayAlleluia(a)} />
        {#if a.orThis}
            <Rubric text={"or this"} />
        {/if}
    {/each}
{/if}
