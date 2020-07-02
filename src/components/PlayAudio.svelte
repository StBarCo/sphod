<!-- PlayAudio -->
<script>
	export let src;

	let volume = 1;
	let srcPath = "./audio/" + src + ".mp3";
</script>

<style>
    p {
        margin: 0;
        padding: 0;
    }

</style>

<p>
    <audio src='{srcPath}' controls bind:volume>
        {srcPath} not available
    </audio>
</p>