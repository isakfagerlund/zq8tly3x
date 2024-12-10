import { Comment } from '../db/model';

export function buildCommentTree(comments: Comment[]) {
  const commentMap = new Map<number, Comment & { childComments?: Comment[] }>();

  for (const comment of comments) {
    commentMap.set(comment.id, { ...comment, childComments: [] });
  }

  const combinedComments: Comment[] = [];

  for (const comment of comments) {
    if (comment.parentId) {
      // Get the actual parent from map
      const parent = commentMap.get(comment.parentId);

      // Check if parent still exists
      if (parent) {
        parent!.childComments!.push(commentMap.get(comment.id)!);
      }
    } else {
      combinedComments.push(commentMap.get(comment.id)!);
    }
  }

  return combinedComments;
}
