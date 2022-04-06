const db = require('../data/db-config')

function getAllUsers() { return db('users') }

function findby(filter) {
  return db('users as u')
    .select('u.user_id', 'u.username', 'u.password')
    .where(filter)
}


async function insertUser(user) {
  // WITH POSTGRES WE CAN PASS A "RETURNING ARRAY" AS 2ND ARGUMENT TO knex.insert/update
  // AND OBTAIN WHATEVER COLUMNS WE NEED FROM THE NEWLY CREATED/UPDATED RECORD
  const [newUserObject] = await db('users').insert(user, ['user_id', 'username', 'password'])
  return newUserObject // { user_id: 7, username: 'foo', password: 'xxxxxxx' }
}

module.exports = {
    getAllUsers,
    insertUser,
    findby
}