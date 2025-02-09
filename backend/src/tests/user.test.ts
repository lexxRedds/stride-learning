import request from 'supertest';
import app from '../app';

describe('GET /api/users/:id', () => {
  test('should return user details', async () => {
    const response = await request(app).get('/api/users/1');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id');
  });
});