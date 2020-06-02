<!-- MiddayScripture -->
<script>
    import Scripture from './Scripture.svelte';
    import Rubric from './Rubric.svelte';
    import WordOfTheLord from './WordOfTheLord.svelte';
</script>

<Rubric text={'One of the following, or some other suitable passage of Scripture, is read'} />

<Scripture 
    text={"Jesus said, “Now is the judgment of this world; now will the ruler of this world be cast out. And I, when I am lifted up from the earth, will draw all people to myself.”"}
    ref={"John 12:31-32"}
/>
<p>-----</p>
<Scripture
    text={"If anyone is in Christ, he is a new creation. The old has passed away; behold, the new has come. All this is from God, who through Christ reconciled us to himself and gave us the ministry of reconciliation."}
    ref={"2 Corinthians 5:17-18"}
/>
<p>-----</p>
<Scripture
    text={"From the rising of the sun to its setting my name will be great among the nations, and in every place incense will be offered to my name, and a pure offering. For my name will be great among the nations, says the Lord of Hosts."}
    ref={"Malachi 1:11"}
/>

<WordOfTheLord />