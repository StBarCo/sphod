// red_letter_days
const notRLD = {season: false, week: 0, colors: undefined};
const redLetterDay = 
    { 324: {season: "confessionOfStPeter", week: 0, colors: ["white"]}
    , 331: {season: "conversionOfStPaul", week: 0, colors: ["white"]}
    , 339: {season: "presentation", week: 0, colors: ["white"]}
    , 361: {season: "stMatthias", week: 0, colors: ["red"]}
    , 19:  {season: "stJoseph", week: 0, colors: ["white"]}
    , 25:  {season: "annunciation", week: 0, colors: ["white"]}
    , 56:  {season: "stMark", week: 0, colors: ["red"]}
    , 62:  {season: "stsPhilipAndJames", week: 0, colors: ["red"]}
    , 92:  {season: "visitation", week: 0, colors: ["blue"]}
    , 103: {season: "stBarnabas", week: 0, colors: ["red"]}
    , 116: {season: "nativityOfJohnTheBaptist", week: 0, colors: ["white"]}
    , 121: {season: "stPeterAndPaul", week: 0, colors: ["red"]}
    , 123: {season: "dominion", week: 0, colors: ["white"]}
    , 125: {season: "independence", week: 0, colors: ["white"]}
    , 144: {season: "stMaryMagdalene", week: 0, colors: ["white"]}
    , 147: {season: "stJames", week: 0, colors: ["red"]}
    , 159: {season: "transfiguration", week: 0, colors: ["white"]}
    , 168: {season: "bvm", week: 0, colors: ["white"]}
    , 177: {season: "stBartholomew", week: 0, colors: ["red"]}
    , 198: {season: "holyCross", week: 0, colors: ["red"]}
    , 205: {season: "stMatthew", week: 0, colors: ["red"]}
    , 213: {season: "michaelAllAngels", week: 0, colors: ["white"]}
    , 232: {season: "stLuke", week: 0, colors: ["red"]}
    , 237: {season: "stJamesOfJerusalem", week: 0, colors: ["red"]}
    , 242: {season: "stsSimonAndJude", week: 0, colors: ["red"]}
    , 256: {season: "remembrance", week: 0, colors: ["white"]}
    , 275: {season: "stAndrew", week: 0, colors: ["red"]}
    , 296: {season: "stThomas", week: 0, colors: ["red"]}
    , 301: {season: "stStephen", week: 0, colors: ["red"]}
    , 302: {season: "stJohn", week: 0, colors: ["white"]}
    , 303: {season: "holyInnocents", week: 0, colors: ["red"]}
    };

export const RedLetterDay = {
    getRLD: function(ld) {
        var isRLD = !!redLetterDay[ld.doy];
        var translateRLD = !(ld.season === 'epiphany' || ld.season === 'proper');

        if (ld.isSunday && translateRLD) return notRLD;
        // so far: it's ok to RLD even if sunday
        if (redLetterDay[ld.doy]) return redLetterDay[ld.doy];
        // so far: today isn't an RLD 
        // if it's sunday, we're done
        if (ld.isSunday) return notRLD;
        // so far: it's after sunday, not RLD, 
        // was last Sunday an RLD?
        var rld = redLetterDay[ld.sunday];
        // last Sunday not an RLD? We're done
        if (!rld) return notRLD;
        // so far, today is not sunday, not a RLD, 
        // and last Sunday was an RLD that needs to be transferred
        // NOW special case where last Sunday's RLD needs to be transferred
        var i = ld.sunday + 1;

        while( !!redLetterDay[i] ) { i += 1};
        // i is now the first free day for transferring an RLD
        // if i is today, today is the first available day to transfer; return the RLD
        if (i === ld.doy) return rld;
        // if i isnt today, we've already displayed the RLD
        return notRLD;
    }

}    
