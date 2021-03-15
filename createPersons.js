const faker = require("faker");

module.exports = async function genPerson(i) {
  return {
    id: i,
    name: faker.name.findName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
    age: faker.random.number(100),
    address: {
      address_line_1: faker.address.streetAddress(),
      address_line_2: faker.address.secondaryAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipcode: faker.address.zipCodeByState(),
    },
  };
};
