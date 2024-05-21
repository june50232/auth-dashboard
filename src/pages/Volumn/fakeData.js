const { faker } = require('@faker-js/faker');

const createRandomUser = () => {
  return {
    id: faker.string.alpha(10),
    name: faker.company.name(),
    time: faker.date.anytime(),
    status: faker.helpers.arrayElement(['1', '2', '3']),
    light: faker.number.int({ min: 100000, max: 1000000 }),
    wind: faker.number.int({ min: 100000, max: 1000000 }),
    dash: faker.number.int({ min: 100000, max: 1000000 }),
    dashTotal: faker.number.int({ min: 1000000, max: 10000000 }),
    rest: faker.number.int({ min: 1000, max: 100000 }),
    total: faker.number.int({ min: 1000000, max: 10000000 }),
    lightPerc: faker.number.int({ min: 10, max: 100 }),
    windPerc: faker.number.int({ min: 10, max: 100 }),
    dashPerc: faker.number.int({ min: 10, max: 100 }),
  };
}

const generateData = (count) => faker.helpers.multiple(createRandomUser, {
  count,
});

const totalPage = 5

const fakeData = {
  totalPage,
  generateData,
}

export default fakeData