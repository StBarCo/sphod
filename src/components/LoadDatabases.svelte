<!-- LoadDatabases -->
<script>
	import PouchDB from 'pouchdb';
	import { uniqueDBs } from './dbHelpers.js';

//	let dbs = [
//		  { local: 'Lectionary', remote: 'https://bcp2019.com/couchdb/lectionary'}
//		, { local: 'Canticles', remote: 'https://bcp2019.com/couchdb/canticles'}
//		, { local: 'Iphod', remote: 'https://bcp2019.com/couchdb/iphod'}
//		, { local: 'Psalms', remote: 'https://bcp2019.com/couchdb/psalms'}
//		, { local: 'OccasionalPrayers', remote: 'https://bcp2019.com/couchdb/occasional_prayers'}
//	];

	$: msg = "";
	$: pendingMsg = "";
	let pending = 0;

	function loadDatabases() {
		let uniq = uniqueDBs();
		let local = undefined;
		let remote = undefined;
		let dbLen = uniq.length - 1;
		msg = "Copying...<br>(This could take awhile)<br>"
		uniq.forEach( (db, i) => {
			local = new PouchDB(db.local);
			remote = db.remote ? new PouchDB(db.remote) : false;
			if (remote) {
				remote.replicate.to(local)
				.on('complete', () => {
					msg += db.local + " - Finished copying<br>";
					if (i === dbLen) { msg += "All Done"; }
				})
				.on('change', (info) => { 
					pendingMsg = db.local + " Updates Pending: " + info.pending;
					// console.log(info)
					// pending = info.pending; 
				})
			}
		})
	}

	function removeDatabases() {
		msg = "Removing...<br>"
		uniqueDBs().forEach( db => {
			new PouchDB(db.local).destroy()
			.then( () => {
				msg += db.local + " database destroyed<br>";
			})
			.catch( err => { console.log("Error destroying database: ", err) })
		})
	}

</script>

<style>
	
</style>

<p><button on:click={ () => loadDatabases() } >Load Databases</button><p>
<p><button on:click={ () => removeDatabases() } >Remove Databases</button></p>
{#if msg.length > 0}
<p>{@html msg}</p>
{/if}
{#if pendingMsg.length > 0} <p>{pendingMsg}</p> {/if}
