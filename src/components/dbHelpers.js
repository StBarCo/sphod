import PouchDB from 'pouchdb';
import PouchDBFind from 'pouchdb-find';
PouchDB.plugin(PouchDBFind);


let dbs = {
      Iphod: { local: 'Iphod', remote: 'https://bcp2019.com/couchdb/iphod', setup: false}
    , Eucharist: { local: 'Iphod', remote: 'https://bcp2019.com/couchdb/iphod', setup: false}
    , Collects: { local: 'Iphod', remote: 'https://bcp2019.com/couchdb/iphod', setup: false}
    , Lectionary: { local: 'Lectionary', remote: 'https://bcp2019.com/couchdb/lectionary', setup: false}
    , Canticles: { local: 'Canticles', remote: 'https://bcp2019.com/couchdb/canticles', setup: false}
    , Psalms: { local: 'Psalms', remote: 'https://bcp2019.com/couchdb/psalms', setup: false}
    , OccasionalPrayers: {local: 'OccasionalPrayers', remote: 'https://bcp2019.com/couchdb/occasional_prayers', setup: false}
    , PrayerList: {local: 'PrayerList', remote: false, setup: true}
};

export const uniqueDBs = () => {
    // return list of unique databases
    let localDBs = [... new Set(Object.values(dbs).map( e => {return e.local}))]
    let uniq = localDBs.map( dbName => {
            for( const k in dbs) {
                if (dbs[k].local === dbName) { return dbs[k];}
            }
        })
    return uniq;
}

export const getFromDB = (key, dbName, localOrRemote = 'local') => {

    let db = new PouchDB( dbs[dbName][localOrRemote], { skip_setup: dbs[dbName].setup});
    return new Promise( (resolve, reject) => {
        db.get(key)
        .then( resp => { resolve(resp) } )
        .catch( err => {
            if ( localOrRemote === 'local' && dbs[dbName].remote) { 
                getFromDB(key, dbName, 'remote');
            }
            else { console.log("Error getting from DB: " + dbName + " - " + err);
                    reject('err');
                 }
        })
    }) // end of promise
}

export const getAllDocsFromDB = (dbName, opts = {}, localOrRemote = 'local') => {
    let theseOpts = Object.assign({include_docs: true, attachments: true}, opts)
    let db = new PouchDB(dbs[dbName][localOrRemote], { skip_setup: dbs[dbName].setup } );
    return new Promise( (resolve, reject) => {
        db.allDocs( theseOpts )
        .then( resp => { resolve(resp) } )
        .catch( err => {
            if ( localOrRemote === 'local' && dbs[dbName].remote) { 
                getAllDocsFromDB(dbName, 'remote');
            }
            else { console.log("Error getting from DB: ", + dbName + " - " + err);
                    reject(err);
                 }
        })
    })
}

