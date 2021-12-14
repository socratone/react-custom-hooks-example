import { number } from './validations';

describe('number', () => {
  it('0은 통과시킨다.', () => {
    expect(number(0)).toBe('');
  });

  it('숫자는 통과시킨다.', () => {
    for (let i = -9999; i < 9999; i += 777) {
      expect(number(i)).toBe('');
    }
  });

  it('문자는 통과시키지 않는다.', () => {
    expect(number('abc')).not.toBe('');
  });
});
