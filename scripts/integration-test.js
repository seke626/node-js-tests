const request = require('supertest');
const app = require('../app');
const db = require('../db');

beforeAll(async () => {
  // Connect to test database
  await db.connect();
});

afterAll(async () => {
  // Close database connection
  await db.close();
});

describe('POST /api/users', () => {
  it('creates a new user', async () => {
    const userData = { name: 'Test User', email: 'test@example.com' };
    const response = await request(app)
      .post('/api/users')
      .send(userData);
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('user');
    expect(response.body.user.name).toBe(userData.name);
    expect(response.body.user.email).toBe(userData.email);
  });
});