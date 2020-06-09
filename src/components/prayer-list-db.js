// canticle store

import { writable } from 'svelte/store';
import { litDay } from './litDay.js';
import PouchDB from 'pouchdb';
import PouchDBFind from 'pouchdb-find';
PouchDB.plugin(PouchDBFind);

function createPrayerListDB() {
    const {subscribe, set, update} = writable( initPrayerList() )
    const db = new PouchDB('PrayerList');
    return {
        subscribe
    ,   init: () => {
            db.allDocs({ include_docs: true })
            .then( resp => {
                console.log("PRAYER LIST RESP: ", resp)
                update ( p => {return p = resp});
            })
            .catch( err => {
                console.log(err);
                });
        }
    ,   add: (prayerObj) => {
            console.log("SAVE THIS: ", prayerObj )
            db.put(prayerObj, (err, result) => {
                if (!err) {
                    console.log("SUCCESS!: ", result)
                }
                else {
                    console.log("FAILURE: ", err, result)
                }
            })// do something smart
    }
    ,   update: (prayerObj) => {
            db.put(prayerObj);
            update( p => {
                p.rows.forEach( r => {
                    if ( r.id === prayerObj.id) { r = prayerObj; }
                    return r;
                })
                return p;
            })
    }
    ,   remove: (prayerObj) => {
            db.remove(prayerObj)
            .then( resp => {
                console.log("REMOVE: ", resp)
                update( p => { return p.rows.filter( r => r.id != prayerObj.id )} );
            })
            .catch( err => {
                console.log("FAILED TO REMOVE ", prayerObj, " Err: ", err)
            });
    }

    }
}

// this keeps app from error out before canticles return from DB
function initPrayerList() {
    return {total_rows: 0, offset: 0, rows: []};
}

// FYI SUN:0, M:1, TU:2, WE:3, TH:4, FR:5, SAT:6

export const prayerListDB = createPrayerListDB();
// export const lectionaryDB = createDailyLectionaryDB();