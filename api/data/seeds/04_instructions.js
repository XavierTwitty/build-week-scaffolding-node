exports.seed = function (knex) {
  return knex('instructions').insert([
    { instruction_text: 'Slice cheese' , step_number: 1, recipe_id:1},
    { instruction_text: 'Chop fruit', step_number: 1, recipe_id:2},
    { instruction_text: 'pour milk on ice ', step_number: 1, recipe_id:3},
    { instruction_text: 'Wash off vegstables', step_number: 1, recipe_id:4},
  ])
}
