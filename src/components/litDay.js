// LitDay store

const   christmasDOY = 300
    ,   newyearsDOY = 307
    ,   dec31DOY = 306
    ,   epiphanyDOY = 312
    ,   proper1DOY = 68 // may 8
// easter offsets
    ,   ashWednesdayOffset = -46
    ,   palmSundayOffset = -7
    ,   ascensionOffset = 39
    ,   pentecostOffset = 49
    ,   trinityOffset = 56
    ;



import { writable } from 'svelte/store';
import getDayOfYear from 'date-fns/getDayOfYear';
import isLeapYear from 'date-fns/isLeapYear';
import format from 'date-fns/format'
import { RedLetterDay } from './red_letter_days.js';
/*
    About LitDay: for ease of computation, the first day of the year is March 1
    this means the last day of the year is always the last day of February
    and all the fixed dates are always on the same day of the year
    e.g. Dec 25 is always day 300 (and not 301 during leap year)
    
    @christmas 300
    @newyears 307
    @epiphany 312
    # @beforeMar1 365 
    
    # easter offsets
    @ashWednesday -45
    @palmSunday -7
    @ascension 39
    @pentecost 49
    # @trinity 56

*/

function createLitDay() {
    const {subscribe, set, update} = writable( new Object() );
    var ld = innerInit(new Date);
    return {
        subscribe
    ,   init: (service) => {
            let ld = innerInit(new Date);
            service = service ? service : ""
            set( 
                Object.assign(
                    ld, 
                    getSeason(ld),
                    {service: service} 
                ) 
            )
        }
    ,   getByDate: (d, service = undefined) => {
            var ld = innerInit(d);
            return set( Object.assign(ld, getSeason(ld), {service: service}))
        } 
    }
}

function innerInit(now) {
// var now = new Date;
var yr = now.getFullYear();
var doy = dateToLitDOY(now);
var dow = now.getDay();
var dom = now.getDate();
var mon = now.getMonth();
var advent1 = advent1DOY(yr);
// return "mpep" + moment_date.format("MMDD");
return {
      doy: doy // integer, Day of liturgical year, mar 1 = 1
    , dow: dow // integer, Day of week, Sunday = 0
    , dom: dom // integer, Day of month (1 - 31)
    , mon: mon // january is 0
    , mpep: 'mpep' + format(now, 'MMdd')
    , year: yr // integer,
    , easter: easterDOY(yr) // integer,
    , advent1: advent1 // integer,
    , leap: isLeapYear(now) // integer,
    , sunday: doy - dow // integer,
    , isSunday: dow === 0 // bool,
    , nextSunday: (doy - dow) + 7 // integer,
    , now: now // date
    , season: "" // gets filled in
    , week: 0 // integer,
    , litYear: litYearName(advent1, doy, yr) // a, b, c
    , colors: undefined // list of strings
    , className: 'litDay'
    }
}

function easter (year) {
    var a = year % 19
      , b = Math.floor(year / 100)
      , c = year % 100
      , d = Math.floor(b / 4)
      , e = b % 4
      , f = Math.floor((b + 8) / 25)
      , g = Math.floor((b - f + 1) / 3)
      , h = (19 * a + b - d - g + 15) % 30
      , i = Math.floor(c / 4)
      , k = c % 4
      , l = (32 + 2 * e + 2 * i - h - k) % 7
      , m = Math.floor((a + 11 * h + 22 * l) / 451)
      , n0 = (h + l + 7 * m + 114)
      , n = Math.floor(n0 / 31) - 1
      , p = n0 % 31 + 1
      , date = new Date(year, n, p);
    return date;
  }

function easterDOY(y) {
    return dateToLitDOY( easter(y) );
}

function palmSundayDOY( ly ) {
    return ly.easter + palmSundayOffset;
}

function ascensionDOY( ly ) {
    return ly.easter + ascensionOffset;
}

function pentecostDOY( ly ){
    return ly.easter + pentecostOffset
}

function trinityDOY( ly ){
    return ly.easter + trinityOffset
}


function doyToLitDOY(d, leap) {
    var lpz = leap ? 1 : 0
      , mar1 = 60 + lpz
      , dz = 365 + lpz
      ;
    d -= mar1;
    return (d < 1) ? d + dz : d;
}

function dateToLitDOY(d) {
    return doyToLitDOY( getDayOfYear(d), isLeapYear(d) );
}

function ashWednesdayDOY(ld) {
    var doy = ld.easter + ashWednesdayOffset;
    if (doy < 1) { doy += (ld.leap) ? 366 : 365}
    return doy;
}

function advent1DOY( yr ) {
    var xday = new Date(yr, 12, 25)
      , dow = xday.getDay()
      , offset = (dow === 0) ? 28 : 21
      ;
    return christmasDOY - offset;
}

function lastSundayDOY(doy, dow, leap) {
    var d = doy - dow;
    if ( d < 1) { d += (leap) ? 366 : 365;  }
    return d;
}

function daysToWeeks(n) {
    return Math.floor( n / 7 ) + 1;
}

function litDOYtoMonDay( doy ) {
    // n.b. Day of Year (DOY) for litDay begins with 1 on Mar 1
    [ [1,	31,  2] //, # Mar
    , [32,	30,  3] //, # Apr
    , [63,	31,  4] //, # May
    , [93,	30,  5] //, # Jun
    , [123,	31,  6] //, # Jul
    , [154,	31,  7] //, # Aug
    , [185,	30,  8] //, # Sep
    , [215,	31,  9] //, # Oct
    , [246,	30, 10] //, # Nov
    , [276,	31, 11] //, # Dec
    , [307,	31,  0] //, # Jan
    , [338,	29,  1] //  # Feb - 29 to make sure leap year works
    ].forEach(e => {
        var [doMonth1, dInMonth, monthNumber]  = e;
          if (doy >= doMonth1 && doy < doMonth1 + dInMonth) {
              return [monthNumber, doy - doMonth1 + 1]
          }
      });
}

function litDOYtoDate(ld) {
    var yr = (ld.doy > dec31DOY) ? ld.year + 1 : ld.year;
    var [mon, day] = litDOYtoMonDay(ld.doy);
    return new Date(yr, mon, day);
}

function litYearName(advent1, doy, yr){
    // var names = ['c', 'a', 'b'];
    // var litYear = ((doy >= advent1) ? yr + 1 : yr) % 3;
    // return names[litYear];
    return ['c', 'a', 'b'][((doy >= advent1) ? yr + 1 : yr) % 3];
end

}

function getColors(season, ld) {
    var basicColors = {
          advent: ["purple"]
        , christmas: ["white", "gold"]
        , epiphany: ["green"]
        , lent: ["purple"]
        , holyWeek: ["purple"]
        , easter: ["white"]
        , ascension: ["white"]
        , pentecost: ["red"]
        , trinity: ["white"]
        , proper: ["green"]
    }
    // handle exceptions here
    switch( season ) {
        case "advent":
            if (ld.isSunday && ld.week === 3) return ["rose", "purple"];
            return basicColors[season];
        //case "christmas":
        case "epiphany":
            if (ld.week <= 2) return ["white", "gold"];
            return basicColors[season];
        case "lent":
            if (ld.isSunday && ld.week === 4) return ["rose", "purple"];
            return basicColors[season]
        case "holyWeek":
            if(ld.isSunday) return ["red", "purple"]; // Palm Sunday
            if(ld.dow === 4) return ["white"] ; // Maunday Thursday
            if(ld.dow === 5) return ["black", "purple"]; // Good Friday
            return basicColors[season]

        // case "easter":
        // case "pentecost":
        // case "trinity":

        default: 
            return basicColors[season];
    }
}

function dayBefore(n) { return n -1; }
function initSeason(id, w, c, y) { 
    return {season: id, week: w, colors: c, euKey: id + w +y}; 
}

function getSeason(ld) {
    var rld = RedLetterDay.getRLD(ld);
    if (rld.season) return rld;
    var d = undefined;
    switch(true) {
        case inRange( ld.doy, ld.advent1, dayBefore(christmasDOY)) : 
            return initSeason("advent", daysToWeeks(ld.doy - ld.advent1), getColors("advent", ld), ld.litYear );
        case inRange( ld.doy, christmasDOY, dayBefore(epiphanyDOY)) : 
            return initSeason("christmas", daysToWeeks(ld, christmasDOY), getColors("vhristmas", ld), ld.litYear );
        case inRange( ld.doy, epiphanyDOY, dayBefore(ashWednesdayDOY(ld))) : 
            return initSeason("epiphany", daysToWeeks(ld, epiphanyDOY), getColors("epiphany", ld), ld.litYear );
        case inRange( ld.doy, d = ashWednesdayDOY(ld), dayBefore(palmSundayDOY(ld))) : 
            return initSeason("lent", daysToWeeks(ld, d), getColors("lent", ld), ld.litYear );
        case inRange( ld.doy, d = palmSundayDOY(ld), dayBefore(ld.easter)) : 
            return initSeason("holyWeek", (ld.doy - d), getColors("holyWeek", ld), ld.litYear );
        case inRange( ld.doy, ascensionDOY(ld), ascensionDOY(ld) + 2) :
            return initSeason("ascension", 0, getColors("ascension", ld), ld.litYear );
        case inRange( ld.doy, ld.easter, dayBefore(pentecostDOY(ld))) : 
            return initSeason("easter", daysToWeeks(ld.doy - ld.easter), getColors("easter", ld), ld.litYear );
        case inRange( ld.doy, pentecostDOY(ld), pentecostDOY(ld) + 6) : 
            return initSeason("pentecost", 1, getColors("pentecost", ld), ld.litYear );
        case inRange( ld.doy, trinityDOY(ld), trinityDOY(ld) + 6) : 
            return initSeason("trinity", 1, getColors("trinity", ld), ld.litYear );
        default: 
            return initSeason("proper", calculateProper(ld), getColors("proper", ld), ld.litYear );
    }
}

function calculateProper(ld) {
    return Math.floor((ld.doy - proper1DOY) / 7) + 1;
}

function inRange(n, from, to) { 
    if (from > to) return (n >= from || n <= to); // spanning feb/mar
    return ( n >= from && n <= to ); 
}

export const litDay = createLitDay();

