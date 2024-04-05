const axios = require('axios');
const { getUser } = require('../services');

jest.mock('axios');

describe('getUser function', () => {
  it('returns the user data', async () => {
    const userData = { id: 1, name: 'John Doe' };
    axios.get.mockResolvedValueOnce({ data: userData });

    const user = await getUser(1);
    expect(user).toEqual(userData);
  });
});