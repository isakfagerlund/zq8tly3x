import { Comment } from '../../db/models';

export const commentTestData = [
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
