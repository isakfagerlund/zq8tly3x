import { expect, test } from 'vitest';
import { buildCommentTree } from '../buildCommentTree';
import { Comment } from '../../db/model';

const commentTestData = [
  {
    id: 1,
    content: 'Test comment 1',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    content: 'Test comment 2',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 3,
    content: 'Test comment 3',
    createdAt: new Date(),
    updatedAt: new Date(),
    parentId: 1,
  },
] satisfies Comment[];

test('returns new list with children comments as children', () => {
  const commentTree = buildCommentTree(commentTestData);
  const firstCommentWithChildren = {
    ...commentTestData[0],
    childComments: [commentTestData[2]],
  };

  expect(commentTree.length).toBe(2);
  expect(commentTree[0]).toStrictEqual(firstCommentWithChildren);
});

test('returns empty list if there is no parents', () => {
  const commentTree = buildCommentTree([commentTestData[2]]);

  expect(commentTree.length).toBe(0);
});
