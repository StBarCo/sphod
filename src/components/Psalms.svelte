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
<style>
      span {
            font-style: italic;
            padding-left: 2em;
      }
      h3 {
            margin-top: 2em;
            font-weight: bold;
      }
</style>

<div>
      {#each $psDB as ps}
            <h3>{ps.name} <span>{ps.title ? ps.title : ""}</span></h3>
            <PlayAudio src={ps._id} />
           {#each ps.vss as v}
                  <Line text={v.vs + ". " + v.ln.first} />
                  <Line {indent} text={v.ln.second} />
            {/each}
      {/each}
</div>
