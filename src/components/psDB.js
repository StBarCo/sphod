// psDB store

import { writable, derived, get } from 'svelte/store';
import { litDay } from './litDay.js';
import PouchDB from 'pouchdb';
import PouchDBFind from 'pouchdb-find';
PouchDB.plugin(PouchDBFind);
import { dailyPsalms, dailyPsalms60Day } from './daily_psalms.js';

function createPsDB() {
    let psalms = new PouchDB('Psalms')
    ,   psalmsRemote = new PouchDB('https://bcp2019.com/couchdb/psalms')
    ;

    const {subscribe, set, update} = writable( new Array() )
    return {
        subscribe
    ,   get: (ps, ld = false) => {
            // it could be an empty list: don't do anything
            // in this context a psalm is a list of 3 integers...
            // [psalm number, beginning vs, ending vs]
            // ps could be a list of psalm: get them
            // ps could be falsy: get the psalms for mp/ep
            if (ps.length === 0) return;
            ld = ld ? ld : get(litDay);
            var assignedPsalms = ps ? ps : dailyPsalms[ld.dom][ld.service];
            var allPromises = [];
            assignedPsalms.forEach( ([p, f, t]) => {
                allPromises.push( psalmsRemote.get('acna' + p.toString()));
            })
            Promise.all(allPromises)
            .then( resp => { 
                var pss = [];
                resp.forEach( (r, i) =>{
                    var [p, f, t] = assignedPsalms[i];
                    t = isNaN(t) ? 999 : t;
                    var obj = {_id: r._id, name: r.name, title: r.title, vss: []}
                    for (let j = f; j <= t; j++) {
                        if (!r[j]) break;
                        r[j].first = r[j].first.replace('&#42;', '*');
                        obj.vss.push({vs: j, ln: r[j]})
                    }
                    pss.push(obj);
                })
                set(pss) })
            .catch( err => { console.log("Getting psalms error: ", err)})
    }
    ,   list: (ld) => {
            ld = ld ? ld : get(litDay);
            let assignedPsalms = dailyPsalms[ld.dom][ld.service];
            return assignedPsalms.map( ([p, f, t]) => {
                return "Psalm " + p + ":" + f + "-" + ((t === 999) ? "end" : t);
            })

    }
    }
}
export const psDB = createPsDB();
// export const lectionaryDB = createDailyLectionaryDB();