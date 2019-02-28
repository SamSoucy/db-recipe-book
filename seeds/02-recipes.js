
exports.seed = function(knex, Promise) {
  return knex('recipes')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'pepperoni pizza', dish_id: 1},
        {name: "vegie berger", dish_id: 2},
        {name: "vegie fajitas", dish_id: 3}
      ]);
    });
};
