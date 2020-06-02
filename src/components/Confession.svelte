<!-- MPConfession -->
<script>
    import Line from './Line.svelte';
    import Rubric from './Rubric.svelte';
    //import {Button} from 'smelte';

    let indent = true;
    let priest = false;
    let buttonLabel = "Priest";
    function handleButton() {
        priest = !priest
        buttonLabel = priest ? "Deacon/Layity" : "Priest"
    }

</script>

<style>
    p {
        line-height: 1.3em;
        margin: 0;
    }
</style>

<h3>Confession Of Sin</h3>
<Rubric text={"The Officiant says to the People"} />
<p>
    Dearly beloved, the Scriptures teach us to acknowledge our 
    many sins and offenses, not concealing them from our heavenly 
    Father, but confessing them with humble and obedient hearts 
    that we may obtain forgiveness by his infinite goodness and mercy. 
    We ought at all times humbly to acknowledge our sins before Almighty 
    God, but especially when we come together in his presence to give 
    thanks for the great benefits we have received at his hands, 
    to declare his most worthy praise, to hear his holy Word, and 
    to ask, for ourselves and on behalf of others, those things which 
    are necessary for our life and our salvation. Therefore, draw near with 
    me to the throne of heavenly grace.
</p>
<Rubric text={"or this"} />
<p>
    Let us humbly confess our sins to Almighty God.
</p>
<Rubric text={"Silence is kept. All kneeling, the Officiant and People say"} />

<Line text={"Almighty and most merciful Father,"} />
<Line {indent} text={"we have erred and strayed from your ways like lost sheep."} />
<Line text={"We have followed too much the devices and desires of our own hearts."} />
<Line text={"We have offended against your holy laws."} />
<Line text={"We have left undone those things which we ought to have done,"} />
<Line {indent} text={"and we have done those things which we ought not to have done;"} />
<Line {indent} text={"and apart from your grace, there is no health in us."} />
<Line text={"O Lord, have mercy upon us."} />
<Line text={"Spare all those who confess their faults."} />
<Line text={"Restore all those who are penitent, according to your promises declared to all people in Christ Jesus our Lord."} />
<Line text={"And grant, O most merciful Father, for his sake,"} />
<Line {indent} text={"that we may now live a godly, righteous, and sober life,"} />
<Line {indent} text={"to the glory of your holy Name. Amen."} />

<button on:click={handleButton} >{buttonLabel}</button>
{#if priest}
    <Rubric text={"The Priest alone stands and says"} />
    <p>
        Almighty God, the Father of our Lord Jesus Christ, 
        desires not the death of sinners, but that they may 
        turn from their wickedness and live. He has empowered 
        and commanded his ministers to pronounce to his people, 
        being penitent, the absolution and remission of their 
        sins. He pardons and absolves all who truly repent and 
        genuinely believe his holy Gospel. For this reason, we 
        beseech him to grant us true repentance and his Holy 
        Spirit, that our present deeds may please him, the rest 
        of our lives may be pure and holy, and that at the last 
        we may come to his eternal joy; through Jesus Christ our Lord. Amen.
    </p>
    <Rubric text={"or this"} />
    <p>
        The Almighty and merciful Lord grant you absolution and 
        remission of all your sins, true repentance, amendment 
        of life, and the grace and consolation of his Holy Spirit. Amen.
    </p>
{:else}
    <Rubric text={"A Deacon or layperson remains kneeling and prays"} />
    <p>
        Grant to your faithful people, merciful Lord, pardon 
        and peace; that we may be cleansed from all our sins, 
        and serve you with a quiet mind; through Jesus Christ our Lord. Amen.
    </p>
{/if}
