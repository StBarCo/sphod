<svelte:head>
	<title>Midday Prayer</title>
</svelte:head>

<script>
    import { litDay } from '../components/litDay.js';
    import Amen from '../components/Amen.svelte';
    import Gloria from '../components/Gloria.svelte';
    import LordHaveMercy from '../components/LordHaveMercy.svelte';
    import LordsPrayer from '../components/LordsPrayer.svelte';
    import MiddayScripture from '../components/MiddayScripture.svelte';
    import MiddayPsalms from '../components/MiddayPsalms.svelte';
    import Rubric from '../components/Rubric.svelte';
    import Scripture from '../components/Scripture.svelte';
    import ServiceTitle from '../components/ServiceTitle.svelte';
    import Versical from '../components/Versical.svelte';
    //import {Button} from 'smelte';

    let thisDay = litDay.init();
    let additionalDirections = false;

</script>

<ServiceTitle service={'Midday Prayer'} {thisDay} />

<Versical speaker={'Officiant'} says={'O God, make speed to save us;'}/>
<Versical speaker={'People'} says={'O Lord, make haste to help us.'}/>
<Versical speaker={'Officiant'} says={'Glory be to the Father, and to the Son, and to the Holy Spirit;'}/>
<Versical speaker={'People'} says={'As it was in the beginning, is now, and ever shall be, world without end. Amen.'}/>

<Rubric text={'Except in Lent, add Alleluia.'}/>
<Rubric text={'A suitable hymn may be sung.'}/>
<Rubric text={'One or more of the following, or some other suitable Psalm, is sung or said.'}/>

<MiddayPsalms />

<Rubric text={'At the end of the Psalms the Gloria Patri (Glory be...) is sung or said'}/>
<Gloria />

<MiddayScripture />

<Rubric text={"A meditation, silent or spoken, may follow. The Officiant then begins the Prayers"} />

<Versical speaker={"Officiant"} says={"I will bless the Lord at all times."} />
<Versical speaker={"People"} says={"His praise shall continually be in my mouth."} />

<LordHaveMercy />
<LordsPrayer />

<Versical speaker={"Officiant"} says={"O Lord, hear our prayer;"} />
<Versical speaker={"People"} says={"And let our cry come to you."} />
<Versical speaker={"Officiant"} says={"Let us pray."} />

<Rubric text={"The Officiant then says one or more of the following Collects. Other appropriate Collects may also be used."} />

<p>
Blessed Savior, at this hour you hung upon the Cross, 
stretching out your loving arms: Grant that all the 
peoples of the earth may look to you and be saved; 
for your tender mercies’ sake. 
<Amen />
</p>

<p>
Almighty Savior, who at mid-day called your servant Saint Paul 
to be an apostle to the Gentiles: We pray you to illumine the 
world with the radiance of your glory, that all nations may 
come and worship you; for you live and reign with the Father 
and the Holy Spirit, one God, for ever and ever.
<Amen />
</p>

<p>
Father of all mercies, you revealed your boundless compassion 
to your apostle Saint Peter in a three-fold vision: Forgive 
our unbelief, we pray, and so strengthen our hearts and 
enkindle our zeal, that we may fervently desire the salvation 
of all people, and diligently labor in the extension of 
your kingdom; through him who gave himself for the life of 
the world, your Son our Savior Jesus Christ.
<Amen />
</p>

<p>
Pour your grace into our hearts, O Lord, that we who have 
known the incarnation of your Son Jesus Christ, announced 
by an angel to the Virgin Mary, may by his Cross and passion 
be brought to the glory of his resurrection; who lives and 
reigns with you, in the unity of the Holy Spirit, one God, 
now and for ever.
<Amen />
</p>

<Versical speaker={"Officiant"} says={"Let us bless the Lord."} />
<Versical speaker={"People"} says={"Thanks be to God."} />

<Rubric text={"From Easter Day through the Day of Pentecost, “Alleluia, alleluia” may be added to the preceding versicle and response."} />

<Rubric text={"The Officiant may conclude with this, or one of the other concluding sentences from Morning and Evening Prayer."} />

<Scripture 
    text={"The grace of our Lord Jesus Christ, and the love of God, and the fellowship of the Holy Spirit, be with us all evermore. Amen."}
    ref={"2 Corinthians 13:14t"} 
/>


<button block on:click={e => additionalDirections = !additionalDirections}>
    A D D I T I O N A L D I R E C T I O N S
</button>
{#if additionalDirections}
    <p>Other suitable selections from the Psalter include Psalms 19, 67, 
    one or more sections of Psalm 119, or a selection from Psalms 120 
    through 133. Either version of the Lord’s Prayer may be ended with, 
    “deliver us from evil. Amen.” omitting the concluding doxology.
    </p>
{/if}