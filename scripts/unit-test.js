const { calculateTotal } = require('/utils');

describe('calculateTotal function', () => {
  it('returns the correct total', () => {
    const items = [10, 20, 30];
    expect(calculateTotal(items)).toBe(60);
  });
});