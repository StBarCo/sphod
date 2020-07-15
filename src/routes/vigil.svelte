<!-- vigil -->
<script>
    import { litDay } from '../components/litDay.js';
    import { psDB } from '../components/psDB.js';
    import { canticleDB } from '../components/canticleDB.js';
    import Rubric from '../components/Rubric.svelte';
    import Versical from '../components/Versical.svelte';
    import Line from '../components/Line.svelte';
    import ServiceTitle from '../components/ServiceTitle.svelte';
    import Reference from '../components/Reference.svelte';
    import LordsPrayer from '../components/LordsPrayer.svelte';
    import Psalms from '../components/Psalms.svelte';
    import Amen from '../components/Amen.svelte';
    import LitanyAtDeath from '../components/LitanyAtDeath.svelte';

    litDay.init('healing')
    const indent = true;
    const italic = true;
    const bold = true;
    const smallcaps = true;
    const center = true;

    let litany = false;

    let ps = [];
    canticleDB.byName('nunc_dimittis')

    function handleClick(event) {
        // this weirdness about getting the data is because
        // the data attribute gets coerced into a single string
        // what follows is just easier than interpreting the string
        let p = event.target.getAttribute('data-ps');
        let [f, t] = [1,999];
        if (p === 31){ f = 4; t = 6}
        psDB.get( [[p,f,t]] );
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
    button { 
        width: 100%;
        text-align: center; 
        margin: 0.2em auto;
        display: block;
        z-index: 99;
        position: relative;
        }
    p.scripture { margin-bottom: 2em; }
</style>

<svelte:head>
    <title>Vigil</title>
</svelte:head>

<ServiceTitle service={'Prayers for a Vigil'} thisDay={$litDay} />

<Rubric text={"It is appropriate that family and friends come together prior to a funeral. This rite may be used on such an occasion, whether at the church, a funeral home, or elsewhere."} />

<Rubric text={"The Minister says"} />

<p>
Dear Friends: It was our Lord Jesus himself who said, “Come to
me, all who labor and are heavy laden, and I will give you rest.”
Let us pray, then, for our brother N., that he may rest from his
labors, and enter into God’s eternal Sabbath rest.
</p>

<Rubric text={"A psalm may be prayed. Psalms 23 and 121 are particularly appropriate."} />
<div class='wrapper'>
        <button class='one'   data-ps=23   on:click={handleClick} >Psalm 23</button>
        <button class='two'   data-ps=121  on:click={handleClick} >Psalm 121</button>
</div>
<Psalms {ps} />

<Rubric text={"One or more of the following Lessons is read."} />

<p class='scripture'>
But we do not want you to be uninformed, brothers and sisters,
about those who are asleep, that you may not grieve as others
do who have no hope. For since we believe that Jesus died and
rose again, even so, through Jesus, God will bring with him
those who have fallen asleep. For this we declare to you by a
word from the Lord, that we who are alive, who are left until
the coming of the Lord, will not precede those who have fallen
asleep. 
<Reference text={"1 thessalonians 4:13-15"} />
</p>

<p class='scripture'>
In my Father’s house are many rooms. If it were not so, would
I have told you that I go to prepare a place for you?And if I go
and prepare a place for you, I will come again and will take you
to myself, that where I am you may be also. 
<Reference text={"john 14:2-3"} />
</p>

<Rubric text={"The following and other additional prayers may be said. The Litany at the Time of Death (pages 237-239) may also be used."} />

<button on:click={e => litany = !litany}>
    <Line {center} text={"Litany at the Time of Death"} />
</button>

{#if litany}
    <LitanyAtDeath />
{/if}

<p>
O God, who by the glorious resurrection of your Son Jesus
Christ destroyed death and brought life and immortality to
light: Grant that your servant N., being raised with Christ, may
know the strength of his presence and rejoice in his eternal
glory; who with you and the Holy Spirit lives and reigns, one
God, for ever and ever. <Amen />
</p>

<p>
Most merciful God, whose wisdom is beyond our
understanding: deal graciously with those who mourn
[especially _________]. Surround them with your love, that they
may not be overwhelmed by their loss, but have confidence in
your goodness, and strength to meet the days to come; through
Jesus Christ our Lord. <Amen />
</p>

<Rubric text={"The Minister says"} />
<p>
And now as our Savior Christ has taught us, we are bold to pray
</p>

<Rubric text={"Minister and People say together"} />
<LordsPrayer />

<Rubric text={"The Minister says"} />
<p>
May the God of hope fill us with all joy and peace in believing
through the power of the Holy Spirit. Amen.
<Reference text={"romans 15:13"} />
</p>

<Rubric text={"The Minister may say"} />
<p>
May his soul, and the souls of all the faithful departed, 
through the mercy of God, rest in peace.
</p>
<Versical speaker={"People"} says={"And may light perpetual shine upon them. Amen."} />