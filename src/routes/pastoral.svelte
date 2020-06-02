<!-- pastoral -->
<script>
    import { litDay } from '../components/litDay.js';
    import { psDB } from '../components/psDB.js';
    import { canticleDB } from '../components/canticleDB.js';
    import Rubric from '../components/Rubric.svelte';
    import Versical from '../components/Versical.svelte';
    import Line from '../components/Line.svelte';
    import ServiceTitle from '../components/ServiceTitle.svelte';
    import SectionTitle from '../components/SectionTitle.svelte';
    import Reference from '../components/Reference.svelte';
    import Gloria from '../components/Gloria.svelte';
    import LordsPrayer from '../components/LordsPrayer.svelte';
    import LordHaveMercy from '../components/LordHaveMercy.svelte';
    import Psalms from '../components/Psalms.svelte';
    import Amen from '../components/Amen.svelte';
    import LitanyAtDeath from '../components/LitanyAtDeath.svelte';


    litDay.init('healing')
    const indent = true;
    const italic = true;
    const bold = true;
    const smallcaps = true;
    const center = true;

    let about = false
      , reconciliation = false
      , sick = false
      , communionToSick = false
      , additionalPrayers = false
      , forASickPerson = false
      , recoveryFromSickness = false
      , aSickChild = false
      , beforeAnOperation = false
      , strengthAndConfidence = false
      , sanctificationOfIllness = false
      , bodyAndSoul = false
      , beginningOfRecovery = false
      , littleHope = false
      , bySickPerson = false
      , trustInGod = false
      , inPain = false
      , takingMedicine = false
      , forSleep = false
      , morning = false
      , textForSick = false
      , perseverance = false
      , hopeForHealing = false
      , hopeOfEternity = false
      , concerningMOD = false
      , additionalDirections = false
      , minOD = false
      ;

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
        margin: 0.2em auto;
        display: block;
        z-index: 99;
        position: relative;
        }
    button.close {
        background-color: red;
        color: aliceblue;
        width: 5em;
        }
    div.border {
        outline: thin solid grey;
        margin: -1em -1em 1em -1em;
        padding: 1em;
    }
    .indent {
        position: relative;
        width: 98%;
        left: 1%
    }
</style>

<svelte:head>
    <title>Healing</title>
</svelte:head>

<ServiceTitle service={'Rites of Healing'} />

<button on:click={e => about = !about} >
    <Line {center} text={"Concerning the Rites of Healing"} />
</button>
{#if about}
    <div class='border'>
    <Line {center} {smallcaps} text={"concerning the rites of healing"} />
    <Line {center} {smallcaps} text={"reconciliation of penitents"} />
    <Line {center} {smallcaps} text={"ministry to the sick"} />
    <Line {center} {smallcaps} text={"communion of the sick"} />
    <p>
    Healing was central to the ministry of Jesus, our incarnate Lord.
    Healing is central to the ministry of the Church, the Body of
    Christ. Spoken prayer, anointing with oil, and the laying on of
    hands are the principal outward means employed by the Church
    for its ministry to those whose health is in any way impaired. The
    rite of Reconciliation and the reception of Holy Communion are
    also gifts through which healing takes place.
    </p>
    <p>
    All Christians are called to be agents of healing. Nevertheless, the
    regular forms of healing ministry set forth in this Prayer Book are
    expected to be coordinated and ordered under the authority of
    the Diocesan Bishop and the Priest having spiritual charge. Some
    aspects of healing ministry, most notably absolution and formal
    blessings, are reserved to Bishops and Priests. The use of holy oils
    (healing and exorcism), like the ministries of which they are a
    sign, may be extended to lay ministers by the Bishop and Priest
    having pastoral jurisdiction. Similarly, lay persons may be trained
    and authorized to carry the consecrated elements of Christ’s
    Body and Blood to the sick (or those otherwise confined or kept
    away from regular celebrations of the Holy Communion) under
    provisions set forward by the Ordinary.
    </p>
    <p>
    Because physical, emotional, and spiritual healing are often
    interrelated, it is particularly appropriate to encourage confession,
    reconciliation, and forgiveness in the context of ministry to the
    sick. The content of a confession is not normally a matter of
    subsequent discussion. The secrecy of a confession is morally
    binding for the confessor and is not to be broken.
    These rites are foundational to the many ways that the Church
    ministers to those who suffer in body, mind, or spirit.
    </p>
    <button class='close' on:click={ e => about = false}>Close</button>
    </div>
{/if}


<button on:click={e => reconciliation = !reconciliation} >
    <Line {center} {smallcaps} text={"reconciliation of penitents"} />
</button>
{#if reconciliation}
    <div class='border'>
    <Rubric text={"The Penitent begins"} />
    Bless me, for I have sinned.
    <Rubric text={"The Priest says"} />
    <p>
    The Lord be in your heart and upon your lips that you may truly
    and humbly confess your sins: In the Name of the Father, and of
    the Son, and of the Holy Spirit. <Amen />
    </p>
    <Rubric text={"Penitent"} />
    <p>
    I confess to Almighty God, to his Church, and to you, that I
    have sinned by my own fault in thought, word, and deed, in
    things done and left undone; especially __________. For these
    and all other sins that I cannot now remember, I am truly sorry.
    I pray God to have mercy on me. I firmly intend amendment of
    life, and I humbly beg forgiveness of God and his Church, and
    ask you for counsel, direction, and absolution.
    </p>
    <Rubric text={"Here the Priest may offer counsel, direction, and comfort."} />
    <Rubric text={"The Priest then declares"} />
    <p>
    Our Lord Jesus Christ, who has given power to his Church to
    absolve all sinners who truly repent and believe in him, of his
    great mercy forgive you all your offenses; and by his authority
    committed to me, I absolve you from all your sins: In the Name
    of the Father, and of the Son, and of the Holy Spirit. <Amen />
    </p>
    <Rubric text={"or"} />
    <p>
    Almighty God, our heavenly Father, who in his great mercy has
    promised forgiveness of sins to all those who sincerely repent
    and with true faith turn to him, have mercy upon you, pardon
    and deliver you from all your sins, confirm and strengthen you
    in all goodness, and bring you to everlasting life; through Jesus
    Christ our Lord. <Amen />
    </p>
    <p>
    The Lord has put away all your sins.
    </p>
    <Versical speaker={"Penitent"} says={"Thanks be to God."} />
    <Rubric text={"The following prayer may also be said"} />
    <p>
    Let us pray.
    </p>
    <p>
    O most loving Father, by your mercy you put away the sins
    of those who truly repent, and remember their sins no more.
    Restore and renew in your servant whatever has been corrupted
    by the fraud and malice of the devil, or by his own selfish will
    and weakness. Preserve and protect him within the fellowship of
    the Church; hear his prayers and relieve his pain; through Jesus
    Christ our Lord. <Amen />
    <Rubric text={"The Priest concludes"} />
    <p>
    Go (or abide) in peace, and pray for me, a sinner.
    </p>
    <button class='close' on:click={ e => reconciliation = false} >Close</button>
    </div>
{/if}

<button on:click={e => sick = !sick} >
    <Line {center} {smallcaps} text={"ministry to the sick"} />
</button>
{#if sick}
    <div class='border'>
    <Rubric text={"The Officiant begins"} />
    <p>
    Savior of the world, by your Cross and precious blood you have
    redeemed us;
    </p>
    <p>
    Save us, and help us, we humbly beseech you, O Lord.
    </p>
    <Rubric text={"The Priest (or other authorized person) anoints the sick person’s forehead with the Oil of the Sick by making the sign of the Cross. If appropriate, other parts of the body which suffer from sickness or injury may also be anointed. Others may join in the laying on of hands. The Officiant says"} />
    <p>
    N., I anoint you with oil and I (or we) lay my (or our) hands
    upon you in the Name of the Father, and of the Son, and of the
    Holy Spirit. <Amen />
    </p>
    <p>
    Lord Jesus Christ, heal this your servant, sustain him with your
    presence, drive away all sickness of body, mind, and spirit, and
    give to him that victory of life and peace which will enable him
    to serve you both now and evermore. <Amen />
    </p>
    <Rubric text={"A Priest may add the following prayer. If this rite is used with multiple persons, it is appropriate for this prayer to be used after all have received individual prayer."} />
    <p>
    As you are outwardly anointed with this holy oil, so may our
    heavenly Father grant you the inward anointing of the Holy Spirit.  
    </p>
    <p>
    Of his great mercy, may he forgive you your sins, release you from
    suffering, and restore you to wholeness and strength. May he
    deliver you from all evil, preserve you in all goodness, and bring you
    to everlasting life; through Jesus Christ our Lord. <Amen />
    </p>

    <Rubric text={"Additional prayers or intercessions may be said. Additional prayers are on pages 231-235. See also Occasional Prayers #56-63 on pages 663-665."} />
    <Rubric text={"The Lord’s Prayer is said."} />
    <LordsPrayer />
    <Rubric text={"The Officiant then prays"} />
    <p>
    The Almighty Lord, who is a strong tower to all who put their trust
    in him, to whom all things in heaven, on earth, and under the earth
    bow and obey: Be now and evermore your defense, and make you
    know and feel that the only Name under heaven given for health
    and salvation is the Name of our Lord Jesus Christ. <Amen />
    </p>
    <Rubric text={"A Priest may conclude the above prayer with a blessing."} />
    <button class='close' on:click={ e => sick = false}>Close</button>
    </div>
{/if}

<button on:click={e => communionToSick = !communionToSick} >
    <Line {center} {smallcaps} text={"communion of the sick"} />
</button>

{#if communionToSick}
    <div class='border'>
    <Rubric text={"This rite is used when the consecrated elements are brought from an earlier celebration of Holy Communion."} />
    <Rubric text={"The Minister says"} />
    <Line text={"Grace to you and peace from God our Father and the Lord Jesus Christ."} />
    <Reference text={"philippians 1:2"} />
    <Rubric text={"The Minister continues"} />
    <p>
    Almighty God, to you all hearts are open, all desires known, and
    from you no secrets are hid: Cleanse the thoughts of our hearts
    by the inspiration of your Holy Spirit, that we may perfectly
    love you, and worthily magnify your holy Name; through Christ
    our Lord. <Amen />
    </p>
    <Rubric text={"A psalm may be prayed. Psalms 23, 62, 103, and 145 are particularly appropriate."} />
    <div class='wrapper'>
            <button class='one'   data-ps=23   on:click={handleClick} >Psalm 23</button>
            <button class='two'   data-ps=62    on:click={handleClick} >Psalm 62</button>
            <button class='three' data-ps=103  on:click={handleClick} >Psalm 103</button>
            <button class='four'  data-ps=145 on:click={handleClick} >Psalm 145</button>
    </div>
    <Psalms {ps} />
    <Rubric text={"One of the following Gospel lessons is read, or the readings appropriate to the day."} />
    <p>
    God so loved the world, that he gave his only-begotten Son, that
    whoever believes in him should not perish but have eternal life.
    <Reference text={"john 3:16t"} />
    </p>
    <p>
    Jesus said, “I am the living bread that came down from
    heaven. If anyone eats of this bread, he will live forever.
    And the bread that I will give for the life of the world is my
    flesh. For my flesh is true food, and my blood is true drink.
    Whoever feeds on my flesh and drinks my blood abides in me,
    and I in him.” 
    <Reference text={"john 6:51, 55-56"} />
    </p>
    <Rubric text={"Reflection on the Lessons may follow. Additional prayers may be offered."} />
    <Rubric text={"The Minister may say the Confession, and the sick person joins in as able."} />
    <Line text={"Most merciful God,"} />
    <Line {indent} text={"we confess that we have sinned against you"} />
    <Line {indent} text={"in thought, word and deed,"} />
    <Line {indent} text={"by what we have done, and by what we have left undone."} />
    <Line text={"We have not loved you with our whole heart;"} />
    <Line {indent} text={"we have not loved our neighbors as ourselves."} />
    <Line text={"We are truly sorry and we humbly repent."} />
    <Line text={"For the sake of your Son Jesus Christ,"} />
    <Line {indent} text={"have mercy on us and forgive us;"} />
    <Line {indent} text={"that we may delight in your will, and walk in your ways,"} />
    <Line {indent} text={"to the glory of your Name. Amen."} />
    <Rubric text={"A Priest, if present, says"} />
    <p>
    Almighty God, our heavenly Father, who in his great mercy has
    promised forgiveness of sins to all those who sincerely repent and with
    true faith turn to him, have mercy upon you, pardon and deliver you
    from all your sins, confirm and strengthen you in all goodness, and
    bring you to everlasting life; through Jesus Christ our Lord. <Amen />
    </p>
    <Rubric text={"A Deacon or lay person prays"} />
    <p>
    Grant to your faithful people, merciful Lord, pardon and peace;
    that we may be cleansed from all our sins, and serve you with a
    quiet mind; through Jesus Christ our Lord. <Amen />
    </p>
    <Versical speaker={"Minister"} says={"The peace of the Lord be always with you."} />
    <Versical speaker={"People"} says={"And with your spirit."} />
    <Versical speaker={"Minister"} says={"Let us pray."} />
    <Versical speaker={"Minister"} says={"and People"} />
    <LordsPrayer />
    <Rubric text={"Then may be said"} />
    <Line text={"Lamb of God, you take away the sin of the world;"} />
    <Line {indent} text={"have mercy on us."} />
    <Line text={"Lamb of God, you take away the sin of the world;"} />
    <Line {indent} text={"have mercy on us."} />
    <Line text={"Lamb of God, you take away the sin of the world;"} />
    <Line {indent} text={"grant us your peace."} />
    <Rubric text={"The minister may say"} />
    <p>
    The Gifts of God for the People of God. Take them in
    remembrance that Christ died for you, and feed on him in your
    hearts by faith, with thanksgiving. 
    </p>
    <Rubric text={"The Sacrament is then distributed with the following words"} />
    <p>
    The Body of our Lord Jesus Christ, which was given for you,
    preserve your body and soul to everlasting life.
    The Blood of our Lord Jesus Christ, which was shed for you,
    preserve your body and soul to everlasting life.
    </p>
    <Rubric text={"After Communion, the Minister says"} />
    <Line text={"Almighty and everliving God,"} />
    <Line {indent} text={"we thank you for feeding us, in these holy mysteries,"} />
    <Line {indent} text={"with the spiritual food of the most precious Body and Blood of your Son our Savior Jesus Christ;"} />
    <Line {indent} text={"and for assuring us, through this Sacrament, of your favor and goodness towards us:"} />
    <Line {indent} text={"that we are true members of the mystical body of your Son,"} />
    <Line {indent} text={"the blessed company of all faithful people;"} />
    <Line {indent} text={"and are also heirs, through hope,"} />
    <Line {indent} text={"of your everlasting kingdom."} />
    <Line text={"And we humbly ask you, heavenly Father,"} />
    <Line {indent} text={"to assist us with your grace,"} />
    <Line {indent} text={"that we may continue in that holy fellowship,"} />
    <Line {indent} text={"and do all the good works that you have prepared for us to walk in;"} />
    <Line text={"through Jesus Christ our Lord,"} />
    <Line {indent} text={"to whom, with you and the Holy Spirit,"} />
    <Line {indent} text={"be all honor and glory, now and for ever. Amen."} />
    <Rubric text={"A Priest gives this blessing"} />
    <p>
    The peace of God which passes all understanding keep your
    hearts and minds in the knowledge and love of God, and of his
    Son Jesus Christ our Lord; and the blessing of God Almighty,
    the Father, the Son, and the Holy Spirit, be among you, and
    remain with you always. <Amen />
    </p>
    <Rubric text={"A Deacon or lay person says the following"} />
    <p>
    The grace of our Lord Jesus Christ, and the love of God, and the
    fellowship of the Holy Spirit, be with us all evermore. Amen.
    <Reference text={"2 corinthians 13:14t"} />
    </p>
    <Versical speaker={"Minister"} says={"Let us bless the Lord."} />
    <Versical speaker={"People"} says={"Thanks be to God."} />
    <button class='close' on:click={ e => communionToSick = false}>Close</button>
    </div>
{/if}

<button on:click={ e => additionalPrayers = !additionalPrayers} >
<Line {center} {smallcaps} text={"additional prayers"} />
</button>
{#if additionalPrayers}
    <div class='border'>
    <button on:click={ e => forASickPerson = !forASickPerson} >
        <Line {center} {smallcaps} text={"for a sick person"} />
    </button>
    {#if forASickPerson}
        <div class='border indent'>
        <p>
        O Father of mercies and God of all comfort, our only help in
        time of need: We humbly beseech you to behold, visit, and
        relieve your sick servant N. for whom our prayers are desired.
        Look upon him with the eyes of your mercy; comfort him with
        a sense of your goodness; preserve him from the temptations of
        the enemy; and give him patience under his affliction. In your
        good time, restore him to health, and enable him to lead the
        remainder of his life in your fear, and to your glory; and grant
        that finally he may dwell with you in life everlasting; through
        Jesus Christ our Lord. <Amen />
        </p>
        <button class='close' on:click={ e => forASickPerson = false}>Close</button>
        </div>
    {/if}

    <button on:click={ e=> recoveryFromSickness = !recoveryFromSickness} >
        <Line {center} {smallcaps} text={"for recovery from sickness"} />
    </button>
    {#if recoveryFromSickness}
        <div class='border indent'>
        <p>
        O God, the strength of the weak and the comfort of sufferers:
        Mercifully accept our prayers, and grant to your servant N. the
        help of your power, that his sickness may be turned into health,
        and our sorrow into joy; through Jesus Christ our Lord. <Amen />
        </p>
        <Rubric text={"or this"} />
        <p>
        O God of heavenly powers, by the might of your command you
        drive away from our bodies all sickness and infirmity: Be present
        in your goodness with your servant N., that his weakness may
        be banished and his strength restored; and that, his health being
        renewed, he may bless your holy Name; through Jesus Christ
        our Lord. <Amen />
        </p>
        <button class='close' on:click={ e => recoveryFromSickness = false}>Close</button>
        </div>
    {/if}

    <button on:click={ e => aSickChild = !aSickChild} >
        <Line {center} {smallcaps} text={"for a sick child"} />
    </button>
    {#if aSickChild}
        <div class='border indent'>
        <p>
        Heavenly Father, watch with us over your child N., and grant
        that he may be restored to that perfect health which it is yours
        alone to give; through Jesus Christ our Lord. <Amen />
        </p>
        <Rubric text={"or this"} />
        <p>
        Lord Jesus Christ, Good Shepherd of the sheep, you gather
        the lambs in your arms and carry them in your bosom: We
        commend to your loving care this child N. Relieve his pain,
        guard him from all danger, restore to him your gifts of gladness
        and strength, and raise him up to a life of service to you. Hear
        us, we pray, for your dear Name’s sake. <Amen />
        </p>
        </div>
    {/if}

    <button on:click={ e => beforeAnOperation = !beforeAnOperation} >
        <Line {center} {smallcaps} text={"before an operation"} />
    </button>
    {#if beforeAnOperation}
        <div class='border indent'><p>
        Almighty God, our heavenly Father, graciously comfort your
        servant N. in his suffering, and bless the means used for his cure.
        Though at times he may be afraid, fill his heart with confidence
        that he may yet put his trust in you; through Jesus Christ our
        Lord. <Amen />
        </p>        
        <button class='close' on:click={ e => beforeAnOperation = false}>Close</button>
        </div>
    {/if}

    <button on:click={ e => strengthAndConfidence = !strengthAndConfidence} >
        <Line {center} {smallcaps} text={"for strength and confidence"} />
    </button>
    {#if strengthAndConfidence}
        <div class='border indent'><p>
        Heavenly Father, giver of life and health: Comfort and relieve
        your sick servant N., and give your power of healing to those 
        who minister to his needs, that he may be strengthened in his
        weakness and have confidence in your loving care; through Jesus
        Christ our Lord. <Amen />
        </p>
        <button class='close' on:click={ e => strengthAndConfidence = false}>Close</button>
        </div>
        {/if}

    <button on:click={ e => sanctificationOfIllness = !sanctificationOfIllness} >
        <Line {center} {smallcaps} text={"for the sanctification of illness"} />
    </button>
    {#if sanctificationOfIllness}
        <div class='border indent'><p>
        Sanctify, O Lord, the sickness of your servant N., that the sense
        of his weakness may add strength to his faith and seriousness to
        his repentance; and grant that he may live with you in everlasting
        life; through Jesus Christ our Lord. <Amen />
        </p>
        <button class='close' on:click={ e => sanctificationOfIllness = false}>Close</button>
        </div>
    {/if}

    <button on:click={ e => bodyAndSoul = !bodyAndSoul} >
        <Line {center} {smallcaps} text={"for health of body and soul"} />
    </button>
    {#if bodyAndSoul}
        <div class='border indent'><p>
        May God the Father bless you, God the Son heal you, God the
        Holy Spirit give you strength. May God the holy and undivided
        Trinity guard your body, save your soul, and bring you safely
        to his heavenly country; where he lives and reigns for ever and
        ever. <Amen />
        </p>
        <button class='close' on:click={ e => bodyAndSoul = false}>Close</button>
        </div>
    {/if}

    <button on:click={ e => beginningOfRecovery = !beginningOfRecovery} >
        <Line {center} {smallcaps} text={"thanksgiving for a beginning of recovery"} />
    </button>
    {#if beginningOfRecovery}
        <div class='border indent'><p>
        O Lord, your compassions never fail, and your mercies are new
        every morning: We give you thanks for giving our brother N.
        both relief from pain and hope of health renewed. Continue
        in him, we pray, the good work you have begun; that he, daily
        increasing in bodily strength, and rejoicing in your goodness,
        may so order his life that he may always think and do those
        things that please you; through Jesus Christ our Lord. <Amen />
        </p>
        <button class='close' on:click={ e => beginningOfRecovery = false}>Close</button>
        </div>
    {/if}

    <button on:click={ e => littleHope = !littleHope} >
        <Line {center} {smallcaps} text={"for a sick person when there is little hope of recovery"} />
    </button>
    {#if littleHope}
        <div class='border indent'><p>
        O Father of mercies and God of all comfort, our only help
        in time of need; We fly to you for aid on behalf of this your
        servant, here lying in great weakness of body. Look graciously 
        upon him, O Lord; that as he outwardly fades away, you would
        strengthen him inwardly with your grace and Holy Spirit. Give
        him true repentance for all the errors of his life, and steadfast
        faith in your Son Jesus; that his sins may be done away by your
        mercy, and his pardon sealed in heaven; through your Son Jesus
        Christ, our Lord and Savior. <Amen />
        </p>
        <button class='close' on:click={ e => littleHope = false}>Close</button>
        </div>
    {/if}
    <button class='close' on:click={ e => additionalPrayers = false}>Close</button>
    </div>
{/if} <!-- end of addtional prayers -->

<button on:click={ e => bySickPerson = !bySickPerson} >
    <Line {center} {smallcaps} text={"prayers for use by a sick person"} />
</button>
{#if bySickPerson}
    <div class='border'>
    <button on:click={ e => trustInGod = !trustInGod} >
        <Line {center} {smallcaps} text={"for trust in god"} />
    </button>
    {#if trustInGod}
        <div class='border indent'><p>
        O God, the source of all health: So fill my heart with faith
        in your love, that with calm expectancy I may make room for
        your power to possess me, and gracefully accept your healing;
        through Jesus Christ our Lord. <Amen />
        </p>
        <button class='close' on:click={ e => trustInGod = false}>Close</button>
        </div>
    {/if}

    <button on:click={ e => inPain = !inPain} >
        <Line {center} {smallcaps} text={"in pain"} />
    </button>
    {#if inPain}
        <div class='border indent'><p>
        Lord Jesus Christ, by your patience in suffering you hallowed
        earthly pain and gave us the example of obedience to your
        Father’s will: Be near me in my time of weakness and pain;
        sustain me by your grace, that my strength and courage may
        not fail; heal me according to your will; and help me always to
        believe that what happens to me here is of little account if you
        hold me in eternal life, my Lord and my God. <Amen />
        </p>
        <button class='close' on:click={ e => inPain = false}>Close</button>
        </div>
    {/if}

    <button on:click={ e => takingMedicine} >
        <Line {center} {smallcaps} text={"a prayer when taking medicine"} />
    </button>
    {#if takingMedicine}
        <div class='border indent'><p>
        Almighty God, in your goodness you created the earth and all
        its elements, and have given us skill to make medicines that heal
        and relieve our pain. All healing comes from you, and in you I
        put my trust. Grant that this medication may, in your mercy,
        give comfort and bring healing to my body; through Jesus
        Christ our Lord. <Amen />
        </p>
        <button class='close' on:click={ e => takingMedicine = false}>Close</button>
        </div>
    {/if}

    <button on:click={ e => forSleep = !forSleep} >
        <Line {center} {smallcaps} text={"for sleep"} />
    </button>
    {#if forSleep}
        <div class='border indent'><p>
        O heavenly Father, you give your children sleep for the
        refreshing of soul and body: Grant me this gift, I pray; keep
        me in that perfect peace which you have promised to those
        whose minds are fixed on you; and give me such a sense of your
        presence, that in the hours of silence I may enjoy the blessed
        assurance of your love; through Jesus Christ our Lord. <Amen />
        </p>
        <button class='close' on:click={ e => forSleep = false}>Close</button>
        </div>
    {/if}

    <button on:click={ e => morning = !morning} >
        <Line {center} {smallcaps} text={"in the morning"} />
    </button>
    {#if morning}
        <div class='border indent'><p>
        This is another day, O Lord. I know not what it will bring forth,
        but make me ready, Lord, for whatever it may be. If I am to
        stand up, help me to stand bravely. If I am to sit still, help me to
        sit quietly. If I am to lie low, help me to do it patiently. And if I
        am to do nothing, help me to do it gallantly. Make these words
        more than words, and give me the Spirit of Jesus. <Amen />
        </p>
        <button class='close' on:click={ e => morning = false}>Close</button>
        </div>
    {/if}

    <button on:click={ e => textForSick = !textForSick} >
        <Line {center} {smallcaps} text={"scriptures for use by a sick person"} />
    </button>
    {#if textForSick}
        <div class='border indent'>
        <button on:click={ e => perseverance = !perseverance} >
            <Line {center} {smallcaps} text={"For perseverance in suffering"} /> 
        </button>
        {#if perseverance}
            <div class='border indent'>
            <Line {indent} text={"isaiah 53"} />
            <Line {indent} text={"1 peter 2:21-25,"} />
            <Line {indent} text={"1 thessalonians 5:16-24,"} />
            <Line {indent} text={"2 corinthians 12:7-10,"} />
            <Line {indent} text={"romans 8:18-39"} />
            <button class='close' on:click={ e => perseverance = false}>Close</button>
            </div>
        {/if}

        <button on:click={ e => hopeForHealing = !hopeForHealing} >
            <Line {center} {smallcaps} text={"For hope for healing"} />
        </button>
        {#if hopeForHealing}
            <div class='border indent'>
            <Line {indent} text={"2 kings 5:1-14,"} />
            <Line {indent} text={"james 5:13-20,"} />
            <Line {indent} text={"luke 5:12-26,"} /> 
            <Line {indent} text={"luke 13:10-17,"} /> 
            <Line {indent} text={"acts 3:1-10"} />
            </div>
            <button class='close' on:click={ e => hopeForHealing = false}>Close</button>
        {/if}

        <button on:click={ e => hopeOfEternity = !hopeOfEternity} >
            <Line {center} {smallcaps} text={"For the hope of eternity"} />
        </button>
        {#if hopeOfEternity}
            <div class='border indent'>
            <Line {indent} text={"luke 2:25-35,"} />
            <Line {indent} text={"john 14,"} />
            <Line {indent} text={"1 corinthians 15:42-58,"} />
            <Line {indent} text={"2 corinthians 4:7-18,"} />
            <Line {indent} text={"1 thessalonians 4:13-18"} />
            <button class='close' on:click={ e => hopeOfEternity = false}>Close</button>
            </div>
        {/if}
        <Rubric text={"See also the Selections of Psalms on page 269."} />
        <button class='close' on:click={ e => textForSick = false}>Close</button>
        </div>
    {/if} <!-- end of text for sick -->
    <button class='close' on:click={ e => bySickPerson = false}>Close</button>
    </div>
{/if} <!-- end of by a sick person -->

<button on:click={ e => minOD = !minOD} >
        <Line {center} {smallcaps} text={"Ministry to the Dying"} />
</button>
{#if minOD}
    <div class='border'>
    <button on:click={ e => concerningMOD = !concerningMOD} >
        <Line {center} {smallcaps} text={"concerning ministry to the dying"} />
    </button>
    {#if concerningMOD}
        <div class='border indent'>
        <p>
        For Christians, death is a defeated enemy. In Christ, death has
        become the gateway to everlasting life. As St. Paul reminded the
        Church at Corinth:
        </p>
        <p>
        <Line text={"‘Death is swallowed up in victory."} />
        <Line text={"O death, where is your victory?"} />
        <Line text={"O death, where is your sting?’"} />
        The sting of death is sin, and the power of sin is the law. But
        thanks be to God, who gives us the victory through our Lord
        Jesus Christ. 
        <Reference text={"1 corinthians 15:54-57"} />
        </p>
        <p>
        When a person is near death, the minister should be notified.
        This rite is a customary part of the Church’s pastoral care.
        This liturgy is intended to be prayed with one who has received
        Jesus Christ as Savior and Lord. The Officiant may appropriately
        inquire of the dying person as to his or her acceptance of the
        Christian faith. If the person has not been baptized, Emergency
        Baptism (page 173) should be administered before the use of
        this rite.
        </p>
        <button class='close' on:click={ e => concerningMOD = false}>Close</button>
        </div>
    {/if} <!-- end of concerning MOD-->

    <SectionTitle text={"ministry to the dying"} />
    <Rubric text={"The Officiant begins"} />
    <p>Peace be to this house [or place], and to all who dwell in it.
    <Reference text={"luke 10:5t"} />
    </p>
    <Rubric text={"The Officiant continues with the following prayer"} />
    <p>
    Almighty God, look on this your servant, lying in great weakness,
    and comfort him with the promise of life everlasting, given in the
    resurrection of your Son Jesus Christ our Lord. <Amen />
    </p>
    <LitanyAtDeath />
    <LordsPrayer />
    <Versical speaker={"Officiant"} says={"O Lord, show your mercy upon us;"} />
    <Versical speaker={"People"} says={"As we put our trust in you."} />
    <Rubric text={"The Officiant prays"} />
    <p>
    <Line text={"Let us pray."} />
    O Sovereign Lord Christ, deliver your servant, N., from all evil,
    and set him free from every bond; that he may rest with all your
    saints in the eternal habitations; where with the Father and the
    Holy Spirit you live and reign, one God, for ever and ever. <Amen />
    <Rubric text={"The Officiant may invite those present to offer words of thanksgiving, reconciliation, or farewell. The Officiant may conclude with words of comfort."} />
    <SectionTitle text={"commendation at the time of death"} />
    <Rubric text={"Here a Priest may anoint the dying person with oil."} />
    <Rubric text={"The Priest says"} />
    <Line text={"Depart, O Christian soul, out of this world;"} />
    <Line text={"In the Name of God the Father Almighty who created you;"} />
    <Line text={"In the Name of Jesus Christ who redeemed you;"} />
    <Line text={"In the Name of the Holy Spirit who sanctifies you."} />
    <Line text={"May your rest be this day in peace, and your dwelling place in the Paradise of God."} />
    <SectionTitle text={"a commendatory prayer"} />
    <p>Into your hands, O merciful Savior, we commend your servant
    N. Acknowledge, we humbly beseech you, a sheep of your own
    fold, a lamb of your own flock, a sinner of your own redeeming.
    Receive him into the arms of your mercy, into the blessed rest of
    everlasting peace, and into the glorious company of the saints in
    light. <Amen />
    <Rubric text={"The Officiant and People may say"} />
    <!-- nunc dimittis -->
    <div>
    	<h3>{$canticleDB.named.name} {$canticleDB.named.title}</h3>
    	<Rubric text={$canticleDB.named.notes} />
    	{#each $canticleDB.named.text as l }
    			<Line indent={l.indent} text={l.text} />
    	{/each}
    </div>
    <SectionTitle text={"closing prayer"} />
    <Rubric text={"The Officiant prays"} />
    <p>
    May his soul and the souls of all the faithful departed, through
    the mercy of God, rest in peace. <Amen />
    </p>
    </div>

    <button on:click={ e => additionalDirections = !additionalDirections} >
        <Line {center} {smallcaps} text={"additional directions"} />
    </button>
    {#if additionalDirections}
        <div class='border indent'>
        <p>
        This rite is designed to be flexible in length. It may be adjusted according
        to the circumstances and condition of the dying person. Different
        portions of the rite may be used at different times, provided the order
        of the various elements is retained. In cases of great urgency, the
        Commendation at the Time of Death may be used alone. In the absence
        of a member of the clergy, this service may be led by any Christian.
        The minister may inquire of the dying person as to his or her desire
        to be reconciled to both God and neighbor. If the dying person feels
        troubled in conscience with any matter, the minister should offer the rite 
        of Reconciliation of a Penitent. On evidence of repentance, the minister
        shall give assurance of God’s mercy and forgiveness.
        </p>
        <p>
        If desired, Holy Communion may be administered using the rite for
        Communion of the Sick. It is appropriate for others present to receive
        the Sacrament as well. If the dying person cannot receive both the
        consecrated bread and wine, it is suitable to administer the Sacrament in
        one kind only. If he or she desires to receive, but by reason of extreme
        sickness is unable to consume either element, the minister is to assure
        the person that all the benefits of Holy Communion are conveyed, even
        though the elements are not received with the mouth. 
        </p>
        <button class='close' on:click={ e => additionalDirections = false}>Close</button>
        </div>
    {/if} <!-- end of additional directions -->
    <!-- end of ministry to the dying -->
    <button class='close' on:click={ e => minOD = false}>Close</button>
{/if}