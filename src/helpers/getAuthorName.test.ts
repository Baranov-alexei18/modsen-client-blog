import { getAuthorName } from './getAuthorName';

describe('getAuthorName', () => {
  const mockAuthors = [
    { authorId: 1, name: 'Alexei' },
    { authorId: 2, name: 'Jhon' },
    { authorId: 3, name: 'Remmi' },
  ];

  it('should return the correct result', () => {
    expect(getAuthorName(1, mockAuthors)).toBe('Alexei');
    expect(getAuthorName(2, mockAuthors)).toBe('Jhon');
    expect(getAuthorName(3, mockAuthors)).toBe('Remmi');
  });

  it('should return "Unknown Author" if id - invalid', () => {
    expect(getAuthorName(4, mockAuthors)).toBe('Unknown Author');
    expect(getAuthorName(0, mockAuthors)).toBe('Unknown Author');
    expect(getAuthorName(-1, mockAuthors)).toBe('Unknown Author');
  });

  it('should return "Unknown Author" if categories is empty', () => {
    expect(getAuthorName(1, [])).toBe('Unknown Author');
  });
});
