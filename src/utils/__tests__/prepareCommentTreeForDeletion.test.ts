import { expect, test } from 'vitest';
import { commentTestData } from './commentTestData';
import { prepareCommentTreeForDeletion } from '../prepareCommentTreeForDeletion';

test('returns list of all children to delete', () => {
  const childrenToDelete = prepareCommentTreeForDeletion(1, commentTestData);

  expect(childrenToDelete.length).toBe(2);
  expect(childrenToDelete).not.includes(2);
  expect(childrenToDelete).includes(3);
  expect(childrenToDelete).includes(4);
});

test('returns list of all children when a child is the parent', () => {
  const childrenToDelete = prepareCommentTreeForDeletion(3, commentTestData);

  expect(childrenToDelete.length).toBe(1);
});

test('only deletes the clicked child if its not a parent', () => {
  const childrenToDelete = prepareCommentTreeForDeletion(4, commentTestData);

  console.log(childrenToDelete);

  expect(childrenToDelete.length).toBe(0);
});
