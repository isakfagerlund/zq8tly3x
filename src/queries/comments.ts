import { db } from '../db/db';
import { buildCommentTree } from '../utils/buildCommentTree';

export async function addComment(content: string, parentId?: number) {
  const newComment = await db.comments.add({
    content,
    createdAt: new Date(),
    updatedAt: new Date(),
    parentId,
  });

  return newComment;
}

export async function addChildComment(content: string, parentId: number) {
  const newComment = await addComment(content, parentId);

  return newComment;
}

export async function getCommentsWithChildren() {
  const comments = await db.comments.toArray();

  return buildCommentTree(comments);
}

export async function deleteComment(id: number) {
  await db.comments.delete(id);
}
