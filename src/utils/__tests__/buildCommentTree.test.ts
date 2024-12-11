import { expect, test } from 'vitest';
import { buildCommentTree } from '../buildCommentTree';
import { commentTestData } from './commentTestData';

test('returns new list with children comments as children', () => {
  const commentTree = buildCommentTree(commentTestData);

  expect(commentTree.length).toBe(2);
  expect(commentTree[0].content).toBe('Test comment 1');
  expect(commentTree[0].childComments[0].content).toBe('Test comment 3');
});

test('returns correct list of sub-children', () => {
  const commentTree = buildCommentTree(commentTestData);

  expect(commentTree[0]?.childComments[0].childComments.length).toBe(1);
});

test('returns empty list if there is no parents', () => {
  const commentTree = buildCommentTree([commentTestData[2]]);

  expect(commentTree.length).toBe(0);
});
