
exports.seed = function(knex, Promise) {
  return knex('dishes')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        {name: 'Pizza'},
        {name: 'Burgers'},
        {name: 'Fajitas'}
      ]);
    });
};
