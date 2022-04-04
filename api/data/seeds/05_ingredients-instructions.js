exports.seed = function (knex) {
  return knex('ingredients_instructions').insert([
    { instruction_id: 1 , ingredient_id: 1},
    { instruction_id: 2 , ingredient_id: 2},
    { instruction_id: 3 , ingredient_id: 3},
    { instruction_id: 4 , ingredient_id: 4},
  ])
}

