import { expect, test } from 'vitest';
import { buildCommentTree } from '../buildCommentTree';
import { Comment } from '../../db/models';

const commentTestData = [
  {
    id: 1,
    content: 'Test comment 1',
    createdAt: new Date(),
    updatedAt: new Date(),
    childComments: [],
  },
  {
    id: 2,
    content: 'Test comment 2',
    createdAt: new Date(),
    updatedAt: new Date(),
    childComments: [],
  },
  {
    id: 3,
    content: 'Test comment 3',
    createdAt: new Date(),
    updatedAt: new Date(),
    parentId: 1,
    childComments: [],
  },
  // Two Level deep child
  {
    id: 4,
    content: 'Test comment 4',
    createdAt: new Date(),
    updatedAt: new Date(),
    parentId: 3,
    childComments: [],
  },
] as const satisfies Comment[];

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
