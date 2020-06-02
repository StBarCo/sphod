// occasionsPrayers store

import { readable } from 'svelte/store';
import PouchDB from 'pouchdb';
import PouchDBFind from 'pouchdb-find';
PouchDB.plugin(PouchDBFind);


// this keeps app from error out before canticles return from DB
function initOPs() {
    return { categories: [], rows: [] };
}
function start(set) {
    let db = new PouchDB('https://bcp2019.com/couchdb/occasional_prayers');
    let ops = initOPs();
    db.allDocs({ include_docs: true })
    .then( resp => {                
        resp.rows.map( r => {
            switch( true ) {
                case r.id === "categories":
                    ops.categories = r.doc.list.split('\n');
                    break;
                case (r.id.substring(0,2) === 'op'):
                        ops.rows.push( r.doc )
                    break;
            }
        })
        set(ops); // set callback
        return function stop() {};
    })
    .catch( err => {
        console.log(err);
    });

}

export const occasionalPrayersDB = readable( initOPs(), set => start(set) );