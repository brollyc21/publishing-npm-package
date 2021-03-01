import pooper from '../src';

describe('Test', () => {
  it('should poop 3 times', () => {
    expect(pooper(1, 2)).toBe('💩💩💩');
  });
});