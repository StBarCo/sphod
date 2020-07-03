<svelte:head>
	<title>Evening Prayer</title>
</svelte:head>

<script>
    import { litDay } from '../components/litDay.js';
	import OpeningSentences from '../components/OpeningSentences.svelte';
    import Confession from '../components/Confession.svelte';
    import Invitatory from '../components/Invitatory.svelte'
	import Psalms from '../components/Psalms.svelte';
	import Lesson from '../components/Lesson.svelte';
	import Canticle from '../components/Canticle.svelte';
    import ApostlesCreed from '../components/ApostlesCreed.svelte';
    import Collect from '../components/Collect.svelte';
    import CollectForMission from '../components/CollectForMission.svelte';
    import GeneralThanksgiving from '../components/GeneralThanksgiving.svelte';
    import Chrysostom from '../components/Chrysostom.svelte';
    import Versical from '../components/Versical.svelte';
    import ServiceTitle from '../components/ServiceTitle.svelte';
    import Rubric from '../components/Rubric.svelte';
    import Scripture from '../components/Scripture.svelte';
    import Gloria from '../components/Gloria.svelte';
    import MiddayScripture from '../components/MiddayScripture.svelte';
    import LordHaveMercy from '../components/LordHaveMercy.svelte';
    import LordsPrayer from '../components/LordsPrayer.svelte';
    import PrayerList from '../components/PrayerList.svelte';
    import Amen from '../components/Amen.svelte';
    // import {Button} from 'smelte';

    let service = "ep";
    let thisDay = litDay.init(service);
    let additionalDirections = false;
    let showPrayerList = false;

</script>
<ServiceTitle service={'Daily Evening Prayer'} {thisDay} />

<Rubric text={"The Officiant may begin Evening Prayer by reading an opening sentence of Scripture. One of the following, or a sentence from among those provided at the end of the Office (pages 54-56), is customary."} />

<OpeningSentences />

<Confession />

<Invitatory />

<Rubric text={"Then follows the psalm or psalms appointed"} />
<Psalms />

<h3>The Lessons</h3>
<Lesson lesson={1} {service} />
<Canticle lesson={1} {service} />
<Lesson lesson={2} {service} />
<Canticle lesson={2} {service} />

<ApostlesCreed />

<h3>The Prayers</h3>
<Versical speaker={"Officiant"} says={"The Lord be with you."} />
<Versical speaker={"People"} says={"And with your spirit."} />
<Versical speaker={"Officiant"} says={"Let us pray."} />
<Rubric text={"The People kneel or stand."} />

<LordHaveMercy />
<LordsPrayer />

<Versical speaker={"Officiant"} says={"O Lord, show your mercy upon us;"} />
<Versical speaker={"People"} says={"And grant us your salvation."} />
<Versical speaker={"Officiant"} says={"O Lord, guide those who govern us;"} />
<Versical speaker={"People"} says={"And lead us in the way of justice and truth."} />
<Versical speaker={"Officiant"} says={"Clothe your ministers with righteousness;"} />
<Versical speaker={"People"} says={"And let your people sing with joy."} />
<Versical speaker={"Officiant"} says={"O Lord, save your people;"} />
<Versical speaker={"People"} says={"And bless your inheritance."} />
<Versical speaker={"Officiant"} says={"Give peace in our time, O Lord;"} />
<Versical speaker={"People"} says={"And defend us by your mighty power."} />
<Versical speaker={"Officiant"} says={"Let not the needy, O Lord, be forgotten;"} />
<Versical speaker={"People"} says={"Nor the hope of the poor be taken away."} />
<Versical speaker={"Officiant"} says={"Create in us clean hearts, O God;"} />
<Versical speaker={"People"} says={"And take not your Holy Spirit from us."} />

<Rubric text={"Or this"} />

<Versical speaker={"Officiant"} says={"That this evening may be holy, good, and peaceful,"} />
<Versical speaker={"People"} says={"We entreat you, O Lord."} />
<Versical speaker={"Officiant"} says={"That your holy angels may lead us in paths of peace and goodwill,"} />
<Versical speaker={"People"} says={"We entreat you, O Lord."} />
<Versical speaker={"Officiant"} says={"That we may be pardoned and forgiven for our sins and offenses,"} />
<Versical speaker={"People"} says={"We entreat you, O Lord."} />
<Versical speaker={"Officiant"} says={"That there may be peace in your Church and in the whole world,"} />
<Versical speaker={"People"} says={"We entreat you, O Lord."} />
<Versical speaker={"Officiant"} says={"That we may depart this life in your faith and fear, and not be condemned before the great judgment seat of Christ,"} />
<Versical speaker={"People"} says={"We entreat you, O Lord."} />
<Versical speaker={"Officiant"} says={"That we may be bound together by your Holy Spirit in the communion of [ ___________ and] all your saints, entrusting one another and all our life to Christ,"} />
<Versical speaker={"People"} says={"We entreat you, O Lord."} />

<Rubric text={"The Officiant then prays one or more of the following Collects, always beginning with the Collect of the Day (the Collect of the Sunday or Principal Feast and of any of the weekdays following, or of the Holy Day being observed), found on pages 598-640. It is traditional to pray the Collects for Peace and Grace daily."} />

<Rubric text={"Alternatively, one may pray the Collects on a weekly rotation, using the suggestions in italics."} />


<h3>From The Collects Of The Christian Year</h3>
<Collect ofType={"week"} />

<h3>The Collect Of The Day</h3>
<Collect ofType={"day"} />
<Collect ofType={"EPpeace"} />
<Collect ofType={"perils"} />

<CollectForMission />

<Rubric text={"The Officiant may invite the People to offer intercessions and thanksgivings. A hymn or anthem may be sung."} />

<button on:click={ () => showPrayerList = !showPrayerList} >Prayer List</button>
{#if showPrayerList} <PrayerList /> {/if}

<Rubric text={"Before the close of the Office one or both of the following prayers may be used."} />

<GeneralThanksgiving />
<Chrysostom />

<Versical speaker={"Officiant"} says={"Let us bless the Lord."} />
<Versical speaker={"People"} says={"Thanks be to God."} />

<Rubric text={"From Easter Day through the Day of Pentecost, “Alleluia, alleluia” may be added to the preceding versicle and response."} />
<Rubric text={"The Officiant says one of these concluding sentences (and the People may be invited to join)"} />

<Scripture
    text={"The grace of our Lord Jesus Christ, and the love of God, and the fellowship of the Holy Spirit, be with us all evermore. Amen."}
    ref={"2 Corinthians 13:14t"}
/>
<Scripture
    text={"May the God of hope fill us with all joy and peace in believing through the power of the Holy Spirit. Amen."}
    ref={"Romans 15:13t"}
/>
<Scripture
    text={"Glory to God whose power, working in us, can do infinitely more than we can ask or imagine: Glory to him from generation to generation in the Church, and in Christ Jesus for ever and ever. Amen."}
    ref={"Ephesians 3:20-21t"}
/>


