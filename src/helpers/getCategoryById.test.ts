import { getCategoryById } from './getCategoryById';

describe('getCategoryById', () => {
  const mockCategories = [
    {
      id: '1',
      title: 'Category 1',
      subtitle: 'Subtitle 1',
      src: 'src1',
    },
    {
      id: '2',
      title: 'Category 2',
      subtitle: 'Subtitle 2',
      src: 'src2',
    },
    {
      id: '3',
      title: 'Category 3',
      subtitle: 'Subtitle 3',
      src: 'src3',
    },
  ];

  it('should return the correct result', () => {
    expect(getCategoryById(1, mockCategories)).toBe('Category 1');
    expect(getCategoryById(2, mockCategories)).toBe('Category 2');
    expect(getCategoryById(3, mockCategories)).toBe('Category 3');
  });

  it('should return "Unknown Category" if id - invalid', () => {
    expect(getCategoryById(4, mockCategories)).toBe('Unknown Category');
    expect(getCategoryById(0, mockCategories)).toBe('Unknown Category');
    expect(getCategoryById(-1, mockCategories)).toBe('Unknown Category');
  });

  it('should return "Unknown Category" if categories is empty', () => {
    expect(getCategoryById(1, [])).toBe('Unknown Category');
  });
});
