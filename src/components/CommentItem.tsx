import { useState } from 'react';
import { Comment } from '../db/model';
import { MessageSquareText, TrashIcon } from 'lucide-react';
import { deleteComment } from '../queries/comments';
import { ChildComments } from './ChildComments';

export function CommentItem({ comment }: { comment: Comment }) {
  const [showChildComments, setShowChildComments] = useState(false);

  return (
    <>
      <div className="border p-4 rounded-lg min-h-[50px] flex justify-between items-center group">
        <p key={comment.id}>{comment.content}</p>
        <div className="flex gap-2">
          <button
            onClick={() => setShowChildComments(!showChildComments)}
            className="border-zinc-200 flex gap-1 items-center rounded p-1 opacity-0 group-hover:opacity-100 transition-opacity group"
          >
            <span>{comment?.childComments?.length}</span>
            <MessageSquareText className="size-4 transition-opacity" />
          </button>
          <button className="border-zinc-200 rounded p-1 opacity-0 group-hover:opacity-100 transition-opacity group">
            <TrashIcon
              onClick={() => deleteComment(comment.id)}
              className="stroke-red-400 size-4 transition-opacity"
            />
          </button>
        </div>
      </div>
      {showChildComments ? (
        <ChildComments
          childComments={comment.childComments}
          parentId={comment.id}
        />
      ) : null}
    </>
  );
}
