import TodoList from "./model/todolist";
import { faker } from '@faker-js/faker';

const createRandomUser = (): TodoList => {
  return {
    id: faker.string.uuid(),
    title: faker.lorem.word(),
    description: faker.lorem.word(),
    state: faker.number.int({min: 1, max: 4}),
    is_favorite: faker.datatype.boolean(),
    created_at: faker.date.anytime().toISOString(),
    latitude: faker.location.latitude(),
    longitude: faker.location.longitude()
  };
}

const generateRandomDataset = (size: number): TodoList[] => {
  return faker.helpers.multiple(createRandomUser, {
    count: size,
  });

}


export { generateRandomDataset }
