<!-- db -->
<script>
	import LoadDatabases from '../components/LoadDatabases.svelte';
</script>

<style>

</style>

<h1>Working Offline</h1>
<p>In order for the app to work offline you will have to do two things</p>
<ul>
	<li>Add the app to your device's home screen </li>
	<li>Add the databases to you device</li>
</ul>
<h2>Add to home screen</h2>
<ul>
	<li>iPhone/iPad
		<ul>
			<li>instructions goe here</li>
		</ul>
	</li>
	<li>Android devices
		<ul>
			<li>instructions go here</li>
		</ul>

	</li>
</ul>
<h2>Adding the Databases</h2>
<p>The databases will take up about 25Mb on your device and allow the app to work faster 
and off line or with poor connectivity.
</p>

<p>if the app is able to connect to the internet, it will use the ESV Bible
	for most readings. If you are offline or the ESV Bible is not available online
	(it happens), the app will use its backup translation - the World English Bible.
</p>
<LoadDatabases />