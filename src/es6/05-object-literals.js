// enahced object literals
function newUser(user, age, county, uID) {
  return {
    user,
    age,
    county,
    uID
  }
}

console.log(newUser('abcod', 23, 'GT', 1))