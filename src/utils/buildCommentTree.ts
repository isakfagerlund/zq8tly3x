import { Comment } from '../db/model';

export function buildCommentTree(comments: Comment[]) {
  const parentComments: Comment[] = [];
  const childrenComments: Comment[] = [];

  for (const comment of comments) {
    if (comment.parentId) {
      childrenComments.push(comment);
    } else {
      parentComments.push(comment);
    }
  }

  const combinedComments = parentComments.map((comment) => {
    const children = childrenComments.filter((c) => c.parentId === comment.id);

    if (children.length > 0) {
      return { ...comment, childComments: children };
    } else {
      return comment;
    }
  });

  return combinedComments;
}
