// lesson store

import { writable, derived, get } from 'svelte/store';
import { litDay } from './litDay.js';
import { getFromDB } from './dbHelpers.js';
import { dailyPsalms, dailyPsalms60Day } from './daily_psalms.js';

import axios from 'axios'; // for http requests
axios.defaults.headers.common['Authorization'] = "Token 77f1ef822a19e06867cf335a168713f9d2159bfc";
//const BibleRef = require( "bible_ref.js" );
import {BibleRef} from './bible_ref.js';


function createLessonDB() {

    const {subscribe, set, update} = writable( initLessonDB() )
    return {
        subscribe
    ,   init: () => initLessonDB()
    ,   get: (lesson, service = false) => {
            var ld = get(litDay);
            var lessonKey = service ? service + lesson : ld.service + lesson;
            getFromDB(ld.mpep, 'Lectionary')
            .then( resp => { 
                var queryKeys = resp[lessonKey].map( k => {return k.read})
                var allPromises = [];
                //resp[lessonKey].map( k => {return k.read;})
                queryKeys.forEach( (q, i) => {
                    allPromises.push( axios.get('https://api.esv.org/v3/passage/html?q=' + q + ";include-audio-link=false"))
                })
                Promise.all(allPromises)
                .then( resps =>{
                    let tmp = resps
                        .map( (resp, i) => { return {text: resp.data.passages, query: queryKeys[i]}})
                    update( l => {
                        l[lesson] = tmp;
                        return l;
                        });
                })
        })

        }
    ,   readings: (ld) => {
            //var lessonKey = ld.service + lesson;
            getFromDB(ld.mpep, 'Lectionary')
            .then( resp => { 
                update( l => { 
                    l.readings = resp
                    return l;
                });
            })
            .catch( err => { console.log("Error reading lectionary:", err)})
    }
    ,   copyToClipboard(ref, copy = "copy") {
            let opts = ";include-audio-link=false;include-footnotes=false;include-verse-numbers=false"; 
            axios.get('https://api.esv.org/v3/passage/text?q=' + ref.read + opts)
            .then( r => {
                // let txtObj = JSON.parse(r);
                let s = r.data.passages.join('/n');
                navigator.clipboard.writeText(s);
        })
    }
    ,   copyAllToClipboard(ld, service) {
            var allPromises = [];
            var assignedPsalms = dailyPsalms[ld.dom][service];
            assignedPsalms.forEach( ([p, f, t]) => {
                // this gets the psalms, but not the readings
                allPromises.push( getFromDB('acna' + p.toString(), 'Psalms') );
            })

            lectionaryRemote.get(ld.mpep)
            .then( resp => {
                let queryKeys = resp[service + '1'].map( k => {return k.read} )
                    .concat( resp[service + '2'].map( k => {return k.read} ) );
                let opts = ";include-audio-link=false;include-footnotes=false;include-verse-numbers=false"; 
                queryKeys.forEach( q => {
                    // this gets the readings, but not the psalms
                    allPromises.push( axios.get('https://api.esv.org/v3/passage/text?q=' + q + opts))
                })
                return allPromises;
            })
            .then( ap => { return Promise.all(ap); })
            .then( resps => {
                    let s = "";
                    resps.forEach( (r, i) => {
                        // r.header === undef means r is a psalm
                        // psalms come first, same order as assignedPsalms
                        if ( assignedPsalms[i] ) {
                            let [p, f, t] = assignedPsalms[i];
                            t = isNaN(t) ? 999 : t;
                            s += r.name + '\n' + r.title + '\n';
                            for( i = f; i <= t; i++) {
                                if( !r[i]) break;
                                r[i].first = r[i].first.replace('&#42;', '*');
                                s += i.toString() + ' ' + r[i].first + '\n    ' + r[i].second + '\n';
                            }
                            s += '\n';
                        }
                        else { // r is from ESV api
                            s += r.data.passages.join('/n');
                            s += '\n';
                        }
                    })

                    // let tmp = resps
                    //    .map( (resp, i) => {return {text: resp.data.passages, query: queryKeys[i]}})
                    navigator.clipboard.writeText(s);
            })
            .catch( err => { console.log("Error clipboard reading lectionary:", err)})
    }
    }
}

// Note to programemr: ALWAYS initialize your stores!
// if you don't - you are likely to throw an "undefined error" 
function initLessonDB() {
    return  { 1: []
            , 2: []
            , readings: { mp1: []
                        , mp2: []
                        , ep1: []
                        , ep2: []
                        } 
            }

}

export const lessonDB = createLessonDB();
// export const lectionaryDB = createDailyLectionaryDB();