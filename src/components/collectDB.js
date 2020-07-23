// collectDB.js
import { writable, derived, get } from 'svelte/store';
import { litDay } from './litDay.js';
import { getFromDB } from './dbHelpers.js';

function createCollectDB() {
    const {subscribe, set, update} = writable( 
        { day: init()
        , week: init()
        , grace: init()
        , MPpeace: init()
        , EPpeace: init()
        , perils: init()
        } )
    return {
        subscribe
    ,   get: (ofType) => { // week, day, MPpeace, EPpeace, perils, grace
            var ld = get(litDay);
            var key = false;
            switch(ofType) {
                case "week":
                    key = "collect_" + ld.season + ld.week
                    break;
                case "day":
                    key = "collect_" + nameOfDay(ld.dow) + ld.service
                    break;
                case "MPpeace":
                    if (ld.dow != 2) key = "collect_tuesday_mp";
                    break;
                case "grace":
                    if (ld.dow != 3) key = "collect_wednesday_mp";
                    break;
                case "EPpeace":
                    if (ld.dow != 2) key = "collect_monday_ep";
                    break;
                case "perils":
                    if (ld.dow != 2) key = "collect_tuesday_ep";
                    break;
                }
            if (!key) {
                update( c => {
                    c[ofType] = init();
                    return c;
                })
            }
            else {
                getFromDB(key, 'Collects')
                    .then( resp => {
                        update( c => {
                            c[ofType] = resp;
                            return c;
                        })
                    })
                    .catch( err => { console.log("Failed to get Collect ", key, " because ", err) });
            }
        }
    }
}
function init() {
    return {
            _id: ""
        ,   _rev: ""
        ,   title: ""
        ,   text: []
        ,   preface: ""
    }
}

function nameOfDay(n) {
    var names = [
            "sunday_"
        ,   "monday_"
        ,   "tuesday_"
        ,   "wednesday_"
        ,   "thursday_"
        ,   "friday_"
        ,   "saturday_"
    ]
    return names[n];
}

export const collectDB = createCollectDB()
