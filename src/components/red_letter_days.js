// red_letter_days
const notRLD = {season: false, week: undefined, colors: undefined};
const redLetterDay = 
    { 324: {season: "confessionOfStPeter", week: undefined, colors: ["white"]}
    , 331: {season: "conversionOfStPaul", week: undefined, colors: ["white"]}
    , 339: {season: "presentation", week: undefined, colors: ["white"]}
    , 361: {season: "stMatthias", week: undefined, colors: ["red"]}
    , 19:  {season: "stJoseph", week: undefined, colors: ["white"]}
    , 25:  {season: "annunciation", week: undefined, colors: ["white"]}
    , 56:  {season: "stMark", week: undefined, colors: ["red"]}
    , 62:  {season: "stsPhilipAndJames", week: undefined, colors: ["red"]}
    , 92:  {season: "visitation", week: undefined, colors: ["blue"]}
    , 103: {season: "stBarnabas", week: undefined, colors: ["red"]}
    , 116: {season: "nativityOfJohnTheBaptist", week: undefined, colors: ["white"]}
    , 121: {season: "stPeterAndPaul", week: undefined, colors: ["red"]}
    , 123: {season: "dominion", week: undefined, colors: ["white"]}
    , 126: {season: "independence", week: undefined, colors: ["white"]}
    , 144: {season: "stMaryMagdalene", week: undefined, colors: ["white"]}
    , 147: {season: "stJames", week: undefined, colors: ["red"]}
    , 159: {season: "transfiguration", week: undefined, colors: ["white"]}
    , 168: {season: "bvm", week: undefined, colors: ["white"]}
    , 177: {season: "stBartholomew", week: undefined, colors: ["red"]}
    , 198: {season: "holyCross", week: undefined, colors: ["red"]}
    , 205: {season: "stMatthew", week: undefined, colors: ["red"]}
    , 213: {season: "michaelAllAngels", week: undefined, colors: ["white"]}
    , 232: {season: "stLuke", week: undefined, colors: ["red"]}
    , 237: {season: "stJamesOfJerusalem", week: undefined, colors: ["red"]}
    , 242: {season: "stsSimonAndJude", week: undefined, colors: ["red"]}
    , 256: {season: "remembrance", week: undefined, colors: ["white"]}
    , 275: {season: "stAndrew", week: undefined, colors: ["red"]}
    , 296: {season: "stThomas", week: undefined, colors: ["red"]}
    , 301: {season: "stStephen", week: undefined, colors: ["red"]}
    , 302: {season: "stJohn", week: undefined, colors: ["white"]}
    , 303: {season: "holyInnocents", week: undefined, colors: ["red"]}
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
        // NOW special case where last Sunday's RLD wneeds to be transferred
        var i = ld.sunday + 1;
        while( !!redLetterDay[i] ) { i += 1};
        // i is now the first free day for transferring an RLD
        // if i is today, today is the first available day to transfer; return the RLD
        if (i === ld.doy) return [true, rld];
        // if i isnt today, we've already displayed the RLD
        return notRLD;
    }

}    
