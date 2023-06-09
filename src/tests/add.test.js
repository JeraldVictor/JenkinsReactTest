import { add, sub } from "../functions/add"

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('adds 1 + string to equal concatination', () => {
  expect(add(1, 'aaaa')).toBe('1aaaa');
});
test('sub 1 - 2 to equal -1', () => {
  expect(sub(1, 2)).toBe(-1);
});

test('adds 1 - string to equal NAN', () => {
  expect(sub(1, 'aaaa')).toBe(NaN);
});
