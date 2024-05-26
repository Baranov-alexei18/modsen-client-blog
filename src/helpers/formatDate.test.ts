import { formatDate } from './formatDate';

describe('formatDate', () => {
  it('should return correct data', () => {
    expect(formatDate('2024-01-01')).toBe('Jan 1, 2024');
    expect(formatDate('2024-12-31')).toBe('Dec 31, 2024');
    expect(formatDate('2024-07-15')).toBe('Jul 15, 2024');
    expect(formatDate('2024-04-05')).toBe('Apr 5, 2024');
  });
});
