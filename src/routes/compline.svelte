<!-- compline -->
<script>
    import { litDay } from '../components/litDay.js';
    import { psDB } from '../components/psDB.js';
    import Gloria from '../components/Gloria.svelte';
    import Line from '../components/Line.svelte';
    import LordHaveMercy from '../components/LordHaveMercy.svelte';
    import LordsPrayer from '../components/LordsPrayer.svelte';
    import Psalms from '../components/Psalms.svelte'
    import Reference from '../components/Reference.svelte';
    import Rubric from '../components/Rubric.svelte';
    import SectionTitle from '../components/SectionTitle.svelte';
    import ServiceTitle from '../components/ServiceTitle.svelte';
    import Versical from '../components/Versical.svelte';

    litDay.init('compline')
    const indent = true;
    const italic = true;
    const bold = true;

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
    button { 
        width: 100%;
        text-align: center; 
        }
</style>

<svelte:head>
    <title>Compline</title>
</svelte:head>

<ServiceTitle service={'Compline'} thisDay={$litDay} />
<Rubric text={"The Officiant begins"} />
<p>
The Lord Almighty grant us a peaceful night
and a perfect end. <strong>Amen.</strong>
</p>
<Versical speaker={"Officiant"} says={"Our help is in the Name of the Lord;"} />
<Versical speaker={"People"} says={"The maker of heaven and earth."} />
<Rubric text={"The Officiant continues"} />
<p>
Let us humbly confess our sins to Almighty God.
</p>
<Rubric text={"Silence may be kept. The Officiant and People then say"} />
<p>Almighty God and Father, we confess to you,
to one another, and to the whole company of heaven,
that we have sinned, through our own fault,
in thought, and word, and deed,
and in what we have left undone.
For the sake of your Son our Lord Jesus Christ,
have mercy upon us, forgive us our sins,
and by the power of your Holy Spirit
raise us up to serve you in newness of life,
to the glory of your Name. <strong>Amen.</strong>
</p>

<Rubric text={"The Officiant alone says"} />
<p>
May Almighty God grant us forgiveness of all our sins,
and the grace and comfort of the Holy Spirit. <strong>Amen.</strong>
</p>
<Versical speaker={"Officiant"} says={"O God, make speed to save us;"} />
<Versical speaker={"People"} says={"O Lord, make haste to help us."} />
<Versical speaker={"Officiant"} says={"Glory be to the Father, and to the Son, and to the Holy Spirit;"} />
<Versical speaker={"People"} says={"As it was in the beginning, is now, and ever shall be, world without end. Amen."} />
<Rubric text={"Except in Lent, add <strong>Alleluia.</strong>"} />
<Rubric text={"One or more of the following, or some other suitable Psalm, is sung or said."} />

<div class='wrapper'>
        <button class='one'   data-ps=4   on:click={handleClick} >Psalm 4</button>
        <button class='two'   data-ps=31  on:click={handleClick} >Psalm 31:4-6</button>
        <button class='three' data-ps=91  on:click={handleClick} >Psalm 91</button>
        <button class='four'  data-ps=134 on:click={handleClick} >Psalm 134</button>
</div>

<Psalms {ps} />

<Rubric text={"At the end of the Psalms the Gloria Patri (Glory be...) is sung or said"} />
<Gloria />
<Rubric text={"One of the following, or some other suitable passage of Scripture, is read"} />
<p>
You, O Lord, are in the midst of us, and we are called by your
name; do not leave us. 
<Reference text={"jeremiah 14:9"} />
</p>
<p>
Come to me, all who labor and are heavy laden, and
I will give you rest. Take my yoke upon you, and learn
from me, for I am gentle and lowly in heart, and you will find
rest for your souls. For my yoke is easy, and my burden
is light. 
<Reference text={"matthew 11:28-30"} />
</p>
<p>
Now may the God of peace who brought again from the dead
our Lord Jesus, the great shepherd of the sheep, by the blood
of the eternal covenant, equip you with everything good that
you may do his will, working in us that which is pleasing in
his sight, through Jesus Christ, to whom be glory forever and
ever. Amen. 
<Reference text={"hebrews 13:20-21"} />
</p>
<p>
Be sober-minded; be watchful. Your adversary the devil prowls
around like a roaring lion, seeking someone to devour. Resist
him, firm in your faith. 
<Reference text={"1 peter 5:8-9"} />
</p>
<Rubric text={"At the end of the reading is said"} />
<Versical says={"The Word of the Lord."} />
<Versical speaker={"People"} says={"Thanks be to God."} />
<Rubric text={"A period of silence may follow. A suitable hymn may be sung."} />
<Versical speaker={"Officiant"} says={"Into your hands, O Lord, I commend my spirit;"} />
<Versical speaker={"People"} says={"For you have redeemed me, O Lord, O God of truth."} />
<Versical speaker={"Officiant"} says={"Keep me, O Lord, as the apple of your eye;"} />
<Versical speaker={"People"} says={"Hide me under the shadow of your wings."} />
<LordHaveMercy />
<Rubric text={"Officiant and People"} />
<LordsPrayer />

<Versical speaker={"Officiant"} says={"O Lord, hear our prayer;"} />
<Versical speaker={"People"} says={"And let our cry come to you."} />
<Versical speaker={"Officiant"} says={"Let us pray."} />
<Rubric text={"The Officiant then says one or more of the following Collects. Other appropriate Collects may also be used."} />

<p>
Visit this place, O Lord, and drive far from it all snares of the
enemy; let your holy angels dwell with us to preserve us in
peace; and let your blessing be upon us always; through Jesus
Christ our Lord. <strong>Amen.</strong>
</p>
<p>
Lighten our darkness, we beseech you, O Lord; and by your
great mercy defend us from all perils and dangers of this night;
for the love of your only Son, our Savior Jesus Christ. Amen.
Be present, O merciful God, and protect us through the hours
of this night, so that we who are wearied by the changes and
chances of this life may rest in your eternal changelessness;
through Jesus Christ our Lord. <strong>Amen.</strong>
</p>
<p>
Look down, O Lord, from your heavenly throne, illumine this
night with your celestial brightness, and from the children of
light banish the deeds of darkness; through Jesus Christ our
Lord. <strong>Amen.</strong>
</p>
<SectionTitle text={"a collect for saturdays"} />
<p>
We give you thanks, O God, for revealing your Son Jesus
Christ to us by the light of his resurrection: Grant that as we
sing your glory at the close of this day, our joy may abound in
the morning as we celebrate the Paschal mystery; through Jesus
Christ our Lord. <strong>Amen.</strong>
</p>

<Rubric text={"One of the following prayers may be added"} />
<p>
Keep watch, dear Lord, with those who work, or watch, or weep
this night, and give your angels charge over those who sleep.
Tend the sick, Lord Christ; give rest to the weary, bless the
dying, soothe the suffering, pity the afflicted, shield the joyous;
and all for your love’s sake. <strong>Amen.</strong>
</p>
<Rubric text={"or this"} />
<p>
O God, your unfailing providence sustains the world we live in
and the life we live: Watch over those, both night and day, who
work while others sleep, and grant that we may never forget that
our common life depends upon each other’s toil; through Jesus
Christ our Lord. <strong>Amen.</strong>
</p>

<Rubric text={"Silence may be kept, and other intercessions and thanksgivings may be offered."} />
<Rubric text={"The Officiant and People say or sing the Song of Simeon with this Antiphon"} />
<p>
Guide us waking, O Lord, and guard us sleeping; that awake
we may watch with Christ, and asleep we may rest in peace.
</p>
<Rubric text={"In Easter Season, add <em>Alleluia, alleluia, alleluia.</em>"} />
<SectionTitle text={"nunc dimittis"} />
<SectionTitle {italic} text={"The Song of Simeon"} />
<Line text={"Lord, now let your servant depart in peace, *"} />
<Line {indent} text={"according to your word."} />
<Line text={"For my eyes have seen your salvation, *"} />
<Line {indent} text={"which you have prepared before the face of all people;"} />
<Line text={"To be a light to lighten the Gentiles, *"} />
<Line {indent} text={"and to be the glory of your people Israel."} />
<Line text={"Glory be to the Father, and to the Son, and to the Holy Spirit; *"} />
<Line {indent} text={"as it was in the beginning, is now, and ever shall be,"} />
<Line {indent} text={"world without end. Amen."} />
<Reference text={"luke 2:29-32"} />
<p>
Guide us waking, O Lord, and guard us sleeping; that awake
we may watch with Christ, and asleep we may rest in peace.
</p>
<Rubric text={"In Easter Season, add <em></Rubric>Alleluia, alleluia, alleluia.</em></Rubric>"} />
<Versical speaker={"Officiant"} says={"Let us bless the Lord."} />
<Versical speaker={"People"} says={"Thanks be to God."} />

<Rubric text={"The Officiant concludes with the following"} />
<p>
The almighty and merciful Lord, Father, Son, and Holy Spirit,
bless us and keep us, this night and evermore. Amen.
</p>
<SectionTitle text={"additional directions"} />
<p>
A Bishop or Priest, if present, may pronounce absolution after the
confession.
</p>
<p>
For those saying Compline every day, particularly in families or other
communities, additional short Scriptural readings may be desired. Some
appropriate readings include:
<Line {indent} text={"isaiah 26:3-4"} />
<Line {indent} text={"isaiah 30:15"} />
<Line {indent} text={"matthew 6:31-34"} />
<Line {indent} text={"2 corinthians 4:6"} />
<Line {indent} text={"1 thessalonians 5:9-10"} />
<Line {indent} text={"1 thessalonians 5:23"} />
<Line {indent} text={"ephesians 4:26-27"} />
Either version of the Lord’s Prayer may be ended with, “deliver us from
evil. Amen.” omitting the concluding doxology.
</p>
