// Eucharistic lesson store

import { writable, derived, get } from 'svelte/store';
import { litDay } from './litDay.js';
import PouchDB from 'pouchdb';
import PouchDBFind from 'pouchdb-find';
PouchDB.plugin(PouchDBFind);

import axios from 'axios'; // for http requests
axios.defaults.headers.common['Authorization'] = "Token 77f1ef822a19e06867cf335a168713f9d2159bfc";
//const BibleRef = require( "bible_ref.js" );
import {BibleRef} from './bible_ref.js';


function createEucharistDB() {
    let iphod = new PouchDB('Iphod')
    ,   iphodRemote = new PouchDB('https://bcp2019.com/couchdb/iphod')
    ;

    const {subscribe, set, update} = writable( initEuchDB() )
    return {
        subscribe
    ,   readings: (ld = false) => {
            var ld = ld ? ld : get(litDay);
            iphodRemote.get(ld.euKey)
            .then( resp => { 
                update( l => {
                    l = resp;
                    return l;
                })
            })
            .catch( err => { console.log("Error reading lectionary:", err)})

        }
    }
}

// Note to programemr: ALWAYS initialize your stores!
// if you don't - you are likely to throw an "undefined error" 
function initEuchDB() {
    return  { ot: []
            , nt: []
            , gs: []
            , ps: []
            , id: ""
            , _rev: ""
            , title: ""
            , colors: []
            }

}

export const eucharistDB = createEucharistDB();
// export const lectionaryDB = createDailyLectionaryDB();