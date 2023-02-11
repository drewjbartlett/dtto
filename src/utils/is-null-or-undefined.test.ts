import { isNullOrUndefined } from './is-null-or-undefined';

describe('isNullOrUndefined', () => {
  it('should return true when null', () => {
    expect(isNullOrUndefined(null)).toBe(true);
  });

  it('should return true when undefined', () => {
    let val;

    expect(isNullOrUndefined(val)).toBe(true);
  });

  it('should return false when not', () => {
    expect(isNullOrUndefined(true)).toBe(false);
    expect(isNullOrUndefined(false)).toBe(false);
    expect(isNullOrUndefined({})).toBe(false);
    expect(isNullOrUndefined('')).toBe(false);
    expect(isNullOrUndefined([])).toBe(false);
  });
});
