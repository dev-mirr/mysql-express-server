import randomString from 'random-string'

import {
  uuid
} from '../../utils/uuid'
import models from '../../models'

afterAll(() => models.sequelize.close())

test('Should to print ordered UUI', () => {
  const orderedUUID = uuid()

  expect(orderedUUID)
    .toMatch(/\b4[0-9A-Fa-f]{31}\b/g)
})

test('Should be create user model for create uuid model', async () => {
  const user = await models.User.create({
    email: `${randomString()}@test.com`,
    password: '1111'
  })

  expect(user.uuid).toMatch(/\b4[0-9A-Fa-f]{31}\b/g)
})