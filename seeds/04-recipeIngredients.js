
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipeIngredients')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipeIngredients').insert([
        {recipe_id: 1, ingredient_id: 1},
        {recipe_id: 2, ingredient_id: 2},
        {recipe_id: 3, ingredient_id: 3}
      ]);
    });
};
