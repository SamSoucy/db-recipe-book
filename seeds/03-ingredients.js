
exports.seed = function(knex, Promise) {
  return knex('ingredients')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'pepperoni', recipe_id: 1},
        {name: 'hamberger meat', recipe_id: 2},
        {name: 'peppers', recipe_id: 3}
      ]);
    });
};
