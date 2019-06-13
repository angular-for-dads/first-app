/** @format */

const Chance = require('chance');
const chance = new Chance();

module.exports = () => {
  const data = { persons: [] };

  // Create 3 persons
  for (let i = 0; i < 3; i++) {
    data.persons.push({ id: chance.guid(), name: chance.name(), age: chance.age() });
  }

  return data;
};
