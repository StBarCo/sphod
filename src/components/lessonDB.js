// lesson store

import { writable, derived, get } from 'svelte/store';
import { litDay } from './litDay.js';
import PouchDB from 'pouchdb';
import PouchDBFind from 'pouchdb-find';
PouchDB.plugin(PouchDBFind);

import axios from 'axios'; // for http requests
axios.defaults.headers.common['Authorization'] = "Token 77f1ef822a19e06867cf335a168713f9d2159bfc";
//const BibleRef = require( "bible_ref.js" );
import {BibleRef} from './bible_ref.js';


function createLessonDB() {
    let psalms = new PouchDB('Psalms')
    ,   lectionaryRemote = new PouchDB('https://bcp2019.com/couchdb/lectionary')
    ;

    const {subscribe, set, update} = writable( initLessonDB() )
    return {
        subscribe
    ,   init: () => initLessonDB()
    ,   get: (lesson, service = false) => {
            var ld = get(litDay);
            var lessonKey = service ? service + lesson : ld.service + lesson;
            lectionaryRemote.get(ld.mpep)
            .then( resp => { 
                var queryKeys = resp[lessonKey].map( k => {return k.read})
                var allPromises = [];
                //resp[lessonKey].map( k => {return k.read;})
                queryKeys.forEach( (q, i) => {
                    allPromises.push( axios.get('https://api.esv.org/v3/passage/html?q=' + q + ";include-audio-link=false"))
                })
                console.log("QUERY KEYS:", queryKeys)
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
            .catch( err => { console.log("Error reading lectionary:", err)})

        }
    ,   readings: (ld) => {
            //var lessonKey = ld.service + lesson;
            lectionaryRemote.get(ld.mpep)
            .then( resp => { 
                console.log("LIST RESP: ", resp)
                update( l => { 
                    l.readings = resp
                    return l;
                });
            })
            .catch( err => { console.log("Error reading lectionary:", err)})
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

//function get_from_esv(dbs, office, lesson, lessonKeys, spa_location) {
//    var allPromises = [];
//    var qx = lessonKeys.map( function(k) { return k.read } );
//    qx.forEach( function(q, i) {
//      // allPromises.push( axios.get('https://api.esv.org/v3/passage/audio/?q=' + q ) )
//      // should redirect to...
//      // https://audio.esv.org/hw/q
//      allPromises.push( axios.get('https://api.esv.org/v3/passage/html/?q=' + q + ";include-audio-link=false") )
//    });
//    return Promise.all( allPromises )
//    .then( function(resp) {
//        var thisLesson = [];
//        // here's the problem - a request might have multiple parts,
//        // so we get multiple responses - it's possible, although HIGHLY
//        // unlikely for one response to succeed and another fail
//        // What to do in that case? Beats me.
//        // Here we will ASSUME if the first response succeeds they all succeed
//        // and if the first fails - they all fail.
//        // The frustrating thing in the ESV API is, if you ask for a bogus
//        // Biblical reference, the request will succeed and return no text
//        // .e.g. Blork 1:1-10 succeeds, but returns no text, canonical name
//        // With an invalid ref. the ESV API will return an empty reference
//        // per following test
//        if (resp[0].data.canonical.length > 0) {
//          resp.forEach( function(r, i){
//              // if r.data.passages.length == 0 ESV API returned no text
//              // probably apacrophyal
//              var audio = "<audio controls src='https://audio.esv.org/hw/" + qx[i] + "'>Audio not available</audio>";
//              var vss = r.data.passages.join("<br />");
//              var insertIndex = vss.indexOf("</h2>") + 5
//              // I want the index of after the tag
//              if (insertIndex > 4) {
//                vss = vss.substring(0, insertIndex + 1) + audio + vss.substring(insertIndex)
//              }
//              thisLesson[i] =
//                { ref: r.data.canonical
//                , style: lessonKeys[i].style
//                , vss: [{ vss: vss }]
//                , query: qx[i]
//                }
//          })
//          receivedLesson.send( JSON.stringify(
//            { lesson: lesson
//            , content: thisLesson
//            , spa_location: spa_location
//            }
//          ) );
//        }
//        else {
//          get_from_scripture_db(dbs, office, lesson, lessonKeys, spa_location); }
//    })
//    .catch( function(err) {
//      console.log("ESV ERROR: ", err)
//      get_from_scripture_db(dbs, office, lesson, lessonKeys, spa_location);
//    })
//  }
//  
export const lessonDB = createLessonDB();
// export const lectionaryDB = createDailyLectionaryDB();