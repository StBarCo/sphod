<!-- Psalms -->
<script>
      // 
      export let ps = false, ld = false;
      import Line from './Line.svelte';
      import PlayAudio from './PlayAudio.svelte';
      import { psDB } from './psDB.js';
      
      psDB.get(ps, ld);

      const indent = true;
</script>

<div>
      {#each $psDB as ps}
            {ps.name}  {ps.title}
            <PlayAudio src={ps._id} />
           {#each ps.vss as v}
                  <Line text={v.vs + ". " + v.ln.first} />
                  <Line {indent} text={v.ln.second} />
            {/each}
      {/each}
</div>
