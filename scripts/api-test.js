const request = require('supertest');
const app = require('../app');

describe('GET /api/users', () => {
  it('responds with JSON containing a list of all users', async () => {
    const response = await request(app).get('/api/users');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('users');
    expect(Array.isArray(response.body.users)).toBe(true);
  });
});