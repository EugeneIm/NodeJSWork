const assert = require('assert').strict
const artistsFrom2020 = require('./01_artists_from_year')

const input = [{name: "a", year: 2020}, {name: "abc", year: 2020}, {name: "ab", year: 2019}]

describe("artistsFrom2020", () => {

  it("should return the artists from 2020", function() {
    const output = artistsFrom2020(input)
    assert.deepStrictEqual(output, [{name: "a", year: 2020}, {name: "abc", year: 2020}])    
  })

})

