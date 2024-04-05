const { fetchData } = require('../api');

describe('fetchData function', () => {
  it('fetches data successfully', async () => {
    const data = await fetchData();
    expect(data).toBeDefined();
    expect(Array.isArray(data)).toBe(true);
  });
});