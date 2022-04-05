const db = require('../data/db-config')


function getAll() {
    return db('recipes')
}

async function getById(){
	
    const rows = await db('recipes as r')
        .join('instructions as i', 'i.recipe_id ', 'r.recipe_id'  )
        .join('ingredients_instructions as instr', 'instr.instruction_id', 'i.instruction_id' )
        .join('ingredients as ing', 'ing.ingredient_id', 'instr.ingredient_id')
        .select(
            "r.recipe_id",
            'r.recipe_name', 
            'r.source',
            'r.serves',
            'r.prep_time',
            'r.cook_time',
            'instr.instruction_id',
            'i.instruction_text',
            'i.step_number',
            'ing.ingredient_id',
            'ing.ingredient_name',
            'ing.quantity'
        )
        .where('i.recipe_id', 1 )
        .orderBy('step_number')
    
     const result = {
        recipe_id: rows[0].recipe_id, 
        recipe_name: rows[0].recipe_name,
        instructions: rows.reduce((acc, row) => {
            if(!row.ingredient_id) {
                return acc.concat({
                    instruction_id: row.instruction_id,
                    step_number: row.step_number,
                    instruction_text: row.instruction_text
                })
            }
            if (row.ingredient_id && !acc.find(i => {i.ingredient_id === row.ingredient_id})) {
                return acc.concat({
                    instruction_id: row.instruction_id,
                    step_number: row.step_number,
                    instruction_text: row.instruction_text,
                    ingredients: [
                        {
                            ingredient_id: row.ingredient_id, 
                            ingredient_name: row.ingredient_name,
                            quantity: row.quantity
                        }
                    ]
                })
            }
          const currentStep = acc.find(i => { i.instruction_id === row.instruction_id })
          currentStep.ingredients.push({
            ingredient_id: row.ingredient_id, 
            ingredient_name: row.ingredient_name,
            quantity: row.quantity
          })
            return acc
        }, [])
     }
     return result
}

module.exports = {
    getAll,
    getById,
}