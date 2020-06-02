<!-- CollectForMission -->
<script>
    import { litDay } from './litDay.js';
    //import "smelte/src/tailwind.css" ;
    //import {Button} from 'smelte';
    import Rubric from './Rubric.svelte';

    
    let whichOne = $litDay.doy % 3;
    let mpcm = [
          "Almighty and everlasting God, who alone works great marvels: Send down upon our clergy and the congregations committed to their charge the life-giving Spirit of your grace, shower them with the continual dew of your blessing, and ignite in them a zealous love of your Gospel; through Jesus Christ our Lord. Amen."
        , "O God, you have made of one blood all the peoples of the earth, and sent your blessed Son to preach peace to those who are far off and to those who are near: Grant that people everywhere may seek after you and find you; bring the nations into your fold; pour out your Spirit upon all flesh; and hasten the coming of your kingdom; through Jesus Christ our Lord. Amen."
        , "Lord Jesus Christ, you stretched out your arms of love on the hard wood of the Cross that everyone might come within the reach of your saving embrace: So clothe us in your Spirit that we, reaching forth our hands in love, may bring those who do not know you to the knowledge and love of you; for the honor of your Name. Amen."
    ]
    let epcm = [
          "O God and Father of all, whom the whole heavens adore: Let the whole earth also worship you, all nations obey you, all tongues confess and bless you, and men, women, and children everywhere love you and serve you in peace; through Jesus Christ our Lord. *Amen*."
        , "Keep watch, dear Lord, with those who work, or watch, or weep this night, and give your angels charge over those who sleep. Tend the sick, Lord Christ; give rest to the weary, bless the dying, soothe the suffering, pity the afflicted, shield the joyous; and all for your love’s sake. *Amen*."
        , "O God, you manifest in your servants the signs of your presence: Send forth upon us the Spirit of love, that in companionship with one another your abounding grace may increase among us; through Jesus Christ our Lord. *Amen*."
    ]
    let cm = ($litDay.service === "mp") ? mpcm : epcm

</script>

<h3>Prayer For Mission</h3>
<div>
    <button on:click={e => whichOne = 0} >First</button>
    <button on:click={e => whichOne = 1} >Second</button>
    <button on:click={e => whichOne = 2} >Third</button>
</div>
<div>
    <p>{cm[whichOne]}</p>
</div>