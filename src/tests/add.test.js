import { add } from "../functions/add"

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('adds 1 + string to equal NAN', () => {
  expect(add(1, 'aaaa')).toBe('1aaaa');
});
