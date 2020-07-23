// canticle store

import { writable } from 'svelte/store';
import { litDay } from './litDay.js';
import { getFromDB, getAllDocsFromDB } from './dbHelpers.js';
function createPrayerListDB() {
    const {subscribe, set, update} = writable( initPrayerList() )
    return {
        subscribe
    ,   init: () => {
            getAllDocsFromDB( 'PrayerList', { include_docs: true, descending: true })
            .then( resp => {
                update ( p => {return p = resp});
            })
            .catch( err => {
                console.log(err);
                });
        }
    ,   add: (prayerObj) => {
            db.put(prayerObj, {include_docs: true}, (err, result) => {
                if (!err) {
                    db.get(result.id)
                    .then( resp => {
                        // conform newRow to existing rows
                        let newRow = {id: result.id, key: result.id, doc: prayerObj};
                        update( p => {
                            p.rows.unshift(newRow); // unshift add element to beginning of the array
                            p.total_rows += 1;
                            return p;
                        })
                    })
                }
                else {
                    console.log("FAILURE: ", err, result)
                }
            })// do something smart
    }
    ,   update: (prayerObj) => {
            db.put(prayerObj)
            .catch( err => {
                console.log("Failed to update Prayer List: ", err)
            })
    }
    ,   remove: (prayerObj) => {
            db.remove(prayerObj)
            .then( resp => {
                update( p => { 
                    p.rows = p.rows.filter( r => r.id != prayerObj._id );
                    p.total_rows -= 1;
                    return p;
                })
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

export const prayerListDB = createPrayerListDB();
// export const lectionaryDB = createDailyLectionaryDB();