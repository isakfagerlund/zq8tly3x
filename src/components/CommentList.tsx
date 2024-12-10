import { useLiveQuery } from 'dexie-react-hooks';
import { FormEvent, useState } from 'react';

import { addComment, getCommentsWithChildren } from '../queries/comments';
import { CommentItem } from './CommentItem';

export function CommentList() {
  const [newComment, setNewComment] = useState('');
  const comments = useLiveQuery(() => getCommentsWithChildren());

  const handleOnClick = async (e: FormEvent) => {
    e.preventDefault();

    await addComment(newComment);
    setNewComment('');
  };

  return (
    <div className="flex flex-col w-full max-w-[500px] gap-4">
      <div className="flex flex-col gap-4">
        {comments?.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </div>
      <form onSubmit={handleOnClick} className="flex flex-wrap w-full gap-2">
        <textarea
          className="border border-zinc-800 py-2 px-4 rounded-lg w-full"
          value={newComment}
          onChange={(event) => setNewComment(event.currentTarget.value)}
          placeholder="Add a comment"
          required
        ></textarea>
        <button className="bg-zinc-800 hover:bg-zinc-800/90 text-white py-2 px-4 rounded-lg w-full">
          Add a new comment
        </button>
      </form>
    </div>
  );
}
