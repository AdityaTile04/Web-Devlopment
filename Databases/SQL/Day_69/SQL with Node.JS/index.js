const { faker } = require("@faker-js/faker");

const randomUser = () => {
  return {
    id: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
};

console.log(randomUser());
