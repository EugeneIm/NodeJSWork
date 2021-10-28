
function artistsFrom2020(artists) 
{
  let result = artists.filter(function(year)
  {
    if (year.year == 2020)
    {
      return true
    }
    else
    {
      return false
    }
  })
  return result
}

//Hello This is a commit

module.exports = artistsFrom2020
//console.log(artists)
const artists = [
  {
    song: "HOLIDAY",
    name: "Lil Nas X",
    year: 2020
  },
  {
    song: "WAP",
    name: "Cardi B",
    year: 2020
  },
  {
    song: "Say So",
    name: "Doja Cat",
    year: 2020
  },
  { 
    song: "Old Town Road",
    name: "Lil Nas X",
    year: 2019
  },
  {
    song: "Bad Guy",
    name: "Billie Eilish",
    year: 2019
  },
  {
    song: "God's Plan",
    name: "Drake",
    year: 2018
  }
]

console.log(artistsFrom2020(artists))

//const result = artists.filter(year => year.year = 2020)
//console.log(result)

// { 
//   song: 'Bad Guy', 
//   name: 'Billie Eilish', 
//   year: 2019 
// }



//Expected output: 
/*[
  {
    song: "HOLIDAY",
    name: "Lil Nas X",
    year: 2020
  },
  {
    song: "WAP",
    name: "Cardi B",
    year: 2020
  },
  {
    song: "Say So",
    name: "Doja Cat",
    year: 2020
  }
]
*/