import { snakeCase } from './snake-case';

describe('snakeCase', () => {
  it('should take a camelCase string and make it snake_case', () => {
    expect(snakeCase('camelCaseString')).toBe('camel_case_string');
  });

  it('should take a PascalCase string and make it snake_case', () => {
    expect(snakeCase('PascalCaseString')).toBe('pascal_case_string');
  });

  it('should take a spaced string and make it snake_case', () => {
    expect(snakeCase('Some Spaced String')).toBe('some_spaced_string');
  });

  it('should take a spaced kebab-case and make it snake_case', () => {
    expect(snakeCase('kebab-case-string')).toBe('kebab_case_string');
  });

  it('should take a spaced combination of strings and make it snake_case', () => {
    expect(snakeCase('kebab-caseString with spaces_inIt')).toBe('kebab_case_string_with_spaces_in_it');
  });
});
