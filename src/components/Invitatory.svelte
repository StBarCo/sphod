<!-- MPInvitatory -->
<script>
    import Rubric from './Rubric.svelte';
    import CanticleTitle from './CanticleTitle.svelte';
    import Versical from './Versical.svelte';
    import Line from './Line.svelte';
    import Antiphon from './Antiphon.svelte';
    import PlayAudio from './PlayAudio.svelte';
    import { litDay } from './litDay.js';
    import { canticleDB } from './canticleDB.js'
    
    const indent = true;
    
    function getCollect() {
        if ($litDay.service === "ep") return "phos_hilaron"
        let invitatory = ($litDay.doy % 2) === 1 ? "venite" : "jubilate";

        // during Eastertide, Pascha Nostrum only
        if ($litDay.season === 'easter') { return "pascha_nostrum"}

        //  on the 19th of the month (paslm 95 day), do not use venite
        if ($litDay.dom === 19) { return "jubilate" }

        //  during Lent, Venite (long version) only
        if ($litDay.season === "ashWednesday" || $litDay.season === "lent") {
          //  Sundays in lent: jubilate
          invitatory = $litDay.dow === 0 ? "jubilate" : "venite_long"
        }

        return invitatory;

    }

    canticleDB.byName(getCollect());
</script>
<style>
    h3 {
        margin-top: 2em;
        font-weight: bold;
    }
    span {
        font-style: italic;
        padding-left: 2em;
    }
</style>

<h3>Invitatory</h3>
<Rubric text={"All stand."} />
<Versical speaker={"Officiant"} says={"O Lord, open our lips;"} />
<Versical speaker={"People"} says={"And our mouth shall proclaim your praise."} />
<Versical speaker={"Officiant"} says={"O God, make speed to save us;"} />
<Versical speaker={"People"} says={"O Lord, make haste to help us."} />
<Versical speaker={"Officiant"} says={"Glory be to the Father, and to the Son, and to the Holy Spirit;"} />
<Versical speaker={"People"} says={"As it was in the beginning, is now, and ever shall be, world without end. Amen."} />
<Versical speaker={"Officiant"} says={"Praise the Lord."} />
<Versical speaker={"People"} says={"The Lord’s Name be praised."} />

<Rubric text={"Then follows the Venite. Alternatively, the Jubilate may be used. One of these antiphons, or one from the seasonal antiphons provided at the end of the Office (pages 29-30), may be sung or said before and after the Invitatory Psalm."} />
<Antiphon />

{#if $canticleDB.named._id.length > 0}
<div>
    <CanticleTitle canticle={$canticleDB.named} />
	<Rubric text={$canticleDB.named.notes} />
    <PlayAudio src={$canticleDB.named._id} />
	{#each $canticleDB.named.text as l }
			<Line indent={l.indent} text={l.text} />
	{/each}
</div>
{/if}

<Antiphon />

