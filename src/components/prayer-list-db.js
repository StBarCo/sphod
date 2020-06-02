// canticle store

import { writable, derived, get } from 'svelte/store';
import { litDay } from './litDay.js';
import PouchDB from 'pouchdb';
import PouchDBFind from 'pouchdb-find';
PouchDB.plugin(PouchDBFind);

function createPrayerListDB() {
    const {subscribe, set, update} = writable( initPrayerList() )
    return {
        subscribe
    ,   init: () => {
            let db = new PouchDB('PrayerList');
            db.allDocs({ include_docs: false });
            .then( resp => {
                console.log("CANTICLE RESP: ", resp)
                // handle result
            })
            .catch( err => {
                console.log(err);
                });
        }
    ,   add: (args) => {
            // do something smart
    }

    }
}

// this keeps app from error out before canticles return from DB
function initPrayerList() {
    return []
}

// FYI SUN:0, M:1, TU:2, WE:3, TH:4, FR:5, SAT:6

export const prayerListDB = createPrayerListDB();
// export const lectionaryDB = createDailyLectionaryDB();