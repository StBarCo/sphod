// scriptureDB  store

import { writable, derived, get } from 'svelte/store';
import { litDay } from './litDay.js';
import PouchDB from 'pouchdb';
import PouchDBFind from 'pouchdb-find';
PouchDB.plugin(PouchDBFind);

import axios from 'axios'; // for http requests
axios.defaults.headers.common['Authorization'] = "Token 77f1ef822a19e06867cf335a168713f9d2159bfc";
//const BibleRef = require( "bible_ref.js" );
import {BibleRef} from './bible_ref.js';


function createScriptureDB() {
    let iphod = new PouchDB('Iphod')
    ,   iphodRemote = new PouchDB('https://bcp2019.com/couchdb/iphod')
    ;

    const {subscribe, set, update} = writable( initScriptureDB() )
    return {
        subscribe
    ,   init: () => set(initScriptureDB())
    ,   get: (ref = false, key = false) => {
            let isCached = undefined
             update( db => { isCached =  !!db[key] })
            if (!ref || !key) return;
            axios.get('https://api.esv.org/v3/passage/html?q=' + ref + ";include-audio-link=false")
            .then( resp => {
                update( refs => {
                    refs[key] = resp;
                    return  refs;
                })
            })
            .catch( err => { console.log("Coule not get Scripture:", err)})

        }
    }
}

// Note to programemr: ALWAYS initialize your stores!
// if you don't - you are likely to throw an "undefined error" 
function initScriptureDB() {
    return  {};

}

export const scriptureDB = createScriptureDB();
// export const lectionaryDB = createDailyLectionaryDB();