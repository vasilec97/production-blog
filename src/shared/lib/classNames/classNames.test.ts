import { classNames } from './classNames';

describe('classNames', () => {
  test('with only first argument', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with additional class', () => {
    expect(classNames('someClass', {}, ['class1'])).toBe('someClass class1');
  });

  test('with mods', () => {
    const expected = 'someClass hovered active';

    expect(classNames(
      'someClass',
      { hovered: true, active: true },
      [],
    )).toBe(expected);
  });

  test('with mods false', () => {
    const expected = 'someClass hovered';

    expect(classNames(
      'someClass',
      { hovered: true, active: false },
      [],
    )).toBe(expected);
  });

  test('with mods undefined', () => {
    const expected = 'someClass hovered';

    expect(classNames(
      'someClass',
      { hovered: true, active: undefined },
      [],
    )).toBe(expected);
  });
});
