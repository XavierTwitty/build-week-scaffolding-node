exports.seed = function (knex) {
  return knex('ingredients').insert([
    { ingredient_name: 'Cheese' , quantity: 2},
    { ingredient_name: 'Strawberries', quantity: 4.5},
    { ingredient_name: 'Milk', quantity: .3},
    { ingredient_name: 'Tomato', quantity: 1.8},
  ])
}