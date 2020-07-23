// canticle store

import { writable, derived, get } from 'svelte/store';
import { litDay } from './litDay.js';
import { getFromDB, getAllDocsFromDB } from './dbHelpers.js';
import PouchDB from 'pouchdb';
import PouchDBFind from 'pouchdb-find';
PouchDB.plugin(PouchDBFind);

let Canticles = 'Canticles';
function createCanticleDB() {
    const {subscribe, set, update} = writable( 
        {1: initCanticle(), 2: initCanticle(), named: initCanticle() } )
    return {
        subscribe
    ,   forLesson: lzn => {
            var ld = get(litDay);
            var key1 = ld.service + lzn + "_" + ld.season + "_" + ld.dow;
            var key2 = ld.service + lzn + "_" + ld.dow;
            var thisCanticle = canticle(key1) ? canticle(key1) : canticle(key2);
            retrieveCanticle(thisCanticle, lzn, update)
        }
    ,   byName: name =>{
        retrieveCanticle(name, 'named', update)
        }
    ,   initAll: () => {
            getAllDocsFromDB(Canticles)
            .then( resp => {
                console.log("CANTICLE RESP: ", resp)
            })
            .catch( err => { console.log(err) });
        }
    }
}

function retrieveCanticle(name, saveHere, callback) {
    getFromDB(name, Canticles)
    .then( resp => {
        callback(c => {
            // split apart the text, 
            // set indent true unless the ends with '*', '|', or '/'
            resp.text = resp.text
            .split("\n")
            .map(l => {
                var lc = l.trim().slice(-1); // ls => last character
                if ( "*|\/".indexOf(lc) < 0 ) return {indent: false, text: l}
                return {indent: true, text: l}
            });
        c[saveHere] = resp;
        return c;
        }) //end of update call
    })
    .catch(err => {
        console.log("Error getting canticle named ", name, " because: ", err)
    })
}

// this keeps app from error out before canticles return from DB
function initCanticle() {
    return {
          _id: ""
        , _rev: ""
        , name: ""
        , title: ""
        , notes: ""
        , number: ""
        , reference: ""
        , text: []
    }
}

// FYI SUN:0, M:1, TU:2, WE:3, TH:4, FR:5, SAT:6
function canticle(key) {
  return { 
     mp1_advent_0: "surge_illuminare"
   , mp1_easter_0: "cantate_domino"
   , mp1_easter_4: "cantate_domino"
   , mp1_easter_5: "cantemu_domino" // song of moses (horse and rider)
   , mp1_easterWeek_5: "te_deum"
   , mp1_lent_0: "kyrie_pantokrator"
   , mp1_lent_3: "kyrie_pantokrator"
   , mp1_lent_5: "kyrie_pantokrator"
   , mp1_ashWednesday_0: "kyrie_pantokrator"
   , mp1_ashWednesday_3: "kyrie_pantokrator"
   , mp1_ashWednesday_5: "kyrie_pantokrator"
   , mp2_advent_0: "benedictus"
   , mp2_advent_4: "magna_et_mirabilia"
   , mp2_lent_0: "benedictus"
   , mp2_lent_5: "benedictus"
   , mp2_ashWednesday_0: "benedictus"
   , mp2_ashWednesday_5: "benedictus"
   , mp2_ashWednesday_2: "deus_misereatur"
   , mp2_lent_2: "deus_misereatur"
   , mp2_lent_4: "magna_et_mirabilia"
   , mp2_ashWednesday_4: "magna_et_mirabilia"
   , mp1_0: "benedictus"
   , mp1_1: "ecce_deus"
   , mp1_2: "benedictus_es_domine"
   , mp1_3: "surge_illuminare"
   , mp1_4: "deus_misereatur"
   , mp1_5: "quaerite_dominum"
   , mp1_6: "benedicite_omnia_opera_domini"
   , mp2_0: "te_deum_laudamus"
   , mp2_1: "magna_et_mirabilia"
   , mp2_2: "dignus_es"
   , mp2_3: "benedictus"
   , mp2_4: "gloria_in_excelsis"
   , mp2_5: "dignus_es"
   , mp2_6: "magna_et_mirabilia"
   , ep1_0: "magnificat"
   , ep1_1: "magnificat"
   , ep1_2: "magnificat"
   , ep1_3: "magnificat"
   , ep1_4: "magnificat"
   , ep1_5: "magnificat"
   , ep1_6: "magnificat"
   , ep2_0: "nunc_dimittis"
   , ep2_1: "nunc_dimittis"
   , ep2_2: "nunc_dimittis"
   , ep2_3: "nunc_dimittis"
   , ep2_4: "nunc_dimittis"
   , ep2_5: "nunc_dimittis"
   , ep2_6: "nunc_dimittis"
  }[key]
}

export const canticleDB = createCanticleDB();
// export const lectionaryDB = createDailyLectionaryDB();