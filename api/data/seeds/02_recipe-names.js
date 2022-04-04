exports.seed = function (knex) {
  return knex('recipes').insert([
    { recipe_name: 'Prize Pizza' , source: 'Chef Rio', serves:'4 people', prep_time: 1 , cook_time: 2},
    { recipe_name: 'Fruit Salad', source: '',serves:'2 people', prep_time: 6 , cook_time: 4},
    { recipe_name: 'Ice Cream ', source: 'Google', serves:'1 people' ,prep_time: 2 , cook_time: 1},
    { recipe_name: 'Veggie Juice', source: 'Book', serves:'2 people',prep_time: 1 , cook_time: 2},
  ])
}

