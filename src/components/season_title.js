// <!-- SeasonTitle 
//     convert from season code to human readable text
// -->

// export let season;
let sznz = {
      advent: "Advent"
    , christmas: "Christmas"
    , epiphany: "Epiphany"
    , lent: "Lent or Other Penitential Season"
    , holyweek: "Holy Week"
    , easter: "Easter"
    , ascension: "Ascension"
    , pentecost: "Pentecost"
    , trinity: "Trinity"
    , proper: "Season Following Pentecost"
}

export const seasonTitle = function(season) {
    return sznz[season] ? sznz[season] : season;
}