exports.seed = function (knex) {
  return knex('users').insert([
    { username: "abc" , password: "1234"},
    { username:"cbd" , password: "1234"},
    { username: "xyz" , password: "1234"},
    { username: "nop" , password: "1234"},
  ])
}

