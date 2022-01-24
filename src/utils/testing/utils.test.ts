import { generateActionTypes } from '../generic-redux';
import paginate from '../pagination.utils';
import { isEmptySting, parseSearchUrl } from '../string.utils';

test('Test generateActionTypes', () => {
  const root = 'TEST/';
  const prefix = 'THIS_IS_A_TEST';

  expect(generateActionTypes(root, prefix).request).toBe('TEST/THIS_IS_A_TEST_REQUEST');
});

test('Test paginate', () => {
  const array = new Array(120).fill(0);

  expect(paginate(array, 1, 10).results.length).toBe(10);
  expect(paginate(array, 6, 20).totalPages).toBe(6);
});
test('Test isEmptySting', () => {
  const string1 = 'string';
  const string2 = '';

  expect(isEmptySting(string1)).toBeFalsy();
  expect(isEmptySting(string2)).toBeTruthy();
});

test('Test parseSearchUrl', () => {
  const string = '?search=solar&type=indoor&limit=10';

  expect(parseSearchUrl(string).search).toBe('solar');
});
