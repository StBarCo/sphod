<!-- canticles -->
<script>
    import { litDay } from '../components/litDay.js';
    import { psDB } from '../components/psDB.js';
    import Rubric from '../components/Rubric.svelte';
    import Line from '../components/Line.svelte';
    import ServiceTitle from '../components/ServiceTitle.svelte';
    import SectionTitle from '../components/SectionTitle.svelte';
    import Reference from '../components/Reference.svelte';
    import Gloria from '../components/Gloria.svelte';
    import Amen from '../components/Amen.svelte';

    let thisDay = litDay.init('canticles');

    const indent = true;
    const italic = true;
    const center = true;
    const smallcaps = true;

    let one = false
      , two = false
      , three = false
      , four = false
      , five =false
      , six = false
      , seven = false
      , eight = false
      , nine = false
      , ten = false
      ;

</script>

<style>
    button {
        width: 100%;
    }
</style>

<ServiceTitle service={"supplemental canticles<br>for worship"} {thisDay}  />

<button on:click={e => one = !one}>
<Line {center}              text={"1"} />
<Line {center} {smallcaps}  text={"magna et mirabilia"} />
<Line {center} {italic}     text={"The Song of the Redeemed"} />
<Rubric text={"Especially suitable for use in Advent and Easter"} />
</button>
{#if one}
<div>
<Line text={"O ruler of the universe, Lord God,"} />
<Line text={"great deeds are they that you have done, *"} />
<Line {indent} text={"surpassing human understanding."} />
<Line text={"Your ways are ways of righteousness and truth, *"} />
<Line {indent} text={"O King of all the ages."} />
<Line text={"Who can fail to do you homage, Lord,"} />
<Line text={"and sing the praises of your Name? *"} />
<Line {indent} text={"for you only are the Holy One."} />
<Line text={"All nations will draw near and fall down before you, *"} />
<Line {indent} text={"because your just and holy works have been revealed."} />
<Gloria /> 
<Reference text={"revelation 15:3-4"} />
</div>
{/if}

<button on:click={e => two = !two}>
<Line {center}              text={"2"} />
<Line {center} {smallcaps}  text={"surge, illuminare"} />
<Line {center} {italic}     text={"Arise, shine, for your light has come"} />
<Rubric text={"Especially suitable for use during the season after Epiphany"} />
</button>
{#if two}
<div>
<Line text={"Arise, shine, for your light has come, *"} />
<Line {indent} text={"and the glory of the Lord has dawned upon you."} />
<Line text={"For behold, darkness covers the land; *"} />
<Line {indent} text={"deep gloom enshrouds the peoples."} />
<Line text={"But over you the Lord will rise, *"} />
<Line {indent} text={"and his glory will appear upon you."} />
<Line text={"Nations will stream to your light, *"} />
<Line {indent} text={"and kings to the brightness of your dawning."} />
<Line text={"Your gates will always be open; *"} />
<Line {indent} text={"by day or night they will never be shut."} />
<Line text={"They will call you, The City of the Lord, *"} />
<Line {indent} text={"the Zion of the Holy One of Israel."} />
<Line text={"Violence will no more be heard in your land, *"} />
<Line {indent} text={"ruin or destruction within your borders."} />
<Line text={"You will call your walls, Salvation, *"} />
<Line {indent} text={"and all your portals, Praise."} />
<Line text={"The sun will no more be your light by day; *"} />
<Line {indent} text={"by night you will not need the brightness of the moon."} />
<Line text={"The Lord will be your everlasting light, *"} />
<Line {indent} text={"and your God will be your glory."} />
<Gloria />
<Reference text={"isaiah 60:1-3, 11, 14, 18-19"} />
</div>
{/if}

<button on:click={e => three = !three}>
<Line {center}              text={"3"} />
<Line {center} {smallcaps}  text={"kyrie pantokrator"} />
<Line {center} {italic}     text={"A Song of Penitence"} />
<Rubric text={"Especially suitable for use during Lent"} />
</button>
{#if three}
<div>
<Line text={"O Lord and Ruler of the hosts of heaven, *"} />
<Line {indent} text={"God of Abraham, Isaac, and Jacob,"} />
<Line {indent} text={"and of all their righteous offspring:"} />
<Line text={"You made the heavens and the earth, *"} />
<Line {indent} text={"with all their vast array."} />
<Line text={"All things quake with fear at your presence; *"} />
<Line {indent} text={"they tremble because of your power."} />
<Line text={"But your merciful promise is beyond all measure; *"} />
<Line {indent} text={"it surpasses all that our minds can fathom."} />
<Line text={"O Lord, you are full of compassion, *"} />
<Line {indent} text={"long-suffering, and abounding in mercy."} />
<Line text={"You hold back your hand; *"} />
<Line {indent} text={"you do not punish as we deserve."} />
<Line text={"In your great goodness, Lord,"} />
<Line text={"you have promised forgiveness to sinners, *"} />
<Line {indent} text={"that they may repent of their sin and be saved."} />
<Line text={"And now, O Lord, I bend the knee of my heart, *"} />
<Line {indent} text={"and make my appeal, sure of your gracious goodness."} />
<Line text={"I have sinned, O Lord, I have sinned, *"} />
<Line {indent} text={"and I know my wickedness only too well."} />
<Line text={"Therefore I make this prayer to you: *"} />
<Line {indent} text={"Forgive me, Lord, forgive me."} />
<Line text={"Do not let me perish in my sin, *"} />
<Line {indent} text={"nor condemn me to the depths of the earth."} />
<Line text={"For you, O Lord, are the God of those who repent, *"} />
<Line {indent} text={"and in me you will show forth your goodness."} />
<Line text={"Unworthy as I am, you will save me,"} />
<Line text={"in accordance with your great mercy, *"} />
<Line {indent} text={"and I will praise you without ceasing all the days of my life."} />
<Line text={"For all the powers of heaven sing your praises, *"} />
<Line {indent} text={"and yours is the glory to ages of ages. Amen."} />
<Reference text={"prayer of manasseh, 1-2, 4, 6-7, 11-15"} />
</div>
{/if}

<button on:click={e => four = !four}>
<Line {center}              text={"4"} />
<Line {center} {smallcaps}  text={"quaerite dominum"} />
<Line {center} {italic}     text={"Seek the Lord while he wills to be found"} />
<Rubric text={"Especially suitable for use during Lent"} />
</button>
{#if four}
<div>
<Line text={"Seek the Lord while he wills to be found; *"} />
<Line {indent} text={"call upon him when he draws near."} />
<Line text={"Let the wicked forsake their ways *"} />
<Line {indent} text={"and the evil ones their thoughts;"} />
<Line text={"And let them turn to the Lord, and he will have compassion, *"} />
<Line {indent} text={"and to our God, for he will richly pardon."} />
<Line text={"For my thoughts are not your thoughts, *"} />
<Line {indent} text={"nor your ways my ways, says the Lord."} />
<Line text={"For as the heavens are higher than the earth, *"} />
<Line {indent} text={"so are my ways higher than your ways,"} />
<Line {indent} text={"and my thoughts than your thoughts."} />
<Line text={"For as rain and snow fall from the heavens *"} />
<Line {indent} text={"and return not again, but water the earth,"} />
<Line text={"Bringing forth life and giving growth, *"} />
<Line {indent} text={"seed for sowing and bread for eating,"} />
<Line text={"So is my word that goes forth from my mouth; *"} />
<Line {indent} text={"it will not return to me empty;"} />
<Line text={"But it will accomplish that which I have purposed, *"} />
<Line {indent} text={"and prosper in that for which I sent it."} />
<Gloria /> 
<Reference text={"isaiah 55:6-11"} />
</div>
{/if}

<button on:click={e => five = !five}>
<Line {center}              text={"5"} />
<Line {center} {smallcaps}  text={"cantemus domino"} />
<Line {center} {italic}     text={"The Song of Moses"} />
<Rubric text={"Especially suitable for use in Easter"} />
</button>
{#if five}
<div>
<Line text={"I will sing to the Lord, for he is lofty and uplifted; *"} />
<Line {indent} text={"the horse and its rider has he hurled into the sea."} />
<Line text={"The Lord is my strength and my refuge; *"} />
<Line {indent} text={"the Lord has become my Savior."} />
<Line text={"This is my God and I will praise him, *"} />
<Line {indent} text={"the God of my people and I will exalt him."} />
<Line text={"The Lord is a mighty warrior; *"} />
<Line {indent} text={"The Lord is his Name."} />
<Line text={"The chariots of Pharaoh and his army has he hurled into the sea; *"} />
<Line {indent} text={"the finest of those who bear armor"} />
<Line {indent} text={"have been drowned in the Red Sea."} />
<Line text={"The fathomless deep has overwhelmed them; *"} />
<Line {indent} text={"they sank into the depths like a stone."} />
<Line text={"Your right hand, O Lord, is glorious in might; *"} />
<Line {indent} text={"your right hand, O Lord, has overthrown the enemy."} />
<Line text={"Who can be compared with you, O Lord, among the gods? *"} />
<Line {indent} text={"who is like you, glorious in holiness,"} />
<Line {indent} text={"awesome in renown, and worker of wonders?"} />
<Line text={"You stretched forth your right hand; *"} />
<Line {indent} text={"the earth swallowed them up."} />
<Line text={"With your constant love you led the people you redeemed; *"} />
<Line {indent} text={"you brought them in safety to your holy dwelling."} />
<Line text={"You will bring them in and plant them *"} />
<Line {indent} text={"on the mount of your possession,"} />
<Line text={"The resting-place you have made for yourself, O Lord, *"} />
<Line {indent} text={"the sanctuary, O Lord, that your hand has established."} />
<Line text={"The Lord shall reign *"} />
<Line {indent} text={"for ever and for ever."} />
<Gloria /> 
</div>
{/if}

<button on:click={e => six = !six}>
<Reference text={"exodus 15:1-6, 11-13, 17-18"} />
<Line {center}              text={"6"} />
<Line {center} {smallcaps}  text={"dignus es"} />
<Line {center} {italic}     text={"A Song to the Lamb"} />
<Rubric text={"Especially suitable for use after Ascension and in Easter Season"} />
</button>
{#if six}
<div>
<Line text={"Splendor and honor and kingly power *"} />
<Line {indent} text={"are yours by right, O Lord our God,"} />
<Line text={"For you created everything that is, *"} />
<Line {indent} text={"and by your will they were created and have their being;"} />
<Line text={"And yours by right, O Lamb that was slain, *"} />
<Line {indent} text={"for with your blood you have redeemed for God,"} />
<Line text={"From every family, language, people, and nation, *"} />
<Line {indent} text={"a kingdom of priests to serve our God."} />
<Line text={"And so, to him who sits upon the throne, *"} />
<Line {indent} text={"and to Christ the Lamb,"} />
<Line {indent} text={"Be worship and praise, dominion and splendor, *"} />
<Line {indent} text={"for ever and for evermore. Amen."} />
<Reference text={"revelation 4:11; 5:9-10, 13, 14"} />
</div>
{/if}

<button on:click={e => seven = !seven}>
<Line {center}              text={"7"} />
<Line {center} {smallcaps}  text={"cantate domino"} />
<Line {center} {italic}     text={"Sing unto the Lord"} />
<Rubric text={"Especially suitable for use in Easter and at any time outside penitential seasons"} />
</button>
{#if seven}
<div>
<Line text={"O sing unto the Lord a new song, *"} />
<Line {indent} text={"for he has done marvelous things."} />
<Line text={"With his own right hand, and with his holy arm, *"} />
<Line {indent} text={"he has won for himself the victory."} />
<Line text={"The Lord declared his salvation; *"} />
<Line {indent} text={"his righteousness he has openly shown in the sight of the nations. "} />
<Line text={"He has remembered his mercy and truth toward the house of Israel, *"} />
<Line {indent} text={"and all the ends of the world have seen the salvation of our God."} />
<Line text={"Show yourselves joyful unto the Lord, all you lands; *"} />
<Line {indent} text={"sing, rejoice, and give thanks."} />
<Line text={"Praise the Lord with the harp; *"} />
<Line {indent} text={"sing with the harp a psalm of thanksgiving."} />
<Line text={"With trumpets also and horns, *"} />
<Line {indent} text={"O show yourselves joyful before the Lord, the King."} />
<Line text={"Let the sea make a noise, and all that is in it, *"} />
<Line {indent} text={"the round world, and those that dwell therein."} />
<Line text={"Let the rivers clap their hands, and let the hills be joyful"} />
<Line text={"together before the Lord, *"} />
<Line {indent} text={"for he has come to judge the earth."} />
<Line text={"With righteousness shall he judge the world *"} />
<Line {indent} text={"and the peoples with equity."} />
<Gloria /> 
<Reference text={"psalm 98"} />
</div>
{/if}

<button on:click={e => eight = !eight}>
<Line {center}              text={"8"} />
<Line {center} {smallcaps}  text={"ecce, deus"} />
<Line {center} {italic}     text={"Surely, it is God who saves me"} />
<Rubric text={"Suitable for use at any time"} />
</button>
{#if eight}
<div>
<Line text={"Surely, it is God who saves me; *"} />
<Line {indent} text={"I will trust in him and not be afraid."} />
<Line text={"For the Lord is my stronghold and my sure defense, *"} />
<Line {indent} text={"and he will be my Savior."} />
<Line text={"Therefore you shall draw water with rejoicing *"} />
<Line {indent} text={"from the springs of salvation."} />
<Line text={"And on that day you shall say, *"} />
<Line {indent} text={"Give thanks to the Lord and call upon his Name;"} />
<Line text={"Make his deeds known among the peoples; *"} />
<Line {indent} text={"see that they remember that his Name is exalted."} />
<Line text={"Sing the praises of the Lord, for he has done great things, *"} />
<Line {indent} text={"and this is known in all the world."} />
<Line text={"Cry aloud, inhabitants of Zion, ring out your joy, *"} />
<Line {indent} text={"for the great one in the midst of you is the Holy One of Israel."} />
<Gloria /> 
<Reference text={"isaiah 12:2-6"} />
</div>
{/if}

<button on:click={e => nine = !nine}>
<Line {center}              text={"9"} />
<Line {center} {smallcaps}  text={"deus misereatur"} />
<Line {center} {italic}     text={"God be merciful"} />
<Rubric text={"Suitable for use at any time"} />
</button>
{#if nine}
<div>
<Line text={"May God be merciful unto us, and bless us, *"} />
<Line {indent} text={"and show us the light of his countenance, and be merciful unto us."} />
<Line text={"Let your way be known upon earth, *"} />
<Line {indent} text={"your saving health among all nations."} />
<Line text={"Let the peoples praise you, O God; *"} />
<Line {indent} text={"indeed, let all the peoples praise you."} />
<Line text={"O let the nations rejoice and be glad, *"} />
<Line {indent} text={"for you shall judge the peoples righteously, and govern the nations upon earth."} />
<Line text={"Let the peoples praise you, O God; *"} />
<Line {indent} text={"let all the peoples praise you."} />
<Line text={"Then shall the earth bring forth her increase, *"} />
<Line {indent} text={"and God, even our own God, shall give us his blessing."} />
<Line text={"God shall bless us, *"} />
<Line {indent} text={"and all the ends of the world shall fear him. "} />
<Reference text={"psalm 67"} />
</div>
{/if}

<button on:click={e => ten = !ten} >
<Line {center}              text={"10"} />
<Line {center} {smallcaps}  text={"benedicite, omnia opera domini"} />
<Line {center} {italic}     text={"A Song of Creation"} />
<Rubric text={"Especially suitable for use on Saturday"} />
</button>
{#if ten }
<div>
<SectionTitle text={"invocation"} />
<Line text={"Glorify the Lord, all you works of the Lord, *"} />
<Line {indent} text={"praise him and highly exalt him for ever."} />
<Line text={"In the firmament of his power, glorify the Lord, *"} />
<Line {indent} text={"praise him and highly exalt him for ever."} />
<SectionTitle text={"i. the cosmic order"} />
<Line text={"Glorify the Lord, you angels and all powers of the Lord, *"} />
<Line {indent} text={"O heavens and all waters above the heavens."} />
<Line text={"Sun and moon and stars of the sky, glorify the Lord, *"} />
<Line {indent} text={"praise him and highly exalt him for ever."} />
<Line text={"Glorify the Lord, every shower of rain and fall of dew, *"} />
<Line {indent} text={"all winds and fire and heat,"} />
<Line text={"Winter and summer, glorify the Lord, *"} />
<Line {indent} text={"praise him and highly exalt him for ever."} />
<Line text={"Glorify the Lord, O chill and cold, *"} />
<Line {indent} text={"drops of dew and flakes of snow."} />
<Line text={"Frost and cold, ice and sleet, glorify the Lord, *"} />
<Line {indent} text={"praise him and highly exalt him for ever."} />
<Line text={"Glorify the Lord, O nights and days, *"} />
<Line {indent} text={"O shining light and enfolding dark."} />
<Line text={"Storm clouds and thunderbolts, glorify the Lord, *"} />
<Line {indent} text={"praise him and highly exalt him for ever."} />
<SectionTitle text={"ii. the earth and its creatures"} />
<Line text={"Let the earth glorify the Lord, *"} />
<Line {indent} text={"praise him and highly exalt him for ever."} />
<Line text={"Glorify the Lord, O mountains and hills,"} />
<Line text={"and all that grows upon the earth, *"} />
<Line {indent} text={"praise him and highly exalt him for ever."} />
<Line text={"Glorify the Lord, O springs of water, seas, and streams, *"} />
<Line {indent} text={"O whales and all that move in the waters."} />
<Line text={"All birds of the air, glorify the Lord, *"} />
<Line {indent} text={"praise him and highly exalt him for ever."} />
<Line text={"Glorify the Lord, O beasts of the wild, *"} />
<Line {indent} text={"and all you flocks and herds."} />
<Line text={"O men and women everywhere, glorify the Lord, *"} />
<Line {indent} text={"praise him and highly exalt him for ever."} />
<SectionTitle text={"iii. the people of god"} />
<Line text={"Let the people of God glorify the Lord, *"} />
<Line {indent} text={"praise him and highly exalt him for ever."} />
<Line text={"Glorify the Lord, O priests and servants of the Lord, *"} />
<Line {indent} text={"praise him and highly exalt him for ever."} />
<Line text={"Glorify the Lord, O spirits and souls of the righteous, *"} />
<Line {indent} text={"praise him and highly exalt him for ever."} />
<Line text={"You that are holy and humble of heart, glorify the Lord, *"} />
<Line {indent} text={"praise him and highly exalt him for ever."} />
<SectionTitle text={"doxology"} />
<Line text={"Let us glorify the Lord: the Father, the Son and the Holy Spirit; *"} />
<Line {indent} text={"praise him and highly exalt him for ever."} />
<Line text={"In the firmament of his power, glorify the Lord, *"} />
<Line {indent} text={"praise him and highly exalt him for ever."} />
<Reference text={"song of the three young men, 35-65"} />
</div>
{/if}