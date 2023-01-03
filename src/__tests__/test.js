import orderByProps from '../index';

describe('Check function orderByProps', () => {
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  test('Check correct sort', () => {
    const expectedResult = [
      { key: 'name', value: 'мечник' },
      { key: 'level', value: 2 },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
    ];
    expect(orderByProps(obj, ['name', 'level'])).toEqual(expectedResult);
  });
  test('Check empty array', () => {
    const expectedResult = [
      { key: 'name', value: 'мечник' },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
      { key: 'level', value: 2 },
    ];
    expect(orderByProps(obj, [])).toEqual(expectedResult);
  });
});
